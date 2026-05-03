# Content Guide

콘텐츠 작성 및 관리 가이드입니다. 이 문서는 현재 `src/content/config.ts`와 실제 라우트 구현을 기준으로 합니다.

> Last checked against code: 2026-05-03

## Content Structure

### Knowledge Base

Physical AI 관련 장기 지식 저장소입니다.

```text
src/content/knowledge/
├── ko/                    # 한국어
│   ├── physical-ai/       # Physical AI overview
│   ├── models/            # VLA/로봇 모델
│   ├── companies/         # 회사 프로필
│   ├── people/            # 인물 프로필
│   ├── hardware/          # 하드웨어
│   │   ├── humanoids/
│   │   ├── quadrupeds/
│   │   ├── arms/
│   │   ├── hands/
│   │   ├── mobile/
│   │   └── misc/
│   ├── essays/            # 에세이/분석
│   │   ├── archive/
│   │   ├── fundamentals/
│   │   └── insights/
│   └── glossary/          # 용어집
└── en/                    # 영어 (가능한 한 동일 slug 구조 유지)
    └── ...
```

### Events

현재 schema와 route는 `events` collection을 사용합니다. 실제 콘텐츠는 현재 `ko/` 아래에 있습니다.

```text
src/content/events/
└── ko/
    └── YYYY-MM-event-slug.md
```

영어 route(`/en/events`)도 현재 같은 `ko/` events collection을 사용합니다.

### Archive

영상 노트 archive입니다.

```text
src/content/archive/
└── ko/
    └── archive-slug.md
```

영어 route(`/en/archive`)도 현재 같은 `ko/` archive collection을 사용합니다.

### Podcasts

수도리무브 팟캐스트 에피소드별 연구 자료입니다. 현재 v1은 한국어 route/content만 구현되어 있습니다.

```text
src/content/podcasts/
└── ko/
    └── episode-slug.md
```

생성 route:

- 목록: `/podcasts/`
- 상세: `/podcasts/{slug}/`

영어 podcast route는 아직 없으며, `/podcasts/**`의 언어 전환 fallback은 `/en/media/`입니다.

### AI News

AI news 한국어 요약/번역 콘텐츠와 원문 텍스트 자료입니다.

```text
src/content/ainews/
├── ko/
│   └── issue-slug.md
└── youtube/
    └── issue-slug.txt
```

현재 `/news` route는 한국어만 구현되어 있습니다.

### Auxiliary Draft/Book Materials

```text
src/content/knowledge_to_book/
```

현재 `src/content/config.ts`에 collection으로 정의되어 있지 않아 build 시 Astro auto-generation deprecation warning이 발생합니다. 실제 사이트 콘텐츠로 다루려면 collection 정의를 추가하거나 `src/content` 바깥으로 이동하는 정책을 정해야 합니다.

## Frontmatter Schema

### Knowledge Base 문서

```yaml
---
title: "π0 (pi-zero)"
description: "Physical Intelligence의 첫 번째 Generalist Policy"
category: "models"  # physical-ai | models | companies | hardware | essays | people | glossary

# 선택
subcategory: "fundamentals"
tags: [pi0, physical-intelligence, vla, foundation-model]
order: 10
related:
  - models/openvla
  - companies/physical-intelligence
  - people/karol-hausman

author: "작성자"
date: 2025-01-09
createdBy:
  name: "작성자"
  email: "author@example.com"
lastEditedBy:
  name: "편집자"
lastEditedAt: 2025-01-10

isDraft: false
isFeatured: false
icon: "robot"
thumbnail: "/images/example.png"
---
```

현재 schema에는 `publishedAt`, `updatedAt`, `links` 필드가 없습니다. 날짜/수정 이력은 `date`, `lastEditedAt`, `createdBy`, `lastEditedBy`를 사용합니다.

### Events

```yaml
---
title: "Physical AI 밋업 #1"
description: "첫 번째 오프라인 모임"
date: 2025-08-01
location: "서울"

# 선택
endDate: 2025-08-02
time: "14:00"
status: "upcoming"  # upcoming | ongoing | past | cancelled
thumbnail: "/images/events/example.png"
poster: "/events/2025/example-poster.png"
registrationUrl: "https://..."
youtubeUrl: "https://..."
blogUrl: "https://..."
tags: [meetup, offline]
hosts: [sudoremove]
sponsors: [Sponsor]
speakers:
  - name: "Speaker Name"
    title: "Researcher"
    affiliation: "Organization"
    topic: "Talk title"
gallery: ["YOUTUBE_VIDEO_ID"]
maxAttendees: 50
isFeatured: false
---
```

`status`는 schema상 optional이지만 홈 이벤트 섹션은 `upcoming`/`ongoing` 상태를 기준으로 표시하므로 명시하는 것을 권장합니다.

### Archive

```yaml
---
title: "영상 노트 제목"
description: |
  첫 번째 요약 줄
  두 번째 요약 줄
  세 번째 요약 줄
date: 2025-01-01
videoId: "UPLOADED_YOUTUBE_VIDEO_ID"

# 선택
originalVideoId: "ORIGINAL_VIDEO_ID"
duration: "01:23:45"
thumbnail: "/images/archive/example.jpg"
chapters:
  - title: "Introduction"
    startTime: "00:00"
    endTime: "05:00"
tags: [robotics, ai]
source: "Conference / Channel"
isFeatured: false
---
```

