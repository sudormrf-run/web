---
title: FAST (Fast Action Tokenizer)
description: Physical Intelligence의 DCT + BPE 기반 로봇 액션 토크나이저 - 10배 압축, 5배 빠른 VLA 학습
tags: [fast, physical-intelligence, tokenizer, vla, action-tokenization, dct, bpe]
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

- **Discrete Action Token + 압축의 가능성**. Discrete action 토큰을 사용해도, 압축을 잘하면 pretrain 시간을 단축시킬 수 있다는 가능성을 보여줌.
- **LLM 능력 활용 극대화**. Autoregressive 구조를 사용할 수 있으니 LLM의 언어 이해 능력을 더 잘 끌어쓸 수 있음.
- **연구 단계에 유리**. Inference가 느린 단점이 있어서 실제 배포보다는 학습을 시도하는 연구 단계에 장점이 있음.

</div>

## 핵심 의의

- **DCT + BPE 조합의 획기적 압축**: JPEG/MP3에서 사용되는 DCT와 LLM 토크나이저의 BPE를 결합하여 약 10배 압축 달성
- **5배 빠른 VLA 학습**: Diffusion 기반 모델 대비 학습 시간 대폭 단축
- **고주파 Dexterous 태스크 지원**: 기존 binning 방식으로는 불가능했던 고주파 정밀 조작 학습 가능
- **Diffusion 수준의 Dexterity**: Flow matching/diffusion과 유사한 수준의 정밀 조작 성능 달성
- **언어 지시 이해력 향상**: Autoregressive 구조로 인터넷 스케일 사전학습의 언어 이해력 더 잘 전이
- **범용 토크나이저 FAST+**: 100만 개 실제 로봇 궤적으로 학습, 다양한 액션 공간/주파수에 즉시 적용 가능

---

## Overview

