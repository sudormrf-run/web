---
title: Glossary
description: 100 essential Physical AI terms — concept→intelligence→learning→body→capability top-down ordering
category: glossary
order: 1
isFeatured: true
icon: book
tags: [glossary, terminology, physical-ai, robotics, vla, rfm]

createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-02-15
---

# Physical AI Glossary

> 100 essential terms in Physical AI, organized top-down from concept definition through intelligence models, learning methods, data and scaling, virtual worlds, physical form, physical capabilities, to sensing and infrastructure. See also [Commonly Confused Terms](#commonly-confused-terms) and [References](#references) at the bottom.

---

**1. Physical AI** — The umbrella term for AI that senses, understands, and acts in the physical world. Unlike digital AI such as chatbots, Physical AI must deal with the laws of physics, spatial reasoning, and real-time interaction. NVIDIA declared a "ChatGPT moment for robotics" at CES 2025, making it a central strategy, and Morgan Stanley projects a $5 trillion market by 2050 [13]. The key distinction is not mere automation but the granting of true autonomy. Broadly it encompasses autonomous vehicles and drones, but in the narrower sense it refers to VLA-based end-to-end systems that perform generalist physical tasks — the definition that captures the current technological inflection point. → See: [What is Physical AI?](../essays/fundamentals/definition)

**2. VLA (Vision-Language-Action)** — A multimodal model that takes camera images and natural language instructions as input and directly outputs robot actions. The critical difference from a VLM is the addition of an "action output." VLA represents the LLM → VLM → VLA evolution, extending the world knowledge of LLMs into physical-world actions. As of 2025, over 100 VLA architectures have been reported [14], making it the dominant paradigm for robot foundation models. A convergent evolution toward Dual-System (System 1/2) architectures and Flow Matching/Diffusion-based continuous action generation emerged in 2025. That said, VLAs still struggle with precise physical interactions requiring delicate force control, such as assembly [1]. → See: [What are RFM & VLA?](../essays/fundamentals/what-is-rfm-vla) | [VLA Progress](../essays/insights/vla-rfm-progress)

**3. RFM (Robot Foundation Model)** — A large-scale model pre-trained on diverse data for general-purpose application across robots and tasks. VLA is one type of RFM, not a synonym. RFMs can also be built on world models or video generation models, making the concept broader than VLA alone. RFMs have fundamentally reshaped the manipulation paradigm through "generalization, compositional reasoning, and unified interfaces" [1], and Skild AI argues one must distinguish a true RFM from "a VLM sprinkled with some robot data." Competitive advantage has shifted from hardware precision to data scale and diversity. → See: [Understanding RFM & VLA](../essays/fundamentals/what-is-rfm-vla)

**4. World Model / WFM (World Foundation Model)** — A model that internally simulates environment physics to predict "what happens if I take this action." Unlike a policy (which decides what to do), a world model models the environment itself. It enables robots to perform "mental rehearsal" — predicting outcomes before acting [1]. Three architectural approaches coexist: RSSM, JEPA, and Transformer-based. NVIDIA Cosmos, Meta V-JEPA 2, and Google DeepMind Genie 3 [2] are representative. By 2026, these evolved into causality-respecting, physics-consistent "action-conditioned" models. World models are also gaining attention as a complementary approach to address VLM backbone limitations in current VLAs. → See: [Simulation & World Model](../essays/insights/simulation-world-model) | [VLM Limits & World Model](../essays/insights/vlm-limits-world-model)

**5. Imitation Learning** — Learning by observing and replicating expert demonstrations. No reward function design needed — enabling fast transfer of complex skills like tool use and assembly [1]. Imperial College London reported learning 1,000 tasks from a single demonstration in one day (Science Robotics, Dec 2025) [15]. The dominant training paradigm for 2025 robot foundation models. Key algorithms include [ACT](../models/act) (CVAE + Transformer, precise manipulation from as few as 50 demonstrations) and [Diffusion Policy](../models/diffusion-policy) (diffusion-based, excels at handling multimodal action distributions).

**6. Behavior Cloning (BC)** — The simplest form of imitation learning: supervised learning that maps observations to actions from demonstration data. Despite its simplicity, it underpins VLAs and Diffusion Policy, making it the 2025 mainstream. [ACT](../models/act) extends basic BC with Action Chunking to reduce compounding errors, while [Diffusion Policy](../models/diffusion-policy) uses a diffusion process to handle multimodal distributions, achieving 46.9% average improvement over conventional BC.

**7. Teleoperation** — A human directly controlling a robot to collect action data. Methods include VR controllers, leader-follower arms, exoskeletons, and haptic gloves (DOGlove, ICRA 2025). Boston Dynamics' principle: "If you can teleoperate it, you can train a network to reproduce that behavior" [3]. Costs $100-1,000 per hour, making scaling difficult, but it provides the highest-quality manipulation data. Tesla, Google, and Physical Intelligence all rely on teleoperation as their primary data collection method, while [non-teleop approaches](../essays/insights/non-teleop-data) are pursued in parallel to overcome cost barriers. → Details: [Teleoperation Methods](../essays/insights/teleoperation)

**8. Sim-to-Real Transfer** — Deploying simulation-trained policies on real robots. The core challenge lies in bridging three types of gaps: visual, physics, and sensor discrepancies. Two main strategies coexist: zero-shot transfer (NVIDIA AutoMate achieved 84.5% success rate across 100 assembly configurations) and a two-phase approach of simulation pre-training followed by fine-tuning on small amounts of real-world data (Dita demonstrated that 10-shot real fine-tuning suffices). "If you can't simulate it, you can't scale it" is the 2026 mantra. NVIDIA has built a synthetic data production, augmentation, and evaluation pipeline using Omniverse physics simulation and the [Cosmos](../models/cosmos) World Model, with Cosmos Transfer bridging the visual domain gap from simulation to reality. → Details: [Simulation & World Model](../essays/insights/simulation-world-model)

**9. Generalist Policy** — A single model applicable to diverse tasks, environments, and robots. The opposite of a specialist policy. pi0.5 demonstrated 10-15 minutes of autonomous cleaning in homes never seen during training. Note that "generalist" does not mean "excels at every task" — post-training is required for deployment. Three key enablers made generalist policies possible: world knowledge from pre-trained VLMs, cross-embodiment datasets (OXE, etc.), and the applicability of scaling laws. [Generalist AI](../companies/generalist)'s [GEN-0](../models/generalist-gen0) observed a phase transition at 7B parameters using 270,000 hours of real-world data, demonstrating that generalist policies can scale. → Details: [From Specialist to Generalist](../essays/fundamentals/specialist-to-generalist)

**10. Zero-Shot Generalization** — Performing on unseen objects, environments, or instructions without additional training. The ultimate goal of general-purpose robot models. Example: a robot trained only on towels successfully folds a novel T-shirt. In locomotion, LeVERB (Berkeley, Jun 2025) demonstrated the first zero-shot sim-to-real humanoid whole-body control. [GEN-0](../models/generalist-gen0) reported an intelligence threshold at 7B+ parameters where models internalize data and adapt to new tasks with minimal subsequent training, providing empirical evidence for the model scale needed for zero-shot generalization.

**11. End-to-End Learning** — Learning a single unified model from sensor inputs all the way to motor outputs. Rather than splitting perception, planning, and control into separate modules, a deep neural network directly learns the mapping from raw observations to actions through demonstrations or trial-and-error [3]. Eliminates task-specific engineering for greater flexibility, but demands large-scale training data and rigorous safety validation. The foundational learning paradigm behind VLAs, [Diffusion Policy](../models/diffusion-policy), [ACT](../models/act), and other modern robot policies. Diffusion Policy naturally handles multimodal action distributions, while ACT mitigates compounding errors through action chunking — each representing a canonical end-to-end implementation.

**12. Synthetic Data** — Artificial data generated by simulation or generative models. Achieves 60-80% cost savings vs. real data while reaching 90-95% performance. NVIDIA GR00T Blueprint improved GR00T N1 performance by 40% with synthetic data. The key solution to the "data gap" — the severe shortage of robot data compared to text data. [NVIDIA Cosmos](../models/cosmos) generated 780K synthetic trajectories in just 11 hours (equivalent to 6,500 hours of demonstrations), with Cosmos Transfer converting simulation footage to photorealistic quality. A core pillar of [non-teleop data collection](../essays/insights/non-teleop-data) strategies that bypass teleoperation cost barriers.

**13. Co-training** — Training on multiple data types (robot, web, simulation) simultaneously. Mitigates data scarcity. [Mobile ALOHA](../hardware/mobile/mobile-aloha) achieved ~84% success rate with just 50 demonstrations when co-training was applied (up from ~50% with mobile data alone, a +34%p improvement). It works by mixing static [ALOHA](../hardware/arms/aloha) data with mobile data, simply zero-padding base velocity for static episodes. Co-training with the DROID dataset achieved 22% absolute success rate gain over OXE. A strategy for giving robots "common sense" and "motor skills" at once.

**14. Pre-Training** — The initial phase of learning general-purpose representations from large, diverse datasets. Analogous to GPT pre-training for LLMs, in robotics it involves mixing web videos, simulation, and multi-robot data to learn general patterns of the physical world (contact, gravity, spatial relationships). [pi0](../models/pi0) transferred internet-scale pre-training knowledge from its PaliGemma (3B) VLM backbone to robot manipulation, vastly outperforming OpenVLA/Octo. [GR00T N1](../models/groot-n1) organizes pre-training data into a pyramid hierarchy spanning web-scale video (Ego4D, EPIC-KITCHENS), simulation trajectories, and real robot data. The quality and scale of pre-training determine the efficiency of downstream fine-tuning, forming the first half of the "pre-train then post-train" paradigm.

**15. Fine-Tuning / Post-Training** — Adapting a pre-trained model to a specific robot or task with small amounts of data (typically ~100 demonstrations). NVIDIA emphasizes that "the key is not training a foundation model from scratch, but leveraging it through post-training." [pi0](../models/pi0) acquires specialized skills like laundry folding and box assembly with just a few hours of fine-tuning data, while [GR00T N1](../models/groot-n1) achieved +318% performance improvement over Diffusion Policy using only 10% of training data. The "pre-train then post-train" paradigm is the core deployment strategy for Physical AI.

**16. Scaling Law** — The observation that performance improves predictably with more model parameters, data, and compute. Proven for LLMs, and whether it holds for Physical AI is the core question on which $40.7B in 2025 investment rides. Real data collection costs, the sim-to-real gap, and high variance in physical tasks pose challenges distinct from LLM scaling. [GEN-0](../models/generalist-gen0) (Generalist AI), trained on 270,000 hours of real-world data, reported a phase transition at 7B parameters, providing the first empirical evidence of a robotics scaling law. Not just data volume, but mixing diverse robot form data (embodiment scaling) is critical. See also: [Do Scaling Laws Apply to Robotics?](../essays/insights/scaling-law-robotics) | [Action Data Scaling Problem](../essays/fundamentals/scaling-problem)

**17. Digital Twin** — A virtual replica of a physical system — "a virtual model that uses real-time data to reflect the state and behavior of a real object" [6]. By 2025, digital twins evolved from static design tools to continuous optimization systems that ingest telemetry and predict failures. [NVIDIA](../companies/nvidia) builds factory-scale digital twins through its Omniverse platform (adopted by Siemens, BMW, Amazon Robotics, and TSMC), integrating synthetic data generation for robot training and HIL testing on top of Isaac Sim. Market size is projected to grow from $10.1B (2023) to $73.5B (2028) [16]. Essential for pre-deployment safety validation at scale.

**18. Embodiment** — A robot's physical form and capabilities. The central concept of the embodiment hypothesis: that physical form shapes intelligence. As [Moravec's paradox](../essays/insights/physical-vs-cognitive) illustrates, physical intelligence — refined over hundreds of millions of years of evolution — is a fundamentally different challenge from cognitive intelligence. The "embodiment gap" explains why skills do not easily transfer between different robot bodies, driving Cross-Embodiment Transfer research to overcome this barrier.

