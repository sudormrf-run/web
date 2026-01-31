---
title: Jim Fan
description: NVIDIA Director of AI & Distinguished Scientist, GR00T & Foundation Agent 연구
tags: [jim-fan, nvidia, groot, voyager, foundation-agent]
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
| 현직 | NVIDIA Director of AI & Distinguished Scientist |
| 팀 | GEAR Lab Co-Lead (Generalist Embodied Agent Research) |
| PhD | Stanford University (2016-2021) |
| 지도교수 | Fei-Fei Li |
| 학부 | Columbia University (2016 수석 졸업, Illig Medal) |
| SNS | 활발한 AI 커뮤니케이터 (340K+ 팔로워) |

---

## 핵심 기여

- **GR00T**: NVIDIA 휴머노이드 로봇 파운데이션 모델 (Co-Lead)
- **Voyager**: LLM 기반 Minecraft 자율 에이전트
- **MineDojo**: Minecraft 기반 AI 벤치마크 (NeurIPS 2022 Outstanding Paper)
- **Eureka**: LLM으로 reward function 자동 생성
- **Foundation Agent 비전**: 범용 에이전트 연구 방향 제시
- **OpenAI 첫 인턴**: 2016년 OpenAI Universe/World of Bits 프로젝트

---

## Research Timeline

### Columbia University (2012-2016)

| Year | Work | Impact |
|------|------|--------|
| 2016 | 학부 졸업 | 수석 졸업 (Valedictorian), Illig Medal |

### Internships (2015-2020)

| Year | Organization | Work |
|------|--------------|------|
| 2015 | Baidu AI Lab | Andrew Ng, Dario Amodei와 협업 |
| 2015-2016 | MILA | Yoshua Bengio와 연구 |
| 2016-2017 | **OpenAI** | 첫 인턴, World of Bits (Ilya Sutskever, Andrej Karpathy와 협업) |
| 2018 | Google Cloud AI | 연구 인턴 |
| 2020 | NVIDIA | 연구 인턴 |

### Stanford PhD (2016-2021)

**Fei-Fei Li 지도** | 논문: "Training and Deploying Visual Agents at Scale"

| Year | Work | Impact |
|------|------|--------|
| 2018 | Video Understanding | 비디오 이해 연구 |
| 2021 | PhD 졸업 | Stanford Vision Lab |

### NVIDIA (2021-present)

**GEAR Lab Co-Lead** (Yuke Zhu와 공동 설립, 2024년 2월)

| Year | Work | Impact |
|------|------|--------|
| 2021.12 | NVIDIA 입사 | Senior Research Scientist |
| 2022 | **MineDojo** | Minecraft AI 벤치마크, NeurIPS 2022 Outstanding Paper |
| 2023 | **Voyager** | LLM + Minecraft 자율 탐험 |
| 2023 | **Eureka** | LLM으로 reward function 생성 |
| 2024.02 | **GEAR Lab** 설립 | Yuke Zhu와 공동 설립 |
| 2024 | **GR00T** | 휴머노이드 파운데이션 모델 발표 (GTC 2024) |
| 2025.03 | **GR00T N1** | 오픈 휴머노이드 VLA (GTC 2025) |
| 2025 | Director 승진 | Director of AI & Distinguished Scientist |

---

## Major Publications

### Foundation Agent
- **Voyager** (2023) - LLM 기반 자율 Minecraft 에이전트
- **MineDojo** (NeurIPS 2022 Outstanding Paper) - Minecraft AI 벤치마크
- **Eureka** (2023) - LLM으로 reward function 자동 생성
- **VIMA** - 로봇 조작을 위한 멀티모달 파운데이션 모델
- **SURREAL** - 분산 강화학습 프레임워크

### Robotics
- **GR00T** (GTC 2024) - 휴머노이드 파운데이션 모델
- **GR00T N1** (GTC 2025) - 오픈 휴머노이드 VLA (2.2B 파라미터)

### Early Career
- **World of Bits** (ICML 2017) - OpenAI Universe, 웹 브라우저 AI 플랫폼

---

## Key Ideas

