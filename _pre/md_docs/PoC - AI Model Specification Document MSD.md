**AI/ML Model Specification Document (MSD) - AI Personalization Engine**

# **1\. Purpose & Scope**

## **1.1 Purpose**

This document defines the technical specifications, model design standards, evaluation criteria, governance controls, and deployment expectations for the AI Personalization Engine focused on the PoC target, enabling teams to:

- Design and implement AI models consistently.
- Ensure regulatory, ethical, and operational readiness.
- Support scalable personalization across personas, offers, and campaigns.
- Enable continuous learning with safety and auditability.

## **1.2 Scope**

This specification applies to:

- **Persona identification (incl. Homeowner persona)**

Defining customer segments using statistical techniques such as segmentation models to create pre-trained personas. This includes generating descriptive profiles that represent key characteristics and behaviors of each segment. The focus of the PoC is to identify, within these segments, a group of customers classified as Homeowners.

- **Client ↔ Persona mapping**

Process of associating individual customers with predefined personas based on segmentation logic and embedding models. This ensures that each client is linked to the most relevant persona, enabling personalized recommendations and targeted offers. In the PoC, this mapping allows the system to identify which customers belong to the Homeowner persona.

- **Offer ↔ Client ↔ Persona matching**

Matches product offers to personas and their associated clients using affinity and recommendation models. In the PoC, offers such as HELOC are recommended to the Homeowner persona.

# **2\. System Capabilities (High-Level)**

| Capability | Description |
| --- | --- |
| Persona Intelligence | Identify static, behavioral, predictive, and conversational personas |
| Personalization | Match users to offers using AI-driven ranking |
| Campaign Intelligence | Decide who gets what, when, and through which channel |
| Explainability | Provide regulator-ready explanations |
| Governance | Monitor bias, drift, risk, and compliance |
| Learning Loop | Capture outcomes and retrain responsibly |
| Model Design & Deployment | Define standards for model development and ensure scalable deployment |

# **3\. Persona Framework (Business Context)**

## **3.1 Persona Types**

The AI Personalization Engine supports multiple persona types to enable flexible and scalable personalization strategies. These persona types define how customer segments are created and managed within the system:

- **Core Personas**: Stable, pre-trained personas used as the foundation for personalization.
- **Dynamic Personas**: Product-driven or natural language-driven personas that adapt based on context.
- **Custom Personas**: User-defined segments created by adjusting filters or combining existing personas.

Note: Persona definitions evolve and are versioned.

## **3.2 Persona Categories (Non-Exhaustive)**

**Core Personas**

The PoC is limited to Core Personas, specifically targeting **Homeowner** persona (e.g., First-Time Homeowner, Established Homeowner) and HELOC-related offers to validate the personalization engine capabilities. These categories are defined using segmentation models, which apply statistical techniques to group customers based on shared characteristics and behaviors.

# **4\. Model Architecture Overview**

## **4.1 Offer IQ ML Interaction & Data Flow Overview**

The following diagram illustrates the relationship between the user interface, underlying data sources, and machine learning components of the AI Personalization Engine for the PoC. It provides a holistic view of how a business user interacts with the platform while transparently showing the internal data processing and ML model interactions that enable persona-based personalization and product recommendations.

**Flow 1: Based on Pre-Trained Personas**

The user starts by selecting one pre-trained persona (Home Owners)

**Flow Steps:**

- The user selects the Home Owners (**_Core_** **_personas_**)
  - In this case we must develop the following models to list them in the library.
    - **_Segmentation Model -_** _Traditional ML (Unsupervised Learning)_
    - **_Client Embedding model -_** _Traditional ML (Unsupervised Learning)_
    - **_Feature Importance model -_** _Traditional ML (Supervised Learning)_
    - **_Description Generator Model -_**   _Natural Language (Traditional NLP) or Manual_
- The system displays the composition of that segment (visualization with **_client embeddings model_**).
- A model calculates the acquisition propensity for each available product and the system recommends the ideal products for that persona population.
  - Models:
    - **_Affinity model-Based Recommendation (Client/Persona - All Products) -_** Traditional ML (Recommender System)
- The user selects the desired product offer from the recommended list for the specific persona.
- The system displays a list of clients with detailed information, including the products they own.

## **4.2 Key Questions the Model Must Answer**

This section anchors models to decisions for PoC. (Data Scientists update mappings as models evolve.)

