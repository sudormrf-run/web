---
title: Franka Research 3 (FR3)
description: AI 및 로봇공학 연구의 기준 플랫폼 - Franka Panda의 차세대 진화
tags: [franka, research3, fr3, cobot, research, arm, torque-sensor, force-control, vla, manipulation, fci, ros2]
category: hardware
author: Physical AI Knowledge Base
created: 2024-01-01
updated: 2026-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Franka Research 3 (FR3)

> Home > Hardware > Arms > Franka Research 3

<!-- Image pending: ![Franka Research 3](../../assets/hardware/arms/franka-research3.png) -->
<!-- 이미지 파일이 없는 경우 공식 이미지 참조: https://franka.de/franka-research-3 -->

---

## Overview

Franka Research 3(FR3)는 독일 Franka Robotics(구 Franka Emika)가 개발한 차세대 7축 협동 로봇으로, 원래 Franka Panda의 진화된 버전이다. **모든 관절에 토크 센서를 내장**하고 1kHz 실시간 제어를 지원하여 AI 및 로봇공학 연구의 사실상 표준(Reference Platform)으로 자리잡았다. 2025년 2월 기준 전 세계 1,000대 이상이 주요 연구기관에 배치되어 [^agile-1000] VLA(Vision-Language-Action) 모델 학습, 힘 제어 연구, 인간-로봇 상호작용 연구에 활용되고 있다.

