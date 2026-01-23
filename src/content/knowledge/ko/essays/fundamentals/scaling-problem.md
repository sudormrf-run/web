---
title: Action Data Scaling 문제
description: VLA가 LLM처럼 쉽게 스케일링되지 않는 이유
tags: [scaling, action-data, challenge]
category: essays
order: 4
related:
  - evaluation-problem.md
  - ../insights/teleoperation.md
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

Action 데이터는 인터넷에 존재하지 않아 바로 scaling 하는 것이 불가능합니다.

...

---

## LLM과의 차이점

| 구분 | LLM | VLA |
|------|-----|-----|
| 데이터 소스 | 인터넷 (무한) | 실제 로봇 동작 (제한) |
| 수집 비용 | 낮음 | 높음 |
| 레이블링 | 자동 (다음 토큰) | 수동 또는 복잡한 과정 |

---

## 현재 데이터 규모

...

---

## 다음 문서

데이터 수집만큼이나 어려운 문제가 있습니다. 바로 평가(Evaluation)입니다.

**다음: [Evaluation의 어려움](evaluation-problem)**

