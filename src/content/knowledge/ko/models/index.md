---
title: VLA 모델 목록
description: Vision-Language-Action 모델들의 역사와 현황
category: models
order: 1
isFeatured: true
icon: brain

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

# VLA 모델 목록

> Vision-Language-Action 모델들의 역사와 목록

VLA(Vision-Language-Action) 모델은 시각 정보와 언어 지시를 받아 로봇 동작을 출력하는 AI 모델입니다.

---

## 타임라인

2022년 RT-1을 시작으로 VLA 모델은 빠르게 발전해왔습니다.

- 2022: RT-1 (Google)
- 2023: RT-2, ACT, Diffusion Policy
- 2024: Octo, OpenVLA, GR00T, π0
- 2025: SmolVLA, Gemini Robotics, π0.5, GR00T N1.5/N1.6, π*0.6

---

## VLA 파운데이션 모델

### Google DeepMind

| 모델 | 설명 |
|------|------|
| [RT (Robotics Transformer)](./rt) | VLA의 시초. RT-1에서 시작하여 RT-2에서 "Action as Language" 패러다임 정립, RT-X로 Open X-Embodiment 데이터셋 구축 |
| [Gemini Robotics](./gemini-robotics) | Gemini 2.0 기반 VLA. Cross-Embodiment 지원, System 1/2 구조, On-Device 버전 제공 |

### Physical Intelligence (π Series)

| 모델 | 설명 |
|------|------|
| [π Series](./pi-series) | Physical Intelligence의 VLA 모델 시리즈 개요 |
| [π0](./pi0) | Flow Matching 기반 첫 Generalist Policy. PaliGemma VLM + 50Hz 고속 제어 |
| [π0.5](./pi0-5) | Open-World 일반화. 새로운 가정 환경에서도 작동, Web 데이터 Co-training |
| [π*0.6](./pi0-6-star) | RL 기반 자가 개선. RECAP 방법론으로 90%+ 성공률 달성 |
| [FAST](./fast) | DCT + BPE 기반 액션 토크나이저. 10배 압축, 5배 빠른 VLA 학습 |

### NVIDIA (GR00T Series)

| 모델 | 설명 |
|------|------|
| [GR00T](./groot) | NVIDIA 휴머노이드 파운데이션 모델 시리즈 개요. Dual-System 아키텍처 |
| [GR00T N1](./groot-n1) | 세계 최초 오픈소스 휴머노이드 VLA. 합성 데이터로 40% 성능 향상 입증 |
| [GR00T N1.5](./groot-n1-5) | Frozen VLM + FLARE Loss. 언어 지시 준수율 2배 향상 (46.6% → 93.3%) |
| [GR00T N1.6](./groot-n1-6) | DiT 2배 확대, Cosmos VLM, Relative Action Space. Loco-manipulation 지원 |

### 오픈소스 VLA

| 모델 | 설명 |
|------|------|
| [OpenVLA](./openvla) | 최초 대규모 오픈소스 VLA (7B). 55B RT-2-X와 대등한 성능, LoRA로 효율적 파인튜닝 |
| [Octo](./octo) | 93M 경량 모델. Transformer + Diffusion 조합, consumer GPU에서 파인튜닝 가능 |
| [SmolVLA](./smolvla) | 450M으로 π0 수준 성능. MacBook에서 실행 가능, LeRobot 커뮤니티 데이터로 학습 |

### 기업 VLA

| 모델 | 설명 |
|------|------|
| [Figure Helix](./figure-helix) | Figure AI의 휴머노이드 VLA. 최초 전신 고속 제어 (200Hz), 듀얼 로봇 동시 제어 |
| [LBM (Large Behavior Model)](./lbm-atlas) | Boston Dynamics + TRI의 Atlas용 VLA. 450M Diffusion Transformer, 전신 단일 모델 제어 |
| [CraftNet](./craftnet) | Sharpa의 VTLA 모델. 촉각 통합, System 0/1/2 계층 구조, 100Hz 정밀 조작 |
| [Redwood AI](./redwood-ai) | 1X Technologies의 NEO용 VLA. 160M 파라미터, 온보드 실행, World Model 통합 |
| [Generalist GEN-0](./generalist-gen0) | 270,000시간 실제 데이터로 로보틱스 스케일링 법칙 발견 주장. Harmonic Reasoning 아키텍처 |
| [Sunday ACT-1](./sunday-act1) | Zero Robot Data 접근. $200 장갑으로 500+ 가정에서 10M+ 에피소드 수집 |

---

## Imitation Learning 정책 모델

| 모델 | 설명 |
|------|------|
| [ACT](./act) | Stanford의 Action Chunking 기반 정책. 10분 시연으로 80-90% 성공률, ALOHA 하드웨어와 함께 공개 |
| [Diffusion Policy](./diffusion-policy) | Diffusion 기반 Visuomotor 정책. Multimodal action 자연스럽게 처리, 46.9% 성능 향상 |

---

## Vision-Language 모델 (로보틱스용)

| 모델 | 설명 |
|------|------|
| [Eagle](./eagle) | NVIDIA의 Mixture of Encoders VLM. GR00T N1/N1.5의 시각적 두뇌 역할 |
| [Cosmos](./cosmos) | NVIDIA의 World Foundation Model 플랫폼. Tokenizer, Predict, Transfer, Reason 모델 제공 |

---

## 합성 데이터 생성

| 모델 | 설명 |
|------|------|
| [DreamGen](./dreamgen) | NVIDIA의 Neural Trajectory 생성 파이프라인. World Foundation Model로 36시간 만에 GR00T 학습 데이터 생성 |

---

## 모델 비교표

### 파라미터 및 특징

| 모델 | 파라미터 | 오픈소스 | 특징 |
|------|---------|---------|------|
| [π0](./pi0) | 3.3B | O | Flow Matching, 50Hz |
| [GR00T N1](./groot-n1) | 2.2B | O | Dual-System, 휴머노이드 |
| [OpenVLA](./openvla) | 7B | O | Prismatic VLM, LoRA |
| [SmolVLA](./smolvla) | 450M | O | MacBook 실행 가능 |
| [Octo](./octo) | 93M | O | Diffusion 디코더 |
| [Gemini Robotics](./gemini-robotics) | - | X | Gemini 2.0 기반 |
| [Figure Helix](./figure-helix) | - | X | 200Hz 고속 제어 |

### 학습 데이터 규모

| 모델 | 데이터 규모 | 데이터 유형 |
|------|------------|-----------|
| [Generalist GEN-0](./generalist-gen0) | 270,000시간 | 실제 로봇 |
| [π0](./pi0) | 10,000+ 시간 | 텔레오퍼레이션 |
| [Sunday ACT-1](./sunday-act1) | 10M+ 에피소드 | 장갑 (인간 움직임) |
| [GR00T N1](./groot-n1) | 780K 합성 + 실제 | 시뮬레이션 + 텔레오퍼레이션 |
| [SmolVLA](./smolvla) | 10.6M 프레임 | 커뮤니티 데이터 |