**19. Cross-Embodiment Transfer** — Sharing and transferring knowledge between robots of different morphologies. CrossFormer controls 30 robot types with the same weights. [Octo](../models/octo) was pre-trained on 800K OXE episodes (25 datasets) and matched the 55B RT-2-X with only 93M parameters, while [OpenVLA](../models/openvla) trained on 970K demonstrations from 21 institutions and 22 robot types, proving the practicality of cross-embodiment transfer. Training on diverse robot form data improves understanding of fundamental physics (contact, balance) — this "embodiment scaling law" emerged in 2025. The ultimate goal is an embodiment-agnostic policy that works regardless of robot form, pursued through universal action spaces (Cartesian coordinates) or embodiment tokens.

**20. Embodied AI** — AI with a physical body that interacts with real environments. Largely synonymous with Physical AI, though Embodied AI is more academic while Physical AI is more industry-oriented. Google DeepMind prefers "Embodied Intelligence," while NVIDIA prefers "Physical AI." In its narrower sense, Physical AI refers to AI systems that perform general-purpose physical tasks via VLA-based end-to-end learning. → [What is Physical AI](../essays/fundamentals/definition) | [Physical AI Guide](../physical-ai/)

**21. DOF (Degrees of Freedom)** — The number of independent axes a robot can move. Industrial arm: 6 DOF. Humanoid: 40+ DOF. Human hand: 20+ DOF. For example, the [Figure](../hardware/humanoids/figure) humanoid evolved from 24 to 35 to 35+ DOF across generations, and the [Shadow Hand](../hardware/hands/shadow-hand) provides 20 DOF with 24 movements. More DOF means more capability but harder control.

