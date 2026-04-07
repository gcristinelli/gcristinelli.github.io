---
title: "Conditional Gradients for Total Variation regularization with PDE constraints: a graph cuts approach"
collection: publications
category: manuscripts
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'Joint work with: [José A. Iglesias](https://scholar.google.com/citations?user=SGkCSwUAAAAJ&hl=de) (University of Twente) and [Daniel Walter](https://scholar.google.com/citations?user=4dP_d_wAAAAJ&hl=de) (University of Linz, previously at HU Berlin)'
date: 2025-10-09
venue: 'Computational Optimization and Applications'
paperurl: 'https://link.springer.com/article/10.1007/s10589-025-00699-4'
bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'
citation: 'Cristinelli, G., Iglesias, J. A., Walter, D. (2025). &quot;Conditional Gradients for Totat Variation regularization with PDE constraints: a graph cuts approach.&quot; <i>Comput. Optim. Appl.</i>. 93(209-265).'
---
Joint work with: [José A. Iglesias](https://scholar.google.com/citations?user=SGkCSwUAAAAJ&hl=de) (University of Twente) and [Daniel Walter](https://scholar.google.com/citations?user=4dP_d_wAAAAJ&hl=de) (University of Linz, previously at HU Berlin)

Total variation regularization has proven to be a valuable tool in the context of optimal control of differential equations. This is particularly attributed to the observation that TV-penalties often favor piecewise constant minimizers with well-behaved jumpsets. On the downside, their intricate properties significantly complicate every aspect of their analysis, from the derivation of first-order optimality conditions to their discrete approximation and the choice of a suitable solution algorithm. In this paper, we investigate a general class of minimization problems with TV-regularization, comprising both continuous and discretized control spaces, from a convex geometry perspective. This leads to a variety of novel theoretical insights on minimization problems with total variation regularization as well as tools for their practical realization. First, by studying the extremal points of the respective total variation unit balls, we enable their efficient solution by geometry exploiting algorithms, e.g. fully-corrective generalized conditional gradient methods. We give a detailed account on the practical realization of such a method for piecewise constant finite element approximations of the control on triangulations of the spatial domain. Second, in the same setting and for suitable sequences of uniformly refined meshes, it is shown that minimizers to discretized PDE-constrained optimal control problems approximate solutions to a continuous limit problem involving an anisotropic total variation reflecting the fine-scale geometry of the mesh.

Code available here: [Zenodo](https://zenodo.org/records/12744209) of [Github](https://github.com/gcristinelli/Galerkin-Conditional-Gradient/tree/1.0.0).
