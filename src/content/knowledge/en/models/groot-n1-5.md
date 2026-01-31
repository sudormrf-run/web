---
title: GR00T N1.5
description: Humanoid Foundation Model with 2x Language Instruction Compliance via Frozen VLM and FLARE Loss
tags: [groot, groot-n1-5, nvidia, humanoid, foundation-model, vla, flare, frozen-vlm]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-20
---

<div class="author-note">

### Author's Note

- A version **focused on improving language instruction following** toward general-purpose RFM. Frozen VLM preserves language understanding while combining with robot control—compliance doubled (46.6% → 93.3%).
- **Demonstrates learning from human video is possible**. Thanks to FLARE, learning from action-label-free human videos works. A path to reducing dependence on expensive teleop data.
- **Synthetic data's power remains evident**. DreamGen at just 9.1% enabled learning 22 new verbs. Key to expanding behavioral diversity beyond pick-and-place.

</div>

## Key Significance

- **2x Language Instruction Compliance**: 46.6% → 93.3% (+46.7%p)
- **Frozen VLM Technique**: Freezes VLM to preserve language understanding capability
- **FLARE Loss Introduction**: Additional training objective through implicit world modeling
- **Human Video Learning Capability**: FLARE enables learning from human videos during post-training
- **Novel Object Manipulation**: 0-shot manipulation of new objects possible after post-training (15%)

> **Important**: The GR00T-N1.5-3B released on HuggingFace is a **pretrained model**. Human video learning, Unitree G1 experiments, etc. are post-training experiment results demonstrating the **capability** that FLARE provides, and are not included in the released model weights.

---

## Overview

