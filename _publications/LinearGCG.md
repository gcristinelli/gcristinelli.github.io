---
title: "Linear convergence of a one-cut conditional gradient method for total variation regularization"
collection: publications
category: conferences
permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'Joint work with: [José A. Iglesias](https://scholar.google.com/citations?user=SGkCSwUAAAAJ&hl=de) (University of Twente) and [Daniel Walter](https://scholar.google.com/citations?user=4dP_d_wAAAAJ&hl=de) (HU Berlin)'
date: 2025-04-23
venue: 'Arxiv'
#slidesurl: 'https://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://arxiv.org/pdf/2504.16899'
citation: 'Cristinelli, G., Iglesias, J. A., Walter, D. (2025). &quot;Linear convergence of a one-cut conditional gradient method for total variation regularization.&quot; <i>arxiv</i>. 2504.16899.'
---
Joint work with: [José A. Iglesias](https://scholar.google.com/citations?user=SGkCSwUAAAAJ&hl=de) (University of Twente) and [Daniel Walter](https://scholar.google.com/citations?user=4dP_d_wAAAAJ&hl=de) (HU Berlin)

We introduce a fully-corrective generalized conditional gradient method for convex minimization problems involving total variation regularization on multidimensional domains. It relies on alternatively updating an active set of subsets of the spatial domain and an iterate given by a conic combination of the associated characteristic functions. Different to previous approaches in the same spirit, the computation of a new candidate set only requires the solution of one prescribed mean curvature problem, instead of the resolution of a fractional minimization task analogous to finding a generalized Cheeger set. After discretization, the former can be realized by a single run of a graph cut algorithm, leading to a significant speedup in practice. We prove the global sublinear convergence of the resulting method, under mild assumptions, and its asymptotic linear convergence in a more restrictive two-dimensional setting which uses results of stability of surfaces of prescribed mean curvature under perturbations of the curvature. Finally, we numerically demonstrate this convergence behavior in some model PDE-constrained minimization problems.

Code available here: [Zenodo](https://zenodo.org/records/15231158) of [Github](https://github.com/gcristinelli/One-cut-conditional-gradient).
