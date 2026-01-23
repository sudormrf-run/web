---
title: Defining Physical AI
description: What is Physical AI? The origin of the term and scope definition
tags: [physical-ai, definition, robotics, embodied-ai, vla]
category: essays
order: 1
related:
  - specialist-to-generalist.md
  - what-is-rfm-vla.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

## What is Physical AI?

On March 18, 2024, NVIDIA CEO Jensen Huang put "Physical AI" front and center during his GTC keynote. Since then, this keyword has become a central topic in the AI industry.

Physical AI is not just a marketing term. It signifies **the era when AI moves beyond the digital world to act in the physical world**.

---

## Various Definitions

The definition of Physical AI is not yet unified.

| Perspective | Definition |
|-------------|------------|
| **Broad sense** | Any AI that interacts with the physical world (autonomous vehicles, drones, robots, etc.) |
| **Embodied AI** | AI that learns by interacting with the environment through a body |
| **NVIDIA's view** | AI systems that connect simulation and the real world |
| **VLA-centric** | General-purpose robot AI based on Vision-Language-Action models |

---

## Our Definition

**The scope of Physical AI covered in this knowledge base:**

> **Technologies and ecosystems centered on VLA (Vision-Language-Action) models that extend LLM intelligence into physical actions**

Why this definition?

### 1. LLM's Success is Key

Physical AI is getting attention because of LLM's success. Just as LLMs learned "common sense about the world" from all text on the internet, there's now hope that this intelligence can be transferred to robots.

### 2. VLA is the Core Technology

VLA (Vision-Language-Action) models are the key technology connecting LLM intelligence to physical actions. They see with eyes (Vision), understand commands (Language), and take action (Action).

### 3. It Includes the Entire Ecosystem

Physical AI is not just about models. It's an ecosystem that includes data collection, simulation, hardware, and evaluation methodologies.

---

## The Physical AI Ecosystem

Components of Physical AI:

### Models
- **VLA Models**: [π0](/knowledge/models/pi0), [OpenVLA](/knowledge/models/openvla), [GR00T](/knowledge/models/groot), etc.
- **Robot Foundation Models**: Foundation models applicable to various robots and tasks

### Data
- **Teleoperation**: Collected by humans controlling robots
- **Simulation**: Generated in virtual environments
- **Human Video**: Learning from human action videos

### Hardware
- **Humanoids**: [Tesla Optimus](/knowledge/hardware/humanoids/optimus), [Figure](/knowledge/hardware/humanoids/figure), etc.
- **Robot Arms**: [ALOHA](/knowledge/hardware/arms/aloha), [Franka](/knowledge/hardware/arms/franka-panda), etc.
- **Sensors**: Vision, tactile, force sensors, etc.

### Evaluation
- **Real Robot Evaluation**: Success rate, generalization ability
- **Simulation Benchmarks**: Reproducible standard evaluation

---

## Why Now?

Why Physical AI suddenly got attention in 2024:

1. **LLM's Success**: The remarkable generalization capabilities shown by GPT-4 and other LLMs
2. **VLM Development**: Maturation of multimodal models combining vision and language
3. **Hardware Advances**: Emergence of affordable, precise robot hardware
4. **Data Sharing**: Release of large-scale robot datasets like Open X-Embodiment
5. **Simulation Advances**: High-quality simulators like NVIDIA Isaac

The combination of these elements has raised expectations that "general-purpose robots might actually be possible now."

---

## Physical AI vs Traditional Robotics

| Aspect | Traditional Robotics | Physical AI |
|--------|---------------------|-------------|
| **Approach** | Task-specific programming | Data-driven learning |
| **Goal** | Specific task automation | General intelligence |
| **Intelligence** | Rule-based | LLM-based common sense |
| **Adaptability** | Limited | Responds to new situations |
| **Data** | Small, specialized | Large, diverse |

---

## Next Document

To understand why the "general-purpose robot" that Physical AI aims for is now possible, you need to understand the transition from Specialist to Generalist.

**Next: [From Specialist to Generalist](specialist-to-generalist)**
