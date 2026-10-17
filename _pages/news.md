---
layout: page
title: News
permalink: /news/
description:
---

<!-- All news, newest first, in the same timeline as the home page. Each item's type is the `kind` in its front matter. -->

<ol class="nail-timeline nail-timeline-page">
{% assign all_news = site.news | reverse %}
{% for item in all_news %}
{% include nail_news_item.liquid item=item %}
{% endfor %}
</ol>
