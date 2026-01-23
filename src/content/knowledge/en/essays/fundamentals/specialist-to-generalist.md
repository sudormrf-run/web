---
title: From Specialist to Generalist
description: The transition from specialized robot models to general-purpose models, why VLAs can become Generalists
tags: [specialist, generalist, evolution, vla, rfm]
category: essays
order: 2
related:
  - what-is-rfm-vla.md
  - scaling-problem.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-21
---

> For basic concepts about the transition from Specialist to Generalist, see [What are RFM & VLA?](what-is-rfm-vla).

---

## Definition of Specialist

**Specialist Model**: A model that only works with specific tasks, specific environments, and specific objects

Characteristics:
- Only works under the same conditions as training data
- Vulnerable to environmental changes (lighting, background, object position)
- Requires retraining to support new tasks
- High performance but narrow application range

---

## Definition of Generalist

**Generalist Model**: A general-purpose model that works with various tasks, environments, and objects

Characteristics:
- Adapts to new situations not seen during training
- Zero-shot or Few-shot generalization
- Reasoning based on World Knowledge
- Wide application range but potentially lower individual performance compared to Specialists

---

## Why Generalists Are Now Possible

### 1. World Knowledge from Pre-trained VLMs

VLAs use pre-trained VLMs like PaliGemma, Qwen-VL, and SmolVLM as backbones. These VLMs are trained on massive image-text data from the internet and possess "common sense about the world."

- Object recognition: "This is a cup"
- Physical common sense: "If you tilt the cup, water will spill"
- Language understanding: Interpreting "Pick up the red cup"

### 2. Cross-Embodiment Datasets

With the emergence of large-scale multi-robot datasets like [Open X-Embodiment](https://robotics-transformer-x.github.io/), experiences from various robot forms can be shared.

| Dataset | Robots | Tasks | Episodes |
|---------|--------|-------|----------|
| Open X-Embodiment | 22+ | 527 | 1M+ |
| DROID | 7 | 500+ | 76K |
| BridgeData V2 | 1 | 13 | 60K |

### 3. Application of Scaling Law

Expectations that Scaling Law proven in LLMs will apply to VLAs:

- More data → Better generalization
- Larger models → More complex tasks
- More diverse experiences → Wider application range

---

## Current Generalist Level of VLAs

### Pi0.5: Open-World Generalization

Physical Intelligence's [Pi0.5](../models/pi0-5) demonstrated operation in completely new homes not seen during training.

- New home environments
- New objects
- New arrangements

### GR00T: Cross-Embodiment

NVIDIA's [GR00T](../models/groot) series aims for generalization across various robot hardware.

### SmolVLA: Efficient Generalist

HuggingFace's [SmolVLA](../models/smolvla) shows that Generalist-level performance is possible with just 450M parameters.

---

## Specialist vs Generalist: Trade-offs

| Aspect | Specialist | Generalist |
|--------|-----------|------------|
| Individual task performance | High | Medium~High |
| Application range | Narrow | Wide |
| Deployment cost | High per task | Low (one for many tasks) |
| Training cost | Low | High |
| Maintenance | Per-task management | Unified management |

---

## Future Directions

### Fine-tuning: Generalist → Task-Specific

The approach of fine-tuning pre-trained Generalists for specific tasks is emerging:

1. Acquire basic capabilities with general-purpose VLA
2. Adapt to specific environments/tasks with minimal data
3. Specialist-level performance + Generalist foundational knowledge

### Co-training: The Power of Diversity

Strengthening generalization capabilities by training with web data, simulation data, and robot data together.

---

## Next Document

Let's dive deeper into VLA, the core technology for implementing Generalist robots.

**Next: [What are RFM & VLA?](what-is-rfm-vla)**
