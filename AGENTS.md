# CLAUDE.md

sudoremove.com 웹사이트 개발 컨텍스트입니다.

## Project Overview

- **사이트**: sudoremove.com (수도리무브 공식 웹사이트)
- **목적**: AI/로보틱스 지식 공유, 자료 아카이브, 미디어, 행사 정보 제공
- **Framework**: Astro 5.x + TypeScript + Tailwind CSS v4
- **출력 방식**: 정적 사이트 생성(`dist/`)

## Commands

```bash
npm run dev      # 개발 서버 (localhost:4321)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
npm run astro    # Astro CLI passthrough
```

현재 별도 `lint`/`check` 스크립트는 없습니다.

## Architecture

자세한 내용은 `docs/ARCHITECTURE.md` 참조.

### 주요 디렉토리

```text
src/
├── components/     # Astro UI 컴포넌트
├── layouts/        # Layout.astro
├── pages/          # 파일 기반 라우팅. 한국어 기본 + en/ 영어 트리
├── content/        # Astro Content Collections
│   ├── config.ts   # events, knowledge, archive, ainews schemas
│   ├── ainews/     # 한국어 AI news 콘텐츠와 youtube 원문 텍스트
│   ├── archive/    # 영상 노트 archive (현재 ko 콘텐츠)
│   ├── events/     # 행사 콘텐츠 (현재 ko 콘텐츠)
│   ├── knowledge/  # Physical AI 자료
│   │   ├── ko/     # 한국어
│   │   └── en/     # 영어
│   └── knowledge_to_book/ # 보조 원고/샘플. collection 미정의 상태
├── data/           # 페이지 전용 정적 데이터 JSON (collection이 아닌 단발성 아티클 등)
├── i18n/           # locale config, translation JSON, helper
├── styles/         # global.css
└── utils/          # graphData.ts 등
```

### URL 구조

- `/` - 한국어 홈
- `/en/` - 영어 홈
- `/knowledge/`, `/en/knowledge/` - Knowledge Base
- `/knowledge/physical-ai/browse`, `/en/knowledge/physical-ai/browse` - 그래프 탐색
- `/knowledge/articles/{slug}` - 아티클. 한국어 전용이며 `src/data/{slug}.json` + 페이지별 `.astro`로 구성
- `/archive/`, `/en/archive/` - 영상 노트 아카이브. 영어 route는 현재 한국어 archive collection을 사용
- `/news/` - AI news. 현재 한국어 route만 구현
- `/media/`, `/en/media/` - 미디어 페이지
- `/events/`, `/en/events/` - 행사. 영어 route는 현재 한국어 events collection을 사용
- `/projects/`, `/en/projects/` - 준비 중 페이지
- `/about/`, `/en/about/` - 소개

## i18n

- 기본 언어: 한국어
- 지원 언어: 한국어, 영어
- 영어는 `/en/` prefix 사용
- 현재 구현은 Astro i18n integration/middleware가 아니라 수동 라우트 복제 + `src/i18n` helper 기반입니다.
- 브라우저 `Accept-Language` 기반 자동 리다이렉트는 현재 코드에 없습니다.

### ⚠️ 중요: Knowledge 콘텐츠 동기화 규칙

Knowledge Base 콘텐츠는 가능한 한 같은 slug로 한국어/영어 파일을 함께 유지합니다.

콘텐츠 위치:
- 한국어: `src/content/knowledge/ko/`
- 영어: `src/content/knowledge/en/`

작업 순서:
1. 한국어 콘텐츠 작성/수정
2. 동일한 경로의 영어 파일도 번역/수정
3. 새 파일 추가 시 양쪽 모두에 파일 생성
4. 관련 카테고리 index 문서도 함께 갱신

예시:
- `ko/models/new-model.md` 추가 시 → `en/models/new-model.md`도 함께 생성
- `ko/essays/insights/some-essay.md` 수정 시 → `en/essays/insights/some-essay.md`도 함께 수정

## Content

자세한 내용은 `docs/CONTENT.md`와 `docs/KNOWLEDGE-GUIDE.md` 참조.

### Knowledge Base 작성 핵심 규칙

- 내부 링크 형식: `[제목](./filename)` 또는 `[제목](../category/filename)`
- `[제목](index)` 사용 금지 → `[제목](./)` 사용
- 새 문서 추가 시 카테고리 인덱스(`index.md`)도 함께 업데이트
- 그래프 색인은 자동 업데이트 (본문 링크와 `related` 필드 기반)

## Current Build Notes

`npm run build`는 현재 성공하지만 다음 경고가 확인됩니다.

- `src/content/knowledge_to_book` auto-generated collection deprecation warning
- `knowledge/[...slug].astro`가 일부 explicit route(`/knowledge/essays`, `/knowledge/physical-ai`)와 충돌
- `projects.title` translation key 누락

## Deployment

- 빌드 결과물: `dist/`
- 목표 도메인: sudoremove.com
- 현재 저장소에는 `.github/workflows`가 없습니다. GitHub Pages 자동 배포를 사용하려면 workflow 추가가 필요합니다.

## Key Decisions

1. **Astro**: 정적 사이트에 최적, 빠른 빌드
2. **Content Collections**: 타입 안전한 Markdown 관리
3. **다크 테마 기본**: 기술 커뮤니티 특성
4. **한국어 기본**: 주요 사용자층 고려
5. **수동 i18n 라우팅**: 현재는 `/en` 페이지 트리를 별도 유지
