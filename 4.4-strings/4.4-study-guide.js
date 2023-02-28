function showTopSongs(songs) {
  //if there are 0 songs in the playlist, then: "There are 0 songs in this playlist"
  if(songs.length === 0){
    return `There are ${songs.length} songs in this playlist.`
  }else if(songs.length === 1){
    //if there is only 1 song: "The one and only song songnamegoeshere is great"
    return `The one and only song ${songs[0].title} is great`
  }else{
    let titlesOnly = []
    for(let i = 0; i<songs.length; i++){
      titlesOnly.push(songs[i].title)
    }

    // console.log(titlesOnly)
    //if there are more than 1 song, then have it say: "These songs: songname, songname, songname are great"
    return `These songs: ${titlesOnly.join(", ")} are great`
  }
}


let playlist1 = []
let playlist2 = [
  {
    title: "Blessings",
    artist: "Chance The Rapper",
    albums: ["A", "B", "C"],
  }
]
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
console.log(showTopSongs(robsPlaylist));
