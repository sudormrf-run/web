---
title: GR00T (Project GR00T)
description: NVIDIA의 휴머노이드 로봇 파운데이션 모델 시리즈
tags: [groot, nvidia, humanoid, foundation-model, vla]
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

<div class="author-note">

### 필자의 의견

- **최초 오픈 휴머노이드 VLA**. GR00T N1으로 휴머노이드 로봇용 오픈 파운데이션 모델 시대를 열었습니다.
- **Dual-System 구조의 실용화**. 인간 인지에서 영감받은 System 1/2 분리가 실제 로봇 VLA에 적용된 대표 사례.
- **합성 데이터의 가능성 입증**. Isaac Sim 물리 시뮬레이션 + Neural Trajectory 생성으로 teleop 의존도를 낮춘 학습 파이프라인의 가능성을 보여줌.

</div>

## Overview

| 항목 | 내용 |
|------|------|
| 최초 발표 | 2024년 3월 (GTC 2024) |
| N1 오픈소스 공개 | 2025년 3월 (GTC 2025) |
| 회사 | [NVIDIA](/knowledge/companies/nvidia) |
| GitHub | [NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) |
| 라이선스 | Apache 2.0 |

---

## Version History

| 항목 | [N1](groot-n1) | [N1.5](groot-n1-5) | [N1.6](groot-n1-6) |
|------|----------------|--------------------|--------------------|
| **발표** | 2025.03 GTC | 2025.05 Computex | 2025.09 CoRL |
| **파라미터** | 2.2B | 3B | 3B |
| **VLM** | Eagle2-1B | Eagle 2.5 (Frozen) | Cosmos-Reason-2B |
| **DiT Layers** | 16 | 16 | **32** |
| **Action Space** | Absolute | Absolute | **Relative** |
| **핵심 개선** | 최초 오픈소스 | FLARE, 언어 이해 2배 | 스케일업, Loco-manipulation |

---

## Dual-System Architecture

![GR00T N1 Architecture](/assets/models/groot/groot_n1_architecture.png)
<p align="center"><em>GR00T N1 아키텍처: System 2 (VLM) + System 1 (DiT) Dual-System 구조</em></p>

인간 인지 원리(Kahneman, 2011)에서 영감받은 구조:

| System | 역할 | 구현 |
|--------|------|------|
| **System 2** (Slow) | 환경 이해, 계획 수립 | Vision-Language Model |
| **System 1** (Fast) | 계획을 정밀 동작으로 변환 | Diffusion Transformer |

---

## References

- [NVIDIA Developer - Isaac GR00T](https://developer.nvidia.com/isaac/gr00t)
- [GitHub - Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)
- [GR00T N1 논문 (arXiv:2503.14734)](https://arxiv.org/abs/2503.14734)

---

## See Also

### GR00T 시리즈
- [GR00T N1](groot-n1) - 최초 오픈소스 모델
- [GR00T N1.5](groot-n1-5) - 언어 이해 개선, FLARE
- [GR00T N1.6](groot-n1-6) - 스케일 확대, Loco-manipulation

### 관련 모델
- [Eagle](eagle) - N1, N1.5의 VLM
- [Cosmos](cosmos) - N1.6의 VLM
- [DreamGen](dreamgen) - 합성 데이터 생성

### 관련 인물
- [Yuke Zhu](/knowledge/people/yuke-zhu) - NVIDIA GEAR Lab 공동 리드
- [Jim Fan](/knowledge/people/jim-fan) - NVIDIA GEAR Lab 공동 리드
