---
title: Action Data Scaling 문제
description: VLA가 LLM처럼 쉽게 스케일링되지 않는 이유
tags: [scaling, action-data, challenge]
category: essays
order: 4
related:
  - ../insights/teleoperation.md
  - ../insights/simulation-world-model.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-29
---

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/action_data_example.mp4" type="video/mp4" />
</video>
*LeRobot Dataset 형식의 액션 데이터 예시*, 각 관절의 state 값들이 기록되어 있으나, 인터넷에는 이러한 데이터가 기록되어 있지 않다.

---

## 핵심 문제

LLM을 확장해서 VLA가 구현 가능할 것 같고, 그렇다면 아주 거대한 노동 시장에 영향을 줄 것 같습니다.

> 그러나 VLA가 LLM의 성공 공식을 그대로 따라가기 어려운 점들이 있습니다:

- **Action 데이터는 인터넷에 존재하지 않아** 바로 scaling 하는 것이 불가능합니다.
- **Evaluation은 실물 로봇을 구동하면서 동작을 봐야하는데**, 하드웨어 고장의 위험이나 환경 파괴 (예를 들면 접시를 깬다던가...) 위험이 너무 큽니다.
- 이 외에도 **Physical Intelligence에 대한 본질적인 이해**, 촉각 구현에 대한 어려움, dexterous 하드웨어 양산의 어려움 등 많은 문제들이 있습니다.

이 문서에서는 Action 데이터의 부족 문제를 다룹니다, 

---

## LLM과의 차이점

| 구분         | LLM      | VLA           |
| ---------- | -------- | ------------- |
| 데이터 소스     | 인터넷 (무한) | 실제 로봇 동작 (제한) |
| 수집 비용      | 낮음       | 높음            |
| Evaluation | 자동화 가능   | 실물 로봇 구동 필요   |

---

## 다양한 액션 데이터 수집 방법

위와 같은 문제를 해결하기 위해서 다양한 회사와 연구 집단들은 각기 다른 접근을 시도하고 있습니다.

## Teleoperation


## Old Days

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1957_teleop.mp4" type="video/mp4" />
</video>

*1957년 텔레오퍼레이션 시스템*

### ALOHA

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/aloha_teleop.mp4" type="video/mp4" />
</video>

*ALOHA 오픈소스 양팔 텔레오퍼레이션 시스템*

[ALOHA](https://tonyzhaozh.github.io/aloha/)는 Stanford에서 개발한 저비용 텔레오퍼레이션 시스템입니다. ACT(Action Chunking with Transformers) 논문에서 사용되었으며, 하드웨어 설계와 소프트웨어가 모두 오픈소스로 공개되어 있어 연구자들이 쉽게 재현할 수 있습니다.



### TESLA

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/tesla_teleop.mp4" type="video/mp4" />
</video>
  
  *Tesla 텔레오퍼레이션 데이터 수집 팀*

Tesla는 휴머노이드 로봇 Optimus의 텔레오퍼레이터에게 [시간당 48달러를 지급](https://interestingengineering.com/culture/teslapaying-to-train-optimus-robot)하며 Action 데이터를 수집하고 있습니다. 지원 조건으로는 5'7″ ~ 5'11″ (약 170~180cm) 신장, 하루 7시간 이상 걷기와 최대 30파운드(약 13.6kg) 하중 운반이 가능한 체력이 요구됩니다.

## UMI Style 데이터 수집

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/umi_demo.mp4" type="video/mp4" />
</video>

[UMI (Universal Manipulation Interface)](https://umi-gripper.github.io/)는 휴대용 그리퍼를 사용하여 로봇 없이도 조작 데이터를 수집할 수 있는 시스템입니다. 텔레오퍼레이션 장비 없이 사람이 직접 물체를 조작하는 동작을 기록하고, 이를 다양한 로봇에 전이할 수 있습니다.

## 시뮬레이션

### NVIDIA Isaac & Cosmos

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/nvidia_blueprint.mp4" type="video/mp4" />
</video>

*NVIDIA Isaac GR00T Synthetic Manipulation*

[NVIDIA Isaac GR00T Synthetic Manipulation](https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation)은 시뮬레이션 환경에서 합성 데이터를 생성하여 로봇 조작 학습에 활용하는 Blueprint입니다. 실제 로봇 데이터 수집 없이도 다양한 시나리오의 학습 데이터를 대량 생산할 수 있습니다.

## HuggingFace 의 커뮤니티

HuggingFace의 성공 공식
1. Open Source HW, SW
2. Data & Model Hub
3. Tutorial & Hackathon

커뮤니티 데이터를 이용해서 만든 VLA [smolVLA](https://huggingface.co/lerobot/smolvla_base).


## World Model + IDM

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1x_world_model.mp4" type="video/mp4" />
</video>

*1X World Model Self-Learning*

[1X](https://www.1x.tech/discover/world-model-self-learning)는 World Model과 IDM (Inverse Dynamics Model)을 활용하여 라벨링 없는 비디오 데이터로부터 로봇이 스스로 학습할 수 있는 방법을 연구하고 있습니다. 이 접근법은 Action 라벨 없이도 대규모 비디오 데이터를 활용할 수 있는 가능성을 보여줍니다.

보다 자세한 내용은 [VLM 백본의 한계와 World Model](../insights/vlm-limits-world-model)을 참조하세요.




## 보다 자세한 방법 설명

| 접근법                                         | 주체                                            | 설명                                                        |
| ------------------------------------------- | --------------------------------------------- | --------------------------------------------------------- |
| [Teleoperation](../insights/teleoperation)  | Tesla, Google, Physical Intelligence, Galaxea | 직접 데이터를 수집                                                |
| [Non-Teleop](../insights/non-teleop-data)   | UMI, Generalist, Sunday Robotics              | Non-Teleop 데이터로 학습 시도                                     |
| [시뮬레이션](../insights/simulation-world-model) | NVIDIA                                        | 물리 시뮬레이션(Omniverse)과 World Model(Cosmos)로 데이터를 생산, 증강, 평가 |
| [커뮤니티](../insights/community-driven)        | HuggingFace                                   | 오픈소스 정신으로 커뮤니티 드리븐 데이터 수집                                 |
| World Model                                 | 1X, NVIDIA                                    | Evaluation 자동화, VLA 백본 교체, 월드 모델로 합성 데이터 생성               |
| 분산 평가                                       | 학계                                            | OXE, RoboArena 등                                          |
| 기타                                          | 다양함                                           | 휴먼 비디오에서 Action 추출, 에고센트릭 데이터 수집 장비 등                     |

---





---

## 입문 가이드 완료

여기까지 Physical AI 입문 가이드를 마쳤습니다.

더 깊이 탐색하고 싶다면 [Physical AI 입문 가이드](../../physical-ai/)로 돌아가거나, 아래 인사이트 에세이를 살펴보세요.

### 다음으로 읽어볼 문서들

- [Physical vs Cognitive Intelligence](../insights/physical-vs-cognitive) - 물리적 지능에 대한 고찰
- [VLA & RFM 발전 과정](../insights/vla-rfm-progress) - VLA와 RFM의 진행 중인 발전 과정
- [휴머노이드 디자인](../insights/humanoid-design) - 휴머노이드의 디자인 문제
- [촉각 센싱](../insights/tactile-sensing) - 촉각은 과연 필요할까?
- [Teleoperation 방식](../insights/teleoperation) - 텔레오퍼레이션으로 데이터 수집
- [시뮬레이션 & World Model](../insights/simulation-world-model) - 합성 데이터와 월드 모델
