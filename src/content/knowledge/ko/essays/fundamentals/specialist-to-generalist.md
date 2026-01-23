---
title: Specialist에서 Generalist로
description: 특화된 로봇 모델에서 범용 모델로의 전환, VLA가 Generalist가 될 수 있는 이유
tags: [specialist, generalist, evolution, vla, rfm]
category: essays
order: 2
related:
  - what-is-rfm-vla.md
  - scaling-problem.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-21
---

> Specialist에서 Generalist로의 전환에 대한 기본 개념은 [RFM & VLA란 무엇인가](what-is-rfm-vla)를 참조하세요.

---

## Specialist의 정의

**Specialist 모델**: 특정 태스크, 특정 환경, 특정 물체에서만 동작하는 모델

특징:
- 학습 데이터와 동일한 조건에서만 작동
- 환경 변화에 취약 (조명, 배경, 물체 위치)
- 새로운 태스크 지원에 재학습 필요
- 높은 성능이지만 좁은 적용 범위

---

## Generalist의 정의

**Generalist 모델**: 다양한 태스크, 환경, 물체에서 동작하는 범용 모델

특징:
- 학습하지 않은 새로운 상황에서도 적응
- Zero-shot 또는 Few-shot 일반화
- World Knowledge 기반 추론
- 넓은 적용 범위이지만 Specialist 대비 낮을 수 있는 개별 성능

---

## 왜 지금 Generalist가 가능해졌나

### 1. Pre-trained VLM의 World Knowledge

VLA는 PaliGemma, Qwen-VL, SmolVLM 등 사전학습된 VLM을 백본으로 사용합니다. 이 VLM들은 인터넷의 방대한 이미지-텍스트 데이터로 학습되어 "세상의 상식"을 갖고 있습니다.

- 물체 인식: "이것은 컵이다"
- 물리 상식: "컵을 기울이면 물이 쏟아진다"
- 언어 이해: "Pick up the red cup" 해석

### 2. Cross-Embodiment 데이터셋

[Open X-Embodiment](https://robotics-transformer-x.github.io/)와 같은 대규모 멀티로봇 데이터셋의 등장으로, 다양한 로봇 형태에서의 경험을 공유할 수 있게 되었습니다.

| 데이터셋 | 로봇 수 | 태스크 수 | 에피소드 |
|---------|---------|----------|---------|
| Open X-Embodiment | 22+ | 527 | 1M+ |
| DROID | 7 | 500+ | 76K |
| BridgeData V2 | 1 | 13 | 60K |

### 3. Scaling Law의 적용

LLM에서 증명된 Scaling Law가 VLA에도 적용될 것이라는 기대:

- 더 많은 데이터 → 더 나은 일반화
- 더 큰 모델 → 더 복잡한 태스크
- 더 다양한 경험 → 더 넓은 적용 범위

---

## 현재 VLA들의 Generalist 수준

### π0.5: Open-World Generalization

Physical Intelligence의 [π0.5](../models/pi0-5)는 학습하지 않은 완전히 새로운 가정에서도 동작함을 보여줬습니다.

- 새로운 가정 환경
- 새로운 물체
- 새로운 배치

### GR00T: Cross-Embodiment

NVIDIA의 [GR00T](../models/groot) 시리즈는 다양한 로봇 하드웨어에서의 일반화를 목표로 합니다.

### SmolVLA: 효율적 Generalist

HuggingFace의 [SmolVLA](../models/smolvla)는 450M 파라미터로도 Generalist 수준 성능이 가능함을 보여줍니다.

---

## Specialist vs Generalist: 트레이드오프

| 측면 | Specialist | Generalist |
|------|-----------|------------|
| 개별 태스크 성능 | 높음 | 중간~높음 |
| 적용 범위 | 좁음 | 넓음 |
| 배포 비용 | 태스크당 높음 | 낮음 (하나로 여러 태스크) |
| 학습 비용 | 낮음 | 높음 |
| 유지보수 | 태스크별 관리 | 통합 관리 |

---

## 앞으로의 방향

### Fine-tuning: Generalist → Task-Specific

Pre-trained Generalist를 특정 태스크에 Fine-tuning하는 방식이 부상:

1. 범용 VLA로 기본 능력 확보
2. 적은 데이터로 특정 환경/태스크에 적응
3. Specialist 수준 성능 + Generalist의 기반 지식

### Co-training: 다양성의 힘

Web 데이터, 시뮬레이션 데이터, 로봇 데이터를 함께 학습하여 일반화 능력 강화.

---

## 다음 문서

Generalist 로봇을 구현하는 핵심 기술인 VLA에 대해 자세히 알아봅시다.

**다음: [RFM & VLA란 무엇인가](what-is-rfm-vla)**
