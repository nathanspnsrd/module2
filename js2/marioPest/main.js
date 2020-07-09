const totalBox = document.getElementById("totals")

const submit = document.getElementById("submit")

const goombaTotal = document.getElementById("goombaInput")
const bobTotal = document.getElementById("bobInput")
const cheepTotal = document.getElementById("cheepInput")


function pestTotalFunction(num1, num2, num3) {
    return (+num1 + +num2 + +num3)
}

function moneyTotalFunction(num1, num2, num3) {
    return((+num1 * 30) + (+num2 * 200) + (+num3 * 1))
}

submit.addEventListener("click", function(event) {
    event.preventDefault()

    let pestTotalAmount = pestTotalFunction(goombaTotal.value, bobTotal.value, cheepTotal.value)
    let moneyTotalAmount = moneyTotalFunction(goombaTotal.value, bobTotal.value, cheepTotal.value)

    console.log(goombaTotal.value)

    const pestTotal = document.createElement("h4")
    pestTotal.textContent = "You have killed: " + pestTotalAmount
    totalBox.append(pestTotal)

    const moneyTotal = document.createElement("h4")
    moneyTotal.textContent = "You have earned: $" + moneyTotalAmount
    totalBox.append(moneyTotal)
})



