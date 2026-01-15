---
title: Sunday ACT-1
description: Sunday Robotics' Zero Robot Data Based Foundation Model
tags: [sunday-act1, sunday-robotics, memo, zero-robot-data, gloves]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## Key Significance

- **Zero Robot Data**: Trained purely on human movements (glove data) without any robot data - paradigm shift in data collection
- **$200 Gloves vs $20K Teleop**: 100x cheaper data collection cost enabling scalability
- **Large-Scale Real Home Data**: "Memory Developers" collected 10M+ episodes from 500+ homes - real environments, not labs
- **Zero-shot Generalization**: Generalization capability to work in previously unseen homes
- **Consumer Price Target**: Target <$10,000 with mass production - making home robots realistic
- **Long-Horizon Manipulation + Navigation Integration**: First model handling both manipulation and map-based navigation in single end-to-end model
- **Complex Real Tasks**: In Table-to-Dishwasher, traveled 130+ feet, 33 interactions, handling 21 objects

---

## Overview

ACT-1 is a foundation model developed by Sunday Robotics, trained **without any robot data** using only human movements. It is the first model combining long-horizon manipulation and map-based navigation in a single end-to-end model.

| Item | Details |
|------|---------|
| Company | Sunday Robotics |
| Blog | [sunday.ai/journal/no-robot-data](https://www.sunday.ai/journal/no-robot-data) |
| Robot | Memo |
| Key Feature | Zero Robot Data |

---

## Key Innovation: Zero Robot Data

### Data Collection Method

Using **$200 gloves** instead of traditional teleoperation:

| Item | Teleop Rig | Sunday Gloves |
|------|------------|---------------|
| Cost | ~$20,000 | ~$200 |
| Location | Labs | Real homes |
| Collectors | Experts | "Memory Developers" |

### Data Scale

| Item | Value |
|------|-------|
| Gloves Deployed | 2,000+ |
| Data Collection Homes | 500+ |
| Chore Episodes | 10M+ |

---

## Performance

### Table-to-Dishwasher Task

"The most complex task autonomously performed by a robot":

| Item | Value |
|------|-------|
| Autonomous Navigation | 130+ feet |
| Unique Interactions | 33 |
| Number of Objects | 21 |
| Included Objects | Delicate dishes |

### Dexterous Manipulation

- Two wine glasses in one hand (without breaking)
- Wine glass insertion into dishwasher
- Picking up 2 utensils with one hand

### Zero-shot Generalization

Emphasizes generalization capability to work in previously unseen homes.

---

## Hardware: Memo

| Item | Spec |
|------|------|
| Height | 1.7m |
| Weight | 77kg |
| Form | Torso style, wheel base |
| Arms | 2x multi-DoF |
| Grippers | Dual |
| Height Adjustment | Floor ~ 2.1m |

---

## Availability

| Item | Details |
|------|---------|
| Current | Pre-commercial |
| 2026 | "Founding Family" Beta (~50 households) |
| Current Build Cost | ~$20,000 (handmade) |
| Target Retail Price | <$10,000 (mass production) |

---

## Comparison with Other Approaches

| Approach | Advantages | Disadvantages |
|----------|------------|---------------|
| Teleoperation | Accurate robot data | Expensive, slow |
| Simulation | Large-scale generation | Sim-to-Real Gap |
| Human Video | Cheap | Action extraction difficult |
| **Sunday (Gloves)** | Cheap, real environment, high fidelity | Scale validation needed |

---

## Significance

If Sunday's approach succeeds:
- **Solves Data Bottleneck**: Cheap in-home data collection
- **Zero-shot Generalization**: Adapts to new environments
- **Consumer Price Point**: Home robots under $10,000

---

## References

- [Sunday Robotics - No Robot Data](https://www.sunday.ai/journal/no-robot-data)
- [Humanoid Guide - Memo](https://humanoid.guide/product/memo/)
- [Humanoids Daily - Sunday Memo](https://www.humanoidsdaily.com/news/sunday-unveils-memo-a-wheeled-domestic-robot-that-learns-from-200-gloves)
- [eWeek - Memo](https://www.eweek.com/news/sunday-memo-home-robot/)

---

## See Also

- [Model List](index.md)
- [Sunday Robotics](../companies/sunday-robotics.md)
- [Non-Teleop Data Collection](../solutions/non-teleop-data.md)
