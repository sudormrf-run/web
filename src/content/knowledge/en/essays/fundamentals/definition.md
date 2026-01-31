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

## Physical AI: The Emergence of the Term

On March 18, 2024, NVIDIA CEO Jensen Huang put "Physical AI" front and center during his GTC keynote.

> "The next wave of AI will be AI learning about the physical world... Physical AI, AI that can perceive, reason, plan and act."
> — Jensen Huang, GTC 2024 ([NVIDIA Blog](https://blogs.nvidia.com/blog/2024-gtc-keynote/))

> "The ChatGPT moment for general robotics is just around the corner."
> — Jensen Huang ([HPC Wire](https://www.hpcwire.com/2025/03/24/jensen-huang-charts-nvidias-ai-powered-future/))

Since then, Physical AI has become a central topic in the AI industry. However, the definition of this term is not yet unified.

---

## Various Definitions

Definitions of Physical AI can be broadly divided into two categories.

### Broad Definition: "AI with a Body"

This is the wide definition primarily used by NVIDIA and general media.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/AYSfcgVv9-U" title="What is Physical AI? - NVIDIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Source: [NVIDIA Glossary - Generative Physical AI](https://www.nvidia.com/en-us/glossary/generative-physical-ai/)*

> "The next big thing is Physical AI, AI with a body."
> — Jensen Huang

From this perspective, Physical AI includes **all AI that interacts with the physical world**:
- Autonomous vehicles
- Drones
- Industrial robots
- Humanoids
- Digital twins

As a GPU vendor, it makes sense for NVIDIA to unify various GPU use cases under the "Physical AI" keyword.

### Narrow Definition: VLA or End-to-End Learning-based General-Purpose Robots

Companies actually developing robot AI, such as Physical Intelligence, Google DeepMind, and Figure AI, use a narrower definition.

> "To build AI systems that have the kind of physically situated versatility that people possess, we need to make AI systems embodied so that they can acquire physical intelligence."
> — [Physical Intelligence](https://www.physicalintelligence.company/)

> "Vision-language-action (VLA) model... can 'see' (vision), 'understand' (language) and 'act' (action) within the physical world."
> — [Google DeepMind, Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/)

From this perspective, Physical AI means **general-purpose robot AI based on VLA (Vision-Language-Action) models**.

---

## Our Definition

**We adopt the narrow definition:**

> **AI systems and their ecosystem that perform generalist physical tasks—previously impossible with rule-based approaches—based on end-to-end VLA models**

Why this definition?

### 1. A Threshold Exists

Just as LLMs had their "ChatGPT moment," robots also have a **clear threshold**.

**July 2023: The Emergence of RT-2**

> "The concept of Vision-Language-Action (VLA) models was pioneered in July 2023 by Google DeepMind with RT-2."
> — [Wikipedia: Vision-language-action model](https://en.wikipedia.org/wiki/Vision-language-action_model)

RT-2 was the first to **train on both web data and robot data**, treating robot actions **like language tokens**. This enabled:
- Demonstrated **generalization ability** to objects/commands not in training data
- Ability to execute **reasoning-based commands** like "pick up the bag about to fall off the table"
- **Multi-step planning** through chain-of-thought reasoning

Sources: [Google DeepMind RT-2 Blog](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/), [arXiv 2307.15818](https://arxiv.org/abs/2307.15818)

### 2. What Was Impossible Before Is Now Possible

Physical AI is not just a marketing term because **previously impossible tasks have become possible**.

#### Representative Example: Folding Laundry

Laundry has been called the "holy grail" of robot manipulation.

> "Towels are deformable, constantly changing shape, bending unpredictably... There's no fixed geometry to memorize, and no single 'correct' grasp point."
> — [Knowable Magazine](https://knowablemagazine.org/content/article/technology/2025/why-robots-cant-fold-laundry)

- Shapes constantly change, wrinkle unpredictably, with no fixed geometry

**But now:**

- Physical Intelligence's π0: Successfully folding laundry with 50Hz continuous actions ([Physical Intelligence Blog](https://www.physicalintelligence.company/blog/pi0))
- Figure's Helix: "First autonomous laundry folding based on end-to-end neural network" ([Figure AI](https://www.figure.ai/news/helix-learns-to-fold-laundry))

<video width="100%" controls>
  <source src="/assets/videos/dyna/dyna-cloth.mp4" type="video/mp4">
</video>

*Dyna Robotics laundry folding robot demo. Filmed at CoRL 2025, September 2025 — Jong Hyun Park*

#### Deformable Object Manipulation

Plastic-wrapped logistics packages, flexible cables, food ingredients — tasks previously impossible with rule-based approaches are becoming possible through VLA.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/lkc2y0yb89U" title="Figure AI - Logistics demo (1 hour)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Figure AI's 1-hour continuous logistics demo — handling various deformable objects including plastic-wrapped packages*

### 3. Inheriting LLM's World Knowledge

What makes VLA special is that it **inherits the "common sense about the world" from LLM/VLM**.

Previous Specialist robots lacked this common sense. To execute "pick up the cup," everything had to be manually programmed: "what a cup is," "what picking up means."
This story continues in the next document.

---

## Major Companies' Approaches

All major companies are approaching this in similar ways. They pursue general robot foundation models with VLA-based end-to-end learning models. While there are differences in details—presence of tactile sensing, incorporating world models instead of VLA, whether the hardware is humanoid-shaped—the overall direction is the same.

### Physical Intelligence
π0, π0.5 (VLA + Flow Matching, 50Hz continuous actions)
### Google DeepMind
RT-2 → RT-X → Gemini Robotics
### Figure AI
Helix (proprietary VLA)
### 1X Technologies
World Model + Redwood AI
### Tesla (Optimus)
End-to-end neural network, same approach as FSD for autonomous driving

---

## Classical Robotics Is Also Changing

Interestingly, **even the leading players in Classical Robotics are transitioning to the Physical AI era**.

### Boston Dynamics' Transition

Boston Dynamics has long been known for its **modular approach** (perception → planning → control) and **Model Predictive Control (MPC)**. Atlas's backflips and Spot's stable locomotion were products of this approach.

However, they recently began **Large Behavior Model (LBM)** research in collaboration with Toyota Research Institute (TRI).

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/HYwekersccY" title="Boston Dynamics Atlas - Large Behavior Models" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Source: [Boston Dynamics Blog - Large Behavior Models and Atlas Find New Footing](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/)*

> "Boston Dynamics is developing Large Behavior Models (LBMs) for Atlas as part of a collaboration between AI research teams at Toyota Research Institute (TRI) and Boston Dynamics."
> — [The Robot Report](https://www.therobotreport.com/boston-dynamics-tri-use-large-behavior-models-train-atlas-humanoid/)

> "The specific architecture used for Atlas is a 450-million-parameter diffusion transformer... It outputs a continuous stream of actions at 30Hz to control all 50 of Atlas's degrees of freedom."
> — [IEEE Spectrum](https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma)

Boston Dynamics is also moving toward end-to-end models. Even BD, the leader of Classical Robotics, is transitioning to the Physical AI paradigm.

---

## Physical AI vs Classical Robotics

| Aspect | Classical Robotics | Physical AI (VLA) |
|--------|-------------------|-------------------|
| **Architecture** | Modular (perception → planning → control) | End-to-end integration |
| **Learning** | Rule-based + partial ML | Full data-driven learning |
| **Generalization** | Dependent on training environment | Zero-shot generalization possible |
| **Knowledge** | Domain-specific, manual input | World Knowledge inheritance (LLM/VLM) |
| **Examples** | Boston Dynamics Spot (2015~), industrial robot arms | π0, OpenVLA, GR00T, Gemini Robotics (2023~) |
| **Limitations** | Vulnerable to new environments/objects | Data collection cost, safety verification |

---

## Summary: The Boundaries of Physical AI

**Included (Physical AI):**
- VLA models (π0, OpenVLA, GR00T, Gemini Robotics, etc.)
- End-to-end learning-based robot systems
- Cross-embodiment datasets (Open X-Embodiment)
- Simulation/hardware ecosystem for VLA

**Excluded (Classical Robotics):**
- Rule-based industrial robots
- Traditional autonomous driving stacks with modular separation
- Single-task Specialist robots
- Systems that only execute pre-programmed motions

**On the Boundary:**
- Hybrid approaches (high-level: learning, low-level: MPC)

---

## Next Document

Let's learn why the "Generalist robots" that Physical AI pursues are now possible, and how they differ from past "Specialist robots."

**Next: [From Specialist to Generalist](/knowledge/essays/fundamentals/specialist-to-generalist)**
