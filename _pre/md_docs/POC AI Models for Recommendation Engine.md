# OI - POC AI Models for Recommendation Engine

## Persona Types

1. **Core personas** (stable, pre-trained)

## Platform Models and Workflow

### Flow 1: Based on Pre-Trained Personas

The user starts by selecting one pre-trained persona (Home Owners)

### Flow Steps:

1. The user selects the Home Owners (**Core personas**)
    * In this case we must develop the following models to list them in the library:
        * ***Segmentation Model*** - *Traditional ML (Unsupervised Learning)*
        * ***Client Embedding model*** - *Traditional ML (Unsupervised Learning)*
        * ***Feature Importance model*** - *Traditional ML (Supervised Learning)*
        * ***Description Generator Model*** - *Natural Language (Traditional NLP) or Manual*
2. The system displays the composition of that segment (visualization with ***client embeddings model***).
3. A model calculates the acquisition propensity for each available product and the system recommends the ideal products for that population.
    * Models:
        * ***Affinity model-Based Recommendation (Client/Persona – All Products)*** - Traditional ML (Recommender System)
4. The user selects the desired product offer from the recommended list for the specific persona.
5. The system displays a list of clients with detailed information, including the products they own.

**Technical details about the models are included in: [OI - POC AI Models Business Communication Artifact - FIG Data Services Acceleration - Confluence Enterprise](https://enterprise-confluence.onefiserv.net/spaces/FDSA/pages/988223515/OI+-+POC+AI+Models+Business+Communication+Artifact)**

