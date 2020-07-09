const form = document["flightInfo"]


form.addEventListener("submit", function(event) {
    event.preventDefault()
    var dietItems = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietItems.push(form.diet[i].value)
        }
    }
    alert(
        "First Name: " + form.firstName.value + "\n" +
        "Last Name: " + form.lastName.value + "\n" +
        "Age: " + form.age.value + "\n" +
        "Gender: " + form.gender.value + "\n" +
        "Destination: " + form.select.value + "\n" +
        "Dietary Restrictions: " + dietItems.join(", ")
    )
})