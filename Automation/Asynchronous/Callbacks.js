// const fetch = require('node-fetch');
const fs = require('fs');


// console.log("before");
// setTimeout(()=>{
//     console.log("time over");
// },5000);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json()) //here promise is fullfiled and it return then the fetched data is return and get by .then
// .then(json => console.log(json))
// console.log("after");


//micro task queue has more priority then callback queue 



// console.log("before");
// setTimeout(()=>{
//     console.log("time over");
// },5000);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json()) //here promise is fullfiled and it return then the fetched data is return and get by .then
// .then(json => console.log(json))
// console.log("after");
//  before
//  after
// undefined
//  {userId: 1, id: 1, title: 'delectus aut autem', completed: false}completed: falseid: 1title: "delectus aut autem"userId: 1[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
//  time over
// console.log("before");
// setTimeout(()=>{
//     console.log("time over");
// },5000);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response.json())) //here promise is fullfiled and it return then the fetched data is return and get by .then
// console.log("after");
//  before
//  after
// undefined
//  Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Objectcompleted: falseid: 1title: "delectus aut autem"userId: 1[[Prototype]]: Object
//  time over


// fs.readFile("f1.txt",cb1);

// function cb1(err,res){
//     if(err) {
//     console.log(err);
//     }else{
//         console.log("f1.txt\n" + res);
//         fs.readFile("f2.txt",cb2);
//     }
// }


// function cb2(err,res){
//     if(err) {
//     console.log(err);
//     }else{
//         console.log("f2.txt\n" + res);
//             console.log("data printed");
//     }
// }

//this is what call back hell is
// fs.readFile("f1.txt",function(err, res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//         fs.readFile("f2.txt",function(err, res){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(res);
//                 fs.readFile("f3.txt",function(err, res){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log(res);
//                     }
//                 })
//             }
//         })
//     }
// })

//the one who is read first get executed first we dont know the sequence in which they print
//way to read file simultaneously
// fs.readFile("f1.txt",cb);
// fs.readFile("f2.txt",cb);
// fs.readFile("f3.txt",cb);
// function cb(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res + "");
//     }
// }

//to remove callback hell
//1.Make callback function separated
//2.Use promises 

// const firedPromise = fs.promises.readFile("f1.txt");
// firedPromise.then((data)=>{
//     return data;
// }).then((f1)=>{
//     console.log(f1 + "");
//    return fs.promises.readFile("f2.txt");
// }).then((f2)=>{
//     console.log(f2 + "");
//     return fs.promises.readFile("f3.txt");
// }).then((f3)=>{
//     console.log(f3 + "");
//     console.log("all files done..");
// }).catch((err)=>{
//     console.log(err);
// })


//reading parallel files with the help of the promises

const read1 = fs.promises.readFile("f1.txt");
const read2 = fs.promises.readFile("f2.txt");
const read3 = fs.promises.readFile("f3.txt");
read1.then(cb)
read2.then(cb)
read3.then(cb)

function cb(data){
    console.log(data+"");
}