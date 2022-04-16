const request = require('request');

//Synchronous code runs first 
//All asynchronous part is not part of java they are web api which is handled by the browser engine 
//how asynchronous work take time to comlete -> After complete 
// -> there function goes to callback queue 
// -> then event loop is there to check if the stack is empty or not
//-> after finish the synchronous part it will run the callbacks as event loop push the callback into the callstack
function yolo(){
    console.log("before");
    function cb(err,res,body){
        if(err){
            console.log("Some Error Occured..");
            return;
        }else{
            console.log("Hey you i am in between!");
            console.log("Response status->" + res.statusCode);
        }
    }
    console.log("after");
    request("https://www.worldometers.info/coronavirus/",cb);
}

// yolo();
// let string = "End.."
// console.log(string);

// for(let i=1;i<=10;i++){
//    setTimeout(()=>{
//        console.log(i);
//    },2000*i)
// }
for(var i=1;i<=10;i++){
    function close(i){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
    close(i);
}
 
// let i=1;
// setInterval((i)=>{
// if(i<=10) console.log(i++);
// },2000)


// before
// after
// End..
// Hey you i am in between!
// Response status->200