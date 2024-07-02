'use strict'; // Enforces stricter parsing and error handling in your JavaScript code.

/*
 * Add events on multiple elements
 * @param {NodeList} elements - The list of elements to add the event listeners to
 * @param {string} eventType - The type of event to listen for, like 'click' or 'mouseover'
 * @param {Function} callback - The function to call when the event occurs
 */
const addEventOnElements = function(elements, eventType, callback) {
    // Loop through each element in the NodeList
    for (let index = 0, len = elements.length; index < len; index++) {
        // Add an event listener to each element
        elements[index].addEventListener(eventType, callback);
    }
};

/**
 * MOBILE NAVBAR
 * The navbar will show after clicking the menu button
 */

// Select the navbar element using a data attribute selector
const navbar = document.querySelector("[data-navbar]");
// Select the navbar toggler button using a data attribute selector
const navToggler = document.querySelector("[data-nav-toggler]");
// Select all navbar links using a data attribute selector
const navLinks = document.querySelectorAll("[data-nav-link]");

// Define a function to toggle the 'active' class on the navbar and toggler button
const toggleNav = function() {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle("active");
    // Toggle the 'active' class on the button that triggered this function
    this.classList.toggle("active");
};

// Add a click event listener to the nav toggler button that calls the toggleNav function
navToggler.addEventListener("click", toggleNav);

// Define a function to close the navbar
const navClose = () => {
    // Remove the 'active' class from the navbar
    navbar.classList.remove("active");
    // Remove the 'active' class from the nav toggler button
    navToggler.classList.remove("active");
};

// Add a click event listener to each nav link that calls the navClose function
addEventOnElements(navLinks, "click", navClose);

/**
 * HEADER and BACK TOP BUTTON
 * The header and back-to-top button will be active after scrolling down 100 pixels
 */

// Select the header element using a data attribute selector
const header = document.querySelector("[data-header]");
// Select the back-to-top button using a data attribute selector
const backTopBtn = document.querySelector("[data-back-top-btn]");

// Define a function to activate the header and back-to-top button based on scroll position
const activeEL = function() {
    // Check if the window has been scrolled down more than 100 pixels
    if (window.scrollY > 100) {
        // Add the 'active' class to the header
        header.classList.add("active");
        // Add the 'active' class to the back-to-top button
        backTopBtn.classList.add("active");
    } else {
        // Remove the 'active' class from the header
        header.classList.remove("active");
        // Remove the 'active' class from the back-to-top button
        backTopBtn.classList.remove("active");
    }
};

// Add a scroll event listener to the window that calls the activeEL function
window.addEventListener("scroll", activeEL);

/**
 * BUTTON RIPPLE EFFECT
 * Adds a ripple effect when a button is hovered over
 */

// Select all buttons with the data attribute for ripple effect
const buttons = document.querySelectorAll("[data-btn]");

// Define a function to create a ripple effect on button hover
const buttonHoverRipple = function(event) {
    // Set CSS custom properties for the ripple effect position based on mouse coordinates
    this.style.setProperty("--top", `${event.offsetY}px`);
    this.style.setProperty("--left", `${event.offsetX}px`);
};

// Add a mousemove event listener to each button to create the ripple effect
addEventOnElements(buttons, "mousemove", buttonHoverRipple);

/**
 * SCROLL REVEAL
 * Reveals elements when they are scrolled into view
 */

// Select all elements to be revealed on scroll using data attributes
const revealElements = document.querySelectorAll("[data-reveal]");

// Define a function to reveal elements on scroll
const revealElementsOnScroll = function() {
    // Loop through each element that needs to be revealed
    for (let i = 0, len = revealElements.length; i < len; i++) {
        // Check if the element is within the viewport
        const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;
        // If the element is within the viewport, add the 'revealed' class to it
        if (isElementInsideWindow) {
            revealElements[i].classList.add("revealed");
        }
    }
};

// Add a scroll event listener to the window to reveal elements on scroll
window.addEventListener("scroll", revealElementsOnScroll);
// Ensure elements are revealed when the page loads
window.addEventListener("load", revealElementsOnScroll);

/**
 * CUSTOM CURSOR
 * A custom cursor that follows the mouse pointer
 */

// Select the custom cursor element using a data attribute selector
const cursor = document.querySelector("[data-cursor]");
// Select all elements that should trigger cursor hover effect (links and buttons)
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

// Define a function to move the custom cursor based on mouse position
const cursorMove = function(event) {
    // Update the custom cursor's position based on the mouse coordinates
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
};

// Add a mousemove event listener to the window to update the cursor's position
window.addEventListener("mousemove", cursorMove);

// Add mouseover event listeners to elements that should trigger the cursor hover effect
addEventOnElements(hoverElements, "mouseover", function() {
    // Remove the 'hovered' class from the custom cursor
    cursor.classList.remove("hovered");
});


/**
 * General Explanation of 'use strict':

'use strict'; enforces stricter parsing and error handling to help catch common coding mistakes and "unsafe" actions (e.g., defining global variables).
Function: addEventOnElements:

This function takes a list of elements, an event type (like 'click'), and a callback function. It then loops through each element and attaches the event listener.
MOBILE NAVBAR Section:

Variable Declarations: Selecting elements using querySelector and querySelectorAll for manipulation.
toggleNav Function: Toggles the 'active' class on both the navbar and the toggler button to show or hide the navbar.
navClose Function: Removes the 'active' class to close the navbar.
Event Listeners: Adding click event listeners to toggle the navbar when the toggler button is clicked and close the navbar when any nav link is clicked.
HEADER and BACK TOP BUTTON Section:

Variable Declarations: Selecting the header and back-to-top button elements.
activeEL Function: Adds or removes the 'active' class based on the scroll position.
Event Listener: Adding a scroll event listener to check the scroll position and update the classes accordingly.
BUTTON RIPPLE EFFECT Section:

Variable Declarations: Selecting all buttons that should have a ripple effect.
buttonHoverRipple Function: Sets CSS properties for the ripple effect based on the mouse position when hovering over the button.
Event Listener: Adding a mousemove event listener to each button to create the ripple effect.
SCROLL REVEAL Section:

Variable Declarations: Selecting all elements that should be revealed on scroll.
revealElementsOnScroll Function: Adds the 'revealed' class to elements that are within the viewport.
Event Listeners: Adding scroll and load event listeners to reveal elements on scroll and on page load.
CUSTOM CURSOR Section:

Variable Declarations: Selecting the custom cursor element and elements that should trigger a cursor hover effect.
cursorMove Function: Updates the custom cursor's position based on mouse movement.
Event Listener: Adding a mousemove event listener to update the cursor's position and mouseover event listeners to manage the cursor's hover effect.
 */