---
title: "Google, Gemini 기반 'Ask Maps' 포함 Maps 대규모 업데이트"
summary:
  - "Google Maps가 Gemini로 10년 만에 대개편"
  - "Claude가 채팅에서 인터랙티브 차트 생성"
  - "CursorBench로 코딩 에이전트 평가가 고도화"
  - "Gemini Embedding 2로 멀티모달 검색 경쟁 격화"
  - "Nemotron 3 Super, 오픈웨이트 120B 모델 공개"
date: 2026-03-12
originalUrl: "https://news.smol.ai/issues/26-03-12-world-models-are-all-you-need/"
hasHeadline: true
headline: "Google, Gemini 기반 'Ask Maps' 포함 Maps 대규모 업데이트"
tags:
  - Google
  - OpenAI
  - Claude
  - MCP
  - NVIDIA
isFeatured: true
---

## 헤드라인: Google, Gemini 기반 'Ask Maps' 포함 Maps 대규모 업데이트

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

이번 이슈에서 가장 큰 ‘대중 제품’ 업데이트는 Google Maps의 변화였다. Gemini를 지도 기능 위에 얹는 수준이 아니라, 장소/커뮤니티 그래프와 경로 안내를 대화형으로 탐색하는 인터페이스로 재정의하려는 흐름이 드러났고, 일부 관측자들은 앞으로의 UX가 더 이상 ‘지도처럼 보이지’ 않을 수도 있다고 본다.

---

## AI Twitter Recap

### Agent Infrastructure, Harnesses, and the MCP Debate

