---
title: Understanding Hugo Shortcodes
date: 2023-11-30
tags: ["shortcodes"]
image : "/img/posts/img-8.jpg"
Description  : "Hugo shortcodes are powerful tools for adding custom HTML or other special content within Markdown files without complex code..."
---


Hugo shortcodes are powerful tools for adding custom HTML or other special content within Markdown files without complex code. They enable enhanced flexibility and are a core part of Hugo's functionality, offering reusable snippets for embedding media, custom components, or dynamic content. Below, we’ll explore what shortcodes are and highlight some popular examples.

### What are Hugo Shortcodes?
Shortcodes in Hugo are like mini-templates that simplify embedding specialized content into a page. Hugo has built-in shortcodes, and users can create custom ones. For instance, to embed a YouTube video, instead of writing the full HTML, you can use a shortcode like `{{/*< youtube "video-id" > */}}`.

### Common Built-in Shortcodes
Here are a few popular Hugo shortcodes and how to use them:

1. **YouTube Embed**:
   
   ```
   https://www.youtube.com/watch?v=3qHkcs3kG44
   ```

   Shortcode:
   ```
   {{</* youtube 3qHkcs3kG44 */>}}
   ```
   Rendered output:
   {{< youtube 3qHkcs3kG44 >}}

   This shortcode takes a YouTube video ID, simplifying the process of embedding videos on your page.

2. **Figure**:
   Shortcode:
   ```
   {{/*< figure src="/img/posts/img-0.jpg" title="Sample Image" >*/}}
   ```

   Rendered output:
   {{< figure src="/img/posts/img-0.jpg" title="Sample Image" >}}
   
   This allows you to easily add images with captions and titles, handling image display responsively.

3. **Gist (GitHub Snippets)**:

   Shortcode:
   ```
   {{/*< gist spf13 7896402 > */}}
   ```
   Rendered:
   {{< gist spf13 7896402 >}}

   This integrates GitHub Gists by taking the username and gist ID, perfect for adding code snippets from GitHub.


   ```

4. **Twitter url**:

   ```
   https://twitter.com/binovarghese_/status/1758148486510317907
   ```

   Shortcode:
   ```
   {{</* twitter user="binovarghese_" id="1758148486510317907" */>}}
   ```

   Rendered:
   {{</* twitter user="binovarghese_" id="1758148486510317907" */>}}

### Benefits of Shortcodes
Using shortcodes in Hugo streamlines content creation and ensures consistency across pages, saving time on repeated elements and complex HTML structures. With custom shortcodes, you can build rich, interactive content while keeping Markdown files clean and easy to manage.

For more details, check out Hugo’s official [shortcode documentation](https://gohugo.io/content-management/shortcodes/).

<!--Photo by Robert Katzki on Unsplash-->
