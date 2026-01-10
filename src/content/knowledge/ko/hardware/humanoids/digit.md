---
title: Agility Digit
description: Agility Robotics의 산업용 이족보행 휴머노이드 로봇
tags: [agility, digit, humanoid, industrial, logistics, amazon, gxo, cassie]
category: hardware
---

# Agility Digit

> Home > Hardware > Humanoids > Digit

<!-- Image pending: ![Digit](../../assets/hardware/humanoids/digit.png) -->

---

## 용어 정리

| 약어 | 정의 |
|------|------|
| DoF | Degrees of Freedom, 자유도 |
| AMR | Autonomous Mobile Robot, 자율이동로봇 |
| RaaS | Robot-as-a-Service, 로봇 구독 서비스 모델 |
| PoC | Proof of Concept, 개념 검증 |
| VLA | Vision-Language-Action, 비전-언어-행동 통합 모델 |

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Agility Robotics |
| 본사 | Albany, Oregon / Pittsburgh, Pennsylvania |
| 설립 | 2015년 (Oregon State University 스핀오프) |
| 시장 | 산업용, 물류, 창고 자동화 |
| 주요 파트너 | Amazon, GXO Logistics |

---

## 핵심 의의

Agility Robotics의 Digit은 **물류 환경에서 상용 배포된 초기 휴머노이드 로봇 중 하나**이다. 2025년 가을, GXO 물류센터에서 10만 개 이상의 토트를 이동시키며 휴머노이드 로봇의 산업적 실용성을 입증했다 [^1]. 바퀴 기반 AMR이 갈 수 없는 계단, 좁은 복도, 불규칙한 지형에서도 작동 가능하며, 인간 중심으로 설계된 기존 시설에 별도 인프라 변경 없이 투입될 수 있다는 점이 핵심 경쟁력이다.

> 참고: Agility Robotics는 Digit을 "industry's first commercially deployed humanoid"로 마케팅하고 있으나 [^2], 이는 물류/창고 분야에서의 풀타임 상업 운영 기준이다. 경쟁사들도 다양한 형태의 파일럿 배포를 진행 중이다.

---

## 회사 연혁: Oregon State에서 RoboFab까지

### 창업자와 기원

| 창업자 | 역할 | 배경 |
|--------|------|------|
| Jonathan Hurst | Chief Robot Officer | Oregon State University 교수, CMU 박사 |
| Damion Shelton | Chairman of the Board | CMU 박사, Hurst와 동문 |
| Mikhail Jones | VP of Software | Oregon State 졸업 |

Agility Robotics는 2015년 Oregon State University의 **Dynamic Robotics Lab**에서 스핀오프되었다 [^3]. 창업자 Jonathan Hurst는 CMU에서 로보틱스 박사학위를 취득한 후 OSU에서 **족보행(legged locomotion)**의 물리학을 연구했으며, OSU Robotics Institute를 공동 설립했다.

### Cassie: Digit의 전신

Cassie는 Agility의 첫 번째 로봇으로, **타조와 화식조(cassowary)**의 다리 메커니즘에서 영감을 받아 설계되었다.

| 항목 | 내용 |
|------|------|
| 개발 자금 | DARPA $1M 그랜트, 16개월 [^4] |
| 특징 | 상체/인지 시스템 없는 순수 이족 로봇 |
| 기록 | 5K 런 세계 최초 완주, 2021년, 약 53분 [^5] |
| 용도 | 연구 플랫폼으로 대학/연구소에 판매 |

> "우리는 동물의 외형을 복제하려 한 게 아니라, 민첩하고 효율적이며 견고한 이동을 위해 동물이 사용하는 기술을 복제했다." - Jonathan Hurst [^4]

---

## Digit 버전 히스토리

| 버전 | 시기 | 주요 특징 | 출처 |
|------|------|----------|------|
| Digit V1 | 2019 | 최초 휴머노이드 버전, 상체/팔 추가 | [^3] |
| Digit V2 | 2020-2021 | Ford와 라스트마일 배송 연구 협력 (보고됨) | [^3] |
| Digit (상용) | 2023 | 물류 특화 설계, 개선된 End Effector | [^10] |
| Digit (차세대) | 2024 | 배터리 확장, 페이로드 증가 | [^6] |

---

## 기술 사양

> 참고: 아래 사양은 다양한 출처에서 수집되었으며, 버전에 따라 상이할 수 있음. 모든 단위는 SI 기준(미터법)으로 통일하고 필요시 임페리얼 단위를 병기함.

### 물리적 사양

