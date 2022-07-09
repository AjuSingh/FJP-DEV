// class Pengiun{
//     constructor(){
//         this.habitat = "Antartica"
//     }

//     placeOfOrgin(){
//         console.log(this.habitat);
//     }
// }

// let penguin = new Pengiun();
// console.log(penguin.habitat);
// console.log(penguin.placeOfOrgin());
class Bird{
    constructor(){
        this.eats = true;
    }

    printHabitat(){
        console.log(this.eats);
    }
}
//the methods are present in the prototype 
class Pengiun extends Bird{
    constructor(){
        super(); //to call the constructer of the bird or parent
        this.habitat = "Antartica"
    }

    placeOfOrgin(){
        console.log(this.habitat);
    }
}

let pen  = new Pengiun();
console.log(pen);




//using the arrow functionn directly without constructor
// class Bird{
//     eats = true;

//     printHabit=()=>{
//         console.log(this.eats);
//     }
// }

// class Pengiun extends Bird{
//     habitat = "Antartica"
//     printPlaceOfOrigin=()=>{
//         console.log(this.habitat);
//     }
// }