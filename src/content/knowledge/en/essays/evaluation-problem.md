---
title: The Challenge of Evaluation
description: Why evaluating VLA models is so difficult
tags: [evaluation, challenge, robotics]
category: essays
related:
  - scaling-problem.md
  - simulation-world-model.md
---

# The Challenge of Evaluation

> Home > Challenges > Evaluation Problem

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

- [Action Data Scaling Problem](scaling-problem.md)
- [Simulation & World Model](../simulation-world-model.md)
