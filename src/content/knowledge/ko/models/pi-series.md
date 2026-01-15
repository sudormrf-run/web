---
title: π Series (Physical Intelligence)
description: Physical Intelligence의 Vision-Language-Action 모델 시리즈 - π0, π0.5, π*0.6
tags: [pi-series, physical-intelligence, vla, flow-matching, foundation-model]
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

# π Series (Physical Intelligence)

> Home > Models > π Series

---

## 핵심 의의

- **VLA의 새로운 패러다임**: Flow Matching 기반 연속 액션 생성으로 Diffusion/Autoregressive 방식의 대안 제시
- **실제 가정 환경 일반화**: π0.5에서 학습하지 않은 완전히 새로운 가정에서도 작동 - 로봇 일반화의 새 기준
- **RL을 통한 자가 개선**: π*0.6에서 RECAP 방법론으로 실제 경험에서 학습하여 성능 지속 향상
- **스타 팀 창업**: Google DeepMind RT 시리즈 핵심 연구자들(Karol Hausman, Chelsea Finn, Sergey Levine, Pete Florence)이 창업
- **완전 오픈소스**: openpi로 모델 가중치, 학습 코드, PyTorch/JAX 구현 전체 공개
- **혁신적 효율성**: FAST 토크나이저로 5배 빠른 학습, Knowledge Insulation으로 7.5배 적은 학습 스텝
- **24시간 연속 운영**: π*0.6에서 에스프레소 제조 5:30am~11:30pm, 50개 새 빨래 접기 연속 수행 실증

---

## Overview

π Series는 Physical Intelligence가 2024년 10월부터 발표한 Vision-Language-Action 모델 시리즈입니다. Google DeepMind의 RT 시리즈를 이끌었던 핵심 연구자들이 창업하여, Flow Matching 기반의 새로운 VLA 패러다임을 제시했습니다.

