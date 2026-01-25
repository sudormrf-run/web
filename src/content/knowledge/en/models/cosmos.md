---
title: NVIDIA Cosmos (World Foundation Model)
description: NVIDIA's World Foundation Model Platform for Physical AI
tags: [cosmos, nvidia, world-model, physical-ai, video-generation, tokenizer, diffusion, autoregressive, robotics, autonomous-vehicle]
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

- **World Model Platform for Physical AI**: The first comprehensive world foundation model platform for robots, autonomous vehicles, and video analytics AI
- **Physics-Aware Video Generation**: Trained on 9 trillion tokens from 20 million hours of real-world data to generate physically plausible videos
- **Open Model Ecosystem**: Tokenizer, Predict, Transfer, and Reason models available under commercially permissive open license
- **Bridging Sim-to-Real Gap**: Cosmos Transfer overcomes the visual domain gap between simulated and real environments
- **Integration with GR00T**: N1.6 adopts Cosmos-Reason-2B VLM for enhanced robot reasoning capabilities
- **Industry-Wide Adoption**: Major companies including 1X, Figure AI, Agility, Waabi, XPENG, and Uber have adopted the platform

---

## Overview

NVIDIA Cosmos is a World Foundation Model (WFM) platform designed to accelerate Physical AI development. Consisting of tokenizers, prediction models, transfer models, and reasoning models, it enables robots and autonomous vehicles to learn in digital environments first and then apply that knowledge to the real world.

