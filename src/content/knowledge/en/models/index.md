---
title: VLA Models
description: History and current state of Vision-Language-Action models
category: models
order: 1
isFeatured: true
icon: brain

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

# VLA Model List

> History and list of Vision-Language-Action models

VLA (Vision-Language-Action) models are AI models that take visual information and language instructions to output robot actions.

---

## Timeline

VLA models have evolved rapidly since RT-1 in 2022.

- 2022: RT-1 (Google)
- 2023: RT-2, ACT, Diffusion Policy
- 2024: Octo, OpenVLA, GR00T, π0
- 2025: SmolVLA, Gemini Robotics, π0.5, GR00T N1.5/N1.6, π*0.6

---

## VLA Foundation Models

### Google DeepMind

| Model | Description |
|-------|-------------|
| [RT (Robotics Transformer)](./rt) | Pioneer of VLA. Started with RT-1, established "Action as Language" paradigm in RT-2, built Open X-Embodiment dataset with RT-X |
| [Gemini Robotics](./gemini-robotics) | Gemini 2.0-based VLA. Cross-Embodiment support, System 1/2 architecture, On-Device version available |

### Physical Intelligence (π Series)

| Model | Description |
|-------|-------------|
| [π Series](./pi-series) | Physical Intelligence VLA model series overview |
| [π0](./pi0) | First Generalist Policy with Flow Matching. PaliGemma VLM + 50Hz high-speed control |
| [π0.5](./pi0-5) | Open-World generalization. Works in new home environments, Web data Co-training |
| [π*0.6](./pi0-6-star) | RL-based self-improvement. RECAP methodology achieving 90%+ success rate |
| [FAST](./fast) | DCT + BPE action tokenizer. 10x compression, 5x faster VLA training |

### NVIDIA (GR00T Series)

| Model | Description |
|-------|-------------|
| [GR00T](./groot) | NVIDIA humanoid foundation model series overview. Dual-System architecture |
| [GR00T N1](./groot-n1) | World's first open-source humanoid VLA. Proved 40% performance gain with synthetic data |
| [GR00T N1.5](./groot-n1-5) | Frozen VLM + FLARE Loss. 2x improvement in language instruction following (46.6% → 93.3%) |
| [GR00T N1.6](./groot-n1-6) | 2x DiT scale-up, Cosmos VLM, Relative Action Space. Loco-manipulation support |

### Open-Source VLA

| Model | Description |
|-------|-------------|
| [OpenVLA](./openvla) | First large-scale open-source VLA (7B). Performance on par with 55B RT-2-X, efficient fine-tuning with LoRA |
| [Octo](./octo) | 93M lightweight model. Transformer + Diffusion combination, fine-tuning possible on consumer GPU |
| [SmolVLA](./smolvla) | π0-level performance with 450M. Runs on MacBook, trained on LeRobot community data |

### Corporate VLA

| Model | Description |
|-------|-------------|
| [Figure Helix](./figure-helix) | Figure AI's humanoid VLA. First full-body high-speed control (200Hz), dual robot simultaneous control |
| [Redwood AI](./redwood-ai) | 1X Technologies' VLA for NEO. 160M parameters, on-board execution, World Model integration |
| [Generalist GEN-0](./generalist-gen0) | Claims discovery of robotics scaling laws with 270,000 hours of real data. Harmonic Reasoning architecture |
| [Sunday ACT-1](./sunday-act1) | Zero Robot Data approach. 10M+ episodes collected from 500+ homes using $200 gloves |

---

## Imitation Learning Policy Models

| Model | Description |
|-------|-------------|
| [ACT](./act) | Stanford's Action Chunking policy. 80-90% success rate with 10 minutes of demonstration, released with ALOHA hardware |
| [Diffusion Policy](./diffusion-policy) | Diffusion-based visuomotor policy. Natural handling of multimodal actions, 46.9% performance improvement |

---

## Vision-Language Models (for Robotics)

| Model | Description |
|-------|-------------|
| [Eagle](./eagle) | NVIDIA's Mixture of Encoders VLM. Serves as visual brain for GR00T N1/N1.5 |
| [Cosmos](./cosmos) | NVIDIA's World Foundation Model platform. Provides Tokenizer, Predict, Transfer, Reason models |

---

## Synthetic Data Generation

| Model | Description |
|-------|-------------|
| [DreamGen](./dreamgen) | NVIDIA's Neural Trajectory generation pipeline. Generates GR00T training data in 36 hours using World Foundation Model |

---

## Model Comparison

### Parameters and Features

| Model | Parameters | Open Source | Features |
|-------|------------|-------------|----------|
| [π0](./pi0) | 3.3B | O | Flow Matching, 50Hz |
| [GR00T N1](./groot-n1) | 2.2B | O | Dual-System, Humanoid |
| [OpenVLA](./openvla) | 7B | O | Prismatic VLM, LoRA |
| [SmolVLA](./smolvla) | 450M | O | Runs on MacBook |
| [Octo](./octo) | 93M | O | Diffusion decoder |
| [Gemini Robotics](./gemini-robotics) | - | X | Gemini 2.0 based |
| [Figure Helix](./figure-helix) | - | X | 200Hz high-speed control |

### Training Data Scale

| Model | Data Scale | Data Type |
|-------|-----------|-----------|
| [Generalist GEN-0](./generalist-gen0) | 270,000 hours | Real robot |
| [π0](./pi0) | 10,000+ hours | Teleoperation |
| [Sunday ACT-1](./sunday-act1) | 10M+ episodes | Gloves (human motion) |
| [GR00T N1](./groot-n1) | 780K synthetic + real | Simulation + Teleoperation |
| [SmolVLA](./smolvla) | 10.6M frames | Community data |
