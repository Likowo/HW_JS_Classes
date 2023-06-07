// Hamster
// attributes: use this.nameofattribute e.g this.owner

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created hamster class"
// Easy Mode Make sure it works so far

class Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price
    }
}

//=================================
// Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created person class"
// Easy Mode Keep Going and save and run code

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamster = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(this.name)
    }
    eat(){
        this.weight++;this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++;this.height++;this.weight++;this.mood--;
       this.bankAccount += 10
    }
    buyHamster(hamster){
        this.hamster.push(hamster);
        this.mood +=10;
        this.bankAccount -= hamster.getPrice
    }
}

const ann = new Person("Ann") 
ann.ageUp()
     console.log(ann)

//====================================
// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
const timmy = new Person("Timmy")

// Age Timmy five years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
console.log(timmy)
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat();timmy.eat();timmy.eat();timmy.eat();timmy.eat()
console.log(timmy)
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise();timmy.exercise();timmy.exercise();timmy.exercise();timmy.exercise()
console.log(timmy)
// Age Timmy 9 years
for(let i=0; i<9; i++){
    timmy.ageUp() 
}
console.log(timmy)
// Create a hamster named "Gus"
const gus =  new Hamster("Gus")
console.log(gus)
// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy"
console.log(gus)

// Have Timmy "buy" Gus
gus.buy = "Timmy"
console.log(gus)
// Age Timmy 15 years
for(let i=0; i<15; i++){
    timmy.ageUp()
}
console.log(timmy)
// Have Timmy eat twice
timmy.eat();timmy.eat()
console.log(timmy)
// Have Timmy exercise twice
timmy.exercise();timmy.exercise()
console.log(timmy)
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created timmys story" Easy Mode Keep Going Save and Run Code