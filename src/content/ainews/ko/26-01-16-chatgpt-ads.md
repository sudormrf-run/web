---
title: "ChatGPT, 무료 티어에 광고 테스트 시작 + 새로운 $8/월 Go 플랜 출시"
summary:
  - "OpenAI가 ChatGPT Go($8/월)를 출시"
  - "무료/Go 티어에서 광고 테스트 시작"
  - "Claude Opus 4.5가 SWE-bench 1위"
  - "FLUX.2 [klein]이 4B 모델로 출시"
  - "Cursor Ultra 비용 폭발 사례 보고"
date: 2026-01-16
originalUrl: "https://news.smol.ai/issues/26-01-16-chatgpt-ads/"
hasHeadline: true
headline: "ChatGPT, 프리미엄 + 광고 모델로 전환"
tags:
  - OpenAI
  - ChatGPT
  - Claude
  - FLUX
  - Cursor
isFeatured: true
---

## 헤드라인: ChatGPT, 프리미엄 + 광고 모델로 전환

> "소비자 수익화가 전부다."

AI 뉴스 2026/01/15-01/16. 12개 서브레딧, 544개 Twitter, 24개 Discord (205개 채널, 4966개 메시지) 분석. 예상 읽기 시간 절약: 430분.

---

## AI Twitter Recap

### OpenAI 제품 + 수익화 변화

