---
title: Galaxea Arms (A1/A1X/A1Y)
description: Galaxea AI의 경량 힘 제어 로봇 암 - Embodied AI 연구를 위한 고성능 저가형 매니퓰레이터
tags: [galaxea, a1, a1x, a1y, arm, force-control, lightweight, teleoperation, embodied-ai, vla, research]
category: hardware
---

# Galaxea Arms (A1/A1X/A1Y)

> Home > Hardware > Arms > Galaxea Arms

<!-- Image pending: ![Galaxea A1](../../assets/hardware/arms/galaxea-arm.png) -->
<!-- Image placeholder: Add galaxea-arm.png to assets/hardware/arms/ -->

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Galaxea AI (星海图, 중국 베이징) |
| 제품군 | A1 (고성능), A1X/A1Y (경량 듀얼 구성) |
| DoF | 6 |
| 설계 철학 | 경량 + 힘 제어 + 고속 동작 |
| 가격대 | A1XY: $2,999 ~ $3,999 (A1/A1X-T는 별도 문의) |
| 주요 용도 | Embodied AI 연구, VLA 학습, 텔레오퍼레이션, 교육 |

---

## 핵심 의의

### Embodied AI 연구의 핵심 하드웨어

Galaxea Arms는 **Embodied AI 연구를 위해 설계된 힘 제어 로봇 암**으로서 다음과 같은 핵심적 의의를 가진다:

1. **힘 제어 능력**: 각 관절에 유성기어 모터를 탑재하여 정밀한 토크 및 힘 피드백 제공. 섬세한 물체 조작과 안전한 인간-로봇 상호작용 가능
2. **극한의 속도**: 10 m/s 말단 선속도, 40 m/s^2 가속도로 고속 동작 지원 [^1] - 연구 데이터 수집 효율성 극대화
3. **접근 가능한 가격**: A1XY 기준 $3,000~$4,000 가격대로 Franka ($30,000+) 대비 약 1/10 수준
4. **완전한 생태계**: R1 휴머노이드, G1 그리퍼, G0 VLA 모델과 통합된 연구 플랫폼

### Franka/xArm 대비 포지셔닝

| 항목 | Galaxea A1 | Franka Research 3 | xArm 7 |
|------|------------|-------------------|--------|
| 가격 | 별도 문의 | ~$30,000 | ~$10,500 |
| DoF | 6 | 7 | 7 |
| 페이로드 | 3.5kg (최대) | 3kg | 3.5kg |
| 리치 | 700mm | 850mm | 700mm |
| 힘 제어 | 전 관절 | 전 관절 | 제한적 |
| 최대 속도 | 10 m/s | 1.5 m/s | 1 m/s |
| 무게 | 6kg | 18kg | 13.7kg |
| 회사 상태 | 정상 운영 | 2023년 도산 신청 | 정상 운영 |

**Galaxea A1의 차별점**:
- **압도적 속도**: 경쟁사 대비 5-10배 빠른 말단 속도로 고속 manipulation 연구 가능
- **극도로 경량**: 6kg으로 이동 및 설치 용이
- **최저가 힘 제어**: 전 관절 힘 제어 암 중 가장 저렴

---

## 회사 소개

### Galaxea AI (星海图)

| 항목 | 내용 |
|------|------|
| 설립 | 2023년 9월 |
| 본사 | 중국 베이징 |
| 기업가치 | $700M (2025년 기준) |
| 미션 | "100억 로봇으로 100억 인류 서비스" |
| 주요 투자자 | Meituan, IDG Capital, Ant Group, Baidu Ventures |
| 주요 고객 | Huawei, Volkswagen, Samsung, ByteDance, Stanford, MIT, Physical Intelligence |

Galaxea AI는 청화대학교와 스탠포드 대학교 출신 과학자들이 설립한 Embodied AI 전문 기업이다. CEO **Jiyang Gao (高继扬)**는 Waymo와 Momenta에서 자율주행 경력을, 공동 창업자 **Huazhe Xu**는 UC Berkeley 박사, 스탠포드 포닥을 거쳐 청화대 조교수로 재직 중이다.

**핵심 역량**:
- 로봇 암 (A-Series), 그리퍼 (G-Series), 휴머노이드 (R-Series) 풀 라인업
- **G0 VLA 모델**: 자체 개발 Vision-Language-Action 모델
- **Open-World 데이터셋**: 500시간 이상의 실세계 조작 데이터

---

## 제품 라인업

### A1 (고성능 힘 제어 암)

| 항목 | 스펙 |
|------|------|
| DoF | 6 |
| 무게 | 6 kg |
| 페이로드 | 2kg (정격) / 3.5kg (최대) |
| 리치 | 700 mm |
| 반복정밀도 | 1 mm |
| 말단 최대 속도 | 10 m/s |
| 말단 최대 가속도 | 40 m/s^2 |
| 정격 전압 | 48V |
| 정격 전류 | 6A (최대 10A) |
| 크기 (전개) | 775 x 128 x 237 mm |
| 크기 (접힘) | 449 x 128 x 277 mm |
| 인터페이스 | USB 2.0 |