| **Product/Business Function** | **Sub-Function** | **User Questions** | **User Needs** | **Model Approach** | **Model Type** |
| --- | --- | --- | --- | --- | --- |
| Persona Management | Pretrained Personas (Core Persona)  <br><br/>The approach is designed specifically for homeowners, ensuring that all models reflect their behaviors and needs. | How can I identify customer types, including homeowners, and turn millions of records into actionable segments for marketing and sales? | Gain deep insight into customer behaviors while reducing data complexity for strategic decision-making. | **Segmentation Model**  <br>Objective: To create and maintain stable, pre-trained customer segments that represent the main behavioral and demographic patterns across the entire customer base of a company.  <br>It is updated periodically (monthly, quarterly, etc.). | **Traditional ML** (Unsupervised Learning)<br><br>_Sub-area:_<br><br>Clustering Algorithms |
| Which variables drive the differences between segments? | Understand what differentiates segments, identify the key drivers of uniqueness, and prioritize the most impactful features for targeted strategies. | **Feature Importance Model**  <br>Objective: Identify and rank the most influential variables driving customer behavior | **Traditional ML** (Supervised Learning)<br><br>_Sub - area:_<br><br>\-Model Explainability / Interpretability<br><br>\-Feature Attribution & Importance Analysis |
| Who is this segment and how is it different from others?  <br><br/>What motivates this segment to engage or purchase?  <br><br/>What are their main frustrations or pain points?  <br><br/>What are their explicit and implicit needs?  <br><br/>What commercial actions should we prioritize for this segment? | Users need clear, data-driven persona profiles that highlight segment differences, motivators, frustrations, explicit and implicit needs, and actionable commercial recommendations in a consistent, easy-to-use format. | **\*Persona profiles will be created manually for PoC.**<br><br>**Description Generator Model**  <br>Objective: Generate detailed persona descriptions and names including motivators, frustrations, needs, a summarized customer story, and high-level commercial recommendations using cluster data. | **\*Persona profiles will be created manually for PoC.**<br><br>**Artificial Intelligence** (Natural Language Generation)<br><br>_Sub - area:_<br><br>\-NLP or Generative AI (Text Generation - SLM or LLM) |
| How can we create a simple visual representation of customers so that similar profiles are positioned near each other on a graph? | To be able to display each customer on a visual map that represents the vector space, clearly showing their position and the segment they belong to, in order to make interpretation and similarity analysis easier. | **Client Embedding model**  <br>Objective: Represent each customer in a multidimensional space where similar customers are positioned close to each other for clustering and similarity analysis. Create vector representations of customers based on demographics, behavior, and interactions | **Traditional ML** (Unsupervised Learning)<br><br>_Sub - area:_<br><br>\-Dimensionality Reduction |
| Offer Management | Product Affinity Scoring  <br><br/>The focus is on the homeowner segment and specific products such as HELOC and others. | Which products are most relevant for customers based on their preferences?  <br><br/>What is the likelihood that this customer will acquire a specific product?  <br><br/>What are the top recommended products for each persona group? | Rank products by affinity for personalized recommendations.  <br><br/>Estimate acquisition propensity using similarity scores.  <br><br/>Generalize product affinity scores at persona level to prioritize recommendations for strategic campaigns. | **Affinity Model-Based Recommendation (Client/Persona → All Products)**  <br><br/>Objective: Compute a similarity score between customer embeddings and product embeddings to rank the most relevant products for each customer and aggregate these insights at the persona level for broader recommendations. | **Traditional ML** (Recommender System)<br><br>_Sub - area:_<br><br>\-Similarity‑Based Recommendation<br><br>\-Representation Learning (Embedding‑Based) |
| Campaign Management | Target Audience | Which customers fall into a specific persona and product offer, and what are their relevant details? | To retrieve and view a list of customers who belong to a specific persona and product offer, along with key attributes or variables that are important for analysis, personalization, or campaign activation. | Not Applicable | Not Applicable |

**How the Models Work for Homeowners and the HELOC Offer?**

The model framework follows a structured, sequential logic designed to transform complex customer data into clear, actionable decisions. First, the system analyzes multiple customer characteristics and **builds a comprehensive profile for each homeowner**, capturing financial behavior, product usage, and relevant signals over time. Based on these profiles, a segmentation model **automatically groups homeowners with similar patterns**, creating stable segments that reflect real behaviors rather than manually defined rules.

Once the segments are established, the system evaluates **which variables have the greatest influence** in differentiating one group from another. This step makes it possible to understand **what truly drives the behavior of each segment**, adding context and meaning to the segments beyond simple classification.

Using these insights, the information is translated into **clear, business‑friendly persona descriptions**. Each persona explains who that type of homeowner is, what motivates them, what their primary needs and frictions are, and how they typically behave. This layer serves as a bridge between the analytical models and business teams, enabling consistent understanding and decision‑making.

**Customer-Product Affinity (HELOC)**

In parallel, the system evaluates **affinity between individual homeowners and available products**, such as HELOC. Customers and products are represented in a comparable way that captures their most relevant characteristics. The model then assesses **how well a product aligns with a homeowner's current situation and financial behavior**.

For example, when a homeowner shows patterns associated with home‑related spending, the need for financial flexibility, and strategic credit usage, the model identifies **HELOC as a natural fit for that profile**, assigning it a higher affinity compared to less suitable products. This process **does not rely on fixed rules**, but on similarity detected across observed patterns in the data.

**Persona‑Level Product Affinity**

Once affinities are calculated at the individual customer level, the results are **aggregated and analyzed at the persona level**. This allows the organization to identify, in a consistent way, **which products are most relevant for each homeowner persona**, reducing noise from individual variation and strengthening strategic insights.

As a result, the system does not only indicate that a specific customer has a high affinity for HELOC, but also that **an entire homeowner persona demonstrates a strong relationship with this product**. These insights are used to prioritize offers, align messaging at the persona level, and design more effective and coherent campaign strategies.

