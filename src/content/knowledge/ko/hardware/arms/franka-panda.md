---
title: Franka Emika Panda
description: 연구용 협동 로봇의 표준 - 7축 토크 센서 기반 고정밀 매니퓰레이터
tags: [franka, panda, cobot, research, arm, torque-sensor, force-control, vla, manipulation]
category: hardware
author: Physical AI Knowledge Base
created: 2024-01-01
updated: 2025-01-09
---

# Franka Emika Panda

> Home > Hardware > Arms > Franka Panda

<!-- Image pending: ![Franka Panda](../../assets/hardware/arms/franka-panda.png) -->

---

## Overview

Franka Emika Panda는 독일 뮌헨에서 개발된 7축 협동 로봇(cobot)으로, **모든 관절에 토크 센서를 내장**하여 인간 수준의 촉각 감각과 힘 제어를 구현한 혁신적인 연구용 로봇 플랫폼이다. 2018년 Time 매거진 "50 Best Inventions"에 선정되었으며, VLA(Vision-Language-Action) 및 로봇 학습 연구의 사실상 표준 플랫폼으로 자리잡았다.

### 핵심 스펙 테이블

| 항목 | Franka Panda | Franka Research 3 (FR3) |
|------|--------------|-------------------------|
| **제조사** | Franka Emika (독일, 현 Agile Robots) | Franka Emika |
| **자유도 (DoF)** | 7축 | 7축 |
| **페이로드** | 3 kg | 3 kg |
| **리치** | 850 mm | 855 mm |
| **반복정밀도** | ±0.1 mm | ±0.1 mm |
| **최대 속도** | 2 m/s (엔드 이펙터) | 2 m/s |
| **로봇 중량** | 18 kg | 18 kg |
| **제어 주파수** | 1 kHz | 1 kHz |
| **힘 분해능** | < 0.05 N | < 0.05 N |
| **힘 정확도** | 0.8 N (상대) | 0.8 N |
| **힘 반복성** | 0.15 N | 0.15 N |
| **작업공간 커버리지** | - | 94.5% |
| **가격** | ~$30K+ (교육용 할인 있음) | ~$40K+ |

---

## 핵심 의의

### 1. 연구용 로봇의 민주화
Franka Panda는 출시 당시 약 $10,500의 혁신적 가격으로 고가의 산업용 로봇만 존재하던 시장에 파란을 일으켰다. 이로 인해 전 세계 대학과 연구소에서 정밀 매니퓰레이션 연구가 가능해졌으며, MIT, Stanford, Oxford Robotics Institute 등 세계적 연구기관이 표준 플랫폼으로 채택했다.

### 2. VLA/로봇 학습의 데이터 수집 표준
Open X-Embodiment, DROID, BridgeData 등 대규모 로봇 학습 데이터셋의 핵심 수집 플랫폼으로 활용되며, OpenVLA, RT-X, Octo 등 최신 VLA 모델 학습의 근간이 되었다.

### 3. 토크 센서 기반 힘 제어의 대중화
기존 산업용 로봇이 위치 제어에 집중한 반면, Franka Panda는 모든 7개 관절에 토크 센서를 내장하여 **임피던스 제어(Impedance Control)** 및 **충돌 감지**를 실시간으로 수행할 수 있게 했다.

---

## 설계 철학

### "Robotics for Everyone"

Franka Emika의 창립자 Sami Haddadin과 Simon Haddadin 형제는 **"인간과 안전하게 협업하는 로봇"**이라는 비전 아래 Panda를 설계했다.

#### 핵심 설계 원칙

1. **인간 중심 설계 (Human-Centric Design)**
   - 7축 설계로 인간 팔과 유사한 운동학적 구조 구현
   - 인간 팔 무게(약 5kg)의 3.6배 수준인 18kg 경량 설계
   - 협동 로봇으로 설계되어 적절한 위험성 평가 및 안전 설정 시 인간 근접 작업 가능 (ISO 10218, ISO/TS 15066 준수 필요)

2. **촉각 감각의 구현**
   - 모든 관절에 토크 센서 내장 (Link-side torque sensing)
   - 0.05N 미만의 힘 분해능으로 미세한 접촉 감지
   - 실시간 외력 추정 및 충돌 감지 알고리즘

3. **연구 친화적 개방성**
   - Franka Control Interface (FCI): 1kHz 실시간 제어 API
   - 관절 위치, 속도, 토크, 외력 추정값 실시간 접근
   - 관성 행렬, 중력 벡터, 야코비안, 코리올리 항 제공
   - ROS, ROS2, MATLAB/Simulink 통합 지원

4. **토크 제어 우선 철학**
   - 기존 로봇: 전류 과부하 체크 → 힘 감지 어려움
   - Franka: Strain gauge 기반 직접 토크 측정 → 정밀 힘 제어
   - Compliance control로 유연한 물체 조작 가능

### DLR의 유산

