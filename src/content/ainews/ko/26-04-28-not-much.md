---
title: "NVIDIA Nemotron 3 Nano Omni 공개"
summary:
  - "NVIDIA가 오픈 옴니 모델을 공개"
  - "vLLM 0.20이 메모리 효율을 개선"
  - "Poolside가 Laguna XS.2를 출시"
  - "Mistral이 Workflows 프리뷰를 공개"
  - "ChatGPT가 Erdős 문제 풀이에 기여"
date: 2026-04-28
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-28-not-much.md"
hasHeadline: false
headline: "NVIDIA Nemotron 3 Nano Omni 공개"
tags:
  - NVIDIA
  - vLLM
  - Poolside
  - Mistral
  - ChatGPT
isFeatured: false
---

## 헤드라인: NVIDIA Nemotron 3 Nano Omni 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

NVIDIA가 오늘의 가장 큰 인프라 네이티브 모델 출시로 Nemotron 3 Nano Omni를 공개했다. 이 모델은 30B / A3B 규모의 오픈 멀티모달 MoE로, 256K 컨텍스트를 지원하며 텍스트, 이미지, 비디오, 오디오, 문서까지 다루는 에이전트형 워크로드를 겨냥한다.

출시 직후 여러 호스팅 및 로컬 실행 스택에서 당일 지원이 이어졌고, 후속 게시물에서는 Parakeet 인코더 기반 음성/오디오 이해, 현재 영어 전용 지원, Open ASR 리더보드 5.95% WER 등이 주요 사양으로 언급됐다. 여러 호스트는 유사한 오픈 옴니 모델 대비 약 9배 처리량을 내세웠다.

---

## AI Twitter Recap

### 추론 시스템, vLLM 0.20, DeepSeek V4를 둘러싼 하드웨어/커널 경쟁

