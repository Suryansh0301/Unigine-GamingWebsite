'use strict';



/*
 * add events on multiple elements 
 */

const addEventOnElements=function(elements,eventType,callback){
    for (let index = 0,eln=elements.length; index < len; index++) {
        elements[index].addEventListener(eventType,callback);

        
    }
}

/**
 * MOBILE NAVBAR
 * navbar will show after clicking the menu button
 */

const navbar=document.querySelector("[data-navbar]");
const navToggler=document.querySelector("[data-nav-toggler]");
const navLinks=document.querySelectorAll("[data-nav-link]");

const toggleNav=function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navToggler.addEventListener("click",toggleNav);

const navClose =(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}
addEventOnElements(navLinks,"click",navClose);


/**
 * HEADER
 * header will be active after scrolled down to 100px of screen
 */

const header=document.querySelector("[data-header]");

const activeEL=function(){
    if(window.scrollY>100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}

window.addEventListener("scroll",activeEL);



/**
 * Button have ripple effect
 */

const buttons=document.querySelectorAll("[data-btn]");

const buttonHoverRipple=function(event){
    this.style.setProperty("--top",`${event.offsetY}px`);
    this.style.setProperty("--left",`${event.offsetX}px`);
}

addEventOnElements(buttons,"mousemove",buttonHoverRipple);