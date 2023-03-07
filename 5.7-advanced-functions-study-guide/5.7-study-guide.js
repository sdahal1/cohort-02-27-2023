/* 
.find() -> loop through the array to find the first element that matches a condition
  - accepts a callback function just like forEach does
  - the callback function accepts parameters for element and index, just like forEach does
  - the callback function has to return a condition. the find() method will stop and return the first element that the condition evaluates true for
  - .find() will return the ELEMENT that condition returns true on.......OR if no element gets a truthy condition, it will return undefined


.filter() -> loop through the array to find the all the elements that matches a condition and will return to you an array of these elements
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function has to return a condition. the filter() method will stop after going through a full array
  - .filter() will return the ARRAY that contains elements where the condition returns true on.......OR if no elements gets a truthy condition, it will return an empty array



.map() -> loop through the array to transform each element to something else without modifying the original dataset
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function can return anything that we want each element from the original array to "map" or "transform" into
  - .map() will return the ARRAY that contains transformed elements (of whatever is returned from the callback)



.some() -> loops through the array to check if "at least one" or "some" elements match the condition in the .some()'s callback function
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function needs to return a CONDITION.
  - .some() will return TRUE  if any of the elements match that condition in the callbackfunction  or FALSE if NONE of the elements match the condition in the cb


.every() -> loops through the array to check if "every" element matches the condition in the .every()'s callback function
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function needs to return a CONDITION.
  - .every() will return TRUE if every one of the elements match that condition in the cb, or FALSE if even one element does not match teh condition in the cb


Use case for .reduce() -> accumulator pattern (calculate total sum, accumulate onto a datatype)
.reduce()
    -takes a callback fn AND a starting value to accumulate onto
    - callback function parameters -> 1st param: accumulator, 2nd param: each element, 3rd param: each index
    - if no value is provided as the intial value for accumulator, it will default to being the first element in the array
    - callback returns the new value for the accumulator
    - does not modify original array -> store output in variable or return the .reduce() call
    - outputs the final value of the accumulator


.sort()
    - accepts a callback function as an input (thats it for our purposes)
    - callback function parameters -> 1st param: an element, 2nd param: another element
    - callback returns a number (Negative num, 0, Postive num). Negative number-> a before b, positve number-> b before a
    - Modifies the original array

*/


const books = [
  {
      id: 1,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publisher: { 
          name: "Simon & Schuster",
          state: "Maryland" 
      },
  },
  {
      id: 2,
      title: "How to win friends and influence People",
      author: "Dale Carnegie",
      publisher: { 
          name: "Simon & Schuster",
          state: "Maryland" 
      },
  },
  {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      publisher: { 
          name: "Warner Books",
          state: "California" 
      },
  },
  {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      publisher: { 
          name: "Penguin Books",
          state: "Maryland" 
      },
  },
];

const students = {
  "Lebron": {
      finished: [1,2],
      notFinished: [3,4],
  },
  "Steph": {
      finished: [1],
      notFinished: [2,3,4],
  },
  "Jessie": {
      finished: [1,3,4],
      notFinished: [2],
  }
};



/*
1. Get books by publisher name

[
 Thinkandgrowrichobject,
  Winfriends object,

]
*/

function getBooksByPublisherName(books, publisherName){
  const result = books.filter((bookObj)=>{
    return bookObj.publisher.name === publisherName;
  })

  return result;
}

// console.log(getBooksByPublisherName(books,"Simon & Schuster"))

/* 
2. Get a students finished books

Write a function that takes an array of books, object containing all students, and a student name.
It will return an array of book objects that represent the books that the given user has finished.


[

]
*/

function getStudentsFinshedBooks(books=[], students={}, studentName=""){
  //get access to the given students finished property -> array -> [1,2]
  const finishedBooks = students[studentName].finished
  //go through the books array and only filter out the books whose id is included in the given student's finishedBooks array
  const result = books.filter((bookObj)=>{
    //the id of the book needs to be inside the finishedBooksArray
    return finishedBooks.includes(bookObj.id)
    // let found= false
    // finishedBooks.forEach(id=>{
    //   if(id === bookObj.id){
    //     found = true
    //     return;
    //   }
    // })
    // return found
  })

  return result

}

