//String is basically sequence of characters
let str ="My name is Aju Singh"
// console.log(str);

//1.Extraction methods
//Slice method [included,excludedInd);
// console.log(str.slice(3,7)); //-> output is name

// console.log(str.slice(2,-4)); //start se lekar end ke 4 skip kardo output ->  name is Aju S

//Substring
//index,length [starting index ,and length of substring]
// console.log(str.substr(3,7));


//Concatinate
// let first = "Believe"
// let quote = first.concat(" in yourself", " and me");
// console.log(quote);


//trim 
//it will remove the whitespaces from starting and ending from string
let string ="                             Hi i will be back                              ";
console.log(string.trim());