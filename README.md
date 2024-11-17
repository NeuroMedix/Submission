# NeuroMedix: Accelerating Drug Discovery for Alzheimer's Disease

## Project Overview

<div align="center">
    <img src="https://github.com/NeuroMedix/Submission/blob/main/logo.png" alt="Alt text" width="500"/>
</div>

**NeuroMedix** leverages advanced machine learning to accelerate drug design. Most drugs are derived from natural compounds and then optimized, rather than being synthesized from scratch in a lab. To support this approach, we use and refine the NP-VAE (Natural Product-oriented Variational Autoencoder) model developed by Ochiai et al. 2023, designed specifically to handle complex, biologically active natural compounds. Trained on 30,000 compounds from DrugBank and a dataset of natural compounds, NP-VAE overcomes limitations that traditional VAE models face in processing natural product data.

Our project focuses on Alzheimer’s Disease (AD), a neurodegenerative disorder affecting memory, cognition, and behavior, and the 7th leading cause of death worldwide. NeuroMedix refines the NP-VAE model and adapts it for FDA-approved drugs targeting AD, facilitating the discovery of new, synthesizable drug candidates.

## How the Model Works

The NP-VAE model operates in two stages:

1. **Encoding**: A molecule in SMILES format of a known drug compound is compressed into a latent representation.
2. **Decoding**: This latent representation is used to reconstruct or generate new molecular structures in SMILES format, enabling the discovery of potential drug analogues.

## Key Innovation

NeuroMedix introduces an interactive platform where scientists and pharmaceutical companies can enter an FDA-approved drug into a search bar and receive suggestions for novel, synthesizable drug candidates with similar structures. This scalable approach can be expanded to target other diseases, offering small pharmaceutical companies a streamlined path to developing new treatments.

## Repository Structure

The repository includes the following folders:

- **`model_v1`**: Custom-built VAE model for generating SMILES strings, designed to aid in the drug discovery process.
- **`model_v2`**: NP-VAE model, as developed by Ochiai et al. (2023), adapted for generating analogues of FDA-approved Alzheimer’s disease drugs.
- **`client`**: Website allowing users to input an FDA-approved drug and retrieve top 3 suggested analogues with structurally similar features, facilitating quick exploration of potential drug candidates.

## Citation

Ochiai, T., Inukai, T., Akiyama, M. et al. "Variational autoencoder-based chemical latent space for large molecular structures with 3D complexity." *Communications Chemistry*, 6, 249 (2023). https://doi.org/10.1038/s42004-023-01054-6
