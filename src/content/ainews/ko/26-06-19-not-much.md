---
title: "GLM-5.2가 프런티어급 코딩 모델로 부상"
summary:
  - "GLM-5.2가 프런티어급 코딩 모델로 부상"
  - "Hermes Agent v0.17.0이 공개됨"
  - "Mythos/Fable 접근 제한 파장이 확산"
  - "QUEST-35B 연구 에이전트가 공개됨"
  - "OpenRouter에서 OSS 모델 점유율 역전"
date: 2026-06-19
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-19-not-much.md"
hasHeadline: false
headline: "GLM-5.2가 프런티어급 코딩 모델로 부상"
tags:
  - GLM-5.2
  - Z.ai
  - OpenWeight
  - Anthropic
  - Agent
isFeatured: false
---

## 헤드라인: GLM-5.2가 프런티어급 코딩 모델로 부상

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

GLM-5.2는 이번 주 가장 주목받은 오픈웨이트(open-weight) 모델로 떠올랐다. 여러 실무자들이 코딩과 설계 작업에서 폐쇄형 모델을 대체할 수 있는 수준에 가까워졌다고 평가했으며, 핵심 논점은 단순한 벤치마크 순위가 아니라 모델 독립성, 온프레미스 배포, 미세조정(fine-tuning) 권리, 공급자 종속 감소로 확장됐다.

---

## AI Twitter Recap

### GLM-5.2의 돌파, 오픈웨이트 코딩, Zhipu/DeepSeek 구도

