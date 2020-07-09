let arr = [1, 3, 5, 2, 90, 20]
//1
// const result = arr.sort((a, b) => a - b)
// console.log(result)

//2
// const result = arr.sort((a, b) => b - a)
// console.log(result)

let arrOfStrings = ["dog", "wolf", "by", "family", "eaten"]
//3
// const result = arrOfStrings.sort((a, b) => a.length - b.length)
// console.log(result)

//4
// const result = arrOfStrings.sort()
// console.log(result)

let people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
//5
const result = people.sort((a, b) => a.age - b.age)
console.log(result)
