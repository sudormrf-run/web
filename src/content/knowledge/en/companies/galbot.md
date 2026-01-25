---
title: Galbot
description: Chinese robotics unicorn achieving large-scale commercial deployment with Synthetic Data First strategy
tags: [galbot, graspvla, synthetic-data, china, dexterity, vla]
category: companies

# Authorship
createdBy:
  name: Junho Cho
  email: junho@sudormrf.run
lastEditedBy:
  name: Junho Cho
  email: junho@sudormrf.run
lastEditedAt: 2026-01-25
---

## Overview

Galbot is a China-based full-stack robotics unicorn that achieved the first large-scale commercial deployment in the VLA field with its **"Synthetic First, Real Data as a Complement"** philosophy. They build production-ready systems with 99% synthetic + <1% real data.

| Item | Details |
|------|---------|
| Headquarters | Beijing, China |
| CTO | He Wang (Peking University CFCS) |
| Affiliations | Beijing Academy of AI (BAAI), PKU EPIC Lab |
| Mission | "Make robots for every industry and every home" |

---

## Key Achievements

### Commercial Deployment

| Metric | Value |
|--------|-------|
| Galbot Store | 10+ Chinese cities |
| Smart Pharmacy Warehouses | 30+ fully unmanned |
| Workers per warehouse | 0 |
| MTBF | 1 month+ |
| Continuous operation | 6 hours/charge |

### GraspVLA Performance (LIBERO Zero-shot)

| Model | Long | Goal | Object | Condition |
|-------|------|------|--------|-----------|
| OpenVLA | 33.7% | 56.6% | 65.4% | fine-tuned |
| π0 | 62.7% | 79.4% | 93.8% | fine-tuned |
| **GraspVLA** | **82.0%** | **91.2%** | **94.1%** | **zero-shot** |

> Outperforms fine-tuned models without any fine-tuning

---

## Technical Architecture

### Cerebrum-Cerebellum Structure

Dual system inspired by human brain architecture:

| Component | Role | Implementation |
|-----------|------|----------------|
| **Cerebrum** | High-level policy - *what* to do | VLA (Imitation + Web Grounding) |
| **Cerebellum** | Low-level motor - *how* to do | RL-based 100Hz control |

### GraspVLA

| Component | Specification |
|-----------|---------------|
| Vision Encoder | DINO-v2 + SigLIP |
| LLM Backbone | InternLM2 1.8B |
| Action Expert | Flow Matching |
| Training Data | 1B synthetic + 100M+ web grounding |
| Training Cost | ~$5,000 (160×RTX 4090, 10 days) |

---

## Data Strategy

### Synthetic Data Pipeline

```
Scene Synthesis
    ↓
Trajectory Generation
  ├─ Physics-based Energy Optimization (DexGraspNet)
  ├─ Human Videos → Synthetic (GenHOI)
  └─ Large-Scale RL (UniDexGrasp++)
    ↓
Validation & Rendering
  ├─ MuJoCo physics validation
  └─ Isaac Sim ray-tracing
    ↓
Sim2Real Transfer (1B frames convergence)
```

### Scaling Law Discovery

- **1B frames**: sim/real performance curves converge
- Sim2real gap decreases with data scale
- Scale impossible to achieve via teleoperation

### Data Scale

| Data Type | Scale |
|-----------|-------|
| Synthetic trajectories | Billion-scale |
| DexGraspNet 2.0 grasps | 426M |
| Web grounding (GRIT) | 100M+ bboxes |
| Real data ratio | <1% |

---

## Research Portfolio

### Grasping

| Research | Venue | Key Contribution |
|----------|-------|------------------|
| [DexGraspNet](https://pku-epic.github.io/DexGraspNet/) | ICRA 2023 Finalist | Million-scale dexterous grasp |
| [UniDexGrasp++](https://pku-epic.github.io/UniDexGrasp++/) | ICCV 2023 Finalist | Large-scale RL, policy distillation |
| [DexGraspNet 2.0](https://pku-epic.github.io/DexGraspNet2.0/) | CoRL 2024 | 7 embodiments, 426M grasps |
| [Dexonomy](https://pku-epic.github.io/Dexonomy/) | RSS 2025 | 100+ grasp taxonomy |
| [GraspVLA](https://pku-epic.github.io/GraspVLA-web/) | 2025 | Billion-scale synthetic VLA |

### Sim2Real Solution

| Research | Key Contribution |
|----------|------------------|
| [DexNDM](https://meowuu7.github.io/DexNDM/) | World model for sim2real gap correction |

**DexNDM Approach**:
1. Train generalist policy in simulator
2. Train neural dynamics model with small real data
3. Fix sim2real gap via back-propagation (differentiable)

### Navigation

| Research | Key Contribution |
|----------|------------------|
| [NavFoM](https://pku-epic.github.io/NavFoM-Web/) | Cross-embodiment navigation foundation model |
| [TrackVLA](https://pku-epic.github.io/TrackVLA-web/) | 30+ minute human tracking |

---

## Capability Assessment (6 Axes)

| Axis | Rating | Evidence |
|------|--------|----------|
| Long-horizon | ✓ | Cloth folding deformable manipulation sim2real |
| Precision | ✓ | Driver, hammer manipulation via DexNDM |
| Deployment Robustness | ✓ | MTBF 1 month+, 30+ unmanned warehouses |
| Multi-task | ✓ | GraspVLA zero-shot 82% (LIBERO) |
| Cross-embodiment | ✓ | 7 hand embodiments supported |
| Zero-shot | ✓ | Outperforms π0 fine-tuned |

---

## Limitations

### Acknowledged Limitations (from presentation)

| Limitation | Description |
|------------|-------------|
| Task Scope | Grasping-specialized, not yet generalist |
| Dexterous Sim2Real | Initially failed → solved with DexNDM |
| Specialist vs Generalist | Motion control still specialist policy |

### Analytical Limitations

| Limitation | Description |
|------------|-------------|
| Not Pure Sim2Real | Includes web grounding (100M+ real images) |
| Lack of Theoretical Explanation | No theory on why 1B frames converge |
| Embodiment Generalization | Franka Panda-centric, limited cross-robot transfer |

---

## vs Competitors

| Item | Galbot | Physical Intelligence | Figure |
|------|--------|----------------------|--------|
| Deployment Scale | **10+ cities + 30+ warehouses** | Research demo | Research demo |
| Data Strategy | 99% synthetic | Cross-embodiment real | VLA (Helix) |
| Strength | Only commercial deployment | Pursuing generality | Industrial optimization |
| Weakness | Grasping-specialized | Weak zero-shot | No consumer support |

---

## References

- [Galbot Official Website](https://www.galbot.com/)
- [PKU EPIC Lab](https://pku-epic.github.io/)
- [GraspVLA Paper](https://arxiv.org/abs/2505.03233)
- [DexGraspNet 2.0 Paper](https://arxiv.org/abs/2410.23004)
- [DexNDM Paper](https://arxiv.org/abs/2510.08556)

---

## See Also

- [Company List](index)
- [Physical Intelligence](physical-intelligence)
- [π0](../models/pi0) - Comparison VLA model
- [Diffusion Policy](../models/diffusion-policy)
