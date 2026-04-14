---
title: "Hermes Agent v0.9.0 로컬 대시보드 출시"
summary:
  - "Hermes Agent v0.9.0 로컬 대시보드 출시"
  - "Claude Mythos, AISI 사이버 레인지 첫 종주"
  - "LlamaIndex ParseBench 문서 파싱 벤치마크 공개"
  - "Hugging Face, 5B로 arXiv 2.7만편 OCR"
  - "Copilot 원격제어·Cursor 분할 에이전트 추가"
date: 2026-04-13
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-13-not-much.md"
hasHeadline: false
headline: "Hermes Agent v0.9.0 로컬 대시보드 출시"
tags:
  - OpenAI
  - Codex
  - Hermes
  - Claude
  - LlamaIndex
isFeatured: false
---

## 헤드라인: Hermes Agent v0.9.0 로컬 대시보드 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

오픈 하네스(open harness)로 주목받는 Hermes Agent가 v0.9.0에서 로컬 웹 대시보드를 공개했다. fast mode, backup/import, 보안 하드닝(security hardening), 채널 지원 확대 등도 함께 언급되며, 커뮤니티에서는 대시보드가 Hermes를 ‘파워 유저 도구’에서 더 넓은 사용자층으로 확장할 전환점이 될 수 있다는 반응이 나왔다. 동시에 OpenClaw 등 다른 오픈 에이전트 스택과의 UX·효율 비교가 활발해지며, 모델 자체보다 컨텍스트(context) 구성과 토큰(token) 효율 같은 하네스 수준 설계가 체감 품질을 좌우한다는 논의가 이어졌다.

---

## AI Twitter Recap

### 에이전트 하네스·코딩 워크플로, 단일 모델에서 시스템 설계로

