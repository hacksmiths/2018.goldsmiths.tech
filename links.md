---
title: Links
projectname: links
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths,
  University of London.
links:
- name: Handbook
  desc: An explanation of our processes and expectations.
  url: https://github.com/hacksmiths/handbook/
- name: Playbook
  desc: Explains why and how we run our different projects.
  url: https://github.com/hacksmiths/handbook/
- name: Hacksmiths HQ
  desc: Contains team profiles, finances, contacts and inventory.
  url: https://airtable.com/tblPmgNmMxihrOc99
- name: Credentials
  desc: Contains our usernames and passwords for online accounts.
  url: https://airtable.com/tblCRzslSpwr2VAdB
- name: Committee Facebook Group
  desc: For ad-hoc discussions/questions/support requests.
  url: https://www.facebook.com/groups/657541384457046
- name: Google Drive Folder (2017+)
  desc: Where our files live - slides, photos, invoices, assets, etc
  url: https://drive.google.com/drive/folders/0B9BnNXF3WcjGOG9MZUFobWxjVEk?usp=sharing
- name: Google Drive Folder (Pre 2017)
  desc: Where our files live - slides, photos, invoices, assets, etc
  url: https://drive.google.com/drive/folders/0B0c88K_qBNJqeGNOcTQzOUFITmc?usp=sharing
- name: 2017-2018 Prospectus
  desc: A visual rundown of our events in the 2017-2018 year
  url: "/assets/files/prospectus.pdf"
- name: 2017-2018 Tiers
  desc: Our pricing document for our 2017-2018 events.
  url: "/assets/files/tiers.pdf"
- name: Padlock
  desc: 326
  url: 
- name: Anvil Hack IV and Music Hack Day Prospectus
  desc: Sponsorhsip decl
  url: http://bit.ly/hacksmiths18
---

<section class="internal-links">
    <div class="container">
        <h2>Internal Links</h2>
        <ul>
          {% for link in page.links %}
            <li>
              <a href="{{link.url}}">
                <p><b>{{link.name}}</b></p>
                <p>{{link.desc}}</p>
              </a>
            </li>
          {% endfor %}
        </ul>
    </div>
</section>

<hr>