- **Harnesses are becoming the real product surface**: 모델 품질만으로는 더 이상 병목이 아니라는 견해가 모이며, 하네스(harness)·도구·메모리·런타임 같은 ‘주변 스택’의 중요성이 커지고 있다는 논의가 이어졌다. [@mattturck’s interview with Harrison Chase](https://x.com/mattturck/status/2032141473009823882)는 이를 **harnesses, sandboxes, filesystem access, skills, memory, and observability** 관점에서 분명히 다뤘고, [@hwchase17](https://x.com/hwchase17/status/2032123062548861414)는 **agent UI/UX**가 여전히 어렵고 덜 구축돼 있다고 강조했다. 같은 스택 관점은 [LangChain JS’s new cross-framework `useStream` hook](https://x.com/LangChain_JS/status/2032119776986968488), [Redis’s context-engineering lab](https://x.com/Redisinc/status/2032177654024323387), 그리고 문서·서브에이전트·MCP·브라우저 사용·코드 실행까지 포함하는 Slack 네이티브 에이전트를 추가한 [Artificial Analysis’s Stirrup Slack integration](https://x.com/ArtificialAnlys/status/2032135114914951375)에서도 반복됐다.
- **MCP is not dead; it’s being normalized into production plumbing**: “MCP is dead” 농담이 한바탕 돌았지만([example](https://x.com/AAAzzam/status/2032265413942554959)), 더 기술적인 해석은 반대였다. [@omarsar0](https://x.com/omarsar0/status/2032078770987843848)는 MCP의 문제를 프로토콜이 아니라 주로 **harness problem**으로 봤고, Anthropic의 새 차트 기능이 MCP 기반으로 보인다고 덧붙였다([tweet](https://x.com/omarsar0/status/2032130843582308570)). [@GergelyOrosz](https://x.com/GergelyOrosz/status/2032194904957268267)는 **Uber using MCP internally**를 근거로, 대기업 내부에서 에이전트-서비스 통합의 “the life blood”라고 주장했다. 실무적으로 시장 신호는 분명해졌고, 에이전트 플랫폼들은 MCP를 새로움이 아니라 기본 상호운용성(interoperability)으로 취급하는 분위기다.

### Coding Agents, Evaluation, and Dev Workflow Shifts

- **The coding-agent stack is maturing from demos into measurable systems**: [Cursor’s new CursorBench methodology](https://x.com/cursor_ai/status/2032148125448610145)는 **offline benchmarks**와 **online request-derived metrics**를 결합해, **intelligence and efficiency**를 함께 점수화하려는 접근으로 눈에 띄었다(공개 코딩 벤치마크가 포화되고 있다는 문제의식도 포함). OpenAI는 곧바로 [GPT-5.4 leads CursorBench on correctness with efficient token usage](https://x.com/OpenAIDevs/status/2032209975280533676)를 강조했다. 별도로 [Code Arena reported GPT-5.4-high in the top 6](https://x.com/arena/status/2032126328842117612) 소식이 이어졌고, [WeirdML results from @htihle](https://x.com/htihle/status/2032107787195466061)에서는 강하지만 일관성 부족, 그리고 비정상적으로 긴 해답 생성 같은 양상이 관찰됐다. 공통된 패턴은 코딩 모델 비교가 정확도뿐 아니라 토큰 효율, 상호작용 행동, 실제 작업 적합도 등 **다중 축 측정**으로 이동한다는 점이다.
- **Agent-assisted development is bifurcating into automation-heavy flows and “stay-in-the-loop” tooling**: 완전 자율 코딩으로의 급격한 전환에 반발도 있었다. [@ThePrimeagen](https://x.com/ThePrimeagen/status/2032100265403256899)은 **fast inline autocomplete**가 이해를 보존하고 인지 부채를 줄이는 데 에이전트 워크플로보다 낫다고 주장했다. 반면 [@sydneyrunkle](https://x.com/sydneyrunkle/status/2032088578679857441)와 [@corbtt](https://x.com/corbtt/status/2032167664865722574)는 **reproducing bugs from screenshots**, **cross-tool organizational retrieval** 같은 영역에서 에이전트의 강점을 보여줬다. OpenAI도 운영 기능을 보강해 [Codex Automations are now GA](https://x.com/OpenAIDevs/status/2032222711032971548)로 **worktree vs. branch choice, model/reasoning controls, and reusable templates**를 제공했고, 앱 UI 커스터마이징도 추가했다([themes update](https://x.com/OpenAIDevs/status/2032222631538409728)).
- **Hermes Agent is emerging as a serious open agent platform**: Nous의 [Hermes Agent v0.2.0](https://x.com/Teknium/status/2032096935981785348)은 **full MCP client support**, 에디터용 **ACP server**, **provider expansion**(GLM, Kimi, MiniMax, OpenAI OAuth 포함), **filesystem checkpoints with rollback**, **git worktree isolation**, 로컬 브라우저 지원, **subagent transparency** 등을 포함했다(요약: [@witcheer](https://x.com/witcheer/status/2032102400278835662)). 후속 업데이트로 [official Claude provider support and lighter installs](https://x.com/Teknium/status/2032262684100739372)도 추가됐다. 커뮤니티 반응은 실제 채택을 시사하며, OpenClaw에서의 마이그레이션 사례도 언급됐다([example](https://x.com/stffnfdlr/status/2032166546815029502)).

### Multimodal Retrieval, Embeddings, and New Interaction Surfaces

- **A big week for multimodal retrieval**: Google의 [Gemini Embedding 2](https://x.com/GoogleAIStudio/status/2032145393967038583)는 **natively multimodal embedding model**로, **text, images, audio, video, and PDFs**를 하나의 벡터 공간에 매핑한다. [Weaviate](https://x.com/weaviate_io/status/2032139558968852849)와 [@victorialslocum](https://x.com/victorialslocum/status/2032141700412686592)은 **multimodal PDF RAG**, **Matryoshka Representation Learning** 기반 출력 차원 유연성, 리트리벌 파이프라인 내 네이티브 지원 같은 실전 포인트를 강조했다. 가장 강한 경쟁 응답은 [Mixedbread’s Wholembed v3](https://x.com/mixedbreadai/status/2032127466081567106)로, **late-interaction / multi-vector** 설계가 차별점이라는 점을 팀과 외부 관측자들이 부각했다([@bclavie](https://x.com/bclavie/status/2032128055104380980), [@lateinteraction](https://x.com/lateinteraction/status/2032130517349400828)).
- **The retrieval debate is crystallizing around single-vector vs. multi-vector**: [@lateinteraction](https://x.com/lateinteraction/status/2032162162836164697)는 Gemini Embedding 2 같은 멀티모달 단일 벡터 베이스라인이 곧바로 규모화된 **ColBERT/ColPali-style** 접근에 의해 추월된다고 주장했고, 단일 벡터 임베딩에 계속 베팅하는 것은 “borderline irrational”이라고도 했다([tweet](https://x.com/lateinteraction/status/2032154449041306001)). 과장(hype)을 감안하더라도, 인프라가 뒷받침된다면 팀들이 **interaction-rich indexing/scoring**을 우선시하는 방향으로 가고 있다는 점이 핵심이다([TopK infrastructure note](https://x.com/marek_galovic/status/2032168676464480657)).
- **Interfaces are getting richer, not just smarter**: Anthropic은 [Claude can now generate interactive charts and diagrams directly in chat](https://x.com/claudeai/status/2032124273587077133)로, 텍스트 출력만이 아니라 **generative UI** 방향의 제품 진전을 보였다. 이는 MCP로 유사한 시스템을 조립해 온 빌더들에게도 공명했다([@omarsar0](https://x.com/omarsar0/status/2032127096361804058)). 한편 [Perplexity Computer rolled out to Pro users](https://x.com/perplexity_ai/status/2032160576303219185)는 **20+ models, skills, and connectors**를 내세웠고, [@alexalbert__](https://x.com/alexalbert__/status/2032161705506324936)는 “**Generative UI is here**”라는 문장으로 흐름을 요약했다.

### Model Releases, Benchmarks, and Efficiency Trends

- **NVIDIA’s Nemotron 3 Super stands out as the most technically discussed model release**: [@rasbt](https://x.com/rasbt/status/2032084724743553129)는 이를 **open-weight 120B model**로 소개하며, 처리량과 벤치마크가 대략 Qwen3.5/GPT-OSS 급이라고 언급했다. 특히 **LatentMoE** 설계가 주목을 받았는데, [@cwolferesearch](https://x.com/cwolferesearch/status/2032225187949666811)는 저차원 latent 공간에서 라우팅해 **all-to-all 통신 비용**과 **expert weight 로딩 비용**을 줄인 뒤, 그 절감을 더 많은 expert 및 토큰당 더 많은 활성 expert로 재투자하는 구조를 설명했다. 단순 벤치마크 경쟁이 아니라 **추론(inference) 경제성**을 겨냥한 변화로 해석된다.
- **Grok 4.20 Beta looks more like a cost/speed/behavior update than a frontier leap**: [Artificial Analysis’s evaluation](https://x.com/ArtificialAnlys/status/2032150888530526411)은 **Grok 4.20 (reasoning)**을 Intelligence Index **48**로 두며, 최상위권 아래지만 **2M context window**, 더 낮은 가격(**$2/$6 per 1M in/out tokens**), 빠른 속도, 그리고 **non-hallucination metric**에서 최고 측정치를 강조했다. [@scaling01](https://x.com/scaling01/status/2032136285989613790)과 [Vals](https://x.com/ValsAI/status/2032177163169075686)도 대체로 “프런티어 도약은 아니지만 더 싸고 더 빠르며, 일부 프로덕션에서 더 쓸모 있을 수 있다”는 내러티브를 강화했다.
- **Efficiency and architecture remain central themes**: [FLUX.2 klein 9B-KV](https://x.com/bfl_ml/status/2032110512381837735)는 품질 저하 없이 이미지 편집이 **2x–2.5x faster**라고 보고됐고, [Reka Edge](https://x.com/RekaAILabs/status/2032132996422082619)는 **98ms time-to-first-token**을 내세운 저지연 **7B VLM**으로 소개됐다. 연구 측면에서는 [looped transformers with gated memory banks](https://x.com/dair_ai/status/2032107624007876781), [LM head gradient bottlenecks](https://x.com/nthngdy/status/2032172281921712152), [reasoning probes for early CoT exit](https://x.com/GoodfireAI/status/2032157754077691980), [Flash-KMeans](https://x.com/_akhaliq/status/2032135596576059425) 등이 언급되며, **training signal quality**, **inference efficiency**, **adaptive compute**에서의 이득을 찾는 흐름이 이어졌다.

### Applied AI: Maps, Health, Video, and Forecasting

- **Google Maps is being rebuilt around Gemini as an interaction layer, not just a map layer**: Google의 [Maps upgrade thread](https://x.com/Google/status/2032079594191261938)는 10년여 만의 최대 업데이트로, 대화형 “Ask Maps” 모드와 **Immersive Navigation**을 포함한다([details](https://x.com/Google/status/2032079598683332742)). 더 흥미로운 함의는 [@dbreunig](https://x.com/dbreunig/status/2032096774895387101) 같은 관측자들이 지적했듯, 미래 UX가 더 이상 “지도처럼 보이지” 않을 수 있고 LLM이 지리공간 지식의 1차 인터페이스가 될 수 있다는 점이다.
- **Healthcare copilots are moving toward longitudinal personal context**: Microsoft는 [Copilot Health](https://x.com/mustafasuleyman/status/2032092644483141928)를 미국에서 출시하며, **EHR records, wearables, personal history, and lab data**를 통합한 전용 건강 프로필을 제시했다. 또한 사용자 데이터가 모델 학습에 사용되지 않으며, 출력은 인용(citation)과 함께 신뢰할 수 있는 건강 소스에 기반한다고 강조했다. 한편 [Glass Health added self-serve EHR integrations](https://x.com/GlassHealthHQ/status/2032131756158300421)는 athenaOne과 eClinicalWorks에 대한 셀프서비스 EHR 연동을 추가했다.
- **Video generation APIs are getting more product-ready**: OpenAI의 [Sora 2-powered Video API update](https://x.com/OpenAIDevs/status/2032142448970121468)는 커스텀 캐릭터/오브젝트, 16:9·9:16 출력, 20초 클립, continuation, batch jobs 등을 추가했다.
- **Groundsource is one of the stronger “AI for public-good data” announcements**: Google Research의 [Groundsource](https://x.com/GoogleResearch/status/2032083465861284161)는 Gemini로 5M+ 공개 보고서를 구조화해 150+개국의 2.6M+ 홍수 이벤트 데이터셋을 만들고, 도시 돌발 홍수 예측을 최대 24시간 앞당길 수 있게 한다.

### Top tweets (by engagement)

- **Claude interactive charts and diagrams**: Anthropic이 [interactive charts/diagrams in chat](https://x.com/claudeai/status/2032124273587077133)를 출시하며, LLM이 더 풍부한 프런트엔드로 이동하는 흐름을 보여줬다.
- **Google Maps + Gemini**: Google의 [major Maps upgrade](https://x.com/Google/status/2032079594191261938)는 대화형 장소 검색과 immersive navigation을 포함한 대규모 제품 업데이트였다.
- **CursorBench / coding evals**: Cursor의 [new eval methodology for coding agents](https://x.com/cursor_ai/status/2032148125448610145)는 능력뿐 아니라 효율까지 평가하려는 시도로 주목을 받았다.
- **Perplexity Computer rollout**: [Perplexity Computer for Pro users](https://x.com/perplexity_ai/status/2032160576303219185)는 더 넓은 커넥터/스킬을 포함한 “computer-use” 제품 수요를 시사했다.
- **OpenJarvis on-device personal AI**: Stanford의 [OpenJarvis launch](https://x.com/JonSaadFalcon/status/2032152011542839733)는 로컬 우선(local-first) 개인 AI 프레임워크로 눈에 띄었다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen3.5-9B is actually quite good for agentic coding](https://www.reddit.com/r/LocalLLaMA/comments/1rrw8df/qwen359b_is_actually_quite_good_for_agentic_coding/)** (Activity: 428): RTX 3060(12GB VRAM) 환경에서 Qwen 3.5-9B의 에이전트형 코딩 성능을 비교·공유했으며, 1-bit 양자화(quantization)는 빠르지만 툴 호출이 불안정했고 2-bit는 느리고 불안정하다는 경험담 속에서 Qwen3.5-9B는 비교적 안정적으로 장시간 동작했다고 보고했다.
- **[I spent 8+ hours benchmarking every MoE backend for Qwen3.5-397B NVFP4 on 4x RTX PRO 6000 (SM120). Here's what I found.](https://www.reddit.com/r/LocalLLaMA/comments/1rrfqlu/i_spent_8_hours_benchmarking_every_moe_backend/)** (Activity: 349): `nvidia/Qwen3.5-397B-A17B-NVFP4`를 4x RTX PRO 6000에서 벤치마크하며 성능 병목을 CUTLASS 커널/SM120 제약과 연결해 분석했고, 재현/이슈 맥락으로 [CUTLASS issue #3096](https://github.com/NVIDIA/cutlass/issues/3096)를 언급했다.
- **[Qwen3.5-9B Quantization Comparison](https://www.reddit.com/r/LocalLLaMA/comments/1rr72lr/qwen359b_quantization_comparison/)** (Activity: 398): Qwen3.5-9B의 GGUF 양자화를 KLD/PPL로 비교하며 VRAM 제약 상황의 선택지를 정리했고, 토큰 단위 드리프트 시각화를 [HuggingFace](https://huggingface.co/spaces/cmh/Qwen3.5-9B-GGUF-quant-drift)로 공유했다.
- **[M5 Max just arrived - benchmarks incoming](https://www.reddit.com/r/LocalLLaMA/comments/1rqnpvj/m5_max_just_arrived_benchmarks_incoming/)** (Activity: 2679): M5 Max 128GB 14" 장비 도착 후 `mlx_lm`로 다양한 모델을 벤치마크하며 환경/툴 이슈를 해결하는 과정과 메모리·속도 수치를 공유했다.
- **[Llama.cpp now with a true reasoning budget!](https://www.reddit.com/r/LocalLLaMA/comments/1rr6wqb/llamacpp_now_with_a_true_reasoning_budget/)** (Activity: 444): `llama.cpp`의 “true reasoning budget” 업데이트를 소개하며 샘플러 기반 토큰 카운팅/종료 방식을 설명했고, 상세는 [commit](https://github.com/ggml-org/llama.cpp/commit/acb7c790698fa28a0fbfc0468804926815b94de3)로 연결됐다.
- **[llama.cpp on $500 MacBook Neo: Prompt: 7.8 t/s  / Generation: 3.9 t/s on Qwen3.5 9B Q3_K_M](https://www.reddit.com/r/LocalLLaMA/comments/1rr197e/llamacpp_on_500_macbook_neo_prompt_78_ts/)** (Activity: 636): Apple A18 Pro 기반 “MacBook Neo”에서 `llama.cpp`를 빌드해 Qwen3.5 9B Q3_K_M 성능을 공유했고, 모델 출처로 [Hugging Face repository](https://huggingface.co/unsloth/Qwen3.5-9B-GGUF)를 언급했다.
- **[OmniCoder-9B | 9B coding agent fine-tuned on 425K agentic trajectories](https://www.reddit.com/r/LocalLLaMA/comments/1rs6td4/omnicoder9b_9b_coding_agent_finetuned_on_425k/)** (Activity: 330): [Tesslate](https://tesslate.com/)의 OmniCoder-9B를 [Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B) 기반 미세조정(fine-tuning) 코딩 에이전트로 소개하며, 대규모 에이전트 트래젝터리 기반 학습·긴 컨텍스트·오픈 웨이트 등을 강조했다.
- **[I was backend lead at Manus. After building agents for 2 years, I stopped using function calling entirely. Here's what I use instead.](https://www.reddit.com/r/LocalLLaMA/comments/1rrisqn/i_was_backend_lead_at_manus_after_building_agents/)** (Activity: 2145): 타이핑된 함수 호출 대신 단일 `run(command="...")` 툴 + 유닉스 스타일 CLI로 에이전트를 운영하는 접근을 주장하며, 맥락으로 [Pinix](https://github.com/epiral/pinix)와 [agent-clip](https://github.com/epiral/agent-clip)을 언급했다.
- **[Nemotron 3 Super Released](https://www.reddit.com/r/LocalLLaMA/comments/1rqy3cx/nemotron_3_super_released/)** (Activity: 755): NVIDIA Nemotron 3 Super(오픈소스 가중치/데이터/레시피 포함) 공개 소식을 정리했고, 배포 위치로 [Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-FP8)를 공유했다.
- **[New benchmark just dropped.](https://www.reddit.com/r/LocalLLaMA/comments/1rqlaw4/new_benchmark_just_dropped/)** (Activity: 1359): Three.js로 “Thriller” 장면을 요구하는 농담성 벤치마크/프롬프트를 두고, 여러 모델의 특성을 유머러스하게 비교했다.
- **[Nvidia Will Spend $26 Billion to Build Open-Weight AI Models, Filings Show](https://www.reddit.com/r/LocalLLaMA/comments/1rr4by8/nvidia_will_spend_26_billion_to_build_openweight/)** (Activity: 1146): Nvidia가 향후 5년간 오픈웨이트 모델 개발에 260억 달러를 투자한다는 보도를 요약했고, 출처로 [original article](https://www.wired.com/story/nvidia-investing-26-billion-open-source-models/)를 링크했다.

### Less Technical Subreddits

- 대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- **[Anthropic: Recursive Self Improvement Is Here. The Most Disruptive Company In The World.](https://www.reddit.com/r/singularity/comments/1rqymbn/anthropic_recursive_self_improvement_is_here_the/)** (Activity: 1803): Claude가 차세대 모델을 위한 코드의 상당 부분을 작성한다는 주장과 안전 지연, 일자리 영향 경고 등 Anthropic 관련 논점을 모아 논의했다.
- **[Claude now creates interactive charts, diagrams and visualizations](https://www.reddit.com/r/ClaudeAI/comments/1rruo4u/claude_now_creates_interactive_charts_diagrams/)** (Activity: 1174): Claude의 인터랙티브 시각화 기능(베타, 무료 포함)을 소개하며, 자세한 내용은 [official blog](https://claude.com/blog/claude-builds-visuals)를 참고로 제시했다.
- **[I delayed my product launch for months because I couldn't afford demo videos. Spent a weekend with Claude Code and Remotion. Now my reels are getting thousands of views.](https://www.reddit.com/r/ClaudeAI/comments/1rr47ya/i_delayed_my_product_launch_for_months_because_i_couldnt_afford_demo_videos_spent_a_weekend_with_claude_code_and_remotion_now_my_reels_are_getting_thousands_of_views/)** (Activity: 1152): Claude Code와 Remotion으로 데모 영상을 제작해 비용을 줄이고 제작 시간을 단축했다는 경험담을 공유했다.
- **[4 months of Claude Code and honestly the hardest part isn’t coding](https://www.reddit.com/r/ClaudeAI/comments/1rr1069/4_months_of_claude_code_and_honestly_the_hardest/)** (Activity: 1448): iOS 앱 개발에서 코딩보다 디자인·실사용 디버깅이 더 어렵다는 경험과, 민감 데이터 처리에서 보안(감사/규칙/함수 등)의 중요성을 강조했다.
- **[Two Claude Code features I slept on that completely changed how I use it: Stop Hooks + Memory files](https://www.reddit.com/r/ClaudeAI/comments/1rqxzlp/two_claude_code_features_i_slept_on_that/)** (Activity: 690): Stop Hooks와 Memory Files로 워크플로 자동화/컨텍스트 보존을 강화하는 방법을 공유했다.
- **[Anthropic just released free official courses on MCP, Claude Code, and their API (Anthropic Academy).](https://www.reddit.com/r/PromptEngineering/comments/1rqotfe/anthropic_just_released_free_official_courses_on/)** (Activity: 296): Anthropic Academy의 무료 공식 코스(MCP/Claude Code/API 등)를 소개하며 접속 링크로 [here](https://anthropic.skilljar.com/)를, 추가 정리로 [Mindwired AI](https://mindwiredai.com/2026/03/11/anthropic-academy-free-ai-courses/)를 언급했다.
- **[Maybe is deepseek 4?](https://www.reddit.com/r/DeepSeek/comments/1rr5k4u/maybe_is_deepseek_4/)** (Activity: 325): OpenRouter 앱 화면으로 보이는 스크린샷을 두고 새로운 모델/버전 가능성을 추측했다.
- **[Deepseek V4 Confirmed?](https://www.reddit.com/r/DeepSeek/comments/1rrhd48/deepseek_v4_confirmed/)** (Activity: 316): 대만 관련 응답 스크린샷을 근거로 모델 출처를 추정했으나, DeepSeek V4 여부에 대한 회의적 반응도 있었다.
- **[Finally it's near](https://www.reddit.com/r/DeepSeek/comments/1rquno4/finally_its_near/)** (Activity: 249): “DeepSeek-V4-INT8”로 보이는 밈/티저 이미지를 두고 출시 임박을 추측했으나, 구체 정보는 제한적이었다.
- **[People are getting OpenClaw installed for free in China. Thousands are queuing for OpenClaw setup.](https://www.reddit.com/r/DeepSeek/comments/1rroybq/people_are_getting_openclaw_installed_for_free_in_china_thousands_are_queuing_for_openclaw_setup/)** (Activity: 134): 중국에서 OpenClaw 무료 설치 행사(클라우드 사용으로 수익 발생 가능)와 함께 보안 우려, 제거 비용(500 RMB) 같은 논점을 다뤘다.
- **[People are getting OpenClaw installed for free in China. As Chinese tech giants like Alibaba push AI adoption, thousands are queuing.](https://www.reddit.com/r/Qwen_AI/comments/1rrelf0/people_are_getting_openclaw_installed_for_free_in_china_as_chinese_tech_giants_like_alibaba_push_ai_adoption_thousands_are_queuing/)** (Activity: 125): OpenClaw(오픈소스/자체 설치)과 Manus(SaaS)의 대비를 “소유 vs 임대” 관점에서 논의하며, 중국 내 AI 채택 분위기와 맞물린 해석을 공유했다.

---

## AI Discord Recap

### AINews

- **접근 종료 공지**: Discord가 접근을 종료해 더는 이 형태로 제공하지 않지만, 새로운 AINews를 곧 출시할 예정이며 “it was a good run”이라는 메시지로 마무리했다.
