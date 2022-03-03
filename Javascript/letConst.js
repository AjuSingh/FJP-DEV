let a = 100;
// var b = 20;
// console.log(a);
// console.log(b);

//if we want to access a before initialization then it show error due to the time dead zone
//TDZ is time between the allocated memory and initialization
//thats why we cant acces due to tdz

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
console.log(b); 
console.log(c);
}
console.log(a);
// console.log(b); //it will show refrence error
// console.log(c);//it will show refrence error due  to block scoping 








