---
title: Physical AI - The Age of Physical Intelligence is Coming
description: After LLM AGI, the era of physical intelligence is dawning
tags: [physical-ai, vla, rfm, overview, presentation]
category: essays
order: 1
related:
  - ../fundamentals/definition.md
  - ../fundamentals/what-is-rfm-vla.md
  - ../fundamentals/scaling-problem.md
  - ../insights/vla-rfm-progress.md
  - ../insights/physical-vs-cognitive.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-31
---

## 1. LLM, AGI, and Physical AI

The AGI race, starting with LLMs, is a journey to achieve human-level or beyond intelligence. As of 2026, it seems achievable in the near future.

**But this intelligence is limited to Cognitive Intelligence.**
- Coding, math, reasoning, research, literature...

> **The journey to solve Physical Intelligence is a different dimension of problem.**

Just as ChatGPT changed the world, there's an expectation that **Physical AI will transform the world of physical labor.**

---

## 2. Latest Demos (2026.01)

### CES 2026

### Boston Dynamics Atlas + LBM

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/wR2JG_vMXHA" title="Boston Dynamics Atlas - CES 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
The star of this CES, Boston Dynamics' ATLAS

> Does this demo have "intelligence"?

---


<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/HYwekersccY" title="Boston Dynamics Atlas - Large Behavior Models" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Boston Dynamics](/knowledge/companies/boston-dynamics), the pioneer of Classical Robotics, is also transitioning to Physical AI.
- **450M Diffusion Transformer**: Co-developed with Toyota Research Institute (TRI)
- Whole-body single model control: Walking + manipulation integrated
- Deformable object manipulation like rope tying, cloth unfolding

**→ Details: [LBM (Large Behavior Model)](/knowledge/models/lbm-atlas)**


Sharpa CraftNet

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/W7q-qlj4EFc?start=82" title="Sharpa CES 2026 Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Sharpa](/knowledge/companies/sharpa) unveiled [CraftNet](/knowledge/models/craftnet) and the North humanoid.
- **VTLA (Vision-Tactile-Language-Action)**: First commercial model integrating tactile sensing into VLA
- Pinwheel folding, playing card handling, and other demos requiring tactile sensing
- CES 2026 Innovation Award winner


### Figure Helix 02

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/lQsvTrRTBRs" title="Figure Helix 02 - Official Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Figure AI](/knowledge/companies/figure)'s [Helix 02](/knowledge/models/figure-helix) is the first fully autonomous whole-body humanoid.
- **61 consecutive actions over 4 minutes**: No resets, no human intervention
- **System 0/1/2 architecture**: High-speed control up to 1kHz
- Replaced 109,504 lines of C++ code with a 10M parameter neural network

---

## 3. What is Physical AI?

> **An AI system based on end-to-end VLA models that performs generalist physical tasks impossible with past rule-based approaches**

### Why is Physical AI Getting Attention?

**What was impossible before is now possible.**

| Past (Classical Robotics) | Present (Physical AI) |
|---------------------------|----------------------|
| Only predetermined actions | Adapts to various situations |
| Couldn't fold laundry | Can fold laundry |
| Struggled with deformable objects | Can handle plastic wrap, ropes |

### Classical Robotics vs Physical AI

| Aspect | Classical Robotics | Physical AI (VLA) |
|--------|-------------------|-------------------|
| **Architecture** | Modular (perception → planning → control) | End-to-end integrated |
| **Learning** | Rule-based + partial ML | Data-driven full learning |
| **Generalization** | Bound to training environment | Zero-shot generalization |
| **Knowledge** | Domain-specific | Inherits World Knowledge (LLM/VLM) |

**→ Details: [Definition of Physical AI](/knowledge/essays/fundamentals/definition)**

---

## 4. VLA, RFM, LBM Terminology

### Evolution from LLM to VLA

```
LLM → VLM → VLA
Language → + Vision → + Action
```

| Term | Full Name | Description |
|------|-----------|-------------|
| **VLA** | Vision-Language-Action | Model integrating vision + language + action |
| **LBM** | Large Behavior Model | Action expressed as Behavior. Same as VLA |
| **RFM** | Robot Foundation Model | Foundation Model for robots |

### Why VLA is Special

> **LLMs have common sense. So VLAs have common sense too.**

- Inherits **World Knowledge** from LLMs that learned all internet knowledge
- Can work at a different cafe, with new menu items
- Can handle packages of various shapes, clothes of various designs

**→ Details: [What are RFM & VLA?](/knowledge/essays/fundamentals/what-is-rfm-vla)**

---

