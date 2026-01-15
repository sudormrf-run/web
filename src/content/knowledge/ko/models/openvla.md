---
title: OpenVLA
description: Stanford/Berkeley의 7B 오픈소스 Vision-Language-Action 모델
tags: [openvla, stanford, berkeley, open-source, vla, llama, 7b]
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

- **VLA 연구의 민주화**: 최초의 대규모 오픈소스 VLA (7B 파라미터) - 체크포인트, 코드, 학습 파이프라인 전체 공개
- **효율적 성능**: 55B RT-2-X와 대등하거나 더 나은 성능을 7B로 달성, 모델 크기 대비 효율성 입증
- **Consumer GPU 파인튜닝**: LoRA로 전체 파라미터의 1.4%만 학습하여 일반 GPU에서도 파인튜닝 가능
- **범용성**: 테스트한 모든 태스크에서 50%+ 성공률을 보인 유일한 모델
- **Prismatic VLM 기반**: SigLIP + DinoV2 듀얼 비전 인코더로 강력한 시각적 이해
- **학술 협력의 결과물**: Stanford, UC Berkeley, TRI, Google DeepMind, MIT 5개 기관 공동 개발
- **오픈소스 VLA 생태계 시작점**: 이후 SmolVLA, MiniVLA 등 경량 오픈소스 VLA 연구의 기반이 됨

![OpenVLA Architecture](../assets/models/openvla/openvla_model_architecture.jpg)
<p align="center"><em>OpenVLA 아키텍처: Prismatic VLM (SigLIP + DinoV2) + Llama 2 7B 기반</em></p>

---

## Overview

OpenVLA는 Stanford, UC Berkeley, Toyota Research Institute, Google DeepMind, MIT가 공동 개발한 7B 파라미터 오픈소스 VLA 모델입니다. RT-2-X(55B)보다 작지만 비슷하거나 더 좋은 성능을 보이며, consumer GPU에서 파인튜닝이 가능합니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2024년 6월 |
| 소속 | Stanford, UC Berkeley, TRI, Google DeepMind, MIT |
| 논문 | [arXiv:2406.09246](https://arxiv.org/abs/2406.09246) |
| 프로젝트 | [openvla.github.io](https://openvla.github.io/) |
| GitHub | [github.com/openvla/openvla](https://github.com/openvla/openvla) |
| HuggingFace | [openvla/openvla-7b](https://huggingface.co/openvla/openvla-7b) |
| 파라미터 | 7B |

---

## Architecture

OpenVLA는 **Prismatic-7B VLM**을 기반으로 구축되었습니다.

```
┌─────────────────────────────────────────────────────────┐
│                    OpenVLA Architecture                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐                      │
│  │   SigLIP    │  │   DinoV2    │   Visual Encoder     │
│  │  Backbone   │  │  Backbone   │   (Fused)            │
│  └──────┬──────┘  └──────┬──────┘                      │
│         │                │                              │
│         └───────┬────────┘                              │
│                 ▼                                       │
│         ┌─────────────┐                                │
│         │  Projector  │   Image → LLM space            │
│         └──────┬──────┘                                │
│                ▼                                        │
│  ┌─────────────────────────┐                           │
│  │      Llama 2 7B         │   Language Backbone       │
│  │   (Action Prediction)   │                           │
│  └───────────┬─────────────┘                           │
│              ▼                                          │
│       Tokenized Actions → Continuous Robot Commands    │
└─────────────────────────────────────────────────────────┘
```

| 구성 요소 | 설명 |
|----------|------|
| Visual Encoder | SigLIP + DinoV2 (fused) |
| Projector | 시각 임베딩 → LLM 입력 공간 |
| LLM Backbone | Llama 2 7B |
| 출력 | 토큰화된 액션 → 연속 로봇 명령 |

---

## Training

| 항목 | 내용 |
|------|------|
| 데이터셋 | Open X-Embodiment |
| 에피소드 | 970K |
| 하드웨어 | 64× A100 GPU |
| 학습 기간 | 15일 |
| 데이터 출처 | 21개 기관, 22개 로봇 형태 |

---

## Performance

### Zero-Shot 평가

| 비교 대상 | 결과 |
|----------|------|
| vs RT-1-X | 우수 (WidowX, Google Robot) |
| vs Octo | 우수 (WidowX, Google Robot) |
| vs RT-2-X (55B) | 비슷하거나 우수 |

**핵심:** 7B 모델이 55B 모델과 대등하거나 능가

### Fine-tuning 후

- Octo 대비 대부분의 Franka-Tabletop, DROID 태스크에서 우수
- 모든 테스트 태스크에서 **50%+ 성공률** (유일)
- 다중 물체, 언어 기반 태스크에서 Diffusion Policy 능가

### 한계

- RT-2-X가 어려운 의미적 일반화(인터넷 개념)에서는 더 우수
- 원인: RT-2-X의 더 큰 사전학습 데이터 및 co-fine-tuning 전략

---

## Fine-tuning

OpenVLA의 핵심 장점 중 하나는 **효율적인 파인튜닝**입니다.

### LoRA (Low-Rank Adaptation)

| 항목 | 내용 |
|------|------|
| 파인튜닝 파라미터 | 전체의 1.4%만 |
| 성능 | Full fine-tuning과 동등 |
| 하드웨어 | Consumer GPU 가능 |

### Quantization

- 양자화 적용 후에도 성능 저하 없음
- 효율적인 서빙 가능

---

## Comparison with Other Models

| 모델 | 파라미터 | 오픈소스 | 특징 |
|------|---------|---------|------|
| **OpenVLA** | 7B | O | VLM 기반, 언어 지시 강점 |
| Octo | 93M | O | Diffusion 기반, 빠른 파인튜닝 |
| RT-2-X | 55B | X | 가장 큰 모델, 의미적 일반화 강점 |
| RT-1-X | ~35M | O | 경량, 기본 성능 |

---

## Key Advantages

| 특징 | 설명 |
|------|------|
| **성능** | 55B 모델과 대등한 7B 모델 |
| **효율성** | LoRA로 1.4% 파라미터만 학습 |
| **범용성** | 모든 태스크에서 50%+ 성공률 |
| **접근성** | Consumer GPU 파인튜닝/서빙 가능 |
| **오픈소스** | 체크포인트, 코드 전체 공개 |

---

## Variants

| 모델 | 설명 |
|------|------|
| OpenVLA-7B | 기본 모델 |
| MiniVLA | 경량화 버전 (Stanford ILIAD) |

---

## References

- [Project Page](https://openvla.github.io/)
- [arXiv Paper](https://arxiv.org/abs/2406.09246)
- [GitHub](https://github.com/openvla/openvla)
- [HuggingFace Model](https://huggingface.co/openvla/openvla-7b)
- [VentureBeat Article](https://venturebeat.com/ai/openvla-is-an-open-source-generalist-robotics-model)

---

## See Also

- [모델 목록](index)
- [Octo](octo)
- [RT](rt)
- [SmolVLA](smolvla)

### 관련 인물
- [Sergey Levine](../people/sergey-levine) - 공동 저자
- [Chelsea Finn](../people/chelsea-finn) - Stanford 연구실

