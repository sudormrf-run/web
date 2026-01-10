---
title: Action Data Scaling 문제
description: VLA가 LLM처럼 쉽게 스케일링되지 않는 이유
tags: [scaling, action-data, challenge]
category: essays
related:
  - evaluation-problem.md
  - teleoperation.md
  - simulation-world-model.md
---

# Action Data Scaling 문제

> Home > Challenges > Scaling Problem

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

## See Also

- [Evaluation의 어려움](evaluation-problem.md)
- [해결책: Teleoperation](../teleoperation.md)
- [해결책: 시뮬레이션](../simulation-world-model.md)
- [해결책: Non-Teleop 데이터](../non-teleop-data.md)

