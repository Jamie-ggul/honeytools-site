---
title: "Runpod Pricing Explained (2026): Pods vs. Serverless, Storage, and the Costs People Miss"
description: "How Runpod actually bills you in 2026: GPU Pod hourly rates, Secure vs. Community Cloud, Serverless per-second billing, storage fees, and the credit rules that can stop a Pod mid-run."
pubDate: 2026-11-15
tags: ["GPU Rental", "Runpod", "Pricing", "AI Hardware"]
affiliate: true
draft: false
---

**TL;DR:** Runpod charges for three separate things: GPU time, storage, and nothing at all for data transfer. GPU Pods are billed by the second at an hourly list price (an RTX 4090 is $0.89 an hour and an H100 SXM is $4.39 an hour on the pricing page as of November 15, 2026). Serverless costs more per hour for the same GPU (the 4090 is listed at $1.34) but scales to zero, so you only pay while a worker is running. Storage is where small bills creep up: a stopped Pod's volume disk costs **twice** as much per GB as a running one. Credits are prepaid and non-refundable, you need at least one hour of credit to start a Pod, and if your balance hits $0, Pods without a network volume are terminated and their data is gone. Most people experimenting should start with one on-demand Pod and a small network volume.

## A Quick Note on How This Was Put Together

This is a research guide, not a hands-on test. Every price and rule below comes from Runpod's [pricing page](https://www.runpod.io/pricing) (which said "Updated November 12, 2026" when we checked) and its documentation on [Pod pricing](https://docs.runpod.io/pods/pricing), [Serverless pricing](https://docs.runpod.io/serverless/pricing), [billing](https://docs.runpod.io/accounts-billing/billing), and [choosing a Pod](https://docs.runpod.io/pods/choose-a-pod), all checked on **November 15, 2026**. GPU prices move often, so treat the numbers as a snapshot and confirm them before you budget. The example calculations are ours and are labeled as estimates.

**About the link in this guide:** the Runpod link near the end is a referral link. Per Runpod's [referral program page](https://www.runpod.io/referral-program), when a new user signs up through a referral link and spends $10, both the new user and the referrer get a random credit between $5 and $500 (credits expire after 90 days), and the referrer earns 3% of the new user's Pod spend and 5% of their Serverless spend for the first six months. It doesn't change what you pay.

If you landed here because you're wondering whether to rent a huge multi-GPU machine for one giant model, our companion piece on [renting a GPU to run a giant open model](/guides/rent-gpu-to-run-open-models/) works through that specific case. This guide is the general version: how Runpod billing works no matter what you run.

## The Three Ways to Pay for GPU Time

**1. GPU Pods (on-demand).** A Pod is a GPU machine you control, like a rented server. You pick a GPU, start it, and pay by the second until you stop it. Per Runpod's docs, on-demand resources are "dedicated to your Pod" and can't be displaced by other users. This is the default for experiments, notebooks, fine-tuning runs, and anything interactive.

**2. Serverless.** You package your model as an endpoint; Runpod starts workers when requests arrive and shuts them down afterward. It's meant for serving a model to an app.

**3. Clusters.** Multi-node setups that the pricing page says scale up to 64 GPUs. Most individual readers won't need these.

One change worth knowing if you read older Runpod guides: **savings plans are deprecated.** Runpod's Pod pricing docs say they're "no longer purchasable," though existing plans stay active until they expire. The pricing page we checked also doesn't list spot pricing. For a self-serve account today, on-demand is the option.

## GPU Pod Prices

