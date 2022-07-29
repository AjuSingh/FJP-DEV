// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// let arr = [111,2,50,34,32,5000];
// let getMax = (a,b) => {
// return Math.max(a,b);
// }

// let user = {
//     name:'Aju',
//     age:22
// }
 
// function getInfo(){
//     console.log(this.name + " is of age " + this.age);
// }


// Function.prototype.myBind = function(...args){
// let obj = this;
// let params = args.slice(1);
// return function(){
//     obj.apply(args[0],params);
// }
// }


// let info = getInfo.myBind(user);
// info();

// function mainFn(params) { // do NOT change this line or  name of this function
//     // if(!Array.isArray(params)) return [];
//     let arr = [];
//     for (let i = 0; i < params.length; i++) {
//         if(arr[params[i]]){
//             arr[params[i]]++;
//         }else{
//             arr[params[i]]=1;
//         }
//     }
//     console.log(arr);
//     let ans = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (!arr[i]) {
//             ans.push(i);
//         }
//     }
//     return ans;
// }



// function mainFn(params) { // do NOT change this line or  name of this function
//     if(typeof params !== 'string') return 'notfound';
//     let obj = {}
//     for(let i=0;i<params.length;i++){
//       if(obj[params[i]]){
//         obj[params[i]]++;
//       }else{
//         obj[params[i]] = 1;
//       }
//     }
//     // console.log(obj);
//     let str = "";
//     for(let i=0; i < params.length; i++){
//         if(obj[params[i]]<=2){
//            str+=params[i]; 
//         }
//     }
//     // console.log(str);
//     let s=0,e=str.length-1;
//     let isPal = true;
//     while(s<=e){
//       if(str[s]!=str[e]){
//         isPal = false;
//         break;
//       }
//       s++;
//       e--;
//     }
//     return isPal ? str : 'notfound';          
//   }

//   console.log(mainFn("psxxxszzzpz"));
// // console.log(mainFn([1,3,2,7,5]));