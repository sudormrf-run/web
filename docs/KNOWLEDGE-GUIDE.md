# Knowledge Base 작성 가이드

Physical AI Knowledge Base 콘텐츠 작성 및 관리를 위한 가이드입니다.

---

## 페이지 구조

Knowledge Base는 다음과 같은 페이지로 구성됩니다:

```
/knowledge/physical-ai          → Overview (메인 페이지)
/knowledge/physical-ai/browse   → 색인 (그래프 탐색)
/knowledge/{category}/          → 카테고리 인덱스 (목록 페이지)
/knowledge/{category}/{slug}    → 개별 문서
```

영어 페이지는 동일 구조에 `/en` prefix가 붙습니다.

### 사이드바 구조

좌측 사이드바는 `KnowledgeSidebar.astro` 컴포넌트에서 관리됩니다.

```
📁 Physical AI
├── Overview          → /knowledge/physical-ai
├── 색인              → /knowledge/physical-ai/browse
│
├── 📂 에세이 (essays)
│   ├── 📋 에세이 목록    → 인덱스 없음 (Overview가 역할)
│   ├── 📁 입문 가이드 (fundamentals/)
│   │   └── 문서들...
│   └── 📁 인사이트 (insights/)
│       └── 문서들...
│
├── 📂 모델 (models)
│   ├── 📋 모델 목록      → /knowledge/models/
│   └── 문서들...        (서브카테고리 없음, 플랫 구조)
│
├── 📂 기업 (companies)
│   ├── 📋 기업 목록      → /knowledge/companies/
│   └── 문서들...        (서브카테고리 없음, 플랫 구조)
│
├── 📂 하드웨어 (hardware)
│   ├── 📋 하드웨어 목록  → /knowledge/hardware/
│   ├── 📁 humanoids/   휴머노이드
│   ├── 📁 quadrupeds/  4족 보행
│   ├── 📁 arms/        로봇 팔
│   ├── 📁 hands/       로봇 손
│   ├── 📁 mobile/      모바일
│   └── 📁 misc/        기타
│
└── 📂 인물 (people)
    ├── 📋 인물 목록      → /knowledge/people/
    └── 문서들...        (서브카테고리 없음, 플랫 구조)

※ `physical-ai`와 `glossary`도 content schema에서 허용되는 카테고리입니다. 현재 사이드바에서는 `physical-ai`를 상단 Overview/색인으로 다루고, `glossary`는 별도 링크로 다룹니다.
```

### 서브카테고리가 있는 카테고리

| 카테고리 | 서브카테고리 |
|---------|-------------|
| essays | `fundamentals/`, `insights/` |
| hardware | `humanoids/`, `quadrupeds/`, `arms/`, `hands/`, `mobile/`, `misc/` |

### 서브카테고리가 없는 카테고리

| 카테고리 | 구조 |
|---------|------|
| models | 플랫 (모든 파일이 `models/` 직접 하위) |
| companies | 플랫 |
| people | 플랫 |
| glossary | 플랫 |

---

## 파일 구조

```
src/content/knowledge/
├── ko/                         # 한국어
│   ├── physical-ai/
│   │   └── index.md            # Overview 문서
│   ├── essays/
│   │   ├── index.md            # ❌ 사이드바에 표시 안됨
│   │   ├── fundamentals/
│   │   │   └── *.md
│   │   └── insights/
│   │       └── *.md
│   ├── models/
│   │   ├── index.md            # ✅ 카테고리 인덱스
│   │   └── *.md
│   ├── companies/
│   │   ├── index.md            # ✅ 카테고리 인덱스
│   │   └── *.md
│   ├── hardware/
│   │   ├── index.md            # ✅ 카테고리 인덱스
│   │   ├── humanoids/*.md
│   │   ├── arms/*.md
│   │   └── ...
│   └── people/
│       ├── index.md            # ✅ 카테고리 인덱스
│       └── *.md
│   └── glossary/
│       └── index.md            # ✅ 용어집
└── en/                         # 영어 (동일 구조)
    └── ...
```

---

## 내부 링크 규칙

### ✅ 올바른 링크 형식

```markdown
# 같은 디렉토리 내 문서
[OpenVLA](./openvla)

# 상위 디렉토리의 다른 카테고리
[Physical Intelligence](../companies/physical-intelligence)
[Chelsea Finn](../people/chelsea-finn)

# 서브카테고리가 있는 경우
[Atlas](../hardware/humanoids/atlas)
[VLA란?](../essays/fundamentals/what-is-rfm-vla)

# 인덱스 페이지 링크
[모델 목록](./)
[기업 목록](../companies/)
```

### ❌ 사용 금지

```markdown
# index 직접 참조 - URL 해석 오류 발생
[모델 목록](index)        ❌
[모델 목록](./index)      ❌

# .md 확장자 - 불필요
[OpenVLA](./openvla.md)   ❌
```

### 링크 형식 요약

| 대상 | 형식 |
|------|------|
| 같은 폴더 문서 | `[제목](./filename)` |
| 다른 카테고리 | `[제목](../category/filename)` |
| 서브카테고리 문서 | `[제목](../category/subcategory/filename)` |
| 인덱스 페이지 | `[제목](./)` 또는 `[제목](../category/)` |

---

## 카테고리 인덱스 문서

각 카테고리에는 `index.md`가 있으며, 해당 카테고리의 모든 문서를 목록화합니다.

### 인덱스 파일 위치

