---
title: Lightbi Custom Shortcodes
date: 2023-11-24
tags: ["shortcodes"]
image : "/img/posts/img-6.jpg"
Description  : "You can create your own shortcodes for unique needs by adding an HTML file to the `layouts/shortcodes/` directory. Below are the custom shortcodes availble in this theme..."
---

To create your own shortcodes in Hugo, add an HTML file in layouts/shortcodes/. This theme provides the following useful custom shortcodes: 


### Info card

Displays information in a card format.

##### Shortcode
```
{{/* < info_cards header="lorem-ipsum" title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." > */}}
```

##### Output
{{< info_cards header="lorem-ipsum" title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">}}

[Read this for more details and code.](https://binovarghese.com/blog/2023/06/info-card-shortcodes-for-hugo/)


### Card shortcode

Adds cards with text and links.

##### Shortcode
```
{{/* < bs_img_card title="Some" link="https://some.com/"
descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry." > */}}

{{/* < bs_img_card title="Example" link="https://www.example.io/" 
descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry." > */}}

{{/* < bs_img_card title="Here" link="https://www.here.com/"
descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry." > */}}

```
##### Output
{{< bs_row >}}

{{< bs_img_card title="Some" link="https://some.com/"
descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry." >}}

{{< bs_img_card title="Example" link="https://www.example.io/" 
descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry." >}}

{{< bs_img_card title="Here" link="https://www.here.com/"
descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry." >}}

{{< close_div >}}

[Read this for more details and code.](https://binovarghese.com/blog/2023/01/card-shortcodes-for-hugo/)


### Details

This simply adds the html5 detail attribute, supported on all *modern* browsers. Use it like this:

##### Shortcode
```
{{/* < details "This is the details title (click to expand)" > */ }}
Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
{{ /* < /details > */}}
```

##### Output
{{< details "This is the details title (click to expand)" >}}
Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
{{< /details >}}
 

### Split

This adds a two column side-by-side environment (will turn into 1 col for narrow devices):

##### Shortcode
```
{{ /* < columns > */ }}
This is column 1.
{{ /* < column > */ }}
This is column 2.
{{ /* < endcolumns > */ }}
```

##### Output
{{< columns >}}
This is column 1.
{{< column >}}
This is column 2.
{{< endcolumns >}}
