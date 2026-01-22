---
title: "OpenEvidence, 120억달러 가치로 투자 유치"
summary:
  - "OpenEvidence가 120억달러 투자 유치"
  - "Anthropic이 Claude 헌법을 CC0로 공개"
  - "Podium이 AI 에이전트 ARR 1억달러 주장"
  - "AirLLM이 8GB로 405B 추론(inference) 제시"
  - "Runpod이 $120M ARR로 GPU 클라우드 성장"
date: 2026-01-21
originalUrl: "https://news.smol.ai/issues/26-01-21-agent-labs-are-all-you-need/"
hasHeadline: true
headline: "OpenEvidence, 120억달러 가치로 투자 유치"
tags:
  - OpenEvidence
  - Anthropic
  - Claude
  - MCP
  - AirLLM
isFeatured: true
---

## 헤드라인: OpenEvidence, 120억달러 가치로 투자 유치

신규 데카콘(decacorn)급 투자 유치는 타이틀 스토리로 다룬다는 ‘느슨한 규칙’이 있는데, [multiple sources](https://www.cnbc.com/2026/01/21/openevidence-chatgpt-for-doctors-doubles-valuation-to-12-billion.html)에 따르면 OpenEvidence가 120억달러($12B) 규모로 투자 유치를 했고 작년 대비 12배가 됐다. 다만 “CEO Daniel Nadler는 CNBC에 OpenEvidence가 미국 의사의 40%가 사용하며, 지난해 연간 매출이 1억 달러를 넘었다고 말했다.”는 대목은 매출 대비 120배(120x) 멀티플(multiple)이라는 점에서 이례적이라는 지적이 나왔다.

참고: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [https://news.smol.ai/](https://news.smol.ai/) · 피드백: [@smol_ai](https://x.com/Smol_AI)

---

## AI Twitter Recap

### 프론티어 모델 거버넌스: Anthropic의 새 Claude 헌법(CC0)과 반응

- **공개 내용**: Anthropic이 Claude의 원하는 행동/가치(behaviors/values)를 설명하는 새 “헌법(constitution)”을 공개하고, 학습(training)에 직접 사용된다고 밝혔다. 전체 헌법은 재사용/개작을 장려하기 위해 **CC0 1.0**으로 공개했다 ([announcement](https://twitter.com/AnthropicAI/status/2014005798691877083), [CC0 link](https://twitter.com/AnthropicAI/status/2014005815376568780)). 또한 내부+외부 전문가의 의견으로 계속 다듬어지는 **살아있는 문서(living document)**라고 설명했다 ([follow-up](https://twitter.com/AnthropicAI/status/2014005813157720283)).
- **커뮤니티 해석**: Amanda Askell은 작업 진행 중(work-in-progress)이라며 피드백을 요청했다 ([Askell](https://twitter.com/AmandaAskell/status/2014010171081581048)). “모델이 어떻게 되어야 하는지”를 말하는 문서로 다시 모델을 학습시키는 ‘메타(meta)’한 순환성(circularity)을 지적하는 반응도 있었다 ([scaling01 on Opus reflecting on circularity](https://twitter.com/scaling01/status/2014014692004421653)). 또 “얼라인먼트(alignment) 시그널링” vs 실질적 위해 감소(harm reduction), PR 지향 페르소나(persona) 행동을 내장(bake in)하는지에 대한 논쟁도 이어졌다 ([nearcyan](https://twitter.com/nearcyan/status/2014009518150054035), [NickEMoran question](https://twitter.com/NickEMoran/status/2014077605373260204)).
- **실무적 엔지니어링 파장**: Anthropic은 내부 **성능 엔지니어링 테이크홈(performance engineering take-home)** 과제가 Opus 4.5로 풀릴 수준이 되면서 채용 평가(hiring evaluation)를 재설계해야 했다고 공유했다. “모델이 스크리닝 과제를 따라잡는다”의 구체적 사례로 제시됐다 ([Anthropic Eng](https://twitter.com/AnthropicAI/status/2014143403144200234), [trishume](https://twitter.com/trishume/status/2014144787092562160)).

### 프로덕션 에이전트: ‘AI 직원’(Podium)부터 UX·메모리·평가까지

- **Podium의 “Jerry”(에이전트 비즈니스 유닛)**: Podium은 **$100M+ AI agent ARR**과 **10k+ agents** 배포를 주장하며, SMB의 인력 제약(야간 리드, 부재중 전화, 이직)을 배경으로 “소프트웨어를 팔지 말고, 기존 제품을 엔드투엔드로 쓰는 **AI 오퍼레이터(operator)**를 팔자”는 내러티브를 제시했다 ([Eric Rea](https://twitter.com/ericwilliamrea/status/2013980401635582277)). Tom Loverro는 번다운(burn down) **$95M → $0**, AI ARR **$0 → $100M**(약 21개월) 같은 이사회 레벨 지표를 언급하며 OpenAI 케이스 스터디를 링크했다 ([Tom Loverro](https://twitter.com/tomloverro/status/2014011044210106406), [Garry Tan](https://twitter.com/garrytan/status/2014005103728943566)).
- **메모리·장기 실행 병목**: 메모리(memory)와 장기(long-horizon) 신뢰성이 에이전트의 병목으로 부상한다는 문제의식이 강조됐다.
- **ACC(Agent Cognitive Compressor)**: “컨텍스트(context)가 많다고 더 좋은 에이전트가 되는 건 아니다”라며 대화록 재생(transcript replay)과 단순 검색(retrieval)을 비판하고, 스키마 제약(schema-constrained) 커밋(commit)으로 경계가 있는 “Compressed Cognitive State”를 유지해 장기 실행에서 드리프트(drift)/환각(hallucination)을 낮춘다고 주장했다 ([dair_ai](https://twitter.com/dair_ai/status/2014000799245107339)).
- **MCP-SIM 멀티 에이전트 루프**: 물리 프롬프트의 불명확함을 해소하고 코드 생성→실행→오류 진단→다국어 설명까지 도는 “자기개선(self-improving) 멀티 에이전트” 워크플로를 제시했으며, 원샷(one-shot) GPT 6/12 대비 **12/12** 해결을 주장했다 ([omarsar0](https://twitter.com/omarsar0/status/2013998285040836662)).
- **APEX-Agents(에이전트 벤치마킹)**: Google Workspace에서 장기(long-horizon) “professional services” 작업을 평가하며, 초기 Pass@1 리더보드가 낮은 편이라고 공유됐다 (Gemini 3 Flash High **24.0%**, GPT-5.2 High **23.0%**, Claude Opus 4.5 High **18.4%**) ([BrendanFoody](https://twitter.com/BrendanFoody/status/2014028956752568356)).
- **prinzbench(법률 리서치+검색)**: 33문항·수동 채점·3회 실행의 비공개 벤치마크를 소개하며, 실패 모드가 “search”라고 주장했다. GPT-5.2 Thinking이 **50%**를 간신히 넘고 Gemini 모델들이 근접하며, Sonnet/Opus 4.5는 Search에서 **0/24**를 기록했다고 했다 ([deredleritt3r](https://twitter.com/deredleritt3r/status/2013979845378580684)).
- **컨텍스트 레이어 필요성**: 모델 성능만큼이나 “컨텍스트 레이어”와 프로덕션 스캐폴딩(거버넌스, 인증(auth), 관측/추적(observability))이 중요하다는 논의가 이어졌고, 아래의 Prefect Horizon 및 MCP 서버 베스트 프랙티스와 연결된다.

### 에이전트 플랫폼과 ‘컨텍스트 레이어’: MCP, Skills, Prefect Horizon, LangChain Deep Agents

- **Prefect Horizon(MCP → 플랫폼)**: Prefect는 “컨텍스트 레이어”를 에이전트와 기업 도구/데이터를 잇는 인터페이스로 정의하며, MCP는 서버를 만드는 방법을 설명하지만 조직 규모의 **배포/거버넌스(deploy/govern)**까지는 다루지 못한다고 주장했다. Horizon은 관리형 배포, 레지스트리/카탈로그, RBAC+감사 로그(audit logs)를 갖춘 게이트웨이, “비즈니스 사용자를 위한 에이전트형 인터페이스” 등을 내세웠다 ([jlowin](https://twitter.com/jlowin/status/2014023606380957754)).
- **MCP 서버 설계 가이드**: Phil Schmid는 “Skills가 MCP를 대체한다”는 주장에 반박하며, 문제는 MCP가 아니라 **나쁜 서버(bad servers)**라고 강조했다. 결과(outcome) 중심 도구 설계, 제약(constraints)이 있는 타입드(flat) 인자, docstring/에러를 에이전트 지침으로 활용 등 권고를 제시하며 Skills와 MCP는 상보적이라고 봤다 ([philschmid](https://twitter.com/_philschmid/status/2014016583706829054)).
- **CopilotKit 딥 에이전트 튜토리얼**: 이력서 수집→스킬 추출→웹 검색을 포함한 서브에이전트→스트리밍 UI까지의 **풀스택 Deep Agent 앱**을 만드는 튜토리얼을 공개하며, “UI/애플리케이션 레이어 부재” 문제를 겨냥했다 ([CopilotKit](https://twitter.com/CopilotKit/status/2013997128683856159)).
- **LangChain Agent Builder GA**: LangChain은 **Agent Builder GA**와 Tavily, PagerDuty, Box 등 도메인 파트너가 참여한 **템플릿 라이브러리**를 출시해 “프롬프트→에이전트” 마찰을 줄이려 했다 ([LangChain](https://twitter.com/LangChain/status/2014034320256880768)).
- **Deep Agents: “agents are just folders”**: 에이전트는 폴더라는 프레이밍으로 이식성/배포성을 강조하며, CLI 플로로 에이전트를 패키징·다운로드·실행할 수 있다고 했다 ([hwchase17](https://twitter.com/hwchase17/status/2014076509208629386), [Vtrivedy10 demo](https://twitter.com/Vtrivedy10/status/2014074890458980736), [LangChain_OSS](https://twitter.com/LangChain_OSS/status/2014075587137048882)). Sydney Runkle은 **컨텍스트 격리를 위한 서브에이전트(subagents)**와 **관련 있을 때만 로드되는 스킬(skills)**이라는 두 패턴을 강조했다 ([sydneyrunkle](https://twitter.com/sydneyrunkle/status/2014060287746265535)).
- **LangSmith + 분석(analytics)**: LangSmith 트레이스가 디버깅뿐 아니라 **제품 분석(product analytics)**의 기반이 될 수 있다는 (“agent traces → product analytics”) 스레드가 공유됐다 ([SoftwareWatcher](https://twitter.com/SoftwareWatcher/status/2013972269106684060)).

### 추론(inference)·시스템: 저VRAM 서빙과 오픈 스택, “추론이 전장이다”

- **AirLLM(초저VRAM 레이어 스트리밍)**: AirLLM은 레이어를 **순차 로딩(load → compute → free)**하고 필요 시 압축(compression)하는 방식으로 VRAM을 극단적으로 줄이는 접근을 제시했다. HF 유사 API, CPU/GPU, Linux/macOS 지원을 내세웠고, 매우 큰 모델도 낮은 VRAM에서 가능하다고 주장했다 ([LiorOnAI](https://twitter.com/LiorOnAI/status/2014005554948047122), [repo](https://twitter.com/LiorOnAI/status/2014005556369826212)). 다만 “8GB에서 405B” 같은 주장은 “원리상 가능(대규모 페이징)”으로 보되 처리량/지연 및 구현 난이도 제약이 크다는 코멘트가 뒤따랐다.
- **‘진짜 오픈 AI’의 조건**: Modal은 유능한 오픈 모델과 빠르고 튜닝 가능한 오픈소스 추론 엔진이 갖춰지며 생태계의 빌딩 블록이 마련됐다고 주장했고, 대규모 서빙을 위한 프로덕션 스택/패턴을 공유했다 ([charles_irl](https://twitter.com/charles_irl/status/2014005582093832202)).
- **추론 버그와 로컬 스택**: llama.cpp가 **GLM 4.7 Flash GGUFs**에 영향을 주던 라우팅/함수 이슈를 수정했고, 설정 업데이트에는 `scoring_func: sigmoid`가 언급됐다. 또한 Unsloth 워크플로로 양자화(quantization)된 GLM을 활용해 작은 게임을 만드는 사례도 공유됐다 ([danielhanchen](https://twitter.com/danielhanchen/status/2013974463856181689)). GLM KV-cache 메모리 동작과 프레임워크가 LoRA 기반 접근을 놓치고 있는지에 대한 논의도 있었다 ([TheZachMueller](https://twitter.com/TheZachMueller/status/2014011037025001577)).
- **에이전트 인프라 위생**: “빠른 검증(fast validation)이 모든 에이전트를 더 효과적으로 만든다”(pre-commit 훅, env var 문서화, CI 대기 축소 등)는 주장이 사실상 “에이전트 생산성을 위한 소프트웨어 공급망(supply chain)” 논지로 공유됐다 ([matanSF](https://twitter.com/matanSF/status/2014039273721213256)).
- **상수 연산 컨텍스트(constant-compute contexts)**: NVIDIA의 “TTT-E2E”(컨텍스트를 데이터로 보고 온라인으로 가중치를 업데이트) 개념을 요약한 스레드가 공유됐고, 긴 컨텍스트에서도 지연을 일정하게 유지할 수 있으나 “needle-in-haystack” 리콜은 약해질 수 있다는 점이 언급됐다. 정확한 편집이 중요한 에이전트 워크로드와 관련성이 지적됐다 ([sdrzn](https://twitter.com/sdrzn/status/2014128642503381276)).
- **하드웨어 병목 프레이밍**: “지능(intelligence) → 추론(inference)”으로의 전환과 컴퓨트/메모리 공급망의 중요성이 반복적으로 언급됐고 ([saranormous](https://twitter.com/saranormous/status/2014206109846806707)), “공장을 더 지으면 된다”는 서사보다 **HBM 검증(qualification) 사이클**이 진짜 공급 제약이라는 딥다이브도 공유됐다 ([MarkosAAIG](https://twitter.com/MarkosAAIG/status/2014079461768003608)).

### 코드 생성은 싸지고, 이해·검증이 병목(Devin Review, Copilot CLI, Claude Code)

- **Devin Review(리뷰 UX)**: Cognition이 **Devin Review**를 출시하며, “슬롭(slop)”을 줄이기 위한 PR 읽기 인터페이스(중요도 기반 diff 재정렬, 중복/복사 코드 식별, 채팅 레이어, GitHub 코멘트 연동)를 제시했다. URL에서 `github`→`devinreview`로 바꾸거나 `npx` CLI로 접근할 수 있다 ([launch](https://twitter.com/cognition/status/2014079905755955592), [usage modes](https://twitter.com/cognition/status/2014079917139566990), [URL tip](https://twitter.com/cognition/status/2014113266788667571)). 즉시 diff 밖의 이슈도 잡아냈다는 보고가 있었다 ([mcparadip](https://twitter.com/mcparadip/status/2014093822704202002), [BraceSproul](https://twitter.com/BraceSproul/status/2014089228951625979)).
- **메타 포인트(생성 vs 검증)**: 병목이 작성에서 **리뷰/이해/테스트**로 옮겨갔으며, 다음 세대 SWE 도구는 “팔 길이 거리의 에이전트”만 돌리는 것이 아니라 인간의 이해 루프를 가속해야 한다는 주장이 이어졌다 ([walden_yan](https://twitter.com/walden_yan/status/2014085360826089852), [ScottWu46](https://twitter.com/ScottWu46/status/2014094461505339651), [theodormarcu](https://twitter.com/theodormarcu/status/2014102090520600613)).
- **CLI 에이전트 진화**: GitHub Copilot CLI가 정교한 질문을 던질 수 있는 `askUserQuestionTool`을 추가했다(예: 복잡한 rebase). 순수 자동완성보다 상호작용형 CLI 코파일럿 트렌드를 시사한다 ([Evan Boyle](https://twitter.com/_Evan_Boyle/status/2014012076881064173)).
- **Claude Code 도입 경험담**: 창업자들이 Claude Code로 “2명이 10명처럼 만든다”는 경험담을 공유했다 ([alexalbert__](https://twitter.com/alexalbert__/status/2014047943234560234)). 반면 스킬 재로드가 단순 “CLAUDE.md 재읽기” 플로 대비 퇴행적이라는 불만도 있었고 ([corbtt](https://twitter.com/corbtt/status/2014037092452671619)), Claude Code 인스턴스를 다중으로 확장해 준-사회처럼 운영하다 거버넌스 실패를 겪었다는 “multi-agent sprawl” 사례도 공유됐다 ([voooooogel](https://twitter.com/voooooogel/status/2014189072647078053)).

### 비디오·멀티모달: 평가, 출시, 검색 확장

- **비디오 평가 인프라**: **Video Arena**가 웹으로 공개되어 약 15개 프론티어 비디오 모델을 1:1로 생성 비교하고, 커뮤니티 투표로 리더보드를 구동할 수 있게 됐다 ([arena](https://twitter.com/arena/status/2014035528979747135)).
- **모델 출시**: Runway의 **Gen-4.5 Image→Video**는 일관성과 내러티브를 강조했으며, 초기 사용자들은 비디오 모델의 가장 좋은 평가 방법으로 “스토리 만들기”를 강조했다 ([runwayml](https://twitter.com/runwayml/status/2014090404769976744), [c_valenzuelab](https://twitter.com/c_valenzuelab/status/2014105905088856411)).
- **오픈 보이스 시스템**: Qwen은 완전 오픈소스 실시간 음성 시스템으로 소개된 **Chroma 1.0**에서의 사용 사례를 강조했다 ([Alibaba_Qwen](https://twitter.com/Alibaba_Qwen/status/2013997092814139744)).
- **검색 확장(retrieval-time scaling) / late interaction**: **ColBERT 스타일의 멀티벡터(multi-vector) 검색**이 더 큰 임베딩 모델보다 세밀한 의도를 보존하며 우수할 수 있다는 주장이 이어졌다. Mixedbread는 **17M** 오픈소스 ColBERT가 LongEmbed에서 **8B** 임베딩 모델을 이겼고, **1B+ 문서**를 **<50ms p50**로 서빙 중이라고 했다 ([mixedbreadai claim](https://twitter.com/mixedbreadai/status/2014062123358548017), [prod numbers](https://twitter.com/mixedbreadai/status/2014062110993687002)). TurboPuffer도 초대규모 ANN(“웹 전체 100B+ 벡터 인덱싱”)을 밀고 있다 ([turbopuffer](https://twitter.com/turbopuffer/status/2014063666262688191)). 메타 트렌드는 “문서당 1벡터”에서 **토큰/멀티벡터**로 이동 중이며, 이를 위해 인프라 공동 설계가 필요하다는 것이다.

### 주요 트윗(engagement 기준)

- **교육에서의 Gemini**: Google이 Gemini 앱에 **풀 길이(full-length) 온디맨드 SAT 모의고사**를 넣었고(**The Princeton Review**와 파트너십), 즉각 피드백을 제공한다고 발표했다 ([Google](https://twitter.com/Google/status/2014020819173687626), [Sundar Pichai](https://twitter.com/sundarpichai/status/2014067664503668873)). 또한 초안 작성/개선을 안내하는 “Writing Coach”로 시작하는 **Gemini × Khan Academy** 파트너십도 발표했다 ([Google](https://twitter.com/Google/status/2014082428957045007)).
- **Claude ‘Constitution’ 공개**: Anthropic이 Claude 학습에 직접 사용된 새 헌법을 공개했고, 전체 텍스트를 **CC0 1.0**으로 배포했다 ([Anthropic](https://twitter.com/AnthropicAI/status/2014005798691877083), [CC0 release](https://twitter.com/AnthropicAI/status/2014005815376568780), [Amanda Askell](https://twitter.com/AmandaAskell/status/2014010171081581048)).
- **AirLLM(극저VRAM 추론)**: 레이어 단위 로딩으로 **4GB VRAM에서 70B**, “**8GB에서 405B Llama 3.1**”까지 가능하다고 주장했고, repo 링크도 제공했다 ([LiorOnAI](https://twitter.com/LiorOnAI/status/2014005554948047122), [repo](https://twitter.com/LiorOnAI/status/2014005556369826212)).
- **에이전트의 ‘실제 비즈니스’**: Podium이 **24개월 미만에 $100M+ AI agent ARR**, “프로덕션에 10,000+ 에이전트”를 보고했으며, 챗봇이 아닌 “AI 직원”(Jerry) 프레임으로 설명했다 ([Eric Rea](https://twitter.com/ericwilliamrea/status/2013980401635582277), [Garry Tan](https://twitter.com/garrytan/status/2014005103728943566)).
- **Runway Gen-4.5 Image→Video**: Runway가 **Gen-4.5 Image→Video**를 출시하며 더 긴 스토리, 카메라 컨트롤, 내러티브 일관성을 강조했다 ([runwayml](https://twitter.com/runwayml/status/2014090404769976744), [c_valenzuelab](https://twitter.com/c_valenzuelab/status/2014094466269794663)).
- **OpenAI 제품/UI 및 조직 변화**: ChatGPT Atlas에 **탭 그룹(tab groups)**이 추가됐고 ([OpenAI](https://twitter.com/OpenAI/status/2014095512874655867)), The Information은 엔터프라이즈/커머셜/광고 리더십 배치를 포함한 리오그를 보도했다 ([Steph Palazzolo](https://twitter.com/steph_palazzolo/status/2014100920435462424)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- TO BE COMPLETED

### Less Technical AI Subreddits

- /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- TO BE COMPLETED

---

## AI Discord Recap

gpt-5.2가 요약한 “요약의 요약”

### 추론 툴체인 현실 (GLM-4.7-Flash, llama.cpp, vLLM, Ollama)

- **GLM-4.7-Flash의 Flash Attention 문제**: 여러 커뮤니티에서 **GLM-4.7-Flash**에서 **Flash Attention**이 CPU 폴백/버그를 유발하고 처리량이 크게 떨어진다는(예: LM Studio에서 **2.8 t/s**) 보고가 나왔다. [llama.cpp PR #18953](https://github.com/ggml-org/llama.cpp/pull/18953)가 널리 반영되기 전까지 FA를 끄라는 가이드가 공유됐다.
- **재업로드 및 파라미터 안내**: llama.cpp 수정 후 모델이 **재업로드**됐고, 다시 내려받은 뒤 [Z.ai’s GLM-4.7-Flash-GGUF model card parameters](https://huggingface.co/unsloth/GLM-4.7-Flash-GGUF)를 따르라는 안내가 나왔다. 올바르게 설정하면 출력이 “훨씬 좋아질 것”이라는 보고도 있었다.
- **Ollama vs GGUF 템플릿 호환성**: 일부 **GGUF 양자화(quant)**가 **채팅 템플릿(chat template) 비호환성**으로 **Ollama**에서 깨진다는 경험담이 공유됐고, Unsloth 쪽에서는 지원이 따라올 때까지 [official Ollama models](https://ollama.com/)를 쓰라고 반복적으로 권했다.
- **운영적 함의**: *“지원에는 시간이 걸린다”*는 메시지와 함께, 추론 엔진 전반이 안정화되기 전까지는 공식 아티팩트(artifacts)로 표준화하는 것이 실용적이라는 의견이 나왔다.
- **vLLM 업데이트로 해결된 이슈**: Unsloth 헬프 채팅에서 난해한 문제가 **vLLM 업데이트** 후 사라지며 *“Oh bruh that was the problem”* 같은 반응이 나왔다.
- **의존성 버전 고정 제안**: 향후 업스트림 변경으로 파이프라인이 갑자기 깨지지 않도록 의존성 버전을 고정(pinning)하자는 제안이 이어졌다.

### 평가 플랫폼 및 제품 롤아웃 (LMArena + 멀티모달 안정성)

- **Video Arena 공개(3회/일 제한)**: LMArena가 [lmarena.ai/?chat-modality=video](https://lmarena.ai/?chat-modality=video)에서 **Video Arena**를 정식 공개했는데, 24시간 기준 **3회 생성** 제한이 있고 **Battle 모드만** 지원(모델 직접 선택 불가)한다.
- **UX 불만**: “비디오가 라이브”인 점은 반겼지만, *slot machine* 같은 UX가 통제된 테스트를 막는다는 불만이 나왔다.
- **Text Arena 5M 투표**: LMArena의 **Text Arena**가 커뮤니티 투표 **500만**을 돌파했으며, [their milestone social clip](https://cdn.discordapp.com/attachments/1343296395620126911/1463271605697511485/5M_votes_social_post_3.mp4)로 이를 강조했다.
- **‘현실 A/B’ 프레이밍**: 정형 벤치마크 변화가 작아도, 대규모 실사용 A/B가 모델 인식을 점점 더 좌우한다는 관점이 공유됐다.
- **Gemini 3 Pro Image Preview·Nano Banana Pro 불안정**: LMArena 사용자들은 **Gemini 3 Pro Image Preview** 불안정과 **Nano Banana Pro**의 *“Something went wrong”* 크래시를 보고했고, **Google-side** 이슈로 의심되며 **6+ hours** 지속된 경우도 있었다.
- **그럼에도 계속 사용**: 불안정하지만 특정 프롬프트 목표를 꾸준히 맞추는 모델로 묘사되며, 다운타임/에러에 불평하면서도 계속 쓰게 된다는 반응이 나왔다.

### 에이전트·개발 툴링: MCP, Cursor, DSPy RLMs, 코딩 어시스턴트 확산

- **MCP Inspector 재인증 불가(401)**: **MCP Inspector**가 **401**에서 재인증(re-auth)을 못 하는 문제가 보고됐고, 리다이렉트(redirect) 동안 `resourceMetadata`를 유지하는 SDK 버그로 추적됐다 ([inspector issue #576 comment](https://github.com/modelcontextprotocol/inspector/issues/576#issuecomment-3766294454)).
- **현재 우회책**: Inspector 경로가 세션 중 복구가 매끄럽지 않아, 초기 연결은 **VS Code**에 의존하라는 안내가 나왔다.
- **RLMs vs 코딩 에이전트(호라이즌 문제)**: DSPy 논의에서 **RLMs**가 코드/심볼릭 호출로 입력·출력·호라이즌(horizon)을 외부화할 수 있다는 주장과 함께 [the referenced X thread](https://x.com/lateinteraction/status/2013658521246535892)가 공유됐다.
- **실무 시사점**: 심볼(symbol) 접근 방식에 대한 다이어그램 요구가 있었고, RLM에 ripgrep/시맨틱 검색 같은 툴을 쥐여줄지 vs 스스로 검색 코드를 쓰게 할지 논쟁이 이어졌다.
- **Cursor의 MCP/확장(extensions) 국면**: 테스트용 [Playwright MCP](https://playwright.dev/)를 두고 TDD 흐름에서 성패가 엇갈렸으며, 확장 개발은 **VS Code** 수준의 역량을 따라가야 한다는 결론이 제기됐다.
- **가격 정책 변화**: **500 request plan**이 **Sept 2025**에 종료됐고, 새 가격으로 전환하면 ‘옵트아웃 유예’가 사라져 “try it”이 곧 커밋이 된다는 지적이 나왔다.

### GPU/커널 엔지니어링 경쟁 심화

- **Anthropic 성능 테이크홈이 스포츠화**: GPU MODE와 tinygrad 커뮤니티가 Anthropic의 [original_performance_takehome](https://github.com/anthropics/original_performance_takehome/)를 두고 기록을 공유했으며, 커뮤니티 **2200 cycles**, Claude Code 세션에서 Claude Opus 4.5가 **1790 cycles** 같은 수치가 언급됐다.
- **tinygrad의 ‘장난감 VLIW’ 아이디어**: 장난감 **VLIW machine**용 백엔드를 추가해 풀자는 논의가 있었고, `PCONTIG=2`, `UPCAST`, `DEVECTORIZE=2` 같은 노브(knob)를 언급하며 벡터 명령 유지·스케줄 최적화를 논의했다.
- **Torch 메인테이너의 AI PR 홍수**: GPU MODE의 torch 채팅에서 저품질 **AI-generated PR** 유입이 늘어, 신규 기여자 게이팅과 인간이 보기 전 자동 트리아지(triage) 필요성이 거론됐다.
- **리뷰 대역폭 최소 기준**: **Cursor Bugbot** 같은 봇을 쓰자는 제안과 함께 ([Bugbot · Cursor](https://share.google/P0PGYM8tiRAc2NOsq)), “Claude/Pangram 먼저 돌리기” 같은 분류기(classifier) 스타일 도구를 최소 기준으로 두자는 의견도 나왔다.
- **Triton 오류 디버깅**: 커스텀 **Triton 2D conv** 커널에서 특정 shape에서 오류가 ~**1e-6**→~**1e-2**로 커지는 문제를 디버깅하며 [Pastebin repro](https://pastebin.com/2ejn2QW2)를 공유했고, Blackwell 기능 활용도도 논의됐다.
- **Cute 레이아웃 대수(layout algebra)**: **Cute**의 레이아웃 대수 딥다이브가 공유됐고, “괜찮은 커널을 쓰려면 레이아웃 대수 리터러시가 필요하다”는 취지로 [Categorical Foundations for Cute Layouts](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/)가 인용됐다.

### 컴퓨트 경제·인프라 비즈니스 (Runpod, GPU 시장, 모델 가격)

- **Runpod $120M ARR**: Latent Space는 Runpod이 Reddit 포스트에서 출발해 4년 만에 **$120M ARR**에 도달했다고 하며 [TechCrunch](https://techcrunch.com/2026/01/16/ai-cloud-startup-runpod-hits-120m-in-arr-and-it-started-with-a-reddit-post/)와 [Reddit thread](https://www.reddit.com/r/LocalLLaMA/comments/1qib2ks/runpod_hits_120m_in_arr_four_years_after_launching/)를 링크했다.
- **‘빌더용 GPU 클라우드’ 검증**: 가격 압박이 커지는 와중에도 “빌더를 위한 GPU 클라우드”가 단순 하이프가 아니라 지속 가능한 니치라는 해석이 나왔다.
- **Lightning AI + Voltage Park 합병**: William Falcon과 Ozan Kaya 주도로 진행된 Lightning AI–Voltage Park 합병이 Latent Space에서 논의됐고, [Lightning’s post](https://lightning.ai/blog/lightning-ai-voltage-park-merger-ai-cloud)가 공유됐다.
- **Runpod 경쟁 구도 관측**: 조용한 인수인지에 대한 추측과 함께, “managed GPU infra” 통합(consolidation) 흐름 속 잠재적 Runpod 경쟁자로 해석됐다.
- **2026 GPU 가격 공약·마켓플레이스 난립**: Hugging Face 사용자들은 Voltage의 초저가 2026 렌탈 주장(예: **8× A100 80GB $6/hr**, **2× RTX 5090 $0.53/hr**)과 **OpenAI-compatible API**, “140+ models”를 [VOLTAGEGPU’s X post](https://x.com/VOLTAGEGPU/status/2013760631778713892)에서 공유했다.
- **Spheron AI 마켓플레이스**: 또 다른 플레이어로 [Spheron AI’s GPU marketplace](https://www.spheron.ai/)가 등장해 **H100/H200/B200/A100**를 하이퍼스케일러 대비 **40–60%** 저렴하게 제공한다고 주장하며, 공급 측 분절화와 마진 압박 심화를 시사했다.
