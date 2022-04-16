// function x(){
// var a = 10;
// function y(){
// console.log(a);
// }
// var a = 100;
// return y;
// }

// Closure :Function bundled with its lexical environment is known as a closure. 
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. 
// Its not just that function alone it returns but the entire closure and that's where it becomes interesting
//now x return a function y
//y function returns along with it lexical scope
// let z = x();
// console.log(z+ "");
//now if we call the function z it contains the refrence of the a 
//now value a has global scope and the a in log has refrence of a so 100 is logged
// z();


//we need to print 1-10 without using let const after every one second
// for(var i=1;i<=10;i++){
//     //it won't work because it takes the refrence in closure not the value so it print 11 ten times
//     setTimeout(()=>{
//         console.log(i);
//     },1000*i)

//     //main problem is with its closure refrence
// }


// for(var i=1;i<=10;i++){
//     //now here the i has refrence of variable in its closure so it will be printed
//     function close(i){
//         setTimeout(()=>{
//             console.log(i);
//         },2000*i);
//     }
//     close(i);
// }


//2000*i is here for if we simple write 2000 all callback will have 2000 timer and all run at same time after timer expire


for(var i=1;i<=10;i++){
    function cb(a){
        console.log(a);
    }
    setTimeout(cb,2000*i,i);
}


