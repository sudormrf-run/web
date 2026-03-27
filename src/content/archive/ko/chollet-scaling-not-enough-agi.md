---
title: "François Chollet: Why Scaling Alone Isn't Enough for AGI"
description: |
  1. François Chollet은 딥러닝/LLM 스케일링만으로는 AGI에 도달할 수 없다고 주장하며, 심볼릭 디센트 기반의 새로운 ML 패러다임 Ndea를 설립했다.
  2. ARC 벤치마크 시리즈(V1→V2→V3)는 AI의 진정한 지능을 측정하며, V3는 에이전틱 환경에서의 탐색·학습 효율을 평가한다.
  3. AGI의 핵심은 경제적 자동화가 아니라 인간 수준의 샘플 효율로 새 도메인을 학습하는 능력이며, 코드로는 10,000줄 이하가 될 것이라 예측한다.
date: 2026-03-28
videoId: "cQS5uD_JWB4"
originalVideoId: "k2ZLQC8P7dc"
duration: "57:24"
source: "Y Combinator"
tags:
  - AGI
  - François Chollet
  - ARC Benchmark
  - Ndea
  - Symbolic AI
  - Scaling Laws
  - Coding Agents
chapters:
  - title: "AGI by 2030?"
    startTime: "00:00"
    endTime: "00:31"
  - title: "Ndea 소개: 딥러닝 너머의 새 경로"
    startTime: "00:31"
    endTime: "01:30"
  - title: "심볼릭 프로그램으로 신경망 대체"
    startTime: "01:30"
    endTime: "03:04"
  - title: "Ndea가 코딩 에이전트와 경쟁하지 않는 이유"
    startTime: "03:04"
    endTime: "05:20"
  - title: "LLM 스케일링에 대한 반론"
    startTime: "05:20"
    endTime: "07:22"
  - title: "코딩 에이전트가 갑자기 잘 작동하는 이유"
    startTime: "07:22"
    endTime: "08:50"
  - title: "비검증 도메인에서의 LLM 한계"
    startTime: "08:50"
    endTime: "10:48"
  - title: "AGI의 진정한 의미"
    startTime: "10:48"
    endTime: "13:30"
  - title: "딥러닝이 벽에 부딪히는 이유"
    startTime: "13:30"
    endTime: "14:00"
  - title: "ARC 탄생 스토리"
    startTime: "14:00"
    endTime: "18:20"
  - title: "ARC 벤치마크: V1에서 V3까지"
    startTime: "18:20"
    endTime: "22:49"
  - title: "코딩 에이전트를 구동하는 RL 루프"
    startTime: "22:49"
    endTime: "27:03"
  - title: "ARC-AGI V3: 에이전틱 지능 측정"
    startTime: "27:03"
    endTime: "31:14"
  - title: "ARC 게임 스튜디오 내부"
    startTime: "31:14"
    endTime: "35:31"
  - title: "AGI는 10,000줄 코드에 담길 수 있을까?"
    startTime: "35:31"
    endTime: "44:01"
  - title: "Ndea 구축: 복리 연구 스택"
    startTime: "44:01"
    endTime: "46:46"
  - title: "AI와 함께 진화하는 벤치마크의 미래"
    startTime: "46:46"
    endTime: "47:21"
  - title: "새 AI 패러다임의 기회"
    startTime: "47:21"
    endTime: "53:37"
  - title: "오픈소스 프로젝트 성공법 — Keras의 교훈"
    startTime: "53:37"
    endTime: "56:39"
  - title: "AI에 대해 생각하는 법"
    startTime: "56:39"
    endTime: "57:24"
isFeatured: false
---

## AGI by 2030? (00:00-00:31)

- [00:00] AI 발전이 가속되고 있으며 막을 수 없는 흐름 — 중요한 질문은 "어떻게 활용하느냐"

> "[00:00] You're not going to stop AI progress. I think it's too late for that. And so the next question is, how do you ride a wave?"

## Ndea 소개: 딥러닝 너머의 새 경로 (00:31-01:30)

- [00:57] Ndea는 딥러닝을 대체하는 새로운 ML 패러다임을 연구하는 AGI 연구소
- [01:19] 파라메트릭 곡선 대신 "가능한 한 작은 심볼릭 모델"로 데이터를 설명하는 것이 목표
- [01:23] 그래디언트 디센트 대신 "심볼릭 디센트(Symbolic Descent)" 개발 중

## 심볼릭 프로그램으로 신경망 대체 (01:30-03:04)

- [01:35] 머신러닝의 본질: 입력→출력 매핑 함수를 찾아 새 입력에도 일반화하는 것
- [02:35] 딥러닝은 그래디언트 디센트로 파라메트릭 곡선을 근사하지만, Ndea는 최단 심볼릭 모델로 대체
- [03:00] 최소 기술 길이 원칙(Minimum Description Length): 데이터를 가장 잘 일반화하는 모델은 가장 짧은 것