| Item | Details |
|------|---------|
| Announced | May 20, 2025 (Computex 2025, Taiwan) |
| Type | Vision-Language-Action (VLA) |
| Parameters | 3B |
| VLM | [Eagle](eagle) 2.5 (Frozen) |
| DiT | 16 layers |
| Key Technology | Frozen VLM + FLARE Loss |
| GitHub | [NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) |
| Hugging Face | [nvidia/GR00T-N1.5-3B](https://huggingface.co/nvidia/GR00T-N1.5-3B) |

---

## Key Improvements over N1

### 1. Frozen VLM (Vision-Language Model)

Core architecture change in N1.5.

| Aspect | N1 | N1.5 |
|--------|-----|------|
| VLM Training | Trainable | **Frozen** |
| VLM Model | Eagle2-1B | **Eagle 2.5** |
| Grounding IoU | 35.5 | **40.4** (GR-1) |

**Key Features:**
- VLM remains **frozen during both pretraining and finetuning**
- Preserves language understanding capability and improves generalization
- Enhanced physical understanding and grounding with NVIDIA Eagle 2.5
- Simplified adapter MLP + Layer Normalization on visual/text token embeddings

### 2. FLARE Loss (Future LAtent REpresentation Alignment)

New training objective added in N1.5.

**Concept:**
- Adds **FLARE Loss to existing Flow Matching Loss** from N1
- Instead of generatively modeling future frames, **aligns with latent representations of future states**
- Policy network internally reasons about future latent states while maintaining action prediction capability

**How it works:**
1. Add learnable "future tokens" to standard VLA model
2. Train these tokens to align with future robot observation embeddings
3. Calculate Future Latent Alignment Loss using cosine similarity
4. FLARE Loss coefficient: **0.2** (both pretraining and post-training)

**Key Benefits:**
- **Direct learning from human egocentric videos possible**
- Meaningful learning from human videos alone without robot demonstrations
- Significantly improved novel object manipulation capability

**Related Paper:** [FLARE: Robot Learning with Implicit World Modeling (arXiv:2505.15659)](https://arxiv.org/abs/2505.15659)

---

## Architecture

### Overall Architecture

| Component | Description |
|-----------|-------------|
| Vision Encoder | SigLip2-based Vision Transformer (224x224 RGB input) |
| Language Encoder | T5-based Transformer |
| Proprioception Encoder | MLP indexed by embodiment ID |
| Action Decoder | Flow Matching Transformer (DiT-based) |
| Model Size | **3B parameters** |
| Tensor Type | BF16 |

### N1 vs N1.5 Architecture Comparison

| Item | GR00T N1 | GR00T N1.5 |
|------|----------|------------|
| VLM State | Trainable | **Frozen** |
| VLM Model | Eagle2-1B | **Eagle 2.5** |
| Adapter MLP | Complex | **Simplified + LayerNorm** |
| Training Objective | Flow Matching | **Flow Matching + FLARE** |
| World Modeling | None | **Implicit world modeling integrated** |
| Model Parameters | 2.2B | **3B** |

---

## Benchmarks

### Language Instruction Compliance (Real GR-1 Humanoid)

Task: Pick up a specific fruit specified by language command from two fruits and place it on a plate:

| Model | Language Instruction Compliance |
|-------|--------------------------------|
| GR00T N1 | 46.6% |
| **GR00T N1.5** | **93.3%** |

**Improvement: +46.7%p (approximately 2x)**

### Simulation Benchmarks

| Benchmark | GR00T N1 | GR00T N1.5 | Improvement |
|-----------|----------|------------|-------------|
| Language Table (sim) | 52.8% | **93.2%** | +40.4%p |
| Sim GR-1 Language | 36.4% | **54.4%** | +18.0%p |
| RoboCasa (30 demos) | 17.4% | **47.5%** | +30.1%p |
| DreamGen Tasks (12) | 13.1% | **38.3%** | +25.2%p |

### Real Robot Benchmarks (GR-1 Humanoid)

| Task | GR00T N1 | GR00T N1.5 |
|------|----------|------------|
| Language Instruction Compliance | 46.6% | **93.3%** |
| Novel Object Manipulation (0-shot) | 0% | **15.0%** |

### FLARE Standalone Performance

100 trajectories/task on real GR-1 manipulation tasks: **95.1% average success rate**

### Human Video Learning Effect

| Condition | Success Rate |
|-----------|--------------|
| 1-shot (robot demo only) | 37.5% |
| 1-shot + human egocentric video | **60.0%** |
| 10-shot + human egocentric video | **80.0%** |

---

## Training

### Pretraining

Pretraining data composition for the GR00T-N1.5-3B model released on HuggingFace.

![N1.5 Pretraining Data Distribution](/assets/models/groot/groot-n1.5-pretrain-data-distribution.svg)
<p align="center"><em>GR00T N1.5 Pretraining Data Distribution (Source: <a href="https://research.nvidia.com/labs/gear/gr00t-n1_5/">NVIDIA Research</a>)</em></p>

#### Pretraining Data Composition

| Data Source | Proportion | Description |
|-------------|------------|-------------|
| Real GR-1 | 27.3% | Real robot data collected internally by NVIDIA |
| OpenXE | 27.3% | Open X-Embodiment open-source data |
| Sim GR-1 (DexMG) | 27.3% | Simulation synthetic data |
| [DreamGen](dreamgen) | 9.1% | Neural trajectory synthetic data |
| AgiBot-Beta | 9.1% | AgiBot collaboration data |

> **Note**: The pretraining data **does not include human video data**. Human video learning is a **capability** that FLARE provides and is utilized during post-training.

#### Training Infrastructure

| Item | Details |
|------|---------|
| GPU | 1,000× H100 |
| Training Steps | 250K steps |
| Batch Size | 16,384 |
| Optimizer | AdamW |
| Learning Rate Schedule | Cosine (warmup ratio 0.05) |
| FLARE Loss Coefficient | 0.2 |

---

### FLARE (Future LAtent REpresentation Alignment)

The core training objective added in N1.5. FLARE was published as a separate paper ([arXiv:2505.15659](https://arxiv.org/abs/2505.15659)).

#### Core Concepts

FLARE is a lightweight approach that **aligns with latent representations of future states** instead of generating future frames pixel-by-pixel.

**Future Tokens Mechanism:**
1. Add **learnable "future tokens" embeddings** to standard VLA models
2. Extract intermediate representations corresponding to M future tokens at internal layer L of Diffusion Transformer
3. Project via MLP and align with **frozen Vision-Language embeddings**

**Total Training Objective:**
```
L = L_fm + λL_align (λ = 0.2)
```

#### Benefits of FLARE

- **Lightweight Implementation**: Minimal architectural changes—just adding a few tokens to standard VLA models
- **Inference Efficiency**: No future Vision-Language embedding computation needed at deployment
- **Human Video Learning Capability**: Enables learning from action-label-free human videos during post-training
- **Up to 26% Performance Improvement**: Over baselines on multitask simulation benchmarks

---

### Post-training Experiment Results

The following are experiment results to **validate the capability** that FLARE provides. These results are not included in the released pretrained model.

#### Unitree G1 Post-training

Results of post-training N1 and N1.5 with 1,000 teleoperation episodes:

| Metric | GR00T N1 | GR00T N1.5 |
|--------|----------|------------|
| Known Fruit Manipulation Success | 44.0% | **98.8%** |
| Generalization to 5 Novel Objects | - | **84.2%** |

#### Human Video Learning (FLARE Paper Experiments)

FLARE's key contribution is enabling **learning from human egocentric videos without action labels**.

**Asymmetric Loss Application:**
- Robot demonstration data (with actions): Flow Matching Loss + Future Alignment Loss
- Human videos (without actions): **Future Alignment Loss only**

**Data Collection:**
- Head-mounted **GoPro cameras** for egocentric demonstration collection
- Approximately **150 human egocentric demonstrations per object**

<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <video src="/assets/videos/groot/flare_ego.mp4" autoplay loop muted playsinline style="flex: 1; max-width: 50%; border-radius: 8px;"></video>
  <video src="/assets/videos/groot/flare_robot.mp4" autoplay loop muted playsinline style="flex: 1; max-width: 50%; border-radius: 8px;"></video>
</div>
<p align="center"><em>Left: Human egocentric demonstration captured with GoPro / Right: GR-1 robot demonstration (Source: <a href="https://research.nvidia.com/labs/gear/gr00t-n1_5/">NVIDIA Research</a>)</em></p>

**Experiment Results** (pick-and-place on 5 objects with novel shapes):

| Condition | Success Rate | Improvement |
|-----------|--------------|-------------|
| 1-shot (robot demo only) | 37.5% | - |
| 1-shot + human egocentric video | **60.0%** | +22.5%p |
| 10-shot + human egocentric video | **80.0%** | +42.5%p |

> These experiments were conducted in the FLARE paper, and it is **not specified** whether human video learning is included in the N1.5 pretrained model released on HuggingFace.

---

## N1 vs N1.5 Comprehensive Comparison

| Aspect | GR00T N1 | GR00T N1.5 |
|--------|----------|------------|
| **Announced** | March 2025 (GTC) | May 2025 (Computex) |
| **Model Size** | 2.2B | 3B |
| **VLM** | Trainable | **Frozen** |
| **VLM Model** | Eagle2-1B | **Eagle 2.5** |
| **Training Objective** | Flow Matching | **Flow Matching + FLARE** |
| **Human Video Learning** | Not possible | **Possible** |
| **Language Instruction Compliance** | 46.6% | **93.3%** |
| **Language Table** | 52.8% | **93.2%** |
| **RoboCasa (30 demos)** | 17.4% | **47.5%** |
| **DreamGen Tasks** | 13.1% | **38.3%** |

---

## References

### GR00T N1.5
- [NVIDIA Research - GR00T N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/)
- [Hugging Face - GR00T-N1.5-3B](https://huggingface.co/nvidia/GR00T-N1.5-3B)

### FLARE
- [FLARE: Robot Learning with Implicit World Modeling (arXiv:2505.15659)](https://arxiv.org/abs/2505.15659)
- [NVIDIA Research - FLARE](https://research.nvidia.com/labs/gear/flare/)

### GR00T-Dreams
- [GitHub - GR00T-Dreams](https://github.com/NVIDIA/GR00T-Dreams)
- [NVIDIA Blog - Enhance Robot Learning with Synthetic Trajectory Data](https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/)

### Base Model
- [GR00T N1 Paper (arXiv:2503.14734)](https://arxiv.org/abs/2503.14734)
- [GitHub - Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)

### News
- [NVIDIA Newsroom - Computex 2025](https://nvidianews.nvidia.com/news/nvidia-powers-humanoid-robot-industry-with-cloud-to-robot-computing-platforms-for-physical-ai)

---

## See Also

### GR00T Series
- [GR00T](groot) - Series Overview
- [GR00T N1](groot-n1) - First Open-Source Model
- [GR00T N1.6](groot-n1-6) - Scale Expansion

### Related Models
- [Eagle](eagle) - N1.5's VLM (Eagle 2.5)
- [DreamGen](dreamgen) - GR00T-Dreams Synthetic Data Pipeline

### Related People
- [Jim Fan](/knowledge/people/jim-fan) - NVIDIA GEAR Lab, GR00T Research Lead