Here's a selection from Runpod's pricing page, which lists one on-demand hourly price per GPU (the page's FAQ identifies these as Secure Cloud prices):

| GPU | Memory | Pod price per hour |
|---|---|---|
| RTX A5000 | 24 GB | $0.27 |
| RTX 3090 | 24 GB | $0.50 |
| RTX 4090 | 24 GB | $0.89 |
| RTX 5090 | 32 GB | $1.39 |
| L40S | 48 GB | $1.09 |
| A100 PCIe | 80 GB | $2.09 |
| A100 SXM | 80 GB | $2.19 |
| H100 PCIe | 80 GB | $2.89 |
| H100 SXM | 80 GB | $4.39 |
| H200 | 141 GB | $5.29 |
| B200 | 180 GB | $7.99 |
| B300 | 288 GB | $8.99 |

A few things the table doesn't tell you:

- **Memory decides what you can run, not the GPU name.** A 24 GB card handles many small and mid-size open models; bigger models need 48 GB, 80 GB, or several GPUs. Check the model's own requirements first, then pick the cheapest GPU with enough memory.
- **Per-second billing makes short sessions cheap.** Thirty minutes on an RTX 4090 is about $0.45 by our arithmetic. The flip side is that a Pod you forget about overnight keeps billing.

### Secure Cloud vs. Community Cloud

Runpod has two tiers. Its "Choose a Pod" docs describe **Secure Cloud** as running in "T3/T4 data centers" with "High redundancy," best for "Production, sensitive data." **Community Cloud** runs on "Peer-to-peer providers" with "Variable" reliability, aimed at "Cost-sensitive workloads."

The price gap can be large. The pricing page's FAQ lists Community Cloud rates "from" these amounts:

| GPU | Secure Cloud (pricing table) | Community Cloud ("from") |
|---|---|---|
| H100 SXM | $4.39 | $2.69 |
| H100 PCIe | $2.89 | $1.99 |
| A100 SXM | $2.19 | $1.39 |
| A100 PCIe | $2.09 | $1.19 |
| H200 | $5.29 | $3.59 |

That's roughly 30–45% less on these GPUs, by our arithmetic. Two caveats: these are starting prices, not guaranteed rates, and the same docs page says Runpod "is no longer accepting new hosts for Community Cloud," while existing Community Cloud resources remain available. For anything sensitive or production-facing, Runpod's own docs point you to Secure Cloud.

## Serverless Prices and How Billing Works

Serverless is listed at a higher hourly price for the same GPU class. A few examples from the pricing page:

| GPU | Pod price per hour | Serverless price per hour |
|---|---|---|
| RTX 4090 | $0.89 | $1.34 |
| RTX 5090 | $1.39 | $1.89 |
| A100 (80 GB) | $2.09–$2.19 | $2.99 |
| H100 (80 GB) | $2.89–$4.39 | $5.89 |
| H200 | $5.29 | $6.99 |

What you get for the premium is scale-to-zero. Per Runpod's [Serverless pricing docs](https://docs.runpod.io/serverless/pricing), billing runs from when a worker starts until it fully stops, rounded up to the nearest second, and covers three phases:

1. **Cold start.** The time from worker start until your code is ready, mostly loading the model into GPU memory. This *is* billed. Pulling the container image and downloading cached models while the worker is scaled down is not.
2. **Execution.** The time spent handling requests.
3. **Idle.** After the last job, a worker waits for new requests up to an idle timeout (5 seconds by default) before shutting down. A scaled-down worker isn't billed.

There are two worker types. **Flex workers** scale to zero and pay the standard rate. **Active workers** run 24/7; the docs say discounted rates for them are available "through sales inquiry," with no published percentage.

**When is Serverless cheaper than a Pod?** A rough rule from the 4090 numbers above (our estimate, not Runpod's): $0.89 ÷ $1.34 ≈ 0.66. If a Serverless worker would be busy less than about two-thirds of the hours you'd otherwise keep a Pod running, Serverless tends to come out cheaper, before accounting for cold starts. If your traffic is steady all day, a Pod (or negotiated Active workers) usually wins. And if you only need a model through an API and don't care about hosting it yourself, compare with hosted API prices using our [LLM API cost calculator](/tools/llm-api-cost-calculator/) first. That's often cheaper than either.

## Storage: Where Small Bills Grow

Data transfer in and out is free, per Runpod's docs. Storage isn't, and it's billed separately from GPU time:

| Storage type | While Pod is running | While Pod is stopped |
|---|---|---|
| Container disk | $0.10/GB/month | Not charged (erased when the Pod stops) |
| Volume disk | $0.10/GB/month | **$0.20/GB/month** |
| Network volume (under 1 TB) | $0.07/GB/month | $0.07/GB/month |
| Network volume (over 1 TB) | $0.05/GB/month | $0.05/GB/month |

The pricing page also lists a High-Performance network storage tier at $0.14/GB/month.

The detail people miss is the volume disk on a **stopped** Pod: it costs double the running rate and keeps billing until you delete the Pod. Keeping 200 GB of model files on a stopped Pod's volume disk is about $40 a month by our arithmetic; the same 200 GB on a standard network volume is about $14. Network volumes also survive Pod deletion and can be attached to new Pods, which is why they're usually the better home for model weights you reuse.

Runpod's docs also say the platform isn't designed for long-term storage, so back up anything important elsewhere.

## Credits, Balances, and the Rules That Can Stop You Mid-Run

These come from Runpod's [billing docs](https://docs.runpod.io/accounts-billing/billing) and [Pod pricing docs](https://docs.runpod.io/pods/pricing):

- **Prepaid credits.** You can start with as little as $10. Prepaid cards must deposit at least $100 per transaction.
- **Credits are non-refundable.** They can't be withdrawn once deposited, only spent on Runpod.
- **One hour up front.** To deploy an on-demand Pod, your balance must cover at least one hour of your chosen configuration.
- **$0 balance stops everything.** Pods with a network volume are stopped and keep their data. Pods without one are terminated, and the data can't be recovered.
- **Auto-pay and low-balance emails** can prevent that. Both are optional and set up separately.
- **Default spending limit of $80 per hour** across all resources. It rises with account history, or you can ask support to raise it.

## Example Budgets (Our Estimates)

**Hobbyist testing small models:** an RTX 4090 Pod for 3 hours a day, 20 days a month = 60 hours × $0.89 ≈ **$53**, plus a 100 GB network volume ≈ **$7**. Roughly $60 a month.

**The forgotten Pod:** an H100 SXM left running for a full 30 days = 720 hours × $4.39 ≈ **$3,161**. The $80/hour default spending limit won't stop this, because the Pod is well under it, and a low-balance email only helps if you act on it. Set a reminder to stop Pods.

## If You Decide to Try Runpod

You can create an account through our referral link: <a href="https://runpod.io?ref=l8ji19h4" rel="sponsored noopener">Runpod (referral link)</a>. Before your first session:

1. Deposit a small amount first. $10 is the stated minimum to start evaluating.
2. Turn on a low-balance email so a running job doesn't stop without warning.
3. Put anything you want to keep on a network volume, not the container disk.
4. Stop **and delete** Pods you're done with, so a stopped volume disk doesn't keep billing at $0.20/GB.

## FAQ

**Does Runpod bill by the hour or by the second?**
By the second for Pod compute and container/volume disks; network volumes are billed hourly. Serverless is billed from worker start to full stop, rounded up to the nearest second.

**Is Community Cloud cheaper than Secure Cloud?**
Usually, yes. The pricing page lists Community Cloud "from" rates roughly 30–45% below Secure Cloud on the H100, A100, and H200. Community Cloud has "Variable" reliability per Runpod's docs, and Runpod isn't accepting new Community Cloud hosts.

**Does Runpod charge for data transfer?**
No. Runpod's docs say there are no fees for data ingress or egress.

**Can I get a refund on unused credits?**
No. Per Runpod's billing docs, credits are non-refundable and can only be used for Runpod services.

**Have you used Runpod?**
We've created an account and looked at the deploy screen (see our [GPU rental guide](/guides/rent-gpu-to-run-open-models/)), but we haven't run production workloads on it. This guide is based on Runpod's own pricing and documentation.

## Final Thoughts

Runpod's pricing is easy to read once you separate the three meters: GPU time, storage, and your prepaid balance. The GPU rate is the number everyone compares, but the stopped-volume charge and the $0-balance rule are what tend to surprise people. Start small, keep weights on a network volume, and delete what you're not using.

Sources: [Runpod pricing](https://www.runpod.io/pricing), [Runpod docs: Pod pricing](https://docs.runpod.io/pods/pricing), [Runpod docs: Serverless pricing](https://docs.runpod.io/serverless/pricing), [Runpod docs: Billing](https://docs.runpod.io/accounts-billing/billing), [Runpod docs: Choose a Pod](https://docs.runpod.io/pods/choose-a-pod), [Runpod referral program](https://www.runpod.io/referral-program) — all checked November 15, 2026.
