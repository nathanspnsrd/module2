//Need help with: 2, 3 part 2, 

let arr = [1,2,3]
//1
// const result = arr.reduce(function(final, num) {
//     final += num
//     return final
// })
// console.log(result)

// //2
// const result = arr.reduce(function(final, num) {
//     let numStr = num.toString()
//     final += numStr
//     return final
// })
// console.log(result)


// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
//3
// const result = voters.reduce(function(final, voter) {
//     if(voter.voted) {
//         final++
//     }
//     return final
// }, 0)
// console.log(result)

// const result2 = voters.map(function(voter) {
//     count = 0
//     if(voter.voted === "true") {
//         count ++
//     }
//     return count
// })
// console.log(result2)


let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
//4
// const result = wishlist.reduce(function(final, obj) {
//     final += obj.price
//     return final
// }, 0)
// console.log(result)


let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
//5
// const result = arrays.reduce(function(final, arr) {
//     let newArray = final.concat(arr)
//     return newArray
// }, [])
// console.log(result)


let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
//6
const result = voters.reduce(function(final, voter) {
    if (voter.age < 25) {
        final.youth++
        if(voter.voted) {
            final.youngVotes++
        }
    } else if (voter.age < 35) {
        final.mids++
        if(voter.voted) {
            final.midVotes++
        }
    } else if (voter.age < 55) {
        final.olds++
        if(voter.voted) {
            final.oldVotes++
        }
    }
    return final
}, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0})
console.log(result)


//Extra Credit
