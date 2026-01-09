# Content Guide

콘텐츠 작성 및 관리 가이드

## Content Structure

### Knowledge Base

Physical AI 관련 콘텐츠 저장소

```
src/content/knowledge/
├── ko/                    # 한국어
│   ├── models/            # VLA/로봇 모델
│   │   ├── pi0.md
│   │   ├── openvla.md
│   │   └── ...
│   ├── companies/         # 회사 프로필
│   │   ├── physical-intelligence.md
│   │   └── ...
│   ├── people/            # 인물 프로필
│   │   ├── chelsea-finn.md
│   │   └── ...
│   ├── hardware/          # 하드웨어 (로봇, 센서)
│   │   ├── humanoids/
│   │   ├── arms/
│   │   └── ...
│   └── essays/            # 에세이, 분석
│       └── ...
└── en/                    # 영어 (동일 구조)
    └── ...
```

### Projects

```
src/content/projects/
├── ko/
│   └── lerobot-tutorial.md
└── en/
    └── lerobot-tutorial.md
```

### Events

```
src/content/events/
├── ko/
│   └── 2024-01-meetup.md
└── en/
    └── 2024-01-meetup.md
```

## Frontmatter Schema

### Knowledge Base 문서

```yaml
---
# 필수
title: "π0 (pi-zero)"
description: "Physical Intelligence의 첫 번째 Generalist Policy"
category: "models"  # models | companies | people | hardware | essays

# 선택
tags: [pi0, physical-intelligence, vla, foundation-model]
publishedAt: 2024-10-31
updatedAt: 2025-01-09

# 관련 문서 (slug)
related:
  - models/openvla
  - companies/physical-intelligence
  - people/karol-hausman

# 외부 링크
links:
  paper: "https://arxiv.org/abs/..."
  github: "https://github.com/..."
  website: "https://..."
---
```

### Projects

```yaml
---
title: "LeRobot 튜토리얼"
description: "HuggingFace LeRobot으로 로봇 제어 시작하기"
status: "active"  # active | completed | planned

# 선택
github: "https://github.com/..."
demo: "https://..."
thumbnail: "/images/projects/lerobot.png"
tags: [lerobot, tutorial, robotics]
---
```

### Events

```yaml
---
title: "Physical AI 밋업 #1"
description: "첫 번째 오프라인 모임"
date: 2024-02-15
endDate: 2024-02-15  # 다일간 행사시
location: "서울 강남"
status: "upcoming"  # upcoming | ongoing | past

# 선택
registrationUrl: "https://..."
maxAttendees: 50
tags: [meetup, offline]
---
```

## Writing Guidelines

### 제목 (Title)

- 명확하고 검색 가능하게
- 영문 고유명사는 원문 유지 (π0, OpenVLA 등)
- 한글 제목에 영문 병기 가능: `"π0 (파이-제로)"`

### 설명 (Description)

- 1-2문장으로 핵심 요약
- 검색 결과, 카드에 표시됨
- 150자 이내 권장

### 본문 구조

```markdown
# 제목 (H1은 frontmatter title과 중복되므로 보통 생략)

> 한 줄 요약 (blockquote)

---

## Overview
간단한 소개

---

## 주요 섹션 1
내용

### 하위 섹션
세부 내용

---

## 주요 섹션 2
...

---

## References
- [링크 텍스트](URL)

---

## See Also
- [관련 문서 1](../path/to/doc.md)
- [관련 문서 2](../path/to/doc.md)
```

### 테이블 사용

복잡한 정보는 테이블로:

```markdown
| 항목 | 값 | 설명 |
|------|-----|------|
| 파라미터 | 3.3B | VLM + Action Expert |
| 아키텍처 | PaliGemma + Flow | 2024년 10월 발표 |
```

### 코드 블록

```markdown
​```python
# 언어 지정 필수
def example():
    pass
​```
```

### 이미지

```markdown
![alt text](../assets/images/example.png)
<p align="center"><em>이미지 캡션</em></p>
```

이미지 파일 위치:
- 문서별 이미지: `src/content/knowledge/ko/assets/`
- 공용 이미지: `public/images/`

## i18n (다국어)

### 파일 구조

같은 slug로 언어별 파일 생성:

```
knowledge/
├── ko/models/pi0.md    # 한국어 버전
└── en/models/pi0.md    # 영어 버전
```

### 번역 우선순위

1. **핵심 문서**: 양쪽 언어 모두 작성
2. **상세 문서**: 한국어 우선, 영어는 점진적 추가
3. **용어**: 고유명사는 원문 유지, 일반 용어만 번역

### UI 문자열

`src/i18n/` 폴더의 JSON 파일:

```json
// ko.json
{
  "nav.home": "홈",
  "nav.knowledge": "Knowledge Base",
  "nav.projects": "프로젝트",
  "nav.media": "미디어",
  "nav.events": "행사",
  "nav.about": "소개",
  "common.readMore": "더 보기",
  "common.lastUpdated": "최종 수정"
}
```

```json
// en.json
{
  "nav.home": "Home",
  "nav.knowledge": "Knowledge Base",
  "nav.projects": "Projects",
  "nav.media": "Media",
  "nav.events": "Events",
  "nav.about": "About",
  "common.readMore": "Read more",
  "common.lastUpdated": "Last updated"
}
```

## Adding New Content

### 1. Knowledge Base 문서 추가

```bash
# 한국어 버전 생성
touch src/content/knowledge/ko/models/new-model.md

# 영어 버전 (선택)
touch src/content/knowledge/en/models/new-model.md
```

### 2. 프로젝트 추가

```bash
touch src/content/projects/ko/new-project.md
```

### 3. 이벤트 추가

```bash
touch src/content/events/ko/2024-03-event.md
```

## Media (YouTube) Integration

YouTube 콘텐츠는 빌드 시점에 API로 가져옴.

### 설정

```typescript
// src/lib/youtube.ts
export const YOUTUBE_CHANNEL_ID = 'YOUR_CHANNEL_ID';
export const YOUTUBE_PLAYLIST_IDS = {
  podcast: 'PLAYLIST_ID_1',
  tutorial: 'PLAYLIST_ID_2',
};
```

### 수동 추가 (API 없이)

```yaml
# src/content/media/videos.yaml
- id: "VIDEO_ID"
  title: "영상 제목"
  thumbnail: "/images/youtube/thumbnail.jpg"
  publishedAt: 2024-01-01
  category: "podcast"
```

## Content Workflow

### 새 문서 작성

1. 적절한 경로에 `.md` 파일 생성
2. Frontmatter 작성 (위 스키마 참조)
3. 본문 작성
4. 로컬에서 확인: `npm run dev`
5. 커밋 & 푸시 → 자동 배포

### 기존 문서 수정

1. 파일 수정
2. `updatedAt` 날짜 업데이트
3. 커밋 & 푸시

### tmp 콘텐츠 마이그레이션

기존 `tmp/PhysicalAI/` 콘텐츠를 새 구조로 이동:

```bash
# 예시: models 이동
cp tmp/PhysicalAI/models/*.md src/content/knowledge/ko/models/

# 이미지 이동
cp -r tmp/PhysicalAI/assets/* src/content/knowledge/ko/assets/
```

이동 후 frontmatter 형식 확인 및 수정 필요.
