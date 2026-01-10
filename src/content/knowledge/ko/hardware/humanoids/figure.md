---
title: Figure 휴머노이드
description: Figure AI의 고성능 휴머노이드 로봇 - Figure 01, 02, 03 세대별 진화
tags: [figure, humanoid, helix, vla, bmw, brett-adcock, figure-01, figure-02, figure-03]
category: hardware
---

# Figure 휴머노이드

> Home > Hardware > Humanoids > Figure

---

## Overview

Figure AI는 2022년 Brett Adcock가 설립한 미국의 로보틱스 기업으로, AI 기반 범용 휴머노이드 로봇 개발에 집중하고 있습니다. Archer Aviation과 Vettery를 창업한 연쇄 창업가 Adcock이 이끄는 Figure AI는 빠른 속도로 휴머노이드 시장의 선두 주자로 부상했습니다. [^wiki]

<!-- Image pending: ![Figure 02](../../assets/hardware/humanoids/figure.png) -->

| 항목 | 내용 |
|------|------|
| 회사명 | Figure AI, Inc. |
| 설립자 | Brett Adcock (CEO) |
| 설립년도 | 2022년 |
| 본사 | Sunnyvale, California |
| VLA 모델 | Helix (비전-언어-행동 모델) |
| 타겟 시장 | 산업용 (제조, 물류), 가정용 |

---

## 핵심 의의

Figure AI의 휴머노이드는 다음과 같은 점에서 Physical AI 분야에서 중요한 의미를 가집니다:

- **최초의 상용 휴머노이드 제조 배포** (Figure AI 주장): BMW 공장에서 실제 생산 라인에 투입된 범용 휴머노이드 [^bmw]
- **수직 통합 AI 전략**: OpenAI 파트너십을 종료하고 자체 Helix VLA 개발로 전환 (2025년 2월) [^techcrunch]
- **고성능 하드웨어-소프트웨어 통합**: 200Hz 전신 제어가 가능한 Helix VLA와 최적화된 하드웨어의 결합 [^helix]
- **급격한 원가 절감 목표**: Figure 03에서 부품 비용 90% 절감을 목표로, 대량생산 시 $20,000 이하 가격대 지향 [^figure03]
- **대규모 생산 인프라**: BotQ 공장에서 연간 12,000대 생산 목표 (2025년 3월 발표) [^wiki]
- **실증된 산업 성과**: BMW 공장에서 30,000대 이상의 X3 생산에 기여 [^bmw]

---

## 세대별 비교

