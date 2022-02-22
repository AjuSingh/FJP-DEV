console.log(x);
greet();
var x =10;
function greet() {
    console.log("hello world");
}

//we can access the variables and functions before their initializations

//output will be 
//undefined
//hello world

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
// It allows us to call functions before even writing them in our code. 
// Note: JavaScript only hoists declarations, not the initializations.
// JavaScript allocates memory for all variables and functions defined in the program before execution.

//if i want to access it before this it has value undefined beacause we are storing it in variable
//ans when we are trying to call it then error occured beacause we cant call undefined as function
hello(); // error
//function expression
var hello = function message(){
    console.log("hi to all");
}
