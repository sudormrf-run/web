---
title: GR00T-Dreams (DreamGen)
description: NVIDIA의 로봇 학습용 합성 데이터 생성 파이프라인 - World Foundation Model을 활용한 Neural Trajectory 생성
tags: [dreamgen, groot-dreams, nvidia, synthetic-data, isaac-sim, omniverse, cosmos, world-model, neural-trajectories]
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

- **로봇 데이터 문제 해결**: World Foundation Model을 활용하여 단일 이미지와 언어 지시만으로 대규모 합성 trajectory 데이터 생성
- **드라마틱한 효율성**: 36시간 만에 GR00T N1.5 학습 (수동 수집 시 3개월 소요)
- **GR00T-Mimic과 함께**: 780K 합성 trajectory을 11시간 만에 생성 (6,500시간 상당의 인간 시연)
- **행동 일반화**: 단일 환경의 pick-and-place 데이터만으로 22개의 새로운 행동을 10개의 새로운 환경에서 수행 가능
- **Contact-Rich Task 지원**: 수건 접기, 망치질, 그릇 쌓기 등 시뮬레이션으로 어려운 작업도 학습 가능
- **오픈소스**: Apache 2.0 라이선스로 공개

---

## Overview

GR00T-Dreams는 NVIDIA GEAR Lab의 로봇 데이터 문제 해결 이니셔티브입니다. 핵심 기술인 DreamGen은 Video World Model(Cosmos-Predict2)을 활용하여 **Neural Trajectories**(신경 trajectory)라고 불리는 합성 로봇 데이터를 생성합니다. 로봇이 마치 "꿈을 꾸듯이" 새로운 시나리오를 상상하고 학습할 수 있게 해줍니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 5월 (arXiv), Computex 2025 |
| 연구 기관 | NVIDIA, UW, KAIST, UCLA, UCSD, CalTech, NTU, UMD, UT Austin |
| 핵심 기술 | Video World Model + Inverse Dynamics Model |
| 기반 모델 | Cosmos-Predict2 |
| 논문 | [arXiv:2505.12705](https://arxiv.org/abs/2505.12705) |
| GitHub | [NVIDIA/GR00T-Dreams](https://github.com/NVIDIA/GR00T-Dreams) |
| 라이선스 | Apache 2.0 |

---

## DreamGen: 4단계 파이프라인

DreamGen은 간단하지만 매우 효과적인 4단계 파이프라인으로 구성됩니다.

### 1단계: Video World Model Fine-tuning

기존 Image-to-Video 생성 모델(Cosmos-Predict2)을 로봇 embodiment에 맞게 미세 조정합니다.

| 항목 | 내용 |
|------|------|
| 기반 모델 | Cosmos-Predict2 |
| 미세조정 방식 | LoRA (Low-Rank Adaptation) |
| 목적 | 인터넷 비디오 지식 보존하면서 로봇 동역학 학습 |

**LoRA를 사용하는 이유:**
- 기존 인터넷 비디오 지식의 망각(catastrophic forgetting) 방지
- 효율적인 파라미터 업데이트

### 2단계: Synthetic Video Generation (Dream Generation)

미세 조정된 모델에 초기 프레임과 언어 지시를 입력하여 합성 로봇 비디오를 생성합니다.

```
입력: 초기 이미지 + 언어 지시 ("컵을 집어서 선반에 놓아라")
      ↓
[Fine-tuned Cosmos-Predict2]
      ↓
출력: 포토리얼리스틱 로봇 비디오 (새로운 행동/환경 포함)
```

**핵심 특징:**
- 학습 시 보지 못한 새로운 행동(novel behaviors) 생성 가능
- 다양한 환경에서의 동일 행동 생성 가능
- 물리적으로 그럴듯한 동작 생성

### 3단계: Action Extraction (Neural Trajectory 생성)

생성된 비디오에는 액션 어노테이션이 없으므로, **pseudo-action**(의사 액션)을 추출합니다.

| 방법 | 설명 | 용도 |
|------|------|------|
| **Inverse Dynamics Model (IDM)** | 두 프레임 사이의 액션 예측 | 명시적 액션 추출 |
| **Latent Action Model** | 잠재 공간에서 액션 표현 | 암시적 액션 표현 |

**IDM 아키텍처:**
- Diffusion Transformer + SigLIP-2 Vision Encoder
- Flow Matching objective로 학습
- 두 이미지 프레임 → 액션 청크 예측
- 언어나 고유감각(proprioception) 입력 없음 (순수 동역학만 학습)

**결과: Neural Trajectories**
- 합성 비디오 + pseudo-action의 조합
- 실제 텔레오퍼레이션 데이터 없이 학습 가능한 형태

### 4단계: Policy Training

Neural Trajectories를 사용하여 visuomotor 정책을 학습합니다.

| 항목 | 내용 |
|------|------|
| 학습 대상 | GR00T N1.x Foundation Model |
| 데이터 | Neural Trajectories (합성) + Real Trajectories (선택적) |
| 효과 | 행동 및 환경 일반화 능력 획득 |

---

## GR00T-Dreams Blueprint: 5단계 워크플로우

NVIDIA의 공식 Blueprint는 5단계로 확장되어 있습니다:

```
1. Post-training
   └─ Cosmos-Predict2를 제한된 텔레오퍼레이션 trajectory으로 미세 조정

2. Dream Generation
   └─ 이미지 + 텍스트 프롬프트로 다양한 태스크 시나리오 생성

3. Reasoning & Filtering (Cosmos-Reason1)
   └─ 저품질 합성 데이터 평가 및 필터링

4. Neural Trajectory Extraction (IDM)
   └─ 2D 비디오를 3D 액션 시퀀스로 변환

5. Policy Training
   └─ 합성 데이터셋으로 visuomotor 정책 학습
```

---

## GR00T-Mimic: trajectory 증강

GR00T-Dreams와 상호보완적인 GR00T-Mimic Blueprint입니다.

### 개요

| 항목 | 내용 |
|------|------|
| 목적 | 소수의 인간 시연에서 대규모 물리적으로 정확한 trajectory 생성 |
| 방식 | 시뮬레이션 기반 trajectory 증강 (MimicGen, DexMimicGen) |
| 플랫폼 | NVIDIA Isaac Lab + Omniverse |

### 작동 방식

1. **시연 수집**: Apple Vision Pro 또는 Space Mouse로 시뮬레이션 로봇 텔레오퍼레이션
2. **키포인트 어노테이션**: 시연의 핵심 지점 표시
3. **보간 및 증강**: 물리적으로 정확한 새 trajectory 자동 생성
4. **자동 검증**: Isaac Sim에서 검증 후 학습 데이터로 변환

### GR00T-Dreams vs GR00T-Mimic

| 구분 | GR00T-Dreams | GR00T-Mimic |
|------|--------------|-------------|
| **목적** | 새로운 행동/환경 일반화 | 기존 기술 깊이 향상 |
| **방식** | Video World Model | 시뮬레이션 증강 |
| **데이터** | Neural Trajectories | Synthetic Trajectories |
| **강점** | Contact-rich, 새로운 행동 | 물리적 정확성, 대규모 스케일 |
| **핵심 도구** | Cosmos-Predict2 | Isaac Lab, MimicGen |

### 상호보완성

- **GR00T-Mimic**: 특정 기술의 **전문가(Specialist)** 양성
- **GR00T-Dreams**: 새로운 행동의 **일반화(Generalist)** 능력 부여

---

## Cosmos Transfer: 포토리얼리스틱 렌더링

시뮬레이션 데이터의 Sim-to-Real 격차를 해소합니다.

### 역할

| 기능 | 설명 |
|------|------|
| 스타일 전이 | 시뮬레이션 영상 → 실사 수준 변환 |
| 조명/환경 변경 | 다양한 조명, 텍스처, 환경 적용 |
| 구조 보존 | 로봇 동작의 물리적 동역학 유지 |

### 지원 입력 모달리티

- 세그멘테이션 비디오
- 깊이(Depth) 비디오
- 엣지(Edge) 비디오
- 블러(Blur) 비디오

### 효과

NVIDIA 연구진에 따르면, Cosmos-Transfer1 사용 시:
- "더 많은 장면 디테일과 복잡한 셰이딩, 자연스러운 조명 추가"
- 로봇 동작의 물리적 동역학은 완벽히 보존

---

## 데이터 생성 효율성

### GR00T-Dreams (DreamGen)

| 지표 | 수치 |
|------|------|
| GR00T N1.5 학습 시간 | **36시간** |
| 수동 수집 시 예상 시간 | ~3개월 |
| 효율 향상 | **~60배** |

### GR00T-Mimic

| 지표 | 수치 |
|------|------|
| 생성된 trajectory 수 | **780,000개** |
| 생성 시간 | **11시간** |
| 인간 시연 환산 | 6,500시간 (9개월 연속 작업) |
| 시간당 trajectory 생성 | ~70,900개/시간 |

### 성능 향상

| 지표 | 결과 |
|------|------|
| 합성 + 실제 데이터 조합 시 | GR00T N1 성능 **40% 향상** |

---

## 지원 로봇 Embodiments

GR00T-Dreams는 다양한 로봇 플랫폼을 지원합니다:

| 로봇 | 유형 | 설명 |
|------|------|------|
| Fourier GR1 | 휴머노이드 | 전신 휴머노이드 로봇 |
| Franka Emika Panda | 단일 팔 | 연구용 표준 매니퓰레이터 |
| SO-100 | 단일 팔 | $100 저가 로봇 팔 |
| Unitree G1 | 휴머노이드 | 실세계 학습 데이터 최초 포함 |
| RoboCasa | 시뮬레이션 | 가정환경 시뮬레이션 |

**확장성:**
- 커스텀 embodiment 추가 가능 (메타데이터 + 데이터 설정 파일 필요)
- 멀티 카메라 뷰 지원 (손목 카메라 등)

---

## DreamGen Bench

생성된 비디오의 품질을 평가하는 벤치마크입니다.

### 평가 지표

| 지표 | 평가 모델 | 설명 |
|------|----------|------|
| **Instruction Following** | Qwen2.5-VL / GPT-4o | 언어 지시 준수 여부 |
| **Physics Alignment** | QWEN-VL | 물리적 현실성 |

### 평가 대상

- 4개의 비디오 생성 모델
- 다양한 로봇 구성

---

## GR00T 시리즈에서의 활용

### GR00T N1

| 항목 | 내용 |
|------|------|
| 활용 | GR00T-Mimic (시뮬레이션 합성 데이터) |
| 한계 | 약한 일반화 - 사전학습 작업만 수행 가능 |

### GR00T N1.5

| 항목 | 내용 |
|------|------|
| 활용 | **GR00T-Dreams 본격 적용** |
| 효과 | DreamGen Tasks 성공률: 13.1% → **38.3%** |
| 학습 시간 | 36시간 (vs 수동 3개월) |
| 일반화 | 22개 새로운 행동, 10개 새로운 환경 |

### GR00T N1.6

| 항목 | 내용 |
|------|------|
| 활용 | GR00T-Dreams 확장 적용 |
| VLM | Cosmos-Reason-2B로 업그레이드 |
| 효과 | 향상된 추론과 계획 능력 |

---

## 산업 채택

| 회사 | 활용 |
|------|------|
| 1X | NEO Gamma 휴머노이드 학습 |
| Agility Robotics | 대규모 합성 데이터 생성 |
| Skild AI | 합성 데이터셋 증강 |
| AgiBot | GR00T-Mimic으로 대규모 trajectory 생성 |

---

## References

### 공식 자료
- [NVIDIA Research - DreamGen](https://research.nvidia.com/labs/gear/dreamgen/)
- [GitHub - GR00T-Dreams](https://github.com/NVIDIA/GR00T-Dreams)
- [NVIDIA Developer Blog - Enhance Robot Learning with Synthetic Trajectory Data](https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/)

### 논문
- [DreamGen: Unlocking Generalization in Robot Learning through Video World Models (arXiv:2505.12705)](https://arxiv.org/abs/2505.12705)

### 기술 블로그
- [NVIDIA Developer Blog - Building a Synthetic Motion Generation Pipeline](https://developer.nvidia.com/blog/building-a-synthetic-motion-generation-pipeline-for-humanoid-robot-learning/)
- [NVIDIA Developer Blog - R2D2: Training Generalist Robots](https://developer.nvidia.com/blog/r2d2-training-generalist-robots-with-nvidia-research-workflows-and-world-foundation-models/)

### 뉴스
- [NVIDIA Newsroom - Isaac GR00T N1 발표](https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks)
- [Hackster.io - NVIDIA's Robots Dream of Trajectories](https://www.hackster.io/news/nvidia-s-robots-dream-of-trajectories-not-electric-sheep-with-gr00t-dreams-1f12db16c80f)

---

## See Also

### GR00T 시리즈
- [GR00T](groot) - 시리즈 개요
- [GR00T N1](groot-n1) - 최초 오픈소스 모델
- [GR00T N1.5](groot-n1-5) - Frozen VLM + FLARE
- [GR00T N1.6](groot-n1-6) - 스케일 확대

### 관련 기술
- [Cosmos](cosmos) - World Foundation Model 플랫폼
- [Eagle](eagle) - Vision-Language Model

### 관련 인물
- [Jim Fan](/knowledge/people/jim-fan) - NVIDIA GEAR Lab, GR00T 연구 리드
