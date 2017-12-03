---
title: Team
projectname: team
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths, University of London.
---


<section class="text-center team">
  <div class="container">
    <h1>Our team</h1>
    <h2>We're super friendly and happy to answer any questions you may have about Hacksmiths or our projects.</h2>
    <div class="grid-columns">
      {% for person in site.data.team %}
        <div class="person">
          <img src="/assets/img/team/{{person.photo}}.jpg">
          <h5>{{person.name}}</h5>
          {% if person.role %}
            <span>{{person.role}}</span>
          {% else %}
            <span>Committee Member</span>
          {% endif %}
          <br><a href="mailto:{{person.email}}">{{person.email}}</a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<hr>