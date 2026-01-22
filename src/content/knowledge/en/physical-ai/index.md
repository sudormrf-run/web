---
title: Physical AI Introduction
description: An introduction to the definition, core concepts, and challenges of Physical AI
category: physical-ai
order: 1
isFeatured: true
icon: robot

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

## Physical AI: Why the Sudden Attention?

In 2024, after NVIDIA's Jensen Huang declared "Physical AI" at GTC, this keyword became a central topic in the AI industry.

Just as ChatGPT transformed the world of text, there's growing expectation that AI will now extend into the physical world. A future where robots fold laundry, organize logistics, and make coffee. Many people feel that future is getting closer.

But understanding exactly what Physical AI is, why it seems possible now, and what challenges lie ahead is not easy.

**This knowledge base is a guide to understanding Physical AI.**

---

## Defining Physical AI

There are many definitions of Physical AI. Some use it to mean robotics in general, others use it synonymously with embodied AI.

**Our definition of Physical AI:**

> **Technologies and ecosystems centered on VLA (Vision-Language-Action) models that extend LLM intelligence into physical actions**

This includes:

- **VLA Models**: Models integrating Vision, Language, and Action
- **Robot Foundation Models**: Foundation models for general-purpose robots
- **Data Collection Methods**: Teleoperation, simulation, human video, etc.
- **Evaluation Methods**: Real robot evaluation, simulation benchmarks, etc.
- **Hardware Ecosystem**: Humanoids, robot arms, grippers, etc.

---

## What's Different?

Past robots were **Specialists**. They could only do one thing well.

A barista robot at a café can only make that café's menu. A chess robot only works with a specific chessboard. They were narrow experts that stopped working with even slight environmental changes.

**Physical AI aims for Generalists.**

General-purpose robots that can handle various objects in various ways across various environments. Robots with common sense like humans, able to adapt to situations they've never seen before.

**Why does Generalist seem possible now?** Because of LLM's success.

For details, see **[From Specialist to Generalist](essays/fundamentals/specialist-to-generalist)**.

---

## How Is It Implemented?

The core technology for implementing Generalist robots is the **VLA (Vision-Language-Action)** model.

```
LLM → VLM → VLA
Language → Language + Vision → Language + Vision + Action
```

VLA inherits LLM's "World Knowledge." Just as LLMs learned from all text on the internet to gain common sense about the world, VLA acts in the physical world based on that same common sense.

- **See with eyes** (Vision)
- **Understand commands** (Language)
- **Take action** (Action)

**[What are RFM & VLA?](essays/fundamentals/what-is-rfm-vla)** covers VLA concepts and terminology in detail.

---

## VLA Is Not Easy

Can VLA simply follow LLM's success formula?

**It's not that simple.**

The biggest problem is **Data Scaling**.

- LLMs could learn from all text on the internet
- But Action data doesn't exist on the internet
- To collect data of a robot "picking up a cup," you need to actually operate a robot

**[The Action Data Scaling Problem](essays/fundamentals/scaling-problem)** explores this issue in depth.

Evaluation is also difficult. Measuring performance requires actually running robots, which takes time, hardware can break, and environments can be destroyed.

See **[The Challenge of Evaluation](essays/fundamentals/evaluation-problem)**.

---

## Other Challenges

Physical AI has numerous challenges beyond VLA.

### Data Collection Methods

- **[Teleoperation](essays/insights/teleoperation)**: Humans directly control robots to collect data
- **[Non-Teleop Data](essays/insights/non-teleop-data)**: Methods for collecting data without teleoperation
- **[Simulation & World Model](essays/insights/simulation-world-model)**: Generating data and training in virtual environments

### Hardware and Sensing

- **[Humanoid Design](essays/insights/humanoid-design)**: Why humanoids? Design philosophy and trade-offs
- **[Tactile Sensing](essays/insights/tactile-sensing)**: Vision isn't enough. Technology for giving robots the sense of touch

### Philosophical Questions

- **[Physical AI vs Cognitive AI](essays/insights/physical-vs-cognitive)**: What's the difference between physical and cognitive intelligence?

### Community

- **[Community Approaches](essays/insights/community-driven)**: Building the Physical AI ecosystem together through open source

---

## Next Steps

To systematically understand Physical AI, read through the documents in the **[Essays - Fundamentals](essays)** section in order.

If you want to learn about specific models, companies, or hardware, explore the left sidebar or use the **[Graph Index](physical-ai/browse)**.

---

## External Resources

- [LeRobot - HuggingFace](https://github.com/huggingface/lerobot) - Open source robot learning framework
- [Open X-Embodiment](https://robotics-transformer-x.github.io/) - Cross-robot dataset
- [NVIDIA Isaac](https://developer.nvidia.com/isaac) - Robot simulation platform
