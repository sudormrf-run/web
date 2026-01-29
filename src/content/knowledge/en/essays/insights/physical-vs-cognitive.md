---
title: Physical vs Cognitive Intelligence
description: The fundamental differences between physical and cognitive intelligence
tags: [physical-intelligence, cognitive-intelligence, philosophy, moravec-paradox]
category: essays
related:
  - ../fundamentals/what-is-rfm-vla.md
  - tactile-sensing.md
  - vla-rfm-progress.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-30
---

# The Journey Toward Physical Intelligence

The AGI and ASI race, starting with LLMs, is a journey to implement human-level or superhuman intelligence. As of 2026, this seems achievable in the near future. However, this intelligence appears to be limited to cognitive intelligence—coding, math, reasoning, research, literature...

> I believe the journey to solve Physical Intelligence is a problem of an entirely different dimension.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/UUOo8N9_iH0" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

*Robots failing to open doors at DARPA Robotics Challenge (IEEE Spectrum, 2015)*

---
## Moravec's Paradox

In the 1980s, roboticist Hans Moravec discovered a paradox.

> **"High-level reasoning requires relatively little computation, but low-level sensorimotor skills require enormous computational resources."**

AI that could beat chess champions was created in 1997, but taking keys out of a pocket still doesn't work well.

| What we call intelligence | What we don't call intelligence |
| ------------------------- | ------------------------------- |
| World chess champion | Taking keys out of pocket |
| Go master | Washing dishes |
| Writing complex equations | Grabbing fruit |
| High-level reasoning | Walking up stairs |

We don't usually call these physical, natural actions "intelligence," but when you think about it carefully, they're extremely difficult tasks.


## 0.7 Seconds to Grab a Fruit


Prof. Sangbae Kim, Professor of Mechanical Engineering at MIT and Director of the Biomimetic Robotics Lab, shares a fascinating experiment in his TEDxMIT talk. He filmed his hand grabbing a fruit (a pear) with a camera—the entire process took only about 0.7 seconds.

When analyzed in slow motion, **5-6 decision points** occurred during that brief moment:

1. Initial attempt to grab the pear
2. Failed to grasp it
3. While failing, the hand touched 5 different pears
4. Selected one of them (surprisingly, the one at the bottom)
5. Successfully grabbed it

He had no conscious memory of any of this. He wasn't even looking at the pear, didn't plan his finger joint trajectories. It all happened completely unconsciously, automatically.

---

## What Your Tongue Does

Prof. Kim provides another example.

> "Everybody ate something during lunch? Have you ever thought about the eating process?"

Our tongue performs the following during a meal:

- Pushes food between the teeth
- Teeth crush food into smaller pieces
- Judges the size of pieces ("too big, need to chew more")
- Sends sufficiently small pieces to the back of the throat
- If a foreign object like paper is found, pushes it to the lips to spit out
- **Does all of this while having a conversation with friends**

We also use our tongue for speaking. The tongue simultaneously performs two completely different tasks—food processing and speech—unconsciously.


<iframe width="100%" height="400" src="https://www.youtube.com/embed/SPAX0A2cjec" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

*Prof. Sangbae Kim's TEDxMIT talk "Robots with Physical Intelligence"*

---

## Why Does This Paradox Occur?

### The Evolutionary Explanation

| Capability | Time spent evolving |
| ---------- | ------------------- |
| Motor, sensory, perception | ~1 billion years |
| Abstract thinking, math | ~millions of years |
| Chess, Go | ~thousands of years |

Life forms evolved **'moving, eating, surviving'** physical intelligence first over hundreds of millions of years after the Cambrian explosion.
Advanced reasoning and language abilities are like 'latest apps' added only very recently in human history.
Therefore, walking or grabbing a cup feels 'unconscious (easy)' to us, while solving differential equations feels 'conscious (difficult)'.

> **Animal example:** When a squirrel jumps between swaying branches, the squirrel doesn't calculate Newtonian mechanics. The body itself understands and responds to physics. This is highly developed PI.

Meanwhile, AI learned cognitive intelligence (CI) first—chess, Go, language, coding—things humans consider 'difficult'.

### The Dimension and Speed Explanation

To an LLM, "an apple is red" is just text. But to PI, an apple has weight, a smooth surface, and crushes when squeezed hard. The essence is the ability to connect abstract concepts to physical reality.
We described an apple in a few words, but in reality, just as we can distinguish an orange from an apple by touch, just as we can tell a Korean apple from a Western apple by biting into it, there's countless information that's obvious to humans but cannot be expressed in language.

The world of text is highly abstracted, so compared to physical information like vision and touch, it's a very low-dimensional and efficient world. It's efficient for difficult thinking and learning, but a lot of information is omitted.

This is called Reporting Bias—obvious information that doesn't exist in the text world.

Real-time interaction is required for physical actions like maintaining balance or adjusting force. Tasks like grabbing a plastic bag without knowing what's inside require very fast feedback and interaction at the millisecond level, but current smart frontier LLMs can't operate this fast.

This aligns with why recent VLAs are adopting hierarchical structures for fast response times. For details, see the convergent evolution section in [VLA & RFM Progress](vla-rfm-progress).

---

## Differences in Human and AI Learning Methods

LLMs also have the Jagged Intelligence problem. They're surprisingly good at things like math and coding, but can't do things that are obvious to humans, like counting how many r's are in "strawberry."
Notably, since continual learning doesn't work, the learning process and memory aspects are very different.

The same applies to physical intelligence. How do people learn to play soccer well, slice onions well, or play piano well?
They watch others perform, try it themselves, have a coach physically guide their body during exercise, and do mental training (imagination). Physical performance skills are best learned through direct experience and self-feedback.

Current VLAs mostly learn based on Imitation Learning. They learn from behavioral data someone has recorded. This is very different from humans who learn through experience. Current reinforcement learning techniques are limited to specific movements (mostly locomotion). Research that emerged in this context is [Physical Intelligence](../../companies/physical-intelligence)'s [π*0.6](../../models/pi0-6-star). It still seems to be at the research stage.

---

## So, Is the Conclusion That It's Impossible?


> It seems like it should be possible.

- Many parts of human labor can be done without tactile sensing.
- We can add sensors that humans don't have, like cameras on palms or backs of hands, or depth cameras.
- Robots can perform movements impossible for human bodies.
- We can create tools specifically for robots.

I think Tesla's FSD and Nvidia's autonomous driving have demonstrated this well. They implemented driving in a different form than humans. You can drive without hands, without feet—because there's no constraint of the human body.

I don't know exactly how it will be implemented. Physical intelligence is a difficult problem different from cognitive intelligence, but humanity, having learned so much through LLMs, seems likely to find the answer soon.


---
## See Also

- [What are RFM & VLA](../fundamentals/what-is-rfm-vla)
- [VLA & RFM Progress](vla-rfm-progress)
- [The Need for Tactile Sensing](tactile-sensing)
- [Humanoid Design](humanoid-design)

## References

- [TEDxMIT: Robots with Physical Intelligence | Sangbae Kim](https://www.youtube.com/watch?v=SPAX0A2cjec)
- [Robots vs. Door at DARPA Robotics Challenge | IEEE Spectrum](https://www.youtube.com/watch?v=UUOo8N9_iH0)
- [MIT Biomimetic Robotics Lab](https://meche.mit.edu/people/faculty/SANGBAE@MIT.EDU)
- [Moravec's Paradox - Wikipedia](https://en.wikipedia.org/wiki/Moravec's_paradox)
- [MIT News: Taking a leap in bioinspired robotics](https://news.mit.edu/2016/faculty-profile-sangbae-kim-1216)
