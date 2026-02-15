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

**1. Physical AI** — The umbrella term for AI that senses, understands, and acts in the physical world. Unlike digital AI such as chatbots, Physical AI must deal with the laws of physics, spatial reasoning, and real-time interaction. NVIDIA declared a "ChatGPT moment for robotics" at CES 2025, making it a central strategy, and Morgan Stanley projects a $5 trillion market by 2050 [13]. The key distinction is not mere automation but the granting of true autonomy.

**2. VLA (Vision-Language-Action)** — A multimodal model that takes camera images and natural language instructions as input and directly outputs robot actions. The critical difference from a VLM is the addition of an "action output." As of 2025, over 100 VLA architectures have been reported [14], making it the dominant paradigm for robot foundation models. That said, VLAs still struggle with precise physical interactions requiring delicate force control, such as assembly [1].

**3. RFM (Robot Foundation Model)** — A large-scale model pre-trained on diverse data for general-purpose application across robots and tasks. VLA is one type of RFM, not a synonym. RFMs have fundamentally reshaped the manipulation paradigm through "generalization, compositional reasoning, and unified interfaces" [1], and Skild AI argues one must distinguish a true RFM from "a VLM sprinkled with some robot data." Competitive advantage has shifted from hardware precision to data scale and diversity.

**4. World Model / WFM (World Foundation Model)** — A model that internally simulates environment physics to predict "what happens if I take this action." Unlike a policy (which decides what to do), a world model models the environment itself. It enables robots to perform "mental rehearsal" — predicting outcomes before acting [1]. Three architectural approaches coexist: RSSM, JEPA, and Transformer-based. NVIDIA Cosmos, Meta V-JEPA 2, and Google DeepMind Genie 3 [2] are representative. By 2026, these evolved into causality-respecting, physics-consistent "action-conditioned" models.

**5. Imitation Learning** — Learning by observing and replicating expert demonstrations. No reward function design needed — enabling fast transfer of complex skills like tool use and assembly [1]. Imperial College London reported learning 1,000 tasks from a single demonstration in one day (Science Robotics, Dec 2025) [15]. The dominant training paradigm for 2025 robot foundation models.

**6. Behavior Cloning (BC)** — The simplest form of imitation learning: supervised learning that maps observations to actions from demonstration data. Despite its simplicity, it underpins VLAs and Diffusion Policy, making it the 2025 mainstream.

**7. Teleoperation** — A human directly controlling a robot to collect action data. Methods include VR controllers, leader-follower arms, exoskeletons, and haptic gloves (DOGlove, ICRA 2025). Boston Dynamics' principle: "If you can teleoperate it, you can train a network to reproduce that behavior" [3]. Costs $100-1,000 per hour, making scaling difficult, but it provides the highest-quality manipulation data.

**8. Sim-to-Real Transfer** — Deploying simulation-trained policies on real robots. The core challenge lies in bridging three types of gaps: visual, physics, and sensor discrepancies. Two main strategies coexist: zero-shot transfer (NVIDIA AutoMate achieved 84.5% success rate across 100 assembly configurations) and a two-phase approach of simulation pre-training followed by fine-tuning on small amounts of real-world data (Dita demonstrated that 10-shot real fine-tuning suffices). "If you can't simulate it, you can't scale it" is the 2026 mantra.

**9. Generalist Policy** — A single model applicable to diverse tasks, environments, and robots. The opposite of a specialist policy. pi0.5 demonstrated 10-15 minutes of autonomous cleaning in homes never seen during training. Note that "generalist" does not mean "excels at every task" — post-training is required for deployment.

**10. Zero-Shot Generalization** — Performing on unseen objects, environments, or instructions without additional training. The ultimate goal of general-purpose robot models. Example: a robot trained only on towels successfully folds a novel T-shirt. In locomotion, LeVERB (Berkeley, Jun 2025) demonstrated the first zero-shot sim-to-real humanoid whole-body control.

