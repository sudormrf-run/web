---
title: ACT (Action Chunking with Transformers)
description: Stanford's Action Chunking-based Imitation Learning Policy
tags: [act, stanford, imitation-learning, aloha, cvae, transformer]
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

<div class="author-note">

### Author's Note

- The savior of countless demos. Anyone can easily collect dozens of teleop data samples and train ACT to create working demonstrations.
- At the numerous exhibitions and conference demo booths I visited in 2025, most were built with ACT.

</div>


<video src="/assets/models/act/act_demo_slot_battery.mp4" controls width="100%" muted autoplay loop></video>
<p align="center"><em>ACT Demo: Battery Slot Insertion - Precise Bimanual Manipulation</em></p>



## Key Significance

- **Action Chunking Concept**: Inspired by psychology, groups continuous actions into single units (chunks) for execution - mitigates compounding error
- **Extreme Data Efficiency**: Achieves 80-90% success rate with just 10 minutes of demonstration data - breakthrough in precision manipulation
- **Low-Cost ALOHA Hardware**: Enables bimanual dexterous manipulation system for ~$20K with modular design for easy maintenance
- **New Standard for Bimanual Dexterous Manipulation**: Performs precision tasks previously difficult like zip tie insertion and battery placement
- **LeRobot Default Recommended Model**: Adopted as the default recommended model in HuggingFace LeRobot
- **Fast Training with Low Compute**: Trainable on standard GPUs with short training time
- **CVAE-Based Architecture**: Style variable (z) captures diverse demonstration styles, uses prior mean at inference

---

## Overview

ACT (Action Chunking with Transformers) is an imitation learning algorithm developed at Stanford. Released alongside the low-cost hardware system ALOHA, it demonstrated that bimanual dexterous manipulation can be learned with just 10 minutes of demonstration data.

| Item | Details |
|------|---------|
| Published | April 2023 (RSS 2023) |
| Authors | [Tony Zhao](../people/tony-zhao), Vikash Kumar, [Sergey Levine](../people/sergey-levine), [Chelsea Finn](../people/chelsea-finn) |
| Affiliation | Stanford University |
| Paper | [arXiv:2304.13705](https://arxiv.org/abs/2304.13705) |
| Project | [tonyzhaozh.github.io/aloha](https://tonyzhaozh.github.io/aloha/) |

---

## Key Ideas

### Action Chunking

A concept inspired by psychology that groups continuous actions into single units (chunks) for execution.

**Traditional Behavior Cloning:**
```
Observation → Policy → Next 1 action
```

**ACT's Action Chunking:**
```
Observation → Policy → Next k action sequence (e.g., 90 timesteps)
```

**Advantages:**
- Reduces effective task horizon by k times
- Mitigates compounding error
- Generates smoother motions

### Temporal Ensembling

Queries the policy more frequently and averages overlapping action chunks for even smoother execution.

---

## Architecture

ACT is trained as a **Conditional VAE (CVAE)** decoder.

![ACT Architecture](/assets/models/act/act_architecture.png)
<p align="center"><em>ACT Architecture: CVAE-based, encodes style variable z during training, uses z=0 at inference</em></p>

**Inputs:**
- 4 RGB camera images (480x640)
- Joint positions

**Outputs:**
- 90 timestep action sequence
- 50Hz control frequency

---

## ALOHA Hardware

Low-cost bimanual manipulation system released alongside ACT.

| Item | Details |
|------|---------|
| Total Cost | ~$20,000 |
| Robot Arms | ViperX 6-DoF x 2 (each ~$5,600) |
| Payload | 750g |
| Workspace | 1.5m span |
| Accuracy | 5-8mm |
| Features | Modular, Dynamixel motors (easy replacement) |

---

## Performance

**Task success rates trained with 50 demonstrations:**

| Task | Success Rate |
|------|-------------|
| Task 1 | 96% |
| Task 2 | 84% |
| Task 3 | 64% |
| Task 4 | 92% |

**Demonstration Data Efficiency:**
- **10 minutes** of demonstration data achieves 80-90% success rate
- Performs precision tasks like zip tie insertion and battery placement

---

## Demonstrated Tasks

- Opening transparent sauce cup
- Inserting battery into slot
- Ping pong ball juggling (dynamic task)
- Chain assembly (high-contact task)
- Zip tie insertion (precision task)

<video src="/assets/models/act/act_demo_reactive_cup.mov" controls width="100%"></video>
<p align="center"><em>ACT Demo: Transparent Sauce Cup Manipulation - Reactive Bimanual Coordination</em></p>

---

## Impact & Adoption

ACT is widely adopted for the following reasons:

- **Fast Training**: Short training time
- **Low Compute Requirements**: Trainable on standard GPUs
- **Strong Performance**: High success rates in precision manipulation
- **LeRobot Integration**: Default recommended model in HuggingFace LeRobot

### Follow-up Research

| Model | Description |
|-------|-------------|
| **ALOHA 2** | Mobile ALOHA, improved hardware |
| **Bi-ACT** | Extension based on Bilateral Control |

---

## References

- [Project Page](https://tonyzhaozh.github.io/aloha/)
- [arXiv Paper](https://arxiv.org/abs/2304.13705)
- [LeRobot ACT Documentation](https://huggingface.co/docs/lerobot/en/act)
- [GitHub - ALOHA Codebase](https://github.com/tonyzhaozh/aloha)

---

## See Also

- [Model List](index)
- [Diffusion Policy](diffusion-policy)
- [SmolVLA](smolvla)

### Related People
- [Tony Zhao](../people/tony-zhao) - First Author
- [Chelsea Finn](../people/chelsea-finn) - Advisor
- [Sergey Levine](../people/sergey-levine) - Co-author