> "[03:13] The minimum description length principle — the model of the data that is most likely to generalize is the shortest."

## Ndea가 코딩 에이전트와 경쟁하지 않는 이유 (03:04-05:20)

- [03:40] "모든 사람이 같은 것을 연구하는 것은 역생산적" — 차별화된 접근의 가치
- [04:31] "AI가 50년 후에도 이 스택 위에서 만들어질 것이라 생각하지 않는다"
- [05:00] Ndea의 성공 확률은 10~15%지만, 아무도 하지 않는다면 시도할 가치가 있다는 철학

## LLM 스케일링에 대한 반론 (05:20-07:22)

- [05:22] 코딩 에이전트 성공의 핵심 이유: 코드가 검증 가능한 보상 신호를 제공하기 때문
- [05:53] 검증 가능한 보상이 있는 모든 도메인은 현재 LLM 스택으로 자동화 가능
- [06:30] 수학이 다음으로 혁명을 맞을 도메인 — 정형 검증이 가능하기 때문

> "[06:39] Code is sort of like the first domain to fall, but there will be many others in the future."

- [07:00] 에세이 작성처럼 비검증 도메인에서는 LLM 발전이 매우 느리거나 정체될 것

## 코딩 에이전트가 갑자기 잘 작동하는 이유 (07:22-08:50)

- [07:37] 코딩 에이전트의 breakthrough: 유닛 테스트 기반 검증 환경에서의 포스트 트레이닝
- [08:28] 모델이 코드 실행 모델을 내재화하기 시작 — 인간 프로그래머처럼 변수 값을 머릿속에서 추적

> "[09:09] The models could start incorporating an execution model. Very much the way that human programmers, when they look at code, they're sort of executing the code in their minds."

## 비검증 도메인에서의 LLM 한계 (08:50-10:48)

- [08:55] 검증 불가 도메인(에세이, 법률 등)에서 LLM 발전은 훈련 데이터에 전적으로 의존
- [10:15] 검증 가능한 도메인에서는 인간 수준 이상의 완전 자동화 가능하지만, 나머지는 아님

## AGI의 진정한 의미 (10:48-13:30)

- [10:50] 업계의 AGI 정의("경제적으로 가치 있는 작업 자동화")는 지능이 아니라 자동화에 관한 것
- [11:08] Chollet의 AGI 정의: 인간과 동등한 효율로 새 도메인을 학습하는 능력 — 즉, 데이터 효율성
- [11:50] 경제적 자동화(업계 정의)가 Chollet의 진정한 AGI보다 먼저 달성될 것 — 이미 그 경로에 있음

> "[10:40] AGI is basically going to be a system that can approach any new problem, any new domain, and make sense of it — with the same degree of efficiency as a human could."

## 딥러닝이 벽에 부딪히는 이유 (13:30-14:00)

- [13:42] 2015~2016년경 Chollet 자신도 딥러닝으로 모든 것이 가능하다고 믿었음 (Keras 창시자)
- [13:56] Google Brain에서 발견: 모델이 알고리즘을 표현할 수 있지만 그래디언트 디센트가 그것을 찾지 못함

> "[14:28] Gradient descent would not find generalizable programs. It would instead end up doing overfitted pattern matching over sequences of input tokens."

## ARC 탄생 스토리 (14:00-18:20)

- [14:20] ARC 착안: "추론의 ImageNet"을 만들자 — 2016~2017년 Google Brain 연구 중 착상
- [15:35] 2018년 여름 ARC 태스크 에디터 작성 후 1년에 걸쳐 손수 1,000개 태스크 제작
- [16:36] 2019년 논문 발표 당시 매우 비주류. GPT-3는 ARC V1에서 0점

> "[16:45] LLMs did not work well or at all on the benchmark. For a benchmark to capture the attention that the research community needs, it needs to start working a little."

## ARC 벤치마크: V1에서 V3까지 (18:20-22:49)

- [18:20] ARC V1: 추론 모델 없이는 LLM 성능이 매우 낮음 → o1/o3의 등장이 처음으로 큰 도약
- [20:00] ARC V2: 더 어렵게 만들었지만 frontier 랩들이 RL 루프로 빠르게 포화시킴
- [21:40] V2 포화 방법: 추론 모델로 태스크 생성 → 풀기 → 검증 → 파인튜닝 반복

> "[22:27] It's not so much that the models have higher fluid intelligence. It's just that you have this new paradigm of post-training."

## 코딩 에이전트를 구동하는 RL 루프 (22:49-27:03)

- [22:49] RL 루프의 핵심: 검증 가능한 보상이 있어야 문제 공간 전체를 마이닝 가능
- [23:20] 역설: "모델이 더 스마트해진 것이 아니라 더 잘 훈련된 것" — 지식이 늘면 지능 덜 필요
- [25:00] 인간이 엔지니어링한 하네스가 여전히 필요하다는 점이 진정한 AGI와의 거리를 보여줌

