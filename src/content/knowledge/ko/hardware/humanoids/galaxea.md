---
title: Galaxea 휴머노이드
description: Galaxea AI의 R1 시리즈 바퀴형 듀얼암 휴머노이드 로봇
tags: [galaxea, r1, humanoid, wheeled, teleoperation, research, affordable]
category: hardware
---

# Galaxea 휴머노이드

> Home > Hardware > Humanoids > Galaxea

<!-- Image pending: ![Galaxea R1](../../assets/hardware/humanoids/galaxea.png) -->

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Galaxea AI (星海图, 중국 베이징) |
| 유형 | 바퀴형 듀얼암 휴머노이드 |
| 설립 | 2023년 9월 (청화대/스탠포드 출신 팀) |
| 컴퓨팅 | NVIDIA Jetson AGX Orin 32GB |
| 가격대 | $27,500 ~ $40,000 (모델별 상이) |
| 주요 고객 | Huawei, Volkswagen, Samsung, ByteDance, Stanford, MIT [^1] |

> **Note**: 가격 및 사양 정보는 2025년 1분기 기준이며, 변동될 수 있습니다.

[^1]: [Forbes via Yahoo Finance - Galaxea AI Raises $100M](https://finance.yahoo.com/news/beijings-galaxea-ai-raises-100-000126844.html)

---

## 핵심 의의

Galaxea R1 시리즈는 **저렴한 가격의 연구용 휴머노이드 플랫폼**으로서 중요한 의미를 가진다.

### 연구 접근성 향상

- **합리적 가격**: R1 Pro 기준 약 $27,500(199,000 RMB)부터 시작하여, Figure 02($100K+)나 Unitree H1($90,000) 대비 현저히 저렴
- **완전한 기능**: 저가임에도 26 DoF, 7개 HD 카메라, LiDAR, 힘 센서 등 풀스펙 제공
- **다양한 텔레오퍼레이션**: Isomorphic과 VR 원격 조작 지원으로 데이터 수집 용이

### 바퀴 기반 설계의 장점

- **안정성**: 보행형 대비 넘어질 위험 없음
- **데이터 품질**: 안정적 플랫폼에서 조작 데이터 수집 가능
- **실용성**: 연구/산업 환경에서 즉시 활용 가능

### 생태계 지원

- 40개 이상 기업/연구기관 고객 확보
- Physical Intelligence, Stanford, MIT 등 AI 연구 그룹 채택
- 알고리즘 훈련, 로봇 배포, Embodied AI 데이터 수집에 활용

---

## 제품 라인업 비교

> **범례**: O = 지원, X = 미지원, N/A = 정보 미공개

| 항목 | R1 Pro | R1 | R1 Lite |
|------|--------|-----|---------|
| DoF | 26 | 24 | 23 |
| 암 | 듀얼 7축 | 듀얼 6축 (A1) | 듀얼 6축 |
| 페이로드 | 10kg | N/A | N/A |
| 리치 | 64cm | 70cm | 70cm |
| 최대 높이 | 2m | 2m | 1.7m |
| 그리퍼 | 다관절 | G1 그리퍼 | 2핑거 |
| 카메라 | 7 HD + LiDAR | 7 HD + LiDAR | 듀얼 |
| 손목 카메라 | O | X | X |
| 힘 센서 | O | X | X |
| 음성 상호작용 | O | X | X |
| VR 텔레옵 | O | O | X |
| Isomorphic 텔레옵 | O | O | O |
| 가격 | ~$27,500 | N/A | ~$40,000 |

> **Note**: R1 Lite가 R1 Pro보다 높은 가격인 이유는 R1 Lite가 완전 조립된 데이터 수집 전용 플랫폼으로 판매되는 반면, R1 Pro는 연구/개발용 기본 가격이기 때문입니다. 실제 구매 시 구성에 따라 가격이 달라질 수 있습니다.

### R1 Pro 상세

| 항목 | 스펙 |
|------|------|
| 자유도 | 26 DoF |
| 암 구성 | 듀얼 7-DoF, 각 10kg 페이로드 |
| 리치 | 64cm (단일 암), 바닥~2m 도달 |
| 센서 | 7 HD 카메라 + 1 LiDAR + 손목 카메라 |
| 힘 센서 | 통합 |
| 컴퓨팅 | NVIDIA Jetson AGX Orin 32GB (200 TOPS) |
| 샤시 | 3륜 벡터 스티어링 |
| 텔레오퍼레이션 | Isomorphic + VR |
| 가격 | ~199,000 RMB (~$27,500) |

### R1 상세

| 항목 | 스펙 |
|------|------|
| 자유도 | 24 DoF |
| 암 구성 | 듀얼 6-DoF Galaxea A1 암 |
| 그리퍼 | Galaxea G1 그리퍼 |
| 토르소 | 4-DoF |
| 리치 | 70cm |
| 최대 높이 | 2m |
| 샤시 | 3륜 벡터 스티어링 |
| 센서 | 7 HD 카메라 + 1 LiDAR |
| 확장성 | 외부 센서 인터페이스 지원 |

### R1 Lite 상세

| 항목 | 스펙 |
|------|------|
| 자유도 | 23 DoF |
| 암 구성 | 듀얼 6축 |
| 리치 | 70cm |
| 기본 높이 | 128cm |
| 최대 높이 (확장 시) | 1.7m |
| 무게 | 96kg |
| 이동 속도 | 5.4 km/h |
| 센서 | 360도 LiDAR + 듀얼 카메라 |
| 그리퍼 | 2핑거 |
| 텔레오퍼레이션 | Isomorphic |
| 용도 | 데이터 수집 플랫폼 |
| 가격 | ~$40,000 |

---

## 텔레오퍼레이션

Galaxea R1 시리즈는 두 가지 텔레오퍼레이션 방식을 지원한다.

### Isomorphic 원격 조작 (R1-T 플랫폼)

R1-T는 R1의 축소 복제본으로 설계된 전용 원격 조작 플랫폼이다.

| 특징 | 설명 |
|------|------|
| 전신 매핑 | 모든 관절 1:1 동기화 |
| 정밀도 | 밀리미터 수준 |
| 응답 속도 | 밀리초 단위 |
| 힘 피드백 | 로봇에서 조작자로 힘 전달 |

**활용 사례:**
- 고정밀 조작 데이터 수집
- 섬세한 작업 훈련 데모
- 연구용 데이터셋 구축

### VR 원격 조작

Meta Quest 3 VR 헤드셋을 활용한 몰입형 원격 조작 시스템.

| 특징 | 설명 |
|------|------|
| 헤드셋 | Meta Quest 3 |
| 핸드 트래킹 | 지원 |
| 시각 피드백 | 로봇 헤드 카메라 실시간 스트리밍 |
| 전신 동기화 | 지원 |
| 정밀도 | 밀리미터 수준 |

**조작 방법:**
- 손 움직임으로 로봇 암 제어
- 헤드 카메라를 통한 1인칭 시점 확인
- B버튼 2초 이상 홀드로 종료

### 표준 리모트 컨트롤러

아날로그 스틱 기반 표준 컨트롤러도 지원.

| 기능 | 설명 |
|------|------|
| 샤시 이동 | 아날로그 스틱 |
| 토르소 제어 | 지원 |
| 비상 정지 | 지원 |
| 모드 전환 | SWA/SWB/SWC/SWD 스위치 |

---

## 회사 정보

### Galaxea AI (星海图)

| 항목 | 내용 |
|------|------|
| 설립 | 2023년 9월 |
| 본사 | 중국 베이징/쑤저우 |
| 미션 | "100억 로봇으로 100억 인류 서비스" |
| 기업가치 | $700M (2025년 기준) [^2] |
| 누적 투자 | ~15억 RMB (~$100M+) [^2] |

[^2]: [Benzinga - Galaxea AI Raises $100M at $700M Valuation](https://www.benzinga.com/news/topics/25/08/47431117/beijings-galaxea-ai-raises-100-million-at-700-million-valuation-says-humanoids-will-enter-homes-in-le)

### 창업팀

- **Jiyang Gao (高继扬)** - CEO [^3]
  - 청화대 전자공학, USC 박사
  - Waymo, Momenta 자율주행 경력
  - Google, SenseTime 인턴

- **Huazhe Xu** - 공동 창업자/CSO [^3]
  - 스탠포드 포닥, UC Berkeley 박사
  - 청화대 조교수
  - CoRL'23 최우수 시스템 논문상

[^3]: [The Wire China - Gao Jiyang Profile](https://www.thewirechina.com/whos_who/gao-jiyang-高继扬/)

### 투자자

Meituan, IDG Capital, Baidu Ventures 등 30개 이상 투자사 참여. [^2]

### AI 모델

**G0 모델** - Galaxea 자체 개발 AI 모델
- 언어 이해
- 추론 수행
- 복잡한 태스크 실행 (예: 침대 정리)

### 향후 계획

- 2026년 이족 보행 휴머노이드 출시 예정
- 10년 내 가정용 휴머노이드 보급 목표

---

## 기술 스택

### 하드웨어

| 구성요소 | 사양 |
|----------|------|
| 컴퓨팅 | NVIDIA Jetson AGX Orin 32GB |
| CPU | 8코어 |
| GPU | 200 TOPS |
| 샤시 | 3륜 벡터 스티어링 |
| 센서 | LiDAR, HD 카메라, 힘 센서 |

### 소프트웨어

| 항목 | 지원 |
|------|------|
| ROS1 | O |
| ROS2 | O |
| SDK | Python, C++ |
| 문서화 | 공식 가이드 제공 |

---

## 경쟁사 비교

| 로봇 | 제조사 | 유형 | 가격 | DoF |
|------|--------|------|------|-----|
| R1 Pro | Galaxea | 바퀴형 | ~$27,500 | 26 |
| G1 | Unitree | 보행형 | ~$16,000 | 23 |
| H1 | Unitree | 보행형 | ~$90,000 | N/A |
| Figure 02 | Figure AI | 보행형 | ~$100,000+ | N/A |

---

## See Also

- [하드웨어 목록](../index.md)
- [Galaxea Arms](../arms/galaxea-arms.md)
- [Unitree 휴머노이드](unitree-humanoid.md)

---

## References

- [Galaxea Dynamics 공식 사이트](https://galaxea-dynamics.com/)
- [Galaxea 공식 문서](https://docs.galaxea-ai.com/)
- [Galaxea User Guide](https://userguide-galaxea.github.io/Product_User_Guide/)
- [Galaxea R1 Pro 제품 페이지](https://galaxea-dynamics.com/products/galaxea-r1-pro)
- [VR Teleop 튜토리얼](https://docs.galaxea-dynamics.com/Guide/R1Pro/vr_teleop/ros2/R1Pro_VR_Teleop_Usage_Tutorial_ros2/)
- [Isomorphic Teleop 튜토리얼](https://docs.galaxea-ai.com/Guide/R1Pro/isomorphic_teleop/R1Pro_Teleop_Usage_Tutorial/)
- [Forbes: Galaxea AI Raises $100M](https://finance.yahoo.com/news/beijings-galaxea-ai-raises-100-000126844.html)
- [Robotuo: R1 Series 발표](https://robotuo.com/2025/01/05/galaxea-ai-announces-the-launch-of-the-r1-series-humanoid-robots/)
