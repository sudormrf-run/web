---
title: Google DeepMind
description: Google DeepMind's Robotics Research
tags: [google, deepmind, gemini-robotics, rt1, rt2, rt-x]
category: companies
---

# Google DeepMind

> Home > Companies > Google DeepMind

---

## Overview

Google DeepMind is a pioneer in robotics AI, leading key advancements in VLA models from RT-1 to Gemini Robotics. The current organization was formed in 2023 through the merger of Google Brain and DeepMind.

| Item | Details |
|------|---------|
| Headquarters | London, UK / Mountain View, CA |
| Founded | 2010 (DeepMind), 2023 (merger) |
| CEO | Demis Hassabis |
| Robotics Lead | Vincent Vanhoucke |

---

## Key Models

### Timeline

| Year | Model | Key Contribution |
|------|-------|-----------------|
| 2022 | RT-1 | First large-scale Robotics Transformer |
| 2023 | RT-2 | First VLA, "Action as Language" |
| 2023 | RT-X | Open X-Embodiment (33 research labs collaboration) |
| 2025 | Gemini Robotics | Gemini 2.0-based VLA |

### RT-1 (2022)

- Trained on 130K episodes
- Generalized to 700+ tasks using Transformer architecture
- 97% success rate (on trained tasks)

### RT-2 (2023)

- **"First VLA"** - Outputs actions as language
- Based on PaLM-E/PaLI-X (55B)
- Emergent capabilities: Understanding abstract commands

### RT-X (2023)

- Collaboration of 33 research labs (Open X-Embodiment)
- 22 robot types, 160K+ episodes
- Open dataset release

### Gemini Robotics (2025)

- Most powerful VLA based on Gemini 2.0
- 2x+ performance over SOTA
- On-Device version released (local execution)

---

## Research Approach

### Foundation Model Method

```
[Large-scale Pre-training] → [Fast Fine-tuning] → [New Task Adaptation]
```

### Core Principles

1. **Scaling**: More data, larger models
2. **Multimodal**: Integration of Vision + Language + Action
3. **Cross-robot**: Training/deployment across diverse robots
4. **Collaboration**: Open research like Open X-Embodiment

---

## Partnerships

| Partner | Details |
|---------|---------|
| Apptronik | Applying Gemini 2.0 to Apollo humanoid |
| Boston Dynamics | Testing Gemini Robotics-ER |
| Agility Robotics | Digit robot collaboration |

---

## References

- [Google DeepMind - Gemini Robotics](https://deepmind.google/models/gemini-robotics/)
- [RT-2 Paper](https://robotics-transformer2.github.io/)
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- [arXiv: Gemini Robotics](https://arxiv.org/abs/2503.20020)

---

## See Also

- [Company List](index.md)
- [RT Series](../models/rt.md)
- [Gemini Robotics](../models/gemini-robotics.md)
