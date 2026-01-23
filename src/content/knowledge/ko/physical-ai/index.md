---
title: Physical AI 입문 가이드
description: Physical AI의 정의, 핵심 개념, 그리고 도전 과제를 안내하는 서론
category: physical-ai
order: 1
isFeatured: true
icon: robot

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

![GTC 2024 Jensen Huang 키노트](/images/humanoids_gtc_2024.jpg)
*GTC 2024 Jensen Huang 키노트 (2024년 3월 18일) — Physical AI의 시작을 알린 순간*

## Physical AI, 왜 갑자기 주목받는가?

2024년, NVIDIA의 Jensen Huang이 GTC에서 "Physical AI"를 선언한 이후, 이 키워드는 AI 업계의 핵심 화두가 되었습니다.

ChatGPT가 텍스트의 세계를 바꿨듯이, 이제 AI가 물리적 세계까지 확장될 것이라는 기대가 커지고 있습니다. 로봇이 빨래를 개고, 물류를 정리하고, 커피를 만드는 미래. 많은 사람들이 그 미래가 가까워졌다고 느끼고 있습니다.

하지만 Physical AI가 정확히 무엇인지, 왜 지금 가능해졌다고 생각하는지, 그리고 어떤 도전 과제가 있는지를 이해하는 것은 쉽지 않습니다.

**이 지식 창고는 Physical AI를 이해하기 위한 가이드입니다.**

---

## Physical AI의 정의

Physical AI에 대한 정의는 다양합니다. 어떤 사람들은 로보틱스 전반을 의미하기도 하고, 어떤 사람들은 embodied AI와 동의어로 사용하기도 합니다.

**본 페이지에서 정의하는 Physical AI의 범주:**

> **VLA(Vision-Language-Action) 모델을 중심으로, LLM의 지능을 물리적 행동으로 확장하는 기술과 그 생태계**

여기에는 다음이 포함됩니다:

- **VLA 모델**: 시각(Vision), 언어(Language), 행동(Action)을 통합하는 모델
- **Robot Foundation Model**: 범용 로봇을 위한 기반 모델
- **데이터 수집 방법론**: Teleoperation, 시뮬레이션, Human Video 등
- **평가 방법론**: 실제 로봇 평가, 시뮬레이션 벤치마크 등
- **하드웨어 생태계**: 휴머노이드, 로봇 팔, 그리퍼 등

---

## 무엇이 달라지는가?

과거의 로봇은 **Specialist**였습니다. 딱 하나의 일만 잘 했죠.

카페의 바리스타 로봇은 그 카페의 메뉴만 만들 수 있습니다. 체스 로봇은 특정 체스판에서만 동작합니다. 환경이 조금만 바뀌어도 동작하지 않는, 좁은 범위의 전문가들이었습니다.

**Physical AI가 추구하는 것은 Generalist입니다.**

다양한 환경에서, 다양한 물체를, 다양한 방식으로 다룰 수 있는 범용 로봇. 사람처럼 상식을 가지고, 처음 보는 상황에서도 적응할 수 있는 로봇.

**왜 지금 Generalist가 가능할 것 같을까요?** LLM의 성공 때문입니다.

자세한 내용은 **[Specialist에서 Generalist로](essays/fundamentals/specialist-to-generalist)** 문서를 참조하세요.

---

## 어떻게 구현하는가?

Generalist 로봇을 구현하는 핵심 기술이 바로 **VLA(Vision-Language-Action)** 모델입니다.

```
LLM → VLM → VLA
언어 → 언어 + 시각 → 언어 + 시각 + 행동
```

VLA는 LLM의 "World Knowledge"를 물려받습니다. LLM이 인터넷의 모든 텍스트를 학습해서 세상의 상식을 갖게 된 것처럼, VLA도 그 상식을 바탕으로 물리적 세계에서 행동합니다.

- **눈으로 보고** (Vision)
- **명령을 이해하고** (Language)
- **행동으로 옮긴다** (Action)

**[RFM & VLA란 무엇인가](essays/fundamentals/what-is-rfm-vla)** 문서에서 VLA의 개념과 용어를 자세히 정리했습니다.

---

## VLA는 만만치 않다

VLA가 LLM의 성공 공식을 그대로 따라갈 수 있을까요?

**쉽지 않습니다.**

가장 큰 문제는 **데이터 Scaling**입니다.

- LLM은 인터넷의 모든 텍스트를 학습할 수 있었습니다
- 하지만 Action 데이터는 인터넷에 존재하지 않습니다
- 로봇이 "컵을 집는" 데이터를 모으려면 실제로 로봇을 구동해야 합니다

**[Action Data Scaling 문제](essays/fundamentals/scaling-problem)** 문서에서 이 문제를 깊이 다룹니다.

평가(Evaluation)도 어렵습니다. 로봇을 실제로 구동하면서 성능을 측정해야 하는데, 시간도 오래 걸리고, 하드웨어가 고장날 수도 있고, 환경이 파괴될 수도 있습니다.

**[Evaluation의 어려움](essays/fundamentals/evaluation-problem)** 문서를 참조하세요.

---

## 그 외의 도전 과제들

Physical AI에는 VLA 외에도 수많은 도전 과제가 있습니다.

### 데이터 수집 방법론

- **[Teleoperation](essays/insights/teleoperation)**: 사람이 직접 로봇을 조종하며 데이터를 수집
- **[Non-Teleop 데이터](essays/insights/non-teleop-data)**: 텔레오퍼레이션 없이 데이터를 수집하는 방법들
- **[시뮬레이션 & World Model](essays/insights/simulation-world-model)**: 가상 환경에서 데이터를 생성하고 학습

### 하드웨어와 센싱

- **[휴머노이드 디자인](essays/insights/humanoid-design)**: 왜 휴머노이드인가? 디자인 철학과 트레이드오프
- **[촉각 센싱](essays/insights/tactile-sensing)**: 시각만으로는 부족하다. 로봇에게 촉각을 부여하는 기술

### 철학적 질문

- **[Physical AI vs Cognitive AI](essays/insights/physical-vs-cognitive)**: 물리적 지능과 인지적 지능의 차이는 무엇인가?

### 커뮤니티

- **[커뮤니티 접근](essays/insights/community-driven)**: 오픈소스 정신으로 함께 만들어가는 Physical AI 생태계

---

## 다음 단계

Physical AI를 체계적으로 이해하고 싶다면, **[에세이 - 입문 가이드](essays)** 섹션의 문서를 순서대로 읽어보세요.

특정 모델이나 기업, 하드웨어에 대해 알고 싶다면 좌측 사이드바에서 탐색하거나, **[그래프 색인](physical-ai/browse)**을 활용해 보세요.

---

## 관련 외부 리소스

- [LeRobot - HuggingFace](https://github.com/huggingface/lerobot) - 오픈소스 로봇 학습 프레임워크
- [Open X-Embodiment](https://robotics-transformer-x.github.io/) - 크로스 로봇 데이터셋
- [NVIDIA Isaac](https://developer.nvidia.com/isaac) - 로봇 시뮬레이션 플랫폼
