//promises are syntatical sugar of callback functions
//call backs makes the code mess or to over come callback hell
const fs = require('fs');

//promises are used to fetch unsynchronously 
//this will work synchronously
// console.log("Before");
// console.log(fs.readFileSync("f1.txt", "utf8"));
// console.log("After");

console.log("Before");
fs.promises.readFile("f1.txt","utf-8")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
console.log("After");