By combining segmentation, persona descriptions, and customer and persona‑level product affinity, the model enables the organization to **clearly identify which homeowners are natural candidates for a HELOC offer**, supporting campaign activation and recommendations in a way that is consistent, scalable, and easy for business teams to interpret.

## **4.3 Model Types Used**

| Methods | Purpose |
| --- | --- |
| Traditional ML | Authoritative, regulated models for structured data analysis. Includes segmentation to group customers, feature importance to identify key drivers, and embeddings for similarity and visualization. |

| **Category** | **Sub‑area** | **Sub-area Type** | **Purpose** |
| --- | --- | --- | --- |
| Traditional Machine Learning | Unsupervised Learning | Clustering | Identify and maintain stable customer personas by grouping customers with similar behavioral and demographic patterns. |
| Dimensionality Reduction | Create customer embeddings that preserve similarity for visualization, clustering, and similarity analysis. |
| Supervised Learning | \-Model Explainability / Interpretability  <br>\-Feature Attribution & Importance Analysis | Identify and rank key variables driving customer behavior and differences across segments. |
| Recommender Systems | \-Similarity Based Recommendation  <br>\-Representation Learning (Embedding Based) | Rank products by customer-product affinity to support personalized and persona‑level recommendations. |

# **5\. Model Inventory (Living Section)**

## **5.1 Core Decision Models (Authoritative)**

| Model | Type | Input | Output |
| --- | --- | --- | --- |
| Segmentation Model | **ML Models  <br>Clustering algorithms**:\- K-Means  <br>\- K Medoids  <br>\- Hierarchical Clustering (for nested segments)  <br>\- DBSCAN (for density-based clustering)  <br>**Classification algorithms:** Assign new customers to existing segments. **(This is not needed for the POC)** | 1.Prepared Customer Dataset: A structured table containing all relevant features (demographic, behavioral, psychographic) already cleaned, normalized, and ready for modeling.<br><br>2\. Model Parameters: Specific configuration values that guide the segmentation process. | 1\. Segmented Customer Dataset: Original customer dataset with additional columns for segment assignment<br><br>2\. Artifacts: Trained model, quality metrics (Silhouette Score, Calinski-Harabasz Index, Segment Size Balance, Coverage, etc). |
| Feature Importance Model | **ML Models  <br>Model-Based Feature Importance**  <br>\- Random Forest  <br>\- XGBoost  <br>(These use internal metrics like Gini importance or gain to rank features.)  <br><br/>**Model-Agnostic Explainability**  <br>\- SHAP (SHapley Additive exPlanations)  <br>\- Permutation Importance  <br>(These work independently of the model and explain feature impact globally or locally.)  <br><br/>**Cluster-Specific Analysis**  <br>\- Centroid Analysis (Cluster Profiles)  <br>(Used to interpret segmentation results by analyzing feature values at cluster centers.) | 1\. Segmented Customer Dataset: Original customer dataset with additional columns for segment assignment | 1\. Feature Importance Table for each segment:<br><br>segment_id/persona_id, feature_name, importance_score, rank, method, timestamp, run_id, model_version<br><br>2\. Segment Profile Summary:<br><br>Segment size and share (% of total),top features per segment.<br><br>Segment Features:<br><br>Numerical variables: mean vs. global, buckets (high/low),etc.<br><br>Categorical variables: proportions vs. global, buckets (more frequent/less frequent).<br><br>3\. Visualizations |
| Description Generator Model | **AI - Natural Language Generation**<br><br>**\*Persona profiles will be created manually for PoC.**<br><br>**<br>A) NLP Options (Classical / Compact)**  <br>\- **Template-Guided Generation:** Rule-based templates populated with structured facts (KPIs, drivers, demographics). Adds deterministic consistency; ideal when compliance/factuality is paramount.  <br>\- **Hybrid Brief → Narrative:**  <br>Step 1: Generate a structured "brief" (facts) with rules/heuristics.  <br>Step 2: Use a compact transformer for lightly phrased text.  <br>**B) SLM Options (Small Language Models)**  <br>\- **Prompted SLM + Templates:  <br>+**Phi-3-mini/medium, Mistral 7B Instruct, Llama 3.x 8B with strict templates (sections and bullet points).  <br>**+**Controlled prompting with style tags (e.g., &lt;tone=professional&gt;, &lt;industry=banking&gt;).  <br>\- **RAG-Light + SLM**: Retrieve approved segment definitions, glossaries, and samples, inject into prompt. Improves factual grounding without heavy infrastructure.  <br>\- **LoRA Fine-Tune (Domain Style)**: Fine-tune on "gold" persona write-ups to match brand tone and structure. Recommended for the long term, not for the first version.  <br>**C) LLM Options (Large Language Models)**  <br>\- **LLM with RAG & Guardrails:** GPT-4 class or Llama 70B with business context retrieval (cluster docs, brand guidelines, compliance policies). Use structured output formats (JSON sections) to ensure coverage and reduce hallucinations.  <br>\- **Two-Pass LLM (Data → Narrative):**  <br>Pass 1: The LLM converts cluster stats into a "brief" JSON with validated facts.  <br>Pass 2: The LLM drafts persona narrative from the brief; apply post-validation. | 1\. Segmented Customer Dataset: Original customer dataset with additional columns for segment assignment.<br><br>2\. Feature Importance Table for each segment.<br><br>3\. Segment Profile Summary:<br><br>Segment size and share (% of total),top features per segment.<br><br>4\. Segment Features:<br><br>+Numerical variables: mean vs. global, buckets (high/low),etc.<br><br>+Categorical variables: proportions vs. global, buckets (more frequent/less frequent).<br><br>5\. Meta-features (optional but recommended):<br><br>Friendly labels and units (e.g., "income": {"label": "Income", "units": "USD"}).<br><br>6\. Theme Glossary:<br><br>To map drivers → motivators, frustrations, needs (e.g., "digital," "cost-saving," "service"). | 1\. Persona Profile table: Each row includes the persona name, a profile summary, lists of motivators, frustrations, explicit and implicit needs, a short customer story, and high-level commercial recommendations, along with segment facts like size, share, and top differentiating drivers for traceability. This format ensures the personas are data-driven, consistent, actionable, and easy to store and display in a persona library or dashboard.<br><br>2.A table that links the client_id, segment_id/persona_id with client features. |
| Client Embedding model | **ML Models  <br>Linear Method**  <br>PCA (Principal Component Analysis)  <br><br/>**Non Linear Method**  <br>Kernel PCA (kernel-based)  <br>t-SNE (t-Distributed Stochastic Neighbor Embedding) (manifold learning)  <br>UMAP (Uniform Manifold Approximation and Projection) (manifold learning) | 1\. Segmented Customer Dataset: Original customer dataset with additional columns for segment assignment. | 1\. Client Embedding Table: Table with fields that make it easy to visualize and track changes over time. For example: persona_id, client_id, x and y (2D embedding coordinates), period (month or date of the data), embedding_version and model_name (to know which model generated the embedding), and optional fields like segment |
| Affinity Model-Based Recommendation | **ML Models**  <br>Steps:  <br>\- Customer Embeddings  <br>\- Product Embeddings  <br>Techniques:  <br>\-Two-Tower Neural Network (customer tower + product tower).  <br>\-Matrix Factorization (ALS).  <br>\-Sentence-BERT or similar for textual product descriptions.  <br>\-FAISS or Milvus for fast nearest-neighbor queries.  <br>\- Compute Similarity  <br>Cosine similarity or dot product between embeddings.  <br>Higher similarity = higher affinity.  <br>\- Rank products for each customer based on similarity scores.  <br>\- Aggregate similarity scores from all customers within each persona to compute an average affinity per product and rank products at the persona level. | 1\. Segmented Customer Dataset: Original customer dataset with additional columns for segment assignment.<br><br>2.Product data: Product name, Product type, subtype, description, Eligibility Criteria, other financial details, customer benefits, channel Availability. | 1.Affinity Customer level Table:A table that stores, for each customer, the ranked list of products along with their affinity score and timestamp. (Columns: client_id, product_id, affinity_score, rank, timestamp)<br><br>2.Affinity Persona level Table:A table that aggregates affinity scores across all customers in a persona to produce an average score per product, ranked for strategic recommendations. (Columns: persona_id, product_id, average_affinity, rank, timestamp) |

