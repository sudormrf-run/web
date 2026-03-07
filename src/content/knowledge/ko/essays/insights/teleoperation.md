---
title: Teleoperation 방식
description: 원격 조종을 통한 Action 데이터 수집
tags: [teleoperation, data-collection, solution]
category: essays
order: 6
related:
  - ../fundamentals/scaling-problem.md
  - non-teleop-data.md
  - ../../companies/physical-intelligence.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-02-24
---

## 개요

텔레오퍼레이션(Teleoperation)은 사람이 로봇을 원격으로 조종하면서 동작 데이터를 수집하는 방식입니다. 1954년 Raymond Goertz가 방사성 물질을 안전하게 다루기 위해 기계식 Master-Slave 조작기를 발명한 것이 현대적 텔레오퍼레이션의 시작이었습니다.

과거의 텔레오퍼레이션이 단순히 인간의 물리적 명령을 원격지에서 실행하는 **원격 제어 수단**이었다면, 오늘날의 텔레오퍼레이션은 로봇을 위한 **Foundation Model 학습용 데이터 수집 파이프라인**으로 탈바꿈했습니다. 조작자가 로봇을 조종하는 매 순간의 시각적 관측치(Observations), 로봇 상태(Proprioception), 운동 궤적(Trajectories)이 모두 AI 학습 데이터가 됩니다.

### ROBOTIS OMY

<iframe width="315" height="400" src="https://www.youtube.com/embed/MGH44s5suK0" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

*Leader-Follower 구조의 가장 직관적인 텔레오퍼레이션 예시 — 작은 Leader 로봇을 움직이면, 큰 Follower 로봇이 따라 움직입니다.*

---

## 왜 Teleoperation이 중요한가

[Action Data Scaling 문제](../fundamentals/scaling-problem)에서 다룬 것처럼, VLA(Vision-Language-Action) 모델은 LLM과 달리 인터넷에서 학습 데이터를 구할 수 없습니다. 로봇의 동작 데이터는 실제 로봇을 움직여야만 생성됩니다.

텔레오퍼레이션이 현재 가장 주류인 데이터 수집 방식인 이유는 명확합니다:

- **높은 품질의 (observation, action) 쌍**: 로봇 센서가 기록하는 관측치와 조작자의 명령이 정확히 동기화된 데이터를 얻을 수 있습니다.
- **정확한 action space 정의**: 로봇의 관절 위치, 속도, 토크 등을 직접 기록하므로, 학습에 바로 사용할 수 있는 형태의 데이터가 생성됩니다.
- **실패/교정 데이터 포함 가능**: 성공한 시연뿐 아니라 실패와 복구 과정까지 기록하면, 로봇이 OOD(Out-of-Distribution) 상황에서도 강건한 정책을 학습할 수 있습니다.

Tesla, Google DeepMind, Physical Intelligence, 1X Technologies, Galaxea 등 주요 AI 로보틱스 기업 대부분이 텔레오퍼레이션으로 핵심 학습 데이터를 수집하고 있습니다.

![Data Pyramid](/assets/essays/teleoperation/data_pyramid.png)

