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
        <div class="col-sm-12 event-single">
          <div class="feature feature-1 row">
            <img src="/assets/img/hardware/{{item.photo}}.png" class="col-sm-4">
            <div class="feature__body boxed col-sm-8">
              <h5>{{item.name}}</h5>
              <p>{{item.desc}}</p>
              <a class="url btn btn--primary" href="{{item.url}}" target="_blank">Find out more</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
</div>

<hr>
