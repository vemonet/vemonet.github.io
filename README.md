# Vincent Emonet personal website

[![Deploy to GitHub Pages](https://github.com/vemonet/vemonet.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vemonet/vemonet.github.io/actions/workflows/deploy.yml)

## Getting Started

Personal website built with Gatsby, TypeScript and [Material UI](https://material-ui.com/).

```bash
yarn
```

Start in development:

```bash
yarn dev
```

Build in the `public` folder:

```bash
yarn build
```

Your site is now running at http://localhost:8000

_Note: You'll also see a second link: http://localhost:8000/___graphql. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

All the commands are in the `package.json` > `scripts`.

## Using Sass to precompile the CSS

Use `sass/style.scss` then compile it to `css/style.css` to change the CSS
It will resolve all variable used in the SCSS. You can also directly change the themes.css, but it will be override if themes.scss is compiled into themes.css


* Install Sass
```
gem install sass
```

* Convert scss to css (basically juste changing variables)
```shell
sass sass/style.scss css/style.css
```

* Tell Sass to watch the file or the whole scss directory and update the CSS every time the Sass file changes
```
sass --watch sass/style.scss:css/style.css
sass --watch scss:css
```

* How to use variables
```css
$nav-color-light: #0080FF;
.navbar-inverse {
  border-color: $nav-color-light;
}
```

## Links

Gatsby website built using https://github.com/Lindeneg/gatsby-material-typescript-starter

CV template: https://freehtml5.co/preview/?item=profile-free-html5-bootstrap-template-for-personal-and-vcard,-resume-websites

Convert image to 300kb (required for WhatsApp thumbnails): https://www.imgonline.com.ua/eng/compress-image-size-result.php

Doing the CV in RDF: http://rdfs.org/resume-rdf/

Or just generating FOAF: http://www.ldodds.com/foaf/foaf-a-matic