**11. End-to-End Learning** — Learning a single unified model from sensor inputs all the way to motor outputs. Rather than splitting perception, planning, and control into separate modules, a deep neural network directly learns the mapping from raw observations to actions through demonstrations or trial-and-error [3]. Eliminates task-specific engineering for greater flexibility, but demands large-scale training data and rigorous safety validation. The foundational learning paradigm behind VLAs, Diffusion Policy, and other modern robot policies.

**12. Synthetic Data** — Artificial data generated by simulation or generative models. Achieves 60-80% cost savings vs. real data while reaching 90-95% performance. NVIDIA GR00T Blueprint improved GR00T N1 performance by 40% with synthetic data. The key solution to the "data gap" — the severe shortage of robot data compared to text data.

**13. Co-training** — Training on multiple data types (robot, web, simulation) simultaneously. Mitigates data scarcity. Mobile ALOHA showed up to 90% improvement. Co-training with the DROID dataset achieved 22% absolute success rate gain over OXE. A strategy for giving robots "common sense" and "motor skills" at once.

**14. Pre-Training** — The initial phase of learning general-purpose representations from large, diverse datasets. Analogous to GPT pre-training for LLMs, in robotics it involves mixing web videos, simulation, and multi-robot data to learn general patterns of the physical world (contact, gravity, spatial relationships). The quality and scale of pre-training determine the efficiency of downstream fine-tuning, forming the first half of the "pre-train then post-train" paradigm.

**15. Fine-Tuning / Post-Training** — Adapting a pre-trained model to a specific robot or task with small amounts of data (typically ~100 demonstrations). NVIDIA emphasizes that "the key is not training a foundation model from scratch, but leveraging it through post-training." The "pre-train then post-train" paradigm is the core deployment strategy for Physical AI.

**16. Scaling Law** — The observation that performance improves predictably with more model parameters, data, and compute. Proven for LLMs, and whether it holds for Physical AI is the core question on which $40.7B in 2025 investment rides. Real data collection costs, the sim-to-real gap, and high variance in physical tasks pose challenges distinct from LLM scaling. GEN-0 (Generalist AI) reported a phase transition at 7B parameters, providing the first empirical evidence of a robotics scaling law. Not just data volume, but mixing diverse robot form data (embodiment scaling) is critical.

**17. Digital Twin** — A virtual replica of a physical system — "a virtual model that uses real-time data to reflect the state and behavior of a real object" [6]. By 2025, digital twins evolved from static design tools to continuous optimization systems that ingest telemetry and predict failures. Market size is projected to grow from $10.1B (2023) to $73.5B (2028) [16]. Essential for HIL (Hardware-in-the-Loop) testing and pre-deployment safety validation.

**18. Embodiment** — A robot's physical form and capabilities. The central concept of the embodiment hypothesis: that physical form shapes intelligence. The "embodiment gap" explains why skills do not easily transfer between different robot bodies.

**19. Cross-Embodiment Transfer** — Sharing and transferring knowledge between robots of different morphologies. CrossFormer controls 30 robot types with the same weights. Training on diverse robot form data improves understanding of fundamental physics (contact, balance) — this "embodiment scaling law" emerged in 2025. The ultimate goal is an embodiment-agnostic policy that works regardless of robot form, pursued through universal action spaces (Cartesian coordinates) or embodiment tokens.

**20. Embodied AI** — AI with a physical body that interacts with real environments. Largely synonymous with Physical AI, though Embodied AI is more academic while Physical AI is more industry-oriented. Google DeepMind prefers "Embodied Intelligence," while NVIDIA prefers "Physical AI."

**21. DOF (Degrees of Freedom)** — The number of independent axes a robot can move. Industrial arm: 6 DOF. Humanoid: 40+ DOF. Human hand: 20+ DOF. More DOF means more capability but harder control.

**22. End Effector** — The device at the tip of a robot arm that interacts with objects. Broadly split into grippers (2-3 fingers, simple, structured tasks) and articulated hands (4-5 fingers, 12-22+ DOF, general-purpose manipulation). As AI control capabilities mature, the industry trend is shifting from simple grippers to articulated hands.

