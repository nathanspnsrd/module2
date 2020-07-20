let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let newPeople = [
    {
        firstName: "Nathan",
        lastName: "Sutherland",
        age: 25
    },
    {
        firstName: "Nicholas",
        lastName: "Black",
        age: 200
    },
    {
        firstName: "Celine",
        lastName: "Browning",
        age: 93
    },
    {
        firstName: "John",
        lastName: "James",
        age: 2
    }
]


// Create another array of one or more individuals and add it to the original array.
const newArr = peopleArray.concat(newPeople)


//Filter out people under the age of 18
const filterdPeople = newArr.filter(person => person.age >= 18)


//Sort People by last name a-z
filterdPeople.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)


// Return the array in reverse order.
// filterdPeople.sort((a, b) => (a.lastName > b.lastName) ? -1 : 1)


// Remove the second individual from the array.
//mapped.splice(1, 1)


// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
const withoutY = filterdPeople.filter(person => (person.lastName.slice(-1) !== "y") && (person.lastName.slice(-1) !== "d"))


//Puts the array into a string that looks like <html> list item
const mapped = withoutY.map(function(person) {
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
})


console.log(mapped)








