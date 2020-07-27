// //Green Circle
// const collectAnimals = (...animals) => animals

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]'



const combineFruit = (fruit, sweets, vegetables) => {
    return {
        fruit:
        sweets: 
        vegetables:
    }
}


combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"])


// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
// const parseSentence = (location, duration) => `We're going to have a good time in ${location} for ${duration}`
// console.log(parseSentence("hell", "forever"))

// const returnFirst = (...items) => {
//     const [ firstItem ] = items;
//     return firstItem
// }

// console.log(returnFirst(10, 2, 3, 4, 4))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// const returnFavorites = (arr) => {
//     const [ firstFav, secondFav, thirdFav] = favoriteActivities;
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))



//Blue Square

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// const combineAnimals = () => {
//     return [ ...realAnimals, ...magicalAnimals, ...mysteriousAnimals ]
// }

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 


//Black Diamond
let numbers = [a,b,c,d,e]
const product = (a, b, c, d, e) => numbers.reduce((acc, number) => acc * number, 1)
console.log(product(numbers))

// const unshift = (arr, ...second) => {  
//     return [...second, ...arr] ;
// }

// console.log(unshift([1,2,3], 1))



//Double black

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        firstName = name[0]
        lastName = name[1]
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


