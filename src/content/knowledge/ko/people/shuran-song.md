---
title: Shuran Song
description: Stanford 교수, Diffusion Policy 창시자
tags: [shuran-song, stanford, columbia, diffusion-policy, 3d-perception]
category: people
---

# Shuran Song

> Home > People > Shuran Song

---

## Profile

| 항목 | 내용 |
|------|------|
| 현직 | Stanford University 조교수 |
| 이전 | Columbia University 조교수 (2019-2024) |
| PhD | Princeton University |
| 연구실 | Columbia Artificial Intelligence and Robotics Lab (CAIR) |

---

## 핵심 기여

- **Diffusion Policy**: 로봇 액션 생성에 diffusion 적용, VLA 액션 생성의 새 패러다임
- **3D Perception**: 로봇을 위한 3D 인식 연구
- **UMI (Universal Manipulation Interface)**: 범용 데이터 수집 인터페이스
- **Columbia → Stanford 이직**: 로봇 학습 연구 강화

---

## Research Timeline

### PhD & Postdoc (2013-2019)

**Princeton → Postdoc**

| Year | Work | Impact |
|------|------|--------|
| 2015 | 3D ShapeNets | 3D 딥러닝 초기 연구 |
| 2017 | Semantic Scene Completion | 3D 장면 이해 |
| 2018 | PhD 졸업 | |

### Columbia University (2019-2024)

**CAIR Lab 설립**

| Year | Work | Impact |
|------|------|--------|
| 2019 | Columbia 교수 부임 | CAIR Lab 설립 |
| 2021 | Transporter Networks 공동연구 | 물체 재배치 |
| 2023 | **Diffusion Policy** | 로봇 diffusion 선구적 연구 |
| 2024 | **UMI** | 범용 조작 인터페이스 |

### Stanford University (2024-present)

**Stanford 이직**

| Year | Work | Impact |
|------|------|--------|
| 2024 | Stanford 교수 이직 | |
| 2024- | 로봇 학습 연구 지속 | |

---

## Major Publications

### Diffusion for Robotics
- **Diffusion Policy** (RSS 2023, IJRR 2024) - 로봇 diffusion 선구적 연구
- 3D Diffusion Policy (2024)

### 3D Perception
- **3D ShapeNets** (CVPR 2015)
- Semantic Scene Completion (CVPR 2017)
- ScanNet (CVPR 2017)

### Robot Manipulation
- **UMI** (Universal Manipulation Interface, 2024)
- Transporter Networks 관련 연구

---

## Key Ideas

### Diffusion Policy (2023)
```
핵심: 로봇 액션 생성을 denoising diffusion process로 모델링

노이즈 → ... → 액션 시퀀스
(점진적 denoising)

장점:
- Multimodal action distribution 처리
- 높은 학습 안정성
- 고차원 액션 공간에 적합
```

**영향:**
- 이후 π0 (flow matching), Octo (diffusion decoder) 등에 영향
- LeRobot 기본 지원 모델
- 로봇 액션 생성의 새 패러다임

### UMI (Universal Manipulation Interface, 2024)
```
핵심: 범용적인 로봇 데이터 수집 인터페이스

특징:
- 다양한 로봇 플랫폼에 적용 가능
- 저비용 데이터 수집
- 표준화된 인터페이스
```

---

## Philosophy & Direction

### 연구 철학
> "3D 세계 이해와 로봇 조작은 밀접하게 연결되어 있다"

### 연구 방향 변화
1. **2013-2018**: 3D deep learning, scene understanding
2. **2019-2022**: 3D perception for robotics
3. **2023-현재**: Diffusion for robot learning, manipulation interfaces

---

## Key Collaborations

- **Cheng Chi**: Diffusion Policy 제1저자, UMI 공동연구
- **Toyota Research Institute**: Diffusion Policy 공동연구
- **MIT**: Diffusion Policy 공동연구

---

## Awards & Recognition

- NSF CAREER Award
- Amazon Research Award
- Google Research Scholar

---

## Links

- [Stanford Profile](https://shurans.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=XXXXXXXXX)

---

## See Also

- [Diffusion Policy](../models/diffusion-policy.md)
- [Cheng Chi](cheng-chi.md)
- [ACT](../models/act.md)
