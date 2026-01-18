---
title: "오늘은 큰 일이 없었던 날"
summary:
  - "OpenAI가 GPT-5.2-Codex API를 출시"
  - "Cerebras가 OpenAI와 파트너십 체결"
  - "LangChain Agent Builder 출시"
  - "Ahmad Al-Dahle가 Airbnb CTO로 합류"
  - "ERNIE-5.0이 Text Arena 톱 10 진입"
date: 2026-01-14
originalUrl: "https://news.smol.ai/issues/26-01-14-not-much/"
hasHeadline: false
tags:
  - OpenAI
  - Codex
  - Cerebras
  - LangChain
  - ERNIE
isFeatured: false
---

> "오늘은 별일 없었다" | AI뉴스
>
> 12개 서브레딧, [**544개 Twitter**](https://twitter.com/i/lists/1585430245762441216), **24개 Discord** (**204**개 채널, **5168**개 메시지) 분석. 예상 읽기 시간 절약: **445분**.
>
> "조용한 하루" - GPT 5.2 Codex API 출시와 Cursor가 이를 사용해 일주일 동안 자율적으로 브라우저를 만든 것에 대한 약간의 화제.

---

## AI Twitter Recap

### OpenAI + GitHub + Cursor: GPT-5.2-Codex 장기 호라이즌 지원

- **GPT-5.2-Codex API 출시**: OpenAI가 Responses API를 통해 GPT-5.2-Codex를 출시했다 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011499597169115219)). Cursor가 즉시 통합했다 ([cursor_ai](https://twitter.com/cursor_ai/status/2011500027945033904)). GitHub이 @code에 적용하며 preview/GA 라벨링 변경 ([pierceboggan](https://twitter.com/pierceboggan/status/2011519932392226898)).

- **일주일간 에이전트 런타임**: "Cursor에서 GPT-5.2로 브라우저 만들기"로 "3M+ 줄의 Rust" 코드를 중단 없이 생산 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)). 연속 에이전트 시간에 대한 참조 ([gdb](https://twitter.com/gdb/status/2011570314216718510); [kevinweil](https://twitter.com/kevinweil/status/2011587644468445445)). 에이전트 시스템에는 리뷰 루프 필요 ([scaling01](https://twitter.com/scaling01/status/2011580895573262717)).

- **평가 담론**: METR의 장기 평가가 점프를 더 일찍 포착 ([swyx](https://twitter.com/swyx/status/2011344788486774942)). 플롯과 시간 수평선에 대한 토론 ([_lewtun](https://twitter.com/_lewtun/status/2011393239774048658); [RyanPGreenblatt](https://twitter.com/RyanPGreenblatt/status/2011648823458689304)).

### 추론(Inference) 인프라: Cerebras 파트너십

- **OpenAI x Cerebras**: 파트너십 발표 ([cerebras](https://twitter.com/cerebras/status/2011531740804964855)). 지연시간을 제품 차별화 요소로 ([Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2011537073292132565)).

- **제공업체 벤치마킹**: Artificial Analysis GLM-4.7 비교 - Cerebras "~1,445 출력 토큰/초", "TTFAT ~1.6초" ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2011581689567592641)).

- **운영 스케일링**: Modal이 자체 호스팅 추론 경제성을 발표 ([charles_irl](https://twitter.com/charles_irl/status/2011484220032762114)). SemiAnalysis가 "20k GPU" 플릿 관리 강조 ([SemiAnalysis_](https://twitter.com/SemiAnalysis_/status/2011498598043660777)). vLLM 배치 추론 가이드 ([vllm_project](https://twitter.com/vllm_project/status/2011585247297880501)).

### 에이전트 엔지니어링 제품화

- **스킬의 이식성**: Phil Schmid가 **Agent Skills** 출시 ([_philschmid](https://twitter.com/_philschmid/status/2011345054343053370)). HF 실무자들이 CLI/MCP 접근법 지지 ([ben_burtenshaw](https://twitter.com/ben_burtenshaw/status/2011460800427286783)).

- **LangSmith Agent Builder**: "에이전트를 파일시스템처럼", 메모리, 스킬/MCP/서브에이전트와 함께 출시 ([LangChain](https://twitter.com/LangChain/status/2011501888735494184); [hwchase17](https://twitter.com/hwchase17/status/2011503746312987128)). Slack-to-Linear 예제 ([docs_plz](https://twitter.com/docs_plz/status/2011536177556570203)). CopilotKit이 미들웨어 추가 ([CopilotKit](https://twitter.com/CopilotKit/status/2011453920321929237)).

- **단일 에이전트 권장**: 4가지 패턴 제시 ([LangChain](https://twitter.com/LangChain/status/2011527733176856671); [sydneyrunkle](https://twitter.com/sydneyrunkle/status/2011514042075222029)). 제약에 부딪히지 않는 한 단일로 시작 ([LangChain_OSS](https://twitter.com/LangChain_OSS/status/2011515750625001609)).

### 연구 노트: 장문맥, 메모리, 프루닝

- **DroPE**: RoPE 드롭, 위치 임베딩 없이 파인튜닝 ([gabriberton](https://twitter.com/gabriberton/status/2011326182986564090); [gabriberton](https://twitter.com/gabriberton/status/2011326193082253413)).

- **DeepSeek Engram**: MoE + 희소 저장소 해시 기반 룩업 ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2011357373772845097); [LiorOnAI](https://twitter.com/LiorOnAI/status/2011468534887469448); [LiorOnAI](https://twitter.com/LiorOnAI/status/2011526199420600378)).

- **Mistral Ministral 3**: 프루닝(pruning) + 디스틸레이션(distillation) 레시피 ([eliebakouch](https://twitter.com/eliebakouch/status/2011548952676499480); [qtnx_](https://twitter.com/qtnx_/status/2011510403550024087)).

- **멀티모달 RAG**: UniversalRAG 모달리티 인식 라우팅 ([omarsar0](https://twitter.com/omarsar0/status/2011442693134754243)). ViDoRe V3 벤치마크 ([antonio_loison](https://twitter.com/antonio_loison/status/2011398238910517249)).

- **VLM 벤치마크 취약성**: 프레젠테이션 변경이 리더보드를 재정렬 ([lisabdunlap](https://twitter.com/lisabdunlap/status/2011521499182875116)).

### 제품 동향: 인재 & 전략

- **Airbnb CTO**: Ahmad Al-Dahle가 Meta Llama (1.2B+ 다운로드)에서 합류 ([Ahmad_Al_Dahle](https://twitter.com/Ahmad_Al_Dahle/status/2011440460821320056)). 지지: ([sama](https://twitter.com/sama/status/2011490615985414382); [ClementDelangue](https://twitter.com/ClementDelangue/status/2011455261329023329); [markchen90](https://twitter.com/markchen90/status/2011545090737782810)).

- **TML/OpenAI 이동**: Barret Zoph가 TML 떠남, Soumith Chintala가 CTO로 ([miramurati](https://twitter.com/miramurati/status/2011577319295692801)). Zoph, Metz, Schoenholz가 OpenAI로 복귀 ([fidjissimo](https://twitter.com/fidjissimo/status/2011592010881446116); [barret_zoph](https://twitter.com/barret_zoph/status/2011593621435531355)).

- **오픈소스 중견 조직**: HF의 Clement가 OSS AI 발전시키는 스타트업에 대해 ([ClementDelangue](https://twitter.com/ClementDelangue/status/2011477703698895245)). LTX-2가 HF 100만 다운로드 달성 ([ltx_model](https://twitter.com/ltx_model/status/2011432938819252566)).

### 최고 참여도

- **Gemini Personal Intelligence**: Google 개인화가 앱 연결 ([Google](https://twitter.com/Google/status/2011473056921706852); [sundarpichai](https://twitter.com/sundarpichai/status/2011475851670667356); [joshwoodward](https://twitter.com/joshwoodward/status/2011471375521710130)).

- **Vercel React Skills**: `react-best-practices` 에이전트 스킬 ([vercel](https://twitter.com/vercel/status/2011589806250426615)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

#### 1. 로컬 LLM 하드웨어 비교

[M4/M5 Max 128gb vs DGX Spark](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/) (153 activity): M4 Max가 추론(inference)에 유리한 높은 메모리 대역폭 제공. M3 Ultra가 텍스트 생성에 탁월. DGX Spark는 컴팩트한 크기, <100W, ~10W 유휴 상태로 주목.

[16GB VRAM에서 가장 큰 로컬 LLM](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/) (103 activity): 14B 파라미터가 권장 균형. 30B는 무거운 양자화(quantization) 필요, 품질 저하. Qwen3 30B가 스필오버를 효과적으로 처리.

[120B 로컬 실행하는 소형 AI 컴퓨터](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/) (49 activity): TiinyAI 디바이스, 80GB RAM, 30W 전력. 메모리 대역폭 우려 (~80Gb/s 제한). 사용 사례: 인터넷 제한 시나리오.

#### 2. 혁신적 구현

[Shadows-Gemma-3-1B 추론](https://www.reddit.com/r/LocalLLaMA/comments/1qcd9m1/shadowsgemma31b_cold_start_reasoning_from_topk20/) (41 activity): 1569 샘플을 ~10분에 훈련 (TPUv5-8e). topk20 logprob 디스틸레이션으로 섀도우 토큰. 복잡한 질문에 대한 추론 향상.

[OCR 파이프라인용 로컬 VLM](https://www.reddit.com/r/LocalLLaMA/comments/1qcd8sw/using_local_vlms_for_ocr_to_feed_into_an_nlp/) (10 activity): Loggr 앱이 MLX로 양자화된 Qwen2.5-VL-3B 사용. 8GB 유니파이드 메모리 적합. 베타 테스터 구함. 제안: [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR), [MiMo-VL-7B-RL](https://huggingface.co/XiaomiMiMo/MiMo-VL-7B-RL-2508).

#### 3. AI 프로토콜 & 프레임워크

[Google이 Universal Commerce Protocol 오픈소스화](https://www.reddit.com/r/LocalLLM/comments/1qcpoaw/google_just_opensourced_universal_commerce/) (32 activity): 자율 이커머스를 위한 UCP. Agent2Agent (A2A), Agents Payment Protocol (AP2), Model Context Protocol (MCP). [GitHub](https://github.com/Universal-Commerce-Protocol/ucp).

[소비자 GPU에서 16k 컨텍스트 코딩](https://www.reddit.com/r/LocalLLM/comments/1qcmv3z/would_16k_context_coding_on_consumer_gpus_make/) (36 activity): 16k는 작은 것으로 간주 (64k 평균, 128k 양호, 1M 대규모). 로컬 모델은 64k 이후 성능 저하. 16k는 진지한 개발에 불충분.

### Less Technical 서브레딧

#### 1. 수학 정리 증명

[Gemini Math-Specialized가 새 정리 증명](https://www.reddit.com/r/singularity/comments/1qcq1ld/gemini_mathspecialized_version_proves_a_novel/) (553 activity): 수학 특화 Gemini가 정리를 증명 ([트윗](https://x.com/A_G_I_Joe/status/2011213692617285729?s=20), [arXiv](https://arxiv.org/abs/2601.07222)). 수학에서 AI 가속화. 과소평가 우려에 대한 반론.

[5.2 Pro의 Moser 웜 문제 진전](https://www.reddit.com/r/OpenAI/comments/1qco4d7/52_pro_makes_progress_on_decades_long_math/) (278 activity): 5.2 Pro가 면적을 0.260069597로 줄임 (2018년 기록: 0.26007 대비). INRIA 수학자가 검증. 큐레이션된 도구, 프롬프트 조향을 통한 진전. 전략: 기각 방지를 위해 인터넷 비활성화.

#### 2. DeepSeek & 최적화

[RTX 5090에서 DeepSeek 스타일 MoE](https://www.reddit.com/r/MachineLearning/comments/1qcxhgw/p_my_shot_at_a_deepseek_style_moe_on_a_single_rtx/) (64 activity): 2.36B 파라미터, 8개 라우티드 익스퍼트, top-2 라우팅. TorchAO FP8, Muon 최적화. 라우터 스케일링(1.2x)이 불안정성 유발. 19,415 tok/s 처리량.

[Spectral Sphere Optimizer (SSO)](https://www.reddit.com/r/MachineLearning/comments/1qcq27u/r_controlled_llm_training_on_spectral_sphere/) (17 activity): 가중치/업데이트에 스펙트럼 제약 적용. Megatron 구현. AdamW, Muon 능가. MoE 라우터 로드 밸런싱에 이점.

#### 3. Claude 구독 마찰

[Claude PRO/MAX 구독 갭](https://www.reddit.com/r/ClaudeCode/comments/1qcg4fp/claude_pro_is_too_little_claude_max_is_too_much/) (139 activity): $40-50 플랜 필요. 해결책: 듀얼 PRO 계정. 대안: [GLM Codling Pro](https://discord.com/channels/1091220969173028894) $12/월, 3배 사용량. "Extra Usage" 설정으로 커스텀 캡 생성.

[Claude 구독하기엔 너무 싼 작업](https://www.reddit.com/r/ClaudeCode/comments/1qcir01/work_too_cheap_for_claude_subscription/) (122 activity): 2M 줄 코드베이스 리팩토링. GitHub Copilot보다 Claude Opus 4.5 선호. $200/월 효율성 향상에도 경영진 저항. Copilot은 과도한 손잡이 필요.

[/compact의 컨텍스트 손실 수정](https://www.reddit.com/r/ClaudeCode/comments/1qcjwou/figured_out_why_compact_loses_so_much_useful/) (105 activity): 압축 전 로컬 파일 백업으로 60-70% 토큰 감소 제안. Cursor의 동적 컨텍스트 발견에서 영감. 컨텍스트 관리용 [aichat 기능](https://github.com/sigoden/aichat).

---

## AI Discord Recap

### 고수준 요약

#### 멀티모달 & 비디오 모델

**GLM-Image 하이브리드**: 텍스트 렌더링용 오픈소스 자기회귀 + 디퓨전 ([GitHub](https://github.com/zai-org/GLM-Image), [블로그](https://z.ai/blog/glm-image)). I2I 도구와 함께 프로덕션 후보.

**Veo 3.1**: 포트레이트 모드, 사용자 사진 I2V, 1080p/4K 업스케일링 ([Tulsee Doshi](https://x.com/tulseedoshi/status/2011174465720430612)).

**LTX-2**: 오픈소스 4K, 20초 클립 ([venturetwins](https://x.com/venturetwins/status/2010878914273697956)).

#### 벤치마크

**ERNIE-5.0-0110**: [Text Arena](https://lmarena.ai/leaderboard/text)에서 #8 (1460), Expert에서 #12. 첫 중국 톱-10. [변경로그](https://news.lmarena.ai/leaderboard-changelog/).

**SlopCodeBench**: [GitHub](https://github.com/SprocketLab/slop-code-bench) - 에이전트들이 초기 설계 선택에서 실패.

**Arena 추가**: Veo 변형이 [Video Arena](https://lmarena.ai/c/new?chat-modality=video)에, gpt-5.2-codex가 [Code Arena](https://lmarena.ai/c/new?chat-modality=code)에, glm-image가 [Image Arena](https://lmarena.ai/c/new?chat-modality=image)에.

#### 시스템 & 컴파일러

**FP8 프라이머**: [TransformerEngine 노트북](https://github.com/NVIDIA/TransformerEngine/blob/main/docs/examples/fp8_primer.ipynb). NVFP4 훈련은 ~2026년.

**Helion 0.2.10**: [Flex attention](https://github.com/pytorch/helion), SM 오버서브스크립션 지원.

**AOT Inductor**: [문서](https://docs.pytorch.org/docs/stable/torch.compiler_aot_inductor.html).

#### 데이터셋

**Purified Prose**: [Hermes-3](https://huggingface.co/datasets/enPurified/Hermes-3-Dataset-enPurified-openai-messages), [Tulu-3](https://huggingface.co/datasets/enPurified/tulu-3-sft-mixture-enPurified-openai-messages), [Project Gutenberg](https://huggingface.co/datasets/enPurified/project_gutenberg-enPurified-openai-messages). MTLD/단어 다양성 필터.

**Audioform Dataset**: [audioform_dataset](https://huggingface.co/datasets/webxos/audioform_dataset) - 메타데이터와 함께 오디오-투-비주얼 프레임.

#### 인프라 동향

**OpenAI x Cerebras**: [파트너십](https://openai.com/index/cerebras-partnership/).

**Chutes TEE**: [컨피덴셜 컴퓨트](https://chutes.ai/news/confidential-compute-for-ai-inference-how-chutes-delivers-verifiable-privacy-with-trusted-execution-environments).

**OpenRouter OSS**: [awesome-openrouter](https://github.com/OpenRouterTeam/awesome-openrouter), [openrouter-apps](https://github.com/OpenRouterTeam/openrouter-apps).
