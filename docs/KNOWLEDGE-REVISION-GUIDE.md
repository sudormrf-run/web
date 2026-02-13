# Knowledge Base 퇴고 가이드

Knowledge Base 문서의 가독성을 높이기 위한 퇴고(수정/다듬기) 가이드입니다.

---

## 1. 영어 인용문 번역

### 원칙
- 영어 인용문은 **한국어 번역을 먼저** 제공하고, 원문을 괄호 안에 병기합니다.
- 인용문 블록 내에서 빈 줄(`>`)을 사용해 시각적으로 구분합니다.

### Before
```markdown
> "The next wave of AI will be AI learning about the physical world..."
> — Jensen Huang, GTC 2024
```

### After
```markdown
> "다음 AI의 물결은 물리 세계를 학습하는 AI가 될 것입니다..."
>
> ("The next wave of AI will be AI learning about the physical world...")
>
> — 젠슨 황, GTC 2024
```

---

## 2. 영어 이름 한국어 표기

### 원칙
- 인물 이름은 한국어 발음으로 표기합니다.
- 회사명, 제품명, 기술 용어는 영어 그대로 유지합니다.

### 예시
| Before | After |
|--------|-------|
| Jensen Huang | 젠슨 황 |
| Elon Musk | 일론 머스크 |
| Boston Dynamics | Boston Dynamics (유지) |
| Physical AI | Physical AI (유지) |

---

## 3. 전문 용어 한국어화

### 원칙
- 처음 등장 시: **한국어(영어)** 형식으로 병기
- 이후 등장 시: 한국어만 사용해도 무방

### 예시
| Before | After (첫 등장) | After (이후) |
|--------|----------------|-------------|
| rule-based | 규칙 기반(rule-based) | 규칙 기반 |
| Specialist | 특수 목적(Specialist) | 특수 목적 |
| end-to-end | 엔드투엔드(end-to-end) | end-to-end (유지 가능) |
| general | 범용적인(general) | 범용적인 |

### 예외 (영어 유지)
- VLA, LLM, MPC 등 약어
- Physical AI, ChatGPT 등 고유명사화된 용어

---

## 4. 문장 흐름 개선

### 원칙
- 인용문 뒤에는 **맥락 설명**을 추가합니다.
- 단순 나열보다 **논리적 연결**을 제공합니다.
- 독자가 "왜 이게 중요한지" 이해할 수 있도록 합니다.

### Before
```markdown
> "The ChatGPT moment for general robotics is just around the corner."
> — Jensen Huang

이후 Physical AI는 AI 업계의 핵심 화두가 되었습니다.
```

### After
```markdown
> "범용 로봇을 위한 ChatGPT 모먼트가 곧 다가올 것입니다."
>
> ("The ChatGPT moment for general robotics is just around the corner.")
>
> — 젠슨 황

ChatGPT는 2022년 말 출시와 함께 전세계를 뒤흔들고 있습니다. 그와 같은 순간이 로봇 업계에도 곧 벌어질 것이라고 예상하고 있습니다. Physical AI는 AI 업계의 핵심 화두가 되었습니다. 하지만 이 용어의 정의는 아직 통일되지 않고, 혼용되어 사용되고 있습니다. 자세히 한번 알아보겠습니다.
```

---

## 5. 헤딩 구조 조정

### 원칙
- 논리적 계층 구조를 유지합니다.
- 관련 섹션은 상위 헤딩 아래 그룹화합니다.
- 독립적인 `##` 헤딩이 너무 많으면 `###`로 묶어 정리합니다.

### Before
```markdown
## 주요 회사들의 접근법
...

## Classical Robotics도 변화하고 있다
...

## Physical AI vs Classical Robotics
...
```

### After
```markdown
## Physical AI의 정의를 뒷받침하는 근거들

### 주요 회사들의 접근법
...

### Classical Robotics도 변화하고 있다
...

### Physical AI vs Classical Robotics
...
```

---

## 6. 목록 형식 개선

### 원칙
- 단순 나열은 불릿 리스트로 통일합니다.
- 헤딩을 남발하지 않습니다.

### Before
```markdown
### Physical Intelligence
π0, π0.5 (VLA + Flow Matching, 50Hz 연속 동작)
### Google DeepMind
RT-2 → RT-X → Gemini Robotics
### Figure AI
Helix (자체 VLA)
```

### After
```markdown
- Physical Intelligence
  - π0, π0.5 (VLA + Flow Matching, 50Hz 연속 동작)
- Google DeepMind
  - RT-2 → RT-X → Gemini Robotics
- Figure AI
  - Helix (자체 VLA)
```

---

## 7. 불필요한 내용 정리

### 원칙
- 중복되는 인용문은 제거하거나 통합합니다.
- 핵심 메시지를 전달하는 인용문만 유지합니다.
- 영어 예시 문장이 길면 한국어 설명으로 대체합니다.

### Before
```markdown
- "pick up the bag about to fall off the table" 같은 **추론 기반 명령** 수행 가능
```

### After
```markdown
- **추론 기반 명령** 수행 가능
```

---

## 8. 섹션 마무리 문장 추가

### 원칙
- 각 섹션 끝에 **정리/요약 문장**을 추가합니다.
- 다음 섹션으로의 **자연스러운 연결**을 제공합니다.

### 예시
```markdown
물리 세상과 상호작용을 하는 모든 AI 기반 기술들을 Physical AI라고 정의할 수 있겠으나 이는 마케팅 용어와 같습니다. 딥러닝 기반의 물체 인식과 이를 이용한 로봇 제어는 기존에도 가능했던 영역이고, Physical AI라는 키워드가 부상하는 현 시점의 기술 트렌드와는 무관합니다. 따라서 본 글에서는 LLM의 시대에 새롭게 발전하고 있는 "범용적"인 기술로 Physical AI의 정의를 한정하고, 이에 집중하여 서술합니다.
```

---

## 체크리스트

퇴고 시 아래 항목을 점검하세요:

- [ ] 영어 인용문에 한국어 번역이 있는가?
- [ ] 인물 이름이 한국어로 표기되어 있는가?
- [ ] 전문 용어가 첫 등장 시 한국어로 설명되어 있는가?
- [ ] 인용문 뒤에 맥락 설명이 있는가?
- [ ] 헤딩 구조가 논리적인가?
- [ ] 불필요한 헤딩이 목록으로 변경되었는가?
- [ ] 중복/불필요한 인용문이 정리되었는가?
- [ ] 섹션 마무리 문장이 있는가?

---

## 참고

- 이 가이드는 `src/content/knowledge/ko/essays/fundamentals/definition.md` 퇴고 작업을 기반으로 작성되었습니다.
- 한국어 문서 수정 후 반드시 영어 버전(`en/` 경로)도 함께 업데이트해야 합니다.
