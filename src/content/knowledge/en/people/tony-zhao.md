---
title: Tony Zhao
description: ACT & ALOHA Lead Author, Physical Intelligence
tags: [tony-zhao, stanford, physical-intelligence, act, aloha]
category: people
---

# Tony Zhao

> Home > People > Tony Zhao

---

## Profile

| Field | Details |
|-------|---------|
| Current Position | Physical Intelligence |
| Previous | Stanford University PhD |
| Advisor | Chelsea Finn |
| Undergraduate | UC Berkeley |

---

## Key Contributions

- **ACT Lead Author**: Action Chunking with Transformers, precise manipulation from 10-minute demonstrations
- **ALOHA Design**: $20K low-cost bimanual robot system
- **Mobile ALOHA**: Mobile bimanual robot
- **Open-Source Contributions**: Full code and hardware design release

---

## Research Timeline

### Stanford PhD (2020-2024)

**Advised by Chelsea Finn**

| Year | Work | Impact |
|------|------|--------|
| 2021 | PhD Started | IRIS Lab |
| 2023 | **ACT** | Action Chunking, learning from 10-minute demonstrations |
| 2023 | **ALOHA** | $20K bimanual system |
| 2024 | **Mobile ALOHA** | Mobile bimanual robot |
| 2024 | PhD Graduation | |

### Physical Intelligence (2024-present)

| Year | Work | Impact |
|------|------|--------|
| 2024 | Joined Physical Intelligence | Participating in pi0 development |

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
- [ALOHA Project](https://tonyzhaozh.github.io/aloha/)
- [Mobile ALOHA](https://mobile-aloha.github.io/)
- [GitHub](https://github.com/tonyzhaozh)
- [Google Scholar](https://scholar.google.com/citations?user=XXXXXXXXX)

---

## See Also

- [ACT](../models/act.md)
- [Chelsea Finn](chelsea-finn.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
