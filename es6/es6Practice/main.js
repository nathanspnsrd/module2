// const ownerName = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     let nam;
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", ownerName)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


// //Task 1
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = (arr => {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// })


// //Task 2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = (arr => {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

// //Task 3
// const doMathSum = (a, b) => a + b;

// const produceProduct = (a, b) => a * b;

// console.log(doMathSum(3, 4))


//Task 4
// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
// }

// console.log(printString("John", "Browning", 200))


//Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog")

 console.log(filterForDogs(animals))


// //Template Literals
// const travel = (name, location) =>
// `Hi ${name}!

// Welcome to ${location}. 

// I hope you enjoy your stay. Please ask the president of ${location} if you need anything. 
// `

// console.log(travel("Nathan", "hell"))