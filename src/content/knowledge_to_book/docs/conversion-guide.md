# Knowledge Base → 책 원고 변환 가이드

이 가이드는 `knowledge/ko/` 의 웹용 마크다운 문서를 책 출판용 원고로 변환하는 규칙을 정의한다.

## 개요

- **입력**: `src/content/knowledge/ko/` 의 웹용 마크다운 (`.md`)
- **출력**: `src/content/knowledge_to_book/` 의 책 원고용 마크다운
- **최종 변환**: Pandoc으로 `.docx` 생성

## 변환 규칙

### 1. YAML Frontmatter 제거

웹용 메타데이터는 책에 불필요하므로 전체 삭제한다.

**Before:**
```markdown
---
title: Physical AI의 정의
description: Physical AI란 무엇인가?
tags: [physical-ai, definition]
category: essays
order: 1
related:
  - specialist-to-generalist.md
createdBy:
  name: 박종현
lastEditedAt: 2026-01-23
---
```

**After:**
```markdown
(삭제)
```

### 2. 제목 체계 (번호 없이 작성)

**섹션 번호는 수동으로 넣지 않는다.** Pandoc의 `--number-sections` 옵션이 자동으로 번호를 부여하므로, 마크다운에는 제목 텍스트만 작성한다.

**Before:**
```markdown
## Physical AI, 용어의 등장

---

## 다양한 정의들
```

**After:**
```markdown
# Physical AI란 무엇인가

## Physical AI의 정의

### Physical AI, 용어의 등장

### 다양한 정의들
```

**주의**: `# 1장`, `## 1.1`, `### 1.1.1` 같은 명시적 번호를 넣지 않는다. Pandoc이 변환 시 자동으로 1, 1.1, 1.1.1 형태로 번호를 붙여준다.

### 3. 가로 구분선 제거

`---` 구분선은 모두 제거한다. 섹션 제목으로 구분이 충분하다.

**Before:**
```markdown
내용...

---

## 다음 섹션
```

**After:**
```markdown
내용...

## 다음 섹션
```

### 4. 문체 변경

경어체(~입니다, ~습니다)를 평서체(~다, ~한다)로 변경한다.

**Before:**
```markdown
Physical AI는 AI 업계의 핵심 화두가 되었습니다. 자세히 알아보겠습니다.
```

**After:**
```markdown
Physical AI는 AI 업계의 핵심 화두가 되었다. 자세히 알아보자.
```

### 5. 영상 임베드 처리

#### 5.1 YouTube iframe

`<iframe>` 태그를 `[TBD: 영상 캡처 이미지 삽입]` 플레이스홀더와 그림 캡션으로 변환한다.

**Before:**
```markdown
<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/AYSfcgVv9-U" title="What is Physical AI? - NVIDIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*출처: [NVIDIA Glossary](https://www.nvidia.com/...)*
```

**After:**
```markdown
[TBD: 영상 캡처 이미지 삽입]

**그림 1-1** NVIDIA "What is Physical AI?" 영상 [3]
```

#### 5.2 로컬 Video 태그

`<video>` 태그도 동일하게 처리한다.

**Before:**
```markdown
<video width="100%" controls>
  <source src="/assets/videos/dyna/dyna-cloth.mp4" type="video/mp4">
</video>

*Dyna Robotics의 빨래 접기 로봇 시연. 2025.09 CoRL 2025에서 촬영 — 박종현*
```

**After:**
```markdown
[TBD: 영상 캡처 이미지 삽입]

**그림 1-2** Dyna Robotics의 빨래 접기 로봇 시연. 2025년 9월 CoRL 2025에서 촬영 — 박종현
```

### 6. 인용 및 참조 처리

인라인 링크 인용을 `[n]` 텍스트 참조로 변환하고, 문서 마지막에 `## 참고문헌` 섹션을 추가한다.

**Before:**
```markdown
> "The next wave of AI..."
>
> — 젠슨 황, GTC 2024 ([NVIDIA Blog](https://blogs.nvidia.com/blog/2024-gtc-keynote/))
```

