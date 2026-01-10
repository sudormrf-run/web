---
title: Allegro Hand
description: Wonik Robotics의 연구용 4손가락 덱스터러스 핸드
tags:
  - allegro
  - hand
  - dexterous
  - wonik
  - manipulation
  - grasping
  - research
category: hardware
---

# Allegro Hand

> Home > Hardware > Hands > Allegro Hand

<!-- Image pending: ![Allegro Hand](../../assets/hardware/hands/allegro.png) -->
<!-- TODO: 이미지 파일 추가 필요 -->

---

## Overview

**Allegro Hand**는 한국의 **Wonik Robotics (원익로보틱스)**에서 개발한 연구용 다지 로봇 핸드이다. 한국산업기술연구원(KITECH)의 휴머노이드 로봇 핸드 연구 그룹에서 개발한 기술을 기반으로 라이센스를 받아 상용화되었다.

### 기술 사양

| 항목 | 스펙 |
|------|------|
| 제조사 | Wonik Robotics (원익로보틱스) |
| 본사 위치 | 경기도 성남시 |
| DoF | 16 (4 손가락 x 4 관절) |
| 손가락 | 4개 (엄지 포함) |
| 무게 | 약 1.08 kg |
| 페이로드 | 약 5 kg |
| 최대 토크 | 0.70 Nm |
| 최대 관절 속도 | 0.11 s/60° |
| 관절 센서 | 포텐셔미터 (해상도: 0.002°) |
| 통신 방식 | CAN 버스 (1 Mbps) |
| 제어 주파수 | 333 Hz |
| 가격대 | $15,000 - $16,000 |

---

## 핵심 의의

Allegro Hand는 **덱스터러스 매니퓰레이션 연구의 표준 플랫폼**으로 자리매김했다:

1. **접근성 있는 가격**: Shadow Hand ($100K+) 대비 약 1/6 가격으로 연구실 보급에 적합
2. **연구 친화적 설계**: 16 DoF 독립 토크 제어로 복잡한 그라스핑/매니퓰레이션 연구 가능
3. **풍부한 생태계**: ROS 지원, 시뮬레이션 환경 (MuJoCo, Isaac Gym) 통합, 다양한 연구 논문
4. **인간형 구조**: 엄지를 포함한 4손가락 구조로 인간 손 움직임 연구에 적합

---

## 버전 히스토리

| 버전 | 출시 | 주요 특징 | 비고 |
|------|------|-----------|------|
| v1.0 | 초기 | 기본 기능 | 신뢰성 이슈 보고 |
| v2.0 | - | 개선된 설계 | 일부 하드웨어 문제 |
| v3.0 | - | 안정성 향상 | 지속적 개선 |
| v4.0 | 2020년대 초 | **기술/디자인 대폭 개선** | 현재 주력 모델 |
| v5 (3F) | 최신 | 9 DoF, 360° 촉각 센서 | 3손가락 버전 |
| v5 Plus (4F) | 최신 | 16 DoF, 360° 촉각 센서 | 4손가락 프리미엄 |

### v4.0 주요 개선 사항

- **신뢰성 대폭 향상**: 이전 버전의 하드웨어 문제 해결
- **사용 편의성 개선**: 설정 및 운용 간소화
- **디자인 개선**: 외관 및 구조적 완성도 향상
- **센서 옵션 확장**: 다양한 핑거팁 센서 및 자세/방향 센서 (AHRS) 추가 가능
- **소프트웨어 지원**: ROS 패키지 개선 (Python 라이브러리, 32/64비트 지원)

---

## VLA 연구 활용

Allegro Hand는 Vision-Language-Action (VLA) 및 학습 기반 매니퓰레이션 연구에서 널리 활용된다:

### 주요 연구 사례

| 연구 영역 | 활용 방식 | 비고 |
|-----------|-----------|------|
| **모방 학습 (Imitation Learning)** | 텔레오퍼레이션으로 데이터 수집 후 BC/DAPG 학습 | CMU LEAP Hand 비교 연구 |
| **강화 학습 (RL)** | MuJoCo/Isaac Gym 시뮬레이션 → Sim2Real 전이 | 정책 학습 표준 플랫폼 |
| **Visuomotor Diffusion** | 시각-운동 확산 정책으로 복잡한 인핸드 조작 | 뚜껑 돌리기 등 |
| **MPC with Forward Models** | 순방향 모델 기반 MPC로 인핸드 매니퓰레이션 | Luo et al., 2023 |
| **그라스프 플래닝** | 불확실성 고려한 그라스프 계획 | Barrett Hand와 비교 |

### 학습 기반 연구 장점

1. **DAPG (Demo Augmented Policy Gradient)**: 희소 보상 환경에서 효과적인 정책 학습
2. **멀티모달 피드백**: 시각, 촉각, 고유수용감각 통합 가능
3. **Sim2Real 전이**: 시뮬레이션 학습 후 실제 하드웨어 적용 용이

### 한계점

- Shadow Hand 대비 제한된 손가락 수 (5개 → 4개)
- v5 이전 모델은 기본 촉각 센서 미포함 (별도 구매 필요)
- 손목 관절 미포함 (별도 로봇 암 필요)

---

## 하드웨어 연결

### 통신 인터페이스

- **CAN 버스**: 1 Mbps 속도, 다수의 핸드 동시 연결 가능
- **지원 CAN 인터페이스**: NI USB-8473s, PEAK CAN 등
- **커넥터**: JST PHD 시리즈 20핀 (전원 및 통신)

### 마운팅

- 마운팅 블록: 6개의 M3 평머리 나사 사용 (양쪽 3개씩)
- 표준 로봇 암 (UR, Franka, KUKA LWR 등)과 호환

---

## 소프트웨어 지원

| 플랫폼 | 지원 |
|--------|------|
| ROS/ROS2 | 공식 지원 (v1, v2, v4) |
| Windows | 지원 |
| Linux | 지원 (32/64비트) |
| MuJoCo | 커뮤니티 모델 |
| Isaac Gym | 커뮤니티 모델 |

---

## 구매 정보

- **가격 문의**: robotics.biz@wonik.com
- **보증**: 90일 하드웨어 보증
- **옵션**: 핑거팁 센서, AHRS 센서 별도 구매 가능

---

## References

- [Allegro Hand 공식 사이트](https://www.allegrohand.com/)
- [Wonik Robotics 공식 사이트](https://www.wonikrobotics.com/)
- [Allegro Hand Wiki](http://wiki.wonikrobotics.com/AllegroHandWiki/)
- [ROS 패키지 (v4)](https://github.com/simlabrobotics/allegro_hand_ros_v4)
- [Dexterous Manipulation for Multi-Fingered Robotic Hands With Reinforcement Learning: A Review](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2022.861825/full)
- [Survey of Learning-Based Approaches for Robotic In-Hand Manipulation](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1455431/full)

---

## See Also

- [하드웨어 목록](../index.md)
- [Shadow Hand](shadow-hand.md)
- [LEAP Hand](leap-hand.md)
