---
title: Sergey Levine
description: UC Berkeley 교수, Physical Intelligence 공동창업자, 로봇 RL의 대가
tags: [sergey-levine, berkeley, physical-intelligence, rt, reinforcement-learning]
category: people

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## Profile

| 항목 | 내용 |
|------|------|
| 현직 | UC Berkeley 부교수 |
| 연구실 | RAIL Lab (Robotic AI & Learning Lab) |
| 회사 | Physical Intelligence 공동창업자 |
| 이전 | Google Brain (2016-2021) |
| PhD | Stanford University |

---

## 핵심 기여

- **RT 시리즈의 핵심 인물**: RT-1, RT-2 개발에 참여, VLA 패러다임 정립
- **로봇 강화학습 선구자**: 실제 로봇에서 동작하는 RL 방법론 개발
- **Open X-Embodiment**: 33개 연구실 협력 데이터셋 주도
- **OpenVLA, Octo**: 오픈소스 VLA 모델 개발
- **Physical Intelligence 창업**: 범용 로봇 AI 회사 공동창업

---

## Research Timeline

### PhD & Postdoc (2009-2016)

**Stanford → UC Berkeley Postdoc**

| Year | Work | Impact |
|------|------|--------|
| 2013 | Guided Policy Search | Model-based RL의 초석 |
| 2015 | End-to-End Visuomotor Policies | 이미지→액션 직접 학습 |
| 2016 | Deep RL for Robotic Manipulation | 로봇 RL 실용화 |

### Google Brain (2016-2021)

**Google Robotics 연구**

| Year | Work | Impact |
|------|------|--------|
| 2017 | QT-Opt | 대규모 로봇 grasping |
| 2018 | Soft Actor-Critic (SAC) | 가장 많이 쓰이는 off-policy RL |
| 2020 | Offline RL Survey | 오프라인 RL 정립 |
| 2021 | Decision Transformer | RL을 sequence modeling으로 |

### UC Berkeley + Google (2021-2024)

**RT 시리즈, 오픈소스 VLA**

| Year | Work | Impact |
|------|------|--------|
| 2022 | **RT-1** | 첫 대규모 Robotics Transformer |
| 2023 | **RT-2** | 첫 VLA, Action as Language |
| 2023 | **RT-X** | Open X-Embodiment, 33개 연구실 협력 |
| 2024 | **Octo** | 93M 오픈소스 generalist policy |
| 2024 | **OpenVLA** | 7B 오픈소스 VLA |

### Physical Intelligence (2024-present)

Physical Intelligence 공동창업, π0 개발

---

## Major Publications

### Reinforcement Learning
- **SAC** (Soft Actor-Critic) - 가장 널리 쓰이는 off-policy RL
- **CQL** (Conservative Q-Learning) - Offline RL 핵심 방법
- **Decision Transformer** - RL as sequence modeling
- **Offline RL Tutorial** - 분야 정립

### Robot Learning
- **RT-1** (2022) - Robotics Transformer
- **RT-2** (2023) - Vision-Language-Action
- **RT-X** (2023) - Open X-Embodiment
- **Octo** (2024) - 오픈소스 generalist policy
- **OpenVLA** (2024) - 7B 오픈소스 VLA

### End-to-End Learning
- End-to-End Training of Deep Visuomotor Policies (2016)
- QT-Opt (2018) - 대규모 로봇 grasping

---

## Key Ideas

### SAC (Soft Actor-Critic, 2018)
```
핵심: Maximum entropy RL - 보상 최대화 + 정책 엔트로피 최대화

J(π) = Σ E[r(st,at) + αH(π(·|st))]
```

**영향:**
- 현재 가장 널리 쓰이는 continuous control RL 알고리즘
- 로봇, 게임, 시뮬레이션 전반에서 표준

### RT-2 & Action as Language (2023)
```
핵심: 로봇 액션을 텍스트 토큰으로 표현하여 VLM과 통합

[이미지 + 언어 지시] → VLM → [액션 토큰] → 로봇 제어
```

**영향:**
- VLA 패러다임의 시작
- 이후 모든 VLA 모델이 이 방식 채택

### Open X-Embodiment (2023)
- 33개 연구실 협력
- 22종 로봇, 1M+ 에피소드
- 오픈소스 데이터셋으로 연구 민주화

---

## Philosophy & Direction

### 연구 철학
> "로봇 학습의 핵심은 데이터. 더 많은 데이터, 더 다양한 데이터가 일반화의 열쇠다."

### 연구 방향 변화
1. **2009-2015**: Model-based RL, trajectory optimization
2. **2015-2018**: End-to-end deep RL
3. **2018-2021**: Off-policy RL, offline RL
4. **2021-2023**: Large-scale robot learning, foundation models
5. **2023-현재**: VLA, 범용 로봇 AI

---

## Students & Mentees

Sergey Levine 연구실 출신:
- Chelsea Finn (Stanford 교수)
- Aviral Kumar (Google DeepMind)
- Ilya Kostrikov (Google DeepMind)
- 다수의 로봇/RL 연구자

---

## Awards & Recognition

- IEEE RAS Early Career Award
- Sloan Research Fellowship
- NSF CAREER Award
- ICML Best Paper (multiple)

---

## Links

- [UC Berkeley Profile](https://people.eecs.berkeley.edu/~svlevine/)
- [RAIL Lab](https://rail.eecs.berkeley.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=8R35rCwAAAAJ)
- [Twitter/X](https://twitter.com/svaborisov)

---

## See Also

- [RT](../models/rt)
- [OpenVLA](../models/openvla)
- [Octo](../models/octo)
- [Chelsea Finn](chelsea-finn)
- [Physical Intelligence](../companies/physical-intelligence)