**23. Proprioception** — A robot's sensing of its own internal state (joint angles, velocities, torques). The robotic equivalent of human muscle sense. Distinct from camera-based vision (external sensing). Critical for walking in the dark or manipulating objects without visual feedback.

**24. Dexterous Manipulation** — Complex manipulation using multi-fingered robot hands: rotating objects, assembling parts, and using tools. Requires "coordinated finger movements and adaptive force control" [5]. ICRA 2025 was dubbed "the year of the robot hand." DexGraspVLA (2025) demonstrated VLM-powered precision grasping. Shadow Hand, LEAP Hand (open source), and DexGraspRL (92% success rate) are representative [5].

**25. Tactile Sensing** — Sensing pressure, slip, and temperature upon contact. Vision-based tactile sensors (GelSight, DIGIT ~$350) are the mainstream, and the field is reaching its "ImageNet moment." Figure 03's hand detects forces as subtle as 3 grams. Enables tasks that are extremely difficult with vision alone — threading a needle, picking up a raspberry without crushing it [5].

**26. Locomotion** — A robot's ability to move. Bipedal (humanoid) locomotion is inherently unstable and challenging; quadruped is more stable. Typically trained via simulation RL (PPO) with sim-to-real transfer. Teacher-student learning (privileged teacher to deployable student) is the standard approach.

**27. Loco-Manipulation** — Simultaneous locomotion and manipulation — walking while picking up objects. Locomotion and manipulation policies often conflict (arm movements affect balance), making integration extremely difficult. A core capability for mobile humanoids.

**28. Whole-Body Control** — A control framework that simultaneously coordinates all robot joints. In humanoids, it integrates arms (manipulation), legs (locomotion), and torso (balance). Essential for motions like leaning the torso to extend an arm or shifting leg balance. WholeBodyVLA (ICLR 2026) is the frontier [17], and related publications surged in 2025.

**29. Actuator** — A device converting energy into mechanical motion. The 2025 humanoid mainstream is QDD (Quasi-Direct Drive, low gear ratio 6:1-10:1), offering adequate torque and impact tolerance. SEA (Series Elastic Actuator) specializes in force control. 1X NEO uses tendon drive for quiet, flexible movement. Boston Dynamics' hydraulic-to-electric transition (2024) cemented the industry's shift to electric actuation.

**30. Egocentric Vision** — First-person visual perspective from the robot's (or human's) own viewpoint. Compared to third-person external cameras, it provides input closer to the actual deployment setting. Research on learning manipulation skills directly from human how-to videos (shot from an egocentric perspective) is active, with large-scale datasets such as Ego4D and Epic-Kitchens as the foundation. This opens a path to acquiring large-scale training data from internet videos without teleoperation.

**31. Diffusion Policy** — A policy that generates robot actions using diffusion models, iteratively denoising from random noise to recover action sequences. Presented at RSS 2023, it achieved 46.9% average improvement over conventional BC across 12+ tasks. Its strength lies in expressing multimodal distributions (multiple valid actions) — when there are two valid ways to grasp a cup, it can decisively choose one.

**32. Flow Matching** — A generative model that transforms noise to data along straight paths. Requires fewer denoising steps than diffusion (as few as 1), making inference faster. pi0 is the flagship example, using it for 50Hz real-time control, and FlowPolicy (AAAI 2025) achieved 7x inference speedup. It treats robot motion as a "fluid flow" rather than rigid command sequences.

**33. LBM (Large Behavior Model)** — Similar to VLA but emphasizes multi-step behavior sequences rather than single actions. Boston Dynamics/TRI applied it to Atlas, replacing individual controllers and planners with a single large-scale neural network [3]. Typically DiT + Flow Matching based. Specialized in learning the dynamics of motion.

**34. Dual-System Architecture** — System 2 (VLM, slow reasoning, 7-10Hz) handles planning and understanding; System 1 (DiT, fast reflexes, up to 200Hz) generates real-time actions. Adopted by GR00T N1 and Helix. Inspired by dual-process theory in human cognition. Counterintuitively, System 1 is the "fast reflex" and System 2 is the "slow deliberation."

