---
title: Diffusion Policy
description: Columbia/MIT의 Diffusion 기반 Visuomotor Policy Learning
tags: [diffusion-policy, diffusion, columbia, mit, toyota-research, visuomotor]
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

- **로봇에 Diffusion 적용한 선구적 연구**: 이미지 생성에서 성공한 diffusion을 로봇 액션 생성에 최초로 성공적 적용
- **Multimodal Action 자연스럽게 처리**: 같은 상황에서 여러 유효한 행동이 있을 때 다중 모드를 학습하고 실행 시 하나에 commit
- **매우 높은 학습 안정성**: 기존 imitation learning 방법들 대비 안정적인 학습 수렴
- **4개 벤치마크 평균 46.9% 성능 향상**: Robomimic, IBC, Behavior Transformer, Relay Policy Learning 등에서 검증
- **후속 연구에 큰 영향**: π0의 flow matching, Octo의 diffusion decoder 등 이후 VLA들의 액션 생성 방식에 직접적 영향
- **LeRobot 기본 지원**: HuggingFace LeRobot에서 ACT와 함께 기본 지원 모델
- **강건성**: 가림(occlusion), 외란(perturbation), 시각적 방해에 대해 강건한 성능

<video src="/assets/models/diffusion-policy/diffusion_policy_highlight.mp4" controls width="100%" muted autoplay loop></video>
<p align="center"><em>Diffusion Policy: 노이즈에서 액션 시퀀스를 점진적으로 생성</em></p>

---

## Overview

Diffusion Policy는 로봇의 visuomotor 정책을 조건부 denoising diffusion process로 표현하는 새로운 접근법입니다. Multimodal action distribution을 우아하게 처리하고, 고차원 액션 공간에 적합하며, 뛰어난 학습 안정성을 보여줍니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2023년 3월 (RSS 2023) |
| 저자 | [Cheng Chi](../people/cheng-chi), Siyuan Feng, Yilun Du, Zhenjia Xu, [Shuran Song](../people/shuran-song) 외 |
| 소속 | Columbia University, MIT, Toyota Research Institute |
| 논문 | [arXiv:2303.04137](https://arxiv.org/abs/2303.04137) |
| 저널 | IJRR 2024 (확장판) |
| 프로젝트 | [diffusion-policy.cs.columbia.edu](https://diffusion-policy.cs.columbia.edu/) |

---

## Key Ideas

### Diffusion for Action Generation

기존 정책이 직접 액션을 예측하는 것과 달리, Diffusion Policy는 **노이즈에서 시작하여 점진적으로 액션을 생성**합니다.

```
순수 노이즈 → ... → 중간 노이즈 → ... → 최종 액션 시퀀스
         ← Denoising Steps (Langevin dynamics) ←
```

**핵심 원리:**
- 액션 분포의 score function 기울기를 학습
- 추론 시 stochastic Langevin dynamics로 반복 최적화

### Multimodal Action Handling

같은 상황에서 여러 가지 유효한 행동이 있을 때 (예: 물체를 왼쪽/오른쪽 중 어디로 밀어도 됨), Diffusion Policy는:
- 다중 모드 행동을 학습
- 각 rollout에서 하나의 모드에만 commit
- LSTM-GMM, IBC 등 기존 방법보다 우수한 성능

### Receding Horizon Control

단일 액션이 아닌 **액션 시퀀스**를 예측하여 시간적 일관성 확보.

---

## Architecture

### Time-Series Diffusion Transformer

| 구성 요소 | 설명 |
|----------|------|
| Visual Encoder | 이미지 조건화를 위한 인코더 |
| Diffusion Backbone | Transformer 또는 CNN 기반 |
| Noise Scheduler | DDPM 기반 스케줄링 |

**입력:**
- 시각 관측 (이미지)
- 현재 로봇 상태

**출력:**
- 미래 액션 시퀀스

---

## Performance

### 벤치마크 결과

**4개 벤치마크, 12개 태스크에서 평균 46.9% 성능 향상**

| Benchmark | Tasks |
|-----------|-------|
| Robomimic | Lift, Can, Square, Tool Hang, Transport |
| IBC | Push-T, Block Pushing |
| Behavior Transformer | Franka Kitchen |
| Relay Policy Learning | Franka Kitchen |

### 실제 로봇 검증

| Task | Description |
|------|-------------|
| Push-T | T자 물체 밀기 조작 |
| Mug Flipping | 머그컵 뒤집기 |
| Sauce Preparation | 소스 준비 (6-DoF 제어) |

---

## Advantages

| 특징 | 설명 |
|------|------|
| **Multimodal** | 다중 유효 행동 분포 처리 |
| **고차원** | 고차원 액션 공간에 적합 |
| **안정성** | 학습 수렴 안정적 |
| **강건성** | 가림, 외란, 시각적 방해에 강건 |

---

## Comparison with ACT

| 항목 | Diffusion Policy | ACT |
|------|-----------------|-----|
| 생성 방식 | Denoising diffusion | CVAE decoder |
| Multimodality | 자연스러운 처리 | Style variable (z) |
| 추론 속도 | 다수 denoising step 필요 | 단일 forward pass |
| 학습 안정성 | 매우 높음 | 높음 |

---

## Impact

Diffusion Policy는 로봇 학습에 diffusion model을 적용한 선구적 연구로, 이후 많은 후속 연구에 영향을 미쳤습니다:
- pi0 (Physical Intelligence)의 flow matching 기반 접근
- LeRobot의 기본 지원 모델
- 다양한 manipulation 태스크에서 표준 baseline

---

## Resources

- [Project Page](https://diffusion-policy.cs.columbia.edu/)
- [arXiv Paper](https://arxiv.org/abs/2303.04137)
- [GitHub](https://github.com/real-stanford/diffusion_policy)
- [Google Colab Notebooks](https://diffusion-policy.cs.columbia.edu/) (State-based / Vision-based)

---

## See Also

- [모델 목록](index)
- [ACT](act)
- [pi0](pi0)

### 관련 인물
- [Cheng Chi](../people/cheng-chi) - 제1저자
- [Shuran Song](../people/shuran-song) - 지도교수

