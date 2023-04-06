//document.querySelector() --> to select the first element that matches;
//document.querySelectorAll() --> to select multiple elements;




//select the first h1 on the document (html)
const h1 = document.querySelector("h1")
// console.log(h1)
// setTimeout(() => {
//   h1.innerText = "wazzaap"
// }, 1000);


//select the first section
const section = document.querySelector("section")

// console.log(section)
//select all h1 selectors


//select the first button on the page
const button = document.querySelector("button")
console.log(button)




//select all sections
const allSections = document.querySelectorAll("section")
// console.log(allSections) //querySelectorAll returns back a NodeList of elements


//select all the buttons
const allbuttons = document.querySelectorAll("button")
// console.log(allbuttons[2].style.backgroundColor = "yellow")

//select the first section with the class of park-display
const firstParkDisplaySection = document.querySelector(".park-display")
// console.log(firstParkDisplaySection)

//find a list of elements that are the square area in km
const allAreasData = document.querySelectorAll(".area-display .value")
// console.log(allAreasData)

const allEstablishedDates = document.querySelectorAll(".established-display .value")
// console.log(allEstablishedDates)

//select all the unshaded stars
const allRatebuttons = document.querySelectorAll(".rate-button")

//select the entire grand canyon park element
const grandCanyonSection = document.querySelector("#gcnp")
console.log(grandCanyonSection)

//select the rating for grand canyon park
const ratingForGrandCanyonSection = document.querySelector("#gcnp .rating-display .value")
console.log(ratingForGrandCanyonSection)



