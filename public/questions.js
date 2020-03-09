console.log("linked");
let card = $("#surveyQuestions")

let questions = ["question1", "question2"];

let choices = ["1 Strongly Disagree", "2", "3", "4", "5 Strongly Agree"]

// The function needs to load the question FIRST
// Then it needs to append the choices into a radio format that will be displayed in the card

for (let i = 0; i < questions.length; i++) {
    let questionText = questions[i];
    card.append(`${questionText}<br>`);
    for (let j = 0; j < choices.length; j++) {
        card.append(`<input type='radio' name=questions-${questionText} value=${j+1}>${choices[j]}<br>`)
    }
    card.append("<br>")
}

// When the submit button is clicked the 
$("#submit").on("click", function(event) {
    event.preventDefault()
    console.log("Submit button clicked.")
    let valueArray = []
    questions.forEach(element => {
        let value = $(`input[name='questions-${element}']:checked`).val();
        valueArray.push(value);
    })
    let newInformation = {
        name: $("#userName").val().trim(),
        photo: $("#pictureLink").val().trim(),
        values: valueArray
    }
    console.log(newInformation)
    // get the information from the api
    $.get("/api/friends").then(function(data) {
        console.log(data);
        data.forEach(element => {
            totalDif = difference(newInformation.values, element.values)
            console.log(`The difference between you and ${element.name} is ${totalDif}`)
            if (totalDif < 3) {
                console.log(`You both are a match!`)
            }
            else {
                console.log("You are not a match.")
            }
        })
    })
    // $.post("/api/friends", newInformation).then(function(data) {
    //     console.log("Information will be added.")
    // })
})

difference = (ary1, ary2) => {
    let newAry = []
    for (var i = 0; i < ary1.length; i++) {
        newAry.push(Math.abs(ary1[i] - ary2[i]))
    }
    console.log(newAry);
    let totalDifference = 0
    for (var i=0; i < newAry.length; i++) {
        totalDifference = totalDifference + newAry[i];
    }
    return totalDifference;
}