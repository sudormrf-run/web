# Media Page Architecture

미디어 페이지(`src/pages/media/index.astro`, `src/pages/en/media/index.astro`)와 홈 미디어 섹션(`src/components/home/HomeMediaSection.astro`)을 중심으로 한 구현 지도입니다.

> Last checked against code: 2026-05-03

## Purpose

미디어 영역은 YouTube/AI 뉴스, 팟캐스트 라이브러리, AI 데일리 뉴스, 발표 자료, 자료 창고, 에세이 링크를 한곳에 모아 보여주는 정적 Astro 페이지입니다. 팟캐스트는 `podcasts` Content Collection과 `/podcasts/` 상세 페이지로 분리되었고, YouTube API helper나 자동 동기화는 아직 없습니다.

## Route / Component Map

| Surface | Path | 역할 | 데이터 소스 |
|---|---|---|---|
| 한국어 미디어 페이지 | `src/pages/media/index.astro` | `/media/` 전체 미디어 허브 | 하드코딩된 YouTube/essay/presentation 데이터 + `archive`, `ainews`, `podcasts` collections |
| 영어 미디어 페이지 | `src/pages/en/media/index.astro` | `/en/media/` 영어 미디어 허브 | 하드코딩된 YouTube/essay/presentation 데이터 + `archive` ko collection |
| 홈 미디어 섹션 | `src/components/home/HomeMediaSection.astro` | 홈(`/`, `/en/`)의 미디어 프리뷰 | 한국어는 `/podcasts/` CTA, 영어는 기존 playlist iframe + social links |
| 한국어 홈 | `src/pages/index.astro` | `HomeMediaSection locale="ko"` 렌더링 | component props |
| 영어 홈 | `src/pages/en/index.astro` | `HomeMediaSection locale="en"` 렌더링 | component props |
| 공통 레이아웃 | `src/layouts/Layout.astro` | `<html lang>`, Header/Footer, SEO 기본값 | `locale`, `title`, `description` props |
| UI 번역 | `src/i18n/ko.json`, `src/i18n/en.json` | 일부 media section label | `useTranslations(locale)` |
| Content schema | `src/content/config.ts` | `archive`, `ainews`, `podcasts` schema 정의. `podcasts.transcriptSegments`는 YouTube caption 기반 transcript의 canonical data | Astro Content Collections |
| 팟캐스트 목록 | `src/pages/podcasts/index.astro` | `/podcasts/` 한국어 팟캐스트 라이브러리 | `podcasts` collection `ko/` non-draft entries |
| 팟캐스트 상세 | `src/pages/podcasts/[...slug].astro` | `/podcasts/{slug}/` 에피소드별 노트와 하단 transcript section | `podcasts` collection + Markdown render + optional `transcriptSegments` |

## Current Media Page Structure

### `/media/` (`src/pages/media/index.astro`)

1. `locale = 'ko'`, `useTranslations(locale)`로 일부 문자열을 가져옵니다.
2. `getCollection('archive')`에서 `ko/` slug만 읽고 최신 3개를 `자료 창고` 카드로 보여줍니다.
3. `getCollection('ainews')`에서 `ko/` slug만 읽고 최신 3개를 `AI 데일리 뉴스` 카드로 보여줍니다.
4. YouTube 채널/Instagram URL, playlist URL, essay, presentation 데이터는 파일 상단 상수 배열로 직접 정의되어 있습니다.
5. 최상단 `팟캐스트 라이브러리 & AI 뉴스` 섹션은 `/podcasts/` CTA/featured episode card와 AI 뉴스 YouTube playlist iframe 카드로 구성됩니다.
6. 페이지 내부 `<style>`에서 카드/섹션별 CSS를 모두 소유합니다.

섹션 순서:

```text
Header / Social links
→ Podcast Library CTA + AI News iframe card
→ AI Daily News cards from ainews collection
→ Presentations & Lectures hardcoded cards
→ Archive cards from archive collection
→ Essays & Columns hardcoded cards
```

### `/en/media/` (`src/pages/en/media/index.astro`)

1. `locale = 'en'`, 영어 번역 JSON을 일부 사용합니다.
2. `archive`는 현재 한국어 `ko/` collection을 그대로 사용하고 `for Koreans` badge를 표시합니다.
3. 팟캐스트/AI 뉴스 iframe 카드, essay, presentation 데이터는 영어 페이지 안에 별도로 하드코딩되어 있습니다.
4. 한국어 페이지와 달리 `ainews` collection을 렌더링하지 않고 `Auto News Section (TBD)` placeholder를 보여줍니다.

섹션 순서:

```text
Header / Social links
→ Podcast Library CTA + AI News iframe card
→ Essays & Columns hardcoded cards
→ Presentations & Lectures hardcoded cards
→ Video Archive cards from ko archive collection
→ Auto News TBD card
```

### Home media preview (`src/components/home/HomeMediaSection.astro`)

1. `locale` prop에 따라 component 내부 `labels` 객체에서 한국어/영어 문구를 고릅니다.
2. 한국어 홈의 podcast card는 `/podcasts/` 라이브러리 CTA를 사용합니다.
3. 영어 홈의 podcast/news cards는 기존 YouTube playlist iframe을 유지합니다.
4. `/media` 또는 `/en/media`로 이동하는 전체 보기 링크는 `getLocalizedPath('/media', locale)`로 생성합니다.
5. YouTube/Instagram/Kakao social links는 component 내부 상수로 직접 정의되어 있습니다.

## Current Data Ownership

