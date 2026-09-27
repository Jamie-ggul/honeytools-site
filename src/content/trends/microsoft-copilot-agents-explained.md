---
title: "Microsoft Copilot's New Agents Explained: Home, Code, and Autopilot"
description: "Microsoft just rebuilt Copilot from a chat assistant into three separate agent modes — Home, Code, and Autopilot. Here's what each one actually does, who it's for, and how the new usage-based pricing works."
pubDate: 2026-09-27
tags: ["AI Trends", "Microsoft Copilot", "AI Agents", "Productivity"]
mainKeyword: "Microsoft Copilot Agents"
draft: false
---

**TL;DR:** On September 25, 2026, Microsoft restructured Copilot around three distinct layers — Home (a unified chat + delegated-task hub with Word/Excel/PowerPoint built in), Code (a natural-language app builder for non-developers), and Autopilot (a persistent agent with its own identity that works on threads and projects without being prompted each time). Everyday chat and document features stay on the existing per-user subscription; the new agent-driven features are billed separately, usage-based, and off by default until an admin turns them on.

## A Quick Note on How This Was Put Together

This is a research roundup based on Microsoft's own announcement coverage and independent reporting (Unite.AI, Futurum Group, Windows Forum) on the pricing mechanics — we haven't used these features hands-on ourselves, since Autopilot in particular is still in staged preview rather than broadly available. Rollout timing below reflects what's been announced, not confirmed general availability for every feature.

## One Naming Note Before We Start

If you search for "Copilot Autopilot," you'll also find results about GitHub Copilot's separate "autopilot mode" for coding in VS Code and the CLI — that's a different, unrelated feature from the Microsoft 365 Copilot Autopilot agent described below. Same company, same word, two different products. Worth knowing before you go down the wrong search result.

## The Three Layers

**Copilot Home** — the new starting point, replacing what used to just be a chat window. It merges two modes: Chat, for quick questions and drafts, and Cowork, for handing off longer end-to-end tasks like putting together an RFP response or a financial close package and getting a finished result back rather than a back-and-forth conversation. Word, Excel, and PowerPoint are embedded directly, so you can watch a document get built in real time rather than switching between a chat window and the app. It draws context from a company's own data — Microsoft's Fabric IQ layer connects it to semantic models, Dynamics 365, and Power Platform data, which is the part that matters most for larger organizations trying to get Copilot to actually know their business rather than answering generically.

**Copilot Code** — aimed at people who aren't developers. You describe an app, dashboard, or workflow in plain language, and Copilot builds it — anything from a small desktop widget to a cloud-hosted internal tool that can be shared with a team. It runs inside a sandboxed environment scoped to your organization's own tenant (Microsoft calls this the Copilot Managed Runtime) and is built on the same underlying technology as GitHub Copilot. This is rolling out to Microsoft 365 Premium and Pro subscribers later in 2026, with a public preview at the end of September.

**Copilot Autopilot** — the most different from anything Copilot has done before. It's a persistent, cloud-hosted agent you set up with a name, a role, and a set of objectives — and then it keeps working on its own, watching channels, following up on threads, and picking projects back up without you re-prompting it each time. It operates across Teams, Outlook, and documents with its own tenant-based identity and memory, and you interact with it the way you'd @mention a coworker. This is the one still in staged private-preview expansion, not broadly available yet.

## How the Pricing Actually Works

This is the part worth understanding before you assume a feature is "included" in your existing Copilot subscription:

- **Per-user license (everyday AI):** Chat, and Copilot inside Word, Excel, PowerPoint, Outlook, and Teams stay on the subscription you already pay for.
- **Usage-based billing (agentic work):** Cowork, Code, and Autopilot — plus access to frontier-tier models like GPT-6 Astra — are metered separately through what Microsoft calls Copilot Credits.

Microsoft has been explicit that these usage-based features are **off by default**, so an admin has to turn them on and can set spending policies and per-user or per-group caps before doing so. Organizations get FinOps-style controls through something called Agent 365 — API-managed spending policies, model-family restrictions by group, and usage analytics to see which agentic tasks are actually delivering value versus burning credits. One concrete near-term date: starting November 2, 2026, new Microsoft 365 Copilot Business licenses bought through the CSP channel will have usage-based billing turned on by default, rather than opt-in — worth flagging to whoever manages your org's Microsoft licensing if that's the purchase channel you use.

## Who Should Actually Care About This

**If you're an individual user on a personal or small-team plan**, the practical changes are Home's unified interface and the embedded Office apps — Autopilot and Code are aimed squarely at organizations with an IT/admin layer to configure spending controls, not solo users.

**If you're evaluating this for a team or company**, the real decision isn't "should we use Copilot" — you likely already do — it's whether Cowork/Code/Autopilot's usage-based pricing model makes sense for your workflows, and that means getting your admin to model out what a credit-metered agent actually costs against the value of the specific recurring task you'd point it at, before turning the spending policy on broadly.

**If you're specifically interested in autonomous, always-on AI agents** (rather than a per-question assistant), Autopilot is the feature to watch — it's the closest thing in this announcement to what people mean when they talk about "agentic AI" doing ongoing work rather than answering one prompt at a time. It's also, notably, the feature billed against frontier models like [GPT-6 Astra](/trends/gpt-6-astra-explained/), so the underlying model quality (and cost) driving Autopilot's usefulness is the same one we broke down separately.

## FAQ

**Do I need to do anything to get Copilot Home?**
If your organization is on the rollout path, Home replaces the existing interface — there's no separate signup, though usage-based agent features specifically require an admin to enable them.

**Is Copilot Code the same as GitHub Copilot?**
No, though it's built on the same underlying technology. GitHub Copilot is aimed at developers writing code in an IDE; Copilot Code is aimed at non-developers describing an app in plain language and getting a working tool back.

**Will Autopilot just start doing things on its own without anyone approving it?**
Based on what's been announced, Autopilot is configured with specific roles and objectives by whoever sets it up, and organizations get spending and usage controls through Agent 365 — but the actual approval-workflow specifics (what it can do unsupervised versus what needs sign-off) aren't fully detailed yet given it's still in staged preview.

## Final Thoughts

The headline change here isn't any single feature — it's Microsoft splitting Copilot's pricing into "everyday AI you already pay for" and "agentic work you pay for by usage," which is a pattern likely to show up across other AI products as autonomous-agent features become the norm rather than the novelty. Home and Code are the parts most people will actually touch soon; Autopilot is the one to watch longer-term, since it's the clearest sign yet of Microsoft's own answer to "AI that works while you're not looking."

Sources: [Unite.AI](https://www.unite.ai/microsoft-copilot-overhaul-adds-home-hub-code-builder-and-autopilot-agent/), [Futurum Group](https://futurumgroup.com/insights/microsoft-copilot-becomes-an-agentic-work-platform/), [Windows Forum](https://windowsforum.com/news/microsoft-365-copilot-splits-agent-features-into-usage-based-billing.445983/)
