import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// The article, searchable reference, and downloadable document share one source.
// Run with --check to verify that the committed download is up to date.
const root = new URL('../', import.meta.url);
const report = JSON.parse(await readFile(new URL('src/data/state-of-ai-2026.json', root), 'utf8'));
const { meta, editorial, homepageHighlights, stories, sections, slides, predictions, sources } = report;
const provenance = JSON.parse(await readFile(new URL('public/assets/reports/state-of-ai-2026/provenance.json', root), 'utf8'));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const pageUrl = (page) => `${meta.pdfUrl}#page=${page}`;
const validPage = (page) => Number.isInteger(page) && page >= 1 && page <= meta.slideCount;
assert(slides.length === meta.slideCount, `Expected ${meta.slideCount} slide notes, received ${slides.length}`);
assert(new Set(stories.map((story) => story.id)).size === stories.length, 'Duplicate story IDs');
assert(predictions.length === 9, 'The report has exactly nine predictions');
for (const [index, slide] of slides.entries()) {
  assert(slide.page === index + 1, `Missing, duplicate or unordered PDF page ${index + 1}`);
  assert(slide.title?.trim() && slide.summary?.trim(), `Empty note on PDF page ${slide.page}`);
  const section = sections.find((item) => slide.page >= item.start && slide.page <= item.end);
  assert(section && section.id === slide.section, `Section mismatch on PDF page ${slide.page}`);
}
for (const story of stories) {
  assert(story.bullets?.length >= 3 && story.bullets.length <= 5 && story.bullets.every((bullet) => bullet.trim()), `Missing concise bullet summary in ${story.id}`);
  for (const item of [...story.evidence, ...story.charts]) assert(validPage(item.page), `Invalid page in ${story.id}`);
  for (const chart of story.charts) {
    assert(chart.alt?.trim() && chart.caption?.trim(), `Missing chart description in ${story.id}`);
    assert(chart.src.startsWith('/assets/reports/state-of-ai-2026/'), 'Unexpected chart directory');
    await access(new URL(`public${chart.src}`, root));
  }
}
const chartPages = new Set(stories.flatMap((story) => story.charts.map((chart) => chart.page)));
assert(homepageHighlights.pages.length === 18 && new Set(homepageHighlights.pages).size === 18, 'The official homepage highlights 18 distinct slides');
const auditedPages = provenance.homepageHighlights.figures.map((figure) => figure.pdfPage);
assert(JSON.stringify(homepageHighlights.pages) === JSON.stringify(auditedPages), 'Homepage highlights differ from the recorded source audit');
for (const figure of provenance.homepageHighlights.figures) {
  assert(chartPages.has(figure.pdfPage), `Missing official homepage slide PDF p.${figure.pdfPage}`);
  const story = stories.find((item) => item.id === figure.storyId);
  const chart = story?.charts.find((item) => item.page === figure.pdfPage);
  const asset = provenance.charts.find((item) => item.pdfPage === figure.pdfPage);
  assert(chart && asset && chart.src === `/assets/reports/state-of-ai-2026/${asset.asset}`, `Homepage slide PDF p.${figure.pdfPage} has an incorrect story or image`);
}
assert(meta.coverAlt?.trim() && provenance.homepageCover.pdfPage === 1 && meta.coverImage === `/assets/reports/state-of-ai-2026/${provenance.homepageCover.asset}`, 'Missing original report cover or accessible description');
await access(new URL(`public${meta.coverImage}`, root));

