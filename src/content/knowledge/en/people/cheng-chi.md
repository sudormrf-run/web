---
title: Cheng Chi
description: Diffusion Policy Lead Author, UMI Developer, Sunday Robotics CTO
tags: [cheng-chi, columbia, stanford, diffusion-policy, umi, sunday-robotics]
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
| Current Position | Co-founder & CTO, [Sunday Robotics](/knowledge/companies/sunday-robotics) |
| Previous | Columbia University PhD, Stanford SNF |
| Advisor | Shuran Song |

---

## Key Contributions

- **Diffusion Policy Lead Author**: Applied diffusion to robot action generation (RSS 2023 Best Paper Finalist)
- **UMI (Universal Manipulation Interface)**: Universal manipulation data collection interface (RSS 2024 Best Systems Paper Finalist)
- **Iterative Residual Policy**: Learning framework for repeatable tasks (RSS 2022 Best Paper Award)
- **Sunday Robotics Co-founder**: Home robot startup CTO

---

## Research Timeline

### Columbia to Stanford to Sunday Robotics

**Advised by Shuran Song**

| Year | Work | Impact |
|------|------|--------|
| 2020 | Nuro | Mapping & Localization Team |
| 2021.01 | PhD Begins | Columbia CAIR Lab |
| 2022 | **Iterative Residual Policy** | RSS 2022 Best Paper Award |
| 2022 | **DextAIRity** | RSS 2022 Best Systems Paper Finalist |
| 2023 | **Diffusion Policy** | Pioneering robot diffusion research (RSS 2023) |
| 2024 | **UMI** | RSS 2024 Best Systems Paper Finalist |
| 2024 | Moved to Stanford | Together with Shuran Song (SNF) |
| 2024.04 | Sunday Robotics Co-founded | With Tony Zhao |
| 2025.11 | Memo Robot Launch | Home robot unveiled |

---

## Major Publications

### Diffusion Policy (RSS 2023, IJRR 2024)
**"Diffusion Policy: Visuomotor Policy Learning via Action Diffusion"**

Key contributions:
- First application of diffusion to robot action generation
- Handling multimodal action distributions
- Average 46.9% performance improvement across 4 benchmarks

### UMI (2024)
**"Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots"**

Key contributions:
- Data collection with human hands, without robots
- Transfer to various robot platforms
- In-the-wild data collection

### Iterative Residual Policy (RSS 2022)
**"Iterative Residual Policy for Goal-Conditioned Dynamic Manipulation of Deformable Objects"**

Key contributions:
- General learning framework for repeatable tasks
- Can learn from inaccurate simulation data
- RSS 2022 Best Paper Award, Best Student Paper Finalist

---

## Key Ideas

### Diffusion Policy (2023)
```
Core: Generate robot actions through denoising diffusion

p(a|o) = integral p(aK) product p(ak-1|ak, o) dak:K

Process:
1. Start from pure noise
2. Gradual denoising conditioned on observation (o)
3. Generate final action sequence
```

**vs ACT:**
| Aspect | Diffusion Policy | ACT |
|--------|-----------------|-----|
| Generation Method | Iterative denoising | Single forward pass |
| Multimodality | Natural handling | Style variable (z) |
| Training Stability | Very high | High |

### UMI (2024)
```
Core: Collect data with human hands without robots, then transfer to robots

[Human hand demonstration] -> [UMI Interface] -> [Robot policy learning]

Advantages:
- Data collection without robot hardware
- Collection possible in real environments
- Transfer to various robots
```

---

## Impact

### Impact of Diffusion Policy
- **pi0**: Adopted flow matching (a variant of diffusion)
- **Octo**: Uses diffusion decoder
- **SmolVLA**: Uses flow matching
- **LeRobot**: Default supported model

### Impact of UMI
- Significantly reduced data collection costs
- Influenced similar approaches like Sunday Robotics

---

## Philosophy

### Research Philosophy
> "The key is combining good representations with good generative models"

### Research Direction
1. **2021-2023**: Diffusion for robot learning
2. **2024**: Data collection interfaces (UMI)
3. **2024-present**: Sunday Robotics - Home robot commercialization

---

## Links

- [Personal Website](https://cheng-chi.github.io/)
- [Sunday Robotics](https://sunday.ai/)
- [Diffusion Policy Project](https://diffusion-policy.cs.columbia.edu/)
- [UMI Project](https://umi-gripper.github.io/)
- [GitHub](https://github.com/cheng-chi)
- [X (Twitter)](https://twitter.com/chichengcc)
- [Google Scholar](https://scholar.google.com/citations?user=EO0PHdAAAAAJ)

---

## See Also

- [Diffusion Policy](/knowledge/models/diffusion-policy)
- [Shuran Song](shuran-song)
- [Sunday Robotics](/knowledge/companies/sunday-robotics)
- [ACT](/knowledge/models/act)
