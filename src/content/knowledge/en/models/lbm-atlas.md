---
title: LBM (Large Behavior Model)
description: Boston Dynamics and Toyota Research Institute's Whole-Body Control Model for Atlas
tags: [lbm, boston-dynamics, toyota-research-institute, atlas, diffusion-transformer, humanoid]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-30
---

<div class="author-note">

### Author's Note

- LBM is the first commercial humanoid system to integrate locomotion and manipulation control in a single model.
- The approach of "if you can demonstrate it, the robot can learn it" is impressive. Deformable object manipulation like rope tying and cloth spreading uses the same training pipeline.
- A powerful collaboration combining Boston Dynamics' hardware with TRI's AI capabilities.

</div>

## Key Significance

- **Whole-Body Single Model Control**: Integrates locomotion, balance, and manipulation in one policy without separation
- **450M Diffusion Transformer**: Flow Matching based, 30Hz image input, 48 timestep action chunks
- **Language-Conditioned Multi-Task**: Single policy performs diverse tasks including rope tying, tire manipulation, cloth spreading
- **VR Teleoperation**: Intuitive data collection with stereo HMD + bimanual mapping + foot trackers
- **Cross-Embodiment**: Shared training across Atlas, Atlas MTS, and TRI Ramen platforms

---

## Overview

| Item | Details |
|------|---------|
| Announced | August 20, 2025 |
| Companies | Boston Dynamics + Toyota Research Institute (TRI) |
| Blog | [bostondynamics.com/blog](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/) |
| Robots | Atlas (50 DoF), Atlas MTS (29 DoF) |
| Leaders | Scott Kuindersma, Russ Tedrake |

LBM (Large Behavior Model) is a humanoid whole-body control model jointly developed by Boston Dynamics and Toyota Research Institute. Following the partnership announcement in October 2024, they revealed results on Atlas in August 2025.

---

## Architecture

### Model Specifications

| Item | Spec |
|------|------|
| Parameters | 450M |
| Architecture | Diffusion Transformer |
| Objective | Flow Matching |
| Input Frequency | 30 Hz (images) |
| Action Chunk | 48 timesteps (1.6 seconds) |
| Execution | ~24 actions per cycle |

### Input Modalities

- **Images**: HDR stereo head-mounted cameras (30Hz)
- **Proprioception**: Joint states, force/torque sensors
- **Language Prompts**: Task objective specification

### Whole-Body Integrated Control

While existing humanoids separated locomotion/balance control from manipulation control, LBM **treats hands and feet almost identically**, controlling the entire body with a single model.

---

## Training Pipeline

### 4-Stage Training Process

| Stage | Description |
|-------|-------------|
| 1. Data Collection | VR teleoperation + MPC controller |
| 2. Processing | Data annotation, QA, curation for ML pipelines |
| 3. Training | Multi-task, language-conditioned neural network policies |
| 4. Evaluation | Systematic testing and iterative improvements |

### VR Teleoperation System

| Feature | Description |
|---------|-------------|
| Stereo HMD | Head-mounted camera feeds for spatial awareness |
| Bimanual Mapping | 1:1 intuitive bimanual control |
| Foot Trackers | Dynamic repositioning and stepping enabled |
| Haptic Feedback | Real-time tactile feedback + AR overlays |

> "Fluid, dynamic, and dexterous" control across both stationary and mobile manipulation tasks.

---

## Capabilities

### Whole-Body Coordination

- Locomotion, stepping, stance configuration
- Crouching, balance maintenance
- Lifting 22lb (10kg) objects

### Dexterous Manipulation

- Grasping, regrasping, articulating objects
- **Deformable objects**: Rope tying, cloth spreading, tire manipulation
- Tasks extremely difficult with traditional robot programming

### Reactive Recovery

- Intelligent responses to unexpected disturbances
- Automatic adaptation to fallen parts, closed boxes, etc.
- **Emerges automatically** from training examples without algorithm changes

### Speed Adaptation

- 1.5x-2x speed adjustment at inference time
- Adjusts action timing predictions without retraining

---

## Hardware: Atlas

### Atlas (Full Body)

| Item | Spec |
|------|------|
| DoF | 50 DoF |
| Grippers | Dual 7-DoF |
| Cameras | HDR stereo head-mounted |

### Atlas MTS (Upper Body)

| Item | Spec |
|------|------|
| DoF | 29 DoF |
| Purpose | Upper-body manipulation testing |

Both platforms share **identical hardware/software**, enabling cross-embodiment learning.

---

## Cross-Embodiment Learning

LBM performs shared learning across multiple robot platforms:

| Platform | Description |
|----------|-------------|
| Atlas | Boston Dynamics full-body humanoid |
| Atlas MTS | 29-DoF upper-body variant |
| TRI Ramen | Toyota Research Institute platform |

Multi-task batching enables shared policy improvements.

---

## Core Philosophy

> **"If you can demonstrate it, the robot can learn it"**

- **Same training process** whether stacking rigid blocks or folding a t-shirt
- Developing new manipulation behaviors no longer requires **"an advanced degree and years of experience"**
- Data-driven approach applicable to **virtually any downstream task** that can be demonstrated via teleoperation

---

## Boston Dynamics & TRI Partnership

| Date | Event |
|------|-------|
| 2024.10 | BD-TRI partnership announced |
| 2025.08 | LBM + Atlas demo released |

### Leadership

- **Scott Kuindersma**: Boston Dynamics AI Institute
- **Russ Tedrake**: Toyota Research Institute

---

## Comparison with Other VLAs

| Model | Parameters | Architecture | Whole-Body | Cross-Embodiment |
|-------|------------|--------------|------------|------------------|
| LBM | 450M | Diffusion Transformer | Yes | Yes |
| [π0](pi0) | 3.3B | Flow Matching + VLM | No (upper) | Yes |
| [Figure Helix 02](figure-helix) | - | System 0/1/2 | Yes | No |
| [GR00T N1](groot-n1) | 2.2B | Dual-System | Yes | Yes |

---

## References

- [Boston Dynamics - Large Behavior Models](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/)
- [Toyota Research Institute - LBM Announcement](https://www.tri.global/news/ai-powered-robot-boston-dynamics-and-toyota-research-institute-takes-key-step-towards-general)
- [IEEE Spectrum - Boston Dynamics Atlas LBM](https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma)

---

## See Also

- [Model List](./)
- [Figure Helix](figure-helix) - Another whole-body VLA
- [GR00T N1](groot-n1) - NVIDIA humanoid VLA
