const totalBox = document.getElementById("totals")
const goombaTotal = document.getElementById("goombaInput").value
const bobTotal = document.getElementById("bobInput").value
const cheepTotal = document.getElementById("cheepInput").value


function pestTotalFunction(num1, num2, num3) {
    return (num1 + num2 + num3)
}

function moneyTotalFunction(num1, num2, num3) {
    return((num1 * 30) + (num2 * 200) + (num3 * 1))
}

document.addEventListener("submit", function(event) {
    event.preventDefault()

    console.log(goombaTotal)
    pestTotalFunction(goombaTotal, bobTotal, cheepTotal)
    moneyTotalFunction(goombaTotal, bobTotal, cheepTotal)

    const pestTotal = document.createElement("h4")
    pestTotal.textContent = "You have killed: " 
    totalBox.append(pestTotal)

    const moneyTotal = document.createElement("h4")
    moneyTotal.textContent = "You have earned: "
    totalBox.append(moneyTotal)
})