// console.log(getStudentsFinshedBooks(books, students, "Lebron"))



/* 
3. Find if a given student has read all the books from a given publisher. Return true or false

Function inputs: list of books, object containing all students, publisher name, student name

*/

function hasStudentReadAllBooksFromGivenPublisher(books=[], students={}, publisherName="", studentName=""){
  //looked at steph's finshedbooks [1,2,4]
  const finishedBooks = students[studentName].finished
  // only looked at books from simon & schuster [{id:1}, {id:2}]
  // const booksFromGivenPublisher = books.filter((bookObj)=>{
  //   return bookObj.publisher.name === publisherName;
  // })

  const booksFromGivenPublisher = getBooksByPublisherName(books,publisherName);
  // check if every id from the publishers books array is in the stephs finished books
  const result = booksFromGivenPublisher.every((bookObj)=>{
    //check if studentsFinishedBooks has the current publisher's book's id
    return finishedBooks.includes(bookObj.id)
  })

  return result;

}


// console.log(hasStudentReadAllBooksFromGivenPublisher(books,students, "Simon & Schuster", "Steph"))



/* 
4. Given an object containing all students, and two student names, determine if the first student has read any books that the second student has not read yet (or if some of the books in the studentA finished array are in the studentB not finished array). If so, return true. If the first student has not read any books the second student has not read, return false.

*/

function hasFirstStudentReadSecondStudentsUnfinishedBook(students={}, studentAName='', studentBName=''){
  //access the first students finished books [1,2]
  const studentAFinishedBooks = students[studentAName].finished;
  //access the second students unfinished books [2,3,4]
  const studentBNotFinishedBooks = students[studentBName].notFinished;
  //check if any elements from the finished array is 'included' in the unfinished array
  const result = studentAFinishedBooks.some((bookId)=>{
    return studentBNotFinishedBooks.includes(bookId)
  })

  return result;

  //the for each way below
  // let result = false;
  // studentAFinishedBooks.forEach((bookId)=>{
  //   if(studentBNotFinishedBooks.includes(bookId)){
  //     result = true;
  //     return;
  //   }
  // })
  // return result;
}

// console.log(hasFirstStudentReadSecondStudentsUnfinishedBook(students, "Lebron", "Steph"));






/* 
5. Return all the student names in an array, who have read any book in the given student's notFinished books

Inputs: object of students, student name


[
  "Lebron",
  "Jessie"
]
*/

function findNamesOfStudentsWhoReadGivenStudentsNotFinishedBooks(students={},studentName=""){
  //get the givenStudents notFinishedbooks
  const notFinishedBooks = students[studentName].notFinished;

  const result = []
  //loop through the students object to look at each key value pair
  for(const studentNameKey in students){
    // console.log("key is this", studentNameKey)
    // console.log("value is this", students[studentNameKey])
    
    const studentAFinishedBooks = students[studentNameKey].finished;
    //access the second students unfinished books [2,3,4]
    const studentBNotFinishedBooks = students[studentName].notFinished;
    //check if any elements from the finished array is 'included' in the unfinished array
    const hasStudentReadBooks = studentAFinishedBooks.some((bookId)=>{
      return studentBNotFinishedBooks.includes(bookId)
    })
    if(hasStudentReadBooks === true){
      result.push(studentNameKey)
    }
    
    //helper function way
    // if(hasFirstStudentReadSecondStudentsUnfinishedBook(students,studentNameKey, studentName) === true){
    //   result.push(studentNameKey)
    // }
    // return result;
  }
  
  return result;

  
}

// console.log(findNamesOfStudentsWhoReadGivenStudentsNotFinishedBooks(students, "Steph"))