| 항목 | 스펙 | 출처 |
|------|------|------|
| 높이 | 175 cm (5'9") | [^7] |
| 무게 | 65 kg (143 lbs) | [^7] |
| 보행 속도 | 5 km/h | [^7] |
| 페이로드 | 16 kg (35 lbs), 차세대: 23 kg (50 lbs) | [^6][^7] |
| 가격 | 약 $250,000 (파일럿 프로그램 기준, 보고됨) | [^8] |

### 자유도(DoF)

| 버전 | DoF 구성 | 출처 |
|------|----------|------|
| 초기 | 16 DoF (다리 5x2 + 팔 3x2) | [^9] |
| 상용 | 28 DoF | [^7] |
| 최신 | 32 DoF (다리 6x2 + 팔 7x2 + 그리퍼 1x2 + 허리 2 + 목 2) | [^7] |

*DoF 구성은 버전별로 상이하며, 출처에 따라 수치가 다를 수 있음*

### 배터리 및 전력

| 항목 | 스펙 | 출처 |
|------|------|------|
| 배터리 타입 | Custom 1.2kWh Li-Po | [^7] |
| 보행 시간 | 1.5시간 (초기) → 4시간 (2024년 버전) | [^6] |
| 대기 시간 | 3시간 | [^7] |
| 작업:충전 비율 | 4:1 (보고됨) | [^6] |
| 자율 도킹 | 지원 (2024년 추가) | [^6] |

### 센서 및 컴퓨팅

| 항목 | 내용 | 출처 |
|------|------|------|
| 내비게이션 | LiDAR | [^7] |
| 깊이 인식 | Intel RealSense 4대 | [^7] |
| IMU | MEMS IMU | [^7] |
| 프로프리오셉션 | Absolute/Incremental 인코더 | [^7] |
| 컴퓨팅 | Intel i7 듀얼 CPU | [^7] |
| 확장 베이 | Intel NUC / NVIDIA Jetson 장착 가능 | [^7] |

### End Effector (그리퍼)

Digit은 **모듈러 End Effector** 접근 방식을 채택한다 [^10]:

- **석션 그리퍼**: 플라스틱 토트/박스의 평면 표면용
- **MT 2 (Manipulation Tool 2)**: 2024년 신규 도입
- 작업에 따라 교체 가능한 설계

> 참고: 경쟁사(Tesla Optimus, Figure 02) 대비 **고자유도 손(dexterous hand)** 기술은 상대적으로 단순한 편이며, Agility는 물류 특화 그리퍼에 집중하고 있음

---

## Amazon 파트너십

Amazon은 **Amazon Industrial Innovation Fund**를 통해 Agility Robotics에 투자했다 [^11].

### 배포 단계

| 단계 | 기간 | 내용 | 비고 |
|------|------|------|------|
| Phase 1 | 2023-2024 | 파일럿 프로그램 (Sumner, WA 등) | 확인됨 [^11] |
| Phase 2 | 2025 | 10개 이상 물류센터 확대 | 계획, 보고됨 [^8] |

### 초기 사용 사례

**토트 리사이클링(Tote Recycling)**: 재고가 모두 피킹된 빈 토트를 수거하고 이동시키는 고반복 작업 [^11]

### 성과 (보고됨)

| 지표 | 수치 | 비고 |
|------|------|------|
| 작업 성공률 | 98% | 18개월 테스트 후, 추정치 [^8] |
| 시간당 비용 | $10-12 | 인간 노동자 $30 대비, 추정치 [^8] |

*주의: 위 수치는 제3자 분석 리포트에서 인용된 것으로, Agility 공식 발표가 아님*

---

## GXO 배포: 물류 분야 휴머노이드 상용화 사례

### 배포 개요

| 항목 | 내용 |
|------|------|
| 위치 | Flowery Branch, Georgia (애틀랜타 외곽) |
| 고객 | SPANX 옴니채널 물류센터 |
| 계약 | 멀티년 RaaS 계약 |
| 시작 | 2023년 말 PoC → 2024년 본격 배포 |

*출처: [^12]*

### 100K 토트 마일스톤 (2025년 가을)

Digit은 **10만 개 이상의 토트 이동**을 달성하며 다음을 증명했다 [^1]:

1. **대량 처리 능력**: 산업 수준의 throughput
2. **신뢰성**: 라이브 fulfillment 워크플로우 내 작동
3. **ROI 가능성**: 장기적 투자수익률 검증 방향성 제시

### 수행 작업

- Cobot AMR에서 토트 픽업/내리기
- 컨베이어로 아이템 적재
- 다양한 바닥 위치에 컨테이너 스태킹

### 오케스트레이션

**Agility Arc** 클라우드 플랫폼을 통해 Digit 플릿을 관리하며, MiR, Zebra Robotics 등 AMR 업체와 통합된다 [^2].

---

## RoboFab: 휴머노이드 전용 제조시설

| 항목 | 내용 | 출처 |
|------|------|------|
| 위치 | Salem, Oregon (엔지니어링 센터에서 약 50km) | [^13] |
| 면적 | 약 6,500 m² (70,000 sq ft) | [^13] |
| 개장 | 2023년 말 | [^13] |
| 최대 생산능력 | 연간 10,000대 (목표) | [^13] |
| 고용 계획 | 500명 (최대 생산시) | [^14] |

### 생산 시스템 특징

- 각 서브어셈블리가 동일 시간에 완성되도록 설계
- **동시 조립**: 전체 로봇이 동시에 조립되어 최종 테스트로 이동
- **확장 가능**: 각 work cell을 복제하여 생산 증가
- 라인 셧다운 없이 고율 제조 가능

### 생산 로드맵

| 기간 | 목표 |
|------|------|
| 1년차 | 수백 대 (shift당 8대) |
| 스케일업 | 수천 대 (2026년 목표) |
| 최대 | 연간 10,000대 |

---

## 전략적 파트너십

| 파트너 | 시기 | 내용 | 출처 |
|--------|------|------|------|
| Amazon | 2023 | 투자 및 창고 배포 | [^11] |
| GXO Logistics | 2023-2024 | 물류 분야 RaaS 계약 | [^12] |
| Zion Solutions | 2024.05 | 물류/공급망 시스템 통합 | [^15] |
| Ricoh USA | 2024.09 | 설치, 서비스, 고객 지원 | [^15] |
| MiR / Zebra | 2025 | AMR 통합 | [^2] |

---

## 경쟁 포지셔닝

### 강점

- **초기 상용 배포 경험**: 물류 분야에서 가장 앞선 실제 운영 경험
- **물류 특화**: 범용이 아닌 산업용에 집중
- **생산 인프라**: RoboFab을 통한 대량 생산 역량

### 과제

- **손(Hand) 기술**: 경쟁사 대비 단순한 그리퍼 (물류 외 확장시 한계)
- **AI 역량**: End-to-End 신경망 접근에서 발전 여지
- **범용성**: 물류 외 영역 확장성 검증 필요

### 경쟁사 비교

| 회사 | 접근 방식 | 상태 |
|------|----------|------|
| Agility | 물류 특화, 점진적 확장 | 상용 운영 중 |
| Tesla | 범용, 대량 생산 목표 | 파일럿 단계 |
| Figure | 고성능 AI (Helix VLA) | 테스트 중 |
| 1X | 가정용/범용 | 개발 중 |

*비교는 2025년 기준이며, 각 회사의 발표 및 보도 자료 기반*

---

## 시장 전망

### 인력 부족 대응

물류 업계는 상승하는 물량과 지속적인 노동력 부족에 직면해 있으며, Digit과 같은 휴머노이드 자동화 솔루션의 수요가 증가하고 있다 [^16].

### 2025-2026 전망 (업계 추정)

> 주의: 아래 전망은 업계 분석가 및 보도 자료 기반 추정치이며, 실제 결과는 상이할 수 있음

- **산업용**: 수백~수천 대 배포 예상 [^16]
- **소비자용**: 2-4년 후 예상 [^16]

---

## References

[^1]: [Digit 100K 토트 달성 발표](https://www.agilityrobotics.com/content/digit-moves-over-100k-totes) - Agility Robotics 공식
[^2]: [Agility Robotics 공식 솔루션 페이지](https://www.agilityrobotics.com/solution)
[^3]: [Contrary Research: Agility Robotics 분석](https://research.contrary.com/company/agility-robotics)
[^4]: [Oregon State: Cassie Steps into the Limelight](https://engineering.oregonstate.edu/all-stories/cassie-steps-limelight)
[^5]: [Oregon State Cassie 5K 달성](https://news.oregonstate.edu/news/bipedal-robot-developed-oregon-state-makes-history-learning-run-completing-5k)
[^6]: [Agility Robotics New Innovations 발표](https://www.agilityrobotics.com/content/agility-robotics-announces-new-innovations-for-market-leading-humanoid-robot-digit)
[^7]: [Livium Digit Specifications](https://livium.com/humanoids/digit-v2) / [QVIRO Digit Specifications](https://qviro.com/product/agility-robotics/digit/specifications)
[^8]: [Scaling Deep: Agility Robotics Analysis](https://www.scalingdeep.tech/p/how-agility-robotics-convinced-amazon) - 제3자 분석
[^9]: [Robots Guide: Digit](https://robotsguide.com/robots/digit)
[^10]: [Agility Robotics Next Generation Digit 발표](https://agilityrobotics.com/content/agility-robotics-launches-next-generation-digit)
[^11]: [Amazon 파트너십 발표](https://www.aboutamazon.com/news/operations/amazon-introduces-new-robotics-solutions)
[^12]: [GXO 멀티년 계약](https://gxo.com/news_article/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics/)
[^13]: [RoboFab 공식 페이지](https://www.agilityrobotics.com/about/robofab) / [RoboFab 오프닝 발표](https://www.agilityrobotics.com/content/opening-robofab-worlds-first-factory-for-humanoid-robots)
[^14]: [OPB: Corvallis robotics company Salem factory](https://www.opb.org/article/2023/09/24/oregon-state-university-robotics-digit-technology-education-business/)
[^15]: [Contrary Research: Agility Robotics 파트너십 분석](https://research.contrary.com/company/agility-robotics) - 제3자 분석
[^16]: [Humanoid Robots 2025-2026 전망](https://www.winssolutions.org/humanoid-robots-2025-2026-reality-hype/) - 업계 분석

---

## See Also

- [하드웨어 목록](../index.md)
- [Figure 휴머노이드](figure.md)
- [Tesla Optimus](optimus.md)
