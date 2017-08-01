# Hacksmiths Website

## Prereqs

You need Ruby installed

## Get project running locally 

1. Clone repository to your computer with `git clone https://github.com/hacksmiths/goldsmiths.tech`
2. `cd` into your repository
3. `gem install jekyll`
4. `jekyll serve --watch`

## How to add project pages

1. Copy the `sci-fi.md` file and rename the copy to `your-project-name.md`
2. Change all the details
3. Make sure there is a logo and hero image in /assets/img/projects (the naming structure and formats must stay the same - name it after your `projectname`)
4. If there are new supporters, make sure to add a tile for them in /assets/img/partners (size of the image must be the same - name it after your `projectname`)
5. Open /assets/less/projects.less and add a new block of code to change colors on this page like so: 

```
body[project="your-project-name"] {
  .project-theme(orange);
}
```

6. `git add .`
7. `git commit -m "your message here"`
8. `git push origin gh-pages`