| 데이터 | 현재 위치 | 중복/주의점 |
|---|---|---|
| YouTube channel URL | `src/pages/media/index.astro`, `src/pages/en/media/index.astro`, `src/components/home/HomeMediaSection.astro` | 세 곳에 중복 |
| Instagram URL | 위와 동일 | 세 곳에 중복 |
| Podcast episode pages | `src/content/podcasts/ko/*.md`, `src/pages/podcasts/*` | 한국어 v1만 구현. `/en/podcasts` route 없음. 전체 transcript는 Markdown body가 아니라 `transcriptSegments` frontmatter가 canonical |
| Podcast playlist ID/URL | 영어 media page + 영어 HomeMediaSection fallback | 한국어 주요 UX는 `podcasts` collection으로 이동 |
| AI news playlist ID/URL | media ko/en pages + HomeMediaSection | 하드코딩 중복 |
| Essays data | media ko/en pages | 페이지별 별도 배열 |
| Presentations data | media ko/en pages | 페이지별 별도 배열 |
| Archive cards | `src/content/archive/ko/*.md` + media pages | 영어 route도 ko archive 사용 |
| AI Daily News cards | `src/content/ainews/ko/*.md` + 한국어 media page | 영어 media page는 collection 미사용/TBD |
| Media-specific styling | 각 page/component의 scoped `<style>` | 공통 카드 component 없음 |
| Podcast language fallback | `Layout.astro`, `Header.astro` `languagePaths` prop | `/podcasts/**` 영어 전환은 `/en/media/`로 fallback |

## Extension Notes for Podcast Video Features

팟캐스트 영상 카드 기능을 추가할 때 먼저 확인할 코드 위치는 다음 순서가 가장 직접적입니다.

1. **에피소드 추가**: `src/content/podcasts/ko/{slug}.md`에 Markdown 파일을 추가합니다. 필수 frontmatter는 `title`, `description`, `date`, `videoId`입니다. 전체 transcript가 있으면 YouTube captions에서 온 `transcriptSegments`를 사용하고 Markdown body에 중복하지 않습니다.
2. **목록/검색 UI 변경**: `src/pages/podcasts/index.astro`의 search/tag filter와 card markup/CSS를 수정합니다. 필터는 dependency 없는 client script입니다.
3. **상세 페이지 변경**: `src/pages/podcasts/[...slug].astro`의 YouTube embed, summary/takeaways, chapters, resources, Markdown render layout을 수정합니다.
4. **미디어 허브 카드 변경**: `src/pages/media/index.astro`의 `Podcast Library & AI News Section`과 `.podcast-library-*` CSS를 수정합니다.
5. **홈 프리뷰 영향 여부**: 한국어 홈 CTA는 `src/components/home/HomeMediaSection.astro`에서 `/podcasts/`로 연결합니다. 영어 홈은 기존 playlist fallback을 유지합니다.
6. **i18n 문자열 관리**: 반복 사용될 제목/설명은 `src/i18n/ko.json`, `src/i18n/en.json`에 추가하고, 단일 페이지에만 쓰이는 임시 문구는 현재 패턴처럼 page 내부 문자열로 둘 수 있습니다.

## Implementation Constraints Observed

- 현재 프로젝트에는 `lint`/`check` script가 없으므로 변경 검증은 기본적으로 `npm run build`가 중심입니다.
- 현재 코드에는 YouTube/Transcript fetch helper, caption API client, Whisper pipeline이 없습니다. Transcript data는 수동으로 검증된 `transcriptSegments` content만 렌더링합니다.
- `transcriptSegments` schema는 `startSeconds`와 `rawText`를 필수로 검증합니다. 새 content 작성 규칙은 `docs/CONTENT.md`의 canonical field requirement를 따릅니다.
- Podcast transcript는 YouTube captions만 source로 사용합니다. Whisper/로컬 STT/비-YouTube fallback은 금지하며, captions가 없으면 transcript-derived content를 만들지 말고 blocked/draft로 보고합니다. 세부 agent 규칙은 `docs/CONTENT.md`의 `Podcast YouTube-link episode agent rules`를 따릅니다.
- YouTube iframe은 아직 AI 뉴스/영어 podcast fallback 카드에서 `pointer-events: none`이었다가 카드 hover 시 `pointer-events: auto`가 됩니다. 카드 전체 anchor와 iframe 상호작용이 겹치는 구조이므로 클릭/재생 UX 변경 시 확인이 필요합니다.
- `/podcasts/**`는 한국어 v1 전용입니다. `Layout`/`Header`의 `languagePaths` prop을 사용해 영어 language switch target을 `/en/media/`로 지정해야 하며, 빌드 후 `grep -R "/en/podcasts" dist`로 확인합니다.
- 한국어/영어 media page가 component 공유 없이 거의 독립 구현되어 있어 한쪽만 수정하면 UX drift가 생길 수 있습니다.
- AI news는 한국어 route/content만 구현되어 있고 영어 media page에는 TBD placeholder가 남아 있습니다.

## Recommended Documentation Update Rule

미디어 기능을 추가하거나 데이터 소유 위치를 바꾸면 다음 문서를 함께 갱신합니다.

- `docs/MEDIA.md`: 미디어 페이지 구조, 데이터 소스, 기능별 수정 지점
- `docs/ARCHITECTURE.md`: route/data-flow 수준의 변경
- `docs/CONTENT.md`: 새 content collection이나 작성 규칙이 생길 때
- `README.md`: 사용자/기여자가 알아야 하는 큰 구조 변경이 생길 때
