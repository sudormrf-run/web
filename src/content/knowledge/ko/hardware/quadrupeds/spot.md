---
title: Boston Dynamics Spot
description: 산업용 4족 보행 로봇의 표준 - 대규모 상업 배치를 달성한 쿼드러펫
tags: [boston-dynamics, spot, quadruped, industrial, inspection, mobile-manipulation, hyundai]
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

## 핵심 의의

Spot의 Physical AI 분야에서의 의의를 정리하면 다음과 같습니다:

- **상업용 쿼드러펫의 선도**: 2020년 일반 판매 시작, 산업 현장에 대규모 배치
- **Legged Robotics의 산업 검증**: 연구실 데모를 넘어 실제 산업 현장에서 가치를 입증한 사례
- **모바일 매니퓰레이션 플랫폼**: Spot Arm으로 이동과 조작을 결합
- **연구 플랫폼으로의 확장**: SDK 공개와 RL Researcher Kit로 학술 연구 생태계 지원
- **Physical AI 데이터 수집**: 다양한 실환경 데이터 수집 플랫폼으로의 활용 가능성

<!-- Image pending: ![Spot](../../assets/hardware/quadrupeds/spot.png) -->
<p align="center"><em>Boston Dynamics Spot - 산업용 4족 보행 로봇</em></p>

---

## Overview

Spot은 Boston Dynamics가 개발한 상업용 4족 보행 로봇입니다. 2020년 일반 판매를 시작한 이후, 건설, 에너지, 제조, 광업 등 다양한 산업에서 검사 및 데이터 수집 작업에 활용되고 있습니다.

| 항목 | 내용 |
|------|------|
| 제조사 | Boston Dynamics (Hyundai Motor Group 자회사) |
| 본사 | Waltham, Massachusetts, USA |
| 출시 | 2020년 (일반 판매) |

---

## Boston Dynamics 역사

### 창업과 발전

