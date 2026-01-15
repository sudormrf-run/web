---
title: Redwood AI (1X Technologies)
description: 1X Technologies의 NEO 휴머노이드용 Vision-Language-Action 모델
tags: [redwood-ai, 1x, neo, humanoid, world-model, vla, home-robot]
category: models

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

- **소비자 휴머노이드 최초 배포**: NEO 로봇과 함께 실제 가정에 배포되는 VLA - $20,000 가격대
- **온보드 실행**: 160M 파라미터로 로봇 내장 GPU에서 5Hz로 실행, 클라우드 의존 없음
- **World Model 혁신**: 1XWM으로 실제 실행 전 태스크 성공률 예측, 정책 선택 가속화
- **Cross-Embodiment**: EVE(바퀴형)와 NEO(휴머노이드) 모두 지원하는 단일 모델
- **Hybrid 운영**: AI 자율 + 원격 전문가 감독의 하이브리드 아키텍처
- **안전 중심 설계**: 텐던 구동 방식으로 본질적 안전성 확보
- **OpenAI 투자**: $240M 펀딩, OpenAI가 주요 투자자

---

## Overview

Redwood AI는 1X Technologies가 개발한 휴머노이드 로봇용 VLA 모델입니다. 160M 파라미터의 비전-언어 트랜스포머로, NEO 로봇의 내장 GPU에서 실행되어 가정 내 다양한 태스크를 수행합니다.

