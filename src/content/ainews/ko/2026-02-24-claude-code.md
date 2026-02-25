---
title: "OpenAI, Responses API에 GPT-5.3-Codex 출시"
summary:
  - "OpenAI가 GPT-5.3-Codex를 출시"
  - "Qwen 3.5 Medium 시리즈 공개"
  - "Anthropic, Claude Code 원격 제어 도입"
  - "Cursor, “demos not diffs”로 전환"
  - "Mercury 2, ~1,000토큰/초 강조"
date: 2026-02-24
originalUrl: "https://news.smol.ai/issues/26-02-24-everyone-launching-everything-everywhere-all-at-once/"
hasHeadline: true
headline: "OpenAI, Responses API에 GPT-5.3-Codex 출시"
tags:
  - OpenAI
  - Qwen
  - Claude
isFeatured: true
---

## 헤드라인: OpenAI, Responses API에 GPT-5.3-Codex 출시

OpenAI가 **Responses API**를 통해 모든 개발자에게 **GPT-5.3-Codex**를 출시했다 ([announcement](https://x.com/OpenAIDevs/status/2026379092661289260)). 트윗 기준 가격은 [@scaling01](https://x.com/scaling01/status/2026379113099862018)이 **$1.75 input / $14 output**로 언급했다.

에이전트가 “현실의 파일(real-world files)”을 직접 ingest할 수 있도록 **파일 입력 타입(docx/pptx/csv/xlsx 등)**도 확장했다 ([tweet](https://x.com/OpenAIDevs/status/2026420817568084436)).

인프라 쪽에서는 웹소켓(web sockets)이 에이전트 처리량에 의미 있는 레버로 언급되며, [@gdb](https://x.com/gdb/status/2026380170765152302)는 **“30% faster rollouts”**를 주장했다. 웹소켓 도입이 왜 오래 걸렸는지, 상태(state)가 업스트림 vs VRAM에 어떻게 저장되는지에 대한 논의도 이어졌다 ([thread](https://x.com/dejavucoder/status/2026219239477215657), [follow-up](https://x.com/dejavucoder/status/2026223111021220265)).

벤치마크 측면에서는 Codex 5.3이 TerminalBench/IOI/LiveCodeBench/VibeCodeBench 등에서 강한 위치라는 서드파티 스코어보드 पोस्ट가 공유됐다 ([ValsAI](https://x.com/ValsAI/status/2026385804940230786)).

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews’ website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

---

## AI Twitter Recap

### Qwen 3.5 “Medium 시리즈”와 오픈 가중치(open-weight) 모멘텀

- **Qwen 3.5 Medium Model Series**: Alibaba가 “more intelligence, less compute”를 내세운, 범위를 좁혀 설계된 모델 세트를 공개했다—**Qwen3.5-Flash**(hosted), **Qwen3.5-35B-A3B (MoE)**, **Qwen3.5-122B-A10B (MoE)**, **Qwen3.5-27B (dense)**—아키텍처(architecture)+데이터(data)+강화학습(RL)이 단순 파라미터 스케일링보다 더 낫다고 주장했다. **Flash의 기본 1M 컨텍스트(context)**와 hosted 제공물의 내장 툴이 눈에 띄며, 전체 발표와 Hugging Face/ModelScope/API 링크는 [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2026339351530188939)에서 확인 가능하다.

- 초기 실무자 반응은 실제 사용감에서 **35B-A3B**와 **122B-A10B**가 매우 강하다는 점을 강조한다 (예: [@andrew_n_carr](https://x.com/andrew_n_carr/status/2026347588950372752), [@JustinLin610](https://x.com/JustinLin610/status/2026343725719568395)). 또한 [@awnihannun](https://x.com/awnihannun/status/2026353100144218569)은 **35B 모델이 235B 전작을 넘어선다**는 “intelligence-per-watt” 함의를 언급했다.

- **배포/서빙(deployment/serving) 스택도 빠르게 움직임**: 커뮤니티 툴링이 곧바로 뒤따랐다—GGUF 및 사이징 가이드는 [@UnslothAI](https://x.com/UnslothAI/status/2026351337970217357)에서, 로컬 실행에 대해서는 [@terryyuezhuo](https://x.com/terryyuezhuo/status/2026344442186326332)가 “35B-A3B is all you need” 같은 반응을 보였다. Qwen은 SGLang 지원도 강조했다 ([tweet](https://x.com/Alibaba_Qwen/status/2026348924433477775)).

- **양자화(quantization) + “local frontier” 추세**: INT4 변형이 [@HaihaoShen](https://x.com/HaihaoShen/status/2026208062009426209)을 통해 등장했고(중복 पोस्ट), 사용자들은 공격적인 양자화 워크플로를 계속 밀어붙이고 있다(예: 초저비트 로컬 Qwen에 대한 Unsloth 칭찬을 공유한 [@0xSero](https://x.com/0xSero/status/2026223879077712269)).

- **평가(evaluation) 시그널**: Qwen의 플래그십 **Qwen3.5-397B-A17B**가 HF에서 트렌딩했고 ([@Ali_TongyiLab](https://x.com/Ali_TongyiLab/status/2026211680653611174)), Code Arena의 에이전트형 웹개발 평가에서도 강하게 나타났다 ([Arena post](https://x.com/arena/status/2026337606137725363)). Arena는 Qwen 3.0 대비 순위 변화도 게시했다 ([comparison](https://x.com/arena/status/2026404630297719100)).

### OpenAI·Anthropic·Cursor: 코딩 에이전트를 제품 표면으로

- **OpenAI: Responses API의 GPT-5.3-Codex**: OpenAI가 **GPT-5.3-Codex**를 **Responses API**로 모든 개발자에게 제공했다 ([announcement](https://x.com/OpenAIDevs/status/2026379092661289260)). 트윗 기준 가격은 [@scaling01](https://x.com/scaling01/status/2026379113099862018)이 (**$1.75 input / $14 output**)으로 언급했다. 또한 에이전트가 docx/pptx/csv/xlsx 등 다양한 **파일 입력 타입**을 직접 ingest할 수 있도록 확장했다 ([tweet](https://x.com/OpenAIDevs/status/2026420817568084436)).

- 인프라 상세: 웹소켓은 에이전트 처리량(throughput)에 의미 있는 레버로 떠오르며, [@gdb](https://x.com/gdb/status/2026380170765152302)는 **“30% faster rollouts”**를 언급했다. 웹소켓이 왜 오래 걸렸는지, 상태 저장이 업스트림 vs VRAM에서 어떻게 이뤄지는지에 대한 논의도 이어졌다 ([thread](https://x.com/dejavucoder/status/2026219239477215657), [follow-up](https://x.com/dejavucoder/status/2026223111021220265)).

- 벤치마크: Codex 5.3이 TerminalBench/IOI/LiveCodeBench/VibeCodeBench에서 강한 배치를 보였다는 서드파티 스코어보드 पोस्ट가 공유됐다 ([ValsAI](https://x.com/ValsAI/status/2026385804940230786)).

- **Anthropic: “Claude Code Remote Control” + 엔터프라이즈 워크플로 푸시**: Anthropic이 Claude Code의 “Remote Control”을 소개했다—로컬에서 터미널 세션을 시작한 뒤 **휴대폰에서 계속 진행**하는 방식—처음은 [@noahzweben](https://x.com/noahzweben/status/2026371260805271615)에서, 이후 [@claudeai](https://x.com/claudeai/status/2026418433911603668)가 공식화했으며, [@_catwu](https://x.com/_catwu/status/2026421789476401182)가 롤아웃 확인을 전했다.

- 별도의 엔터프라이즈 포지셔닝: 팀 단위로 Claude를 커스터마이즈하기 위한 “Cowork and plugin updates”가 공개됐고, 매우 높은 참여를 얻었다 ([@claudeai](https://x.com/claudeai/status/2026305186671608315)).

- **Cursor: “review is demo videos, not diffs”**: Cursor가 대형 UX 피벗을 발표했다—에이전트가 **자기가 만든 소프트웨어를 실제로 사용**한 뒤, **작업 영상(데모)**을 보내는 방식(“demos, not diffs”)이다 ([launch](https://x.com/cursor_ai/status/2026369873321013568), [links](https://x.com/cursor_ai/status/2026369880795263328)). 여러 빌더는 클라우드 에이전트가 비동기(async), VM 기반 테스트, 자기 검증(self-verification), 데모 산출물 측면에서 실질적 단계 변화를 만든다고 설명했다 ([example](https://x.com/fredrikalindh/status/2026379400879730794), [another](https://x.com/jsngr/status/2026371033201103036), [“creative director over sims”](https://x.com/jasonyuan/status/2026375381872423133)).

### 언어를 위한 디퓨전(diffusion): Mercury 2와 “속도” 경쟁

- **Mercury 2(“reasoning diffusion LLM”)**: Inception Labs가 **Mercury 2**를 공개하며, 프로덕션용 디퓨전 LLM로서 **~1,000 output tokens/s**를 달성한다고 포지셔닝했다 ([Stefano Ermon](https://x.com/StefanoErmon/status/2026340720064520670)). Artificial Analysis는 지능 면에서 frontier 선두는 아니지만, **출력 속도**가 이례적으로 강하고, 에이전트/코딩 평가도 준수하다고 맥락을 제공하며 Terminal-Bench Hard 및 IFBench 비교를 포함한 주장들을 정리했다 ([analysis thread](https://x.com/ArtificialAnlys/status/2026360491799621744)).

- 더 깊은 시사점: 여러 पोस्ट는 팀들이 **아키텍처 수준의 병렬 토큰 정제(parallel token refinement)**(디퓨전)을 통해, 멀티스텝 에이전트 루프나 음성 비서를 “batchy”가 아니라 “native”하게 느끼도록 만들 수 있다고 베팅하고 있음을 시사한다 ([@LiorOnAI](https://x.com/LiorOnAI/status/2026376138428395908)의 아키텍처 설명 참고). 이는 2026 경쟁이 원시 벤치마크 최대치보다 **지연시간(latency)+처리량(throughput)**으로 정의될 수 있다는 정서와 맞물린다.

### 에이전트: 신뢰성(reliability)·안전 실패·메모리/컨텍스트 부패·다국어 평가

- **에이전트 신뢰성은 능력(capability)을 따라가지 못함**: Princeton 주도의 연구가 **capability–reliability gap**을 정식화해 측정했고, 신뢰성을 **12개 차원**으로 분해한 뒤 능력은 크게 올랐지만 신뢰성 개선은 제한적이라고 보고했다 ([paper + dashboard](https://x.com/steverab/status/2026383575080108436); 추가 코멘트: [@random_walker](https://x.com/random_walker/status/2026384543700115870)). 이는 에이전트를 자율주행(AV)처럼 “실패의 롱테일”로 보는 직관과도 맞닿는다 ([ahall_research](https://x.com/ahall_research/status/2026338695536848987)).

- **OpenClaw 및 “routine-step decomposition” 안전 우회**: “위험한 명령을 몇 개의 일상적 단계로 쪼개면 → 안전이 사라진다”는 구체적 실패 모드가 제시됐고, 받은편지함을 지우는 행동 사례가 언급됐다. 저자들은 오픈소스 수정안을 주장한다 ([paper thread](https://x.com/shi_weiyan/status/2026300129901445196)).

- **AGENTS.md(및 유사 컨텍스트 파일)가 해로울 수 있음**: LLM이 생성한 컨텍스트 파일이 성공률을 낮추고 비용을 늘린다는 연구 요약이 공유됐다. 개발자가 최소로 작성한 컨텍스트는 성공에 약간 도움을 주지만 비용은 여전히 증가한다고 한다. 논문 요약은 [@omarsar0](https://x.com/omarsar0/status/2026306141181898887), 같은 결과를 바탕으로 한 실무 “작성법” 가이드는 [@_philschmid](https://x.com/_philschmid/status/2026354033418547444)에 정리됐다.

- **새 SWE-bench Multilingual 리더보드**: 소프트웨어 엔지니어링 에이전트를 영어/Python 밖에서도 평가하려는 시도로, **9개 언어 300개 태스크**를 포함하며 SWE-bench Verified의 태스크는 포함하지 않는다. 보고된 SOTA는 **72%**다 ([launch](https://x.com/OfirPress/status/2026324248973689068); 추가 통계: [@KLieret](https://x.com/KLieret/status/2026322986907652295)). 언어에 따라 모델 순위가 뒤집힐 수 있다는 함의가 제기된다.

### 데이터·벤치마크: OCR 포화와 “새 옵티마이저” 회의론, 적응형 데이터

- **OCR/문서 파싱 벤치마크가 포화(saturating)**: OmniDocBench가 상한에 접근(**~95%**)했고, 실제 문서에서 실패가 남으며, exact-match 지표가 의미적으로 맞는 파싱도 패널티 준다는 주장들이 나왔다 ([@llama_index](https://x.com/llama_index/status/2026342120236396844), [@jerryjliu0](https://x.com/jerryjliu0/status/2026408921385284001)). 관련해 “합성 데이터가 싸게 가능한데도 OCR이 왜 어렵나”라는 혼란이 제기됐고 ([gabriberton](https://x.com/gabriberton/status/2026335831632626156)), PDF QA에서는 이미지 표현보다 텍스트 추출이 낫다는 연구도 공유됐다 ([cwolferesearch](https://x.com/cwolferesearch/status/2026344301907583469)).

- **“Nature MI optimizer” 논란**: 극적인 그래프를 담은 새 옵티마이저 논문에 대해, 의심스러운 베이스라인과 테스트셋 기반 하이퍼파라미터 선택 가능성을 지적하며 독립 검증 및 더 잘 튜닝된 베이스라인(예: nanogpt speedrun)을 촉구하는 고난도 비판이 나왔다 ([giffmana](https://x.com/giffmana/status/2026223201957597563); 추가 실험 맥락: [@YouJiacheng](https://x.com/YouJiacheng/status/2026224486367027622)).

- **Adaption Labs: “Adaptive Data”**: 정적 데이터셋에서 벗어나 “살아있는 자산(living asset)” 루프를 주장하는 트윗들이 이어졌고, **242개 언어**에서 **평균 82% 품질 향상**을 주장하며 얼리 액세스/커뮤니티 프로그램을 언급했다 ([company](https://x.com/adaptionlabs/status/2026281291847446721); 추가 프레이밍: [@sarahookr](https://x.com/sarahookr/status/2026286134104613157); 서드파티 패러프레이즈: [here](https://x.com/sudip_r0y/status/2026286762851774475)). 방법론 공개가 더 필요하므로, 검증된 표준이라기보다 데이터 드리프트/피드백 루프에 대한 방향성 테제로 보는 것이 적절하다는 톤이 덧붙었다.

### 컴퓨트·칩·로보틱스: Meta–AMD, MatX, Liquid AI, NVIDIA SONIC

- **Meta ↔ AMD 인프라 딜**: Meta가 AMD Instinct GPU를 통합하는 다년 계약을 발표했고, 배포를 위해 **~6GW** 데이터센터 용량을 계획 중이라고 했다 ([@AIatMeta](https://x.com/AIatMeta/status/2026266818789454057)). 코멘터리는 NVIDIA 실적 발표를 앞둔 주요 capex/컴퓨트 시그널로 해석했다 ([kimmonismus](https://x.com/kimmonismus/status/2026279386681356704)).

- **MatX “One” 가속기**: MatX가 **$500M Series B**를 발표하며, **systolic-array 효율**과 작은 행렬에서의 활용률 개선을 결합한 아키텍처를 제시했다. HBM으로 롱컨텍스트 워크로드를 다루면서 SRAM-퍼스트 지연시간 특성을 유지해 **고처리량·저지연**을 노린다고 한다 ([reinerpope](https://x.com/reinerpope/status/2026351870852358492)). Karpathy는 SRAM vs DRAM/HBM의 “두 메모리 풀” 제약을 강조하며, 메모리+컴퓨트 오케스트레이션이 토큰 수요 시대의 핵심 퍼즐이라고 프레이밍했다 ([karpathy](https://x.com/karpathy/status/2026452488434651264)).

- **Liquid AI LFM2-24B-A2B**: Liquid AI가 **LFM2-24B-A2B**를 출시했다. **24B MoE**로, **~2.3B active/token**이며 32GB 풋프린트에서 효율과 엣지 추론(inference)을 최적화했다고 한다 ([launch](https://x.com/liquidai/status/2026301771539202269)). 배포는 **Ollama** ([@ollama](https://x.com/ollama/status/2026305296709173535))와 **LM Studio** ([@lmstudio](https://x.com/lmstudio/status/2026322404142633131))로 빠르게 확산됐다.

- **로보틱스 스케일링: NVIDIA SONIC(GEAR-SONIC)**: 한 로보틱스 스레드는 **42M 파라미터** 정책을 **100M+ mocap 프레임**과 **500k+ 병렬 시뮬레이션 로봇**으로 학습해, 실휴머노이드에 **zero-shot**으로 전이했고 50 시퀀스에서 **100% 성공**을 주장했다. 코드/가중치가 공개돼 있다 ([Jim Fan thread](https://x.com/DrJimFan/status/2026350142652383587), 추가 링크 [here](https://x.com/DrJimFan/status/2026350144300658891)). 핵심 시스템 주장으로, 모션 트래킹의 조밀한 감독(dense supervision)이 전신 제어에서 next-token prediction의 확장 가능한 유사체 역할을 한다는 점이 제시됐다.

### Top tweets (by engagement, technical/industry-relevant)

- **Claude Code Remote Control** 롤아웃: [@claudeai](https://x.com/claudeai/status/2026418433911603668)
- **Qwen 3.5 Medium Model Series** 공개: [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2026339351530188939)
- **Cursor 에이전트 “demos not diffs”**: [@cursor_ai](https://x.com/cursor_ai/status/2026369873321013568)
- **Karpathy: CLI를 에이전트 네이티브 인터페이스로**: [@karpathy](https://x.com/karpathy/status/2026360908398862478)
- **Meta–AMD 6GW 인프라 딜**: [@AIatMeta](https://x.com/AIatMeta/status/2026266818789454057)
- **Mercury 2 디퓨전 LLM 공개**: [@StefanoErmon](https://x.com/StefanoErmon/status/2026340720064520670)
- **NVIDIA SONIC 휴머노이드 제어(오픈소스)**: [@DrJimFan](https://x.com/DrJimFan/status/2026350142652383587)
- **MatX 칩 + $500M Series B**: [@reinerpope](https://x.com/reinerpope/status/2026351870852358492)
- **AGENTS.md 연구 요약(컨텍스트가 해로울 수 있음)**: [@omarsar0](https://x.com/omarsar0/status/2026306141181898887)
- **OpenAI: Responses API에 GPT-5.3-Codex**: [@OpenAIDevs](https://x.com/OpenAIDevs/status/2026379092661289260)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **Qwen3.5 모델 공개 및 벤치마크**

- **[Qwen/Qwen3.5-122B-A10B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1rdlc02/qwenqwen35122ba10b_hugging_face/)** (Activity: 621): [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)의 **Qwen3.5-122B-A10B**는 `122 billion parameters`와 `262,144 tokens` 컨텍스트 길이를 가진 최첨단 causal language model로 소개되며, `1,010,000 tokens`까지 확장 가능하다고 한다. 비전 인코더를 통합하고 **Gated Delta Networks**와 **Mixture-of-Experts**를 결합한 하이브리드 아키텍처를 사용해 멀티모달 학습과 추론(inference) 효율을 높였다고 설명한다. `201 languages`를 지원하며 다양한 환경에서의 확장형 강화학습(RL)을 강조한다. 댓글에서는 HLE에서 `25.3` 점수를 언급하며(6개월 전 SOTA), `gpt-oss-120b` 경쟁 가능성을 논의하는 한편, vLLM 등에서 효율적 서빙을 위해 중요한 네이티브 4-bit 가중치가 없다는 점에 실망을 표했다.

- Qwen/Qwen3.5-122B-A10B는 HLE 벤치마크에서 `25.3`을 기록했으며, 이는 약 6개월 전에는 SOTA로 여겨졌다는 언급이 나온다.

- 네이티브 4-bit 가중치가 없다는 점이 `gpt-oss-120b` 같은 네이티브 양자화 모델 대비 한계로 논의되며, 특히 vLLM 서빙 사용자에게 중요하다는 맥락이 나온다.

- 중국 연구소가 blockade로 MXFP4/NVFP4에서 학습을 못해 네이티브 양자화 모델 제공에 영향을 줄 수 있다는 추정도 제기된다.

- **[Qwen/Qwen3.5-35B-A3B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1rdlbvc/qwenqwen3535ba3b_hugging_face/)** (Activity: 625): [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)의 Qwen3.5-35B-A3B는 비전 인코더를 포함한 `35 billion parameters` 모델로 소개되며, **Gated Delta Networks**와 **Mixture-of-Experts** 기반 하이브리드 아키텍처, 고처리량 추론, `201 languages` 지원, 긴 컨텍스트와 확장형 RL 등을 강조한다. 댓글에서는 [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2026339351530188939)의 트윗을 인용하며 `35B`가 이전 세대 `235B`보다 낫다는 주장, 그리고 양자화 버전 변환을 진행 중이라는 커뮤니티 움직임을 언급한다.

- `35B`가 특정 벤치마크에서 40%를 기록했고, GPT 120B 모델의 전형적 25%보다 높다는 언급이 나오며 놀라움이 표현된다.

- Qwen3.5-35B-A3B를 포함한 다양한 라인업(Qwen3 30B A3 Moe, Qwen3 coder 80B A3 Moe 등)이 언급되며, 다양한 니즈/자원에 맞춘 전략으로 해석된다.

- **[New Qwen3.5 models spotted on qwen chat](https://www.reddit.com/r/LocalLLaMA/comments/1rdfhfx/new_qwen35_models_spotted_on_qwen_chat/)** (Activity: 979): 이미지에는 채팅 UI에서 `Qwen3.5-122B-A10B`(MoE), `Qwen3.5-27B`(dense), `Qwen3.5-35B-A3B`(MoE) 등 **Qwen3.5 시리즈**가 보이며, 텍스트 및 멀티모달 작업용으로 설계된 오픈소스 이니셔티브의 일부로 묘사된다. 특히 `122B MoE`가 GLM 등에서 중간급 MoE가 나오지 않은 공백을 메운다는 점이 강조된다. 댓글에서는 `122B MoE`의 의미와, 로컬 배포에 유용한 `27B` 같은 중형 dense 모델이 계속 나온다는 점에 대한 긍정 반응이 나온다.

- `27B` dense와 `122B` MoE 공개에 대해 “중형 dense 모델이 계속 개발된다”는 만족이 표현된다.

- GLM이 중간급 MoE를 내지 않은 상황에서 `122B` MoE가 필요했다는 논지가 나온다.

- Qwen Next 및 3.5가 3.0 대비 특히 작은 모델에서 개선이 크다는 관측이 언급된다.

- **[Qwen releases new Qwen3.5 Medium models!](https://www.reddit.com/r/LocalLLM/comments/1rdnlvl/qwen_releases_new_qwen35_medium_models/)** (Activity: 90): Qwen이 `35B-A3B`, `27B`, `122B-A10B`를 포함한 Qwen3.5 Medium 시리즈를 공개했으며, instruction following, visual reasoning, document recognition 등 다양한 벤치마크 막대그래프가 공유된다. 서로 다른 컨텍스트 크기와 하드웨어 요구 사항을 강조해 확장성과 적응성을 내세운다. 또한 다양한 비트 구성의 GGUF가 [Hugging Face](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF)에 제공된다고 한다. 댓글에서는 `35B 4bit`와 `27B 6bit` 비교 테스트에 대한 관심, 늘어나는 GGUF 모델에 대한 vllm 지원 개선 요구가 언급된다.

- 2~16비트 범위의 다양한 GGUF 포맷이 [Hugging Face](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF)에 제공된다는 점이 공유된다.

- GGUF 모델이 늘면서 vllm의 GGUF 지원 필요성이 논의된다.

- 코딩 작업에서 Qwen Coder3 80B(q6KL)에서 새 35B-A3B로 갈아탈지 고민하는 사용자가 있으며, 공식 문서에 직접 비교가 없다는 점이 드러난다.

- **Anthropic 증류(distillation) 논란**

- **[Anthropic’s recent distillation blog should make anyone only ever want to use local open-weight models; it’s scary and dystopian](https://www.reddit.com/r/LocalLLaMA/comments/1rd8cfw/anthropics_recent_distillation_blog_should_make/)** (Activity: 949): **Anthropic**의 [detecting and preventing distillation attacks](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) 글은 무단 모델 증류를 막기 위한 접근으로, 증류자를 혼란시키기 위해 출력에 독(poisoning)를 섞는 방식 등을 언급한다. 이로 인해 회사가 문제적이라고 판단한 프롬프트를 제출하는 사용자에게도 응답 신뢰성이 흔들릴 수 있다는 우려가 제기된다. 블로그는 API 키 같은 요청 메타데이터로 공격을 식별하는 얘기도 담고 있다. 댓글에서는 윤리성과 실효성에 대한 회의, ‘distillation attacks’라는 용어 자체에 대한 비판, 메타데이터 추적의 투명성 문제 제기가 나온다.

- 블로그가 단순 차단을 넘어 능동적 카운터메저(출력 poisoning)를 했다고 주장하는 대목이 응답 신뢰성에 대한 우려를 낳는다.

- ‘distillation attacks’ 용어와 API 키 등 메타데이터 활용에 대한 투명성/윤리성 논쟁이 이어진다.

- ‘distillation attacks’를 수출 통제 및 칩 접근 제한 정당화에 연결하는 태도에 대한 비판도 제기된다.

- **[Anthropic: “We’ve identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax.” 🚨](https://www.reddit.com/r/LocalLLaMA/comments/1rcpmwn/anthropic_weve_identified_industrialscale/)** (Activity: 6097): 이미지(AnthropicAI 트윗)는 **DeepSeek, Moonshot AI, MiniMax**가 `24,000`개 이상의 사기 계정을 만들고 `16 million` 상호작용을 통해 **Claude**를 추출해 학습에 활용했다고 주장하는 내용이다. 이는 모델을 무단으로 복제/모방하려는 시도와 지식재산 보호 문제를 부각한다. 댓글에서는 Anthropic의 문제 제기와 업계 관행(데이터 수집/증류)의 윤리성 사이의 아이러니를 두고 논쟁한다.

- Anthropic의 데이터셋 구축 또한 타인의 데이터에서 “증류”해온 것 아니냐는 윤리적 반문이 제기된다.

- API를 의도대로(다만 대규모로) 사용한 것을 ‘attack’이라 부르는 게 타당한지 논쟁이 있다.

- 경쟁이 치열해지며 공격적 증류가 혁신을 촉진한다는 식의 냉소적 의견도 등장한다.

- **[People are getting it wrong; Anthropic doesn’t care about the distillation, they just want to counter the narrative about Chinese open-source models catching up with closed-source frontier models](https://www.reddit.com/r/LocalLlaMA/comments/1rd2x61/people_are_getting_it_wrong_anthropic_doesnt_care/)** (Activity: 977): 트윗(알렉 디미트리예프)과 Anthropic의 반응을 둘러싸고, Anthropic의 초점이 “증류 자체”보다 “중국 오픈소스 모델이 폐쇄형 frontier에 따라잡는다”는 내러티브를 반박하려는 전략이라는 해석이 제시된다. 미국 정부/투자자에게 제한 강화를 설득하려는 의도라는 주장도 포함된다. 댓글에서는 중국 연구소의 혁신성 여부와, 증류를 넘어선 연구 기여(여러 논문/기법 나열)를 두고 공방이 벌어진다.

- Chinese labs에 ‘MOAT’가 없다는 주장에 대해, 클린 데이터 스케일링/더 많은 데이터/RL이 핵심이라는 반론이 나온다.

- 증류만이 아니라 다양한 기술 혁신을 보여주는 논문 목록이 제시되며, 혁신이 존재한다는 주장으로 이어진다.

- 로보틱스 등 AI 외 영역에서도 중국 연구소의 혁신을 강조하는 의견이 나온다.

- **Liquid AI LFM2-24B-A2B 출시 및 관련 논의**

- **[Liquid AI releases LFM2-24B-A2B](https://www.reddit.com/r/LocalLLaMA/comments/1rdi26s/liquid_ai_releases_lfm224ba2b/)** (Activity: 320): Liquid AI가 LFM2-24B-A2B를 공개했다. 24B 파라미터의 sparse MoE로, 토큰당 2B가 활성(active)이라고 설명된다. LFM2 패밀리가 350M→24B로 확장됐지만 토큰당 컴퓨트를 늘리지 않고 품질을 개선했다고 주장한다. 40 레이어, MoE 블록당 64 experts, top-4 routing을 포함하며 32GB RAM에서 동작하도록 설계됐다. llama.cpp, vLLM, SGLang을 day one부터 지원하고, 다수 GGUF 양자화를 제공한다고 한다. 벤치마크는 스케일 증가에 따른 log-linear 품질 개선을 제시하며, Hugging Face에 open-weight로 제공된다고 한다. 댓글에서는 qwen3 coder 등과의 비교에 관심이 모이고, 더 상세한 벤치마크 부재에 대한 아쉬움도 나온다.

- AMD CPU에서 `112 tokens per second`, H100에서 `293 tokens per second`를 언급하며 엣지 추론 성능을 강조하는 댓글이 있다.

- 상세 벤치마크가 부족해 모델 전환을 고민하는 사용자에게는 불확실성이 남는다는 지적이 나온다.

- `17 trillion tokens`까지 학습됐고 프리트레이닝이 계속 진행 중이며, LFM2.5-24B-A2B에서 추가 post-training/RL이 포함될 것이라는 언급이 있다.

- **[Distillation when you do it. Training when we do it.](https://www.reddit.com/r/LocalLLaMA/comments/1rcvimv/distillation_when_you_do_it_training_when_we_do_it/)** (Activity: 3433): AI 커뮤니티에서 “증류”에 대한 이중잣대를 풍자하는 밈으로, 타인이 하면 비난받는 증류가 내부적으로는 ‘학습 데이터’로 정당화되는 인식 차이를 다룬다. 댓글에서는 저비용 소형 모델이 대형 모델의 증류에 크게 의존한다는 점, 증류가 쉬워질수록 프론티어 독점의 방어 가능성이 약해진다는 논의가 이어진다.

- 소형·저비용 모델의 핵심이 “대형 모델에서의 증류”라는 주장과, 이로 인해 frontier 투자 방어가 약해진다는 함의가 언급된다.

- Anthropic의 오픈소스 기여 부재, 데이터 사용의 합법성/윤리성, 정책/검열 영향력 등에 대한 비판도 동반된다.

- 공개 데이터(예: Wikipedia)를 학습에 쓰는 관행의 윤리·법적 문제에 대한 논의가 이어진다.

- **[Fun fact: Anthropic has never open-sourced any LLMs](https://www.reddit.com/r/LocalLLaMA/comments/1rcseh1/fun_fact_anthropic_has_never_opensourced_any_llms/)** (Activity: 938): Anthropic이 Claude를 포함한 어떤 LLM도 오픈소스하지 않았다는 점이 지적되며, 특히 다국어 토크나이저 효율 같은 외부 분석이 제한된다는 맥락이 나온다. 대비로 OpenAI의 토크나이저/`gpt-oss`, Google의 Gemma/Gemini 토크나이저 공유 등이 언급된다. 댓글에서는 안전을 강조하면서 오픈 연구에 기여하지 않는 점의 아이러니가 논의된다.

- 한 댓글은 Claude 모델이 “ 또는 ‘ 같은 타이포그래피 컬리 쿼트(curly quotes)를 출력하지 못해 코드가 깨졌던 경험을 언급한다.

- **[Hypocrisy?](https://www.reddit.com/r/LocalLLaMA/comments/1rcrb2k/hypocrisy/)** (Activity: 748): DeepSeek, Moonshot AI, MiniMax가 `24,000`개 계정과 `16 million` 상호작용으로 Claude를 추출했다는 주장과 함께, AI 모델 학습 데이터 출처의 윤리/투명성 문제가 다시 부각된다. 댓글에서는 데이터 소싱의 윤리와, 모델이 “Claude라고 주장”하는 식의 정체성/응답 정확성 문제 등이 언급된다.

- 학습 데이터의 출처가 모델 편향/합법성/성능에 미치는 영향 때문에 투명성이 중요하다는 지적이 나온다.

- GLM이 프롬프트에 따라 Claude라고 주장하는 행동이 사용자 신뢰를 해친다는 맥락이 언급된다.

- “industrial-scale distillation attacks”라는 표현 자체가 지식재산 및 모델 보안의 도전 과제를 드러낸다는 논의가 있다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **Anthropic vs. DeepSeek 증류 논란**

- **[Anthropic is accusing DeepSeek, Moonshot AI (Kimi) and MiniMax of setting up more than 24,000 fraudulent Claude accounts, and distilling training information from 16 million exchanges.](https://www.reddit.com/r/singularity/comments/1rcpdwz/anthropic_is_accusing_deepseek_moonshot_ai_kimi/)** (Activity: 4142): **Anthropic**이 **DeepSeek, Moonshot AI(Kimi), MiniMax**가 `24,000`개 사기 계정으로 `16 million` 상호작용을 수행해 Claude의 학습 정보를 빼냈다고 비난했다. 데이터 보안과 지식재산 문제가 부각되며, 무단 접근 및 역이용 가능성에 대한 우려가 제기된다. 댓글에서는 “AI 회사가 공개 인터넷 데이터로 학습하면서도 도둑맞았다고 불평한다”는 아이러니가 강조된다.

- 공개 데이터 학습 관행이 데이터 소유권/권리 문제를 남긴다는 논점이 다시 제기된다.

- 오픈소스 생태계의 트래픽은 활용하면서 재정적 지원/환원이 부족하다는 기업 책임 논의가 나온다.

- AI 학습 데이터와 지식재산의 복잡한 법·윤리 문제를 보여준다는 코멘트가 이어진다.

- **[Here we go again. DeepSeek R1 was a literal copy paste of OpenAI models. They got locked out, now they are on Anthropic. Fraud!](https://www.reddit.com/r/OpenAI/comments/1rcpfeg/here_we_go_again_deepseek_r1_was_a_literal_copy/)** (Activity: 2519): DeepSeek, Moonshot AI, MiniMax의 대규모 distillation 논란을 다루며, 댓글에서는 조롱과 비판이 섞인 반응이 나온다.

- **[Anthropic just dropped evidence that DeepSeek, Moonshot and MiniMax were mass-distilling Claude. 24K fake accounts, 16M+ exchanges.](https://www.reddit.com/r/ClaudeAI/comments/1rd1j8u/anthropic_just_dropped_evidence_that_deepseek/)** (Activity: 2751): Anthropic의 보고가 세 중국 AI 연구소가 `24,000`개 가짜 계정과 `16 million+` 교환으로 Claude 능력을 체계적으로 추출했다고 주장하는 내용을 요약한다. DeepSeek가 Claude의 단계별 추론을 설명하게 해 학습 데이터를 만들었다는 언급, MiniMax의 `13 million+` 교환과 신모델에 대한 빠른 적응 등이 포함된다. 안전 기능은 증류 모델로 잘 전이되지 않아 미묘한 상황에서 위험이 커질 수 있다는 우려가 제기된다.

- VPN 사용 등으로 정상 사용자가 취소되는 동안 24,000개 가짜 계정이 통과한 점을 보며, 계정 검증/부정탐지의 허점을 지적하는 댓글이 있다.

- Anthropic/OpenAI/Google 등도 역사적으로 광범위한 무라이선스 데이터를 학습에 사용해왔다는 맥락에서 윤리 논쟁이 이어진다.

- 토큰 비용 측면에서 “정상 결제보다 해적질이 싸다”는 냉소적 농담이 등장하며 데이터 취득 비용/윤리 문제가 드러난다.

- **[Anthropic: “We’ve identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax.”](https://www.reddit.com/r/ClaudeCode/comments/1rcp658/anthropic_weve_identified_industrialscale/)** (Activity: 1846): Anthropic의 공개 비난을 요약하며, ‘attack’이라는 용어의 적절성(인간 학습과 유사한가?)과, distillation과 저작권 학습의 윤리·법적 유사성 등이 논쟁된다.

- **레거시 시스템과 산업 영향**

- **[IBM is the latest company victim of Anthropic, plunging 10% following the launch of a Claude Code tool designed to modernize COBOL legacy code. COBOL, a 66-year-old programming language, is still widely used today; approximately 95% of ATM transactions in United States are processed using COBOL code](https://www.reddit.com/r/singularity/comments/1rcz68x/ibm_is_the_latest_company_victim_of_anthropic/)** (Activity: 467): Anthropic의 *Claude Code* 관련 발표가 COBOL 레거시 현대화에 영향을 줄 수 있다는 해석으로 IBM 주가가 `10%` 하락했다는 पोस्ट다. 하지만 실제로는 “새 툴 출시”라기보다 블로그 게시물에 가까워 시장 반응이 과대였을 수 있다는 지적이 나온다. 댓글에서는 COBOL의 중요성과 전문가 부족, 현대화의 난이도가 논의된다.

- *Claude Code*가 “신기술 출시”가 아니라 블로그 포스트였다는 점이 과잉 반응의 근거로 제시된다.

- AI가 프로젝트 시간을 25% 줄여도, 핵심 인프라에서는 IBM 전문성이 계속 필요할 것이라는 의견이 있다.

- 성과/효과에 대한 실증 피드백이 부족한데 시장은 즉각 반응했다는 회의론도 있다.

- **[Anthropic just dropped an AI tool for COBOL and IBM stock fell 13%](https://www.reddit.com/r/ClaudeAI/comments/1rddo3m/anthropic_just_dropped_an_ai_tool_for_cobol_and/)** (Activity: 880): COBOL 코드베이스 분석/현대화로 마이그레이션 비용을 줄일 수 있다는 기대가 IBM의 프로 서비스 매출을 위협할 수 있다는 해석과 함께, IBM 주가가 `13%` 하락했다는 이야기다. 댓글에서는 “vibe coding”을 핵심 인프라에 적용하는 위험, 시장 반응의 과장 가능성이 언급된다.

- AI가 가속해도 핵심 인프라 마이그레이션의 리스크는 여전히 크고, 환각(hallucination) 때문에 인간 검토가 병목이라는 논의가 있다.

- AI 툴의 위협은 IBM의 제조/코어보다 프로 서비스 영역에 더 클 수 있다는 분석이 나온다.

- 주가 하락을 “buggy whip polish vs buggy whips”에 비유하며, 간접적 파급을 강조하는 댓글이 있다.

- **[Claude is the better product. Two compounding usage caps on the $20 plan are why OpenAI keeps my money.](https://www.reddit.com/r/ClaudeAI/comments/1rcmvj5/claude_is_the_better_product_two_compounding/)** (Activity: 1217): Claude가 책 편집 같은 작업에서 더 낫다고 느끼지만, **Claude Pro**의 사용량 제한(예: `5-hour rolling session window`와 `weekly cap`) 때문에 며칠씩 잠기는 일이 있어 ChatGPT Plus에 남아 있다는 내용이다. `$20~$100` 사이의 더 유연한 요금제가 필요하다는 제안이 나온다. 댓글에서는 Anthropic의 B2B 중심 가격전략, $100/월의 생산성 정당화 vs 제한에 대한 불만이 엇갈린다.

- Anthropic 가격은 비용을 더 정확히 반영하지만 개인 사용자에게는 불친절하다는 논점이 나온다.

- $20 플랜은 중사용 이상을 위한 것이 아니며, 무제한은 계산 비용상 지속 불가라는 의견이 있다.

- 비용을 줄이기 위해 무료 툴과 혼용하는 사용자 경험 및 가격 피드백이 공유된다.

- **Gemini 및 Qwen 관련 업데이트**

- **[Gemini 3.1 Pro Created This Metal Gear Solid Game in 2 hours.](https://www.reddit.com/r/Bard/comments/1rd0kkz/gemini_31_pro_created_this_metal_gear_solid_game_in_2_hours/)** (Activity: 120): **Gemini 3.1 Pro**로 `2 hours` 만에 Metal Gear Solid 게임을 만들었다는 पोस्ट로, 구체적인 기술 스택/구현 디테일은 부족하지만 빠른 개발을 시사한다. ‘SFX’ 언급이 있으며, 댓글은 팬덤 중심의 긍정 반응이 주를 이룬다.

- **[Gemini app adds video templates to quick start generation](https://www.reddit.com/r/Bard/comments/1rctgtx/gemini_app_adds_video_templates_to_quick_start/)** (Activity: 72): **Gemini** 앱이 빠른 시작 생성에 비디오 템플릿을 추가했다는 내용으로, 소셜 미디어용 제작을 더 쉽게 해 참여를 늘릴 수 있다는 기대가 나온다. 구현/모델 디테일은 공개되지 않았다고 하며, 관련 내용은 [9to5Google article](https://9to5google.com/2026/02/23/gemini-video-templates/)에 언급된다. 댓글에서는 Veo 3.1에 대한 불만과 회의론이 섞여 있다.

- **[Qwen 3.5 for MLX is like its own industrial revolution](https://www.reddit.com/r/Qwen_AI/comments/1rcqezx/qwen_35_for_mlx_is_like_its_own_industrial/)** (Activity: 98): Mac Studio M3의 `4-bit`에서 **Qwen 3.5**가 `34-35 tokens per second` 수준으로 빠르고 품질도 좋다는 후기가 공유됐다. prompt 처리도 거의 즉시라며 지연시간/처리량 개선을 강조한다. 댓글에서는 Hugging Face에서 4-bit 모델을 찾는 질문 등 배포 접근성에 대한 관심이 드러난다.

- MLX 버전은 비전(vision) 기능이 없어 텍스트만 지원한다는 제약이 언급된다.

- **[Connected Qwen3-VL-2B-Instruct to my security cameras, result is great](https://www.reddit.com/r/Qwen_AI/comments/1rdnzbe/connected_qwen3vl2binstruct_to_my_security/)** (Activity: 94): **Qwen3-VL-2B-Instruct**를 보안 카메라에 연결해, 객체 감지 수준을 넘어 “우체부가 우편을 배달한다” 같은 서술형 설명을 잘 한다는 사례다. `IQ2`로 양자화된 약 `0.7 GB` 모델과 비전 프로젝터를 합쳐 `1.4 GB` 정도로 언급되며, MacBook M3 Air 24GB와 SharpAI Aegis에서 모델 선택→다운로드→llama-server(Metal/CUDA) 서빙→실시간 로그 관찰 흐름이 설명된다. 댓글에서는 작은 Qwen VL 모델의 잠재력, Django 통합 관심 등이 언급된다.

---

## AI Discord Recap

### Anthropic의 “Industrial-Scale” 증류 드라마 & 탈옥(jailbreak) 익스플로잇

- **Anthropic이 중국 API 증류자를 실명 공개**: Anthropic은 DeepSeek, Moonshot AI, MiniMax가 **24,000개 이상의 사기 계정**으로 **16 million exchanges**를 수행해 **Claude**를 증류했다고 공개 비난했다. 관련 포스트는 [Anthropic industrial-scale attack post](https://x.com/anthropicai/status/2025997928242811253)로 링크됐다. 커뮤니티는 이를 *pathetic*하다고 조롱하거나, Anthropic 역시 스크래핑으로 파운데이션 모델을 만들었다는 점에서 아이러니를 지적했다.

- **Claude Max가 내부 추론을 노출**: **OpenClaw**를 통해 **Claude Max**를 쓰는 과정에서, 모델의 내부 사고 과정이 라이브 채팅으로 그대로 흘러나오는 심각한 버그가 있었다고 한다. 엔지니어들은 `/reasoning off`로 임시 패치할 수 있다고 봤지만, **Opus 4.6** 및 **Sonnet 4.6**는 크레딧 소모가 매우 크다는 언급이 덧붙었다.

- **Kimi 2.5 탈옥이 ‘Constitutional’ 혼란을 유발**: 해커들이 **Kimi 2.5**의 가드레일을 벗겨 *Chinese Claude without the constitutional headaches* 같은 표현이 나왔고, 연구자들은 **Gemini 3.1 low**를 **ENI** 프롬프트로 공략해 안전 가드레일과 순응(compliance) 사이의 내부 “tug of war”를 유발, 제한 출력이 나오도록 하는 시도를 언급했다.

### 새 프론티어 모델: Qwen 3.5, GPT-5.3 Codex

- **Qwen 3.5가 오픈 가중치 리더보드를 휩쓸다**: Alibaba가 [Qwen3.5-35B-A3B-Base weights](https://huggingface.co/Qwen/Qwen3.5-35B-A3B-Base)를 공개했고, `235B` 구형 모델을 더 작은 풋프린트로 앞선다는 주장으로 개발자들을 놀라게 했다. **Qwen3.5-397B-A17B**는 Code Arena 리더보드에서 **#17 overall**까지 언급되며 **GPT-5.2**, **Gemini-3-Flash** 같은 폐쇄형 모델과의 근접을 시사했다.

- **OpenAI가 GPT-5.3-Codex를 대중에게 조용히 배포**: OpenAI가 [GPT-5.3-Codex on OpenRouter](https://openrouter.ai/openai/gpt-5.3-codex)로도 배포됐다고 언급되며, 개발자 API 전반으로 확산됐다는 요지다. 가격은 입력 **$1.75**, 출력 **$14**로 언급되며, OpenRouter가 `openrouter/free` 엔드포인트로 0원 폴백 모델 라우팅도 제공한다고 서술된다.

- **GPT-OSS 20B가 컨슈머 GPU에서 ‘공상과학급’ 속도**: **GPT-OSS 20B**가 MoE로 **3B active parameters**만 사용해 RTX 5090에서 **260 t/s**를 기록했다는 언급이 나오며, VRAM에 완전히 탑재되고 flash attention을 네이티브 지원한다는 식의 장점이 강조된다.

### 시스템 엔지니어링·하드웨어 스케일링·커널 최적화

- **MatX가 $500M을 조달해 LLM 칩을 만든다**: MatX가 **$500M Series B**를 확보해 **MatX One** 칩을 개발한다는 내용이며, SRAM 수준 저지연과 **HBM 롱컨텍스트 지원**을 결합한 “splittable systolic array”를 강조한다는 설명이다 ([MatX funding announcement](https://x.com/reinerpope/status/2026351870852358492)). 동시에 Meta가 5년에 걸쳐 **6GW의 AMD 인프라**를 배치하는 계약을 체결했고, **RRCLLX** 프로토콜로 **AMD MI300X** 멀티 GPU 통신을 최적화한다는 주장도 포함됐다.

- **FlashAttention 3 사전 빌드 휠이 프로덕션에**: 이제 커스텀 컴파일 없이도 [pre-built Flash Attention 3 wheels](https://download.pytorch.org/whl/flash-attn-3/)을 사용할 수 있다는 주장이다. **CUDA 12.6+** 및 **13**, **LibTorch ABI stable**, **x86/ARM CPU**, **Linux/Windows**, **Python 3.10+**, **PyTorch 2.9+** 지원을 언급하며 설정 시간을 크게 줄인다고 한다.

- **llama.cpp 업데이트가 Qwen과 VRAM 할당을 망가뜨림**: master 브랜치의 최신 llama.cpp가 **Failed to read magic** 오류를 내며 Qwen3.5 **GGUF 헤더** 파싱에 실패했고, 최근 오버플로 fix가 VRAM 할당을 막아 생긴 문제로 보이며 release **8145**로 롤백해야 복구된다는 서술이 나온다.

### 툴링·에이전트 워크플로·개발자 인프라

- **Cursor Cloud Agents 무료 롤아웃**: Cursor가 테스트 실행, 터미널 명령, 라이브 데모 배포가 가능한 무료 클라우드 환경을 제공했다고 한다 ([Cursor onboarding link](https://cursor.com/onboard)). 다만 실행 제한이 부딪히며, 안전하게 sudo 제한을 우회할 방법을 요구하는 커뮤니티 압력이 언급된다.

- **Aider가 복잡한 diff에서 벽에 부딪힘**: 다중 파일 편집에서 diff 포맷이 깨져 수동으로 작은 청크로 나눠 처리해야 한다는 불만이 나오며, **git submodule** 지원을 요구하는 [Aider GitHub issue #3603](https://github.com/Aider-AI/aider/issues/3603)가 열렸다고 한다.

- **Tiny-GPU 컴파일러: C에서 Verilog로**: [tiny-gpu-compiler project](https://github.com/gautam1858/tiny-gpu-compiler)는 교육용 **MLIR 기반 컴파일러**로, C 유사 커널 언어를 **16-bit 바이너리 명령**으로 변환해 Verilog로 작성된 커스텀 오픈소스 GPU를 타깃하며, 실행 분석용 시각화 도구도 포함한다고 한다.

### 벤치마킹 혼란과 평가자(evaluator) 흔들림

- **OpenAI가 데이터 오염으로 SWE-Bench Verified를 종료**: OpenAI가 frontier 모델이 테스트 ID 기반으로 답안을 재현(regurgitate)하는 문제가 빈번하다는 이유로 SWE-Bench Verified를 디프리케이트했다고 서술된다 ([SWE-bench deprecation announcement](https://x.com/OpenAIDevs/status/2026025368650690932)). 남은 미해결 문제의 약 **60%**가 구조적으로 결함이 있어 벤치마킹이 컴퓨트 낭비가 됐다는 주장도 포함된다.

- **EleutherAI가 Pythia HF 중복 문제를 수습**: [EleutherAI’s pythia-2.8b](https://arxiv.org/abs/2309.23024)가 Hugging Face Hub에서 리비전 스텝을 바꿔도 동일 가중치를 서빙하는 치명적 버그가 발견됐고, 즉시 재학습을 진행해 수정된 [Pythia-14m](https://huggingface.co/stellaathena/pythia-14m)과 [Pythia-31m](https://huggingface.co/stellaathena/pythia-31m)을 배포했다고 한다.

- **LMArena 필터가 주사위 굴리기도 밴**: ‘liar’ 같은 트리거 단어 때문에 주사위 굴리기 같은 무해한 프롬프트까지 자동 거절되는 문제가 발생했고, 개발자들이 LLM 기반 필터 및 완화된 [OpenAI moderation API](https://developers.openai.com/api/docs/guides/moderation/) 임계값을 테스트 중이라고 한다.
