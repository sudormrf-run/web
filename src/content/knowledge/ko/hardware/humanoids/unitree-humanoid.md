---
title: Unitree 휴머노이드
description: Unitree Robotics의 휴머노이드 로봇 완전 가이드 - R1, G1, H1, H2 시리즈
tags: [unitree, humanoid, g1, h1, h2, r1, embodied-ai, groot, affordable-robotics]
category: hardware
date: 2026-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Unitree 휴머노이드

> Home > Hardware > Humanoids > Unitree

<!-- Image pending: ![Unitree G1](../../assets/hardware/humanoids/unitree-humanoid.png) -->

---

## Overview

> **Data as of**: 2026년 1월. 가격 및 사양은 변동될 수 있음.

| 항목 | 내용 |
|------|------|
| **제조사** | Unitree Robotics (宇树科技) |
| **본사** | 중국 항저우 (Hangzhou, China) |
| **설립** | 2016년 8월 |
| **창업자** | Wang Xingxing (왕싱싱) |
| **전문 분야** | 쿼드러펫 로봇, 휴머노이드 로봇 |
| **시장 점유율** | 글로벌 쿼드러펫 로봇 출하량의 60-70% [^1] |
| **기업 가치** | $1.4B+ (2025년 Series C) [^2] |

[^1]: [Unitree Robotics - Wikipedia](https://en.wikipedia.org/wiki/Unitree_Robotics)
[^2]: Series C funding round, June 2025 - [Wikipedia](https://en.wikipedia.org/wiki/Unitree_Robotics)

### 회사 연혁

Unitree Robotics는 창업자 Wang Xingxing이 2013년 상하이대학교 대학원 재학 중 쿼드러펫 로봇 연구를 시작하면서 태동했다. 2016년 첫 프로토타입 XDog을 개발한 후, DJI 근무를 거쳐 같은 해 8월 Unitree를 창업했다.

**주요 마일스톤:**
- **2017**: Laikago 쿼드러펫 공개 (소련 우주견 Laika에서 명명)
- **2021**: Go1 출시 - 세계 최초 소비자급 쿼드러펫 로봇 ($2,700)
- **2023**: Go2 출시 - 4D LiDAR 및 AI 대형 모델 탑재
- **2024**: H1 휴머노이드 공개, G1 양산 시작
- **2025**: R1 엔트리급 휴머노이드 발표, H2 차세대 모델 공개
- **2026**: R1 정식 출하 시작

---

## 핵심 의의

### 연구 접근성의 민주화

Unitree 휴머노이드의 가장 큰 의의는 **가격 대비 성능(Price-Performance Ratio)**이다:

| 비교 대상 | 가격 | Unitree 대안 | 절감률 |
|-----------|------|--------------|--------|
| Boston Dynamics Atlas | 비매품 (연구용) | H1 (~$100,000) | - |
| Figure 01 | $30,000-$150,000 (추정) | G1 ($16,000~) | ~50-90% |
| Tesla Optimus | $20,000-$30,000 (예정) | R1 ($5,900~) | ~70-80% |

**연구 커뮤니티에 미친 영향:**
1. **대학 연구실 접근성**: $16,000 G1은 대부분의 대학 연구실 예산으로 구매 가능
2. **반복 실험 가능**: 저렴한 가격으로 다수의 로봇 확보 가능
3. **개방형 개발 환경**: ROS2, Python, C++ 지원으로 커스터마이징 용이
4. **빠른 부품 수급**: 중국 제조 기반으로 수리 부품 접근성 우수

### 쿼드러펫에서 휴머노이드로

Unitree는 Go1, Go2 등 쿼드러펫 로봇에서 축적한 기술력을 휴머노이드에 적용:
- **고토크 모터 기술**: M107 자체 개발 관절 모터 (최대 360N.m)
- **제어 알고리즘**: 강화학습 기반 보행 제어
- **센서 통합**: LiDAR + 깊이 카메라 퓨전

---

## 제품 라인업 상세

### 전체 비교표

> **DoF 계산 기준**: 본체 DoF만 표기 (손 제외). 손이 포함된 변형은 별도 섹션 참조.

| 모델 | 가격 | 높이 | 무게 | 본체 DoF | 최대 속도 | 타겟 |
|------|------|------|------|----------|-----------|------|
| **R1** | $5,900~ | 121cm | 25kg | 24 | - | 교육, 입문 |
| **R1 EDU** | ~$16,000 | 121cm | 25kg | 26 | - | 연구, 개발 |
| **G1 Basic** | $16,000~ | 132cm | 35kg | 23 | 2 m/s | 소비자, 입문 |
| **G1 EDU Standard** | $42,000~ | 132cm | 35kg | 23 | 2 m/s | 연구, 개발 |
| **G1 EDU Plus** | $52,000~ | 132cm | 35kg | 29 | 2 m/s | 연구, 개발 |
| **G1 EDU Ultimate** | $64,000-$74,000 | 132cm | 35kg | 23 | 2 m/s | 연구, 개발 |
| **H1** | ~$100,000 | 180cm | 47kg | 19 | 3.3 m/s | 고급 연구 |
| **H1-2** | ~$129,000 | 152cm | 70kg | 27 | 1.5-5 m/s | 산업, 연구 |
| **H2** | $30,000~ | 182cm | 70kg | 31 | - | 산업, 상용화 |

> **손 DoF 참고**: Dex3-1 3핑거 (6 DoF/손, 양손 12 DoF), Inspire 5핑거 (6 DoF/손, 양손 12 DoF), Revo 2 Basic (6 DoF/손, 양손 12 DoF)

---

### R1 시리즈 (엔트리급)

**R1** - 울트라 저가 휴머노이드

| 항목 | R1 | R1 EDU |
|------|-----|--------|
| **가격** | $5,900~ | ~$16,000 |
| **DoF** | 24 (다리 6x2, 팔 5x2, 허리 2) | 26 (머리 2 추가) |
| **크기** | 1210 x 357 x 190 mm | 동일 |
| **무게** | ~25 kg | ~25 kg |
| **컴퓨팅** | 8코어 CPU | NVIDIA Jetson Orin |
| **센서** | 스테레오 카메라, 4-마이크 어레이 | 동일 |
| **통신** | Wi-Fi 6, Bluetooth 5.2 | 동일 |
| **배터리** | ~1시간 (퀵스왑) | 동일 |
| **출시** | 2026년 1월 | 2026년 1월 |

**특징:**
- TIME Magazine "Best Inventions of 2025" 선정 [^4]
- 옆돌기, 물구나무서기, 회전 킥 등 동적 동작 가능
- 대형 언어 모델 통합으로 음성/이미지 상호작용

[^4]: [TIME Best Inventions 2025](https://time.com/collection/best-inventions-2025/)

**R1 EDU 변형 (손 포함 총 DoF):**
- **R1 EDU U3**: Dex3-1 3핑거 손 (본체 26 + 양손 12 = 38 DoF)
- **R1 EDU U5**: Revo 2 Basic 5핑거 손 (본체 26 + 양손 12 = 38 DoF)

---

### G1 시리즈 (메인스트림)

**G1** - 가장 인기 있는 연구용 플랫폼

| 항목 | G1 Basic | G1 EDU Standard | G1 EDU Plus | G1 EDU Ultimate |
|------|----------|-----------------|-------------|-----------------|
| **가격** | $16,000~ | $42,000~ | $52,000~ | $64,000-$74,000 |
| **본체 DoF** | 23 | 23 | 29 | 23 |
| **컴퓨팅** | - | 100 TOPS | 100 TOPS | 100 TOPS |
| **손** | 없음 | 없음 | 없음 | Dex3-1/Inspire |
| **개발** | 불가 | C++/Python/ROS2 | C++/Python/ROS2 | C++/Python/ROS2 |

**G1 공통 사양:**

| 항목 | 스펙 |
|------|------|
| **높이** | 132 cm |
| **무게** | 35 kg |
| **최대 속도** | 2 m/s |
| **관절 토크** | 최대 120 N.m |
| **배터리** | 9000 mAh (퀵스왑), ~2시간 |
| **제어 루프** | 500 Hz |
| **암 페이로드** | 최대 3 kg |

**센서 구성:**
- **LiDAR**: LIVOX MID-360 3D LiDAR (360도 스캔)
- **깊이 카메라**: Intel RealSense D435i
- **오디오**: 4-마이크 어레이
- **IMU**: 자이로스코프 + 가속도계
- **관절**: 듀얼 인코더 (위치/토크 피드백)

**G1 EDU Ultimate 변형 (손 포함 총 DoF):**
| 변형 | 손 타입 | 총 DoF (본체 23 + 손) | 가격 |
|------|---------|----------------------|------|
| U3 | Dex3-1 3핑거 | 35 (23+12) | $64,000~ |
| U4 | Dex3-1 + 촉각 센서 | 35 (23+12) | $66,000~ |
| U5 | Inspire 5핑거 | 35 (23+12) | $66,000~ |
| U5-1 | 최상위 구성 | 35 (23+12) | $74,000~ |

---

### H1 시리즈 (프리미엄)

**H1 / H1-2** - 고성능 연구 플랫폼

| 항목 | H1 | H1-2 |
|------|-----|------|
| **가격** | ~$100,000 | ~$129,000 |
| **DoF** | 19 | 27 (팔 7x2, 다리 6x2, 허리 1) |
| **높이** | ~180 cm | 152 cm (1520 mm) |
| **무게** | ~47 kg | ~70 kg |
| **속도** | 3.3 m/s | 1.5-5 m/s |
| **토크** | - | 360 N.m (M107 모터) |
| **배터리** | - | 864 Wh (퀵스왑) |

**H1 시리즈 특징:**
- 2024년 휴머노이드 보행 속도 기록 보유 (3.3 m/s) [^3]
- 연구 커뮤니티에서 널리 사용되는 풀사이즈 휴머노이드 플랫폼
- 개방형 개발 환경으로 커스텀 AI 구현 용이

[^3]: [Unitree H1 공식 페이지](https://www.unitree.com/h1/)

**센서 (H1-2):**
- LIVOX MID-360 LiDAR (전방향 스캔)
- Intel RealSense D435 깊이 카메라
- 360도 환경 인식

---

### H2 (차세대)

**H2** - 산업 상용화 타겟

| 항목 | 스펙 |
|------|------|
| **가격** | $30,000~ (베이스 모델) |
| **DoF** | 31 |
| **크기** | 1820 x 456 x 218 mm |
| **무게** | ~70 kg |
| **컴퓨팅** | 2070 TOPS |
| **토크** | 360 N.m |

**H1-2 대비 개선점:**

| 항목 | H1-2 | H2 |
|------|------|-----|
| **허리 DoF** | 1 | 3 (시리얼 스택) |
| **목 DoF** | 0 (고정) | 2 (피치/요) |
| **발목** | 일반 | 준-시리얼 원격 구동 |
| **다리 길이** | 기준 | 더 긴 스트라이드 |
| **배터리** | 기준 | 더 긴 운용 시간 |

**H2 설계 철학:**
H2는 H1 시리즈와 달리 **산업 배치(Industrial Deployment)**를 목표로 설계:
- 밀폐형 디자인
- 턴키 솔루션 지향
- 기업 고객용 정의된 유스케이스

---

## VLA 연구 활용

### NVIDIA GR00T 통합

Unitree G1은 **NVIDIA의 GR00T (Generalist Robot 00 Technology) 프로젝트의 핵심 플랫폼**이다.

**GR00T 버전별 G1 성능 비교:** [^5]

| 메트릭 | GR00T N1 | GR00T N1.5 | GR00T N1.6 |
|--------|----------|------------|------------|
| 알려진 물체 성공률 | 44.0% | 98.8% | 99%+ |
| 새로운 물체 일반화 | 제한적 | 우수 | 우수+ |
| 학습 데이터 | 1,000 episodes | 1,000 episodes | 1,000+ episodes |
| 주요 개선 | 기본 | Test-time RTC | Cross-embodiment |

[^5]: [NVIDIA GR00T N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/) / [N1.6](https://research.nvidia.com/labs/gear/gr00t-n1_6/)

**NVIDIA 공식 지원:**
1. **Isaac GR00T N1.6**: 오픈 VLA 모델, G1 loco-manipulation 태스크 사전학습 포함
2. **GR00T-WholeBodyControl**: G1 전신 제어 정책, 텔레오퍼레이션 스택
3. **PhysicalAI-Robotics-GR00T-Teleop-G1**: HuggingFace 데이터셋 (1,000 trajectories)

**지원 태스크:**
- 과일 pick-and-place (사과, 배, 스타프루트, 포도)
- 언어 명령 기반 조작
- Whole-Body Locomanipulation

### LeRobot 프레임워크

HuggingFace의 LeRobot 프레임워크와 호환:
- 데이터 수집 및 학습 파이프라인
- ACT, Diffusion Policy 등 알고리즘 지원
- 오픈소스 커뮤니티 기여

### 주요 연구 활용 사례

| 연구 기관 | 활용 모델 | 연구 분야 |
|-----------|-----------|-----------|
| NVIDIA Research | G1 | GR00T VLA 모델 개발 |
| 대학 연구실 (다수) | G1, H1 | 강화학습 보행, 조작 |
| 로봇 스타트업 | H1-2 | 산업 응용 프로토타이핑 |

---

## 경쟁사 비교

### 가격-성능 포지셔닝

| 제조사 | 모델 | 가격 | 본체 DoF | 특징 |
|--------|------|------|----------|------|
| **Unitree** | G1 | $16,000~ | 23-29 | 가성비, 연구 접근성 |
| **Unitree** | H1 | ~$100,000 | 19-27 | 속도 기록 보유 |
| Tesla | Optimus | $20,000-$30,000 (예정) | - | 대량 생산 목표 |
| Figure AI | Figure 02/03 | $30,000-$150,000 (추정) | - | 산업 배치 실증 |
| Boston Dynamics | Atlas (Electric) | 비매품 | - | 동적 동작 최고 |
| Agility Robotics | Digit | - | - | 물류 특화 |

### Unitree의 차별점

1. **실제 구매 가능**: 타 경쟁사 대비 유일하게 즉시 구매 가능한 제품군
2. **가격 투명성**: 명확한 가격 공개 (경쟁사는 견적 기반)
3. **개발자 친화적**: ROS2, SDK, 예제 코드 풍부
4. **빠른 이터레이션**: 매년 새로운 모델 출시
5. **부품 접근성**: 중국 제조 기반으로 수리/교체 용이

### 시장 전망

Goldman Sachs 전망 [^6]:
- **베이스 케이스**: 2035년까지 140만 대 휴머노이드 출하
- **불 케이스**: 2031년까지 100만 대 출하

Unitree는 저가 시장에서 강한 입지를 확보하며 연구/교육 시장을 선점 중.

[^6]: Goldman Sachs Humanoid Robot Market Report, 2025 - [BotInfo.ai Summary](https://botinfo.ai/articles/humanoid-robot)

---

## 구매 가이드

### 용도별 추천

| 용도 | 추천 모델 | 예산 |
|------|-----------|------|
| 교육/입문 | R1 | $5,900~ |
| 취미/프로토타이핑 | R1 EDU | $16,000~ |
| 대학 연구실 | G1 EDU Standard | $42,000~ |
| VLA/매니퓰레이션 연구 | G1 EDU Ultimate | $64,000-$74,000 |
| 풀사이즈 휴머노이드 연구 | H1-2 | $129,000~ |
| 산업 파일럿 | H2 | $30,000~ |

### 공식 판매처

- **Unitree 공식 스토어**: shop.unitree.com
- **RobotShop**: 공식 디스트리뷰터
- **Roboworks**: 미국/유럽 공급

---

## References

### 공식 자료
- [Unitree Robotics 공식 사이트](https://www.unitree.com)
- [Unitree G1 제품 페이지](https://www.unitree.com/g1/)
- [Unitree H1 제품 페이지](https://www.unitree.com/h1/)
- [Unitree R1 제품 페이지](https://www.unitree.com/R1/)
- [Unitree H2 소개](https://www.unitree.com/mobile/H2/)

### NVIDIA GR00T 연동
- [NVIDIA Isaac GR00T GitHub](https://github.com/NVIDIA/Isaac-GR00T)
- [GR00T-WholeBodyControl GitHub](https://github.com/NVlabs/GR00T-WholeBodyControl)
- [PhysicalAI-Robotics-GR00T-Teleop-G1 Dataset](https://huggingface.co/datasets/nvidia/PhysicalAI-Robotics-GR00T-Teleop-G1)
- [GR00T N1.5 Research Page](https://research.nvidia.com/labs/gear/gr00t-n1_5/)
- [GR00T N1.6 Research Page](https://research.nvidia.com/labs/gear/gr00t-n1_6/)

### 추가 자료
- [Unitree Robotics Wikipedia](https://en.wikipedia.org/wiki/Unitree_Robotics)
- [RobotShop H2 Overview](https://community.robotshop.com/blog/show/unitree-h2-overview-new-features-key-differences-from-the-h1-h1-2)

---

## See Also

- [하드웨어 목록](../index.md)
- [Unitree 쿼드러펫](../quadrupeds/unitree.md)
- [GR00T 모델](../../models/vla/groot.md)
- [Figure 휴머노이드](figure.md)
- [Tesla Optimus](tesla-optimus.md)
