---
title: ALOHA
description: 저가형 오픈소스 양팔 텔레오퍼레이션 플랫폼
tags:
  - aloha
  - bimanual
  - teleoperation
  - stanford
  - trossen
  - viperx
  - act
  - imitation-learning
  - open-source
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

# ALOHA

> Home > Hardware > Arms > ALOHA

<!-- Image pending: ![ALOHA](../../assets/hardware/arms/aloha.png) -->
<!-- TODO: 이미지 파일 추가 필요 -->

---

## Overview

| 항목 | 내용 |
|------|------|
| 정식 명칭 | A Low-cost Open-source Hardware System for Bimanual Teleoperation |
| 개발 기관 | Stanford IRIS Lab (Chelsea Finn) + Trossen Robotics |
| 주요 연구자 | Tony Z. Zhao, Zipeng Fu, Chelsea Finn |
| 발표 | RSS 2023 |
| 구성 | ViperX 300 암 x 2 (팔로워) + WidowX 250 암 x 2 (리더) |
| 총 비용 | 약 $32,000 (웹캠, 노트북 포함) |
| 크기 | L121.9 x W101.6 x H203.2 cm |
| 용도 | VLA 데이터 수집, 양팔 조작 연구, 모방 학습 |

---

## 핵심 의의

### 1. VLA 연구의 표준 플랫폼

ALOHA는 단순한 하드웨어가 아니라, **현대 로봇 모방 학습 연구의 핵심 인프라**로 자리잡았다. $32,000이라는 저렴한 가격에 기존 상용 양팔 로봇($200,000+)과 비교할 수 있는 성능을 제공하여 연구 접근성을 혁신적으로 높였다.

### 2. ACT (Action Chunking with Transformers) 원조 플랫폼

ALOHA는 **ACT 알고리즘 개발을 위해 설계된 플랫폼**이다. 단순 행동 복제(Behavior Cloning)의 compounding error 문제를 해결하기 위해, 단일 액션이 아닌 **액션 시퀀스(action chunk)**를 예측하는 혁신적 접근법을 가능하게 했다.

### 3. Open X-Embodiment 주요 데이터 소스

Google DeepMind가 주도한 **Open X-Embodiment 데이터셋**(22개 로봇, 100만+ 궤적)에서 ALOHA는 **가장 풍부한 양팔 조작 데이터**를 제공하는 플랫폼 중 하나이다. RT-X 모델 학습의 핵심 데이터 소스로 활용된다.

### 4. 오픈소스 생태계

하드웨어 설계도, 소프트웨어, 데이터 수집 코드가 모두 공개되어 있어 전 세계 연구실에서 재현 및 확장이 가능하다.

---

## 양팔 조작(Bimanual Manipulation)의 중요성

인간의 양팔 조작은 두 팔의 단순 합 이상의 능력을 발휘한다. 이는 **시공간적 협응(spatio-temporal coordination)**에서 비롯된다.

### 양팔이 필수적인 태스크

| 태스크 유형 | 예시 |
|------------|------|
| 안정화-조작 | 한 팔로 물체 고정, 다른 팔로 나사 체결 |
| 협력 운반 | 큰 상자, 트레이 운반 |
| 도구 사용 | 빗자루 쓸기, 밀대 밀기 |
| 요리 | 재료 섞기, 뚜껑 열기, 주걱으로 볶기 |
| 조립 | 지퍼타이 묶기, 체인 조립 |

### 협응 패러다임

- **Leader-Follower**: 주 팔이 작업을 주도하고, 보조 팔이 지원
- **Synergistic**: 양 팔이 동등하게 협력하여 동시 작업 수행

---

## 하드웨어 구성

### 전체 비용 내역

