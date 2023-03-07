//import data
const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses = []) {
   
}

// console.log(getTotalCoursesCount())

//2. Get Total students count
function getTotalStudentsCount(students = []) {
    
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id. Return NULL if not found
function findInstructorById(instructors, id) {
   
}

// console.log(findInstructorById(instructors, 40))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id. Return NULL if not found
function findCourseById(courses, id) {
   
}

// console.log(findCourseById(courses, 60))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
   
}

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
   
}

// console.log(sortStudentsByFirstName(students))

/* 
7. Partition courses by student on pace
find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

[[{},{},{}], [{},{},{}]]

*/

function partitionCoursesByStudentProgress(courses) {
  
}

// console.log(partitionCoursesByStudentProgress(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of student objects that match the courses roster list, and add the onPace property from the roster objects to the student object. Limit to the first two

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}
*/
//similar to getBorrowersForBook();
function getStudentsForCourse(course, students) {
    
}

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        {
            studentId: 2,
            onPace: false,
        },
        {
            studentId: 3,
            onPace: true,
        },
        {
            studentId: 4,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

// console.log(getStudentsForCourse(oneCourse, students));

/* 
9. getTotalNumberOfSeatsForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfSeatsForStudent(student = {}, courses = []) {
    
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfSeatsForStudent(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects->

should return all of the courses that the given student is enrolled in with the instructor embedded


output should look like this like this: [
  {
    id: 1,
    name: 'Javascript Fundamentals',
    category: 'Software Engineering',
    instructorId: 3,
    roster: [ [Object], [Object], [Object], [Object], [Object] ],
    instructor: { id: 3, name: [Object] }
  },
  {
    id: 2,
    name: 'Python Fundamentals',
    category: 'Software Engineering',
    instructorId: 2,
    roster: [ [Object], [Object], [Object] ],
    instructor: { id: 2, name: [Object] }
  },
  {
    id: 6,
    name: 'Bread And Cheddar- The Fundamentals',
    category: 'Finance',
    instructorId: 4,
    roster: [ [Object], [Object], [Object], [Object] ],
    instructor: { id: 4, name: [Object] }
  },
  {
    id: 7,
    name: 'React',
    category: 'Software Engineering',
    instructorId: 3,
    roster: [ [Object], [Object], [Object] ],
    instructor: { id: 3, name: [Object] }
  }
]

*/

function getCoursesStudentTakes(student, courses, instructors) {
    
}

// console.log(getCoursesStudentTakes(student1, courses, instructors));

/*
11. Given an array of courses, should return the total number of courses that  currently have at least one person behind
*/

function getCoursesNotOnPaceCount(courses = []) {
    
   
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories and order them from most popular to least popular. Limit the count to the top two-> Output in this format

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]



*/

const getMostCommonCategories = (courses = []) => {
   
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCoursesHelper(courses = []) {
   
}

function getMostPopularCourses(courses = []) {
   
}

// console.log(getMostPopularCourses(courses));

/* 

14. getMostPopularInstructors()- Get instructors of the 2 largest classes 

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function getMostPopularInstructors(courses=[], instructors=[]) {
   

}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`
}

// console.log(getMostPopularInstructors(courses, instructors));
