---
title: Diffusion Policy
description: Columbia/MIT's Diffusion-based Visuomotor Policy Learning
tags: [diffusion-policy, diffusion, columbia, mit, toyota-research, visuomotor]
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

- **Pioneering Diffusion Application to Robotics**: First successful application of diffusion (successful in image generation) to robot action generation
- **Natural Multimodal Action Handling**: Learns multiple modes when multiple valid actions exist in the same situation, commits to one at execution
- **Highly Stable Training**: Very stable training convergence compared to existing imitation learning methods
- **46.9% Average Performance Improvement Across 4 Benchmarks**: Validated on Robomimic, IBC, Behavior Transformer, Relay Policy Learning, etc.
- **Significant Influence on Follow-up Research**: Directly influenced action generation methods of subsequent VLAs like pi0's flow matching and Octo's diffusion decoder
- **LeRobot Default Support**: One of the default supported models in HuggingFace LeRobot alongside ACT
- **Robustness**: Robust performance against occlusion, perturbation, and visual distractions

<video src="/assets/models/diffusion-policy/diffusion_policy_highlight.mp4" controls width="100%" muted autoplay loop></video>
<p align="center"><em>Diffusion Policy: Progressively generates action sequences from noise</em></p>

---

## Overview

Diffusion Policy is a new approach that represents robot visuomotor policies as conditional denoising diffusion processes. It elegantly handles multimodal action distributions, is well-suited for high-dimensional action spaces, and demonstrates excellent training stability.

| Item | Details |
|------|---------|
| Published | March 2023 (RSS 2023) |
| Authors | [Cheng Chi](../people/cheng-chi.md), Siyuan Feng, Yilun Du, Zhenjia Xu, [Shuran Song](../people/shuran-song.md) et al. |
| Affiliation | Columbia University, MIT, Toyota Research Institute |
| Paper | [arXiv:2303.04137](https://arxiv.org/abs/2303.04137) |
| Journal | IJRR 2024 (Extended version) |
| Project | [diffusion-policy.cs.columbia.edu](https://diffusion-policy.cs.columbia.edu/) |

---

## Key Ideas

### Diffusion for Action Generation

Unlike traditional policies that directly predict actions, Diffusion Policy **progressively generates actions starting from noise**.

```
Pure Noise → ... → Intermediate Noise → ... → Final Action Sequence
          ← Denoising Steps (Langevin dynamics) ←
```

**Core Principle:**
- Learns the score function gradient of action distribution
- Iteratively optimizes via stochastic Langevin dynamics at inference

### Multimodal Action Handling

When multiple valid actions exist in the same situation (e.g., push object left or right), Diffusion Policy:
- Learns multi-mode behaviors
- Commits to one mode per rollout
- Outperforms existing methods like LSTM-GMM and IBC

### Receding Horizon Control

Predicts **action sequences** rather than single actions for temporal consistency.

---

## Architecture

### Time-Series Diffusion Transformer

| Component | Description |
|-----------|-------------|
| Visual Encoder | Encoder for image conditioning |
| Diffusion Backbone | Transformer or CNN based |
| Noise Scheduler | DDPM-based scheduling |

**Inputs:**
- Visual observations (images)
- Current robot state

**Outputs:**
- Future action sequence

---

## Performance

### Benchmark Results

**46.9% average performance improvement across 4 benchmarks and 12 tasks**

| Benchmark | Tasks |
|-----------|-------|
| Robomimic | Lift, Can, Square, Tool Hang, Transport |
| IBC | Push-T, Block Pushing |
| Behavior Transformer | Franka Kitchen |
| Relay Policy Learning | Franka Kitchen |

### Real Robot Validation

| Task | Description |
|------|-------------|
| Push-T | T-shaped object pushing manipulation |
| Mug Flipping | Flipping a mug |
| Sauce Preparation | Sauce preparation (6-DoF control) |

---

## Advantages

| Feature | Description |
|---------|-------------|
| **Multimodal** | Handles multi-valid action distributions |
| **High-dimensional** | Well-suited for high-dimensional action spaces |
| **Stability** | Stable training convergence |
| **Robustness** | Robust to occlusion, perturbation, visual distractions |

---

## Comparison with ACT

| Item | Diffusion Policy | ACT |
|------|-----------------|-----|
| Generation Method | Denoising diffusion | CVAE decoder |
| Multimodality | Natural handling | Style variable (z) |
| Inference Speed | Requires multiple denoising steps | Single forward pass |
| Training Stability | Very high | High |

---

## Impact

Diffusion Policy is a pioneering work applying diffusion models to robot learning, influencing many subsequent studies:
- Flow matching-based approach in pi0 (Physical Intelligence)
- Default supported model in LeRobot
- Standard baseline in various manipulation tasks

---

## Resources

- [Project Page](https://diffusion-policy.cs.columbia.edu/)
- [arXiv Paper](https://arxiv.org/abs/2303.04137)
- [GitHub](https://github.com/real-stanford/diffusion_policy)
- [Google Colab Notebooks](https://diffusion-policy.cs.columbia.edu/) (State-based / Vision-based)

---

## See Also

- [Model List](index.md)
- [ACT](act.md)
- [pi0](pi0.md)

### Related People
- [Cheng Chi](../people/cheng-chi.md) - First Author
- [Shuran Song](../people/shuran-song.md) - Advisor