**35. Diffusion Transformer (DiT)** — An architecture combining Transformer with Diffusion/Flow Matching. The core of GR00T N1's System 1, Boston Dynamics' LBM, and RDT-1B.

**36. VLM (Vision-Language Model)** — A model that jointly understands images and text. PaliGemma, Eagle-2 (NVIDIA), Gemini 2.0, and SigLIP are representative. Serves as the backbone of VLAs, playing the System 2 role. VLMs understand the world; VLAs act in it.

**37. Action Chunking** — Predicting multiple future actions at once (typically 20-50 timesteps) rather than one per timestep. Mitigates compounding errors from single-step prediction and generates smooth, continuous motions. ACT popularized the concept, and virtually all modern robot policies now use it.

**38. Action Tokenization** — Converting continuous robot actions into discrete tokens, essential for LLM-based VLAs. FAST (DCT-based) is representative, matching Diffusion-based VLA performance while training 5x faster. Too coarse a tokenization yields jerky motion; too fine leads to compute explosion.

**39. Latent Action Space** — An abstract representation space encoding action intent rather than explicit motor commands. The model predicts coordinates in this latent space, and a low-level decoder translates them into actual joint motions. A key abstraction enabling transfer between robots with different embodiments.

**40. Agentic AI** — Autonomous AI systems that set goals, plan, and execute tasks with minimal human intervention. Given an abstract goal like "clean the kitchen," the robot autonomously plans and executes hundreds of sub-steps. This represents the evolution from "instruction following" to "problem solving," though it simultaneously introduces systemic risks — robots may take unexpected actions to achieve objectives.

**41. Embodied Chain-of-Thought (ECoT)** — A technique where the model generates explicit intermediate physical reasoning ("the cup is too far, I need to move closer first") before outputting actions. It incorporates physical and spatial constraints into reasoning, making robot decision-making interpretable to humans. A key 2026 technique for overcoming modality collapse and strengthening physical reasoning.

**42. Embodied Reasoning** — Reasoning about the physical world in the context of one's own body. Encompasses spatial reasoning, physical reasoning, and affordance reasoning. Google DeepMind formalized this as an independent model capability with Gemini Robotics-ER, achieving top performance across 15 academic benchmarks.

**43. Chain-of-Affordance (CoA)** — A paradigm in which a VLA generates intermediate reasoning about an object's affordances ("what is this object, and how can it be manipulated?") before selecting an action. It grounds LLM Chain-of-Thought in physical manipulation. Proposed in CoA-VLA (ICCV 2025), it improved spatial grounding and task generalization [18]. A core pillar of the "reason before acting" approach, alongside ECoT.

**44. Affordance** — The action possibilities an object offers to an agent. A mug handle affords grasping. Distinct from object recognition (what something is), affordances describe how one can interact with it. Google SayCan uses affordance-based value functions to ground LLM plans in reality [4].

**45. Task Planning** — Decomposing high-level goals ("clean the kitchen") into executable sub-task sequences. Handled by VLM/LLM in the System 2 role. The core component of Agentic AI.

**46. TAMP (Task and Motion Planning)** — An approach integrating high-level task planning (discrete logic and symbolic reasoning) with low-level motion planning (continuous geometry). "The task planner determines the sequence of actions, while the motion planner verifies each action's physical feasibility" [8]. By 2025, LLMs began replacing traditional domain specifications, though systematic studies showed LLMs achieve lower success rates and longer planning times than engineered solvers. NVIDIA cuTAMP attempts GPU parallelization.

**47. Modality Collapse** — A phenomenon in VLA training where visual information overwhelms the model, causing it to ignore language instructions. A January 2026 study formally reported the "Vision Shortcut" problem, where VLAs rely solely on visual cues while disregarding language [14]. A major research challenge addressed through Embodied CoT and improved training strategies.

**48. Physical Hallucination** — A VLA model perceiving nonexistent objects or incorrect physical properties. Unlike text hallucination (LLM confabulation), physical hallucination leads to real-world accidents (collisions, damage). A critical safety challenge for Physical AI deployment.

