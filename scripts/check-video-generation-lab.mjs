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
    if (typeof field === 'string' && /^(?:videoUrl|poster|imageUrl|coverImage|screenshot)$/.test(key) && field.startsWith('/')) localAssets.add(field);
    visit(field);
  }
};
visit(data);
for (const url of localAssets) await access(path.join(root, 'public', url));
for (const row of data.comparison.rows) assert.equal(row.values.length, data.comparison.columns.length, `비교 열 불일치: ${row.label}`);
assert.equal(data.accounts.length, 2);
assert.equal(data.remix.runs.length, 3);
assert(data.cases.filter(({ kind }) => kind === 'video-set').length >= 5);
assert(data.technical.h3.postTraining.length >= 5);
assert(data.technical.wan.unknowns.length > 0, 'Wan 최신 모델의 미공개 범위를 명시해야 합니다.');
const budget = data.remix.budget;
assert(budget.chargedUsd >= 0 && budget.chargedUsd <= budget.limitUsd && budget.limitUsd <= 20, '실험 예산 초과');
assert(Math.abs(data.remix.runs.reduce((sum, run) => sum + run.estimatedUsd, 0) - budget.estimatedUsd) < 0.0001, '모델별 예상액 합계 불일치');
assert(Math.abs(data.remix.runs.reduce((sum, run) => sum + run.chargedUsd, 0) - budget.chargedUsd) < 0.0001, '모델별 실제 청구 합계 불일치');
for (const run of data.remix.runs) {
  if (run.status === '입력 대기') assert(!run.videoUrl && run.chargedUsd === 0, '미제출 실험은 결과·과금을 표시할 수 없습니다.');
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