**22. End Effector** — The device at the tip of a robot arm that interacts with objects. Broadly split into grippers (2-3 fingers, simple, structured tasks) and articulated hands (4-5 fingers, 12-22+ DOF, general-purpose manipulation). Representative articulated hands include the [Shadow Hand](../hardware/hands/shadow-hand) (20 DOF, tendon-driven, ~110K EUR) and the open-source [LEAP Hand](../hardware/hands/leap-hand) (16 DOF, 3D-printed, ~$1,772). As AI control capabilities mature, the industry trend is shifting from simple grippers to articulated hands.

**23. Proprioception** — A robot's sensing of its own internal state (joint angles, velocities, torques). The robotic equivalent of human muscle sense. Distinct from camera-based vision (external sensing). Critical for walking in the dark or manipulating objects without visual feedback.

**24. Dexterous Manipulation** — Complex manipulation using multi-fingered robot hands: rotating objects, assembling parts, and using tools. Requires "coordinated finger movements and adaptive force control" [5]. ICRA 2025 was dubbed "the year of the robot hand." DexGraspVLA (2025) demonstrated VLM-powered precision grasping. [Shadow Hand](../hardware/hands/shadow-hand) (20 DOF, used in OpenAI's Rubik's Cube solving research), [LEAP Hand](../hardware/hands/leap-hand) (16 DOF open source, 1/50th the price of Shadow Hand), and DexGraspRL (92% success rate) are representative [5].

**25. Tactile Sensing** — Sensing pressure, slip, and temperature upon contact. Vision-based tactile sensors (GelSight, DIGIT ~$350) are the mainstream, and the field is reaching its "ImageNet moment." [Figure 03](../models/figure-helix)'s hand uses a custom first-generation tactile sensor to detect forces as subtle as 3 grams, and Helix 02 leverages this to demonstrate precision tasks such as extracting individual pills from a bottle and dispensing exactly 5ml with a syringe. Enables tasks that are extremely difficult with vision alone — threading a needle, picking up a raspberry without crushing it [5]. → [Why Tactile Sensing Matters](../essays/insights/tactile-sensing)

**26. Locomotion** — A robot's ability to move. Bipedal (humanoid) locomotion is inherently unstable and challenging; quadruped is more stable. Typically trained via simulation RL (PPO) with sim-to-real transfer. Teacher-student learning (privileged teacher to deployable student) is the standard approach. [Unitree H1](../hardware/humanoids/unitree-humanoid) holds the Guinness record for humanoid walking speed at 3.3 m/s, while [Unitree Go2](../hardware/quadrupeds/unitree) is the standard platform for sim-to-real locomotion research. [Boston Dynamics Spot](../hardware/quadrupeds/spot) supports academic locomotion research through its RL Researcher Kit.

**27. Loco-Manipulation** — Simultaneous locomotion and manipulation — walking while picking up objects. Locomotion and manipulation policies often conflict (arm movements affect balance), making integration extremely difficult. A core capability for mobile humanoids. [Helix 02](../models/figure-helix) performed 61 consecutive loco-manipulation actions over 4 minutes without resets, setting the longest autonomous demonstration record by unifying walking, manipulation, and balance in a single neural network.

**28. Whole-Body Control** — A control framework that simultaneously coordinates all robot joints. In humanoids, it integrates arms (manipulation), legs (locomotion), and torso (balance). Essential for motions like leaning the torso to extend an arm or shifting leg balance. WholeBodyVLA (ICLR 2026) is the frontier [17], and related publications surged in 2025. [Helix 02](../models/figure-helix) uses a three-tier System 0 (1kHz) + System 1 (200Hz) + System 2 architecture for pixels-to-whole-body control, replacing 109,504 lines of hand-written C++ with a 10-million-parameter neural network. NVIDIA GR00T-WholeBodyControl provides whole-body loco-manipulation policies for [Unitree G1](../hardware/humanoids/unitree-humanoid).

**29. Actuator** — A device converting energy into mechanical motion. The 2025 humanoid mainstream is QDD (Quasi-Direct Drive, low gear ratio 6:1-10:1), offering adequate torque and impact tolerance. SEA (Series Elastic Actuator) specializes in force control. 1X NEO uses tendon drive for quiet, flexible movement. Boston Dynamics' hydraulic-to-electric transition (2024) cemented the industry's shift to electric actuation. Unitree's in-house M107 motor (up to 360 N.m) powers the [H2 humanoid](../hardware/humanoids/unitree-humanoid), demonstrating how vertical integration of actuators is key to price competitiveness. → [Humanoid Design](../essays/insights/humanoid-design)

**30. Egocentric Vision** — First-person visual perspective from the robot's (or human's) own viewpoint. Compared to third-person external cameras, it provides input closer to the actual deployment setting. Research on learning manipulation skills directly from human how-to videos (shot from an egocentric perspective) is active, with large-scale datasets such as Ego4D and Epic-Kitchens as the foundation. This opens a path to acquiring large-scale training data from internet videos without teleoperation. Glasses-style devices such as UMI (Universal Manipulation Interface) are also enabling egocentric data collection at scale. → [Non-Teleop Data Collection](../essays/insights/non-teleop-data)

**31. [Diffusion Policy](../models/diffusion-policy)** — A policy that generates robot actions using diffusion models, iteratively denoising from random noise to recover action sequences. Presented at RSS 2023, it achieved 46.9% average improvement over conventional BC across 12+ tasks. Its strength lies in expressing multimodal distributions (multiple valid actions) — when there are two valid ways to grasp a cup, it can decisively choose one. As the pioneering work that first successfully applied diffusion from image generation to robot action generation, it directly influenced the action generation approach of many subsequent VLAs including [pi0](../models/pi0)'s Flow Matching and Octo's diffusion decoder.

**32. Flow Matching** — A generative model that transforms noise to data along straight paths. Requires fewer denoising steps than diffusion (as few as 1), making inference faster. [pi0](../models/pi0) is the flagship example, combining a PaliGemma VLM backbone with a Flow Matching-based Action Expert for 50Hz real-time control, and FlowPolicy (AAAI 2025) achieved 7x inference speedup. It treats robot motion as a "fluid flow" rather than rigid command sequences.

