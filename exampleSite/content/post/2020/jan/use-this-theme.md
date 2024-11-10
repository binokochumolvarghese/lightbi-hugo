---
title: How to use Lightbi theme ?
date: 2023-12-26
tags: ["hugo","blog"]
image : "/img/posts/img-3.jpg"
Description  : "In this post, we'll cover how to install Hugo and set up your first website with the Lightbi theme..."
featured: true
---

In this post, we'll cover how to install Hugo and set up your first website with the Lightbi theme. For detailed steps, refer to [Hugo’s quick-start guide](https://gohugo.io/getting-started/quick-start/).

1. **Create a New Hugo Site**
   ```bash
   hugo new site <name of site>
   cd <name of site>
   git init
   git submodule add https://github.com/binokochumolvarghese/lightbi-hugo themes/lightbi-hugo
   echo "theme = 'lightbi-hugo'" >> config.toml
   hugo server
   ```

After the above copy the contents of exampleSite to the content folder in your website.

2. **Preview Your Site**:   
Go to `http://localhost:1313/` to view your website in development mode. 

That’s it! You’re ready to start building.

<!--Photo by Robert Katzki on Unsplash-->