- **vLLM 최신 릴리스는 메모리와 MoE 서빙 효율에 크게 집중**: [vLLM v0.20.0](https://x.com/TeksEdge/status/2048983564801450315)은 **4배 KV 용량**을 위한 **TurboQuant 2-bit KV cache**, **SM90+**에서 MLA prefill용 FA4 재활성화, 새로운 **vLLM IR** 기반, 보고 기준 **2.1% 엔드투엔드 지연시간 개선**을 위한 fused RMSNorm을 포함해 출시됐다. 또한 **Blackwell의 DeepSeek V4 MegaMoE**, Jetson Thor, ROCm, Intel XPU, 더 쉬운 GB200/Grace-Blackwell 설정까지 지원 업데이트가 확장됐다. 동시에 [SemiAnalysis](https://x.com/SemiAnalysis_/status/2048957715955765284)는 **B200/B300/H200/GB200 분리형(disaggregated) 구성**에서 DeepSeek V4 Pro 서빙 초기 결과를 강조하며, 이 워크로드에서 **B300이 H200보다 최대 8배 빠를 수 있다**고 주장했고, **EP dispatch + EP combine + GEMMs + SwiGLU**를 단일 메가 커널로 융합하는 **DeepGEMM MegaMoE** 기반 vLLM 0.20 벤치마킹을 예고했다.
- **생태계는 새 오픈 모델의 빠른 day-0 지원으로 수렴 중**: [vLLM added Day-0 support for Poolside’s Laguna XS.2](https://x.com/RedHat_AI/status/2049150925944566180)했고, 별도로 [Ling-2.6-flash](https://x.com/vllm_project/status/2049158062666399909)도 지원했으며, [vLLM also published Day-0 support for NVIDIA’s Nemotron 3 Nano Omni](https://x.com/vllm_project/status/2049171268344426846)했다. vLLM 밖에서도 여러 게시물이 서빙 트레이드오프에 집중했다. [Jeremy Howard noted DeepSeek V4’s support for prefill](https://x.com/jeremyphoward/status/2049098509530583199)은 많은 제공자가 포기한 기능이라고 언급했고, [Maharshi](https://x.com/maharshii/status/2049058891389108640)는 **동적 활성화 양자화(dynamic activation quantization)**의 오버헤드를 지적하며, 보정 비용에도 불구하고 **정적 양자화(static quantization)**가 추론(inference) 속도에서 자주 이긴다고 주장했다. 대체 스택 이식성에 대한 관심도 커졌다. [teortaxesTex argued DeepSeek is structurally moving away from CUDA lock-in via TileKernels](https://x.com/teortaxesTex/status/2049185408785998217)하며, 모델 벤더가 NVIDIA 전용 배포보다 이기종 또는 자국산 가속기 플릿에 더 최적화할 수 있다고 제안했다.

### 오픈 모델 출시: Poolside Laguna XS.2, NVIDIA Nemotron 3 Nano Omni, TRELLIS.2

- **Poolside는 배포 친화적인 오픈 웨이트 코더로 첫 공개 모델을 출시**: [@poolsideai announced Laguna XS.2](https://x.com/poolsideai/status/2049144111626670282)는 완전히 자체 학습한 **33B 전체 / 3B 활성 MoE** 코딩 모델이며, **Apache 2.0**으로 공개됐고 **단일 GPU**에서 실행 가능하다고 소개됐다. [Poolside’s broader release](https://x.com/eisokant/status/2049142230397370537)에는 **Laguna M.1**과 에이전트 harness도 포함됐으며, 회사가 자체 **데이터, 학습 인프라, RL, 추론 스택**으로 처음부터 학습했다는 점을 강조했다. 커뮤니티 요약은 더 자세한 맥락을 더했다. [Aymeric Roucher](https://x.com/AymericRoucher/status/2049156715304935451)는 **225B/23B 활성** 및 **33B/3B 활성** 두 코더 모델을 설명하며 **하이브리드 어텐션**, **FP8 KV cache**, **Qwen-3.5**에 가까운 성능 주장을 언급했고, [Ollama](https://x.com/ollama/status/2049184817603031463)는 즉시 지원했다.
- **NVIDIA Nemotron 3 Nano Omni는 오늘의 가장 큰 인프라 네이티브 모델 출시**: [@NVIDIAAI introduced Nemotron 3 Nano Omni](https://x.com/NVIDIAAI/status/2049159441870717428)는 **텍스트, 이미지, 비디오, 오디오, 문서**를 아우르는 에이전트형 워크로드를 위해 구축된 **256K 컨텍스트** 지원 오픈 **30B / A3B 멀티모달 MoE**다. 스택 전반의 배포도 즉시 이뤄졌다. [OpenRouter](https://x.com/OpenRouter/status/2049164366218772526), [LM Studio](https://x.com/lmstudio/status/2049172192705864091), [Ollama](https://x.com/ollama/status/2049194377751437470), [Unsloth](https://x.com/UnslothAI/status/2049161390150365344), [fal](https://x.com/fal/status/2049160999442198632), [Fireworks](https://x.com/FireworksAI_HQ/status/2049159136802398546), [DeepInfra](https://x.com/DeepInfra/status/2049158141070524815), [Together](https://x.com/togethercompute/status/2049160446708711883), [Baseten](https://x.com/baseten/status/2049160818575749300), [Canonical](https://x.com/Canonical/status/2049159988174602712) 등이 모두 당일 지원을 발표했다. 후속 게시물에서 핵심 사양도 공개됐다. [Piotr Żelasko](https://x.com/PiotrZelasko/status/2049162049599455725)는 이를 NVIDIA의 첫 **omni** 릴리스로 설명하며, **Parakeet encoder** 기반 음성/오디오 이해, 현재 **영어 전용**, Open ASR 리더보드 **5.95% WER**을 언급했다. 여러 호스트는 유사한 오픈 옴니 모델 대비 **약 9배 처리량**을 인용했다.
- **기타 주목할 모델/논문 출시**: [Microsoft’s TRELLIS.2](https://x.com/kimmonismus/status/2049099376476459372)는 최대 **1536³ PBR 텍스처 자산**을 생성하는 오픈소스 **4B image-to-3D 모델**로, **16배 공간 압축**을 갖춘 네이티브 3D VAE 기반이다. 월드 모델 쪽에서는 [World-R1](https://x.com/wjwang2003/status/2049136028968272260)이 기존 비디오 모델이 이미 **3D 구조**를 인코딩하고 있으며 **RL**로 “깨울 수 있다”고 주장했다. 이 접근은 **아키텍처 변경 없음, 추가 비디오 학습 데이터 없음, 추가 추론 비용 없음**을 내세운다.

### 에이전트, 로컬 우선 툴링, 프로덕션 오케스트레이션

- **에이전트 빌더는 데모에서 프로덕션 기본 요소로 이동 중**: [Mistral launched Workflows in public preview](https://x.com/MistralAI/status/2049128071874179091)는 기업 AI 프로세스를 내구성 있고 관측 가능하며 장애에 강한 프로덕션 시스템으로 전환하기 위한 오케스트레이션 레이어다. 관련 게시물도 같은 주제를 반복했다. [Sydney Runkle framed durable execution](https://x.com/sydneyrunkle/status/2049132897227936073)은 장기 실행 에이전트의 핵심 요구사항으로 durable execution을 제시했고, [threepointone described work on subagents / agents-as-tools with persistence, streaming, and resumption](https://x.com/threepointone/status/2049088722835042475)는 지속성, 스트리밍, 재개를 갖춘 subagents / agents-as-tools 작업을 설명했다.
- **로컬/오프라인 에이전트는 희망사항에서 신뢰 가능한 워크플로로 이동**: [Teknium asserted “totally offline agents are possible”](https://x.com/Teknium/status/2048975223853350976)라고 주장했고, [Niels Rogge demoed Pi + local models](https://x.com/NielsRogge/status/2049128153658839324)는 데스크톱 정리를 시연했으며, [Google Gemma shared a tutorial for local coding agents](https://x.com/googlegemma/status/2049163687639007451)도 공개됐다. Hugging Face의 로컬 추진은 채택 숫자에서도 드러났다. [Clement Delangue said 300,000 users have added hardware specs to the Hub](https://x.com/ClementDelangue/status/2049139562929143917)해 로컬 실행 가능 모델을 찾도록 했다고 말했다. 이를 보완해 [Ammaar open-sourced a vibe-coding app running Gemma 4 fully on-device with MLX](https://x.com/ammaar/status/2049169134429073471)했고, [Kimmonismus highlighted Sigma](https://x.com/kimmonismus/status/2049244932477759767)는 오픈 모델을 사용하는 비공개 브라우저 기반 로컬 에이전트 개념을 소개했다.
- **Hermes와 인접 에이전트 harness가 실제 견인력을 얻는 중**: 여러 게시물은 Hermes가 지시 따르기나 실무 워크플로에서 OpenClaw를 능가한다고 보고했다. 여기에는 [SecretArjun](https://x.com/SecretArjun/status/2049006382763110639), [somewheresy](https://x.com/somewheresy/status/2049089485938315614), [Telegram](https://x.com/lizliz404/status/2049084890717806877)을 통한 Hermes 배포 사용자, [medical literature extraction](https://x.com/bobvarkey/status/2049120693649125687) 활용 사례가 포함됐다. 연구 에이전트 쪽에서는 [Hugging Face’s ML Intern](https://x.com/_lewtun/status/2049021398312468815)이 Spaces에서 트렌딩했고, 이후 학습 작업을 블랙박스가 아니라 관측 가능하게 만들기 위해 [native metric logging + Trackio integration](https://x.com/akseljoonas/status/2049183527703396699)을 얻었다.

### 벤치마크, 평가, 주목할 연구 결과

- **모델 벤치마킹은 여전히 파편화됐지만 몇몇 신호가 두드러짐**: [Epoch reported GPT-5.5 Pro reaching **159 on the Epoch Capabilities Index**](https://x.com/EpochAIResearch/status/2049186851844771888)라고 보고했으며, **FrontierMath**에서 **Tier 1-3 52%**, **Tier 4 40%**라는 신기록을 냈고, 이전에 어떤 모델도 풀지 못한 Tier 4 문제 2개를 포함했다. 별도로 [Greg Kamradt said ARC-AGI-3 testing for GPT-5.5 and Opus 4.7 had completed](https://x.com/GregKamradt/status/2049121093307547654)으며, 현재 실패 양상을 분석 중이라고 했다.
- **더 현실적인 에이전트 및 엔지니어링 행동을 겨냥한 새 벤치마크들**: [Lysandre announced a benchmark for making Transformers more agent-friendly](https://x.com/LysandreJik/status/2049053056814436352)를 발표했고, [VibeBench](https://x.com/jpschroeder/status/2049139723776495800)는 모델이 실제 업무에서 어떻게 느껴지는지 측정하기 위해 **자격을 갖춘 소프트웨어 엔지니어 1,000명**의 주관적 테스트를 제안했다. 문서 지능 영역에서는 [LlamaIndex’s ParseBench](https://x.com/llama_index/status/2049139409316946011)가 OCR 벤치마크가 취소선과 위첨자 같은 **의미론적 서식**을 놓친다고 강조했다. 이런 서식은 에이전트에게 의미를 실질적으로 바꿀 수 있다.
- **구체적 엔지니어링 함의가 있는 연구 노트**: [Rosinality flagged bugs in DeepSpeed and OpenRLHF that reduce SFT performance](https://x.com/rosinality/status/2049024030749970699)는 SFT 성능을 낮추는 DeepSpeed와 OpenRLHF 버그를 지적했고, 이는 선행 연구에도 영향을 준다. [Arjun Kocher published a faithful implementation of Compressed Sparse Attention from the DeepSeek-V4 paper](https://x.com/arjunkocher/status/2049066844925936041). [che_shr_cat showed single-block transformers can solve Extreme Sudoku only with an explicit scratchpad and inverted routing init](https://x.com/che_shr_cat/status/2049081240762876261)했으며, 그렇지 않으면 성능은 0이라고 했다. 최적화 쪽에서는 [Keller Jordan released a lightweight Modded-NanoGPT optimizer benchmark](https://x.com/kellerjordan0/status/2049193527440187494)를 공개했다. 이는 **Muon**과 **AdamW** 같은 방법을 재현 가능한 speedrun 스타일 과제로 비교하도록 설계됐다.

### 플랫폼 경제학, API 가격, 폐쇄형 모델 신뢰성 우려

- **오픈 모델 경제성은 실질적 압력 요인이 되는 중**: [Aidan Gomez argued private deployments matter because controlling the model means controlling cost](https://x.com/aidangomez/status/2049083965407969690)라고 주장했고, [Vtrivedy made the case that many Haiku/Flash workloads should be re-evaluated against open models](https://x.com/Vtrivedy10/status/2049201138310721616)는 **DeepSeek**, **Minimax**, **GLM**, **Nemotron** 같은 계열의 큰 가격 격차와 품질 개선을 근거로 많은 Haiku/Flash 워크로드를 오픈 모델과 재평가해야 한다고 말했다. DeepSeek 자체도 [aggressive V4 Pro pricing cuts and cache discounts](https://x.com/ZhihuFrontier/status/2049027925920637077)로 이 서사를 강화했고, 이후 [extended through end of May](https://x.com/teortaxesTex/status/2049101287161991332)했다.
- **폐쇄형 모델 의존은 선호 문제가 아니라 운영 리스크로 프레이밍되는 중**: [Gergely Orosz summarized Anthropic’s recent silent changes and customer-impacting behavior](https://x.com/GergelyOrosz/status/2049123621826707657)를 폐쇄형 모델이 “massive risks”라는 증거로 요약했고, [Zach Mueller documented regressions in Claude 4.7 for his coding workflow](https://x.com/TheZachMueller/status/2049116099053031563)한 뒤 결국 다른 모델로 전환했다. 토큰화 경제성도 검토 대상이 됐다. [Aran Komatsuzaki quantified a strong non-English token tax, especially for Anthropic](https://x.com/arankomatsuzaki/status/2049125048792006965)했고, 이후 더 많은 모델-언어 쌍으로 비교를 확장해 **Gemini와 Qwen**이 비영어 텍스트에 가장 덜 가혹한 축에 속한다고 확인했다.
- **Codex 사용량 확대**: [OpenAI’s team temporarily reset Codex rate limits for all paid plans](https://x.com/thsottiaux/status/2048997818673537399)해 더 많은 GPT-5.5 빌드를 촉진했다.
- **Claude 장애 / 집중 리스크**: [Yuchen Jin’s joke about Claude Code being down and “the whole Silicon Valley” reacting](https://x.com/Yuchenj_UW/status/2049201297656786999)는 코딩 에이전트가 일상 워크플로에서 얼마나 중심이 됐는지를 포착했다.
- **AI 보조 수학에 대한 OpenAI 입장**: [OpenAI promoted a podcast on GPT-5.4 Pro helping solve a 60-year Erdős problem](https://x.com/OpenAI/status/2049182118069358967)는 프런티어 모델이 형식 연구에서 점점 더 큰 역할을 하는 주목할 사례다.
- **GPT-5.5 채택 신호**: [Sam Altman noted strong enthusiasm for 5.5](https://x.com/sama/status/2049235284655780000)했고, [Epoch’s ECI post](https://x.com/EpochAIResearch/status/2049186851844771888)는 그 분위기 뒤의 더 단단한 벤치마크 신호를 제공했다.

### AI 거버넌스와 국방: Google의 Pentagon 계약이 내부 반발을 부르다

- **가장 논쟁적인 정책 뉴스는 Google의 기밀 Pentagon AI 계약**: [Kimmonismus summarized reporting that Google signed an agreement allowing use of its AI for classified work and “any lawful government purpose”](https://x.com/kimmonismus/status/2049081961222955403)했다고 요약했다. 보도에 따르면 계약 문구는 정부가 안전 필터 수정을 요청할 수 있게 하며, 감시나 자율 무기에 대해서는 구속력 없는 “not intended for” 제한만 제공한다. 이는 Google/DeepMind 내부에서도 이례적으로 공개 비판을 불렀다. [BlackHC calling it “shameful”](https://x.com/BlackHC/status/2049086569718636565)이라고 했고, 사전에 [no internal announcement or discussion beforehand](https://x.com/BlackHC/status/2049086660638543967)가 없었다고 말했다.
- **이 반응은 프런티어 랩의 레드라인 차이를 더 선명하게 만든다는 점에서 중요**: [S. Ó hÉigeartaigh argued Google DeepMind should be scrutinized by the same standards applied to OpenAI](https://x.com/S_OhEigeartaigh/status/2049169065109840069)라고 주장했고, [TurnTrout said Google’s terms were weaker than OpenAI’s fig-leaf restrictions](https://x.com/Turn_Trout/status/2049153749743264231)라고 말했다. 이 이야기는 공개 논쟁에서 Anthropic의 대조적 태도도 강화했다. 이전 보도에 따르면 Anthropic이 특정 레드라인을 포기하지 않으면서 조달 마찰이 생겼기 때문이다. 엔지니어에게 실무적 시사점은 정치보다 플랫폼 거버넌스에 가깝다. **안전 정책, 배포 통제, 계약 문구가 프런티어 AI 제공자의 제품 표면 일부가 되고 있다**.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen 3.6 27B BF16 vs Q4_K_M vs Q8_0 GGUF evaluation](https://www.reddit.com/r/LocalLLaMA/comments/1sxzqry/qwen_36_27b_bf16_vs_q4_k_m_vs_q8_0_gguf_evaluation/)** (Activity: 731): 이미지는 Qwen 3.6 27B 모델의 BF16, Q4_K_M, Q8_0 GGUF 세 가지 양자화(quantization) 변형을 llama-cpp-python과 Neo AI Engineer로 평가한 벤치마크 비교를 제공한다. HumanEval, HellaSwag, BFCL을 포함하며, Q4_K_M은 BF16보다 처리량이 1.45배 빠르고 피크 RAM을 48% 적게 쓰며 모델 크기를 68.8% 줄이면서 거의 동일한 함수 호출 점수를 유지한다. 댓글에서는 오류 막대 부재, 샘플링 오류 가능성, Q8_0 결과의 KV cache 양자화 여부에 대한 우려가 나왔다.
- **[Luce DFlash: Qwen3.6-27B at up to 2x throughput on a single RTX 3090](https://www.reddit.com/r/LocalLLaMA/comments/1sx8uok/luce_dflash_qwen3627b_at_up_to_2x_throughput_on_a/)** (Activity: 982): **Luce DFlash**는 `ggml` 위에 구축된 독립형 C++/CUDA 스택으로 단일 RTX 3090에서 Qwen3.6-27B를 실행하도록 최적화한 speculative decoding 구현이다. 재학습 없이 HumanEval, GSM8K, Math500 등에서 autoregressive decoding 대비 최대 `1.98x` 처리량을 달성한다. 댓글에서는 로컬 AI 추론(inference) 속도 개선 가능성을 높게 보면서도, 코딩이나 도구 호출처럼 정밀도가 중요한 작업에서 양자화가 정확도에 미치는 영향을 우려했다.
- **[To 16GB VRAM users, plug in your old GPU](https://www.reddit.com/r/LocalLLaMA/comments/1swzjnu/to_16gb_vram_users_plug_in_your_old_gpu/)** (Activity: 797): 이 글은 `16GB VRAM` 주 GPU에 최소 `6GB VRAM`의 오래된 GPU를 함께 사용해 `llama-server`에서 `Qwen3.6-27B` 같은 dense 모델을 실행하는 방법을 설명한다. `5070Ti`와 `2060`으로 총 `22GB VRAM`에 도달해 `24GB`급 카드 성능에 접근하며, `dev=Vulkan1,Vulkan2`, `no-mmap`, `n-gpu-layers=999` 같은 설정을 사용한다. 댓글에서는 `Vulkan`과 `CUDA` 성능 논쟁, 보조 GPU가 VRAM은 늘리지만 주 GPU 병목을 만들 수 있다는 경험이 공유됐다.

### 새 모델 및 도구 발표

- **[Something from Mistral (Vibe) tomorrow](https://www.reddit.com/r/LocalLLaMA/comments/1sy6xoo/something_from_mistral_vibe_tomorrow/)** (Activity: 312): “Mistral Vibe”의 다음 날 대형 발표 예고 게시물로, 새 모델 출시나 도구 업그레이드 가능성이 추측됐다. 일부 사용자는 현재 모델을 “meh”라고 평가하며 Qwen 3.6 27B 수준의 개선을 기대했고, 다른 댓글은 발표가 새 모델보다 로컬 모델과 잘 통합되는 코딩 에이전트 또는 coding harness일 수 있다고 봤다.
- **[Deepseek Vision Coming](https://www.reddit.com/r/LocalLLaMA/comments/1sxy0o7/deepseek_vision_coming/)** (Activity: 318): **Deepseek Vision**이 곧 출시될 것으로 예상된다는 내용이며, **Xiaokang Chen**의 [𝕏](https://x.com/PKUCXK/status/2049066514284962040) 게시물이 근거로 제시됐다. 기본 모델과 인프라가 이미 마련돼 있어 멀티모달 통합이 pretraining 이후 빠르게 이어질 수 있다는 전망이 나왔다. 댓글에서는 별도 비전 모델보다 네이티브 멀티모달을 포함한 V4.1 같은 통합 모델을 선호한다는 의견이 있었다.
- **[Microsoft Presents "TRELLIS.2": An Open-Source, 4b-Parameter, Image-To-3D Model Producing Up To 1536³ PBR Textured Assets, Built On Native 3D VAES With 16× Spatial Compression, Delivering Efficient, Scalable, High-Fidelity Asset Generation.](https://www.reddit.com/r/LocalLLaMA/comments/1sxf2u0/microsoft_presents_trellis2_an_opensource/)** (Activity: 786): **Microsoft**는 이미지에서 고품질 3D 자산을 생성하는 40억 파라미터 모델 “TRELLIS.2”를 소개했다. O-Voxel이라는 “field-free” sparse voxel 구조로 복잡한 3D 토폴로지와 선명한 특징, 전체 PBR 재질을 재구성하며, `16×` 공간 압축으로 최대 `1536³` 해상도 자산을 만든다. 리소스는 [GitHub](https://github.com/microsoft/TRELLIS.2)와 [Hugging Face](https://huggingface.co/spaces/microsoft/TRELLIS.2)에 있다. 일부 사용자는 이미 몇 달 전 공개된 모델이라고 지적했지만, 커뮤니티 상당수에게는 새 소식으로 보였다.

### 로컬 LLM 사용과 과제

- **[I'm done with using local LLMs for coding](https://www.reddit.com/r/LocalLLaMA/comments/1sxqa2c/im_done_with_using_local_llms_for_coding/)** (Activity: 1981): 작성자는 **Qwen 27B**와 **Gemma 4 31B** 같은 로컬 LLM을 코딩 작업에 사용하며 느낀 불만을 **Claude Code**와 비교해 설명했다. Dockerization 같은 작업에서 의사결정과 도구 호출이 약하고, 장기 실행 프로세스를 잘 처리하지 못하며, 느린 응답과 깨진 prompt cache가 생산성을 떨어뜨린다는 지적이다. 한 댓글은 로컬 LLM 코딩의 느린 추론과 캐싱 문제를 해결하는 [Unsloth's documentation](https://unsloth.ai/docs/basics/claude-code#fixing-90-slower-inference-in-claude-code)을 공유했다.
- **[Duality of r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1sxs71y/duality_of_rlocalllama/)** (Activity: 575): 이미지는 로컬 LLM 코딩에 대한 r/LocalLLaMA 커뮤니티의 상반된 의견을 보여준다. 한쪽은 몇 주간의 시도 끝에 좌절했고, 다른 한쪽은 Terminal-Bench 2.0 테스트를 근거로 로컬 모델이 실제 업무에 가능해졌다고 본다. 댓글에서는 27B급 Qwen 3.6이 trillion-parameter 모델과 직접 경쟁할 수는 없지만, 워크플로를 효율적으로 설계하면 보조 실행용으로 유용할 수 있다는 논의가 이어졌다.
- **[A warning to newbies - A lesson on network security](https://www.reddit.com/r/LocalLLM/comments/1sxhlmv/a_warning_to_newbies_a_lesson_on_network_security/)** (Activity: 355): 글은 373개 기기가 API 키 없이 LM Studio 인스턴스를 공개 노출하고 있는 네트워크 보안 문제를 지적한다. 지도 이미지에서는 태국이 194개로 가장 많았다. 작성자는 Tailscale이나 인증이 있는 reverse proxy 같은 적절한 보안 조치 없이 LLM 플랫폼을 인터넷에 노출하지 말라고 강조했다. 댓글에서는 원격 프롬프트 실행 가능성과 포트 포워딩 위험이 논의됐다.

### Less Technical Subreddits

- **[Anthropic just quietly locked Opus behind a paywall-within-a-paywall for Pro users in Claude Code](https://www.reddit.com/r/ClaudeAI/comments/1sxi9mo/anthropic_just_quietly_locked_opus_behind_a/)** (Activity: 1053): **Anthropic**이 **Claude Code** Pro 사용자에게도 **Opus models** 접근을 위해 추가 결제를 요구한다는 의혹이 제기됐다. Pro 플랜은 `$20/month`지만, 지원 문서상 기본 모델은 **Sonnet 4.5**이고 Opus 4.5는 추가 결제가 필요한 것으로 보였다는 내용이다. 다만 ClaudeOfficial은 해당 정보가 오래됐고 Opus 4.5가 1월부터 Pro 플랜에 배포됐으며 지원 문서가 갱신되지 않았다고 설명했다.
- **[GitHub Copilot 9x price increase for Claude models](https://www.reddit.com/r/ClaudeAI/comments/1sxcxge/github_copilot_9x_price_increase_for_claude_models/)** (Activity: 803): GitHub Copilot이 6월부터 Claude 모델에 대해 `900%` 가격 인상을 적용하며 고정 플랜에서 사용량 기반 과금으로 전환한다는 내용이다. 세부 내용은 [GitHub's documentation](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing#model-multipliers-for-annual-copilot-pro-and-copilot-pro-subscribers)과 [press release](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)에 있다. 댓글에서는 에이전트 작업과 토큰 사용량 가시성이 부족해 기업 고객의 단위 경제성이 크게 악화될 수 있다는 우려가 나왔다.
- **[Anthropic just quietly locked Opus behind a paywall-within-a-paywall for Pro users in Claude Code](https://www.reddit.com/r/ClaudeCode/comments/1sxi7uh/anthropic_just_quietly_locked_opus_behind_a/)** (Activity: 653): 이미지는 **Anthropic**이 Claude Code의 Opus 모델을 Pro 사용자에게도 추가 paywall 뒤에 둔 것처럼 보인다는 논란을 보여준다. 한 댓글은 지원 문서가 오래됐고 Opus 4.5가 1월부터 포함됐다고 설명하며 [Wayback Machine](https://web.archive.org/web/20251204151142/https://support.claude.com/en/articles/11940350-claude-code-model-configuration)을 근거로 들었다. 다른 댓글은 Opus가 토큰을 많이 소비해 사용자 quota를 빠르게 소진한다고 비판했다.
- **[Differences Between GPT 5.4 and GPT 5.5 on MineBench](https://www.reddit.com/r/singularity/comments/1sxapqb/differences_between_gpt_54_and_gpt_55_on_minebench/)** (Activity: 465): MineBench로 **GPT 5.4**와 **GPT 5.5**를 비교한 글로, **GPT 5.5**가 **GPT 5.4** 대비 소폭 개선됐고 더 적은 계산 자원으로 유사한 출력 품질을 달성한다는 OpenAI 주장과 맞는 결과를 보였다고 한다. **GPT 5.5** 실행 비용은 `$19.98`, 평균 추론 시간은 `624 seconds`였고 **GPT 5.4**는 약 `$25`였다. 댓글에서는 우주비행사 바이저의 지구 반사 같은 세부 묘사가 인상적이었다는 평가와, 랜덤 색 블록으로 다소 noisy해졌다는 관찰이 함께 나왔다.
- **[GPT 5.5 is unbelievably wasteful with tokens](https://www.reddit.com/r/CLine/comments/1sxc6wr/gpt_55_is_unbelievably_wasteful_with_tokens/)** (Activity: 14): **GPT 5.5**를 Codex 외부에서 사용할 때 토큰 소비와 비용이 매우 높으며, 단일 요청이 `$5`에 달했다는 내용이다. 댓글은 **GPT 5.5**나 **Claude Opus 4.7:1m xhigh** 같은 모델의 비용은 제공 가치와 비교해 평가해야 한다고 봤다.
- **[Chat GPT 5.4 solved a 60+ years unsolved erdos problems in a single shot](https://www.reddit.com/r/singularity/comments/1sxixck/chat_gpt_54_solved_a_60_years_unsolved_erdos/)** (Activity: 2265): 이미지는 primitive set에 대한 합과 부등식을 다루는 Erdős 문제 관련 수학 증명을 보여준다. 주장에 따르면 **Chat GPT 5.4**가 이 문제를 `80 minutes and 17 seconds` 만에 해결했다. 댓글에서는 성과가 인상적이지만 “50년간의 수학자보다 더 잘 추론했다”는 표현은 과장이라는 지적이 있었다.
- **[ChatGPT 5.4 Solved a 64-Year-Old Math Problem](https://www.reddit.com/r/ChatGPT/comments/1swn1bs/chatgpt_54_solved_a_64yearold_math_problem/)** (Activity: 13896): **ChatGPT 5.4 Pro**가 23세 사용자와 함께 64년 된 Erdős 문제를 약 `1 hour 20 minutes` 만에 해결했다는 주장이다. 문제는 실제로 Erdős 1176이 아니라 1196이며, 증명은 정당한 것으로 확인됐고 Terence Tao의 코멘트도 있었다고 한다. 한 댓글은 Terence Tao의 언급을 [here](https://www.erdosproblems.com/1196)에서 확인할 수 있다고 했고, 다른 댓글은 올바른 질문을 던지는 방식이 돌파구였다고 설명했다.

---

## AI Discord Recap

### Discord 접근 중단

- **접근 중단 공지**: 안타깝게도 Discord가 오늘 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이며, 곧 새로운 AINews를 출시할 예정이다. 끝까지 읽어줘서 감사하며, 좋은 여정이었다.