- **하네스 엔지니어링이 1급 분야로 부상**: [AI Engineer Europe takeaways](https://x.com/dat_attacked/status/2043647001749836253), [Vtrivedy’s framing of harness primitives](https://x.com/Vtrivedy10/status/2043870915059236966) 등에서 반복되는 핵심은 유용한 에이전트가 “그저 모델”이 아니라는 점이다. 파일시스템(filesystems), bash, 압축(compaction), 메모리(memory), 권한(permissions), 재시도(retries), 평가(evals), 서브에이전트(subagents) 등이 제품의 핵심 표면(product surface)로 다뤄지고 있다. [Andrew Ng](https://x.com/AndrewYNg/status/2043742105852621052)는 병목이 구현에서 “무엇을 만들지 결정”으로 옮겨간다고 주장했고, [Steve Yegge](https://x.com/Steve_Yegge/status/2043747998740689171)는 도구 접근성은 넓어졌지만 엔터프라이즈 도입은 최전선 실무에 비해 여전히 뒤처졌다고 말한다.
- **OpenAI Codex 사용 패턴이 SWE 밖으로 확장**: OpenAI는 [@gabrielchua](https://x.com/gabrielchua/status/2043339151278506234)를 통해 대규모 코드베이스 이해, PR 리뷰, Figma-to-code, 버그 트리아지(bug triage), 데이터셋 분석, CLI 도구, 온보딩, 슬라이드 생성까지 Codex 워크플로 카탈로그를 공유했다. 현장에서는 ‘에이전트가 접착제(glue) 역할’이라는 패턴이 반복되는데, 예를 들어 [giffmana](https://x.com/giffmana/status/2043401612035559445)는 Linux에서 Wayland/HIDPI 관련 니치 이슈를 위해 Codex로 Java/Qt 바이너리를 패치했다고 보고했다. 반면 [Rhys Sullivan’s critique](https://x.com/RhysSullivan/status/2043584591861321929)처럼, 신뢰가 필요한 프로덕션 작업에서는 아직 ‘사람이 직접 구현’하는 편이 낫다는 회의론도 존재한다.
- **툴링이 멀티 에이전트 오케스트레이션·관측성·원격 제어로 수렴**: GitHub는 웹/모바일에서의 [Copilot remote control from web/mobile](https://x.com/pierceboggan/status/2043717775265562701)을 출시했고 [@tiagonbotelho](https://x.com/tiagonbotelho/status/2043720370734104923)가 후속으로 언급했다. Cursor는 [split agents plus search/perf improvements](https://x.com/cursor_ai/status/2043798784367546707)를 추가했다. LangChain은 [guardrails via middleware and filesystem permissions](https://x.com/sydneyrunkle/status/2043767032361967751)처럼 미들웨어(middleware)와 파일시스템 권한을 통한 가드레일(guardrails)을 강조했고, deepagents는 [@ElliotHyun](https://x.com/ElliotHyun/status/2043721149616369719)이 설명하듯 서브에이전트를 구조화된 도구/함수 호출(tool/function calls)로 보는 멘탈 모델을 제시한다. 공통점은 ‘완전 자율 신뢰성’을 주장하기보다 제어 평면(control plane)을 노출하며 제품이 성숙해 간다는 점이다.

### Hermes Agent 대시보드·OpenClaw·오픈 에이전트 스택

- **Hermes가 오늘 가장 많이 논의된 오픈 하네스로 부상**: 핵심 릴리스는 로컬 웹 대시보드, fast mode, backup/import, 강화된 보안 하드닝, 채널 지원 확장 등을 포함한 Hermes Agent v0.9.0이며 [@Teknium](https://x.com/Teknium/status/2043771509123232230)과 공식 [@NousResearch announcement](https://x.com/NousResearch/status/2043791876835156362)에서 다뤄졌다. 커뮤니티에서는 대시보드가 Hermes를 ‘파워 유저용’에서 더 넓은 층으로 확장할 기능이라는 반응이 나왔고, [Shaun Furman’s “openclaw moment” claim](https://x.com/Shaun__Furman/status/2043820083114545416)처럼 “openclaw moment”에 비견하는 주장도 등장했다.
- **OpenClaw도 업데이트를 이어가지만 비교 담론은 Hermes 쪽으로 기움**: OpenClaw는 메모리 임포트, “Memory Palace”, 더 풍부한 채팅 UI, 플러그인 설정 가이드, 비디오 생성 개선, 통합 확대 등 큰 업데이트를 [@TheTuringPost](https://x.com/TheTuringPost/status/2043340386538778840)로 공개했다. 다만 속도, 아키텍처, 토큰 효율 측면에서 OpenClaw보다 Hermes를 선호한다는 사용자 보고가 늘고 있으며 [dabit3](https://x.com/dabit3/status/2043808914312212568), [robinebers](https://x.com/robinebers/status/2043835216670929005)가 그 예다. [ZainanZhou’s harness-level explanation](https://x.com/ZainanZhou/status/2043760979931213851)에서는 더 나은 프리셀렉션(preselection)/컨텍스트 셰이핑(context shaping)이 토큰 소모(token burn)를 줄일 수 있다는 하네스 수준 설명도 나왔다.
- **에이전트 스택 오픈 생태계가 빠르게 두꺼워짐**: 클라우드 코딩 에이전트 스택인 [Open Agents](https://x.com/nicoalbanese10/status/2043745569278251112)가 오픈소스화됐고, [bromann](https://x.com/bromann/status/2043886229650067729)은 이를 DeepAgent와 대비해 플러그형 모델 프로바이더, 샌드박스(sandboxes), 미들웨어(middleware), 트레이싱(tracing)을 갖춘 저수준 런타임으로 설명했다. Hermes도 [Chinese tutorial roundups](https://x.com/biteye_sister/status/2043630704798679545)부터 [@coreyganim](https://x.com/coreyganim/status/2043627229205193211)의 “team of 4 agents” 실전 가이드까지, 커뮤니티 스킬·튜토리얼·멀티 에이전트 레시피·통합이 누적되는 중이다. 눈에 띄는 기술 패턴은 ‘한 에이전트가 전부’가 아니라, 지속적인 역할 분리(role separation)와 격리된 메모리(isolated memory)다.

### 사이버보안·모델 능력 상승·Mythos 충격파

- **Claude Mythos Preview가 사이버보안 담론을 장악**: 영국 AI Security Institute는 Mythos가 [the first model to complete an AISI cyber range end-to-end](https://x.com/AISecurityInst/status/2043683577594794183)라고 보고했고, [ekinomicss](https://x.com/ekinomicss/status/2043688793085992970)는 32단계 기업 네트워크 공격 시뮬레이션에서도 성공했다고 덧붙였다. 반응은 능력(capability)뿐 아니라 효율(efficiency)에도 집중됐는데, 예를 들어 [scaling01 claiming](https://x.com/scaling01/status/2043700788245963167)은 긴 실행(long runs) 이후 Mythos가 Opus급 성능을 대략 **40%** 토큰으로 달성한다고 주장했다.
- **함의는 벤치마크가 아니라 ‘운용 가능성(operational usefulness)’**: [emollick](https://x.com/emollick/status/2043810051979157680)은 우려가 타당하다고 했고, [ananayarora](https://x.com/ananayarora/status/2043381424594837789)는 Marcus Hutchins의 반응이 특히 의미 있다고 지적했다. 핵심은 “vulnerability research model”이 더 이상 마케팅 수사가 아니라, 실험실과 외부 평가자가 독립된 레인지에서 엔드투엔드(end-to-end) 익스플로잇 워크플로가 완료됐다고 기술하기 시작했다는 점이다.
- **방어 도구도 성숙하지만 비대칭(asymmetry)은 분명**: [The Turing Post’s roundup](https://x.com/TheTuringPost/status/2043332388785426498)은 NVIDIA NeMo Guardrails, garak, Promptfoo, LLM Guard, ShieldGemma 2, CyberSecEval 3 등을 포함한 10개 오픈 AI 보안 프로젝트를 정리했다. 동시에 ‘에이전트가 성숙한 의존성(dependencies)을 안전하게 대체할 수 있다’는 가정이 재검토되고 있는데, [dbreunig](https://x.com/dbreunig/status/2043762702653460520)는 하드닝(hardening)과 보안 리뷰 비용을 포함하면 토큰 수지(token math)가 달라져 잘 관리되는 OSS 라이브러리가 다시 상대적으로 매력적이라고 주장한다.

### 추론(inference)·리트리벌(retrieval)·OCR·시스템 성능

- **문서/OCR 평가에 ‘제대로 된’ 새 벤치마크 등장**: LlamaIndex가 [ParseBench](https://x.com/jerryjliu0/status/2043721536922955918)를 공개했다. 이는 문서 파싱(document parsing)에서 정확 일치(text similarity)보다, 에이전트에 중요한 의미적 정확성(semantic correctness)에 초점을 둔 오픈 벤치마크/데이터셋이다. 약 **2,000**개의 사람 검증 엔터프라이즈 페이지와 **167,000+**개의 평가 규칙을 포함하며, 표·차트·내용 충실도(content faithfulness)·의미적 포맷팅(semantic formatting)·비주얼 그라운딩(visual grounding) 등을 다룬다. 결과로는 모든 축에서 압도하는 파서가 없다는 점이 강조됐고, 전체적으로는 LlamaParse가 **84.9%**로 선두라고 보고됐다.
- **오픈 모델로도 산업 규모 OCR이 ‘싸고 튼튼하게’ 가능**: [@ClementDelangue](https://x.com/ClementDelangue/status/2043779449322160270)는 오픈 **5B** 모델로 **27,000 arXiv papers**를 Markdown으로 OCR 했다고 보고했다. L40S에서 **16**개 병렬 HF Jobs로 **~29 hours** 동안 약 **$850**이 들었고, 현재 “Chat with your paper”에 활용 중이라고 한다. 후속으로 사용 모델은 [Chandra-OCR-2](https://x.com/ClementDelangue/status/2043783879601848726)라고 밝혔다.
- **리트리벌과 전송 계층(transport layer) 최적화는 계속 중요**: LightOn은 BM25 trigram 기반 하이브리드 멀티벡터 리트리벌(hybrid multi-vector retrieval)과 상대 경로(relative paths)로 토큰을 아끼는 [ColGrep 1.2.0](https://x.com/raphaelsrty/status/2043676936442875954)을 출시하며, 에이전트 검색(agent-search) 업그레이드로 포지셔닝했다. 시스템 측면에서는 [Lewis Tunstall and colleagues](https://x.com/_lewtun/status/2043690765227102335)가 on-policy distillation의 비직관적 병목을 지적했는데, vLLM이 logprobs를 JSON으로 전송하는 부분이었다. 이를 바이너리 NumPy 배열로 바꾸자 **1.4x** 속도 향상이 나와, 인프라 개선이 커널/모델 코드 밖에 숨어있는 경우가 많다는 점을 상기시켰다.
- **압축(compression)과 추측 디코딩(speculative decoding)은 여전히 고레버리지 배포 레버**: Red Hat AI는 [Gemma 4 31B quantized deployment on vLLM](https://x.com/RedHat_AI/status/2043709783102906489)로 거의 **2x tokens/sec**, 메모리 절반, **99%+** 정확도 유지 사례를 보여줬다. speculative decoding 관련해서는 [DFlash adapters for Kimi/Qwen-family local speedups](https://x.com/winglian/status/2043731370598347066), Baseten의 [EAGLE-3 production advice](https://x.com/baseten/status/2043762663235432855), 그리고 한 번의 block-diffusion 패스로 트리를 초안(draft)해 여러 continuations를 공동 검증한다는 [DDTree](https://x.com/liranringel/status/2043813397972607477) 같은 연구가 공유됐다.

### 연구: 메모리·검증·RL·모델 아키텍처

- **장문 컨텍스트(long-context) 메모리 연구가 ‘그냥 KV 캐시 확장’ 너머로**: [behrouz_ali](https://x.com/behrouz_ali/status/2043743704335192095)는 컨텍스트를 느리게 성장하는 순환 메모리(recurrent memory)로 압축하는 아키텍처 계열인 “Memory Caching”을 정리했다. 목표는 메모리 성장 특성은 어텐션(attention)에 가깝게, 추론 비용은 RNN에 가깝게 가져가는 것이다. 그중 Sparse Selective Caching을 가장 실용적인 변형으로 제시했다. [askalphaxiv](https://x.com/askalphaxiv/status/2043782770657219010)는 이를 표준 순환(recurrence)과 완전한 2차(quadratic) 어텐션 사이의 보간(interpolation)으로 해석한다.
- **검증기(verifier) 스타일의 테스트 타임(test-time) 기법이 에이전트 벤치 전략으로 부상**: [Azali Amirhossein et al.](https://x.com/Azaliamirh/status/2043813128690192893)은 **LLM-as-a-Verifier**를 소개했다. 후보 쌍(candidate pairs)을 두고 모델에게 출력 순위를 매기게 한 뒤, rank-token logprobs로 기대 품질(expected quality)을 추정해 점수화한다. 요지는 테스트 타임 스케일링의 병목이 후보 생성(candidate generation)보다 승자 선택(winner-selection)인 경우가 많으며, 단일 검증 패스가 번거로운 reranking 설정을 에이전트 벤치마크에서 능가할 수 있다는 것이다.
- **추론(reasoning) ‘발견(discovery)’은 여전히 약점—감독(oversight)엔 호재라는 시각도**: [Laura Ruis](https://x.com/LauraRuis/status/2043715536186384775)는 전략이 한번 가르치면 사소하더라도, LLM이 잠재 계획 전략(latent planning strategies)을 *스스로 발견*하는 데 어려움을 겪으며 GPT-5.4까지 스케일을 올려도 개선이 크지 않다고 보고했다. 별도로 [Wen Sun](https://x.com/WenSun1/status/2043755261954011484)은 0차(zeroth-order) 방법이 과적합(overfit)하는 상황에서, RL 기반 프롬프트 최적화가 **2**개 예시만으로도 일반화(generalize)할 수 있다고 주장했다. 종합하면 “reasoning”이 탄탄하게 자기부트스트랩(self-bootstrapping)되기까지는 학습 목표(training objectives)와 테스트 타임 스캐폴딩(scaffolding)에 아직 여지가 크다는 결론이다.

### Top Tweets (by engagement)

- **Codex use cases at OpenAI**: [@gabrielchua](https://x.com/gabrielchua/status/2043339151278506234)가 코드 이해, 앱 빌딩, 운영 자동화, 비개발 작업까지 포함하는 실무적 내부 Codex 워크플로 인벤토리를 공유했다.
- **AISI cyber eval of Claude Mythos Preview**: [@AISecurityInst](https://x.com/AISecurityInst/status/2043683577594794183)가 모델의 사이버 레인지 엔드투엔드 완료를 보고하며, 이번 묶음에서 기술적으로 특히 중요한 포스트 중 하나로 언급됐다.
- **Hermes Agent dashboard release**: [@NousResearch](https://x.com/NousResearch/status/2043791876835156362)가 로컬 대시보드와 v0.9.0 기능을 발표하며 OpenClaw·Claude Code와의 비교 논의를 촉발했다.
- **OpenAI’s “compute-powered economy” memo**: [@gdb](https://x.com/gdb/status/2043831031468568734)가 소프트웨어 엔지니어링이 ‘컴퓨트로 매개되는 노동’과 의도 기반(intent-driven) 툴링으로의 전환에서 선행 지점이라는 OpenAI의 관점을 정리했다.
- **Hugging Face’s large-scale open OCR deployment**: [@ClementDelangue](https://x.com/ClementDelangue/status/2043779449322160270)가 오픈 모델과 HF Jobs로 2.7만 편 논문을 저비용으로 Markdown OCR한 사례를 보여줬다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Best Local LLMs - Apr 2026](https://www.reddit.com/r/LocalLLaMA/comments/1sknx6n/best_local_llms_apr_2026/)** (Activity: 440): 2026년 4월 기준 로컬 LLM 최신 동향을 정리하며 **Qwen3.5**, **Gemma4**, **GLM-5.1**(SOTA 주장), **Minimax-M2.7**, 1-bit 모델을 내세운 **PrismML Bonsai** 등을 언급한다. 오픈 가중치(open weights) 모델 중심으로 셋업·사용·도구 경험 공유를 유도하고, VRAM 요구량을 'Unlimited' (&gt;128GB)부터 'S' (&lt;8GB)까지로 분류한다. 댓글에서는 128GB 초과 구간을 더 세분화하자는 제안, 의료/법률/회계/수학 등 도메인 특화 모델 수요, 그리고 에이전트형 코딩(agentic coding)·툴 사용 관심이 함께 드러났다.
- **[Audio processing landed in llama-server with Gemma-4](https://www.reddit.com/r/LocalLLaMA/comments/1sjhxrw/audio_processing_landed_in_llamaserver_with_gemma4/)** (Activity: 494): **llama.cpp**(llama-server)에 오디오 처리(audio processing)가 통합돼 **Gemma-4 E2A/E4A**로 STT를 네이티브로 지원하게 됐다는 소식이다(Whisper 같은 별도 파이프라인 불필요). 다만 5분 이상 장오디오에서 `llama-context.cpp` 오류, 문장 루프, 조기 종료 등 문제가 보고됐고, 권장 구성으로 `E4B as Q8_XL quant with BF16 mmproj`가 언급된다(다른 구성은 성능 저하). 템플릿과 숫자 표기 등 포맷을 엄격히 맞추라는 팁도 공유됐으며, Whisper 대비 성능 논쟁과 함께 장오디오에서는 **Voxtral**이 더 낫다는 주장도 나왔다.
- **[Speculative Decoding works great for Gemma 4 31B with E2B draft (+29% avg, +50% on code)](https://www.reddit.com/r/LocalLLaMA/comments/1sjct6a/speculative_decoding_works_great_for_gemma_4_31b/)** (Activity: 527): **Gemma 4 31B**에 **Gemma 4 E2B (4.65B)** 드래프트(draft)를 붙여 speculative decoding을 적용해 평균 `+29%`, 코드에서는 `+50%` 속도 향상을 공유한다. **RTX 5090**, TurboQuant KV cache가 있는 llama.cpp 포크, `128K context`, `--draft-max 8 --draft-min 1` 같은 설정이 언급되며, 동일 계열 어휘(vocabulary)라 토큰 변환 오버헤드가 없다는 점을 강조한다. 초기 GGUF의 `add_bos_token` 메타데이터 불일치 문제가 있었고, 업데이트된 모델을 다시 내려받아 해결했다고 한다. `--parallel 1`로 VRAM 과다 사용을 막는 팁, Q4 드래프트 모델 실험, `--override-tensor-draft "per_layer_token_embd\.weight=CPU"`로 드래프트 임베딩을 CPU로 오프로딩해 VRAM을 아끼자는 제안, 다른 GPU 조합에서도 처리량이 크게 늘었다는 경험담이 이어졌다.
- **[Ryan Lee from MiniMax posts article on the license stating it's mostly for API providers that did a poor job serving M2.1/M2.5 and may update the license for regular users!](https://www.reddit.com/r/LocalLLaMA/comments/1skabyf/ryan_lee_from_minimax_posts_article_on_the/)** (Activity: 451): MiniMax의 Ryan Lee가 M2.7 라이선스 관련 입장을 설명하는 트윗 이미지가 공유됐다. “코드 작성 용도의 셀프 호스팅(self-hosting)은 허용되며 무료”라고 하면서도, 현 라이선스가 충분히 구체적이지 않아 업데이트하겠다고 말한다. 댓글에서는 상업적 호스팅 제한을 노린 라이선스가 셀프 호스팅까지 복잡하게 만들 수 있다는 우려, API 프로바이더가 제공 모델 품질/정체를 과장·왜곡한다는 불만, 문구의 법적 뉘앙스가 일관되지 않을 수 있다는 지적이 나왔다.
- **[Local Minimax M2.7, GTA benchmark](https://www.reddit.com/r/LocalLLaMA/comments/1sk70ph/local_minimax_m27_gta_benchmark/)** (Activity: 383): **Minimax M2.7**로 단일 웹페이지 안에서 3D GTA풍 경험을 만드는 벤치마크를 공유한다. **GLM 5**는 명시적 지시 없이도 미적 요소와 디테일이 강하다는 비교가 나오고, Minimax M2.7은 나무와 새(boids 알고리즘) 추가 같은 과제에서 잘 동작했다고 한다. openwebui artifacts 창과 OpenCode에서 테스트했고, 속도를 위해 `IQ2_XXS`로 구동하면서도 일관성과 능력을 유지했다고 주장한다. 댓글에서는 GLM 5의 캐릭터 디테일 강점, GLM이 비전 모델이 아니라 연속적 시각 과제에 한계가 있을 수 있다는 비판, 환경 디테일(새) 언급 등이 뒤따랐다.
- **[Local models are a godsend when it comes to discussing personal matters](https://www.reddit.com/r/LocalLLaMA/comments/1ska9av/local_models_are_a_godsend_when_it_comes_to/)** (Activity: 443): **Gemma 4 26B A4B**( `256k context` 지원)로 개인 저널을 분석한 경험담이다. `100k+ tokens` 분량의 저널을 넣고 반복되는 테마, 회피하는 주제, 생각의 변화 등을 유도 질문으로 탐색했으며, 민감한 내용을 로컬에서 처리할 수 있는 프라이버시 이점을 강조한다. 댓글에서는 `Qwen-3.5`로 10년치 개인 문서를 지식베이스로 만든 사례, 플래그십 모델의 수익화 압력(중독성 설계)에서 상대적으로 자유롭다는 관점, 하드웨어에 맞는 `Mistral 3.2` 같은 소형 모델의 실용성이 언급됐다.
- **[Just got my hands on one of these… building something local-first 👀](https://www.reddit.com/r/LocalLLM/comments/1sk3zng/just_got_my_hands_on_one_of_these_building/)** (Activity: 441): NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition GPU로 로컬 퍼스트(local-first) 고성능 셋업을 구성하려는 빌드 소개다(`9950X`, `128GB RAM`, ProArt 보드). 다중 사용자 동시 추론(concurrent inference)과 데이터의 로컬 통제를 목표로 하며, `vLLM`·`llama.cpp`를 검토하고 2장 GPU 확장도 고려한다. 댓글에서는 RTX 6000 커뮤니티 조언, `vLLM`의 `cu130 nightly image` 추천, `Qwen3.5-27B-FP8`를 `kv cache dtype` `fp8_e4m3`로 돌려 `160k tokens` 컨텍스트를 VRAM `55%`만 사용해 확보했다는 팁, 단일 요청 `80-90 tps`·동시 요청 `250 tps` 이상 경험, `whisper-large-v3`·임베딩·리랭커 모델을 함께 올리고 LoRA 스왑 여지를 남겼다는 구성 등이 공유됐다.

### Less Technical Subreddits

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[OpenRouter Just announced a New 100B model](https://www.reddit.com/r/Bard/comments/1skfbvf/openrouter_just_announced_a_new_100b_model/)** (Activity: 240): OpenRouter가 “Elephant Alpha”라는 `100B` 모델을 발표했으며, 토큰 효율을 내세워 코드 완성/디버깅/문서 처리/경량 에이전트 지원을 강조한다. 댓글에서는 X에서의 프로빙/분석을 근거로 Grok 계열일 수 있다는 추측이 나오고, 테스트상 SOTA로 보이지 않는다는 반론도 있으며, Google 모델은 아닐 가능성이 크다는 의견이 모였다(구글은 파라미터 수를 보통 공개하지 않는다는 이유).
- **[Sam Altman’s home targeted in second attack](https://www.reddit.com/r/singularity/comments/1sjtebt/sam_altmans_home_targeted_second_attack/)** (Activity: 2227): 샌프란시스코의 Sam Altman 자택이 화염병 공격과 총격 등 두 차례 표적이 됐다는 내용이다. 감시 영상에 Honda 세단이 포착됐고 용의자 Amanda Tom, Muhamad Tarik Hussein가 체포됐으며, 부상자는 없었다고 한다. [Read more](https://sfstandard.com/2026/04/12/sam-altman-s-home-targeted-second-attack/). 댓글에서는 주소 노출에 대한 프라이버시 우려와, 부유층의 보안·거주 전략 논쟁이 이어졌다.
- **[Sam Altman's home targeted in drive-by shooting hours after firebomb attack](https://www.reddit.com/r/OpenAI/comments/1sk82sc/sam_altmans_home_targeted_in_driveby_shooting/)** (Activity: 1088): OpenAI CEO Sam Altman의 자택이 화염병 공격 이후 수 시간 만에 드라이브바이 총격을 당했다는 주장으로, 고위 기술 경영진 안전 문제를 환기한다. 구체 정보가 제한적인 가운데 댓글은 기술적 논의보다 사회·경제적 불만과 추측적 연결로 흐르는 경향을 보였다.
- **[Another murder attempt on Sam Altman, as gunshots are fired at his residence](https://www.reddit.com/r/ChatGPT/comments/1skwdp7/another_murder_attempt_on_sam_altman_as_gunshots/)** (Activity: 1087): 샌프란시스코에서 Sam Altman 자택 인근 총격 관련 용의자 2명이 체포됐고, 과실 총기 발사(negligent discharge) 혐의와 무기 압수 등이 언급된다. 사건들은 서로 무관하다는 설명도 붙는다. 자세한 내용은 [original article](https://www.usatoday.com/story/news/crime/2026/04/13/sam-altman-house-attack/89586825007/)에 있다고 한다.
- **[Claude isn't dumber, it's just not trying. Here's how to fix it in Chat.](https://www.reddit.com/r/ClaudeAI/comments/1sjz1hg/claude_isnt_dumber_its_just_not_trying_heres_how/)** (Activity: 1726): Claude 체감 성능 저하가 모델 다운그레이드가 아니라 설정 변화(노력/effort) 때문이라는 주장이다. Claude Code 사용자는 `/effort max`로 되돌릴 수 있지만 채팅 사용자는 토글이 없어, 커스텀 인스트럭션으로 더 깊은 추론을 유도하는 우회가 공유된다. 댓글에서는 토큰 효율 vs 응답 깊이의 균형(“Spartan mode”), 웹 시스템 프롬프트가 사용자 선호를 무시할 수 있어 preferences보다 styles가 더 효과적일 수 있다는 논의, 스타일 숫자 값(예: `99`, `85`)로 사고 강도를 전환하는 예시가 언급됐다.
- **[Claude Code (~100 hours) vs. Codex (~20 hours)](https://www.reddit.com/r/ClaudeCode/comments/1sk7e2k/claude_code_100_hours_vs_codex_20_hours/)** (Activity: 1421): 80k LOC 규모 Python/TypeScript 프로젝트에서 **Claude Opus 4.6**과 **Codex GPT-5.4**를 비교한 경험담이다. Claude는 빠르고 인터랙티브하지만 가이드라인을 무시하거나 작업이 불완전해 수동 감독이 필요하다고 하고, Codex는 느리지만 더 신중하고 가이드를 잘 지키며 유지보수성 높은 코드를 내는 쪽으로 묘사된다. 댓글에서는 Codex가 지나치게 장황하거나 비협조적으로 느껴질 수 있다는 불만, RL 학습으로 인해 “반대”가 잦아 답답하다는 의견, 반대로 자율적으로 일을 끝내는 신뢰성은 높다는 평가와, 커뮤니케이션 스타일을 균형 있게 맞추고 싶다는 요구가 함께 나타났다.
- **[The golden age is over](https://www.reddit.com/r/ClaudeAI/comments/1sjqn2e/the_golden_age_is_over/)** (Activity: 4149): Claude·ChatGPT·Gemini·Perplexity 등 소비자/프로슈머 접근 LLM의 체감 품질 하락을 주장하며, 연산 자원·전략적 스로틀링(throttling) 가능성을 시사한다. 근거로 [ijustvibecodedthis.com](http://ijustvibecodedthis.com/)의 글을 인용한다. 댓글에서는 사용자가 프롬프팅에 익숙해지면서 한계를 더 잘 보게 된 것이라는 반론과, 미국 기업들이 ‘지능을 미터링’하는 사이 해외·오픈소스 모델이 공백을 메우고 있다는 관점이 맞섰다.

---

## AI Discord Recap

### AINews 공지

- Discord가 오늘 접근을 차단해 더 이상 이 형태로는 제공하지 않으며, 새로운 AINews를 곧 출시할 예정이라고 전했다.
