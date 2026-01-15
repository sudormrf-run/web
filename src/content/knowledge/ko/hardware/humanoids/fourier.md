---
title: Fourier 휴머노이드
description: Fourier의 GR 시리즈 - 의료/재활 배경의 중국 휴머노이드 로봇
tags:
  - fourier
  - gr-1
  - gr-2
  - gr-3
  - humanoid
  - fsa-actuator
  - medical-robotics
  - rehabilitation
created: 2024-01-01
updated: 2026-01-09
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

# Fourier 휴머노이드

> Home > Hardware > Humanoids > Fourier

<!-- Image pending: ![Fourier GR-2](../../assets/hardware/humanoids/fourier.png) -->

---

## Overview

Fourier(傅利叶)는 2015년 상하이에서 설립된 중국 로봇 기업으로, 의료 재활 로봇에서 출발하여 범용 휴머노이드 로봇으로 영역을 확장했다. 창업자 Alex Gu(顾捷)는 상하이 교통대학 출신으로, National Instruments에서 근무한 경력이 있다. 회사명은 프랑스 수학자 Joseph Fourier의 이름에서 따왔다.

Fourier는 2017년 중국 최초의 상용 하지 외골격 로봇 Fourier X1을 출시하며 재활 로봇 분야에서 입지를 다졌고 ([Exoskeleton Report](https://exoskeletonreport.com/2017/03/chinese-technology-company-fourier-intelligence-announces-first-exoskeleton-fourier-x1/)), 2023년 GR-1을 통해 **중국 최초의 양산형 휴머노이드 로봇**을 선보였다 ([Robot Report](https://www.therobotreport.com/fourier-intelligence-launches-production-version-of-gr-1-humanoid-robot/)).

| 항목 | 내용 |
|------|------|
| 제조사 | Fourier (傅利叶) |
| 본사 | 중국 상하이 장강 하이테크 파크 |
| 설립 | 2015년 |
| 배경 | 의료/재활 로봇 (외골격) |
| 투자자 | IDG Capital, Saudi Aramco, Guoxin Investment, Prosperity7 ([Wikipedia](https://en.wikipedia.org/wiki/Fourier_(company))) |
| 최근 펀딩 | Series E - 약 8억 위안 (~$110M, 2025년 초) ([Wikipedia](https://en.wikipedia.org/wiki/Fourier_(company))) |

---

## 핵심 의의

Fourier의 가장 핵심적인 의의는 **의료 재활 분야의 전문성을 휴머노이드 로봇에 적용**한 것이다.

### 왜 의료/재활 배경이 중요한가?

1. **인간 신체 이해**: 10년간 재활 로봇을 개발하며 인간의 관절, 근육, 움직임 패턴에 대한 깊은 이해를 축적했다. 이 지식이 휴머노이드 설계에 직접 반영된다.

2. **안전 우선 설계**: 재활 로봇은 환자와 직접 접촉하므로 안전이 최우선이다. 이 DNA가 GR 시리즈의 힘 제어와 충돌 감지에 녹아있다.

3. **FSA 액추에이터**: 외골격 개발 과정에서 축적한 액추에이터 기술이 Fourier Smart Actuator(FSA)로 발전했다. 모터, 드라이버, 감속기, 엔코더를 단일 모듈로 통합한 고성능 액추에이터다.

4. **2024년 사업 분리** ([Robot Report](https://www.therobotreport.com/fourier-intelligence-rebrands-fourier-fourier-rehab/)):
   - **Fourier Rehab**: 기존 의료/재활 로봇 사업 (40개국 2,000+ 기관 납품)
   - **Fourier**: 범용 휴머노이드 로봇 개발에 집중

5. **케어봇 비전**: 2025년 GR-3를 "Care-bot"으로 포지셔닝하며, 의료/재활 배경을 살린 돌봄 로봇 시장을 타겟팅한다.

---

## 제품 라인업

### GR-1 (2023)

중국 최초의 양산형 휴머노이드 로봇. 2023년 7월 상하이 세계 인공지능 컨퍼런스(WAIC)에서 공개되었다.

| 항목 | 스펙 |
|------|------|
| 높이 | 165cm (5ft 5in) |
| 무게 | 55kg (121 lb) |
| 전체 DoF | 40 |
| 손 DoF (양손 합계) | 11 |
| 최대 토크 | 300 Nm (힙 관절) |
| 보행 속도 | 5 km/h (3.1 mph) |
| 페이로드 | 50 kg |
| 가격 | $150,000 - $170,000 (추정) |
| 센서 | 깊이 카메라 (헤드, 토르소) |

**주요 특징**:
- FSA 1.0 액추에이터 탑재
- 재활 센터 테스트 진행 (환자 운동 보조, 체중 지지)
- 대학 및 AI 기업 연구용으로 소량 납품

### GR-2 (2024)

2024년 10월 출시된 2세대 휴머노이드. 손 민첩성과 배터리 수명이 대폭 향상되었다.

| 항목 | 스펙 |
|------|------|
| 높이 | 175cm (5ft 9in) |
| 무게 | 63kg (139 lb) |
| 전체 DoF | 53 |
| 손 DoF (양손 합계) | 24 (12 x 2) |
| 최대 토크 | 380 Nm |
| 배터리 런타임 | 최대 2시간 |
| 단일 팔 페이로드 | 3 kg |
| 촉각 센서 | 6개 어레이형 |
| 가격 | 미공개 (GR-1 추정치 참고) |

**주요 개선점**:
- **FSA 2.0 액추에이터**: 7종의 FSA 2.0 모듈로 구성
- **촉각 센서**: 힘 감지, 물체 형상/재질 인식, 실시간 그립 조절
- **탈착식 배터리**: GR-1 대비 2배 용량
- **개발 플랫폼**: ROS, NVIDIA Isaac Lab, MuJoCo 지원
- **프로그래밍**: VR 원격 제어, 직접 교시(Lead-through) 지원

### GR-3 (2025)

2025년 8월 공개, CES 2026에서 시연된 최신 모델 ([Interesting Engineering](https://interestingengineering.com/ai-robotics/fouriers-gr-3-humanoid-at-ces-2026)). "Care-bot" 콘셉트로 인간 중심 상호작용에 최적화되었다.

| 항목 | 스펙 |
|------|------|
| 높이 | 165cm |
| 무게 | 71kg (156 lb) |
| 전체 DoF | 55 |
| 포지셔닝 | Care-bot (돌봄 로봇) |

---

## FSA 액추에이터 기술

Fourier Smart Actuator(FSA)는 Fourier의 핵심 경쟁력이다. 모터, 드라이버, 감속기, 엔코더를 단일 모듈로 통합하여 크기를 줄이면서 성능과 신뢰성을 향상시켰다.

### FSA 아키텍처

```
[모터] + [드라이버] + [감속기] + [엔코더] → [단일 FSA 모듈]
                                              ↓
                                        높은 토크 밀도
                                        컴팩트 설계
                                        비용 효율성
```

### FSA 제어 모드

| 모드 | 설명 |
|------|------|
| Passthrough | 입력 명령이 직접 액추에이터로 전달 |
| Velocity Ramping | 부드러운 속도 제어 |
| Position Filtering | 지터 감소 |
| Trapezoidal Trajectory | 정밀하고 제어된 움직임 |
| Torque Ramping | 토크 적용 속도 제어 |

### FSA 2.0 사양 (GR-2)

| 항목 | 스펙 |
|------|------|
| 최대 가속도 | 6,000 - 10,000 RPM/s |
| 최대 속도 | 1,000 - 3,000 RPM |
| 모터 극 쌍 | 7, 10, 또는 21 pole pairs |
| 피크 토크 | 380 Nm |

**FSA 장점**:
- 기존 서보 시스템 대비 소형화
- 성능 신뢰성 향상
- 원가 절감 (양산형 휴머노이드 핵심)
- 고정밀 자세 제어

---

## 소프트웨어 플랫폼

### SDK 및 프레임워크 지원

| 플랫폼 | 지원 |
|--------|------|
| ROS | O |
| NVIDIA Isaac Lab | O |
| MuJoCo | O |
| VR 원격 제어 | O |
| Lead-through 교시 | O |

### 개발 특징

- **사전 최적화 모듈**: 머신 비전, 경로 계획, 힘 피드백 제어 API 제공
- **NVIDIA 협력**: Isaac Gym을 활용한 시뮬레이션 기반 강화 학습
- **오픈소스**: Fourier N1 (2025년 출시)은 중국 최초의 검증된 오픈소스 휴머노이드 ([Wikipedia](https://en.wikipedia.org/wiki/Fourier_(company)))

---

## 재활/의료 응용

Fourier의 차별점은 의료 분야에서의 실제 적용 경험이다.

### 기존 재활 로봇 라인업

| 제품 | 용도 |
|------|------|
| Fourier X1/X2 | 하지 외골격 (보행 재활) |
| ArmMotus | 상지 재활 |
| WristMotus | 손목 재활 |
| AnkleMotus | 발목 재활 |

### GR-1 의료 테스트

- **재활 센터 파일럿**: 물리치료사 보조, 운동 범위 훈련 가이드
- **체중 지지**: 균형 유지하며 환자 체중 부분 지지
- **적용 분야**: 고령자 케어, 수술 후 회복 프로그램, 뇌졸중/척수 손상 재활

### 글로벌 배포

- 40개국 이상
- 2,000개 이상의 병원/의료 기관
- 10년간 축적된 임상 데이터

---

## 세대별 비교

| 항목 | GR-1 | GR-2 | GR-3 |
|------|------|------|------|
| 출시 | 2023년 7월 | 2024년 10월 | 2025년 8월 |
| 높이 | 165cm | 175cm | 165cm |
| 무게 | 55kg | 63kg | 71kg |
| DoF (전체) | 40 | 53 | 55 |
| 손 DoF (양손 합계) | 11 | 24 | - |
| 최대 토크 | 300 Nm | 380 Nm | - |
| 액추에이터 | FSA 1.0 | FSA 2.0 | - |
| 촉각 센서 | X | O (6개 어레이) | - |
| 배터리 | 기본 | 2배 용량, 탈착식 | - |
| 포지셔닝 | 연구/의료 | 범용 | Care-bot |

---

## 경쟁 비교

| 항목 | Fourier GR-2 | Unitree H1 | Figure 02 | Tesla Optimus |
|------|--------------|------------|-----------|---------------|
| **배경** | 의료/재활 | 쿼드러펫 | 스타트업 | 자동차/AI |
| **DoF (전체)** | 53 | - | - | 40+ |
| **손 DoF (양손 합계)** | 24 | - | 48 | 44 |
| **높이** | 175cm | 180cm | 165cm | 173cm |
| **가격** | 미공개 (GR-1: $150-170K 추정) | ~$90K | $100K+ | $20-30K (목표) |
| **강점** | 의료 검증, FSA | 가성비 | VLA(Helix) | 대량 생산 |
| **SDK** | ROS/Isaac | - | - | 자체 |

### Fourier의 차별화 요소

1. **의료 배경**: 10년간 재활 로봇 개발 경험
2. **FSA 액추에이터**: 자체 개발 고성능 통합 액추에이터
3. **안전성**: 환자 접촉 경험에서 비롯된 안전 우선 설계
4. **중국 시장 우위**: 로컬 제조, 정부 지원, 빠른 양산 체계

---

## 한계 및 도전 과제

1. **동적 능력**: Boston Dynamics Atlas 대비 점프, 회전 등 동적 민첩성 부족
2. **글로벌 인지도**: 미국/유럽 시장에서 Unitree, Figure 대비 낮은 인지도
3. **AI 기술**: VLA/Foundation Model 측면에서 Figure Helix, Tesla 대비 공개 정보 제한적
4. **가격**: 경쟁 심화 속 Unitree의 저가 공세 대응 필요

---

## References

### 공식 자료
- [Fourier 공식 사이트](https://fftai.com/) - 회사 및 제품 정보
- [Fourier GR-2 제품 페이지](https://www.fftai.com/products-gr2) - GR-2 상세 사양
- [Fourier GR-1 제품 페이지](https://www.fftai.com/products-gr1) - GR-1 상세 사양
- [FSA 문서](https://fftai.github.io/fsa/fsa/) - Fourier Smart Actuator 레퍼런스 가이드

### 기술 분석
- [NVIDIA Spotlight: Fourier Isaac Gym](https://developer.nvidia.com/blog/spotlight-fourier-trains-humanoid-robots-for-real-world-roles-using-nvidia-isaac-gym/) - NVIDIA Isaac Gym 활용 사례
- [Robot Report: GR-2 출시](https://www.therobotreport.com/fourier-launches-gr-2-humanoid-software-platform/) - GR-2 및 소프트웨어 플랫폼 분석
- [Robot Report: GR-1 양산](https://www.therobotreport.com/fourier-intelligence-launches-production-version-of-gr-1-humanoid-robot/) - GR-1 양산 버전 분석

### 회사 배경
- [Wikipedia: Fourier](https://en.wikipedia.org/wiki/Fourier_(company)) - 회사 역사 및 개요
- [Robot Report: Fourier 리브랜딩](https://www.therobotreport.com/fourier-intelligence-rebrands-fourier-fourier-rehab/) - 2024년 사업 분리
- [KrASIA: 재활 로봇 스타트업](https://kr-asia.com/robots-devices-give-patients-a-chance-to-walk-again-inside-chinas-startups) - 창업 배경

### 최신 뉴스
- [Interesting Engineering: GR-3 at CES 2026](https://interestingengineering.com/ai-robotics/fouriers-gr-3-humanoid-at-ces-2026) - GR-3 Care-bot 공개
- [Standard Bots: Humanoid Robots 2025](https://standardbots.com/blog/humanoid-robot) - 2025년 휴머노이드 로봇 시장 분석

---

## See Also

- [하드웨어 목록](../index)
- [Unitree 휴머노이드](unitree-humanoid)
- [Tesla Optimus](optimus)
- [Figure 휴머노이드](figure)
