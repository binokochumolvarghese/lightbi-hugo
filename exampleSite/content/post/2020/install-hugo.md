---
title: Install Hugo in Windows
date: 2023-12-20
tags: ["hugo","blog"]
image : "/img/posts/2025/4.jpg"
Description  : "In this guide, we'll walk through installing Hugo, a popular static site generator..."
featured: true
---

Hugo comes in three versions: Standard, Extended, and Extended/Deploy. The Standard edition covers core functionalities, while Extended adds advanced options, with Extended/Deploy** offering further deployment features.

### Setting Up Your Directories
1. Open File Explorer and create a folder, e.g., `C:\Hugo`, and inside it, a `bin` folder.

### Installing Hugo
1. Download the latest Hugo executable from [Hugo releases](https://github.com/gohugoio/hugo/releases/).
2. Extract the contents into `..\Hugo\bin`.
3. Open Command Prompt as Administrator and add Hugo to the PATH:  
   ```
   setx PATH "%PATH%;C:\Hugo\bin"
   ```
   Alternatively, add `C:\Hugo\bin` via Environment Variables.

4. Verify the installation by typing `hugo help` in the command prompt.


{{< figure src="/img/posts/install-hugo/hugo-help-command.png" 
alt="Hugo help in Command Prompt" 
attr="Hugo in Command Prompt" 
attrlink="" >}}  

You can check the offical documentation for more installation details [here](https://gohugo.io/installation/).