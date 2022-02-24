# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![FAQ Accordion Card](./images/faq_accordion_card.png)


### Links

- Live Site URL: [FAQ Accordion Card](https://your-live-site-url.com)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media queries


### What I learned

### 1.Gradient
```css
.bg {
  /* top color, bottom color */
  background: linear-gradient(grey, black);
}
```
### 2.Rendering a svg file (same way as rendering images)
```html
<img src="images/demo.svg" alt="svg illustration">
```
### or
```css
body {
  background: url("images/demo.svg");
}
```
### 3.hiding edges of images
```css
img {
  overflow: hidden;
}
```
### 4.Adding a class to a node element
```js
elementNodeReference.classList.toggle('active')
}
```


### Continued development

1. Working more on images
- Rendering svg files and positioning them correctly was not an easy task for me on this challenge. It is also important to know how to position and style images to get more comfortable with using images.


### Useful resources

- [CSS-TRICKS BEM 101](https://css-tricks.com/bem-101/) - This presents a good introductory explanation of the BEM(block, element, modifier) methodology.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - I used this website as a reference to techniques such as:
1. how to add a color gradient as a background color.
2. how to include SVG(Scalable Vector Graphics) in the challnge.