**After:**
```markdown
> "The next wave of AI..."
>
> — 젠슨 황, GTC 2024 [1]
```

문서 마지막:
```markdown
## 참고문헌

[1] NVIDIA Blog, "GTC 2024 Keynote," https://blogs.nvidia.com/blog/2024-gtc-keynote/

[2] HPC Wire, "Jensen Huang Charts NVIDIA's AI-Powered Future," https://www.hpcwire.com/...
```

### 7. QR 코드 제거

QR 코드는 사용하지 않는다. 참고문헌에 URL이 이미 포함되어 있으므로 중복이다.

**Before:**
```markdown
영상 링크 QR 코드:

![QR 코드](https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://...)
```

**After:**
```markdown
(삭제)
```

### 8. 표 캡션 추가

표 아래에 **표 N-M** 형식의 캡션을 추가한다.

**Before:**
```markdown
| 구분 | Classical Robotics | Physical AI |
|------|-------------------|-------------|
| ... | ... | ... |
```

**After:**
```markdown
| 구분 | Classical Robotics | Physical AI |
|------|-------------------|-------------|
| ... | ... | ... |

**표 1-1** Physical AI와 Classical Robotics 비교
```

### 9. 용어 변경

| Before | After |
|--------|-------|
| 본 글 | 본 책 |
| 다음 문서 | (섹션 제거) |
| ~입니다 | ~다 |
| ~겠습니다 | ~겠다 |

### 10. 웹 네비게이션 링크 제거

"다음 문서", "이전 문서" 같은 웹용 링크 섹션은 삭제한다.

**Before:**
```markdown
---

## 다음 문서

Physical AI가 추구하는 "범용 로봇(Generalist)"이...

**다음: [Specialist에서 Generalist로](/knowledge/essays/fundamentals/specialist-to-generalist)**
```

**After:**
```markdown
(삭제)
```

## 그림/표 번호 체계

- **그림**: `그림 {장번호}-{순번}` (예: 그림 1-1, 그림 1-2)
- **표**: `표 {장번호}-{순번}` (예: 표 1-1)

## Pandoc 변환 명령어

```bash
# 기본 변환 (목차 depth 3으로 설정)
pandoc 1.md -o 1.docx --number-sections --toc --toc-depth=3

# 이미지 추출 포함
pandoc 1.md -o 1.docx --number-sections --toc --toc-depth=3 --extract-media=media
```

### 옵션 설명

| 옵션 | 설명 |
|------|------|
| `--number-sections` | 섹션 자동 번호 매김 |
| `--toc` | 목차 생성 |
| `--toc-depth=N` | 목차에 포함할 헤딩 깊이 (3 = ### 까지) |
| `--extract-media=DIR` | 외부 이미지를 지정 폴더로 추출 |

## 체크리스트

변환 완료 후 확인 사항:

- [ ] YAML frontmatter 제거됨
- [ ] 장/섹션 번호 부여됨 (1.1, 1.2 형식)
- [ ] 가로 구분선 `---` 제거됨
- [ ] 문체가 평서체로 변경됨 (~다, ~한다)
- [ ] iframe/video → `[TBD: 영상 캡처 이미지 삽입]` + 그림 캡션
- [ ] 인라인 링크 → `[n]` 참조 + 참고문헌 섹션
- [ ] QR 코드 제거됨
- [ ] 표에 캡션 추가됨
- [ ] "본 글" → "본 책" 변경됨
- [ ] 웹 네비게이션 링크 제거됨
- [ ] 그림/표 번호가 장 번호와 일치함

## 파일 명명 규칙

```
{부번호}-{장번호}.md

예시:
1-1.md  → 1부 1장
1-2.md  → 1부 2장
2-1.md  → 2부 1장
```

## 디렉토리 구조

```
knowledge_to_book/
├── docs/
│   └── conversion-guide.md  # 이 가이드
├── samples/
│   └── sample.md            # Pandoc 테스트용 샘플
├── 1-1.md                   # 1부 1장 원고
├── 1-2.md                   # 1부 2장 원고
└── ...
```
