---
title: NVIDIA
description: NVIDIA의 로보틱스 인프라 - Isaac, Omniverse, Cosmos, GR00T, Jetson
tags: [nvidia, omniverse, cosmos, simulation, world-model, isaac, groot, jetson, gear-lab]
category: companies

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

NVIDIA는 GPU를 넘어 로보틱스 AI의 핵심 인프라를 제공합니다. 시뮬레이션(Omniverse), 세계 모델(Cosmos), 휴머노이드 모델(GR00T), 개발 플랫폼(Isaac), 엣지 컴퓨팅(Jetson)까지 풀스택 로보틱스 솔루션을 구축하고 있습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Santa Clara, CA |
| CEO | Jensen Huang |
| 로보틱스 연구소 | GEAR Lab (Generalist Embodied Agent Research) |
| 핵심 제품 | Isaac, Omniverse, Cosmos, GR00T, Jetson |

---

## GEAR Lab

NVIDIA의 Physical AI 연구를 이끄는 핵심 조직.

| 항목 | 내용 |
|------|------|
| 정식 명칭 | Generalist Embodied Agent Research |
| 공동 리더 | Jim Fan, Yuke Zhu |
| 연구 분야 | Foundation Model, World Model, Embodied AI |

### 핵심 인물

- **Jim Fan**: NVIDIA Robotics Director & Distinguished Scientist. Stanford Ph.D., OpenAI 첫 인턴 출신
- **Yuke Zhu**: UT Austin 부교수, NVIDIA Director & Distinguished Research Scientist. RPL Lab 운영

---

## Isaac Platform

로봇 개발을 위한 엔드투엔드 플랫폼.

### Isaac Sim

| 특징 | 설명 |
|------|------|
| 물리 엔진 | PhysX 5 기반 |
| 렌더링 | RTX 레이트레이싱 |
| 센서 시뮬 | 카메라, LiDAR, IMU |
| 통합 | ROS 2, USD 지원 |

### Isaac Lab

강화학습/이미테이션 러닝 훈련 환경:
- GPU 병렬 시뮬레이션
- Domain Randomization
- Sim-to-Real 파이프라인

### Isaac Lab-Arena (2026)

CES 2026에서 발표된 시뮬레이션 평가 프레임워크:
- Libero, RoboCasa, RoboTwin 벤치마크 통합
- 로봇 능력 가상 검증

---

## Omniverse

물리적으로 정확한 디지털 트윈 플랫폼.

### 핵심 기능

| 기능 | 설명 |
|------|------|
| USD | Universal Scene Description |
| RTX | 실시간 레이트레이싱 |
| PhysX | 물리 시뮬레이션 |
| Nucleus | 협업 데이터 레이어 |

### 로보틱스 응용

```
[실제 공장] ──3D 스캔──→ [Digital Twin] ──시뮬레이션──→ [로봇 학습]
                              ↓
                        [실제 배포]
```

---

## Cosmos

### World Foundation Model

2025년 1월 CES에서 발표된 세계 모델 플랫폼.

| 항목 | 내용 |
|------|------|
| 목적 | Physical AI를 위한 World Model |
| 학습 데이터 | 20M 시간 비디오 (9,000조 토큰) |
| 모델 종류 | Nano, Super, Ultra |
| 응용 | 로보틱스, 자율주행 |

### 핵심 기능

- **물리적 미래 예측**: 다음에 일어날 일 예측
- **Synthetic Data 생성**: 학습 데이터 증강
- **Reasoning**: 행동 결과 시뮬레이션

Jensen Huang: "로보틱스의 ChatGPT 모먼트가 오고 있다"

---

## GR00T (Project)

### 휴머노이드 Foundation Model

| 항목 | 내용 |
|------|------|
| 발표 | GTC 2024 (2024년 3월) |
| 명칭 의미 | Generalist Robot 00 Technology |
| 타겟 | 휴머노이드 로봇 |
| 아키텍처 | Dual-System (System 1 + System 2) |

### Dual-System 아키텍처

인간 인지 원리에서 영감:
- **System 1**: Fast-thinking (행동/스킬) - Diffusion Transformer
- **System 2**: Slow-thinking (추론/계획) - Vision-Language Model

### GR00T N1 (2025년 3월)