**49. Reinforcement Learning (RL)** — Learning through trial-and-error interaction with environments to maximize reward. PPO dominates locomotion; SAC dominates manipulation. The 2025 mainstream is BC pre-training + RL fine-tuning hybrids.

**50. Domain Randomization** — Randomly varying simulation parameters (lighting, textures, physics) during training so the real world becomes "just another random variation." OpenAI's Rubik's Cube demonstration (2019) popularized this approach. The most widely used technique for zero-shot sim-to-real transfer [7].

**51. Reward Shaping** — Designing reward functions for RL. Sparse rewards slow learning; dense rewards risk reward hacking (unintended behaviors). NVIDIA Eureka (Isaac Lab) pioneered LLM-generated reward functions from natural language, pushing the frontier.

**52. Curriculum Learning** — A technique that progressively increases the difficulty of tasks or environments during training. For locomotion: start with rough terrain, then add disturbances, then reduce error tolerances. Isaac Lab supports automatic domain randomization with progressive difficulty. Complex locomotion policies often fail to converge without curriculum learning.

**53. RLHF for Robotics** — Applying RLHF from LLM alignment to robot behavior. Human preference feedback trains reward models for optimizing policy quality and safety. Harder than the LLM version because it must evaluate the quality and safety of physical interactions. DPO emerged as the 2025 mainstream.

**54. Few-Shot Adaptation** — Learning new tasks from 1-50 demonstrations. The key practical metric for foundation model value. Imperial College London demonstrated learning 1,000 tasks from a single demonstration, and Cornell RHyME achieved one-shot learning from a single how-to video [15].

**55. Long-Horizon Task** — Multi-stage tasks spanning minutes to hours. Errors compound and context must be maintained. Frontier: pi0.5 (15 min), Helix 02 (4 min), DiT-Block (1500+ steps).

**56. JEPA / V-JEPA 2 (Joint Embedding Predictive Architecture)** — Yann LeCun's self-supervised framework that builds world models by predicting abstract representations rather than pixels. Meta's V-JEPA 2, trained on 1M+ hours of internet video, achieved 65-80% success on zero-shot robot planning with only 62 hours of robot data.

**57. pi0 / pi0.5 / pi0.6** — Physical Intelligence's VLA models. pi0: VLM + Flow Matching, 8 embodiments, 68 tasks. pi0.5: the first model to demonstrate 10-15 minute autonomous tasks in unseen environments. pi0.6: applied RECAP (real-world experience-based RL) for 2x throughput and reduced failure rate. Open-sourced via openpi. $1.1B funding, called "the GPT-1 of robotics."

**58. GR00T N1 / N1.5 / N1.6** — NVIDIA's open humanoid foundation model. A 2.2B-parameter Dual-System VLA: System 2 (Eagle-2 VLM, 1.34B) handles reasoning, System 1 (DiT) generates actions. N1.6 (Jan 2026) integrates Cosmos Reason and supports full-body control. Published on Hugging Face, adopted by 1X, Boston Dynamics, Agility, Figure AI, and others.

**59. Gemini Robotics** — Google DeepMind's VLA built on Gemini 2.0 with action output added. Demonstrated high-difficulty precision manipulation including origami folding and card handling. The Gemini Robotics-ER (Embodied Reasoning) variant achieved top performance across 15 academic benchmarks. The On-Device version (Jun 2025) runs locally without cloud. Includes the ASIMOV semantic safety layer.

**60. Helix** — Figure AI's humanoid VLA. System 2 (7B VLM, 7-9Hz) + System 1 (80M vision-motor policy, 200Hz) in a dual-system architecture, the first to achieve high-rate continuous control of the entire upper body including individual fingers. Trained on ~500 hours of teleoperation data. Helix 02 unified walking, manipulation, and balance in a single neural network, demonstrating 4-minute autonomous kitchen tasks.

