---
title: NVIDIA Cosmos (World Foundation Model)
description: NVIDIA의 Physical AI를 위한 세계 파운데이션 모델 플랫폼
tags: [cosmos, nvidia, world-model, physical-ai, video-generation, tokenizer, diffusion, autoregressive, robotics, autonomous-vehicle]
category: models

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-20
---

## 핵심 의의

- **Physical AI를 위한 세계 모델 플랫폼**: 로봇, 자율주행차, 비디오 분석 AI를 위한 최초의 종합적인 세계 파운데이션 모델 플랫폼
- **물리 법칙 인식 비디오 생성**: 9,000조 토큰, 2천만 시간의 실세계 데이터로 학습하여 물리적으로 그럴듯한 비디오 생성
- **오픈 모델 생태계**: 상업적 사용 가능한 오픈 라이선스로 Tokenizer, Predict, Transfer, Reason 모델 제공
- **Sim-to-Real 격차 해소**: Cosmos Transfer로 시뮬레이션과 실제 환경 간의 시각적 도메인 격차 극복
- **GR00T와의 통합**: N1.6에서 Cosmos-Reason-2B VLM 채택으로 로봇 추론 능력 강화
- **산업 전반 채택**: 1X, Figure AI, Agility, Waabi, XPENG, Uber 등 주요 기업들이 도입

---

## Overview

NVIDIA Cosmos는 Physical AI 개발을 가속화하기 위한 세계 파운데이션 모델(World Foundation Model, WFM) 플랫폼입니다. 토크나이저, 예측 모델, 전이 모델, 추론 모델로 구성되어 로봇과 자율주행차가 디지털 환경에서 먼저 학습하고 실제 세계에 적용할 수 있도록 지원합니다.