### Voyager (2023)
```
핵심: LLM이 코드를 작성하며 Minecraft 자율 탐험

구성:
1. Automatic Curriculum - LLM이 다음 목표 제안
2. Skill Library - 발견한 스킬 저장/재사용
3. Iterative Prompting - 실패 시 LLM이 코드 수정

결과:
- 인간 개입 없이 다이아몬드 도구까지 제작
- 기존 방법 대비 3.3배 빠른 기술 습득
```

**영향:**
- LLM + 게임 에이전트 연구의 시작
- Embodied AI에서 LLM 활용 방향 제시

### GR00T & GR00T N1 (2024-2025)
```
핵심: 휴머노이드 로봇을 위한 범용 파운데이션 모델

구조 (Dual-system Architecture):
- System 1: Fast-thinking action model (반사/직관)
- System 2: Slow-thinking VLM (deliberate reasoning)
- Diffusion Transformer로 연속 동작 생성

GR00T N1 스펙:
- 2.2B 파라미터 (VLM 1.34B)
- 16개 action chunk를 63.9ms에 생성 (L40 GPU)
- 실제 로봇, 인간 비디오, 합성 데이터로 학습
- 학습에 최대 1024 GPU 사용 (~50,000 H100 GPU hours)

특징:
- 자연어 이해
- 인간 동작 모방
- 다양한 휴머노이드 지원 (1X, Boston Dynamics, Agility 등)
```

**영향:**
- 세계 최초 오픈 휴머노이드 파운데이션 모델 (N1)
- NVIDIA 로봇 생태계의 핵심
- Newton 물리 엔진 (Google DeepMind, Disney Research 협업)

---

## GEAR Lab Vision

**GEAR Lab** (Generalist Embodied Agent Research) - 2024년 2월 Jim Fan과 Yuke Zhu가 공동 설립

### Foundation Agent
```
목표: 하나의 에이전트가 다양한 환경에서 다양한 태스크 수행

게임 (Minecraft) → 시뮬레이션 (Isaac) → 실제 로봇

연구 영역:
- LLM 기반 planning & reasoning
- Vision-language models
- 인터넷 규모 데이터로 학습한 world models
- 로봇 locomotion & dexterous manipulation
- Large action models (게임/시뮬레이션에서 자율 탐험)
- 대규모 학습을 위한 시뮬레이션 & 합성 데이터 파이프라인
```

### NVIDIA 전략과의 연계
- Isaac Sim: 시뮬레이션 환경
- Omniverse: 합성 데이터 생성
- Jetson: 엣지 컴퓨팅
- GR00T: 파운데이션 모델
- Newton: 오픈소스 물리 엔진

---

## Philosophy & Direction

### 연구 철학
> "게임에서 성공한 에이전트가 실제 세계에서도 성공할 수 있다. 범용성이 핵심이다."

### 연구 방향
1. **2016-2021**: Video understanding (Stanford PhD)
2. **2021-2023**: MineDojo, LLM + games (Voyager, Eureka)
3. **2024-현재**: Humanoid robotics (GR00T, Physical AGI)

---

## Communication & Influence

### 활발한 SNS 활동
- Twitter/X: 340K+ 팔로워 (@DrJimFan)
- AI 연구 해설, 비전 공유
- 업계 뉴스 큐레이션
- "Physical Turing Test" 개념 제시

### 대중 소통
- 복잡한 AI 연구를 쉽게 설명
- AI 연구의 방향성 논의
- 연구자-대중 소통의 모범

### 미디어 출연
- New York Times, Forbes, MIT Technology Review, TechCrunch, WIRED 등 다수

---

## Awards & Recognition

- NeurIPS 2022 Outstanding Paper (MineDojo)
- Columbia University Valedictorian & Illig Medal (2016)
- Stanford AI Lab 출신 (Fei-Fei Li 지도)
- OpenAI 첫 인턴 (2016)
- Google Scholar 인용 12,000+회

---

## Links

- [NVIDIA Profile](https://research.nvidia.com/person/linxi-jim-fan)
- [Personal Website](https://jimfan.me/)
- [Twitter/X](https://twitter.com/DrJimFan) - 340K+ 팔로워
- [LinkedIn](https://www.linkedin.com/in/drjimfan/)
- [Google Scholar](https://scholar.google.com/citations?user=sljtWIUAAAAJ)

---

## See Also

- [GR00T](/knowledge/models/groot)
- [NVIDIA](/knowledge/companies/nvidia)
- [Fei-Fei Li](fei-fei-li)