**33. [LBM](../models/lbm-atlas) (Large Behavior Model)** — Similar to VLA but emphasizes multi-step behavior sequences rather than single actions. Boston Dynamics/TRI applied it to Atlas, replacing individual controllers and planners with a single large-scale neural network [3]. A 450M-parameter DiT + Flow Matching architecture that treats hands and feet nearly identically, integrating locomotion, balance, and manipulation in a single whole-body control model. Under the philosophy "if you can demonstrate it, the robot can learn it," deformable object manipulation such as rope tying and cloth spreading is handled through the same pipeline.

**34. Dual-System Architecture** — System 2 (VLM, slow reasoning, 7-10Hz) handles planning and understanding; System 1 (DiT, fast reflexes, up to 200Hz) generates real-time actions. [GR00T N1](../models/groot-n1) (Eagle-2 VLM + DiT) and [Helix](../models/figure-helix) (7B VLM + 80M vision-motor policy) adopted this architecture. Helix 02 extended it to a three-tier System 0 (1kHz physical execution layer) + System 1 + System 2 structure. Inspired by dual-process theory in human cognition (Kahneman, 2011). Counterintuitively, System 1 is the "fast reflex" and System 2 is the "slow deliberation."

**35. Diffusion Transformer (DiT)** — An architecture combining Transformer with Diffusion/Flow Matching. The core of [GR00T N1](../models/groot-n1)'s System 1 (16 layers, Action Flow-Matching, 120Hz), [LBM](../models/lbm-atlas) (450M, 30Hz image input, 48-timestep action chunks), and RDT-1B. Uses AdaLN (Adaptive LayerNorm) to condition on VLM output, generating smooth and precise motor commands.

**36. VLM (Vision-Language Model)** — A model that jointly understands images and text. PaliGemma, [Eagle-2](../models/eagle) (NVIDIA), Gemini 2.0, and SigLIP are representative. Serves as the backbone of VLAs, playing the System 2 role. Eagle uses a Mixture of Encoders design running multiple Vision Encoders in parallel, combining SigLIP's global semantic understanding with ConvNeXt's local detail. VLMs understand the world; VLAs act in it. → [VLM Limits & World Model](../essays/insights/vlm-limits-world-model)

**37. [Action Chunking](../models/act)** — Predicting multiple future actions at once (typically 20-50 timesteps) rather than one per timestep. Mitigates compounding errors from single-step prediction and generates smooth, continuous motions. Inspired by psychology, [ACT](../models/act) popularized the concept, demonstrating that precise bimanual manipulation tasks like battery insertion and cable tie threading are achievable with as few as 50 demonstrations. Virtually all modern robot policies now use action chunking.

**38. [Action Tokenization](../models/fast)** — Converting continuous robot actions into discrete tokens, essential for LLM-based VLAs. [FAST](../models/fast) (DCT + BPE based) is representative, using the same frequency transform principles as JPEG/MP3 to achieve approximately 10x compression, matching Diffusion-based VLA performance while training 5x faster. The autoregressive structure enables better leveraging of the LLM's language understanding capabilities. Too coarse a tokenization yields jerky motion; too fine leads to compute explosion.

**39. Latent Action Space** — An abstract representation space encoding action intent rather than explicit motor commands. The model predicts coordinates in this latent space, and a low-level decoder translates them into actual joint motions. A key abstraction enabling transfer between robots with different embodiments.

**40. Agentic AI** — Autonomous AI systems that set goals, plan, and execute tasks with minimal human intervention. Given an abstract goal like "clean the kitchen," the robot autonomously plans and executes hundreds of sub-steps. This represents the evolution from "instruction following" to "problem solving," though it simultaneously introduces systemic risks — robots may take unexpected actions to achieve objectives.

**41. Embodied Chain-of-Thought (ECoT)** — A technique where the model generates explicit intermediate physical reasoning ("the cup is too far, I need to move closer first") before outputting actions. It incorporates physical and spatial constraints into reasoning, making robot decision-making interpretable to humans. A key 2026 technique for overcoming modality collapse and strengthening physical reasoning.

**42. Embodied Reasoning** — Reasoning about the physical world in the context of one's own body. Encompasses spatial reasoning, physical reasoning, and affordance reasoning. Google DeepMind formalized this as an independent model capability with [Gemini Robotics-ER](../models/gemini-robotics), supporting advanced spatial understanding and robotics program execution while achieving top performance across 15 academic benchmarks.

**43. Chain-of-Affordance (CoA)** — A paradigm in which a VLA generates intermediate reasoning about an object's affordances ("what is this object, and how can it be manipulated?") before selecting an action. It grounds LLM Chain-of-Thought in physical manipulation. Proposed in CoA-VLA (ICCV 2025), it improved spatial grounding and task generalization [18]. A core pillar of the "reason before acting" approach, alongside ECoT.

**44. Affordance** — The action possibilities an object offers to an agent. A mug handle affords grasping. Distinct from object recognition (what something is), affordances describe how one can interact with it. Google SayCan uses affordance-based value functions to ground LLM plans in reality [4].

**45. Task Planning** — Decomposing high-level goals ("clean the kitchen") into executable sub-task sequences. Handled by VLM/LLM in the System 2 role. The core component of Agentic AI.

**46. TAMP (Task and Motion Planning)** — An approach integrating high-level task planning (discrete logic and symbolic reasoning) with low-level motion planning (continuous geometry). "The task planner determines the sequence of actions, while the motion planner verifies each action's physical feasibility" [8]. By 2025, LLMs began replacing traditional domain specifications, though systematic studies showed LLMs achieve lower success rates and longer planning times than engineered solvers. NVIDIA cuTAMP attempts GPU parallelization.

**47. Modality Collapse** — A phenomenon in VLA training where visual information overwhelms the model, causing it to ignore language instructions. A January 2026 study formally reported the "Vision Shortcut" problem, where VLAs rely solely on visual cues while disregarding language [14]. A major research challenge addressed through Embodied CoT and improved training strategies. This problem also underlies the convergent evolution toward Dual-System architectures discussed in [VLA & RFM Progress](../essays/insights/vla-rfm-progress).

**48. Physical Hallucination** — A VLA model perceiving nonexistent objects or incorrect physical properties. Unlike text hallucination (LLM confabulation), physical hallucination leads to real-world accidents (collisions, damage). A critical safety challenge for Physical AI deployment.

**49. Reinforcement Learning (RL)** — Learning through trial-and-error interaction with environments to maximize reward. PPO dominates locomotion; SAC dominates manipulation. The 2025 mainstream is BC pre-training + RL fine-tuning hybrids.

**50. Domain Randomization** — Randomly varying simulation parameters (lighting, textures, physics) during training so the real world becomes "just another random variation." OpenAI's Rubik's Cube demonstration (2019) popularized this approach. The most widely used technique for zero-shot sim-to-real transfer [7]. A key strategy for bridging the Sim-to-Real Gap discussed in [Simulation & World Model](../essays/insights/simulation-world-model).

