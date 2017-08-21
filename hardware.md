---
title: Hardware
projectname: hardware
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths, University of London.
---
<section class="hardware">
  <div class="container">
    <div class="text-center">
      <h1 class="h2">This is our hardware lab.</h1>
      <h3>You'll find this equipment ready to use at Code & Craft and our hackathons.</h3>
    </div>
    <div class="list">
      {% for item in site.data.hardware %}
        <div class="col-sm-4 event-single">
          <div class="feature feature-1">
            <img src="/assets/img/hardware/{{item.photo}}.png">
            <div class="feature__body boxed boxed--border">
              <h5>{{item.name}}</h5>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
</div>
</section>
<hr>
