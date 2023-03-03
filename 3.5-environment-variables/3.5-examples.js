const password = 12345;
//more code here that needs this password to access the db

console.log(password)


//ENVIRONMENT variables are variables that contain information from your operating system
console.log(process.env.SECURITYSESSIONID);

//you can also create your own environmemnt variables
console.log(process.env.RobsFavCookieFlavor);

//you can see the script variables (arguments provided when running the javascript file) as well
console.log(process.argv)