*로봇 학습 데이터 피라미드. 피라미드 꼭대기의 Real-World Data가 가장 비싸지만 가장 높은 품질의 데이터이며, 이를 수집하는 대표적인 방법이 텔레오퍼레이션입니다. 아래로 내려갈수록 데이터 양은 많아지지만 로봇 행동 학습에 직접 사용하기는 어려워집니다. (출처: [NVIDIA GR00T N1 논문](https://arxiv.org/abs/2503.14734))*

---

## 방식 분류

텔레오퍼레이션의 방식은 입력 장치, 제어 형태, 피드백 수준에 따라 여러 가지로 나뉩니다.

| 방식 | 대표 시스템 | 비용 범위 | 핵심 특징 |
|------|-----------|----------|----------|
| Leader-Follower | ALOHA, GELLO, ROBOTIS OMY | $300~$20K | 역운동학 불필요, 관절 한계를 물리적으로 체감 |
| VR/모션캡처 | Open-TeleVision, Bunny-VisionPro | $500~$10K | 몰입형 3D 제어, 원격지에서 조종 가능 |
| 엑소스켈레톤 | HOMIE, CHILD, HumanoidExo | $300~$5K | 이소모픽 설계로 리타겟팅 불필요, 전신 제어 |
| 장갑 기반 | DOGlove, SenseGlove R1, HaptX G1 | $600~$18K | 손 추적 + 햅틱 피드백, 정밀 조작 |
| 시뮬레이션 내 텔레옵 | NVIDIA GR00T-Teleop, RoboCasa | SW 비용 | 24/7 수집, 합성 데이터 증폭 가능 |

### Leader-Follower (동역학적 복제기)

조작자가 직접 움직이는 소형 Leader 로봇과, 이를 실시간 복제하는 대형 Follower 로봇으로 구성됩니다. Leader와 Follower의 기구학적 구조가 동일하므로 역운동학 연산 없이 관절 각도를 1:1로 전달할 수 있고, 조작자는 로봇의 관절 한계나 특이점을 물리적으로 느낄 수 있습니다.

Stanford의 [ALOHA](https://tonyzhaozh.github.io/aloha/)($20K)와 UC Berkeley의 [GELLO](https://wuphilipp.github.io/gello_site/)($300 미만, 3D 프린팅)가 대표적입니다.

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/teleoperation/gello.mp4" type="video/mp4" />
</video>

*GELLO — 3D 프린팅으로 $300 미만에 제작 가능한 범용 Leader-Follower 텔레오퍼레이션 인터페이스. (출처: [GELLO 프로젝트 페이지](https://wuphilipp.github.io/gello_site/))*

### VR / 모션캡처

VR 헤드셋(Meta Quest, Apple Vision Pro)이나 모션캡처 슈트를 착용하고 3D 공간에서 로봇을 제어합니다. 조작자의 팔과 손목 움직임이 로봇 팔의 궤적으로 매핑되며, 원격지에서도 조종할 수 있다는 것이 큰 장점입니다.

[Open-TeleVision](https://robot-tv.github.io/)(UCSD/MIT)은 Apple Vision Pro로 스테레오 영상을 보면서 60Hz로 로봇을 제어하며, MIT에서 UC San Diego의 Unitree H1을 대륙 간 원격 조종하는 것을 실증했습니다.

[Bunny-VisionPro](https://dingry.github.io/projects/bunny_visionpro.html)는 Apple Vision Pro를 활용한 양팔 정교한(dexterous) 텔레오퍼레이션 시스템입니다. 저비용 햅틱 장치(ERM 진동 모터)를 통해 촉각 피드백을 제공하며, 실시간 충돌 회피와 특이점(singularity) 검사를 내장하여 안전한 제어를 보장합니다. 수집된 시연 데이터로 ACT, Diffusion Policy 등을 학습하여 스킨케어, 주방 작업 등 다단계 정교 조작 태스크에서 높은 공간 일반화를 달성했습니다. ([arXiv:2407.03162](https://arxiv.org/abs/2407.03162))

### 엑소스켈레톤

사람이 착용하는 외골격 장치로 로봇을 제어하는 방식입니다. 로봇과 동일한 기구학 구조("이소모픽")로 설계하면 리타겟팅 연산 없이 관절 각도를 직접 전달할 수 있고, 착용자에게 수동적인 고유감각(proprioceptive) 피드백을 제공합니다.

**전신 엑소스켈레톤**

- [HOMIE](https://homietele.github.io/) (Shanghai AI Lab, 2025): **~$500**의 콕핏 시스템. 이소모픽 외골격 팔 + 센싱 장갑 + 풋 페달로 전신 텔레옵을 구현. Unitree G1, Fourier GR-1에서 검증. 기존 시스템 대비 작업 시간 절반, 70%+ 모방 학습 성공률. [오픈소스](https://github.com/OpenRobotLab/OpenHomie).
- [CHILD](https://uiuckimlab.github.io/CHILD-pages/) (UIUC, Humanoids 2025): 아기 캐리어 크기의 소형 전신 텔레옵 시스템. **14ms 레이턴시**. Unitree G1, Boston Dynamics Spot에서 검증.
- [HumanoidExo](https://humanoid-exo.github.io/) (2025): 착용형 외골격 + 등에 장착한 LiDAR로 6D 자세 추적. 5개 실제 시연 + 195개 외골격 세션만으로 **80% pick-and-place 성공률**. HE-VLA(VLA + RL 밸런스) 파이프라인 제안.

**상체 엑소스켈레톤**

- [NuExo](https://nubot-nuexo.github.io/) (IROS 2025): **5.2kg** 백팩형. 상지 ROM(가동범위) 100% 커버. 로봇 텔레옵 데이터, 상지 운동학, 1인칭 영상, 손가락 모션, 힘 피드백을 동시 수집.
- [AirExo](https://airexo.github.io/): **$300/팔**, 3D 프린팅, 오픈소스. "야생(in-the-wild)" 환경에서의 데이터 수집 특화.

2024~2026년 사이 엑소스켈레톤 비용이 수만 달러에서 $300~$500으로 급락했으며, HOMIE·AirExo·HumanoidExo 모두 오픈소스로 공개되었습니다.

### 장갑 기반

손가락 추적과 햅틱 피드백을 결합한 장갑 인터페이스입니다. 로봇 손의 정교한 텔레오퍼레이션과 모방 학습 데이터 수집에 사용됩니다.

| 제품 | 감지 방식 | DoF | 햅틱 | 가격 | 특징 |
|------|----------|-----|------|------|------|
| [HaptX G1](https://haptx.com/gloves-g1/) | 자기 MoCap | 전체 | 공압 135포인트 + 40lb 힘 | $5,495+ | ROS 1/2 지원, 최고급 촉감 |
| [SenseGlove R1](https://www.senseglove.com/) | 엑소 인코더 | 전체 + 힘 | 능동 힘 피드백, 1,000Hz | 미공개 | 휴머노이드 텔레옵 전용 (2026.1 출하) |
| [DOGlove](https://do-glove.github.io/) | 커스텀 관절 | 21 | 케이블 구동 5-DoF 힘 + LRA 5개 | **$600** | 오픈소스, LEAP Hand 검증 (RSS 2025) |
| [GEX EX12](https://arxiv.org/abs/2506.04982) | 엑소 인코더 | 12 | 전기기계식 힘 | **$600** | 3D 프린팅, GX11 손과 세트 $1,200 |
| [MANUS Metagloves](https://www.manus-meta.com/) | EMF | 25 | 선택적 | $8,879~ | 드리프트 없음, 고정밀 MoCap |
| [Dexmo](https://www.dextarobotics.com/) | 회전센서 11개 | 11 | 서보 모터 5개 | 기업용 | 290g, 무선 |

SenseGlove R1은 휴머노이드 텔레오퍼레이션과 모방 학습 데이터 수집을 위해 설계된 최초의 상용 장갑으로, 2026년 1월부터 출하가 시작되었습니다.

---

## Whole-Body Teleoperation

<iframe width="100%" height="400" src="https://www.youtube.com/embed/24h4FTH7plY" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

*Unitree Embodied Avatar — 모션캡처 슈트(23~43개 트래커)를 착용한 오퍼레이터가 G1 휴머노이드를 실시간 미러링. 축구, 격투, 설거지, 빨래 접기 등을 수행하며, 수집된 데이터는 [UnifoLM](https://github.com/unitreerobotics/unifolm-vla) 모델 학습에 활용됩니다.*

휴머노이드 로봇의 등장으로 텔레오퍼레이션은 새로운 차원의 도전에 직면했습니다. 팔만 움직이는 것이 아니라, **보행(locomotion) + 상체 조작(manipulation) + 손(dexterous hand)**을 동시에 제어해야 합니다. 세 하위 시스템은 물리적으로 커플링되어 있어 — 팔을 뻗으면 무게중심이 이동하고, 걸으면 상체가 흔들립니다.

### 밸런스 제어: 누가 균형을 잡는가?

Whole-body teleop의 핵심 문제는 **"오퍼레이터가 팔을 뻗을 때, 로봇이 넘어지지 않게 하는 것"**입니다. 현재 세 가지 주요 접근법이 존재합니다.

**분리형 (Decoupled)**: 하체는 RL 보행 정책이 자율 제어하고, 상체만 텔레오퍼레이션합니다. 오퍼레이터는 조작에만 집중할 수 있지만, 허리를 숙여 바닥의 물건을 줍는 것과 같은 전신 협응 동작은 불가능합니다.

- [Mobile-TeleVision](https://arxiv.org/abs/2412.07773): CVAE(Conditional VAE)로 상체 모션을 예측하여 하체 보행 정책에 전달, 보행 안정성 유지. Unitree H1에서 검증.
- [HOMIE](https://arxiv.org/abs/2502.13013): $500의 콕핏 — 페달로 보행, 동역학적 외골격 팔로 상체, 센싱 장갑으로 손을 각각 제어. 기존 시스템 대비 작업 시간 절반, 70%+ 모방 학습 성공률. 오픈소스.
- [Unitree xr_teleoperate](https://github.com/unitreerobotics/xr_teleoperate): Apple Vision Pro/Meta Quest로 상체, R3 게임패드로 보행. Unitree의 내장 RL 보행 정책이 균형 유지.

**통합형 (Unified)**: 단일 RL 정책이 전신을 제어하면서 텔레옵 타깃을 트래킹합니다. 전신 협응 동작이 가능하지만, 정밀 조작과 안정성 사이의 트레이드오프가 존재합니다.

- [HumanPlus](https://humanoid-ai.github.io/) (Stanford): RGB 카메라 1대로 사람 전신을 실시간 추적, 40시간 MoCap 데이터로 학습된 RL 정책이 균형을 암묵적으로 유지. 33 DOF 커스텀 휴머노이드에서 신발 신기, 스웨터 접기 등 시연.
- [TWIST](https://arxiv.org/abs/2505.02833) (CoRL 2025): 단일 신경망이 조작, 보행, 댄스 등 모든 whole-body 스킬을 처리. Unitree G1에서 검증. 오픈소스.

**이중 주파수 (Slow-Fast)**: 하체(50Hz)와 상체(100Hz)를 서로 다른 주파수의 에이전트로 분리합니다.

- [SoFTA](https://arxiv.org/abs/2505.24198) (CMU): Unitree G1이 물을 쏟지 않고 걸을 수 있을 정도의 상체 안정성(가속도 <2 m/s², 인간 수준). 말단 가속도 50-80% 감소.

### 모션 리타겟팅: 다른 체형 매핑

180cm 사람의 동작을 130cm Unitree G1에 매핑하려면 팔 길이, 다리 길이, 어깨 너비의 차이를 보정해야 합니다.

- **IK 기반 매핑**: 관절각이 아닌 말단 위치(End-Effector Position)를 매칭. 가장 일반적인 방식. ([Mobile-TeleVision](https://arxiv.org/abs/2412.07773), [Open-TeleVision](https://robot-tv.github.io/))
- **SMPL 기반 체형 피팅**: 인간 체형 모델(SMPL)의 파라미터를 로봇 기구학에 맞게 최적화한 뒤 모션을 변환. ([H2O](https://arxiv.org/abs/2403.04436))
- **RL 암묵적 학습**: RL 정책이 대규모 MoCap 데이터 학습 과정에서 리타겟팅을 자연스럽게 습득. ([HumanPlus](https://arxiv.org/abs/2406.10454), [OmniH2O](https://arxiv.org/abs/2406.08858))
- **GMR (General Motion Retargeting)**: CPU에서 실시간으로 다양한 휴머노이드에 범용 리타겟팅. TWIST에서 사용. ([GMR](https://github.com/YanjieZe/GMR), ICRA 2026)

---

## 손(Dexterous Hand) 텔레오퍼레이션

사람의 손은 약 27 DOF, 로봇 손은 6~24 DOF로 기구학적 구조가 완전히 다릅니다. 엄지 대립 메커니즘, 관절 가동범위, 손가락 길이 비율이 모두 다르기 때문에 단순히 관절각을 복사하는 것은 불가능합니다. 핵심은 **"관절각이 아닌, 손끝 위치와 접촉 상태를 보존하는 것"**입니다.

### 트래킹 방법

| 방법 | 정확도(RMSE) | 지연 | 비용 | 대표 장비 |
|------|-------------|------|------|----------|
| 비전 기반 | ~22.5° (MediaPipe), 중간 (AVP) | 낮음~중간 | 무료~$3,500 | MediaPipe, Apple Vision Pro, Leap Motion |
| 글러브 기반 | <10° | 매우 낮음 | $600~$18K | [DOGlove](https://do-glove.github.io/) ($600), [SenseGlove R1](https://www.senseglove.com/) (1,000Hz), [HaptX G1](https://haptx.com/gloves-g1/) |
| 외골격 기반 | 높음 (직접 매핑) | 매우 낮음 | 커스텀 | [DexUMI](https://dex-umi.github.io/), [DEXOP](https://dex-op.github.io/), [GEX](https://arxiv.org/abs/2506.04982) |

비전 기반은 접근성이 높지만 자가 가림(self-occlusion) 문제가 있고, 글러브는 정확하지만 사용자별 캘리브레이션이 필요합니다. Apple Vision Pro는 26개 관절을 추적하지만, 손가락이 서로 가려질 때 100-200ms의 지연이 발생합니다. EMF 기반 장갑(MANUS Metagloves)은 드리프트가 없지만, IMU 기반 센서는 시간당 ~6.6°의 드리프트가 발생합니다.

### 리타겟팅 알고리즘

리타겟팅 알고리즘은 빠르게 진화하고 있습니다:

- **기하학적 최적화** ([AnyTeleop](https://yzqin.github.io/anyteleop/), [DexPilot](https://arxiv.org/abs/1910.03135)): 사람과 로봇 손의 대응 키포인트 사이 벡터 차이를 최소화. SQP(Sequential Quadratic Programming)로 풀며, ~100Hz.
- **접촉 인식 리타겟팅** ([DexFlow](https://arxiv.org/abs/2505.01083)): 기하학적 형상이 아닌 접촉 상태(어떤 손가락이 닿아 있는지)를 보존. 파지(grasping) 작업에서 핵심적.
- **학습 기반** ([GeoRT](https://arxiv.org/abs/2503.07541)): 손가락별 MLP 네트워크가 직접 매핑. **1KHz** 추론 속도(최적화 대비 10배), 5분의 사람 MoCap + 로봇 공간 샘플링만으로 비지도 학습. Allegro, LEAP Hand에서 검증.

### DexUMI: 패러다임 전환

[DexUMI](https://dex-umi.github.io/) (Stanford, CoRL 2025 Best Paper Finalist)는 리타겟팅 문제 자체를 우회하는 접근법입니다:

1. **기구학 갭 해결**: 대상 로봇 손과 동일한 기구학의 착용형 외골격을 최적화 설계. 사람이 자연스럽게 물체를 조작하면 로봇 관절 명령이 직접 생성됨.
2. **비주얼 갭 해결**: SAM2로 사람 손+외골격 제거 → ProPainter로 배경 복원 → 로봇 손 영상 합성. 학습 데이터가 로봇이 직접 촬영한 것처럼 변환됨.

결과: **86% 평균 태스크 성공률**, 전통 텔레옵 대비 **3.2배 데이터 수집 효율**. 6 DOF 언더액추에이티드(Inspire Hand)와 12 DOF 풀 액추에이티드(XHand) 모두에서 검증.

유사한 접근으로 [DEXOP](https://dex-op.github.io/) (2025)은 패시브 외골격으로 야외 환경에서의 데이터 수집을 가능하게 했으며(전통 텔레옵 대비 **2.4배 빠른 수집**), [GEX](https://arxiv.org/abs/2506.04982) (2025)는 **$1,200**에 3D 프린팅 로봇 손(GX11, 11 DOF) + 외골격 장갑(EX12, 12 DOF) 세트를 제공합니다.

### 대표 로봇 손

| 로봇 손 | DOF | 가격 | 텔레옵 방식 |
|---------|-----|------|-----------|
| [Shadow Dexterous Hand](https://www.shadowrobot.com/) | 24 | $100K+ | CyberGlove, 비전 기반 신경망, AnyTeleop |
| [Allegro Hand](https://www.wonikrobotics.com/) | 16 | $15K~$20K | DexPilot, AnyTeleop, [OpenTeach](https://open-teach.github.io/) (Meta Quest 3) |
| [LEAP Hand](https://v2.leaphand.com/) (CMU) | 16 | $2K~$3K | 3D 프린팅, 4시간 조립, 10~100배 비싼 로봇 손 성능 상회 |
| [Inspire Hand](https://en.inspire-robots.com/) | 6 | 저가 | DexUMI 외골격, Unitree G1 호환 |

---

## 햅틱 피드백

### 왜 중요한가

힘을 느끼지 못하는 오퍼레이터는 과도한 힘을 가하거나, 깨지기 쉬운 물체를 부수거나, 커넥터를 잘못 삽입합니다. 이는 학습 데이터 품질에 직접적인 영향을 미칩니다.

IEEE Transactions on Haptics (2024) 연구에 따르면, 단순한 진동(vibrotactile) 피드백만으로도 학습 데이터 품질이 **20% 향상**되었고, 해당 데이터로 학습한 모방 정책의 성능이 **11% 향상**, 어려운 작업에서는 **24% 향상**되었습니다. ([Leveraging Haptic Feedback to Improve Data Quality and Quantity for Deep Imitation Learning Models](https://arxiv.org/abs/2211.03020))

의료 분야에서는 Intuitive Surgical의 **da Vinci 5** (2024)가 최초의 FDA 승인 촉각 피드백 수술 로봇으로, 조직에 가해지는 최대 힘을 **43% 감소**시켰습니다.

### 장비 스펙트럼

| 유형 | 대표 제품 | 가격 | 피드백 수준 |
|------|----------|------|-----------|
| 진동(Vibrotactile) | Oculus 컨트롤러, bHaptics TactSuit | $300~$500 | 간접적, 고주파 접촉 감지 |
| 그라운드형 햅틱 | [Force Dimension sigma.7](https://www.forcedimension.com/), [Haply Inverse3](https://www.haply.co/inverse3) | $10K~$100K | 높은 정밀도 힘 피드백 |
| 공압 장갑 | [HaptX G1](https://haptx.com/gloves-g1/) | $5,495+ | 135 포인트, 40lb 힘, 최고 촉감. ROS 1/2 지원 |
| 힘 피드백 장갑 | [SenseGlove R1](https://www.senseglove.com/) | 미공개 | 능동 힘 피드백, 1,000Hz, 휴머노이드 텔레옵 전용 |
| 전자기 브레이크 장갑 | [SenseGlove Nova 2](https://www.senseglove.com/product/nova-2/) | $5,999 | 손가락당 20N, 손바닥 압력 |
| 케이블 구동 장갑 | [DOGlove](https://do-glove.github.io/) | $600 | 5-DoF 힘 피드백 + LRA 5개. 오픈소스 |
| 패시브 외골격 | [DexUMI](https://dex-umi.github.io/), [DEXOP](https://dex-op.github.io/) | 커스텀 | 물체 직접 접촉으로 자연적 촉감. 액추에이터 불필요 |
| 유사 햅틱 | 시각 조작 (C/D ratio), 진동 대체 | 추가 비용 없음 | 시각적 착각으로 무게감 유도 |

ALOHA 시스템은 백드라이버블 모터를 통한 **수동적 기계적 피드백**만 제공합니다. 능동적 힘 피드백은 없지만, 2025년 [IGBT(Input-Gated Bilateral Teleoperation)](https://arxiv.org/abs/2509.08226) 연구에서 **힘 센서 없이** ALOHA 하드웨어에 양방향 힘 피드백을 추가하는 방법이 제안되었습니다.

### 지연과 안정성

양방향 햅틱 텔레오퍼레이션에서 통신 지연은 단순한 불편함이 아니라 **시스템 불안정**을 유발합니다. 힘이 지연되어 전달되면 양의 피드백 루프가 형성되어 에너지가 발산할 수 있습니다.

- **<50ms**: 대부분의 양방향 제어 아키텍처에서 안전
- **50-300ms**: Wave Variable, TDPA(Time-Domain Passivity Approach) 등 안정화 기법 필수
- **>500ms** (지구-달): 모델 기반 예측 제어만 가능

이 문제는 [Shared Autonomy](https://www.honda-ri.de/pubs/pdf/5098.pdf)(공유 자율)로도 완화됩니다 — 사람은 의도/목표를 지정하고, 로봇이 충돌 회피와 정렬을 자동으로 처리합니다.

---

## 시뮬레이션 내 텔레오퍼레이션

### 왜 시뮬레이션에서 하는가

시뮬레이션 내 텔레옵은 실제 로봇 없이 데이터를 수집하고, 수집된 데이터를 기하급수적으로 증폭할 수 있습니다.

- **하드웨어 마모 없음**: 24/7 수집 가능, 유지보수/부품 교체 불필요
- **안전**: 위험한 동작을 시도해도 결과가 없음
- **자동 도메인 랜덤화**: 조명, 텍스처, 물체 위치, 마찰계수 등을 자동으로 변형
- **합성 데이터 증폭**: 소수의 인간 시연을 수십만 배로 증폭

### NVIDIA GR00T Blueprint

NVIDIA의 [Isaac GR00T Blueprint](https://developer.nvidia.com/blog/isaac-gr00t-blueprint-humanoid-robotics/)는 시뮬레이션 텔레옵의 완전한 파이프라인입니다:

1. **GR00T-Teleop**: 오퍼레이터가 Apple Vision Pro를 착용하고 [CloudXR](https://isaac-sim.github.io/IsaacLab/main/source/how-to/cloudxr_teleoperation.html)를 통해 Isaac Lab 시뮬레이션의 디지털 트윈 로봇을 제어
2. **GR00T-Mimic**: 수집된 시연을 기반으로 물체 위치, 질량, 마찰력 등을 변형한 합성 궤적을 대량 생성. **11시간 만에 78만 개 궤적 생성** (실제 수집 시 9개월, 6,500시간 소요분)
3. **GR00T-Gen**: NVIDIA Cosmos Transfer로 시뮬레이션 영상을 포토리얼리스틱하게 변환, 시각적 다양성 확보

합성 데이터와 실측 데이터를 결합하면 GR00T N1 모델의 성능이 **40% 향상**됩니다.

### 기타 시뮬레이션 플랫폼

- **[RoboCasa](https://robocasa.ai/) + [MimicGen](https://mimicgen.github.io/)**: MuJoCo 기반, 365개 가사 태스크. 3D SpaceMouse로 태스크당 50개 시연 → MimicGen이 **3,000 궤적**으로 자동 증폭. 최신 RoboCasa365는 2,200+ 시간 데이터 포함.
- **[MuJoCo Playground](https://playground.mujoco.org/)**: ALOHA 양팔 환경 포함, 단일 GPU에서 수 분 만에 정책 학습 가능. RSS 2025 Outstanding Demo Award.
- **[Genesis](https://genesis-embodied-ai.github.io/)**: 범용 물리 엔진, 단일 RTX 4090에서 **4,300만 FPS** (43만 배 실시간). 강체, 유체, 변형체 등 다중 물리 솔버 통합.
- **[AGIBOT Genie Sim 3.0](https://github.com/AgibotTech/genie_sim)**: 오픈소스, PICO VR로 텔레옵, 10,000+ 시간 합성 데이터, LLM 기반 장면 생성. CES 2026 공개.

### Sim-to-Real 갭 해결

시뮬레이션 데이터의 최대 과제는 현실과의 격차입니다. 현재 주요 해결 방법:

- **도메인 랜덤화**: 시각(조명, 텍스처) + 물리(마찰, 질량, 제어 지연)를 훈련 중 무작위 변형
- **NVIDIA Cosmos Transfer**: 시뮬레이션 렌더링을 포토리얼리스틱으로 변환하는 생성 모델
- **[TRANSIC](https://transic-robot.github.io/)** (Stanford, CoRL 2025): 시뮬 정책 배포 후 인간이 실시간 교정하여 잔차 정책 학습. **77% 성공률** (기존 베이스라인 18%).

---

## 한계와 과제

- **높은 인건비**: Tesla는 오퍼레이터에게 시간당 $48, 3교대로 운영. 대규모 수집은 곧 대규모 인건비.
- **느린 수집 속도**: Scaling 병목. 이를 보완하기 위해 [Non-Teleop 방식](non-teleop-data)이나 시뮬레이션 증폭이 연구되고 있음.
- **사람-로봇 체형 불일치**: 리타겟팅 오차 불가피. 특히 손의 엄지 기구학이 가장 어려움.
- **지연(Latency)**: 원격 환경에서 양방향 햅틱 불안정. Shared Autonomy나 예측 디스플레이로 완화 필요.
- **"성공만 저장" 편향**: 흔히 실패 데이터를 버리지만, 이는 OOD 상황에서 정책 붕괴의 원인. 실패/교정/머뭇거림 데이터까지 포함해야 강건한 학습 가능.
- **캘리브레이션/동기화**: 멀티카메라, 손목 카메라, depth, state의 타임스탬프가 맞지 않으면 학습이 아니라 노이즈 주입. [DROID](https://droid-dataset.github.io/) 프로젝트도 카메라 캘리브레이션 개선을 별도 업데이트로 다룸.

---

## 주요 사례

### Stanford ALOHA / ALOHA 2

[ALOHA](https://tonyzhaozh.github.io/aloha/)는 $20K 미만의 오픈소스 양팔 텔레오퍼레이션 시스템으로, ACT(Action Chunking with Transformers) 알고리즘과 함께 로봇 학습 연구의 민주화에 기여했습니다. [ALOHA 2](https://aloha-2.github.io/) (Google DeepMind)는 그리퍼 조작력을 14.68N → **0.84N**으로 10배 이상 줄이고, 최대 파지력을 12.8N → **27.9N**으로 2배 높였습니다. MuJoCo Menagerie에 정밀 시뮬레이션 모델이 공개되어 있으며, [ALOHA Unleashed](https://aloha-unleashed.github.io/)는 신발끈 묶기, 셔츠 걸기 등 복잡한 태스크를 시연했습니다.

### Tesla Optimus

Tesla는 50명+ 오퍼레이터를 **시간당 $48, 3교대**로 운영하며 Optimus 학습 데이터를 수집합니다. 초기에는 모션캡처 슈트를 사용했으나, 2025년 중반부터 **카메라만 사용하는 Vision-Only 방식**으로 전환했습니다. 오퍼레이터들은 헬멧의 5개 카메라를 착용하고 일상 동작(테이블 닦기, 컵 들기, 커튼 당기기)을 반복합니다. 장비 병목 없이 인력을 스케일링할 수 있다는 것이 핵심이지만, 촉각 정보 부재에 대한 회의론도 존재합니다.

### Physical Intelligence (pi0)

[Physical Intelligence](../../companies/physical-intelligence)의 [pi0](https://www.pi.website/blog/pi0)는 **7개 로봇 플랫폼, 68개 태스크**에서 수집된 텔레옵 데이터로 학습된 VLA Flow 모델입니다. DROID(Franka), ALOHA(저가 양팔), Bimanual Trossen, Bimanual ARX 등 다양한 하드웨어를 지원하며, 새 태스크에 **1~20시간의 텔레옵 데이터**만으로 fine-tune이 가능합니다. [pi0.5](https://www.physicalintelligence.company/blog/pi05)는 처음 보는 주방이나 침실도 정리할 수 있는 오픈 월드 일반화를 달성했습니다.

### Google DeepMind (Open X-Embodiment)

[Open X-Embodiment](https://robotics-transformer-x.github.io/) 데이터셋은 **34개 연구소, 22개 로봇 형태, 100만+ 궤적**을 모은 역대 최대 규모의 로봇 데이터셋입니다. 500개+ 스킬, 150,000개+ 태스크를 포함하며, RT-1, RT-2 모델의 학습 기반이 되었습니다.

### 1X Technologies (NEO)

[NEO](https://www.1x.tech/neo)는 **$20,000**에 2026년 출시 예정인 가정용 휴머노이드입니다. 특이한 전략은 **소비자 가정에 로봇을 배치**하고, 로봇이 모르는 태스크는 원격 오퍼레이터가 VR "Expert Mode"로 수행하는 것입니다. 이 과정에서 **NEO의 AI가 관찰하고 학습**하여 점차 자율 동작으로 전환합니다. 이미 10,000+ 시간의 데이터를 수집했으며, CEO Bernt Bornich는 "데이터가 없으면 제품을 개선할 수 없다"고 강조합니다.

### NVIDIA GR00T

[GR00T N1](https://developer.nvidia.com/isaac/gr00t) (2B 파라미터 VLA)은 ~50,000 H100 GPU 시간으로 사전학습되었습니다. Apple Vision Pro로 시뮬레이션 내 텔레옵 → GR00T-Mimic으로 합성 증폭 → Cosmos Transfer로 시각 다양성 확보의 전체 파이프라인을 제공합니다. 자체 텔레옵 데이터를 88시간에서 **827시간으로 10배 증폭**했으며, GR00T N1.6은 수천 시간의 다양한 텔레옵 데이터로 학습되었습니다.

### Open-TeleVision

[Open-TeleVision](https://robot-tv.github.io/) (UCSD/MIT, CoRL 2024)은 Apple Vision Pro를 사용한 몰입형 텔레오퍼레이션 시스템입니다. 로봇 머리의 액티브 스테레오 카메라가 사람 머리 움직임을 따라 움직이며, **60Hz**로 전체 루프가 동작합니다. MIT의 Ge Yang이 미국 동부에서 UC San Diego의 Unitree H1을 원격 조종하는 대륙 간 텔레오퍼레이션을 실증했습니다. 오픈소스.

### Unitree Embodied Avatar

Unitree의 [Embodied Avatar](https://www.youtube.com/watch?v=24h4FTH7plY)는 모션캡처 슈트(23~43개 트래커)와 5G 엣지 컴퓨팅을 결합한 전신 텔레오퍼레이션 플랫폼입니다. 오퍼레이터가 팔 들기, 걸음, 고개 돌리기를 실시간으로 수행하면 G1 로봇(23~43 DOF, 최대 120 N·m 관절 토크)이 밀리초 단위 레이턴시로 미러링합니다. 축구, 격투, 설거지, 빨래 접기 등 다양한 태스크를 수행하며, 수집된 데이터는 [UnifoLM-VLA](https://github.com/unitreerobotics/unifolm-vla)(범용 조작 VLA)와 [UnifoLM-WMA](https://github.com/unitreerobotics/unifolm-world-model-action)(월드 모델 기반 정책) 학습에 활용됩니다. 2025년 11월부터 연구소·기업 대상 베타 키가 배포되었으며, 향후 1명의 오퍼레이터가 최대 5대의 G1을 동시 제어하는 멀티 로봇 모드도 계획되어 있습니다.

### HOMIE

[HOMIE](https://arxiv.org/abs/2502.13013) (RSS 2025)은 **~$500**의 콕핏 시스템입니다. 페달(보행) + 동역학적 외골격 팔(7 DOF, DYNAMIXEL 서보) + 홀센서 기반 센싱 장갑(15+ DOF)으로 전신 텔레옵을 구현합니다. 기존 시스템 대비 작업 시간 절반, 모방 학습 70%+ 성공률. [오픈소스](https://github.com/OpenRobotLab/OpenHomie).

---

## 데이터에서 자율로: 학습 파이프라인

텔레오퍼레이션으로 수집된 데이터가 자율 동작으로 이어지는 과정:

```
Teleop 시연 수집 → Behavior Cloning(BC) → 배포/실패 → DAgger 교정 수집 → VLA Foundation Model → Self-Improvement
```

- **Behavior Cloning**: 텔레옵 (observation, action) 쌍을 지도학습. 빠르게 기초 정책 구축. 단, 공변량 이동(Covariate Shift) 문제 — 학습 분포 밖 상태에서 오차 누적.
- **[DAgger](https://www.cs.cmu.edu/~sross1/publications/Ross-AIStats11-NoRegret.pdf)**: 불완전한 정책이 실행 중 실패하면, 오퍼레이터가 개입하여 교정 데이터를 추가 수집. 로봇이 "실수에서 복구하는 법"을 학습.
- **VLA Foundation Model**: 대규모 시각+언어+행동 데이터를 통합 학습. GR00T N1, pi0, Helix 등.
- **Self-Improvement**: 학습된 모델이 자율적으로 연습하며 성능 향상. 잔여 단계 예측(Steps-to-go)으로 내재적 보상 함수 추출.

Scaling 전략은 세 갈래로 나뉩니다:
- **실측 + 합성 증폭**: NVIDIA GR00T (11시간 → 78만 궤적), RoboCasa + MimicGen (50개 → 3,000 궤적)
- **분산 크라우드소싱**: [DROID](https://droid-dataset.github.io/) (기관 분산, Oculus Quest 2), [RoboTurk](https://arxiv.org/abs/1811.02790) (스마트폰 기반), [BridgeData V2](https://arxiv.org/abs/2308.12952) (60K+ 궤적)
- **소비자 배치**: 1X NEO (가정에 로봇 배치, VR Expert Mode)

---

## See Also

- [Non-Teleop 데이터 수집](non-teleop-data)
- [시뮬레이션 & World Model](simulation-world-model)
- [Action Data Scaling 문제](../fundamentals/scaling-problem)
- [Physical Intelligence](../../companies/physical-intelligence)