| 연도 | 마일스톤 | 출처 |
|------|----------|------|
| 1992 | MIT Leg Laboratory에서 Marc Raibert가 스핀오프로 설립 | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |
| 2005 | DARPA 자금으로 BigDog 개발 시작 | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |
| 2013 | Google (Alphabet) 인수 | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |
| 2017 | SoftBank 인수 | [SoftBank 공식 발표](https://group.softbank/en/news/press/20201211_0) |
| 2019 | Spot 초기 버전 공개 | [Boston Dynamics](https://bostondynamics.com/) |
| 2020 | Spot 상업 판매 시작 | [Boston Dynamics](https://bostondynamics.com/products/spot/) |
| 2021.06 | Hyundai Motor Group 인수 완료 | [Boston Dynamics 공식 발표](https://bostondynamics.com/news/hyundai-motor-group-completes-acquisition-of-boston-dynamics-from-softbank/) |
| 2024 | 전기 Atlas 휴머노이드 공개 | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |

### 핵심 인물

- **Marc Raibert**: 창업자, MIT/CMU 교수 출신, Leg Laboratory 설립자

### 소유 구조 (2021년 6월 기준)

2021년 6월 인수 완료 시점 기준으로, Hyundai Motor Group이 80%, SoftBank가 20% 지분을 보유합니다. ([Boston Dynamics 공식 발표](https://bostondynamics.com/news/hyundai-motor-group-completes-acquisition-of-boston-dynamics-from-softbank/))

---

## 기술 스펙

> **출처**: 아래 스펙은 [Boston Dynamics 공식 스펙시트](https://bostondynamics.com/wp-content/uploads/2020/10/spot-specifications.pdf) 기준입니다. 최신 정보는 공식 문서를 확인하세요.

### 본체 스펙

| 항목 | 스펙 |
|------|------|
| 무게 | 32.5 kg (71.7 lbs) |
| 크기 (LxWxH) | 1,100 x 500 x 840 mm (standing) |
| 페이로드 | 14 kg (30 lbs) |
| 배터리 | 605 Wh 리튬이온 |
| 런타임 | 약 90분 (조건에 따라 상이) |
| 최대 속도 | 1.6 m/s |
| 방수/방진 | IP54 |
| 작동 온도 | -20C ~ 45C |

### 이동 능력

| 항목 | 스펙 |
|------|------|
| 최대 경사 | 30도 |
| 계단 높이 | 최대 300 mm (11.8 in) |
| 탐지 거리 | 4 m (13 ft) |
| 자세 복구 | 자동 기립 (self-righting) |

### 센서 및 인식

- 스테레오 카메라 5개 (360도 시야)
- LiDAR 옵션 (매핑 및 자율 탐색용)
- IMU (관성 측정 장치)
- 다양한 페이로드 센서 장착 가능

---

## Spot Arm

> **출처**: [Spot Arm Specifications - Boston Dynamics Support](https://support.bostondynamics.com/s/article/Spot-Arm-Specifications-151694)

Spot에 장착 가능한 6-DoF 매니퓰레이터로, 모바일 매니퓰레이션 작업을 가능하게 합니다.

| 항목 | 스펙 |
|------|------|
| 자유도 (DoF) | 6 + 그리퍼 |
| 암 무게 | 8 kg |
| 암 길이 | 985 mm (fully extended) |
| 최대 높이 | 1,800 mm (로봇 기립 시) |
| 최대 리프트 | 11 kg (24.3 lbs) |
| 연속 리프트 (0.5m) | 5 kg (11 lbs) |
| 드래그 능력 | 최대 25 kg (카펫 위) |

### 그리퍼 센서

- 4K RGB 카메라
- ToF (Time of Flight) 센서
- IMU

### 용도 예시

- 밸브/레버 조작
- 문 열기
- 물체 픽업 및 배치
- 드래그 작업

---

## SDK 및 소프트웨어

### Spot SDK

> **출처**: [Spot SDK Documentation](https://dev.bostondynamics.com/) (2025년 1월 접근 기준)

Boston Dynamics는 포괄적인 Python SDK를 제공합니다.

| 구성 요소 | 설명 |
|----------|------|
| Python 클라이언트 | 로봇 제어 및 센서 접근 |
| GraphNav | 자율 탐색 및 매핑 |
| Autowalk | 미션 기록 및 재생 |
| Mission Service | 복잡한 자율 행동 정의 |

### 자율 기능

```
[지도 기록] -> [Autowalk 생성] -> [자율 실행]
     |              |              |
 GraphNav       웨이포인트      동적 재계획
                 액션 정의      장애물 회피
```

- **Autowalk**: 미션 기록 및 자동 재생
- **GraphNav**: 토폴로지 기반 자율 탐색
- **동적 재계획**: 새로운 장애물 자동 회피
- **자동 충전**: 도킹 스테이션 연동

### Scout

웹 기반 플릿 관리 소프트웨어:

- 원격 로봇 모니터링
- 미션 스케줄링
- 수집 데이터 관리
- 다중 로봇 관리

---

## 산업 응용

### 주요 활용 분야 (예시)

Boston Dynamics 및 파트너사 사례에 기반한 주요 활용 분야:

| 분야 | 활용 사례 예시 |
|------|---------------|
| 건설 | 현장 진행 모니터링, 3D 스캐닝, 안전 점검 |
| 에너지/유틸리티 | 발전소 검사, 변전소 모니터링, 파이프라인 점검 |
| 제조 | 공장 순찰, 장비 상태 점검, 열화상 검사 |
| 광업 | 지하 터널 검사, 환경 모니터링 |
| 공공 안전 | 위험 환경 탐색, 폭발물 처리 지원 |

### 검사 기능 (옵션에 따라)

- 열화상 카메라로 장비 이상 감지
- 게이지/다이얼 자동 판독
- 가스 누출 탐지
- 3D 포인트 클라우드 생성
- 음향 이상 감지

---

## 가격 및 구성

> **참고**: 가격은 공개된 대략적인 정보이며, 실제 가격은 구성, 지역, 계약 조건에 따라 크게 달라질 수 있습니다. 정확한 견적은 Boston Dynamics에 문의하세요.

| 패키지 | 예상 가격 범위 | 포함 내용 |
|--------|---------------|----------|
| Explorer Kit | ~$75,000 시작가 | 로봇, 배터리 1개, 충전기, 컨트롤러, 기본 SW |
| Spot Arm 추가 | 추가 비용 발생 | 6-DoF 암, 그리퍼 |
| Enterprise 옵션 | $100,000+ | LiDAR, 고급 자율 SW, Scout 라이선스 |

---

## 연구 플랫폼으로의 활용

### 학술 연구 생태계

Boston Dynamics는 학술 기관 대상 프로그램을 운영하며, 다수의 대학에서 Spot을 연구 플랫폼으로 활용하고 있습니다. 자세한 내용은 [Boston Dynamics Academia Program](https://bostondynamics.com/industry/academia-education/)을 참조하세요.

### ROS 2 통합

```
+-------------------------------------------+
|           spot_ros2 Package               |
+-------------------------------------------+
|  - Boston Dynamics SDK wrapper            |
|  - Joint-level 제어 지원                  |
|  - 센서 데이터 퍼블리시                   |
|  - Navigation stack 통합                  |
+-------------------------------------------+
```

- **spot_ros2**: BDAI (Robotics and AI Institute) 유지보수 ([GitHub](https://github.com/bdaiinstitute/spot_ros2))
- Clearpath Robotics 공식 ROS 패키지 제공
- Joint-level API로 저수준 제어 연구 가능

### RL Researcher Kit

Boston Dynamics, NVIDIA, AI Institute 공동 개발 ([IEEE Spectrum](https://spectrum.ieee.org/boston-dynamics-research-spot)):

| 구성 요소 | 설명 |
|----------|------|
| Joint-level API | 개별 관절 직접 제어 |
| Jetson AGX Orin | 온보드 AI 연산 페이로드 |
| NVIDIA Isaac Lab | Spot 시뮬레이션 환경 |
| RL 정책 제어 | 로코모션 정책 커스터마이징 |

### 연구 활용 분야 (예시)

- 자율 탐색 및 SLAM 연구
- 강화학습 기반 로코모션
- 모바일 매니퓰레이션 연구
- Human-Robot Interaction
- Foundation Model 적용 연구

---

## 경쟁 제품 비교 (참고용)

> **주의**: 아래 비교는 공개된 정보 기반의 대략적인 참고용입니다. 경쟁사 스펙과 가격은 자주 변경되므로, 정확한 정보는 각 제조사 공식 자료를 확인하세요.

| 항목 | Spot | Unitree B2 | ANYmal |
|------|------|------------|--------|
| 제조사 | Boston Dynamics | Unitree | ANYbotics |
| 주요 시장 | 산업 검사 | 산업/연구 | 산업 검사 |
| SDK 공개 | O | O | 제한적 |
| 통합 암 옵션 | O (Spot Arm) | X | X |

### Spot의 주요 차별점

- **성숙한 생태계**: SDK, Scout, 파트너 통합
- **실환경 운용 경험**: 다년간의 산업 현장 배치 경험
- **Spot Arm**: 통합 매니퓰레이션 솔루션

---

## Physical AI 관점에서의 의의

### 데이터 수집 플랫폼으로서의 가능성

```
실환경 데이터 수집:
+-----------------------------------------------------+
|  [Spot 센서]     [자율 탐색]     [조작 데이터]       |
|       |              |               |              |
|    RGB/Depth      경로 데이터      Arm 궤적         |
|       |              |               |              |
|  ------------------------------------------------   |
|           Foundation Model 학습 데이터              |
+-----------------------------------------------------+
```

### VLA/Foundation Model 연구 관점

- 다양한 실환경 시나리오에서 데이터 수집 가능성
- 자율 탐색 + 조작의 통합 학습 데이터
- 산업 현장 특화 태스크 데이터

### Hyundai의 로보틱스 전략

Hyundai Motor Group은 Boston Dynamics 인수를 통해 로보틱스 분야로 사업을 확장하고 있습니다.

---

## References

### 공식 문서
- [Boston Dynamics Spot 공식 페이지](https://bostondynamics.com/products/spot/)
- [Spot SDK Documentation](https://dev.bostondynamics.com/)
- [GitHub - boston-dynamics/spot-sdk](https://github.com/boston-dynamics/spot-sdk)
- [Spot Specifications PDF](https://bostondynamics.com/wp-content/uploads/2020/10/spot-specifications.pdf)
- [Spot Arm Specifications](https://support.bostondynamics.com/s/article/Spot-Arm-Specifications-151694)

### ROS 통합
- [spot_ros2 GitHub](https://github.com/bdaiinstitute/spot_ros2)
- [Clearpath ROS Package](https://clearpathrobotics.com/blog/2020/09/clearpath-robotics-releases-ros-package-for-boston-dynamics-spot-robot/)

### 기업 정보
- [Hyundai Acquisition Announcement](https://bostondynamics.com/news/hyundai-motor-group-completes-acquisition-of-boston-dynamics-from-softbank/)
- [Boston Dynamics Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics)
- [Boston Dynamics Academia Program](https://bostondynamics.com/industry/academia-education/)

### 기술 분석
- [IEEE Spectrum - Hyundai Acquires Boston Dynamics](https://spectrum.ieee.org/hyundai-buys-boston-dynamics)
- [IEEE Spectrum - Spot RL Researcher Kit](https://spectrum.ieee.org/boston-dynamics-research-spot)

---

## See Also

- [하드웨어 목록](../index.md)
- [Unitree 쿼드러펫](unitree.md)
- [ANYmal](anymal.md)

### 관련 하드웨어
- [Boston Dynamics Stretch](../mobile/stretch.md)
- [Mobile ALOHA](../mobile/mobile-aloha.md)

### 관련 회사
- [NVIDIA](../../companies/nvidia.md) - Isaac Lab, RL Researcher Kit 협력
- [Unitree](../../companies/unitree.md) - 경쟁 쿼드러펫 제조사

