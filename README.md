# [Start Bootstrap](http://startbootstrap.com/) - [Freelancer](http://startbootstrap.com/template-overviews/freelancer/)

CV template: https://freehtml5.co/preview/?item=profile-free-html5-bootstrap-template-for-personal-and-vcard,-resume-websites

## Getting Started

To begin using this template, choose one of the following options to get started:
* [Download the latest release on Start Bootstrap](http://startbootstrap.com/template-overviews/freelancer/)
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-freelancer.git`


## To do

* In Publications add a link to https://www.researchgate.net/scientific-contributions/2077861418_Vincent_Emonet

* 2 download links: vCard and Resume PDF

* Voyages: faire une page simple avec des titres (California, Benelux)

* Really simple version: http://themes.3rdwavemedia.com/demo/orbit/

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

## Doing the résumé in RDF

http://rdfs.org/resume-rdf/
