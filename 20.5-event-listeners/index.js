/* 
Ways users can interact with the page

-clicking things -> click
-Changing of inputs -> change
-hovering over things -> hover
-scroll -> scroll
*/


//make one button listen for a click, and when its clicked, the button's background color will be yellow

// function favoriteClickHandler(event){
//   event.target.classList.add("favorite")
// }

function favoriteAPark(){
  //select the element
  const favButtons = document.querySelectorAll(".rate-button")
  
  favButtons.forEach((favButton)=>{
    //tell the element that it needs to listen for a click
    favButton.addEventListener("click",(event)=>{
      // console.log("clicked something!", event)
      // event.target represents the element that was clicked
      // event.target.style.backgroundColor = "yellow";
      // event.target.innerText = "Favorited!"
      if(event.target.classList.contains("favorite")){
        event.target.classList.remove("favorite")
      }else{
        event.target.classList.add("favorite")
      }
    })
  })
    //when the click event happens, change the elements bg-color to yellow
}

favoriteAPark()


// platform example below for sorting by name

const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

const sortByRating = (parkA, parkB) => {
  const parkARating = Number(parkA.querySelector(".rating-display .value").innerText);
  const parkBRating = Number(parkB.querySelector(".rating-display .value").innerText);
  return parkBRating - parkARating;
};

const nameSorterClickHandler = (event)=>{
  event.preventDefault() //this prevents the a tag from reloading the page when clicked

  //select the parent of the sections -> main
  const main = document.querySelector("main");

  //select all the sections so that we can sort them
  const parksList = document.querySelectorAll(".park-display");

  //clear out main so that the park sections inside are gone and we can replace it with newly sorted parkList
  main.innerHTML = "";

  //convert the nodelist parksList to an array
  const parksArray = Array.from(parksList)
  
  // Sort the array
  parksArray.sort(sortByName);

  //loop through the sorted parksArray to append each section in the array as a child to main

  parksArray.forEach((parkSection)=>{
    main.appendChild(parkSection);
  })
}


const ratingSorterClickHandler = (event)=>{
  event.preventDefault() //this prevents the a tag from reloading the page when clicked

  //select the parent of the sections -> main
  const main = document.querySelector("main");

  //select all the sections so that we can sort them
  const parksList = document.querySelectorAll(".park-display");

  //clear out main so that the park sections inside are gone and we can replace it with newly sorted parkList
  main.innerHTML = "";

  //convert the nodelist parksList to an array
  const parksArray = Array.from(parksList)
  
  // Sort the array
  parksArray.sort(sortByRating);

  //loop through the sorted parksArray to append each section in the array as a child to main

  parksArray.forEach((parkSection)=>{
    main.appendChild(parkSection);
  })
}


//select the link for "name"
const nameSorter = document.querySelector("#name-sorter");
const ratingSorter = document.querySelector("#rating-sorter");

nameSorter.addEventListener("click", nameSorterClickHandler)
ratingSorter.addEventListener("click",ratingSorterClickHandler)