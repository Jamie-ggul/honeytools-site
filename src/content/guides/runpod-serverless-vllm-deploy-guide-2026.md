---
title: "How to Deploy an Open LLM on Runpod Serverless with vLLM (2026 Guide)"
description: "A step-by-step research guide to serving an open-source model through Runpod Serverless and its official vLLM worker: the Hub deploy flow, the settings that matter, the OpenAI-compatible API, and what it costs while it runs."
pubDate: 2026-11-16
tags: ["GPU Rental", "Runpod", "vLLM", "Open Source AI", "How-To"]
affiliate: true
draft: false
---

**TL;DR:** Runpod's official vLLM worker lets you put an open-source model from Hugging Face behind an API without managing a server. You deploy it from the Runpod Hub, type in the model name, set a maximum context length, and click **Create Endpoint**. Runpod then gives you an endpoint ID and an OpenAI-compatible base URL (`https://api.runpod.ai/v2/<ENDPOINT_ID>/openai/v1`), so existing OpenAI client code works after you swap the API key, base URL, and model name. You pay only while workers run, including cold starts and a short idle window after each request. On Runpod's pricing page as of November 16, 2026, a 24 GB Serverless GPU is listed at $0.75 an hour and an RTX 4090 at $1.34 an hour. The settings that most affect your bill are **Max Workers**, **Active Workers**, and **Idle Timeout**.

## A Quick Note on How This Was Put Together

This is a research guide, not a hands-on test. We haven't run a production workload on Runpod Serverless. Everything below comes from Runpod's own documentation, its vLLM worker repository on GitHub, and its pricing page, all checked on **November 16, 2026**:

