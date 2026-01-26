---
title: Tesla Optimus
description: Tesla의 범용 휴머노이드 로봇 - 대량 생산을 목표로 하는 End-to-End AI 기반 로봇
tags:
  - tesla
  - optimus
  - humanoid
  - end-to-end
  - neural-network
  - mass-production
created: 2024-01-01
updated: 2026-01-09
sources:
  - tesla.com/AI
  - standardbots.com
  - notateslaapp.com
  - briandcolwell.com
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

# Tesla Optimus

> Home > Hardware > Humanoids > Optimus

<!-- Image pending: ![Tesla Optimus](../../assets/hardware/humanoids/optimus.png) -->

*이 문서의 정보는 2026년 1월 기준이며, 스펙 및 계획은 Tesla 발표와 업계 분석을 기반으로 한다.*

---

## Overview

Tesla Optimus는 Tesla가 개발 중인 범용 휴머노이드 로봇이다. 2021년 8월 19일 AI Day에서 처음 발표되었으며 (당시 실물 프로토타입 없이 배우가 로봇 수트를 입고 등장), Tesla의 FSD(Full Self-Driving) 기술에서 축적한 End-to-End 신경망 기술을 로봇에 적용한다. 가장 큰 차별점은 **대량 생산을 통한 저가격화** 전략으로, 기존 휴머노이드 로봇들이 $100K-$250K 수준인 것에 비해 $20K-$30K를 목표로 한다.

### 확인된 스펙 (Gen 2 기준)

| 항목 | 스펙 | 비고 |
|------|------|------|
| 제조사 | Tesla | - |
| 높이 | 5'8" (173cm) ~ 5'11" (180cm) | 소스마다 다름 |
| 무게 | 104 lbs (47kg) | Gen 1 대비 10kg 감소, 2023년 12월 공개 기준 |
| 전체 DoF | 28개 (본체) + 11개 (각 손) | 총 40개 이상의 전기기계식 액추에이터 |
| 손 DoF | 11 | Gen 2 기준 (2023년 12월 공개) |
| 들기 능력 | 45 lbs (20kg, 운반) | 설계 목표 기준 |
| 보행 속도 | ~5 mph (8 km/h) | Gen 2 기준 |
| 배터리 용량 | 2.3 kWh (52V) | ~8시간 동작, 정지 시 100W / 최대 보행 시 500W |
| 센서 | 8개 오토파일럿 카메라, IMU, 힘/토크 센서, 발 압력 센서 | Tesla FSD 기반 비전 시스템 |

### 향상된 손 스펙 (2024년 10월 "We, Robot" 이벤트 시연)

| 항목 | 스펙 | 비고 |
|------|------|------|
| 손 DoF | 22 (+ 손목/전완 3) | 텐던 구동 시스템 채용 |
| 손 액추에이터 | 17개 선형 액추에이터 | 전완부로 이동하여 손 크기 감소 |
| 달리기 속도 | ~6-8 mph (~10-13 km/h) | 2025년 12월 2일 데모 영상 기준 (비공식, flight phase 확인됨) |

*주의: 22 DoF 손은 2024년 10월 We, Robot 이벤트에서 처음 시연됨. Gen 3(V3) 양산은 2026년 1월 21일 공식 시작*

### 목표 스펙 (Tesla 발표 기준)

| 항목 | 목표값 | 비고 |
|------|--------|------|
| 목표 가격 | ~$20,000 | Elon Musk의 비전으로, 공식 가격 아님 [3] |
| 초기 판매 가격 | $30,000 - $50,000 | 양산 초기 추정, 규모의 경제 이전 [3] |
| 일반 판매 시작 | 2027년 말 목표 | 2026년 1월 Musk 발언 (WEF) |

---

## 핵심 의의

Tesla Optimus의 가장 핵심적인 의의는 **휴머노이드 로봇의 대량 생산 가능성**을 제시한 것이다.

### 왜 대량 생산이 중요한가?

1. **가격 혁명**: 기존 휴머노이드 로봇(Atlas $140K+ 추정, Figure 01 $150K+ 추정)은 특수 목적에만 사용 가능한 고가 장비였다. Tesla는 자동차 생산 노하우를 활용해 $20K-$30K 가격대를 목표로 한다. [3]

2. **수직 통합**: Tesla는 배터리, 전기 모터, AI 칩, 소프트웨어를 모두 자체 생산할 수 있는 거의 유일한 회사다. 이 수직 통합이 원가 절감의 핵심이다.

3. **생산 규모 목표** (Tesla 발표 기준, 공식 확정 아님): [3]
   - 2025년: 목표 5,000-10,000대 → 실제 수백 대 수준 (목표의 1/10 미만)
   - 2026년: 50,000-100,000대 목표, Fremont 공장 Gen 3 라인 가동
   - 장기: Musk의 연간 100만대 → 1,000만대 비전 (Giga Texas 시설 계획)

