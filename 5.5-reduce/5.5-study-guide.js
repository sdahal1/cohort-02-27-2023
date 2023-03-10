const movies = [
  {
      title: "Austin Powers",
      views: 1000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
  {
      title: "Finding Nemo",
      views: 2000,
      producer: { 
          name: "Disney",
          city: "Orlando"
      }
  },
  {
      title: "Forrest Gump",
      views: 3000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
];


/* Add up all the views numbers */

function totalViews(movies){
  return movies.reduce((accumulator,element,idx)=>{
    return accumulator + element.views
  },0)


  // return movies.reduce((accumulator,element,idx)=>accumulator + element.views,0)
}

// console.log(totalViews(movies))



/* given an array of movie objects, return an object where each key is a movie title, and the value is the producer name 
Example output:
{
'Austin Powers': 'Universal Studios',
'Finding Nemo': 'Disney',
'Forrest Gump': 'Universal Studios'
}

*/

function movieAndProducerName(movies=[]){
  const result = movies.reduce((accumulator,element)=>{
    accumulator[element.title] = element.producer.name;
    return accumulator;
  },{})

  return result;
}


// console.log(movieAndProducerName(movies));

/* given an array of movie objects, return an object where each key is the producer name, and each value is an array of movies associated with that producer name 

example output: 

{
'Universal Studios': [
  { title: 'Austin Powers', views: 1000, producer: [Object] },
  { title: 'Forrest Gump', views: 3000, producer: [Object] }
],
Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}

{
  "Universal Studios": [
    { title: 'Austin Powers', views: 1000, producer: [Object] }
  ],
  "Disney": [
    { title: 'Finding Nemo', views: 2000, producer: [Object] }
  ]
}


*/

function movieByProducer(movies){
  
  const result = movies.reduce((accumulator,element)=>{
    //check if the accumulator contains a key for element.producer.name, if it does not, then create a key with the element.producer.name and set value to be an array containin the curreng element
    if(accumulator[element.producer.name] === undefined){
      accumulator[element.producer.name] = [element]
    }else{
      accumulator[element.producer.name].push(element)
    }

    return accumulator;
  },{})

  return result;
}

// console.log(movieByProducer(movies))