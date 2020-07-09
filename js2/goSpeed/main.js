const countElement = document.getElementById("count")
const output = document.getElementById("output")

count = localStorage.getItem("Total Count") || 0 

document.addEventListener("click", eventHandler)

function eventHandler() {
    count++ 
    whatToSay()
    localStorage.setItem("Total Count", count)
}

function whatToSay() {
    if (count === 1) {
        output.textContent = "You have clicked this page " + count + " time!"
    } else {
        output.textContent = "You have clicked this page " + count + " times!"
    }  
}

setTimeout(function() {
    document.removeEventListener("click", eventHandler)
}, 30000)