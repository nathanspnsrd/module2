let originalNumbers = [1, 5, 25, 50, 100, 200]
// //1
// const result = originalNumbers.map(num => num * 2)

// console.log(result)

// //2
// const result = originalNumbers.map(num => num.toString())

// console.log(result)


let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// //3
// const result = names.map(function(name) {
//     var fullName = name[0].toUpperCase()
//     var lowerCaseName = name.toLowerCase().slice(1, name.length)
//     return fullName.concat(lowerCaseName)
// })

// console.log(result)


let people = [
    {name: "Angelina Jolie",
     age: 80
    },
    {name: "Eric Jones",
     age: 2
    },
    {name: "Paris Hilton",
    age: 5
    },
    {name: "Kayne West",
     age: 16
    },
    {name: "Bob Ziroll",
     age: 100
    }
]
//4
// const result = people.map(function(person) {
//     return person.name
// })

// console.log(result)

//5
// const result = people.map(function(person) {
//     if (person.age > 18) {
//         return person.name + " can go to The Matrix"
//     } else {
//         return person.name + " is under age!!"
//     }
// })

// console.log(result)

//6
const result = people.map(function(person) {
    return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>"
})

console.log(result)