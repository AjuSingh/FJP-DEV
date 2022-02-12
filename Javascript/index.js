//Three types of datatype to declare variable
//1.var
//2.let
//3.const

//var value will we changed in future and can be reinitialized with same name
// var name = "aju singh";
// console.log(name);
// var name = "kaman";
// console.log(name);


//it has global scope and function scope
// for(var i=0;i<6;i++){
//     console.log(i);
// }
// console.log("value of i even after it has scope of for loop is->" + i);



//let value is reinitialized but can't declare another variabe with same name
// let value = 20;
// console.log(value);
// let value = "30";
//SyntaxError: Identifier 'value' has already been declared this error occured
// console.log(value);

//let has block scope
// let j=10;
// console.log("most outer loop j->" + j);
// for(let i=0; i<10; i++){
//     let j = 100;
//     console.log("outer loop j->" + j);
//     if(i%2==0){
//         let j = 1000;
//         console.log("outer loop j->" + j);
//     }
// }
//we dont get any error because for has its block if has its own block and most outer has its own block



//const cant be reinitialized and its value is fixed and need  to assign while we are declaring
const name = "Ajusingh";
console.log(name);