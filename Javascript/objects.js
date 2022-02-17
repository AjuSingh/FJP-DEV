//objects consist of properties and methods in the form of key value pairs
//to access properties we have two methods one is dot notation and other is square brackets
//str.length || str['length']
//methods are created which is under the object
//we can create anything in the object and access anything
//empty object
// let obj = {};

//name is property of object person
//we cant access methods using square brackets
let person = {
    name:"Aju Singh",
    age:21,
    branch:"CSE",
    friends:['jb','mental','pehlwaan'],
    hello:()=>{
        console.log(`Hello my name is ${person.name}`);
    }
}

//every thing in javascript is object
//In keyword is used to get key from object
//we cant use dot notation in this because it show it undefined 
for(let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// person.hello();
// console.log(person);