const fs = require('fs');
//it will take the input from the terminal with two more elements in the array
// node wcat.js i tool input so let think
// [
    //     'C:\\Program Files\\nodejs\\node.exe',
    //     'E:\\FJP\\DEV\\html\\WCAT\\wcat',
    //     'i',
    //     'took',
    //     'input',
    //     'so',
//     'let',
//     'me',
//     'think'
//   ]
let input = process.argv.slice(2);
// console.log(input.slice(2));
//after slicing the first two elements of object and remove it from the array
//node wcat.js filepath => displays the content of the file
//node wcat.js file1 file2

//to create the first two commands we have to do steps
//check if all file path exist
//then append all file content in one variable
const readFiles=(input)=>{
  for(let i = 0; i < input.length;i++){
    if(!fs.existsSync(input[i])){
      return "file doesn't exist at path/" + input[i];
       //we are using the return because of the to not file execution of other
    } 
  }

let content  = "";
for(let i = 0; i < input.length;i++){
   content += fs.readFileSync(input[i]) + "\r\n";
   content+="\r\n"
}
return content;
}

const removeSpaces=(input)=>{
  for(let i = 0; i < input.length;i++){
    if(!fs.existsSync(input[i])){
      console.log();
      return "file doesn't exist at path/" + input[i];
       //we are using the return because of the to not file execution of other
    } 
  }

let content  = "";
for(let i = 0; i < input.length;i++){
   content +=  fs.readFileSync(input[i]) + "\r\n";
   content +="\r\n"
}
let result = content.split("\r\n");
let cnt = 0;
let finalresult = "";


for(let i = 0; i < result.length;i++){
if(result[i]=="" && cnt==0){
  finalresult+=result[i] + "\r\n";
  cnt ++;
}else{
  cnt = result[i]!=="" ? 0 : cnt;
  if(cnt==0){
    finalresult+=result[i] + "\r\n";
  }  
}
}
return finalresult;
}

const addNumericSpaces=(content)=>{
let res = content.split("\r\n");
let cnt=1;
let result  = "";
for(let i=0; i<res.length-1; i++){
result += cnt + ") " + res[i] + "\r\n";
cnt++;
}
return result;
}


const addNumericWithoutSpaces=(content)=>{
  let res = content.split("\r\n");
  let cnt=1;
  let result  = "";
  for(let i=0; i<res.length-1; i++){
  if(res[i]==""){
    result+=res[i]+ "\r\n";
  }else{
    result += cnt + ") " + res[i] + "\r\n"; 
    cnt++;
  }
  }
  return result;
  }
  
  let arr = ["-s","-b","-n"];
  let com1 = input[0];
  let com2 = input[1];
if(com1 == "-s" && com2 == "-n"){
  let res = addNumericSpaces(removeSpaces(input.splice(2)))
   if(res==""){
     console.log("Invalid command or file_path");
   }else{
    console.log(res);
   }
}else if(com1 == "-s" && com2 == "-b"){
  let res= addNumericWithoutSpaces(removeSpaces(input.splice(2)));
  if(res==""){
    console.log("Invalid command or file_path");
  }else{
   console.log(res);
  }
}else if(com1=="-s"){
  let res= removeSpaces(input.splice(1));
   if(res==""){
    console.log("Invalid command or file_path");
  }else{
   console.log(res);
  }
}else if(com1=="-b"){
  let res= addNumericWithoutSpaces(readFiles(input.splice(1)));
  if(res==""){
    console.log("Invalid command or file_path");
  }else{
   console.log(res);
  }
}else if(com1== "-n"){
  let res= addNumericSpaces(readFiles(input.splice(1)));
  if(res==""){
    console.log("Invalid command or file_path");
  }else{
   console.log(res);
  }
}else{
  console.log("Command doesn't exist");
}

// let content = fs.readFileSync("f1.txt") + "\r\n";
// let res = content.split("\r\n");
// console.table(res);