GTC 2025에서 발표된 오픈소스 휴머노이드 VLA:
- Vision-Language-Action 모델
- Cross-embodiment 지원
- Hugging Face에서 공개 (nvidia/GR00T-N1-2B)

### GR00T N1.5 (2025년 6월)

COMPUTEX 2025에서 발표:
- GR00T-Dreams 합성 데이터 생성
- RTX PRO 6000 시스템 연동

### GR00T N1.6 (2025년 9월)

CoRL 2025에서 발표:
- Cosmos Reason 통합
- 향상된 추론 능력

---

## Newton Physics Engine

### 오픈소스 물리 엔진

| 항목 | 내용 |
|------|------|
| 발표 | GTC 2025 (2025년 3월) |
| 공동 개발 | NVIDIA, Google DeepMind, Disney Research |
| 관리 | Linux Foundation |
| 기반 | NVIDIA Warp, OpenUSD |

### 성능

- MuJoCo MJX 대비 휴머노이드 보행 152배 빠름
- 매니퓰레이션 작업 313배 빠름 (RTX 4090 기준)

---

## Jetson 하드웨어

### Jetson Thor

| 항목 | 내용 |
|------|------|
| 발표 | GTC 2024 (2024년 3월) |
| 출시 | 2025년 8월 |
| 아키텍처 | Blackwell GPU |
| 성능 | 2070 TFLOPS (FP4) |
| 메모리 | 128GB |
| 전력 | 40W - 130W |

### 가격

- Developer Kit: $3,499
- T5000 모듈: $2,999 (1,000개 기준)

### Jetson T4000 (2026)

CES 2026에서 발표:
- Blackwell 아키텍처 기반
- $1,999 (1,000개 기준)
- Jetson Orin 고객을 위한 업그레이드 경로

---

## 파트너십

### 휴머노이드 파트너

| 회사 | 로봇 | 협력 내용 |
|------|------|----------|
| Boston Dynamics | Atlas | Jetson Thor 탑재 발표 |
| Figure AI | Figure 02 | Isaac/Omniverse 활용 |
| Agility Robotics | Digit | Digit 6세대에 Jetson Thor 예정 |
| 1X Technologies | NEO | GR00T 플랫폼 |
| Apptronik | Apollo | Isaac 시뮬레이션 |
| Unitree Robotics | - | GR00T 파트너 |
| XPENG Robotics | - | GR00T 파트너 |
| Sanctuary AI | - | GR00T N1 얼리 액세스 |
| Fourier Intelligence | - | Cosmos 얼리 어답터 |

### 자동차/산업 파트너

- Mercedes-Benz (공장 디지털 트윈)
- BMW (제조 시뮬레이션)
- Johnson & Johnson MedTech (수술 로봇 시뮬레이션)

### 연구 파트너

- Google DeepMind (Newton 공동 개발)
- Disney Research (Newton 공동 개발, 로봇 캐릭터)
- Hugging Face (LeRobot 통합)

---

## 전략적 위치

```
                  ┌─────────────────┐
                  │     Cosmos      │ ← World Model
                  │  (물리 예측)    │
                  └────────┬────────┘
                           │
┌──────────┐      ┌────────▼────────┐      ┌──────────┐
│  Isaac   │──────│   Omniverse     │──────│  GR00T   │
│  (SDK)   │      │   (시뮬레이션)   │      │  (모델)   │
└──────────┘      └────────┬────────┘      └──────────┘
                           │
                  ┌────────▼────────┐
                  │  Jetson Thor    │ ← 하드웨어
                  │   (엣지 추론)    │
                  └─────────────────┘
```

NVIDIA는 로보틱스 AI의 **인프라 레이어**를 장악하는 전략. 2M+ 로보틱스 개발자와 150+ 파트너 생태계 보유.

---

## References

- [NVIDIA Isaac](https://developer.nvidia.com/isaac)
- [NVIDIA Omniverse](https://www.nvidia.com/en-us/omniverse/)
- [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)
- [Project GR00T](https://developer.nvidia.com/project-groot)
- [NVIDIA GEAR Lab](https://research.nvidia.com/labs/gear/)
- [Newton Physics Engine](https://developer.nvidia.com/newton-physics)
- [Jetson Thor](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/)

---

## See Also

- [회사 목록](./)
- [GR00T](../models/groot)
- [시뮬레이션 & World Model](../essays/insights/simulation-world-model)
