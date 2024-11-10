---
title: Markdown Syntax Guide
date: 2020-01-25
tags: ["markdown","syntax"]
image : "/img/posts/img-7.jpg"
Description  : "Article showcasing basic Markdown syntax and formatting for HTML elemenets. To create a heading, add number signs (#) in front of a word or phrase.."
---

## Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (h3), use three number signs (e.g., ### My Header).
&nbsp;
# Heading level 1 	
## Heading level 2 	
### Heading level 3 
#### Heading level 4 
##### Heading level 5 
###### Heading level 6 	

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

Markdown is a plain text format for writing structured documents, based on formatting conventions from email and usenet.

Markdown was developed in 2004 by John Gruber in collaboration with Aaron Swartz. Gruber wrote the first markdown-to-html converter in Perl, and it soon became widely used in websites. By 2014 there were dozens of implementations in many languages.

## Bold

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

\*\*bold text**

## Italic

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

\*Italic*

## Code

#### Inline Code

To create inline code, wrap with backticks ` . To create a code block, either indent each line by 4 spaces, or place 3 backticks ``` on a line above and below the code block. 

\`This is an inline code.`

#### Code Blocks

```
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>
```

## Blockquote
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
## Ordered List
1. First item  
2. Second item  
3. Third item  

## Ordered List
- First item  
- Second item  
- Third item  

## Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

![This place was so cool!](/img/posts/img-10.jpg)



## Horizontal Rule 	

For horizontal rules, you can use three dash symbol together as below.  
  \--\-

---

## Backslash Escapes
Markdown will allow to use backlash escapes to generate litertal characters which is used in the markdown itself fot formatting the syntax.

String: \\* Literal astrisks\\*  
Output: \* Literal astrisks\* 

## Foot notes
In a paragraph you can use the square bracket with a caret symbol along with a number[^1] to indicate a foot note: [^2].

\[^1]: In the below section you can add this for showing the footnotes.
[^1]: This is an example for footnotes.



[To view more about basic syntaxs, click here.](https://www.markdownguide.org/basic-syntax/)