---
title: Generalist AI
description: Generalist AI - GEN-0 and Robotics Scaling Laws
tags: [generalist, gen0, scaling-laws, harmonic-reasoning]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Generalist AI

> Home > Companies > Generalist AI

---

## Overview

Generalist AI is a startup founded by a team from OpenAI, Google DeepMind, and Boston Dynamics (per company announcement). They claim to have discovered the first **scaling laws** in robotics using 270,000 hours of real-world physical interaction data.

| Item | Details |
|------|---------|
| Announcement | November 4, 2025 |
| Core Model | GEN-0 |
| Key Claim | Discovery of robotics scaling laws |
| Data | 270,000+ hours of real data |
| Blog | [generalistai.com/blog](https://generalistai.com/blog/nov-04-2025-GEN-0) |

---

## Founding Team

### Background

| Origin | Contribution |
|--------|-------------|
| OpenAI | ChatGPT, GPT-4 scaling |
| Google DeepMind | PaLM-E, RT-2 development |
| Boston Dynamics | Atlas, Spot, Stretch |
| Other | Autonomous driving technologies |

---

## GEN-0 Model

### Key Features

| Item | Details |
|------|---------|
| Training Data | 270,000+ hours |
| Data Source | Real physical interactions |
| Environments | Homes, bakeries, laundromats, warehouses, factories |
| Tasks | From peeling potatoes to tightening bolts |

### Architecture: Harmonic Reasoning

A new approach that doesn't rely on System 1-System 2:

```
┌────────────────────────────────────────┐
│           Harmonic Reasoning           │
│                                        │
│  [Sensing Stream] ←→ [Acting Stream]   │
│       (continuous, asynchronous)       │
│                                        │
│  "Harmonious interaction"              │
└────────────────────────────────────────┘
```

| Feature | Description |
|---------|-------------|
| Core | Harmonizing continuous streams of sensing and action |
| Advantage | Scalable to very large model sizes |
| Supported Robots | 6, 7, 16+ degrees of freedom |

---

## Robotics Scaling Laws

### Key Findings (Company Claims)

**Predictable scaling** in robotics, similar to LLMs:

```
L(D) ∝ D^(-0.5)

L = Downstream task error
D = Pre-training data volume

→ 2x data → ~30% error reduction
```

### Observations

| Factor | Effect |
|--------|--------|
| Pre-training data ↑ | Performance ↑ |
| Compute ↑ | Performance ↑ |
| Predictability | Consistent and predictable improvements |

---

## Intelligence Threshold (Phase Transition)

### 7B Parameter Threshold

| Model Size | Phenomenon |
|-----------|-----------|
| < 1B | Fails to absorb complex data, "ossification" |
| **7B+** | Internalizes data, continuous improvement |

### Implications

```
< 7B: Limited improvement even with more data
≥ 7B: More data → continuous improvement
      + Adapts to new tasks with minimal fine-tuning
```

→ 7B could be robotics' **"GPT-3 moment"**

---

## Data Collection

### Scale

| Item | Value |
|------|-------|
| Total Data | 270,000+ hours |
| Collection Environments | 1,000+ locations |
| Weekly Growth | 10,000+ hours |
| Type | Real physical interactions only |

### Philosophy: Real Data Superiority

```
Simulation: Physical accuracy limitations
Human Video: Difficult action extraction
Teleop: Slow and expensive

Generalist Perspective: "Only real physical interaction is authentic"
→ Proven with 270K hours of real data
```

---

## Cross-Embodiment

### Multi-Robot Support

Designed from the ground up to support various robot forms:

| DoF | Tested |
|-----|--------|
| 6 DoF | ✓ |
| 7 DoF | ✓ |
| 16+ DoF | ✓ |

---

## Significance

If GEN-0's claims are true:

| Impact | Description |
|--------|-------------|
| Scaling | Proves robotics can scale like LLMs |
| Economic Justification | Predictable ROI on large investments |
| Data Debate | Strengthens case for real data superiority |
| Industry Reaction | "Robotics' ChatGPT moment" |

---

## References

- [Generalist AI - GEN-0](https://generalistai.com/blog/nov-04-2025-GEN-0)
- [Generalist AI Website](https://generalistai.com/)
- [Humanoids Daily Article](https://www.humanoidsdaily.com/feed/generalist-ai-unveils-gen-0-claims-scaling-laws-for-robotics-backed-by-270-000-hours-of-real-world-data)
- [MarkTechPost Article](https://www.marktechpost.com/2025/11/05/generalist-ai-introduces-gen-%CE%B8/) (GEN-0)

---

## See Also

- [Company List](index.md)
- [GEN-0 Model](../models/generalist-gen0.md)
- [Action Data Scaling Problem](../challenges/scaling-problem.md)
