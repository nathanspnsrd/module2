let arr = [3, 6, 8, 2]
//1
// const result = arr.filter(num => num>=5)
// console.log(result)

//2
// const result = arr.filter(num => num % 2 === 0)
// console.log(result)


let arrOfStrings = ["dog", "wolf", "by", "family", "eaten", "camping"]
//3
// const result = arrOfStrings.filter(string => string.length <= 5)
// console.log(result)


let people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
//4
// const result = people.filter(person => person.member)
// console.log(result)


let peopleNew = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
//5
const result = peopleNew.filter(person => person.age >= 18)
console.log(result)