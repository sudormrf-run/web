---
title: Physical AI, 물리적 지능도 곧 온다
description: LLM AGI 이후, 물리적 지능의 시대가 열리고 있습니다
tags: [physical-ai, vla, rfm, overview, presentation]
category: essays
order: 1
related:
  - ../fundamentals/definition.md
  - ../fundamentals/what-is-rfm-vla.md
  - ../fundamentals/scaling-problem.md
  - ../insights/vla-rfm-progress.md
  - ../insights/physical-vs-cognitive.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-31
---

## 1. LLM, AGI, 그리고 Physical AI

LLM을 시작으로 한 AGI race는 인간 혹은 인간 이상의 지능을 구현하는 여정입니다.  
2026년 현재, 조만간 달성이 가능할 것으로 보입니다.

**그런데 이 지능은 Cognitive Intelligence(인지적인 지능)에 국한됩니다.**
- 코딩, 수학, 추론, 연구, 문학...

> **Physical Intelligence(물리적인 지능)를 푸는 여정은 또 다른 차원의 문제입니다.**

ChatGPT가 세상을 바꾸었듯이, **Physical AI가 물리적 노동의 세계를 바꿀 것**이라는 기대가 있습니다.

---

## 2. 최신 데모 살펴보기 (2026.01)

### CES 2026

### Boston Dynamics Atlas + LBM

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/wR2JG_vMXHA" title="Boston Dynamics Atlas - CES 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
이번 CES 의 최고 스타, 보스턴 다이나믹스의 ATLAS

> 과연 이 데모에는 "지능" 이 있을까?

---


<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/HYwekersccY" title="Boston Dynamics Atlas - Large Behavior Models" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Classical Robotics의 대표 주자 [Boston Dynamics](../../companies/boston-dynamics)도 Physical AI로 전환 중입니다.
- **450M Diffusion Transformer**: Toyota Research Institute(TRI)와 공동 개발
- 전신 단일 모델 제어: 보행 + 조작 통합
- 로프 묶기, 천 펼치기 같은 deformable 물체 조작

**→ 상세: [LBM (Large Behavior Model)](../../models/lbm-atlas)**


Sharpa CraftNet

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/W7q-qlj4EFc?start=82" title="Sharpa CES 2026 Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Sharpa](../../companies/sharpa)가 [CraftNet](../../models/craftnet)과 North 휴머노이드를 공개했습니다.
- **VTLA (Vision-Tactile-Language-Action)**: 촉각을 VLA에 통합한 최초의 상용 모델
- 바람개비 접기, 트럼프 카드 다루기 등 촉각이 필요한 데모를 선보임
- CES 2026 Innovation Award 수상


### Figure Helix 02

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/lQsvTrRTBRs" title="Figure Helix 02 - Official Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Figure AI](../../companies/figure)의 [Helix 02](../../models/figure-helix)는 최초의 전신 자율 휴머노이드입니다.
- **4분간 61개 연속 동작**: 리셋 없이, 인간 개입 없이
- **System 0/1/2 아키텍처**: 1kHz까지 고속 제어
- 109,504줄의 C++ 코드를 1천만 파라미터 신경망으로 대체

---

## 3. Physical AI란 무엇인가

> **End-to-end VLA 모델을 기반으로, 과거 rule-based 방식으로는 불가능했던 범용적(Generalist) 물리 작업을 수행하는 AI 시스템**

### 왜 Physical AI가 주목받는가?

**과거에 안 됐던 것이 지금은 됩니다.**

| 과거 (Classical Robotics) | 현재 (Physical AI) |
|--------------------------|-------------------|
| 정해진 동작만 수행 | 다양한 상황에 적응 |
| 빨래 개기 불가능 | 빨래 개기 가능 |
| Deformable 물체 조작 어려움 | 비닐 포장, 로프 조작 가능 |

### Classical Robotics vs Physical AI

| 구분 | Classical Robotics | Physical AI (VLA) |
|------|-------------------|-------------------|
| **아키텍처** | 모듈 분리 (인식 → 계획 → 제어) | End-to-end 통합 |
| **학습** | Rule-based + 부분적 ML | 데이터 기반 전체 학습 |
| **일반화** | 훈련 환경에 종속 | Zero-shot 일반화 가능 |
| **지식** | 도메인 특화 | World Knowledge 계승 (LLM/VLM) |

**→ 상세: [Physical AI의 정의](../fundamentals/definition)**

---

## 4. VLA, RFM, LBM 용어 정리

### LLM에서 VLA로의 진화

```
LLM → VLM → VLA
언어 → + 시각 → + 행동
```

| 용어 | 풀네임 | 설명 |
|------|--------|------|
| **VLA** | Vision-Language-Action | 시각 + 언어 + 행동을 통합한 모델 |
| **LBM** | Large Behavior Model | Action을 Behavior로 표현. VLA와 동일 |
| **RFM** | Robot Foundation Model | 로봇을 위한 Foundation Model |

### VLA가 특별한 이유

> **LLM은 상식이 있습니다. 그러니까 VLA도 상식이 있습니다.**