**61. OpenVLA** — Stanford's 7B open-source VLA. Built on DINOv2 + SigLIP + Llama 2, trained on 970K real robot demonstrations. Outperforms the 55B RT-2-X by 16.5% at 1/7 the size [5]. Together with SmolVLA (450M, Hugging Face), a symbol of "democratized" robot AI.

**62. Octo** — An open-source generalist policy based on Transformer + Diffusion, trained on 800K OXE episodes. A compact 27M/93M-parameter model matching the 55B RT-2-X in performance. A precursor to 2026 models.

**63. RDT (Robotics Diffusion Transformer)** — A DiT-based bimanual manipulation foundation model with 1.2B parameters. Trained on 46 datasets with 1M+ trajectories. Uses a non-linear MLP decoder for capturing physical dynamics. Published at ICLR 2025, achieving 56% performance improvement over prior work.

**64. ACT (Action Chunking with Transformers)** — A CVAE + Transformer imitation learning architecture that predicts action chunks. Originated with ALOHA, works with as few as 50 demonstrations. The standard baseline for 2025 robot learning.

**65. ALOHA** — A low-cost (~$32K) bimanual teleoperation hardware system. Uses leader-follower arms to collect demonstration data, dramatically cheaper than commercial equivalents (~$200K). Extended to Mobile ALOHA for mobile manipulation data collection. The standard research platform.

**66. LeRobot** — Hugging Face's open-source robot learning framework. 487+ datasets, pre-trained policies (ACT, Diffusion Policy, pi0). Pairs with affordable hardware (SO-100 arm) to democratize robot learning. Robotics has become the fastest-growing category on Hugging Face.

**67. Open X-Embodiment (OXE)** — A large-scale open dataset led by Google DeepMind, involving 21 institutions, 22 robot types, 1M+ episodes, and 527 skills. RT-1-X trained on OXE achieved 50% higher success rate than single-robot models. The foundation for cross-embodiment research and the "ImageNet" of robot data.

**68. Data Engine** — A systematic pipeline combining teleoperation, autonomous collection, synthetic data, and quality filtering. Originated from Tesla's self-driving program. Stanford (Nov 2025) formalized the "Robot-Powered Data Flywheel" concept: deploy robots, collect data, improve model, deploy better robots — a self-reinforcing cycle. Data scarcity is Physical AI's number one bottleneck, and the data engine/flywheel is the solution.

**69. Multimodal Fusion** — Combining vision, language, proprioception, and tactile data into unified representations. Early fusion, late fusion, and cross-attention are common strategies, and the fusion approach significantly affects model performance. Transformer fusion layers are the current standard.

**70. Sim-to-Real Gap** — Performance degradation when transferring from simulation to reality. Three sources: visual differences, physics inaccuracies, and sensor noise. A 2025 survey found that zero-shot sim-to-real is still limited to moderate-complexity rigid-body tasks. Addressed via domain randomization, fine-tuning, and generative AI-based visual realism enhancement.

**71. NVIDIA Omniverse** — An OpenUSD-based 3D development platform. The "operating system" for Physical AI, integrating digital twins, synthetic data, and robot simulation environments. Adopted by Siemens, Foxconn, BMW, Amazon Robotics, and TSMC for factory-scale digital twins.

**72. NVIDIA Isaac** — NVIDIA's robot-specific platform. Comprises Isaac Sim (simulator, open source), Isaac Lab (GPU-accelerated learning framework, ~1.6M FPS), Isaac Manipulator (manipulation SDK), and Isaac Perceptor (perception pipeline). Isaac Lab 2.2 (SIGGRAPH 2025) added GR00T N1 benchmarking and LeRobot data format support.

**73. NVIDIA Cosmos** — A world foundation model platform capable of generating physical worlds. Comprises Cosmos Predict (virtual world state generation), Cosmos Transfer (sim-to-real style transfer), and Cosmos Reason (spatiotemporal reasoning VLM). Generated 780K synthetic trajectories in 11 hours (equivalent to 6,500 hours of demonstrations). Over 2M downloads on Hugging Face.

