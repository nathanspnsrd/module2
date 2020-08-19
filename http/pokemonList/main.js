'use strict'

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        showData(data.objects[0].pokemon)
        console.log(data.objects[0].pokemon)
    }
}

function showData(arr) {
    for(let i = 0; i < arr.length; i++){
        const pokemon = arr[i]
        const h1 = document.createElement('h1')
        h1.textContent = pokemon.name
        document.body.appendChild(h1)
    }
}