---
title: OpenVLA
description: Stanford/Berkeley's 7B Open-Source Vision-Language-Action Model
tags: [openvla, stanford, berkeley, open-source, vla, llama, 7b]
category: models
---

# OpenVLA

> Home > Models > OpenVLA

---

## Key Significance

- **Democratization of VLA Research**: First large-scale open-source VLA (7B parameters) - complete release of checkpoints, code, and training pipeline
- **Efficient Performance**: Achieves comparable or better performance than 55B RT-2-X with 7B, proving efficiency relative to model size
- **Consumer GPU Fine-tuning**: LoRA trains only 1.4% of total parameters, enabling fine-tuning on general GPUs
- **Versatility**: Only model showing 50%+ success rate across all tested tasks
- **Prismatic VLM Based**: Strong visual understanding with SigLIP + DinoV2 dual vision encoder
- **Result of Academic Collaboration**: Jointly developed by 5 institutions - Stanford, UC Berkeley, TRI, Google DeepMind, MIT
- **Starting Point for Open-Source VLA Ecosystem**: Foundation for subsequent lightweight open-source VLA research like SmolVLA, MiniVLA

![OpenVLA Architecture](../assets/models/openvla/openvla_model_architecture.jpg)
<p align="center"><em>OpenVLA Architecture: Based on Prismatic VLM (SigLIP + DinoV2) + Llama 2 7B</em></p>

---

## Overview

OpenVLA is a 7B parameter open-source VLA model jointly developed by Stanford, UC Berkeley, Toyota Research Institute, Google DeepMind, and MIT. Smaller than RT-2-X (55B) but shows similar or better performance, and can be fine-tuned on consumer GPUs.

| Item | Details |
|------|---------|
| Published | June 2024 |
| Affiliation | Stanford, UC Berkeley, TRI, Google DeepMind, MIT |
| Paper | [arXiv:2406.09246](https://arxiv.org/abs/2406.09246) |
| Project | [openvla.github.io](https://openvla.github.io/) |
| GitHub | [github.com/openvla/openvla](https://github.com/openvla/openvla) |
| HuggingFace | [openvla/openvla-7b](https://huggingface.co/openvla/openvla-7b) |
| Parameters | 7B |

---

## Architecture

OpenVLA is built on **Prismatic-7B VLM**.

```
+-------------------------------------------------------------+
|                    OpenVLA Architecture                      |
+-------------------------------------------------------------+
|                                                              |
|  +-------------+  +-------------+                            |
|  |   SigLIP    |  |   DinoV2    |   Visual Encoder          |
|  |  Backbone   |  |  Backbone   |   (Fused)                 |
|  +------+------+  +------+------+                            |
|         |                |                                   |
|         +-------+--------+                                   |
|                 v                                            |
|         +-------------+                                      |
|         |  Projector  |   Image -> LLM space                |
|         +------+------+                                      |
|                v                                             |
|  +-------------------------+                                 |
|  |      Llama 2 7B         |   Language Backbone            |
|  |   (Action Prediction)   |                                 |
|  +-----------+-------------+                                 |
|              v                                               |
|       Tokenized Actions -> Continuous Robot Commands         |
+-------------------------------------------------------------+
```

| Component | Description |
|-----------|-------------|
| Visual Encoder | SigLIP + DinoV2 (fused) |
| Projector | Visual embeddings → LLM input space |
| LLM Backbone | Llama 2 7B |
| Output | Tokenized actions → Continuous robot commands |

---

## Training

| Item | Details |
|------|---------|
| Dataset | Open X-Embodiment |
| Episodes | 970K |
| Hardware | 64x A100 GPU |
| Training Period | 15 days |
| Data Sources | 21 institutions, 22 robot forms |

---

## Performance

### Zero-Shot Evaluation

| Comparison | Result |
|------------|--------|
| vs RT-1-X | Superior (WidowX, Google Robot) |
| vs Octo | Superior (WidowX, Google Robot) |
| vs RT-2-X (55B) | Comparable or better |

**Key:** 7B model matches or outperforms 55B model

### After Fine-tuning

- Superior to Octo on most Franka-Tabletop and DROID tasks
- **50%+ success rate** on all tested tasks (unique)
- Outperforms Diffusion Policy on multi-object and language-based tasks

### Limitations

- RT-2-X performs better on difficult semantic generalization (internet concepts)
- Reason: RT-2-X's larger pretraining data and co-fine-tuning strategy

---

## Fine-tuning

One of OpenVLA's key strengths is **efficient fine-tuning**.

### LoRA (Low-Rank Adaptation)

| Item | Details |
|------|---------|
| Fine-tuning Parameters | Only 1.4% of total |
| Performance | Equivalent to full fine-tuning |
| Hardware | Consumer GPU capable |

### Quantization

- No performance degradation after quantization
- Enables efficient serving

---

## Comparison with Other Models

| Model | Parameters | Open-Source | Features |
|-------|------------|-------------|----------|
| **OpenVLA** | 7B | O | VLM-based, strong at language instructions |
| Octo | 93M | O | Diffusion-based, fast fine-tuning |
| RT-2-X | 55B | X | Largest model, strong semantic generalization |
| RT-1-X | ~35M | O | Lightweight, basic performance |

---

## Key Advantages

| Feature | Description |
|---------|-------------|
| **Performance** | 7B model matching 55B model |
| **Efficiency** | LoRA trains only 1.4% of parameters |
| **Versatility** | 50%+ success rate on all tasks |
| **Accessibility** | Consumer GPU fine-tuning/serving |
| **Open-Source** | Complete release of checkpoints and code |

---

## Variants

| Model | Description |
|-------|-------------|
| OpenVLA-7B | Base model |
| MiniVLA | Lightweight version (Stanford ILIAD) |

---

## References

- [Project Page](https://openvla.github.io/)
- [arXiv Paper](https://arxiv.org/abs/2406.09246)
- [GitHub](https://github.com/openvla/openvla)
- [HuggingFace Model](https://huggingface.co/openvla/openvla-7b)
- [VentureBeat Article](https://venturebeat.com/ai/openvla-is-an-open-source-generalist-robotics-model)

---

## See Also

- [Model List](index.md)
- [Octo](octo.md)
- [RT](rt.md)
- [SmolVLA](smolvla.md)

### Related People
- [Sergey Levine](../people/sergey-levine.md) - Co-author
- [Chelsea Finn](../people/chelsea-finn.md) - Stanford Lab
