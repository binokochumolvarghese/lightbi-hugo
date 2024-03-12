---
title: Rich Content 
date: 2020-01-20
tags: ["hugo","shortcodes"]
image : "/img/posts/img-5.jpg"
Description  : 'Hugo ships with several Built-in Shortcodes for rich content, along with a Privacy Config and a set of Simple Shortcodes that enable.'
featured: true
---

Hugo ships with several [Built-in Shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes) for rich content, along with a Privacy Config and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.

&nbsp;
## YouTube privacy enhanced shortcode

The youtube shortcode embeds a responsive video player for YouTube videos. Only the ID of the video is required, e.g.:

*YouTube URL:*
```
https://www.youtube.com/watch?v=3qHkcs3kG44
```

Shortcode:
```
{{</* youtube 3qHkcs3kG44 */>}}
```
Rendered output:
{{< youtube 3qHkcs3kG44 >}}


## Twitter

You want to include a single tweet into your blog post? Everything you need is the URL of the tweet:

Twitter url:

```
https://twitter.com/binovarghese_/status/1758148486510317907
```

Shortcode:
```
{{</* twitter user="binovarghese_" id="1758148486510317907" */>}}
```

Rendered:
{{< twitter user="binovarghese_" id="1758148486510317907" >}}

<!--Photo by Dimitri Houtteman on Unsplash-->
