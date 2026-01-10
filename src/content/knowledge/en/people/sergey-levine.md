---
title: Sergey Levine
description: UC Berkeley Professor, Physical Intelligence Co-founder, Robot RL Expert
tags: [sergey-levine, berkeley, physical-intelligence, rt, reinforcement-learning]
category: people
---

# Sergey Levine

> Home > People > Sergey Levine

---

## Profile

| Field | Details |
|-------|---------|
| Current Position | Associate Professor, UC Berkeley |
| Lab | RAIL Lab (Robotic AI & Learning Lab) |
| Company | Physical Intelligence Co-founder |
| Previous | Google Brain (2016-2021) |
| PhD | Stanford University |

---

## Key Contributions

- **RT Series Key Figure**: Participated in RT-1, RT-2 development, established VLA paradigm
- **Robot Reinforcement Learning Pioneer**: Developed RL methods that work on real robots
- **Open X-Embodiment**: Led collaboration across 33 research labs
- **OpenVLA, Octo**: Developed open-source VLA models
- **Physical Intelligence Founding**: Co-founded general-purpose robot AI company

---

## Research Timeline

### PhD & Postdoc (2009-2016)

**Stanford -> UC Berkeley Postdoc**

| Year | Work | Impact |
|------|------|--------|
| 2013 | Guided Policy Search | Foundation for model-based RL |
| 2015 | End-to-End Visuomotor Policies | Direct image-to-action learning |
| 2016 | Deep RL for Robotic Manipulation | Practical robot RL |

### Google Brain (2016-2021)

**Google Robotics Research**

| Year | Work | Impact |
|------|------|--------|
| 2017 | QT-Opt | Large-scale robot grasping |
| 2018 | Soft Actor-Critic (SAC) | Most widely used off-policy RL |
| 2020 | Offline RL Survey | Established offline RL |
| 2021 | Decision Transformer | RL as sequence modeling |

### UC Berkeley + Google (2021-2024)

**RT Series, Open-source VLA**

| Year | Work | Impact |
|------|------|--------|
| 2022 | **RT-1** | First large-scale Robotics Transformer |
| 2023 | **RT-2** | First VLA, Action as Language |
| 2023 | **RT-X** | Open X-Embodiment, 33 lab collaboration |
| 2024 | **Octo** | 93M open-source generalist policy |
| 2024 | **OpenVLA** | 7B open-source VLA |

### Physical Intelligence (2024-present)

Co-founded Physical Intelligence, pi0 development

---

## Major Publications

### Reinforcement Learning
- **SAC** (Soft Actor-Critic) - Most widely used off-policy RL
- **CQL** (Conservative Q-Learning) - Core offline RL method
- **Decision Transformer** - RL as sequence modeling
- **Offline RL Tutorial** - Established the field

### Robot Learning
- **RT-1** (2022) - Robotics Transformer
- **RT-2** (2023) - Vision-Language-Action
- **RT-X** (2023) - Open X-Embodiment
- **Octo** (2024) - Open-source generalist policy
- **OpenVLA** (2024) - 7B open-source VLA

### End-to-End Learning
- End-to-End Training of Deep Visuomotor Policies (2016)
- QT-Opt (2018) - Large-scale robot grasping

---

## Key Ideas

### SAC (Soft Actor-Critic, 2018)
```
Core: Maximum entropy RL - maximize reward + maximize policy entropy

J(pi) = Sum E[r(st,at) + alpha*H(pi(.|st))]
```

**Impact:**
- Currently the most widely used continuous control RL algorithm
- Standard across robotics, games, and simulation

### RT-2 & Action as Language (2023)
```
Core: Represent robot actions as text tokens to integrate with VLM

[Image + Language instruction] -> VLM -> [Action tokens] -> Robot control
```

**Impact:**
- Beginning of VLA paradigm
- All subsequent VLA models adopted this approach

### Open X-Embodiment (2023)
- Collaboration across 33 research labs
- 22 robot types, 1M+ episodes
- Democratized research with open-source dataset

---

## Philosophy & Direction

### Research Philosophy
> "The key to robot learning is data. More data, more diverse data is the key to generalization."

### Research Direction Evolution
1. **2009-2015**: Model-based RL, trajectory optimization
2. **2015-2018**: End-to-end deep RL
3. **2018-2021**: Off-policy RL, offline RL
4. **2021-2023**: Large-scale robot learning, foundation models
5. **2023-present**: VLA, general-purpose robot AI

---

## Students & Mentees

Sergey Levine lab alumni:
- Chelsea Finn (Stanford Professor)
- Aviral Kumar (Google DeepMind)
- Ilya Kostrikov (Google DeepMind)
- Numerous robotics/RL researchers

---

## Awards & Recognition

- IEEE RAS Early Career Award
- Sloan Research Fellowship
- NSF CAREER Award
- ICML Best Paper (multiple)

---

## Links

- [UC Berkeley Profile](https://people.eecs.berkeley.edu/~svlevine/)
- [RAIL Lab](https://rail.eecs.berkeley.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=8R35rCwAAAAJ)
- [Twitter/X](https://twitter.com/svaborisov)

---

## See Also

- [RT](../models/rt.md)
- [OpenVLA](../models/openvla.md)
- [Octo](../models/octo.md)
- [Chelsea Finn](chelsea-finn.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