**관절별 사양**:

| 관절 | 가동 범위 | 정격 토크 |
|------|-----------|-----------|
| Joint 1 | [-165deg, +165deg] | 20 Nm |
| Joint 2 | [0deg, 180deg] | 20 Nm |
| Joint 3 | [-190deg, 0deg] | 9 Nm |
| Joint 4 | [-165deg, +165deg] | 3 Nm |
| Joint 5 | [-95deg, +95deg] | 3 Nm |
| Joint 6 | [-105deg, +105deg] | 3 Nm |

### A1X (Human-Wrist 구성)

| 항목 | 스펙 |
|------|------|
| DoF | 6 |
| 무게 | 4.2 kg |
| 페이로드 | 3kg (정격, 0.6m 리치) / 5kg (최대) |
| 반복정밀도 | 0.05 mm |
| 말단 최대 속도 | 5 m/s |
| 말단 최대 가속도 | 38 m/s^2 |
| 특징 | 인간 손목과 유사한 민첩성 |

**A1X 관절 범위**:
- Joint 1: 330deg (Yaw), 반경 600mm
- Joint 2: 180deg (Pitch)
- Joint 3: 190deg (Pitch)
- Joint 4: 180deg (Pitch)
- Joint 5/6: 330deg (Roll)

### A1Y (저관성 구성)

| 항목 | 스펙 |
|------|------|
| DoF | 6 |
| 무게 | 4.2 kg |
| 페이로드 | 3kg (정격) / 5kg (최대) |
| 반복정밀도 | 0.05 mm |
| 특징 | 경량, 저관성 성능 |

**A1Y 관절 범위** (Joint 4-6이 A1X와 상이):
- Joint 4: 330deg (Roll)
- Joint 5: 210deg (Pitch)
- Joint 6: 330deg (Roll)

### A1X vs A1Y 비교

| 항목 | A1X | A1Y |
|------|-----|-----|
| 설계 목적 | 손목 민첩성 | 저관성 성능 |
| Joint 4 | Pitch 180deg | Roll 330deg |
| Joint 5 | Roll 330deg | Pitch 210deg |
| 적합 용도 | 복잡한 회전 동작 | 빠른 직선 동작 |

### A1XY (듀얼 구성 패키지)

A1X와 A1Y 구성을 **교체 가능한 단일 패키지**로 제공. 연구 목적에 따라 손목 구성을 변경할 수 있어 유연성 극대화.

**가격**: $2,999 (세일) / $3,999 (정가)

---

## 힘 제어 (Force Control)

Galaxea Arms의 핵심 차별화 요소는 **전 관절 힘 제어 능력**이다.

### 기술 구현

| 기능 | 설명 |
|------|------|
| 액추에이터 | 6개 유성기어 모터 |
| 토크 센싱 | 전 관절 |
| 피드백 | 실시간 토크/힘 피드백 |
| 임피던스 제어 | 지원 |
| 컴플라이언스 | 조절 가능 |

### 활용 시나리오

1. **섬세한 조작**: 계란, 과일 등 연약한 물체 핸들링
2. **안전한 협업**: 인간과 동일 공간에서 작업 시 충돌 감지/대응
3. **적응적 그리핑**: 다양한 형상/재질에 적응하는 파지
4. **힘 기반 학습**: Imitation Learning에서 힘 데이터 포함 시연 수집

---

## 엔드 이펙터

### Galaxea G1 그리퍼

| 항목 | 스펙 |
|------|------|
| 유형 | 평행 2핑거 그리퍼 |
| 길이 | 145 mm |
| 개폐 범위 | 0 - 100 mm |
| 파지력 | 100 N |
| 제어 | 관절 모터 포함 |

### Dexterous Hand (옵션)

| 항목 | 스펙 |
|------|------|
| DoF | 6 |
| 관절 수 | 12 |
| 무게 | 540 g |
| 반복정밀도 | 0.20 mm |
| 손가락 파지력 | 10 N (최대) |

---

## 텔레오퍼레이션

### A1X-T Isomorphic 텔레옵 디바이스

A1X 암의 동형(Isomorphic) 복제본을 활용한 직관적 원격 조작 장치.

| 특징 | 설명 |
|------|------|
| 매핑 | 1:1 관절 동기화 |
| 피드백 | 양방향 힘 피드백 |
| 정밀도 | 밀리미터 수준 |
| 용도 | 고품질 시연 데이터 수집 |

### R1 플랫폼 통합 텔레옵

R1 휴머노이드에서 듀얼 A1 암을 사용할 때 추가 텔레옵 옵션:

- **Meta Quest 3 VR**: 몰입형 1인칭 시점 조작
- **표준 리모트 컨트롤러**: 아날로그 스틱 기반 제어

