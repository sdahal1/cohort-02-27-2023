// const fs = require("fs");
// fs.writeFile("./hello.txt","Content for this file",(err)=>{
//   console.log("file has been created!")
// })


// Import JavaScript's fs library (used to read and write text files)
const fs = require('fs')
// Attempt to read the idontexist.txt file
const content = fs.readFileSync("idontexist.txt")



