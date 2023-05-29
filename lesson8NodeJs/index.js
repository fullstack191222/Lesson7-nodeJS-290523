// console.log("Hello world!");


// const jsonObj = {
//     "name": "lesson8nodejs",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC"
//   }
  

//   console.log(jsonObj);


///////////////FILE System//////
// const { error } = require('console');
//import fileSystem module
const { log } = require('console');
const fs = require('fs')



const errorHandler = (err)=> {
    if(err) {
        console.log(err);
        throw err
    } else {
        console.log("success");
    }}
// //append new file with the content.
//fs.appendFile("newFile.txt", "Hi its a new file", errorHandler)

////function which will delete the file.
//fs.unlink("newFile.txt",errorHandler)

//read file sync
// try {
//     const fileRead = fs.readFileSync("file.txt", "utf-8")
//     console.log(fileRead);
// } catch (err) {
//     throw err
// }

// //read file async
// const fileRead = fs.readFile("file.txt", "utf-8", (error, result)=> {
//     if (error) {
//         console.log(error);
//         throw error;
//     } else {
//         console.log("file read is " + fileRead);
//         console.log("success async read " + result)
//     }
// });

// const obj = {
//     lastname : lastname
// }

// const secondFile = require("./secondFile.js")

// secondFile.personSleeping(secondFile.person2)

const uc = require("upper-case")

console.log(uc.upperCase("stam string"))