Archive 상세 페이지는 `[MM:SS]` 또는 `[HH:MM:SS]` 형식의 본문 timestamp를 클릭 가능한 seek link로 변환합니다.

### Podcasts

```yaml
---
title: "에피소드 제목"
description: "검색과 카드에 표시될 1-2문장 설명"
date: 2026-04-26
videoId: "YOUTUBE_VIDEO_ID"

# 선택
duration: "42:18"
episodeNumber: 3
hosts:
  - "sudo remove"
guests:
  - name: "Guest Name"
    affiliation: "Organization"
    role: "Guest"
tags: [Physical AI, 월드모델]
summary:
  - "핵심 요약"
takeaways:
  - "실행 가능한 인사이트"
chapters:
  - title: "소개"
    startTime: "00:00"
    endTime: "05:00"
resources:
  - title: "참고 자료"
    url: "https://..."
relatedLinks:
  - title: "관련 링크"
    url: "https://..."
relatedKnowledge:
  - "knowledge/ko/models/openvla"
transcriptSegments:
  - startTime: "00:00"
    startSeconds: 0
    endTime: "01:20"
    endSeconds: 80
    title: "도입"
    speaker: "Host"
    rawText: >-
      YouTube caption text joined with only mechanical cleanup.
    text: >-
      읽기 쉽게 다듬은 한국어 문장입니다. rawText에 없는 새 의미를 추가하지 않습니다.
thumbnail: "https://..."
isFeatured: false
isDraft: false
---
```

필수 필드는 `title`, `description`, `date`, `videoId`입니다. 목록 페이지는 `ko/` slug이면서 `isDraft: false`인 항목만 보여주고, `episodeNumber` 내림차순 후 `date` 내림차순으로 정렬합니다. `thumbnail`이 없으면 YouTube 기본 썸네일(`https://img.youtube.com/vi/{videoId}/mqdefault.jpg`)을 사용합니다.

`transcriptSegments`는 팟캐스트 transcript의 canonical 저장 위치입니다. Markdown 본문에는 에피소드 노트, 해설, 요약만 작성하고 전체 transcript를 중복해서 붙여 넣지 않습니다. 각 segment는 `startTime`, `startSeconds`, `rawText`, `text`를 반드시 포함하고, 필요하면 `endTime`, `endSeconds`, `speaker`, `title`을 추가합니다.

#### Podcast YouTube-link episode agent rules

미래 에피소드 작성/보강 agent는 아래 정책을 따라야 합니다.

- Transcript source는 YouTube captions만 허용합니다.
- Manual captions를 우선 사용하고, manual captions가 없을 때만 YouTube auto captions를 사용할 수 있습니다.
- Whisper, faster-whisper, 로컬 STT, 업로드된 오디오 파일, 블로그/기사/댓글 등 비-YouTube transcript fallback은 금지합니다.
- YouTube captions가 없거나 접근할 수 없으면 transcript-derived `summary`, `takeaways`, `chapters`, `resources`, `relatedLinks`, `transcriptSegments`를 새로 만들지 말고 blocked/draft 상태로 보고합니다.
- `rawText`는 YouTube caption source를 이어 붙인 증거 텍스트이며, 줄바꿈/공백/중복 토큰 정리 같은 기계적 cleanup만 허용합니다.
- `text`는 독자를 위한 한국어 cleanup이며, `rawText`에 없는 새 주장/해석/고유명사를 추가하지 않습니다.
- Segment는 topic/speaker 변화 기준으로 나누고, 명확한 변화가 없으면 대략 60-120초 단위로 나눕니다.
- 작업 보고에는 caption source evidence를 남깁니다: videoId, caption kind(manual/auto), language, fetched command/tool, fetched time, unavailable/block reason.
- 참고자료 보강은 transcript 또는 YouTube 설명에 등장한 entity의 official/source-backed 링크로 제한합니다.

### AI News

```yaml
---
title: "AI News 제목"
summary:
  - "요약 1"
  - "요약 2"
  - "요약 3"
  - "요약 4"
  - "요약 5"
date: 2026-04-24
originalUrl: "https://..."
hasHeadline: true
headline: "헤드라인"
tags: [ai-news]
isFeatured: false
---
```

`summary`는 정확히 5개 항목이어야 합니다.

## Writing Guidelines

### 필자의 의견 (Author's Note)

Knowledge Base 문서(models, companies, hardware 등)에 필자의 개인적 견해를 추가할 때 사용합니다.

**위치:** 문서 맨 위(frontmatter 바로 다음, `## 핵심 의의`나 다른 모든 섹션보다 앞)

**형식:**

```markdown
<div class="author-note">

### 필자의 의견

- 핵심 포인트 1: 간결하게 작성
- 핵심 포인트 2: 개인적 경험이나 관찰 포함 가능
- 핵심 포인트 3: 업계 트렌드와 연결

</div>
```

