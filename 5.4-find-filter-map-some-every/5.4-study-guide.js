/*
We will demonstrate the following built in array methods
    .find() 
    .filter()
    .map()
    .some()
    .every()


const employees = [
    {
        name: "Lebron James",
        salary: 110000,
        company: {
            name: "Google",
            city: "Reston",
            state: "Virginia",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Scooby Doo",
        salary: 200000,
        company: {
            name: "GreenChef",
            city: "New York City",
            state: "New York",
        },
        languages: ["Html", "Css"],
    },
    {
        name: "Larry David",
        salary: 80000,
        company: {
            name: "Comedy Central",
            city: "Los Angeles",
            state: "California",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Beyonce",
        salary: 90000,
        company: {
            name: "Google",
            city: "Brooklyn",
            state: "New York",
        },
        languages: ["Javascript", "Java", "Python"],
    }
];

*/


const employees = [
    {
        name: "Lebron James",
        salary: 110000,
        company: {
            name: "Google",
            city: "Reston",
            state: "Virginia",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Scooby Doo",
        salary: 200000,
        company: {
            name: "GreenChef",
            city: "New York City",
            state: "New York",
        },
        languages: ["Html", "Css"],
    },
    {
        name: "Larry David",
        salary: 80000,
        company: {
            name: "Comedy Central",
            city: "Los Angeles",
            state: "California",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Beyonce",
        salary: 90000,
        company: {
            name: "Google",
            city: "Brooklyn",
            state: "New York",
        },
        languages: ["Javascript", "Java", "Python"],
    }
];

//.find() -> it returns the first item that matches a given condition, even if more than one item matches. If there is no match, find() returns undefined.
//find an employee who is named "Larry David"
function findEmployeeByName(employees=[], name){
    const result =  employees.find((emp)=>{

        //what condition do i need here?
        return emp.name === name;
    })

    return result;
}


// console.log(findEmployeeByName(employees, "Larry David"))



//.filter() -> This method builds a new array of only the items that match a certain condition.
//get all the employees who are making over a given amount
function findHighEarners(employees, amount){
    return employees.filter((element)=>{

        //cb needs to 
        return element.salary > amount
    })
}

// console.log(findHighEarners(employees, 100000))


//.map()-  this code processes each item in the array and creates a new value for each item in the original array. Each item in the original array maps to an item in the new array.
//give back a new array containing only the company names and city for each employee in the given list
function findCompanyNamesAndCity(employees=[]){
    //['Google - Reston', 'GreenChef - New York City', 

    return employees.map((emp)=>{
        return `${emp.company.name} - ${emp.company.city}`
    })

    /* 

    // you can also destructure in the parameter of the cb

    return employees.map(({company})=>{
        // const {company} = emp
        return `${company.name} - ${company.city}`
    })
    */
}

// console.log(findCompanyNamesAndCity(employees))










//.some() - method accepts a callback function that implements a comparison that is executed for each item in the array, similar to the previous methods. If the callback function returns true for any item in the array, then the entire some() method returns true.
//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees=[], companyName){
    const result =  employees.some((emp)=>{

        //the condition we need to return
        return emp.company.name === companyName
    })

    return result;
}   


// console.log(doesCompanyHaveEmployee(employees, "Comedy Central"))




// method works by checking the condition given against every item in the array. If that condition ever fails, it will return false. Otherwise, it will return true.
//use .every() to indicate whether every employee is making over a certain salary
function areAllEmployeesGettingPaidGivenAmount(employees=[], amount){
    const result = employees.every((emp)=>{

        return emp.salary > amount;
    })

    return result
}

console.log(areAllEmployeesGettingPaidGivenAmount(employees, 100000))





/* You can also combine the built in array methods!! */

/* Use filter() and map() to give back a new array containing only the company names and city for each employee in the given list who have a salary greater than or equal to a given amount

Hint: use .filter() to get back only the employees who make a given amount or more, then use .map to transform that data to a new array containing the company names and city of those employees
*/



/* Use filter() and some() method to find if any employee from a given state has a salary of over a given amount */




