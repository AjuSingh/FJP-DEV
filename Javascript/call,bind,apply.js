let user1 = {
    name: "aju",
    age: 21
}

let user2 = {
    name: "kaman",
    age: 24
}

let welcome = function(college,city) {
    console.log(`hello ${this.name} your age is ${this.age} you are in ${college} college which is situated at ${city}`);
}

//call is used to control the this of a function
//now we dont have to define a welcome function inside each object
// welcome.call(user1,"gzs","bathinda");

//apply is same as call but instead we are taking the arguement in the array
// welcome.apply(user2,["thapar","patiala"]);


//bind is used to bind the function to an object instead of calling directly
let bindedFunc = welcome.bind(user1);
bindedFunc("gzs","Bathinda");
//if we will go to bind the binderfunc again then it will not bound will new this only the function arguement change not the this
//this value remain same of the previos binded user
let againBinded = bindedFunc.bind(user2);
againBinded("thapar","patiala");



//call,bind, apply are the example of explicit binding


//new binding function
//we can use the function as the costructor 
//for every constructer we have to start with capital letter

function Name(firstName,lastName){
    this.firstName  = firstName;
    this.lastName = lastName;
}

let newObj = new Name("aju","singh");
console.log(newObj);




