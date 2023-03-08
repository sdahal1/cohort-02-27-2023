//import data
const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses = []) {
  return courses.length;
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total students count
function getTotalStudentsCount(students = []) {
  return students.length;
}

// console.log(getTotalStudentsCount(students));

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id. Return NULL if not found
function findInstructorById(instructors = [], id) {
  const result = instructors.find((instructorObj) => {
    return instructorObj.id === id;
  });
  if (result === undefined) return null;
  return result;
}

// console.log(findInstructorById(instructors, 100))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id. Return NULL if not found
function findCourseById(courses, id) {
  const result = courses.find((courseObj) => {
    return courseObj.id == id;
  });
  if (result === undefined) return null;
  return result;
}

// console.log(findCourseById(courses, 2))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
  const result = students.find((studentObj) => {
    return studentObj.id == id;
  });
  if (result === undefined) return null;
  return result;
}

// console.log(findstudentById(students, 200))

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
  students.sort((elementA, elementB) => {
    return elementA.name.first.toLowerCase() < elementB.name.first.toLowerCase()
      ? -1
      : 1;
  });

  return students;
}

// console.log(sortStudentsByFirstName(students))

/* 
7. Partition courses by student on pace
find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

[
    [
        {id:3},
        {id:4},
        {id:5}
    ],
    [
        {id:1},
        {id:2},
        {id:6},
        {id:7}
    ]
]


[
   {id:1} 
]

*/

function partitionCoursesByStudentProgress(courses) {
  //filter the courses that are not on pace
  const notOnPace = courses.filter((courseObj) => {
    //if some element's in the current courseObj's roster has the onPace === false, then this course is not on pace
    const areSomeNotOnPace = courseObj.roster.some((studentObj) => {
      return studentObj.onPace === false;
    });
    //return a condition/boolean for filter's callback
    return areSomeNotOnPace;
  });
  //group courses that are on pace
  const onPace = courses.filter((courseObj) => {
    //if some element's in the current courseObj's roster has the onPace === false, then this course is not on pace
    const isEveryoneOnPace = courseObj.roster.every((studentObj) => {
      return studentObj.onPace === true;
    });
    //return a condition/boolean for filter's callback
    return isEveryoneOnPace;
  });

  return [onPace,notOnPace]
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


[
     {
        id: 2,
        name: {
            first: "Scooby",
            last: "Doo"
        }
    },
    {
        id: 4,
        name: {
            first: "Spongebob",
            last: "Squarepants"
        }
    },

]


[]
*/
//similar to getBorrowersForBook();
function getStudentsForCourse(course, students) {
    //have an array for the result
    const result = [];
    const {roster} = course;
    //look at each element in the course objects roster. For each element look at the studentId property, 
    roster.forEach((rosterObject,idx)=>{
        //and check for each rosterObject's id in the the students array. 
        console.log(rosterObject)
        //loop through students array
        students.forEach((studentObject)=>{
            console.log("student objects id", studentObject.id)
            //check if If the elements id property matches the studentId property from the roster object,
            if(rosterObject.studentId === studentObject.id){
                //then modify that student object to have the onpace property from the current roster object, 
                studentObject.onPace = rosterObject.onPace
                
                //then push the current matching student object to the result
                result.push(studentObject);
            }
        })
        
    })

    return result;

    
}

// console.log(["a", "b", "c", "d", "e"].slice(0,3))

function getStudentsForCourseAdvancedWay(course, students){
    const {roster} = course;
    const resultMapped = roster.map((rosterObject)=>{
        let matchingStudent = students.find((studentObject)=>{
            
            return rosterObject.studentId === studentObject.id
        })
        matchingStudent.onPace = rosterObject.onPace
       return matchingStudent; 
    })

    return resultMapped.slice(0,2)
}

// JSON.stringify(dataGoesHere)
let oneCourse = {
  id: 1,
  name: "Javascript Fundamentals",
  category: "Software Engineering",
  instructorId: 3,
  roster: [
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
    }
  ],
};
// console.log(getStudentsForCourse(oneCourse, students));

// console.log(getStudentsForCourseAdvancedWay(oneCourse, students));

/* 
9. getTotalNumberOfSeatsForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }


let count = 0

//id of the student

*/

function getTotalNumberOfSeatsForStudent(student = {}, courses = []) {
    let count = 0;
    const {id} = student;
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        roster.forEach((rosterObject)=>{
            if(rosterObject.studentId === id){
                count++
            }
        })
    })

    return count;

}

