---
title: ACT (Action Chunking with Transformers)
description: Stanford의 Action Chunking 기반 Imitation Learning 정책
tags: [act, stanford, imitation-learning, aloha, cvae, transformer]
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

- **Action Chunking 개념 제시**: 심리학에서 영감받아 연속 동작을 하나의 단위(chunk)로 묶어 실행 - compounding error 완화
- **극도의 데이터 효율성**: 단 10분의 시연 데이터로 80-90% 성공률 달성 - 정밀 조작에서 획기적
- **저비용 하드웨어 ALOHA**: ~$20K로 양팔 섬세 조작 시스템 구축 가능, 모듈형 설계로 유지보수 용이
- **양팔 섬세 조작의 새 기준**: 케이블 타이 끼우기, 배터리 삽입 등 기존에 어려웠던 정밀 작업 수행
- **LeRobot 기본 추천 모델**: HuggingFace LeRobot에서 기본으로 추천하는 모델로 채택
- **빠른 학습과 낮은 연산 요구**: 일반 GPU에서도 학습 가능, 짧은 학습 시간
- **CVAE 기반 아키텍처**: Style variable(z)로 다양한 시연 스타일 캡처, 추론 시에는 prior mean 사용

<video src="/assets/models/act/act_demo_slot_battery.mp4" controls width="100%" muted autoplay loop></video>
<p align="center"><em>ACT 데모: 배터리 슬롯 삽입 - 정밀한 양팔 조작</em></p>

---

## Overview

ACT(Action Chunking with Transformers)는 Stanford에서 개발한 imitation learning 알고리즘입니다. 저비용 하드웨어 시스템 ALOHA와 함께 발표되어, 양팔 섬세 조작(bimanual manipulation)을 10분의 시연 데이터만으로 학습할 수 있음을 보여주었습니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2023년 4월 (RSS 2023) |
| 저자 | [Tony Zhao](../people/tony-zhao), Vikash Kumar, [Sergey Levine](../people/sergey-levine), [Chelsea Finn](../people/chelsea-finn) |
| 소속 | Stanford University |
| 논문 | [arXiv:2304.13705](https://arxiv.org/abs/2304.13705) |
| 프로젝트 | [tonyzhaozh.github.io/aloha](https://tonyzhaozh.github.io/aloha/) |

---

## Key Ideas

### Action Chunking

심리학에서 영감을 받은 개념으로, 연속된 동작들을 하나의 단위(chunk)로 묶어 실행합니다.

**기존 Behavior Cloning:**
```
관측 → 정책 → 다음 1개 액션
```

**ACT의 Action Chunking:**
```
관측 → 정책 → 다음 k개 액션 시퀀스 (예: 90 timesteps)
```

**장점:**
- 태스크의 유효 horizon을 k배 줄임
- Compounding error 완화
- 더 부드러운 동작 생성

### Temporal Ensembling

정책을 더 자주 쿼리하고, 겹치는 action chunk들을 평균하여 더욱 부드러운 동작 실행.

---

## Architecture

ACT는 **Conditional VAE (CVAE)** 의 디코더로 학습됩니다.

<!-- Image pending: ![ACT Architecture](../assets/models/act/act_architecture.png) -->
<p align="center"><em>ACT 아키텍처: CVAE 기반으로 학습 시 style variable z를 인코딩, 추론 시 z=0 사용</em></p>

**입력:**
- 4개 RGB 카메라 이미지 (480x640)
- 관절 위치 (joint positions)

**출력:**
- 90 timesteps의 액션 시퀀스
- 50Hz 제어 주파수

---

## ALOHA Hardware

ACT와 함께 공개된 저비용 양팔 조작 시스템.

| 항목 | 내용 |
|------|------|
| 총 비용 | ~$20,000 |
| 로봇 암 | ViperX 6-DoF × 2 (각 ~$5,600) |
| 페이로드 | 750g |
| 작업 범위 | 1.5m span |
| 정확도 | 5-8mm |
| 특징 | 모듈형, Dynamixel 모터 (쉬운 교체) |

---

## Performance

**50개 시연으로 학습한 태스크 성공률:**

| Task | Success Rate |
|------|-------------|
| 태스크 1 | 96% |
| 태스크 2 | 84% |
| 태스크 3 | 64% |
| 태스크 4 | 92% |

**시연 데이터 효율:**
- 단 **10분**의 시연 데이터로 80-90% 성공률
- 케이블 타이 끼우기, 배터리 삽입 등 정밀 작업 수행

---

## Demonstrated Tasks

- 투명 소스 컵 열기
- 배터리 슬롯에 삽입
- 핑퐁공 저글링 (동적 태스크)
- 체인 조립 (접촉이 많은 태스크)
- 지퍼 타이 끼우기 (정밀 태스크)

<video src="/assets/models/act/act_demo_reactive_cup.mov" controls width="100%"></video>
<p align="center"><em>ACT 데모: 투명 소스 컵 조작 - 반응형 양팔 협응</em></p>

---

## Impact & Adoption

ACT는 다음과 같은 이유로 널리 채택되고 있습니다:

- **빠른 학습**: 짧은 학습 시간
- **낮은 연산 요구**: 일반 GPU에서도 학습 가능
- **강력한 성능**: 정밀 조작에서 높은 성공률
- **LeRobot 통합**: HuggingFace LeRobot의 기본 추천 모델

### 후속 연구

| 모델 | 설명 |
|------|------|
| **ALOHA 2** | Mobile ALOHA, 개선된 하드웨어 |
| **Bi-ACT** | Bilateral Control 기반 확장 |

---

## References

- [Project Page](https://tonyzhaozh.github.io/aloha/)
- [arXiv Paper](https://arxiv.org/abs/2304.13705)
- [LeRobot ACT Documentation](https://huggingface.co/docs/lerobot/en/act)
- [GitHub - ALOHA Codebase](https://github.com/tonyzhaozh/aloha)

---

## See Also

- [모델 목록](index)
- [Diffusion Policy](diffusion-policy)
- [SmolVLA](smolvla)

### 관련 인물
- [Tony Zhao](../people/tony-zhao) - 제1저자
- [Chelsea Finn](../people/chelsea-finn) - 지도교수
- [Sergey Levine](../people/sergey-levine) - 공동 저자

