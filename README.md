# LightBi Hugo 

![LightBi Hugo Theme Screenshot](https://camo.githubusercontent.com/43ccd49145bd81b3a234b0ffd40892b04e8df662/68747470733a2f2f7777772e636f646269782e636f6d2f696d672f323032302f7365702f6c6967687462692d686f6d652d73637265656e2e706e67)

## Installation

    $ mkdir themes
    $ cd themes
    $ git submodule add https://github.com/binokochumolvarghese/lightbi-hugo.git
    

See [the Hugo documentation](https://gohugo.io/themes/installing/) for more information.

## Extra Features

### Responsive

This theme is designed to look great on both large-screen and small-screen (mobile) devices.

### Google Analytics

To add Google Analytics, simply sign up to [Google Analytics](https://www.google.com/analytics/) to obtain your Google Tracking ID, and add this tracking ID to the `googleAnalytics` parameter in `config.toml`.

### Commit SHA on the footer

If the source of your site is in a Git repo, the SHA corresponding to the commit the site is built from can be shown on the footer. To do so, two site parameters `commit` has to be defined in the config file `config.toml`:

```
enableGitInfo = true
[Params]
  commit = "https://github.com/<username>/<siterepo>/tree/"
```


## License

MIT Licensed, see [LICENSE](https://github.com/halogenica/Hugo-BeautifulHugo/blob/master/LICENSE).
