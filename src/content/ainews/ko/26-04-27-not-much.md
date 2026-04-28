---
title: "OpenAI, Microsoft 독점 완화로 모든 클라우드 배포 허용"
summary:
  - "OpenAI가 Azure 독점성을 완화"
  - "GPT-5.5 벤치마크가 공개"
  - "Copilot이 사용량 과금으로 전환"
  - "Xiaomi가 MiMo-V2.5를 공개"
  - "Sakana가 7B Conductor를 발표"
date: 2026-04-27
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-27-not-much.md"
hasHeadline: false
headline: "OpenAI, Microsoft 독점 완화로 모든 클라우드 배포 허용"
tags:
  - OpenAI
  - Microsoft
  - GPT-5.5
  - Xiaomi
  - Agents
isFeatured: false
---

## 헤드라인: OpenAI, Microsoft 독점 완화로 모든 클라우드 배포 허용

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI가 Microsoft와의 파트너십을 업데이트하면서 Microsoft는 계속 기본 클라우드(primary cloud) 지위를 유지하지만, OpenAI 제품은 이제 모든 클라우드에서 제공될 수 있게 됐다. 모델 및 제품 약정은 2032년까지, 매출 공유는 2030년까지 이어진다.

이번 변화는 OpenAI가 Google TPU, AWS Trainium, Bedrock 같은 인프라와 배포 채널을 활용할 수 있음을 시사한다. Microsoft의 OpenAI IP 라이선스도 비독점 형태가 되며, 기존 AGI 조항은 사실상 사라진 것으로 해석되고 있다.

---

## AI Twitter Recap

### OpenAI 배포 변화, GPT-5.5 벤치마크, Codex/Copilot 가격 신호

