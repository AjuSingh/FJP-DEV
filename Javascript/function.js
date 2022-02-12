//function defination
// function printName(parameter){
//     console.log(name);
// }

//function invoke
// printName(arguement);

//function can be returned as value
//function can be passed as arguement in another function
//fuction is treated as first class citizen in javascript
//we store the function in the variable


function cal(str,a,b){
    if(str=='add'){
        return function add(){
            return a+b;
        }
    }else{
        return function sub(){ 
            return a-b;
        }
    }
}

// let result = cal('add',2,4);
//if we simply print result it will print the body of the function
// console.log(result());

//function express
// let sayHi = function(){
//     console.log("Hi how are you");
// }

// console.log(sayHi);
// sayHi();


//IIFE -> Immediately invoked function 
// function add(a,b){
//     return a+b;
// }
//we need to invoke this by calling it

// console.log(add(1,2));

let additionIIFY = (function add(a,b){
    console.log(a+b);
})(2,3);
//addition iffy is executed by itself we dont need to run it
//if we simply made fuction and not assigned to any variable then it will be not executed



