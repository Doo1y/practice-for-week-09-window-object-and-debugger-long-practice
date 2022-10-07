export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"

  // Your code here
  document.title = "Sam's Portfolio";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name

  // Your code here
  document.body.children[0].children[0].innerText = "Sam";
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
   passage about yourself */

  // Your code here
  document.body.children[1].children[1].innerText = "Hello, my name is Sam and I like ham! Do you want some green eggs and ham?"
}