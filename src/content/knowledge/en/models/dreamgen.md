---
title: GR00T-Dreams (DreamGen)
description: NVIDIA's synthetic data generation pipeline for robot learning - Neural Trajectory generation using World Foundation Models
tags: [dreamgen, groot-dreams, nvidia, synthetic-data, isaac-sim, omniverse, cosmos, world-model, neural-trajectories]
category: models

# Authorship
createdBy:
  name: Jonghyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jonghyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-20
---

## Key Significance

- **Solving the Robot Data Problem**: Generate large-scale synthetic trajectory data using World Foundation Models from just a single image and language instructions
- **Dramatic Efficiency**: Train GR00T N1.5 in just 36 hours (vs. 3 months with manual collection)
- **Combined with GR00T-Mimic**: Generate 780K synthetic trajectories in 11 hours (equivalent to 6,500 hours of human demonstration)
- **Behavioral Generalization**: Perform 22 new behaviors across 10 novel environments from single-environment pick-and-place data
- **Contact-Rich Task Support**: Learn challenging tasks like towel folding, hammering, and bowl stacking that simulation struggles with
- **Open Source**: Released under Apache 2.0 license

---

## Overview

GR00T-Dreams is NVIDIA GEAR Lab's initiative to solve the robotics data problem. The core technology, DreamGen, leverages Video World Models (Cosmos-Predict2) to generate synthetic robot data called **Neural Trajectories**. It enables robots to "dream" new scenarios and learn from them.

