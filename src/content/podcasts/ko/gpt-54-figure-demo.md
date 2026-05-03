---
title: "GPT 5.4 사용 후기, 진짜 사람 느낌을 보여준 Figure 데모"
description: "GPT 5.4 실사용 체감, Figure Helix 데모, 하이브리드 LLM 아키텍처, 롱 컨텍스트, 오토리서치와 코딩 에이전트 하네스 변화를 한 편으로 정리합니다."
date: 2026-03-18
videoId: "ISnuCJKS74E"
duration: "13:11"
episodeNumber: 1
hosts:
  - "sudo remove"
tags:
  - "GPT 5.4"
  - "OpenAI Codex"
  - "Figure AI"
  - "Helix"
  - "Claude Code"
  - "오토리서치"
  - "하이브리드 아키텍처"
  - "Gemini Embedding"
  - "Long Context"
summary:
  - "Figure AI의 Helix 데모는 텔레오퍼레이션이 아니라 모델이 리모컨 조작과 수건 처리 같은 행동을 수행했다는 주장 때문에, 로봇 데모를 보는 기준을 다시 세우게 한다."
  - "OLMo, Qwen, Kimi 계열 사례를 놓고 Transformer만 쓰는 구조보다 Mamba·Gated DeltaNet을 섞는 하이브리드 아키텍처가 LLM의 기본 선택지로 넓어지고 있다는 흐름을 짚는다."
  - "1M 컨텍스트 지원은 곧 1M 토큰 전체를 안정적으로 활용한다는 뜻이 아니며, 긴 문맥 검색과 회수 성능은 여전히 별도로 검증해야 한다."
  - "GPT 5.4는 코딩 작업에서 문제 원인 추적과 태클 거는 스타일이 강하게 체감되었고, Claude Code와 Codex는 모델 품질뿐 아니라 하네스와 워크플로우 차이로 비교해야 한다."
  - "Karpathy의 오토리서치, Gemini Embedding 2, Claude Opus의 1M 컨텍스트 기본 제공 사례를 통해 에이전트형 개발·연구 환경이 빠르게 재편되고 있음을 보여준다."
takeaways:
  - "로봇 데모는 자연스러운 움직임만 볼 것이 아니라 텔레오퍼레이션 여부, 손가락 자유도, 실패 조건, 반복 촬영 가능성을 함께 물어봐야 한다."
  - "하이브리드 LLM 아키텍처는 긴 컨텍스트와 효율성 경쟁의 한 축이지만, 새 구조가 실제 제품 성능으로 이어지는지는 별도 평가가 필요하다."
  - "벤치마크 순위보다 중요한 것은 내가 맡긴 실제 작업에서 모델이 숨은 원인까지 추적하고 검증 루프를 완주하는지 여부다."
  - "롱 컨텍스트는 컨텍스트 창 크기와 회수 정확도를 분리해서 봐야 하며, 꽉 채운 문맥에서 모델이 멍청해지는 체감도 중요한 실사용 신호다."
  - "Codex와 Claude Code의 비교는 모델 대 모델 비교가 아니라 스킬, 서브에이전트, 질문 도구, 컨텍스트 관리 같은 하네스 설계 비교이기도 하다."
chapters:
  - title: "인트로 — GPT 5.4 출시"
    startTime: "00:00"
  - title: "Figure AI Helix 데모와 사람 같은 움직임"
    startTime: "00:05"
  - title: "OLMo·Qwen으로 보는 하이브리드 아키텍처 흐름"
    startTime: "01:14"
  - title: "롱 컨텍스트 리얼리티 체크"
    startTime: "02:14"
  - title: "GPT 5.4 벤치마크와 평가 기준"
    startTime: "02:56"
  - title: "GPT 5.4 vs Claude Opus 4.6 실사용 후기"
    startTime: "03:49"
  - title: "오토리서치와 LLM이 LLM을 학습시키는 흐름"
    startTime: "05:49"
  - title: "Gemini Embedding 2와 멀티모달 검색"
    startTime: "06:52"
  - title: "Claude Opus 1M 컨텍스트 기본 제공"
    startTime: "09:38"
  - title: "Codex vs Claude Code 하네스 체감 비교"
    startTime: "11:32"
  - title: "마무리 — 워크플로우를 바꾸는 코딩 에이전트"
    startTime: "12:35"