Franka의 기술적 뿌리는 **독일 항공우주센터(DLR)**의 경량 로봇(LWR) 연구에 있다. Sami Haddadin은 DLR에서 인간-로봇 상호작용의 안전성을 연구했으며, 이 경험이 Panda의 충돌 감지 및 반응 알고리즘에 직접 반영되었다.

---

## 기술 상세

### 토크 센서 시스템

**Joint 1-7: Link-side Torque Sensors**

엔드이펙터에서의 Cartesian 힘 추정 성능 (공식 데이터시트 기준):
- Force Resolution: < 0.05 N
- Relative Force Accuracy: 0.8 N
- Force Repeatability: 0.15 N

**Real-time Data (1 kHz):**
- Joint positions (q)
- Joint velocities (dq)
- Link-side torque (tau_ext)
- External force estimation (F_ext)
- Inertia matrix M(q)
- Coriolis term C(q, dq)
- Gravity vector g(q)
- Jacobian J(q)

### 제어 인터페이스 (FCI)

Franka Control Interface는 libfranka 라이브러리를 통해 다음을 제공한다:

- **위치 제어**: 관절 공간 및 카테시안 공간
- **속도 제어**: 관절 속도 직접 명령
- **토크 제어**: 관절 토크 직접 명령 (임피던스 제어 구현)
- **하이브리드 제어**: 위치/힘 혼합 제어

---

## VLA 연구 활용

Franka Panda는 VLA(Vision-Language-Action) 모델 연구에서 가장 널리 사용되는 로봇 플랫폼 중 하나이다.

### 주요 데이터셋

| 데이터셋 | 규모 | Franka 활용 | 설명 |
|----------|------|-------------|------|
| **Open X-Embodiment** | 1M+ 에피소드 | 주요 소스 | 22개 로봇 타입, Franka가 핵심 |
| **DROID** | 76,000+ 데모 | 핵심 플랫폼 | 다양한 매니퓰레이션 시연 |
| **BridgeData V2** | 60,000+ 궤적 | 일부 포함 | 테이블탑 조작 데이터 |
| **LIBERO** | 130 태스크 | 시뮬레이션 | PyBullet 기반 Franka 시뮬레이터 |
| **Franka Kitchen** | 다양한 태스크 | 전용 | dm_control 기반 주방 환경 |
| **panda-gym** | 5개 태스크 | 전용 | OpenAI Gym 통합 RL 환경 |

### 주요 VLA 모델 및 논문

#### OpenVLA (2024)
- Open X-Embodiment 970K 궤적으로 학습
- Franka Panda 비디오로 fine-tuned 정책 시연
- 오픈소스 VLA 모델의 표준 벤치마크

#### ReBot (2025)
- Real-to-Sim-to-Real 데이터 증강 기법
- Franka Panda 실험에서 Octo 성능 17%, OpenVLA 성능 20% 향상

#### CoT-VLA (2025)
- Visual Chain-of-Thought 추론 도입
- Franka-Tabletop 데모 fine-tuning 시 46.7% 상대 성능 향상 (53.7% → 78.8%)

#### LoLA (2025)
- Long Horizon Latent Action Learning
- LIBERO 벤치마크 및 실제 Franka 로봇 평가
- State-Aware Latent Re-representation 모듈 도입

#### RT-X / Octo
- Google DeepMind의 로봇 트랜스포머 시리즈
- Open X-Embodiment 기반, Franka 데이터 활용

### 시뮬레이션 환경

- **LIBERO**: PyBullet 기반 장기 언어 조건부 조작 벤치마크
- **panda-gym**: OpenAI Gym 호환 RL 환경 (reach, push, slide, pick & place, stack)
- **RLBench**: CoppeliaSim 기반 100+ 태스크 벤치마크
- **Isaac Sim**: NVIDIA Omniverse 기반 Franka USD 에셋 제공

---

## 타 로봇과 비교

| 항목 | Franka Panda | UR5e | Sawyer | KUKA LWR |
|------|--------------|------|--------|----------|
| **DoF** | 7 | 6 | 7 | 7 |
| **페이로드** | 3 kg | 5 kg | 4 kg | 7 kg |
| **리치** | 850 mm | 850 mm | 1,260 mm | 800 mm |
| **반복정밀도** | ±0.1 mm | ±0.03 mm | ±0.1 mm | ±0.1 mm |
| **토크 센서** | 모든 관절 | 없음 | 관절당 | 모든 관절 |
| **힘 제어** | 네이티브 | 외부 F/T 필요 | 제한적 | 네이티브 |
| **1kHz 제어** | 지원 | 제한적 | 미지원 | 지원 |
| **ROS 지원** | 우수 | 양호 | 중단됨 | 양호 |
| **연구 생태계** | 최대 | 보통 | 제한적 | 보통 |
| **가격** | ~$30K+ | ~$35K+ | 단종 | ~$100K+ |

### Franka의 차별점

