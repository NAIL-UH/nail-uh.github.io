---
layout: page
permalink: /research/
title: Research
description:
nav: true
nav_order: 1
---

<!-- The four research directions come from _data/research.yml; each links to its own page in _pages/research/. Their images are split from nail-site-kit/research-art/research_areas.png. -->

<div class="nail-research-overview">

<p class="nail-research-intro">Our research advances the foundations of safe, intelligent, and collaborative autonomous systems, bridging machine learning, control theory, robotics, and embedded AI to enable reliable autonomy in complex real-world environments. Each of our four research directions has its own page with its funded projects and representative publications; the full list is on the <a href="{{ '/publications/' | relative_url }}">Publications</a> page.</p>

<!-- prettier-ignore-start -->

<ul class="nail-area-grid">
{% for area in site.data.research.areas %}
{% capture area_count %}{% bibliography_count -q @*[research_area~={{ area.id }}]* %}{% endcapture %}
{% assign area_grants = site.data.research.grants | where: "area", area.id %}
<li class="nail-area-card">
<a class="nail-area-card-media" href="{{ area.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ area.image | prepend: '/assets/img/research/' | relative_url }}" alt="" width="765" height="510" loading="lazy"></a>
<div class="nail-area-card-body">
<span class="nail-area-num">Direction {{ forloop.index }}</span>
<h2><a href="{{ area.url | relative_url }}">{{ area.title }}</a></h2>
<p>{{ area.summary }}</p>
{% if area_grants.size > 0 %}
<ul class="nail-area-funding" aria-label="Funding">
{% for grant in area_grants %}
<li><span class="nail-area-funding-logo"><img src="{{ grant.logo | prepend: '/assets/img/funders/' | relative_url }}" alt=""></span>{{ grant.sponsor }}{% if grant.program %} {{ grant.program }}{% endif %} &middot; {{ grant.period }}</li>
{% endfor %}
</ul>
{% endif %}
{% assign area_n = area_count | strip | plus: 0 %}
<a class="nail-area-more" href="{{ area.url | relative_url }}">Explore this direction{% if area_n > 0 %} <span class="nail-area-more-count">&middot; {{ area_n }} representative paper{% if area_n != 1 %}s{% endif %}</span>{% endif %} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
</div>
</li>
{% endfor %}
</ul>

<!-- prettier-ignore-end -->

</div>
