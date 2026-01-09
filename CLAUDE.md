# CLAUDE.md

sudoremove.com 웹사이트 개발 컨텍스트

## Project Overview

- **사이트**: sudoremove.com (수도리무브 공식 웹사이트)
- **목적**: AI/로보틱스 지식 공유, 프로젝트 공개, 커뮤니티 활동
- **Framework**: Astro 5.x + TypeScript + Tailwind CSS

## Commands

```bash
npm run dev      # 개발 서버 (localhost:4321)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
```

## Architecture

자세한 내용은 `docs/ARCHITECTURE.md` 참조

### 주요 디렉토리

```
src/
├── components/     # UI 컴포넌트
├── layouts/        # 페이지 레이아웃
├── pages/          # 라우팅
├── content/        # Markdown 콘텐츠
│   └── knowledge/  # Physical AI 자료
│       ├── ko/     # 한국어
│       └── en/     # 영어
├── i18n/           # 다국어 설정
└── styles/         # 글로벌 스타일
```

### URL 구조

- `/` - 한국어 (기본)
- `/en/` - 영어
- `/knowledge/` - Knowledge Base
- `/projects/` - 프로젝트
- `/media/` - YouTube/미디어
- `/events/` - 행사
- `/about/` - 소개

## Design

자세한 내용은 `docs/DESIGN.md` 참조

- **테마**: 다크 모드 기본
- **폰트**: Pretendard (본문), JetBrains Mono (코드)
- **컬러**: #0a0a0f (배경), #3b82f6 (액센트)

## Content

자세한 내용은 `docs/CONTENT.md` 참조

### 콘텐츠 추가

1. `src/content/` 하위에 `.md` 파일 생성
2. Frontmatter 작성 (title, description, category 등)
3. 본문 작성
4. `npm run dev`로 확인

### tmp/PhysicalAI

기존 Physical AI 콘텐츠가 `tmp/PhysicalAI/`에 있음. 새 구조로 마이그레이션 필요:
- models/ → src/content/knowledge/ko/models/
- companies/ → src/content/knowledge/ko/companies/
- people/ → src/content/knowledge/ko/people/
- essays/ → src/content/knowledge/ko/essays/
- hardware/ → src/content/knowledge/ko/hardware/

## i18n

- 기본 언어: 한국어
- 지원 언어: 한국어, 영어
- 브라우저 Accept-Language 기반 자동 감지
- 영어는 `/en/` prefix 사용

## Deployment

- **호스팅**: GitHub Pages
- **도메인**: sudoremove.com
- **CI/CD**: GitHub Actions (main push → 자동 배포)

## Key Decisions

1. **Astro**: 정적 사이트에 최적, 빠른 빌드
2. **Content Collections**: 타입 안전한 Markdown 관리
3. **다크 테마 기본**: 기술 커뮤니티 특성
4. **한국어 기본**: 주요 사용자층 고려