> "[25:33] The fact that you need humans to engineer these harnesses is also a sign that we're short of AGI today. Because if we had AGI, it would just make its own harness."

## ARC-AGI V3: 에이전틱 지능 측정 (27:03-31:14)

- [27:03] ARC V3의 핵심 변화: 정적 패턴 인식 → 능동적 에이전틱 지능 측정
- [27:20] V3 형식: 미니 비디오 게임 환경에 에이전트 투입, 목표도 조작법도 알려주지 않음
- [27:50] 측정 항목: 탐색 효율, 자체 목표 설정, 세계 모델 구성, 계획 및 실행 능력
- [29:10] V3는 타게팅에 더 저항적: 공개 세트와 비공개 세트를 의도적으로 크게 다르게 설계

> "[28:50] We are not just measuring the AI's ability to model its environment. We are also looking at its exploration efficiency, its ability to acquire goals on its own."

## ARC 게임 스튜디오 내부 (31:14-35:31)

- [31:10] ARC V3를 위해 게임 개발자 채용 + 자체 게임 엔진 제작 → 250개 이상의 게임 제작
- [31:45] 기존 비디오 게임 요소 차용 없이 핵심 지식 선험(core knowledge priors)만 활용
- [34:10] 기존 게임 RL과의 차이: Atari/Dota는 동일 환경에서 훈련·테스트(암기), ARC V3는 처음 보는 게임에서 테스트

> "[34:00] With ARC 3, you're being evaluated on games that you're seeing for the very first time. And every action you spend exploring is counted towards your efficiency score."

## AGI는 10,000줄 코드에 담길 수 있을까? (35:31-44:01)

- [35:40] Chollet의 대담한 주장: 딥러닝 없이도 AGI는 1980년대 컴퓨터로 가능했을 것
- [36:00] AGI 구조는 두 층: ①유체 지능 엔진(소규모 코드베이스) + ②지식 베이스(대용량)
- [38:54] Ndea 시스템의 목표: 자기 개선이 복리로 작용하는 구조
- [39:20] 과학 자체가 심볼릭 압축 과정: 수천 개의 관측값을 하나의 간단한 방정식으로 압축

> "[36:14] I do believe that when you create AGI retrospectively, it will turn out that it's a codebase that's less than 10,000 lines of code."

## Ndea 구축: 복리 연구 스택 (44:01-46:46)

- [44:30] 접근법: 딥러닝 가이드 프로그램 탐색(AlphaGo/AlphaZero 원리와 유사) — 조합 폭발을 딥러닝 가이던스로 극복
- [45:38] 핵심 교훈: 매번 새로운 것을 시도하지 않고 재사용 가능한 기반을 쌓아 그 위에 계층을 올리는 것

## AI와 함께 진화하는 벤치마크의 미래 (46:46-47:21)

- [46:41] ARC는 고정 테스트가 아닌 AI 발전에 맞춰 진화하는 시리즈
- [46:55] ARC V4: 지속 학습(continual learning), V5: "발명" — 이전 학습을 재활용하는 복합 구조
- [47:10] AGI 달성 시점: 인간의 학습 효율과 AI 차이가 측정 불가능해질 때

## 새 AI 패러다임의 기회 (47:21-53:37)

- [47:40] 현재 AI 투자 집중화는 역사적으로 반복되는 패턴 (20년 전 SVM 집중화와 유사)
- [49:20] 유전 알고리즘, 상태공간 모델, 재귀 모델 등도 충분한 투자만 받으면 놀라운 결과 가능
- [50:20] 유전 알고리즘: 과학 자동화에 큰 잠재력을 가진 미개척 접근법

> "[49:10] I think we're probably looking at AGI 2030, early 2030s, most likely."

> "[50:54] You want to be in a setup where the system can improve its capabilities with no human in the loop, with no human bottleneck."

## 오픈소스 프로젝트 성공법 — Keras의 교훈 (53:37-56:39)

- [53:37] Keras 성공 요인 1: API의 단순함과 직관성
- [54:00] 성공 요인 2: 단순 사용법을 넘어 도메인 전체를 가르치는 교육적 문서
- [54:40] 성공 요인 3: 커뮤니티의 파워 유저를 직접 팀으로 영입

> "[54:56] Hire your power users. Find the most enthusiastic users from your community and just hire them on your team. They're always the best people."

## AI에 대해 생각하는 법 (56:39-57:24)

- [56:39] AI 비관론에 반론: 전문성이 높을수록 AI 도구를 더 잘 활용 가능
- [56:55] 핵심 조언: AI 자체뿐 아니라 적용하고 싶은 도메인에 대한 깊은 전문성 쌓기

> "[57:00] You're not going to stop AI progress. It's actually going to keep accelerating. How do you make use of it? How do you ride a wave? That's the question to ask."
