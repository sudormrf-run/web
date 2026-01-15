---
title: The Challenge of Evaluation
description: Why evaluating VLA models is so difficult
tags: [evaluation, challenge, robotics]
category: essays
related:
  - scaling-problem.md
  - simulation-world-model.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## The Core Problem

Evaluation requires running physical robots and observing their behavior, which presents several issues:
- Risk of hardware failure
- Risk of environmental damage (e.g., breaking dishes)
- Time and cost constraints

...

---

## Differences from LLM Evaluation

| Aspect | LLM | VLA |
|--------|-----|-----|
| Evaluation Environment | Digital | Physical World |
| Evaluation Cost | Low | High |
| Reproducibility | High | Low |
| Risk | None | Present |

---

## Solution Attempts

### Automation Through World Models
- 1X's approach
- ...

### Distributed Evaluation Systems
- RoboArena
- ...

---

## See Also

- [Action Data Scaling Problem](scaling-problem)
- [Simulation & World Model](../simulation-world-model)
