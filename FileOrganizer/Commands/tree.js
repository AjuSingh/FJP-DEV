const fs = require("fs"); //fs module
const path = require("path"); //path module

function tree(indent,curPath) {
  let isDirectory = fs.lstatSync(curPath).isDirectory();
  if (isDirectory) {
    //printing the directory 
    let folder = path.basename(curPath)
    console.log( indent + "└──"  + folder);
    //getting the all files in the current directory and pass the path if it is directory
    let allFiles = fs.readdirSync(curPath);
    for (let i = 0; i < allFiles.length; i++) {
      //getting the full path of the files
      //if the the current is folder then it will we passed to the function else we will print it
      let fullPath = path.join(curPath, allFiles[i]);
      if (fs.lstatSync(fullPath).isDirectory()) {
        //passing the next directory
        tree(indent + "\t",fullPath);
      } else {
        //we will get the last name of current directory for printing
        let baseName = path.basename(fullPath);
        console.log(indent + "├── " + baseName);
      }
    }
  } else {
    //this is for that case when initially there is no directory and we will just print the current directory basenames
    let baseName = path.basename(fullPath);
    console.log(baseName);
  }

 
}

module.exports = {tree};


