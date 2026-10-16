---
title: "Meta Muse Spark Open Explained: License, Hardware Needs, Benchmarks, and Who Can Run It"
description: "Meta released the weights for its 816-billion-parameter Muse Spark model on October 15. Here's what the license allows, how much hardware you actually need (including Macs), and how it stacks up against other open models."
pubDate: 2026-10-16
tags: ["AI Trends", "Meta", "Open Source AI", "Local AI"]
mainKeyword: "Muse Spark Open"
draft: false
---

**TL;DR:** On October 15, 2026, Meta released the weights of Muse Spark Open, which it calls the open-weights version of its Muse Spark model. It's a mixture-of-experts model with about 816 billion total parameters (roughly 42 billion active per token) and a 1-million-token context window, and it accepts text, images, video, and audio as input. The weights are free to download under Meta's own Muse Model License, which allows commercial use and fine-tuning but requires attribution and asks very large AI-service providers to sign a separate agreement. "Runs on a Mac" is technically true, but Meta's own guidance is about 1 TB of combined memory across two or four Mac Studios, so this isn't a model for a normal laptop. Meta calls it the most capable open-weight model from a U.S. company; on the model card's own comparison table it trails some Chinese open models on several tests. All benchmark figures are vendor-reported.

## A Quick Note on How This Was Put Together

This is a research roundup, not a hands-on test; we haven't run the model. The specs, license, and benchmark figures come from Meta's launch post and the Hugging Face model card, with additional context from TechCrunch, Trending Topics, and Digital Applied. Several details, such as hosted-API pricing and a few memory figures, come from a single secondary source or conflict between sources, and we've flagged those where they appear. This post is about the model, not the Muse personal agent app we covered in our [Meta Muse explainer](/trends/meta-muse-ai-agent-explained/), though they share the Muse name.

## What Meta Released

