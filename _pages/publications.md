---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
# Years shown, newest first. A year with no listed papers is skipped.
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009]
# Years before this one list only entries marked selected={true} in _bibliography/nail.bib.
selected_before: 2020
scholar_url: https://scholar.google.com/citations?user=xWRd2kgAAAAJ
---

<div class="publications nail-publications">

<p class="nail-pub-note"><strong>Note:</strong> Lab members are in bold. ★ PhD student, ♦ Master's student, † equal contribution. Before {{ page.selected_before }}, only selected papers in major venues are listed; the full record is on <a href="{{ page.scholar_url }}">Google Scholar</a>.</p>

<!-- prettier-ignore-start -->

<nav class="nail-year-nav" aria-label="Jump to year">
{%- for y in page.years -%}
{%- if y < page.selected_before -%}{%- capture q -%}@*[year={{ y }},selected=true]*{%- endcapture -%}{%- else -%}{%- capture q -%}@*[year={{ y }}]*{%- endcapture -%}{%- endif -%}
{%- capture year_count -%}{% bibliography_count -q {{ q }} %}{%- endcapture -%}
{%- assign year_count = year_count | strip | plus: 0 -%}
{%- if year_count > 0 -%}<a href="#y{{ y }}">{{ y }}</a>{%- endif -%}
{%- endfor -%}
</nav>

{% assign selected_note_shown = false %}
{% for y in page.years %}
{% if y < page.selected_before %}{% capture q %}@*[year={{ y }},selected=true]*{% endcapture %}{% else %}{% capture q %}@*[year={{ y }}]*{% endcapture %}{% endif %}
{% capture year_count %}{% bibliography_count -q {{ q }} %}{% endcapture %}
{% assign year_count = year_count | strip | plus: 0 %}
{% if year_count > 0 %}
{% if y < page.selected_before and selected_note_shown == false %}
<p class="nail-selected-note">Before {{ page.selected_before }}: selected papers in major venues. For the complete list, see <a href="{{ page.scholar_url }}">Google Scholar</a>.</p>
{% assign selected_note_shown = true %}
{% endif %}
<section class="nail-year" aria-labelledby="y{{ y }}">
<h2 id="y{{ y }}" class="nail-year-heading">{{ y }}<span class="nail-year-count">{{ year_count }} {% if y < page.selected_before %}selected {% endif %}{% if year_count == 1 %}paper{% else %}papers{% endif %}</span></h2>
{% bibliography -q {{ q }} --group_by none %}
</section>
{% endif %}
{% endfor %}

<!-- prettier-ignore-end -->

</div>

<script src="{{ '/assets/js/nail-publications.js' | relative_url }}" defer></script>