[^agile-1000]: [Franka Robotics 1,000대 FR3 생산 달성 (2025.02)](https://www.agile-robots.com/en/news/detail/franka-robotics-celebrates-production-of-1000th-franka-research-3-robot/)

### 핵심 스펙 테이블

| 항목 | Franka Research 3 (FR3) | Franka Panda (레거시) |
|------|-------------------------|----------------------|
| **제조사** | Franka Robotics (Agile Robots AG 산하) | Franka Emika |
| **자유도 (DoF)** | 7축 | 7축 |
| **페이로드** | 3 kg | 3 kg |
| **리치** | 855 mm | 850 mm |
| **반복정밀도** | ±0.1 mm (ISO 9283) | ±0.1 mm |
| **작업공간 커버리지** | 94.5% | - |
| **최대 엔드이펙터 속도** | 2 m/s | 2 m/s |
| **제어 주파수** | 1 kHz | 1 kHz |
| **관절 속도 (J1-4)** | 150°/s | 150°/s |
| **관절 속도 (J5-7)** | 301°/s | 301°/s |
| **로봇 중량** | 17.8 kg | 18 kg |
| **컨트롤러 중량** | 7 kg | - |
| **힘 분해능** | < 0.05 N | < 0.05 N |
| **보호 등급** | IP40 (로봇) / IP20 (컨트롤러) | IP30 |
| **작동 온도** | +5°C ~ +45°C (최적: 15-25°C) | +15°C ~ +25°C |
| **전원** | 100-240V AC, 50-60Hz, 80W | - |
| **가격** | ~$40,000+ | ~$30,000+ (단종) |

상기 스펙은 공식 데이터시트 및 제품 페이지 기준. [^fr3-specs]

[^fr3-specs]: [Franka Research 3 공식 페이지](https://franka.de/franka-research-3), [Generation Robots FR3 제품 페이지](https://www.generationrobots.com/en/403992-7-axis-franka-research-3-robotic-arm-fci-licence.html)

### 관절 회전 범위

| 관절 | 최소 | 최대 |
|------|------|------|
| Joint 1 | -166° | +166° |
| Joint 2 | -101° | +101° |
| Joint 3 | -166° | +166° |
| Joint 4 | -176° | -4° |
| Joint 5 | -166° | +166° |
| Joint 6 | -1° | +215° |
| Joint 7 | -166° | +166° |

관절 범위는 Franka Research 3 Datasheet v1.1 기준. [^fr3-datasheet]

[^fr3-datasheet]: [Franka Research 3 Datasheet v1.1 (2022.08)](https://download.franka.de/Franka-Research-3_Datasheet_v1.1_August2022.pdf)

---

## 핵심 의의

### 1. AI 및 로봇공학 연구의 기준 플랫폼

Franka Research 3는 전 세계 주요 대학과 연구소에서 **사실상의 표준 연구 플랫폼**으로 채택되었다. MIT, Stanford, CMU, Oxford Robotics Institute 등 세계적 연구기관이 FR3를 핵심 연구 장비로 사용하며, VLA 모델 학습을 위한 데이터 수집의 근간이 되고 있다.

### 2. VLA/모방 학습 연구의 핵심 플랫폼

Open X-Embodiment, DROID 등 대규모 로봇 학습 데이터셋에서 Franka 로봇 데이터가 핵심 비중을 차지한다. 최근 연구에서는 FR3를 활용한 VLA 모델이 LIBERO 벤치마크 및 정밀 조작 태스크(GPU 삽입/제거 등)에서 **99% 이상의 성공률**을 달성하며 [^self-improving-vla], 1시간 이상 무중단으로 작업을 수행하는 성과를 보였다.

[^self-improving-vla]: [Self-Improving VLA with PLD (2025)](https://www.wenlixiao.com/self-improve-VLA-PLD/)

### 3. 토크 제어 기반 정밀 힘 제어의 대중화

7개 관절 모두에 토크 센서를 내장하여 **실시간 외력 추정** 및 **충돌 감지**가 가능하다. 이를 통해 임피던스 제어, 컴플라이언스 제어 등 고급 힘 제어 기법을 구현할 수 있으며, 직관적인 핸드 가이딩 기능도 지원한다.

### 4. 연구 친화적 개방성

FCI(Franka Control Interface)를 통해 1kHz 실시간 제어가 가능하며, libfranka C++ 라이브러리, ROS 2, MATLAB/Simulink 등 다양한 개발 환경을 지원한다. 연구자가 저수준 제어부터 고수준 태스크까지 자유롭게 구현할 수 있다.

---

## Panda 대비 주요 개선점

### 하드웨어 개선

| 항목 | Panda | FR3 | 개선 내용 |
|------|-------|-----|----------|
| **리치** | 850 mm | 855 mm | 5mm 증가 |
| **작업공간 커버리지** | 미공개 | 94.5% | 최적화된 기구학 |
| **무게** | 18 kg | 17.8 kg | 200g 경량화 |
| **관절 마킹** | 없음 | X/Y 축 표시 | 직관적 셋업 |
| **디자인** | - | 현대적 미학 | 인체공학적 개선 |
| **보호 등급** | IP30 | IP40 | 향상된 방진 |

### 소프트웨어 개선

1. **Desk API**: REST 인터페이스로 프로그래밍 방식의 로봇 제어 (브레이크 해제, FCI 활성화, 안전 위반 해제 등)
2. **현장 토크 센서 재교정**: 연구자가 직접 토크 센서 교정 가능 (수명 주기 전반에 걸쳐 일관된 민감도 유지)
3. **ROS 2 Jazzy 지원**: 최신 ROS 2 프레임워크 완전 호환
4. **MoveIt 2 통합**: 최신 모션 플래닝 프레임워크 완전 지원
5. **OTA 업데이트**: 무선 소프트웨어 업데이트 지원

---

## 제어 인터페이스 (FCI)

Franka Control Interface(FCI)는 FR3의 핵심 저수준 제어 인터페이스로, libfranka C++ 라이브러리를 통해 1kHz 실시간 제어를 제공한다.

### 제어 모드 (5가지)

```
┌─────────────────────────────────────────────────────────────────┐
│              Franka Control Interface (FCI) 제어 모드              │
├─────────────────────────────────────────────────────────────────┤
│  1. Joint Torque Control                                        │
│     └─ 중력 및 마찰 보상 포함 관절 토크 직접 명령                    │
│                                                                 │
│  2. Joint Position Control                                      │
│     └─ 관절 공간 위치 명령                                        │
│                                                                 │
│  3. Joint Velocity Control                                      │
│     └─ 관절 속도 직접 명령                                        │
│                                                                 │
│  4. Cartesian Pose Control                                      │
│     └─ 카테시안 공간 위치/자세 명령                                │
│                                                                 │
│  5. Cartesian Velocity Control                                  │
│     └─ 카테시안 속도 명령                                         │
└─────────────────────────────────────────────────────────────────┘
```

### 1kHz 센서 데이터 접근

실시간으로 다음 데이터에 접근 가능:

- **관절 데이터**: 위치 (q), 속도 (dq), 링크 측 토크 센서 신호 (τ)
- **외력 추정**: 외부 토크 및 힘 추정값 (τ_ext, F_ext)
- **충돌 정보**: 충돌 감지 및 접촉 정보
- **로봇 모델**: 관성 행렬 M(q), 코리올리 항 C(q,dq), 중력 벡터 g(q), 야코비안 J(q)

### 비동기 관절 위치 업데이트

최신 FCI에서는 비동기 관절 위치 업데이트를 지원하여 더 유연하고 컴플라이언트한 제어 워크플로우가 가능하다.

---

## 프로그래밍 인터페이스 (3단계)

FR3는 연구 목적에 따라 3가지 수준의 프로그래밍 인터페이스를 제공한다.

### 1. Desk (고수준)

**워크플로우 기반 비주얼 프로그래밍 인터페이스**

- 브라우저 기반 GUI로 드래그 앤 드롭 프로그래밍
- 프로그래밍 지식 없이 빠른 프로토타이핑 가능
- 인간-로봇 상호작용 연구, 데모, 실험 설정에 적합
- Research Apps를 통한 기능 확장

### 2. RIDE (중수준)

**Robot Integrated Development Environment**

- 커스텀 Desk Apps 개발 환경
- 외부 센서 및 기타 기능 연결
- **Lingua Franka**: 도메인 특화 언어(DSL)로 상태 머신 프로그래밍
- **ride-cli**: 커맨드 라인 인터페이스로 개발
- 밀리초 단위 반응이 필요 없는 연구에 적합 (태스크 플래닝, 경로 플래닝, 인식 기반 매니퓰레이션)

### 3. FCI (저수준)

**Franka Control Interface - 실시간 저수준 제어**

- libfranka C++ 라이브러리 기반
- 1kHz 실시간 제어 명령 전송
- 모션 제어 연구, 고급 제어 알고리즘 개발에 필수
- 커스텀 임피던스 제어, 힘 제어 구현 가능

### Desk API (REST 인터페이스)

2025년 업데이트로 추가된 프로그래밍 방식 제어:

```
POST /api/brakes/release    # 브레이크 해제
POST /api/fci/activate      # FCI 활성화
POST /api/safety/clear      # 안전 위반 해제
```

- 자동화된 연구 워크플로우 구현
- 무인 실험 환경 구축 가능
- `<로봇 IP>/deskapi`에서 문서 접근 가능

---

## 안전 기능

FR3는 협동 로봇으로서 ISO 10218 및 ISO/TS 15066 안전 표준을 준수한다.

### 핵심 안전 메커니즘

1. **충돌 감지 (Collision Detection)**
   - 7개 관절 토크 센서 기반 실시간 외력 감지
   - 빠른 제어 루프(1kHz)로 즉각적인 충돌 반응
   - 소프트웨어 기반 가상 벽/작업 공간 제한

2. **힘 제한 (Power and Force Limiting)**
   - ISO/TS 15066 기준 힘/압력 제한
   - 커스텀 안전 규칙 설정 가능
   - 자체 손상 방지를 위한 내부 감시

3. **안전 기능 설정**
   - 커스텀 안전 규칙 구현 (작업자 보호)
   - 속도, 힘, 작업 공간 제한 프로그래밍
   - 원격 안전 위반 해제 (Desk API)

4. **핸드 가이딩**
   - 토크 센서 기반 직관적 수동 조작
   - 부드러운 컴플라이언스 제어

---

## VLA 연구 활용

FR3는 VLA(Vision-Language-Action) 모델 연구에서 가장 널리 사용되는 로봇 플랫폼 중 하나이다.

### 주요 연구 성과

| 연구 | 성과 | FR3 활용 |
|------|------|----------|
| **Self-Improving VLA (2025)** | 99% 이상 성공률, 1시간 무중단 GPU 삽입/제거 | 핵심 실험 플랫폼 |
| **PLD Post-Training** | LIBERO 벤치마크 99% 달성, SimplerEnv 50%+ 향상 | 실제 로봇 검증 |
| **CoT-VLA (2025)** | 46.7% 상대 성능 향상 (53.7% → 78.8%) | Franka-Tabletop 평가 |
| **ReBot (2025)** | Octo 17%, OpenVLA 20% 성능 향상 | Real-to-Sim-to-Real 검증 |

### 주요 데이터셋

| 데이터셋 | 규모 | FR3/Panda 활용 |
|----------|------|----------------|
| **Open X-Embodiment** | 1M+ 에피소드 | 핵심 데이터 소스 |
| **DROID** | 76,000+ 데모 | 주요 수집 플랫폼 |
| **BridgeData V2** | 60,000+ 궤적 | 일부 포함 |
| **LIBERO** | 130 태스크 | PyBullet 시뮬레이션 |
| **Franka Kitchen** | 다양한 태스크 | dm_control 기반 |

### 시뮬레이션 환경

- **MuJoCo**: Franka 공식 지원
- **Isaac Sim**: NVIDIA Omniverse 기반 USD 에셋 제공
- **LIBERO**: PyBullet 기반 장기 조작 벤치마크
- **panda-gym**: OpenAI Gym 호환 RL 환경
- **RLBench**: CoppeliaSim 기반 100+ 태스크

---

## 소프트웨어 생태계

### 공식 지원

| 플랫폼 | 지원 수준 | 설명 |
|--------|----------|------|
| **libfranka** | 공식 | C++ 실시간 제어 라이브러리 |
| **franka_ros2** | 공식 | ROS 2 Control 통합 |
| **ROS 2 Jazzy** | 공식 (2025) | 최신 ROS 2 완전 지원 |
| **MoveIt 2** | 공식 (2025) | 모션 플래닝 프레임워크 |
| **MATLAB/Simulink** | 공식 | 제어 시스템 설계 |
| **MuJoCo** | 공식 | 물리 시뮬레이션 |

### 커뮤니티 도구

| 도구 | 설명 |
|------|------|
| **Franky** | 고수준 Python/C++ 제어 라이브러리 |
| **franka-interface** | CMU iamlab의 libfranka 래퍼 |
| **panda-gym** | OpenAI Gym 호환 강화학습 환경 |

---

## 타 로봇과 비교

| 항목 | FR3 | UR5e | KUKA LWR | Kinova Gen3 |
|------|-----|------|----------|-------------|
| **DoF** | 7 | 6 | 7 | 7 |
| **페이로드** | 3 kg | 5 kg | 7 kg | 4 kg |
| **리치** | 855 mm | 850 mm | 800 mm | 902 mm |
| **반복정밀도** | ±0.1 mm | ±0.03 mm | ±0.1 mm | ±0.1 mm |
| **토크 센서** | 모든 관절 | 없음 | 모든 관절 | 없음 |
| **힘 제어** | 네이티브 | 외부 F/T 필요 | 네이티브 | 제한적 |
| **1kHz 제어** | 지원 | 제한적 | 지원 | 미지원 |
| **ROS 2 지원** | 우수 | 양호 | 양호 | 양호 |
| **VLA 생태계** | 최대 | 보통 | 보통 | 보통 |
| **가격** | ~$40K | ~$35K | ~$100K | ~$35K |

### FR3의 차별점

1. **토크 제어 네이티브**: 모든 관절에 토크 센서 내장으로 정밀 힘 제어 가능
2. **VLA 연구 생태계**: 최대 규모의 연구 커뮤니티 및 데이터셋
3. **개방적 API**: 1kHz 실시간 제어 및 전체 동역학 모델 접근
4. **연구 친화적**: Desk, RIDE, FCI 3단계 인터페이스로 다양한 연구 수준 지원

---

## AI Companion (옵션)

**Franka AI Companion**은 FR3와 함께 사용할 수 있는 엣지 컴퓨팅 솔루션이다.

- NVIDIA GPU 가속 연산
- 1kHz 실시간 제어와 통합
- AI/로봇공학 연구 워크플로우 가속화
- 별도 워크스테이션 없이 실험 환경 구축

---

## 회사 연혁

| 연도 | 사건 |
|------|------|
| 2016 | Franka Emika GmbH 설립 (뮌헨) |
| 2017 | 독일 미래상 수상, Panda 출시 |
| 2018 | Time "50 Best Inventions" 선정 |
| 2022 | Franka Research 3 (FR3) 출시 |
| 2023.08 | 주주 분쟁으로 예비 파산 신청 |
| 2023.11 | Agile Robots AG에 인수 (~3,200만 유로) |
| 2025.02 | FR3 1,000대 생산 달성 |
| 2025 | ROS 2 Jazzy, MoveIt 2, Desk API 지원 |

### 현재 상태 (2025)

- **소유**: Agile Robots AG (뮌헨, Softbank/Foxconn 투자)
- **브랜드**: Franka Robotics
- **제품 라인**: Franka Research 3, Franka Production 3
- **지원**: 지속적인 OTA 업데이트 및 기술 지원

---

## 구매 및 도입 가이드

### 가격 정보

- **Franka Research 3 + FCI 라이선스**: ~$40,000+
- **Franka Hand (그리퍼)**: 별도 구매
- **AI Companion**: 별도 견적
- **교육 기관 할인**: 문의 필요

### 필요 인프라

- 안정적인 마운팅 표면 (진동 최소화)
- 실시간 Linux PC (Ubuntu 권장)
- 이더넷 연결 (10Gbps 권장)
- 컨트롤러 설치 공간: 355 x 483 x 89 mm

### 구매처

- [Franka Robotics 공식](https://franka.de/)
- [Generation Robots](https://www.generationrobots.com/)
- [Clearpath Robotics](https://store.clearpathrobotics.com/)

---

## References

### 공식 자료
- [Franka Research 3 공식 페이지](https://franka.de/franka-research-3)
- [Franka Research 3 데이터시트 (PDF)](https://download.franka.de/Franka-Research-3_Datasheet_v1.1_August2022.pdf)
- [Franka 문서 센터](https://franka.de/documents)
- [libfranka 문서](https://frankarobotics.github.io/docs/)
- [libfranka GitHub](https://github.com/frankarobotics/libfranka)
- [RIDE CLI 문서](https://download.franka.de/ride-cli-doc/overview.html)

### 학술 자료
- [The Franka Emika Robot: A Reference Platform for Robotics Research and Education](https://www.researchgate.net/publication/358870212)
- [Self-Improving VLA with PLD](https://www.wenlixiao.com/self-improve-VLA-PLD/)
- [Vision-Language-Action Models Survey](https://vla-survey.github.io/)

### 뉴스/업데이트
- [Franka Research 3: Unveiling New Features (2025)](https://franka.de/news/franka-research-3-unveiling-new-features)
- [Franka Robotics 1,000대 FR3 생산 달성](https://www.agile-robots.com/en/news/detail/franka-robotics-celebrates-production-of-1000th-franka-research-3-robot/)
- [Agile Robots의 Franka Emika 인수](https://www.therobotreport.com/agile-robots-acquires-franka-emika/)

### 시뮬레이션/데이터셋
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- [DROID Dataset](https://droid-dataset.github.io/)
- [LIBERO Benchmark](https://libero-project.github.io/)
- [panda-gym GitHub](https://github.com/qgallouedec/panda-gym)

---

## See Also

- [하드웨어 목록](../index.md)
- [Franka Panda](franka-panda.md)
- [OpenVLA](../../models/openvla.md)
- [Open X-Embodiment](../../datasets/open-x-embodiment.md)