**ChatGPT Go + 광고 테스트:**
- OpenAI가 [ChatGPT Go](https://openai.com/index/introducing-chatgpt-go/)를 월 $8에 발표했다. "10배 더 많은 메시지", 파일 업로드, 이미지 생성, 확장된 메모리/컨텍스트, 무제한 GPT 5.2 instant 접근을 제공한다.
- 무료 및 Go 티어에서 광고 테스트가 시작된다. [OpenAI의 광고 접근법](https://openai.com/index/our-approach-to-advertising-and-expanding-access/)에 따르면 "광고가 응답에 영향을 미치지 않으며", 명확히 표시되고, "대화는 광고주로부터 비공개"라고 한다.
- 인센티브 편향 가능성에 대한 커뮤니티의 회의적 반응이 있었으며, 이전 "광고는 최후의 수단" 입장이 언급되었다.

**메모리 + 속도 개선:**
- Sam Altman이 "새로운 ChatGPT 메모리 개선"과 함께 "매우 빠른 Codex 출시 예정"을 반복적으로 예고했다.
- Codex CLI 생태계: Ollama를 통해 `codex --oss`로 오픈 웨이트 모델 사용 가능, 권장 컨텍스트 길이 32K 이상

### 에이전트 툴링: 오케스트레이션 UX & 휴먼-인-더-루프

**핵심 주제:**
- 휴먼-인-더-루프(human-in-the-loop) 시스템이 동일한 기본 모델에도 신뢰성 승수 역할을 한다
- "청킹(chunking)은 죽었다" / 파일 우선 검색: 에이전트가 파일을 열고 동적으로 검색할 수 있을 때 RAG가 여전히 유효하며, 취약한 청크/임베드 파이프라인을 피한다
- 다수의 에이전트 오케스트레이터 제품 출시: Anthropic의 Cowork, SpecStory CLI, 로컬 Mac 에이전트용 네이티브 Ollama 통합을 갖춘 OpenWork

### 추론(Inference) + 시스템 엔지니어링

**병목 현상 변화:** 인프라 분석에 따르면 토큰 생성이 이제 지배적이다; prefill/decode 분리는 재설계된 스케줄링 없이 활용도를 저해한다.

**하드웨어 벤치마킹:** Artificial Analysis가 SambaNova SN40L에서 DeepSeek R1을 벤치마크했으며, 테스트된 NVIDIA 구성 대비 동시성에서 더 높은 처리량(~269 tok/s 단일 사용자)을 보여주었다.

**CUDA 최적화:** 엔지니어들은 더 깔끔한 타일링 추상화를 위한 CuTe 대수를 강조했다; NVIDIA의 cuTile 가이드라인은 단순화된 블록 레벨 코드로 cuBLAS GEMM에 가까운 성능을 달성할 수 있게 한다.

**데이터 센터 규모:** Epoch AI는 AI 데이터 센터를 총 ~30 GW 용량으로 추정, 뉴욕주 피크 사용량과 비슷하다.

### 모델 & 연구 하이라이트

**토큰화 없는 음성:** OpenBMB가 [VoxCPM](https://huggingface.co/OpenBMB/VoxCPM)을 오픈소스화했다. 연속 음성 생성과 RTX 4090에서 ~0.15 실시간 팩터로 실시간 스트리밍 음성 복제가 가능하다.

**소형 모델:** TII가 엣지 시나리오를 위한 Falcon-H1-Tiny (<100M 파라미터)를 홍보했다; Ultralytics가 YOLO26 패밀리 (30개 모델, <50M 파라미터)를 출시했다.

**번역:** TranslateGemma가 Malayalam을 포함한 다국어 지원으로 주목받았다; [Ollama](https://ollama.ai/)에서 특정 프롬프팅 형식으로 사용 가능하다.

**검색 발전:** 멀티-벡터 검색이 소형 모델(32M 파라미터)로 8B 기준선과 경쟁할 수 있다고 주장; ColBERT/ColPali 스타일 접근법이 크로스-태스크에서 좋은 결과를 보인다.

**정렬 프레임워크:** OpenBMB의 AIR이 선호도 데이터셋을 주석(Annotations)/지시(Instructions)/응답(Response) 쌍으로 분해하며, 14k 큐레이션된 쌍으로 평균 +5.3 벤치마크 향상을 보고했다.

### 생성형 미디어

**FLUX.2 [klein]:** Black Forest Labs의 모델이 첫날부터 [vLLM-Omni 지원](https://github.com/vllm-project/vllm)을 받았다. 소비자 친화적(<~13GB VRAM), 1초 미만 추론, Apache-2.0 라이선스 4B로 포지셔닝되었다.

**비디오 순위:** Artificial Analysis에 따르면 LTX-2가 Video Arena에서 선두 오픈 웨이트 비디오 모델이다 (LTX-2 Community License, 상업적 수익 임계값 있음).

**모션 제어 워크플로우:** Kling 모션 제어와 mocap 스타일 전송이 빠른 캐릭터 교체와 전이 가능한 퍼포먼스 캡처를 가능하게 한다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

**새 모델 벤치마크:**

[SWE-rebench December 2025](https://swe-rebench.com/?insight=dec_2025)에서 Claude Opus 4.5가 63.3% 해결률로 선두, GPT-5.2 xhigh가 61.5%를 기록했다. Gemini 3 Flash Preview가 Pro를 능가했고, GLM-4.7이 최고의 오픈소스로 랭크되었다 (~473 activity comments)

[Unsloth extended context RL](https://www.reddit.com/r/LocalLLaMA/comments/1qdna3t/7x_longer_context_reinforcement_learning_in/)이 7배 더 긴 컨텍스트(일부 경우 12배)를 달성했다. 24GB 카드에서 20K 컨텍스트를 정확도 손실 없이 지원하며, 192GB B200 GPU에서 380K에 도달한다 (~288 activity comments)

**하드웨어 업그레이드:**

[A100 40GB 설정](https://www.reddit.com/r/LocalLLaMA/comments/1qe0cxc/latest_upgradea100_40_gb/) 사용자가 게이밍 리그를 AI 중심 구성으로 전환했다; matatonic은 패시브 쿨링에 블로워 팬이나 AliExpress를 통한 액티브 쿨링이 필요하다고 언급했다 (~466 activity)

[M4/M5 Max 128GB vs DGX Spark](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/) 토론: MacBook이 추론(inference)에 우수한 메모리 대역폭을 제공; NVIDIA는 더 광범위한 파인튜닝/멀티모달 기능을 지원 (~188 activity)

[RTX 5070 Ti 생산 중단](https://www.reddit.com/r/LocalLLaMA/comments/1qdh28f/rtx_5070_ti_and_rtx_5060_ti_16_gb_no_longer/) 메모리 공급 부족으로; 5060 Ti 16GB 가격이 MSRP 대비 ~$100 인상 [출처 비디오](https://m.youtube.com/watch?v=yteN21aJEvE) (~414 activity)

**커뮤니티 혁신:**

[r/LocalLLM 30일 콘테스트](https://www.reddit.com/r/LocalLLM/comments/1olbrch/mod_post_announcing_the_rlocalllm_30day/)가 오픈소스 추론/파인튜닝 프로젝트에 NVIDIA RTX PRO 6000과 8x H200 클라우드 시간을 제공 (~120 activity)

[TiinyAI 120B 로컬 디바이스](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/)가 80GB RAM, 30W 전력으로 모델을 실행한다; $1400 가격과 메모리 대역폭 제약에 대한 회의적 반응 (~107 activity)

[커뮤니티 최적화 성과](https://www.reddit.com/r/LocalLLaMA/comments/1qee2de/i_fucking_love_this_community/)로 10년 된 PC에서 4GB VRAM으로 llama.cpp/vLLM과 MoE 아키텍처를 사용하여 14-13.5 t/s 달성 (~469 activity)

[VRAM 가격 급등 밈](https://www.reddit.com/r/LocalLLaMA/comments/1qe2i88/my_story_of_underestimating_rlocalllamas_thirst/)으로 w6800 32GB 가격이 Reddit 포스트 후 $500에서 $1000+로 급등 기록 (~1291 activity)

[16GB VRAM 모델 한계](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/): 실용적 최대치는 ~14B 파라미터; 더 큰 모델은 품질 저하를 감수한 공격적 양자화(quantization) 필요 (~155 activity)

### Less Technical AI 서브레딧

**Claude & Gemini 업데이트:**

[Claude Cowork이 Pro에 제공](https://www.reddit.com/r/ClaudeAI/comments/1qeo736/official_claude_cowork_is_now_available_to_pro/) macOS 앱에서 연구 프리뷰로; 사용자들이 459개 파일 정렬에 97% 세션 한도 소비 보고 (~353 activity)

[Claude Flow v3 재구축](https://www.reddit.com/r/ClaudeAI/comments/1qegsta/announcing_claude_flow_v3_a_full_rebuild_with_a/)이 TypeScript/WASM 재작성으로 75-80% 토큰 감소, 250% 용량 향상을 주장 [GitHub repo](https://github.com/ruvnet/claude-flow) (~291 activity); 버즈워드 가득한 메트릭에 대한 커뮤니티 회의적 반응

[Gemini 3 Pro 성능 저하](https://www.reddit.com/r/GeminiAI/comments/1qemf0h/today_gemini_3_pro_became_unusable_to_me_as_a_pro/): 사용자들이 현저히 감소한 컨텍스트 윈도우, 증가한 환각, 관련 없는 코드 생성 보고; GPT 5.2 Thinking이 대안으로 제안됨 (~183 activity)

**모델 릴리스:**

[GLM-Image SOTA 멀티모달](https://www.reddit.com/r/MachineLearning/comments/1qeakhz/r_china_just_released_first_sota_multimodal_model/)이 Huawei Ascend 910 칩에서 훈련됨, H200 대비 60% 더 나은 컴퓨트 효율성(tokens/joule) 주장; 재훈련 없이 1024-2048 해상도 지원 (~49 activity)

[Mamba-2 핵심 알고리즘 재작성](https://www.reddit.com/r/MachineLearning/comments/1qehwlu/d_why_mamba_rewrote_its_core_algorithm_and/): 병렬 스캔(10-20% Tensor Core 활용)에서 블록-대각 GEMM(60-70% 활용)으로 전환; Microsoft가 RetNet을 버리고 dense Transformer로 [Substack 에세이](https://open.substack.com/pub/lambpetros/p/the-transformer-attractor) (~131 activity)

[ICASSP 2026 수락 결과](https://www.reddit.com/r/MachineLearning/comments/1qeips6/d_icassp_2026_results/): [초대 링크](https://cmsworkshops.com/ICASSP2026/author_invitation_request.php)로 바르셀로나 2026년 5월 3-8일 조기 접근 (~73 activity)

**사용자 경험:**

[ADHD 두뇌를 위한 AI 코딩 도구](https://www.reddit.com/r/ClaudeCode/comments/1qeb6od/why_ai_coding_tools_accidentally_feel_perfect_for/): 부주의형 ADHD 보상 전략과 패턴 인식 정렬; 외부화된 작업 메모리가 활성화 비용 감소 (~238 activity)

[Opus 성능 저하](https://www.reddit.com/r/ClaudeCode/comments/1qeb8x4/whats_going_on_with_opus/): 프록시 express 서버를 통한 라우팅 문제, 엔드포인트 환각; 사용자들이 Codex 같은 대안 탐색 (~220 activity)

---

## AI Discord Recap

### 고수준 요약

**OpenAI 수익화 & 벤치마킹:**
- ChatGPT Go ($8/월)가 10배 메시지, 파일 업로드, 이미지 생성과 함께 출시; 광고 테스트가 "명확히 표시" 약속과 함께 시작
- METR 벤치마크 분석에 따르면 인터페이스(API vs 웹 앱)가 시간 수평선 측정에 1.75-9.5배 영향을 미침, [Simon Smith 포스트](https://xcancel.com/_simonsmith/status/2011928926864454133) 참조

**에이전틱 IDE 비용:**
- Cursor Ultra 보고: 단일 오케스트레이터 실행에 사용량의 20% 소비; ~5분에 $2 지출
- Qoder가 ~$400/월 지출에 레이트 리밋 도달; 사용자들이 비용 절감을 위해 Claude Code와 비교
- Gemini CLI가 하루 10,000,000 토큰 소비 (~$120/일, ~$4000/월 예상)
- Manus 플랫폼에서 결제/크레딧 시스템 장애; 더 나은 미터링/할당량 UX 요청

**모델 출시 & 도구 사용:**
- [TranslateGemma](https://huggingface.co/collections/google/translategemma)가 HuggingFace에서 다국어 지원
- Moonshot K2 Turbo: 표준 K2 ~28 tps 대비 ~73 tps; 새로운 Slides + Vision 기능
- Claude 멀티-툴 병렬 실행 [API 문서](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#controlling-claudes-output) 참조
- [MovementLabs.AI](https://movementlabs.ai/)의 Hawk Ultra가 단일 프롬프트로 9.5k+ 줄 출력 주장; "Opus 킬러" 포지셔닝

**평가 & 벤치마크:**
- MMLU-Pro 패치 [lm-evaluation-harness PR #3500](https://github.com/EleutherAI/lm-evaluation-harness/pull/3500)
- OpenCompass가 잘 포맷된 JSON 출력; L4 vs 3060 노트북 성능 비교
- LMArena PDF 채팅 실험적 지원 (모델 커버리지 불균형)
- 이미지 리더보드 업데이트: flux.2-klein-9B가 텍스트-투-이미지 #15

**GPU & 시스템 현실:**
- Runpod GPU 언더볼팅 공지 없이; A100 vs H100 성능 불일치
- 벤치마크 간 `time.sleep()`이 GPU 다운클럭킹 유발; sleep 제거로 클럭 유지
- PCIe Gen3x1이 3090 처리량을 ~25% 감소 (~120에서 ~90 t/s로)
- 멀티-L2 gfx942 설정에서 L2 무효화를 위해 `buffer_inv sc1` 사용하는 ROCm 캐시 일관성

### BASI 탈옥 Discord

- **Gemini 탈옥**이 빠르게 패치되지만 제한 없는 NSFW에 가장 쉬운 옵션으로 남음
- **Grok**이 필터링 없는 콘텐츠 생성으로 주목; 잠재적 밴/높은 수요 상관관계
- **Sonnet 4.5 다이어그램 내러티브** 멀티턴 언락: [공유 프롬프트](https://cdn.discordapp.com/attachments/1461676810122166346/1461678022389137634/breakout-multiturn-sonnet-4-5-meth-51n5337.txt)
- **Llama 3 거부 역전**이 프롬프트 엔지니어링으로 우회 ("I can" 준수 강제)
- **Cold Link & OCR Injection** 우회 방법; [디팽 도구](https://blackheathpoint.com/tools/defang-url.html)

### Unsloth AI Discord

- [TranslateGemma](https://huggingface.co/collections/google/translategemma) 출시 공지
- Windows 11 호환성 확인; [설치 가이드](https://unsloth.ai/docs/get-started/install/windows-installation)
- JSON 출력으로 OpenCompass 평가; L4 vs 3060 노트북 성능
- Runpod A100 언더볼팅 이슈; LM 튜닝에 A100이 비용 효율적
- **Shadows-Gemma-1B** topk 20 logprobs 접근법으로 디스틸레이션

### Cursor Community Discord

- Qoder 비용 급증: $400/월 지출, 사용자가 "도박이나 헤로인"에 비유; Claude Code가 제안됨
- Cursor PC 충돌 보고; 오케스트레이터 에이전트 동작 vs 채팅박스
- **Gemini Pro 3**가 미적 웹사이트에 추천; Tailwind/Framer Motion 제안 [Reddit 스레드](https://www.reddit.com/r/vibecoding/comments/1oy2f95/how_do_i_make_an_aigenerated_frontend_not_look/)
- Ultra 플랜 가격 우려; $400 보장과 더 작은 Opus 보너스
- Nightly 빌드 서브에이전트 제어 이슈; 서브에이전트로 더 작은 모델 사용 희망