**51. Reward Shaping** — Designing reward functions for RL. Sparse rewards slow learning; dense rewards risk reward hacking (unintended behaviors). [NVIDIA](../companies/nvidia) Eureka (Isaac Lab) pioneered LLM-generated natural-language-based automatic reward generation, pushing the frontier. Automatically generated reward functions train locomotion and manipulation policies in the GPU-accelerated Isaac Lab environment combined with Domain Randomization.

**52. Curriculum Learning** — A technique that progressively increases the difficulty of tasks or environments during training. For locomotion: start with rough terrain, then add disturbances, then reduce error tolerances. Isaac Lab supports automatic domain randomization with progressive difficulty. Complex locomotion policies often fail to converge without curriculum learning.

**53. RLHF for Robotics** — Applying RLHF from LLM alignment to robot behavior. Human preference feedback trains reward models for optimizing policy quality and safety. Harder than the LLM version because it must evaluate the quality and safety of physical interactions. DPO emerged as the 2025 mainstream.

**54. Few-Shot Adaptation** — Learning new tasks from 1-50 demonstrations. The key practical metric for foundation model value. Imperial College London demonstrated learning 1,000 tasks from a single demonstration, and Cornell RHyME achieved one-shot learning from a single how-to video [15].

**55. Long-Horizon Task** — Multi-stage tasks spanning minutes to hours. Errors compound and context must be maintained. Frontier: [pi0.5](../models/pi0-5) (15-min autonomous cleaning), [Helix 02](../models/figure-helix) (4-min, 61 consecutive actions), DiT-Block (1500+ steps). pi0.5 uses Dual-Pathway inference to sequentially generate high-level subtasks, while Helix 02 employs a three-tier System 0/1/2 architecture to perform whole-body tasks like kitchen dishwasher loading.

**56. JEPA / V-JEPA 2 (Joint Embedding Predictive Architecture)** — Yann LeCun's self-supervised framework that builds world models by predicting abstract representations rather than pixels. Meta's V-JEPA 2, trained on 1M+ hours of internet video, achieved 65-80% success on zero-shot robot planning with only 62 hours of robot data.

**57. pi0 / pi0.5 / pi0.6** — [Physical Intelligence](../companies/physical-intelligence)'s VLA model series. [pi0](../models/pi0) combines a PaliGemma 3B VLM with a Flow Matching Action Expert to control 8 embodiments across 68 tasks at 50Hz, dominating OpenVLA/Octo on complex dexterous tasks. [pi0.5](../models/pi0-5) introduced web-data co-training and Dual-Pathway inference to demonstrate the first 10-15 minute autonomous tasks in previously unseen homes. [pi0.6](../models/pi0-6-star) applied RECAP (demonstration + autonomous experience + coaching-based RL) to achieve 2x throughput and halved failure rates, recording 97% success on T-shirt folding. Open-sourced via openpi. $1.1B funding, called "the GPT-1 of robotics." → [pi Series overview](../models/pi-series)

**58. GR00T N1 / N1.5 / N1.6** — [NVIDIA](../companies/nvidia)'s open humanoid foundation model series. [N1](../models/groot-n1) is a 2.2B-parameter Dual-System VLA where System 2 (Eagle-2 VLM, 1.34B) handles environment understanding and System 1 (DiT) generates actions at 120Hz, achieving 40% performance improvement with synthetic data. [N1.5](../models/groot-n1-5) introduced Frozen VLM + FLARE Loss to double language instruction compliance from 46.6% to 93.3%. [N1.6](../models/groot-n1-6) doubled the DiT to 32 layers and adopted Cosmos Reason VLM, supporting Relative Action Space and loco-manipulation. Published on Hugging Face under Apache 2.0, adopted by 1X, Boston Dynamics, Agility, Figure AI, and others. → [GR00T series overview](../models/groot)

**59. Gemini Robotics** — [Google DeepMind](../companies/google-deepmind)'s VLA. Built on [Gemini 2.0](../models/gemini-robotics) with action output added, it supports diverse robot forms from ALOHA to the Apptronik Apollo humanoid with a single model. Demonstrated high-difficulty precision manipulation including origami and card handling. The Gemini Robotics-ER (Embodied Reasoning) variant achieved top performance across 15 academic benchmarks. The On-Device version (Jun 2025) runs locally without cloud. Includes the ASIMOV semantic safety layer. The culmination of Google DeepMind's RT-1/2/X robotics research lineage.

**60. Helix** — [Figure AI](../companies/figure)'s humanoid VLA. System 2 (7B VLM, 7-9Hz) + System 1 (80M vision-motor policy, 200Hz) in a dual-system architecture, the first to achieve high-rate continuous control of the entire upper body including individual fingers. Trained on ~500 hours of teleoperation data. [Helix 02](../models/figure-helix) evolved to a three-tier System 0 (1kHz physical execution) + System 1 + System 2 architecture, replacing 109,504 lines of hand-engineered C++ with a 10-million-parameter neural network. It unified walking, manipulation, and balance in a single neural network, demonstrating 61 consecutive autonomous actions over 4 minutes in kitchen dishwasher tasks.

**61. OpenVLA** — Stanford's 7B open-source VLA. Built on Prismatic VLM (DINOv2 + SigLIP) + Llama 2, trained on 970K real robot demonstrations from [Open X-Embodiment](../models/rt). Outperforms the 55B RT-2-X by 16.5% at 1/7 the size [5]. Fine-tunable on consumer GPUs via LoRA (only 1.4% of parameters). Together with SmolVLA (450M, Hugging Face), a symbol of "democratized" robot AI. → [OpenVLA](../models/openvla)

**62. Octo** — An open-source generalist policy based on Transformer + Diffusion, trained on 800K [OXE](../models/rt) episodes (25 datasets). A compact 27M/93M-parameter model matching the 55B RT-2-X in performance. Fine-tunable to new robots and tasks in hours with ~100 demonstrations on a consumer GPU, setting the standard for rapid adaptation. A precursor to 2026 models. → [Octo](../models/octo)

**63. RDT (Robotics Diffusion Transformer)** — A DiT-based bimanual manipulation foundation model with 1.2B parameters. Trained on 46 datasets with 1M+ trajectories. Uses a non-linear MLP decoder for capturing physical dynamics. Published at ICLR 2025, achieving 56% performance improvement over prior work.

**64. ACT (Action Chunking with Transformers)** — A CVAE + Transformer imitation learning architecture that predicts action chunks. Originated with [ALOHA](../hardware/arms/aloha), inspired by the psychological concept of "chunking" to group sequential actions into single units, mitigating compounding error. Works with as few as 50 demonstrations and has been adopted as [LeRobot](../companies/huggingface)'s default recommended model. The standard baseline for 2025 robot learning. → [ACT](../models/act)

