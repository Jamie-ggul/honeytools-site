---
title: "Mistral Large 4 Open Weights Explained: License, Hardware, API Price, and Who Should Self-Host"
description: "Mistral released the weights for Mistral Large 4 ('Le Chonk'), a 1-trillion-parameter model, on October 29. Here's what the modified MIT license allows, how much GPU memory it needs, what it costs to rent versus use the API, and how it compares with Muse Spark Open."
pubDate: 2026-11-15
tags: ["AI Trends", "Mistral", "Open Source AI", "Local AI"]
mainKeyword: "Mistral Large 4"
draft: false
---

**TL;DR:** On October 29, 2026, Mistral released the weights of Mistral Large 4, nicknamed "Le Chonk," three weeks after it went into public preview. It's a natively multimodal mixture-of-experts model with about 1 trillion total parameters and roughly 52 billion active per token. The weights are on Hugging Face under the Mistral Ecosystem Open-Weight License, a modified MIT license that lets you use, fine-tune, and commercialize the model, with one catch: companies running a Model-as-a-Service business need a separate commercial license. Running it yourself takes a multi-GPU server (8 GPUs for the FP8 checkpoint, or 4 Blackwell GPUs for the 4-bit one). For most people the API, at $0.70 per million input tokens and $2.10 per million output tokens, is far cheaper than renting the hardware.

## A Quick Note on How This Was Put Together

