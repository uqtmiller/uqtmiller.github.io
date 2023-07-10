---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Part one

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

Part two

{% include base_path %}


Part three

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

Part four

<p>This page lists peer-reviewed publications that I have (co-)authored, as well as some under preparation that are complete enough for download. Most papers are downloadable, however, in many cases, these are pre-print versions.</p>

<p>
<script src="https://bibbase.org/show?bib=http://people.eng.unimelb.edu.au/tmiller/pubs.bib&theme=default&jsonp=1"></script>
</p>

END