- **OpenAI가 Azure 독점성을 완화**: [@sama](https://x.com/sama/status/2048755148361707946)는 OpenAI가 Microsoft 파트너십을 업데이트해 Microsoft가 계속 **기본 클라우드(primary cloud)** 로 남지만, OpenAI가 이제 제품을 **모든 클라우드** 에서 제공할 수 있다고 밝혔다. 제품/모델 약정은 **2032년** 까지, 매출 공유는 **2030년** 까지 이어진다. [@scaling01](https://x.com/scaling01/status/2048752418305769473)와 [@kimmonismus](https://x.com/kimmonismus/status/2048759615500804395)는 곧바로 OpenAI가 이제 **Google TPU / AWS Trainium / Bedrock** 을 통해 배포할 수 있고, Microsoft의 OpenAI IP 라이선스가 **비독점** 이 된다는 함의를 짚었다. [@ajassy](https://x.com/ajassy/status/2048806022253609115)는 **OpenAI 모델이 몇 주 안에 AWS Bedrock에 온다** 고 확인했다. [@simonw](https://x.com/simonw/status/2048834476323823983)는 새 문구가 기존 **AGI 조항이 사실상 사라졌음** 을 뜻할 가능성이 크다고 봤다.
- **GPT-5.5는 폭넓은 업그레이드지만, 모든 영역에서 압도적이지는 않음**: [@htihle](https://x.com/htihle/status/2048717753394090274)의 커뮤니티 평가에서 **GPT-5.5 no-thinking은 WeirdML 67.1%** 를 기록해 **GPT-5.4의 57.4%** 보다 올랐지만, 더 적은 토큰을 쓰는 **Opus 4.7 no-thinking 76.4%** 보다는 뒤졌다. [@arena](https://x.com/arena/status/2048794479646388732)의 LMSYS Arena 결과에서 GPT-5.5는 **Code Arena #9**, **Document #6**, **Text #7**, **Math #3**, **Search #2**, **Vision #5** 를 기록했고, [Expert Arena #5](https://x.com/arena/status/2048808366810800259)에 올랐다. Arena는 현재 평가가 **medium/high reasoning** 을 다루며, **xHigh는 아직 대기 중** 이라고 설명했다 ([1](https://x.com/arena/status/2048820224938631492), [2](https://x.com/arena/status/2048846896744247468)). [@gdb](https://x.com/gdb/status/2048777802586149331)는 GPU 커널 같은 어려운 코딩 작업에서 긍정적인 실무 피드백을 남겼지만, [@htihle](https://x.com/htihle/status/2048741770125603304)는 no-thinking 모드에서 “압축된 CoT 누출”이나 잘못된 형식의 출력이 보였다고 보고했다.
- **개발자 경제성이 더 명시적으로 드러남**: GitHub는 [Copilot이 6월 1일부터 사용량 기반 과금으로 전환](https://x.com/github/status/2048794729274278258)한다고 발표했다. 에이전트형 워크플로가 훨씬 더 많은 런타임을 소비한다는 점에서 주목할 만한 변화다. 이와 병행해 [@Hangsiin](https://x.com/Hangsiin/status/2048719057885818902)은 Codex 사용량 배수를 정리했다. **GPT-5.4 fast = 2x**, **GPT-5.5 fast = 2.5x** 이며, 5.4-mini와 GPT-5.3-Codex는 훨씬 저렴하다. [@sama](https://x.com/sama/status/2048913887614115857)는 **월 $20의 Codex** 가 여전히 강한 가치를 제공한다고 주장했다. OpenAI는 또한 이슈 트래커를 Codex 에이전트와 연결해 “열린 이슈 → 에이전트 → PR → 사람 리뷰” 흐름을 만드는 오케스트레이션 계층 **Symphony** 를 [@OpenAIDevs](https://x.com/OpenAIDevs/status/2048825010371039648)를 통해 오픈소스로 공개했다.

### Xiaomi MiMo-V2.5, Kimi K2.6, 중국의 에이전트 지향 오픈웨이트 공세

- **MiMo-V2.5는 이날 가장 큰 오픈 릴리스 중 하나**: [@XiaomiMiMo](https://x.com/XiaomiMiMo/status/2048821516079661561)는 **MiMo-V2.5-Pro** 와 **MiMo-V2.5** 를 **MIT** 라이선스로 오픈소스화했으며, 둘 다 **100만 토큰 컨텍스트** 를 제공한다. Pro 모델은 **복잡한 에이전트/코딩** 모델로, 더 작은 모델은 **네이티브 옴니모달 에이전트** 로 소개됐다. [@eliebakouch](https://x.com/eliebakouch/status/2048845602633433258)의 커뮤니티 요약은 유용한 기술 세부사항을 덧붙였다. **MiMo-V2.5-Pro** 는 대략 **전체 1T / 활성 42B** 규모이며 **FP8로 27T 토큰** 학습을 거쳤고, **MiMo-V2.5** 는 약 **전체 310B / 활성 15B** 규모로 **48T 토큰** 학습을 거쳤으며, 공격적인 **interleaved SWA/global attention** 과 shared expert 없는 구성을 사용한다. Xiaomi는 [@_LuoFuli](https://x.com/_LuoFuli/status/2048851054662762618)를 통해 빌더를 위한 **100T 토큰 그랜트** 도 발표했다. Day-0 추론(inference) 지원은 [vLLM](https://x.com/vllm_project/status/2048825703244972375)과 [SGLang/vLLM](https://x.com/XiaomiMiMo/status/2048821520798302409)에 빠르게 들어갔다.
- **Kimi K2.6은 관심도와 배포에서 계속 선두**: [@Kimi_Moonshot](https://x.com/Kimi_Moonshot/status/2048693682329776223)은 **Kimi K2.6** 이 이제 **OpenRouter 주간 리더보드 #1** 이라고 밝혔다. 2차 보도는 이를 **코딩과 장기 에이전트(long-horizon agents)** 용 모델로 설명했으며, **4,000개의 조율된 단계에서 300개의 동시 서브에이전트** 로 확장된 사례도 포함했다 ([dl_weekly](https://x.com/dl_weekly/status/2048764506105348129)). 실무자들은 속도/품질 트레이드오프를 두고 여전히 엇갈린다. [@teortaxesTex](https://x.com/teortaxesTex/status/2048820805258059837)는 Hermes에서 Kimi가 DeepSeek V4보다 훨씬 느리지만, V4가 고치지 못한 버그를 때때로 고칠 수 있었다고 봤다.
- **더 넓은 중국 모델 흐름**: 여러 게시물은 중국 연구소들이 **오픈에 가까운, 에이전트 지향, 장문맥 시스템** 을 공격적으로 밀고 있다고 해석했다. 예로 [Qwen 3.6 Flash](https://x.com/scaling01/status/2048730112636473792), DeepSeek V4/Flash, GLM-5.1 프로모션([사용량 3배 연장](https://x.com/Zai_org/status/2048784274523148750)), Xiaomi의 MIT 릴리스가 언급됐다. 반복된 주제는 더 작고 저렴한 변형들이 실용 에이전트 벤치마크에서 더 큰 형제 모델을 자주 앞선다는 점이었다.

### 에이전트 런타임, 오케스트레이션, 로컬 우선 도구

- **Sakana의 Conductor는 주목할 만한 멀티에이전트 결과**: [@SakanaAILabs](https://x.com/SakanaAILabs/status/2048777689763639741)는 작업을 직접 해결하기보다 자연어로 프런티어 모델 풀을 오케스트레이션하도록 RL로 학습한 **7B Conductor** 를 소개했다. 이 모델은 **어떤 에이전트를 호출할지, 어떤 하위 작업을 맡길지, 어떤 컨텍스트를 노출할지** 를 동적으로 결정하며, **LiveCodeBench 83.9%** 와 **GPQA-Diamond 87.5%** 를 기록해 풀 안의 어떤 단일 워커보다도 높았다고 한다. [@hardmaru](https://x.com/hardmaru/status/2048778095935795338)는 “**AI가 AI를 관리하는 것**”과 재귀적 자기 선택을 **테스트 타임 스케일링(test-time scaling)** 의 새로운 축으로 강조했다.
- **로컬 및 하이브리드 에이전트가 계속 개선됨**: 여러 게시물은 코딩/어시스턴트 스택이 로컬에서 실행되는 모습을 보여줬다. [@patloeber](https://x.com/patloeber/status/2048715918541558075)와 [@_philschmid](https://x.com/_philschmid/status/2048719354905108623)는 LM Studio/Ollama/llama.cpp를 통해 **Pi agent + Gemma 4 26B A4B** 를 로컬 실행하는 과정을 정리했다. [@googlegemma](https://x.com/googlegemma/status/2048805789788413984)는 **Gemma 4 + WebGPU** 를 사용한 **완전 로컬 브라우저 에이전트** 를 시연했으며, 브라우징 기록, 탭 관리, 페이지 요약을 위한 네이티브 도구 호출을 지원했다. [@cognition](https://x.com/cognition/status/2048821234281181302)은 나중에 **클라우드로 핸드오프** 할 수 있는 로컬 셸 에이전트 **Devin for Terminal** 을 출시했다.
- **에이전트 사용성 및 프레임워크 진화**: Hermes는 강한 하루를 보냈다. [@Teknium](https://x.com/Teknium/status/2048710115885523444)은 **Hermes Agent의 저장소가 Claude Code를 넘어섰다** 고 언급했고, [지원되는 경우 네이티브 비전이 기본값이 됐다](https://x.com/Teknium/status/2048766822766547451). 더 넓은 생태계도 빈틈을 계속 채웠다. [Cline Kanban](https://x.com/cline/status/2048814649513275448)은 이제 **작업 카드별로 서로 다른 에이전트/모델** 을 지원한다. [Future AGI](https://x.com/omarsar0/status/2048759865007591615)는 자기 개선 에이전트를 위한 평가/최적화 스택을 오픈소스로 공개했다. [@_philschmid](https://x.com/_philschmid/status/2048781492914885079)는 MCP가 무분별한 서버 연결보다 **명시적 @mention 로딩** 또는 **서브에이전트 범위의 도구 할당** 으로 가장 잘 작동한다고 주장했다.

### 추론 인프라, Attention/KV 엔지니어링, 시스템 작업

- **Google의 TPU 분리는 의미 있는 아키텍처 신호**: 여러 게시물이 Google Cloud Next 발표를 분석했다. **TPU v8은 학습용 8t와 추론(inference)용 8i로 분리** 되며, 이전 세대 대비 약 **2.8배 빠른 학습** 과 **달러당 80% 더 나은 추론 성능** 을 주장한다. [@kimmonismus](https://x.com/kimmonismus/status/2048745304007299230)는 Google이 워크로드별로 커스텀 실리콘을 분리한 것은 처음이며, OpenAI, Anthropic, Meta가 TPU 용량을 구매 중이라고 알려졌다는 점을 강조했다.
- **DeepSeek V4 지원이 인프라 스택에서 빠르게 성숙 중**: [@vllm_project](https://x.com/vllm_project/status/2048769886483329525)는 **DeepSeek V4 base 모델** 지원이 곧 들어오며, **FP4 instruct와 FP8 base** 를 구분하기 위해 `expert_dtype` 설정 필드가 필요하다고 밝혔다. [vLLM 0.20.0 릴리스](https://x.com/vllm_project/status/2048918629144805619)의 주요 내용에는 **DeepSeek V4 지원**, **기본 MLA prefill로 FA4 사용**, **TurboQuant 2-bit KV**, Blackwell에서 DeepSeek 전용 **MegaMoE** 경로가 포함됐다.
- **KV 캐시 최적화는 계속 치열한 전장**: 장문맥 병목과 KV 전략을 둘러싼 논의가 밀도 있게 이어졌다. [@cHHillee](https://x.com/cHHillee/status/2048756662845022655)는 장문맥을 위한 세 가지 주요 레버로 **local/sliding attention**, **interleaved local-global attention**, **GQA/MLA/KV tying/quantization** 을 통한 **global layer당 더 작은 KV** 를 요약했다. 구현 측면에서는 [@vllm_project](https://x.com/vllm_project/status/2048796304508330462)와 Red Hat/AWS가 FP8 KV-cache 심층 분석을 냈고, **FA3 two-level accumulation** 수정으로 **128k needle-in-a-haystack이 13%에서 89%** 로 개선되면서도 FP8 디코드 속도 향상을 유지했다. 커뮤니티 비평가들은 HiSparse 같은 오프로딩 중심 접근과 비교해 DeepSeek V4의 특정 KV 트레이드오프에도 의문을 제기했다 ([discussion](https://x.com/Grad62304977/status/2048785005216723072)).

### 벤치마크, 평가, 오픈 리서치 방향

- **오픈월드 평가가 힘을 얻고 있음**: [@sarahookr](https://x.com/sarahookr/status/2048731841759428935)는 대부분의 에이전트 벤치마크가 **자동 검증 가능한** 작업에 과적합되어 있으며, 중요한 최전선은 **오픈월드, 불확실성, 완전 검증 불가능한** 작업이라고 주장했다. 관련 스레드는 이를 **continual learning**, 메모리 저장소, 적응형 데이터 시스템과 연결했다 ([1](https://x.com/sarahookr/status/2048759884125233453), [2](https://x.com/adaption_ai/status/2048771654008877400)).
- **비용 인식 에이전트 평가가 1급 요소가 됨**: [@dair_ai](https://x.com/dair_ai/status/2048784506635878644)는 SWE-bench Verified에서 코딩 에이전트 지출을 다룬 새 연구를 강조했다. 에이전트형 코딩은 채팅/코드 추론(reasoning)보다 **약 1000배 더 많은 토큰** 을 소비할 수 있고, 동일 작업의 실행 간 사용량이 **30배** 까지 달라질 수 있으며, 더 많은 지출이 정확도를 단조롭게 개선하지도 않는다. 이는 Copilot의 가격 모델 변화와 통제되지 않는 에이전트 런타임 경제성에 대한 우려와 맞물린다.
- **새 벤치마크와 도메인별 평가**: LlamaIndex의 [ParseBench](https://x.com/osanseviero/status/2048777802015535189)는 파싱 에이전트를 위해 **검증된 기업 문서 페이지 2천 개** 를 추가했다. [AgentIR](https://x.com/CShorten30/status/2048764263196500002)은 **쿼리와 함께 reasoning trace를 임베딩** 해 연구 에이전트용 검색을 재구성하며, **AgentIR-4B는 BrowseComp-Plus에서 68%를 기록해 더 큰 기존 임베딩 모델의 52%를 앞섰다**. 프런티어 모델에 대한 벤치마크 스냅샷도 여럿 있었다. 예를 들어 [Opus 4.7이 GSO에서 42.2%로 선두](https://x.com/scaling01/status/2048853227211251891)에 올랐고 WeirdML / ALE-Bench / PencilPuzzleBench 관련 논의도 있었지만, 더 강한 신호는 방법론이었다. 더 많은 사람이 최종 답변 정확도뿐 아니라 **런타임 비용, 검색 품질, 오픈월드 행동** 을 측정하고 있다.

### 참여도 기준 상위 트윗

- **OpenAI-Microsoft 파트너십 재설정**: [@sama](https://x.com/sama/status/2048755148361707946)가 크로스클라우드 제공과 Microsoft 파트너십 지속을 설명했다.
- **AWS 위의 OpenAI**: [@ajassy](https://x.com/ajassy/status/2048806022253609115)가 OpenAI 모델이 **Bedrock** 에 온다고 확인했다.
- **GitHub Copilot 가격 변경**: [@github](https://x.com/github/status/2048794729274278258)이 6월 1일부터 **사용량 기반 과금** 을 시작한다고 발표했다.
- **Xiaomi MiMo-V2.5 오픈소스 릴리스**: [@XiaomiMiMo](https://x.com/XiaomiMiMo/status/2048821516079661561)가 **MIT 라이선스** 와 **100만 컨텍스트** 를 공개했다.
- **Codex용 오픈소스 오케스트레이션**: [@OpenAIDevs](https://x.com/OpenAIDevs/status/2048825010371039648)가 **Symphony** 를 출시했다.
- **Gemma 로컬 브라우저 에이전트**: [@googlegemma](https://x.com/googlegemma/status/2048805789788413984)가 WebGPU 기반 **100% 로컬 브라우저 내 에이전트** 를 보여줬다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

### Less Technical AI Subreddit Recap

- /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

---

## AI Discord Recap

### AI Discords

- **Discord 접근 중단**: 아쉽게도 오늘 Discord가 접근을 차단했다. 이 형태로 다시 가져오지는 않겠지만, 새 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
