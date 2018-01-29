---
title: Home
projectname: home
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths,
  University of London.
---

<section class="switchable feature-large bg--secondary hero">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-5">
                <div class="switchable__text">
                    <img src="/assets/img/logo-hacksmiths.svg" alt="Hacksmiths Logo">
                    <p class="lead"> Hacksmiths is the student-run tech society at Goldsmiths. Our mission is to provide an opportunity for people in all departments and from all backgrounds the chance to learn about, and play with, technology. </p>
                    <a class="btn btn--sm btn--primary type--uppercase" href="/join"> <span class="btn__text">Become a member - join for free</span> </a>
                    <br>
                    <a href="//www.youtube.com/watch?v=pkHNc2wiNxI" class="btn btn--sm type--uppercase" data-lity>
                        <i class="socicon icon socicon-youtube"></i>
                        <span>What we do</span>
                    </a>
                    <a href="https://m.me/smithsbot" class="btn btn--sm type--uppercase" target="_blank">
                        <i class="socicon icon socicon-messenger"></i>
                        <span>Get updates</span>
                    </a>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="boxed boxed--lg boxed--border">
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Weekly Code &amp; Craft</h5>
                            <p>A friendly and supportive environment to play around with new ideas and get support. Suitable for all skill levels.<br></p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Monthly talks &amp; workshops</h5>
                            <p> A range of interesting content from students, staff and industry professionals. Suitable for complete beginners.</p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Hackathons &amp; jams</h5>
                            <p>Invention marathons which bring together people with varying skills to build awesome projects. Suitable for all skill levels.</p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Lovelace</h5>
                            <p>A social event series for women and non binary people interested in technology at goldsmiths. Suitable for all skill levels.</p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Community Series</h5>
                            <p>Supporting students and staff to run their tech events with mentorship and funding.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="highlights">
    <div class="container">
        <div class="row grid">
            <img src="/assets/img/highlights/team.jpg" alt="Team working together">
            <img src="/assets/img/highlights/phoenix.jpg" alt="Phoenix at Sex Tech Hack">
            <img src="/assets/img/highlights/panda.jpg" alt="Hacker working with electronics">
            <img src="/assets/img/highlights/vr.jpg" alt="Hacker using VR kit">
        </div>
    </div>
</section>

<section class="events">
    <div class="container">
        <div class="row">
            <h2>Upcoming events</h2>
            <div class="upcoming">
                {% for event in site.data.events %}
                    {% unless event.past %}
                        <a class="event-single {% if event.community %} c {% endif %}" href="{{event.url}}">
                            <h5>{{event.name}}</h5>
                            <p>{{event.line}}</p>
                            <small>{{event.date}}</small>
                        </a>
                    {% endunless %}
                {% endfor %}
            </div>
        </div>
    </div>
    <div class="community">
        <div class="container">
            <img src="/assets/img/community-white.svg" alt="Hacksmiths Community Series">
            <p>Get mentorship, support, exposure and budget to run your tech-focussed events</p>
            <a href="/community" class="btn type--uppercase btn--primary">Find out more</a>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <h2>Past events this year</h2>
            <div class="past">
                {% for event in site.data.events %}
                    {% if event.past %}
                        <a class="event-single" href="{{event.url}}">
                            <h5>{{event.name}}</h5>
                            <small>{{event.date}}</small>
                        </a>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
</section>

{% include valuable-skills.html %}