**65. ALOHA** — A ViperX 6-DoF-based low-cost (~$32K) bimanual teleoperation hardware system. Uses leader-follower arms to collect demonstration data, dramatically cheaper than commercial equivalents (~$200K). Designed for developing the [ACT](../models/act) algorithm and one of the richest sources of bimanual manipulation data in [Open X-Embodiment](../models/rt). Extended to [Mobile ALOHA](../hardware/mobile/mobile-aloha) for mobile manipulation data collection, achieving up to 90% success rate improvement through co-training. The standard research platform. → [ALOHA](../hardware/arms/aloha) | [Mobile ALOHA](../hardware/mobile/mobile-aloha)

**66. LeRobot** — [Hugging Face](../companies/huggingface)'s open-source robot learning framework. 487+ datasets, pre-trained policies (ACT, Diffusion Policy, pi0). Pairs with affordable hardware like the [SO-100/SO-101 arms](../hardware/arms/lerobot-arms) (~$130) to democratize robot learning. SmolVLA (450M) was pre-trained on LeRobot community data, enabling a VLA that runs even on a MacBook. Robotics has become the fastest-growing category on Hugging Face. → [HuggingFace](../companies/huggingface) | [LeRobot Arms](../hardware/arms/lerobot-arms)

**67. Open X-Embodiment (OXE)** — A large-scale open dataset led by Google DeepMind, involving 21 institutions, 22 robot types, 1M+ episodes, and 527 skills. [RT-1-X](../models/rt) trained on OXE achieved 50% higher success rate than single-robot models. Became the pre-training foundation for subsequent open-source models such as [Octo](../models/octo) and [OpenVLA](../models/openvla). The foundation for cross-embodiment research and the "ImageNet" of robot data. → [RT Series](../models/rt) | [Octo](../models/octo)

**68. Data Engine** — A systematic pipeline combining teleoperation, autonomous collection, synthetic data, and quality filtering. Originated from Tesla's self-driving program. Stanford (Nov 2025) formalized the "Robot-Powered Data Flywheel" concept: deploy robots, collect data, improve model, deploy better robots — a self-reinforcing cycle. Data scarcity is Physical AI's number one bottleneck, and the data engine/flywheel is the solution.

**69. Multimodal Fusion** — Combining vision, language, proprioception, and tactile data into unified representations. Early fusion, late fusion, and cross-attention are common strategies, and the fusion approach significantly affects model performance. Transformer fusion layers are the current standard.

**70. Sim-to-Real Gap** — Performance degradation when transferring from simulation to reality. Three sources: visual differences, physics inaccuracies, and sensor noise. A 2025 survey found that zero-shot sim-to-real is still limited to moderate-complexity rigid-body tasks. Addressed via domain randomization, fine-tuning, and generative AI-based visual realism enhancement. → [Simulation & World Model](../essays/insights/simulation-world-model)

**71. NVIDIA Omniverse** — An OpenUSD-based 3D development platform. The "operating system" for Physical AI, integrating digital twins, synthetic data, and robot simulation environments. Powered by RTX real-time ray tracing and PhysX physics simulation, the entire [NVIDIA robotics stack](../companies/nvidia) — Isaac Sim, Cosmos, GR00T — runs on Omniverse. Adopted by Siemens, Foxconn, BMW, Amazon Robotics, and TSMC for factory-scale digital twins.

**72. NVIDIA Isaac** — [NVIDIA](../companies/nvidia)'s robot-specific platform. Comprises Isaac Sim (simulator, open source), Isaac Lab (GPU-accelerated learning framework, ~1.6M FPS), Isaac Manipulator (manipulation SDK), and Isaac Perceptor (perception pipeline). Isaac Lab provides built-in Domain Randomization and Sim-to-Real pipelines, and Isaac Lab-Arena (announced at CES 2026) is a simulation evaluation framework integrating Libero, RoboCasa, and RoboTwin benchmarks. Isaac Lab 2.2 (SIGGRAPH 2025) added GR00T N1 benchmarking and LeRobot data format support.

**73. NVIDIA Cosmos** — A [world foundation model](../models/cosmos) platform capable of generating physical worlds. Comprises Cosmos Predict (virtual world state generation), Cosmos Transfer (sim-to-real style transfer), and Cosmos Reason (spatiotemporal reasoning VLM). Trained on 9 quadrillion tokens and 20M hours of real-world data. Generated 780K synthetic trajectories in 11 hours (equivalent to 6,500 hours of demonstrations). GR00T N1.6 adopted Cosmos-Reason-2B as its VLM to enhance robot reasoning. Adopted by 1X, Figure AI, Agility, and others. Over 2M downloads on Hugging Face. → [NVIDIA](../companies/nvidia)

**74. Newton Physics Engine** — An open-source GPU-accelerated physics engine jointly developed by [NVIDIA](../companies/nvidia), DeepMind, and Disney Research. Built on NVIDIA Warp and OpenUSD. 152x faster than MuJoCo for humanoid locomotion, 313x faster for manipulation, and differentiable. Uses a multi-solver architecture to handle rigid bodies, cloth, and particles in a unified framework. Managed by the Linux Foundation.

**75. MuJoCo** — A multi-joint dynamics and contact physics simulator. The de facto standard for RL research, open-sourced by Google DeepMind. Key 2025 developments: MuJoCo Playground (RSS 2025 Best Demo Paper) enables minute-scale training on a single GPU, and MuJoCo-Warp achieves 70x speedup via GPU acceleration.

**76. Differentiable Simulation** — A simulation technique that provides analytical gradients of outputs with respect to inputs and parameters. Unlike traditional black-box simulators, it treats physics as part of the neural network computation graph, enabling backpropagation through the simulation [1]. This allows gradient-based policy optimization far more efficient than trial-and-error. Newton is a representative example.

**77. OpenUSD** — Pixar's open standard for 3D scene description. The foundation of [NVIDIA Omniverse](../companies/nvidia) and the scene description format for the Newton physics engine. Governed by the Alliance for OpenUSD (NVIDIA, Pixar, Adobe, Apple, Autodesk). The "HTML of 3D" for robot assets, environments, and simulation interoperability.

**78. Humanoid Robot** — A human-shaped robot with 40+ DOF, two arms, two legs, and a torso. Market ~$2.9B (2025), projected $51B (2035), ~55% annual growth. Over 60 companies active. [Figure](../hardware/humanoids/figure) has contributed to production of 30,000+ BMW X3s, Digit is deployed at Amazon, and Apollo at Mercedes — entering early commercial deployment. [Atlas](../hardware/humanoids/atlas) demonstrates the pinnacle of dynamic capability with 56 DOF and 360-degree rotating joints, while [Optimus](../hardware/humanoids/optimus) pursues a mass-production strategy targeting $20K. The strategic advantage: ability to operate in human-designed environments. → [Humanoid Design Insights](../essays/insights/humanoid-design)

