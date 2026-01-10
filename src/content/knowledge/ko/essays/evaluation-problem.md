---
title: Evaluation의 어려움
description: VLA 모델 평가가 어려운 이유
tags: [evaluation, challenge, robotics]
category: essays
related:
  - scaling-problem.md
  - simulation-world-model.md
---

# Evaluation의 어려움

> Home > Challenges > Evaluation Problem

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

## See Also

- [Action Data Scaling 문제](scaling-problem.md)
- [시뮬레이션 & World Model](../simulation-world-model.md)

