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


//Approach #1 for smooth scroll using element.scrollIntoView

const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    let index = 0;
    links.forEach(link => {
        link.addEventListener('click', () => {
            index++;
            sections.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })
        })
    })
};

scrolling();


// // // APPROACH #2 - window.requestAnimationFrame()
// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute('.navbar__menu a');
//     const targetPosition = document.querySelector(targetId).offsetTop;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;
//     //store duration for later condition
//     const duration = 10000;

//     let start = null;

//     window.requestAnimationFrame(step);

//     function step(timestamp) {
//         if (!start) start = timestamp;
//         const progress = timestamp - start;
//         //use scroll to (x, y), since we only do vertical scroll, the x=0;
//         //liner easing
//         // window.scrollTo(0, distance * (progress / duration) + startPosition);
//         window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
//         if (progress < duration) window.requestAnimationFrame(step);
//     }
// }
// //easing function from gizma.com
// function easeInOutCubic(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t * t + b;
//     t -= 2;
//     return c / 2 * (t * t * t + 2) + b;
// };

// //Then Add event lisener





// Scroll to anchor ID using scrollTO event

// const scrolling = () => {
//     //store var
//     const links = document.querySelectorAll('.navbar__menu a');

//     //for loop
//     links.forEach(link => {
//         link.addEventListener('click', () => {
//             for (i = 0; i < sections; i++) {
//                 sections[i].addEventListener('click', sectionScroll(link));
//             }
//         })
//     })
// };

// scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active