---

## 소프트웨어 및 SDK

### 공식 리소스

| 항목 | 링크 |
|------|------|
| 공식 문서 | [docs.galaxea-ai.com](https://docs.galaxea-ai.com/) |
| 유저 가이드 | [userguide-galaxea.github.io](https://userguide-galaxea.github.io/Product_User_Guide/) |
| GitHub | [github.com/OpenGalaxea](https://github.com/OpenGalaxea) |

### 지원 프레임워크

| 프레임워크 | 지원 |
|------------|------|
| ROS 1 | O |
| ROS 2 | O |
| Python SDK | O |
| C++ SDK | O |

---

## VLA 연구 활용

### G0 Dual-System VLA 모델

Galaxea는 자체 개발한 **G0 VLA 모델**을 오픈소스로 공개했다.

| 구성요소 | 역할 |
|----------|------|
| G0-VLM (System 2) | 멀티모달 계획 (Vision-Language Model) |
| G0-VLA (System 1) | 정밀 동작 실행 (Vision-Language-Action) |

**특징**:
- 두 시스템이 **비동기적**으로 다른 주파수에서 동작
- 3단계 학습: Cross-embodiment 사전학습 → Single-embodiment 사전학습 → Task-specific 후학습

### Galaxea Open-World 데이터셋

| 항목 | 스펙 |
|------|------|
| 총 시간 | 500시간 이상 |
| 태스크 수 | 150개 이상 |
| 장면 수 | 50개 이상 |
| 수집 플랫폼 | Galaxea R1 Lite (듀얼 A1 암) |
| 특징 | 단일 Embodiment로 일관성 있는 데이터 |

**데이터셋 특성**:
- 실제 가정/사무실 환경에서 수집
- Long-horizon 태스크 포함
- Few-shot 일반화 연구에 최적화

### 연구 활용 사례

1. **Imitation Learning**: Teleoperation으로 고품질 시연 수집
2. **VLA Fine-tuning**: G0 모델 기반 태스크별 파인튜닝
3. **Sim-to-Real**: 시뮬레이션에서 실제 로봇으로 정책 전이
4. **Mobile Manipulation**: R1 플랫폼에서 이동 조작 연구

---

## 구매 가이드

### 용도별 추천

| 목적 | 추천 모델 | 이유 |
|------|---------|------|
| Embodied AI 연구 | A1 | 힘 제어, 고속, 고페이로드 |
| 교육/입문 | A1XY | 저가, 듀얼 구성 |
| 데이터 수집 | A1X-T + A1X | Isomorphic 텔레옵 |
| 휴머노이드 연구 | R1 + A1 | 풀 플랫폼 통합 |

### 가격 정보 (2025년 기준)

| 제품 | 정가 | 세일가 |
|------|------|--------|
| A1XY | $3,999 | $2,999 |
| A1 | 문의 | - |
| A1X-T (텔레옵) | 문의 | - |

### 구매처

- [Galaxea Dynamics 공식](https://galaxea-dynamics.com/)
- [Foxtech Store](https://store.foxtech.com/)
- [Foxtech Robotics](https://www.foxtechrobotics.com/)

---

## References

### 공식 리소스

- [Galaxea Dynamics 공식 사이트](https://galaxea-dynamics.com/)
- [Galaxea AI 공식 문서](https://docs.galaxea-ai.com/)
- [Galaxea User Guide](https://userguide-galaxea.github.io/Product_User_Guide/)
- [A1 Hardware Guide](https://docs.galaxea-ai.com/Guide/A1/A1_Hardware_Guide/)
- [OpenGalaxea GitHub](https://github.com/OpenGalaxea)

### 연구 논문

- [Galaxea Open-World Dataset and G0 Dual-System VLA Model (arXiv:2509.00576)](https://arxiv.org/abs/2509.00576)

### 뉴스 및 기사

- [Forbes: Galaxea AI Raises $100M at $700M Valuation](https://finance.yahoo.com/news/beijings-galaxea-ai-raises-100-000126844.html)
- [Crunchbase: Galaxea AI Profile](https://www.crunchbase.com/organization/xinghaitu)

### 제품 페이지

- [Foxtech: A1 Force-Control Arm](https://www.foxtechrobotics.com/galaxea-a1-lightweight-high-dynamics-force-control-robotic-arm.html)
- [Foxtech: A1XY Dual-Configuration Arm](https://www.foxtechrobotics.com/galaxea-a1xy-embodied-intelligence-companion)

[^1]: A1 Hardware Guide - [docs.galaxea-ai.com](https://docs.galaxea-ai.com/Guide/A1/A1_Hardware_Guide/)

---

## See Also

- [하드웨어 목록](../index.md)
- [Galaxea 휴머노이드](../humanoids/galaxea.md)
- [xArm 시리즈](xarm.md)
- [Franka Research 3](franka-research3.md)