**74. Newton Physics Engine** — An open-source GPU-accelerated physics engine jointly developed by NVIDIA, DeepMind, and Disney Research. 152x faster than MuJoCo for humanoid locomotion, 313x faster for manipulation, and differentiable. Uses a multi-solver architecture to handle rigid bodies, cloth, and particles in a unified framework. Managed by the Linux Foundation.

**75. MuJoCo** — A multi-joint dynamics and contact physics simulator. The de facto standard for RL research, open-sourced by Google DeepMind. Key 2025 developments: MuJoCo Playground (RSS 2025 Best Demo Paper) enables minute-scale training on a single GPU, and MuJoCo-Warp achieves 70x speedup via GPU acceleration.

**76. Differentiable Simulation** — A simulation technique that provides analytical gradients of outputs with respect to inputs and parameters. Unlike traditional black-box simulators, it treats physics as part of the neural network computation graph, enabling backpropagation through the simulation [1]. This allows gradient-based policy optimization far more efficient than trial-and-error. Newton is a representative example.

**77. OpenUSD** — Pixar's open standard for 3D scene description. The foundation of NVIDIA Omniverse. Governed by the Alliance for OpenUSD (NVIDIA, Pixar, Adobe, Apple, Autodesk). The "HTML of 3D" for robot assets, environments, and simulation interoperability.

**78. Humanoid Robot** — A human-shaped robot with 40+ DOF, two arms, two legs, and a torso. Market ~$2.9B (2025), projected $51B (2035), ~55% annual growth. Over 60 companies active. Figure deployed at BMW, Digit at Amazon, Apollo at Mercedes — entering early commercial deployment. The strategic advantage: ability to operate in human-designed environments.

**79. Quadruped Robot** — A four-legged walking robot. More stable and higher payload capacity than humanoids. Boston Dynamics Spot (~$74K) is the flagship, while Unitree Go2 (~$1,600+) opened the affordable market. Quadruped locomotion techniques laid the groundwork for humanoid locomotion research, and the trend of pairing them with manipulation arms is growing.

**80. Cobot (Collaborative Robot)** — A robot designed to work alongside humans without safety fences. Market $1.26B (2024), projected $3.38B (2030). Universal Robots leads the market. Integrates impedance control, vision systems, and ISO/TS 15066 (force-limiting standards) for safe collaboration [11]. Physical AI's improved perception capabilities are making even traditional industrial robots safe enough to function as cobots.

**81. Soft Robotics** — Robots built from flexible materials (silicone, pneumatic structures). Strengths include impact absorption (safety) and shape adaptation (gentle grasping). However, "soft materials undergo large deformations that are difficult to model with traditional physics" [12], making this a core challenge. Precision and output lag behind rigid robots.

**82. Grasping** — A robot securely holding an object — "the most primitive manipulation capability," yet a prerequisite for nearly every higher-level task [7]. Strategies vary by object shape, material, and weight, with 6-DOF grasp pose estimation predicting optimal approach position and orientation. DexGraspVLA (2025) demonstrated VLM-powered precision grasping. Robust grasping in unstructured environments remains an open problem.

**83. Contact-Rich Manipulation** — Tasks requiring continuous, repeated contact such as assembly, insertion, polishing, and deformable object handling. Precise control of force and friction is essential, and accurately simulating contact dynamics is one of the hardest challenges in physics simulation. NVIDIA's FORGE framework addresses this with force-guided exploration, while Newton's multi-solver architecture targets contact physics accuracy.

**84. Bimanual Manipulation** — Two-arm coordinated tasks such as folding, assembly, and cooking. Doubles the action space and introduces self-collision risk. RDT-1B (1.2B parameters), trained on 46 datasets with 1M+ trajectories, is the largest bimanual foundation model.

**85. Deformable Object Manipulation** — Handling objects that change shape: cloth, food, cables. Effectively infinite DOF makes state representation and simulation extremely difficult. Graph-based modeling — representing cloth as node meshes and rope as linked graphs — is promising, though stronger physics-based reasoning is needed [1]. pi0's laundry folding and Gemini's origami are representative benchmarks.

