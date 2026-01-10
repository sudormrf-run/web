---
title: Apptronik Apollo
description: Apptronik의 범용 휴머노이드 로봇 - NASA Valkyrie 기술 계보를 잇는 안전 우선 협업 로봇
tags:
  - apptronik
  - apollo
  - humanoid
  - nasa
  - valkyrie
  - cobot
  - mercedes-benz
  - force-control
created: 2024-01-01
updated: 2026-01-09
category: hardware
---

# Apptronik Apollo

> Home > Hardware > Humanoids > Apollo

<!-- Image pending: ![Apollo](../../assets/hardware/humanoids/apollo.png) -->

---

## Overview

Apptronik Apollo는 텍사스 오스틴에 본사를 둔 Apptronik이 개발한 범용 휴머노이드 로봇이다. NASA의 Valkyrie 로봇 개발에 참여한 팀이 2016년 UT Austin의 Human Centered Robotics Lab에서 스핀아웃하여 설립한 회사로, **인간 중심의 안전한 협업 로봇** 철학을 핵심으로 한다. 가장 큰 특징은 Force Control 아키텍처를 통한 안전한 인간-로봇 협업과 **$50K 미만의 목표 가격**이다.

| 항목 | 스펙 |
|------|------|
| 제조사 | Apptronik (Austin, Texas) |
| 높이 | 5'8" (173cm) |
| 무게 | 160 lbs (72.6kg) |
| 페이로드 | 55 lbs (25kg) |
| 배터리 | 4시간 (핫스왑 가능) |
| 가동 시간 | 22시간/일 (배터리 교체 시) |
| 목표 가격 | <$50,000 |
| 센서 | 스테레오 비전, 토크 센서, IMU |

---

## 핵심 의의

Apollo의 가장 핵심적인 의의는 **실용적인 산업용 협업 로봇(Cobot)으로서의 휴머노이드**를 제시한 것이다.

### 왜 Apollo가 중요한가?

1. **NASA 기술 계보**: Apptronik 창업팀은 2013년 DARPA Robotics Challenge에서 NASA의 Valkyrie(R5) 로봇 개발에 참여했다. CTO Nick Paine은 NASA-JSC Valkyrie DRC 팀 출신으로, 극한 환경을 위한 견고한 로봇 설계 경험을 Apollo에 녹여냈다.

2. **Force Control 아키텍처**: 기존 산업용 로봇과 달리, Apollo는 각 관절의 토크 센서를 통해 실시간으로 외력을 감지하고 반응한다. 이는 Collaborative Robot(Cobot) 설계의 핵심 요소로, 인간과의 안전한 협업을 목표로 한다.

3. **모듈러 설계**: Apollo는 다리, 휠, 고정 플랫폼 등 다양한 이동 방식에 장착 가능하도록 모듈러 설계되었다. 이는 용도에 따라 유연하게 구성을 변경할 수 있음을 의미한다.

4. **경제적 접근성**: BOM(Bill of Materials) 기준 $50,000 미만을 목표로 하여, 기존 휴머노이드($100K-$250K)와 비교해 산업 현장에서 경제적으로 실현 가능한 수준을 추구한다.

---

## 회사 배경: Apptronik

### 창업 스토리

- **2013**: DARPA Robotics Challenge에서 NASA의 Valkyrie 로봇 프로젝트에 참여
- **2016**: UT Austin Human Centered Robotics Lab에서 스핀아웃하여 Apptronik 설립
- **설립자**: Dr. Nicholas Paine (CTO), Dr. Luis Sentis (Scientific Advisor) 등 4명의 공동 창업
- **미션**: "인간을 대체하는 것이 아닌, 인간을 돕는 로봇" 개발

### 펀딩 현황

| 시기 | 금액 | 주요 투자자 |
|------|------|-------------|
| ~2024 | $28M | 초기 투자 |
| 2025.02 | $350M (Series A 1차) | B Capital, Capital Factory, Google |
| 2025.03 | +$53M (Series A 추가) | Mercedes-Benz 등 (총 $403M) |

- Mercedes-Benz는 Series A 추가 라운드에서 "저~중간 두 자리 유로(약 $10-14M)"를 투자 (Reuters 보도)
- Google이 Series A에 참여