| Attribute | Details |
|-----------|---------|
| Release | May 2025 (arXiv), Computex 2025 |
| Research Institutions | NVIDIA, UW, KAIST, UCLA, UCSD, CalTech, NTU, UMD, UT Austin |
| Core Technology | Video World Model + Inverse Dynamics Model |
| Base Model | Cosmos-Predict2 |
| Paper | [arXiv:2505.12705](https://arxiv.org/abs/2505.12705) |
| GitHub | [NVIDIA/GR00T-Dreams](https://github.com/NVIDIA/GR00T-Dreams) |
| License | Apache 2.0 |

---

## DreamGen: 4-Stage Pipeline

DreamGen is a simple yet highly effective 4-stage pipeline.

### Stage 1: Video World Model Fine-tuning

Fine-tune existing Image-to-Video generation models (Cosmos-Predict2) for the target robot embodiment.

| Attribute | Details |
|-----------|---------|
| Base Model | Cosmos-Predict2 |
| Fine-tuning Method | LoRA (Low-Rank Adaptation) |
| Purpose | Learn robot dynamics while preserving internet video knowledge |

**Why LoRA:**
- Prevents catastrophic forgetting of pre-trained internet video knowledge
- Efficient parameter updates

### Stage 2: Synthetic Video Generation (Dream Generation)

Generate synthetic robot videos by prompting the fine-tuned model with initial frames and language instructions.

```
Input: Initial image + Language instruction ("Pick up the cup and place it on the shelf")
      |
[Fine-tuned Cosmos-Predict2]
      |
Output: Photorealistic robot video (including novel behaviors/environments)
```

**Key Features:**
- Generate novel behaviors not seen during training
- Generate same behaviors across diverse environments
- Physically plausible motion generation

### Stage 3: Action Extraction (Neural Trajectory Generation)

Since generated videos lack action annotations, extract **pseudo-actions**.

| Method | Description | Use Case |
|--------|-------------|----------|
| **Inverse Dynamics Model (IDM)** | Predict actions between two frames | Explicit action extraction |
| **Latent Action Model** | Action representation in latent space | Implicit action representation |

**IDM Architecture:**
- Diffusion Transformer + SigLIP-2 Vision Encoder
- Trained with Flow Matching objective
- Two image frames -> Action chunk prediction
- No language or proprioception input (learns pure dynamics only)

**Result: Neural Trajectories**
- Combination of synthetic video + pseudo-actions
- Trainable format without real teleoperation data

### Stage 4: Policy Training

Train visuomotor policies using Neural Trajectories.

| Attribute | Details |
|-----------|---------|
| Training Target | GR00T N1.x Foundation Model |
| Data | Neural Trajectories (synthetic) + Real Trajectories (optional) |
| Effect | Acquire behavioral and environmental generalization capabilities |

---

## GR00T-Dreams Blueprint: 5-Stage Workflow

NVIDIA's official Blueprint extends to 5 stages:

```
1. Post-training
   |-- Fine-tune Cosmos-Predict2 with limited teleoperation trajectories

2. Dream Generation
   |-- Generate diverse task scenarios with image + text prompts

3. Reasoning & Filtering (Cosmos-Reason1)
   |-- Evaluate and filter low-quality synthetic data

4. Neural Trajectory Extraction (IDM)
   |-- Convert 2D videos to 3D action sequences

5. Policy Training
   |-- Train visuomotor policies on synthetic dataset
```

---

## GR00T-Mimic: Trajectory Augmentation

A complementary Blueprint to GR00T-Dreams.

### Overview

| Attribute | Details |
|-----------|---------|
| Purpose | Generate large-scale physically accurate trajectories from few human demonstrations |
| Method | Simulation-based trajectory augmentation (MimicGen, DexMimicGen) |
| Platform | NVIDIA Isaac Lab + Omniverse |

### How It Works

1. **Demonstration Collection**: Teleoperate simulated robot via Apple Vision Pro or Space Mouse
2. **Keypoint Annotation**: Mark key points in demonstrations
3. **Interpolation & Augmentation**: Automatically generate physically accurate new trajectories
4. **Automatic Validation**: Validate in Isaac Sim and convert to training data

### GR00T-Dreams vs GR00T-Mimic

| Aspect | GR00T-Dreams | GR00T-Mimic |
|--------|--------------|-------------|
| **Purpose** | Novel behavior/environment generalization | Deepen existing skill proficiency |
| **Method** | Video World Model | Simulation augmentation |
| **Data Type** | Neural Trajectories | Synthetic Trajectories |
| **Strength** | Contact-rich, novel behaviors | Physical accuracy, large-scale |
| **Core Tools** | Cosmos-Predict2 | Isaac Lab, MimicGen |

### Complementary Nature

- **GR00T-Mimic**: Develop **Specialist** proficiency for specific skills
- **GR00T-Dreams**: Enable **Generalist** capabilities for new behaviors

---

## Cosmos Transfer: Photorealistic Rendering

Bridges the Sim-to-Real gap in simulation data.

### Role

| Function | Description |
|----------|-------------|
| Style Transfer | Simulation footage -> Photorealistic conversion |
| Lighting/Environment Changes | Apply diverse lighting, textures, environments |
| Structure Preservation | Maintain physical dynamics of robot motion |

### Supported Input Modalities

- Segmentation video
- Depth video
- Edge video
- Blur video

### Effect

According to NVIDIA researchers, using Cosmos-Transfer1:
- "Adds more scene details and complex shading, natural illumination"
- Perfectly preserves physical dynamics of robot motion

---

## Data Generation Efficiency

### GR00T-Dreams (DreamGen)

| Metric | Value |
|--------|-------|
| GR00T N1.5 Training Time | **36 hours** |
| Manual Collection Estimate | ~3 months |
| Efficiency Improvement | **~60x** |

### GR00T-Mimic

| Metric | Value |
|--------|-------|
| Trajectories Generated | **780,000** |
| Generation Time | **11 hours** |
| Human Demonstration Equivalent | 6,500 hours (9 months continuous work) |
| Trajectories per Hour | ~70,900/hour |

### Performance Improvement

| Metric | Result |
|--------|--------|
| Synthetic + Real Data Combined | GR00T N1 performance **40% improvement** |

---

## Supported Robot Embodiments

GR00T-Dreams supports various robot platforms:

| Robot | Type | Description |
|-------|------|-------------|
| Fourier GR1 | Humanoid | Full-body humanoid robot |
| Franka Emika Panda | Single Arm | Standard research manipulator |
| SO-100 | Single Arm | $100 low-cost robot arm |
| Unitree G1 | Humanoid | First real-world training data included |
| RoboCasa | Simulation | Home environment simulation |

**Extensibility:**
- Custom embodiment support available (requires metadata + data config files)
- Multi-camera view support (e.g., wrist cameras)

---

## DreamGen Bench

Benchmark for evaluating quality of generated videos.

### Evaluation Metrics

| Metric | Evaluation Model | Description |
|--------|-----------------|-------------|
| **Instruction Following** | Qwen2.5-VL / GPT-4o | Language instruction compliance |
| **Physics Alignment** | QWEN-VL | Physical realism |

### Evaluation Targets

- 4 video generation models
- Various robot configurations

---

## Integration with GR00T Series

### GR00T N1

| Attribute | Details |
|-----------|---------|
| Usage | GR00T-Mimic (simulation synthetic data) |
| Limitation | Weak generalization - only performs pre-training tasks |

### GR00T N1.5

| Attribute | Details |
|-----------|---------|
| Usage | **Full GR00T-Dreams Integration** |
| Effect | DreamGen Tasks success rate: 13.1% -> **38.3%** |
| Training Time | 36 hours (vs. 3 months manual) |
| Generalization | 22 new behaviors, 10 new environments |

### GR00T N1.6

| Attribute | Details |
|-----------|---------|
| Usage | Extended GR00T-Dreams application |
| VLM | Upgraded to Cosmos-Reason-2B |
| Effect | Enhanced reasoning and planning capabilities |

---

## Industry Adoption

| Company | Application |
|---------|-------------|
| 1X | NEO Gamma humanoid training |
| Agility Robotics | Large-scale synthetic data generation |
| Skild AI | Synthetic dataset augmentation |
| AgiBot | Large-scale trajectory generation with GR00T-Mimic |

---

## References

### Official Resources
- [NVIDIA Research - DreamGen](https://research.nvidia.com/labs/gear/dreamgen/)
- [GitHub - GR00T-Dreams](https://github.com/NVIDIA/GR00T-Dreams)
- [NVIDIA Developer Blog - Enhance Robot Learning with Synthetic Trajectory Data](https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/)

### Paper
- [DreamGen: Unlocking Generalization in Robot Learning through Video World Models (arXiv:2505.12705)](https://arxiv.org/abs/2505.12705)

### Technical Blogs
- [NVIDIA Developer Blog - Building a Synthetic Motion Generation Pipeline](https://developer.nvidia.com/blog/building-a-synthetic-motion-generation-pipeline-for-humanoid-robot-learning/)
- [NVIDIA Developer Blog - R2D2: Training Generalist Robots](https://developer.nvidia.com/blog/r2d2-training-generalist-robots-with-nvidia-research-workflows-and-world-foundation-models/)

### News
- [NVIDIA Newsroom - Isaac GR00T N1 Announcement](https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks)
- [Hackster.io - NVIDIA's Robots Dream of Trajectories](https://www.hackster.io/news/nvidia-s-robots-dream-of-trajectories-not-electric-sheep-with-gr00t-dreams-1f12db16c80f)

---

## See Also

### GR00T Series
- [GR00T](groot) - Series overview
- [GR00T N1](groot-n1) - First open-source model
- [GR00T N1.5](groot-n1-5) - Frozen VLM + FLARE
- [GR00T N1.6](groot-n1-6) - Scale expansion

### Related Technologies
- [Cosmos](cosmos) - World Foundation Model Platform
- [Eagle](eagle) - Vision-Language Model

### Related People
- [Jim Fan](/knowledge/people/jim-fan) - NVIDIA GEAR Lab, GR00T Research Lead
