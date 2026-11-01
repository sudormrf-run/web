import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(await readFile(path.join(root, 'src/data/video-generation-lab.json'), 'utf8'));
const sourceIds = new Set(data.sources.map(({ id }) => id));
assert.equal(sourceIds.size, data.sources.length, '출처 ID가 중복되었습니다.');
const localAssets = new Set();
const visit = (value) => {
  if (Array.isArray(value)) return value.forEach(visit);
  if (!value || typeof value !== 'object') return;
  for (const id of value.sourceIds ?? []) assert(sourceIds.has(id), `존재하지 않는 출처: ${id}`);
  for (const [key, field] of Object.entries(value)) {
    if (typeof field === 'string' && /^(?:videoUrl|poster|imageUrl|coverImage|screenshot|receiptUrl)$/.test(key) && field.startsWith('/')) localAssets.add(field);
    visit(field);
  }
};
visit(data);
for (const url of localAssets) await access(path.join(root, 'public', url));
for (const row of data.comparison.rows) assert.equal(row.values.length, data.comparison.columns.length, `비교 열 불일치: ${row.label}`);
assert.equal(data.accounts.length, 2);
assert.equal(data.remix.runs.length, 4);
assert.deepEqual(new Set(data.remix.runs.map(({ modelId }) => modelId)), new Set(['wan-3.0', 'seedance-2.5', 'minimax-h3', 'sume-remix']));
assert(data.cases.filter(({ kind }) => kind === 'video-set').length >= 5);
assert(data.technical.h3.postTraining.length >= 5);
assert(data.technical.wan.unknowns.length > 0, 'Wan 최신 모델의 미공개 범위를 명시해야 합니다.');
const budget = data.remix.budget;
assert(budget.chargedUsd >= 0 && budget.chargedUsd <= budget.limitUsd && budget.limitUsd <= 20, '실험 예산 초과');
assert(Math.abs(data.remix.runs.reduce((sum, run) => sum + run.estimatedUsd, 0) - budget.estimatedUsd) < 0.0001, '모델별 예상액 합계 불일치');
assert(Math.abs(data.remix.runs.reduce((sum, run) => sum + run.chargedUsd, 0) - budget.chargedUsd) < 0.0001, '모델별 실제 청구 합계 불일치');
for (const run of data.remix.runs) {
  for (const key of ['estimatedUsd', 'chargedUsd']) assert(Number.isFinite(run[key]) && run[key] >= 0, `유효하지 않은 비용: ${run.modelId}/${key}`);
  if (run.status === '완료') assert(run.videoUrl && run.poster && run.jobId, `완료된 실험의 영상·포스터·작업 ID 누락: ${run.modelId}`);
  if (run.status === '실패') assert(run.error && !run.videoUrl, `실패한 실험의 오류/결과 표시 불일치: ${run.modelId}`);
  if (run.status === '입력 대기') assert(!run.videoUrl && run.chargedUsd === 0, '미제출 실험은 결과·과금을 표시할 수 없습니다.');
}
assert.equal(data.remix.receiptUrl, '/assets/articles/video-generation-lab/remix-receipts.json');
const receipt = JSON.parse(await readFile(path.join(root, 'public', data.remix.receiptUrl), 'utf8'));
assert.equal(receipt.runs.length, data.remix.runs.length, '비용 기록의 실험 개수 불일치');
assert.deepEqual(new Set(receipt.runs.map(({ id }) => id)), new Set(data.remix.runs.map(({ modelId }) => modelId)), '비용 기록의 모델 ID 불일치');
const sameAmount = (actual, expected, message) => assert(Number.isFinite(actual) && Number.isFinite(expected) && Math.abs(actual - expected) < 0.0001, message);
sameAmount(receipt.limitUsd, budget.limitUsd, '비용 기록의 예산 상한 불일치');
sameAmount(receipt.plannedUsd, budget.estimatedUsd, '비용 기록의 계획액 불일치');
sameAmount(receipt.totalChargedUsd, budget.chargedUsd, '비용 기록의 총 청구액 불일치');
sameAmount(receipt.runs.reduce((sum, run) => sum + run.chargedUsd, 0), receipt.totalChargedUsd, '비용 기록의 청구액 합계 불일치');
const verifyRemixAsset = async (asset, urlKey, label) => {
  assert(asset[urlKey]?.startsWith('/assets/articles/video-generation-lab/'), `실험 자산의 로컬 경로 누락: ${label}`);
  const bytes = await readFile(path.join(root, 'public', asset[urlKey]));
  assert.equal(bytes.length, asset.bytes, `실험 자산 크기 불일치: ${label}`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, `실험 자산 체크섬 불일치: ${label}`);
};
for (const recorded of receipt.runs) {
  const run = data.remix.runs.find(({ modelId }) => modelId === recorded.id);
  assert.equal(recorded.billing.final, true, `미확정 청구: ${recorded.id}`);
  const { captured_usd_cents: captured, refunded_usd_cents: refunded } = recorded.billing;
  assert(Number.isInteger(captured) && Number.isInteger(refunded) && captured >= refunded && refunded >= 0, `유효하지 않은 확정 청구: ${recorded.id}`);
  sameAmount(recorded.chargedUsd, (captured - refunded) / 100, `확정 청구 계산 불일치: ${recorded.id}`);
  sameAmount(recorded.chargedUsd, run.chargedUsd, `페이지와 실제 청구액 불일치: ${recorded.id}`);
  sameAmount(recorded.plannedUsd, run.estimatedUsd, `페이지와 계획액 불일치: ${recorded.id}`);
  assert.equal(recorded.jobId, run.jobId, `작업 ID 불일치: ${recorded.id}`);
  assert(Number.isFinite(recorded.elapsedSeconds) && recorded.elapsedSeconds >= 0, `유효하지 않은 처리 시간: ${recorded.id}`);
  sameAmount(recorded.elapsedSeconds, run.elapsedSeconds, `처리 시간 불일치: ${recorded.id}`);
  const request = recorded.request;
  assert.equal(request.duration, 5, `공통 요청 길이 불일치: ${recorded.id}`);
  assert.equal(request.resolution, run.resolution, `표시 해상도와 요청 불일치: ${recorded.id}`);
  if (recorded.id === 'sume-remix') {
    assert.equal(request.video_url, receipt.inputs.motion.public_url, 'Remix 동작 입력 불일치');
    assert.deepEqual(request.image_urls, [receipt.inputs.portrait.public_url], 'Remix 인물 입력 불일치');
  } else {
    assert.equal(request.model, recorded.id, `요청 모델 불일치: ${recorded.id}`);
    assert.equal(request.prompt, data.remix.sharedPrompt, `공통 프롬프트 불일치: ${recorded.id}`);
    assert.equal(request.aspect_ratio, '9:16', `공통 요청 비율 불일치: ${recorded.id}`);
    assert.deepEqual(request.reference_video_urls, [receipt.inputs.motion.public_url], `동작 입력 불일치: ${recorded.id}`);
    assert.deepEqual(request.reference_image_urls, [receipt.inputs.portrait.public_url], `인물 입력 불일치: ${recorded.id}`);
  }
  if (recorded.status === 'completed') {
    assert.equal(run.status, '완료');
    assert.equal(recorded.output.videoUrl, run.videoUrl, `결과 영상 연결 불일치: ${recorded.id}`);
    assert.equal(recorded.poster.imageUrl, run.poster, `결과 포스터 연결 불일치: ${recorded.id}`);
    assert(Number.isInteger(recorded.output.width) && recorded.output.width > 0 && Number.isInteger(recorded.output.height) && recorded.output.height > recorded.output.width, `세로 출력 크기 불일치: ${recorded.id}`);
    await verifyRemixAsset(recorded.output, 'videoUrl', recorded.id);
    await verifyRemixAsset(recorded.poster, 'imageUrl', `${recorded.id}/poster`);
  } else {
    assert(['failed', 'cancelled', 'canceled'].includes(recorded.status), `미종결 실험: ${recorded.id}`);
    assert.equal(run.status, '실패');
    assert(recorded.error && run.error && !recorded.output && !run.videoUrl, `실패 기록/결과 불일치: ${recorded.id}`);
  }
}
const counters = JSON.parse(await readFile(path.join(root, 'public/assets/articles/video-generation-lab/instagram-counters.json'), 'utf8'));
for (const channel of counters.rawCounters) {
  const reels = new Map(channel.reels.map((reel) => [reel.url, reel.label]));
  const sum = [...reels.values()].reduce((total, label) => {
    const match = label.replaceAll(',', '').trim().match(/^([\d.]+)([KM]?)$/i);
    assert(match, `조회수 표시 해석 실패: ${label}`);
    const multiplier = { '': 1, K: 1000, M: 1000000 }[match[2].toUpperCase()];
    return total + Math.round(Number(match[1]) * multiplier);
  }, 0);
  const published = counters.channels.find(({ handle }) => handle === channel.handle);
  assert.equal(reels.size, published.reels, `릴스 개수 불일치: ${channel.handle}`);
  assert.equal(sum, published.displayedViewSum, `조회수 합계 불일치: ${channel.handle}`);
  const account = data.accounts.find(({ handle }) => handle === `@${channel.handle}`);
  assert.equal(account.metrics[0].value, published.followers.toLocaleString('en-US'));
  assert.equal(account.metrics[1].value, String(reels.size));
  assert.equal(account.metrics[2].value, `약 ${sum.toLocaleString('en-US')}`);
}
const previews = JSON.parse(await readFile(path.join(root, 'public/assets/articles/video-generation-lab/comparison-posters-provenance.json'), 'utf8'));
for (const preview of previews.posters) {
  const bytes = await readFile(path.join(root, 'public/assets/articles/video-generation-lab', preview.outputFilename));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), preview.sha256);
  const video = data.cases.find(({ id }) => id === preview.caseId).videos[preview.modelIndex];
  assert.equal(video.videoUrl, preview.videoUrl);
  assert.equal(video.model, preview.model);
}
for (const file of ['instagram-provenance.json', 'production-provenance.json']) {
  const directory = path.join(root, 'public/assets/articles/video-generation-lab');
  const provenance = JSON.parse(await readFile(path.join(directory, file), 'utf8'));
  for (const asset of provenance.assets) {
    const name = asset.file ?? `${asset.filename}.mp4`;
    // Instagram provenance also documents source screenshots not all published here.
    if (file.startsWith('instagram') && !localAssets.has(`/assets/articles/video-generation-lab/${name}`)) continue;
    const bytes = await readFile(path.join(directory, name));
    assert.equal(bytes.length, asset.bytes, `파일 크기 불일치: ${name}`);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, `체크섬 불일치: ${name}`);
  }
}
console.log(`영상 노트 검증 통과: ${data.cases.length}개 사례, ${data.sources.length}개 출처, ${localAssets.size}개 로컬 자산, 청구 $${budget.chargedUsd.toFixed(2)}`);
