---
title: Links
projectname: links
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths, University of London.

links:
  - name: Handbook
    desc: An explanation of our processes and expectations.
    url: https://github.com/hacksmiths/handbook/
    platform: Public
  - name: Hacksmiths HQ
    desc: Contains team profiles, finances, contacts and inventory.
    url: https://airtable.com/tblPmgNmMxihrOc99
    platform: Requires Airtable access
  - name: Hacksmiths Pipes
    desc: Our pipeline & sales tool to track sponsorship deals
    url: https://airtable.com/tblRCeRO60TnEkAbd
    platform: Requires Airtable access
  - name: Credentials
    desc: Contains our usernames and passwords for online accounts.
    url: https://airtable.com/tblCRzslSpwr2VAdB
    platform: Requires Airtable access
  - name: Committee Facebook Group
    desc: For ad-hoc discussions/questions/support requests.
    url: https://www.facebook.com/groups/657541384457046
    platform: Requires adding
  - name: Google Drive Folder
    desc: Where our files live - slides, photos, invoices, assets, etc
    url: https://drive.google.com/drive/folders/0B9BnNXF3WcjGOG9MZUFobWxjVEk?usp=sharing
    platform: Public, but don't share
---

<section class="events links">
    <div class="container">
        <div class="row">
            <h2>Committee Crib Sheet</h2>
            {% for link in page.links %}
                <div class="col-sm-4 event-single">
                    <a href="{{link.url}}">
                        <div class="feature feature-1">
                            <div class="feature__body boxed boxed--border">
                                <h5>{{link.name}}</h5>
                                <p>{{link.desc}}</p>
                                <small>{{link.platform}}</small>
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
    </div>
</section>

<hr>