**79. Quadruped Robot** — A four-legged walking robot. More stable and higher payload capacity than humanoids. [Boston Dynamics Spot](../hardware/quadrupeds/spot) (~$74K) is the industrial inspection leader with 1,000+ units deployed, while [Unitree Go2](../hardware/quadrupeds/unitree) (~$1,600+) pioneered the affordable market and became the standard platform for sim-to-real locomotion research. [ANYmal](../hardware/quadrupeds/anymal) specializes in autonomous inspection of harsh industrial environments (oil/gas) with IP67 rating. Quadruped locomotion techniques laid the groundwork for humanoid locomotion research, and the trend of pairing them with manipulation arms (e.g., Spot Arm) is growing.

**80. Cobot (Collaborative Robot)** — A robot designed to work alongside humans without safety fences. Market $1.26B (2024), projected $3.38B (2030). Universal Robots leads the market. Integrates impedance control, vision systems, and ISO/TS 15066 (force-limiting standards) for safe collaboration [11]. Physical AI's improved perception capabilities are making even traditional industrial robots safe enough to function as cobots.

**81. Soft Robotics** — Robots built from flexible materials (silicone, pneumatic structures). Strengths include impact absorption (safety) and shape adaptation (gentle grasping). However, "soft materials undergo large deformations that are difficult to model with traditional physics" [12], making this a core challenge. Precision and output lag behind rigid robots.

**82. Grasping** — A robot securely holding an object — "the most primitive manipulation capability," yet a prerequisite for nearly every higher-level task [7]. Strategies vary by object shape, material, and weight, with 6-DOF grasp pose estimation predicting optimal approach position and orientation. DexGraspVLA (2025) demonstrated VLM-powered precision grasping. Vision alone often cannot ensure proper grip force control, making [tactile sensing](../essays/insights/tactile-sensing) increasingly important. Robust grasping in unstructured environments remains an open problem.

**83. Contact-Rich Manipulation** — Tasks requiring continuous, repeated contact such as assembly, insertion, polishing, and deformable object handling. Precise control of force and friction is essential, and accurately simulating contact dynamics is one of the hardest challenges in physics simulation. NVIDIA's FORGE framework addresses this with force-guided exploration, while Newton's multi-solver architecture targets contact physics accuracy.

**84. Bimanual Manipulation** — Two-arm coordinated tasks such as folding, assembly, and cooking. Doubles the action space and introduces self-collision risk. [ALOHA](../hardware/arms/aloha) established itself as the standard low-cost bimanual teleoperation platform, dramatically improving research accessibility, with two coordination paradigms: Leader-Follower (one arm leads) and Synergistic (both arms cooperate equally). RDT-1B (1.2B parameters), trained on 46 datasets with 1M+ trajectories, is the largest bimanual foundation model.

**85. Deformable Object Manipulation** — Handling objects that change shape: cloth, food, cables. Effectively infinite DOF makes state representation and simulation extremely difficult. Graph-based modeling — representing cloth as node meshes and rope as linked graphs — is promising, though stronger physics-based reasoning is needed [1]. pi0's laundry folding and Gemini's origami are representative benchmarks.

**86. MPC (Model Predictive Control)** — A control technique that "solves an optimization problem over a prediction horizon at each timestep to generate an optimal trajectory" [9] and executes only the first action. Explicitly incorporates system dynamics and constraints, making it strong for locomotion and balance but computationally heavy and weak for contact-rich manipulation. Increasingly combined with RL or replaced by learned policies.

**87. Impedance Control** — Making the robot behave like a spring-damper system, responding compliantly to external forces. Ensures safety during assembly or human contact. Splits into "passive compliance" (using physical springs) and "active compliance" (software-controlled). Future foundation models are expected to "integrate dynamics-consistent trajectories with compliance for safe physical interaction" [1].

**88. Inverse Kinematics (IK)** — Computing the joint angles needed to place an end effector at a desired position and orientation. The foundation of teleoperation and motion planning. Neural IK solvers are accelerating computation for high-DOF robots.

**89. Motion Planning** — Computing collision-free trajectories from start to goal. Classical methods (RRT, PRM) exist, but learned policies are implicitly replacing them. MoveIt is the standard framework in the ROS ecosystem. Explicit planning remains necessary for safety-critical scenarios.

**90. Spatial Intelligence** — An AI's ability to understand and reason about 3D physical space. This includes perceiving positions, spatial relationships, distances, orientations, and scene geometry — requiring true 3D understanding beyond 2D image recognition. [Fei-Fei Li](../people/fei-fei-li)'s [World Labs](../companies/world-labs) (2024) was founded as a venture dedicated to this field, developing AI capable of 3D scene generation, physics understanding, and spatial reasoning from 2D/3D inputs. It serves as the bridge between "seeing (2D)" and "acting (3D)" — a robot that cannot understand spatial relationships cannot manipulate objects.

**91. 3D Gaussian Splatting (3DGS)** — Representing scenes as semi-transparent 3D Gaussian ellipsoids. Enables real-time rendering at 100+ FPS, far surpassing NeRF, and is rapidly gaining traction in robot scene understanding, world models, and SLAM. Integrated into Isaac Sim 5.0 via NuRec (neural reconstruction). Called "the JPEG moment for spatial computing."

**92. NeRF (Neural Radiance Fields)** — Implicitly encoding 3D scenes in neural networks. A precursor to 3DGS, synthesizing novel viewpoints from sparse 2D images. Still used for large-scale urban mapping (Block-NeRF) but losing ground to 3DGS in real-time applications.

**93. Point Cloud** — A set of 3D points captured by depth cameras or LiDAR. Provides spatial information absent from 2D images, used for grasping and collision avoidance. Research combining point clouds with deep learning for precision grasping is highly active [7]. Processed via PointNet and point cloud transformers.

**94. SLAM** — Building a map of an unknown environment while simultaneously tracking the robot's location within it. Visual-inertial fusion improves robustness, and loop closure — recognizing previously visited locations — corrects accumulated drift [10]. The foundation of autonomous mobile robot navigation. In 2025, 3DGS-based Neural SLAM emerged.

**95. Object Pose Estimation** — Determining the 3D position and orientation (6-DOF) of objects from sensor data. A prerequisite for precise grasping, assembly, and placement. Foundation model features (e.g., DINOv2) are enabling zero-shot estimation.

**96. DINOv2 / SigLIP** — DINOv2: a self-supervised ViT with strong spatial understanding and depth estimation. SigLIP: an encoder aligning visual-language representations. Combining DINOv2's spatial precision with SigLIP's semantic understanding is the standard VLA visual backbone configuration.

