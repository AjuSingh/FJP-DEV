//fs stands for file system module
//it perfoms syncronous operations
const fs = require('fs');

//it will append data in the file and if the file is not present then it will we created then appended
// fs.appendFileSync("f1.txt","Hello i am adding the unknown thing in this file");
// fs.appendFileSync("f1.txt","\ni want to add new line also");

//it will read the whole data of the file if we dont give the decoding type then it will default printed in Buffer encoding     
const data = fs.readFileSync('f1.txt','utf-8');
console.log(data);


