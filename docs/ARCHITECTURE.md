# Architecture

sudoremove.com의 현재 코드 구현 기준 기술 아키텍처 문서입니다.

> Last checked against code: 2026-04-27

## Tech Stack

### Core

| 기술 | 현재 상태 | 용도 |
|------|-----------|------|
| **Astro** | `^5.16.8` | 정적 사이트 생성, 파일 기반 라우팅, Content Collections |
| **TypeScript** | Astro strict tsconfig 사용 | Astro/클라이언트 스크립트 타입 작성 |
| **Tailwind CSS** | `^4.1.18` | Vite plugin 기반 스타일링 |
| **Astro Content Collections** | `src/content/config.ts` | Markdown 콘텐츠 schema/collection 관리 |
| **force-graph** | `^1.51.0` dependency | Knowledge graph 시각화 용도 |

### Integrations / Dependencies

| 패키지 | 현재 사용 방식 |
|--------|----------------|
| `@tailwindcss/vite` | `astro.config.mjs`의 Vite plugin으로 등록 |
| `tailwindcss` | v4 스타일링 기반 |
| `force-graph` | `package.json` dependency에 있음. 단, 현재 `GraphView.astro`는 CDN import를 사용 중 |

현재 `@astrojs/tailwind`, `@astrojs/mdx`, `astro-i18n-aut`, `@astrojs/check`는 dependency에 없습니다.

## Directory Structure

```text
src/
├── components/
│   ├── DocumentPanel.astro       # Graph node 상세 패널/모바일 bottom sheet
│   ├── GraphView.astro           # Force graph client component
│   ├── HeroQuote.astro           # Home hero animation
│   ├── KnowledgeSidebar.astro    # Knowledge 좌측 사이드바
│   ├── events/EventCard.astro
│   ├── home/*                    # Home section components
│   └── layout/Header.astro, Footer.astro
│
├── layouts/
│   └── Layout.astro              # 공통 HTML head/body/header/footer
│
├── pages/
│   ├── index.astro               # 한국어 홈
│   ├── about/index.astro
│   ├── archive/index.astro
│   ├── archive/[...slug].astro
│   ├── events/index.astro
│   ├── events/[...slug].astro
│   ├── knowledge/index.astro
│   ├── knowledge/[...slug].astro
│   ├── knowledge/essays/index.astro
│   ├── knowledge/physical-ai/index.astro
│   ├── knowledge/physical-ai/browse.astro
│   ├── media/index.astro
│   ├── news/index.astro
│   ├── news/[...slug].astro
│   ├── projects.astro
│   └── en/                       # 영어 페이지 트리
│       ├── index.astro
│       ├── about/index.astro
│       ├── archive/*
│       ├── events/*
│       ├── knowledge/*
│       ├── media/index.astro
│       └── projects.astro
│
├── content/
│   ├── config.ts                 # collection schema 정의
│   ├── ainews/
│   │   ├── ko/                   # AI news 한국어 콘텐츠
│   │   └── youtube/              # 원문/스크립트 텍스트 자료
│   ├── archive/ko/               # 영상 노트 archive 콘텐츠
│   ├── events/ko/                # 행사 콘텐츠
│   ├── knowledge/
│   │   ├── ko/                   # 한국어 Knowledge Base
│   │   └── en/                   # 영어 Knowledge Base
│   └── knowledge_to_book/        # 보조 원고/샘플. collection 미정의 상태
│
├── i18n/
│   ├── config.ts                 # Locale, path helper
│   ├── ko.json
│   ├── en.json
│   └── utils.ts                  # t(), useTranslations()
│
├── styles/
│   └── global.css
│
└── utils/
    └── graphData.ts              # Knowledge graph node/link 생성
```

## Routing Architecture

### URL 구조

| 영역 | 한국어 | 영어 | 구현 메모 |
|------|--------|------|-----------|
| Home | `/` | `/en/` | 별도 페이지 |
| About | `/about/` | `/en/about/` | 별도 페이지 |
| Knowledge index | `/knowledge/` | `/en/knowledge/` | 별도 페이지 |
| Knowledge doc | `/knowledge/{...slug}` | `/en/knowledge/{...slug}` | 언어별 dynamic route |
| Knowledge graph | `/knowledge/physical-ai/browse/` | `/en/knowledge/physical-ai/browse/` | GraphView + DocumentPanel |
| Archive | `/archive/`, `/archive/{slug}` | `/en/archive/`, `/en/archive/{slug}` | 영어 route는 현재 `archive` collection의 `ko/` 콘텐츠를 사용 |
| Events | `/events/`, `/events/{slug}` | `/en/events/`, `/en/events/{slug}` | 영어 route는 현재 `events` collection의 `ko/` 콘텐츠를 사용 |
| News | `/news/`, `/news/{slug}` | - | 현재 한국어 route만 구현 |
| Media | `/media/` | `/en/media/` | 정적 Astro 페이지 |
| Projects | `/projects/` | `/en/projects/` | 준비 중 페이지 |

### i18n 흐름

현재는 Astro i18n integration이나 middleware가 없습니다.

```text
Request URL
  ├─ /en/...  → src/pages/en/** route가 렌더링, locale='en'
  └─ 그 외    → src/pages/** route가 렌더링, locale='ko'
```

`src/i18n/config.ts`는 `/en` prefix를 감지하고 localized path를 만드는 helper를 제공합니다. 브라우저 `Accept-Language` 자동 감지/리다이렉트는 현재 구현되어 있지 않습니다.

## Content Collections

`src/content/config.ts`에서 네 개 collection을 정의합니다.

### `knowledge`

Physical AI Knowledge Base입니다.