영어 버전은 `### Author's Note`를 사용합니다.

### 제목/설명

- 제목은 명확하고 검색 가능하게 작성합니다.
- 영문 고유명사는 원문 유지가 가능합니다.
- `description`은 검색 결과/카드/그래프 패널에 표시되므로 1-2문장, 150자 이내를 권장합니다.

### 본문 구조

```markdown
> 한 줄 요약 (선택)

---

## Overview
간단한 소개

---

## 주요 섹션
내용

### 하위 섹션
세부 내용

---

## References
- [링크 텍스트](URL)

---

## See Also
- [관련 문서 1](../path/to/doc)
- [관련 문서 2](../path/to/doc)
```

### 이미지

```markdown
![alt text](../assets/images/example.png)
<p align="center"><em>이미지 캡션</em></p>
```

이미지 위치는 현재 문서/컬렉션 구조에 맞춰 선택합니다.

- Knowledge 문서용 asset: `src/content/knowledge/{ko|en}/assets/`
- 공개 정적 이미지: `public/images/`, `public/assets/`

## i18n (다국어)

### 파일 구조

Knowledge Base는 가능한 한 같은 slug로 언어별 파일을 유지합니다.

```text
knowledge/
├── ko/models/pi0.md
└── en/models/pi0.md
```

### UI 문자열

`src/i18n/ko.json`, `src/i18n/en.json`은 중첩 JSON 구조입니다.

```json
{
  "nav": {
    "home": "홈",
    "knowledge": "지식 창고",
    "projects": "프로젝트"
  }
}
```

사용 예:

```ts
const { t } = useTranslations(locale);
t('nav.projects');
```

존재하지 않는 key는 build/runtime 중 `Translation key not found: ...` warning을 출력하고 key 문자열 자체를 반환합니다.

## Adding New Content

### 1. Knowledge Base 문서 추가

```bash
# 한국어
touch src/content/knowledge/ko/models/new-model.md

# 영어
touch src/content/knowledge/en/models/new-model.md
```

새 문서를 추가하면 관련 카테고리 `index.md`와 `related`/본문 링크도 함께 정리합니다.

### 2. Events 추가

```bash
touch src/content/events/ko/2026-01-event.md
```

현재 영어 route도 ko events collection을 쓰므로 영어 전용 이벤트 콘텐츠 위치/정책은 아직 분리되어 있지 않습니다.

### 3. Archive 추가

```bash
touch src/content/archive/ko/new-archive-note.md
```

`videoId`는 업로드된 YouTube 영상 ID입니다. `chapters`를 넣으면 상세 페이지 사이드바 버튼으로 렌더링됩니다.

### 4. AI News 추가

```bash
touch src/content/ainews/ko/26-04-24-example.md
touch src/content/ainews/youtube/26-04-24-example.txt
```

## Graph Index

`/knowledge/physical-ai/browse`와 `/en/knowledge/physical-ai/browse`의 그래프는 `src/utils/graphData.ts`가 생성합니다.

1. Markdown 본문 링크 파싱
2. frontmatter `related` 읽기
3. 문서를 node로 만들고 link를 생성
4. page layer에서 description/tags를 node에 추가

그래프 카테고리 색상은 현재 코드상 다음 다섯 카테고리에 명시되어 있습니다.

- essays: `#eab308`
- models: `#3b82f6`
- companies: `#10b981`
- hardware: `#a78bfa`
- people: `#f472b6`

`physical-ai`, `glossary`는 schema상 허용되지만 graph/category color map에서는 fallback 색상을 사용할 수 있습니다.

## Content Workflow

### 새 문서 작성

1. 적절한 경로에 `.md` 파일 생성
2. Frontmatter 작성
3. 본문 작성
4. 관련 index/related/link 갱신
5. 로컬에서 확인: `npm run dev`
6. 빌드 확인: `npm run build`

### 기존 문서 수정

1. 파일 수정
2. 필요하면 `lastEditedBy`, `lastEditedAt` 갱신
3. 한국어/영어 대응 문서 동기화
4. `npm run build` 확인

## Current Notes

- Projects collection은 현재 코드에 정의되어 있지 않습니다. `/projects`는 준비 중 페이지입니다.
- Podcast content collection은 `src/content/podcasts/ko/*.md`에 정의되어 있고 `/podcasts/` 및 `/podcasts/{slug}/`에서 사용합니다.
- YouTube API integration/helper는 현재 코드에 없습니다. podcast episode import/sync는 수동 Markdown 작성 방식입니다.
- `/media`는 `podcasts`, `ainews`, `archive` collection 일부를 읽고, `/en/media`는 아직 podcast collection을 사용하지 않습니다. 상세 구조는 `docs/MEDIA.md`를 참조하세요.
- 홈 미디어 프리뷰(`src/components/home/HomeMediaSection.astro`)는 한국어에서 `/podcasts/` CTA를, 영어에서 기존 playlist IDs/social links를 사용합니다.
- `knowledge_to_book`은 현재 보조 자료로 보이며 collection schema가 없으므로 build warning 대상입니다.