- `ko/models/index.md` - 모델 목록
- `ko/companies/index.md` - 기업 목록
- `ko/people/index.md` - 인물 목록
- `ko/hardware/index.md` - 하드웨어 목록
- `ko/essays/index.md` - 에세이 (⚠️ 사이드바에 미표시, Overview가 역할)
- `ko/glossary/index.md` - 용어집

### ⚠️ 인덱스 업데이트 규칙

**새 문서 추가 시 반드시 해당 카테고리의 index.md도 업데이트**

1. 새 문서의 링크 추가
2. 간단한 설명 포함
3. 한국어/영어 양쪽 모두 업데이트

### 인덱스 문서 형식 예시

```markdown
---
title: "모델 목록"
description: "Physical AI 모델 아카이브"
category: "models"
---

## VLA 파운데이션 모델

### Google DeepMind
- [RT 시리즈](./rt) - RT-1, RT-2, RT-X 등 로보틱스 트랜스포머
- [Gemini Robotics](./gemini-robotics) - Gemini 2.0 기반 로보틱스 모델

### Physical Intelligence
- [π0](./pi0) - 최초의 Generalist Policy
- [π0.5](./pi0-5) - 웹 데이터 활용 확장

## 모방 학습 모델

- [ACT](./act) - Action Chunking Transformer
- [Diffusion Policy](./diffusion-policy) - 확산 모델 기반 정책

...
```

---

## 그래프 색인 (자동 업데이트)

`/knowledge/physical-ai/browse` 페이지의 그래프는 **자동으로 업데이트**됩니다.

### 작동 원리

`src/utils/graphData.ts`가 빌드 시점에:

1. 모든 마크다운 문서의 **본문 내 링크**를 파싱
2. Frontmatter의 **`related` 필드**를 읽음
3. 노드(문서)와 엣지(연결)를 자동 생성

### 그래프에 연결 추가하는 방법

#### 방법 1: 본문에 마크다운 링크 추가

```markdown
이 모델은 [Physical Intelligence](../companies/physical-intelligence)에서 개발했으며,
[Chelsea Finn](../people/chelsea-finn)이 공동 창업자입니다.
```

#### 방법 2: Frontmatter의 related 필드 사용

```yaml
---
title: "π0"
related:
  - companies/physical-intelligence
  - people/chelsea-finn
  - models/openvla
---
```

### 그래프 노드 크기

- **에세이**: 기본 크기 더 큼 (중심 허브 역할)
- **연결 많은 문서**: 크기 증가
- 카테고리별 색상:
  - essays: 노란색 (#eab308)
  - models: 파란색 (#3b82f6)
  - companies: 초록색 (#10b981)
  - hardware: 보라색 (#a78bfa)
  - people: 분홍색 (#f472b6)
  - physical-ai/glossary: 현재 graph color map에는 명시 색상이 없어 fallback 색상을 사용할 수 있음

### 현재 구현상 주의점

- 그래프 링크 해석은 `src/utils/graphData.ts`에서 build 시점에 수행됩니다.
- graph node 색상/카테고리 label은 schema, sidebar, document page, graph 관련 컴포넌트에 일부 중복되어 있습니다. 새 카테고리를 추가할 때는 `src/content/config.ts`뿐 아니라 표시 로직도 함께 확인해야 합니다.
- `knowledge/[...slug].astro`는 현재 일부 index 문서(`physical-ai/index.md`, `essays/index.md`)와 explicit route가 겹쳐 build warning을 낼 수 있습니다.

---

## 새 문서 추가 체크리스트

### 1. 파일 생성

```bash
# 한국어
touch src/content/knowledge/ko/{category}/{filename}.md

# 영어 (필수)
touch src/content/knowledge/en/{category}/{filename}.md
```

### 2. Frontmatter 작성

```yaml
---
title: "문서 제목"
description: "간단한 설명 (150자 이내)"
category: "models"  # physical-ai | essays | models | companies | hardware | people | glossary
tags: [tag1, tag2]
related:
  - category/related-doc-1
  - category/related-doc-2
---
```

### 3. 본문에 관련 문서 링크 추가

다른 문서와의 연결을 위해 본문에 링크를 적극적으로 추가합니다.

### 4. 카테고리 인덱스 업데이트

해당 카테고리의 `index.md`에 새 문서 추가:
- `ko/{category}/index.md`
- `en/{category}/index.md`

### 5. 빌드 확인

```bash
npm run build
```

---

## See Also 섹션

문서 마지막에 관련 문서 링크를 추가합니다.

### 형식

```markdown
## See Also

- [관련 모델](../models/related-model)
- [관련 기업](../companies/related-company)
- [관련 인물](../people/related-person)
```

### 규칙

- 상대 경로 사용 (`../` 또는 `./`)
- 3-5개 정도의 관련 문서 링크 권장
- frontmatter의 `related` 필드와 일관성 유지

---

## i18n 동기화

### ⚠️ 필수 규칙

**한국어 콘텐츠 수정 시 반드시 영어 버전도 함께 업데이트**

### 작업 순서

1. 한국어 콘텐츠 작성/수정
2. 동일한 경로의 영어 파일도 번역/수정
3. 새 파일 추가 시 양쪽 모두에 파일 생성

### 예시

```
ko/models/new-model.md 추가 시
→ en/models/new-model.md도 함께 생성

ko/essays/insights/new-insight.md 수정 시
→ en/essays/insights/new-insight.md도 함께 수정
```
