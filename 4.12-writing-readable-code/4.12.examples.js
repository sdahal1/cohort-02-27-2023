const authors = [
  {
    id: 1,
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    series: ["His Dark Materials", "Sally Lockhart"],
  },
  {
    id: 2,
    name: {
      firstName: "Terry",
      lastName: "Pratchett",
    },
    series: ["Discworld", "Long Earth"],
  },
];

function getAllSeries(authors) {
  const result = [];
  if(!authors.length) return result; //1. this is a guard clause-> A statement that evaluates to a boolean that determines whether or not a function should continue running

  // if(authors.length === 0) return result; //this is a guard clause-> A statement that evaluates to a boolean that determines whether or not a function should continue running


  for (let i = 0; i < authors.length; i++) {
    //2. use variables to represent code in a more readable way
    const currentAuthor = authors[i]; 
    for (let j = 0; j < currentAuthor.series.length; j++) {
      result.push(currentAuthor.series[j]);
    }
  }
  return result;
}

// console.log(getAllSeries(authors));



function getSeriesListById(authors, id) {
  if(!authors || !id) return false; //guard clause


  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }

  if(selected === null){
    return []; //3. return early
  }

  const message = `Series list: ${selected.series.join(", ")}`;
  return message;


  // if (id) {
  //   if (selected) {
  //     const message = `Series list: ${selected.series.join(", ")}`;
  //     return message;
  //   } else {
  //     return [];
  //   }
  // } else {
  //   return "No ID provided.";
  // }
}

// console.log(getSeriesListById(authors))
// console.log(getSeriesListById())



function moreThanThreeAuthors(authors) {
  // if (authors.length > 3) {
  //   return true;
  // } else {
  //   return false;
  // }

  //if you;re returning a boolean based on a condition, you can just return the condition
  return authors.length > 3
}


console.log(moreThanThreeAuthors(authors))