"use strict"
let list = document.getElementById("listItems")


//Gets List
function getAxiosData() {
    axios.get("https://api.vschool.io/nathan1/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            let newItem = document.createElement("li")
            let newSpan = document.createElement("span")

            newSpan.textContent = response.data[i].title
            newItem.appendChild(newSpan)
            listItems.appendChild(newItem)
            if (response.data[i].title) {
                let checkBox = document.createElement("input")
                checkBox.setAttribute("type", "checkbox")
                checkBox.setAttribute("id", "checkBox")
                checkBox.setAttribute("name", "checkBox")

                newItem.prepend(checkBox)

                let deleteButton = document.createElement("button")
                deleteButton.setAttribute("id", "deleteButton")
                deleteButton.innerHTML = "X"
                newItem.append(deleteButton)

                checkBox.addEventListener("click", function(event) {
                    const updates = {
                        completed: true
                    }
                    
                    axios.put(`https://api.vschool.io/nathan1/todo/${response.data[i]._id}`, updates)
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error))
                })

                deleteButton.addEventListener("click", function(event) {
                        axios.delete(`https://api.vschool.io/nathan1/todo/${response.data[i]._id}`)
                            .then(response => {
                                alert("Your todo was successfully deleted!")
                                //newItem.remove()
                            })
                            .catch(function(response) {
                                alert("There was a problem deleting your todo :(");
                            })
                });
            }

            if (response.data[i].completed === true) {
                newItem.style.textDecoration = "line-through"
            }

            if (response.data[i].imgUrl) {
                let newImg = document.createElement("img")
                newImg.src = response.data[i].imgUrl
                newSpan.appendChild(newImg)
            }
        }
    })
    .catch(error => console.log(error))
}

getAxiosData()



//Allows User to Post New List Item
let addButton = document.getElementById("addItem")
let submitButton = document.getElementById("submitButton")
const todoForm = document.toDoForm

//Event listeners for submitting
addButton.addEventListener("click", onButtonClick)
submitButton.addEventListener("click", submitClick)
toDoForm.addEventListener("submit", axiosPost)

//Shows form when clicked
function onButtonClick() {
    form.className= "show";
}

//Hides form when complete
function submitClick() {
    form.className= "hide"
}

//Posts new item with Axios
function axiosPost(event) {
    event.preventDefault()
    const newTodo = {
        title: toDoForm.title.value,
        description: toDoForm.description.value,
        price: toDoForm.price.value,
        imgUrl: toDoForm.imgUrl.value
    }
    axios.post("https://api.vschool.io/nathan1/todo", newTodo)
        .then(response => console.log(response))
        .catch(error => console.log(error)) 
}