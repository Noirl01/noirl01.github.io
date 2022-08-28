# Landing Page Project

## Table of Contents

- [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality
For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

//////////////////////Navigation Bar/////////////////////
\*\* Created a function to dynamically list avaliable section into navigation bar items.
\*\* Modified the CSS to switch the display of navigation bar items from block to inline-block for better visual apperance.
\*\* Added a class to hide navBar.
\*\* Used an eventListener to remove the class when there is no scroll for 4 continous seconds.

//////////////////Animation Class Toggle/////////////////
\*\* Created a helper function to return a boolean incase the element is currently in the viewport.
\*\* magicalFactor removes the bottom and top from window height when hits 0 most of the element should be in the scope but we want to execute before element by a bit so we will start at negative number. Also window.innerHeight - the other number when becoming negative means element is about to get fully out of window.
\*\* Used an Scroll event listener to keep checking if any section is in view yet. Used toggle classlist method to add or remove the currently active section class.
\*\* Switched from toggle method to add/remove methods seems to work better and less buggy.

//////////////////Nav Scroll to section/////////////////
\*\* Used the spread operator with a forEach loop to iterate through the buttons.
\*\* Added an event listener to scroll to the required section offest upon clicking.
\*\* Added subtracting operator with 100 units from the top offest to be within the range of animation class toggle.

/////////////////Scroll to Top button////////////////////
\*\* Added a button to the html.
\*\* Added a hide class and hooked it to the button.
\*\* Used an eventListener that removes the hide class using JavaScript.

///////////////Highlight section in navBar///////////////
\*\* Added a class to the CSS.
\*\* Added the class once the section is in viewport using the same active status function.
\*\* Fixed highlight bug using a span to change CSS hierchary.

/////////////////Collapsing Sections////////////////////
\*\* Made a class for collapse button that will be add later using Javascript.
\*\* Made a class to be appended to section to change display of paragraphs to none while maintaing the Section header and button to show back the section content once needed.
\*\* Added a dynamically button appending function using JavaScript.
\*\* Used an eventListener that adds/remove the hide class to parent section of each button using JavaScript.
