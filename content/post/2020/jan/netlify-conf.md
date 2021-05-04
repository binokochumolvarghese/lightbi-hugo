---
title: Host in Netlify
date: 2020-01-04
tags: ["hugo","Netlify"]
image : "/img/posts/img-10.jpg"
Description  : "You can host your static website wth zero cost in Netlify. Add the below netlify.toml in the root. And you can upload the public folder directly..."
---
You can host your static website wth zero cost in [Netlify](https://www.netlify.com/).

Add the below netlify.toml in the root folder.


    [build]
    publish = "public"
    command = "hugo --gc --minify"

    [context.production.environment]
    HUGO_VERSION = "0.82.0"
    HUGO_ENV = "production"
    HUGO_ENABLEGITINFO = "true"

    [context.split1]
    command = "hugo --gc --minify --enableGitInfo"

    [context.split1.environment]
    HUGO_VERSION = "0.82.0"
    HUGO_ENV = "production"

    [context.deploy-preview]
    command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

    [context.deploy-preview.environment]
    HUGO_VERSION = "0.82.0"

    [context.branch-deploy]
    command = "hugo -b $DEPLOY_PRIME_URL"

    [context.branch-deploy.environment]
    HUGO_VERSION = "0.82.0"

    [context.next.environment]
    HUGO_ENABLEGITINFO = "true"

And you can upload the public folder directly to Netlify or integrate your GitHub accout with Netlify to host your website.

<!--Photo by Robert Katzki on Unsplash-->
