---
title: The Action Data Scaling Problem
description: Why VLA cannot scale as easily as LLMs
tags: [scaling, action-data, challenge]
category: essays
order: 4
related:
  - ../insights/teleoperation.md
  - ../insights/simulation-world-model.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-29
---

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/action_data_example.mp4" type="video/mp4" />
</video>
*Example of action data in LeRobot Dataset format*

---

## The Core Problem

Physical AI is receiving significant attention in the media today. This is because it seems possible to extend LLMs to implement VLA, which could impact a massive labor market.

However, there are challenges that make it difficult for VLA to follow LLM's success formula directly:

- **Action data doesn't exist on the internet**, making immediate scaling impossible.
- **Evaluation requires operating physical robots**, with significant risks of hardware failure or environmental destruction (like breaking dishes...).
- Beyond these, there are many other challenges including **fundamental understanding of Physical Intelligence**, difficulties in implementing tactile sensing, and challenges in mass-producing dexterous hardware.

---

## Differences from LLMs

| Aspect | LLM | VLA |
|--------|-----|-----|
| Data Source | Internet (unlimited) | Real robot actions (limited) |
| Collection Cost | Low | High |
| Labeling | Automatic (next token) | Manual or complex process |
| Evaluation | Can be automated | Requires physical robot operation |

---

## Various Solution Approaches

To solve these problems, various companies and research groups are trying different approaches.

| Approach | Organization | Description |
|----------|--------------|-------------|
| [Simulation](../insights/simulation-world-model) | NVIDIA | Produce, augment, and evaluate data with physics simulation (Omniverse) and World Model (Cosmos) |
| [Teleoperation](../insights/teleoperation) | Tesla, Google, Physical Intelligence, Galaxea | Direct data collection |
| [Non-Teleop](../insights/non-teleop-data) | UMI, Generalist, Sunday Robotics | Learning from Non-Teleop data |
| [Community](../insights/community-driven) | HuggingFace | Community-driven data collection with open-source spirit |
| World Model | 1X | Evaluation automation |
| Distributed Evaluation | Academia | OXE, RoboArena, etc. |
| Other | Various | Action extraction from human videos, egocentric data collection equipment, etc. |

---

## Teleoperation

## Old Days

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1957_teleop.mp4" type="video/mp4" />
</video>
*1957 teleoperation system*

### ALOHA

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/aloha_teleop.mp4" type="video/mp4" />
</video>
*ALOHA teleoperation system*

[ALOHA](https://tonyzhaozh.github.io/aloha/) is a low-cost teleoperation system developed at Stanford. It was used in the ACT (Action Chunking with Transformers) paper, and both the hardware design and software are fully open-source, making it easy for researchers to replicate.

### ROBOTIS OMY

<iframe width="315" height="560" src="https://www.youtube.com/embed/MGH44s5suK0" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

### TESLA

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/tesla_teleop.mp4" type="video/mp4" />
</video>
*Tesla teleoperation system*

Tesla is collecting Action data by [paying $48 per hour](https://interestingengineering.com/culture/teslapaying-to-train-optimus-robot) to teleoperators for their humanoid robot Optimus. Requirements include height between 5'7″~5'11″ (170~180cm), ability to walk 7+ hours per day, and carry loads up to 30 pounds (13.6kg).

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/guP1HM2iTW0?start=7725" title="Tesla Optimus Teleoperation Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Tesla Optimus teleoperation demonstration*

When you actually try teleoperation with VR equipment, sustaining it for extended periods is extremely difficult. The weight of the VR headset, restricted field of view, and repetitive motions while gripping controllers cause severe fatigue after just a few hours. This is one of the fundamental bottlenecks of teleoperation-based data collection.

---

## UMI Style Data Collection

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/umi_demo.mp4" type="video/mp4" />
</video>
*UMI data collection system*

[UMI (Universal Manipulation Interface)](https://umi-gripper.github.io/) is a system that enables manipulation data collection without robots using a handheld gripper. It records human manipulation actions without teleoperation equipment and can transfer the learned skills to various robots.

---

## Simulation

### NVIDIA Isaac GR00T

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/nvidia_blueprint.mp4" type="video/mp4" />
</video>
*NVIDIA Isaac GR00T Synthetic Manipulation*

[NVIDIA Isaac GR00T Synthetic Manipulation](https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation) is a Blueprint that generates synthetic data in simulation environments for robot manipulation learning. It enables mass production of training data across various scenarios without collecting real robot data.

---

## Community

HuggingFace's success formula:
1. Open Source HW, SW
2. Data & Model Hub
3. Tutorial & Hackathon

[smolVLA](https://huggingface.co/lerobot/smolvla_base) - a VLA built using community-collected data.

---

## World Model + IDM

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1x_world_model.mp4" type="video/mp4" />
</video>
*1X World Model Self-Learning*

[1X](https://www.1x.tech/discover/world-model-self-learning) is researching methods for robots to learn from unlabeled video data using World Models and IDM (Inverse Dynamics Model). This approach shows the potential to leverage large-scale video data without Action labels.

For more details, see [VLM Backbone Limitations and World Models](../insights/vlm-limits-world-model).

---

## Personal Reflections

Last summer, while hosting HuggingFace's LeRobot hackathon in Seoul, I felt both hope and challenges for the community-driven approach.

We are currently facing the massive problem of the physical world, with the hint of Scaling and various efforts to solve it all mixed together.

In these confusing times, I believe there are many opportunities and would like to share and discuss different perspectives on this topic.

---

## Intro Guide Complete

You've completed the Physical AI Introduction Guide.

To explore further, return to the [Physical AI Introduction Guide](../../physical-ai/) or read the insight essays below.

### Recommended Next Reads

- [Physical vs Cognitive Intelligence](../insights/physical-vs-cognitive) - Reflections on physical intelligence
- [VLA & RFM Progress](../insights/vla-rfm-progress) - Ongoing development of VLA and RFM
- [Humanoid Design](../insights/humanoid-design) - Design challenges of humanoids
- [Tactile Sensing](../insights/tactile-sensing) - Is tactile sensing necessary?
- [Teleoperation](../insights/teleoperation) - Data collection through teleoperation
- [Simulation & World Models](../insights/simulation-world-model) - Synthetic data and world models