- 인터넷의 모든 지식을 학습한 LLM의 **World Knowledge**를 계승
- 다른 카페에 가도, 신메뉴가 나와도 일을 할 수 있음
- 다양한 모양의 택배가 와도, 다양한 디자인의 옷이 와도 처리 가능

**→ 상세: [RFM & VLA란 무엇인가](../fundamentals/what-is-rfm-vla)**

---

## 5. 데이터 Scaling 문제

VLA가 LLM의 성공 공식을 그대로 따라가기 어려운 이유가 있습니다.

### LLM과 VLA의 차이

| 구분 | LLM | VLA |
|------|-----|-----|
| 데이터 소스 | 인터넷 (무한) | 실제 로봇 동작 (제한) |
| 수집 비용 | 낮음 | 높음 |
| Evaluation | 자동화 가능 | 실물 로봇 구동 필요 |

### 해결 시도들

| 접근법 | 주체 | 설명 |
|--------|------|------|
| [Teleoperation](../insights/teleoperation) | Tesla, Google, PI | 직접 데이터 수집 |
| [시뮬레이션](../insights/simulation-world-model) | NVIDIA | Omniverse + Cosmos |
| [커뮤니티](../insights/community-driven) | HuggingFace | 오픈소스 협력 |
| World Model | 1X, NVIDIA | 합성 데이터 생성 |

**→ 상세: [Action Data Scaling 문제](../fundamentals/scaling-problem)**

---

## 6. VLA & RFM 발전 과정

### 수렴 진화: System 1/2 아키텍처

2025년, 서로 다른 연구 그룹들이 독립적으로 **비슷한 구조에 도달**했습니다.

| 시스템 | 역할 | 주파수 |
|--------|------|--------|
| **System 2** | 고수준 계획, 언어/시각 이해 | 7-10 Hz |
| **System 1** | 저수준 모터 제어 | 100-200 Hz |

**채택한 모델들:**
- GR00T N1.6 (NVIDIA)
- Figure Helix (Figure AI)
- Gemini Robotics (Google DeepMind)

### 수렴 진화: 연속 액션 생성

RT-2의 "Action as Language" (이산 토큰) → **Flow Matching / Diffusion** (연속 값)

| 모델 | 방식 | 특징 |
|------|------|------|
| [π0](../../models/pi0) | Flow Matching | 50Hz 제어 |
| [GR00T N1](../../models/groot-n1) | Diffusion Transformer | 듀얼 시스템 |
| [SmolVLA](../../models/smolvla) | Flow Matching | 450M 경량 |

**→ 상세: [VLA & RFM 발전 과정](../insights/vla-rfm-progress)**

---

## 7. Physical vs Cognitive Intelligence

### Moravec's Paradox

> **"고차원적 추론은 적은 계산을 요구하지만, 저수준의 감각운동 기술은 엄청난 계산을 요구한다."**

| 쉬운 것 (AI 기준) | 어려운 것 (AI 기준) |
|------------------|-------------------|
| 체스 세계 챔피언 | 주머니에서 열쇠 꺼내기 |
| 바둑 고수 | 접시 설거지하기 |
| 복잡한 수식 작성 | 과일 집기 |

체스 챔피언을 이기는 AI는 1997년에 만들어졌지만, **주머니에서 열쇠 꺼내기는 아직도 잘 안 됩니다.**

### 왜 물리적 지능이 어려운가?

1. **진화적 관점**: 운동/감각/지각은 ~10억 년, 추상적 사고는 ~수백만 년
2. **차원의 문제**: 텍스트는 추상화된 저차원, 물리 세계는 고차원 + 실시간 상호작용
3. **학습 방식의 차이**: 사람은 경험으로 배움, VLA는 주로 모방 학습

**→ 상세: [Physical vs Cognitive Intelligence](../insights/physical-vs-cognitive)**

---

## 8. Conclusion: 그래도 가능할 것 같다

**낙관적인 이유:**

- 인간의 노동 중 많은 부분은 꼭 촉각이 없어도 가능
- 로봇은 인간에게 없는 감각(depth 카메라 등)을 추가할 수 있음
- 인간의 신체로는 불가능한 움직임이 로봇은 가능
- 테슬라 FSD가 자율주행에서 보여준 것처럼, 인간과 다른 방식으로 구현 가능

> **LLM을 통해 많은 것을 배운 인류는 금방 정답을 찾을 것만 같습니다.**

---

## 더 알아보기

### 입문 가이드

1. [Physical AI의 정의](../fundamentals/definition)
2. [RFM & VLA란 무엇인가](../fundamentals/what-is-rfm-vla)
3. [Action Data Scaling 문제](../fundamentals/scaling-problem)

### 인사이트

- [Physical vs Cognitive Intelligence](../insights/physical-vs-cognitive)
- [VLA & RFM 발전 과정](../insights/vla-rfm-progress)
- [휴머노이드 디자인](../insights/humanoid-design)
- [촉각의 필요성](../insights/tactile-sensing)

### 주요 모델

- [π0 / π0.5](../../models/pi0) - Physical Intelligence
- [GR00T N1](../../models/groot-n1) - NVIDIA
- [Figure Helix](../../models/figure-helix) - Figure AI
- [LBM](../../models/lbm-atlas) - Boston Dynamics + TRI
- [CraftNet](../../models/craftnet) - Sharpa