Muse Spark Open is a sparse mixture-of-experts model: about 816 billion parameters in total, with roughly 42 billion active for each token it generates (Hugging Face's metadata lists a slightly different total, around 822 billion). Meta says it supports a 1-million-token context window and takes text, image, video, and audio input, but it only produces text output. The model card lists training data in more than 100 languages and four reasoning-effort settings (low, medium, high, and xhigh, with xhigh as the default).

Meta published BF16 and NVFP4 versions of the weights on Hugging Face, along with smaller quantized versions from AMD, Intel, and Unsloth. TechCrunch reported that Meta paired the launch with Muse Code, a coding tool, though Meta's own launch post doesn't mention it.

## The License: Open Weights With Conditions

Meta uses its own Muse Model License rather than a standard open-source license. According to the model card:

- **Allowed:** using, modifying, fine-tuning, distilling, merging, and redistributing the model, including for commercial purposes. Meta claims no ownership of what the model outputs.
- **Attribution:** products, documentation, or settings must prominently display "Built with Muse Spark Open," and this extends to fine-tuned or distilled derivatives.
- **A revenue threshold for AI services:** if you offer third parties API-style access to the model and your aggregate gross revenue passes $20 million in any 12-month period, you must notify Meta and sign a separate written agreement first. Internal use, research, and building the model into your own product are excluded, and the license has no monthly-active-user threshold.
- **Usage policy:** it bans things like illegal activity, malware, weapons, harassment, impersonation, and circumventing safety measures, and the model isn't intended for people under 18.

For most developers and startups this is unlikely to be a practical obstacle. For large cloud and AI-service companies that want to resell the model, Meta remains the gatekeeper. Because of the added conditions, whether you call this "open source" or "open weights" depends on your definition. We're not lawyers, so read the license text itself before building a product on it.

## How Much Hardware Do You Actually Need?

Early coverage said the model needs at least 1 TB of memory and runs best on Apple's Mac Studio with the M5 Ultra chip. Meta's guidance is more specific:

| Setup | What Meta or the model card says |
|---|---|
| Full precision (BF16) | About 1.6 TB of weights; the model card asks for at least 2 TB of GPU memory |
| NVFP4 on GPUs | About 530 GB of weights; the model card asks for at least 700 GB of GPU memory; Meta cites four Blackwell Ultra GPUs or eight H200s |
| NVFP4 on Macs | Via MLX across two M5 Ultra Mac Studios with 512 GB each, or four with 256 GB each (about 1 TB in total), linked by Thunderbolt 5 |
| Smallest 2-bit build (Unsloth) | Meta's post gives about 300 GB in text and 256 GB in its table; the two don't match |

Two cautions. First, the weights are only part of the memory story: one third-party writeup estimates the cache for the full 1-million-token context adds roughly 266 GB on top of the weights, so sizing hardware for the weights alone won't get you the advertised context length. Second, aggressively compressed builds trade quality for memory, and neither Meta nor the writeups we read quantify that loss. The same writeup cites a Hugging Face test of a 2-bit build running on a single 512 GB Mac at roughly 18 tokens per second; we haven't verified that. For comparison, the Microsoft laptop in our [Surface Laptop Ultra explainer](/trends/surface-laptop-ultra-explained/) tops out at 128 GB of shared memory, so local use of this model remains workstation-cluster territory.

## Benchmarks: Strong in Places, Behind in Others

Meta's launch post doesn't include benchmark comparisons. The Hugging Face model card does, with Muse Spark Open run at its highest reasoning setting. A selection, as listed on the model card:

| Benchmark | Muse Spark Open | Comparison (as listed) |
|---|---|---|
| MCP-Atlas (tool use) | 89.2 | Qwen3.8: 84.5, GLM 5.3: 84.2, Kimi K3: 82.3 |
| Terminal-Bench 2.1 | 76.4 | Kimi K3: 85.0, GLM 5.3: 83.9, Qwen3.8: 82.0 |
| DeepSWE 1.1 (software engineering) | 60 | Kimi K3: 68, GLM 5.3: 67, Mistral Large 4: 62, Qwen3.8: 57 |
| OSWorld Verified (computer use) | 80.4 | Kimi K3: 84.8 |
| HLE with tools | 61.0 | GLM 5.3: 62.5, Qwen3.8: 56.2, Kimi K3: 56.0 |
| GPQA Diamond | 89.0 | Qwen3.8: 93.5, Kimi K3: 93.5, GLM 5.3: 91.7 |
| Artificial Analysis Intelligence Index | 39 | GLM 5.3: 45, Kimi K3: 44, Qwen3.8: 40, Mistral Large 4: 38 |

The honest reading is that Muse Spark Open does well on tool use and multimodal tasks, but "most capable U.S. open-weight model" is a narrower claim than "most capable open model," since Chinese models like GLM 5.3 and Kimi K3 score higher on several of these tests. The figures come from Meta's model card, we couldn't confirm who ran each comparison number, and no independent testing of the released weights had appeared in the coverage we reviewed. Wait for third-party evaluations before treating any of this as settled. Mistral Large 4 appears in the model card's comparison table, so its own release is the next one worth comparing against.

## Safety Claims, and the Open-Weights Catch

Meta reports that the model refused 99.2% of cyber jailbreak attempts on its internal benchmark and over 98% of harmful chemistry and biology requests on single-turn tests. Those results are vendor-reported and, per the model card, apply only to the released checkpoint, and Meta recommends adding extra guardrails when deploying. That caveat matters more for open weights than for a hosted model: because the license allows fine-tuning, anyone who modifies the weights is no longer running the tested version.

## Where You Can Use It Without the Hardware

- **Hosted APIs:** Baseten, Fireworks AI, Groq (limited preview), Modal, Nebius, OpenRouter, and Together AI, according to Meta.
- **Cloud catalogs:** Amazon SageMaker AI, Google Cloud Model Garden, and Microsoft Foundry Models.
- **Pricing:** Meta doesn't publish a price. One third-party writeup captured an OpenRouter route on October 16 at $1.25 per million input tokens, $4.25 per million output tokens, and $0.15 per million cached input tokens, but route prices change without notice and other hosts may differ. Check the provider's page before budgeting, and see our [LLM API cost calculator](/tools/llm-api-cost-calculator/) for how to model costs once you have a price.

## Who Should Actually Care About This

**If you build products and want control over your model,** this is a serious open-weights option with a permissive-enough license, as long as you can either rent GPUs or use a hosted provider. Test it on your own tasks rather than the leaderboard.

**If you want to run models privately at home,** be realistic: you'd need around 1 TB of unified memory across several high-end Macs for the standard build, or a heavily compressed build with unverified quality. The hosted route is more practical for most people.

**If you just use AI apps,** nothing changes today. This is a release for developers and infrastructure teams.

## FAQ

**When was Muse Spark Open released?**
October 15, 2026, with weights on Hugging Face and hosted access through several providers.

**Is Muse Spark Open free?**
The weights are free to download under the Muse Model License, but running it takes expensive hardware or paid hosting. Meta doesn't publish its own API price.

**Is it open source?**
It's open-weights under a custom license with conditions: attribution, a usage policy, and a separate agreement for large AI-service providers. Whether that counts as open source depends on your definition.

**Can I run it on a Mac?**
Meta describes running the NVFP4 build across two Mac Studios with M5 Ultra chips and 512 GB each, or four with 256 GB each, connected by Thunderbolt 5. A single normal Mac can't run the standard build.

**How does it compare with GPT-6 Astra or Claude Opus 5.5?**
Meta's materials don't compare it with those closed models. On the model card, it is compared with other open models, where it leads on some tests and trails on others. See our [GPT-6 Astra explainer](/trends/gpt-6-astra-explained/) for how the closed flagships are priced.

**Does it generate images or audio?**
No. It accepts image, video, and audio input but produces text output only.

## Final Thoughts

Muse Spark Open is a meaningful release mostly because it puts a very large, long-context, multimodal model into developers' hands under terms most can live with. It's less a model you'll run yourself than one you'll reach through a hosted provider, and its benchmark position is mixed against the best open models from China. The useful next steps are independent evaluations, real hosted pricing, and seeing how the license holds up in practice.

Sources: [Meta: Build with Muse Spark Open](https://dev.meta.ai/resources/blog/build-with-muse-spark-open), [Hugging Face model card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B), [TechCrunch](https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/), [Trending Topics](https://www.trendingtopics.eu/muse-spark-open-meta-open-weight-license/), [Digital Applied](https://www.digitalapplied.com/blog/meta-muse-spark-open-open-weights-licence-hardware)
