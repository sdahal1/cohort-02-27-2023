let topArtists = [
  {name: "Drake", rating: 10},
  {name: "Taylor Swift", rating: 10},
  {name: "J Cole", rating: 8},
  {name: "Kendrick Lamar", rating: 9},
  {name: "Beatles", rating: 10}
]



function getRandomArtist(artists) {
  let randomNum = Math.floor(Math.random()*artists.length)
  let randomArtist = artists[randomNum];
  return randomArtist
}

console.log(getRandomArtist(topArtists))
//console.log(randomArtist) //reference error-> randomArtist was initialized within getRandomArtist function so its only available in that function

for(let i = 0; i<10; i++){
  console.log(i)
}

// console.log(i)

let price = 3.99

console.log("     hello    ".trim())
// price.trim()
