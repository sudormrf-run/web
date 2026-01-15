---
title: NVIDIA
description: NVIDIA의 로보틱스 인프라 - Isaac, Omniverse, Cosmos, GR00T
tags: [nvidia, omniverse, cosmos, simulation, world-model, isaac, groot]
category: companies

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# NVIDIA

> Home > Companies > NVIDIA

---

## Overview

NVIDIA는 GPU를 넘어 로보틱스 AI의 핵심 인프라를 제공합니다. 시뮬레이션(Omniverse), 세계 모델(Cosmos), 휴머노이드 모델(GR00T), 개발 플랫폼(Isaac)까지 풀스택 로보틱스 솔루션을 구축하고 있습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Santa Clara, CA |
| CEO | Jensen Huang |
| 로보틱스 부문 | NVIDIA Robotics |
| 핵심 제품 | Isaac, Omniverse, Cosmos, GR00T |

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

2025년 1월 발표된 세계 모델 플랫폼.

| 항목 | 내용 |
|------|------|
| 목적 | Physical AI를 위한 World Model |
| 학습 데이터 | 20M+ 비디오 시간 |
| 토큰화 | 비디오 → 토큰 압축 |
| 응용 | 로보틱스, 자율주행 |

### 핵심 기능

- **물리적 미래 예측**: 다음에 일어날 일 예측
- **Synthetic Data 생성**: 학습 데이터 증강
- **Reasoning**: 행동 결과 시뮬레이션

---

## GR00T (Project)

### 휴머노이드 Foundation Model

| 항목 | 내용 |
|------|------|
| 발표 | 2024년 GTC |
| 타겟 | 휴머노이드 로봇 |
| 아키텍처 | Dual-System |
| 데이터 | Omniverse 합성 데이터 |

### GR00T N1 (2025)

오픈소스 휴머노이드 VLA:
- 합성 데이터로 학습
- 실제 환경 Zero-shot 적용
- Cross-embodiment 지원

---

## 파트너십

### 휴머노이드 파트너

| 회사 | 로봇 |
|------|------|
| Figure AI | Figure 02 |
| 1X Technologies | NEO |
| Agility | Digit |
| Apptronik | Apollo |
| Boston Dynamics | Atlas |

### 자동차 파트너

- Mercedes-Benz (공장 디지털 트윈)
- BMW (제조 시뮬레이션)

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
                  │   GPU/Jetson    │ ← 하드웨어
                  │   (추론 실행)    │
                  └─────────────────┘
```

NVIDIA는 로보틱스 AI의 **인프라 레이어**를 장악하는 전략.

---

## References

- [NVIDIA Isaac](https://developer.nvidia.com/isaac)
- [NVIDIA Omniverse](https://www.nvidia.com/en-us/omniverse/)
- [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)
- [Project GR00T](https://developer.nvidia.com/project-groot)

---

## See Also

- [회사 목록](index.md)
- [GR00T](../models/groot.md)
- [시뮬레이션 & World Model](../solutions/simulation-world-model.md)

