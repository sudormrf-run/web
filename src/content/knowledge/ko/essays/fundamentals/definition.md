---
title: Physical AI의 정의
description: Physical AI란 무엇인가? 용어의 등장 배경과 범주 정의
tags: [physical-ai, definition, robotics, embodied-ai, vla]
category: essays
order: 1
related:
  - specialist-to-generalist.md
  - what-is-rfm-vla.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

## Physical AI란?

2024년 3월 18일, NVIDIA CEO Jensen Huang은 GTC 키노트에서 "Physical AI"라는 용어를 전면에 내세웠습니다. 이후 이 키워드는 AI 업계의 핵심 화두가 되었습니다.

Physical AI는 단순한 마케팅 용어가 아닙니다. **AI가 디지털 세계를 넘어 물리적 세계에서 행동하는 시대**를 의미합니다.

---

## 다양한 정의들

Physical AI에 대한 정의는 아직 통일되지 않았습니다.

| 관점 | 정의 |
|------|------|
| **넓은 의미** | 물리적 세계와 상호작용하는 모든 AI (자율주행, 드론, 로봇 등) |
| **Embodied AI** | 신체(body)를 가지고 환경과 상호작용하며 학습하는 AI |
| **NVIDIA 관점** | 시뮬레이션과 실제 세계를 연결하는 AI 시스템 |
| **VLA 중심** | Vision-Language-Action 모델 기반의 범용 로봇 AI |

---

## 본 지식 창고의 정의

**이 지식 창고에서 다루는 Physical AI의 범주:**

> **VLA(Vision-Language-Action) 모델을 중심으로, LLM의 지능을 물리적 행동으로 확장하는 기술과 그 생태계**

왜 이렇게 정의했을까요?

### 1. LLM의 성공이 핵심

Physical AI가 갑자기 주목받는 이유는 LLM의 성공 때문입니다. LLM이 인터넷의 모든 텍스트를 학습해서 "세상의 상식"을 갖게 된 것처럼, 이제 그 지능을 로봇에게 물려줄 수 있다는 기대가 생겼습니다.

### 2. VLA가 핵심 기술

VLA(Vision-Language-Action) 모델은 LLM의 지능을 물리적 행동으로 연결하는 핵심 기술입니다. 눈으로 보고(Vision), 명령을 이해하고(Language), 행동으로 옮기는(Action) 통합 모델입니다.

### 3. 생태계 전체를 포함

Physical AI는 모델만이 아닙니다. 데이터 수집, 시뮬레이션, 하드웨어, 평가 방법론까지 포함하는 생태계입니다.

---

## Physical AI 생태계

Physical AI를 구성하는 요소들:

### 모델
- **VLA 모델**: [π0](/knowledge/models/pi0), [OpenVLA](/knowledge/models/openvla), [GR00T](/knowledge/models/groot) 등
- **Robot Foundation Model**: 다양한 로봇과 태스크에 적용 가능한 기반 모델

### 데이터
- **Teleoperation**: 사람이 로봇을 조종하며 수집
- **시뮬레이션**: 가상 환경에서 생성
- **Human Video**: 사람의 행동 영상에서 학습

### 하드웨어
- **휴머노이드**: [Tesla Optimus](/knowledge/hardware/humanoids/optimus), [Figure](/knowledge/hardware/humanoids/figure) 등
- **로봇 팔**: [ALOHA](/knowledge/hardware/arms/aloha), [Franka](/knowledge/hardware/arms/franka-panda) 등
- **센서**: 비전, 촉각, 힘 센서 등

### 평가
- **실제 로봇 평가**: 성공률, 일반화 능력
- **시뮬레이션 벤치마크**: 재현 가능한 표준 평가

---

## 왜 지금인가?

Physical AI가 2024년에 갑자기 주목받는 이유:

1. **LLM의 성공**: GPT-4 등 LLM이 보여준 놀라운 일반화 능력
2. **VLM의 발전**: 비전과 언어를 통합한 멀티모달 모델의 성숙
3. **하드웨어 발전**: 저렴하고 정밀한 로봇 하드웨어의 등장
4. **데이터 공유**: Open X-Embodiment 등 대규모 로봇 데이터셋 공개
5. **시뮬레이션 발전**: NVIDIA Isaac 등 고품질 시뮬레이터

이 요소들이 결합되면서, "이제 정말 범용 로봇이 가능할지도 모른다"는 기대가 커졌습니다.

---

## Physical AI vs 기존 로보틱스

| 구분 | 기존 로보틱스 | Physical AI |
|------|--------------|-------------|
| **접근법** | Task-specific 프로그래밍 | 데이터 기반 학습 |
| **목표** | 특정 작업 자동화 | 범용 지능 |
| **지능** | 규칙 기반 | LLM 기반 상식 |
| **적응력** | 제한적 | 새로운 상황 대응 |
| **데이터** | 소량, 특화 | 대량, 다양 |

---

## 다음 문서

Physical AI가 추구하는 "범용 로봇"이 왜 가능해졌는지 이해하려면, Specialist에서 Generalist로의 전환을 알아야 합니다.

**다음: [Specialist에서 Generalist로](specialist-to-generalist)**
