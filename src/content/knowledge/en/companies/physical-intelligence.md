---
title: Physical Intelligence
description: Physical Intelligence and the pi0 Model
tags: [physical-intelligence, pi0, foundation-model, flow-matching]
category: companies
---

# Physical Intelligence

> Home > Companies > Physical Intelligence

---

## Overview

Physical Intelligence (π) is a robotics AI startup founded in 2024, developing general-purpose robot foundation models. Founded by a team from Google DeepMind, OpenAI, and Stanford, the company raised the largest seed funding round in robotics history.

| Item | Details |
|------|---------|
| Headquarters | San Francisco, CA |
| Founded | March 2024 |
| CEO | Karol Hausman (formerly Google DeepMind) |
| Funding | $400M+ (Seed: $70M, Series A: $400M) |
| Valuation | $2.4B (as of November 2024) |

---

## Founding Team

### Co-Founders

| Name | Previous Role | Position |
|------|---------------|----------|
| Karol Hausman | Google DeepMind (RT-2) | CEO |
| Sergey Levine | UC Berkeley (RL Expert) | Chief Scientist |
| Chelsea Finn | Stanford (MAML, Meta-learning) | Research |
| Brian Ichter | Google DeepMind (RT-2) | Research |

### Key Investors

- Thrive Capital, Lux Capital
- Khosla Ventures, OpenAI
- Jeff Bezos, Sequoia

---

## pi0 Model

### Key Features

| Item | Details |
|------|---------|
| Parameters | 3.3B |
| Architecture | PaliGemma + Flow Matching |
| Core Technology | Action Expert with Flow Matching |
| Open Source | Released in 2025 |

### Flow Matching Approach

Uses **Flow Matching** instead of Diffusion:

```
[Noise] ──Flow Matching──→ [Action Chunk]
        (faster inference)
```

- Faster inference than Diffusion
- Well-suited for continuous action space
- Capable of learning multi-modal action distributions

### Performance

- Trained on 51 tasks across 20 robot configurations
- Zero-shot generalization capability
- Superior performance compared to single-robot policies

---

## Data Collection

### Diverse Robot Platforms

- Single-arm robots
- Bimanual arms
- Humanoid upper body
- Mobile manipulators

### Data Characteristics

- Cross-embodiment data
- Diverse environments (homes, warehouses, offices)
- Includes dexterous manipulation

---

## Approach

### "Bring GPT to Robotics"

```
LLM Success = Large-scale Data + Transformer + Scaling

Physical Intelligence Goal = Apply same approach to robotics
```

### Three Core Principles

1. **Scaling**: More data, larger models
2. **Generality**: Not limited to specific robots/tasks
3. **Foundation Model**: Fast adaptation through fine-tuning

---

## Roadmap

| Timeline | Milestone |
|----------|-----------|
| 2024.03 | Company founded |
| 2024.10 | pi0 release |
| 2024.11 | $400M Series A |
| 2025 | pi0 open source release |
| 2025+ | Commercial deployment |

---

## References

- [Physical Intelligence Website](https://www.physicalintelligence.company/)
- [pi0 Paper](https://www.physicalintelligence.company/research/pi0)
- [arXiv: pi0](https://arxiv.org/abs/2410.24164)
- [TechCrunch - $400M Funding](https://techcrunch.com/2024/11/04/physical-intelligence-400m-series-a/)

---

## See Also

- [Company List](index.md)
- [pi0](../models/pi0.md)
- [Flow Matching Approach](../models/diffusion-policy.md)