| Item | Details |
|------|---------|
| Initial Announcement | January 6, 2025 (CES 2025) |
| Major Update | March 18, 2025 (GTC 2025) |
| Company | NVIDIA |
| Paper | [arXiv:2501.03575](https://arxiv.org/abs/2501.03575) |
| GitHub | [nvidia-cosmos](https://github.com/nvidia-cosmos) |
| License | NVIDIA Open Model License (commercially usable) |
| Training Data | 9 trillion tokens / 20 million hours of real-world data |

---

## Cosmos Product Family

The Cosmos platform consists of four core components:

| Product | Role | Versions |
|---------|------|----------|
| **Cosmos Tokenizer** | Compress images/videos to tokens | 0.1, 1.0 |
| **Cosmos Predict** | Predict future frames from text/image/video | 1.0, 2.0, 2.5 |
| **Cosmos Transfer** | Sim-to-real conversion, multi-control | 1, 2.5 |
| **Cosmos Reason** | Physical AI reasoning VLM | 1, 2 |

### Model Size Categories

| Category | Description | Use Case |
|----------|-------------|----------|
| **Nano** | Optimized for real-time, low-latency inference | Edge deployment |
| **Super** | Balance of performance and efficiency | General-purpose baseline |
| **Ultra** | Maximum quality and fidelity | Custom model distillation |

---

## Cosmos Tokenizer

A neural network-based compression model that efficiently tokenizes images and videos.

### Architecture

| Item | Details |
|------|---------|
| Structure | Symmetric Encoder-Decoder |
| Temporal Design | Causal Temporal Convolution + Attention |
| Preprocessing | 2-level Haar Wavelet Transform (4x downsampling) |
| Compression Rate | Spatial 8x/16x, Temporal 4x/8x, Total up to **2048x** |

### Tokenizer Types

| Type | Code | Description | Used By |
|------|------|-------------|---------|
| Continuous Image | CI | Continuous latent embeddings (image) | Diffusion models |
| Discrete Image | DI | Discrete tokens (image) | Autoregressive models |
| Continuous Video | CV | Continuous latent embeddings (video) | Diffusion models |
| Discrete Video | DV | Discrete tokens (video) | Autoregressive models |

### Key Models

| Model | Compression | Use Case |
|-------|-------------|----------|
| Cosmos-1.0-Tokenizer-CV8x8x8 | 8x8x8 = 512x | Diffusion WFM |
| Cosmos-1.0-Tokenizer-DV8x16x16 | 8x16x16 = 2048x | Autoregressive WFM |
| Cosmos-0.1-Tokenizer-CI8x8 | 8x8 = 64x | Image Diffusion |
| Cosmos-0.1-Tokenizer-DI8x8 | 8x8 = 64x | Image AR |

### Performance

| Metric | Value |
|--------|-------|
| Compression vs SOTA | **8x improvement** |
| Speed vs SOTA | **Up to 12x faster** |
| Max length at 1080p | 8 seconds (single A100 80GB) |
| Max length at 720p | 10 seconds (single A100 80GB) |
| Supported aspect ratios | 1:1, 3:4, 4:3, 9:16, 16:9 |

---

## Cosmos Predict

World generation models that predict future frames from text, image, and video inputs.

### Cosmos Predict 1.0

#### Diffusion Models

| Model | Parameters | Input | Output |
|-------|------------|-------|--------|
| Cosmos-1.0-Diffusion-7B-Text2World | 7B | Text | 121 frames |
| Cosmos-1.0-Diffusion-14B-Text2World | 14B | Text | 121 frames |
| Cosmos-1.0-Diffusion-7B-Video2World | 7B | Text + Image/Video | 120 frames |
| Cosmos-1.0-Diffusion-14B-Video2World | 14B | Text + Image/Video | 120 frames |

**Architecture:**
- Diffusion Transformer (DiT) based
- Interleaved Self-Attention + Cross-Attention + FFN structure
- Adaptive Layer Normalization (AdaLN) for time information embedding
- LoRA reduces parameters from 11B to 7B (36% reduction) while maintaining performance
- Tokenizer: Cosmos-1.0-Tokenizer-CV8x8x8

#### Autoregressive Models

| Model | Parameters | Input | Output |
|-------|------------|-------|--------|
| Cosmos-1.0-Autoregressive-4B | 4B | Image (first frame) | 32 frames |
| Cosmos-1.0-Autoregressive-12B | 12B | Image (first frame) | 32 frames |
| Cosmos-1.0-Autoregressive-5B-Video2World | 5B | Text + Image/Video | 24-32 frames |
| Cosmos-1.0-Autoregressive-13B-Video2World | 13B | Text + Image/Video | 24-32 frames |

**Architecture:**
- Llama3-style GPT structure (trained from scratch)
- Interleaved Self-Attention + FFN structure
- Video2World: Cross-Attention added via T5 embeddings
- Tokenizer: Cosmos-1.0-Tokenizer-DV8x16x16
- Resolution: 1024x640

### Cosmos Predict 2.5 (Oct 2025)

The latest world simulation model that unifies Text2World/Image2World/Video2World into a single model.

| Model | Parameters | Features |
|-------|------------|----------|
| Cosmos-Predict2.5-2B | 2B | Optimized for edge deployment |
| Cosmos-Predict2.5-14B | 14B | Highest quality |

**Key Improvements:**
- Flow-matching architecture adopted
- Uses Cosmos-Reason1 VLM as text encoder
- Trained on 200 million curated video clips
- Supports robot action sequence conditioned prediction
- 7-camera multiview support (for autonomous driving)

---

## Cosmos Transfer

Models that transform simulated environments to photorealistic levels and control video generation through structured inputs (segmentation, depth, edges, etc.).

### Cosmos Transfer 1 (Mar 2025)

| Item | Details |
|------|---------|
| Paper | [arXiv:2503.14492](https://arxiv.org/abs/2503.14492) |
| Base Model | Cosmos-Predict1 |
| Architecture | DiT + ControlNet |
| Control Blocks | 3 Transformer blocks |
| Initialization | Zero-initialized Linear Layer |

**Supported Input Modalities:**
- Segmentation video
- Depth video
- Edge video
- Blur video
- LiDAR video
- HDMap video (for autonomous driving)

**Key Features:**
- **Spatiotemporal Control Map**: Adjusts spatiotemporal weights for each modality
- **MultiControlNet**: Enables simultaneous use of multiple modalities
- **Sim-to-Real Transformation**: Converts simulation footage to photorealistic quality

### Cosmos Transfer 2.5 (Oct 2025)

Next-generation transfer model based on Cosmos-Predict2.5.

| Model | Capability |
|-------|------------|
| Cosmos-Transfer2.5 | World simulation based on multiple spatial control inputs |

---

## Cosmos Reason

Reasoning Vision-Language Model (VLM) for Physical AI. Enables robots and AI agents to reason like humans to understand and act in the physical world.

### Cosmos Reason 2 (Dec 2025)

| Item | Details |
|------|---------|
| Announcement | December 19, 2025 (CoRL 2025) |
| CES 2026 Release | January 2026 |
| Base Architecture | Qwen3-VL |
| Structure | Vision Transformer (ViT) + Dense Transformer LLM |
| Context Length | Up to 256K tokens |

### Model Versions

| Model | Parameters | Use Case |
|-------|------------|----------|
| Cosmos-Reason2-2B | 2B | Edge/embedded (used in GR00T N1.6) |
| Cosmos-Reason2-8B | 8B | Cloud/high-performance inference |

### Key Capabilities

| Capability | Description |
|------------|-------------|
| Physical Common Sense | Understanding of space, time, and fundamental physics |
| Chain-of-Thought Reasoning | Generates embodied decisions through long reasoning processes |
| Spatiotemporal Precision | Accurate event tracking based on timestamps |
| Object Detection | 2D/3D point localization, bounding boxes + reasoning explanations |
| Causal Analysis | Reasoning about "Why is this happening?" and "What will happen next?" |

### Use Cases

| Domain | Application |
|--------|-------------|
| Robot Planning | System 2 (slow thinking) role in VLA models |
| Video Analytics | Large-scale video insight extraction from urban/industrial environments |
| Data Annotation | Automated labeling and description of synthetic/real videos |

---

## Integration with GR00T

Cosmos is tightly integrated with NVIDIA's GR00T humanoid robot foundation model.

### Cosmos-Reason-2B in GR00T N1.6

| Item | Details |
|------|---------|
| VLM | Cosmos-Reason-2B (upgraded from Eagle2-1B) |
| Feature | Native Resolution support (distortion-free input) |
| Effect | Improved scene understanding and task decomposition |

**Improvement Effects:**
- 2x larger VLM compared to Eagle2-1B for enhanced visual understanding
- Native resolution support processes images without padding
- Better environmental reasoning and situational awareness

### Cosmos + GR00T Training Pipeline

```
Omniverse (Simulation)
    |
Cosmos Predict (Synthetic Data Generation)
    |
Cosmos Transfer (Sim-to-Real Transformation)
    |
Cosmos Reason (Data Labeling/Annotation)
    |
GR00T N1.6 (VLA Training)
```

---

## Physical AI Applications

### Robotics

| Company | Application |
|---------|-------------|
| 1X | Training NEO Gamma with Cosmos Predict + Transfer |
| Agility Robotics | Large-scale synthetic data generation with Cosmos Transfer + Omniverse |
| Figure AI | Physical AI data pipeline |
| Skild AI | Augmenting synthetic datasets with Cosmos Transfer |

### Autonomous Driving

| Company | Application |
|---------|-------------|
| Waabi | Autonomous driving scenario generation |
| XPENG | Vehicle AI training data |
| Uber | Ridesharing autonomous driving research |

---

## Timeline

| Date | Event |
|------|-------|
| Jan 6, 2025 | Cosmos platform announced at CES 2025 |
| Jan 7, 2025 | arXiv paper published (2501.03575) |
| Mar 18, 2025 | Major updates announced at GTC 2025 |
| Mar 2025 | Cosmos-Transfer1 paper released (2503.14492) |
| Jun 2025 | Cosmos-Reason-2B integrated into GR00T N1.6 |
| Oct 6, 2025 | Cosmos-Predict2.5, Transfer2.5 released |
| Dec 19, 2025 | Cosmos-Reason2 released (CoRL 2025) |
| Jan 2026 | Cosmos Reason 2 officially unveiled at CES 2026 |

---

## References

### Official Resources
- [NVIDIA Cosmos Official Page](https://www.nvidia.com/en-us/ai/cosmos/)
- [NVIDIA Cosmos Research Page](https://research.nvidia.com/publication/2025-01_cosmos-world-foundation-model-platform-physical-ai)
- [GitHub - nvidia-cosmos](https://github.com/nvidia-cosmos)

### Papers
- [Cosmos World Foundation Model Platform for Physical AI (arXiv:2501.03575)](https://arxiv.org/abs/2501.03575)
- [Cosmos-Transfer1: Conditional World Generation with Adaptive Multimodal Control (arXiv:2503.14492)](https://arxiv.org/abs/2503.14492)

### News and Announcements
- [NVIDIA Newsroom - CES 2025 Announcement](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development)
- [NVIDIA Newsroom - GTC 2025 Update](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools)
- [NVIDIA Newsroom - Cosmos Reason 2 Announcement](https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots)

### Models
- [Hugging Face - NVIDIA Cosmos Models](https://huggingface.co/nvidia)
- [NVIDIA NGC - Cosmos](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/cosmos)

### Technical Blogs
- [NVIDIA Developer Blog - Cosmos Platform](https://developer.nvidia.com/blog/advancing-physical-ai-with-nvidia-cosmos-world-foundation-model-platform)
- [Hugging Face Blog - Cosmos Reason 2](https://huggingface.co/blog/nvidia/nvidia-cosmos-reason-2-brings-advanced-reasoning)

---

## See Also

- [Model Index](./)
- [GR00T](groot) - NVIDIA Humanoid Robot Foundation Model
- [NVIDIA](../companies/nvidia)
- [Simulation & World Model](../essays/insights/simulation-world-model)

### Related People
- [Jim Fan](../people/jim-fan) - NVIDIA GEAR Lab, Physical AI Research Lead
