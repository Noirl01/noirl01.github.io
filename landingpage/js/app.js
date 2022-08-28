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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/*
 * Define Global Variables
 */
const navBar = document.querySelector("#navbar__list");
const pageSections = document.querySelectorAll("[data-nav]");
const navButtons = document.getElementsByClassName("menu__link");
const collapBtn = document.getElementsByClassName("colp__btn");
// Will be used to help hiding navBar.
let timer = null;
/*
 * End Global Variables

 * Start Helper Functions
*/

//Element in viewport helper returns a boolean.
function inViewport(elm) {
  // Rect of the element.
  const rect = elm.getBoundingClientRect();
  const bottom = rect.bottom - document.documentElement.clientTop || 1;
  // Window size - bottom - beginning
  const magicalFactor = window.innerHeight - bottom - rect.top;
  return magicalFactor >= -150 && window.innerHeight - magicalFactor >= 0;
}

// Scrolls to top of page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// NavHide Helpers Hide/Show
function hideNav() {
  setTimeout(function () {
    document.querySelector(".page__header").classList.add("nav__hide");
  });
}
function showNav() {
  document.querySelector(".page__header").classList.remove("nav__hide");
}

//Add collapse button for each avaliable section.
function addbtnCollap() {
  pageSections.forEach(function (section) {
    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Hide";
    buttonEl.classList.add("colp__btn");
    section.append(buttonEl);
  });
}

/*
 * End Helper Functions

 * Begin Main Functions
 */
function navListing(sections) {
  //Fragement element
  const navList = document.createDocumentFragment();
  // Looping through avaliable sections
  for (let i = 0; i < pageSections.length; i++) {
    //Creating li element for each avaliable section
    const navEl = document.createElement("li");
    navEl.appendChild;
    //Span for future CSS hierchary
    navEl.innerHTML = `<span>${pageSections[i].getAttribute(
      "data-nav"
    )}</span>`;
    //Adding the CSS navigation link class to it
    navEl.classList.add("menu__link");
    //Appending each to fragement
    navList.appendChild(navEl);
  }
  navBar.appendChild(navList);
}
/*
End Main Functions
*/

// Building the navbar.
navListing();

// Adding collapse button to sections.
addbtnCollap();
[...collapBtn].forEach(function (button, i) {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("hide__section");
    button.innerHTML === "Hide"
      ? (button.innerHTML = "Show")
      : (button.innerHTML = "Hide");
  });
});
// ScrolltoTop button.
document.querySelector(".scroll__btn").addEventListener("click", function () {
  scrollToTop();
});

// On scroll class toggle navBar & active section.
window.addEventListener("scroll", function (event) {
  for (let i = 0; i < pageSections.length; i++) {
    // If in viewport & not hidden.
    if (
      inViewport(pageSections[i]) &&
      !pageSections[i].classList.contains("hide__section")
    ) {
      // Add active status to section.
      pageSections[i].classList.add("your-active-class");
      // Add active status to navBar element.
      navButtons[i].classList.add("current__nav");
      // Add active status to span navElement
      navButtons[i].firstChild.classList.add("current__span");
    } else {
      pageSections[i].classList.remove("your-active-class");
      navButtons[i].classList.remove("current__nav");
      navButtons[i].firstChild.classList.remove("current__span");
    }
  }

  // On scroll show scroll to top button.
  if (document.body.scrollTop >= 2100) {
    // Removes the invisibilty class.
    document.querySelector(".scroll__btn").classList.remove("invisible__btn");
  } else {
    // Adds Invisible class.
    document.querySelector(".scroll__btn").classList.add("invisible__btn");
  }

  //Show navBar on Scroll
  document.querySelector(".page__header").classList.remove("nav__hide");
  //Clears the stacked timer and then execute new timeout.
  if (timer !== null) clearTimeout(timer);
  if (document.body.scrollTop >= 280) timer = window.setTimeout(hideNav, 3000);
});

// Nav Click scroll Removing 100 from top offset to make animation start.
[...navButtons].forEach(function (item, i) {
  item.addEventListener("click", function (event) {
    event.preventDefault;
    document.body.scrollTo({
      left: pageSections[i].offsetLeft,
      top: pageSections[i].offsetTop - 30,
      behavior: "smooth",
    });
  });
});

window.addEventListener("click", function () {
  document.querySelector(".page__header").classList.remove("nav__hide");
});