## **5.2 SLM Responsibilities**

**\*Not required for PoC.**

| Use Case | Input (Typical Sources) | SLM Process (Approach) |
| --- | --- | --- |
| Persona description | Segment profile (size, share, top drivers), feature importance table, theme glossary | Template-guided + Controlled prompt (tone=professional, domain=banking) + RAG-light |
| Quick explanations (reason codes) | Drivers per client/segment, applied business rules | Prompt with whitelist of drivers + phrase templates |
| Intent classification / tagging | User question (NL), channel metadata | Instructional classifier (SLM) with predefined tags |
| Brief JSON (pre-summary of data) | Segment KPIs, top features, aggregated embeddings | Two-pass lite (facts â†' brief) with coverage checks |
| NLQ normalization (slot filling) | User NL question | Entity extraction and slot filling via grammar/template |
| Compliance phrasing & tone control | Draft text (from LLM/analyst) | Rewriting with style/tags and approved term list |
| Microcopy for UI/Emails | Campaign variables (offer, benefits, restrictions) | Templates with placeholders + length control |
| Glossary-aware summaries | Segment stats + theme glossary | RAG-light for definitions + guided summarization |

## **5.3 LLM Responsibilities**

**\*Not required for PoC.**

| Use Case | Guardrails |
| --- | --- |
| Analyst Copilot | RAG-only sources (retrieve from approved internal knowledge base; no external or unverified content) |
| NLQ → SQL | Whitelisted schemas (only generate queries for approved database schemas; enforce schema validation) |
| Persona narratives | Internal-only (use internal segment data and glossary; no hallucinated facts or external data) |
| Message variants | Approved templates (follow pre-defined templates for tone, structure, and compliance) |

# **6\. Go-Live Baseline Requirements**

**\*Not required for PoC.**

## **6.1 Minimum Model Performance (Initial Go-Live)**

| Model | Key Metrics | Go-Live Thresholds |
| --- | --- | --- |
| Segmentation Model | **1.Silhouette Score(avg):** Measures how well each customer fits within its assigned cluster compared to other clusters. Higher values indicate better separation and cohesion.<br><br>**2.Intra-cluster variance:** Measures how similar customers are within the same cluster. Lower variance indicates higher homogeneity.<br><br>**3.Cluster size stability:** Evaluates how much each cluster's size changes across retraining cycles. | **1.Silhouette Score(avg):** >= 0.25 (A Silhouette score above 0.25 indicates that customer segments are meaningfully separated and not randomly mixed.)<br><br>**2.Intra-cluster variance:** Cluster variance < Overall (global) variance in key features (Lower intra‑cluster variance ensures each persona represents a coherent and homogeneous group, making the segment easy to understand, describe, and activate in campaigns.)<br><br>**3.Cluster size stability:**<br><br>< 15% change in segment size per retrain (Stable segment sizes indicate that personas are robust to minor data changes. Large fluctuations suggest instability, making personas difficult to use consistently over time.) |
| Feature Importance Model | **1.Top-N feature stability:** Measures consistency of the most important variables across multiple model runs.<br><br>**2.Permutation importance gap:** Evaluates whether a clear importance gap exists between relevant and irrelevant features.<br><br>**3\. Generalization (Train vs Validation):** Assesses whether the model overfits training data.<br><br>**4.Plausibility:** Domain review of whether feature importance makes real‑world sense. | **1.Top-N feature stability:**<br><br>≥ 75% overlap in Top‑10 features. (Stable top drivers indicate explanations are reliable and not driven by randomness or noise. This is critical for trust and governance.)<br><br>**2.Permutation importance gap:**<br><br>Top features ≥ 2× median importance. (A clear gap ensures explanations are meaningful and actionable instead of flat or ambiguous.)<br><br>**3\. Generalization (Train vs Validation):**<br><br>**≤ 10% performance gap** between train and validation. (Overfitting produces misleading importance results that do not generalize to production data.) |
| Description Generator Model<br><br>\*Not required for PoC. | **1.Coverage Completeness:** Ensures all required persona sections are generated.<br><br>**2\. Factual accuracy:** Confirms that narratives do not contradict underlying data.<br><br>**3.Template adherence:** Checks compliance with the approved structure.<br><br>**4\. Consistency Across Runs:** Same inputs produce the same output | **1.Coverage Completeness:**<br><br>100% coverage (Missing sections lead to inconsistent personas and reduce business usability.)<br><br>**2\. Factual accuracy:**<br><br>100% accuracy (zero tolerance)<br><br>**3.Template adherence:**<br><br>100% compliance (Consistent structure is required for governance, auditability, and scale)<br><br>**4\. Consistency Across Runs:**<br><br>Deterministic output (Determinism enables control, reproducibility, and regulatory compliance) |
| Client Embedding model | **1\. Explained variance (PCA):** Percentage of total information (variance) preserved by the first 2-3 principal components used for visualization.<br><br>**2\. Separability:** Visual check that clusters (personas) appear distinctly separated in the 2D/3D plot. | **1\. Explained variance (PCA):**<br><br>Explained variance ≥ 55% (with 2-3 PCs) (Below ~50% the projection tends to lose too much signal, making patterns hard to interpret for non‑technical stakeholders)<br><br>**2\. Separability:**<br><br>Clear qualitative separation (no heavy overlap) (Ensures the map communicates real differences; heavy overlap confuses storytelling and decision‑making) |
| Affinity Model-Based Recommendation | **1.Similarity Score Distribution (Separation):** Clear score gap between likely‑relevant and unlikely products (e.g., cosine similarity).<br><br>**2\. Business Validation (Qualitative Sanity Check)** | **1.Similarity Score Distribution (Separation):**<br><br>Top products ≥ 0.20-0.30 above persona/customer mean. (Without separation, rankings become noisy and hard to justify; a visible gap supports prioritization) |

## **6.2 Required Pre-Go-Live Checks**

- Bias testing complete
- Drift thresholds defined
- Explainability validated
- Human-in-the-loop enabled
- Rollback plan approved

# **7\. Bias & Fairness Framework**

## **7.1 What Is Considered Bias**

Bias exists when model outputs or downstream decisions produce unjustified, systematic differences in treatment, representation, or outcomes across protected groups or reasonable proxies, without a legitimate business or risk‑based rationale.

- Segmentation & Personas: Persona assignment disproportionately correlates with protected attributes or proxies; protected groups are over/under‑represented without business rationale.
- Feature Importance: Top drivers act as proxies for protected attributes; explanations lead to systematic disadvantage.
- Embeddings & Similarity: Protected groups are positioned farther from eligibility‑linked products; neighborhoods reinforce historical inequities.
- Affinity & Recommendations: Offer exposure differs unjustifiably across protected groups; geographic or proxy redlining; credit offers disproportionately excluded.
- Narratives: Generated descriptions reinforce stereotypes; differential framing of personas correlated with protected attributes.

## **7.2 Bias Detection Techniques**

Use a multi‑layer approach combining quantitative tests, proxy analysis, and expert review.

- Data & Feature Review: Identify protected attributes (when available); detect proxies (e.g., geography, demographics); run correlations between features and protected attributes.
- Segmentation & Personas: Compare distributions of protected groups across personas; measure over/under‑representation; check stability across retrains to avoid bias drift.
- Outcomes & Exposure: Compare offer exposure and acceptance rates by protected group; run disparate impact checks (e.g., 80% rule, when applicable); analyze persona‑level outcomes.
- Embeddings & Similarity: Audit distances and nearest‑neighbors for protected groups; visualize group separations; track embedding shifts over time.
- Explainability & Narratives: Review top drivers for proxy dominance; human review for biased language or stereotypes; cross‑check explanations with domain rationale.

## **7.3 Bias Mitigation Options**

Select mitigation based on severity, source, and business impact, preserving model utility.

- Data‑Level: Remove/transform problematic features; reduce proxy influence (bucketing, normalization); rebalance datasets when appropriate.
- Model‑Level: Apply constraints to segmentation/similarity; regularize to reduce proxy dominance; adjust persona definitions to improve representativeness.
- Post‑Model Controls: Set exposure caps/floors per persona; overlay fairness business rules in recommendations; enable human‑in‑the‑loop for sensitive outputs.
- Governance & Monitoring: Document detected bias and remediation; define fairness thresholds; set monitoring cadence and escalation path (Model Risk/Compliance) when thresholds are exceeded.

# **8\. Drift Detection & Monitoring**

## **8.1 Drift Types**

Drift refers to material changes over time in data, model behavior, or outcomes that may degrade performance, interpretability, fairness, or business relevance.

- **Data Drift (Input / Population Drift)**

Changes in the statistical distribution of input features compared to training data.

Examples (EN):

- Demographic mix shifts
- Behavioral patterns change
- New ranges or missing values appear

- **Feature Importance Drift**

Material change in which variables drive segment separation or recommendations.

- **Concept Drift (Behavioral Drift)**

The relationship between inputs and outputs changes, even if input distributions remain similar.

Examples:

- Products gain/lose relevance
- Personas behave differently over time

- **Representation Drift (Persona Drift)**

Material changes in the composition, size, or centroid of personas.

Key signals:

- Cluster size instability
- Centroid movement

- **Outcome / Exposure Drift**

Changes in downstream exposure of offers, products, or actions over time.

- **Narrative Drift (Output Drift)**

Changes in generated persona descriptions without underlying data justification.

## **8.2 Drift Response Strategy**

| Drift Severity | Description | Trigger Condition | Required Actions |
| --- | --- | --- | --- |
| Low | Minor drift within predefined limits with no material business impact. | Metrics remain within warning thresholds. | Log event; continue automated monitoring; no model changes required. |
| Medium | Material drift with limited or localized impact. | Warning thresholds exceeded but critical limits not breached. | Generate alert; perform root-cause analysis; review with Data Science and Business; consider targeted adjustments or partial retraining. |
| High | Significant drift affecting performance, fairness, or interpretability. | Critical thresholds breached. | Escalate to Model Risk / Governance; pause or restrict model outputs if needed; execute rollback or safe-mode controls; retrain or redesign model prior to re-deployment. |

# **9\. Human-in-the-Loop (HITL)**

## **9.1 When HITL Is Required**

Human‑in‑the‑Loop is required when:

- Model outputs influence regulated or high‑risk business decisions (e.g., financial offers, eligibility, exposure).
- There is potential bias or fairness risk that cannot be fully mitigated through automated controls.
- Material drift (data, concept, persona, or outcome) exceeds defined thresholds.
- Model changes affect structure, features, logic, or recommendation behavior.
- Generated narratives or explanations (SLM/LLM) are used for business, customer, or regulatory interpretation.
- Data quality issues or anomalies may compromise model reliability.
- Go‑live, rollback, or escalation decisions require expert or governance approval.
- Reviews are requested by Compliance, Model Risk, Legal, or Business stakeholders.

Purpose of HITL: Ensure regulatory compliance, fairness, explainability, and controlled risk management in AI‑driven decisioning.

## **9.2 HITL Workflow**

- Trigger Detection: Automated monitoring identifies HITL conditions (risk, bias, drift, model change, or content generation).
- Case Creation & Logging: A HITL case is created with traceable metadata (model version, inputs, outputs, metrics, timestamp).
- Human Review & Assessment: Designated reviewers (Data Science, Business, Compliance) evaluate model outputs, risks, and explanations.
- Decision & Action: Reviewers approve, modify, restrict, escalate, or reject the model output or change.
- Execution & Control: Approved actions are applied (deploy, retrain, safe‑mode, rollback, content approval).
- Documentation & Audit Trail: All decisions, rationales, and outcomes are recorded for audit and governance purposes.
- Feedback & Learning Loop: Review outcomes are captured to update thresholds, rules, documentation, and retraining plans.

# **10\. Feedback Capture & Learning Loop**

## **10.1 Feedback Sources**

- Offer accepted
- Campaign performance
- User engagement
- Manual overrides
- Compliance feedback

## **10.2 Retraining Criteria**

- **Model Performance Metrics**

Automated tracking of offline and online metrics (e.g., stability, separation, accuracy, ranking quality).

- **Business Outcome Signals**

Campaign results, offer exposure, conversion, acceptance, and engagement outcomes at client and persona levels.

- **Human‑in‑the‑Loop Reviews**

Decisions, approvals, rejections, and annotations captured during HITL processes.

- **Bias & Fairness Monitoring**

Results from fairness tests, proxy analysis, exposure comparisons, and audit reviews.

- **Drift Monitoring Alerts**

Data drift, concept drift, persona drift, and narrative drift detections.

- **Explainability & Reason Code Validation**

Feedback on feature importance, explanations, and narrative consistency with underlying data.

- **Data Quality Checks**

Anomalies, missing values, schema changes, and data pipeline validation results.

- **Stakeholder Review & Escalations**

Input from Business, Compliance, Model Risk, and Legal teams.

- **Customer or Channel Signals (when available)**

Indirect signals such as opt‑outs, complaints, or abnormal engagement patterns.

# **11\. Performance Evaluation**

## **11.1 Offline Metrics**

- Offline metrics are pre‑defined and validated as part of the Go‑Live Baseline Requirements (Section 6.1) and are reused for periodic re‑evaluation and retraining validation.

## **11.2 Online Metrics**

- Conversion uplift
- Incremental revenue
- Channel efficiency
- Fatigue reduction

## **11.3 LLM/SLM Metrics**

- Schema validity
- Faithfulness
- Policy compliance
- Latency & cost

# **12\. Deployment & MLOps Standards**

## **12.1 Deployment Modes**

- Real-time APIs
- Batch scoring
- Streaming triggers

## **12.2 MLOps Requirements**

- Versioned datasets
- Model registry
- Canary releases
- Automated rollback
- Full audit logs

# **13\. Security & Compliance**

- Fiserv Policies

# **14\. Ownership & Accountability**

| Area | Owner |
| --- | --- |
| Models | Data Science |
| Pipelines | Data Engineering |
| Serving | Platform |
| Compliance | Risk |
| LLM Guardrails | AI Governance |

# **15\. Living Document Guidance**

This specification:

- Is updated continuously
- Serves as single source of truth
- Evolves with regulations, models, and business needs

# **16\. Feature store schemas (tables + columns)**

This section will be defined and finalized in a later phase, once feature engineering, data pipelines, and production data sources are stabilized.

At the current planning stage:

- Core feature domains are identified at a conceptual level.
- Final table structures, column definitions, and storage schemas are out of scope.
- Schemas will be documented prior to production deployment and version‑controlled.

# **17\. Model Explainability and interpretability**

Explainability and interpretability requirements are acknowledged but not fully specified at the planning stage.

At this phase:

- Explainability principles and objectives are defined at a high level.
- Detailed methods, artifacts, and tooling will be specified once models and features are finalized.
- Final explainability documentation will be completed before golive and regulatory review.

# **18\. Support for AI Governance**

AI governance support will be expanded in subsequent phases as operational processes mature.

At the planning stage:

- Governance intent and alignment with compliance principles are established.
- Detailed escalation paths, ownership models, and reporting dashboards are to be finalized.
- Full governance integration will be completed prior to production deployment.

# **19\. Model Infrastructure requirements (as applicable)**

At this phase:

- Highlevel architectural assumptions are documented.
- Final infrastructure sizing, scalability, security, and availability requirements are to be determined.
- Productiongrade infrastructure specifications will be defined during deployment readiness.

# **20\. Model -> API -> Decisions (Pending)**

**\*Not required for PoC.**

- Model-to-microservice mapping
- Sample Postman / OpenAPI specs
- End-to-end sequence diagrams (add sections as needed)

**1\. Architecture Overview (Model → Service → API)**

**Design Principle**

- Models never expose themselves directly
- All interaction occurs via **domain-aligned microservices**
- APIs are **versioned, auditable, explainable, and compliant**

\[Data Sources\]

↓

\[Feature Pipelines\]

↓

\[Model Services\]

↓

\[Decision Orchestration Layer\]

↓

\[Campaign / Channel Systems\]

**2\. Canonical Input Data (Across All Models)**

**2.1 Core Input Entities**

| **Entity** | **Description** |
| --- | --- |
| User | Individual consumer |
| Account | Banking / card / loan accounts |
| Property | Home / mortgage / HELOC |
| Transaction | Monetary events |
| Interaction | Campaign & channel history |
| Context | Time, channel, intent |

**2.2 Standard Feature Input Contract (Internal)**
```
{
  "user_id": "string",
  "timestamp": "ISO-8601",
  "features": {
    "demographics": {...},
    "financial": {...},
    "transactional": {...},
    "behavioral": {...},
    "property": {...},
    "campaign_history": {...}
    }
}
```
**Note:**  
Raw PII is never passed to model services-only approved derived features.

**3\. Model-Level Input & Output Specifications**

**3.1 Homeownership Detection Model**

**Input**

| **Feature Group** | **Examples** |
| --- | --- |
| Financial | Mortgage payments, escrow |
| Property | Insurance, tax signals |
| Behavioral | Address stability |

**Output**
```
{
  "homeowner_flag": true,
  "confidence": 0.94,
  "model_version": "homeowner_v1.0"
}
```
**3.2 Equity Estimation Model**

**Input**

- Homeownership signals
- Payment history
- External valuation indices (optional)

**Output**
```
{
  "estimated_home_value": 520000,
  "estimated_ltv": 0.58,
  "equity_band": "HIGH",
  "confidence": 0.81
}
```
**3.3 Persona Assignment Model**

**Input**

- Aggregated behavioral features
- Temporal features (30/60/90 days)
- Persona embeddings

**Output**
```
{
  "user_id": "U123",
  "personas": \[
    {
    "persona_id": "P_HELOC_ELIGIBLE_UNDERSERVED",
    "confidence": 0.86
    },
    {
    "persona_id": "P_RENOVATION_PLANNER",
    "confidence": 0.63
    }
    \],
  "persona_version": "2025.02"
}
```
**3.4 HELOC Propensity Model**

**Input**

- Equity band
- Income stability features
- Credit utilization
- Recent spend signals

**Output**
```
{
  "p_accept": 0.72,
  "p_draw_30d": 0.48,
  "use_case": "RENOVATION",
  "risk_flag": "LOW"
}
```
**3.5 Offer Propensity & Ranking Model**

**Input**

- User personas
- Offer attributes
- Context (time, channel)

**Output**
```
{
  "ranked_offers": \[
    {
    "offer_id": "O_HELOC_INTRO_APR",
    "score": 0.78,
    "uplift": 0.14
    },
    {
    "offer_id": "O_HOME_WARRANTY",
    "score": 0.61,
    "uplift": 0.08
    }
  \]
}
```
**3.6 Channel & Send-Time Optimization Model**

**Input**

- Campaign history
- Channel response features
- Time-of-day patterns

**Output**
```
{

"best_channel": "EMAIL",

"backup_channel": "PUSH",

"send_window": "Tue-Thu 10:00-13:00"

}
```
**3.7 SLM (Small Language Model) - Structured Tasks**

**Input**
```
{

"task": "EXPLANATION",

"features": {...},

"reason_codes": \[...\]

}
```
**Output (Schema-Bound)**
```
{

"explanation": \[

"High unused equity with stable income",

"Recent home improvement spending"

\]

}
```
**3.8 LLM - Copilot / NLQ (Guardrailed)**

**Input**
```
{

"query": "Show homeowners planning renovations in last 60 days",

"allowed_sources": \["feature_store", "persona_definitions"\]

}
```
**Output**
```
{

"generated_sql": "...",

"result_summary": "...",

"confidence": 0.92

}
```
**4\. Microservices & API Definitions**

**4.1 Persona Service**

**Purpose:**  
Authoritative service for persona discovery and assignment.

**Endpoint**

POST /v1/personas/assign

**Request**
```
{

"user_id": "U123",

"context": "BATCH|REALTIME"

}
```
**Response**
```
{

"personas": \[...\],

"model_version": "persona_v3.1"

}
```
**4.2 HELOC Intelligence Service**

**Purpose:**  
HELOC eligibility, propensity, and use-case prediction.

**Endpoint**

POST /v1/heloc/score

**Response**
```
{

"eligible": true,

"propensity": 0.72,

"use_case": "RENOVATION"

}
```
**4.3 Offer Decisioning Service**

**Purpose:**  
Offer ranking with constraints and uplift.

**Endpoint**

POST /v1/offers/recommend

**Request**
```
{

"user_id": "U123",

"persona_ids": \["P_HELOC_ELIGIBLE"\],

"context": {

"channel": "EMAIL",

"campaign_id": "C456"

}

}
```
**Response**
```
{

"ranked_offers": \[...\],

"constraints_applied": \["FREQ_CAP_OK"\]

}

**4.4 Campaign Planning Service**

**Purpose:**  
Batch orchestration for campaigns.

**Endpoint**

POST /v1/campaigns/plan
```
**Response**
```
{

"eligible_users": 124532,

"offers": \[...\],

"holdout_group": 0.1

}
```
**4.5 Explanation Service (SLM-Backed)**

**Endpoint**

POST /v1/explain/decision

**Response**
```
{

"reasons": \[...\],

"model_versions": {...}

}
```
**4.6 LLM Copilot Service (Internal Only)**

**Endpoint**

POST /v1/copilot/query

**Constraints**

- RAG-only
- No raw PII
- Prompt + response logged (hashed)

**5\. API Non-Functional Requirements**

| **Attribute** | **Requirement** |
| --- | --- |
| Latency (real-time) | < 150 ms |
| Batch throughput | Millions/hour |
| Availability | 99.9% |
| Versioning | URI-based |
| Auth | mTLS + OAuth |
| Audit | Mandatory |

**6\. Error Handling & Fallbacks**

| **Scenario** | **Action** |
| --- | --- |
| Model timeout | Fallback rules |
| LLM failure | Default explanation |
| Bias alert | HITL review |
| Drift breach | Freeze deployment |

**7\. End-to-End Flow Example (Real-Time)**

- Client calls /offers/recommend
- Persona Service assigns personas
- HELOC Service scores eligibility
- Offer Service ranks offers
- Channel model selects channel/time
- Explanation Service generates reasons
- Decision logged & returned

**8\. Logging & Audit Payload (Mandatory)**
```
{

"decision_id": "UUID",

"models_used": {...},

"inputs_hash": "SHA256",

"outputs": {...},

"timestamp": "ISO-8601"

}
```
**9\. What Teams Will Update Over Time**

- Feature lists
- Persona definitions
- Model thresholds
- Bias metrics
- Drift thresholds
- Retraining cadence
- API versions