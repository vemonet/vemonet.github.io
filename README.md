# Vincent Emonet personal website

## Getting Started

Personal website built with Gatsby, TypeScript and Material UI.

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


Kick off your project with this [Material-ui](https://material-ui.com/) boilerplate (forked from [this](https://github.com/Junscuzzy/gatsby-material-typescript-starter) repository and edited with personal preferences).

This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the starter
    gatsby new gatsby-material-typescript-starter https://github.com/Lindeneg/gatsby-material-typescript-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-material-typescript-starter/
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-material-typescript-starter` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

All the commands are in your `package.json > scripts`.

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

CV template: https://freehtml5.co/preview/?item=profile-free-html5-bootstrap-template-for-personal-and-vcard,-resume-websites

Convert image to 300kb (required for WhatsApp thumbnails): https://www.imgonline.com.ua/eng/compress-image-size-result.php

Doing the CV in RDF: http://rdfs.org/resume-rdf/

Or just generating FOAF: http://www.ldodds.com/foaf/foaf-a-matic