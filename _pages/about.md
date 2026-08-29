---
layout: home
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello there! 

I am PhD candidate in the [Mathematics of Imaging & AI](https://www.utwente.nl/en/eemcs/mia/) research group under the supervision of dr. [José A. Iglesias](https://scholar.google.com/citations?user=SGkCSwUAAAAJ&hl=de) and prof. dr. [Christoph Brune](https://scholar.google.com/citations?user=QkD3WhsAAAAJ&hl=en). 

I have been working on inverse problems with PDE constraints and sparse optimization. My research focuses on translating and applying known sparse optimization methods to a broad range of inverse problems, where geometric priors are encoded through PDE constraints. Check out my list of [Publications](https://gcristinelli.github.io/publications/).

I am particularly interested in turning mathematical models into methods that are actually competitive in practice, and in understanding why effective heuristic methods are mathematically sound, especially in areas such as computer graphics and geometry processing. My technical work spans Python and C++ for finite element methods, optimization, and large-scale numerical computation.

I am currently expanding my expertise towards computational geometry and simulation-driven design, with the goal of contributing to the development of next-generation engineering and design tools.

I will be available for new opportunities starting October 2026. I am interested in junior or internship positions in R&D, as well as PostDoc positions with possible industry collaboration. I am open to relocation.

<section class="hobby-gallery" aria-labelledby="hobbies-heading">
  <div class="hobby-gallery__intro">
    <p>Away from the desk</p>
    <h2 id="hobbies-heading">Climbing, hiking, table tennis &amp; chess</h2>
  </div>
  <figure class="hobby-gallery__image hobby-gallery__image--chess">
    <img src="{{ '/images/Activity1.jpeg' | relative_url }}" alt="Giacomo playing chess" loading="lazy">
  </figure>
  <figure class="hobby-gallery__image hobby-gallery__image--climbing">
    <img src="{{ '/images/Activity3.jpeg' | relative_url }}" alt="Giacomo climbing outdoors" loading="lazy">
  </figure>
  <figure class="hobby-gallery__image hobby-gallery__image--cycling">
    <img src="{{ '/images/Activity6.jpeg' | relative_url }}" alt="Giacomo cycling in the mountains" loading="lazy">
  </figure>
  <figure class="hobby-gallery__image hobby-gallery__image--table-tennis">
    <img src="{{ '/images/Activity7.jpeg' | relative_url }}" alt="Giacomo playing table tennis" loading="lazy">
  </figure>
</section>

<div class="mobile-one-page">
  <section id="publications" class="mobile-one-page__section" aria-labelledby="publications-heading">
    <h2 id="publications-heading">Publications</h2>
    <div class="mobile-one-page__list">
      {% for post in site.publications reversed %}
        <article class="mobile-one-page__item">
          <p class="mobile-one-page__meta">{{ post.date | date: "%Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</p>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          {% if post.excerpt %}<p>{{ post.excerpt | markdownify | strip_html }}</p>{% endif %}
        </article>
      {% endfor %}
    </div>
  </section>

  <section id="activities" class="mobile-one-page__section" aria-labelledby="activities-heading">
    <h2 id="activities-heading">Activities</h2>
    <div class="mobile-one-page__list">
      {% for post in site.talks reversed %}
        <article class="mobile-one-page__item">
          <p class="mobile-one-page__meta">{{ post.date | date: "%Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</p>
          <h3>{{ post.title }}</h3>
          {% if post.excerpt %}<p>{{ post.excerpt | markdownify | strip_html }}</p>{% endif %}
        </article>
      {% endfor %}
    </div>
  </section>

  <section id="teaching" class="mobile-one-page__section" aria-labelledby="teaching-heading">
    <h2 id="teaching-heading">Courses and support</h2>
    <div class="mobile-one-page__list">
      {% for post in site.teaching reversed %}
        <article class="mobile-one-page__item">
          <p class="mobile-one-page__meta">{{ post.date | date: "%Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</p>
          <h3>{{ post.title }}</h3>
          {% if post.excerpt %}<p>{{ post.excerpt | markdownify | strip_html }}</p>{% endif %}
        </article>
      {% endfor %}
    </div>
  </section>

  <section id="topics" class="mobile-one-page__section" aria-labelledby="topics-heading">
    <h2 id="topics-heading">Notes</h2>
    <div class="mobile-one-page__list">
      {% for post in site.portfolio reversed %}
        <article class="mobile-one-page__item">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          {% if post.excerpt %}<p>{{ post.excerpt | markdownify | strip_html }}</p>{% endif %}
        </article>
      {% endfor %}
    </div>
  </section>

  <section id="cv" class="mobile-one-page__section mobile-one-page__cv" aria-labelledby="cv-heading">
    <h2 id="cv-heading">Curriculum vitae</h2>
    {% assign cv_page = site.pages | where: "url", "/cv/" | first %}
    {% if cv_page %}
      {{ cv_page.content | markdownify }}
    {% endif %}
  </section>
</div>
