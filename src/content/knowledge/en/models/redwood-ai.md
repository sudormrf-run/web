---
title: Redwood AI (1X Technologies)
description: 1X Technologies' Vision-Language-Action Model for NEO Humanoid
tags: [redwood-ai, 1x, neo, humanoid, world-model, vla, home-robot]
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

- **First Consumer Humanoid Deployment**: VLA deployed in actual homes with NEO robot - ~$20,000 price point
- **On-board Execution**: 160M parameters running at 5Hz on robot's built-in GPU, no cloud dependency
- **World Model Innovation**: 1XWM predicts task success rate before actual execution, accelerates policy selection
- **Cross-Embodiment**: Single model supports both EVE (wheeled) and NEO (humanoid)
- **Hybrid Operation**: AI autonomous + remote expert supervision hybrid architecture
- **Safety-First Design**: Tendon-driven mechanism for inherent safety
- **OpenAI Investment**: $240M funding with OpenAI as major investor

---

## Overview

Redwood AI is a VLA model developed by 1X Technologies for humanoid robots. A 160M parameter vision-language transformer running on NEO robot's built-in GPU, performing various tasks in home environments.

| Item | Details |
|------|---------|
| Company | 1X Technologies (Norway/US) |
| Robot | NEO (Humanoid), EVE (Wheeled) |
| Parameters | 160M |
| Inference Speed | ~5Hz |
| Execution Environment | On-board GPU |
| Official Site | [1x.tech/ai](https://www.1x.tech/ai) |

---

## Architecture

Redwood AI has a **VLM + Diffusion Policy + RL Controller** structure.

```
+-------------------------------------------------------------+
|                   Redwood AI Architecture                    |
+-------------------------------------------------------------+
|                                                              |
|   +----------+  +----------+  +----------+                   |
|   |  Vision  |  |  Audio   |  | Language |                   |
|   |  Input   |  |  Input   |  |  Input   |                   |
|   +----+-----+  +----+-----+  +----+-----+                   |
|        |             |             |                          |
|        +-------------+-------------+                          |
|                      |                                        |
|        +-------------v-------------+                          |
|        |   Vision-Language Model   |  160M parameters         |
|        |   (Cognitive Prediction)  |                          |
|        +-------------+-------------+                          |
|                      |                                        |
|        +-------------v-------------+                          |
|        |    Diffusion Policy       |  Action decoding         |
|        |    Decoder                |                          |
|        +-------------+-------------+                          |
|                      |                                        |
|        +-------------v-------------+                          |
|        |    RL Mobility            |  Full-body control       |
|        |    Controller             |                          |
|        +-------------+-------------+                          |
|                      |                                        |
|                      v                                        |
|               NEO Robot Actions                               |
|                                                              |
+-------------------------------------------------------------+
```

### Model Components

| Component | Role |
|-----------|------|
| **Vision-Language Model** | 160M parameters, visual-language understanding |
| **Cognitive Prediction Heads** | Hand position, object position prediction for improved generalization |
| **Diffusion Policy Decoder** | Continuous action generation |
| **RL Mobility Controller** | Full-body locomotion: walking, stairs, sitting/standing |

### Onboard AI Stack (1X Cortex)

| Function | Description |
|----------|-------------|
| **LLM** | Conversational control and knowledge access |
| **Audio Intelligence** | Speech recognition, selective listening |
| **Visual Intelligence** | Situation awareness, object recognition |
| **Memory** | Conversation continuity, past context recall |

---

## 1X World Model (1XWM)

Core innovation of Redwood AI - **Physics-based generative simulator**

### Concept

```
Predict task success rate without actual execution
    |
Quickly compare policy candidates
    |
Select optimal checkpoint
```

### Architecture

| Input | Processing | Output |
|-------|------------|--------|
| Video frames | Latent representation encoding | Future frame prediction |
| Robot observations | Physical simulation | State value (success probability) |
| Action trajectories | Multiple future generation | Policy evaluation score |

### Key Features

| Feature | Description |
|---------|-------------|
| **Action-Controllable** | Controlled by precise robot trajectories, not text |
| **Multiple Future Generation** | Predicts various outcomes from same starting point |
| **Cross-Task Transfer** | Combined dataset training outperforms individual |
| **Scaling** | Confirmed accuracy improvement with data increase |

### Performance

| Metric | Result |
|--------|--------|
| Prediction-Reality Correlation | Strong |
| Policy Selection Accuracy | 90% (when real gap is 15%+) |
| Required Accuracy | 70% sufficient for valid policy selection |

### Limitations

- Accuracy drops on objects not in training data
- Difficulty with locomotion tasks having cumulative position errors

---

## Mobility Controller

RL-based controller for NEO's full-body locomotion

### Supported Motions

| Motion | Description |
|--------|-------------|
| Walking | Natural gait in all directions |
| Stairs | Stereo vision-based stair climbing/descending |
| Sitting/Standing | Natural posture transitions |
| Kneeling | Support for low-height work |
| Running | Fast locomotion |
| Sidestep | Narrow space navigation |

### Training Method

```
Motion Capture data -> Kinematic Planner -> Human-like trajectory generation
                              |
               RL Controller -> Balance maintenance while following trajectory
```

- **Fully Simulation Trained**: Real-world robustness via physics randomization
- **2-Stage Design**: High-level motion planning + Low-level balance control

---

## Capabilities

### End-to-End Mobile Manipulation

| Task | Description |
|------|-------------|
| Object Fetching | Search and deliver user-requested objects |
| Door Opening | Operate doors while moving |
| Tidying Up | Move objects to appropriate locations |
| Appliance Use | Operate air fryer, microwave, etc. |

### Multi-Contact Manipulation

| Feature | Description |
|---------|-------------|
| Bracing | Support with one hand while manipulating with other |
| Bimanual Coordination | Simultaneous use of both arms |
| Full-body Utilization | Simultaneous locomotion and manipulation |

### Multimodal Intelligence

| Modality | Function |
|----------|----------|
| **Vision** | Object recognition, scene understanding, material recognition |
| **Audio** | Voice commands, selective attention |
| **Language** | Natural language conversation, knowledge provision |
| **Memory** | Conversation continuity, user preference learning |

---

## Hardware: NEO

Humanoid robot with Redwood AI installed

| Item | Spec |
|------|------|
| Height | 5 feet 5 inches (165cm) |
| Weight | 66 pounds (30kg) |
| Actuation | Tendon-driven (inherently safe) |
| Price | ~$20,000 |
| Release | NEO Beta (2024.08), NEO Gamma (2025.02) |

### Safety

- **Tendon-Driven**: Motors separated from joints for flexibility on collision
- **Lightweight Design**: 30kg for safe human interaction
- **Compliance**: Control that yields to external forces

---

## Hybrid Operation

1X's unique approach - **AI autonomous + human supervision**

```
+----------------------------------------------------+
|                  Hybrid Operation                   |
+----------------------------------------------------+
|                                                     |
|   NEO Autonomous Execution                          |
|        |                                            |
|        +-- Success -> Task complete                 |
|        |                                            |
|        +-- Difficulty -> 1X Expert remote supervision|
|                      |                              |
|                      +-- New skill learning         |
|                                                     |
+----------------------------------------------------+
```

| Mode | Description |
|------|-------------|
| **Autonomous** | Redwood AI independently performs tasks |
| **Remote Supervision** | 1X experts teleoperate for complex tasks |
| **Learning** | Continuous model improvement from supervision data |

---

## Training

### Data Sources

| Source | Description |
|--------|-------------|
| Teleoperation | Human-controlled data in homes/offices |
| Autonomous Episodes | Robot's own execution data |
| Success/Failure Both | Learn from various outcomes |

### Training Methods

| Method | Use |
|--------|-----|
| **Imitation Learning** | Learn basic skills from human demonstrations |
| **Reinforcement Learning** | Locomotion control, policy improvement |
| **World Model** | Fast policy evaluation and selection |

### Cross-Embodiment

| Robot | Form |
|-------|------|
| EVE | Wheeled upper-body robot |
| NEO | Bipedal humanoid |

Single Redwood model supports both platforms

---

## Evolution

### NEO Version History

| Version | Timing | Features |
|---------|--------|----------|
| **NEO Beta** | 2024.08 | Initial prototype, 50-100M VLM |
| **NEO Gamma** | 2025.02 | Improved dexterity, Redwood AI deployment |
| **NEO (Consumer)** | 2025.10 | $20,000 home release |

### Redwood AI Development

| Timing | Development |
|--------|-------------|
| Initial | 50-100M parameter VLM |
| Current | 160M VL-Transformer + Diffusion |
| World Model | Accelerated policy evaluation with 1XWM |

---

## Funding & Partnerships

| Item | Details |
|------|---------|
| Total Funding | $240M+ |
| Key Investors | **OpenAI**, Samsung, Tiger Global |
| Strategic Partner | NVIDIA (Isaac platform) |

---

## Comparison with Other VLAs

| Item | Redwood AI | Pi0 | GR00T N1 |
|------|------------|-----|----------|
| Parameters | 160M | 3.3B | - |
| Execution Environment | On-board GPU | Server | Jetson Thor |
| Speed | 5Hz | 50Hz | 30Hz |
| Target | Consumer homes | General purpose | Humanoid |
| Price Point | $20K robot | Research | Industrial |

---

## References

- [1X Technologies AI](https://www.1x.tech/ai)
- [1X World Model](https://www.1x.tech/discover/redwood-ai-world-model)
- [NEO Home Robot](https://www.1x.tech/neo)
- [arXiv - Generative World Modelling for Humanoids](https://arxiv.org/abs/2510.07092)
- [1X World Model Technical Report](https://www.1x.tech/1x-world-model.pdf)
- [GitHub - 1xgpt World Model Challenge](https://github.com/1x-technologies/1xgpt)

---

## See Also

- [Model List](index.md)
- [1X Technologies](../companies/1x.md)
- [GR00T](groot.md)
- [Figure Helix](figure-helix.md)
- [World Model](../solutions/simulation-world-model.md)