**97. ViT (Vision Transformer)** — Divides images into patches and processes them with a Transformer. How robots "see." Pre-trained variants (DINOv2, SigLIP) serve as VLA visual backbones.

**98. Edge Computing** — Processing AI on the robot itself rather than in the cloud. [NVIDIA](../companies/nvidia) Jetson Thor (Blackwell GPU, 2,070 FP4 TFLOPS, 128GB memory, $3,499, Aug 2025) is representative, and the $1,999 Jetson T4000 was announced at CES 2026. Essential for implementing instant reflexes without communication latency. Jetson serves as the final deployment hardware layer in NVIDIA's full-stack robotics strategy (Isaac, Omniverse, Cosmos, Jetson). Over 2M developers across Agility, Boston Dynamics, Figure AI, Amazon, and Meta use NVIDIA's robot stack.

**99. ROS 2 (Robot Operating System 2)** — The de facto standard middleware for robot software development. Provides inter-module communication, hardware abstraction, and simulation integration. DDS (Data Distribution Service) serves as the communication backbone. MoveIt is the standard motion planning framework.

**100. Safety Envelope** — Operational boundaries (position, velocity, force) within which a robot is certified safe. The principle: AI decides within the safety envelope, but the safety logic itself must not be AI-based. ISO 25785-1 (May 2025) was published as the first humanoid robot safety standard. Functional Safety standards (ISO 26262 / IEC 61508) are key certification barriers for Physical AI.

---

## Commonly Confused Terms

### RFM vs VLA vs LBM

> **Common confusion: using all three interchangeably**

| Term | Definition | Key distinction |
|------|-----------|-----------------|
| **RFM** | Umbrella term for all large pre-trained robot models | Broadest category; VLA and LBM are subtypes |
| **VLA** | Vision + Language input → Action output | Requires language conditioning, built on VLM backbones |
| **LBM** | Multi-step behavior sequence learning | Emphasizes behavior sequences, DiT + Flow Matching |

### Diffusion Policy vs Flow Matching vs ACT

> **Common confusion: lumped together as "generative policies"**

| Term | Generation method | Speed | Notes |
|------|------------------|-------|-------|
| **Diffusion Policy** | Iterative denoising (10-50 steps) | Slower | Stable, well-studied |
| **Flow Matching** | Continuous vector field (min 1 step) | Faster | Better inference speed, adopted by pi0 |
| **ACT** | CVAE + Transformer (single forward pass) | Fastest | Lightweight, good baseline |

### Teleoperation vs Demonstration vs HITL

> **Common confusion: not distinguishing human involvement types**

| Term | Human role | When used |
|------|-----------|-----------|
| **Teleoperation** | Full real-time control | Data collection |
| **Demonstration** | Task demonstration (teleop, video, kinesthetic teaching) | Data collection |
| **HITL** | Intermittent supervision/correction | Training or deployment |

### World Model vs Policy vs Reward Model

> **Common confusion: all called "models," roles unclear**

| Term | Predicts | Role |
|------|---------|------|
| **World Model** | Future environment states given actions | Understanding/predicting the world |
| **Policy** | Optimal action given observations | Decision-making |
| **Reward Model** | Desirability of states/behaviors | Learning signal |

### NVIDIA Platform: Omniverse vs Cosmos vs Newton vs Isaac

> **Common confusion: unclear how the four relate**

| Term | Layer | Role |
|------|-------|------|
| **Omniverse** | Platform / OS | OpenUSD-based 3D development platform |
| **Cosmos** | World models | Generative world models for Physical AI |
| **Newton** | Physics engine | GPU-accelerated physics simulation |
| **Isaac** | Robot tools | Simulation, learning, perception, manipulation |

Newton → runs inside Isaac Sim → runs on Omniverse → Cosmos generates synthetic data.

---

## References

> Key sources used to enrich this glossary. Bracket numbers in the text above correspond to the entries below.

[1] Embodied Robot Manipulation in the Era of Foundation Models: Planning and Learning Perspectives. arXiv:2512.22983, 2025. https://arxiv.org/html/2512.22983v1

[2] Genie 3: A New Frontier for World Models. Google DeepMind Blog, 2025. https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/

[3] Boston Dynamics Atlas Learns From Large Behavior Models. IEEE Spectrum, 2025. https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma

[4] Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (SayCan). arXiv:2204.01691, 2022. https://arxiv.org/abs/2204.01691

[5] Dexterous Manipulation through Imitation Learning: A Survey. arXiv:2504.03515, 2025. https://arxiv.org/abs/2504.03515

[6] What Is Digital Twin Technology? McKinsey, 2025. https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-digital-twin-technology

[7] Robotics Dexterous Grasping: Methods Based on Point Cloud and Deep Learning. PMC, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8221534/

[8] Task and Motion Planning for Grasping Targets with Object Properties. ScienceDirect, 2025. https://www.sciencedirect.com/science/article/pii/S0921889025001885

[9] Model Predictive Control (MPC). MoveIt Pro Documentation. https://docs.picknik.ai/how_to/robotics_applications/model_predictive_control/

[10] SLAM: A Comprehensive Guide. Shadecoder, 2025. https://www.shadecoder.com/topics/slam-a-comprehensive-guide-for-2025

[11] Complete Guide to Manipulator Robots: Benefits and Applications. Robotnik, 2025. https://robotnik.eu/complete-guide-to-manipulator-robots-benefits-and-applications/

[12] Controlling Diverse Robots by Inferring Jacobian Fields with Deep Networks. Nature, 2025. https://www.nature.com/articles/s41586-025-09170-0

[13] Georgetown CSET. Physical AI: An Introductory Primer. Feb 2026. https://cset.georgetown.edu/article/physical-ai-an-introductory-primer/

[14] IEEE Access. A Comprehensive Survey on Vision-Language-Action Models for Autonomous Driving and Robotics. 2025. https://ieeexplore.ieee.org/document/10937561

[15] Imperial College London. Robot Skill Learning in a Day from Single Demonstrations. Science Robotics, Dec 2025. https://www.science.org/doi/10.1126/scirobotics.ado3187

[16] MarketsandMarkets. Digital Twin Market Report. 2024. https://www.marketsandmarkets.com/Market-Reports/digital-twin-market-225269522.html

[17] WholeBodyVLA: Towards Whole-Body Language-Action Models for Humanoid Robots. ICLR 2026. https://openreview.net/forum?id=WholeBodyVLA

[18] CoA-VLA: Chain-of-Affordance Reasoning for Vision-Language-Action Models. ICCV 2025. https://openaccess.thecvf.com/ICCV2025/CoA-VLA
