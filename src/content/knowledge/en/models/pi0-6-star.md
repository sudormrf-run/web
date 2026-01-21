---
title: Pi*0.6 (pi-star-zero-point-six)
description: Physical Intelligence's RL-Based Self-Improving VLA
tags: [pi0-6-star, physical-intelligence, reinforcement-learning, recap, vla, self-improvement]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-21
---

<div class="author-note">

### Author's Note

- **Practical Proof of VLA + RL**. Demonstrates that self-improvement is possible in real environments by applying RL to large-scale VLAs. Shows that RL works on real robots, not just simulation.
- **Critical Role of Coaching**. Autonomous experience collection alone is insufficient; expert intervention (coaching) during failures is key to performance improvement. Fully autonomous learning still has a way to go.
- **Simplicity of Binarized Advantage**. Instead of complex advantage values, simple "positive/negative" text conditioning is effective. A clever design leveraging VLA's language understanding capability.

</div>

## Key Significance

- **VLA Self-Improvement via RL**: Learns from real deployment experience for continuous performance improvement
- **RECAP Methodology**: RL learning integrating demonstrations + autonomous experience + coaching data
- **90%+ Success Rate**: High performance including T-shirt folding 97%, Box assembly ~90%
- **2x+ Throughput Improvement**: More than 2x throughput, half the failure rate on challenging tasks
- **24-Hour Continuous Operation**: Espresso making 5:30am-11:30pm, folding 50 laundry items continuously
- **Factory Deployment**: 59 chocolate packaging box assembly demonstrated

![Pi*0.6 Overview](../assets/models/pi0/pi06star.png)
<p align="center"><em>Pi*0.6: RECAP - Reinforcement Learning from Experience and Coaching</em></p>

---

## Overview

Pi*0.6 is an RL-based self-improving VLA announced by Physical Intelligence in November 2025. It overcomes the limitations of imitation learning (error accumulation, dependence on demonstration quality, difficulty in failure recovery) and continuously improves performance through experience in real deployment environments.

| Item | Details |
|------|---------|
| Published | November 17, 2025 |
| Company | Physical Intelligence |
| Paper | [arXiv:2511.14759](https://arxiv.org/abs/2511.14759) |
| Blog | [pi.website/blog/pistar06](https://www.pi.website/blog/pistar06) |
| Base | Pi0.5 |

---

## Architecture

### Model Specifications

| Component | Spec |
|-----------|------|
| VLM Backbone | **Gemma 3 4B** |
| Action Expert | **860M** parameters (Flow Matching) |
| Value Function | **670M** parameters (separate Gemma 3 backbone) |
| Control Frequency | 50Hz |

---

## RECAP: Core Method

**RECAP** (RL with Experience & Corrections via Advantage-conditioned Policies)

### 3-Stage Data Collection

| Stage | Description |
|-------|-------------|
| **1. Demonstration** | Collect initial demonstration data via teleoperation |
| **2. Autonomous** | Collect success/failure experiences during autonomous execution |
| **3. Coaching** | Expert intervenes and demonstrates corrections on failure |

> "Initial demonstrations alone don't cover situations the policy actually encounters" - Coaching is key

<video src="/assets/models/pi0/intervention_example.mp4" controls width="100%"></video>
<p align="center"><em>Coaching Example: Expert intervenes and corrects during failure</em></p>

![Pi*0.6 Components](../assets/models/pi0/pistar06-components.png)
<p align="center"><em>Pi*0.6 Components: Policy, Value Function, Advantage Conditioning</em></p>

### Value Function

A separate model that predicts success probability of the current situation:

| Feature | Description |
|---------|-------------|
| Architecture | 670M Gemma 3 backbone (separate model) |
| Output | **201 bins distributional prediction** |
| Role | Predict success probability per situation → Solves credit assignment |

**Example - Espresso Making:**
- Successfully grasping cup → Value ↑
- Moving to machine → Value ↑
- Dropping cup → Value ↓

### Advantage Conditioning

**Binarized Text Input Method:**

```
Advantage = V(s') - V(s)

→ If positive: Condition with "Advantage: positive" text
→ If negative: Condition with "Advantage: negative" text
```

- Simplified to **binary text** instead of complex values
- Leverages VLA's language understanding capability
- Conditions inference to generate only good actions (positive)

### Training Pipeline

| Phase | Description |
|-------|-------------|
| **Pre-training** | Offline RL with tens of thousands of hours of demonstration data (Value + Policy trained together) |
| **Fine-tuning** | SFT → Autonomous collection + Coaching → Value retraining → Policy retraining (iterative) |

---

## Performance Results

### Task Performance

| Task | Success Rate | Throughput |
|------|--------------|------------|
| T-shirt Folding | **97%** | 50% improvement |
| Box Assembly | **~90%** | 2x improvement |
| Espresso | **90%+** | 2x+ improvement |
| Diverse Laundry | **~80%** | 2x+, half failure rate |

### Real-World Deployment

| Task | Achievement |
|------|-------------|
| **Espresso Making** | 5:30am - 11:30pm continuous operation (18 hours) |
| **Laundry Folding** | 50 new items processed continuously |
| **Box Assembly** | 59 chocolate packaging boxes (actual factory) |

---

## Limitations

| Limitation | Description |
|------------|-------------|
| **Human-in-the-loop Required** | Human needed for labeling, coaching intervention, scene resets |
| **Greedy Exploration** | Exploration relies mainly on policy stochasticity, lacks active exploration |
| **Offline Batch Learning** | Batch-based offline learning, not fully online RL |

---

## References

- [arXiv Paper](https://arxiv.org/abs/2511.14759)
- [Physical Intelligence Blog - Pi*0.6](https://www.pi.website/blog/pistar06)
- [Technical Report](https://www.pi.website/download/pistar06.pdf)

---

## See Also

- [Pi Series](pi-series)
- [Pi0](pi0)
- [Pi0.5](pi0-5)
- [Physical Intelligence](../companies/physical-intelligence)

### Related People
- [Karol Hausman](../people/karol-hausman) - Physical Intelligence Co-founder
- [Chelsea Finn](../people/chelsea-finn) - Physical Intelligence Co-founder
- [Sergey Levine](../people/sergey-levine) - Physical Intelligence Co-founder
- [Pete Florence](../people/pete-florence) - Physical Intelligence Co-founder
