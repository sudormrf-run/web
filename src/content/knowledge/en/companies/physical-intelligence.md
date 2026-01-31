---
title: Physical Intelligence
description: Physical Intelligence and the pi0 Model
tags: [physical-intelligence, pi0, foundation-model, flow-matching]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

Physical Intelligence (π) is a robotics AI startup founded in 2024, developing general-purpose robot foundation models. Founded by a team from Google DeepMind, UC Berkeley, and Stanford, the company raised the largest seed funding round in robotics history.

| Item | Details |
|------|---------|
| Headquarters | San Francisco, CA |
| Founded | March 2024 |
| CEO | Karol Hausman (formerly Google DeepMind) |
| Funding | $1.07B (Seed: $70M, Series A: $400M, Series B: $600M) |
| Valuation | $5.6B (as of November 2025) |

---

## Founding Team

### Co-Founders (7 members)

| Name | Previous Role | Position |
|------|---------------|----------|
| Karol Hausman | Google DeepMind (RT-2), Stanford Adjunct Professor | CEO |
| Sergey Levine | UC Berkeley Professor (RL Expert) | Chief Scientist |
| Chelsea Finn | Stanford Professor (MAML, Meta-learning) | Research |
| Brian Ichter | Google DeepMind (RT-2) | Research |
| Lachy Groom | Stripe (Former Head of Stripe Issuing) | Business/Product |
| Adnan Esmail | Anduril (Former Head of Electrical Systems), MIT | Engineering |
| Quan Vuong | Robotics/RL Researcher | Research |

### Key Investors

**Seed/Series A:**
- Thrive Capital, Lux Capital
- Khosla Ventures, OpenAI
- Jeff Bezos, Sequoia, Bond

**Series B:**
- CapitalG (Lead), Lux Capital
- Redpoint Ventures, Sequoia Capital
- T. Rowe Price, NVIDIA (NVentures)

---

## pi0 Model

### Key Features

| Item | Details |
|------|---------|
| Parameters | 3B (3 billion) |
| Architecture | PaliGemma + Flow Matching |
| Core Technology | Action Expert with Flow Matching |
| Open Source | Released February 4, 2025 (openpi) |

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

- Trained on 68 tasks across 7 robot embodiments
- Over 10,000 hours of real-world robot data
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
| 2024.03 | Company founded, $70M seed funding |
| 2024.10 | pi0 release |
| 2024.11 | $400M Series A ($2.4B valuation) |
| 2025.02 | pi0 open source release (openpi) |
| 2025 | pi0.5 release (open-world generalization) |
| 2025.11 | pi0.6 release, $600M Series B ($5.6B valuation) |
| 2025+ | Commercial deployment |

---

## References

- [Physical Intelligence Website](https://www.physicalintelligence.company/)
- [pi0 Paper](https://www.physicalintelligence.company/research/pi0)
- [arXiv: pi0](https://arxiv.org/abs/2410.24164)
- [GitHub: openpi](https://github.com/Physical-Intelligence/openpi)
- [TechCrunch - $400M Funding](https://techcrunch.com/2024/11/04/physical-intelligence-400m-series-a/)
- [Bloomberg - $600M Series B](https://www.bloomberg.com/news/articles/2025-11-20/robotics-startup-physical-intelligence-valued-at-5-6-billion-in-new-funding)

---

## See Also

- [Company List](/knowledge/companies/)
- [pi0](/knowledge/models/pi0)
- [Flow Matching Approach](/knowledge/models/diffusion-policy)
