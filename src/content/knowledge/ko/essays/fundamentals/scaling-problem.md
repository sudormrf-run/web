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

*LeRobot Dataset 형식의 액션 데이터(Action Data) 예시.* 각 관절의 상태(state) 값들이 기록되어 있으나, 인터넷에는 이러한 데이터가 존재하지 않습니다.

---

## 핵심 문제

LLM을 확장해서 VLA가 구현 가능할 것 같고, 그렇다면 아주 거대한 노동 시장에 영향을 줄 것 같습니다. 그러나 VLA가 LLM의 성공 공식을 그대로 따라가기 어려운 근본적인 장벽들이 있습니다:

- **액션 데이터(Action Data)는 인터넷에 존재하지 않습니다.** LLM은 인터넷의 방대한 텍스트 데이터를 활용해 스케일링(scaling)할 수 있었지만, 로봇의 동작 데이터는 인터넷 어디에도 기록되어 있지 않아 바로 스케일링하는 것이 불가능합니다.
- **평가(Evaluation)는 실물 로봇을 구동해야 합니다.** 하드웨어 고장의 위험이나 환경 파괴(예를 들어 접시를 깨뜨리는 것) 위험이 너무 커서, LLM처럼 자동화된 벤치마크를 구축하기 어렵습니다.
- **그 외에도 본질적인 어려움들이 있습니다.** 물리적 지능(Physical Intelligence)에 대한 본질적인 이해 부족, 촉각 센서 구현의 어려움, 손재주 있는(dexterous) 하드웨어 양산의 어려움 등 많은 문제들이 산적해 있습니다.

이 문서에서는 특히 **액션 데이터의 부족 문제**와 이를 해결하기 위한 다양한 접근법을 다룹니다.

---

## LLM과의 차이점

| 구분 | LLM | VLA |
|------|-----|-----|
| 데이터 소스 | 인터넷 (사실상 무한) | 실제 로봇 동작 (제한적) |
| 수집 비용 | 낮음 | 높음 |
| 평가(Evaluation) | 자동화 가능 | 실물 로봇 구동 필요 |

*표: LLM과 VLA의 데이터 수집 및 평가 방식 비교 — VLA 스케일링이 어려운 근본적인 이유*

LLM은 인터넷에 축적된 방대한 텍스트 데이터를 학습에 활용할 수 있었고, 생성된 텍스트의 품질도 자동으로 평가할 수 있습니다. 반면 VLA는 실제 로봇을 움직여 데이터를 수집해야 하고, 동작의 성공 여부도 물리적으로 확인해야 합니다. 이것이 VLA 스케일링의 근본적인 병목입니다.

---

## 다양한 액션 데이터 수집 방법

위와 같은 문제를 해결하기 위해 다양한 회사와 연구 집단들은 각기 다른 접근을 시도하고 있습니다. 아래에서 주요 방법들을 살펴보겠습니다.

### 텔레오퍼레이션(Teleoperation)

텔레오퍼레이션은 사람이 원격으로 로봇을 조종하면서 동작 데이터를 수집하는 방식입니다. 가장 직접적인 데이터 수집 방법이지만, 사람의 노동력이 필요하다는 한계가 있습니다.

#### 1957년: 텔레오퍼레이션의 시작

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1957_teleop.mp4" type="video/mp4" />
</video>

*1957년 텔레오퍼레이션 시스템.* 원격 조종 로봇의 역사는 생각보다 깁니다.

#### ALOHA

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/aloha_teleop.mp4" type="video/mp4" />
</video>

*ALOHA 오픈소스 양팔 텔레오퍼레이션 시스템*