Required:
- `title: string`
- `description: string`
- `category: 'physical-ai' | 'models' | 'companies' | 'hardware' | 'essays' | 'people' | 'glossary'`

Optional:
- `subcategory?: string`
- `tags?: string[]`
- `order?: number`
- `related?: string[]`
- `author?: string`
- `date?: Date`
- `createdBy?: { name: string; email?: string }`
- `lastEditedBy?: { name: string; email?: string }`
- `lastEditedAt?: Date`
- `isDraft?: boolean` (default false)
- `isFeatured?: boolean` (default false)
- `icon?: string`
- `thumbnail?: string`

### `events`

Required:
- `title`, `date`, `location`, `description`

Optional:
- `endDate`, `time`, `status`, `thumbnail`, `poster`
- `registrationUrl`, `youtubeUrl`, `blogUrl`
- `tags`, `hosts`, `sponsors`, `speakers`, `gallery`, `maxAttendees`, `isFeatured`

`status`는 schema상 optional입니다. 일부 UI는 `status === 'upcoming' || 'ongoing'`을 기준으로 표시 여부를 결정하므로, 콘텐츠 작성 시 status를 명시하는 것이 안전합니다.

### `ainews`

AI news 한국어 콘텐츠입니다.

Required:
- `title`
- `summary: string[]` length 5
- `date`
- `originalUrl`

Optional:
- `hasHeadline`, `headline`, `tags`, `isFeatured`

### `archive`

영상 노트 아카이브입니다.

Required:
- `title`, `description`, `date`, `videoId`

Optional:
- `originalVideoId`, `duration`, `thumbnail`, `chapters`, `tags`, `source`, `isFeatured`

## Data Flow

### Knowledge document page

```text
/knowledge/[...slug].astro or /en/knowledge/[...slug].astro
  1. getStaticPaths(): locale별 knowledge entries 조회
  2. entry.render(): Markdown Content/heading 생성
  3. related frontmatter를 allKnowledge에서 resolution
  4. Layout + KnowledgeSidebar + Content + See Also + TOC 렌더링
```

주의: 현재 dynamic route가 `physical-ai/index.md`, `essays/index.md` 등 일부 index entry도 포함하여 explicit route와 충돌 warning을 냅니다.

### Knowledge graph page

```text
/knowledge/physical-ai/browse(.astro)
  1. locale별 knowledge entries 조회
  2. index page가 아닌 entries만 필터링
  3. generateGraphData(contentItems, locale)
     - Markdown body link 파싱
     - frontmatter related 병합
     - nodes/links 생성
  4. page에서 description/tags를 node에 추가
  5. GraphView client script가 force graph 렌더링
  6. DocumentPanel이 graph custom events를 받아 상세 표시
```

현재 graph 관련 구현상 주의점:
- `GraphView.astro`는 runtime CDN imports(`esm.sh`)를 사용합니다.
- `package.json`에도 `force-graph` dependency가 있어 CDN/import 정책이 중복됩니다.
- `graphData.ts`의 link resolution은 `endsWith`/`includes` 기반 fuzzy match를 포함합니다.

### Archive page

```text
/archive/[...slug].astro
  1. archive collection의 ko entries 조회
  2. YouTube iframe 렌더링
  3. chapters/timestamp click → iframe postMessage seekTo
  4. scroll 시 PiP 스타일 적용
```

영어 archive route도 현재 같은 ko archive collection을 기반으로 route를 생성합니다.

### Media page

현재 media pages는 정적 Astro 페이지입니다. 별도 YouTube API fetch helper나 `src/lib/youtube.ts`는 현재 코드에 없습니다.

## Build & Deploy

### npm scripts

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro"
}
```

### Build output

```text
npm run build → dist/
```

현재 저장소에는 `.github/workflows`가 없습니다. GitHub Pages 등 자동 배포를 사용하려면 workflow를 별도로 추가해야 합니다.

### 현재 build warnings

최근 확인 기준 `npm run build`는 성공하지만 다음 경고가 있습니다.

1. `src/content/knowledge_to_book` auto-generated collection deprecation warning
2. knowledge dynamic routes와 explicit routes 충돌
   - `/knowledge/essays`
   - `/knowledge/physical-ai`
   - 영어 equivalent routes
3. `projects.title` translation key 누락

## Performance / Security Considerations

### 성능

- 모든 페이지는 static generation 대상입니다.
- Knowledge graph data는 build 시점에 생성되지만, graph rendering은 client-side입니다.
- `graphData.ts`는 현재 content/link resolution에서 반복 scan을 사용하므로 콘텐츠가 크게 늘면 map 기반 resolution으로 개선하는 것이 좋습니다.

### 보안/운영 주의점

- `DocumentPanel.astro`와 `GraphView.astro` 일부 client script가 content-derived 값을 `innerHTML`로 렌더링합니다. content author가 신뢰되지 않는 경우 DOM API/textContent 기반으로 바꾸는 것이 안전합니다.
- Archive YouTube seek command는 현재 `postMessage(..., '*')`를 사용합니다. target origin 제한이 더 안전합니다.
- 런타임 CDN import는 CSP/가용성/supply-chain 정책과 맞지 않을 수 있습니다. npm bundling 또는 명시적 CDN 정책 중 하나로 정리하는 것이 좋습니다.

## Known Architecture Debt

- locale별 route/page duplication이 많습니다.
- taxonomy/category metadata가 schema, sidebar, graph, document page에 분산되어 있습니다.
- architecture/docs와 코드가 쉽게 drift될 수 있으므로, category/route/content collection 변경 시 이 문서를 함께 업데이트해야 합니다.
