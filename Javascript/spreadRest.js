//it is used to split up or object properties
const num = [1,2,3];
const newNum = [num,4];

const oObj = {
    name:"Aju",
    age:22
};

const nObj = {...oObj,age:23}

console.log(nObj);


//used to merge a list of function arguements into an array
function func(...args){
    console.log(args);
    console.log(typeof args);
    args.forEach((arg)=> console.log(arg));
}

func("hello",2,4,true)