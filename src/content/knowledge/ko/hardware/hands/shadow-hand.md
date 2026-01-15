---
title: Shadow Dexterous Hand
description: 고자유도 텐던 구동 방식의 연구용 덱스터러스 로봇 핸드
tags: [shadow, hand, dexterous, tendon, tactile, manipulation, research, uk]
category: hardware

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Shadow Dexterous Hand

> Home > Hardware > Hands > Shadow Hand

<!-- Image pending: ![Shadow Hand](../../assets/hardware/hands/shadow-hand.png) -->

---

## Overview

| 항목 | 스펙 | 출처 |
|------|------|------|
| 제조사 | Shadow Robot Company (영국, 런던) | [^1] |
| 설립 | 1987년 | [^1] |
| 상용화 | 2005년 | [^2] |
| DoF | 20개 자유도, 24개 움직임 | [^3] |
| 모터 | 20개 | [^3] |
| 센서 | 129개 이상 (최대 1kHz 샘플링) | [^3] |
| 구동 방식 | 텐던 구동 (Tendon-driven) | [^3] |
| 통신 | EtherCAT (100Mbps) | [^3] |
| 소프트웨어 | ROS 완전 통합 | [^3] |
| 가격 | 약 110,000 유로 (설치, 교육, 지원 포함, 2023년 기준) | [^4] |

---

## 핵심 의의

**Shadow Dexterous Hand는 덱스터러스 매니퓰레이션 연구 분야에서 가장 널리 채택된 표준 플랫폼 중 하나이다.** [^2]

- **최고 수준의 자유도**: 시장에서 24개 움직임과 20 DoF를 제공하는 몇 안 되는 로봇 핸드 중 하나 [^3]
- **인간 손에 근접한 구조**: 각 손가락이 독립적으로 좌우로 움직일 수 있어 높은 유연성 제공 [^3]
- **오랜 활용 실적**: 2005년 상용화 이후 NASA, OpenAI, Google DeepMind, Carnegie Mellon 등 주요 연구 기관에서 채택 [^2]
- **AI/ML 연구의 주요 플랫폼**: 강화학습 기반 덱스터러스 매니퓰레이션 연구에서 광범위하게 활용 [^5][^6]

---

## 설계 철학

### 생체모방 설계 (Biomimetic Design)

Shadow Hand의 핵심 철학은 **인간 손의 해부학적 구조를 충실히 재현**하는 것이다. [^3]

**텐던 구동 시스템**
- 인간의 근골격계처럼 텐던(힘줄)을 통해 힘을 전달
- 자연스럽고 유연한 움직임 구현
- 각 관절의 독립적이면서도 협조적인 제어 가능
- 손목부터 손가락 끝까지 연속적인 힘 전달

**센서 아키텍처**
- 129개 이상의 센서가 인간 손의 고유수용감각(proprioception)과 촉각을 모방 [^3]
- 위치, 힘, 온도 등 다양한 감각 정보 제공
- 최대 1kHz의 고속 샘플링으로 실시간 제어 가능

**손가락 구조**
- 5개 손가락 (엄지 포함, 4개 손가락 + 대립 가능한 엄지)
- 각 손가락의 독립적인 내전/외전(adduct/abduct) 움직임
- 인간과 유사한 관절 구조

---

## 상세 스펙

### 구동계 [^3]

| 항목 | 사양 |
|------|------|
| 모터 수 | 20개 |
| 토크 루프 주파수 | 5kHz (모터 유닛 내부) |
| 제어 방식 | 위치 제어 (호스트 PC), ROS 기반 커스텀 제어 가능 |

### 센서 시스템 [^3]

| 센서 타입 | 설명 |
|-----------|------|
| PST (Pressure Sensor Tactiles) | 기본 장착, 손가락 끝 압력 감지, 11-bit ADC |
| BioTac 센서 (옵션) | SynTouch LLC 제휴, 힘/미세진동/온도 감지 [^7] |
| 관절 위치 센서 | 각 관절 위치 감지 |
| 힘 센서 | 텐던 장력 측정 |