1. **토크 제어 네이티브**: UR5는 전류 기반 과부하 체크만 수행하여 정밀 힘 작업이 어려움
2. **연구 생태계**: VLA, 모방 학습 등 최신 연구의 사실상 표준 플랫폼
3. **개방적 API**: 1kHz 실시간 제어 및 전체 동역학 모델 접근
4. **안전성**: DLR 충돌 연구 기반 고급 안전 알고리즘

---

## 회사 연혁 및 현황

### 창업팀

- **Sami Haddadin**: 공동 창업자, 로봇공학/AI 교수 (TUM MIRMI 설립 책임자, 2018-2025)
- **Simon Haddadin**: 공동 창업자, CEO (의사 출신, DLR 연구원)
- **Sven Parusel**: 공동 창업자

### 주요 연혁

| 연도 | 사건 |
|------|------|
| 2016 | Franka Emika GmbH 설립 (뮌헨) |
| 2017 | 독일 미래상(Deutscher Zukunftspreis) 수상 |
| 2018 | Time "50 Best Inventions" 선정, 첫 해 2,000대 출하 |
| 2020 | National Geographic 특집 |
| 2022 | Franka Research 3 (FR3) 출시 |
| 2023.08 | 주주 분쟁으로 예비 파산 신청 |
| 2023.11 | Agile Robots AG에 인수 (약 3,200만 유로) |

### 현재 상태 (2024-2025)

- **소유**: Agile Robots AG (뮌헨, Softbank/Foxconn 투자)
- **직원**: 약 100명 유지
- **제품 라인**: Franka Research 3, Franka Production 3 계속 판매
- **주의사항**: 인수 과정에서 특허권 관련 법적 분쟁 있었음

---

## 구매 및 도입 가이드

### 가격 정보
- **Franka Research 3**: $40,000+ (교육 기관 할인 가능)
- **Franka Production 3**: 산업용, 별도 견적
- **추가 비용**: 그리퍼, 마운팅, 교육, 서포트

### 필요 인프라
- 안정적인 마운팅 표면 (진동 최소화)
- 실시간 Linux PC (Ubuntu 권장)
- 네트워크 연결 (Franka Control Interface)

### 대안 고려
- **연구용**: Franka FR3 (토크 제어 필요시), UR5e (범용성 우선)
- **교육용**: panda-gym, LIBERO 시뮬레이션으로 시작
- **저예산**: 중고 Panda, 또는 시뮬레이션 전용

---

## References

### 공식 자료
- [Franka Emika 공식 웹사이트](https://franka.de/)
- [Franka Research 3 데이터시트 (PDF)](https://download.franka.de/Franka-Research-3_Datasheet_v1.1_August2022.pdf)
- [libfranka 문서](https://frankaemika.github.io/docs/)

### 학술 자료
- [The Franka Emika Robot: A Reference Platform for Robotics Research and Education](https://www.researchgate.net/publication/358870212_The_Franka_Emika_Robot_A_Reference_Platform_for_Robotics_Research_and_Education)
- [On the Interaction Force Sensing Accuracy of Franka Emika Panda Robot (IEEE)](https://ieeexplore.ieee.org/document/9589424)
- [Dynamic Identification of the Franka Emika Panda Robot (HAL)](https://inria.hal.science/hal-02265293v1/document)

### VLA/로봇 학습 연구
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://openvla.github.io/)
- [ReBot: Real-to-Sim-to-Real Robotic Video Synthesis (arXiv)](https://arxiv.org/html/2503.14526v1)
- [CoT-VLA: Visual Chain-of-Thought Reasoning (arXiv)](https://arxiv.org/html/2503.22020v1)
- [LoLA: Long Horizon Latent Action Learning (arXiv)](https://arxiv.org/html/2512.20166)
- [panda-gym: Open-source environments for robotic learning (arXiv)](https://arxiv.org/abs/2106.13687)

### 시뮬레이션/데이터셋
- [Open X-Embodiment Dataset](https://robotics-transformer-x.github.io/)
- [DROID Dataset](https://droid-dataset.github.io/)
- [LIBERO Benchmark](https://libero-project.github.io/)
- [panda-gym GitHub](https://github.com/qgallouedec/panda-gym)
- [Isaac Sim Robot Assets](https://docs.isaacsim.omniverse.nvidia.com/4.5.0/assets/usd_assets_robots.html)

### 뉴스/분석
- [IEEE Spectrum: Franka - A Robot Arm That's Safe, Low Cost, and Can Replicate Itself](https://spectrum.ieee.org/franka-a-robot-arm-thats-safe-low-cost-and-can-replicate-itself)
- [Agile Robots Acquires Franka Emika (The Robot Report)](https://www.therobotreport.com/agile-robots-acquires-franka-emika/)
- [Franka Emika Insolvency News (The Robot Report)](https://www.therobotreport.com/cobot-arm-maker-franka-emika-files-for-insolvency/)

---

## See Also

- [하드웨어 목록](../index.md)
- [Franka Research 3](franka-research3.md)
- [Open X-Embodiment](../../datasets/open-x-embodiment.md)
- [OpenVLA](../../models/openvla.md)
