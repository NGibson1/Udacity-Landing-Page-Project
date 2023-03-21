// global varibale
const sectionList = document.querySelectorAll('section');

// this forEach loop will create both list items, and anchor tags to build navMenu
sectionList.forEach(section => {
    const navigationMenu = document.getElementById('navbar__list');
    const navItem = document.createElement('li');
    const anchor = document.createElement('a');
    
    /* this is an event listener on the anchor elements created that will listen for a click and retireve
    the section by id and then use the scrollIntoView method and its smooth behavior to smoothly scroll that sections
    into view */
    anchor.addEventListener('click', (e) => {
        // this prevents the default event for anchor tags, which would be jump-to section
        e.preventDefault();
        section.scrollIntoView({behavior: 'smooth'});
    });
    
    //this line adds the class "menu__link" to our variable "anchor"
    anchor.classList.add('menu__link');

    //sets the inner text equal to the section elements inner text using the "data-nav" class in html
    anchor.innerText = section.dataset.nav;

    //this line specifies the location for the anchor link
    anchor.href = '#' + section.id;

    navItem.setAttribute('id', `${section.id}`);

    //this line appends our variable anchor to navItem as its child
    navItem.appendChild(anchor);

    //this line appends our navItem variable to our navigationMenu
    navigationMenu.appendChild(navItem);
});

/*listening for a scroll event to determine whether or not section elements are withing in the
viewport or nott */ 
window.addEventListener('scroll', function (){
    // for each loop for sections to determine whether 'your-active-class' will be added or removed
    sectionList.forEach(function (section) {
        const setViewportHelper = window.innerHeight / 2;
        // variable the saves the size and lcoation of each section
        const location = section.getBoundingClientRect();
        //variable that contains the conditions of being within the viewport
        const inVeiwport = location.top <= setViewportHelper
        && location.bottom >=  setViewportHelper
        && window.pageYOffset != 0;
        /* variable that retrieves nav menu items by thier id set to be
        the same as the sections id*/ 
        const navItem = document.getElementById(section.id);
    
    /* if statement that will either add or remove "your-active-class" to the sections
    and nav menu items depending on if they are in the viewport or not*/
        if (inVeiwport) {
            section.classList.add('your-active-class');
            navItem.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
            navItem.classList.remove("your-active-class");   
        }
    });
});