| 항목 | Figure 01 (2023) | Figure 02 (2024) | Figure 03 (2025) |
|------|------------------|------------------|------------------|
| **목적** | 프로토타입 | 산업용 파일럿 | 상용 대량생산 |
| **높이** | ~170cm | ~170cm | 168cm (5'6") |
| **무게** | - | ~66kg | 60kg (-9%) |
| **손 자유도 (DoF)** | 기본 그리퍼 | 16 DoF | 개선된 디자인 |
| **전체 자유도 (DoF)** | - | 35 DoF | 35+ DoF |
| **손 페이로드** | - | 25kg | 25kg |
| **카메라** | 기본 | 6x RGB | 8x (손바닥 2개 포함) |
| **배터리** | - | 내장형 | 2.3 kWh (5시간) |
| **충전 방식** | 유선 | 유선 | 무선 유도 (2kW) |
| **컴퓨팅** | 기본 | NVIDIA RTX 듀얼 | 듀얼 GPU (S1/S2) |
| **제조 방식** | 수작업 | CNC 가공 | 다이캐스팅/사출성형 |
| **목표 가격** | - | $100K+ | $20K 이하 (목표) |

*출처: Wikipedia, Figure AI 공식 발표*

---

## Figure 01

2023년 3월 공식 발표된 Figure AI의 첫 번째 휴머노이드 로봇입니다. [^wiki]

### 주요 특징

- **이족보행 로봇**: 물류 및 창고 작업 타겟
- **기본 조작 능력**: 계단 오르기, 상자 들기, 도구 사용
- **OpenAI 통합**: 대규모 언어 모델을 활용한 음성 대화 및 추론 능력
- **인간 수준의 손재주**: 정밀함과 협응이 필요한 작업 수행 가능

---

## Figure 02

2024년 8월 6일 발표된 2세대 휴머노이드로, 산업용 배포를 위한 본격적인 단계입니다. [^wiki]

### 주요 특징

| 항목 | 스펙 |
|------|------|
| 손 자유도 (DoF) | 16 (5손가락 양손) |
| 전체 자유도 (DoF) | 35 |
| 손 페이로드 | 최대 25kg |
| 카메라 | 6x RGB |
| 컴퓨팅 | 듀얼 NVIDIA RTX GPU (이전 대비 3x) |
| 센서 | RGB 카메라, IMU (관성 측정 장치), 자이로스코프, 힘 센서, 비접촉 감지, 마이크, 스피커 |

### 주요 개선점

- 팔다리에 케이블 통합 설계
- 토르소에 배터리 통합
- 온보드 VLM (비전 언어 모델) 탑재
- 실시간 인식, 의사결정, 실행 가능

---

## Figure 03

2025년 10월 발표된 3세대 휴머노이드로, 가정용과 상업용 모두를 타겟으로 한 대량생산 모델입니다. [^figure03]

### 물리적 사양

| 항목 | 스펙 |
|------|------|
| 높이 | 168cm (5'6") |
| 무게 | 60kg (Figure 02 대비 -9%) |
| 배터리 | 2.3 kWh (커스텀) |
| 작동 시간 | 약 5시간 (300분) |
| 충전 | 무선 유도 2kW (발바닥 코일) |
| 데이터 전송 | 10 Gbps mmWave |

### 센서 시스템

- **카메라**: 8개 (메인 6개 + 손바닥 2개)
- **촉각 센서**: 손끝에 커스텀 센서 (3g까지 감지 - 클립 무게)
- **비전 시스템**: 2배 프레임레이트, 1/4 지연시간, 60% 넓은 시야각 (FOV)

### 오디오 시스템

- 스피커: 2배 크기, 4배 출력
- 마이크: 위치 재조정으로 명확성 향상
- 실시간 음성 대화 (Speech-to-Speech) 지원

### 안전 기능

- 다밀도 폼으로 핀치 포인트 보호
- 부드러운 텍스타일 외장 (경질 금속 대신)
- UN38.3 인증 배터리 (BMS, 셀, 인터커넥트, 팩 레벨 보호)

### 제조 혁신

- **제조 방식 전환**: CNC 가공 -> 다이캐스팅, 사출성형, 스탬핑
- **부품 비용 절감 목표**: 90% 절감
- **목표 가격**: $20,000 이하 (대량생산 시)
- **손목 재설계**: BMW 배포에서 배운 교훈 반영, 분배 보드와 동적 케이블링 제거

---

## Helix VLA

Helix는 Figure AI가 2025년 2월 발표한 자체 개발 VLA (Vision-Language-Action, 비전-언어-행동) 모델입니다. Figure AI는 Helix를 "휴머노이드 전신을 고속 연속 제어하는 최초의 VLA"라고 소개합니다. [^helix]

### 아키텍처

**System 1 / System 2 듀얼 시스템 구조**:

| 시스템 | 역할 | 주파수 | 파라미터 |
|--------|------|--------|----------|
| System 2 (S2) | 고수준 계획, VLM (비전 언어 모델) | 7-9 Hz | 7B |
| System 1 (S1) | 저수준 제어, 실시간 | 200 Hz | 80M |

### 핵심 특징

- **35 자유도 (DoF) 제어**: 손가락, 손목, 토르소, 머리까지 전체 상체 제어
- **Figure AI가 주장하는 최초 기록들**:
  - 휴머노이드 전신 고속 연속 제어 VLA
  - 듀얼 로봇 동시 제어 VLA
  - 임베디드 저전력 GPU에서 완전 온보드 실행 VLA
- **학습 효율성**: 약 500시간의 텔레오퍼레이션 데모로 학습
- **범용성**: 태스크별 적응 불필요, 단일 가중치로 다양한 태스크 수행

### 대표 성능: Table-to-Dishwasher

| 항목 | 수치 |
|------|------|
| 이동 거리 | 130+ 피트 |
| 고유 상호작용 | 33회 |
| 처리 물체 | 21개 (섬세한 식기 포함) |

Figure AI에 따르면 "로봇이 자율적으로 수행한 가장 복잡한 태스크"로 평가됨. [^helix]

---

## 산업 배포

### BMW 공장 파일럿 (2024-2025)

Figure AI에 따르면, 범용 휴머노이드를 자동차 생산 시설에 상용 배포한 첫 사례입니다. [^bmw] [^bmwpress]

| 항목 | 내용 |
|------|------|
| 위치 | BMW 스파르탄버그 공장 (사우스캐롤라이나) |
| 기간 | 11개월 |
| 투입 로봇 | Figure 02 2대 |
| 작업 시간 | 주 5일, 10시간 교대 |
| 총 가동 시간 | 1,250시간 |

### 성과

- **처리 부품**: 90,000개 이상의 판금 부품 로딩
- **생산 기여**: 30,000대 이상의 BMW X3 생산에 기여
- **작업 내용**: 판금 부품을 랙/빈에서 집어 용접 장비에 배치

### 성능 요구사항

| 항목 | 기준 |
|------|------|
| 배치 정밀도 | 5mm 허용 오차 내 |
| 단일 동작 시간 | 2초 |
| 부품 로딩 시간 | 37초 |
| 전체 사이클 시간 | 84초 |
| 성공률 목표 | 교대당 99% |

### 배운 교훈

BMW 배포에서 얻은 주요 교훈이 Figure 03 설계에 반영되었습니다:
- **팔뚝 문제**: 최다 하드웨어 고장 지점 -> Figure 03에서 손목 전자장치 완전 재설계
- **열 관리**: 좁은 패키징과 민첩성 요구로 인한 문제 -> 분배 보드 및 동적 케이블링 제거

---

## 펀딩 및 기업가치

### 투자 이력

| 시기 | 라운드 | 금액 | 기업가치 | 주요 투자자 |
|------|--------|------|----------|-------------|
| 2023년 | Series A | ~$70M | - | 초기 투자자 |
| 2024.02 | Series B | $675M | $2.6B | Jeff Bezos, Microsoft, NVIDIA, Intel, Amazon, OpenAI |
| 2025.09 | Series C | $1B | $39B | Intel, NVIDIA, Qualcomm, T-Mobile, Salesforce, Brookfield |

*출처: [Wikipedia](https://en.wikipedia.org/wiki/Figure_AI), [PRNewswire](https://www.prnewswire.com/news-releases/figure-raises-675m-at-2-6b-valuation-and-signs-collaboration-agreement-with-openai-302074897.html)*

**누적 펀딩**: 약 $1.7B+ (Series A + B + C)

### OpenAI 파트너십

- **2024년 2월**: OpenAI와 협업 계약 체결, 휴머노이드용 차세대 AI 모델 공동 개발 [^seriesb]
- **2025년 2월**: 파트너십 종료, 자체 AI 개발로 전환 [^techcrunch]
- **이유**: "실제 세계에서 대규모로 Embodied AI를 해결하려면 로봇 AI를 수직 통합해야 한다" - Brett Adcock

---

## 향후 계획

- **BotQ 공장**: 2025년 3월 발표, 연간 12,000대 생산 목표 [^wiki]
- **4년 내 10만대 출하** 계획 (로드맵)
- **가정용 시장 진출**: Figure 03의 가사 도우미 역할 (빨래, 청소, 식기세척기 등) [^figure03]

---

## 용어 설명

| 용어 | 설명 |
|------|------|
| VLA | Vision-Language-Action (비전-언어-행동) 모델. 시각 입력, 언어 이해, 행동 출력을 통합한 AI 모델 |
| VLM | Vision-Language Model (비전 언어 모델). 이미지와 텍스트를 함께 이해하는 AI 모델 |
| DoF | Degrees of Freedom (자유도). 로봇이 움직일 수 있는 독립적인 방향의 수 |
| IMU | Inertial Measurement Unit (관성 측정 장치). 가속도와 각속도를 측정하는 센서 |
| FOV | Field of View (시야각). 카메라가 볼 수 있는 범위 |

---

## References

[^wiki]: [Figure AI Wikipedia](https://en.wikipedia.org/wiki/Figure_AI)
[^helix]: [Figure AI - Helix 발표](https://www.figure.ai/news/helix)
[^figure03]: [Figure 03 발표](https://www.figure.ai/news/introducing-figure-03)
[^bmw]: [Figure AI - BMW 생산 기여](https://www.figure.ai/news/production-at-bmw)
[^bmwpress]: [BMW 공식 보도자료](https://www.press.bmwgroup.com/global/article/detail/T0444265EN/successful-test-of-humanoid-robots-at-bmw-group-plant-spartanburg)
[^seriesb]: [Series B 펀딩 발표](https://www.prnewswire.com/news-releases/figure-raises-675m-at-2-6b-valuation-and-signs-collaboration-agreement-with-openai-302074897.html)
[^techcrunch]: [Figure drops OpenAI - TechCrunch](https://techcrunch.com/2025/02/04/figure-drops-openai-in-favor-of-in-house-models/)

**추가 참고 자료**:
- [Figure AI 공식 사이트](https://www.figure.ai/)
- [Brett Adcock Wikipedia](https://en.wikipedia.org/wiki/Brett_Adcock)

---

## See Also

- [하드웨어 목록](../index.md)
- [Figure AI](../../companies/figure.md)
- [Figure Helix](../../models/figure-helix.md)
- [Tesla Optimus](optimus.md)