4. **경제적 파급력**: Elon Musk는 Optimus가 Tesla 기업 가치의 80%를 차지하게 될 것이라 전망하며, 노동력 대체를 통한 범용 기본소득(UBI) 가능성까지 언급했다. [4]

---

## 세대별 비교

| 버전 | 공개 시기 | 주요 특징 | 손 DoF | 상태 |
|------|----------|----------|--------|------|
| **Bumble-C** | 2022년 9월 (AI Day) | 케이블 연결 없이 최초 보행, 손 흔들기 시연, 일부 off-the-shelf 부품 | - | 완료 |
| **Optimus (Gen 1)** | 2022년 9월 (AI Day) | 초기 프로토타입, Tesla 자체 설계 부품, 2.3kWh 배터리 | 11 | 완료 |
| **Gen 2** | 2023년 12월 13일 | 30% 빠른 보행 (8 km/h), 10kg 경량화 (47kg), 2-DoF 목, 계란 집기 시연 | 11 | 완료 |
| **22 DoF 손** | 2024년 10월 (We, Robot) | 22 DoF 텐던 구동 손, 바텐딩/물건 전달 시연 (텔레오퍼레이션 사용) | 22 | 시연 |
| **Gen 3 (V3)** | 2026년 1월 21일 | 양산 시작, 22 DoF 손 통합, 달리기 가능, 10-12 km/h 보행 | 22 | 양산 중 |

*출처: Tesla AI Day 발표, We, Robot 이벤트, Q3 2025 실적 발표 [2]*

### 2024-2025년 주요 개선점

- **손 민첩성 2배 증가**: 11 DoF에서 22 DoF로 확장 (2024년 10월 We, Robot 이벤트에서 시연)
- **텐던 구동 시스템**: 액추에이터를 전완부로 이동, 인간 손(27 DoF)에 근접한 움직임 구현
- **유연 글러브**: 물체 파지 시 적응형 그립
- **달리기 능력**: 2025년 12월 2일 공개 영상에서 ~6-8 mph (10-13 km/h) 달리기 시연, flight phase 확인
- **향상된 조작**: 계란 집기, 음료 따르기, 물건 전달, 캐치볼 등 섬세한 작업 시연
- **텔레오퍼레이션**: We, Robot 이벤트에서 바텐딩, 대화 등 상호작용은 원격 조종 사용 (Bloomberg 보도, Tesla 엔지니어 확인)

---

## AI 접근법

Tesla Optimus의 AI는 FSD(Full Self-Driving)에서 검증된 **End-to-End 신경망** 접근법을 기반으로 한다. [5]

### End-to-End 아키텍처

```
[카메라 입력] → [단일 신경망] → [모터 제어 출력]
     ↑              ↑              ↓
 Raw Pixels    학습된 표현    Steering/Actions
```

- **모듈러 vs End-to-End**: 기존 로봇은 인지-계획-제어 모듈을 분리 설계. Tesla는 단일 신경망이 모든 것을 처리
- **FSD 기술 전이**: FSD v12에서 30만 줄의 C++ 코드를 신경망으로 대체한 경험을 Optimus에 적용 [5]
- **Neural World Simulator**: FSD와 Optimus 모두 같은 "신경망 월드 시뮬레이터"에서 학습 및 검증 [6]

### 비전 중심 접근

- **LiDAR 미사용**: 카메라 기반 인지 시스템만 활용 (Tesla 철학과 일관)
- **Bot Brain**: 단일 Tesla SoC가 모든 연산 처리
- **Foundation Model**: 다양한 작업을 하나의 모델로 처리하는 "Foundation Model Architecture"

### 데이터 우위

- Tesla 공장에서 실제 작업 데이터 수집
- FSD에서 축적한 수십억 마일의 실세계 데이터 활용 노하우
- 시뮬레이션과 실제 환경 간 전이 학습

---

## 배포 현황

### 현재 상태 (2026년 1월 기준)

| 시기 | 마일스톤 | 상태 |
|------|----------|------|
| 2021년 8월 19일 | AI Day에서 Optimus 컨셉 발표 (배우가 로봇 수트 착용) | 완료 |
| 2022년 9월 | AI Day 2022에서 첫 프로토타입 공개 (Bumble-C, Optimus Gen 1) | 완료 |
| 2023년 12월 13일 | Gen 2 공개, 30% 빠른 보행, 계란 집기 시연 | 완료 |
| 2024년 7월 | 상하이 World AI Conference에서 Gen 2 공개 전시 | 완료 |
| 2024년 10월 10일 | "We, Robot" 이벤트에서 22 DoF 손 시연, 36대 이상 전시, 텔레오퍼레이션 사용 | 완료 |
| 2025년 | Tesla 공장에서 파일럿 배포 (수백 대), 12월 달리기 데모 공개 | 완료 |
| 2026년 1월 21일 | Gen 3 (V3) Fremont 공장에서 양산 시작 (Tesla 공식 발표) | 진행 중 |
| 2026년 말 | 수천 대 배포, 연간 100만대 생산 라인 구축 목표 | 목표 |
| 2027년 | 일반 판매 시작, Giga Texas에 1,000만대/년 시설 계획 | 목표 |