- **GLM-5.2는 이번 주 가장 중요한 모델 뉴스처럼 보인다**: 여러 실무자들이 독립적으로 [GLM-5.2](https://x.com/gneubig/status/2067936197888930263)를 여러 워크플로에서 폐쇄형 모델 대신 진지하게 고려할 만한 첫 오픈웨이트 코딩 모델이라고 평가했다. 다만 비전과 서빙(serving)에는 단서가 붙었다. [Patrick Toulme](https://x.com/PatrickToulme/status/2068134212587184442)는 이를 “진정한 프런티어 코딩 모델”이라고 부르며, 강력한 도구 사용, 자율 중첩 서브에이전트, 장기 계획, 로컬 서빙 시 Opus에 가까운 코드 생성을 근거로 들었다. [Yuchen Jin](https://x.com/Yuchenj_UW/status/2068182756132376668), [@_xjdr](https://x.com/_xjdr/status/2068138331192602730), [@hrishioa](https://x.com/hrishioa/status/2068036265484992938)도 GLM-5.2가 코딩과 디자인 작업에서 종종 **Opus 4.8 / GPT-5.5**급에 가깝게 느껴진다고 말했다. 새로 형성되는 합의는 “전체 최고 모델”이 아니라 “오픈웨이트 모델이 이제 프런티어 SWE 범위에 신뢰 가능하게 들어왔다”는 것이다.
- **실질적 의미는 벤치마크 자랑이 아니라 모델 독립성이다**: [Thomas Wolf](https://x.com/Thom_Wolf/status/2067996287530684826)는 GLM-5.2를 오픈웨이트가 구조적으로 무엇을 바꾸는지 보여주는 사례로 설명했다. 공급자 경쟁, 온프레미스 배포, 미세조정(fine-tuning) 권리, 낮은 락인이 핵심이다. 이 주제는 [Nat Friedman? actually Andrew Ng](https://x.com/AndrewYNg/status/2068039709126017356)와 [Meryem Arik via ET Now](https://x.com/etnshow/status/2067978328641007809)의 게시물에서도 반복됐다. 두 게시물 모두 프런티어 독점 모델 접근 제한이 오픈 모델의 전략적 가치를 키운다고 주장했다. 비용 관점도 있었다. [banteg](https://x.com/banteg/status/2067960853844865306)는 “집에서 돌리기” 경제성에 반박하며, 현재 토큰 가격에서는 로컬 하드웨어가 호스팅 API나 구독보다 비합리적인 경우가 많다고 말했다.
- **서빙과 하니스는 모델만큼이나 중요하다**: 여러 트윗은 GLM-5.2의 사용성이 인프라와 에이전트 하니스 선택에 크게 좌우된다고 강조했다. [Graham Neubig](https://x.com/gneubig/status/2067952120540631493)는 모델/하드웨어별 정확한 서빙 설정을 제공하는 **sglang cookbooks**를 강조했고, [@multimodalart](https://x.com/multimodalart/status/2068026613787217943)는 Hugging Face를 통해 Claude Code 호환 인터페이스로 라우팅할 수 있음을 보여줬다. 다른 이들은 독점 하니스가 오픈 모델 품질을 과소평가할 수 있다고 주장했다. [Harrison Chase](https://x.com/hwchase17/status/2068075256993169619)는 Claude Code/Codex에 맞춰진 환경보다 **deepagents code**가 GLM-5.2를 더 모델 중립적으로 평가하는 방법이라고 추천했다.

### 에이전트 엔지니어링: Fan-Out, 루프 신뢰성, Hermes의 빠른 반복

- **에이전트 엔지니어링의 중심은 “하나의 똑똑한 에이전트”에서 오케스트레이션 패턴으로 이동 중이다**: [Jared from Cognition](https://x.com/imjaredz/status/2068001458205720751)는 “**agent fan-out**”을 Devin 내부에서 흔히 쓰는 워크플로로 설명했다. 하나의 마스터 에이전트가 작업을 분해하고, 5~100개의 자식 에이전트를 병렬로 생성한 뒤 결과를 병합한다. 이유는 단순하고 기술적으로도 그럴듯하다. 에이전트는 더 좁은 작업과 더 작은 컨텍스트에서 더 잘 작동하며, 병렬 VM은 작업 분해를 경제적으로 매력적으로 만든다. 이는 **loop engineering**을 독립된 분야로 중시하는 흐름과 맞물린다. [Omar Sanseviero’s post](https://x.com/omarsar0/status/2068010014808092674)와 클라이언트/서버/추론(inference) 실패 전반에서 견고한 에이전트 루프를 구축하는 [threepointone’s planned deep dive](https://x.com/threepointone/status/2067970619929510350)에서도 이 흐름이 보인다.
- **Hermes는 진지한 오픈 에이전트 스택으로 빠르게 성숙하고 있다**: Nous는 [Hermes Agent v0.17.0 “The Reach Release”](https://x.com/NousResearch/status/2068056222457115126)를 공개했고, [Teknium](https://x.com/Teknium/status/2068058591186346450)은 에이전트 공유(“agent distributions”), 세션 압축 동작, 전반적 사용성에 관한 릴리스 노트와 사용 팁을 확산했다. 커뮤니티 게시물은 실전 배포 흐름도 보여줬다. [iMessage support](https://x.com/Lonely__MH/status/2068171726291435808), Hermes와 Kimi로 즉석 생성한 GIS 도구([Randy George](https://x.com/RandyGeorge17/status/2068020022019326201)), 컨텍스트 압축 규칙 같은 숨은 시스템 동작을 사용자들이 점점 발견하는 사례([@witcheer](https://x.com/witcheer/status/2068027535955468533))가 있었다.
- **Cloudflare는 조용히 핵심 에이전트 인프라가 되고 있다**: [Temporary Accounts on Workers](https://x.com/Cloudflare/status/2067956828290302374)는 에이전트가 수동 OAuth 없이 `wrangler deploy --temporary`를 실행하게 해, 가장 성가신 배포 병목 중 하나를 줄인다. 별도로 Cloudflare는 [Durable Objects stay alive for active outbound connections and WebSockets](https://x.com/CFchangelog/status/2068047758271861012)를 적용해 장시간 실행 에이전트의 중요한 문제를 해결했고, 낮은 지연시간을 위한 [APAC location hints](https://x.com/CFchangelog/status/2067994912713322811)도 추가했다. 작은 릴리스 노트 항목처럼 보이지만, 합치면 수 시간짜리 에이전트 세션과 배포 루프의 실제 운영 고통을 줄인다.

### 모델 접근, 주권, Anthropic “Mythos/Fable” 충격

- **Anthropic 최상위 모델 접근 제한은 한 회사를 넘어 큰 파장을 만들고 있다**: 여러 게시물은 **Mythos/Fable** 가용성 차질이 이어지고 있음을 언급했다. [some early users retained access via Project Glasswing](https://x.com/kimmonismus/status/2067876984206537188)라는 보고와, 이후 약 [~200 organizations may still have access](https://x.com/kimmonismus/status/2068038020394021000)라는 소식이 있었다. 더 큰 시사점은 전략적이다. [Andrew Ng](https://x.com/AndrewYNg/status/2068039709126017356)는 벤더 정책 변화와 미국 정부 수출 통제가 결합되며 AI 주권과 오픈 대안에 대한 글로벌 수요를 가속하고 있다고 주장했다. 프런티어 지능 접근이 갑자기 철회될 수 있다면, 의존 자체가 제품 리스크가 된다.
- **거버넌스 논의는 더 구체적이고 벤치마크 중심이 되고 있다**: [Rohan Paul](https://x.com/rohanpaul_ai/status/2067947789578125391)은 “모든 jailbreak 제거” 같은 불가능한 목표에서 벗어나 우회 심각도, 재현성, 노출된 능력, 다운스트림 피해를 등급별로 평가하는 방향으로 전환할 수 있다고 요약했다. 이는 이분법적 안전 주장보다 실행 가능하며, 에이전트와 모델 배포를 위한 명시적 평가/제어 플레인으로 이동하는 업계 흐름과도 맞는다.
- **오픈소스는 점점 엔지니어링 레버리지이자 지정학적 헤지로 묘사된다**: [Natolambert](https://x.com/natolambert/status/2067974681135862167)는 오픈소스 AI 금지는 실수라고 주장했고, [Harry Stebbings quoting Everett Randle](https://x.com/HarryStebbings/status/2068032816286150974)은 중국 대비 서구 오픈 모델의 약점을 지적했다. 이번 주 반복된 정책-엔지니어링 종합은 이렇다. 오픈웨이트는 더 이상 개발자 취향만이 아니라 **주권 인프라**로 논의되고 있다.

### 인프라, 추론, 시스템: 추측 디코딩, TPU, 문서 파싱

- **추론(inference) 엔지니어링은 특히 처리량 중심으로 빠르게 진전됐다**: Modal과 Z Lab은 [six new speculative decoders for Qwen 3.x](https://x.com/charles_irl/status/2068124629433262210)를 공개했다. 핵심 주장은 **B200**에서 Qwen 3.5 122B-A10B가 **초당 1k+ 출력 토큰**을 낸다는 것이다. 이 수치가 프로덕션에 가까운 워크로드에서도 유지된다면, spec decoding은 서빙 경제성을 실질적으로 바꾸는 가장 명확한 레버 중 하나로 남는다. 한편 Google은 **TPU 8i**를 사후학습과 고동시성 추론(reasoning)에 최적화된 장치로 설명했다. 더 많은 온칩 SRAM, **Collectives Acceleration Engine**, [Boardfly](https://x.com/GoogleCloudTech/status/2068000858713841924)라는 새 서빙 토폴로지가 포함됐다.
- **오픈 문서 추출에 주목할 만한 새 진입자가 등장했다**: [Vik Paruchuri](https://x.com/VikParuchuri/status/2067941596306231421)는 문서에서 구조화 데이터를 추출하는 오픈소스 **9B 모델**을 발표했다. 내부 벤치마크에서 **90.2%**를 기록했으며, Gemini 3.5 Flash의 **91.3%**에 근접하고 **NuExtract3 (81.5%)** 같은 추출 전문 모델보다 앞선다고 보고했다. **9.5s p50** 타이밍과 JSON 스키마 기반 출력을 제공한다. 문서 워크플로를 만드는 팀에는 이번 묶음에서 실용적으로 중요한 출시 중 하나다.
- **VLM 없이 하는 파싱도 여전히 승산이 있다**: [Jerry Liu](https://x.com/jerryjliu0/status/2068005414369906856)는 순수 코드 기반 파서 **LiteParse**를 강조했다. Markdown이 많은 문서에서 일부 VLM/OCR 시스템을 이기면서도 무료이고 빠르다고 한다. 모든 문서 지능 문제가 생성형 멀티모달 스택을 필요로 하지는 않는다는 유용한 reminder다.

### 과학, 메모리, 연구 방향

- **AI-for-science에서 강한 기계론적 모델링 업데이트가 있었다**: Google DeepMind 연구자들은 [ATLAS (Active Theory Learning for Automated Science)](https://x.com/EltetoNoemi/status/2067920123122336138)를 소개했다. 데이터에서 해석 가능한 기계론적 모델을 생성하고, 이를 검증할 후속 실험을 선택하는 파이프라인이다. 이는 예측을 넘어 구조화된 이론을 제안하고 개입을 선택하는 시스템이라는 장기 흐름과 맞닿아 있다.
- **에이전트 메모리 연구는 더 배포 가능해지고 있다**: [DAIR.AI’s highlight of AtomMem](https://x.com/dair_ai/status/2067984002376749525)은 장수명 에이전트의 실제 실패 모드를 다룬다는 점에서 주목할 만하다. 거친 요약은 드리프트하고, 제한 없는 메모리 업데이트는 상태를 망가뜨린다. AtomMem은 **atomic fact extraction**, 계층적 이벤트 구조, 그래프 기반 연관 검색을 사용하며, **LoCoMo**에서 SOTA를 보고하면서도 제품 사용에 충분히 저렴한 계산 비용을 목표로 한다.
- **궤적에서 스킬을 채굴하는 접근은 유망하지만 아직 미성숙하다**: 자동 `SKILL.md` 생성 논문에 대한 [Omar Sanseviero’s summary](https://x.com/omarsar0/status/2067986774241251433)는 좋은 현실 점검이다. 이 파이프라인은 GUI 궤적을 높은 순도의 읽을 수 있는 스킬로 클러스터링할 수 있었지만, RL 개선은 제한적이었다. **skill-step accuracy는 18.5%에서 20.5%**로 올랐고, BrowseComp+는 그대로였으며, 단순한 prior도 여전히 경쟁력이 있었다. 좋은 분해가 곧 유용한 능력 전이를 의미하지는 않는다.

### 참여도 기준 상위 트윗

- **프런티어 랩의 인재 이동**: [John Jumper is leaving Google DeepMind to join Anthropic](https://x.com/JohnJumperSci/status/2068001285173834106)는 올해 AI 분야에서 가장 큰 인사 이동 중 하나다. [Demis Hassabis](https://x.com/demishassabis/status/2068002732250640603)의 반응은 손실 규모를 보여준다. 이는 Noam Shazeer의 이동 직후 나온 소식이라 DeepMind의 인재 유지와 제품 궤적에 대한 우려를 키웠다.
- **실제 기술적 함의를 가진 응용 AI 기현상**: [A WoW private server populated by 1,800 bots using the DeepSeek API](https://x.com/kimmonismus/status/2067924419947995471)는 기술 인접 게시물 중 참여도가 가장 높았다. 밈 아래에는 반복되는 시스템 질문이 있다. 충분히 저렴한 모델 추론(inference)이 소프트웨어의 전체 사회적 층위를 시뮬레이션할 수 있게 되면 무슨 일이 벌어지는가?
- **Anthropic 사용 한도 리셋**: [ClaudeDevs reset 5-hour and weekly limits across all plans](https://x.com/ClaudeDevs/status/2068122937308426676)는 모든 플랜에서 5시간 및 주간 한도를 재설정한 운영 변경으로, Fable/Mythos 차질 중 수요 압박과 사용자 불만을 반영했을 가능성이 크다.
- **Figure의 배포 이정표**: [“For the first time, robots now outnumber humans at Figure”](https://x.com/adcock_brett/status/2068040783295627609)는 운영 세부사항은 부족하지만, embodied AI에서 스케일링 수사와 노동 대체 프레이밍의 신호로는 주목할 만하다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: GLM-5.2 벤치마크와 로컬 추론

- **[New Agentic Benchmark Out: Claude Fable and GLM 5.2 Top Their Cohorts](https://www.reddit.com/r/LocalLLaMA/comments/1u9yt6v/new_agentic_benchmark_out_claude_fable_and_glm_52/)** (Activity: 328): **[image](https://i.redd.it/9xcqvw4ny78h1.png)는 **Artificial Analysis**의 **AA-Briefcase Elo** 기술 막대 차트다. 정적 QA가 아니라 LLM의 계획/실행을 테스트하려는 새로운 에이전트형 지식 작업 벤치마크이며, 게시물은 방법론/글을 [here](https://artificialanalysis.ai/articles/aa-briefcase)에 링크했다. **Claude Fable 5 with fallback**이 `1587`로 선두이며, **Claude Opus 4.8**의 `1356`, **GLM-5.2**의 `1266`보다 크게 앞선다. 신뢰구간과 **2026년 6월 18일** 데이터가 표시됐고, selftext는 이 벤치마크가 “not saturated”라고 강조해 명백한 benchmark-gaming 우려를 줄였다.** 댓글은 모델 순위 함의에 집중했다. 예를 들어 **Mistral**이 크게 뒤처진 데 대한 우려와 “Claude Fable”이 실제인지, 정확히 이름 붙은 것인지에 대한 회의가 있었다. 가장 기술적인 비판은 에이전트형 벤치마크에는 반복 실행이 가능한 환경, 실행 반복, 분산, 도구 권한 세부사항, timeout 정책, 실패 범주가 필요하다고 지적했다. *“one lucky trajectory”*가 불안정한 에이전트 점수를 부풀릴 수 있기 때문이다.
  - 한 댓글러는 헤드라인 순위가 의미 있으려면 벤치마크에 더 강한 재현성 메타데이터가 필요하다고 주장했다. **repeated runs**, 점수 분산, 도구 권한, timeout 정책, 분류된 실패 모드가 필요하다는 것이다. 에이전트 평가에서는 결과가 너무 적은 시행에 기반할 경우 *“one lucky trajectory”*가 모델의 겉보기 신뢰성을 부풀릴 수 있다고 설명했다.
  - 기술 비교 스레드는 **Mistral Medium이 Gemini 3.1 Pro보다 위에 랭크됐다는 점**이 놀랍다고 언급하면서도, **Mistral 3.5 Medium**을 로컬 랩 배포에 실용적인 선택지로 봤다. 같은 댓글러는 **MiniMax 3**도 잘 수행했다며, 훈련이나 튜닝이 광범위한 벤치마크 최적화보다 에이전트형 워크플로를 우선했을 수 있다고 말했다.

- **[GLM-5.2 is the new leading open weights model on the Artificial Analysis Intelligence Index](https://www.reddit.com/r/LocalLLaMA/comments/1u9zqlx/glm52_is_the_new_leading_open_weights_model_on/)** (Activity: 468): **[Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)는 **Z.ai GLM-5.2**가 Intelligence Index v4.1에서 점수 `51`로 현재 최상위 오픈웨이트 모델이라고 보고했다. GLM-5.1의 `744B` 총 파라미터 / `40B` 활성 MoE 아키텍처는 유지했다. 가장 큰 개선은 과학/에이전트 평가에서 나왔다. `CritPt +16`, `HLE +12`, `TerminalBench v2.1 +16`, `GDPval-AA v2 = 1524`이며, **MIT license**, `1M` 컨텍스트, `1M` 토큰당 `$1.4` 입력 / `$0.26` 캐시 히트 / `$4.4` 출력 API 가격, 지능-비용 Pareto frontier 포지셔닝을 갖췄다. 다만 작업당 평균 출력 토큰은 높은 `43k`다.** 댓글러들은 Fable보다 **GLM**, **DeepSeek**, **Qwen** 같은 중국 오픈웨이트 프런티어 모델에 더 관심을 보였고, “Flash”/“Air” 같은 더 작은 변형 출시를 요청했으며, 비전 지원 부재도 지적했다.
  - **GLM-5.2**를 **Qwen 3.6 122B**나 **Nemotron 3 Super** 같은 다른 대형 오픈웨이트 아키텍처로 증류할 수 있는지에 대한 기술적 우려가 제기됐다. 이는 GLM-5.2의 추론/성능 특성을 더 접근 가능하거나 다르게 최적화된 베이스 모델로 이전하려는 관심을 시사한다.
  - 한 사용자는 소프트웨어 아키텍처 테스트에서 **GLM-5.2**가 여러 구현 실수를 했다고 보고했다. *오래됐거나 중복된 crate*를 선택하고, 모든 chunk write 뒤에 `fsync`를 호출해 심각한 성능 문제를 만들었다는 것이다. 같은 프롬프트에서 **MiniMax 3**는 더 나은 결과를 냈다고 하며, GLM-5.2가 강한 사후학습은 있을 수 있지만 코딩 데이터셋이 오래됐거나 약할 수 있다고 추측했다.
  - 기능 격차 주제로는 GLM-5.2의 **vision/multimodal support** 부재가 있었다. 댓글러들은 더 낮은 지연시간이나 저렴한 배포를 위한 **GLM-5.2 Air** 또는 **Flash** 같은 더 작고 빠른 변형도 요청했다.

- **[GLM-5.2 can now run locally in llama.cpp and Unsloth Studio.](https://www.reddit.com/r/LocalLLaMA/comments/1u9vfhf/glm52_can_now_run_locally_in_llamacpp_and_unsloth/)** (Activity: 435): **이미지는 [GLM-5.2-GGUF quantizations](https://i.redd.it/3hzm5bu8078h1.jpeg)에 대한 기술 벤치마크 산점도다. 디스크 크기와 top-1 token agreement를 보여주며, `Q8_0`을 `100%` 기준으로 삼는다. 핵심 주장은 **Unsloth가 GLM-5.2를 `1.51TB`에서 `238GB`로 압축**했고, 2-bit GGUF 변형이 약 `82%` token agreement를 유지해 **llama.cpp** 또는 **Unsloth Studio**를 통해 `256GB` Mac이나 RAM/VRAM 구성 같은 초대형 메모리 시스템에서 로컬 추론(inference)을 가능하게 한다는 것이다. 제공 링크에는 [Unsloth GLM-5.2 guide](https://unsloth.ai/docs/models/glm-5.2)와 [GGUF weights on Hugging Face](https://huggingface.co/unsloth/GLM-5.2-GGUF)가 포함됐다.** 댓글은 대체로 회의적이거나 농담조였다. 한 사용자는 `~82%` agreement가 상당수 출력이 신뢰하기 어려울 수 있음을 뜻한다고 해석했고, 다른 이들은 llama.cpp 지원이 있다고 해서 극단적 메모리 요구량 때문에 대부분 사용자에게 현실적으로 실행 가능해지는 것은 아니라고 농담했다.
  - 한 댓글러는 보고된 **`82%` accuracy**가 오해를 낳는다고 주장했다. 이는 `BF16` 참조 기준이 아니라 `llama.cpp`의 `Q8_0` 출력을 기준으로 측정됐기 때문이다. 또한 `llama.cpp`에 적절한 GLM-5.2 구현이 없고 이미 참조 구현과 다른 출력을 낸다고 주장하며 [ggml-org/llama.cpp issue #24730](https://github.com/ggml-org/llama.cpp/issues/24730)를 인용했다. 다른 댓글러는 **top-1 token agreement**가 로컬 구현의 정확성이나 충실도를 평가하기에 불충분한 지표일 수 있다고 덧붙였다.

- **[GLM-5.2 Is The Best Open Weight Creative Writing Model](https://www.reddit.com/r/LocalLLaMA/comments/1u98pc9/glm52_is_the_best_open_weight_creative_writing/)** (Activity: 371): **이미지는 Sam Paech의 EQ-Bench [Creative Writing Benchmark](https://eqbench.com/creative_writing.html) 기술 리더보드 스크린샷으로, **GLM-5.2**가 **Elo Score `1821.0`** 및 **Rubric Score `82.20`**으로 최고 순위 *오픈웨이트* 창작 글쓰기 모델임을 보여준다. **claude-fable-5**, **claude-opus-4-7**, **gpt-5.5** 같은 독점 선두 모델 아래에 있지만, **Kimi-K2.6** 및 **Kimi-K2-Instruct** 같은 다른 오픈웨이트 경쟁 모델보다 위에 있어 게시물의 주장과 표가 일치한다. Image: [https://i.redd.it/oj35cq74328h1.png](https://i.redd.it/oj35cq74328h1.png)** 댓글러들은 GLM-5.2의 비용/성능에 깊은 인상을 받았고, 창작 글쓰기 벤치마크가 표준 평가보다 “benchmaxx”하기 더 어려울 수 있다고 제안했다. 단서로는 **Claude가 LLM judge로 사용된다**는 점이 제기됐고, Claude식 문체나 Anthropic 모델을 선호할 수 있는지 의문이 나왔다.
  - 댓글러들은 **GLM-5.2**가 창작 글쓰기 벤치마크에서 높은 점수를 받으면서도 더 높은 순위 모델보다 훨씬 저렴한 것으로 보인다고 언급했다. 한 사용자는 이런 벤치마크가 표준 reasoning/QA 리더보드보다 *“benchmaxxed”* 최적화에 덜 취약할 수 있다고 주장했다. 또한 **GLM의 빠른 EQBench 진전**을 강조하며, 향후 **GLM-6**가 창작 글쓰기 평가에서 **Claude Opus 4.7o**를 넘어설 수 있다고 추측했다.
  - 여러 사용자는 주관적 글쓰기 품질에 **LLM-as-judge** 설정을 사용하는 타당성에 의문을 제기했다. 특히 **Claude**가 심사 모델로 쓰이는 것으로 보이기 때문에 자기 스타일과 유사한 출력을 선호할 수 있다는 것이다. 더 방어 가능한 용도로는 길이 제약, 프롬프트 주제 일치 같은 객관적 instruction-following 검사가 제안됐다.
  - 한 댓글러는 최근 중형 모델의 벤치마크 항목을 확인해 **Gemma-4-31B**와 **Gemma-4-26B-A4B**를 찾았지만, 비교 가능한 **Qwen3.6/Qwen3.5 medium-size** 모델은 없다고 지적했다. 리더보드 스크린샷도 링크했다: https://preview.redd.it/oo52ln0t828h1.png?width=1194&format=png&auto=webp&s=b37390b89f1f577661e587ed10692ffea3f2939b

### /r/LocalLlama + /r/localLLM: 오픈 에이전트 연구와 코딩 모델

- **[Researchers trained a Deep Research agent with 32 H100s and open-sourced everything](https://www.reddit.com/r/LocalLLaMA/comments/1u9w6my/researchers_trained_a_deep_research_agent_with_32/)** (Activity: 816): **[image](https://i.redd.it/hdrqhare878h1.png)는 밈이 아니라 기술 벤치마크 그래픽이다. **Ohio State University**의 오픈소스 “Deep Research” 에이전트 **QUEST-35B**가 `BrowseComp`, `Mind2Web 2`, `HLE`, `DeepResearch Bench`, `GAIA`, `LiveResearchBench` 등 리더보드에 표시된다. 게시물에 따르면 QUEST-35B는 약 `32× H100` GPU와 약 `8K` 합성 샘플로 훈련됐고, 코드, 가중치, 데이터셋, 훈련 레시피가 오픈소스로 공개됐다. 그래픽은 **Gemini**, **Claude/Opus**, **GPT**, **Kimi** 같은 폐쇄형 시스템과 경쟁 가능하며 `Mind2Web 2`와 `GAIA`에서 상위권이라고 제시한다.** 댓글러들은 무엇이 공개됐는지, 즉 베이스 모델인지 미세조정(fine-tune)인지 전체 에이전트 하니스인지 의문을 제기했다. 또한 벤치마크 개선이 실제 연구 능력인지, 정해진 reasoning/search scaffold인지, 합성 데이터 과적합 가능성인지도 논쟁했다. `8K` 합성 샘플만으로 강한 결론을 내리는 데 대한 회의도 있었다.
  - 댓글러들은 실제로 무엇이 오픈소스화됐는지 질문했다. **새 베이스 모델, 미세조정(fine-tune), 에이전트 하니스, 또는 단순한 prompting/thinking scheme** 중 무엇인지가 핵심이었다. 기술적 우려는 “Deep Research agent”에는 모델 가중치 이상의 것이 필요하다는 점이다. 도구 사용 오케스트레이션, 검색/검색증강, 인용 처리, 평가 하니스, 워크플로 로직이 필요하므로, 유용성은 그 인프라가 포함됐는지에 달려 있다.
  - 한 댓글러는 보고된 평가 규모에 회의적이었다. *“people still trust `8k` samples results in 2026.”*라는 말로, deep-research 능력 주장이 더 크고 다양한 벤치마크와 견고한 에이전트 평가 프로토콜로 뒷받침되지 않으면 통계적/방법론적으로 약할 수 있음을 시사했다.
  - 또 다른 기술적 질문은 frontier 시스템인 **ChatGPT**와 **Claude**가 표준 모델로 research mode를 제공하는데 왜 deep research에 **fine-tuned model**이 필요한가였다. 이는 연구 성능이 모델 특화에서 오는지, 계획, 웹 검색, 검색증강, 검증, 보고서 합성 같은 외부 오케스트레이션에서 오는지에 대한 fine-tuning 대 에이전트 워크플로 논쟁이다.

- **[poolside/Laguna-M.1 · Hugging Face - 225B-A23B](https://www.reddit.com/r/LocalLLaMA/comments/1u9b2i3/poolsidelagunam1_hugging_face_225ba23b/)** (Activity: 354): ****poolside**는 [`Laguna-M.1`](https://huggingface.co/poolside/Laguna-M.1)을 공개했다. `225B` 총 파라미터 / `23B` 활성 파라미터, `70` layers, `67` sparse MoE layers, `256` experts with `top-k=16`, global attention, RoPE+YaRN, `262,144` 토큰 컨텍스트 창을 갖춘 **Apache-2.0 오픈웨이트** 텍스트 MoE 코딩/에이전트 모델이다. 보고된 코딩 에이전트 벤치마크는 SWE-bench Verified `74.6%`, SWE-bench Multilingual `63.1%`, SWE-bench Pro `49.2%`, Terminal-Bench 2.0 `45.8%`다. Devstral 2와 GLM-4.7 같은 오픈 모델과 경쟁 가능하지만, 여러 지표에서는 DeepSeek-V4 Flash / Qwen3.5보다 낮다. 한 댓글러는 릴리스에 **BF16, FP8, NVFP4**의 베이스 및 사후학습 변형이 포함됐다고 언급했고, 다른 이는 더 작은 [`Laguna-XS.2`](https://huggingface.co/poolside/Laguna-XS.2) / `33B-A3B` 모델이 아직 [`llama.cpp` support](https://github.com/ggml-org/llama.cpp/issues/23249)를 기다리고 있다고 지적했다.** 댓글러들은 poolside가 플래그십 모델을 오픈웨이트로 공개한 데 대체로 긍정적이었다. 이런 릴리스가 독점 코딩 에이전트와의 격차를 좁히는데도 과소평가된다고 주장했다. 한 댓글러는 비교 대상에 **Mistral Medium 3.5 128B**가 포함되어야 한다고 제안하면서도 Laguna M.1을 미국에서 훈련된 가장 강한 오픈웨이트 코딩 모델일 수 있다고 평가했다.
  - **poolside Laguna M.1**은 드문 Apache-2.0 오픈웨이트 “플래그십” 코딩 에이전트 릴리스로 강조됐다. `225B-A23B`, `BF16`, `FP8`, `NVFP4` 가중치의 베이스 및 사후학습 변형을 제공하고, **SWE-Bench Pro**에서 `49.2%`를 보고했다. 한 댓글러는 비공식 OpenRouter 테스트에서 이 모델이 일반 로컬 하드웨어에는 너무 크지만 “genuinely good and balanced overall”라고 느껴졌다고 말했다.
  - 더 작은 **Laguna-XS.2 / 33B-A3B** 모델에는 구현/지원 우려가 있다. 아직 `llama.cpp` 지원 대기 중이며, 논의는 [`ggml-org/llama.cpp#23249`](https://github.com/ggml-org/llama.cpp/issues/23249)에서 추적되고 모델은 [`poolside/Laguna-XS.2`](https://huggingface.co/poolside/Laguna-XS.2)에 호스팅된다. 댓글러들은 로컬 추론(inference)을 더 실용적으로 만들려면 `llama.cpp` 지원이 필요하다고 구체적으로 지적했다.
  - 한 댓글러는 벤치마크 비교군에 **Mistral Medium 3.5 128B**가 포함되어야 한다고 주장했다. Laguna M.1의 코딩 성능을 평가하는 데 더 관련 있는 기준선이라는 것이다. 그는 Laguna M.1을 미국 기반 회사의 가장 강력한 오픈웨이트 코딩 모델일 수 있다고 보면서도, 그 주장은 더 넓은 head-to-head 평가에 달려 있다고 했다.

### /r/LocalLlama + /r/localLLM: 오픈 모델 비용과 도입 변화

- **[Open source is starting to beat frontier on cost/performance](https://www.reddit.com/r/LocalLLM/comments/1u9gohq/open_source_is_starting_to_beat_frontier_on/)** (Activity: 441): **이미지는 **“Artificial Analysis Intelligence Index”**와 로그 스케일 USD 실행 비용을 비교하는 산점도([image](https://i.redd.it/a4obm010k38h1.jpeg))다. **DeepSeek, GLM, Qwen, Kimi/MiniMax** 같은 오픈/오픈웨이트 모델이 고지능/저비용 “green quadrant”에 들어서고 있다고 주장한다. 게시물의 기술적 주장은 **Claude Opus/Fable** 또는 **GPT-5.5** 같은 폐쇄형 프런티어 API가 능력 면에서는 더 높을 수 있지만, 절대 최고 능력이 필요 없는 많은 프로덕션 워크로드에서 **비용-성능 frontier**가 오픈 모델 쪽으로 이동하고 있다는 것이다.** 댓글러들의 반응은 갈렸다. 일부는 이것이 이미 몇 년 전부터 사실이었고 로컬 모델이 이제 몇 년 전 최상위 모델과 비슷하다고 주장했다. 다른 이들은 실제 비용-성능은 두 개의 종합 벤치마크 축만이 아니라 **task-specific useful work**, 토큰 효율, 프롬프팅, 오케스트레이션, 배포 하니스에 달려 있으므로 차트가 지나치게 단순하다고 비판했다.
  - 한 댓글러는 **cost/performance를 두 벤치마크 차트로 포착할 수 없다**고 주장했다. 실제 지표는 *수행된 유용한 작업당 비용*이라는 것이다. 토큰 사용량은 작업, 모델, 프롬프트, 하니스, 오케스트레이션 전략에 따라 크게 달라지므로 벤치마크 점수만으로는 실용 효율을 왜곡할 수 있다고 했다.
  - 여러 댓글러는 오픈소스/로컬 모델이 이제 **몇 년 전 frontier-model capability**와 비슷해져, state of the art는 아니어도 많은 사용자에게 충분하다고 봤다. 한 단서는 오픈 모델이 독립적으로 frontier를 전진시키기보다는 대체로 **frontier models에서 증류(distilled)**된 것이라면 구조적으로 뒤처질 수 있다는 점이었다.
  - 한 일화적 코딩 비교는 **GLM 5.2**가 망가진 구현을 고치는 데 “Sonnet 4.6”보다 나았다고 주장했다. GLM은 무관한 기능을 망가뜨리지 않았지만 Sonnet은 계속 수정을 시도했다는 것이다. 벤치마크는 아니지만, 낮은 비용/오픈 모델이 특정 디버깅 워크플로에서 선호될 수 있는 작업별 분산을 보여준다.

- **[OSS models decisively overtook Proprietary models in market share (based on the last 3 months of OpenRouter data)](https://www.reddit.com/r/LocalLLaMA/comments/1u96545/oss_models_decisively_overtook_proprietary_models/)** (Activity: 319): **Dirac의 [OpenRouter token-share dashboard](https://dirac.run/labs-market-share)는 **OpenRouter API traffic** 안에서 오픈/오픈웨이트 모델 랩이 최근 약 3개월 동안 점유율을 뒤집었다고 주장한다. 2026년 3월 약 `40% OSS / 60% proprietary`에서 2026년 6월 중순 약 `60% OSS / 40% proprietary`로 바뀌었고, 총 사용량은 하루 약 `~6T tokens/day` 수준이다. 분석은 API 호스트가 아니라 *model-creator lab* 기준으로 입력+출력 토큰을 집계하며, 점유율 계산 왜곡을 피하기 위해 Mar 18–Apr 2 기간 Xiaomi `mimo-v2-pro-20260318` 무료 모델 트래픽을 명시적으로 제외했다.** 댓글러들은 OpenRouter가 더 넓은 LLM 시장을 대표하는지 의문을 제기했다. **Claude**나 **GPT** 사용자는 보통 OpenRouter가 아니라 1st-party 구독이나 직접 API를 통해 접근하므로, 차트는 글로벌 도입보다 OpenRouter 사용자층을 반영할 수 있다는 것이다. “decisively”라는 표현도 소비자 구독 사용이 API 토큰 시장 점유율에 잡히지 않기 때문에 도전받았다.
  - 여러 댓글러는 **OpenRouter traffic이 전체 LLM 시장 점유율을 대표하지 않는다**며 방법론에 이의를 제기했다. 대부분의 GPT/Claude 사용은 OpenRouter가 아니라 1st-party 구독이나 직접 API를 통해 일어나기 때문이다. 핵심 기술적 단서는 데이터가 전체 소비자나 기업 시장이 아니라 **router/API-user subpopulation**을 반영할 가능성이 크다는 점이다.
  - 한 댓글러는 차트의 핵심 주장을 강조했다. OpenRouter의 최근 3개월 사용량 안에서 OSS 모델이 약 **`40%` share vs `60%` proprietary**에서 반대로 **`60%` OSS vs `40%` proprietary**로 이동했다는 것이다. 이는 *OpenRouter traffic 내부*에서는 강한 전환을 뒷받침하지만, 전체 LLM 시장에서도 그렇다는 뜻은 아니다.

### Less Technical AI Subreddits: Anthropic Fable/Mythos 접근 제한

다룬 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Anthropic is "confident that in the coming days [Fable 5] will become available again" - Anthropic's International Managing Director](https://www.reddit.com/r/ClaudeAI/comments/1u95x3l/anthropic_is_confident_that_in_the_coming_days/)** (Activity: 1019): ****Anthropic**의 International Managing Director는 외국 국적자 접근을 제한하는 White House 보안 지침에 대응해 전 세계적으로 모델을 비활성화한 뒤 **Mythos/Fable 5** 접근을 *“in the coming days”* 복구할 것이라고 *“confident”*하다고 말했다([Korea JoongAng Daily](https://www.koreajoongangdaily.com/business/anthropic-confident-of-reenabling-mythos-fable-5-access-in-coming-days-executive/12727522)). 보도는 **Mythos의 고급 사이버보안/코드 분석 능력**과, 미국 기술 기업 및 **Samsung Electronics**, **SK hynix**, **SK Telecom** 같은 한국 기업을 포함한 약 `150`개 파트너가 참여하는 통제 접근 프로그램 **Project Glasswing**을 중심으로 문제를 설명한다. 서울 컨퍼런스 맥락은 Anthropic이 복구를 미국 한정이 아니라 국제적으로 기대하고 있음을 시사한다.** 댓글러들은 미국 정책이 계속 바뀌는 상황에서 Anthropic이 시점을 자신 있게 예측할 수 있는지 회의적이었다. 한 댓글러는 이를 *“a dumb thing to feel confident about.”*이라고 불렀다. 또 다른 댓글러는 기업 고객들이 이미 벤더가 **U.S.-owned AI solutions**에서 벗어나고 있다는 보장을 요구하고 있다고 말해, 이번 셧다운이 sovereign/EU-aligned procurement 논의를 가속하고 있음을 시사했다.
  - 한 댓글러는 가용성 분쟁의 구체적인 기업 영향을 보고했다. *three separate customers*가 자신들의 조직이 **US-owned AI/cloud solutions**에서 벗어나고 있다는 보장을 요구했고, 이로 인해 별도의 **European office / EU-hosted solution tracks**가 생겼다는 것이다. 기술적으로 중요한 함의는 미국 AI 공급자와 관련해 관할권 분리, 데이터 레지던시, 벤더 리스크 완화 수요가 늘어난다는 점이다.
  - 다른 댓글러는 Anthropic의 고급 모델 출시가 “security risk” 라벨 아래 차단될 수 있다면, 영향을 받는 시장에서 Anthropic이 사실상 **Opus-level products**에 묶일 수 있다고 주장했다. 향후 프런티어 출시가 반복적인 규제/수출 통제식 중단에 직면해, 고급 Anthropic 모델의 가용성 보장이 불안정해질 수 있다는 우려다.

- **[About 200 Companies Still Have Access to Anthropic Mythos After US Shutdown Order](https://www.reddit.com/r/ClaudeAI/comments/1u9sq81/about_200_companies_still_have_access_to/)** (Activity: 949): ****Bloomberg**는 **Anthropic’s Project Glasswing**에 속한 약 `200`개 조직이 최근 미국 정부 명령으로 **Fable 5**와 **Mythos 5**의 광범위한 접근이 제한됐음에도 **Mythos Preview** 접근을 계속 유지하고 있다고 보도했다([Bloomberg](https://www.bloomberg.com/news/articles/2026-06-19/early-users-of-anthropic-mythos-still-have-access-after-us-order?embedded-checkout=true)). Project Glasswing은 고급 AI 시스템을 취약점 연구 맥락에서 테스트하는 사이버보안 파트너 프로그램이다. 접근을 유지하는 것으로 알려진 초기 참여자에는 **Cisco**, **Amazon Web Services**, **JPMorgan Chase & Co.**가 포함되며, 더 넓은 접근은 중단된 상태다.** 댓글러들은 **Amazon/AWS**가 접근을 유지하는 데 집중했다. Amazon이 Anthropic에 대해 정부에 불만을 제기했다는 주장에도 특권 접근 그룹에서 제거되지 않은 점이 아이러니하다고 지적했다.
  - 한 댓글러는 셧다운 명령에도 **Amazon reportedly still has access to Anthropic Mythos**라고 언급하며, Amazon이 Anthropic에 대해 정부에 불만을 제기한 당사자 중 하나였다는 주장과의 긴장을 지적했다. 이는 모델 성능보다 정부 명령 이후의 **selective access control / enforcement scope**에 관한 문제다.

- **[Update: Anthropic floats proposal to lift US restrictions on Mythos and Fable AI models](https://www.reddit.com/r/ClaudeAI/comments/1u9fd4z/update_anthropic_floats_proposal_to_lift_us/)** (Activity: 947): ****Anthropic**은 **Mythos/Fable AI models** 접근 제한을 해제하기 위한 프레임워크를 미국 Commerce Department에 제안한 것으로 알려졌다. 대상은 Commerce Secretary **Howard Lutnick**이며, 더 긴밀한 White House 커뮤니케이션, 공식 협력 약속, 정부 보안 우려에 대한 더 빠른 remediation을 중심으로 한다. 게시물에는 모델 카드 세부사항, 벤치마크, 능력 평가, 위협 모델 구체사항, 구현 변경이 없다. 보고된 상태는 협상이 *“progressing well”*이라는 것뿐이며 공개 일정은 없다.** 상위 댓글은 대체로 비기술적이고 회의적이었다. 규제 결과가 돈이나 정치에 영향을 받을 수 있다고 암시했고, 수출 통제, 모델 안전, 보안 검토 기준에 대한 실질적 논의보다 Epstein 관련 오프토픽 언급이 있었다.

### Less Technical AI Subreddits: 프런티어 모델 경쟁 루머

- **[Z.ai founder is confident that they can make a fable-class GLM model before the end of the year](https://www.reddit.com/r/singularity/comments/1u9b5vb/zai_founder_is_confident_that_they_can_make_a/)** (Activity: 1341): **[image](https://i.redd.it/qmh9mjvjj28h1.png)는 다크모드 X/Twitter 대화다. **Elon Musk**는 중국이 **Q1**까지 “Fable class” AI 능력에 도달할 수 있다고 추정했고, **jietang/Z.ai**는 *“won’t take that long,”*이라고 답해 Z.ai가 연말 전에 그 급의 **GLM-family model**을 기대하고 있음을 시사했다. 벤치마크, 아키텍처 세부사항, 평가 결과, 출시 계획은 표시되지 않았으므로, 이 게시물은 기술적 증거라기보다 주로 **claim/prediction**이다.** 댓글러들은 *“Words are cheap”* 같은 반응으로 회의적이었고, Z.ai가 “Fable-class” 능력을 논하기 전에 먼저 **Opus-class** 모델을 보여줘야 한다고 주장했다. 다른 이들은 더 강한 오픈소스 프런티어 모델을 환영했다.
  - 한 실질적 스레드는 **“Opus-class”** 모델을 먼저 입증하지 않고 가까운 시일 내 **“Fable-class” GLM**을 주장하는 신뢰성을 의심했다. 이를 로드맵 주장이 아니라 capability-scaling milestone 문제로 본 것이다. 또 다른 댓글러는 **OpenAI Sora** 이후 경쟁 모델이 빠르게 등장한 일을 근거로, 중국 랩이 frontier SOTA보다 `3–6 months` 정도만 뒤처졌을 수 있다고 주장했다.

- **[DeepMind is now reportedly struggling to compete with Anthropic and OpenAI while 3.5 Pro is not the step change they'd need to be competitive](https://www.reddit.com/r/singularity/comments/1ua75fz/deepmind_is_now_reportedly_struggling_to_compete/)** (Activity: 958): **Reddit 게시물은 **Google DeepMind/Gemini 3.5 Pro**가 여전히 **Anthropic**과 **OpenAI**에 뒤처질 수 있다는 **synthwavedd**의 미검증 X 루머를 인용했다. 게시자는 Gemini 3.5 Pro가 **agentic coding**이나 recursive self-improvement식 워크플로보다는 창작/세계지식 작업에서 더 강할 것으로 예상했다([source](https://x.com/synthwavedd/status/2068000857757741251)). 댓글러들은 Gemini의 제품/모델 표면이 **AI Studio**, **Gemini web/mobile**, **Antigravity** 전반으로 분절되어 있다고 주장했고, Gemini/Flash 가격과 코딩 성능이 일부 중국 랩 및 프런티어 경쟁자 대비 악화된 것으로 인식된다고 말했다.** 핵심 논쟁은 Google의 인프라/데이터/현금흐름 우위가 모델 리더십으로 이어져야 하는지, 아니면 Google의 기업/제품 분산이 DeepMind 실행을 늦추는지였다. 여러 댓글러는 **Gemini 3.5 Pro**에 대한 기대치를 낮게 잡았다. 큰 step-change였다면 I/O에서 시연됐을 가능성이 높다는 것이다. 한 댓글러는 **John Jumper**가 Anthropic으로 이동한 것을 Google DeepMind 연구 우위에 대한 전략적 손실로 봤다.
  - 댓글러들은 **Gemini product/model fragmentation**이 도입을 해칠 수 있다고 주장했다. Gemini web/mobile, AI Studio, Antigravity, Flash 가격 변경이 분리된 생태계를 만든다는 것이다. 한 기술 비판은 Gemini가 일반/세계 지식은 강하지만 코딩에서는 *“incredibly lazy”*하고 OpenAI/Anthropic 선두 모델보다 약하며, 중국 랩이 일부 모델 출시에서 Google을 따라잡거나 넘어선 것으로 보인다는 점이었다.
  - 실질적 전략 논쟁은 **Google DeepMind의 더 넓은 AGI thesis**와 Anthropic/OpenAI의 LLM 중심 접근을 대비했다. 한 댓글러는 DeepMind가 *language models, world models, and broader AI systems* 전반에 투자하고 있어 LLM만으로는 AGI에 충분하지 않을 수 있다는 Demis Hassabis의 관점과 맞는다고 했다. 반면 Dario Amodei는 스케일된 LLM식 시스템이 거기에 도달할 수 있다는 데 더 낙관적인 인물로 묘사됐다.
  - 여러 댓글은 Google의 문제가 순수 기술보다 조직적이라고 봤다. 대기업의 지표 최적화가 고위험 모델 돌파보다 점진적 제품 개선을 선호할 수 있다는 것이다. 한 댓글러는 Anthropic의 엔지니어링 문화를 다룬 Steve Yegge의 글 [“The Anthropic Hive Mind”](https://steve-yegge.medium.com/the-anthropic-hive-mind-d01f768f3d7b)를 링크하며, 엔지니어가 많은 투기적 아이디어를 탐색하도록 허용하는 Anthropic의 방식이 Google의 KPI 중심 구조보다 더 많은 프런티어 모델 혁신을 낳을 수 있다고 주장했다.

### Less Technical AI Subreddits: 핸즈온 AI 도구 출시

- **[published fact-checker that catches politicians lying in real time](https://www.reddit.com/r/ChatGPT/comments/1u9ctgb/published_factchecker_that_catches_politicians/)** (Activity: 1317): **작성자는 임의 영상에서 실시간 정치 팩트체킹을 수행하는 BYOK Chrome extension **InTruth**를 공개했다. 파이프라인은 **Deepgram transcription → Serper search for validating sources → Claude verdict generation**이며, 데모는 `2024` 미국 대선 토론을 기반으로 한다. Chrome Web Store 목록은 [here](https://chromewebstore.google.com/detail/intruth/ikmpglbpcdoapfelcbfpoaddmhmaaocg)에 있고, 참조된 Reddit 호스팅 데모 영상은 `403 Forbidden` 때문에 접근할 수 없었다.** 상위 기술 피드백은 프로젝트가 GitHub에서 오픈소스로 공개될지, claim detection이 어떻게 구현됐는지 물었다. 한 댓글러는 비슷한 파이프라인을 미래의 스마트 글래스에 통합할 수 있다고 제안했다.
  - 댓글러들은 시스템의 **claim-detection pipeline**에 집중했다. 실시간으로 검증 가능한 사실 주장을 어떻게 식별하는지, 단순히 명백한 진술에 반응하는 것이 아닌지 질문했다. 핵심 기술적 우려는 특히 라이브 정치 발언처럼 모호하거나 복합적이거나 수사적으로 구성된 문장에서, 모델이 retrieval/verification 전에 명시적 claim extraction을 수행하는지였다.
  - 여러 댓글은 데모가 모델 훈련 데이터에 이미 있는 사실에 의존하는지, 아니면 진정한 **live retrieval-augmented fact-checking** 워크플로인지 질문했다. 한 댓글러는 실제 배포에서는 근거를 여러 출처에서 동적으로 가져오고 평가해야 하며, AI 모델에 이미 내재됐을 가능성이 큰 잘 문서화된 주장과 매칭하는 것만으로는 부족하다고 지적했다.
  - 제기된 큰 신뢰성 문제는 **source trust and retrieval manipulation**이었다. 시스템이 웹 검색 결과로 주장을 검증한다면, 그 출처가 사실인지 어떻게 판단하는가? 댓글러들은 SEO 최적화 페이지나 적대적 페이지가 근거 세트에 영향을 줄 수 있다는 위험을 구체적으로 제기했고, source ranking, provenance checks, search-result poisoning 저항성이 필요함을 시사했다.

- **[I built a single ComfyUI node for FLUX.2 [klein]: T2I, I2I, Edit, Inpaint, Outpaint, Sketch, Faceswap and more](https://www.reddit.com/r/StableDiffusion/comments/1u9g3vy/i_built_a_single_comfyui_node_for_flux2_klein_t2i/)** (Activity: 935): **작성자는 FLUX.2 워크플로를 통합하는 단일 self-contained [ComfyUI](https://github.com/comfyanonymous/ComfyUI) custom node **One Node · FLUX.2 [klein]**을 공개했다. **text-to-image, image-to-image, edit, inpaint, outpaint, sketch, faceswap** 등을 하나의 위젯으로 합친다. 설정/튜토리얼은 [YouTube](https://youtu.be/L4ItbBWXqCo)에 있고 소스는 [GitHub](https://github.com/yanokusnir-ai/one-node-flux-2-klein)에 있다. 2026년 6월 19일 업데이트는 `GGUF`를 포함한 **external loader support**, **model refresh** 버튼, Sketch용 **tablet/pen pressure** 지원을 추가했으며, 프로젝트 [changelog](https://github.com/yanokusnir-ai/one-node-flux-2-klein#changelog)에 문서화되어 있다.** 상위 댓글은 매우 긍정적이었다. *“one of the best nodes”*라고 부르고, 예정/관련 포트인 *“coming to ltx”*에 관심을 보였다. 제공된 댓글에는 실질적인 기술 비판이나 벤치마킹 논의는 없었다.
  - 한 사용자는 초기 UI/표시 버그를 보고했다. 생성은 *“clean and fast”*하게 완료되고 출력이 media assets에 표시됐지만, 이미지 프리뷰가 node window 안에는 나타나지 않았다는 것이다. 그는 Claude Code로 custom node를 패치한 뒤 LoRA 설정과 I2I, Edit, Swap 워크플로를 성공적으로 테스트했다고 말했다.
  - 여러 댓글러는 이 노드가 사실상 **A1111-style all-in-one workflow into ComfyUI**를 가져온 것이라고 봤다. 많은 별도 graph node가 아니라 단일 인터페이스 안에 T2I/I2I/editing/inpaint/outpaint/sketch/faceswap을 통합한다는 것이다.
  - 한 댓글러는 같은 스타일의 통합 노드가 *“coming to ltx”*라고 언급했다. 이는 FLUX.2 [klein]을 넘어 **LTX** 모델을 위한 지원이나 유사한 통합 워크플로가 계획되어 있음을 시사한다.

## AI Discord Recap

### 접근 종료

- **Discord 접근 종료**: 안타깝게도 Discord가 오늘 접근을 차단했다. 이 형태로는 다시 가져오지 않겠지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