**BioTac 센서 상세** [^7]
- 24개 taxels (촉각 요소)
- 100Hz 샘플링
- 전체적인 유체 압력 및 온도 변화 감지
- 인간 손가락 끝과 유사한 형태 및 기계적 특성

### 통신 및 인터페이스 [^3]

- **EtherCAT 버스**: 100Mbps Ethernet 기반 산업용 통신
- **ROS 완전 통합**: ROS 노드 및 메시지 제공
- **자체 완결형 시스템**: 모든 구동 및 센싱이 핸드와 전완(forearm)에 내장

---

## 제품 라인업

### Shadow Dexterous Hand E Series [^3]

**표준 연구용 모델**

- 24개 움직임, 20 DoF
- 5손가락 구조
- 129개 이상 센서
- ROS 통합
- 가격: 약 110,000 유로 (BioTac 장착 시 약 180,000 달러, 2023년 기준) [^4]

### Shadow DEX-EE Series [^8]

**장시간 강화학습 실험용 (Google DeepMind 협력 개발)**

DEX-EE는 Google DeepMind의 요청으로 5년간 개발된, **강화학습 실험에 최적화된 차세대 핸드**이다. [^8]

| 항목 | 스펙 |
|------|------|
| 손가락 수 | 3개 (강건한 3-finger 설계) |
| 크기 | 인간 손 대비 약 50% 크게 |
| 모터 | 15개 maxon DCX16 DC 모터 |
| 내구성 테스트 | 1,000시간 이상 |

**센서 시스템 (각 손가락당)** [^8]
- 5개 텐던 힘 센서
- 5개 모터 엔코더
- 4개 관절 각도 센서
- 3개 IMU (관성 측정 장치)
- 36개 taxels (중간/근위 지절 촉각 센서)
- 50 FPS 640x480 스테레오 비디오 (원위 지절 촉각 센서)

**설계 특징**
- 정책 학습 중 반복적인 충격과 공격적인 사용에도 견딤
- 모듈식 구조로 대체 손가락 레이아웃 지원
- 모든 관절에서 부드러운 토크 제어
- 하드웨어 고장 없이 장시간 연속 실험 가능

---

## 주요 연구 사례

### 1. OpenAI: 손 안 물체 조작 학습 (2018)

**논문**: "Learning Dexterous In-Hand Manipulation" [^5]

- 시뮬레이션에서 강화학습으로 훈련 후 실제 Shadow Hand로 전이
- 시뮬레이션-실제 전이(Sim-to-Real Transfer) 분야의 중요한 연구
- 물체 재방향 작업에서 연속 13회 회전 성공 (중앙값)
- 인간 시연 없이 finger gaiting, 다중 손가락 협조 등 자연스러운 행동 출현

### 2. OpenAI: 로봇 핸드로 루빅스 큐브 풀기 (2019)

**논문**: "Solving Rubik's Cube with a Robot Hand" [^6]

- **단일 로봇 핸드로 루빅스 큐브 풀기** - 전례 없는 복잡도의 매니퓰레이션
- Automatic Domain Randomization (ADR) 알고리즘 개발
- 학습 규모: 64 NVIDIA V100 GPU, 920 워커 머신
- 누적 경험: 약 13,000년 (OpenAI Five와 유사한 규모)
- 개발 기간: 2017년 5월 ~ 2019년 10월 (약 2.5년)

### 3. Google DeepMind: DEX-EE 개발 협력 [^8]

- Shadow Robot과 5년간 협력하여 DEX-EE 개발
- 강화학습 실험에서의 하드웨어 내구성 문제 해결
- 풍부한 센서 데이터와 강건성을 동시에 확보

### 4. 기타 주요 연구

**Grasping in the Dark (ICRA 2021)** [^9]
- BioTac 촉각 센서만으로 다양한 형상/크기/무게의 물체 파지
- 사전 지식 없이 고전적 제어로 폐루프 파지

**Google Brain: Deep Dynamics Models** [^10]
- 단 4시간의 실제 로봇 데이터로 다중 물체 조작 학습
- DDM (Deep Dynamics Models) 기반 작업 계획

---

## 한계 및 고려사항

