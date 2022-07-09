let [first,last] = "Aju Singh".split(" ");
// console.log(first);
// console.log(last);



let info = ["fjp","dev","pepcoding"];
let [,,third] = info;   


//Object.keys(object) will return the keys of the object
//Object.values(object) will return the values of the object
//Object.entries(object) will return the key value pair of the object
let arr = [1,2,3,4,5,6,7,8,9];
arr.age="132";
// for(let key in arr){
//     console.log(key);
// }

// for(let pair of Object.entries(arr)){
//     console.log(pair[0] + " "  + pair[1]);
// }

//default value in spread operator
let family = ["mom"];
let [m1,m2="dad"] = family;
console.log(m1);
console.log(m2);