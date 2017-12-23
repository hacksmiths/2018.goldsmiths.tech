![](http://goldsmiths.tech/assets/img/logo-hacksmiths.svg)
# Hacksmiths Website

## First time setup

You need Ruby and Node.js installed. There's a guide for Ruby [here](https://www.ruby-lang.org/en/documentation/installation/), and a download for Node.js [here](https://nodejs.org/en/download/).

Clone this repository with `git clone https://github.com/hacksmiths/goldsmiths.tech-jekyll`

Install jekyll with `gem install jekyll`

Install our gulp dependendies with `npm install gulp gulp-less gulp-csscomb gulp-uncss gulp-clean-css`

Every time you want to run the local server which is reactive to changes, just run `jekyll serve --watch`

If you've made styling changes, run our Gulp task with `gulp css`

## Site folder structure


* `_data/`
    * `events.yml` -- data for the homepage
    * `hardware.yml` -- data for the hardware lab page
    * `team.yml` -- data for the team page
* `includes/` -- this folder contains parts of site which are pulled into templates
* `layouts/`
    * `default.html` -- core HTML for every page
    * `project.html` -- layout for project page
    * `soon.html` -- minimal layout for project page
* `assets/`
    * `less/` -- contains our stylesheets which are compiled on the client
        * `projects.less` -- this file contains project-specific color styling
    * `img/`
        * `hardware/` -- contains photos for hardware lab
        * `partners/` -- contains photos for sponsor section of project layout
        * `team/` -- contains photos for team page
        * `projects/:name` -- contains assets for each project
            * `hero.jpg` -- hero image for project
            * `logo.svg` -- image for top of project page
            * `og.png` -- share image for project
* `docs/` -- this is our site output which is live on the site. Don't touch this as it gets automatically generated and updated.
* `*.md` -- these are single pages on our site, which get compiled into .html files in /docs

## Creating new pages

* Create a new .md file
* Grab a similar page and copy it's contents
    * `about.md` is good for a static page
    * `ex-full.md` is good for a full project
    * `ex-soon.md` is good for a project which needs a page, but isn't ready to have full information yet
* Edit details

### If it's a project page

* If you need to add new supporters please make sure the image is the correct size as per the template.
* If you need to add new assets make sure the folder in `/assets/img/projects` is the same name as what you give the `projectname` property at the top of the page. The projectname value is how all of this gets puleed together from our templates.
* If you have any first-time supporters, make sure the image block is the correct size, and ideally with a colour background. Once they're in, you can refer to them by name in the `supporters` yaml value.
* If you want a specific sharing image - make sure to drop the image in the project's image folder and give the path to it in the `og` yaml value.
* Open /assets/less/projects.less and add a new block of code to change colors on this page like so: 

```
body[project="your-project-name"] {
  .project-theme(orange);
}
```

## How to deploy

Push a new commit and the updates will go live. As a reminder on how to do that:

* `gulp css`
* `jekyll build`
* `git add .`
* `git commit -m "your message here"`
* `git push origin master`