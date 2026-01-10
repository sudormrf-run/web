---
title: SmolVLA
description: HuggingFace's Lightweight Open-Source VLA Model
tags: [smolvla, huggingface, lerobot, lightweight, open-source, flow-matching]
category: models
---

# SmolVLA

> Home > Models > SmolVLA

---

## Key Significance

- **Extreme Efficiency**: 450M parameters achieving equal LIBERO benchmark performance (87.3%) as 7x larger Pi0 (3.3B)
- **Runs Anywhere**: Works on MacBook, consumer GPU, even CPU - dramatically lowers barrier to VLA research
- **Community Data Only**: Trained on 487 LeRobot community datasets (10M frames), achieves SOTA with only public data
- **Asynchronous Inference**: Separates action prediction and execution for 30% faster response, 2x throughput
- **Fast Training**: Completes training in 4 hours (20K steps) on single A100
- **Flow Matching Applied**: SmolVLM-2 + Flow Matching Action Expert architecture
- **Fully Reproducible**: Anyone can reproduce using open-source model, code, and public datasets only

![SmolVLA Overview](../assets/models/smolvla/smolvla_overview.png)
<p align="center"><em>SmolVLA: Achieving Pi0-level performance with 450M parameters</em></p>

---

## Overview

SmolVLA is a lightweight VLA model developed by HuggingFace, showing equal or better performance than 10x larger models with just 450M parameters. Runs on consumer GPUs and MacBooks, trained on LeRobot community data.

| Item | Details |
|------|---------|
| Published | June 2025 |
| Developer | HuggingFace |
| Parameters | 450M |
| Paper | [arXiv:2506.01844](https://arxiv.org/html/2506.01844v1) |
| Blog | [huggingface.co/blog/smolvla](https://huggingface.co/blog/smolvla) |
| Model | [lerobot/smolvla_base](https://huggingface.co/lerobot/smolvla_base) |

---

## Architecture

SmolVLA = **SmolVLM-2 (VLM)** + **Flow Matching Action Expert**

```
+---------------------------------------------------------+
|                  SmolVLA Architecture                    |
+---------------------------------------------------------+
|  Inputs:                                                |
|  +----------+  +----------+  +----------+               |
|  | Multiple |  | Robot    |  | Language |               |
|  | Camera   |  | State    |  | Instruct |               |
|  | Views    |  |          |  |          |               |
|  +----+-----+  +----+-----+  +----+-----+               |
|       |             |             |                      |
|       +-------------+-------------+                      |
|                     |                                    |
|              +------v------+                             |
|              |  SmolVLM-2  |   Compact VLM              |
|              |  (Context)  |                             |
|              +------+------+                             |
|                     |                                    |
|              +------v------+                             |
|              |   Action    |   Flow Matching            |
|              |   Expert    |                             |
|              +------+------+                             |
|                     |                                    |
|              +------v------+                             |
|              |   Action    |                             |
|              |   Chunk     |                             |
|              +-------------+                             |
+---------------------------------------------------------+
```

---

## Training Data

| Item | Details |
|------|---------|
| Data | 10M frames |
| Source | 487 LeRobot community datasets |
| Episodes | <30K (1/10 of other VLAs) |
| Environments | Various from labs to homes |

---

## Performance

### Benchmark Results

**LIBERO Benchmark:**

| Model | Parameters | Success Rate |
|-------|------------|--------------|
| **SmolVLA** | **0.45B** | **87.3%** |
| Pi0 | 3.3B | ~87% |

-> Equal performance with 7x smaller model

### Other Comparisons

- Superior to ACT (simulation and real environments)
- Validated on LIBERO, Meta-World, SO100, SO101

---

## Key Advantages

| Feature | Description |
|---------|-------------|
| **Lightweight** | 450M parameters (10x smaller) |
| **Efficient** | Runs on MacBook, CPU |
| **Fast Training** | 4 hours on single A100 (20K steps) |
| **Async Inference** | 30% faster response, 2x throughput |
| **Open-Source** | Complete release of model, code, data |

---

## Asynchronous Inference

SmolVLA's differentiating feature: **Separating action prediction and execution**

- Low-latency control
- Real-time operation even in resource-constrained environments
- 30% response speed improvement
- 2x task throughput

---

## Hardware Requirements

| Environment | Possible |
|-------------|----------|
| MacBook | O |
| Consumer GPU | O |
| CPU only | O |
| Training (single A100) | 4 hours |

---

## Impact

Significance of SmolVLA:
- **Accessibility**: VLA research possible without expensive infrastructure
- **Efficiency**: SOTA performance with less data, smaller model
- **Community**: Contributes to LeRobot ecosystem development
- **Reproducibility**: Fully open-source, public datasets only

---

## References

- [HuggingFace Blog](https://huggingface.co/blog/smolvla)
- [arXiv Paper](https://arxiv.org/html/2506.01844v1)
- [Model - smolvla_base](https://huggingface.co/lerobot/smolvla_base)
- [LeRobot Documentation](https://huggingface.co/docs/lerobot/en/smolvla)
- [TechCrunch Article](https://techcrunch.com/2025/06/04/hugging-face-says-its-new-robotics-model-is-so-efficient-it-can-run-on-a-macbook/)

---

## See Also

- [Model List](index.md)
- [HuggingFace](../companies/huggingface.md)
- [ACT](act.md)
- [pi0](pi0.md)
- [Community-Driven Approach](../solutions/community-driven.md)
