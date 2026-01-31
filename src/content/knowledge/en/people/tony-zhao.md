---
title: Tony Zhao
description: ACT & ALOHA Lead Author, Sunday Robotics Co-founder/CEO
tags: [tony-zhao, stanford, sunday-robotics, act, aloha]
category: people

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Profile

| Field | Details |
|-------|---------|
| Current Position | Sunday Robotics Co-founder/CEO |
| Previous | Stanford University PhD program (dropped out) |
| Advisor | Chelsea Finn (IRIS Lab) |
| Undergraduate | UC Berkeley EECS (2021) |
| Undergrad Advisors | Sergey Levine, Dan Klein |

---

## Key Contributions

- **ACT Lead Author**: Action Chunking with Transformers, precise manipulation from 10-minute demonstrations
- **ALOHA Design**: $20K low-cost bimanual robot system
- **Mobile ALOHA**: Mobile bimanual robot
- **Sunday Robotics**: Home robot Memo development
- **Open-Source Contributions**: Full code and hardware design release

---

## Research Timeline

### UC Berkeley (2017-2021)

**Advised by Sergey Levine, Dan Klein**

| Year | Work | Impact |
|------|------|--------|
| 2021 | EECS Bachelor's | AI/ML research foundation |

### Stanford PhD Program (2021-2024)

**Advised by Chelsea Finn (IRIS Lab)**

| Year | Work | Impact |
|------|------|--------|
| 2021 | PhD Started | IRIS Lab, Stanford Robotics Fellowship (2022-23) |
| 2023 | **ACT** | Action Chunking, learning from 10-minute demonstrations |
| 2023 | **ALOHA** | $20K bimanual system (RSS 2023) |
| 2024 | **Mobile ALOHA** | Mobile bimanual robot (CoRL 2024) |
| 2024 | Dropped out of PhD | Founded Sunday Robotics |

### Sunday Robotics (2024-present)

| Year | Work | Impact |
|------|------|--------|
| 2024 | Co-founded Sunday Robotics | CEO alongside Cheng Chi (CTO) |
| 2025 | **Memo** launch | Home robot, $35M funding raised |

---

## Major Publications

### ACT & ALOHA (RSS 2023)
**"Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware"**

Key contributions:
- **ACT Algorithm**: Action Chunking + CVAE
- **ALOHA Hardware**: $20K low-cost bimanual system
- **80-90% success rate with 50 demonstrations**

### Mobile ALOHA (2024)
**"Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation"**

Key contributions:
- Mobile platform + ALOHA combination
- Whole-body teleoperation
- Household task execution

---

## Key Ideas

### Action Chunking (2023)
```
Core: Predict action sequences (chunks) instead of single actions

Previous: Observation -> Next 1 action
ACT: Observation -> Next k action sequence

Advantages:
- Mitigates compounding error
- Effective horizon reduced by k times
- Smooth motion generation
```

### ALOHA Hardware
```
Components:
- 2x ViperX 6-DoF arms (~$5,600 each)
- 4x RGB cameras
- Teleoperation rig

Features:
- Total cost ~$20K (1/10 of typical)
- Modular design
- Dynamixel motors (easy replacement)
- 1.5m working range
```

---

## Impact

### Research Democratization
- **Low-Cost**: $20K enables lab reproducibility
- **Open-Source**: Full code and hardware design released
- **LeRobot Integration**: HuggingFace default model

### Follow-up Research
- Mobile ALOHA
- ALOHA 2 (Google)
- Numerous ALOHA-based research projects

---

## Philosophy

### Research Philosophy
> "Make complex things simple. Make expensive things affordable. Make closed things open."

### Open-Source Contributions
- Full ACT code release
- ALOHA hardware design release
- Training data release
- Detailed documentation

---

## Links

- [Personal Website](https://tonyzhaozh.github.io/)
- [Sunday Robotics](https://sunday.ai/)
- [ALOHA Project](https://tonyzhaozh.github.io/aloha/)
- [Mobile ALOHA](https://mobile-aloha.github.io/)
- [X (Twitter)](https://x.com/tonyzzhao)
- [GitHub](https://github.com/tonyzhaozh)
- [Google Scholar](https://scholar.google.com/citations?user=2IXVwTMAAAAJ)

---

## See Also

- [ACT](/knowledge/models/act)
- [Chelsea Finn](chelsea-finn)
