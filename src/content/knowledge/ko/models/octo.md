---
title: Octo
description: UC Berkeley의 오픈소스 Generalist Robot Foundation Model
tags: [octo, berkeley, stanford, cmu, open-source, foundation-model, transformer, diffusion]
category: models
---

# Octo

> Home > Models > Octo

---

## 핵심 의의

- **초경량 고성능**: 93M 파라미터로 55B RT-2-X와 유사한 성능 - 파라미터 대비 최고 효율
- **Diffusion 기반 액션 생성**: Transformer + Diffusion 조합으로 multimodal action distribution 처리
- **실용적 파인튜닝**: ~100개 시연 데이터, consumer GPU에서 수 시간 내 새 로봇/태스크 적응
- **유연한 입출력**: 언어 지시 또는 목표 이미지로 태스크 지정, 다양한 관측/액션 공간 지원
- **완전 오픈소스**: 체크포인트, 학습 코드, 파인튜닝 스크립트 전체 공개
- **Open X-Embodiment 활용**: 800K 에피소드, 25개 데이터셋으로 사전학습
- **빠른 적응의 표준**: 새로운 로봇 플랫폼에 빠르게 적응해야 할 때 기준점으로 사용

![Octo Architecture](../assets/models/octo/octo_architecture.jpg)
<p align="center"><em>Octo 아키텍처: Transformer 인코더 + Diffusion 디코더 구조</em></p>

---

## Overview

Octo는 UC Berkeley, Stanford, CMU가 공동 개발한 오픈소스 generalist 로봇 정책입니다. Open X-Embodiment 데이터셋의 800K 에피소드로 사전학습되어, 다양한 로봇 플랫폼에서 빠르게 파인튜닝할 수 있습니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2024년 5월 (RSS 2024) |
| 소속 | UC Berkeley, Stanford, CMU |
| 논문 | [arXiv:2405.12213](https://arxiv.org/abs/2405.12213) |
| 프로젝트 | [octo-models.github.io](https://octo-models.github.io/) |
| GitHub | [github.com/octo-models/octo](https://github.com/octo-models/octo) |
| 라이선스 | 오픈소스 |

---

## Model Variants

| 모델 | 파라미터 | 용도 |
|------|---------|------|
| **Octo-Small** | 27M | 경량, 빠른 실험 |
| **Octo-Base** | 93M | 높은 성능 |

---

## Architecture

Octo는 **Transformer 기반 Diffusion Policy**입니다.

```
┌─────────────────────────────────────────────────────────┐
│                      Octo Architecture                  │
├─────────────────────────────────────────────────────────┤
│  Inputs:                                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Images   │  │ Language │  │ Goal     │              │
│  │ (multi)  │  │ Instruct │  │ Image    │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │             │             │                     │
│       └─────────────┴─────────────┘                     │
│                     │                                   │
│              ┌──────▼──────┐                           │
│              │ Transformer │                           │
│              │   Encoder   │                           │
│              └──────┬──────┘                           │
│                     │                                   │
│              ┌──────▼──────┐                           │
│              │  Diffusion  │                           │
│              │   Decoder   │                           │
│              └──────┬──────┘                           │
│                     │                                   │
│              ┌──────▼──────┐                           │
│              │   Action    │                           │
│              │  Sequence   │                           │
│              └─────────────┘                           │
└─────────────────────────────────────────────────────────┘
```

**지원 기능:**
- 자연어 지시 또는 목표 이미지로 태스크 지정
- 관측 이력 (observation history)
- Diffusion decoding을 통한 multimodal action distribution

---

## Training Data

| 항목 | 내용 |
|------|------|
| 데이터셋 | Open X-Embodiment |
| 에피소드 | 800K |
| 데이터셋 수 | 25개 |
| 로봇 종류 | 다양 (단일 암, 양팔 등) |
| 센서 | 카메라, proprioception 등 |

---

## Performance

### Zero-Shot (사전학습 환경)

| 로봇 | 성공률 |
|------|--------|
| WidowX | 50% |
| UR5 | 70% |
| RT-1 Robot | 80% |

**비교:**
- RT-1-X보다 우수
- RT-2-X (55B)와 유사 (단, Octo는 93M)

### Fine-tuning 후 (6개 태스크 평균)

| 모델 | 성공률 |
|------|--------|
| **Octo** | **72%** |
| VC-1 | 15% |

→ 차선 baseline 대비 **52% 향상**

---

## Fine-tuning Capabilities

Octo의 핵심 강점은 **빠른 적응**입니다.

| 적응 가능 요소 | 예시 |
|---------------|------|
| 새로운 관측 | Force-torque, proprioception |
| 새로운 액션 공간 | Joint position control |
| 새로운 로봇 | 양팔 시스템 등 |

**요구사항:**
- ~100개 타겟 시연
- 일반 consumer GPU에서 수 시간 내 학습

---

## Key Advantages

| 특징 | 설명 |
|------|------|
| **오픈소스** | 체크포인트, 학습 코드, 파인튜닝 스크립트 전체 공개 |
| **유연성** | 다양한 관측/액션 공간 지원 |
| **효율성** | 93M 파라미터로 55B 모델과 유사 성능 |
| **실용성** | Consumer GPU에서 파인튜닝 가능 |

---

## Comparison with RT-X

| 항목 | Octo | RT-1-X | RT-2-X |
|------|------|--------|--------|
| 파라미터 | 93M | ~35M | 55B |
| 오픈소스 | O | O | X |
| 성능 | 높음 | 중간 | 높음 |
| 파인튜닝 | 쉬움 | 보통 | 어려움 |

---

## Released Resources

- 사전학습 체크포인트 (27M, 93M)
- 파인튜닝 스크립트
- 전체 사전학습 파이프라인
- 평가 코드

---

## References

- [Project Page](https://octo-models.github.io/)
- [arXiv Paper](https://arxiv.org/abs/2405.12213)
- [GitHub](https://github.com/octo-models/octo)
- [TechXplore Article](https://techxplore.com/news/2024-06-source-generalist-robot.html)

---

## See Also

- [모델 목록](index.md)
- [OpenVLA](openvla.md)
- [RT](rt.md)

