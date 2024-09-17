# Data Server for hiPSC-CM Differentiation and Maturation Protocols

**Last Updated:** 17th September, 2024

## Overview
This data server compiles and analyzes over 300 published protocols for the differentiation and maturation of human induced pluripotent stem cells (hiPSC) into cardiomyocytes (hiPSC-CMs). The goal of this server is to consolidate knowledge and benchmark various methods that have historically been difficult to compare due to exclusivity to certain research groups and varying experimental designs.

Our study utilizes a robust feature selection approach to optimize protocols and identify factors that influence the physiological performance of hiPSC-CMs. Through comprehensive statistical analyses and validation studies, we have uncovered common themes that enhance cardiomyocyte function.

The preprint of our study is available at [DOI: 10.1101/2024.09.04.611313](https://doi.org/10.1101/2024.09.04.611313).

## Features
- **Browse Protocols**: [Explore the protocol database](benchmark_tool.html)
- **Explore Findings**: [View statistical findings and enriched protocols](result_plots.html)
- **Download Datasets**: [Access the full dataset](credits.html)
  
### Contact
For more information, please contact: [n.palpant@uq.edu.au](mailto:n.palpant@uq.edu.au).

## About This Server

### What analyses were done?
We mined 314 hiPSC-CM studies to derive data-driven recommendations for enhancing hiPSC-CM maturation. Each maturation parameter has been evaluated across 15 series of protocol combinations, including genetic background, media, and supplements, to provide guidance for optimizing functional outcomes. 

### What does the current dataset contain?
Ewoldt et al. systematically analyzed 300 studies focused on cardiomyocyte maturation, primarily targeting protocols designed to model adult cardiac disease. We expanded on this dataset with additional metabolic maturation studies and annotated variables like cell sex and ancestry.

### What are the limitations?
This study addresses the challenges of benchmarking highly variable protocols. However, limitations include:
- **Ascertainment Bias**: Limited representation may obscure emerging protocol modifications.
- **Generalization Challenges**: Molecular variables may not directly correlate to functional outcomes.
- **Ordinal Relationships**: Data encoding methods may introduce technical artifacts.
- **Assay Design Differences**: Variations in 2D vs. 3D culture models may lead to contradictory findings.

Despite these challenges, we encourage users to submit their own protocols for benchmarking against the dataset.

## FAQ

### How do I commit my experimental data?
We welcome user-submitted protocols, even unpublished data. Our server allows you to perform similarity checks by comparing your protocol with existing studies. Once submitted, we will manually process and integrate your data into the database.
