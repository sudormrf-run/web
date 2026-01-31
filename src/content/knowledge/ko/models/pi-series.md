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
lastEditedAt: 2026-01-21
---

<div class="author-note">

### 필자의 의견

- **명실상부 스타 연구자 팀**. Google DeepMind RT 시리즈를 이끌던 Karol Hausman, Chelsea Finn, Sergey Levine, Pete Florence 등이 모여 만든 모델 시리즈.
- **VLA + Teleop 데이터의 정석**. 텔레오퍼레이션 기반 데이터 수집과 VLA 아키텍처로 Robot Foundation Model을 구축하는 접근 방식을 잘 보여줌.
- **오픈소스 친화적**. openpi로 가중치와 코드를 공개해 일반 사용자도 파인튜닝 가능. 1-20시간 데이터면 충분.
- **휴머노이드/합성 데이터에 부정적**. 휴머노이드보다 모바일 매니퓰레이터, 합성 데이터보다 실제 데이터 중심 접근.
- **Follow-up 필수**. Physical AI 분야에서 지속적으로 주목해야 할 모델 시리즈.

</div>

<video src="/assets/models/pi0/olympics.mp4" controls width="100%"></video>
<p align="center"><em>π Series: Robot Olympics Challenge (Physical Intelligence)</em></p>

## 핵심 의의