**86. MPC (Model Predictive Control)** — A control technique that "solves an optimization problem over a prediction horizon at each timestep to generate an optimal trajectory" [9] and executes only the first action. Explicitly incorporates system dynamics and constraints, making it strong for locomotion and balance but computationally heavy and weak for contact-rich manipulation. Increasingly combined with RL or replaced by learned policies.

**87. Impedance Control** — Making the robot behave like a spring-damper system, responding compliantly to external forces. Ensures safety during assembly or human contact. Splits into "passive compliance" (using physical springs) and "active compliance" (software-controlled). Future foundation models are expected to "integrate dynamics-consistent trajectories with compliance for safe physical interaction" [1].

**88. Inverse Kinematics (IK)** — Computing the joint angles needed to place an end effector at a desired position and orientation. The foundation of teleoperation and motion planning. Neural IK solvers are accelerating computation for high-DOF robots.

**89. Motion Planning** — Computing collision-free trajectories from start to goal. Classical methods (RRT, PRM) exist, but learned policies are implicitly replacing them. MoveIt is the standard framework in the ROS ecosystem. Explicit planning remains necessary for safety-critical scenarios.

**90. Spatial Intelligence** — An AI's ability to understand and reason about 3D physical space. This includes perceiving positions, spatial relationships, distances, orientations, and scene geometry — requiring true 3D understanding beyond 2D image recognition. Fei-Fei Li's World Labs (2024) was founded as a venture dedicated to this field. It serves as the bridge between "seeing (2D)" and "acting (3D)" — a robot that cannot understand spatial relationships cannot manipulate objects.

**91. 3D Gaussian Splatting (3DGS)** — Representing scenes as semi-transparent 3D Gaussian ellipsoids. Enables real-time rendering at 100+ FPS, far surpassing NeRF, and is rapidly gaining traction in robot scene understanding, world models, and SLAM. Integrated into Isaac Sim 5.0 via NuRec (neural reconstruction). Called "the JPEG moment for spatial computing."

**92. NeRF (Neural Radiance Fields)** — Implicitly encoding 3D scenes in neural networks. A precursor to 3DGS, synthesizing novel viewpoints from sparse 2D images. Still used for large-scale urban mapping (Block-NeRF) but losing ground to 3DGS in real-time applications.

**93. Point Cloud** — A set of 3D points captured by depth cameras or LiDAR. Provides spatial information absent from 2D images, used for grasping and collision avoidance. Research combining point clouds with deep learning for precision grasping is highly active [7]. Processed via PointNet and point cloud transformers.

**94. SLAM** — Building a map of an unknown environment while simultaneously tracking the robot's location within it. Visual-inertial fusion improves robustness, and loop closure — recognizing previously visited locations — corrects accumulated drift [10]. The foundation of autonomous mobile robot navigation. In 2025, 3DGS-based Neural SLAM emerged.

**95. Object Pose Estimation** — Determining the 3D position and orientation (6-DOF) of objects from sensor data. A prerequisite for precise grasping, assembly, and placement. Foundation model features (e.g., DINOv2) are enabling zero-shot estimation.

**96. DINOv2 / SigLIP** — DINOv2: a self-supervised ViT with strong spatial understanding and depth estimation. SigLIP: an encoder aligning visual-language representations. Combining DINOv2's spatial precision with SigLIP's semantic understanding is the standard VLA visual backbone configuration.

**97. ViT (Vision Transformer)** — Divides images into patches and processes them with a Transformer. How robots "see." Pre-trained variants (DINOv2, SigLIP) serve as VLA visual backbones.

**98. Edge Computing** — Processing AI on the robot itself rather than in the cloud. NVIDIA Jetson Thor (Blackwell GPU, 2,070 FP4 TFLOPS, 128GB memory, $3,499, Aug 2025) is representative. Essential for implementing instant reflexes without communication latency. Over 2M developers across Agility, Boston Dynamics, Figure AI, Amazon, and Meta use NVIDIA's robot stack.

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