resources:
  - title: "OpenAI — Introducing GPT-5.4"
    url: "https://openai.com/index/introducing-gpt-5-4/"
  - title: "OpenAI Codex"
    url: "https://openai.com/codex/"
  - title: "Figure AI — Helix"
    url: "https://www.figure.ai/helix"
  - title: "AI2 — OLMo"
    url: "https://allenai.org/olmo"
  - title: "Hugging Face — LeRobot"
    url: "https://github.com/huggingface/lerobot"
  - title: "Google — Gemini Embedding 2"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-embedding-2/"
  - title: "Claude Code Docs"
    url: "https://docs.anthropic.com/en/docs/claude-code/overview"
relatedLinks:
  - title: "원본 YouTube 영상"
    url: "https://www.youtube.com/watch?v=ISnuCJKS74E"
  - title: "Artificial Analysis"
    url: "https://artificialanalysis.ai/"
  - title: "Andrej Karpathy on X"
    url: "https://x.com/karpathy"
  - title: "수도리무브 YouTube 채널"
    url: "https://www.youtube.com/@sudoremove"
isFeatured: false
isDraft: false
---

## 작성 기준

이 노트는 YouTube에서 제공한 한국어 자동 자막과 영상 설명란을 기준으로 정리했습니다. 자막에는 일부 음성 인식 오류가 있으므로, 구체적인 모델명·벤치마크 수치·서비스 정책은 링크된 공식 자료로 다시 확인하는 편이 안전합니다.

## 왜 이 영상을 봐야 하나

이 에피소드는 “GPT 5.4를 써보니 어땠나?”라는 체감 이야기로 시작하지만, 실제 주제는 더 넓습니다. Figure Helix 데모에서 보이는 사람 같은 움직임, 하이브리드 LLM 아키텍처, 1M 컨텍스트의 실사용 한계, 오토리서치, 멀티모달 임베딩, Codex와 Claude Code의 하네스 차이까지 한 번에 이어집니다.

핵심은 새로운 모델이나 데모를 볼 때 “대단하다”에서 멈추지 않고, 어떤 조건에서 그렇게 보였는지 분해하는 것입니다. 로봇은 실제 행동 성공률과 실패 처리로, LLM은 벤치마크보다 실제 작업 루프에서의 원인 추적 능력으로 봐야 합니다.

## 핵심 흐름

### 1. Figure Helix 데모는 왜 사람처럼 보였나

초반부에서는 Figure AI의 Helix 데모를 보며 리모컨 조작과 수건 처리 장면을 이야기합니다. 진행자들은 이 장면이 텔레오퍼레이션이 아니라 Helix가 수행했다는 주장에 주목하면서도, 리모컨을 잡는 방식이나 손가락의 정교함, 반복 촬영 가능성 같은 검증 질문을 함께 던집니다.

여기서 중요한 관점은 “사람 같아 보인다”는 감각과 “사람처럼 일반화할 수 있다”는 능력을 구분하는 것입니다. 자유도가 높다고 항상 조작이 좋아지는 것은 아니며, 데모의 설득력은 하드웨어보다 모델·데이터·실패 조건을 어떻게 공개하느냐에 달려 있습니다.

### 2. 하이브리드 아키텍처가 기본값이 되는가

다음 주제는 OLMo와 Qwen 계열을 예로 든 하이브리드 LLM 아키텍처입니다. 대화에서는 Transformer만 쓰는 모델보다 Mamba, Gated DeltaNet 같은 구조를 섞는 흐름이 점점 자연스러운 선택지가 되고 있다고 봅니다.

다만 이 흐름을 모든 차세대 모델에 곧바로 일반화하지는 않습니다. 어떤 구조가 들어갔는지는 사전 학습을 언제 시작했는지, 그 시점에 어떤 설계 결정을 했는지에 따라 달라질 수 있기 때문입니다. “대세가 될 가능성”과 “이미 모든 프런티어 모델에 들어갔다”는 추정은 구분해서 봐야 합니다.

### 3. 1M 컨텍스트는 1M을 다 잘 쓴다는 뜻이 아니다

롱 컨텍스트 파트의 핵심 문장은 단순합니다. 컨텍스트 창이 1M 토큰이라는 말은 1M 토큰 전체를 빠짐없이 기억하고 정확히 회수한다는 말이 아닙니다.

