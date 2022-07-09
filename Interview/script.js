let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
let object = {};
for(let i = 0; i < arr.length; i++){
    object[arr[i]] = object[arr[i]] === undefined ? 1 : object[arr[i]]+1;
}
// console.log(object);



//this will be automatically sorted on the basis of their integer property
//firstly the object will integer value are placed first rest of the data remain same in the order they are put inside the object
let orderByIntegerProperty = {
    2:"Kaman",
    4.2:"Raja",
    1.3:"Aju",
    "name":"updesh",
    3:"Ravi",
};

// console.log(orderByIntegerProperty);

//+ will convert the string into integer
let value = "+123";
// console.log(+value);


//now primitives are passed as value in javascript but non primitives are passed by refrence
//as string is passed as whole new copy but if pass object which is non primitives
//suppose we need to clone the object

let cloned = {
    name:"aju singh"
}

let user = {
    name:"aju",
    age:22,
    inner:{
        name:"ravi",
        age:24
    }
}

//if the property exist then it will be overridden by the object we are assigning to it
              //destination
// Object.assign(cloned,user);
// console.log(cloned);



let newUser = {
    name:"aju",
    sayHi(){
        console.log(this);
    }
}

// let admin = newUser;
// newUser.sayHi();
// newUser = null;
// admin.sayHi();


//this keyword is defined as the it refers to the object body
//when we simply log the value at global then it will return the whole window object


//interview questions

// function type1(){
//     console.log(this.name);
// }
// var name  = "JS";
// type1();
//op is js as this is defined as the window object






// function tempe(){
//     console.log(this.classi);
// }
// let classi = "i dont  know";
// tempe();
//op is undefined as the let variables has block scope it doesn't lies in the window object




//question 4
var length = 1;
function square(){
    let cb = function(){
        console.log(this.length*this.length);
    }
    setTimeout(cb,2000);
}

var obj = {
    length: 3,
    square
}

obj.square();
//output is 1


