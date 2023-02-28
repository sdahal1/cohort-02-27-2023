// console.log("hello world", [3346,34634,123], {name: "Lebron", isGoat: true});

function identifyRandomSongFromArtist(artist){ //artist is a parameter (is the placeholder variable that will store any inputs given to the function)
  // console.log("running function with this artist", artist)
  let randomIndex = Math.floor(Math.random()*artist.topSongs.length)
  console.log(artist.topSongs[randomIndex])
}


let artist1 = {
  name: "Prep",
  topSongs: ["Cheapest Flight", "Rachel", "Sunglasses"]
}

let artist2 = {
  name: "Celia Cruz",
  topSongs: ["Flor De Mayo", "Saludo Elgua", "Tumbo"]
}

let artist3 = {
  name: "Beatles",
  topSongs: ["Let it be", "Lucy in the Sky"]
}

identifyRandomSongFromArtist(artist1) //artist1 is an argument (the data that we give to the function when we call the function)

identifyRandomSongFromArtist(artist3) //artist2 is an argument (the data that we give to the function when we call the function)