진행자들은 needle-in-a-haystack류 테스트와 실사용 체감을 연결해, 긴 문맥에서 필요한 정보를 제대로 찾는 능력은 별도 문제라고 지적합니다. 컨텍스트 크기가 커질수록 편리함은 커지지만, 꽉 채웠을 때 모델이 둔해지는 느낌이나 회수 실패는 여전히 확인해야 합니다.

### 4. GPT 5.4 실사용 체감: 문제 원인 추적과 말투

GPT 5.4 사용 후기는 자동 편집 도구의 영상 싱크 문제를 찾은 사례로 설명됩니다. 라이브 소스 중간이 끊겨 앞뒤 싱크가 맞지 않는 상황이었고, GPT 5.4가 그 숨은 원인을 찾는 데 도움을 줬다는 경험담입니다.

흥미로운 부분은 성능뿐 아니라 말투입니다. 진행자는 GPT 5.4가 이전보다 더 많이 태클을 걸고, 읽는 입장에서는 다소 피곤할 정도로 적극적으로 반박하거나 점검한다고 말합니다. 이 체감은 “순한 답변”보다 “문제를 끝까지 파고드는 답변”이 중요한 코딩 작업에서 장점이 될 수 있습니다.

### 5. 오토리서치와 에이전트 하네스

Karpathy가 언급한 오토리서치 흐름은 LLM이 더 작은 LLM을 학습시키거나 연구 루프를 자율화하는 방향으로 소개됩니다. 대화에서는 이것을 바이브 코딩의 다음 단계, 즉 바이브 ML·바이브 트레이닝처럼 확장될 수 있는 키워드로 봅니다.

이어지는 Codex와 Claude Code 비교에서는 모델 자체보다 하네스가 중요하다는 점이 드러납니다. Claude Code 쪽은 스킬, 컨텍스트 관리, 질문 흐름, 편의 기능이 익숙하고 강력하게 느껴지는 반면, Codex는 GPT 5.4 이후 속도와 문제 해결력에서 좋아진 체감이 있다는 식으로 비교됩니다.

## 챕터별 빠른 가이드

- **00:00 인트로**: GPT 5.4 출시와 사용 여부를 던지며 시작합니다.
- **00:05 Figure Helix 데모**: 리모컨 조작, 수건 장면, 텔레오퍼레이션 여부, 손가락 자유도와 데모 설계를 봅니다.
- **01:14 하이브리드 아키텍처**: OLMo, Qwen, Gated DeltaNet, Transformer+Mamba 조합을 통해 LLM 구조 변화 흐름을 짚습니다.
- **02:14 롱 컨텍스트**: 1M 컨텍스트 지원과 실제 정보 회수 능력을 분리해서 봐야 한다는 문제의식을 제시합니다.
- **02:56 GPT 5.4 평가**: Artificial Analysis와 Arena류 평가의 한계, 벤치마크가 뚫리기 쉬운 시대의 평가 기준을 이야기합니다.
- **03:49 실사용 후기**: 영상 싱크 문제를 찾은 코딩 사례와 GPT 5.4의 적극적인 피드백 스타일을 설명합니다.
- **05:49 오토리서치**: Karpathy가 던진 키워드를 바탕으로 LLM이 연구·학습 루프를 자율화하는 방향을 봅니다.
- **06:52 Gemini Embedding 2**: 텍스트·이미지·오디오·비디오가 섞인 데이터에서 멀티모달 검색이 왜 어려운지 설명합니다.
- **09:38 Claude Opus 1M 컨텍스트**: 컨텍스트 압박이 줄어든 편의성과, 큰 컨텍스트를 꽉 채웠을 때의 성능 저하 가능성을 함께 봅니다.
- **11:32 Codex vs Claude Code**: 모델 성능뿐 아니라 스킬, 서브에이전트, 질문 도구, 토큰 제한 같은 하네스 설계 차이를 비교합니다.
- **12:35 마무리**: 코딩 에이전트가 실제 뉴스 제작과 개발 워크플로우를 바꾸고 있다는 체감으로 닫습니다.

## 검색 키워드

GPT 5.4, OpenAI Codex, Figure AI, Helix, Claude Code, Karpathy, 오토리서치, OLMo, Qwen, Gated DeltaNet, Gemini Embedding 2, Long Context, 멀티모달 검색, 코딩 에이전트