FAST(Frequency-space Action Sequence Tokenization)는 Physical Intelligence가 2025년 1월 발표한 로봇 액션 토크나이저입니다. 기존 VLA 모델들이 사용하던 단순한 per-dimension binning 방식의 한계를 극복하여, 고주파 dexterous manipulation 태스크에서도 autoregressive 모델을 효과적으로 학습할 수 있게 합니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 1월 16일 |
| 회사 | Physical Intelligence |
| 논문 | [arXiv:2501.09747](https://arxiv.org/abs/2501.09747) |
| 블로그 | [pi.website/research/fast](https://www.pi.website/research/fast) |
| 모델 | [HuggingFace: physical-intelligence/fast](https://huggingface.co/physical-intelligence/fast) |

---

## 왜 FAST가 필요한가?

### 기존 토크나이징의 문제점

기존 VLA 모델들(OpenVLA, RT-2 등)은 로봇 액션을 **per-dimension, per-timestep binning**으로 토큰화했습니다:

| 문제점 | 설명 |
|--------|------|
| **토큰 수 폭발** | 고주파(50Hz+) 제어 시 엄청난 토큰 시퀀스 생성 |
| **Dexterous 실패** | 정밀한 손가락 조작 등 고주파 태스크 학습 불가 |
| **비효율적 학습** | 긴 시퀀스로 인한 학습 시간 증가 |
| **언어 연결 약화** | 액션 토큰과 언어 토큰 간 격차 |

### FAST의 해결책

**압축 기반 접근**: 액션 시퀀스를 먼저 압축한 후 토큰화

---

## 기술적 구조

![FAST Tokenizer 파이프라인](/assets/models/pi0/pi-fast-tokenizer.png)
<p align="center"><em>FAST 토크나이저: DCT → Quantize → Flatten → BPE 압축 과정</em></p>

### 5단계 압축 파이프라인

| 단계 | 이름 | 설명 |
|------|------|------|
| 1 | **Normalized Action Chunk** | 원본 액션 시퀀스 정규화 |
| 2 | **DCT (Discrete Cosine Transform)** | 시간 도메인 → 주파수 도메인 변환 (JPEG/MP3와 동일 원리) |
| 3 | **Quantize** | 주파수 성분을 이산값으로 양자화 → Sparse frequency matrix 생성 |
| 4 | **Flatten** | 저주파 성분 우선으로 1차원 배열로 펼침 |
| 5 | **BPE (Byte Pair Encoding)** | 빈번한 패턴을 새 토큰으로 병합하여 최종 압축 |

> **참고**: Quantization 단계에서 정보 손실이 발생하는 손실 압축(lossy compression) 방식입니다. JPEG 이미지 압축과 유사한 원리로, 고주파 성분의 일부를 버려 압축률을 높입니다.

### 압축 결과

| 메트릭 | 값 |
|--------|-----|
| **압축률** | ~10배 |
| **청크당 토큰** | 30-60개 |
| **구현 복잡도** | 3줄의 코드 |

---

## FAST+ 범용 토크나이저

### 학습 데이터

| 항목 | 내용 |
|------|------|
| 학습 데이터 | 100만 개 실제 로봇 궤적 |
| 데이터 소스 | 다양한 로봇 플랫폼 |
| 액션 공간 | 다양한 DoF, 제어 주파수 |

### 특징

- **Zero-shot 적용**: 새로운 로봇에 바로 사용 가능
- **범용성**: 다양한 액션 공간과 제어 주파수 지원
- **사전학습 완료**: 별도 토크나이저 학습 불필요

---

## 성능 비교

### vs Diffusion/Flow Matching 기반 VLA

| 항목 | FAST (Autoregressive) | Diffusion/Flow Matching |
|------|----------------------|------------------------|
| **학습 속도** | **5배 빠름** | 기준 |
| **Dexterity** | 유사한 수준 | 유사한 수준 |
| **추론 속도** | 느림 (autoregressive) | **빠름** |
| **언어 이해** | **더 나음** | 기준 |

### 검증된 태스크

FAST로 학습한 정책이 성공적으로 수행한 복잡한 조작 태스크:

| 태스크 | 설명 |
|--------|------|
| 빨래 접기 | Laundry folding |
| 테이블 정리 | Table bussing |
| 식료품 봉지 담기 | Grocery bagging |

### DROID 데이터셋 결과

- **최초의 제로샷 일반화**: DROID 데이터셋에서 학습한 최초의 generalist policy
- **다중 환경 배포**: UC Berkeley, Stanford, University of Washington 등에서 검증

---

## π0-FAST 통합

[π0](pi0)에 FAST를 적용한 변형 모델:

| 특징 | π0 (Flow Matching) | π0-FAST (Autoregressive) |
|------|-------------------|-------------------------|
| 액션 생성 | Flow matching | FAST 토큰 autoregressive |
| 학습 속도 | 기준 | **5배 빠름** |
| 추론 비용 | 기준 | 4-5배 높음 |
| 언어 이해 | 좋음 | **더 나음** |

---

## 한계점

### 추론 속도

| 문제 | 설명 |
|------|------|
| **Autoregressive 디코딩** | 토큰을 순차적으로 생성해야 함 |
| **π0 대비 느림** | Flow matching의 병렬 디코딩보다 느림 |
| **추론 비용 증가** | 실시간 제어에서 고려 필요 |

### 적합한 사용 사례

- 학습 시간이 중요한 연구 환경
- 언어 지시 이해가 중요한 태스크
- 오프라인 배치 학습

---

## 기술적 세부사항

### 저자

| 이름 | 소속 |
|------|------|
| Karl Pertsch | Physical Intelligence |
| Kyle Stachowicz | Physical Intelligence |
| Brian Ichter | Physical Intelligence |
| Danny Driess | Physical Intelligence |
| Suraj Nair | Physical Intelligence |
| Quan Vuong | Physical Intelligence |
| Oier Mees | Physical Intelligence |
| [Chelsea Finn](/knowledge/people/chelsea-finn) | Physical Intelligence |
| [Sergey Levine](/knowledge/people/sergey-levine) | Physical Intelligence |

### 스케일링

| 항목 | 값 |
|------|-----|
| 학습 데이터 | 10,000+ 시간 |
| 로봇 궤적 | 100만+ 개 |
| 지원 로봇 | 다양한 플랫폼 |

---

## References

- [Physical Intelligence Blog - FAST](https://www.pi.website/research/fast)
- [arXiv Paper](https://arxiv.org/abs/2501.09747)
- [HuggingFace - FAST](https://huggingface.co/physical-intelligence/fast)
- [GitHub - openpi](https://github.com/Physical-Intelligence/openpi)

---

## See Also

- [π0](pi0) - Flow Matching 기반 모델 (π0-FAST의 기반)
- [π Series](pi-series) - Physical Intelligence 모델 시리즈
- [π0.5](pi0-5) - Open-world 일반화 버전
- [Physical Intelligence](/knowledge/companies/physical-intelligence) - 회사 정보
- [Diffusion Policy](diffusion-policy) - 비교 대상: Diffusion 기반 정책

### 관련 인물

- [Chelsea Finn](/knowledge/people/chelsea-finn) - Physical Intelligence 공동창업자
- [Sergey Levine](/knowledge/people/sergey-levine) - Physical Intelligence 공동창업자
