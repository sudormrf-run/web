---
title: Skild AI
description: Skild AI - Robot Foundation Model Startup from Carnegie Mellon
tags: [skild-ai, foundation-model, cmu, simulation]
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

Skild AI is a robotics AI startup founded by Carnegie Mellon University faculty, developing a general-purpose robot "brain" called Skild Brain. In 2024, they achieved a $1.5B valuation with a $300M Series A round, and in January 2026, reached over $14B valuation with a $1.4B Series C round.

| Item | Details |
|------|---------|
| Headquarters | Pittsburgh, PA (additional offices in SF Bay Area and Bengaluru) |
| Founded | 2023 |
| Co-Founders | Deepak Pathak (CEO), Abhinav Gupta (President) |
| Total Funding | $2.2B+ |
| Valuation | $14B+ (January 2026) |
| Key Investors | Lightspeed, Coatue, SoftBank Group, Bezos Expeditions, Sequoia, NVIDIA NVentures |

---

## Funding History

| Round | Date | Amount | Valuation |
|-------|------|--------|-----------|
| Seed | 2023 | $14.5M | - |
| Series A | July 2024 | $300M | $1.5B |
| Series B | May 2025 | $500M | $4.7B |
| Series C | January 2026 | $1.4B | $14B+ |

Series A investors: Lightspeed Venture Partners, Coatue, SoftBank Group, Bezos Expeditions (Jeff Bezos), Felicis Ventures, Sequoia, Menlo Ventures, General Catalyst, CRV, Amazon, SV Angel, Carnegie Mellon University

Series C investors: SoftBank Group (lead), NVIDIA NVentures, Macquarie Capital, Bezos Expeditions, Disruptive, 1789 Capital, Samsung, LG, Schneider Electric, CommonSpirit, Salesforce Ventures

---

## Founding Team

### Deepak Pathak (CEO)

- Carnegie Mellon University Robotics Institute Professor
- UC Berkeley AI PhD
- Expert in self-supervised learning
- Research on curiosity-driven reinforcement learning with 4,000+ citations
- IIT Computer Science Gold Medalist (2014)

### Abhinav Gupta (President)

- Carnegie Mellon University Robotics Institute Full Professor (since 2015)
- Founding member of Facebook AI Research (FAIR) Robotics
- Expert in robotics and computer vision
- 75,000+ academic citations
- NSF, DARPA research funding recipient

---

## Skild Brain

### General-Purpose Robot Brain

```
┌─────────────────────────────────────┐
│            Skild Brain              │
│    "Any Robot, Any Task, One Brain" │
└─────────────────────────────────────┘
          │
    ┌─────┴─────┐
    ▼           ▼
┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐
│Humanoid│   │Quadruped│   │Robot Arm│   │Mobile │
└───────┘   └───────┘   └───────┘   └───────┘
```

### Key Features

| Feature | Description |
|---------|-------------|
| Omni-bodied | Supports all robot forms without specific hardware |
| Cross-embodiment | Humanoids, quadrupeds, robot arms, mobile manipulators |
| Hardware Independent | Focus on software models without building proprietary robots |
| Built-in Safety Constraints | Force output limits when interacting with humans |

---

## Training Methodology

### Data Sources

Multi-pronged approach to address the scarcity of robot data:

1. **Internet Videos**: Learning physics from human behavior
2. **Simulation**: Large-scale pre-training using NVIDIA Isaac Lab
3. **World Model**: Leveraging NVIDIA Cosmos WFM

### Sim-to-Real Transfer

```
[Internet Videos] + [Simulation] ──Pre-training──→ [Skild Brain] ──Transfer──→ [Real Robot]
```

---

## Technical Features

### Self-Supervised Learning

- Utilizing large-scale unlabeled data
- Learning physics from internet videos
- Curiosity-driven exploration

### Scalable Architecture

- Applying LLM scaling laws to robotics
- More data/compute → Better performance
- Cross-robot generalization

---

## Commercial Progress

### Revenue Growth

- Achieved $0 → $30M revenue within months in 2025
- Continued growth in 2026

### Application Areas

- Security and facility inspection
- Last-mile / point-to-point delivery
- Warehouses
- Manufacturing
- Data centers
- Construction

### Partnerships

- **LG CNS**: Partnership for industrial applications
- **HPE**: Accelerating development with AI solutions

---

## Differentiators

### vs Physical Intelligence

| Factor | Skild AI | Physical Intelligence |
|--------|----------|----------------------|
| Background | CMU academia | Google DeepMind/Stanford/Berkeley |
| Founded | 2023 | 2024 |
| Approach | Simulation + video-centric | Real data-centric |
| Hardware | Software only | Software only |
| Total Funding | $2.2B+ | $1.1B |
| Valuation | $14B+ (2026.01) | $5.6B (2025.11) |
| Core Model | Skild Brain | pi-0 (pi-zero) |

### Simulation vs Real Data Debate

```
Skild: "Scalable data generation through simulation + internet videos"
      + Leveraging NVIDIA Cosmos/Isaac Lab
      + Overcoming Sim-to-Real gap with Domain Randomization

Physical Intelligence: "Real physical interaction is essential"
                      + Open-sourced pi-0 model (Feb 2025)
```

---

## References

- [Skild AI Official Website](https://www.skild.ai/)
- [Skild AI Series A Announcement](https://www.skild.ai/blogs/announcing-our-300m-series-a)
- [Skild AI Series C Announcement](https://www.skild.ai/blogs/series-c)
- [TechCrunch - $300M Funding](https://techcrunch.com/2024/07/17/skild-ai-raises-300m/)
- [Business Wire - $1.4B Funding](https://www.businesswire.com/news/home/20260114335623/en/Skild-AI-Raises-$1.4B-Now-Valued-Over-$14B)
- [Contrary Research - Skild AI](https://research.contrary.com/company/skild-ai)

---

## See Also

- [Company List](/knowledge/companies/)
- [Simulation & World Model](/knowledge/essays/insights/simulation-world-model)
- [Physical Intelligence](physical-intelligence)

