---
title: The Action Data Scaling Problem
description: Why VLA cannot scale as easily as LLMs
tags: [scaling, action-data, challenge]
category: essays
related:
  - evaluation-problem.md
  - teleoperation.md
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

Action data doesn't exist on the internet, making immediate scaling impossible.

...

---

## Differences from LLMs

| Aspect | LLM | VLA |
|--------|-----|-----|
| Data Source | Internet (unlimited) | Real robot actions (limited) |
| Collection Cost | Low | High |
| Labeling | Automatic (next token) | Manual or complex process |

---

## Current Data Scale

...

---

## See Also

- [The Challenge of Evaluation](evaluation-problem)
- [Solution: Teleoperation](../teleoperation)
- [Solution: Simulation](../simulation-world-model)
- [Solution: Non-Teleop Data](../non-teleop-data)
