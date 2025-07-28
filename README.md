# Lightbi ⚡

Lightbi is a modern and elegant theme designed for Hugo, offering a simple yet beautiful user experience.


## Hey everyone! I’ve just launched version 2 of the Lightbi theme with Profile mode and Blog mode. Hope you’ll enjoy the new updates! 🎉

- 😎[Lightbi Profile Mode](https://Lightbi-hugo-theme.netlify.app/)
- 🪶[Lightbi Blog Mode](https://lighbi-blog-mode.netlify.app/en/)


## Other links

- 🚹 [Profile Demo repo](https://github.com/binokochumolvarghese/lightbi-hugo-demo)  
- 📝 [Blog Demo repo](https://github.com/binokochumolvarghese/lightbi-hugo-blog-mode)
- 🐛 [Bug reports & Issues](https://github.com/binokochumolvarghese/lightbi-hugo/issues)  
- 💡 [Questions & feature requests](https://github.com/binokochumolvarghese/lightbi-hugo/discussions)  
- 📄 [Lightbi wiki](https://github.com/binokochumolvarghese/lightbi-hugo/wiki)  
- 🕸️ [Websites built with Lightbi](https://github.com/binokochumolvarghese/lightbi-hugo/wiki/Websites-built-with-Lightbi)

![LightBi Hugo Theme Screenshot](https://raw.githubusercontent.com/binokochumolvarghese/lightbi-hugo/refs/heads/main/images/screenshot.png)

## Features

### General
- **Two Modes:**
  - Profile
  - Blog
 
- **Two Main Content Sections:**
  - Blog
  - Notes

- **Responsive Design**:
  - Built with a **mobile-first approach** for seamless viewing on any device.

- **Card-Based Theme**:
  - Flexible image placement options:
    - Image at the top of the card
    - Image in the middle of the card
    - Image at the bottom of the card
    - No image option
      
- **Image Gallery**  
  You can add multiple images to your post and display them beautifully as a gallery.
  
- **Menu Location Indicator**:  
  Clear visual cues for active menu items.

- **Multilingual Support**:  
  Includes a **language selector** for easy switching between languages.

- **Taxonomies**:  
  Organize content effectively with customizable tags and categories.

- **Search Functionality**:  
  Integrated search option for quick content access.

- **Light/Dark Theme**:  
  - **Automatic theme switching** based on browser preferences.
  - Includes a manual **theme-switch button** for user control.

- **Google Analytics Integration**:  
  Track user activity with built-in support for Google Analytics.

- **SEO-Friendly**:  
  Optimized for search engines to improve visibility.

- **Commit SHA in Footer**:  
  Display the current **commit SHA** for version tracking.

- **Self-Hosted Assets**:  
  Compliant with **GDPR / EU-DSGVO** regulations by hosting all assets locally.

- **Bootstrap Icons**:  
  Beautiful, lightweight icons integrated with **Bootstrap Icons**.

### Page
- Other Posts suggestion below a post.
- Social-Media Share buttons on posts.
- Syntax highlighting.
- Cover image for each post (with Responsive image support).

## Configurations

#### Select theme mode
To configure the theme for either profile or blog mode, add the following under the params section in your hugo.toml file:
- Set `homepageLayout = "profile"` for profile mode
- Set `homepageLayout = "blog"` for blog mode

#### Card based theme.
To customize the image placement within a card, the Lightbi theme offers four flexible options.
To configure this, use the `previewCardImagePlacement` parameter in the `hugo.toml` file. Set it as follows:
- For the image at the top: `previewCardImagePlacement = "top"`
- For the image in the middle: `previewCardImagePlacement = "middle"`
- For the image at the bottom: `previewCardImagePlacement = "bottom"`
- For no image: `previewCardImagePlacement = "none"`

For more details about parameters you can visit the wiki [here](https://github.com/binokochumolvarghese/lightbi-hugo/wiki/Theme-Parameters).

## Installation

Install Hugo and create a new site. See [the Hugo documentation](https://gohugo.io/getting-started/quick-start/) for details.

```
hugo new site <name of site>
cd <name of site>
git init
git submodule add https://github.com/binokochumolvarghese/lightbi-hugo themes/lightbi-hugo
echo "theme = 'lightbi-hugo'" >> hugo.toml
hugo server
```

After the above copy the contents of `exampleSite` to the `content` folder in your website.

## Wiki

Checkout the [wiki](https://github.com/binokochumolvarghese/lightbi-hugo/wiki) page for detailed documentation of the theme features.

## Support & Contribution

- **Star 🌟 this repository** to show your support!
- **Help spread the word** about Hugo Lightbi by sharing it on social media and recommending it to your friends and colleagues.
- **Found a bug?** Report it via [GitHub Issues](https://github.com/binokochumolvarghese/lightbi-hugo/issues/new) to help us improve.
- **Have feature ideas?** Start a conversation in [GitHub Discussions](https://github.com/binokochumolvarghese/lightbi-hugo/discussions).
- **Got questions?** Ask away in our [GitHub Discussions](https://github.com/binokochumolvarghese/lightbi-hugo/discussions) community.

## Credits

- [Beautiful Hugo](https://github.com/halogenica/beautifulhugo) from which Lightbi was forked.
- [Unsplash](https://unsplash.com/) for Images.

## About

This is an adaptation of the [Beautiful Hugo](https://github.com/halogenica/beautifulhugo) by [Michael Romero](https://github.com/halogenica). It supports most of the features of the original theme, and many new features. It has diverged from the original theme over time, with several updates.

## License

MIT Licensed, see [LICENSE](https://github.com/binokochumolvarghese/lightbi-hugo/blob/master/LICENSE).

