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

*Example of action data in LeRobot Dataset format.* Each joint's state values are recorded, but such data does not exist on the internet.

---

## The Core Problem

It seems possible to extend LLMs to implement VLAs, which could impact a massive labor market. However, there are fundamental barriers that make it difficult for VLA to directly follow LLM's success formula:

- **Action data doesn't exist on the internet.** LLMs could scale by leveraging the vast text data on the internet, but robot action data is not recorded anywhere online, making immediate scaling impossible.
- **Evaluation requires operating physical robots.** The risks of hardware failure or environmental destruction (such as breaking dishes) are too significant, making it difficult to build automated benchmarks like those used for LLMs.
- **There are other fundamental challenges.** Lack of essential understanding of Physical Intelligence, difficulties in implementing tactile sensors, and challenges in mass-producing dexterous hardware are among the many problems that remain.

This document focuses on the **action data scarcity problem** and the various approaches being taken to solve it.

---

## Differences from LLMs

| Aspect | LLM | VLA |
|--------|-----|-----|
| Data Source | Internet (virtually unlimited) | Real robot actions (limited) |
| Collection Cost | Low | High |
| Evaluation | Can be automated | Requires physical robot operation |

*Table: Comparison of data collection and evaluation between LLM and VLA — the fundamental reason why VLA scaling is difficult*

LLMs were able to leverage the vast text data accumulated on the internet for training, and the quality of generated text can be automatically evaluated. In contrast, VLAs require moving actual robots to collect data, and the success of actions must be physically verified. This is the fundamental bottleneck of VLA scaling.

---

## Various Action Data Collection Methods

To solve these problems, various companies and research groups are trying different approaches. Let's examine the main methods below.

### Teleoperation

Teleoperation is a method where humans remotely control robots while collecting action data. It's the most direct data collection method but has limitations as it requires human labor.

#### 1957: The Beginning of Teleoperation

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1957_teleop.mp4" type="video/mp4" />
</video>

*1957 teleoperation system.* The history of remote-controlled robots is longer than one might think.

#### ALOHA

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/aloha_teleop.mp4" type="video/mp4" />
</video>

*ALOHA open-source bimanual teleoperation system*

[ALOHA](https://tonyzhaozh.github.io/aloha/) is a low-cost teleoperation system developed at Stanford. It was used in the ACT (Action Chunking with Transformers) paper, and both the hardware design and software are fully open-source, making it easy for researchers to replicate. The release of this system has greatly contributed to the democratization of robot learning research.

#### Tesla

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/tesla_teleop.mp4" type="video/mp4" />
</video>

*Tesla teleoperation data collection team*

Tesla is collecting action data by [paying $48 per hour](https://interestingengineering.com/culture/teslapaying-to-train-optimus-robot) to teleoperators for their humanoid robot Optimus. Requirements include height between 5'7" ~ 5'11" (about 170-180cm), ability to walk 7+ hours per day, and carry loads up to 30 pounds (about 13.6kg). This is because the teleoperator's movements are directly reflected in the actual robot.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/guP1HM2iTW0?start=7725" title="Tesla Optimus Teleoperation Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*VR teleoperation demonstration*

When you actually try teleoperation with VR equipment, sustaining it for extended periods is extremely difficult. The weight of the VR headset, restricted field of view, and repetitive motions while gripping controllers cause severe fatigue after just a few hours. This is one of the fundamental bottlenecks of teleoperation-based data collection.

---

### UMI-Style Data Collection

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/umi_demo.mp4" type="video/mp4" />
</video>

*UMI data collection system*

[UMI (Universal Manipulation Interface)](https://umi-gripper.github.io/) is a system that enables manipulation data collection without robots using a handheld gripper. It records human manipulation actions without teleoperation equipment and can transfer the learned skills to various robots.

The advantage of this approach is that data can be collected without robot hardware, greatly improving the scalability of data collection.

---

### Simulation

#### NVIDIA Isaac & Cosmos

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/nvidia_blueprint.mp4" type="video/mp4" />
</video>

*NVIDIA Isaac GR00T Synthetic Manipulation*

[NVIDIA Isaac GR00T Synthetic Manipulation](https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation) is a Blueprint that generates synthetic data in simulation environments for robot manipulation learning. It enables mass production of training data across various scenarios without collecting real robot data.

Simulation-based approaches can significantly reduce data collection costs, but overcoming the sim-to-real gap between simulation and reality is the key challenge.

---

### HuggingFace Community

HuggingFace is driving community-based data collection through its open-source ecosystem. Their success formula is as follows:

- **Open Source HW, SW**: Making hardware and software designs public so anyone can participate
- **Data & Model Hub**: Providing a central hub where datasets and models can be shared
- **Tutorial & Hackathon**: Encouraging community participation through educational materials and hackathons

[smolVLA](https://huggingface.co/lerobot/smolvla_base), a VLA trained using community data, demonstrates the results of this approach.

---

### World Model + IDM

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/1x_world_model.mp4" type="video/mp4" />
</video>

*1X World Model Self-Learning*

[1X](https://www.1x.tech/discover/world-model-self-learning) is researching methods for robots to learn from unlabeled video data using World Models and IDM (Inverse Dynamics Model). This approach shows the potential to leverage large-scale video data without action labels.

While robot action data doesn't exist on the internet, videos containing human movements are virtually unlimited. If actions can be extracted from these videos, it might be possible to break through the scaling problem.

For more details, see [VLM Backbone Limitations and World Models](/knowledge/essays/insights/vlm-limits-world-model).

---

## Approaches Summary

| Approach | Organization | Description |
|----------|--------------|-------------|
| [Teleoperation](/knowledge/essays/insights/teleoperation) | Tesla, Google, Physical Intelligence, Galaxea | Direct data collection |
| [Non-Teleop](/knowledge/essays/insights/non-teleop-data) | UMI, Generalist, Sunday Robotics | Learning from Non-Teleop data without robots |
| [Simulation](/knowledge/essays/insights/simulation-world-model) | NVIDIA | Produce, augment, and evaluate data with physics simulation (Omniverse) and World Model (Cosmos) |
| [Community](/knowledge/essays/insights/community-driven) | HuggingFace | Community-based data collection with open-source spirit |
| World Model | 1X, NVIDIA | Evaluation automation, VLA backbone replacement, synthetic data generation with world models |
| Distributed Evaluation | Academia | OXE, RoboArena, etc. |
| Other | Various | Action extraction from human videos, egocentric data collection equipment, etc. |

*Table: Major approaches and organizations addressing the VLA scaling problem*

Each approach has its own pros and cons, and it's not yet clear which method is best. We need to keep watching the developments in this field.

---

## Intro Guide Complete

You've completed the Physical AI Introduction Guide.

To explore further, return to the [Physical AI Introduction Guide](/knowledge/physical-ai/) or read the insight essays below.

### Recommended Next Reads

- [Physical vs Cognitive Intelligence](/knowledge/essays/insights/physical-vs-cognitive) - Reflections on physical intelligence
- [VLA & RFM Progress](/knowledge/essays/insights/vla-rfm-progress) - Ongoing development of VLA and RFM
- [Humanoid Design](/knowledge/essays/insights/humanoid-design) - Design challenges of humanoids
- [Tactile Sensing](/knowledge/essays/insights/tactile-sensing) - Is tactile sensing necessary?
- [Teleoperation](/knowledge/essays/insights/teleoperation) - Data collection through teleoperation
- [Simulation & World Models](/knowledge/essays/insights/simulation-world-model) - Synthetic data and world models
