# sudoremove.com

수도리무브(sudoremove) 공식 웹사이트

## Overview

AI와 로보틱스 분야의 지식 공유, 프로젝트 공개, 커뮤니티 활동을 위한 플랫폼입니다.

### 주요 섹션

| 섹션 | 경로 | 설명 |
|------|------|------|
| **Home** | `/` | 메인 페이지, 주요 콘텐츠 하이라이트 |
| **Knowledge Base** | `/knowledge` | Physical AI 연구 자료, 모델, 회사, 인물 정보 |
| **Projects** | `/projects` | 진행 중인 프로젝트 (LeRobot 등) |
| **Media** | `/media` | YouTube 영상, Podcast, 콘텐츠 |
| **Events** | `/events` | 행사 공지 및 신청 |
| **About** | `/about` | 조직 소개 |

### 다국어 지원

- **기본 언어**: 한국어 (`/`)
- **영어**: `/en/` prefix
- **자동 감지**: 브라우저 Accept-Language 헤더 기반

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Content**: Astro Content Collections (Markdown/MDX)
- **i18n**: astro-i18n-aut + custom middleware
- **Deployment**: GitHub Pages → sudoremove.com

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

## Project Structure

```
web/
├── src/
│   ├── components/        # 재사용 컴포넌트
│   ├── layouts/           # 페이지 레이아웃
│   ├── pages/             # 페이지 라우팅
│   │   ├── index.astro    # 한국어 홈
│   │   ├── en/            # 영어 페이지
│   │   ├── knowledge/     # Knowledge Base
│   │   ├── projects/      # 프로젝트
│   │   ├── media/         # 미디어
│   │   ├── events/        # 이벤트
│   │   └── about.astro    # 소개
│   ├── content/           # 콘텐츠 (Markdown)
│   │   ├── knowledge/     # Physical AI 자료
│   │   │   ├── ko/        # 한국어
│   │   │   └── en/        # 영어
│   │   ├── projects/
│   │   ├── events/
│   │   └── blog/
│   ├── styles/            # 글로벌 스타일
│   ├── i18n/              # 다국어 설정
│   └── lib/               # 유틸리티
├── public/                # 정적 파일
├── docs/                  # 프로젝트 문서
│   ├── ARCHITECTURE.md
│   ├── DESIGN.md
│   └── CONTENT.md
└── astro.config.mjs
```

## Documentation

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - 기술 아키텍처
- [DESIGN.md](./docs/DESIGN.md) - 디자인 시스템
- [CONTENT.md](./docs/CONTENT.md) - 콘텐츠 작성 가이드

## TODO

- [ ] 자료창고: 노트의 `[MM:SS]` 타임스탬프 클릭 시 YouTube 해당 시간으로 이동하도록 구현

## License

MIT-NC (Non-Commercial) - 상업적 사용 금지. [LICENSE](./LICENSE) 참조.

## Links

- Website: https://sudoremove.com
- GitHub: https://github.com/sudormrf-run/web
- YouTube: https://yotuube.com/@sudoremove