[ALOHA](https://tonyzhaozh.github.io/aloha/)는 Stanford에서 개발한 저비용 텔레오퍼레이션 시스템입니다. ACT(Action Chunking with Transformers) 논문에서 사용되었으며, 하드웨어 설계와 소프트웨어가 모두 오픈소스로 공개되어 연구자들이 쉽게 재현할 수 있습니다. 이 시스템의 공개는 로봇 학습 연구의 민주화에 크게 기여했습니다.

#### Tesla

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/tesla_teleop.mp4" type="video/mp4" />
</video>

*Tesla 텔레오퍼레이션 데이터 수집 팀*

Tesla는 휴머노이드 로봇 Optimus의 텔레오퍼레이터에게 [시간당 48달러를 지급](https://interestingengineering.com/culture/teslapaying-to-train-optimus-robot)하며 액션 데이터를 수집하고 있습니다. 지원 조건으로는 5'7″ ~ 5'11″ (약 170~180cm) 신장, 하루 7시간 이상 걷기와 최대 30파운드(약 13.6kg) 하중 운반이 가능한 체력이 요구됩니다. 이는 텔레오퍼레이터의 동작이 실제 로봇에 그대로 반영되기 때문입니다.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/guP1HM2iTW0?start=7725" title="Tesla Optimus Teleoperation Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*VR 텔레오퍼레이션 시연*

실제로 VR 기기를 착용하고 텔레오퍼레이션을 수행해보면, 장시간 지속하는 것이 매우 어렵습니다. VR 헤드셋의 무게와 시야 제한, 컨트롤러를 쥔 상태에서의 반복 동작은 몇 시간만 지나도 심각한 피로를 유발합니다. 이것이 텔레오퍼레이션 기반 데이터 수집의 근본적인 병목 중 하나입니다.

---

### UMI 방식 데이터 수집

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/umi_demo.mp4" type="video/mp4" />
</video>

*UMI 데이터 수집 시스템*

[UMI (Universal Manipulation Interface)](https://umi-gripper.github.io/)는 휴대용 그리퍼를 사용하여 로봇 없이도 조작 데이터를 수집할 수 있는 시스템입니다. 텔레오퍼레이션 장비 없이 사람이 직접 물체를 조작하는 동작을 기록하고, 이를 다양한 로봇에 전이(transfer)할 수 있습니다.

이 접근법의 장점은 로봇 하드웨어 없이도 데이터를 수집할 수 있어, 데이터 수집의 확장성이 크게 향상된다는 점입니다.

---

### 시뮬레이션(Simulation)

#### NVIDIA Isaac & Cosmos

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/nvidia_blueprint.mp4" type="video/mp4" />
</video>

*NVIDIA Isaac GR00T Synthetic Manipulation*

[NVIDIA Isaac GR00T Synthetic Manipulation](https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation)은 시뮬레이션 환경에서 합성 데이터(synthetic data)를 생성하여 로봇 조작 학습에 활용하는 Blueprint입니다. 실제 로봇 데이터 수집 없이도 다양한 시나리오의 학습 데이터를 대량 생산할 수 있습니다.

시뮬레이션 기반 접근법은 데이터 수집 비용을 크게 낮출 수 있지만, 시뮬레이션과 현실 사이의 격차(sim-to-real gap)를 극복하는 것이 핵심 과제입니다.

---

### HuggingFace 커뮤니티

HuggingFace는 오픈소스 생태계를 통해 커뮤니티 기반 데이터 수집을 추진하고 있습니다. 성공 공식은 다음과 같습니다:

- **Open Source HW, SW**: 하드웨어와 소프트웨어 설계를 공개하여 누구나 참여 가능
- **Data & Model Hub**: 데이터셋과 모델을 공유할 수 있는 중앙 허브 제공
- **Tutorial & Hackathon**: 교육 자료와 해커톤으로 커뮤니티 참여 유도

커뮤니티 데이터를 활용해 학습한 VLA인 [smolVLA](https://huggingface.co/lerobot/smolvla_base)는 이 접근법의 성과를 보여줍니다.

---

### World Model + IDM

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1x_world_model.mp4" type="video/mp4" />
</video>

*1X World Model Self-Learning*

[1X](https://www.1x.tech/discover/world-model-self-learning)는 월드 모델(World Model)과 IDM(Inverse Dynamics Model, 역동역학 모델)을 활용하여 라벨링 없는 비디오 데이터로부터 로봇이 스스로 학습할 수 있는 방법을 연구하고 있습니다. 이 접근법은 액션 라벨 없이도 대규모 비디오 데이터를 활용할 수 있는 가능성을 보여줍니다.

인터넷에는 로봇 액션 데이터는 없지만, 사람의 동작이 담긴 비디오는 무한히 존재합니다. 이 비디오에서 액션을 추출할 수 있다면, 스케일링 문제를 돌파할 수 있을지도 모릅니다.

보다 자세한 내용은 [VLM 백본의 한계와 World Model](/knowledge/essays/insights/vlm-limits-world-model)을 참조하세요.

---

## 접근법 요약

| 접근법 | 주체 | 설명 |
|--------|------|------|
| [텔레오퍼레이션](/knowledge/essays/insights/teleoperation) | Tesla, Google, Physical Intelligence, Galaxea | 직접 데이터를 수집 |
| [Non-Teleop](/knowledge/essays/insights/non-teleop-data) | UMI, Generalist, Sunday Robotics | 로봇 없이 Non-Teleop 데이터로 학습 시도 |
| [시뮬레이션](/knowledge/essays/insights/simulation-world-model) | NVIDIA | 물리 시뮬레이션(Omniverse)과 World Model(Cosmos)로 데이터를 생산, 증강, 평가 |
| [커뮤니티](/knowledge/essays/insights/community-driven) | HuggingFace | 오픈소스 정신으로 커뮤니티 기반 데이터 수집 |
| World Model | 1X, NVIDIA | 평가 자동화, VLA 백본 교체, 월드 모델로 합성 데이터 생성 |
| 분산 평가 | 학계 | OXE, RoboArena 등 |
| 기타 | 다양함 | 휴먼 비디오에서 액션 추출, 에고센트릭 데이터 수집 장비 등 |

*표: VLA 스케일링 문제를 해결하기 위한 주요 접근법과 주체들*

각 접근법은 저마다의 장단점이 있으며, 아직 어떤 방법이 최선인지 결론이 나지 않았습니다. 앞으로 이 분야의 발전을 주시할 필요가 있습니다.

---

## 입문 가이드 완료

여기까지 Physical AI 입문 가이드를 마쳤습니다.

더 깊이 탐색하고 싶다면 [Physical AI 입문 가이드](/knowledge/physical-ai/)로 돌아가거나, 아래 인사이트 에세이를 살펴보세요.

### 다음으로 읽어볼 문서들

- [Physical vs Cognitive Intelligence](/knowledge/essays/insights/physical-vs-cognitive) - 물리적 지능에 대한 고찰
- [VLA & RFM 발전 과정](/knowledge/essays/insights/vla-rfm-progress) - VLA와 RFM의 진행 중인 발전 과정
- [휴머노이드 디자인](/knowledge/essays/insights/humanoid-design) - 휴머노이드의 디자인 문제
- [촉각 센싱](/knowledge/essays/insights/tactile-sensing) - 촉각은 과연 필요할까?
- [Teleoperation 방식](/knowledge/essays/insights/teleoperation) - 텔레오퍼레이션으로 데이터 수집
- [시뮬레이션 & World Model](/knowledge/essays/insights/simulation-world-model) - 합성 데이터와 월드 모델
