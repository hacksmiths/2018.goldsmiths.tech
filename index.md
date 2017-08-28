---
title: Home
projectname: home
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths, University of London.
---

<section class="switchable feature-large bg--secondary hero">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-5">
                <div class="switchable__text">
                    <img src="/assets/img/logo-hacksmiths.svg" alt="Hacksmiths Logo">
                    <p class="lead"> Hacksmiths is the student-run tech society at Goldsmiths. Our mission is to provide an opportunity for people in all departments and from all backgrounds the chance to learn about, and play with, technology. </p>
                    <a class="btn btn--sm btn--primary type--uppercase" href="/join"> <span class="btn__text">Join for free</span> </a>
                    <a class="btn btn--sm type--uppercase" href="http://twitter.com/hacksmiths"> <span class="btn__text"><i class="socicon socicon-twitter icon icon--xs"></i></span> </a>
                    <a class="btn btn--sm type--uppercase" href="http://facebook.com/hacksmiths"> <span class="btn__text"><i class="socicon socicon-facebook icon icon--xs"></i></span> </a>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="boxed boxed--lg boxed--border">
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Weekly Code &amp; Craft</h5>
                            <p>A friendly and supportive environment to play around with new ideas and get support. Wednesdays at 4-6pm from November 1.<br></p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Monthly talks &amp; workshops</h5>
                            <p> A range of interesting content from students, staff and industry professionals. Check Facebook for announcements.</p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Hackathons &amp; jams</h5>
                            <p>Invention marathons which bring together people with varying skills to build awesome projects. Find out more below.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="text-center cta cta-4 space--xxs border--bottom bg--primary cta-lottery">
    <a href="/join">
        <div class="container">
            <div class="row">
                <div class="col-sm-12"> <span>Join before the end of October to be entered into a raffle to win a beginners electronics kit!</span> </div>
            </div>
        </div>
    </a>
</section>

<section class="events">
    <div class="container">
        <div class="row">
            <h2>Our events</h2>
            {% for event in site.data.events %}
                <div class="col-sm-4 event-single">
                    <a {% unless event.url == "undefined" %} href="{{event.url}}" {% endunless %}>
                        <div class="feature feature-1">
                            <div class="feature__body boxed boxed--border">
                                <h5>{{event.name}}</h5>
                                <p>{{event.line}}</p>
                                <small>{{event.date}}</small>
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <h3><a href="https://calendar.google.com/calendar/embed?src=jc9ssh98m6poas5pdk6c5d966p73m5n0%40import.calendar.google.com&ctz=Europe/London">Click here for a full calendar which you can import to your own apps.</a></h3>
    </div>
</section>

{% include valuable-skills.html %}