- **VLA의 새로운 패러다임**: Flow Matching 기반 연속 액션 생성으로 Diffusion/Autoregressive 방식의 대안 제시
- **실제 가정 환경 일반화**: π0.5에서 학습하지 않은 완전히 새로운 가정에서도 작동
- **RL을 통한 자가 개선**: π*0.6에서 RECAP 방법론으로 실제 경험에서 학습
- **완전 오픈소스**: [openpi](https://github.com/Physical-Intelligence/openpi)로 모델 가중치, 학습 코드 전체 공개

---

## Overview

π Series는 [Physical Intelligence](/knowledge/companies/physical-intelligence)가 2024년 10월부터 발표한 Vision-Language-Action 모델 시리즈입니다.

| 항목 | 내용 |
|------|------|
| 회사 | Physical Intelligence |
| 설립 | 2024년 |
| GitHub | [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) |
| 블로그 | [pi.website/blog](https://www.pi.website/blog) |

---

## Evolution Timeline

| 날짜 | 이름 | 설명 | 문서 | 공식 링크 |
|------|------|------|------|-----------|
| 2024.10.31 | **π0** | 첫 Generalist Policy, Flow Matching + PaliGemma 3B | [π0](pi0) | [Blog](https://www.pi.website/blog/pi0) |
| 2025.01.16 | **FAST** | 5x 빠른 학습, DCT + BPE 압축 | [FAST](fast) | [Research](https://www.pi.website/research/fast) |
| 2025.02.04 | **openpi** | 가중치, 코드 공개 (JAX + PyTorch) | - | [Blog](https://www.pi.website/blog/openpi) |
| 2025.02.26 | **HIRobot** | 인간-로봇 인터랙션 연구 | - | [Research](https://www.pi.website/research/hirobot) |
| 2025.04.22 | **π0.5** | Open-World Generalization, Web 데이터 Co-training | [π0.5](pi0-5) | [Blog](https://www.pi.website/blog/pi05) |
| 2025.05.28 | **Knowledge Insulation** | 7.5x 적은 학습 스텝 | - | [Research](https://www.pi.website/research/knowledge_insulation) |
| 2025.06.09 | **Real-Time Chunking** | 고지연 환경에서도 실시간 제어 | - | [Research](https://www.pi.website/research/real_time_chunking) |
| 2025.11.17 | **π*0.6** | RL로 자가 개선 (RECAP) | [π*0.6](pi0-6-star) | [Blog](https://www.pi.website/blog/pistar06) |
| 2025.12.16 | **Human-to-Robot** | 인간 동영상에서 로봇 학습 | - | [Research](https://www.pi.website/research/human_to_robot) |

---

## Model Versions

| 버전 | 발표 | 핵심 혁신 | 상세 문서 |
|------|------|----------|----------|
| **π0** | 2024.10 | Flow Matching VLA, 50Hz 제어 | [π0](pi0) |
| **π0.5** | 2025.04 | Open-World 일반화, Web 데이터 Co-training | [π0.5](pi0-5) |
| **π*0.6** | 2025.11 | RL 자가 개선, RECAP | [π*0.6](pi0-6-star) |

---

## Core Innovations

### Flow Matching Architecture

Diffusion의 대안으로, 복잡한 multimodal action distribution을 효율적으로 모델링. 50Hz action chunk 생성.

### FAST Tokenizer

> 상세 문서: [FAST (Fast Action Tokenizer)](fast)

DCT + BPE 기반 액션 압축으로 **10배 압축**, **5배 빠른 학습**.

### Knowledge Insulation

> 상세: [pi.website/research/knowledge_insulation](https://www.pi.website/research/knowledge_insulation)

VLM 백본의 지식을 보존하면서 로봇 학습. Gradient blocking으로 **7.5배 적은 학습 스텝**.

### Real-Time Chunking (RTC)

> 상세: [pi.website/research/real_time_chunking](https://www.pi.website/research/real_time_chunking)

Inpainting 방식으로 고지연 환경(200ms+)에서도 실시간 제어 유지.

### RECAP

> 상세 문서: [π*0.6](pi0-6-star)

RL with Experience & Corrections via Advantage-conditioned Policies. 시연 + 자율 경험 + 코칭으로 자가 개선.

---

## Open Source

### openpi Repository

| 모델 | 설명 |
|------|------|
| π0 base | 사전학습 모델, 파인튜닝용 |
| π0-FAST base | FAST 토크나이저 적용 버전 |
| π0 DROID | Franka 단일 암 파인튜닝 |
| π0 ALOHA | 양팔 조작 파인튜닝 |

- **JAX**: 공식 구현
- **PyTorch**: HuggingFace LeRobot 통합
- **파인튜닝**: 1~20시간 데이터, Consumer GPU 가능

---

## Research Publications

### Blog Posts

| 날짜 | 제목 |
|------|------|
| 2024.10.31 | [π0: Our First Generalist Policy](https://www.pi.website/blog/pi0) |
| 2025.02.04 | [Open Sourcing π0](https://www.pi.website/blog/openpi) |
| 2025.04.22 | [π0.5: Open-World Generalization](https://www.pi.website/blog/pi05) |
| 2025.11.17 | [π*0.6: Learning from Experience](https://www.pi.website/blog/pistar06) |

### Research

| 날짜 | 제목 |
|------|------|
| 2025.01.16 | [FAST: Efficient Robot Action Tokenization](https://www.pi.website/research/fast) |
| 2025.02.26 | [HIRobot: Interactive Learning](https://www.pi.website/research/hirobot) |
| 2025.05.28 | [Knowledge Insulation](https://www.pi.website/research/knowledge_insulation) |
| 2025.06.09 | [Real-Time Action Chunking](https://www.pi.website/research/real_time_chunking) |
| 2025.12.16 | [Human-to-Robot Transfer](https://www.pi.website/research/human_to_robot) |

### Papers

| 모델 | 링크 |
|------|------|
| π0 | [arXiv:2410.24164](https://arxiv.org/abs/2410.24164) |
| π0.5 | [arXiv:2504.16054](https://arxiv.org/abs/2504.16054) |
| π*0.6 | [arXiv:2511.14759](https://arxiv.org/abs/2511.14759) |

---

## See Also

- [π0](pi0)
- [π0.5](pi0-5)
- [π*0.6](pi0-6-star)
- [FAST](fast)
- [Physical Intelligence](/knowledge/companies/physical-intelligence)