| 한계 | 설명 |
|------|------|
| 높은 가격 | 약 110,000 유로 이상 (연구 예산 확보 필요) [^4] |
| 유지보수 | 텐던 기반 시스템의 정기적 관리 필요 |
| 학습 곡선 | 복잡한 시스템으로 초기 셋업 및 운용 학습 필요 |
| 실험 환경 | DEX-EE 이전 모델은 장시간 강화학습 실험에 취약 |

---

## Shadow Robot Company 소개

| 항목 | 내용 | 출처 |
|------|------|------|
| 설립 | 1987년 (Richard Greenhill, 런던 다락방에서 시작) | [^1] |
| 정식 등록 | 1997년 (로봇 다리 컴포넌트 의뢰 계기) | [^2] |
| 본사 | 영국 런던 | [^1] |
| 지사 | Bristol, Madrid | [^1] |
| 특징 | 영국에서 오랜 역사를 가진 로봇 회사 | [^1] |

**주요 고객**: NASA, ESA, OpenAI, Google DeepMind, Carnegie Mellon, UCL, University of Bielefeld, GSK 등 (공식 사이트 및 Wikipedia 참조) [^1][^2]

---

## See Also

- [하드웨어 목록](../index.md)
- [LEAP Hand](leap-hand.md) - Shadow Hand 대비 저렴한 오픈소스 대안
- [Allegro Hand](allegro.md)
- [GEX 시리즈](gex.md)

---

## References

### 공식 사이트

- [Shadow Robot Company 공식 사이트](https://shadowrobot.com/) [^1]
- [Dexterous Hand Series 제품 페이지](https://shadowrobot.com/dexterous-hand-series/) [^3]
- [DEX-EE Series 제품 페이지](https://shadowrobot.com/dex-ee_series/) [^8]
- [기술 사양서 PDF (2024년 6월 업데이트)](https://www.shadowrobot.com/wp-content/uploads/2024/06/20240610-UPDATED-shadow_dexterous_hand_e_technical_specification.pdf)

### 핵심 논문

- Akkaya et al. (2019). "Solving Rubik's Cube with a Robot Hand." arXiv:1910.07113. [논문 링크](https://arxiv.org/abs/1910.07113) [^6]
- Andrychowicz et al. (2020). "Learning Dexterous In-Hand Manipulation." The International Journal of Robotics Research. [arXiv:1808.00177](https://arxiv.org/abs/1808.00177) [^5]

### 관련 자료

- [OpenAI: Learning Dexterity 블로그](https://openai.com/index/learning-dexterity/)
- [IEEE Spectrum: New Shadow Hand Can Take a Beating](https://spectrum.ieee.org/robot-hand-shadow-robot-company)
- [Shadow Robot Blog: How Much Does a Robot Hand Cost?](https://shadowrobot.com/blog/how-much-does-a-robot-hand-cost/) [^4]

---

## 각주

[^1]: Shadow Robot Company 공식 사이트 (https://shadowrobot.com/)
[^2]: Shadow Hand Wikipedia 및 회사 연혁 (https://en.wikipedia.org/wiki/Shadow_Hand)
[^3]: Shadow Dexterous Hand Technical Specification (https://www.shadowrobot.com/wp-content/uploads/2024/06/20240610-UPDATED-shadow_dexterous_hand_e_technical_specification.pdf)
[^4]: Shadow Robot Blog: How Much Does a Robot Hand Cost? (https://shadowrobot.com/blog/how-much-does-a-robot-hand-cost/)
[^5]: Andrychowicz et al. (2020). "Learning Dexterous In-Hand Manipulation." arXiv:1808.00177
[^6]: Akkaya et al. (2019). "Solving Rubik's Cube with a Robot Hand." arXiv:1910.07113
[^7]: SynTouch BioTac 센서 통합 정보 (https://shadowrobot.com/news/company-news/biotac-sensors/)
[^8]: Shadow DEX-EE Series 공식 페이지 (https://shadowrobot.com/dex-ee_series/)
[^9]: "Grasping in the Dark: Compliant Grasping using Shadow Dexterous Hand and BioTac Tactile Sensor" (ICRA 2021)
[^10]: Google Brain Deep Dynamics Models 연구 (https://shadowrobot.com/blog/machine-learning-innovation/)
