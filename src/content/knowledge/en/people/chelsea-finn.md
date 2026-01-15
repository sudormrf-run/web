---
title: Chelsea Finn
description: Stanford Professor, Physical Intelligence Co-founder
tags: [chelsea-finn, stanford, physical-intelligence, meta-learning, act, aloha]
category: people

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## Profile

| Field | Details |
|-------|---------|
| Current Position | Assistant Professor, Stanford University |
| Lab | IRIS Lab (Intelligence through Robotic Interaction at Scale) |
| Company | Physical Intelligence Co-founder |
| PhD | UC Berkeley (Advisors: Sergey Levine, Pieter Abbeel) |
| Undergraduate | MIT (EECS) |

---

## Key Contributions

- **Meta-Learning Pioneer**: Introduced a new paradigm for few-shot learning with MAML
- **ACT & ALOHA**: Democratized robot learning with low-cost bimanual manipulation system and learning algorithm
- **Physical Intelligence Founding**: Co-founded a general-purpose robot AI company
- **Robot Learning from Humans**: Key figure in human demonstration-based robot learning research

---

## Research Timeline

### PhD & Early Career (2013-2018)

**UC Berkeley - Advised by Sergey Levine, Pieter Abbeel**

| Year | Work | Impact |
|------|------|--------|
| 2016 | End-to-End Training of Deep Visuomotor Policies | Image-to-action end-to-end learning |
| 2017 | **MAML** (Model-Agnostic Meta-Learning) | Few-shot learning breakthrough, 10,000+ citations |
| 2017 | One-Shot Visual Imitation Learning | Learning to imitate from a single demonstration |
| 2018 | Meta-Learning for Robot Learning | Applying meta-learning to robotics |

### Stanford Professor (2019-present)

**IRIS Lab Founding**

| Year | Work | Impact |
|------|------|--------|
| 2019 | IRIS Lab Founded | Large-scale robot-human interaction research |
| 2021 | Offline RL Research | Robot learning from offline data |
| 2023 | **ACT** (Action Chunking with Transformers) | Precise manipulation from 10-minute demonstrations |
| 2023 | **ALOHA** | $20K low-cost bimanual system |
| 2023 | Mobile ALOHA | Mobile bimanual robot |

### Physical Intelligence (2024-present)

Co-founded Physical Intelligence, participated in pi0 development

---

## Major Publications

### Meta-Learning
- **MAML** (ICML 2017) - Most influential paper
- Probabilistic MAML (NeurIPS 2018)
- Meta-Learning without Memorization (NeurIPS 2020)

### Robot Learning
- **ACT** (RSS 2023) - Published with ALOHA
- Learning from Play (CoRL 2019)
- RoboNet (CoRL 2019)

### Imitation Learning
- One-Shot Imitation Learning (NIPS 2017)
- Learning to Learn with Compound HD Models (ICML 2019)

---

## Key Ideas

### MAML (2017)
```
Core: Learning initial parameters that can quickly adapt to new tasks with only a few gradient steps

theta* = theta - alpha*grad_theta(L(f_theta'))  where theta' = theta - beta*grad_theta(L(f_theta))
```

**Impact:**
- Standard methodology for few-shot learning
- Applied across robotics, NLP, and computer vision
- 10,000+ citations

### ACT & ALOHA (2023)
- **Action Chunking**: Predicting action sequences instead of single actions
- **Low-Cost Hardware**: $20K system reproducible in research labs
- **LeRobot Default Model**: Impact on open-source ecosystem

---

## Philosophy & Direction

### Research Philosophy
> "For robots to generalize in the real world, they need large-scale diverse experiences"

### Research Direction Evolution
1. **2013-2017**: Deep RL, end-to-end learning
2. **2017-2020**: Meta-learning, few-shot adaptation
3. **2020-2023**: Imitation learning, offline RL
4. **2023-present**: Large-scale robot learning, foundation models

---

## Awards & Recognition

- MIT Technology Review 35 Under 35 (2019)
- NSF CAREER Award
- Sloan Research Fellowship
- ONR Young Investigator Award
- ACM Doctoral Dissertation Award Honorable Mention

---

## Links

- [Stanford Profile](https://ai.stanford.edu/~cbfinn/)
- [IRIS Lab](https://irislab.stanford.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=vfPE6hgAAAAJ)
- [Twitter/X](https://twitter.com/chelseabfinn)

---

## See Also

- [ACT](../models/act.md)
- [Sergey Levine](sergey-levine.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
- [pi0](../models/pi0.md)
