# sudoremove.com

수도리무브(sudoremove) 공식 웹사이트입니다.

## Overview

AI와 로보틱스 분야의 지식 공유, 자료 아카이브, 미디어, 행사 정보를 정적으로 제공하는 Astro 기반 웹사이트입니다.

### 주요 섹션

| 섹션 | 한국어 경로 | 영어 경로 | 현재 구현 상태 |
|------|-------------|-----------|----------------|
| **Home** | `/` | `/en/` | 메인 페이지와 섹션 하이라이트 |
| **Knowledge Base** | `/knowledge` | `/en/knowledge` | Physical AI 자료, 그래프 탐색, 카테고리/문서 페이지 |
| **Archive** | `/archive` | `/en/archive` | 영상 노트 아카이브. 영어 경로는 현재 한국어 archive 콘텐츠를 사용 |
| **News** | `/news` | - | AI news 번역/요약 콘텐츠. 현재 한국어 경로만 구현 |
| **Media** | `/media` | `/en/media` | 미디어 허브. 한국어는 podcast library preview 포함 |
| **Podcasts** | `/podcasts` | - | 한국어 팟캐스트 에피소드별 요약/챕터/참고자료 라이브러리 |
| **Events** | `/events` | `/en/events` | 행사 목록/상세. 영어 경로는 현재 한국어 events 콘텐츠를 사용 |
| **Projects** | `/projects` | `/en/projects` | 준비 중(TBD) 페이지 |
| **About** | `/about` | `/en/about` | 소개 페이지 |

### 다국어 지원

- **기본 언어**: 한국어 (`/`)
- **영어**: `/en/` prefix
- **현재 방식**: Astro i18n integration이나 middleware 없이, `src/pages/en/**` 페이지 트리와 `src/i18n/*` helper/JSON으로 수동 관리
- **주의**: 브라우저 `Accept-Language` 기반 자동 리다이렉트는 현재 코드에 구현되어 있지 않습니다.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5
- **Language**: TypeScript (`astro/tsconfigs/strict`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` + `src/styles/global.css`
- **Content**: Astro Content Collections (Markdown)
- **Graph**: `force-graph` dependency + client-side graph components
- **Deployment target**: static build output (`dist/`)

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

현재 `package.json`에는 `dev`, `build`, `preview`, `astro` 스크립트만 있습니다. 별도 `lint`/`check` 스크립트는 아직 없습니다.

## Project Structure

```text
web/
├── astro.config.mjs        # Astro 설정: Tailwind Vite plugin 연결
├── package.json            # npm scripts/dependencies
├── public/                 # 정적 파일과 이미지/영상 asset
├── docs/                   # 프로젝트/콘텐츠 문서
└── src/
    ├── components/         # Astro UI 컴포넌트
    │   ├── events/
    │   ├── home/
    │   └── layout/
    ├── content/            # Astro Content Collections
    │   ├── config.ts       # events, knowledge, archive, ainews, podcasts schemas
    │   ├── ainews/         # 한국어 AI news + youtube 원문 텍스트
    │   ├── archive/        # 영상 노트 archive (현재 ko 콘텐츠)
    │   ├── events/         # 행사 콘텐츠 (현재 ko 콘텐츠)
    │   ├── knowledge/      # ko/en Physical AI knowledge base
    │   ├── podcasts/       # 한국어 팟캐스트 에피소드 노트
    │   └── knowledge_to_book/ # 보조 원고/샘플 자료. 현재 collection 미정의
    ├── i18n/               # locale config, translation JSON, t() helper
    ├── layouts/            # Layout.astro
    ├── pages/              # file-based routes, ko 기본 + en 하위 트리
    ├── styles/             # global.css
    └── utils/              # graphData.ts 등
```

## Documentation

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - 현재 구현 기준 기술 아키텍처
- [CONTENT.md](./docs/CONTENT.md) - 콘텐츠 컬렉션/작성 가이드
- [DESIGN.md](./docs/DESIGN.md) - 디자인 시스템
- [MEDIA.md](./docs/MEDIA.md) - 미디어 페이지 구조와 팟캐스트 카드 확장 지점
- [KNOWLEDGE-GUIDE.md](./docs/KNOWLEDGE-GUIDE.md) - Knowledge Base 작성 규칙
- [KNOWLEDGE-REVISION-GUIDE.md](./docs/KNOWLEDGE-REVISION-GUIDE.md) - Knowledge Base 퇴고 규칙

## Current Implementation Notes

- `npm run build`는 성공하지만 현재 다음 경고가 있습니다.
  - `src/content/knowledge_to_book` collection auto-generation deprecation warning
  - 일부 knowledge index 문서와 explicit route 충돌 경고
  - `projects.title` translation key 누락 경고
- `GraphView.astro`는 현재 런타임에서 CDN(`esm.sh`)으로 graph 관련 모듈을 import합니다. `package.json`의 `force-graph` dependency와 버전/번들링 정책이 완전히 일치하지 않습니다.
- 팟캐스트는 `src/content/podcasts/ko/*.md`와 `/podcasts/` route로 관리합니다. YouTube 자동 동기화는 없으며 Markdown frontmatter를 수동 작성합니다. 상세 구조는 `docs/MEDIA.md`를 확인하세요.
- AI 뉴스/영어 podcast fallback cards와 일부 홈 미디어 cards는 여전히 YouTube playlist iframe과 하드코딩된 playlist/social link 상수를 사용합니다.
- `.github/workflows`는 현재 저장소에 없습니다. 자동 배포를 쓰려면 workflow를 별도로 추가해야 합니다.

## License

MIT-NC (Non-Commercial) - 상업적 사용 금지. [LICENSE](./LICENSE) 참조.

## Links

- Website: https://sudoremove.com
- GitHub: https://github.com/sudormrf-run/web
- YouTube: https://youtube.com/@sudoremove
