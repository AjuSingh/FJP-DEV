function outer() {
    inner();
    function inner() {
        console.log(b);
    }
}

var b = 10;
outer();
console.log(b);

//output will be 10 10
//because of scope chaining ans lexical enviornment