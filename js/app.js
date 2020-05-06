/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 * 
 */
// store the variable for access later

//nagivation global var
const navigation = document.querySelector("#navbar__list");
//section global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const navBuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        let sectionID = section.getAttribute("id");

        let sectionDataNav = section.getAttribute("data-nav");

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the naviation
    navigation.innerHTML = navUI;
}

navBuilder();

// Add class 'active' to section when near top of viewport

//getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//remove the active class
const removeActive = (section) => {
    section.classList.remove('active');
};

//add the active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('active');
    };
};

//implementating the actual function

const sectionActivation = () => {
    // looping over all sections
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);



// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    //store var
    const links = document.querySelectorAll('.navbar__menu a');
    //for loop
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener('click', sectionScroll(link));
            }
        });
    });
};

scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active