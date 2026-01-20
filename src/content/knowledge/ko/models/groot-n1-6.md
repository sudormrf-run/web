---
title: GR00T N1.6
description: 2배 확대된 DiT와 Cosmos VLM으로 스케일을 키운 휴머노이드 파운데이션 모델
tags: [groot, groot-n1-6, nvidia, humanoid, foundation-model, vla, cosmos, relative-action]
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

- **스케일업의 정석**. DiT 2배(16→32층), VLM도 Eagle에서 Cosmos로 교체. 더 큰 모델이 더 부드럽고 정확한 모션을 만든다는 것을 보여줌.
- **Relative Action Space 도입**. 절대 좌표 대신 현재 상태 기준 상대적 액션 예측. 위치 변화에 강건하고 떨림이 적은 움직임 생성.
- **Loco-manipulation 본격 지원**. Unitree G1으로 걸으면서 조작하는 전신 동작 데이터 추가. 휴머노이드의 핵심 사용 사례를 정면으로 다룸.

</div>

## 핵심 의의

- **DiT 2배 확대**: 16층 → 32층으로 Diffusion Transformer 스케일 확대
- **Cosmos VLM 도입**: Eagle에서 Cosmos-Reason-2B로 VLM 교체, 향상된 추론 능력
- **Relative Action Space**: 상대적 행동 공간으로 일반화 및 적응력 향상
- **Sim-to-Real 성능 향상**: 제로샷 시뮬레이션→실제 환경 전이 개선
- **Loco-manipulation 지원**: 이동과 조작을 결합한 전신 동작 지원

---