| 항목 | 내용 |
|------|------|
| 회사 | Physical Intelligence |
| 설립 | 2024년 |
| 창업자 | Karol Hausman, Chelsea Finn, Sergey Levine, Pete Florence 등 |
| GitHub | [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) |
| 블로그 | [pi.website/blog](https://www.pi.website/blog) |

---

## Evolution Timeline

```
2024.10 ─────── π0 ──────────────────────────────────────────────────
                │  첫 Generalist Policy
                │  Flow Matching + PaliGemma 3B
                │  8개 로봇, 68개 태스크
                │
2025.01 ─────── FAST Tokenizer ───────────────────────────────────────
                │  5x 빠른 학습
                │  DCT + BPE 압축
                │
2025.02 ─────── Open Source (openpi) ─────────────────────────────────
                │  가중치, 코드 공개
                │  JAX + PyTorch (LeRobot)
                │
2025.04 ─────── π0.5 ─────────────────────────────────────────────────
                │  Open-World Generalization
                │  새로운 가정에서도 작동
                │  Web 데이터 Co-training
                │
2025.05 ─────── Knowledge Insulation ─────────────────────────────────
                │  7.5x 적은 학습 스텝
                │  Gradient blocking으로 VLM 지식 보존
                │
2025.06 ─────── Real-Time Chunking (RTC) ─────────────────────────────
                │  고지연 환경에서도 실시간 제어
                │  Inpainting 기반 접근
                │
2025.11 ─────── π*0.6 ────────────────────────────────────────────────
                   RL로 자가 개선
                   RECAP: 경험에서 학습
                   90%+ 성공률, 2x 처리량
```

---

## Model Versions

| 버전 | 발표 | 핵심 혁신 | 상세 문서 |
|------|------|----------|----------|
| **π0** | 2024.10 | Flow Matching VLA, 50Hz 제어 | [π0](pi0.md) |
| **π0.5** | 2025.04 | Open-World 일반화, Web 데이터 | [π0.5](pi0-5.md) |
| **π*0.6** | 2025.11 | RL 자가 개선, RECAP | [π*0.6](pi0-6-star.md) |

---

## Core Innovations

### 1. Flow Matching Architecture

Diffusion의 대안으로, 연속 분포를 효율적으로 모델링:

| 특징 | 설명 |
|------|------|
| 연속 분포 | 복잡한 multimodal action distribution 처리 |
| 고주파 제어 | 50Hz action chunk 생성 |
| Transformer 통합 | VLM과 자연스러운 결합 |

### 2. FAST Tokenizer

액션 시퀀스를 효율적으로 압축:

```
Raw Actions → DCT Transform → BPE Encoding → 30-60 Tokens
                   │                │
            (JPEG/MP3 방식)    (LLM 방식)
```

- **10배 압축**: 기존 토크나이징 대비
- **5배 빠른 학습**: Diffusion 기반 π0 대비
- **Dexterous 태스크**: 정밀한 고주파 제어 가능

### 3. Knowledge Insulation

VLM의 인터넷 지식을 보존하면서 로봇 학습:

| 문제 | 해결책 |
|------|--------|
| Action Expert → VLM 역전파 | Gradient Blocking |
| 로봇 학습이 언어 이해 손상 | Discrete Action 동시 학습 |
| 결과 | 7.5배 적은 학습 스텝 |

### 4. RECAP (RL with Experience & Corrections)

π*0.6의 핵심 - 경험에서 학습:

```
┌─────────────────────────────────────────────────────────────┐
│                    RECAP Learning Loop                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐            │
│  │ 시연     │ ──→ │ 자율 실행 │ ──→ │ 코칭     │            │
│  │ (Demo)   │     │ (Deploy) │     │(Coaching)│            │
│  └──────────┘     └────┬─────┘     └──────────┘            │
│                        │                                     │
│                        ▼                                     │
│              ┌─────────────────┐                            │
│              │  Value Function │ ← 상황별 성공 확률 예측     │
│              └────────┬────────┘                            │
│                       │                                      │
│                       ▼                                      │
│              ┌─────────────────┐                            │
│              │ Advantage 조건화 │ ← 좋은 행동 강화           │
│              └─────────────────┘                            │
└─────────────────────────────────────────────────────────────┘
```

### 5. Real-Time Chunking (RTC)

고지연 환경에서 실시간 제어:

- **문제**: 대규모 VLA는 추론에 시간 소요, 그 사이 세상은 변화
- **해결**: Inpainting 방식으로 이전 chunk의 실행 중인 액션 유지
- **결과**: 높은 지연에서도 정밀도와 속도 유지

---

## Training Data & Scale

### π0 Training Data

| 항목 | 내용 |
|------|------|
| 로봇 플랫폼 | 8개 (UR5e, Franka, Trossen, ARX 등) |
| 태스크 | 68개 |
| 외부 데이터 | Open X-Embodiment |

### π0.5 Co-training Data

| 데이터 유형 | 용도 |
|------------|------|
| Web 데이터 | 이미지 캡셔닝, Visual QA, 객체 탐지 |
| 언어 시연 | 단계별 지시 학습 |
| 서브태스크 명령 | 고수준 의미 레이블 |
| 로봇 액션 | 다중 embodiment 학습 |

---

## Performance Highlights

### π0 vs Baselines

| 태스크 | π0 | OpenVLA | Octo |
|--------|-----|---------|------|
| Bussing (UR5e) | **97%** | 0% | 4% |
| Shirt Folding | **100%** | 0% | 0% |
| Grocery Bagging | **79%** | 0% | 0% |

### π*0.6 Improvements

| 메트릭 | 개선 |
|--------|------|
| 성공률 | **90%+** |
| 처리량 | **2배 이상** |
| 실패율 | **2배 이상 감소** |

### Real-World Deployment

| 태스크 | 성과 |
|--------|------|
| 에스프레소 제조 | 5:30am~11:30pm 연속 운영 |
| 빨래 접기 | 50개 새 아이템 연속 처리 |
| 박스 조립 | 59개 초콜릿 포장 박스 (공장) |

---

## Open Source Ecosystem

### openpi Repository

| 모델 | 설명 |
|------|------|
| π0 base | 사전학습 모델, 파인튜닝용 |
| π0-FAST base | FAST 토크나이저 적용 버전 |
| π0 DROID | Franka 단일 암 파인튜닝 |
| π0 ALOHA | 양팔 조작 파인튜닝 |
| π0 Libero | 시뮬레이션 환경 파인튜닝 |

### Framework Support

| 프레임워크 | 지원 |
|-----------|------|
| JAX | 공식 구현 |
| PyTorch | HuggingFace LeRobot 통합 |

### Fine-tuning Requirements

- **데이터**: 1~20시간 충분
- **하드웨어**: Consumer GPU 가능

---

## Team Background

Physical Intelligence 창업팀의 이전 업적:

| 인물 | 이전 소속 | 주요 기여 |
|------|----------|----------|
| [Karol Hausman](../people/karol-hausman.md) | Google DeepMind | RT-1, RT-2 리드 |
| [Chelsea Finn](../people/chelsea-finn.md) | Stanford/Google | MAML, Robotics Transformer |
| [Sergey Levine](../people/sergey-levine.md) | UC Berkeley/Google | RL, Robot Learning |
| [Pete Florence](../people/pete-florence.md) | Google DeepMind | Dense Descriptors |

---

## Research Publications

### Blog Posts (Chronological)

| 날짜 | 제목 | 유형 |
|------|------|------|
| 2024.10.31 | [π0: Our First Generalist Policy](https://www.pi.website/blog/pi0) | Blog |
| 2025.01.16 | [FAST: Efficient Robot Action Tokenization](https://www.pi.website/research/fast) | Research |
| 2025.02.04 | [Open Sourcing π0](https://www.pi.website/blog/openpi) | Blog |
| 2025.04.22 | [π0.5: Open-World Generalization](https://www.pi.website/blog/pi05) | Blog |
| 2025.05.28 | [Knowledge Insulation](https://www.pi.website/research/knowledge_insulation) | Research |
| 2025.06.09 | [Real-Time Action Chunking](https://www.pi.website/research/real_time_chunking) | Research |
| 2025.11.17 | [π*0.6: Learning from Experience](https://www.pi.website/blog/pistar06) | Blog |

### Papers

- [π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)
- [π*0.6 Technical Report](https://www.pi.website/download/pistar06.pdf)

---

## Impact

π Series가 로보틱스 분야에 미친 영향:

1. **Flow Matching 검증**: Diffusion의 실용적 대안으로 자리매김
2. **Open-World 기준 제시**: 실험실을 벗어난 일반화의 새로운 표준
3. **RL 자가 개선**: 배포 후에도 지속적으로 성능 향상 가능
4. **오픈소스 생태계**: SmolVLA, LeRobot 등 후속 연구의 기반
5. **산업 적용**: 실제 공장/가정 환경에서 24시간 운영 실증

---

## See Also

- [모델 목록](index.md)
- [π0](pi0.md)
- [π0.5](pi0-5.md)
- [π*0.6](pi0-6-star.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
- [Diffusion Policy](diffusion-policy.md)

### 관련 인물
- [Karol Hausman](../people/karol-hausman.md)
- [Chelsea Finn](../people/chelsea-finn.md)
- [Sergey Levine](../people/sergey-levine.md)
- [Pete Florence](../people/pete-florence.md)

