


function getAverageRating(artists=[]){
  if(artists.length === 0) return 0;
  const result = artists.reduce((accumulator, element)=>{
    accumulator += element.rating;
    return accumulator
  },0)

  return Number((result/artists.length).toFixed(2));
}


function getTopRatedArtist(artists=[]){
  if(artists.length === 0) return null
  
  artists.sort((artistA, artistB)=>{
    return artistB.rating - artistA.rating;
  })
  return artists[0]

}


function assignGrade(score) { //yes
  let result = "F"; //y

  if (score >= 0.9) { //y
    result = "A"; //no
  } else if (score >= 0.8) { //y
    result = "B"; //y
  } else if (score >= 0.7) { //no
    result = "C"; //no
  }

  return result; //yes
} //yes


function splitHighRatedArtistsFromLowRatedArtists(artists = [], score){
  //forEach way
  // const highRatedArtists = []
  // const lowRatedArtists = []
  // artists.forEach((artist)=>{
  //   if(artist.rating > 7.5){
  //     highRatedArtists.push(artist)
  //   }else{
  //     lowRatedArtists.push(artist)
  //   }
  // })

  const highRatedArtists = artists.filter(artist=> artist.rating > score)
  const lowRatedArtists = artists.filter(artist=> artist.rating <= score)



  return [highRatedArtists,lowRatedArtists]
}

// console.log(splitHighRatedArtistsFromLowRatedArtists(artists, 7.5))



module.exports = {
  getAverageRating,
  getTopRatedArtist,
  assignGrade,
  splitHighRatedArtistsFromLowRatedArtists
}
// console.log(getAverageRating(artists)) //



console.log({ name: "Taylor Swift", rating: 9 } === { name: "Taylor Swift", rating: 9 }) //false