## Overview

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 9월 29일 (CoRL 2025, 서울) |
| 타입 | Vision-Language-Action (VLA) |
| 파라미터 | 3B |
| VLM | [Cosmos](cosmos)-Reason-2B |
| DiT | **32 layers** (N1.5 대비 2배) |
| Action Space | Relative Action Space |
| GitHub | [NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) |
| Hugging Face | [nvidia/GR00T-N1.6-3B](https://huggingface.co/nvidia/GR00T-N1.6-3B) |

---

## N1.5 대비 주요 개선점

### 1. DiT 레이어 확대 (16 → 32)

| 구분 | N1.5 | N1.6 |
|------|------|------|
| **DiT 레이어 수** | 16층 | **32층 (2배)** |
| **효과** | - | 더 부드럽고 덜 떨리는 움직임, 변화하는 위치에 쉽게 적응 |

32층의 더 큰 Diffusion Transformer는 상태 상대적 액션 예측과 결합되어 더 유연하고 적응력 있는 모션을 생성합니다.

### 2. Cosmos VLM (2B) 도입

N1.6은 Eagle 대신 **NVIDIA Cosmos-Reason-2B VLM**을 기반 VLM으로 사용합니다.

| 구분 | N1.5 | N1.6 |
|------|------|------|
| VLM | Eagle 2.5 (1B) | **Cosmos-Reason-2B** |
| 파라미터 | ~1B | **2B (2배)** |
| VLM 학습 | 완전 동결 | **상위 4층 해제** |
| 어댑터 | 4층 트랜스포머 | **제거됨** |

**Cosmos-Reason 주요 특징:**
- **유연한 해상도 지원**: 이미지를 패딩 없이 원본 종횡비로 인코딩 가능
- **심층 사고 기능**: 로봇의 "깊이 생각하는 두뇌" 역할 수행
- **모호한 지시 해석**: 사전 지식, 상식, 물리학을 활용하여 모호한 지시를 단계별 계획으로 변환

### 3. Relative Action Space (상태 상대적 액션 공간)

N1.6은 **절대 관절 각도나 EEF 위치 대신 상태 상대적 액션 청크를 예측**합니다.

| 구분 | N1/N1.5 | N1.6 |
|------|---------|------|
| Action Space | Absolute | **Relative** |
| 동작 특성 | 고정된 위치 기반 | **현재 상태 기준 상대적** |

**장점:**
- 더 부드럽고 정확한 모션 생성
- 변화하는 위치에 쉽게 적응
- 덜 떨리는(jittery) 움직임

**주의사항:**
- 작은 데이터셋에서는 오류 누적이 발생할 수 있어 교정 능력에 영향

---

## Architecture

![GR00T N1.6 Model Architecture](../assets/models/groot/groot-n1.6-model-architecture.png)
<p align="center"><em>GR00T N1.6 모델 아키텍처 (출처: <a href="https://research.nvidia.com/labs/gear/gr00t-n1_6/">NVIDIA Research</a>)</em></p>

### 주요 아키텍처 변경 사항 (N1.5 → N1.6)

| 구성요소 | N1.5 | N1.6 |
|---------|------|------|
| **기반 VLM** | Eagle 2.5 (동결) | **Cosmos-Reason-2B** (상위 4층 해제) |
| **DiT 크기** | 16층 | **32층** |
| **VLM 후처리 어댑터** | 4층 트랜스포머 어댑터 | **제거됨** |

---

## Benchmarks

### 평가 환경

N1.6은 다양한 시뮬레이션 및 실제 로봇 환경에서 평가됩니다:

| 평가 환경 | 설명 |
|----------|------|
| **LIBERO** | LIBERO 데이터셋에서 20-40k 스텝 후처리 후 평가 |
| **SimplerEnv** | Google Robot fractal 데이터셋으로 파인튜닝 후 평가 |
| **BEHAVIOR1k** | 후처리 체크포인트 제공 |
| **IsaacLabEvalTasks** | 산업용 조작 작업 (Nut Pouring, Exhaust Pipe Sorting) |

### 실제 로봇 시연

NVIDIA Research 페이지에서 다음 작업들을 시연:

- 티셔츠 접기 (T-shirt folding)
- 물체 삽입 (Object insertion)
- 양팔 핸드오프 (Bimanual handoff)
- Unitree G1으로 loco-manipulation

### 성능 특성

NVIDIA Research 페이지에 따르면:
- N1.6은 N1.5보다 **더 빠르게 수렴**하여 더 부드러운 액션 생성
- 과적합 방지를 위해 더 세심한 튜닝 필요
- 5-6%의 실험 간 분산이 관찰됨

> **참고**: N1.6의 구체적인 벤치마크 수치는 공식 연구 페이지에서 아직 공개되지 않았습니다. N1, N1.5의 성능 비교는 해당 문서를 참조하세요.

---

## Training

### 사전학습

| 항목 | N1.6 |
|------|------|
| **사전학습 스텝** | 300K |
| **글로벌 배치 크기** | 16,384 |
| **후처리 스텝** | 10K-30K (배치 크기 1K 이하) |

### 사전학습 데이터 분포

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0;">

![GR00T N1.6 Pretraining Data Distribution](../assets/models/groot/training_data_distribution_v3.svg)

</div>
<p align="center"><em>GR00T N1.6 사전학습 데이터 분포 (출처: <a href="https://research.nvidia.com/labs/gear/gr00t-n1_6/">NVIDIA Research</a>)</em></p>

N1.6은 N1.5 대비 **수천 시간의 새로운 텔레오퍼레이션 데이터**를 추가하여 학습되었습니다.

#### 주요 데이터 소스

| 데이터 소스 | 플랫폼 타입 | 설명 |
|------------|-----------|------|
| **양팔 YAM 아암** | 양팔 조작기 | 정밀한 양팔 조작 작업 데이터 |
| **[AGIBot](../hardware/humanoids/agibot) Genie1** | 세미-휴머노이드 | 다양한 조작 작업 데이터 |
| **시뮬레이션 Galaxea R1 Pro** | 휴머노이드 | BEHAVIOR 스위트 기반 합성 데이터 |
| **[Unitree](../hardware/humanoids/unitree-humanoid) G1** | 휴머노이드 | 전신 로코-매니퓰레이션 데이터 |

---

### 파인튜닝 체크포인트

N1.6은 다양한 태스크/환경에 대한 파인튜닝 체크포인트를 제공합니다.

| 체크포인트 | 로봇 | 태스크 |
|-----------|------|--------|
| [GR00T-N1.6-bridge](https://huggingface.co/nvidia/GR00T-N1.6-bridge) | WidowX | Manipulation |
| [GR00T-N1.6-fractal](https://huggingface.co/nvidia/GR00T-N1.6-fractal) | Google Robot | Manipulation |
| [GR00T-N1.6-BEHAVIOR1k](https://huggingface.co/nvidia/GR00T-N1.6-BEHAVIOR1k) | Galaxea R1 Pro | Loco-manipulation |
| [GR00T-N1.6-G1-PnPAppleToPlate](https://huggingface.co/nvidia/GR00T-N1.6-G1-PnPAppleToPlate) | Unitree G1 | Loco-manipulation (Pick & Place) |

> 전체 목록 및 사용법: [GitHub - Isaac-GR00T README](https://github.com/NVIDIA/Isaac-GR00T#model-checkpoints)

---

### 후처리 주의사항

- 동일 설정, 시드, 드롭아웃에서도 **5-6% 성능 분산** 관찰
- N1.6은 N1.5보다 **더 빠르게 수렴**하여 과적합 위험 증가
- 세심한 하이퍼파라미터 튜닝 필요

---

## Supported Robots

N1.6에서 검증된 로봇 플랫폼:

| 플랫폼 | 타입 | 문서 |
|--------|------|------|
| 양팔 YAM 로봇 | 양팔 조작기 | - |
| [AGIBot](../hardware/humanoids/agibot) Genie-1 | 세미-휴머노이드 | [AGIBot](../hardware/humanoids/agibot) |
| [Unitree](../companies/unitree) G1 | 휴머노이드 | [Unitree Humanoid](../hardware/humanoids/unitree-humanoid) |
| Fourier GR-1 | 휴머노이드 | - |

---

## 버전별 비교 요약

| 특성 | N1 | N1.5 | N1.6 |
|------|-----|------|------|
| **발표** | 2025.03 GTC | 2025.05 Computex | 2025.09 CoRL |
| **모델 크기** | 2.2B | 3B | 3B |
| **기반 VLM** | Eagle2-1B (학습 가능) | Eagle 2.5 (동결) | **Cosmos-Reason-2B** (상위 4층 해제) |
| **DiT 레이어** | 16 | 16 | **32** |
| **Action Space** | Absolute | Absolute | **Relative** |
| **사전학습 스텝** | 250K | 250K | **300K** |
| **주요 특징** | 기본 VLA, 합성 데이터 | FLARE, 언어 이해 개선 | **스케일업, Loco-manipulation** |

---

## 참고: NVIDIA Sim-to-Real Workflow

> **주의**: 이 섹션은 N1.6 모델 자체의 기능이 아닌, N1.6과 함께 사용할 수 있는 **NVIDIA의 로보틱스 워크플로우**를 설명합니다.
>
> 상세 내용: **[Building Generalist Humanoid Capabilities with GR00T N1.6 (NVIDIA Developer Blog)](https://developer.nvidia.com/blog/building-generalist-humanoid-capabilities-with-nvidia-isaac-gr00t-n1-6-using-a-sim-to-real-workflow/)**

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0;">
  <iframe src="https://www.youtube.com/embed/iTrBb7rMN-g" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
</div>

NVIDIA 개발자 블로그에서 소개된 sim-to-real 워크플로우는 세 가지 구성요소를 포함합니다:

| 구성요소 | 설명 |
|---------|------|
| **Whole-Body RL** | Isaac Lab/Sim에서 강화학습으로 훈련된 동적 안정 모션 프리미티브 |
| **COMPASS Navigation** | 합성 데이터로 훈련된 네비게이션, 제로샷 sim-to-real 전이 |
| **Vision-Based Localization** | cuVSLAM, cuVGL, FoundationStereo, nvblox 등 CUDA 가속 라이브러리 |

---

## References

### GR00T N1.6
- [NVIDIA Research - GR00T N1.6](https://research.nvidia.com/labs/gear/gr00t-n1_6/)
- [Hugging Face - GR00T-N1.6-3B](https://huggingface.co/nvidia/GR00T-N1.6-3B)
- [BEHAVIOR1k 체크포인트](https://huggingface.co/nvidia/GR00T-N1.6-BEHAVIOR1k)

### 기술 블로그
- [Building Generalist Humanoid Capabilities with GR00T N1.6](https://developer.nvidia.com/blog/building-generalist-humanoid-capabilities-with-nvidia-isaac-gr00t-n1-6-using-a-sim-to-real-workflow/)

### 뉴스
- [NVIDIA Accelerates Robotics Research - CoRL 2025](https://nvidianews.nvidia.com/news/nvidia-accelerates-robotics-research-and-development-with-new-open-models-and-simulation-libraries)
- [The Robot Report - Newton and GR00T at CoRL 2025](https://www.therobotreport.com/nvidia-launches-newton-physics-engine-gr00t-ai-corl-2025/)

### 기반
- [GitHub - Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)
- [GR00T N1 Paper (arXiv:2503.14734)](https://arxiv.org/abs/2503.14734)

---

## See Also

### GR00T 시리즈
- [GR00T](groot) - 시리즈 개요
- [GR00T N1](groot-n1) - 최초 오픈소스 모델
- [GR00T N1.5](groot-n1-5) - 언어 이해 개선

### 관련 모델
- [Cosmos](cosmos) - N1.6의 VLM (Cosmos-Reason-2B)
- [Eagle](eagle) - N1, N1.5의 VLM
- [DreamGen](dreamgen) - 합성 데이터 생성 파이프라인

### 관련 인물
- [Jim Fan](../people/jim-fan) - NVIDIA GEAR Lab, GR00T 연구 리드
