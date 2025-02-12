---
title: Parameters in Lightbi
date: 2023-10-28
tags: ["hugo","blog"]
image : "/img/posts/img-1.jpg"
Description  : "Below is a list of configurable parameters in the Lightbi theme, along with descriptions to help you customize your site effectively."
draft: 
---

Below is a list of configurable parameters in the Lightbi theme, along with descriptions to help you customize your site effectively. You can be adjust the below parameters in your `hugo.toml` file.

###### Theme Parameters


1. **`readingTime`**  
   - **Type**: Boolean (`true` or `false`)
   - **Description**: When set to `true`, displays an estimated reading time for each post. This helps readers gauge how long it will take to read the content.

2. **`wordCount`**  
   - **Type**: Boolean
   - **Description**: Enables or disables the word count display for each post. Useful for readers interested in post length.

3. **`hideAuthor`**  
   - **Type**: Boolean
   - **Description**: Controls the visibility of the author information on each post. Set to `false` to display the author section or `true` to hide it.

4. **`previewCardImagePlacement`**  
   - **Type**: String (`"top"` or `"middle"` or `"bottom"` or `"none"` )
   - **Description**: Determines where the preview image appears on post cards in lists or summaries. `"top"` places the image above the text, "middle": Centers the image within the text area, `"bottom"` places below the text, and `"none"` hides the preview image entirely,.

5. **`hidePostImage`**  
   - **Type**: Boolean
   - **Description**: Controls the visibility of the featured image on individual post pages. Set to `true` to hide post images or `false` to show them.

6. **`useHLJS`**  
   - **Type**: Boolean
   - **Description**: Enables Highlight.js, a JavaScript library for syntax highlighting in code blocks. Set to `true` to use Highlight.js for syntax highlighting.

7. **`socialShare`**  
   - **Type**: Boolean
   - **Description**: Adds social sharing buttons to posts, allowing readers to share content on various social media platforms.

8. **`showRelatedPosts`**  
   - **Type**: Boolean
   - **Description**: When enabled, displays related posts at the bottom of each post to encourage further reading.

9. **`gcse`**  
   - **Type**: Boolean
   - **Description**: Enables Google Custom Search Engine integration for site search functionality. Requires a configured search engine ID.

10. **`Lastmod`**  
    - **Type**: Boolean
    - **Description**: Controls whether the "Last Modified" date is shown on posts, which can be helpful for showing recent updates.

11. **`rss`**  
    - **Type**: Boolean
    - **Description**: Enables RSS feed generation for the site, making it easy for users to subscribe to your content.

12. **`pagination`**  
    - **Type**: Integer
    - **Description**: Sets the number of posts displayed per page on list or archive pages.

13. **`description`**  
    - **Type**: String
    - **Description**: A short description of your website that may appear in the metadata or be used for SEO.

14. **`lunrSearch`**  
    - **Type**: Boolean
    - **Description**: Enables Lunr.js search, a client-side search engine, allowing users to search content directly on the site.


These parameters allow for easy customization and control over how your Hugo theme behaves and displays content. 