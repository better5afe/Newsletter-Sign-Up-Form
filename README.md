# Frontend Mentor - Newsletter sign-up form with success message solution

Hi there!

Firstly, thank you for taking your time to review my project.

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshot)
- [Built with](#built-with)
  

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is a simple project which allows users to type in their email address to sign up for a newsletter.

Summary:
- Upon submit, the form is checked by a custom hook which vefifies value provided in the input.
- If an email is successfully submitted, it's saved within the Local Storage.
- Users will receive an appropriate error message in the following scenarios: 
  - The input is empty.
  - Provided value is not a valid email address.
  - The email has already been provided and it's present in the Local Storage.
- The validity check is slighly delayed using a setTimeout() method which imitates sending a request to an external server and allows users to see a loading modal.
- Loading modal is rendered in a separate div using React Portal.
- Application state is managed by React Context.
- users can view the optimal layout for the interface depending on their device's screen size as well as see hover and focus states for all interactive elements on the page.

## Screenshot

Main page mobile view:

![](./screenshot.jpg)

Main page mobile view - error states:

![](./screenshot.jpg)

Confirmation page mobile view:

![](./screenshot.jpg)

Main page desktop view:

![](./screenshot.jpg)

Main page desktop view - error states:

![](./screenshot.jpg)

Confirmation page desktop view:

![](./screenshot.jpg)






## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
