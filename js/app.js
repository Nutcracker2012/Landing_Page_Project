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
// Add Active Class to current element

// Get the container element
// const navContainer = document.getElementById("navbar__list");
// // Get all buttons with class="btn" inside the container
// const sections = btnContainer.getElementsByClassName("section");
// // Loop through the buttons and add the active class to the current/clicked button
// for (const i = 0; i < sections.length; i++) {
//     sections[i].addEventListener("click", function() {
//         const current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active