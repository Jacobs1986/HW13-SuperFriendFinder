console.log("linked");
let card = $("#surveyQuestions")

let questions = [
    "A friend is someone that you can count on no matter what.", 
    "A friend will listen to you no matter what you are going through.",
    "A true friend will help you clean your weapons when you ask them.",
    "When you need time alone a friend will respect your choice.",
    "You might be a loner, but a good friend knows when they are needed."
];

let choices = ["1 Strongly Disagree", "2", "3", "4", "5 Strongly Agree"]

// The function needs to load the question FIRST
// Then it needs to append the choices into a radio format that will be displayed in the card

for (let i = 0; i < questions.length; i++) {
    let questionText = questions[i];
    card.append(`${questionText}<br>`);
    for (let j = 0; j < choices.length; j++) {
        card.append(`<input type='radio' name='questions-${questionText}' value='${j+1}'>${choices[j]}&nbsp&nbsp&nbsp`)
    }
    card.append("<br><br>")
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
        let totalArray = [];
        console.log(data);
        data.forEach(element => {
            totalDif = difference(newInformation.values, element.values)
            console.log(`The difference between you and ${element.name} is ${totalDif}`)
            totalArray.push(totalDif);
        })
        // find the smallest value in totalArray
        console.log(Math.min(...totalArray));
    })
//     $.post("/api/friends", newInformation).then(function(data) {
//         console.log("Information will be added.")
//     })
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