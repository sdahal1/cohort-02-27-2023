const students1= [
  { name: "Shane Carey", score: 7.5 },
  { name: "Saurabh Dahal", score: 9.5 },
  { name: "Rob Dahal version 2", score: 8.5 },
  { name: "Rebecca Mills", score: 8.7 },
];

const students2= [
  { name: "Shane Carey" },
  { name: "Saurabh Dahal" },
  { name: "Rob Dahal version 2"},
  { name: "Rebecca Mills" },
];

const students3= [
  { name: "Shane Carey", score: 7.5 },
  { name: "Saurabh Dahal", score: "hi" },
  { name: "Rob Dahal version 2", score: 8.5 },
  { name: "Rebecca Mills", score: 8.7 },
];


function getHighestScore(students=[]){
  if(students.length === 0) return "There are no students"

  const doesEveryoneHaveAValidScore = students.every((student)=>{
    return student.score!==undefined && typeof student.score === "number"
  })

  if(doesEveryoneHaveAValidScore === false){
    return "The data set does not have a valid score property on one or more elements"
  }
  students.sort((studentA, studentB)=>{
    return studentB.score - studentA.score
  })
  return students[0]

}


console.log(typeof 5)

console.log(getHighestScore(students1)) //happy path

console.log(getHighestScore())  //edge case -> no data provided

console.log(getHighestScore(students2)) //edge case -> no score property
console.log(getHighestScore(students3)) //edge case -> score properties are not consistently numbers



/* 
Expectations for our happy path:

1. Students has to be an array with elements in it 
2. Each element in the array of students contains a score property
3. Score property's values are numbers

*/