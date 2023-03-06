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
*/


/* 
2. Get a students finished books

Write a function that takes an array of books, object containing all students, and a student name.
It will return an array of book objects that represent the books that the given user has finished.
*/



/* 
3. Find if a given student has read all the books from a given publisher. Return true or false

Function inputs: list of books, object containing all students, publisher name, student name

*/



/* 
4. Given an object containing all students, and two student names, determine if the first student has read any books that the second student has not read yet. If so, return true. If the first student has not read any books the second student has not read, return false.

*/




/* 
5. Return all the student names who have read any book in the given student's notFinished books

Inputs: object of students, student name

*/












