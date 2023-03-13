// const artists = [
//   { name: "Taylor Swift", rating: 9 },
//   { name: "Drake", rating: 9.8 },
//   { name: "J Cole", rating: 8 },
//   { name: "Rob", rating: 6.25 },
//   { name: "Kendrick Lamar", rating: 8.5 },
//   { name: "Beatles", rating: 10 },
//   {
//       name: "Random guy from beach who asked me to follow his sound cloud",
//       rating: 5,
//   },
// ];


function getAverageRating(artists=[]){
  if(artists.length === 0) return 0;
  const result = artists.reduce((accumulator, element)=>{
    accumulator += element.rating;
    return accumulator
  },0)

  return Number((result/artists.length).toFixed(2));
}

module.exports = getAverageRating;
// console.log(getAverageRating(artists)) //
