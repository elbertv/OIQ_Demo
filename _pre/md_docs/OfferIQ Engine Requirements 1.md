OfferIQ

AI Personalization Engine Requirements

Version 1.0

© 2006-2027 Fiserv, Inc. or its affiliates. All rights reserved. This work is confidential and its use is strictly limited. Use is permitted only in accordance with the terms of the agreement under which it was furnished. Any other use, duplication, or dissemination without the prior written consent of Fiserv, Inc. or its affiliates is strictly prohibited. The information contained herein is subject to change without notice. Except as specified by the agreement under which the materials are furnished, Fiserv, Inc. and its affiliates do not accept any liabilities with respect to the information contained herein and are not responsible for any direct, indirect, special, consequential or exemplary damages resulting from the use of this information. No warranties, either express or implied, are granted or extended by this document.

<http://www.fiserv.com>

Fiserv is a registered trademark of Fiserv, Inc.

Other brands and their products are trademarks or registered trademarks of their respective holders and should be noted as such.

This document has been created by Fiserv and is classified FISERV RESTRICTED. This document is restricted to the Fiserv Internal and not to be forwarded or transferred without the approval of Fiserv.

Contents

[OfferIQ AI Personalization Engine Requirements 4](#_Toc218507872)

[Purpose & Goals 4](#_Toc218507873)

[Scope 4](#_Toc218507874)

[Functional Requirements 5](#_Toc218507875)

[Data Ingestion & Feature Store 5](#_Toc218507876)

[Modeling 5](#_Toc218507877)

[Real-Time Decisioning API 5](#_Toc218507878)

[Personalization Content & Templates 6](#_Toc218507879)

[Experimentation 6](#_Toc218507880)

[Non‑Functional Requirements 7](#_Toc218507881)

[Security & Privacy 7](#_Toc218507882)

[Compliance & Model Governance 7](#_Toc218507883)

[Reliability & Performance 7](#_Toc218507884)

[Observability 7](#_Toc218507885)

[Glossary 8](#_Toc218507886)

#

# OfferIQ AI Personalization Engine Requirements

## Purpose & Goals

Define the technical, security, and operational requirements for OfferIQ, an AI engine that delivers real-time, personalized cross-sell offers across various channels.

**Primary Goals**

- Increase conversion rate and cross‑sell revenue via AI‑generated personalization.
- Reduce campaign waste and operational costs by automating targeting and offer selection.
- Ensure regulatory compliance, explainability, and fair lending considerations.

**Non‑Goals**

- Core banking ledger changes or changes to any other Core / data stores such as DPS, Cards, etc.

## Scope

**In‑Scope**

- Data ingestion (customer, transactional, engagement).
- ML models (propensity, next‑best‑action, affordability/eligibility filters).
- Decisioning engine (rules + ML).
- Real‑time APIs for offer delivery.
- A/B testing & experimentation.
- Monitoring, governance, and MRM (model risk management).

**Out‑of‑Scope (v1)**

- On‑prem deployment (cloud-first).
- Advanced generative content creation (copy, images) beyond templated personalization.

# Functional Requirements

## Data Ingestion & Feature Store

- **Sources**
- Core banking: accounts, balances, transactions (DDA, savings, credit card, loan).
- Digital Payments such as bill pay, ACH and Zelle
- Credit Card transactions
- CRM & marketing: segments, campaigns, email/SMS events.
- Digital analytics: page views, funnel events, in‑app actions.
- Credit & risk: internal risk grades; external bureau scores (Credit Scores).
- **Cadence**
- Streaming (Kafka) for session events; batch for nightly ledger snapshots.
- **Data Quality & Enrichment**
- Mandatory checks: schema validation, deduplication, null thresholds, referential integrity (keying & linking)
- **Feature Store**
- Centralized store (Snowflake).
- Versioned features with lineage; low‑latency online store (inline with Fiserv SLAs ex: < 20 ms).

## Modeling

- **Personas:** Define personas based on demographics, financial & behavioral patterns, spend metrics. A list of predefined or out-of-box personas are listed elsewhere in this document.
- **Propensity Model**: P(user buys product X | features) ∈ \[0,1\].
- **Next‑Best‑Action (NBA)**: Multi‑armed bandit or policy model selecting product/offer & channel.
- **Feedback**: Customer reaction to be fed back to the model for consideration.
- **Eligibility & Affordability**: Rule/ML filters (e.g., debt‑to‑income, KYC/AML flags).
- **Explainability**
  - SHAP/feature importance; reason codes surfaced to auditors and CX tools.  
        SHAP(Shapley Additive exPlanations) is used in Explanable AI (XAI) to interpret ML models by assigining each feature an importance value for a particular prediction.
- **Fairness**
  - Metrics: demographic parity difference, equal opportunity, disparate impact ratio.
  - Bias testing pre‑deployment and scheduled re‑tests.

## Real-Time Decisioning API

- **Latency SLO**: p95 < **inline with Fiserv's guidelines** end‑to‑end for a single recommendation. (ex: < 200ms)
- **Availability SLO**: **99.9%** monthly.
- **Throughput**: Sustain **2k RPS** with auto‑scaling, (assuming multi-tenant implementations)
- **Endpoints**
- POST /v1/recommendations: returns ranked offers.
- POST /v1/events: log impressions/clicks/conversions for online learning.
- TBD: List of APIs

**Sample Request (JSON)**

&lt;TBD&gt;

**Sample Response (JSON)**

&lt;TBD&gt;

## Personalization Content & Templates

- Offer metadata: product, rate/APR, fees, disclosures, target personas (see separate list of out-of-box personas & sample offer matches).
- Channel‑specific templates (mobile card, push notification, web banner, email block).
- Localization and accessibility (WCAG AA; alt text; readable color contrast).
  - Language: English, Mexican Spanish, Canadian French

## Experimentation

- Built‑in **A/B/n** and **multi‑armed bandit** testing.
- **Guardrails:** exclude protected classes; cap frequency by user/channel.  
    Protected classes include:
  - Race or ethnicity
  - Gender or sex
  - Religion
  - Age
  - Marital status
  - Disability
  - National origin
  - Pregnancy status
  - Any other attributes defined by local regulations

We cannot use the protected classes due to the following reasons:

- - **Legal Compliance:** US laws like ECOA (Equal Credit Opportunity Act) and Fair Lending prohibit using these attributes in credit decisions or marketing that could lead to disparate impact.
    - **Fairness & Ethics:** Avoid bias in AI models and ensure offers are based on financial behavior and not personal identity.
    - **Audit:** Regulators require proof that personalization does not discriminate.
- **Metrics:** conversion, engagement, opt‑out rates (we need mechanism to record opt-out), incremental return / revenue (TBD).

# Non‑Functional Requirements

Security & Privacy

- **PII Protection**: Encryption at rest (Voltage, AES‑256) and in transit (TLS 1.2+).
- **Access Control**: RBAC/ABAC; MFA; least privilege; per‑environment isolation.
- **Data Minimization**: Only necessary attributes for modeling.
- **Consent & Preferences**: Honor marketing opt‑in/opt‑out; TCPA for SMS; email permissions.(TBD: Need to figure out the feedback loop)
- **Regulatory Alignment** (U.S.-focused)
  - **GLBA** (privacy of consumer financial information).
  - **FCRA/ECOA** (fair lending considerations where applicable).
  - **UDAAP** risk avoidance (clear, non‑deceptive offers).
  - **GDPR/CCPA** where applicable (data subject rights, deletion).

## Compliance & Model Governance

- **MRM Framework**: Policy aligned with SR 11‑7 style model risk management.
- **Model Inventory**: IDs, owners, approvals, validation reports, versioning.
- **Documentation**: Purpose, data, methodology, assumptions, limitations, Ops. These are needed for Fiserv to continue working with the product.
- **Audit Trails**: Immutable logs of inputs, outputs, decision rationale, feature versions.
- **Change Management**: Approval workflow for model updates; rollback procedure.

## Reliability & Performance

- **SLOs**: Per Fiserv guidance (EX: Availability 99.9%, Latency p95 < 200 ms, p99 < 400 ms)
- **Scalability**: Auto‑scale nodes; graceful degradation (fallback to rules)
- **DR/BCP**: Active-Active Per Fiserv guidance (ex: Multi‑AZ; RPO ≤ 15 min, RTO ≤ 60 min; periodic failover drills).

## Observability

- **Metrics**: API latency/availability, model accuracy (AUC/PR), lift vs control, fairness metrics.
- **Logs**: Structured JSON with correlation IDs; audit logs separated and retained ≥ 7 years (FI's policy and contract dependent).
- **Tracing**: Distributed tracing (OpenTelemetry).
- **Alerts**: SLA breaches, drift detection, spike in declines, spike in complaints (need feedback loop).

# Glossary

This section illustrates standard glossary format.

Term

Definition (uses Normal). This is body text included as a sample. It also illustrates the spacing of bulleted lists and numbered lists. It must have enough information to wrap around several lines. This is body text included as a sample. It also illustrates the spacing of bulleted lists and numbered lists. It must have enough information to wrap around several lines.

Term

Definition (uses Normal). This is body text included as a sample. It also illustrates the spacing of bulleted lists and numbered lists. It must have enough information to wrap around several lines. This is body text included as a sample.

Term

Definition (uses Normal). This is body text included as a sample. It also illustrates the spacing of bulleted lists and numbered lists. It must have enough information to wrap around several lines. This is body text included as a sample.

Term

Definition (uses Normal). This is body text included as a sample. It also illustrates the spacing of bulleted lists and numbered lists. It must have enough information to wrap around several lines. This is body text included as a sample.