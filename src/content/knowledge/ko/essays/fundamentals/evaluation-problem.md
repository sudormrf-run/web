---
title: Evaluation의 어려움
description: VLA 모델 평가가 어려운 이유
tags: [evaluation, challenge, robotics]
category: essays
order: 5
related:
  - scaling-problem.md
  - ../insights/simulation-world-model.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## 핵심 문제

Evaluation은 실물 로봇을 구동하면서 동작을 봐야 하는데:
- 하드웨어 고장의 위험
- 환경 파괴 위험 (예: 접시를 깬다)
- 시간과 비용의 문제

...

---

## LLM Evaluation과의 차이

| 구분 | LLM | VLA |
|------|-----|-----|
| 평가 환경 | 디지털 | 물리 세계 |
| 평가 비용 | 저렴 | 비쌈 |
| 반복 가능성 | 높음 | 낮음 |
| 위험성 | 없음 | 있음 |

---

## 해결 시도들

### World Model을 통한 자동화
- 1X의 접근법
- ...

### 분산 평가 시스템
- RoboArena
- ...

---

## 입문 가이드 완료

축하합니다! Physical AI의 기본 개념을 모두 살펴봤습니다.

이제 관심 있는 주제를 자유롭게 탐색해보세요:

### 데이터 수집 방법론
- **[Teleoperation](../insights/teleoperation)**: 사람이 직접 로봇을 조종하며 데이터 수집
- **[Non-Teleop 데이터](../insights/non-teleop-data)**: 텔레오퍼레이션 없이 데이터를 수집하는 방법들
- **[시뮬레이션 & World Model](../insights/simulation-world-model)**: 가상 환경에서 데이터 생성

### 하드웨어와 센싱
- **[휴머노이드 디자인](../insights/humanoid-design)**: 왜 휴머노이드인가? 디자인 철학과 트레이드오프
- **[촉각 센싱](../insights/tactile-sensing)**: 로봇에게 촉각을 부여하는 기술

### 철학적 질문
- **[Physical AI vs Cognitive AI](../insights/physical-vs-cognitive)**: 물리적 지능과 인지적 지능의 차이

### 커뮤니티
- **[커뮤니티 드리븐 접근](../insights/community-driven)**: 오픈소스로 함께 만들어가는 Physical AI 생태계

---

또는 좌측 사이드바에서 **모델**, **기업**, **하드웨어**, **인물**을 탐색해보세요.

