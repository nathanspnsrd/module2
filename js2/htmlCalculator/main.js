//Adds Numbers
const add = document["addForm"]

function addNumbers(num1, num2) {
    return (+num1 + +num2)
}

add.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumber = add.add1.value
    const secondNumber = add.add2.value
    add.add1.value = ""
    add.add2.value = ""


    const value = document.createElement("h4")
    value.textContent = addNumbers(firstNumber, secondNumber)
    document.getElementById("add").append(value)
})


//Subtracts Numbers
const subtract = document["subForm"]

function subtractNumbers(num1, num2) {
    return (num1 - num2)
}

subtract.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumber = subtract.sub1.value
    const secondNumber = subtract.sub2.value
    subtract.sub1.value = ""
    subtract.sub2.value = ""


    const value = document.createElement("h4")
    value.textContent = subtractNumbers(firstNumber, secondNumber)
    document.getElementById("subtract").append(value)
})


//Multiplies Numbers
const multiply = document["multForm"]

function multiplyNumbers(num1, num2) {
    return (num1 * num2)
}

multiply.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumber = multiply.mult1.value
    const secondNumber = multiply.mult2.value
    multiply.mult1.value = ""
    multiply.mult2.value = ""


    const value = document.createElement("h4")
    value.textContent = multiplyNumbers(firstNumber, secondNumber)
    document.getElementById("multiply").append(value)
})