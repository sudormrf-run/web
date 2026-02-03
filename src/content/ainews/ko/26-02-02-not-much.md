---
title: "OpenAI, macOS용 Codex 앱 출시"
summary:
  - "OpenAI, macOS용 Codex 앱 출시"
  - "StepFun Step-3.5-Flash 오픈 공개"
  - "Kimi K2.5, Code Arena 1위 오픈"
  - "1M 컨텍스트, 메모리 장벽이 핵심 부상"
  - "LM Studio, Claude Code 호환 API 추가"
date: 2026-02-02
originalUrl: "https://news.smol.ai/issues/26-02-02-a-quiet-day/"
hasHeadline: false
headline: "OpenAI, macOS용 Codex 앱 출시"
tags:
  - OpenAI
  - Codex
  - 에이전트
isFeatured: false
---

## 헤드라인: OpenAI, macOS용 Codex 앱 출시

OpenAI가 macOS용 Codex 데스크톱 앱을 출시해, **여러 에이전트를 병렬로** 실행하고 **내장 worktrees**로 변경을 격리하며 **skills**와 **scheduled automations**로 동작을 확장하는 “에이전트 커맨드 센터” 형태의 코딩 UI를 제시했다 ([OpenAI announcement](https://twitter.com/OpenAI/status/2018385565289267236), [rate-limit + availability details](https://twitter.com/OpenAI/status/2018385568992752059), [OpenAIDevs feature rundown](https://twitter.com/OpenAIDevs/status/2018385865207419124)).

워크플로 측면에서는 *worktree per task/PR*, Plan mode (`/plan`), 외부 서비스와 연결 가능한 skills, 반복 작업을 위한 automations 등이 강조됐다 ([@reach_vb](https://twitter.com/reach_vb/status/2018385536616956209), [Plan mode](https://twitter.com/reach_vb/status/2018456051792982339), [skills landing page](https://twitter.com/reach_vb/status/2018390580330389728)). 제품 안내는 [“Introducing the Codex app”](https://openai.com/index/introducing-the-codex-app/) 및 [Codex landing page](https://openai.com/codex)에서 확인할 수 있다.

이슈 원문 아카이브: [https://news.smol.ai/](https://news.smol.ai/) / 소스 리스트: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) / 피드백: [@smol_ai](https://x.com/Smol_AI)

---

## AI Twitter Recap

### OpenAI의 Codex 앱: 코딩을 위한 에이전트 네이티브 “command center”

- **Codex 앱 macOS 출시(Windows는 “soon”)**: OpenAI가 전용 Codex 데스크톱 앱을 출시했다. **여러 에이전트를 병렬로** 실행하고, **내장 worktrees**로 변경을 격리하며, **skills**와 **scheduled automations**로 동작을 확장하는 데 초점을 둔 UI로 포지셔닝됐다 ([OpenAI announcement](https://twitter.com/OpenAI/status/2018385565289267236), [rate-limit + availability details](https://twitter.com/OpenAI/status/2018385568992752059), [OpenAIDevs feature rundown](https://twitter.com/OpenAIDevs/status/2018385865207419124)). 반복적으로 드러난 메시지는 *인터페이스*가(모델만이 아니라) 제품이 되고 있다는 점이다.

- **중요한 개발자 워크플로 디테일**: 앱은 (a) 병렬성과 충돌 격리를 위한 기본 단위로 *task/PR per worktree*를 강조하고, (b) 사전 분해와 질문을 강제하는 Plan mode (`/plan`), (c) 외부 서비스(Figma/Linear/Vercel 등)와 연결 가능한 재사용 번들인 skills, (d) 반복 백그라운드 작업을 위한 automations를 내세운다 ([@reach_vb](https://twitter.com/reach_vb/status/2018385536616956209), [Plan mode](https://twitter.com/reach_vb/status/2018456051792982339), [skills landing page](https://twitter.com/reach_vb/status/2018390580330389728)).

- **사용 신호/채택 내러티브**: 여러 내부자(및 파워 유저)가 대형 레포와 장시간 작업에서 CLI/IDE 확장보다 “체감이 다른” 단계 변화라고 주장한다. 특히 병렬 스레드 관리와 리뷰 가능한 diff 관리에 강점이 있다는 얘기가 나온다. 대표적인 후기로는 [@gdb](https://twitter.com/gdb/status/2018387844222578818) (에이전트 네이티브 인터페이스; “터미널로 돌아가면 마치 시간 여행을 한 느낌), [@sama](https://twitter.com/sama/status/2018414858015039504) (생각보다 너무 좋아서 놀람), [@skirano](https://twitter.com/skirano/status/2018398337938960715) (워크플로에서 Cursor + Claude Code를 대체 중) 등이 언급됐다.

- **생태계 압력/표준화**: 이미 “skills” 폴더 표준화를 밀어붙이려는 움직임이 있다. Codex가 `.agents/skills`를 읽고 `.codex/skills`를 폐기(deprecate)하자는 제안이 나왔다 ([@embirico](https://twitter.com/embirico/status/2018415923930206718)). 에이전트 툴링이 `.github/`, `pyproject.toml` 같은 관례를 형성하기 시작했다는 초기 신호로 읽힌다.

- **메타 포인트: 제품 루프를 통한 “self-improving”**: Codex가 “자기 자신을 만드는 데” 활용된다는 게시물이 여럿 나왔다. 자율 AGI라기보다는 (사람 + 에이전트) 제품 피드백 루프 형태로 실제 제품에 탑재되어 순환하는 “재귀적 개선” 서사로 제시된다 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018385663457116379), [@ajambrosino](https://twitter.com/ajambrosino/status/2018385459936923656), [@thsottiaux](https://twitter.com/thsottiaux/status/2018258151603388639)).

### 코딩 에이전트 실전: 신뢰성, 테스트, 병렬성, 그리고 “army of agents” 밈의 현실화

- **CLAUDE.md/AGENTS.md를 위한 구체적 베스트 프랙티스**: “테스트 우선(test-first)” 지시를 추가하자는 제안이 나왔다. 버그가 보고되면 (1) 재현 테스트를 먼저 작성하고 (2) 수정하고 (3) 통과하는 테스트로 증명하라는 내용으로, 에이전트 성능과 멘탈 관리에 가장 큰 개선이라고 주장한다 ([@nbaschez](https://twitter.com/nbaschez/status/2018027072720130090)). 코딩이 부분적으로 검증 가능한 도메인이라는 큰 흐름과 맞닿는다.

- **엔지니어링의 “지휘자(conductor)” 모델**: 한 개발자가 **5–10개 에이전트를 병렬로** 돌리고, 코드 전체를 다 읽지 않고도 출하하며, 작성자에서 감독자/지휘자로 역할이 바뀐다는 주장도 있다 ([@Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2018029206542946582)). 반대로 사람의 컨텍스트 스위칭 한계와 품질 저하를 경고하며 “수십 개를 동시에 돌리는 것”은 무리라는 반론도 나온다 ([@badlogicgames](https://twitter.com/badlogicgames/status/2018117758991384754)).

- **코딩 에이전트가 되는 이유에 대한 뉴로심볼릭(neurosymbolic) 관점**: 소프트웨어는 **검증 가능한 도메인**이고, 실행/툴링(테스트, 컴파일러, 셸)이 LLM이 기대는 심볼릭 스캐폴딩을 제공한다는 논리가 제시됐다. 코딩 밖에서 이를 복제하려면 비슷한 “심볼릭 도구상자”와 검증 가능성을 구축해야 한다는 주장이다 ([@random_walker](https://twitter.com/random_walker/status/2018342421696766147)).

- **벤치마크 회의론**: 참가자가 약한 워크플로(예: 채팅 사이드바)만 쓰는 “LLM 생산성” 연구에 대한 반발이 있다. 에이전틱 셋업을 반영하지 못해 도구가 빠르게 진화하는 상황에서 생산성 향상을 과소평가한다고 비판한다 ([@papayathreesome](https://twitter.com/papayathreesome/status/2018169992752083034), [@scaling01](https://twitter.com/scaling01/status/2018339728697831494)).

- **오픈소스 에이전트 스택과 안전/운영 우려**: OpenClaw/Moltbook 생태계에 대한 기대와 함께 운영/안전 비판도 병행된다. 예를 들어 세션 관리/정책 집행을 위해 에이전트 앞단에 게이트웨이를 두자는 논의 ([@salman_paracha](https://twitter.com/salman_paracha/status/2018091883164217582))와, “AI-only 소셜 미디어”는 즉시 봇/스팸으로 오염된다는 경고 ([@jxmnop](https://twitter.com/jxmnop/status/2018134884645306818))가 나왔다. 에이전트 제품도 소비자 플랫폼 수준의 악용 저항/관측가능성을 즉시 요구받는다는 뉘앙스다.

### 에이전트형 코딩 오픈 모델: StepFun Step-3.5-Flash와 Kimi K2.5가 이번 주의 초점

- **StepFun Step-3.5-Flash 오픈 릴리스(효율성 강조)**: StepFun의 Step-3.5-Flash는 **sparse MoE** 모델로 **총 196B 파라미터 / 활성 ~11B**, **속도 + 롱컨텍스트 에이전트 워크플로**에 맞춰졌다는 점이 반복 인용됐다(특히 **256K 컨텍스트**, **3:1 sliding-window attention + full attention**, **MTP-3 multi-token prediction**) ([official release thread](https://twitter.com/StepFun_ai/status/2018370831538180167), [launch/links](https://twitter.com/CyouSakura/status/2018146246020772062)). StepFun은 **74.4% SWE-bench Verified** 및 **51.0% Terminal-Bench 2.0**을 보고했다 ([StepFun](https://twitter.com/StepFun_ai/status/2018370831538180167)).

- **즉시 인프라 지원**: vLLM이 **day-0 지원**과 배포 레시피를 공개해, 실제 서빙 스택에서의 채택을 강하게 신호했다 ([@vLLM](https://twitter.com/vllm_project/status/2018374448357998874)).

- **커뮤니티 평가 기조**: “ASAP로 테스트 필요”와 벤치마크 체리피킹 우려가 함께 나온다. 표준화된 베이스라인(MMLU/HLE/ARC-AGI)과 3자 검증 요구가 강하고, HF 리더보드 변동성도 함께 언급됐다 ([@teortaxesTex](https://twitter.com/teortaxesTex/status/2018152874249716137), [@QuixiAI](https://twitter.com/QuixiAI/status/2018251816647938051)).

- **Kimi K2.5의 에이전트형 코딩 강점**: Arena는 Kimi K2.5를 **Code Arena 오픈 모델 1위**, **전체 5위**로 보고하며, 일부 최상위 독점 모델과 “비슷한 수준”이라고 했다. Text/Vision/Code Arena 전반에서 강세라는 언급도 함께다 ([Arena announcement](https://twitter.com/arena/status/2018355347485069800)). 다만 일부 워크플로에서는 툴 추종(tool-following)·시스템 프롬프트 준수에서 약점이 있다는 일화도 언급됐다 ([@QuixiAI](https://twitter.com/QuixiAI/status/2018213058284229083)).

- **프로바이더 신뢰성 이슈**: 툴 호출(tool-calling)/파싱 실패는 모델을 실제보다 나쁘게 보이게 만들 수 있다. Teknium은 FireworksAI의 Kimi 엔드포인트에서 툴 파싱이 깨져 워크플로에서 금지해야 했다고 지적했다. 운영 관점에서 프로덕션의 “모델 품질”은 종종 *통합 정확성*으로 수렴한다는 리마인더다 ([@Teknium](https://twitter.com/Teknium/status/2018155345030627600), [earlier warning](https://twitter.com/Teknium/status/2018092504613285900)).

### 합성 데이터, 평가, 그리고 “perplexity를 믿지 마라”

- **합성 사전학습(synthetic pretraining) 딥다이브**: Dori Alexander가 **synthetic pretraining** 장문의 블로그 글을 공개했고, 합성 데이터 파이프라인과 실패 모드(예: collapse, distribution drift)에 대한 관심이 재점화되는 흐름이 읽힌다 ([tweet](https://twitter.com/Dorialexander/status/2018018715162288611)). 과거 “합성 데이터 모드 붕괴(mode collapse)” 공포가 컸지만, 점차 엔지니어링/레시피 문제로 취급된다는 언급도 함께다 ([@HaoliYin](https://twitter.com/HaoliYin/status/2018123588784799822)).

- **모델 선택에서 perplexity 함정**: **perplexity**를 선택 목표로 맹신하면 안 된다는 근거가 늘고 있다는 트윗들이 나왔다 ([@DamienTeney](https://twitter.com/DamienTeney/status/2018413621361967216), [@giffmana](https://twitter.com/giffmana/status/2018393065803620662)). 다음 토큰 예측 지표만 최적화하면 다운스트림 과제, 툴 사용 안정성, 지시(instruction) 준수 일관성을 놓칠 수 있다는 실무적 결론이다.

- **인터넷에서 무제한 RLVR 과제 합성(“Golden Goose”)**: 검증 불가능한 웹 텍스트에서 추론 단계를 마스킹하고 디스트랙터를 만들어 사실상 무제한 RLVR 스타일 과제를 합성하는 방법이 제안됐다. 기존 RLVR 데이터에 “포화”된 모델을 되살리고, 사이버보안 과제에서 강한 성과를 냈다는 주장도 포함된다 ([@iScienceLuvr](https://twitter.com/iScienceLuvr/status/2018233829488484674), [paper ref](https://twitter.com/iScienceLuvr/status/2018233832437158354)).

- **압축 + 롱컨텍스트 인프라 아이디어**: 문서/컨텍스트 압축(예: “Cartridges,” gist tokens, KV cache 압축 변형)로 메모리 풋프린트를 줄이고 생성 속도를 높이려는 논의가 이어졌다. 에이전트 컨텍스트가 수십만~수백만 토큰으로 커지면서 중요도가 올라가는 흐름이다 ([@gabriberton](https://twitter.com/gabriberton/status/2018097161343553770), [refs](https://twitter.com/gabriberton/status/2018097171313361138)).

### 에이전트 시스템 & 인프라: 메모리 장벽, 관측가능성, 쿼리 의존 RAG 청킹

- **병목이 FLOPs에서 메모리 용량으로 이동**: Imperial College + Microsoft Research를 요약한 스레드에서, 에이전트형 워크로드(코딩/컴퓨터 사용)에서는 결합 제약이 연산량보다 **메모리 용량 / KV cache 풋프린트**라는 주장이 제시됐다. 예시로 배치 1에서 **1M 컨텍스트**는 DeepSeek-R1 단일 요청에 **~900GB 메모리**가 필요할 수 있다고 언급하며, prefill vs decode를 위한 **disaggregated serving** 및 이기종 가속기 구성을 시사한다 ([@dair_ai](https://twitter.com/dair_ai/status/2018337881715245507)).

- **관측가능성(observability)은 에이전트의 “스택 트레이스”**: LangChain은 에이전트가 크래시 없이 실패하므로 트레이스가 1차 디버깅 산출물이라는 점을 강조했고, 에이전트 관측가능성 + 평가(evaluation) 관련 웨비나/툴링을 밀고 있다 ([LangChain](https://twitter.com/LangChain/status/2018432807324839966), [@hwchase17](https://twitter.com/hwchase17/status/2018433676485574742)).

- **RAG 청킹(chunking): 쿼리별 최적 크기 선택으로 20–40% recall 향상**: AI21은 오라클이 쿼리마다 청크 크기를 고르는 실험에서 어떤 고정 청크 크기보다 **20–40% recall**이 높았다고 보고했다. 다만 여러 granularities 인덱스를 저장해야 하므로 저장 비용 vs 품질 트레이드오프가 생긴다 ([@YuvalinTheDeep](https://twitter.com/YuvalinTheDeep/status/2018297202066481445), [thread context](https://twitter.com/YuvalinTheDeep/status/2018297199025705269)).

- **“deep agent” 아키텍처 패턴 패키징**: LangChain JS가 `deepagents`를 소개하며 Claude Code/Manus 같은 시스템이 “견고하게 느껴지는” 이유를 네 가지 반복 패턴으로 설명하고, 단순 툴콜링 에이전트가 실패하는 이유를 대비시켰다 ([LangChain_JS](https://twitter.com/LangChain_JS/status/2018346035240923577)).

### Top tweets (by engagement)

- **RSS로 돌아가 인센티브 기반 슬롭(slop)을 피하자는 Karpathy**: 엔지니어의 “신호 품질”과 맞닿은 메타 코멘터리로 높은 참여를 얻었다 ([tweet](https://twitter.com/karpathy/status/2018043254986703167)).

- **OpenAI Codex 앱 런칭**: 이 세트에서 참여 기준 가장 큰 AI 엔지니어링 릴리스로 언급됐다 ([OpenAI](https://twitter.com/OpenAI/status/2018385565289267236), [OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018385663457116379), [@sama](https://twitter.com/sama/status/2018414858015039504)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[128GB devices have a new local LLM king: Step-3.5-Flash-int4](https://www.reddit.com/r/LocalLLaMA/comments/1qtvo4r/128gb_devices_have_a_new_local_llm_king/)** (Activity: 385): **[Hugging Face](http://huggingface.co/stepfun-ai/Step-3.5-Flash-Int4)에서 제공되는 `Step-3.5-Flash-int4` 모델은 M1 Ultra Mac Studio 같은 `128GB` RAM 디바이스에 최적화된 새로운 로컬 LLM로 소개됐다. 전체 컨텍스트 길이 `256k`를 지원하며 RAM 사용 효율이 높다고 한다. `llama-bench` 벤치마크에서 `100k` prefill까지 포함한 테스트에서 `pp512`는 `281.09 ± 1.57 t/s`, `tg128`은 `34.70 ± 0.01 t/s`로 인상적인 성능이 보고됐다. 실행에는 커스텀 `llama.cpp` 포크가 필요하며, 성능을 고려하면 업스트림 지원 가능성도 언급됐다.** 댓글에서는 Strix Halo 같은 다른 하드웨어에서의 성능과 NVFP4 버전에 대한 관심이 나왔고, 성능에 놀라는 농담도 있었다.
- Step-3.5-Flash-int4가 128GB 디바이스에서 256k 컨텍스트를 완주하는 점이 특히 주목됐다. 많은 모델이 메모리를 크게 쓰며 이런 컨텍스트를 감당하지 못한다는 인식과 대비되며, GLM 4.7 같은 “RAM 많이 먹는” 모델의 대안으로 거론됐다.
- 한 사용자는 Step-3.5-Flash-int4를 Minimax M2.1과 비교하며 약간 더 나을 수 있다고 주장했다. Minimax M2.1이 좋은 평을 받는 모델이라, 효율/품질이 개선된다면 의미 있는 비교로 받아들여졌다.
- Minimax가 빠른 반복(iteration)에 유리하다는 이유로 선호된다는 맥락에서, Step-3.5-Flash-int4의 응답 속도/품질 조합이 대체 가능성을 만들지에 관심이 모였다.

- **[Step-3.5-Flash (196b/A11b) outperforms GLM-4.7 and DeepSeek v3.2](https://www.reddit.com/r/LocalLLaMA/comments/1qtjhc8/step35flash_196ba11b_outperforms_glm47_and/)** (Activity: 640): **Stepfun의 신규 Step-3.5-Flash가 여러 코딩·에이전트형 벤치마크에서 DeepSeek v3.2보다 우수하다는 주장이 나왔다. Step-3.5-Flash는 `196B` 총 파라미터 중 `11B` 활성인 반면, DeepSeek v3.2는 `671B` 총 파라미터에 `37B` 활성 파라미터라고 소개됐다. 모델은 [Hugging Face](https://huggingface.co/stepfun-ai/Step-3.5-Flash)에서 제공된다.** 댓글에서는 크기 대비 성능이 예상 밖이라는 반응이 있었고, Kimi K2.5 및 Deepseek 3.2 Speciale 등과 비교해 호평하는 의견도 있었다. `llama.cpp` 통합을 위한 오픈 PR이 있다는 점도 언급돼 커뮤니티의 관심과 개발이 진행 중임을 시사했다.
- 작은 크기와 속도에도 GLM-4.7, DeepSeek v3.2 같은 더 큰 모델을 이긴다는 주장에 놀라는 반응이 나왔다. “benchmaxxed”됐지만 효율이 높다는 평가와 함께 Kimi K2.5 수준, 혹은 Deepseek 3.2 Speciale/Gemini 3.0 Flash와 비슷하다는 언급도 있었다.
- `llama.cpp` 통합을 위한 PR이 열렸다는 점이 채택에 중요한 이정표로 언급됐다. 더 큰 MiniMax, Qwen3-235B 같은 모델보다 작아 “컴팩트 모델” 선택지로의 가치가 강조됐다. PR 링크는 [here](https://github.com/ggml-org/llama.cpp/pull/19271)다.

- **[GLM-5 Coming in February! It’s confirmed.](https://www.reddit.com/r/LocalLLaMA/comments/1qtvp74/glm5_coming_in_february_its_confirmed/)** (Activity: 757): **이미지에는 2026년 2월에 예상되는 AI 기술 릴리스(DeepSeek V4, Alibaba Qwen 3.5, GPT-5.3 등)가 나열되어 있고, jietang이 “glm-5”도 추가한 것으로 묘사된다. 여러 대형 업데이트가 몰릴 수 있다는 기대감이 반영된 게시물이다.** 댓글에서는 모델이 매우 빨리 구식이 되는 속도를 농담으로 언급하거나, GLM-5의 기능을 추측하는 등 기대와 호기심이 섞였다.
- bootlickaaa는 GLM-5가 Kimi K2.5를 이기길 바란다고 말하며, 성능 지표에 따라 선호가 이동할 수 있음을 시사했다. 언급된 연간 [Z.ai](https://Z.ai) Pro 플랜은 더 강한 모델이 나오면 흔들릴 수 있는 “커밋”으로 비춰졌다.
- International-Try467는 GLM 스태프와 무관한 소스의 신뢰성을 의심하며, 공식 채널/검증된 정보의 중요성을 강조했다.
- Septerium은 gguf 파일이 금세 구식이 된다는 농담을 하며, 잦은 업데이트가 필요한 빠른 개발 속도를 드러냈다.

- **[Mistral Vibe 2.0](https://www.reddit.com/r/LocalLLaMA/comments/1qt76qs/mistral_vibe_20/)** (Activity: 387): **Mistral AI가 터미널 네이티브 코딩 에이전트 Mistral Vibe 2.0을 공개했다. Devstral 2 모델 패밀리를 활용하며, 작업 특화용 커스텀 서브에이전트, 모호성을 줄이기 위한 다중 선택 확인, 슬래시 커맨드 기반 skills 등이 언급됐다. 통합 에이전트 모드로 컨텍스트 스위칭을 매끄럽게 지원하고, Le Chat Pro 및 Team 플랜에 통합되며, Devstral 2는 유료 API 모델로 전환(엔터프라이즈용 미세조정(fine-tuning)·코드 모더나이제이션 옵션 포함)된다고 소개됐다. 자세한 내용은 [here](https://mistral.ai/news/mistral-vibe-2-0).** 댓글에서는 “유럽(프랑스)산”이라는 점이 언급됐고, OpenCode와 비교하며 ClaudeCode를 모방한다는 의견도 있었다. 또한 `~/.vibe/promps/cli.md`에 도구 목록을 넣으면 툴 성능이 좋아진다는 팁도 나왔다.
- 코드베이스가 `19472` LOC로 Codex/OpenCode 같은 대안(종종 `100k`+ LOC)보다 작다는 점이 언급되며, 유지보수/이해 용이성 관점에서 효율을 강조했다.
- 도구 호출이 `~/.vibe/promps/cli.md`에 도구 목록을 명시했을 때 더 잘 작동한다는 설정 팁이 공유됐다.
- 로컬/오프라인 실행 가능 여부에 대한 질문도 나왔다(프라이버시, 성능, 인터넷 의존성 관점).

- **[Falcon-H1-Tiny (90M) is out - specialized micro-models that actually work](https://www.reddit.com/r/LocalLLaMA/comments/1qsx51z/falconh1tiny_90m_is_out_specialized_micromodels/)** (Activity: 357): **TII의 sub-100M 파라미터 Falcon-H1-Tiny 시리즈가 “스케일링” 상식을 흔드는 특화 작업 성능을 보인다는 주장이 소개됐다. 초기부터 타깃 도메인 데이터를 주입하는 anti-curriculum 학습으로 과적합을 막고, Hybrid Mamba+Attention 블록과 Muon 옵티마이저로 AdamW 대비 최대 `20%` 성능 향상을 주장한다. 90M 툴콜러 모델이 `94.44%` 관련성 감지를 달성하고, 600M 추론 모델이 AIME24의 `75%`를 푼다는 설명도 포함됐다. 휴대폰·Raspberry Pi 등 로컬 배포에 최적화됐다는 점이 강조됐다.** 댓글에서는 Muon 옵티마이저(일명 Kimi optimizer) 언급과 함께, 지식 끌어오기/활용에 초점을 둔 모델 가능성에 대한 관심이 나왔다. 학습 코드/데이터셋 프리뷰/파이프라인 공개 여부에 대한 질문도 있었다.
- Firepal64는 Falcon-H1-Tiny가 Kimi 옵티마이저로 알려진 Muon을 썼다고 언급하며, 널리 쓰이지 않는 옵티마이저의 효용에 대한 호기심을 드러냈다.
- kulchacop, Available-Craft-5795는 코드·데이터셋 프리뷰·학습 파이프라인 공개 여부를 질문하며, 커스텀 작업에 적용하거나 재현하려는 관심을 보였다.
- mr_Owner는 `llama.cpp`로 돌렸을 때 기대보다 느리다고 언급해, 구현 호환성/최적화 이슈 가능성을 시사했다.

- **[Can 4chan data REALLY improve a model? TURNS OUT IT CAN!](https://www.reddit.com/r/LocalLLaMA/comments/1qsrscu/can_4chan_data_really_improve_a_model_turns_out/)** (Activity: 606): **확장된 4chan 데이터셋으로 학습된 [Assistant_Pepe_8B](https://huggingface.co/SicariusSicariiStuff/Assistant_Pepe_8B)이 베이스 모델(nvidia’s nemotron)보다 높은 점수를 냈다는 사례가 소개됐다. ‘노이즈’가 많을 것으로 예상된 데이터셋이 오히려 성능을 올렸다는 점이 흥미 포인트로 제시되며, Yannic Kilcher의 gpt4chan이 truthfulness에서 높게 나왔던 사례와도 연결된다. 또한 **alignment tax**가 생각보다 크고, 낮은 KL divergence (`<0.01`)를 보인 **Impish_LLAMA_4B**가 정치 성향 이동을 보였다는 언급도 포함됐다.**
- 4chan 데이터가 언어 통계/의미론에 독특한 영향을 주며, 특히 “올바른 영어 구성” 생성에 도움이 된다는 관점이 제시됐다. Reddit/Wikipedia 같은 데이터와 달리 ‘I’ 진술을 크게 늘려 더 자기중심적 출력이 된다는 분석도 있어, 어시스턴트형 챗봇에는 바람직하지 않을 수 있다는 대비가 나왔다. Twitter 데이터는 빠르게 성능을 망가뜨린다는 언급도 있었다.
- chat template과 데이터 소스의 결합(ChatML + abliteration)이 모델 행동/정치 성향을 크게 바꿀 수 있다는 기술적 논의가 있었다. template 영향이 작을 것이라는 예상과 달리 변화가 컸고, KL divergence가 Classical Liberalism에서 Centrism으로 이동을 시사한다는 주장도 포함됐다.
- alignment tax 논의에서는 작은 모델이 다양한 데이터 소스를 통합할 때 정렬(alignment) 유지가 더 어려울 수 있다는 가설이 제시됐다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Sonnet 5 next week?](https://www.reddit.com/r/singularity/comments/1qtc4jg/sonnet_5_next_week/)** (Activity: 695): **이미지는 ‘claude-sonnet-5’의 ‘Publisher Model’을 찾을 수 없다는 HTTP 404 에러를 보여주며, 모델이 존재하지 않거나 접근 권한이 없을 수 있음을 시사한다. 게시물에서는 Sonnet 5가 `1 million context`, Opus 4.5의 `1/2` 가격, TPU 학습, 에이전트형 코딩에서 큰 개선을 제공할 것이라는 기대가 함께 언급된다. 에러 메시지는 아직 공개되지 않았거나 접근이 제한된 상태일 가능성을 암시한다.** 댓글에서는 Sonnet 5가 Opus 4.5를 넘어설 수 있다는 기대와, GPT 5.3·Gemini 3 같은 타 모델 출시 루머까지 거론되며 경쟁 구도를 이야기했다.
- Sonnet 5를 ‘competition killer’로 표현하며 Opus 4.5를 크게 앞설 수 있다는 기대가 드러났다.
- 훈련 인프라로 Google TPU가 주목됐고, Gemini 3가 Nvidia 없이 TPU로만 학습된다는 주장과 함께 비용/효율 변화 가능성이 언급됐다.
- Anthropic 제품이 ‘깔끔하고 다듬어졌다’는 인상이 공유되며, 성능뿐 아니라 UX/통합이 경쟁력이라는 관점이 강조됐다.

- **[Sonnet 5 release on Feb 3](https://www.reddit.com/r/ClaudeAI/comments/1qtm9ix/sonnet_5_release_on_feb_3/)** (Activity: 1979): **Vertex AI 에러 로그를 근거로, 코드명 “Fennec”인 **Claude Sonnet 5**가 2026년 2월 3일 출시될 것이라는 루머가 소개됐다. Opus 4.5 대비 50% 저렴하면서 `1M token` 컨텍스트, 더 빠른 성능을 제공하고, Google TPU 최적화로 처리량/지연을 개선한다는 주장이다. “Dev Team” 모드로 자율 서브에이전트가 병렬로 기능을 구현한다는 설명도 있다. 또한 SWE-Bench `80.9%`를 기록해 현 코딩 모델을 넘는다는 “내부자” 주장도 포함된다. 다만 출시일/에러 로그 증거의 타당성에 대한 회의론도 함께 제기됐다.** 댓글에서는 Anthropic 모델 ID가 릴리스 날짜가 아니라 체크포인트 생성일을 반영한다는 점을 들어 미래 날짜 태그의 신빙성을 의심했다. 대형 컨텍스트에서 정확도 저하가 과거 모델에서도 이슈였다는 지적도 나왔다.
- andrew_kirfman은 Vertex API 404가 모델 존재를 증명하지 못한다고 지적하며, Anthropic 모델 ID는 보통 체크포인트 생성일이라 “미래 날짜 릴리스” 태그는 흔치 않다고 말했다(Opus 4.5 ID 사례 언급).
- Sonnet 4/4.5가 API에서 1M 토큰을 제공해 왔지만 정확도 저하가 있었으므로, Sonnet 5는 이 부분의 개선이 필요하다는 의견이 나왔다.
- LuckyPrior4374는 Sonnet 5가 Opus 4.5를 능가한다는 주장을 마케팅에 가까운 과장으로 의심하며 회의적 반응을 보였다.

- **[Sonnet 5 being release on Wednesday where is Gemini 3.5 ?](https://www.reddit.com/r/Bard/comments/1qtmi53/sonnet_5_being_release_on_wednesday_where_is/)** (Activity: 165): **Claude Sonnet 5(“Fennec”)가 50% 저렴하면서 `1M token` 컨텍스트, 더 빠른 성능, TPU 최적화, “Dev Team” 병렬 서브에이전트 모드, SWE-Bench `80.9%` 등을 제공한다는 루머가 반복 소개됐다. Vertex AI 에러 로그가 2026년 2월 3일 출시 창을 시사한다는 주장도 포함된다.** 댓글에서는 Gemini 3가 아직 프리뷰이고 이슈가 많다며 3.5를 기대하는 것이 성급하다는 반응이 있었고, 3.5 자체가 “pipe dream”일 수 있다는 회의론도 나왔다.
- alexander_chapel은 Gemini 3가 아직 프리뷰인데 3.5를 기대하는 것은 무리라고 지적했다.
- Lost-Estate3401은 Gemini 3 Pro도 프리뷰이며 문제가 많다고 언급해, 3.5가 현실적이지 않을 수 있음을 시사했다.
- philiposull은 글쓰기 성능에서 Gemini 3가 다른 모델들(4-5 opus 등)에 뒤처진다고 비교했다.

- **[MIT’s new heat-powered silicon chips achieve 99% accuracy in math calculations](https://www.reddit.com/r/singularity/comments/1qtyoyw/mits_new_heatpowered_silicon_chips_achieve_99/)** (Activity: 521): **MIT 연구진이 폐열을 계산에 활용하는 새로운 실리콘 칩을 개발해 수학 계산에서 `99%` 이상의 정확도를 달성했다고 소개됐다. 온도 차를 데이터로 활용해 열이 고온에서 저온으로 흐르는 물리 현상을 계산(특히 AI/ML에 중요한 행렬-벡터 곱)로 연결한다. 다공성 실리콘의 내부 기하를 알고리즘으로 설계해 열 흐름을 정밀하게 유도하는 구조다. 아직 전통적 CPU 대체는 아니지만, 향후 칩의 에너지 손실/냉각 요구를 줄일 가능성과 열 센싱·저전력 응용이 언급됐다.** 댓글에서는 트릴리언 단위 연산이 필요한 현대 응용에서 99% 정확도가 충분치 않을 수 있다는 지적과, 오류 정정 메커니즘에 대한 기대가 있었다. 현재 `2x2`, `3x3` 같은 작은 행렬 크기라는 점에서 확장성 회의론도 함께 나왔다.
- ReasonablyBadass는 99%가 높아 보이지만 대규모 연산에서는 부족할 수 있고, 현재는 작은 행렬 크기라 갈 길이 멀다고 평가했다.
- Putrumpador는 실제 적용에는 오류 정정이 필요할 것이라고 언급했다.
- BuildwithVignesh는 Physical Review에 실린 연구 링크를 언급하며 기술 세부를 확인할 수 있음을 시사했다.

- **[Shanghai scientists create computer chip in fiber thinner than a human hair, yet can withstand crushing force of 15.6 tons](https://www.reddit.com/r/singularity/comments/1qt28no/shanghai_scientists_create_computer_chip_in_fiber/)** (Activity: 994): **Fudan University 과학자들이 사람 머리카락보다 얇은 섬유(fiber) 형태의 유연 칩을 개발했고, 15.6톤의 압력을 견딜 수 있다고 소개됐다. `100,000 transistors per centimeter`까지 집적되며, 얇은 회로층을 탄성 기판에 말아 올리는 “sushi roll” 설계로 공간을 극대화한다. `10,000`회 굽힘, `30%` 신장, `100°C`까지 견딘다고 하며, 스마트 섬유, 뇌-컴퓨터 인터페이스, VR 장갑 등 응용이 언급됐다. 연구는 2026년 1월 **Nature**에 실렸다고 한다. [Image](https://i.redd.it/gupfy7dnowgg1.jpeg).** 댓글에서는 섬유 폭 설명이 `10 times wider`일 수 있다는 오류 지적과, 1m 길이 섬유가 고전 CPU 수준이라는 주장에 대해 지연(latency) 문제를 우려하는 회의론이 나왔다.
- KidKilobyte는 머리카락 두께가 보통 50~100 마이크론이라는 점을 들어 “머리카락보다 얇다”는 서술의 정확성을 의심했다.
- Practical-Hand203는 프로세서 다이를 1m로 늘리면 심각한 지연 문제가 생길 것이라며 “CPU 수준 처리” 주장에 의문을 제기했다.
- BuildwithVignesh는 Nature 게재 링크를 언급하며 동료평가(peer review)로 신뢰성이 높다는 점을 시사했다.

- **[[P] PerpetualBooster v1.1.2: GBM without hyperparameter tuning, now 2x faster with ONNX/XGBoost support](https://www.reddit.com/r/MachineLearning/comments/1qtr62c/p_perpetualbooster_v112_gbm_without/)** (Activity: 39): **Rust로 구현된 GBM인 PerpetualBooster v1.1.2가 하이퍼파라미터 튜닝을 제거하고 단일 ‘budget’ 파라미터로 학습을 구성하는 접근을 내세웠다. 최대 `2x` 학습 속도 향상, R 릴리스, ONNX 지원, ‘Save as XGBoost’(상호운용성), zero-copy Polars 지원 등이 포함되며, v0.10.0까지의 하위호환과 API 안정성을 언급한다. LightGBM + Optuna 대비 `100x` wall-time 가속을 보고하면서도 단일 실행에서 비슷한 정확도를 낸다는 벤치마크가 소개됐다. [GitHub](https://github.com/perpetual-ml/perpetual)** 사용자들은 속도 개선과 ‘budget’ 중심 접근을 흥미로워했지만, 기존 튜닝 방식과 달라 낯설다는 반응도 있었다.
- Alternative-Theme885는 하이퍼파라미터를 직접 만지지 않고 budget만 주는 경험이 신기하다고 언급했다.
- whimpirical은 SHAP과의 상호운용성(특성 기여도, PDP 생성 등) 관련 문서/추출 방법을 질문했다.

- **[[D] MSR Cambridge vs Amazon Applied Science internship, thoughts?](https://www.reddit.com/r/MachineLearning/comments/1qtgzbv/d_msr_cambridge_vs_amazon_applied_science/)** (Activity: 118): **PhD 학생이 MSR Cambridge와 미국의 Amazon Applied Science 인턴십 오퍼 중 선택을 고민하는 글이다. MSR Cambridge는 박사 연구와의 정합성과 논문 가능성이 크지만 보상이 낮고, Amazon은 보상이 높으며 프로젝트가 연구 지향이면 논문 기여 가능성이 있다고 한다. 장기적으로 미국 취업을 목표로 할 때 네트워킹(미국) vs 명성/연구 적합(MSR) 사이에서 고민한다는 내용이다.** 댓글은 대체로 MSR Cambridge를 지지하며, 명성과 연구 기회가 장기 커리어에 더 도움이 된다고 주장했다. Amazon의 업무 환경이 순수 연구에 덜 우호적일 수 있다는 회의론도 있었다.
- MSR Cambridge가 커리어에 큰 영향을 주는 명문 연구 그룹이라는 점이 강조됐다.
- Amazon Applied Scientist 역할은 MSR만큼 연구 중심이 아닐 수 있고, ‘PIP factory’라는 표현으로 압박적인 환경을 우려하는 의견이 나왔다.
- 초기 커리어에서는 즉각적인 보상보다 “이력서/경험”을 우선하라는 조언이 다수였다.

- **[We ran a live red-team vs blue-team test on autonomous OpenClaw agents [R]](https://www.reddit.com/r/MachineLearning/comments/1qsy793/we_ran_a_live_redteam_vs_blueteam_test_on/)** (Activity: 44): **자율 OpenClaw 에이전트를 대상으로, 인간 개입 없이 레드팀 공격자와 블루팀 방어자를 맞붙인 보안 테스트가 소개됐다. 공격자는 처음에 보안 파이프라인에 RCE 페이로드를 심는 사회공학 공격을 시도했으나 방어자가 차단했고, 이후 JSON 문서 메타데이터에 셸 확장 변수를 심는 간접 공격으로 성공했다고 한다. 목적은 “안전함을 주장”이 아니라 실제 실패 모드 식별이었다. 자세한 내용은 [full report](https://gobrane.com/observing-adversarial-ai-lessons-from-a-live-openclaw-agent-security-audit/)에서 확인할 수 있다.** 댓글에서는 2019년부터 Eliezer Yudkowsky, Scott Alexander 등에게 이론적으로 논의되던 공격 시나리오가 이제 실전에서 중요해졌다는 맥락이 언급됐다. 또한 OpenClaw의 영구 메모리 파일을 통한 메모리 인젝션이 큰 취약점이 될 수 있다는 경고도 나왔다.
- JWPapi는 OpenClaw의 `.md` 영구 메모리 파일이 일단 오염되면 이후 모든 행동에 영향을 주는 큰 공격 벡터라고 지적했다. 배포 전체를 프롬프트 인젝션 대상으로 보고, 자격증명 격리·지출 상한·통합별 블라스트 레디우스 분리 같은 완화책을 권했다. 관련 글은 [here](https://jw.hn/openclaw).
- sdfgeoff는 GPT-2 직후인 2019~2020년에 예측되던 공격 벡터가 이제 실무적으로 중요해졌다고 언급하며, 이론에서 실전으로 이동하는 흐름을 강조했다.
- Uditakhourii는 상세 보고서를 다시 공유했다: [here](https://gobrane.com/observing-adversarial-ai-lessons-from-a-live-openclaw-agent-security-audit/).

- **[Boston Consulting Group (BCG) has announced the internal deployment of more than 36,000 custom GPTs for its 32,000 consultants worldwide.](https://www.reddit.com/r/PromptEngineering/comments/1qsym86/boston_consulting_group_bcg_has_announced_the/)** (Activity: 70): **BCG가 전 세계 `32,000` 컨설턴트를 위해 `36,000`개 이상의 커스텀 GPT를 내부 배포했다는 소식이 소개됐다. 역할별 GPT가 내부 방법론 위에서 동작하고 프로젝트 메모리를 가지며 팀 간 공유된다는 점에서 “지식 노동의 인프라로서의 AI” 관점이 강조된다. 이는 많은 조직이 AI를 고립된 방식으로 쓰는 것과 대비된다고 한다. 이 전략은 커스텀 GPT를 만들고, 관리하고, 확장하는 데 초점을 둔다고 설명되며, 관리/운영 지원 도구로 [GPT Generator Premium](https://aieffects.art/gpt-generator-premium-gpt)이 언급됐다.** 댓글에서는 GPT가 혁신을 만들 수 있는지, ‘정형화된 답변(canned answers)’이 되지 않는지, 대규모 배포 기반 비즈니스 모델의 지속 가능성, 컨설팅 비용에 미칠 영향 등에 대한 회의론이 나왔다.

---

## AI Discord Recap

gpt-5.2가 작성한 “요약의 요약”

### 에이전트형 코딩 & 개발 툴링의 로컬-퍼스트 전환

- **Codex 데스크톱: macOS 에이전트 커맨드 센터**: OpenAI가 **macOS용 Codex 앱**을 에이전트 구축 커맨드 센터로 출시했으며, **Plus/Pro/Business/Enterprise/Edu**에서 사용할 수 있고, 제한 기간 **ChatGPT Free/Go**에서도 접근 가능하다고 소개됐다 ([“Introducing the Codex app”](https://openai.com/index/introducing-the-codex-app/) 및 [Codex landing page](https://openai.com/codex)).

- 런칭은 커뮤니티 워크플로 논의(에이전트 페어링, 멀티 에이전트 “커맨드 센터”)로 확산됐고, **$90,000 크레딧**이 걸린 **Codex App hackathon**도 [Cerebral Valley’s event page](https://partiful.com/e/nkiMrpg6CHhlUFvvvyfR)로 언급됐다.

- **LM Studio 0.4.1: Anthropic 호환 API로 로컬 GGUF/MLX 연결**: **LM Studio 0.4.1**이 **Anthropic `/v1/messages` 호환 API**를 추가해, base URL만 바꿔 **Claude Code 스타일 도구**를 로컬 **GGUF**/**MLX** 모델에 붙일 수 있다고 설명했다 ([“Using Claude Code with LM Studio”](https://lmstudio.ai/blog/claudecode)).

- 동시에 LM Studio는 서드파티 플러그인용 **TypeScript SDK**와 **OpenAI 호환 엔드포인트**도 밀고 있다 ([SDK link](https://lmstudio.ai/gdmka/openai-compat-endpoint)). 기존 에이전트 툴링을 재사용하면서 백엔드 모델 스택만 로컬로 바꾸는 패턴이 강화된다는 관찰이다.

- **Arena Mode 확산: Windsurf가 모델 평가를 게임화**: Windsurf가 Wave 14에서 좌우 비교 대결(Arena Mode, Battle Groups, “Pick your own”)을 출시했고, 일시적으로 Battle Groups를 0x 크레딧으로 제공했다 ([Windsurf download page](https://windsurf.com/download/editor)).

- 또한 LMArena의 [Text Arena](https://arena.ai/c/new?chat-modality=chat), [Code Arena](https://arena.ai/c/new?chat-modality=code)에서 **step-3.5-flash**, **qwen3-max-thinking** 같은 신규 엔트리를 추적하며, 정적 벤치마크보다 지속적 인간 투표 기반 선택이 강화된다는 흐름이 언급됐다.

### 모델 릴리스 & 벤치 경쟁(Kimi vs GLM vs Qwen)

- **Kimi K2.5 리더보드 질주**: Moonshot의 **Kimi K2.5**가 여러 제품 표면에 확산됐고, Perplexity Pro/Max는 구독자에게 이를 제공하면서 **미국 기반 추론 스택**에서 지연/신뢰성/보안 제어를 강화한다고 언급했다(공지 스크린샷: [https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130_203015.jpg](https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130_203015.jpg)).

- 커뮤니티 결과로 LMArena에서 **Kimi-K2.5-thinking**이 Code Arena **오픈 1위**, **전체 5위**에 올랐다는 이야기가 나왔고([Code Arena](https://arena.ai/c/new?chat-modality=code)), 툴 호출 신뢰성과 애그리게이터 경유 시 프로바이더 편차를 두고 토론이 이어졌다.

- **GLM-4.7 Flash: 작은 모델, 프론트엔드 강세**: **GLM-4.7 flash**가 특히 **대화형 웹사이트/프론트엔드** 작업에 강하다는 평가가 나왔고, reasoning 보존 및 인터리브(interleaved) 능력이 언급됐다. 논의는 [ggerganov’s post](https://x.com/ggerganov/status/2016903216093417540)를 중심으로 이어졌다.

- “thinking”을 제거하면 성능이 떨어지는지에 대한 논쟁과 함께, GLM-4.7을 **Claude Code(또는 유사 에이전트 툴링)**와 페어링해 “저렴한 실행 + 비싼 리뷰”로 쓰는 하이브리드 스택이 실용적이라는 의견도 나왔다.

- **신규 Arena 엔트리: step-3.5-flash & qwen3-max-thinking**: LMArena가 [Text Arena](https://arena.ai/c/new?chat-modality=chat)에 **step-3.5-flash**, [Code Arena](https://arena.ai/c/new?chat-modality=code)에 **qwen3-max-thinking**을 추가하며 새로운 비교 베이스라인을 제시했다.

### 학습 신호, dense reward, 그리고 새 아키텍처/데이터셋

- **이진 보상에서 dense supervision으로: RL이 “말 많아짐”**: 여러 커뮤니티에서 더 풍부한 post-training 신호로 수렴하는 흐름이 언급됐다. Unsloth 논의에서는 최종 답변 logprobs와 비이진 보상 등을 활용하고, 서술형 피드백을 dense supervision으로 바꾸는 방법으로 Jonas Hübotter를 인용했다 ([Hübotter thread](https://xcancel.com/jonashuebotter/status/2016950268462608665)).

- 실무적 쟁점은 “에이전트형 코딩 RL 학습에 쓸 수 있는 검증 가능한(verifiable) 데이터셋”의 부족으로 요약됐다. 멋진 보상 설계 아이디어와 재현 가능한 자동 평가 하네스 사이에 파이프라인 갭이 있다는 문제의식이다.

- **Complexity-Deep: MoE의 로드밸런싱 고통 없이 라우팅**: **Complexity-Deep (1.5B)**가 MoE 스타일 라우팅을 “load balancing loss 없이” 시도하는 Token-Routed MLP, Mu-Guided Attention, PiD Controller 등을 공개했다. 코드: [Complexity-ML/complexity-deep](https://github.com/Complexity-ML/complexity-deep) (base 기준 **20.6% MMLU** 보고).

- **Moltbook 데이터 덤프**: Moltbook 스크랩 데이터셋이 HF에 공개되며 **50,539 posts**, **12,454 AI agents**, **195,414 comments**, **1,604 communities**가 언급됐다 ([lysandrehooh/moltbook](https://huggingface.co/datasets/lysandrehooh/moltbook)). 에이전트 플랫폼의 보안 함의(머신 상의 auth token, 봇 진위 문제)도 함께 거론됐다.

### GPU/커널 엔지니어링: 더 빠른 어텐션, 더 나은 프로파일링, 더 기묘한 PTX

- **FlashAttention v3의 RDNA 지원**: FlashAttention 업데이트가 [flash-attention PR #2178](https://github.com/Dao-AILab/flash-attention/pull/2178)에서 **RDNA GPU 지원**을 추가하는 작업으로 언급됐다. AMD 카드에서 어텐션 병목을 줄이려는 시도다.

- 커뮤니티 톤은 “이런 비화려한 인프라 작업이 로컬 추론(inference)과 미세조정(fine-tuning)을 실제로 열어준다”는 쪽에 가까웠다. 오픈 웨이트 모델과 데스크톱 에이전트 툴링이 결합될수록 중요성이 커진다는 관찰이다.

- **Triton-Viz v3.0: 타일 커널 디버깅 강화**: **Triton-Viz v3.0**이 Triton과 Amazon NKI를 포함한 더 넓은 프로파일링 지원, OOB 접근 sanitizer, 비효율 루프를 잡는 profiler 등을 포함해 출시됐다(Discord 링크: [https://discord.com/channels/1189498204333543425/1225499141241573447/1467634539164602563](https://discord.com/channels/1189498204333543425/1225499141241573447/1467634539164602563)).

- 또한 **triton-puzzles**와 공유 Colab 노트북으로 연결되었고 ([Colab](https://colab.research.google.com/drive/1-P2QBqCORGGaJ3THtjlyYDV7m9RRrRup?usp=sharing)), 유지보수 속도를 위해 [srush/Triton-Puzzles](https://github.com/srush/Triton-Puzzles)를 GPU Mode org로 옮기자는 언급도 있었다.

- **sm120: TMA + mbarrier vs cp.async, 그리고 cuBLAS의 sm80 커널**: **sm120**에서 큰 매트릭스 셰이프에서는 TMA + mbarrier 구현이 `cp.async`를 근소하게 앞설 수 있다는 실험이 공유됐고, cuBLAS가 최신 메커니즘이 있어도 **sm80 커널**을 돌리는 듯하다는 관찰이 언급됐다.
- 한 CUDA/PTX 데드락은 MMA 뒤에 다음 TMA prefetch 전에 `__syncthreads()`를 넣어 해결됐고, 행(hang)을 성능 이득으로 바꿨다는 사례가 공유됐다.

### 보안, 결정성, 그리고 에이전트 오동작(실전 편)

- **프롬프트 인젝션 방어 경쟁: 임베딩 + 문법 제약 디코딩**: 레드팀 연습용 구조화 사이트 [“Adversarial Design Thinking”](https://luisladino.github.io/adversarial-design-thinking/)가 공유되었고, 프롬프트 인젝션 완화책을 논의하는 계기로 쓰였다.

- 제안된 “belt + suspenders” 방어는 임베딩 기반 필터링과 Grammar Constrained Decoding을 결합해, 입력만 단속하는 것이 아니라 출력 공간을 제한해 인젝션 표면을 줄이려는 목적을 명시했다.

- **결정적 추론(deterministic reasoning)과 “strict mode” 열풍**: OpenAI 및 OpenRouter 논의에서 결정성/재현성/추적가능성을 요구하는 목소리가 커졌다. 고정 구조를 강제하고 **32D 통계 벡터 트레이스**를 내는 결정적 추론 엔진을 제안했다는 언급도 있었으나 공개 링크는 없었다.

- OpenRouter에서는 response healing에 대한 회의론과, 툴 호출/출력을 예측 가능하게 하는 **strict mode** 요구가 나왔다. 툴 설명/예시를 더 잘 제공하면 툴 호출 정확도가 오른다는 제안도 함께였다.

- **OpenClaw: 멋진 트릭, 무서운 비용, “2/100 보안”**: OpenClaw 관련 경고가 반복됐다. OpenRouter 사용자들은 크레딧을 빠르게 소모할 수 있다고 보고했으며(Claude Max 구독을 탕진했다는 사례 포함), OpenAI 서버에서는 OpenClaw가 **2/100**을 받았다는 보안 평가 링크가 공유됐다 ([Perplexity result](https://www.perplexity.ai/discover/you/openclaw-ai-assistant-scores-2-AtVX4UYVQMutCst63QBy5g)).

- 또한 로컬 모델로 디바이스를 제어하는 “works on my machine”류 이야기와 함께, 툴 권한, 모더레이션/거절(refusal), 관측가능성, human-in-the-loop 게이트 필요성이 운영 관점에서 재차 강조됐다.
