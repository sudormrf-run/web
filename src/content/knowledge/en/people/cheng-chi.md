---
title: Cheng Chi
description: Diffusion Policy Lead Author, UMI Developer
tags: [cheng-chi, columbia, stanford, diffusion-policy, umi]
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
| Current Position | Stanford University PhD |
| Previous | Columbia University |
| Advisor | Shuran Song |

---

## Key Contributions

- **Diffusion Policy Lead Author**: Applied diffusion to robot action generation
- **UMI (Universal Manipulation Interface)**: Universal manipulation data collection interface
- **3D Diffusion Policy**: Combined 3D representation with diffusion

---

## Research Timeline

### Columbia to Stanford PhD

**Advised by Shuran Song**

| Year | Work | Impact |
|------|------|--------|
| 2022 | Research Begins | Columbia CAIR Lab |
| 2023 | **Diffusion Policy** | Pioneering robot diffusion research |
| 2024 | **UMI** | Universal manipulation interface |
| 2024 | **3D Diffusion Policy** | 3D + diffusion |
| 2024 | Moved to Stanford | Together with Shuran Song |

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

### 3D Diffusion Policy (2024)
- 3D point cloud input
- Diffusion policy + 3D representation

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
1. **2022-2023**: Diffusion for robot learning
2. **2024-present**: Data collection interfaces, 3D representations

---

## Links

- [Personal Website](https://cheng-chi.github.io/)
- [Diffusion Policy Project](https://diffusion-policy.cs.columbia.edu/)
- [UMI Project](https://umi-gripper.github.io/)
- [GitHub](https://github.com/cheng-chi)
- [Google Scholar](https://scholar.google.com/citations?user=XXXXXXXXX)

---

## See Also

- [Diffusion Policy](../models/diffusion-policy.md)
- [Shuran Song](shuran-song.md)
- [ACT](../models/act.md)