## 5. Data Scaling Problem

There are reasons why VLA can't simply follow LLM's success formula.

### Difference Between LLM and VLA

| Aspect | LLM | VLA |
|--------|-----|-----|
| Data Source | Internet (infinite) | Real robot actions (limited) |
| Collection Cost | Low | High |
| Evaluation | Can be automated | Requires physical robot operation |

### Solution Attempts

| Approach | By | Description |
|----------|-----|-------------|
| [Teleoperation](/knowledge/essays/insights/teleoperation) | Tesla, Google, PI | Direct data collection |
| [Simulation](/knowledge/essays/insights/simulation-world-model) | NVIDIA | Omniverse + Cosmos |
| [Community](/knowledge/essays/insights/community-driven) | HuggingFace | Open-source collaboration |
| World Model | 1X, NVIDIA | Synthetic data generation |

**→ Details: [Action Data Scaling Problem](/knowledge/essays/fundamentals/scaling-problem)**

---

## 6. VLA & RFM Progress

### Convergent Evolution: System 1/2 Architecture

In 2025, different research groups independently **arrived at similar structures**.

| System | Role | Frequency |
|--------|------|-----------|
| **System 2** | High-level planning, language/vision understanding | 7-10 Hz |
| **System 1** | Low-level motor control | 100-200 Hz |

**Models that adopted this:**
- GR00T N1.6 (NVIDIA)
- Figure Helix (Figure AI)
- Gemini Robotics (Google DeepMind)

### Convergent Evolution: Continuous Action Generation

RT-2's "Action as Language" (discrete tokens) → **Flow Matching / Diffusion** (continuous values)

| Model | Method | Features |
|-------|--------|----------|
| [π0](/knowledge/models/pi0) | Flow Matching | 50Hz control |
| [GR00T N1](/knowledge/models/groot-n1) | Diffusion Transformer | Dual system |
| [SmolVLA](/knowledge/models/smolvla) | Flow Matching | 450M lightweight |

**→ Details: [VLA & RFM Progress](/knowledge/essays/insights/vla-rfm-progress)**

---

## 7. Physical vs Cognitive Intelligence

### Moravec's Paradox

> **"High-level reasoning requires relatively little computation, but low-level sensorimotor skills require enormous computational resources."**

| Easy (for AI) | Hard (for AI) |
|---------------|---------------|
| Beat chess world champion | Take keys out of pocket |
| Beat Go masters | Wash dishes |
| Write complex equations | Pick up fruit |

AI that beats chess champions was created in 1997, but **taking keys out of a pocket still doesn't work well.**

### Why is Physical Intelligence Hard?

1. **Evolutionary perspective**: Motor/sensory/perception evolved over ~1 billion years, abstract thinking over ~millions of years
2. **Dimensionality problem**: Text is abstracted low-dimension, physical world is high-dimension + real-time interaction
3. **Learning difference**: Humans learn through experience, VLAs mainly through imitation learning

**→ Details: [Physical vs Cognitive Intelligence](/knowledge/essays/insights/physical-vs-cognitive)**

---

## 8. Conclusion: It Still Seems Possible

**Reasons for optimism:**

- Much of human labor doesn't necessarily require tactile sensing
- Robots can add senses humans don't have (depth cameras, etc.)
- Robots can make movements impossible for human bodies
- As Tesla FSD showed in autonomous driving, implementation can differ from human approach

> **Humanity, having learned so much from LLMs, seems likely to find the answer soon.**

---

## Learn More

### Fundamentals Guide

1. [Definition of Physical AI](/knowledge/essays/fundamentals/definition)
2. [What are RFM & VLA?](/knowledge/essays/fundamentals/what-is-rfm-vla)
3. [Action Data Scaling Problem](/knowledge/essays/fundamentals/scaling-problem)

### Insights

- [Physical vs Cognitive Intelligence](/knowledge/essays/insights/physical-vs-cognitive)
- [VLA & RFM Progress](/knowledge/essays/insights/vla-rfm-progress)
- [Humanoid Design](/knowledge/essays/insights/humanoid-design)
- [The Need for Tactile Sensing](/knowledge/essays/insights/tactile-sensing)

### Key Models

- [π0 / π0.5](/knowledge/models/pi0) - Physical Intelligence
- [GR00T N1](/knowledge/models/groot-n1) - NVIDIA
- [Figure Helix](/knowledge/models/figure-helix) - Figure AI
- [LBM](/knowledge/models/lbm-atlas) - Boston Dynamics + TRI
- [CraftNet](/knowledge/models/craftnet) - Sharpa
