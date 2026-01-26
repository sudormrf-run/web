---
title: Cheng Chi
description: Diffusion Policy 제1저자, UMI 개발자, Sunday Robotics CTO
tags: [cheng-chi, columbia, stanford, diffusion-policy, umi, sunday-robotics]
category: people

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Profile

| 항목 | 내용 |
|------|------|
| 현직 | Co-founder & CTO, [Sunday Robotics](../companies/sunday-robotics) |
| 이전 | Columbia University PhD, Stanford SNF |
| 지도교수 | Shuran Song |

---

## 핵심 기여

- **Diffusion Policy 제1저자**: 로봇 액션 생성에 diffusion 적용 (RSS 2023 Best Paper Finalist)
- **UMI (Universal Manipulation Interface)**: 범용 조작 데이터 수집 인터페이스 (RSS 2024 Best Systems Paper Finalist)
- **Iterative Residual Policy**: 반복 작업을 위한 학습 프레임워크 (RSS 2022 Best Paper Award)
- **Sunday Robotics 공동창업**: 가정용 로봇 스타트업 CTO

---

## Research Timeline

### Columbia → Stanford → Sunday Robotics

**Shuran Song 지도**

| Year | Work | Impact |
|------|------|--------|
| 2020 | Nuro 근무 | Mapping & Localization Team |
| 2021.01 | PhD 시작 | Columbia CAIR Lab |
| 2022 | **Iterative Residual Policy** | RSS 2022 Best Paper Award |
| 2022 | **DextAIRity** | RSS 2022 Best Systems Paper Finalist |
| 2023 | **Diffusion Policy** | 로봇 diffusion 선구적 연구 (RSS 2023) |
| 2024 | **UMI** | RSS 2024 Best Systems Paper Finalist |
| 2024 | Stanford 이동 | Shuran Song과 함께 (SNF) |
| 2024.04 | Sunday Robotics 공동창업 | Tony Zhao와 함께 |
| 2025.11 | Memo 로봇 출시 | 가정용 로봇 공개 |

---

## Major Publications

### Diffusion Policy (RSS 2023, IJRR 2024)
**"Diffusion Policy: Visuomotor Policy Learning via Action Diffusion"**

핵심 기여:
- 로봇 액션 생성에 diffusion 최초 적용
- Multimodal action distribution 처리
- 4개 벤치마크 평균 46.9% 성능 향상

### UMI (2024)
**"Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots"**

핵심 기여:
- 로봇 없이 인간 손으로 데이터 수집
- 다양한 로봇에 전이 가능
- 실제 환경(in-the-wild) 데이터 수집

### Iterative Residual Policy (RSS 2022)
**"Iterative Residual Policy for Goal-Conditioned Dynamic Manipulation of Deformable Objects"**

핵심 기여:
- 반복 작업을 위한 일반적인 학습 프레임워크
- 부정확한 시뮬레이션 데이터에서 학습 가능
- RSS 2022 Best Paper Award, Best Student Paper Finalist

---

## Key Ideas

### Diffusion Policy (2023)
```
핵심: 로봇 액션을 denoising diffusion으로 생성

p(a|o) = ∫ p(aK) ∏ p(ak-1|ak, o) dak:K

과정:
1. 순수 노이즈에서 시작
2. 관측(o) 조건부로 점진적 denoising
3. 최종 액션 시퀀스 생성
```

**vs ACT:**
| 항목 | Diffusion Policy | ACT |
|------|-----------------|-----|
| 생성 방식 | Iterative denoising | Single forward pass |
| Multimodality | 자연스러운 처리 | Style variable (z) |
| 학습 안정성 | 매우 높음 | 높음 |

### UMI (2024)
```
핵심: 로봇 없이 인간 손으로 데이터 수집 후 로봇에 전이

[인간 손 시연] → [UMI 인터페이스] → [로봇 정책 학습]

장점:
- 로봇 하드웨어 없이 데이터 수집
- 실제 환경에서 수집 가능
- 다양한 로봇에 전이
```

---

## Impact

### Diffusion Policy의 영향
- **π0**: Flow matching (diffusion의 변형) 채택
- **Octo**: Diffusion decoder 사용
- **SmolVLA**: Flow matching 사용
- **LeRobot**: 기본 지원 모델

### UMI의 영향
- 데이터 수집 비용 대폭 절감
- Sunday Robotics 등 유사 접근법에 영향

---

## Philosophy

### 연구 철학
> "좋은 표현(representation)과 좋은 생성 모델의 결합이 핵심"

### 연구 방향
1. **2021-2023**: Diffusion for robot learning
2. **2024**: Data collection interfaces (UMI)
3. **2024-현재**: Sunday Robotics - 가정용 로봇 상용화

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

- [Diffusion Policy](../models/diffusion-policy)
- [Shuran Song](shuran-song)
- [Sunday Robotics](../companies/sunday-robotics)
- [ACT](../models/act)
