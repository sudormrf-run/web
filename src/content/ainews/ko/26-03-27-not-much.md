---
title: "Anthropic의 Opus 상위 ‘Capybara’ 티어가 유출됐다"
summary:
  - "Anthropic의 Opus 상위 ‘Capybara’ 티어가 유출됐다"
  - "Zhipu가 GLM-5.1을 코딩 플랜에 공개했다"
  - "TurboQuant 논문이 RaBitQ 오기재로 논란이다"
  - "OpenAI가 Codex 플러그인으로 자동화를 밀었다"
  - "Meta가 SAM 3.1로 비디오 처리량을 2배로 늘렸다"
date: 2026-03-27
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-27-not-much.md"
hasHeadline: false
headline: "Anthropic의 Opus 상위 ‘Capybara’ 티어가 유출됐다"
tags:
  - Anthropic
  - OpenAI
  - Codex
  - GLM-5.1
  - TurboQuant
isFeatured: false
---

## 헤드라인: Anthropic의 Opus 상위 ‘Capybara’ 티어가 유출됐다

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

삭제된 “Claude Mythos” 관련 게시물이 보존되며, Anthropic이 Opus보다 상위인 새 티어 **Capybara**를 준비 중이라는 정황이 확산됐다. 코딩·학술적 추론(academic reasoning)·사이버보안(cybersecurity) 성능이 크게 개선됐다는 주장과 함께, 전력·자본지출(capex) 같은 인프라 제약이 경쟁의 병목이 되고 있다는 해석도 나왔다. 같은 날 529 등 가용성(availability) 오류 제보가 이어지면서, 공격적 스케일링(scale)과 실제 서빙(serving) 여력 사이의 긴장도 함께 부각됐다.

---

## AI Twitter Recap

### Anthropic 유출 “Mythos” 시스템과 새 Capybara 티어