| 항목 | 내용 |
|------|------|
| 회사 | 1X Technologies (노르웨이/미국) |
| 로봇 | NEO (휴머노이드), EVE (바퀴형) |
| 파라미터 | 160M |
| 추론 속도 | ~5Hz |
| 실행 환경 | 온보드 GPU |
| 공식 사이트 | [1x.tech/ai](https://www.1x.tech/ai) |

---

## Architecture

Redwood AI는 **VLM + Diffusion Policy + RL Controller** 구조입니다.

```
┌─────────────────────────────────────────────────────────────┐
│                   Redwood AI Architecture                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│   │  Vision  │  │  Audio   │  │ Language │                 │
│   │  Input   │  │  Input   │  │  Input   │                 │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘                 │
│        │             │             │                        │
│        └─────────────┴─────────────┘                        │
│                      │                                       │
│        ┌─────────────▼─────────────┐                        │
│        │   Vision-Language Model   │  160M 파라미터         │
│        │   (Cognitive Prediction)  │                        │
│        └─────────────┬─────────────┘                        │
│                      │                                       │
│        ┌─────────────▼─────────────┐                        │
│        │    Diffusion Policy       │  액션 디코딩           │
│        │    Decoder                │                        │
│        └─────────────┬─────────────┘                        │
│                      │                                       │
│        ┌─────────────▼─────────────┐                        │
│        │    RL Mobility            │  전신 제어             │
│        │    Controller             │                        │
│        └─────────────┬─────────────┘                        │
│                      │                                       │
│                      ▼                                       │
│               NEO Robot Actions                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Model Components

| 구성 요소 | 역할 |
|----------|------|
| **Vision-Language Model** | 160M 파라미터, 시각-언어 이해 |
| **Cognitive Prediction Heads** | 손 위치, 물체 위치 예측으로 일반화 향상 |
| **Diffusion Policy Decoder** | 연속 액션 생성 |
| **RL Mobility Controller** | 보행, 계단, 앉기/서기 등 전신 이동 |

### Onboard AI Stack (1X Cortex)

| 기능 | 설명 |
|------|------|
| **LLM** | 대화형 제어 및 지식 접근 |
| **Audio Intelligence** | 음성 인식, 선택적 청취 |
| **Visual Intelligence** | 상황 인식, 물체 인식 |
| **Memory** | 대화 연속성, 과거 맥락 기억 |

---

## 1X World Model (1XWM)

Redwood AI의 핵심 혁신 - **물리 기반 생성형 시뮬레이터**

### 개념

```
실제 실행 없이 태스크 성공률 예측
    ↓
정책 후보들 빠르게 비교
    ↓
최적 체크포인트 선택
```

### 아키텍처

| 입력 | 처리 | 출력 |
|------|------|------|
| 비디오 프레임 | 잠재 표현 인코딩 | 미래 프레임 예측 |
| 로봇 관측 | 물리 시뮬레이션 | 상태 가치 (성공 확률) |
| 액션 궤적 | 다중 미래 생성 | 정책 평가 점수 |

### 핵심 특징

| 특징 | 설명 |
|------|------|
| **Action-Controllable** | 텍스트가 아닌 정확한 로봇 궤적으로 제어 |
| **다중 미래 생성** | 같은 시작점에서 다양한 결과 예측 |
| **태스크 간 전이** | 복합 데이터셋 학습이 단일보다 우수 |
| **스케일링** | 데이터 증가에 따른 정확도 향상 확인 |

### 성능

| 메트릭 | 결과 |
|--------|------|
| 예측-실제 상관관계 | 강함 |
| 정책 선택 정확도 | 90% (실제 격차 15%+ 시) |
| 필요 정확도 | 70%만으로도 유효한 정책 선택 |

### 한계

- 학습 데이터에 없는 물체에서 정확도 저하
- 누적 위치 오류가 있는 이동 태스크에서 어려움

---

## Mobility Controller

NEO의 전신 이동을 담당하는 RL 기반 컨트롤러

### 지원 동작

| 동작 | 설명 |
|------|------|
| 걷기 | 모든 방향 자연스러운 보행 |
| 계단 | 스테레오 비전 기반 계단 오르내리기 |
| 앉기/서기 | 자연스러운 자세 전환 |
| 무릎 꿇기 | 낮은 높이 작업 지원 |
| 달리기 | 빠른 이동 |
| 사이드스텝 | 좁은 공간 탐색 |

### 학습 방법

```
Motion Capture 데이터 → Kinematic Planner → 인간 유사 궤적 생성
                              ↓
               RL Controller → 균형 유지하며 궤적 추적
```

- **완전 시뮬레이션 학습**: 물리 랜덤화로 실제 환경 강건성 확보
- **2단계 설계**: 고수준 동작 계획 + 저수준 균형 제어

---

## Capabilities

### End-to-End Mobile Manipulation

| 태스크 | 설명 |
|--------|------|
| 물체 가져오기 | 사용자 요청 물체 검색 및 전달 |
| 문 열기 | 이동하며 문 조작 |
| 정리 정돈 | 물체를 적절한 위치로 이동 |
| 가전 사용 | 에어프라이어, 전자레인지 등 조작 |

### Multi-Contact Manipulation

| 특징 | 설명 |
|------|------|
| 브레이싱 | 한 손으로 지지하며 다른 손으로 조작 |
| 양손 협응 | 양팔 동시 사용 |
| 전신 활용 | 이동과 조작 동시 수행 |

### 멀티모달 인텔리전스

| 모달리티 | 기능 |
|----------|------|
| **시각** | 물체 인식, 장면 이해, 재료 인식 |
| **청각** | 음성 명령, 선택적 주의 |
| **언어** | 자연어 대화, 지식 제공 |
| **기억** | 대화 연속성, 사용자 선호 학습 |

---

## Hardware: NEO

Redwood AI가 탑재되는 휴머노이드 로봇

| 항목 | 스펙 |
|------|------|
| 높이 | 5피트 5인치 (165cm) |
| 무게 | 66파운드 (30kg) |
| 구동 방식 | 텐던 구동 (본질적 안전) |
| 가격 | ~$20,000 |
| 출시 | NEO Beta (2024.08), NEO Gamma (2025.02) |

### 안전성

- **텐던 구동**: 모터가 관절에서 분리되어 충돌 시 유연
- **경량 설계**: 30kg으로 인간과 안전한 상호작용
- **컴플라이언스**: 외력에 순응하는 제어

---

## Hybrid Operation

1X의 독특한 접근 - **AI 자율 + 인간 감독**

```
┌────────────────────────────────────────────────────┐
│                  Hybrid Operation                   │
├────────────────────────────────────────────────────┤
│                                                     │
│   NEO 자율 실행                                     │
│        │                                            │
│        ├── 성공 → 태스크 완료                       │
│        │                                            │
│        └── 어려움 → 1X Expert 원격 감독             │
│                      │                              │
│                      └── 새 스킬 학습               │
│                                                     │
└────────────────────────────────────────────────────┘
```

| 모드 | 설명 |
|------|------|
| **자율** | Redwood AI가 독립적으로 태스크 수행 |
| **원격 감독** | 복잡한 태스크 시 1X 전문가가 텔레오퍼레이션 |
| **학습** | 감독 데이터로 모델 지속 개선 |

---

## Training

### 데이터 소스

| 소스 | 설명 |
|------|------|
| 텔레오퍼레이션 | 가정/사무실에서 인간 조종 데이터 |
| 자율 에피소드 | 로봇 자체 실행 데이터 |
| 성공/실패 모두 | 다양한 결과에서 학습 |

### 학습 방법

| 방법 | 용도 |
|------|------|
| **Imitation Learning** | 인간 시연에서 기본 스킬 학습 |
| **Reinforcement Learning** | 이동 제어, 정책 개선 |
| **World Model** | 빠른 정책 평가 및 선택 |

### Cross-Embodiment

| 로봇 | 형태 |
|------|------|
| EVE | 바퀴형 상체 로봇 |
| NEO | 이족보행 휴머노이드 |

단일 Redwood 모델이 두 플랫폼 모두 지원

---

## Evolution

### NEO 버전 히스토리

| 버전 | 시기 | 특징 |
|------|------|------|
| **NEO Beta** | 2024.08 | 초기 프로토타입, 50-100M VLM |
| **NEO Gamma** | 2025.02 | 향상된 손재주, Redwood AI 배포 |
| **NEO (소비자)** | 2025.10 | $20,000 가정용 출시 |

### Redwood AI 발전

| 시기 | 발전 |
|------|------|
| 초기 | 50-100M 파라미터 VLM |
| 현재 | 160M VL-Transformer + Diffusion |
| World Model | 1XWM으로 정책 평가 가속화 |

---

## Funding & Partnerships

| 항목 | 내용 |
|------|------|
| 총 펀딩 | $240M+ |
| 주요 투자자 | **OpenAI**, Samsung, Tiger Global |
| 전략적 파트너 | NVIDIA (Isaac 플랫폼) |

---

## Comparison with Other VLAs

| 항목 | Redwood AI | π0 | GR00T N1 |
|------|------------|-----|----------|
| 파라미터 | 160M | 3.3B | - |
| 실행 환경 | 온보드 GPU | 서버 | Jetson Thor |
| 속도 | 5Hz | 50Hz | 30Hz |
| 타겟 | 소비자 가정 | 범용 | 휴머노이드 |
| 가격대 | $20K 로봇 | 연구용 | 산업용 |

---

## References

- [1X Technologies AI](https://www.1x.tech/ai)
- [1X World Model](https://www.1x.tech/discover/redwood-ai-world-model)
- [NEO Home Robot](https://www.1x.tech/neo)
- [arXiv - Generative World Modelling for Humanoids](https://arxiv.org/abs/2510.07092)
- [1X World Model Technical Report](https://www.1x.tech/1x-world-model.pdf)
- [GitHub - 1xgpt World Model Challenge](https://github.com/1x-technologies/1xgpt)

---

## See Also

- [모델 목록](index.md)
- [1X Technologies](../companies/1x.md)
- [GR00T](groot.md)
- [Figure Helix](figure-helix.md)
- [World Model](../solutions/simulation-world-model.md)

