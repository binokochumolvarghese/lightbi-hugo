# LightBi Hugo 

Simple, minimal personal website and blog theme for Hugo. Forked from [Beautiful Hugo](https://github.com/halogenica/beautifulhugo).

### Demo

[lightbi-hugo-theme.netlify.app](https://lightbi-hugo-theme.netlify.app/)


![LightBi Hugo Theme Screenshot](https://github.com/binokochumolvarghese/lightbi-hugo/blob/master/screenshots/lightbi-home-ss.png)

#### Notes Section
![LightBi Hugo Theme Screenshot](https://github.com/binokochumolvarghese/lightbi-hugo/blob/master/screenshots/lightbi-notes-ss.png)

## Installation

    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/binokochumolvarghese/lightbi-hugo.git lightbi

After cloning the theme, open the command prompt and run the below commands to build and start the project.
```
#to build the website
hugo

#to run the website
hugo server
```   

See [the Hugo documentation](https://gohugo.io/themes/installing/) for more information.

## Features

### Responsive

This theme is designed to look great on both large-screen and small-screen (mobile) devices.

### Syntax highlighting

This theme has support for either Hugo's lightning fast Chroma, or both server side and client side highlighting. See the [Hugo docs for more](https://gohugo.io/content-management/syntax-highlighting/).

### Highlight.js - Client side syntax highlighting
```
[Params]
    useHLJS = true
```
Client side highlighting does not require pygments to be installed. This will use highlight.min.css instead of syntax.css for highlighting (effectively disabling Chroma). Highlight.js has a wider range of support for languages and themes, and an alternative highlighting engine.

### Google Analytics

To add Google Analytics, simply sign up to [Google Analytics](https://www.google.com/analytics/) to obtain your Google Tracking ID, and add this tracking ID to the `googleAnalytics` parameter in `config.toml`.

### Commit SHA on the footer

If the source of your site is in a Git repo, the SHA corresponding to the commit the site is built from can be shown on the footer. To do so, two site parameters `commit` has to be defined in the config file `config.toml`:

```
enableGitInfo = true
[Params]
  commit = "https://github.com/<username>/<siterepo>/tree/"
```

### Credits

- [Beautiful Hugo](https://github.com/halogenica/beautifulhugo) from which Lightbi was forked.
- [Unsplash](https://unsplash.com/) for Images.


## License

MIT Licensed, see [LICENSE](https://github.com/binokochumolvarghese/lightbi-hugo/blob/master/LICENSE).

