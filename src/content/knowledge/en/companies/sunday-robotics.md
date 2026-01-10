---
title: Sunday Robotics
description: Sunday Robotics - Memo Robot and the Zero Robot Data Approach
tags: [sunday-robotics, memo, act-1, gloves, zero-robot-data]
category: companies
---

# Sunday Robotics

> Home > Companies > Sunday Robotics

---

## Overview

Sunday Robotics is a startup co-founded by Stanford PhD graduates Tony Zhao (author of the ACT paper) and Cheng Chi (author of Diffusion Policy). They are gaining attention for their innovative approach of training **without robot data**, using only human motion data.

| Item | Details |
|------|---------|
| Headquarters | San Francisco, CA |
| Founded | 2024 |
| Co-Founders | Tony Zhao (CEO), Cheng Chi (CTO) |
| Funding | $35M (Benchmark, Conviction) |
| Robot | Memo |

---

## Founding Team

### Tony Zhao (CEO)

- Stanford PhD
- Author of ACT (Action Chunking with Transformers) paper
- Developer of ALOHA robot system

### Cheng Chi (CTO)

- Stanford PhD
- Author of Diffusion Policy paper
- Expert in robotics AI learning

---

## Memo

### Hardware Specs

| Item | Specs |
|------|-------|
| Type | Torso-style, wheeled base |
| Height | 1.7m |
| Weight | 77kg |
| Arms | 2× multi-DoF |
| Gripper | Dual |
| Height Adjustment | Floor to 2.1m |

### Capable Tasks

- Dish organization and dishwasher loading
- Handling wine glasses (delicate objects)
- Espresso brewing
- Laundry folding

---

## Zero Robot Data Approach

### Skill Capture Gloves

Using **$200 gloves** instead of robot teleoperation:

| Item | Teleop Rig | Sunday Gloves |
|------|------------|---------------|
| Cost | ~$20,000 | ~$200 |
| Location | Lab | Real homes |
| Collectors | Experts | "Memory Developers" |
| Data | Robot motions | Human motions |

### Data Pipeline

```
[Human wearing gloves] → [Performing chores at home] → [Motion data collection]
                                                              │
                                                  ┌───────────▼───────────┐
                                                  │   Skill Transform     │
                                                  │ (Human→Robot motion)  │
                                                  └───────────┬───────────┘
                                                              │
                                                  ┌───────────▼───────────┐
                                                  │       ACT-1 Model     │
                                                  └───────────────────────┘
```

### Data Scale

| Item | Value |
|------|-------|
| Gloves Distributed | 2,000+ |
| Data Collection Homes | 500+ |
| Household Task Episodes | 10M+ |

---

## ACT-1 Model

### Features

| Item | Details |
|------|---------|
| Core Innovation | Zero Robot Data |
| Training Data | Human motions only |
| Combined Features | Manipulation + Navigation |
| Generalization | Zero-shot to new environments |

### Skill Transform

Software for converting human motion → robot motion:
- Claims 90% success rate
- Human dexterity → Robot gripper mapping
- Includes force/contact data

---

## Deployment Plans

| Timeline | Plan |
|----------|------|
| 2025.11 | Memo launch, beta applications begin |
| Late 2026 | "Founding Family" beta (~50 households) |
| Current Production Cost | ~$20,000 (handmade) |
| Target Retail Price | <$10,000 (at scale) |

---

## Significance

If Sunday's approach succeeds:

| Problem | Solution |
|---------|----------|
| Data Bottleneck | Large-scale collection via affordable gloves |
| Environment Diversity | Collection in real homes |
| Cost | Home robots under $10,000 |
| Generalization | Zero-shot adaptation to new environments |

---

## References

- [Sunday Robotics](https://www.sunday.ai/)
- [No Robot Data Blog](https://www.sunday.ai/journal/no-robot-data)
- [Humanoids Daily - Memo](https://www.humanoidsdaily.com/news/sunday-unveils-memo-a-wheeled-domestic-robot-that-learns-from-200-gloves)
- [TechCrunch - Sunday Robotics](https://techcrunch.com/2025/11/20/sunday-robotics/)

---

## See Also

- [Company List](index.md)
- [Sunday ACT-1](../models/sunday-act1.md)
- [Non-Teleop Data Collection](../solutions/non-teleop-data.md)
- [ACT](../models/act.md)
- [Diffusion Policy](../models/diffusion-policy.md)
