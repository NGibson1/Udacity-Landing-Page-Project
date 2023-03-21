# Landing Page Project
### By Nigel Gibson

This was a project for Udacity's Front-End Development Nano-Degree Program. 

I was given starter code, HTML and CSS, and had to change it from a static web page into an interactive one. I had made to make only a few changes to both the HTML and CSS documents. The majority of the project dealt with interacting with DOM to: 

- Dynamically create a navigation menu based on the amount of sections using JS
- add an event listener, click, on the items in the navigation menu and smoothly scroll to the corresponding section
- add an event listener, scroll, to detect which section is active in the viewport, and highlight that section and its corresponding nav menu item to distinguish it from the other sections that are not active

## Dependencies
- HTML
- CSS
- Javascript

## Quick Setup Guide

- git clone https://github.com/NGibson1/Udacity-Landing-Page-Project.git
- cd udacity-landing-page-project


## Quick Explanation

1. To begin, all the sections were saved in a array using document.querySelectorAll(sections) and saved it to the sectionList variable.

2. Then sectionList is looped through using a forEach loop creating both li elements and anchor elements for the navigation menu for every section in the array, and also the unordered list element is retrievd and saved it to the navgitonMenu variable

3. anchor's innerText = section.dataset.nav which was also the name of the section so that the nav menu items had the correct text to represent the corresponding sections. the class 'menu__link' was also added for css purposes. 

4. Next the anchor's location was stored using the section id, and then the anchor elements are appneded to the list item element, and the list elements are appended to the ul element.

Steps 2-4 created a navigation menu items for each 

5. As the anchor elements are created,  a click event listner is added to them that prevents the default function of anchor elements, and then gets the corresponding sections by id, and scrolls it into view with the scrollIntoView method, using the smooth behavior

Step 5 created the scroll into view functions, and the code was placed directly after the anchors were created in step 2

Steps 2-5 were all done within the first forEach loop of sectionList, that loops through every section in the html file. And for every section, a list item element, and anchor element were created, and appended to the appropirate html element, on top of the event listner being added to each anchor element where it preventDefault was used to prevent the default method of an anchor, and scrollIntoView() method, and the smooth behavior was used to scroll to the correct sections rather than jump to the sections.

6. Next a window event listener, scroll, is added to determine whether or not a section is within the viewport.

7. Right after the window event listener the sectionList varibale that contains an array of all the sections is looped through in another forEach loop.

8. 3 variables are created within this loop,
    - First was "location", where 'location = section.getBoundingClientRect'. Location retrived each sections size and position relative to the viewport
    - The next variable is named 'inViewport' that has arguments that say the top 'location' is >= 0 and that the bottom of location is <= window.innerHeight,
    and finally  this will be used in an if statement.
    - The third varibale was 'navItem', I had to go back to the first forEach loop starting in step 2 and set the atribute for the nav menu items to = 'section.id' in order to retreive them later on and add/remove the correct class for styling depending on the event listner. 


9. The next step was to create an if statement checking whether each section is in the viewport using the inViewport varibale as the condtion. If the condition is met, then the 'your-active-class' from the HTML file is added to the section and nav menu item, and if the condition is not met, then that class is removed.

***your-active-class is used to apply the styling that highlights the "active" section and its corresponding navigation menu item*** 

Steps 7-9 checks every section of the html file, and either adds or removes a class to both the sections and thier corresponding nav menu item that applies the styling to differentiate the active setions depending on if or not it meets the conditions of the if statement. 

I only made a few minor changes to the html, and css files.

For the HTML I made sure that the Heading, id, and dataset class all had the same name. This help connect the list elements with the correct section. 

For the CSS i changed the selctor 'section.your-active-class' to 'your-active-class' so both the section, and list elements could use the same class to apply the styling if they were active.