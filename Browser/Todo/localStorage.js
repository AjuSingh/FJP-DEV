//set data
localStorage.setItem("name","Ajvinder");
localStorage.setItem("age",22);
localStorage.setItem("branch","cse");
localStorage.setItem("city","sirsa")

//get data 
let name = localStorage.getItem("name");
let branch = localStorage.getItem("branch");
console.log(name);
console.log(branch);
console.log(localStorage.city);


//delete / remove data
let age = localStorage.removeItem("age");
delete localStorage.city;


//number of items stored in localStorage
console.log(localStorage.length);


//get key 
let d = localStorage.key(0);
console.log("jey at the index 0->" + d);