This is a research explainer, not a hands-on test. We haven't downloaded or run the model. Facts come from [Mistral's release post](https://mistral.ai/news/mistral-large-4-oss/), the [vLLM team's day-0 support post](https://vllm.ai/blog/mistral-large-4), and NVIDIA's [model page](https://build.nvidia.com/mistralai/mistral-large-4-1t-a52b), checked November 15, 2026. Model-card details (active parameters, checkpoint sizes) are as reported by coverage of the Hugging Face repository, which we couldn't open directly. Benchmark numbers are Mistral's own and haven't been independently reproduced.

## What Mistral Released

Mistral Large 4 first appeared on October 6 as an API-only preview, with a promise of open weights by the end of the month. On October 29, Mistral released the weights of what it calls an "improved" version, after three more weeks of reinforcement learning. So the model you can download today is not identical to the one people tried in preview.

| Item | Detail |
|---|---|
| Size | About 1 trillion total parameters; about 52 billion active per token (49 billion excluding embeddings and output layers, per the model card as reported) |
| Type | Mixture-of-experts, natively multimodal (text and image input) |
| Checkpoints | FP8 (about 1.06 TB) and a separate NVFP4 version (about 610 GB), per reports on the Hugging Face repos |
| Reasoning modes | Low, Medium, and High (default), per Mistral |
| Where to get it | Hugging Face: `mistralai/Mistral-Large-4-1T-A52B` (ungated) |
| Hosted access | Mistral Studio and API (`mistral-large-4`), OpenRouter, NVIDIA-hosted endpoints, and Microsoft Foundry, per Mistral |

## The License: "Modified MIT," With One Condition

Mistral calls the Mistral Ecosystem Open-Weight License a modified version of the MIT license, and the grant is broad: you can use, copy, modify, fine-tune, and sell products built on the model. The one condition, per Mistral's post, is that businesses operating a Model-as-a-Service offering need a separate commercial license before using it commercially. In plain terms:

- **Running it inside your own company or product:** allowed under the license, per Mistral's summary.
- **Selling hosted inference access to the model to other people (being an API provider):** needs a commercial agreement with Mistral.

Two things worth knowing. First, that condition means it isn't "open source" by the Open Source Initiative's definition, even though the weights are free to download, which is a change from Mistral Large 3's Apache 2.0 license. Second, the info panel on Mistral's own release page listed "Apache 2.0" when we checked, which conflicts with the post itself, so treat the LICENSE file in the Hugging Face repo as the authoritative text. If you're building a business on it, read that file in full rather than relying on summaries, including this one.

## How Much Hardware Do You Need?

All of the experts have to sit in GPU memory even though only a fraction run for each token, so this is a server-class model. The vLLM team's [launch post](https://vllm.ai/blog/mistral-large-4) gives two official setups:

- **FP8 on 8 GPUs** (tensor parallel 8). The FP8 weights are about 1,061 GB, or roughly 133 GB per GPU before any room for the context cache, so this realistically means 141 GB H200s or larger, and even eight H200s (1,128 GB) leave little headroom.
- **NVFP4 on 4 Blackwell GPUs** (or 8 GPUs with tensor parallel 8). The 4-bit checkpoint is about 610 GB, which fits on four 180 GB B200s (720 GB).

Here's what those setups would cost to rent on Runpod at its listed on-demand prices (checked November 15, 2026; our arithmetic):

| Setup | GPU memory | Approx. cost per hour |
|---|---|---|
| 4 × B200, NVFP4 checkpoint | 720 GB | $31.96 |
| 8 × H200, FP8 checkpoint (tight fit) | 1,128 GB | $42.32 |
| 8 × B200, FP8 checkpoint | 1,440 GB | $63.92 |

Storage for the weights and the time to download 610 GB to 1 TB come on top of that. Our guide to [renting a GPU to run a giant open model](/guides/rent-gpu-to-run-open-models/) walks through those hidden costs, and our [Runpod pricing guide](/guides/runpod-pricing-explained-2026/) covers billing and storage in detail.

## API vs. Self-Hosting: The Break-Even Math

Mistral lists API pricing for `mistral-large-4` at $0.70 per million input tokens, $0.07 for cached input, and $2.10 per million output tokens. Assume four input tokens for every output token: the blended price is (4 × $0.70 + $2.10) ÷ 5 = $0.98 per million tokens.

Divide the cheapest rental above ($31.96 an hour for four B200s) by $0.98 and you get about 32.6 million tokens an hour, or roughly 9,000 tokens per second, sustained for every hour you pay for. Unless your workload can keep a rented server that busy around the clock, the API is cheaper. For comparison, the same math for Muse Spark Open came out around 23 million tokens an hour, because its hosted price is higher. You can plug in your own token mix with our [LLM API cost calculator](/tools/llm-api-cost-calculator/).

That doesn't make the weights pointless. Self-hosting makes sense when data can't leave your infrastructure, when you want to fine-tune the model on private data, or when you need a fixed model version that won't change under you.

## Benchmarks: What Mistral Claims

Mistral positions Large 4 as the best open-weight model for coding. Its reported numbers include:

- **Terminal-Bench 4.0:** 41%, up 13 points from the preview's 28%, with 30% fewer output tokens.
- **Artificial Analysis Coding Agent Index:** 48%, which Mistral calls "effectively tied" with GLM-5.3 while using 47% fewer tokens per task on average.
- **FrontierCode 2.0:** 19.7%, which Mistral describes as the lead among open models.
- **Safety:** 96.6% refusal of malicious cyber requests and 97.1% on an agent-security benchmark, both of which Mistral says are the highest it measured among open models.

These are vendor-reported, and on several charts other open models (Kimi K3, for example, on BrowseComp and a finance benchmark) still score higher. As with any launch, wait for independent evaluations before treating the rankings as settled.

## How It Compares With Muse Spark Open

Meta's [Muse Spark Open](/trends/muse-spark-open-explained/), released two weeks earlier, is the obvious point of comparison:

| | Mistral Large 4 | Muse Spark Open |
|---|---|---|
| Released (weights) | October 29, 2026 | October 15, 2026 |
| Total / active parameters | ~1T / ~52B | ~816B / ~42B |
| License | Modified MIT; MaaS businesses need a commercial license | Muse Model License: "Built with Muse Spark Open" attribution; API-style services over $20M revenue need an agreement |
| Smallest official setup | ~610 GB (NVFP4) on 4 Blackwell GPUs | At least 700 GB in NVFP4, per Meta |
| Hosted price (input / output per 1M) | $0.70 / $2.10 (Mistral API) | One reported OpenRouter price of $1.25 / $4.25 |

On paper, Mistral Large 4 is cheaper to call through an API and slightly easier to fit on rented hardware. Which one is better for your tasks is something only your own testing will tell you.

## Who Should Care

- **Developers using it through an API:** the price is low for a frontier-class open model, and it's also available on OpenRouter and Microsoft Foundry if you'd rather not sign up with Mistral directly.
- **Companies with strict data rules:** this is one of the most capable models you can run entirely on your own servers, as long as you aren't reselling it as a service.
- **Hobbyists with a single GPU:** this one isn't for you. Even the 4-bit version needs around 610 GB of GPU memory.
- **Hosting providers:** read the license carefully; this is exactly the use case that needs a separate agreement.

## FAQ

**When were the Mistral Large 4 weights released?**
On October 29, 2026, after a public preview that started October 6.

**Is Mistral Large 4 open source?**
The weights are free to download, but the license adds a condition for Model-as-a-Service businesses, so it isn't open source by the OSI definition. "Open weight" is the more accurate term.

**Can I use Mistral Large 4 commercially?**
Yes, according to Mistral's summary of the license, unless you operate a Model-as-a-Service business, in which case you need a separate commercial license. Check the LICENSE file for the exact terms.

**How much GPU memory does Mistral Large 4 need?**
About 1.06 TB for the FP8 weights (vLLM's example uses 8 GPUs) or about 610 GB for the NVFP4 version (4 Blackwell GPUs), plus room for the context cache.

**How much does the Mistral Large 4 API cost?**
$0.70 per million input tokens, $0.07 per million cached input tokens, and $2.10 per million output tokens on Mistral's API.

**Can I run Mistral Large 4 on a Mac or a gaming PC?**
Not realistically. Even the smallest official checkpoint is around 610 GB.

## Final Thoughts

Mistral Large 4 is a real open-weight release, not a paper one: the weights are ungated, the license is short and mostly permissive, and serving recipes were ready on day one. The practical takeaway is the same as for every model this size, though. Unless you need data control or fine-tuning, the API at under a dollar per million blended tokens is the sensible way to use it, and the downloadable weights are an option you can keep for when you need it.

Sources: [Mistral release post](https://mistral.ai/news/mistral-large-4-oss/), [vLLM day-0 support post](https://vllm.ai/blog/mistral-large-4), [NVIDIA model page](https://build.nvidia.com/mistralai/mistral-large-4-1t-a52b), [Runpod pricing](https://www.runpod.io/pricing), [Let's Data Science on the license](https://letsdatascience.com/blog/mistral-large-4-weights-out-resellers-need-license)