---

## 설계 철학

### Human-Centric Design

Apollo는 "인간 중심 로보틱스"라는 명확한 철학 위에 설계되었다.

```
[기존 비협업 산업용 로봇]
- 정밀한 위치 제어 우선
- 외부 충돌 무시, 경로 유지
- 일반적으로 안전 케이지 요구
- 인간과 분리된 공간에서 작업

[Apollo의 Force Control]
- 토크 센서 기반 실시간 외력 감지
- 충돌 시 유연하게 반응
- 안전 케이지 요구 감소 가능 (협업 로봇 설계)
- 인간과 같은 공간에서 협업 목표
```

### 주요 설계 원칙

1. **안전 우선**: Force Control 아키텍처로 인간과 안전하게 상호작용
2. **인간 환경 호환**: 인간과 유사한 크기(5'8", 160 lbs)로 기존 시설 개조 최소화 목표
3. **실용성 중심**: 화려한 동작보다 신뢰성과 작업 수행 능력에 집중
4. **LED 얼굴**: 상태 표시 및 상호작용 큐를 제공하는 인간 친화적 인터페이스

### 독자 기술: Linear Electric Actuators

- 13세대 이상에 걸쳐 개발된 독자적인 선형 전기 액추에이터
- 복잡성 감소, 비용 절감, 신뢰성 향상
- Texas Instruments와 협력하여 안전한 액추에이터 제어 시스템 개발

---

## Mercedes-Benz 파트너십

### 2024.03: 상업 계약 체결

Apptronik과 Mercedes-Benz는 Apollo의 **주요 상업적 배포 파트너십**을 발표했다.

| 항목 | 내용 |
|------|------|
| 발표일 | 2024년 3월 15일 |
| 의의 | Apptronik 주요 상업 파트너십, Mercedes-Benz 휴머노이드 파일럿 |
| 테스트 장소 | 베를린-마리엔펠데 Digital Factory Campus, 헝가리 공장 |

### 적용 분야

1. **부품 배송**: 조립 라인에 부품을 운반
2. **키팅 작업**: 조립용 부품 박스 운반
3. **품질 검사**: 부품 검사 수행

### 2025.03: Mercedes-Benz 투자 및 확대

- Mercedes-Benz가 Apptronik Series A에 직접 투자 (약 $10-14M)
- 생산 책임자 Joerg Burzer: "다른 공장으로 확대 배포 계획"
- 휴머노이드가 자동차 생산에서 인간 노동자와 실제로 협업하는 **초기 대규모 파일럿** 중 하나

---

## 산업 적용 분야

### 1차 목표: 제조 및 물류

| 적용 분야 | 작업 예시 |
|-----------|----------|
| 자동차 제조 | 부품 운반, 조립 키트 배송, 품질 검사 |
| 물류/창고 | 토트 운반, 픽킹, 팔레타이징 |
| 전자제품 제조 | 섬세한 부품 조립, 검사 |

### 2차 목표: 서비스 및 케어

- **호스피탈리티**: 호텔, 레스토랑 서비스 지원
- **헬스케어**: 병원 물류, 환자 보조
- **고령자 케어**: 장기적으로 고령자 돌봄 지원 목표

CEO Jeff Cardenas: "경제성이 맞는 지점에 도달했다. 공장과 창고는 파일럿 자금이 있는 첫 단계이고, 생산 규모 확대가 가격을 더 낮출 것이다."

---

## 경쟁 비교

| 항목 | Apptronik Apollo | Tesla Optimus | Figure 02 | Agility Digit |
|------|------------------|---------------|-----------|---------------|
| **철학** | 안전 협업, Force Control | 대량 생산, End-to-End AI | 범용 조작 | 물류 특화 |
| **높이** | 173cm | 173cm | ~175cm | ~175cm |
| **무게** | 72.6kg | 57kg | ~60kg | ~65kg |
| **페이로드** | 25kg | 20kg | 20kg | 16kg |
| **목표 가격** | <$50K | $20-30K | $100K+ | ~$250K |
| **배터리** | 4시간 (핫스왑) | 8시간 | ~5시간 | ~4시간 |
| **강점** | 안전성, NASA 계보 | 가격, 생산 규모 | 손 민첩성 | 물류 검증 |

### Apollo의 차별화 요소

1. **Force Control**: 토크 센서 기반 안전한 협업 설계
2. **페이로드**: 25kg으로 주요 경쟁 휴머노이드(Optimus 20kg, Digit 16kg) 대비 높은 편
3. **핫스왑 배터리**: 배터리 교체로 충전 대기 시간 최소화 (22시간/일 가동 가능)
4. **모듈러 설계**: 다리/휠/고정 등 다양한 구성 가능
5. **NASA 기술**: Valkyrie 로봇 개발 경험에서 검증된 기술

---

## 한계 및 도전 과제

1. **동적 능력**: Atlas, Optimus 대비 달리기, 점프 등 동적 움직임 시연 부족
2. **AI 역량**: Google이 Series A에 참여했으나, 독자 VLA 모델 부재
3. **생산 규모**: 2026년 Jabil과 양산 계획 발표, 실제 생산량 검증 필요
4. **시장 경쟁**: Tesla($20-30K 목표)와의 가격 경쟁에서 불리할 수 있음

---

## 타임라인

| 시기 | 이벤트 |
|------|--------|
| 2013 | NASA Valkyrie 프로젝트 참여 (DARPA Robotics Challenge) |
| 2016 | UT Austin에서 Apptronik 스핀아웃 |
| 2022 | NASA와 휴머노이드 상용화 파트너십 체결 |
| 2023.08 | Apollo 휴머노이드 공개 |
| 2024.03 | Mercedes-Benz와 상업 파일럿 계약 체결 |
| 2025.01 | CES 2025에서 Apollo 작업 시연 |
| 2025.02-03 | Series A $403M 클로징 ($350M + 추가 $53M, Mercedes-Benz, Google 참여) |
| 2026 | Jabil과 양산 시작 목표 |

---

## References

### 공식 자료
- [Apptronik 공식 사이트](https://apptronik.com/) - 회사 및 제품 정보
- [Apollo 제품 페이지](https://apptronik.com/apollo) - Apollo 상세 스펙
- [Apptronik About Us](https://apptronik.com/about-us) - 회사 연혁 및 팀

### Mercedes-Benz 파트너십
- [Apptronik-Mercedes 파트너십 발표](https://apptronik.com/news-collection/apptronik-and-mercedes-benz-enter-commercial-agreement) - 공식 보도자료
- [Reuters: Mercedes-Benz Apptronik 투자](https://www.reuters.com/technology/mercedes-benz-takes-stake-humanoid-robot-maker-apptronik-2025-03-04/) - 2025년 투자 보도

### 기술 분석
- [IEEE Spectrum: Apptronik Apollo](https://spectrum.ieee.org/humanoid-robot-apptronik-apollo) - 기술 상세 분석
- [TI-Apptronik 협력](https://www.ti.com/about-ti/company/case-study/apptronik.html) - 액추에이터 안전 시스템
- [Apollo 스펙 비교](https://qviro.com/product/apptronik/apollo/specifications) - 상세 스펙 데이터

### 뉴스 및 분석
- [TechCrunch: Apollo at CES 2025](https://techcrunch.com/2025/01/09/apptroniks-apollo-humanoid-robot-gets-to-work-at-ces-2025/) - CES 2025 시연
- [TechCrunch: $350M Series A](https://techcrunch.com/2025/02/13/apptronik-raises-350m-to-build-humanoid-robots-with-help-from-google/) - 2025.02 Series A 펀딩
- [Apptronik $403M Series A 클로즈](https://apptronik.com/news-collection/apptronik-closes-additional-series-a-funding) - 2025.03 추가 라운드
- [Robot Report: Apollo 공개](https://www.therobotreport.com/apptronik-unveils-apollo-humanoid-robot/) - 초기 공개 분석

### NASA 연계
- [NASA-Apptronik 파트너십](https://www.iotworldtoday.com/robotics/nasa-apptronik-partner-to-commercialize-humanoid-robots) - NASA 협력 배경

---

## See Also

- [하드웨어 목록](../index.md)
- [Tesla Optimus](optimus.md)
- [Figure 휴머노이드](figure.md)
- [Agility Digit](digit.md)
- [Boston Dynamics Atlas](atlas.md)
