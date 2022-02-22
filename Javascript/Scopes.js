function outer() {
    inner();
    function inner() {
        console.log(b);
    }
}

var b = 10;
outer();
console.log(b);

//scope is variable and function inside the scope of enviornment

//output will be 10 10
//because of scope chaining ans lexical enviornment

//lexical enviornment is local memory of its own and local memory of its parent
//scope chaining is chaining of lexical enviornment to access the variables