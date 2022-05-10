function promise(){ //promisifying of a function
    return new Promise(function(resolve, reject){
        resolve("Hello world");
    })
}

//if we use simple promise then the syntax of the promise is more complicated then the asyn await


//here if we log asaw we will get the promise or promise is returned
async function asaw(){
    return "hello";
}
// console.log(asaw());
// Promise {<fulfilled>: 'hello'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "hello"

// asaw().then((data)=> console.log(data));


//now if we dont want to use the .then we will use await which will take the value untill of loaded data



async function f2() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    //here the code is waiting for the 5 second untill the promise is settled.. then log hello and then result we get 
    console.log("hello");
     console.log(result);// "done!"
  }
//this will run without any restriction but inside of function the code below 33 line only run when the promise is settled
//settled means either fullfiled or rejected    
// console.log("outside log");

// The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result.
//  So the code above shows “done!” in one second.

// Let’s emphasize: await literally suspends the function execution until the promise settles,
//  and then resumes it with the promise result. That doesn’t cost any CPU resources,
//  because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
// It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.


  // f2();
  


  async function showAvatar() {

    // read our JSON
    //response we get in the form of object so change it to json file to get it
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  // showAvatar(); 


  //try catch finally
  try{
    console.log("try block");
  }catch(e){
    console.log("Error block " + e);
  }finally{
    console.log("I will always run..");
  }


  //finally has its own importance it doesn't matter which block is executed upper but finally will always run
  try{
    throw new Error("Request failed")
  }catch(e){
    console.log("Error block " + e);
  }finally{
    console.log("I will always run..");
  }


// try block
// I will always run..
// Error block Error: Request failed
// I will always run..