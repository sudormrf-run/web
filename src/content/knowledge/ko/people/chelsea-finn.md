---
title: Chelsea Finn
description: Stanford 교수, Physical Intelligence 공동창업자
tags: [chelsea-finn, stanford, physical-intelligence, meta-learning, act, aloha]
category: people
---

# Chelsea Finn

> Home > People > Chelsea Finn

---

## Profile

| 항목 | 내용 |
|------|------|
| 현직 | Stanford University 조교수 |
| 연구실 | IRIS Lab (Intelligence through Robotic Interaction at Scale) |
| 회사 | Physical Intelligence 공동창업자 |
| PhD | UC Berkeley (Advisor: Sergey Levine, Pieter Abbeel) |
| 학력 | MIT 학부 (EECS) |

---

## 핵심 기여

- **Meta-Learning 선구자**: MAML로 few-shot learning의 새 패러다임 제시
- **ACT & ALOHA**: 저비용 양팔 조작 시스템과 학습 알고리즘으로 로봇 학습 민주화
- **Physical Intelligence 창업**: 범용 로봇 AI 회사 공동창업
- **Robot Learning from Humans**: 인간 시연 기반 로봇 학습 연구의 핵심 인물

---

## Research Timeline

### PhD & Early Career (2013-2018)

**UC Berkeley - Sergey Levine, Pieter Abbeel 지도**

| Year | Work | Impact |
|------|------|--------|
| 2016 | End-to-End Training of Deep Visuomotor Policies | 이미지→액션 end-to-end 학습 |
| 2017 | **MAML** (Model-Agnostic Meta-Learning) | Few-shot learning 혁신, 10,000+ 인용 |
| 2017 | One-Shot Visual Imitation Learning | 한 번 보고 따라하기 |
| 2018 | Meta-Learning for Robot Learning | 로봇에 meta-learning 적용 |

### Stanford Professor (2019-present)

**IRIS Lab 설립**

| Year | Work | Impact |
|------|------|--------|
| 2019 | IRIS Lab 설립 | 대규모 로봇-인간 상호작용 연구 |
| 2021 | Offline RL 연구 | 오프라인 데이터로 로봇 학습 |
| 2023 | **ACT** (Action Chunking with Transformers) | 10분 시연으로 정밀 조작 |
| 2023 | **ALOHA** | $20K 저비용 양팔 시스템 |
| 2023 | Mobile ALOHA | 이동형 양팔 로봇 |

### Physical Intelligence (2024-present)

Physical Intelligence 공동창업, π0 개발 참여

---

## Major Publications

### Meta-Learning
- **MAML** (ICML 2017) - 가장 영향력 있는 논문
- Probabilistic MAML (NeurIPS 2018)
- Meta-Learning without Memorization (NeurIPS 2020)

### Robot Learning
- **ACT** (RSS 2023) - ALOHA와 함께 발표
- Learning from Play (CoRL 2019)
- RoboNet (CoRL 2019)

### Imitation Learning
- One-Shot Imitation Learning (NIPS 2017)
- Learning to Learn with Compound HD Models (ICML 2019)

---

## Key Ideas

### MAML (2017)
```
핵심: 새로운 태스크에 몇 번의 gradient step만으로 빠르게 적응하는 초기 파라미터 학습

θ* = θ - α∇θL(fθ')  where θ' = θ - β∇θL(fθ)
```

**영향:**
- Few-shot learning의 표준 방법론
- 로봇, NLP, 컴퓨터 비전 전반에 적용
- 10,000+ 인용

### ACT & ALOHA (2023)
- **Action Chunking**: 단일 액션 대신 액션 시퀀스 예측
- **저비용 하드웨어**: 연구실에서 재현 가능한 $20K 시스템
- **LeRobot 기본 모델**: 오픈소스 생태계 영향

---

## Philosophy & Direction

### 연구 철학
> "로봇이 실제 세계에서 일반화하려면, 대규모 다양한 경험이 필요하다"

### 연구 방향 변화
1. **2013-2017**: Deep RL, end-to-end learning
2. **2017-2020**: Meta-learning, few-shot adaptation
3. **2020-2023**: Imitation learning, offline RL
4. **2023-현재**: Large-scale robot learning, foundation models

---

## Awards & Recognition

- MIT Technology Review 35 Under 35 (2019)
- NSF CAREER Award
- Sloan Research Fellowship
- ONR Young Investigator Award
- ACM Doctoral Dissertation Award Honorable Mention

---

## Links

- [Stanford Profile](https://ai.stanford.edu/~cbfinn/)
- [IRIS Lab](https://irislab.stanford.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=vfPE6hgAAAAJ)
- [Twitter/X](https://twitter.com/chelseabfinn)

---

## See Also

- [ACT](../models/act.md)
- [Sergey Levine](sergey-levine.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
- [π0](../models/pi0.md)
