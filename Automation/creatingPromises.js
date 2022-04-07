//we have to thing in promise resolve reject
//resolve means the promise is fullfiled and the data send in resolve is fetched by .then
//reject means the promise is rejected and the data send in reject is fetched by .catch


let myPromise = new Promise(function(resolve, reject){
    let num =1;
    let num1 = 2;
    if(num1+num==4){
        resolve("Promise is fullfiled...")
    }else{
        reject("Promise is rejected...")
    }
})


myPromise.then((data) => console.log(data)).catch((err) => console.log(err));