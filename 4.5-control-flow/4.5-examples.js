/* 
control flow- logical conditional statements that direct the flow of your code



THE VALUE OF A FUNCTION CALL IS WHATEVER THE FUNCTION CALL RETURNS
*/




function getPrice(product) {
  let price = product.priceInCents;
  //conditionals require some statement that will evaluate to true/false (boolean)
  if (product.onSale) price = price * 0.9;

  return price;
}

const product = {
  priceInCents: 100,
  name: "Red Beanie",
  size: "L",
  onSale: true,
};


/* 
Conditional operators (ternary operators)-> best used when you have a simple if/else condition
*/
function isMagicNumber(num){
  // if(num === 8){
  //   console.log("Kobe!")
  // }else if(num === 23){
  //   console.log("Goat!")
  // }
  // else{
  //   console.log("New phone who dis")
  // }


  (num === 8)
  ? console.log("Kobe!") 
  : console.log("who dis")
  // (num === 8)
  // ? console.log("Kobe!") 
  // : (num === 23)
  //   ? console.log("Goat!")
  //   : console.log("who dis")

}


function getPrice2(product) {
  let price = product.priceInCents;
  // if(price > 2000){
  //   return "Out of budget"
  // }else{
  //   return "Shopping Spree!"
  // }
  

  return (price > 2000) ? "Out of budget" :  "Shopping Spree!"

  // let result;
  // (price > 2000) ? result = "Out of budget" :  result = "Shopping Spree!"
  // return result;
}


// console.log(getPrice2(product)); 

// isMagicNumber(23)






/* 

Switch statements-> useful when you have multiple branches of conditions (if, else if's, and else)

*/

function showTopSongs(songs) {
  // //if there are 0 songs in the playlist, then: "There are 0 songs in this playlist"
  // if(songs.length === 0){
  //   return `There are ${songs.length} songs in this playlist.`
  // }else if(songs.length === 1){
  //   //if there is only 1 song: "The one and only song songnamegoeshere is great"
  //   return `The one and only song ${songs[0].title} is great`
  // }else{
  //   let titlesOnly = []
  //   for(let i = 0; i<songs.length; i++){
  //     titlesOnly.push(songs[i].title)
  //   }

  //   // console.log(titlesOnly)
  //   //if there are more than 1 song, then have it say: "These songs: songname, songname, songname are great"
  //   return `These songs: ${titlesOnly.join(", ")} are great`
  // }

  switch(songs.length){
    case (0):
      return `There are ${songs.length} songs in this playlist.`;
    case (1):
      return `The one and only song ${songs[0].title} is great`;
    default:
      let titlesOnly = []
      for(let i = 0; i<songs.length; i++){
        titlesOnly.push(songs[i].title)
      }
      return `These songs: ${titlesOnly.join(", ")} are great`
  }
}


let robsPlaylist = [
  {
      title: "Blessings",
      artist: "Chance The Rapper",
      albums: ["A", "B", "C"],
  },
  {
      title: "Hussle and Motivate",
      artist: "Nipsey Hussle",
      albums: ["D", "E", "F"],
  },
  {
      title: "Hotel California",
      artist: "Eagles",
      albums: ["G", "H", "I"],
  },
  {
      title: "Let It Be",
      artist: "Beatles",
      albums: ["J", "K", "L"],
  },
];


// console.log(showTopSongs(robsPlaylist));


function getStateSalesTax(stateAbbreviation) {
  let result;
  switch (stateAbbreviation) {
    case "CA":
      result = 0.0725;
      break;
    case "CO":
      result = 0.029;
      break;
    case "GA":
      result = 0.04;
      break;
    case "VT":
      result = 0.06;
      break;
    default:
      result = 0;
  }

  return result;
}



console.log(getStateSalesTax("CO"))


