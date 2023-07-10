---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<p>This page lists peer-reviewed publications that I have (co-)authored, as well as some under preparation that are complete enough for download. Most papers are downloadable, however, in many cases, these are pre-print versions.</p>

<p>
<script src="https://bibbase.org/show?bib=http://people.eng.unimelb.edu.au/tmiller/pubs.bib&theme=default&jsonp=1"></script>
</p>