| 항목 | 내용 |
|------|------|
| 최초 발표 | 2025년 1월 6일 (CES 2025) |
| 주요 업데이트 | 2025년 3월 18일 (GTC 2025) |
| 회사 | NVIDIA |
| 논문 | [arXiv:2501.03575](https://arxiv.org/abs/2501.03575) |
| GitHub | [nvidia-cosmos](https://github.com/nvidia-cosmos) |
| 라이선스 | NVIDIA Open Model License (상업적 사용 가능) |
| 학습 데이터 | 9,000조 토큰 / 2천만 시간 실세계 데이터 |

---

## Cosmos 제품군

Cosmos 플랫폼은 네 가지 핵심 구성 요소로 이루어져 있습니다:

| 제품 | 역할 | 버전 |
|------|------|------|
| **Cosmos Tokenizer** | 이미지/비디오를 토큰으로 압축 | 0.1, 1.0 |
| **Cosmos Predict** | 텍스트/이미지/비디오에서 미래 프레임 예측 | 1.0, 2.0, 2.5 |
| **Cosmos Transfer** | 시뮬레이션→실사 변환, 다중 제어 | 1, 2.5 |
| **Cosmos Reason** | Physical AI 추론 VLM | 1, 2 |

### 모델 크기 카테고리

| 카테고리 | 설명 | 용도 |
|----------|------|------|
| **Nano** | 실시간, 저지연 추론 최적화 | 엣지 배포 |
| **Super** | 성능과 효율의 균형 | 범용 기준선 |
| **Ultra** | 최고 품질과 충실도 | 커스텀 모델 증류 |

---

## Cosmos Tokenizer

이미지와 비디오를 효율적으로 토큰화하는 신경망 기반 압축 모델입니다.

### 아키텍처

| 항목 | 내용 |
|------|------|
| 구조 | 대칭적 Encoder-Decoder |
| 시간 설계 | Causal Temporal Convolution + Attention |
| 전처리 | 2-level Haar Wavelet Transform (4x 다운샘플링) |
| 압축률 | 공간 8x/16x, 시간 4x/8x, 총 최대 **2048x** |

### 토크나이저 유형

| 유형 | 코드 | 설명 | 사용 모델 |
|------|------|------|----------|
| Continuous Image | CI | 연속 잠재 임베딩 (이미지) | Diffusion 모델 |
| Discrete Image | DI | 이산 토큰 (이미지) | Autoregressive 모델 |
| Continuous Video | CV | 연속 잠재 임베딩 (비디오) | Diffusion 모델 |
| Discrete Video | DV | 이산 토큰 (비디오) | Autoregressive 모델 |

### 주요 모델

| 모델 | 압축률 | 용도 |
|------|--------|------|
| Cosmos-1.0-Tokenizer-CV8x8x8 | 8×8×8 = 512x | Diffusion WFM |
| Cosmos-1.0-Tokenizer-DV8x16x16 | 8×16×16 = 2048x | Autoregressive WFM |
| Cosmos-0.1-Tokenizer-CI8x8 | 8×8 = 64x | 이미지 Diffusion |
| Cosmos-0.1-Tokenizer-DI8x8 | 8×8 = 64x | 이미지 AR |

### 성능

| 항목 | 수치 |
|------|------|
| SOTA 대비 압축률 | **8배 향상** |
| SOTA 대비 속도 | **최대 12배 빠름** |
| 1080p 최대 길이 | 8초 (단일 A100 80GB) |
| 720p 최대 길이 | 10초 (단일 A100 80GB) |
| 지원 종횡비 | 1:1, 3:4, 4:3, 9:16, 16:9 |

---

## Cosmos Predict

텍스트, 이미지, 비디오 입력으로부터 미래 프레임을 예측하는 세계 생성 모델입니다.

### Cosmos Predict 1.0

#### Diffusion 모델

| 모델 | 파라미터 | 입력 | 출력 |
|------|----------|------|------|
| Cosmos-1.0-Diffusion-7B-Text2World | 7B | 텍스트 | 121 프레임 |
| Cosmos-1.0-Diffusion-14B-Text2World | 14B | 텍스트 | 121 프레임 |
| Cosmos-1.0-Diffusion-7B-Video2World | 7B | 텍스트 + 이미지/비디오 | 120 프레임 |
| Cosmos-1.0-Diffusion-14B-Video2World | 14B | 텍스트 + 이미지/비디오 | 120 프레임 |

**아키텍처:**
- Diffusion Transformer (DiT) 기반
- Self-Attention + Cross-Attention + FFN 인터리브 구조
- Adaptive Layer Normalization (AdaLN)으로 시간 정보 임베딩
- LoRA 적용으로 11B→7B 파라미터 36% 감소 (성능 유지)
- 토크나이저: Cosmos-1.0-Tokenizer-CV8x8x8

#### Autoregressive 모델

| 모델 | 파라미터 | 입력 | 출력 |
|------|----------|------|------|
| Cosmos-1.0-Autoregressive-4B | 4B | 이미지 (첫 프레임) | 32 프레임 |
| Cosmos-1.0-Autoregressive-12B | 12B | 이미지 (첫 프레임) | 32 프레임 |
| Cosmos-1.0-Autoregressive-5B-Video2World | 5B | 텍스트 + 이미지/비디오 | 24-32 프레임 |
| Cosmos-1.0-Autoregressive-13B-Video2World | 13B | 텍스트 + 이미지/비디오 | 24-32 프레임 |

**아키텍처:**
- Llama3 스타일 GPT 구조 (처음부터 학습)
- Self-Attention + FFN 인터리브 구조
- Video2World: T5 임베딩을 통한 Cross-Attention 추가
- 토크나이저: Cosmos-1.0-Tokenizer-DV8x16x16
- 해상도: 1024×640

### Cosmos Predict 2.5 (2025.10)

최신 세계 시뮬레이션 모델로, Text2World/Image2World/Video2World를 단일 모델로 통합했습니다.

| 모델 | 파라미터 | 특징 |
|------|----------|------|
| Cosmos-Predict2.5-2B | 2B | 엣지 배포 최적화 |
| Cosmos-Predict2.5-14B | 14B | 최고 품질 |

**주요 개선점:**
- Flow-matching 아키텍처 채택
- Cosmos-Reason1 VLM을 텍스트 인코더로 사용
- 2억 개의 큐레이션된 비디오 클립으로 학습
- 로봇 액션 시퀀스 조건부 예측 지원
- 7-카메라 멀티뷰 지원 (자율주행용)

---

## Cosmos Transfer

시뮬레이션 환경을 실사 수준으로 변환하고, 구조화된 입력(세그멘테이션, 깊이, 엣지 등)으로 비디오를 제어하는 모델입니다.

### Cosmos Transfer 1 (2025.03)

| 항목 | 내용 |
|------|------|
| 논문 | [arXiv:2503.14492](https://arxiv.org/abs/2503.14492) |
| 기반 모델 | Cosmos-Predict1 |
| 아키텍처 | DiT + ControlNet |
| 제어 블록 | 3개의 Transformer 블록 |
| 초기화 | Zero-initialized Linear Layer |

**지원 입력 모달리티:**
- 세그멘테이션 비디오
- 깊이 비디오
- 엣지 비디오
- 블러 비디오
- LiDAR 비디오
- HDMap 비디오 (자율주행용)

**핵심 기능:**
- **Spatiotemporal Control Map**: 각 모달리티의 시공간적 가중치 조절
- **MultiControlNet**: 여러 모달리티 동시 사용 가능
- **Sim-to-Real 변환**: 시뮬레이션 영상을 실사 수준으로 변환

### Cosmos Transfer 2.5 (2025.10)

Cosmos-Predict2.5 기반의 차세대 전이 모델입니다.

| 모델 | 기능 |
|------|------|
| Cosmos-Transfer2.5 | 다중 공간 제어 입력 기반 세계 시뮬레이션 |

---

## Cosmos Reason

Physical AI를 위한 추론 비전-언어 모델(VLM)입니다. 로봇과 AI 에이전트가 인간처럼 추론하여 물리 세계를 이해하고 행동할 수 있도록 합니다.

### Cosmos Reason 2 (2025.12)

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 12월 19일 (CoRL 2025) |
| CES 2026 공개 | 2026년 1월 |
| 기반 아키텍처 | Qwen3-VL |
| 구조 | Vision Transformer (ViT) + Dense Transformer LLM |
| 컨텍스트 길이 | 최대 256K 토큰 |

### 모델 버전

| 모델 | 파라미터 | 용도 |
|------|----------|------|
| Cosmos-Reason2-2B | 2B | 엣지/임베디드 (GR00T N1.6에서 사용) |
| Cosmos-Reason2-8B | 8B | 클라우드/고성능 추론 |

### 핵심 기능

| 기능 | 설명 |
|------|------|
| 물리 상식 이해 | 공간, 시간, 기본 물리 법칙 이해 |
| Chain-of-Thought 추론 | 긴 사고 과정을 통한 embodied 결정 생성 |
| 시공간 정밀도 | 타임스탬프 기반 정확한 이벤트 추적 |
| 객체 탐지 | 2D/3D 포인트 위치, 바운딩 박스 + 추론 설명 |
| 원인 분석 | "왜 일어나는가?", "다음에 무엇이 일어날까?" 추론 |

### 활용 사례

| 분야 | 활용 |
|------|------|
| 로봇 계획 | VLA 모델의 System 2 (느린 사고) 역할 |
| 비디오 분석 | 도시/산업 환경의 대규모 비디오 인사이트 추출 |
| 데이터 어노테이션 | 합성/실제 비디오의 자동 라벨링 및 설명 |

---

## GR00T와의 통합

Cosmos는 NVIDIA GR00T 휴머노이드 로봇 파운데이션 모델과 긴밀하게 통합됩니다.

### GR00T N1.6에서의 Cosmos-Reason-2B

| 항목 | 내용 |
|------|------|
| VLM | Cosmos-Reason-2B (Eagle2-1B에서 업그레이드) |
| 특징 | Native Resolution 지원 (왜곡 없는 입력) |
| 효과 | 장면 이해 및 태스크 분해 능력 향상 |

**개선 효과:**
- 기존 Eagle2-1B 대비 2배 큰 VLM으로 시각적 이해 강화
- 네이티브 해상도 지원으로 이미지 패딩 없이 처리
- 더 나은 환경 추론과 상황 인식

### Cosmos + GR00T 학습 파이프라인

```
Omniverse (시뮬레이션)
    ↓
Cosmos Predict (합성 데이터 생성)
    ↓
Cosmos Transfer (Sim-to-Real 변환)
    ↓
Cosmos Reason (데이터 라벨링/어노테이션)
    ↓
GR00T N1.6 (VLA 학습)
```

---

## Physical AI에서의 활용

### 로보틱스

| 회사 | 활용 |
|------|------|
| 1X | Cosmos Predict + Transfer로 NEO Gamma 학습 |
| Agility Robotics | Cosmos Transfer + Omniverse 대규모 합성 데이터 생성 |
| Figure AI | Physical AI 데이터 파이프라인 |
| Skild AI | Cosmos Transfer로 합성 데이터셋 증강 |

### 자율주행

| 회사 | 활용 |
|------|------|
| Waabi | 자율주행 시나리오 생성 |
| XPENG | 차량 AI 학습 데이터 |
| Uber | 라이드셰어링 자율주행 연구 |

---

## 타임라인

| 날짜 | 이벤트 |
|------|--------|
| 2025.01.06 | CES 2025에서 Cosmos 플랫폼 발표 |
| 2025.01.07 | arXiv 논문 공개 (2501.03575) |
| 2025.03.18 | GTC 2025에서 주요 업데이트 발표 |
| 2025.03 | Cosmos-Transfer1 논문 공개 (2503.14492) |
| 2025.06 | GR00T N1.6에 Cosmos-Reason-2B 통합 |
| 2025.10.06 | Cosmos-Predict2.5, Transfer2.5 출시 |
| 2025.12.19 | Cosmos-Reason2 공개 (CoRL 2025) |
| 2026.01 | CES 2026에서 Cosmos Reason 2 정식 공개 |

---

## References

### 공식 자료
- [NVIDIA Cosmos 공식 페이지](https://www.nvidia.com/en-us/ai/cosmos/)
- [NVIDIA Cosmos 연구 페이지](https://research.nvidia.com/publication/2025-01_cosmos-world-foundation-model-platform-physical-ai)
- [GitHub - nvidia-cosmos](https://github.com/nvidia-cosmos)

### 논문
- [Cosmos World Foundation Model Platform for Physical AI (arXiv:2501.03575)](https://arxiv.org/abs/2501.03575)
- [Cosmos-Transfer1: Conditional World Generation with Adaptive Multimodal Control (arXiv:2503.14492)](https://arxiv.org/abs/2503.14492)

### 뉴스 및 발표
- [NVIDIA Newsroom - CES 2025 발표](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development)
- [NVIDIA Newsroom - GTC 2025 업데이트](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools)
- [NVIDIA Newsroom - Cosmos Reason 2 발표](https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots)

### 모델
- [Hugging Face - NVIDIA Cosmos 모델](https://huggingface.co/nvidia)
- [NVIDIA NGC - Cosmos](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/cosmos)

### 기술 블로그
- [NVIDIA Developer Blog - Cosmos 플랫폼](https://developer.nvidia.com/blog/advancing-physical-ai-with-nvidia-cosmos-world-foundation-model-platform)
- [Hugging Face Blog - Cosmos Reason 2](https://huggingface.co/blog/nvidia/nvidia-cosmos-reason-2-brings-advanced-reasoning)

---

## See Also

- [모델 목록](/knowledge/models/)
- [GR00T](groot) - NVIDIA 휴머노이드 로봇 파운데이션 모델
- [NVIDIA](/knowledge/companies/nvidia)
- [시뮬레이션 & World Model](/knowledge/essays/insights/simulation-world-model)

### 관련 인물
- [Jim Fan](/knowledge/people/jim-fan) - NVIDIA GEAR Lab, Physical AI 연구 리드