- [worker-vllm on GitHub](https://github.com/runpod-workers/worker-vllm) (environment variables, API routes)
- [Run vLLM on Runpod Serverless](https://www.runpod.io/blog/run-vllm-on-runpod-serverless) (Runpod's deploy walkthrough, "Updated October 21, 2026")
- [Endpoint settings](https://docs.runpod.io/serverless/endpoints/endpoint-configurations) (defaults for workers, timeouts, FlashBoot)
- [Send requests](https://docs.runpod.io/serverless/endpoints/send-requests) (`/run`, `/runsync`, rate limits)
- [Serverless overview](https://docs.runpod.io/serverless/overview) (billing and cold starts)
- [Runpod pricing](https://www.runpod.io/pricing) (page said "Updated November 12, 2026")

Runpod changes its console and prices often, so treat button names and numbers as a snapshot. Cost examples are our own arithmetic and are labeled as estimates.

**About the link in this guide:** the Runpod link near the end is a referral link. Runpod may give us credit or a commission if you sign up and spend through it, under the terms on its [referral program page](https://www.runpod.io/referral-program). It doesn't change what you pay.

## Who This Is For (and Who Should Skip It)

Runpod Serverless with vLLM makes sense when you want **your own copy of an open model behind an API**: a fine-tuned model, a model a hosted API doesn't offer, or a setup where you control which model version runs. Traffic that comes in bursts suits it well, because workers scale down to zero between requests.

It's probably not the right first step if:

- **You just want to call a popular model.** Hosted APIs are often cheaper and simpler. Check the numbers in our [LLM API cost calculator](/tools/llm-api-cost-calculator/) before you host anything.
- **You want to experiment interactively** (notebooks, trying prompts, fine-tuning). A regular GPU Pod is easier for that. Our [Runpod pricing guide](/guides/runpod-pricing-explained-2026/) explains when a Pod beats Serverless on cost.
- **You want to run a giant model** that needs several 80 GB GPUs. That's a different cost picture, covered in our guide to [renting a GPU to run a giant open model](/guides/rent-gpu-to-run-open-models/).

## What You Need Before You Start

According to Runpod's walkthrough, you need:

1. **A Runpod account with credits.** Serverless is paid from your prepaid balance.
2. **A Hugging Face access token** if the model is gated (Llama models are a common example). Accept the model's license on Hugging Face first, or the download will fail.
3. **A model that vLLM supports.** The worker serves "any Hugging Face model supported by vLLM," per its README. The README also notes that a model generally needs a chat template for chat requests; if it lacks one, you can supply your own through the `CUSTOM_CHAT_TEMPLATE` variable.
4. **A GPU with enough memory for the model.** This is your decision, not Runpod's. As a rough guide, small models (around 7–8B parameters) are commonly run on 24 GB cards, while larger models need 48 GB, 80 GB, or more. Check the model card for its memory needs.

## Step by Step: Deploying From the Runpod Hub

This is the flow Runpod describes in its own vLLM walkthrough. Labels may differ slightly in your console.

1. **Open the vLLM worker in the Runpod Hub.** Runpod's walkthrough links to the worker's Hub page (`console.runpod.io/hub/runpod-workers/worker-vllm`).
2. **Click Deploy** and choose the latest available vLLM worker version.
3. **Enter the model.** In the **Model** field, type the Hugging Face repo ID. Runpod's example is `meta-llama/Llama-3.1-8B-Instruct`.
4. **Add your Hugging Face token** if the model is gated.
5. **Set Max Model Length.** Click **Advanced** to see the vLLM settings and set the maximum context length. Runpod's example uses 8192. A longer context needs more GPU memory, so a smaller number can help a model fit on a cheaper GPU.
6. **Leave the rest at defaults** unless you have a reason to change them (see the next section).
7. **Click Create Endpoint**, and add credits if prompted.

The endpoint then initializes. Runpod says this "can take a few minutes" while the model downloads. When it's ready, note the **Endpoint ID** on the endpoint's page; every API call uses it. The **Requests** tab has a **Run** button that sends a default test request. Runpod warns that the first request is slower while the model loads.

To change settings later, Runpod's walkthrough points to **Manage → Edit Endpoint → Public Environment Variables**.

## The Endpoint Settings That Decide Your Bill

Runpod's [endpoint settings docs](https://docs.runpod.io/serverless/endpoints/endpoint-configurations) list these console defaults:

| Setting | Console default | What it does |
|---|---|---|
| Active workers | 0 | Always-on workers. They remove cold starts but are billed continuously, even when idle |
| Max workers | 3 | Cap on concurrent workers; also works as a spending cap |
| GPUs per worker | 1 | Raise only for models that need several GPUs |
| Idle timeout | 5 seconds | How long a worker stays up (and billed) after its last job |
| Execution timeout | 600 seconds | Maximum time for one job (range: 5 seconds to 7 days) |
| Job TTL | 24 hours | Job data is deleted when this expires |
| FlashBoot | On for new console endpoints | Keeps worker state after spin-down to shorten cold starts |

A few notes from the same page:

- **GPU priority.** You can pick up to three GPU types in priority order as fallbacks. With fewer than five workers, all of them use the highest-priority GPU that's available.
- **Max workers sizing.** Runpod suggests setting max workers about 20% above your expected peak concurrency.
- **Auto-scaling.** The default "queue delay" scaler adds workers when requests wait longer than 4 seconds. A "request count" scaler is also available.
- **Cached models.** In the **Model** setting, you can select a cached model so workers start on machines that already have the model files, which the docs say "significantly reduces model loading time during initialization."

**The practical takeaway (our reading):** if you leave Active workers at 0, you pay nothing while nobody is using the endpoint, but the first request after a quiet period waits for a cold start. Setting Active workers to 1 removes that wait and turns the endpoint into an always-on bill.

## The vLLM Settings Worth Knowing

The worker is configured through environment variables. These are the ones the [worker-vllm README](https://github.com/runpod-workers/worker-vllm) lists that most people will touch:

| Variable | Default | Use it for |
|---|---|---|
| `MODEL_NAME` | none | Hugging Face repo ID or local path |
| `HF_TOKEN` | none | Gated or private models |
| `MAX_MODEL_LEN` | none | Maximum context length |
| `QUANTIZATION` | none | Quantized weights, e.g. `awq`, `gptq`, `bitsandbytes` |
| `TENSOR_PARALLEL_SIZE` | 1 | Splitting one model across several GPUs |
| `GPU_MEMORY_UTILIZATION` | 0.9 | Share of GPU memory vLLM may use |
| `MAX_CONCURRENCY` | 30 | Concurrent requests per worker |
| `ENABLE_AUTO_TOOL_CHOICE` / `TOOL_CALL_PARSER` | false / none | Tool (function) calling |

The README also says any `vllm serve` flag can be set as an uppercased environment variable. One inconsistency we noticed: the README banner lists the current vLLM version as 0.32.0, while the build argument default shown elsewhere in the README is older. If the exact vLLM version matters to you, check the worker's release notes before deploying.

## Calling Your Endpoint

### The OpenAI-compatible route (easiest)

Per the README, the base URL is:

```
https://api.runpod.ai/v2/<YOUR_ENDPOINT_ID>/openai/v1
```

You authenticate with your **Runpod API key** as the bearer token. The README says moving existing OpenAI client code over means changing three things: the API key, the `base_url`, and the `model` value. A minimal Python example following that pattern:

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_RUNPOD_API_KEY",
    base_url="https://api.runpod.ai/v2/YOUR_ENDPOINT_ID/openai/v1",
)

response = client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[{"role": "user", "content": "Explain vLLM in one sentence."}],
    max_tokens=200,
)
print(response.choices[0].message.content)
```

The README lists Chat Completions (streaming and non-streaming, recommended), Models, a Responses route, and an Anthropic-style Messages route. Keep your API key out of front-end code.

### Runpod's native routes

Queue-based endpoints also accept jobs at `https://api.runpod.ai/v2/<ENDPOINT_ID>/` using Runpod's own operations, per the [send requests docs](https://docs.runpod.io/serverless/endpoints/send-requests):

- **`/runsync`** waits for the result. Results are kept for 1 minute (5 minutes max).
- **`/run`** queues the job and returns right away; you fetch the result from **`/status`**. Results stay available for 30 minutes after completion.
- **`/stream`**, **`/cancel`**, and **`/health`** cover streaming, cancelling, and endpoint stats.

For the vLLM worker's native input, the README notes one trap: in `sampling_params`, **`max_tokens` defaults to 16**, so set it explicitly or your answers will be cut short. Rate limits are per endpoint; `/run` is listed at 1,000 requests per 10 seconds and `/runsync` at 2,000, with a 429 error above the limit.

## What It Costs While It Runs

Runpod's [Serverless overview](https://docs.runpod.io/serverless/overview) says you "pay only while workers run." A worker is billed during its cold start, while handling requests, and while it waits through the idle timeout. Here is a selection of hourly Serverless prices from the [pricing page](https://www.runpod.io/pricing) as of November 16, 2026:

| GPU class | Memory | Serverless price per hour |
|---|---|---|
| A4000, A4500, RTX 4000, RTX 2000 | 16 GB | $0.58 |
| L4, A5000, 3090 | 24 GB | $0.75 |
| RTX 4090 | 24 GB | $1.34 |
| A6000, A40 | 48 GB | $1.22 |
| L40, L40S, 6000 Ada | 48 GB | $1.89 |
| A100 | 80 GB | $2.99 |
| H100 | 80 GB | $5.89 |

One caution: the endpoint settings docs page shows a per-second GPU table with lower figures than the pricing page (for example, $0.00019 per second for the 24 GB tier, about $0.68 an hour). We've used the pricing page numbers above; check the price shown in your console when you pick a GPU.

**Example estimates (ours, not Runpod's):**

- **Light internal tool:** an 8B model on a 24 GB GPU that's busy (including cold starts and idle tails) for about 2 hours a day ≈ 2 × $0.75 × 30 ≈ **$45 a month**.
- **The always-on mistake:** one Active worker on an RTX 4090 left on for a month ≈ 720 hours × $1.34 ≈ **$965**, whether or not anyone sends a request.

If your endpoint would be busy most of the day, compare against a plain GPU Pod. Our [Runpod pricing guide](/guides/runpod-pricing-explained-2026/) works through that break-even.

## Common Problems to Check First

- **The endpoint never becomes ready.** For gated models, confirm you accepted the license on Hugging Face and added `HF_TOKEN`. Also check that the model fits the GPU's memory at your `MAX_MODEL_LEN`.
- **Out-of-memory errors.** Lower `MAX_MODEL_LEN`, use a quantized version of the model, or choose a GPU with more memory.
- **Chat requests return odd output.** The model may lack a chat template; the README says to provide one with `CUSTOM_CHAT_TEMPLATE`.
- **Very short answers.** Set `max_tokens` yourself (the native default is 16).
- **Slow first response.** That's a cold start. Cached models and FlashBoot help; an Active worker removes it at a continuous cost.

## If You Decide to Try It

You can create a Runpod account through our referral link: <a href="https://runpod.io?ref=l8ji19h4" rel="sponsored noopener">Runpod (referral link)</a>. A cautious first run, based on the docs above:

1. Start with a small model on a 24 GB GPU and keep Active workers at 0.
2. Leave Max workers at the default 3 until you know your traffic.
3. Set `MAX_MODEL_LEN` to what you actually need, not the model's maximum.
4. Send a few test requests, then check the billing page before sharing the endpoint with anyone.
5. Delete the endpoint when you're done. Runpod's docs note that deleting removes its configuration, logs, and job history, so export anything you need first.

## FAQ

**Is Runpod's vLLM endpoint compatible with the OpenAI API?**
Yes, per the worker's README. Use `https://api.runpod.ai/v2/<ENDPOINT_ID>/openai/v1` as the base URL and your Runpod API key.

**Do I pay when nobody is using the endpoint?**
Not with Active workers at 0. Workers scale down after the idle timeout (5 seconds by default in the console). Active workers are billed continuously.

**Are cold starts billed?**
Yes. Runpod's Serverless overview says a worker is billed during its cold start.

**Can I run a model that needs more than one GPU?**
Yes. Raise GPUs per worker and set `TENSOR_PARALLEL_SIZE` to match, and expect the price to scale with the GPUs used.

**Have you deployed this yourselves?**
No. This guide is based on Runpod's documentation, its GitHub repository, and its pricing page, all checked November 16, 2026.

## Final Thoughts

Runpod Serverless plus the official vLLM worker is one of the shorter paths from "a model on Hugging Face" to "an API my app can call." The deploy itself is a few fields in the console. The parts that deserve your attention are the ones that keep running after you close the tab: Active workers, Max workers, and idle time. Start at zero, measure, and only then decide whether an always-on worker or a plain Pod makes more sense.

Sources: [worker-vllm on GitHub](https://github.com/runpod-workers/worker-vllm), [Runpod blog: Run vLLM on Runpod Serverless](https://www.runpod.io/blog/run-vllm-on-runpod-serverless), [Runpod docs: Endpoint settings](https://docs.runpod.io/serverless/endpoints/endpoint-configurations), [Runpod docs: Send requests](https://docs.runpod.io/serverless/endpoints/send-requests), [Runpod docs: Serverless overview](https://docs.runpod.io/serverless/overview), [Runpod docs: Endpoints overview](https://docs.runpod.io/serverless/endpoints/overview), [Runpod pricing](https://www.runpod.io/pricing) — all checked November 16, 2026.
