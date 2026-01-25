---
title: Boston Dynamics
description: Pioneer of Classical Robotics transitioning to Physical AI
tags: [boston-dynamics, atlas, spot, lbm, hyundai, classical-robotics]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

## Overview

Boston Dynamics is a robotics company spun off from MIT in 1992, pioneering the field of dynamic locomotion robots. Known for Atlas's backflips and Spot's stable locomotion, it has been recognized as a leader in Classical Robotics. The company was acquired by Hyundai Motor Group in 2020.

| Item | Details |
|------|---------|
| Headquarters | Waltham, Massachusetts |
| Founded | 1992 |
| CEO | Robert Playter |
| Parent Company | Hyundai Motor Group (2020~) |

---

## Product Line

### Spot
Quadruped robot. Commercially available for inspection, surveillance, and data collection.

### Atlas
Bipedal humanoid robot. Used for research and development. Redesigned with electric actuation in 2024.

### Stretch
Warehouse logistics robot. Specialized for box unloading tasks.

---

## Classical Robotics Approach

Boston Dynamics has long been known for its **modular approach**:

- **Perception**: Understanding environment through sensors
- **Planning**: Path and motion planning
- **Control**: Precise control via Model Predictive Control (MPC)

This approach produced impressive demos like Atlas's backflips, parkour, and Spot's stable locomotion.

---

## Transition to Physical AI

### Collaboration with Toyota Research Institute (TRI)

In 2025, Boston Dynamics began **Large Behavior Model (LBM)** research in collaboration with TRI.

> "Boston Dynamics is developing Large Behavior Models (LBMs) for Atlas as part of a collaboration between AI research teams at Toyota Research Institute (TRI) and Boston Dynamics."
> — [The Robot Report](https://www.therobotreport.com/boston-dynamics-tri-use-large-behavior-models-train-atlas-humanoid/)

### LBM Architecture

| Item | Specification |
|------|---------------|
| Parameters | 450M |
| Architecture | Diffusion Transformer |
| Output Frequency | 30Hz |
| Control DoF | 50 (full Atlas) |

> "The specific architecture used for Atlas is a 450-million-parameter diffusion transformer... It outputs a continuous stream of actions at 30Hz to control all 50 of Atlas's degrees of freedom."
> — [IEEE Spectrum](https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma)

### Three Learning Approaches

Boston Dynamics uses three parallel approaches to build Atlas's intelligence:

1. **Teleoperation**: Human operators guide the robot using VR
2. **Reinforcement Learning**: Millions of motion practice runs in simulation
3. **Observation Learning**: Learning physical intuition from human action videos (long-term goal)

### Hybrid Approach

Boston Dynamics hasn't adopted full end-to-end (pixels-to-torques), instead using a hybrid approach with **learning-based high-level decision-making** while **maintaining MPC for low-level control**.

Nevertheless, the fact that the leader of Classical Robotics is introducing learning-based models demonstrates the **transition to the Physical AI paradigm**.

---

## Key Milestones

- **1992**: Spun off from MIT
- **2005**: BigDog unveiled
- **2013**: Acquired by Google
- **2017**: Acquired by SoftBank
- **2020**: Acquired by Hyundai Motor Group
- **2024**: Electric-powered Atlas unveiled
- **2025**: LBM collaboration with TRI announced

---

## References

- [Boston Dynamics Official Site](https://bostondynamics.com/)
- [Large Behavior Models and Atlas Find New Footing](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/)
- [Boston Dynamics Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics)

---

## See Also

- [Company Index](./)
- [Defining Physical AI](../essays/fundamentals/definition)