| 구성 요소 | 비용 | 비고 |
|----------|------|------|
| ViperX 300 x 2 + WidowX 250 x 2 | ~$9,680 | 팔로워 2대 + 리더 2대 세트 |
| 카메라, 센서, 마운트 | ~$5,000 | 손목 카메라 + 외부 시점 |
| 노트북 (GPU 포함) | ~$5,000 | 소비자용 GPU |
| 프레임 및 기타 하드웨어 | ~$12,320 | 알루미늄 익스트루전, 케이블, 전원 등 |
| **총합** | **~$32,000** | 3D 프린팅으로 추가 절감 가능 |

> **참고**: 비용은 [원본 논문](https://arxiv.org/abs/2304.13705) 및 [Trossen Robotics](https://www.trossenrobotics.com/viperx-aloha) 가격 기준 (2023). 환율 및 구매 시점에 따라 변동 가능.

### ViperX 300 사양

| 사양 | 값 |
|------|-----|
| 자유도 | 6 DoF |
| 도달 거리 | 750mm |
| 페이로드 | 750g |
| 모터 | DYNAMIXEL X-Series |
| 허리/어깨 | XM540-W270 (4096 레벨 피드백, ±0.1mm 반복 정밀도) |
| 손목/그리퍼 | XM430-W350 (향상된 열 관리) |

### 카메라 시스템

| 버전 | 카메라 | 특징 |
|------|--------|------|
| ALOHA (Original) | 소비자용 웹캠 | RGB, 다중 시점 |
| ALOHA 2 | Intel RealSense D405 | 넓은 FOV, 뎁스, 글로벌 셔터 |

### 그리퍼

- **팔로워**: 평행 그리퍼, 향상된 그립테이프
- **리더 (ALOHA 2)**: XC430-W150-T 모터로 교체 (저마찰 금속 기어)

---

## 텔레오퍼레이션 방식

ALOHA의 텔레오퍼레이션은 **백드라이빙(Backdriving) 기반 퍼펫티어링** 방식이다.

### 동작 원리

```
사용자 → 리더 암 물리적 조작 → 관절 위치 읽기 → 팔로워 암 동기화
```

1. **물리적 백드라이빙**: 사용자가 리더 암(WidowX)을 직접 손으로 움직임
2. **실시간 동기화**: 리더 관절 위치가 팔로워(ViperX)에 즉시 반영
3. **데이터 수집**: RGB 이미지 + 관절 상태가 동시 기록

### 핵심 장점

| 장점 | 설명 |
|------|------|
| 직관성 | 사람이 직접 로봇 팔을 움직이는 자연스러운 인터페이스 |
| 저지연 | 조이스틱/VR 컨트롤러 대비 낮은 지연 |
| 힘 피드백 | 물리적 저항 감지로 섬세한 조작 가능 |
| 저비용 | 추가 센서 없이 기존 암의 엔코더만 활용 |

### 필요 환경

- USB3 포트 6개 이상 (로봇 4개 + 카메라 2개)
- USB 허브 사용 시 연결 불안정 가능성 있음

---

## ALOHA 버전 비교

| 항목 | ALOHA (Original) | ALOHA 2 |
|------|-----------------|---------|
| 발표 | 2023 (RSS) | 2024 |
| 그리퍼 | 고마찰 | 저마찰 레일 설계 |
| 중력 보상 | 고무밴드 | 패시브 기구학 메커니즘 |
| 카메라 | 웹캠 | Intel RealSense D405 |
| 프레임 | 기본 | 20x20mm 알루미늄 익스트루전 |
| 내구성 | 보통 | 향상 |

---

## Mobile ALOHA로의 확장

Mobile ALOHA는 ALOHA를 **모바일 베이스(AgileX Tracer)**에 장착한 확장 버전이다.

| 항목 | 내용 |
|------|------|
| 베이스 | AgileX Tracer AGV (~$7,000) |
| 이동 방식 | 사용자가 시스템에 물리적으로 연결되어 바퀴 백드라이빙 |
| 데이터 | 베이스 속도 + 암 퍼펫티어링 동시 기록 |
| 학습 | 50회 시연으로 자율 수행 가능 |

### Mobile ALOHA 학습 태스크 예시

- 냄비를 캐비닛에 넣기
- 엘리베이터 호출
- 의자 밀어넣기
- 새우 볶기
- 와인 쏟음 청소
- 하이파이브

자세한 내용은 [Mobile ALOHA](../mobile/mobile-aloha) 참조.

---

## VLA 연구 활용

ALOHA는 다양한 VLA(Vision-Language-Action) 모델의 핵심 평가/학습 플랫폼이다.

### ACT (Action Chunking with Transformers)

| 항목 | 내용 |
|------|------|
| 핵심 아이디어 | 단일 액션 대신 **액션 시퀀스(chunk)** 예측 |
| 아키텍처 | Conditional VAE + Transformer Encoder/Decoder |
| 문제 해결 | Compounding error를 k배 감소 (k = chunk 길이) |
| 성능 | 10분 시연으로 80-90% 성공률 달성 |
| 태스크 | 투명 컵 열기, 배터리 삽입 등 세밀한 양팔 조작 |

### OpenVLA

| 항목 | 내용 |
|------|------|
| 파라미터 | 7B |
| 베이스 | Llama 2 + DINOv2 + SigLIP |
| 학습 데이터 | 970k 실제 로봇 시연 (ALOHA 포함) |
| 성능 | RT-2-X (55B) 대비 16.5% 높은 성공률 |

### Physical Intelligence Pi Series

| 모델 | 특징 |
|------|------|
| Pi-0 | 3B PaLiGemma VLM + 300M Diffusion 액션 전문가 |
| Pi-0-FAST | 토큰화된 액션 출력으로 속도 향상 |
| Pi-0.5 | 이기종 데이터 코-트레이닝으로 오픈월드 일반화 |

Pi-0은 ALOHA를 포함한 다양한 로봇 플랫폼에서 벤치마크되며, OpenVLA, Octo 등 기존 베이스라인을 큰 폭으로 능가한다.

### OpenVLA-OFT

ALOHA에서 7B VLA 정책으로 **고주파 언어 기반 제어**를 달성. LIBERO 벤치마크에서 97.1% 성공률로 Pi-0, Diffusion Policy 등을 상회.

---

## 소프트웨어 생태계

| 패키지 | 내용 |
|--------|------|
| ROS / ROS 2 | 드라이버, URDF, Gazebo 시뮬레이션 |
| MoveIt | 모션 플래닝 지원 |
| LeRobot | Hugging Face 로봇 학습 라이브러리 통합 |
| ACT 코드 | 공식 학습/추론 코드 공개 |

---

## References

### 논문

- [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (ACT, RSS 2023)](https://arxiv.org/abs/2304.13705)
- [ALOHA 2: An Enhanced Low-Cost Hardware for Bimanual Teleoperation](https://arxiv.org/abs/2405.02292)
- [Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation](https://arxiv.org/abs/2401.02117)
- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246)
- [Pi-0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)

### 프로젝트 사이트

- [ALOHA 공식 페이지](https://tonyzhaozh.github.io/aloha/)
- [ALOHA 2 공식 페이지](https://aloha-2.github.io/)
- [Mobile ALOHA 공식 페이지](https://mobile-aloha.github.io/)
- [Stanford IRIS Lab](https://irislab.stanford.edu/)
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)

### GitHub

- [tonyzhaozh/aloha](https://github.com/tonyzhaozh/aloha)
- [google-deepmind/open_x_embodiment](https://github.com/google-deepmind/open_x_embodiment)
- [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi)

### 하드웨어 구매

- [Trossen Robotics - ViperX ALOHA](https://www.trossenrobotics.com/viperx-aloha)
- [Trossen Robotics - WidowX ALOHA Set](https://www.trossenrobotics.com/widowx-aloha-set)
- [Trossen Robotics - ALOHA Solo](https://www.trossenrobotics.com/aloha-solo)

---

## See Also

- [하드웨어 목록](../index)
- [Mobile ALOHA](../mobile/mobile-aloha)
- [ACT](../../models/act)
- [WidowX / Interbotix](widowx)
- [OpenVLA](../../models/openvla)
