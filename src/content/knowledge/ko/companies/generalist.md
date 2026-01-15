---
title: Generalist AI
description: Generalist AI - GEN-0와 로보틱스 스케일링 법칙
tags: [generalist, gen0, scaling-laws, harmonic-reasoning]
category: companies

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## Overview

Generalist AI는 OpenAI, Google DeepMind, Boston Dynamics 출신 팀이 설립한 스타트업입니다 (회사 발표 기반). 270,000시간의 실제 물리 상호작용 데이터로 로보틱스 분야 최초의 **스케일링 법칙**을 발견했다고 주장합니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 11월 4일 |
| 핵심 모델 | GEN-0 |
| 핵심 주장 | 로보틱스 스케일링 법칙 발견 |
| 데이터 | 270,000+ 시간 실제 데이터 |
| 블로그 | [generalistai.com/blog](https://generalistai.com/blog/nov-04-2025-GEN-0) |

---

## 창업팀

### 배경

| 출신 | 기여 |
|------|------|
| OpenAI | ChatGPT, GPT-4 스케일링 |
| Google DeepMind | PaLM-E, RT-2 개발 |
| Boston Dynamics | Atlas, Spot, Stretch |
| 기타 | 자율주행 기반 기술 |

---

## GEN-0 모델

### 핵심 특징

| 항목 | 내용 |
|------|------|
| 학습 데이터 | 270,000+ 시간 |
| 데이터 소스 | 실제 물리적 상호작용 |
| 환경 | 가정, 베이커리, 세탁소, 창고, 공장 |
| 태스크 | 감자 깎기부터 볼트 조이기까지 |

### 아키텍처: Harmonic Reasoning

System 1-System 2에 의존하지 않는 새로운 접근:

```
┌────────────────────────────────────────┐
│           Harmonic Reasoning           │
│                                        │
│  [Sensing Stream] ←→ [Acting Stream]   │
│         (연속적, 비동기적)              │
│                                        │
│  "조화로운 상호작용"                    │
└────────────────────────────────────────┘
```

| 특징 | 설명 |
|------|------|
| 핵심 | 감지와 행동의 연속 스트림 조화 |
| 장점 | 매우 큰 모델 크기로 스케일 가능 |
| 지원 로봇 | 6, 7, 16+ 자유도 |

---

## 로보틱스 스케일링 법칙

### 핵심 발견 (회사 주장)

LLM처럼 로보틱스에서도 **예측 가능한 스케일링**:

```
L(D) ∝ D^(-0.5)

L = 다운스트림 태스크 오류
D = 사전학습 데이터 양

→ 데이터 2배 → 오류 ~30% 감소
```

### 관찰 결과

| 요소 | 효과 |
|------|------|
| 사전학습 데이터 ↑ | 성능 ↑ |
| 컴퓨트 ↑ | 성능 ↑ |
| 예측 가능성 | 일관되고 예측 가능한 향상 |

---

## 지능 임계점 (Phase Transition)

### 7B 파라미터 임계점

| 모델 크기 | 현상 |
|-----------|------|
| < 1B | 복잡한 데이터 흡수 실패, "경직화" (ossification) |
| **7B+** | 데이터 내재화, 지속적 개선 |

### 의미

```
< 7B: 데이터를 더 줘도 개선 한계
≥ 7B: 더 많은 데이터 → 계속 개선
      + 적은 후속 학습으로 새 태스크 적응
```

→ 7B가 로보틱스의 **"GPT-3 모멘트"**일 수 있음

---

## 데이터 수집

### 규모

| 항목 | 수치 |
|------|------|
| 총 데이터 | 270,000+ 시간 |
| 수집 환경 | 1,000+ 장소 |
| 주간 증가 | 10,000+ 시간 |
| 타입 | 실제 물리적 상호작용만 |

### 철학: 실제 데이터 우위

```
시뮬레이션: 물리적 정확도 한계
인간 비디오: 액션 추출 어려움
텔레옵: 느리고 비쌈

Generalist 관점: "실제 물리 상호작용만이 진짜"
→ 270K 시간 실제 데이터로 입증
```

---

## Cross-Embodiment

### 다양한 로봇 지원

설계 단계부터 다양한 로봇 형태 지원:

| 자유도 | 테스트 |
|--------|--------|
| 6 DoF | ✓ |
| 7 DoF | ✓ |
| 16+ DoF | ✓ |

---

## 의의

GEN-0의 주장이 사실이라면:

| 영향 | 설명 |
|------|------|
| 스케일링 | 로보틱스도 LLM처럼 스케일링 가능 증명 |
| 경제적 정당성 | 대규모 투자에 대한 ROI 예측 가능 |
| 데이터 논쟁 | 실제 데이터 우위 주장 강화 |
| 업계 반응 | "로보틱스의 ChatGPT 모멘트" |

---

## References

- [Generalist AI - GEN-0](https://generalistai.com/blog/nov-04-2025-GEN-0)
- [Generalist AI Website](https://generalistai.com/)
- [Humanoids Daily Article](https://www.humanoidsdaily.com/feed/generalist-ai-unveils-gen-0-claims-scaling-laws-for-robotics-backed-by-270-000-hours-of-real-world-data)
- [MarkTechPost Article](https://www.marktechpost.com/2025/11/05/generalist-ai-introduces-gen-%CE%B8/) (GEN-0)

---

## See Also

- [회사 목록](index.md)
- [GEN-0 모델](../models/generalist-gen0.md)
- [Action Data Scaling 문제](../challenges/scaling-problem.md)