function getTotalNumberOfSeatsForStudentAdvanced(student = {}, courses = []) {
    const {id} = student;
    let count = courses.reduce((accumulator, courseObj)=>{
        const {roster} = courseObj;
        const foundStudent = roster.find((rosterObject)=>{
            return rosterObject.studentId === id
        })
        if(foundStudent != undefined){
            accumulator++
        }
        return accumulator;

    },0)
    return count;
}

let student1 = {
  id: 1,
  name: {
    first: "Bugs",
    last: "Bunny",
  },
};

// console.log(getTotalNumberOfSeatsForStudentAdvanced(student1, courses));

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



givenStudentid = 1
[

]

for each course in the courses array we look at the roster key(property)
    //roster is an array of rosterObjects representing students
    //check the roster for each element to see if the element's student id is found that matches the givenstudentid. If a student whose id matches the givenstudentid is found in the roster , then we will push the courseobject to the result array
*/

function getCoursesStudentTakes(student={}, courses=[], instructors=[]) {
    const {id:givenStudentId} = student;
    const result = []
    //loop through courses to get access to each course object
    courses.forEach((courseObj)=>{
        //we will look at the roster for each course object
        const {roster} = courseObj;
        let found = false;
        //roster is an array, so we will loop through roster to get access to each roster object's studentId to compare it with the given students id
        roster.forEach((rosterObj)=>{
            //if the ids match, then the given student is enrolled in the roster for the current course
            if(rosterObj.studentId === givenStudentId){
                found = true;
            }
        })
        //if the student found, push the course to the result array
        if(found === true){
            //modify the courseObj to have instructor information embedded
            const instructorForCourse = findInstructorById(instructors, courseObj.instructorId)
            courseObj.instructor = instructorForCourse
            //then push to result array
            result.push(courseObj)
        }
    })
    return result;
}

function getCoursesStudentTakesAdvanced(student={}, courses=[], instructors=[]) {
    const {id:givenStudentId} = student;
    //loop through courses to get access to each course object
    const result = courses.filter((courseObj)=>{
        //we will look at the roster for each course object
        const {roster} = courseObj;
        const found = roster.some((rosterObj)=>{
            return rosterObj.studentId === givenStudentId
        })

        // const found1 = roster[0].studentId === givenStudentId && roster[0].onPace === false
        //if the student found, push the course to the result array
        if(found === true){
            //modify the courseObj to have instructor information embedded
            const instructorForCourse = findInstructorById(instructors, courseObj.instructorId)
            courseObj.instructor = instructorForCourse
            //then push to result array by returning true (thats a .filter() rule)
            return true
        }
        return false;
    })
    return result;
}

// console.log(getCoursesStudentTakesAdvanced(student1, courses, instructors));

/*
11. Given an array of courses, should return the total number of courses that  currently have at least one person behind
*/

function getCoursesNotOnPaceCount(courses = []) {
    let count = 0;
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        roster.forEach((rosterObj)=>{
            if(rosterObj.onPace === false){
                count++;
                //return so that we exit the loop on roster. if someone is found that is not on pace, we consider the whole course to not be on pace, so we dont need to keep looking for more students in THIS courses roster, we can move on to the next course in teh courses.forEach() loop
                return;
            }
            
        })
    })
    return count;
}

function getCoursesNotOnPaceCountAdvanced(courses = []) {
    const count = courses.reduce((accumulator, courseObj)=>{
        const {roster} = courseObj;
       
        const areSomeNotOnPace = roster.some((rosterObj)=>{
            return rosterObj.onPace === false
        })

        if(areSomeNotOnPace === true){
            accumulator++
        }

        return accumulator
    },0)
    return count;
}

// console.log(getCoursesNotOnPaceCountAdvanced(courses));

/* 
12. Get most common course categories and order them from most popular to least popular. Limit the count to the top two-> Output in this format

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]



*/

const getMostCommonCategories = (courses = []) => {};

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

function getMostPopularCoursesHelper(courses = []) {}

function getMostPopularCourses(courses = []) {}

// console.log(getMostPopularCourses(courses));

/* 

14. getMostPopularInstructors()- Get instructors of the 2 largest classes 

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function getMostPopularInstructors(courses = [], instructors = []) {}

function helperJoinFirstAndLastNames(first, last) {
  return `${first} ${last}`;
}

// console.log(getMostPopularInstructors(courses, instructors));
