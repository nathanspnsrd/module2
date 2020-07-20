//1a
// function sum(x, y) {
//     if ((x % 2) >= 0 && (y % 2) >= 0) {
//         console.log("I'm a number")
//     } else {
//         console.log("Error, we are not numbers")
//     }
//     return x + y
// }

// sum(1, "str")

//1b Call the sum function inside a try block using "1" and "2" as arguments. 
//Use console.log within a catch block to inform the user of the error.

try {
    function sum(x, y) {
        if ((x % 2) >= 0 && (y % 2) >= 0) {
            console.log("I'm a number")
        } else {
            throw new Error("You have not input two numbers!")
        }
        return x + y
    }
}

catch(err) {
    console.log("err")
}

sum(1, "str")

//2a
// let user = {username: "sam", password: "123abc"};
// function login(username, password){
//     if (username === user.username && password === user.password) {
//         console.log("login successful!")
//     } else {
//         console.log("Username and password don't match.")
//     }
// }

// login("sam", "124abc")

//2b
// let user = {username: "sam", password: "123abc"};

// try {
//     function login(username, password){
//         if (username !== user.username || password !== user.password) {
//             throw new Error("Your information doesn't match")
//         } else {
//         console.log("login successful!")
//         }
//     }
// }

// catch(err) {
//     console.log(err)
// }

// login("sa", "12abc")