*주의: 2025년 목표 생산량(5,000-10,000대)은 달성되지 않음. 2025년 7월 기준 실제 생산량은 수백 대로 목표의 1/10 미만.*

### 생산 인프라 (발표 기준)

- **Fremont 공장**: 파일럿 라인 가동 중, 2026년 Gen 3 양산 라인 확대, 연간 100만대 생산 목표
- **Giga Texas**: 2025년 11월 부지 공사 시작, 연간 1,000만대 생산 시설 계획 (드론 촬영으로 확인)
- **장기 비전**: Tesla 2025 주주총회에서 Musk는 "역사상 가장 빠른 대규모 제품 생산 증가" 예고

### 초기 적용 분야

1. **Tesla 공장 내부**: 반복적, 위험한 작업 대체
2. **제조업 일반**: 조립, 물류, 검사 작업
3. **가정용**: 장기적으로 가사 노동 지원 목표

---

## 경쟁 비교

*가격은 추정치이며, 실제 상업 가격은 다를 수 있음*

| 항목 | Tesla Optimus | Boston Dynamics Atlas | Figure 01/02 | Agility Digit |
|------|---------------|----------------------|--------------|---------------|
| **철학** | 대량 생산, 실용성 | 연구, 동적 민첩성 | 작업장 자동화 | 물류 특화 |
| **구동** | 전기 액추에이터 | 전기 (이전 유압) | 전기 | 전기 |
| **무게** | ~47kg (Gen 2) | ~80kg (추정) | ~60kg (추정) | ~65kg |
| **가격** | $20-30K (목표) | 비매품 (연구용) | $100K+ (추정) | ~$250K (추정) |
| **상업화** | 2026년 양산 시작 | 2026년 Hyundai 배포 | 파일럿 진행 중 | 파일럿 진행 중 |
| **강점** | 가격, 생산 규모 | 동적 운동 능력 | 범용 조작 | 물류 검증 |

*출처: 업계 분석 종합 [7], [8]*

### Tesla의 차별화 요소

1. **가격**: 경쟁사 대비 5-10배 저렴한 목표 가격
2. **생산 규모**: 자동차 양산 노하우 활용
3. **AI 기술**: FSD에서 검증된 End-to-End 신경망
4. **수직 통합**: 배터리, 모터, 칩, SW 자체 생산

---

## 한계 및 도전 과제

1. **동적 능력**: Atlas 대비 점프, 회전 등 동적 움직임 미흡 (2025년 12월 달리기 시연으로 개선 중)
2. **실제 배포 지연**: 2025년 목표 생산량(5,000-10,000대) 미달성 (실제 수백 대)
3. **자율성 검증**: We, Robot 이벤트에서 텔레오퍼레이션 사용 논란, 완전 자율 작업 능력 미검증
4. **범용성 검증**: 실제 다양한 환경에서의 작업 수행 능력 미검증
5. **안전성**: 인간과 협업 시 안전 규정 및 인증 필요

---

## References

### 출처 번호

1. [Tesla Robot Price in 2026](https://standardbots.com/blog/tesla-robot) - Standard Bots 종합 분석
2. [Tesla Optimus Gen 3 Analysis](https://www.notateslaapp.com/news/3281/teslas-robotic-moonshot-optimus-gen-3) - Gen 3 기술 분석
3. [Tesla Eyes $20K Price Target](https://www.notateslaapp.com/news/3314/tesla-eyes-20k-price-target-for-optimus-extremely-fast-production-ramp) - 생산 및 가격 계획
4. [Tesla Shifts to AI](https://carboncredits.com/tesla-shifts-from-evs-to-ai-musk-says-robots-will-be-80-of-company-value/) - Musk 발언 인용
5. [Tesla's End-to-End Deep Learning](https://www.thinkautonomous.ai/blog/tesla-end-to-end-deep-learning/) - End-to-End 아키텍처 분석
6. [Tesla AI Chief Details Unified World Simulator](https://www.humanoidsdaily.com/news/tesla-ai-chief-details-unified-world-simulator-for-fsd-and-optimus) - FSD-Optimus 통합 시뮬레이터
7. [Boston Dynamics Atlas vs Tesla Optimus](https://briandcolwell.com/boston-dynamics-atlas-vs-teslas-optimus-comparing-modern-humanoid-robots/) - 주요 휴머노이드 비교
8. [Humanoid Robots Comparison](https://xpert.digital/en/robot-comparison/) - 업계 비교 분석

### 공식 자료

- [Tesla AI & Robotics](https://www.tesla.com/AI) - Tesla 공식 AI 페이지
- [Tesla AI Day 영상](https://www.youtube.com/watch?v=j0z4FweCy4M) - Optimus 발표 영상

---

## See Also

- [하드웨어 목록](../index)
- [Tesla](../../companies/tesla)
- [Boston Dynamics Atlas](atlas)
- [Figure 휴머노이드](figure)
