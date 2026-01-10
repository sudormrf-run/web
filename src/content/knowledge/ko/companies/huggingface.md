---
title: HuggingFace
description: HuggingFace - LeRobot과 오픈소스 로보틱스 커뮤니티
tags: [huggingface, lerobot, smolvla, open-source, community]
category: companies
---

# HuggingFace

> Home > Companies > HuggingFace

---

## Overview

HuggingFace는 AI 모델과 데이터셋의 "GitHub"로, LeRobot 프로젝트를 통해 로보틱스 분야에도 오픈소스 혁명을 일으키고 있습니다. SmolVLA와 커뮤니티 데이터셋으로 누구나 접근 가능한 로보틱스 AI를 추구합니다.

| 항목 | 내용 |
|------|------|
| 본사 | New York, NY / Paris, France |
| 설립 | 2016년 |
| CEO | Clément Delangue |
| 로보틱스 리드 | Rémi Cadène |
| 핵심 프로젝트 | LeRobot, SmolVLA |

---

## LeRobot

### 프로젝트 소개

LeRobot은 로보틱스 AI를 민주화하기 위한 오픈소스 프로젝트입니다.

```
🤗 LeRobot

"Making AI for Robotics more accessible
 with end-to-end learning"
```

### 핵심 구성요소

| 구성요소 | 설명 |
|----------|------|
| 모델 | ACT, Diffusion Policy, SmolVLA 등 |
| 데이터셋 | 487+ 커뮤니티 공유 데이터셋 (2025.06 기준) |
| 하드웨어 지원 | SO100, Koch, Unitree G1 등 |
| 도구 | 학습, 평가, 시각화 파이프라인 |

### 지원 하드웨어

- SO100, SO101 (저가형 팔)
- LeKiwi (모바일 베이스)
- Koch (바이매뉴얼)
- Unitree G1 (휴머노이드)
- HopeJR, OMX, EarthRover 등

---

## SmolVLA

### 개요

2025년 6월 발표된 **450M 파라미터** [VLA](../models/index.md#vla-vision-language-action):

| 항목 | 내용 |
|------|------|
| 파라미터 | 450M |
| 특징 | MacBook에서 실행 가능 |
| 학습 데이터 | 10M 프레임 (커뮤니티 데이터) |
| 아키텍처 | VLM + Flow Matching |

### 성능

```
SmolVLA-450M ≈ 10× 큰 VLA와 동등한 성능
              + ACT보다 우수 (LIBERO, Meta-World)
              + 비동기 추론으로 30% 빠름
```

### 효율성

| 요소 | 특징 |
|------|------|
| 학습 | 단일 GPU로 학습 가능 |
| 추론 | 소비자 GPU/CPU에서 실행 |
| 파인튜닝 | ~50 에피소드, ~4시간 (A100) |

---

## 커뮤니티 활동

### LeRobot 해커톤

| 해커톤 | 내용 |
|--------|------|
| 2024 #1 | 첫 커뮤니티 해커톤 |
| 2025 #2 | 저가형 하드웨어 중심 |
| 결과물 | 다양한 환경의 데이터셋 공유 |

### 데이터셋 허브

```
HuggingFace Hub
└── lerobot/ (태그)
    ├── pusht_v2 (시뮬레이션)
    ├── aloha_static_* (ALOHA 데이터)
    ├── so100_* (커뮤니티 수집)
    └── ... (487+ 데이터셋)
```

### 커뮤니티 기여

- 전 세계 연구자/취미가 데이터 공유
- 다양한 환경 (연구실, 거실, 창고)
- 표준화된 포맷으로 상호 호환

---

## 철학: AI 민주화

### 로보틱스 분야 적용

```
LLM 민주화 (HuggingFace 성공)
├── 모델 공유 → Hub
├── 학습 도구 → Transformers
└── 데이터셋 → Datasets

로보틱스 민주화 (LeRobot 목표)
├── 모델 공유 → lerobot/models
├── 학습 도구 → LeRobot 라이브러리
└── 데이터셋 → lerobot 태그 데이터셋
```

### 저가형 하드웨어 강조

| 장비 | 비용 |
|------|------|
| SO100 팔 | ~$300 |
| LeKiwi 베이스 | ~$200 |
| 전체 셋업 | ~$500-1000 |

→ "로보틱스 연구의 진입장벽 낮추기"

---

## 로드맵

*아래는 공개 발표 및 GitHub 활동 기반 정리로, 공식 로드맵이 아닐 수 있음.*

| 시기 | 마일스톤 |
|------|----------|
| 2024 | LeRobot 프로젝트 시작 |
| 2024-25 | 커뮤니티 데이터셋 성장 |
| 2025.06 | [SmolVLA](../models/smolvla.md) 발표 |
| 2025+ | 더 효율적인 모델, 더 많은 하드웨어 지원 (예상) |

---

## References

- [HuggingFace LeRobot](https://huggingface.co/lerobot)
- [LeRobot GitHub](https://github.com/huggingface/lerobot)
- [SmolVLA Blog](https://huggingface.co/blog/smolvla)
- [SmolVLA Paper](https://arxiv.org/abs/2506.01844)

---

## See Also

- [회사 목록](index.md)
- [SmolVLA](../models/smolvla.md)
- [커뮤니티 드리븐 접근](../solutions/community-driven.md)
- [ACT](../models/act.md)

