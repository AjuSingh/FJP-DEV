var arr = [];
var obj = {};
function abc(){
    console.log("i dont know what to do!");
}

//this will give the methods and properties we use of arr
console.log(arr.__proto__);
//this will give the methods and properties of object because the arr is build on the top of the object
console.log(arr.__proto__.__proto__);


//this will give the methods and properties we use of arr
console.log(Array.prototype);
//this will give the methods and properties of object because the arr is build on the top of the object
console.log(Array.prototype.prototype);


//this will give the methods and properties of object because the function is also an object
console.log(abc.__proto__);

//chaining will end if we try to access the proto of the object proto



let user = {
    name: "Abhishek",
    sayHi: function () {
      console.log(this.name);
    },
  };
  
  let admin = {
    role: "admin",
    age: 30,
  };
  
  admin.name;
  
  Array.prototype.calculate = 34;
  
  let arr = [];
  arr.__proto__;
  
  admin.__proto__ = user;
  admin.name;
  admin.sayHi();
  
  admin.name = "Abhi";
  admin.name;
  admin.sayHi();
  
  user.name;