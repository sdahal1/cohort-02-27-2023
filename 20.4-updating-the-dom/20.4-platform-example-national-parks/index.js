/* 
Notes:


select the element you want to update first-> element = document.queryselector(".description-display")


To change the content of an element:
element.innerText -> to update the text of an element
element.innerHTML -> to update the html of an element (like adding an anchor tag to an element)


To change the style of an element:
element.style -> eg: element.style.backgroundColor = "blue"
element.classList.add("nameOfCssClassHere")
element.classList.remove("nameOfCssClassHere")


To insert an element on the page
1. create the element -> document.createElement("div")
2. select where in the page we want to insert the element
3. connect the two



*/



//get all the park descriptions
const allParkDescriptions = document.querySelectorAll(".description-display");
console.log("parks doe", allParkDescriptions)

// allParkDescriptions[0].innerText += "..."
// allParkDescriptions[1].innerText += "..."
// allParkDescriptions[2]
// allParkDescriptions[3]

//changing the text of an element -> element.innerText
// for(let i = 0; i<allParkDescriptions.length; i++){
//   allParkDescriptions[i].innerText += "...";
// }

allParkDescriptions.forEach((element)=>{
  if(element.innerText.length > 250){
    //shorten the content of the elements innertext to be only 250 characters
    element.innerText = element.innerText.slice(0,250);

    //add the three dots at the end as an anchor tag
    element.innerHTML += "<a href='#'>...</a>";
  }
})




function makeHighRatingsBold(){
  //get access to all the ratings so that we can go through each rating
  const allRatings = document.querySelectorAll(".rating-display .value")
  //for each rating from our list of ratings, if the rating is higher than 4.7, make the rating bold
  allRatings.forEach((ratingDiv)=>{
    console.log('rating div is this', Number(ratingDiv.innerText));
    if(Number(ratingDiv.innerText) > 4.7){
      // ratingDiv.innerText = "huge!"
      // ratingDiv.innerHTML += `<img src = 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-03/puppy-dog-mc-230321-03-b700d4.jpg'/>`
      // ratingDiv.style.backgroundColor = "yellow";
      // ratingDiv.style.fontWeight = "bold"
      // ratingDiv.style.textDecoration = "underline";
      ratingDiv.classList.add("high-rating")
      ratingDiv.classList.remove("value")
    }
  })
}



makeHighRatingsBold()


function insertSubtitleOnSite(){
  //create an element -> this doest not put it in the dom yet
  const subtitle = document.createElement("h2");

  //give the element some content
  subtitle.innerText = "Find the park you love";
  subtitle.style.color = "white";

  //select the element we want to put the new element inside of
  const header = document.querySelector("header")

  //insert the new subtitle element as a child to the header (this step will put it on the page (dom))
  header.appendChild(subtitle)
  console.log(subtitle)
}


function removeParkFromPage(){
  //select what I want to remove and put it in a variable
  const firstpark = document.querySelector(".park-display");
  //select the parent of the element I want to remove and put that in a variable
  const main = document.querySelector("main")
  
  //parentElementHere.removeChild(elementToRemoveHere)
  main.removeChild(firstpark)
  // firstpark.remove();
}


insertSubtitleOnSite()
removeParkFromPage()




// setTimeout(() => {
//   removeParkFromPage()
// }, 1000);
// setTimeout(() => {
//   removeParkFromPage()
// }, 2000);
// setTimeout(() => {
//   removeParkFromPage()
// }, 3000);
// setTimeout(() => {
//   removeParkFromPage()
// }, 4000);