const lines = [
  `# ${meta.title}`, '', meta.subtitle, '',
  `- 원저자: ${meta.author}`,
  `- 보고서 공개: ${meta.reportDate} · 한국어 정리: 수도리무브, ${meta.date}`,
  `- 전체 분량: PDF ${meta.slideCount}장 · 이야기 ${stories.length}개`,
  `- 공식 메인 페이지 선정 장표: ${homepageHighlights.pages.length}개 모두 수록 · 대조일 ${homepageHighlights.checkedAt}`,
  `- [공식 홈페이지](${meta.reportUrl}) · [전체 PDF](${meta.pdfUrl})`,
  '- [스토리별 웹 해설](https://sudoremove.com/knowledge/articles/state-of-ai-2026/) · [검색 가능한 전체 참고 문서](https://sudoremove.com/knowledge/articles/state-of-ai-2026/reference/)',
  '', '## 읽는 기준과 출처', '',
  ...editorial.readingNotes.map((note) => `- ${note}`), '',
  `원본 PDF SHA-256: \`${meta.sourceSha256}\``, '',
  `라이선스: [CC BY 4.0](${meta.licenseUrl}). 아래 한국어 요약과 해석은 원저자의 문장을 그대로 번역한 전문이 아닌 수도리무브의 정리입니다.`, '',
  '## 이야기 목차', '',
  ...stories.map((story, index) => `${index + 1}. ${story.label}: ${story.title}`), '',
];
for (const story of stories) {
  lines.push(`## ${story.label} — ${story.title}`, '', story.thesis, '', '### 핵심 요약', '', ...story.bullets.map((bullet) => `- ${bullet}`), '', '### 배경 설명', '', ...story.paragraphs.flatMap((text) => [text, '']), '### 핵심 수치', '');
  for (const item of story.evidence) lines.push(`- **${item.value} · ${item.label}**: ${item.detail} [PDF p.${item.page}](${pageUrl(item.page)})`);
  lines.push('', '### 주요 그래프', '');
  for (const chart of story.charts) {
    lines.push(`#### ${chart.title}${homepageHighlights.pages.includes(chart.page) ? ' · 공식 메인 선정' : ''}`, '', `![${chart.alt}](https://sudoremove.com${chart.src})`, '', chart.caption, '', `읽을 때 주의할 점: ${chart.caveat ?? '보고서의 측정 조건을 확인하세요.'}`, '', `원문: [State of AI Report 2026 · PDF p.${chart.page}](${pageUrl(chart.page)}). © 2026 Air Street Capital Management Ltd. / CC BY 4.0. PDF 추출·WebP 변환: 수도리무브.`, '');
  }
  lines.push('### 함께 이야기할 질문', '', ...story.questions.map((question) => `- ${question}`), '', `편집 해석: ${story.takeaway}`, '', ...story.sourceLinks.map((source) => `- [${source.label}](${source.url.startsWith('/') ? 'https://sudoremove.com' + source.url : source.url})`), '');
}
lines.push('## 다음 12개월의 예측 9개', '', '아래는 보고서 저자의 예측이며 현재 사실이 아닙니다. 원문: [PDF p.239](' + pageUrl(239) + ')', '', ...predictions.map((item) => `${item.number}. ${item.text}`), '', '## 전체 슬라이드 참고 노트', '');
for (const section of sections) {
  lines.push(`### ${section.label} · PDF p.${section.start}–${section.end}`, '');
  for (const slide of slides.filter((item) => item.section === section.id)) {
    lines.push(`#### PDF p.${slide.page} — ${slide.title}`, '', slide.summary, '');
    if (slide.caveat) lines.push(`해석 메모: ${slide.caveat}`, '');
    lines.push(`[원본 PDF p.${slide.page}](${pageUrl(slide.page)})`, '', ...slide.links.map((source) => `- [${source.label}](${source.url})`));
    if (slide.links.length) lines.push('');
  }
}
lines.push('## 원문·원자료·외부 해설', '');
for (const source of sources) lines.push(`- **${source.type}** · [${source.title}](${source.url}) · ${source.publisher} · ${source.date}\n  ${source.note}`);
lines.push('');
const content = lines.join('\n');
const destination = new URL(`public${meta.referenceDownload}`, root);
if (process.argv.includes('--check')) {
  assert(await readFile(destination, 'utf8') === content, 'Reference download is stale; run node scripts/generate-state-of-ai-2026-reference.mjs');
  console.log(`Verified ${slides.length} consecutive page notes, ${stories.length} bullet summaries, all ${homepageHighlights.pages.length} homepage highlights, chart assets, and generated Markdown.`);
} else {
  await writeFile(destination, content);
  console.log(`Generated ${fileURLToPath(destination)} (${slides.length} page notes).`);
}
