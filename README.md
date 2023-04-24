# LightBi Hugo 

Simple, minimal personal website and blog theme for Hugo. Forked from [Beautiful Hugo](https://github.com/halogenica/beautifulhugo).

### Demo

[lightbi-hugo-theme.netlify.app](https://lightbi-hugo-theme.netlify.app/)


![LightBi Hugo Theme Screenshot](https://github.com/binokochumolvarghese/lightbi-hugo/blob/master/images/screenshot.png)


## Installation

Install Hugo and create a new site. See [the Hugo documentation](https://gohugo.io/getting-started/quick-start/) for details.

Add Lightbi:

    $ git submodule add https://github.com/binokochumolvarghese/lightbi-hugo

Copy the content of `exampleSite` at the root of your project:

    cp -r themes/lightbi-hugo/exampleSite/* . -iv
    
Start Hugo:

    hugo serve

## Features

### Responsive

This theme is designed to look great on both large-screen and small-screen (mobile) devices.

### Notes section

Other than the blog posts, this theme will support short notes. You can add the contentn for the notes in the notes folder which is under the content folder. 

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
### Multilingual

To allow Beautiful Hugo to go multilingual, you need to define the languages
you want to use inside the `languages` parameter on `config.toml` file, also
redefining the content dir for each one. Check the `i18n/` folder to see all
languages available.

```toml
[languages]
  [languages.en] 
    contentDir = "content/en" # English
  [languages.ja]
    contentDir = "content/ja" # Japanese
  [languages.br]
    contentDir = "content/br" # Brazilian Portuguese
```

### Self Hosted assets for GDPR / EU-DSGVO compliance

With default settings, visiting to a website using Beautifulhugo connects also to remote services like google fonts or jsdelivr to embed fonts, js and other assets.

To avoid this, set the following param in config.toml:

```
[Params]
  selfHosted = true
```

### Credits

- [Beautiful Hugo](https://github.com/halogenica/beautifulhugo) from which Lightbi was forked.
- [Unsplash](https://unsplash.com/) for Images.

## About

This is an adaptation of the [Beautiful Hugo](https://github.com/halogenica/beautifulhugo) by [Michael Romero](https://github.com/halogenica). It supports most of the features of the original theme, and many new features. It has diverged from the original theme over time, with several updates.

## License

MIT Licensed, see [LICENSE](https://github.com/binokochumolvarghese/lightbi-hugo/blob/master/LICENSE).

