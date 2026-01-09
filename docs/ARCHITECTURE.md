# Architecture

sudoremove.com 기술 아키텍처 문서

## Tech Stack

### Core

| 기술 | 버전 | 용도 |
|------|------|------|
| **Astro** | 5.x | 정적 사이트 생성기 |
| **TypeScript** | 5.x | 타입 안전성 |
| **Tailwind CSS** | 3.x | 스타일링 |
| **MDX** | - | 콘텐츠 작성 |

### Integrations

| 패키지 | 용도 |
|--------|------|
| `@astrojs/tailwind` | Tailwind 통합 |
| `@astrojs/mdx` | MDX 지원 |
| `astro-i18n-aut` | 다국어 라우팅 |

## Directory Structure

```
src/
├── components/           # UI 컴포넌트
│   ├── common/           # 공통 (Button, Card, etc)
│   ├── layout/           # 레이아웃 (Header, Footer, Nav)
│   ├── home/             # 홈페이지 전용
│   ├── knowledge/        # Knowledge Base 전용
│   └── media/            # Media 섹션 전용
│
├── layouts/              # 페이지 레이아웃
│   ├── BaseLayout.astro  # 기본 레이아웃 (head, body)
│   ├── PageLayout.astro  # 일반 페이지
│   └── DocsLayout.astro  # 문서 페이지 (사이드바 포함)
│
├── pages/                # 라우팅
│   ├── index.astro       # 홈 (한국어)
│   ├── en/               # 영어 페이지
│   │   └── index.astro
│   ├── knowledge/        # Knowledge Base
│   │   ├── index.astro   # 목록
│   │   └── [...slug].astro  # 동적 라우팅
│   ├── projects/
│   ├── media/
│   ├── events/
│   └── about.astro
│
├── content/              # 콘텐츠 (Markdown/MDX)
│   ├── config.ts         # Content Collections 설정
│   ├── knowledge/        # Knowledge Base 콘텐츠
│   │   ├── ko/           # 한국어
│   │   │   ├── models/
│   │   │   ├── companies/
│   │   │   ├── people/
│   │   │   ├── hardware/
│   │   │   └── essays/
│   │   └── en/           # 영어
│   │       └── ...
│   ├── projects/
│   ├── events/
│   └── blog/
│
├── i18n/                 # 다국어 설정
│   ├── config.ts         # 언어 설정
│   ├── ko.json           # 한국어 UI 문자열
│   └── en.json           # 영어 UI 문자열
│
├── styles/               # 글로벌 스타일
│   └── global.css        # Tailwind + 커스텀
│
└── lib/                  # 유틸리티
    ├── utils.ts          # 공통 함수
    └── youtube.ts        # YouTube API 연동
```

## Routing Architecture

### URL 구조

```
기본 (한국어)           영어
/                       /en/
/knowledge/             /en/knowledge/
/knowledge/models/pi0   /en/knowledge/models/pi0
/projects/              /en/projects/
/media/                 /en/media/
/events/                /en/events/
/about/                 /en/about/
```

### i18n 흐름

```
┌─────────────────────────────────────────────────────────┐
│                    User Request                         │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              Middleware (언어 감지)                      │
│  1. URL에 /en/ prefix 있으면 → 영어                     │
│  2. 없으면 Accept-Language 헤더 확인                    │
│  3. en-* 이면 /en/ 으로 리다이렉트                      │
│  4. 그 외 → 한국어 (기본)                               │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   Page Render                           │
│  - 해당 언어의 레이아웃/컴포넌트 로드                   │
│  - Content Collection에서 해당 언어 콘텐츠 조회         │
└─────────────────────────────────────────────────────────┘
```

## Content Collections

### Schema 정의

```typescript
// src/content/config.ts

import { defineCollection, z } from 'astro:content';

const knowledgeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['models', 'companies', 'people', 'hardware', 'essays']),
    publishedAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'completed', 'planned']),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    location: z.string(),
    registrationUrl: z.string().url().optional(),
    status: z.enum(['upcoming', 'ongoing', 'past']),
  }),
});

export const collections = {
  knowledge: knowledgeCollection,
  projects: projectsCollection,
  events: eventsCollection,
};
```

## Data Flow

### Knowledge Base 페이지

```
┌──────────────┐    ┌───────────────────┐    ┌──────────────┐
│   Request    │ → │ [...slug].astro   │ → │   Render     │
│ /knowledge/  │    │                   │    │              │
│ models/pi0   │    │ 1. slug 파싱      │    │ - Layout     │
└──────────────┘    │ 2. 언어 감지      │    │ - Sidebar    │
                    │ 3. 콘텐츠 조회    │    │ - Content    │
                    │ 4. 관련 문서 조회 │    │ - Related    │
                    └───────────────────┘    └──────────────┘
```

### Media 페이지 (YouTube 연동)

```
┌──────────────┐    ┌───────────────────┐    ┌──────────────┐
│   Request    │ → │   media/index     │ → │   Render     │
│   /media/    │    │                   │    │              │
└──────────────┘    │ 빌드 시점에       │    │ - Grid       │
                    │ YouTube API 호출  │    │ - Thumbnails │
                    │ → 정적 JSON 생성  │    │ - Links      │
                    └───────────────────┘    └──────────────┘
```

## Build & Deploy

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 배포 흐름

```
main push → GitHub Actions → Build → GitHub Pages → sudoremove.com
```

## Performance Considerations

### 최적화 전략

1. **정적 생성**: 모든 페이지 빌드 시 생성
2. **이미지 최적화**: Astro Image 컴포넌트 사용
3. **코드 스플리팅**: 페이지별 JS 번들
4. **Prefetch**: 링크 호버 시 프리페치

### 캐싱

- 정적 자산: `public/` → 장기 캐시
- 콘텐츠: 빌드마다 새로 생성
- YouTube 데이터: 빌드 시 캐시 (24시간)