- **Fortune이 Opus 상위 Anthropic 티어를 확인**: 현재는 내려간 “Claude Mythos” 글이 [@M1Astra](https://x.com/M1Astra/status/2037377109472018444)에 의해 보존됐고, 여러 후속 게시물은 Fortune 보도를 근거로 Anthropic이 **Capybara**를 도입 중이라고 전했다. 이는 **Opus**보다 **상위 티어**이며 **Claude Opus 4.6**보다 “더 크고 더 지능적”이라고 묘사됐다. [@scaling01](https://x.com/scaling01/status/2037379145806524655), [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2037387996694200509), [@kimmonismus](https://x.com/kimmonismus/status/2037463638261305752)이 요약한 보도 내용에 따르면 Capybara는 **코딩, 학술적 추론(academic reasoning), 사이버보안(cybersecurity)**에서 점수가 크게 개선됐고, 비용·안전 우려로 출시(rollout)가 제한될 수 있다고 한다.
- **컴퓨트 집약(compute intensity)이 핵심 테마**: 여러 게시물은 Anthropic이 스케일(scale)에 강하게 베팅하고 있다고 추정하며, 과거 Dario 발언을 근거로 **~10T 파라미터**급 모델 가능성까지 거론하지만, 이는 코멘터리 밖에서 확인되진 않았다. 관련 논의는 [@scaling01](https://x.com/scaling01/status/2037384912743923969)과 [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2037391159115563214)을 참고. 별도로 [@FirstSquawk](https://x.com/FirstSquawk/status/2037586926375743904)이 전한 Financial Times 보도는 **Google이 Anthropic 데이터 센터에 자금 지원이 임박**했다고 전하며, 최전선 경쟁이 알고리즘만이 아니라 전력과 자본지출(capex)에 의해 increasingly gated되고 있음을 강화한다.
- **프로덕션에서 인프라(infra) 스트레인이 노출**: 유출은 Anthropic 가용성이 좋지 않았던 날과 겹쳤고, [@dejavucoder](https://x.com/dejavucoder/status/2037439287873159641), [@iScienceLuvr](https://x.com/iScienceLuvr/status/2037487244634972471) 등에서 **529s/elevated errors**에 대한 불만이 광범위하게 나왔다. 실무 관점의 결론은 Anthropic이 공격적 스케일링 ambitions와 여전히 타이트한 서빙(serving) 한계 사이에서 균형을 잡고 있다는 점이다.

### 오픈 코딩 모델, 로컬 추론(local inference), GLM-5.1의 지속적 공세

- **GLM-5.1이 클로즈드 코딩 모델에 대한 압력을 확대**: Zhipu는 [@Zai_org](https://x.com/Zai_org/status/2037490078126084514)로 **GLM-5.1**을 모든 코딩 플랜 사용자에게 제공한다고 발표했고, 에이전트 사용 문서도 [@Zai_org](https://x.com/Zai_org/status/2037506911013138851)에 공유했다. 커뮤니티 반응은 “중국의 오픈/세미오픈 고급 코딩 모델이 격차를 더 좁힌다”는 신호로 해석됐고, [@kimmonismus](https://x.com/kimmonismus/status/2037507667732709392), [@XFreeze](https://x.com/XFreeze/status/2037695882301436412)와 Arena 리더보드의 더 넓은 분석 [@arena](https://x.com/arena/status/2037584085997216100)은 1년 전보다 open-vs-closed 격차가 훨씬 좁아졌다고 본다.
- **로컬 배포 경제성이 계속 개선**: 트윗 전반에서 “로컬 모델이 이제 많은 워크플로에 충분히 좋다”는 테마가 반복된다. 예로 [@TheGeorgePu](https://x.com/TheGeorgePu/status/2037473248577782046)는 비싼 TTS 구독을 로컬 **Qwen 3.5 14B** 구성으로 교체했고, [@LottoLabs](https://x.com/LottoLabs/status/2037557925015949676)는 Hermes Agent와 함께 **Qwen 27B**의 경제성이 좋다고 보고했으며, [@0xSero](https://x.com/0xSero/status/2037560787565252666)는 **Qwen3.5-35B**를 압축해 **24GB VRAM**에 풀 컨텍스트를 넣으면서 평균 성능 하락은 대략 **1%** 수준이라고 밝혔다.
- **양자화(quantization)와 캐시(cache) 작업이 핵심 촉진제**: [@iotcoi](https://x.com/iotcoi/status/2037478891179135123)는 fused Triton KV write 경로와 decode attention을 포함한 **TurboQuant vLLM** 포크를 공개했으며, **Qwen3.5-35B AWQ**, **1M context**, **4M KV cache**를 목표로 한다. 한편 [@bnjmn_marie](https://x.com/bnjmn_marie/status/2037564190802563157)는 **RTX Pro 6000/B200/H100**에서 Qwen3.5 27B 포맷을 벤치마크했고, RTX Pro 6000급 하드웨어에서는 **INT4**가 최적 추론(inference) 옵션으로 나타났다고 한다.
- **그러나 TurboQuant는 현재 적극적으로 분쟁 중**: 가장 큰 연구 논쟁은 [@gaoj0017](https://x.com/gaoj0017/status/2037532673812443214)과 더 긴 해명 [@gaoj0017](https://x.com/gaoj0017/status/2037552350924042488)에서 제기됐는데, Google의 **ICLR 2026 TurboQuant** 논문이 이론과 벤치마킹에서 **RaBitQ**를 오기재(misrepresented)했으며 CPU-vs-GPU 비교가 불공정했다고 주장한다. 이는 TurboQuant의 엔지니어링 가치를 무효로 하진 않지만, 홍보된 비교 주장 일부에는 의문을 남긴다.

### 에이전트가 데모가 아니라 제품이 되는 중

- **Hermes Agent가 오픈 에이전트의 중심축으로 부상**: 데이터셋에서 가장 일관된 제품 모멘텀은 **Nous Research의 Hermes Agent**다. [@NousResearch](https://x.com/NousResearch/status/2037654827929338324)는 **Hugging Face**를 1급 추론(inference) 프로바이더로 통합해 **28개 큐레이션 모델**과 더 많은 모델 접근을 제공했고, [@ClementDelangue](https://x.com/ClementDelangue/status/2037634211973140898)는 이를 메모리, 지속적 머신 접근, 모델 선택을 갖춘 오픈 에이전트로 가는 단계로 설명했다. [@fancylancer3991](https://x.com/fancylancer3991/status/2037579517389144399), [@PolackJack](https://x.com/PolackJack/status/2037661357785690584), [@alexcovo_eth](https://x.com/alexcovo_eth/status/2037589212648665273)의 사용자 보고는 브라우저 자동화 비중이 큰 OpenClaw 같은 세팅보다 마찰이 낮고 지속성이 좋다고 강조한다.
- **에이전트 인프라가 트레이스(trace), 평가(evals), 디버깅 중심으로 성숙**: Hugging Face의 [@ClementDelangue](https://x.com/ClementDelangue/status/2037530125638455610)는 **오픈 에이전트 트레이스 데이터셋**을 촉구했고, 후속 논의는 [@yueqi_song](https://x.com/yueqi_song/status/2037614951230296230)의 **Agent Data Protocol**을 가리킨다. LangChain도 프로덕션 지향 자료를 묶음으로 공개했는데, **agent eval readiness checklist** [@LangChain](https://x.com/LangChain/status/2037590936234959355), IDE형 UI 가이드인 **Deep Agents** [@LangChain_JS](https://x.com/LangChain_JS/status/2037560951445266891), 프롬프트 프로모션/롤백용 **LangSmith Prompt Hub Environments** [@LangChain](https://x.com/LangChain/status/2037666098561032421) 등이 있다. 방향성은 “툴을 붙인 챗봇”에서 에이전트용 소프트웨어 라이프사이클 프리미티브로 이동 중이다.
- **에이전트 벤치마크가 실제 워크로드를 반영하기 시작**: Artificial Analysis는 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2037562417836929315)를 통해 **AA-AgentPerf**를 소개했는데, **실제 코딩 에이전트 트래젝터리**, **100K+ sequence length**, 그리고 **가속기당/ kW당/ $당/ 랙당 동시 사용자 수**로 표현되는 스루풋(throughput)에 초점을 맞춘다. 이는 합성 토큰 벤치마크보다 배포 관점에서 더 유용한 추상화로, 에이전트 중심 서빙을 위한 가속기 시스템 비교에 도움이 될 수 있다.

### 코딩 에이전트, Codex 플러그인, 멀티 에이전트 소프트웨어 워크플로

- **OpenAI의 Codex 생태계가 워크스페이스 네이티브 자동화로 이동**: OpenAI 개발자들은 [@OpenAIDevs](https://x.com/OpenAIDevs/status/2037604273434018259)에서 **Codex plugins**와 유스케이스 갤러리를 강조했고, Box는 Box 콘텐츠 위 워크플로 자동화를 위한 Codex 플러그인을 [@Box](https://x.com/Box/status/2037563341431058497)로 출시했다. [@theo](https://x.com/theo/status/2037383187849183457), [@nickbaumann_](https://x.com/nickbaumann_/status/2037395162641686813), [@reach_vb](https://x.com/reach_vb/status/2037614060452106437)의 반응은 중심이 프롬프트/응답에서 **지속 워크스페이스, 이슈 시스템, 터미널, PR 플로, 플러그인**으로 옮겨가고 있음을 시사한다.
- **승리하는 UX 패턴은 점점 “소프트웨어용 플릿 관리(fleet management)”**: [@VibeMarketer_](https://x.com/VibeMarketer_/status/2037521519736463782)는 칸반 카드, 분리된 worktree, 에이전트 소유 태스크, diff 기반 리뷰 같은 패턴을 포착했다. 관련 도구로는 브라우저 세션을 실시간 디버깅하는 새 **agent-browser dashboard** [@ctatedev](https://x.com/ctatedev/status/2037599050112160165)가 있고, Cognition/Devin 인접 코멘터리에서 멀티 에이전트 SWE 시스템에 대한 기대도 [@JTLonsdale](https://x.com/JTLonsdale/status/2037555800193851727), [@cognition](https://x.com/cognition/status/2037649026951303668) 등으로 나타났다.
- **Composer 2와 장기(long-horizon) 코딩 평가가 기준을 올림**: CursorBench 논의는 간접적이지만, [@cwolferesearch](https://x.com/cwolferesearch/status/2037726856699420987)는 벤치마크 강점으로 **실제 코딩 세션**, **불완전하게 정의된 프롬프트**, 더 넓은 품질 차원, 태스크당 중간값 **181 lines changed**를 지적한다. 이는 정적인 장난감 태스크보다 건강한 벤치마크 디자인이며, 장기 에이전트 평가로의 전반적 전환과도 맞닿아 있다.

### 연구 및 시스템: 월드 모델, 로보틱스, 음성, 멀티모달 인프라

- **Meta가 실용적인 SAM 3.1 속도 개선을 출시**: [@AIatMeta](https://x.com/AIatMeta/status/2037582117375553924)는 SAM 3의 드롭인 업데이트인 **SAM 3.1**을 공개했으며, **object multiplexing**으로 단일 forward pass에서 최대 **16개 오브젝트**를 처리할 수 있다고 한다. Meta는 중간 크기 오브젝트 워크로드에서 H100 1장 기준 비디오 스루풋이 **16 to 32 FPS**로 대략 2배가 된다고 말해, 접근 가능한 비디오 세그멘테이션 파이프라인에 의미가 있다.
- **월드 모델과 로보틱스 모두 주목할 만한 오픈 릴리스**: [@LiorOnAI](https://x.com/LiorOnAI/status/2037484990779339064)는 LeCun의 **LeWorldModel** 논문/레포를 소개했는데, **SIGReg**로 representational collapse를 수학적으로 불가능하게 만들어 **48x faster planning**과 **~200x fewer tokens**를 주장한다. 로보틱스 데이터 측면에서는 [@UnitreeRobotics](https://x.com/UnitreeRobotics/status/2037440578275946551)가 실세계 휴머노이드 전신(whole-body) 텔레오퍼레이션 데이터셋 **UnifoLM-WBT-Dataset**을 오픈소스화했고, 지속 업데이트를 예고했다.
- **스피치/오픈 오디오가 가장 건강한 오픈 카테고리 중 하나**: Cohere의 새 **2B Apache-2.0 Transcribe** 모델은 [@victormustar](https://x.com/victormustar/status/2037572662659104976)에게서 높은 평가를 받았고, [@vanstriendaniel](https://x.com/vanstriendaniel/status/2037548103272632497)은 A100에서 **33 hours** 오디오를 **12 minutes**에 전사했다고 보고했다. Mistral의 **Voxtral TTS** 논문은 [@qtnx_](https://x.com/qtnx_/status/2037553397423902846)가 언급했고, 브라우저/로컬 데모는 [@sophiamyang](https://x.com/sophiamyang/status/2037523809914241069)과 [@nickfrosst](https://x.com/nickfrosst/status/2037680223445975131#m)에서 공유됐다.
- **오픈 로보틱스 스택도 재현성(reproducibility)이 개선**: AI2는 시뮬레이션에서만 학습된 오픈 로봇 조작(manipulation) 스위트 **MolmoBot**을 공개했으며, 코드·훈련 데이터·생성 파이프라인·평가를 [@allen_ai](https://x.com/allen_ai/status/2037590611990094259)로 제공한다. 이는 Unitree 데이터셋과 상호보완적이며, 최상위 연구소 밖에서도 재현 가능한 로보틱스 연구가 진전 중임을 시사한다.

### 참여도 상위 트윗

- **Anthropic/Capybara 유출**: [@Yuchenj_UW on Capybara](https://x.com/Yuchenj_UW/status/2037387996694200509)는 Opus 상위 신규 티어와 보고된 벤치마크 개선을 요약하며, 기술 항목 중 가장 높은 참여를 얻었다.
- **Paul Conyngham의 AI 보조 반려견 암 치료**: [@sama](https://x.com/sama/status/2037396826060673188)는 ChatGPT 등 도구로 반려견 암에 대한 **mRNA vaccine protocol** 설계를 돕는 이야기를 공유했고, AI 기반 개인맞춤 의료에 대한 큰 토론으로 이어졌다.
- **TurboQuant 비판**: [@gaoj0017](https://x.com/gaoj0017/status/2037532673812443214)는 논문 방법론 분쟁으로는 이례적으로 높은 참여를 받았는데, 크게 홍보된 시스템 논문에 도전하는 내용이었기 때문으로 보인다.
- **GLM-5.1 출시**: [@Zai_org](https://x.com/Zai_org/status/2037490078126084514)의 GLM-5.1 전면 제공 발표가 강하게 반응을 얻으며, 오픈 코딩 모델에 대한 지속 관심을 강화했다.
- **에이전트용 오픈 인프라**: Codex plugins를 다룬 [@OpenAIDevs](https://x.com/OpenAIDevs/status/2037604273434018259)와 Hermes Agent의 Hugging Face 통합을 다룬 [@NousResearch](https://x.com/NousResearch/status/2037654827929338324)는 개발자 관점에서 가장 명확한 제품/인프라 출시 소식이었다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM — TurboQuant 및 RotorQuant 혁신

- **[Google TurboQuant running Qwen Locally on MacAir](https://www.reddit.com/r/LocalLLaMA/comments/1s5kdu0/google_turboquant_running_qwen_locally_on_macair/)** (Activity: 433): 게시글은 Google의 TurboQuant 압축(compression) 방법을 `llama.cpp`에 적용해, 일반 MacBook Air(M4, 16 GB)에서도 `20000 tokens` 컨텍스트로 **Qwen 3.5–9B**를 실행한 실험을 다룬다. 오픈소스 앱 [atomic.chat](http://atomic.chat/)이 로컬 실행 리소스로 언급됐다. 댓글에서 Tatrions는 16GB 기본 MacBook Air에서 스왑 없이 `20K context`를 처리한 점이 인상적이라며, 클라우드 API에 의존하던 유스케이스가 로컬로 옮겨갈 수 있다고 봤고 이 압축 수준이 동일 모델의 표준 Q4 대비 품질을 얼마나 떨어뜨리는지 궁금해했다. M5_Maxxx는 구현이 [Jan.ai](http://Jan.ai)에서 거의 변형되지 않은 형태라고 점검하며, 리네이밍·UI 조정·커스텀 `llama.cpp` 백엔드 포크 등과 함께 96개 커밋 대부분이 CI/build 파이프라인 변경에 치우쳐 있다고 지적했다. AppealThink1733는 TurboQuant가 `llama.cpp`에 어떻게 통합되는지(혹은 이미 지원되는지) 질문하며 접근성 확대에 관심을 보였다.
- **[Skipping 90% of KV dequant work → +22.8% decode at 32K (llama.cpp, TurboQuant)](https://www.reddit.com/r/LocalLLaMA/comments/1s56g07/skipping_90_of_kv_dequant_work_228_decode_at_32k/)** (Activity: 744): 게시글은 `llama.cpp`의 TurboQuant KV 캐시(KV cache) 압축에서 attention 희소성(sparsity)을 이용해, 영향이 작은 위치의 dequantization을 건너뛰어 `32K` 컨텍스트에서 디코드(decode) 속도를 `+22.8%` 올리는 최적화를 소개한다. `M5 Max`에서 PPL 변화 없이 개선됐고, `M2 Pro`에서도 `q8_0` KV 캐시 대비 `~0.45x`에서 `~0.73x`로 향상됐다고 한다. 구현과 벤치마크는 [GitHub](https://github.com/TheTom/turboquant_plus)에, 자세한 설명은 [writeup](https://github.com/TheTom/turboquant_plus/blob/main/docs/papers/sparse-v-dequant.md)에 있다. 댓글에서 Specialist_Sun_7819는 커널 3줄 수준의 단순한 수정으로 큰 이득을 냈다는 점과 `64K` 같은 더 긴 컨텍스트로의 확장성을 궁금해했고, sean_hash는 Flash Attention류 최적화와의 유사성을 언급했으며, Pentium95는 이 최적화가 `llama.cpp` 본류에 들어가길 바란다고 했다.
- **[TurboQuant in Llama.cpp benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1s4bzo2/turboquant_in_llamacpp_benchmarks/)** (Activity: 463): 작성자는 Apple Silicon(Metal)에서 `llama.cpp`에 **TurboQuant**를 적용했지만 TPS가 `f16` 대비 `50%` 낮았고, CUDA 머신에서는 출력이 좋지 않아 셋업 오류 가능성을 언급한다. 로컬 소비자 하드웨어에서 큰 컨텍스트/모델을 돌리게 해주는 잠재력은 인정하면서 MLX/VLLM 등 관련 프로젝트 동향도 함께 거론한다. 댓글에서 Velocita84는 Kullback-Leibler Divergence(KLD) 같은 지표 부재를 지적했고, CornerLimits는 `pp64`보다 `pp2048` 같은 지표가 더 유의미하다고 했으며, DinoAmino는 TurboQuant가 정확도를 올리기보다 긴 컨텍스트를 “추가 정확도 손실 없이” 가능하게 하는 쪽의 이점이라고 정리했다.
- **[RotorQuant: 10-19x faster alternative to TurboQuant via Clifford rotors (44x fewer params)](https://www.reddit.com/r/LocalLLaMA/comments/1s44p77/rotorquant_1019x_faster_alternative_to_turboquant/)** (Activity: 652): **RotorQuant**는 Clifford Algebra를 활용한 벡터 양자화(vector quantization)로 **TurboQuant** 대비 `10-19x` 속도와 `44x` 적은 파라미터를 주장한다. `d=128`에서 `d×d` 랜덤 직교행렬을 Clifford rotors로 대체해 `16,384` FMAs를 약 `100` FMAs로 줄였고, 코사인 유사도는 TurboQuant `0.991` 대비 `0.990` 수준이라고 한다. fused CUDA 커널과 Metal shader로 RTX PRO 4000/Apple M4에서 성능을 강조하며, 합성 랜덤 벡터에서는 MSE가 더 크지만 QJL 보정으로 실제 모델 attention 충실도는 유지된다고 한다. [GitHub](https://github.com/scrya-com/rotorquant) [Paper](https://www.scrya.com/rotorquant/) 댓글에서 Juan_Valadez는 TurboQuant의 전역 랜덤 회전(Haar)이 에너지 분산에 유리한 반면 RotorQuant의 3D 블록 믹싱은 이를 재현하기 어려워 최악(one-hot) 벡터에서 저비트 양자화 품질이 나빠질 수 있다고 했고, Dany0는 그래픽스/QuiP류와의 연관성을 언급하며 잠재력을 인정했으며, sean_hash는 Clifford 대수의 뜻밖의 적용을 흥미로운 교차영감 사례로 봤다.

### /r/LocalLlama + /r/localLLM — GLM-5.1 및 코딩 모델 비교

- **[Glm 5.1 is out](https://www.reddit.com/r/LocalLLaMA/comments/1s51id3/glm_51_is_out/)** (Activity: 1127): 이미지에는 Z.ai의 **GLM-5.1** 출시가 안내되며, 코딩 평가 점수가 GLM-5의 `35.4`에서 GLM-5.1의 `45.3`으로 상승했고 Claude Opus 4.6의 `47.9`에는 못 미치지만 격차가 줄었다는 비교가 제시된다. 댓글에서 power97992는 DeepSpeed v4 출시 지연을 Ascend 하드웨어 훈련 이슈로 추정했고, zb-mrx는 GLM 5 대비 GLM 5.1의 롤아웃이 더 매끄러워졌다고 했으며, jacek2023는 로컬 구동이 `72GB VRAM` 한계 등 하드웨어 제약을 받는다는 점을 언급했다.

### /r/LocalLlama + /r/localLLM — 로컬 LLM 하드웨어 구성/비교

- **[Dual DGX Sparks vs Mac Studio M3 Ultra 512GB: Running Qwen3.5 397B locally on both. Here's what I found.](https://www.reddit.com/r/LocalLLaMA/comments/1s4lmep/dual_dgx_sparks_vs_mac_studio_m3_ultra_512gb/)** (Activity: 819): 작성자는 **Qwen3.5 397B**를 로컬로 돌리며 **Mac Studio M3 Ultra 512GB**( `MLX 6 bit quantization`)와 **dual DGX Spark**( `INT4 AutoRound quantization`)를 비교한다. Mac Studio는 `30 to 40 tok/s`와 `~800 GB/s` 대역폭을 보였지만 프리필(prefill)이 느리고 툴 호출에 커스텀 async proxy가 필요했다. Spark는 CUDA tensor core로 프리필·배치 임베딩이 빠르지만 셋업 복잡성, 노드당 `~273 GB/s` 메모리 대역폭, 안정성 이슈가 언급된다. 각 세팅 비용은 대략 `$10K`이며, `$2K/month` API 지출 대비 10개월 손익분기(break-even) 추정도 제시됐다. 댓글에서 Repoman444는 Nvidia DGX 지원 품질을 문제 삼았고, sp4_dayz는 Qwen3.5 397B가 Claude/Opus에 비해 약간 뒤처지지만 가깝다고 했으며, Gringe8은 프롬프트 처리 속도가 비교에 포함됐는지 질문했다.
- **[If you had ~10k to spend on local LLM hardware right now, what would you actually build?](https://www.reddit.com/r/LocalLLM/comments/1s40wgj/if_you_had_10k_to_spend_on_local_llm_hardware/)** (Activity: 201): 예산 `~$10k`로 로컬 LLM 하드웨어를 구성해 최소 `30B`(가능하면 `70B`) 모델을 프라이버시 중심 워크플로/툴에서 돌리고 싶다는 질문이다. 논의는 GPU 선택(예: **RTX 4090** 성능 vs 중고 **A6000/A40**의 VRAM), **Mac Studio (M3 Ultra)**의 통합 메모리 성능, CPU/RAM/스토리지 균형으로 이어진다. 댓글에서 Blackdragon1400는 `256GB` 이상의 VRAM/통합 메모리 권장을 강조하며 `2x DGX Sparks`로 `Qwen3.5-122b-Int4-Autoround`를 `~40t/s`로 구동할 수 있다고 주장했고, MatthiasWM은 6월 개발자 이벤트에서의 `M5 Ultra` 가능성을 들어 큰 지출을 미루자고 했으며, Blackdragon1400는 “그냥 겨우 들어맞는” 양자화 모델에 타협하지 말고 메모리를 우선하라고 조언했다.

### Less Technical Subreddits

- 대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

---

## AI Discord Recap

### AINews

- **접근 종료 공지**: Discord가 오늘 접근을 차단해 더 이상 이 형태로는 되돌리지 않으며, 곧 새 AINews를 출시할 예정이라고 밝혔다. 끝까지 읽어줘서 고맙고, 좋은 여정이었다고 덧붙였다.
