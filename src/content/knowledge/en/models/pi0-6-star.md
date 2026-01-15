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
lastEditedAt: 2026-01-15
---

## Key Significance

- **VLA Self-Improvement via RL**: Learns from real deployment experience for continuous performance improvement
- **RECAP Methodology**: RL with Experience & Corrections via Advantage-conditioned Policies
- **90%+ Success Rate**: Achieves over 90% success rate across various real-world tasks
- **2x Throughput**: More than 2x throughput improvement on challenging tasks
- **24-Hour Continuous Operation**: Espresso making 5:30am-11:30pm, folding 50 laundry items continuously
- **Factory Deployment**: Demonstrated 59 chocolate packaging box assembly
- **Value Function Based**: Resolves credit assignment problem by predicting success probability per situation

![Pi*0.6 Architecture](../assets/models/pi0/pi06star.png)
<p align="center"><em>Pi*0.6: RECAP - Reinforcement Learning from Experience and Coaching</em></p>

---

## Overview

Pi*0.6 is an RL-based self-improving VLA announced by Physical Intelligence in November 2025. It overcomes the limitations of existing imitation learning and continuously improves performance through experience in real deployment environments.

| Item | Details |
|------|---------|
| Published | November 17, 2025 |
| Company | Physical Intelligence |
| Blog | [pi.website/blog/pistar06](https://www.pi.website/blog/pistar06) |
| Paper | [pi.website/download/pistar06.pdf](https://www.pi.website/download/pistar06.pdf) |
| Base | Pi0.5 |

---

## Why RL for VLAs?

### Limitations of Imitation Learning

| Problem | Description |
|---------|-------------|
| **Data Limitation** | Dependent on demonstration data quality |
| **Failure Recovery** | Lack of failure scenario data |
| **Error Accumulation** | Small errors accumulate to failure |
| **Ceiling Effect** | Difficult to exceed demonstrator's performance |

### Advantages of RL

| Advantage | Description |
|-----------|-------------|
| **Experience Learning** | Learns from actual failures/successes |
| **Self-Improvement** | Can exceed demonstration quality |
| **Failure Recovery** | Learns recovery from failure situations |

---

## RECAP: Core Method

RECAP (RL with Experience & Corrections via Advantage-conditioned Policies)

### 3-Stage Learning Pipeline

```
+-------------------------------------------------------------+
|                    RECAP Learning Pipeline                   |
+-------------------------------------------------------------+
|                                                              |
|   Stage 1: Demonstration                                     |
|   +----------------------------------------------------+    |
|   |  Collect initial demonstration data via teleop     |    |
|   +----------------------------------------------------+    |
|                           |                                  |
|   Stage 2: Autonomous Deployment                             |
|   +----------------------------------------------------+    |
|   |  Autonomous execution -> Collect success/failure   |    |
|   +----------------------------------------------------+    |
|                           |                                  |
|   Stage 3: Coaching (Expert Intervention)                    |
|   +----------------------------------------------------+    |
|   |  Expert intervenes and demonstrates correct action |    |
|   +----------------------------------------------------+    |
|                           |                                  |
|   RL Training with Value Function                            |
|   +----------------------------------------------------+    |
|   |  Reinforce good actions via advantage conditioning |    |
|   +----------------------------------------------------+    |
|                                                              |
+-------------------------------------------------------------+
```

### Value Function

**Key Role**: Predicts how "good" the current situation is

```
Observation state -> Value Function -> Success probability prediction (0~1)
```

| Situation | Value |
|-----------|-------|
| Making progress toward goal | High (increasing) |
| Stagnating | Low (flat) |
| Heading toward failure | Very low (decreasing) |

**Example - Espresso Making:**
- Successfully grasping cup -> Value up
- Moving to machine -> Value up
- No progress -> Value flat
- Dropping cup -> Value down

### Advantage Conditioning

```
Advantage = V(s') - V(s)  (next state value - current state value)
```

| Advantage | Meaning | Learning |
|-----------|---------|----------|
| Positive (+) | Good action | Reinforce |
| Negative (-) | Bad action | Suppress |

**Key**: Condition model on advantage to learn generating only "good actions"

### Coaching Mechanism

| Method | Description |
|--------|-------------|
| **Intervention Timing** | When robot makes mistake |
| **Intervention Method** | Expert corrects via teleoperation |
| **Advantage** | Collects data in actual problem situations |

> "Initial demonstrations alone don't cover situations the policy actually encounters"

---

## Performance Results

### Success Rate

| Metric | Result |
|--------|--------|
| Overall Success Rate | **90%+** |
| Failure Rate Reduction | **2x or more** |

### Throughput

| Task | Improvement |
|------|-------------|
| Espresso Making | **2x+ throughput** |
| Difficult Manipulation Tasks | Significant improvement |

### Real-World Deployment

| Task | Achievement |
|------|-------------|
| **Espresso Making** | 5:30am - 11:30pm continuous operation |
| **Laundry Folding** | 50 new items processed continuously |
| **Box Assembly** | 59 chocolate packaging boxes (factory) |

---

## Architecture

### vs Pi0.5

| Item | Pi0.5 | Pi*0.6 |
|------|-------|--------|
| Learning Method | Imitation Learning | **+ Reinforcement Learning** |
| Backbone | 3B | **Slightly larger backbone** |
| Conditioning | Language + Image | **+ Advantage conditioning** |
| Improvement | Static | **Continuous improvement after deployment** |

### Model Components

```
+-------------------------------------------------------------+
|                    Pi*0.6 Architecture                       |
+-------------------------------------------------------------+
|                                                              |
|   +----------------------------------------------------+    |
|   |                  Pi0.5 Base Model                  |    |
|   |              (VLM + Action Expert)                 |    |
|   +------------------------+---------------------------+    |
|                            |                                 |
|                            v                                 |
|   +----------------------------------------------------+    |
|   |               Value Function V(s)                  |    |
|   |            Success probability prediction          |    |
|   +------------------------+---------------------------+    |
|                            |                                 |
|                            v                                 |
|   +----------------------------------------------------+    |
|   |          Advantage-Conditioned Policy              |    |
|   |         Output conditioned on good actions (A>0)   |    |
|   +----------------------------------------------------+    |
|                                                              |
+-------------------------------------------------------------+
```

---

## Training Pipeline

### Phase 1: Offline RL Pre-training

```
Demonstration data + Experience data -> Offline RL -> Pi* (base policy)
```

- Learn initial policy from existing data
- Simultaneously train value function

### Phase 2: Online Deployment + Coaching

```
Deploy Pi* -> Autonomous execution -> Coaching on failure -> Data collection
```

- Accumulate experience in real environment
- Obtain correction data through expert intervention

### Phase 3: RL Fine-tuning

```
Experience data + Coaching data -> RL update -> Pi*' (improved policy)
```

- Reinforce good actions via advantage conditioning
- Iterative improvement

---

## Credit Assignment Problem

### Problem

> "Which action caused the success/failure?"

Only know the outcome after the episode ends

### Solution: Value Function

| Approach | Method |
|----------|--------|
| **Value Learning** | Predict success probability of each state |
| **Advantage Calculation** | Measure value change of state transitions |
| **Credit Assignment** | Evaluate contribution of individual actions |

**Chess Analogy:**
- Value function = Predicting win rate of current board state
- Advantage = Win rate change after making a move
- Good move = Win rate up, Bad move = Win rate down

---

## Real-World Demonstrations

### Espresso Making

| Step | Action |
|------|--------|
| 1 | Pick up cup |
| 2 | Move to espresso machine |
| 3 | Place cup |
| 4 | Press button |
| 5 | Serve finished drink |

**Operation**: 5:30am - 11:30pm (18 hours continuous)

### Laundry Folding

- **50** previously unseen clothing items
- **Continuous processing** (no interruption)
- **Various shapes**: Shirts, pants, towels, etc.

### Factory Box Assembly

- **59** chocolate packaging boxes
- **Actual factory environment**
- **Production line integration**

---

## Comparison with Other RL Approaches

| Approach | RECAP | Existing Robot RL |
|----------|-------|-------------------|
| Data | Heterogeneous (demo+experience+coaching) | Homogeneous |
| Environment | Real environment | Mainly simulation |
| Reset | Handles imperfect resets | Assumes perfect reset |
| Scale | Large-scale VLA | Small policies |

---

## Limitations & Future Work

### Current Limitations

| Limitation | Description |
|------------|-------------|
| Coaching Cost | Requires expert intervention |
| Deployment Time | Need sufficient experience collection |
| Safety | Physical risk on failure |

### Future Directions

- Automatic coaching (AI-based)
- Simulation -> Real transfer
- More efficient exploration

---

## References

- [Physical Intelligence Blog - Pi*0.6](https://www.pi.website/blog/pistar06)
- [Technical Report](https://www.pi.website/download/pistar06.pdf)

---

## See Also

- [Pi Series](pi-series.md)
- [Pi0](pi0.md)
- [Pi0.5](pi0-5.md)
- [Physical Intelligence](../companies/physical-intelligence.md)

### Related People
- [Karol Hausman](../people/karol-hausman.md) - Physical Intelligence Co-founder
- [Chelsea Finn](../people/chelsea-finn.md) - Physical Intelligence Co-founder
- [Sergey Levine](../people/sergey-levine.md) - Physical Intelligence Co-founder
- [Pete Florence](../people/pete-florence.md) - Physical Intelligence Co-founder
