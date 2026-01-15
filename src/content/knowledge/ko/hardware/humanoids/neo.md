---
title: 1X NEO
description: 1X Technologies의 가정용 휴머노이드 로봇
tags: [1x, neo, humanoid, redwood-ai, home-robot, tendon-drive, consumer]
category: hardware
company: 1X Technologies
origin: Norway

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# 1X NEO

> Home > Hardware > Humanoids > NEO

<!-- Image pending: ![1X NEO](../../assets/hardware/humanoids/neo.png) -->

---

## Overview

**1X NEO**는 노르웨이 기반 로보틱스 기업 **1X Technologies**가 개발한 **소비자용 가정 휴머노이드 로봇**이다. OpenAI의 투자를 받은 1X는 인간과 안전하게 공존할 수 있는 로봇을 목표로, 독자적인 텐던 구동 시스템과 Redwood AI VLA 모델을 결합하여 가정 환경에 최적화된 휴머노이드를 선보였다.

| 항목    | 스펙                                 | 출처     |
| ----- | ---------------------------------- | ------ |
| 제조사   | 1X Technologies                    | [1]    |
| 본사    | 노르웨이 Moss (2024년 미국 Palo Alto로 이전) | [3][4] |
| 높이    | 약 165-168cm (5'5"-5'6")            | [1][5] |
| 무게    | 약 30kg (66 lbs)                    | [1]    |
| 들기 용량 | 68kg (150 lbs) 이상 (발표 기준)          | [1]    |
| 운반 용량 | 약 25kg (55 lbs)                    | [1]    |
| 손 자유도 | 22 DOF (총 75 DOF 발표)               | [1]    |
| 이동 속도 | 보행 약 4km/h, 최대 약 12km/h            | [1]    |
| 배터리   | 842Wh, 약 4시간 동작 (발표 기준)            | [1]    |
| 충전 시간 | 약 24분 (급속 충전, 발표 기준)               | [1]    |
| 소음 수준 | 약 22dB (발표 기준)                     | [1]    |
| 방수 등급 | 손: IP68, 본체: IP44 (발표 기준)          | [1]    |
| 구동 방식 | 텐던 구동 (Tendon Drive)               | [1]    |
| AI 모델 | Redwood AI                         | [2]    |
| 목표 가격 | $20,000 (월 $499 구독 옵션)             | [1][6] |

> **Note**: 일부 스펙은 출처에 따라 약간의 차이가 있을 수 있으며, 위 수치는 1X 공식 발표 기준이다.

---

## 핵심 의의

NEO의 핵심 의의는 **휴머노이드의 소비자 가정 시장 진입 시도**이다. 기존 휴머노이드 로봇들이 산업용이나 연구용에 국한되었던 반면, NEO는 처음부터 **일반 가정**을 타겟으로 설계되었다.

### 가정용 로봇의 새로운 패러다임

- **접근 가능한 가격**: $20,000라는 목표 가격은 자동차 수준의 가격대로, 프리미엄 가전제품처럼 일반 가정에서 구매 가능한 수준
- **안전 우선 설계**: 어린이, 반려동물, 노인이 있는 환경에서 안전하게 작동하도록 설계
- **점진적 학습**: 출시 시점에는 기본 작업 수행, 시간이 지남에 따라 소프트웨어 업데이트로 능력 확장
- **Human-in-the-Loop**: 알 수 없는 작업은 1X Expert가 원격으로 안내하여 새로운 작업 학습

### 왜 가정용인가?

가정 환경은 로보틱스에서 가장 도전적인 환경 중 하나다:
- **비정형 환경**: 매일 달라지는 물건 배치
- **다양한 객체**: 수천 가지 다양한 물건들
- **인간과의 상호작용**: 예측 불가능한 인간 행동 대응
- **안전 요구사항**: 무방비 상태의 가족 구성원 보호

NEO는 이러한 도전을 정면으로 받아들이며, **데이터 플라이휠** 효과를 목표로 한다: 가정에서 운영되는 NEO가 더 많은 데이터를 생성하고, 이는 Redwood AI를 개선하며, 개선된 AI가 더 나은 NEO를 만든다.

---

## 안전 설계

NEO의 안전 설계 철학은 **본질적 안전성(Intrinsic Safety)**에 기반한다. 소프트웨어 제어에만 의존하지 않고, 하드웨어 자체가 안전하도록 설계되었다.

### 텐던 구동 시스템 (Tendon Drive)

1X의 텐던 구동 시스템(Tendon Drive)은 NEO의 핵심 안전 기술이다 [1]:

| 특성 | 설명 |
|------|------|
| 구조 | 고토크 밀도 모터 + 유연한 폴리머 텐던 |
| 백드라이빙 | 높은 역구동성 (발표 기준 약 95%) |
| 충격 흡수 | 낮은 충격력, 부드러운 움직임 |
| 생체 모방 | 인간의 근육-건 구조 모방 |

**왜 텐던 구동인가?**

전통적인 로봇은 모터가 관절에 직접 연결되어 강성(rigid)이 높다. 이는 충돌 시 높은 충격력을 전달한다. 반면 텐던 구동은:

1. **자연스러운 순응성**: 텐던이 충격을 흡수하여 충돌 시 자연스럽게 양보
2. **부드러운 움직임**: 저크(jerk)가 적어 급격한 움직임 방지
3. **조용한 작동**: 저소음으로 가정 환경에 적합
4. **높은 토크 밀도**: 안전성을 유지하면서도 높은 들기 용량 확보

### 추가 안전 기능

- **소프트 외피**: 3D 격자 폴리머로 덮인 변형 가능한 외피
- **핀치 방지**: 모든 관절이 외부 접근 불가능하게 덮여 있음
- **상황 인식**: 시각 및 오디오 시스템을 통한 환경 인식
- **원격 안내**: Human-in-the-loop 방식으로 알 수 없는 상황 대처

---

## 버전 히스토리

| 버전 | 공개 시기 | 주요 특징 | 출처 |
|------|----------|----------|------|
| **NEO Beta** | 2024년 8월 | 초기 프로토타입, 기본 이족 보행 시연 | [5] |
| **NEO Gamma** | 2025년 2월 | 향상된 손재주, 세련된 디자인, Redwood AI 통합 강화 | [5] |
| **NEO (Consumer)** | 2025년 10월 | 소비자용 버전 사전 예약 시작, 2026년 미국 배송 예정 | [6] |

> **Note**: 정확한 공개일은 공식 발표 자료를 참조할 것.

---

## Redwood AI 통합

**Redwood AI**는 1X가 자체 개발한 Vision-Language-Action (VLA) 모델로, NEO의 "두뇌" 역할을 한다 [2].

### 기술 아키텍처 (발표 기준)

| 구성 요소 | 설명 |
|----------|------|
| 모델 크기 | Transformer 기반 (구체적 파라미터 수는 공식 발표 참조) |
| 실행 환경 | NEO 온보드 GPU (발표 기준) |
| 실행 속도 | 수 Hz 수준 (발표 기준 약 5Hz) |
| 입력 | 사전학습된 언어 임베딩 + 비전 토큰 + 고유수용성 임베딩 |
| 출력 | Diffusion Policy를 통한 행동 생성 |

### 핵심 특징: 전신 제어 (Whole-Body Control)

Redwood의 가장 큰 기술적 차별점은 **보행과 조작의 통합 제어**다:

- 대부분의 로봇 시스템: 걷기(locomotion)와 조작(manipulation)을 분리
- Redwood: 하나의 모델이 전신을 통합 제어

이를 통해 가능한 행동:
- 바닥의 옷을 줍기 위해 엉덩이와 척추를 구부리며 손을 뻗기
- 무거운 문을 열 때 한 손으로 지지하며 균형 잡기
- 계단을 오르며 물건 운반하기

### 입력 처리

```
[언어 임베딩] + [비전 토큰] + [고유수용성 임베딩]
                    ↓
            Transformer 블록들
                    ↓
              잠재 표현 벡터
                    ↓
            Diffusion Policy
                    ↓
              NEO 행동 출력
```

### 음성 제어

- 오프보드 Speech-to-Speech LLM 활용
- 대화 컨텍스트에서 사용자 의도 추출
- 문장 인코더로 명령을 벡터화
- Redwood 모델에 입력하여 실행

### 학습과 일반화

- **데이터 소스**: EVE와 NEO 플랫폼의 원격 조종 및 자율 에피소드
- **실패에서 학습**: 성공뿐 아니라 실패 데이터도 활용
- **강건한 일반화**: 처음 보는 물건도 다양한 위치에서 집어올리기 가능

---

## 1X Technologies 회사 정보

| 항목 | 내용 |
|------|------|
| 설립 | 2014년 (구 Halodi Robotics) |
| 창업자/CEO | Bernt Bornich (Bernt Børnich) |
| 본사 | 노르웨이 Moss에서 설립, 이후 미국 Palo Alto로 이전 |
| 주요 투자자 | OpenAI, Tiger Global, EQT Ventures, Samsung NEXT |
| 총 투자 유치 | $137M 이상 (2024년 기준) |

### 투자 히스토리

| 시기 | 라운드 | 금액 | 주요 투자자 | 출처 |
|------|--------|------|------------|------|
| 2023년 3월 | Series A2 | $23.5M | OpenAI Startup Fund (리드), Tiger Global | [4] |
| 2024년 1월 | Series B | $100M | EQT Ventures, Samsung NEXT | [4] |

### OpenAI와의 파트너십

1X는 2022년 여름 ChatGPT 출시 이전에 OpenAI에 연락했다. 이후 OpenAI의 언어 모델과 embodied learning 모델을 로봇에 통합하여, 자연어로 명령을 이해하고 학습하는 시스템을 구축했다 [4].

---

## See Also

- [하드웨어 목록](../index)
- [1X Technologies](../../companies/1x)
- [Redwood AI](../../models/redwood-ai)
- [텐던 구동 시스템](../../fundamentals/actuation/tendon-drive)

---

## References

1. [1X Technologies 공식 - NEO Home Robot](https://www.1x.tech/discover/neo-home-robot)
2. [1X Technologies 공식 - Redwood AI](https://www.1x.tech/discover/redwood-ai)
3. [1X Technologies 공식 - About](https://www.1x.tech/about)
4. [TechCrunch - OpenAI-backed 1X raises another $100M](https://techcrunch.com/2024/01/11/openai-backed-1x-raises-another-100m-for-the-race-to-humanoid-robots/)
5. [The Robot Report - NEO humanoid designed for household use](https://www.therobotreport.com/1x-announces-pre-order-launch-neo-humanoid-robot/)
6. [Business Wire - 1X Launches NEO](https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home)
