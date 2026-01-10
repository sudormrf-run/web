---
title: Generalist GEN-0
description: Generalist AI의 대규모 실제 데이터 기반 Embodied Foundation Model
tags: [generalist, gen0, foundation-model, scaling-laws, harmonic-reasoning]
category: models
---

# Generalist GEN-0

> Home > Models > Generalist GEN-0

---

## 핵심 의의

- **로보틱스 스케일링 법칙 발견 주장**: LLM처럼 데이터/컴퓨트 증가에 따른 예측 가능하고 일관된 성능 향상 관찰
- **역대 최대 실제 데이터**: 270,000시간의 실제 물리적 상호작용 데이터 - 시뮬레이션이나 인간 비디오가 아닌 순수 로봇 데이터
- **7B 파라미터 임계점**: 1B에서는 "경직화", 7B+에서 데이터 내재화와 지속적 개선 관찰 - 로보틱스의 GPT-3 모멘트 가능성
- **Harmonic Reasoning**: System 1-2 구조 대신 감지와 행동의 연속 스트림 간 "조화로운 상호작용" - 대규모 스케일링에 적합
- **다양한 실제 환경 데이터**: 가정, 베이커리, 세탁소, 창고, 공장 등 실제 다양한 환경에서 수집
- **실제 데이터 우위 주장**: 시뮬레이션 vs 실제 데이터 논쟁에서 실제 데이터의 중요성 강조
- **팀 배경**: OpenAI(GPT-4), DeepMind(RT-2), Boston Dynamics(Atlas) 출신으로 구성

![GEN-0 Scaling Law](../assets/models/generalist-gen0/scaling_law_vla.png)
<p align="center"><em>GEN-0 스케일링 법칙: 데이터/컴퓨트 증가에 따른 예측 가능한 성능 향상</em></p>

---

## Overview

GEN-0는 Generalist AI가 2025년 11월 발표한 embodied foundation model로, 시뮬레이션이나 인간 비디오가 아닌 **실제 물리적 상호작용 데이터**로 학습되었습니다. 270,000시간의 실제 데이터로 로보틱스 분야 최초의 **스케일링 법칙**을 발견했다고 주장합니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 11월 4일 |
| 회사 | Generalist AI |
| 블로그 | [generalistai.com/blog/nov-04-2025-GEN-0](https://generalistai.com/blog/nov-04-2025-GEN-0) |
| 핵심 주장 | 로보틱스 스케일링 법칙 발견 |

---

## Training Data

역대 최대 규모의 실제 조작 데이터셋:

| 항목 | 내용 |
|------|------|
| 데이터 양 | 270,000+ 시간 |
| 소스 | 실제 물리적 상호작용 |
| 환경 | 가정, 베이커리, 세탁소, 창고, 공장 등 |
| 태스크 | 감자 깎기부터 볼트 조이기까지 |

![GEN-0 Data Size Comparison](../assets/models/generalist-gen0/data_size.png)
<p align="center"><em>GEN-0 데이터 규모: 기존 VLA 대비 압도적인 실제 데이터 양</em></p>

---

## Key Findings

### 로보틱스 스케일링 법칙

LLM처럼 로보틱스에서도 예측 가능한 스케일링 법칙 발견:
- 사전학습 데이터 ↑ → 성능 ↑
- 컴퓨트 ↑ → 성능 ↑
- **일관되고 예측 가능한** 향상

### 지능 임계점 (Phase Transition)

| 파라미터 | 현상 |
|---------|------|
| 1B | 복잡한 데이터 흡수 실패, "경직화" |
| **7B+** | 데이터 내재화, 지속적 개선, 적은 후속 학습으로 새 태스크 적응 |

---

## Architecture: Harmonic Reasoning

System 1-System 2 구조에 의존하지 않는 새로운 접근:

| 특징 | 설명 |
|------|------|
| 핵심 | 감지(seeing)와 행동(moving)의 연속 스트림 간 "조화로운 상호작용" |
| 장점 | 매우 큰 모델 크기로 스케일 가능 |
| 지원 로봇 | 6, 7, 16+ 자유도 로봇에서 테스트 |

### Cross-Embodiment

설계 단계부터 다양한 로봇 형태 지원.

---

## Team Background

Generalist AI 팀의 이전 경력:

| 출신 | 기여 |
|------|------|
| OpenAI | ChatGPT, GPT-4 스케일링 |
| Google DeepMind | PaLM-E, RT-2 개발 |
| Boston Dynamics | Atlas, Spot, Stretch |
| 기타 | 자율주행 기반 기술 |

---

## Significance

GEN-0의 주장이 사실이라면:

- **로보틱스도 LLM처럼 스케일링 가능** 증명
- 스케일업에 대한 **경제적 정당성** 제공
- 시뮬레이션 vs 실제 데이터 논쟁에서 **실제 데이터 우위** 주장
- 7B 파라미터가 로보틱스의 **GPT-3 모멘트** 될 수 있음

---

## References

- [Generalist AI Blog - GEN-0](https://generalistai.com/blog/nov-04-2025-GEN-0)
- [Generalist AI Website](https://generalistai.com/)
- [YouTube - GEN-0 Demo](https://www.youtube.com/watch?v=mhfleCK_IAI)
- [Humanoids Daily Article](https://www.humanoidsdaily.com/feed/generalist-ai-unveils-gen-0-claims-scaling-laws-for-robotics-backed-by-270-000-hours-of-real-world-data)
- [MarkTechPost Article](https://www.marktechpost.com/2025/11/05/generalist-ai-introduces-gen-%CE%B8-a-new-class-of-embodied-foundation-models-built-for-multimodal-training-directly-on-high-fidelity-raw-physical-interaction/)

---

## See Also

- [모델 목록](index.md)
- [Generalist](../companies/generalist.md)
- [Non-Teleop 데이터 수집](../solutions/non-teleop-data.md)

