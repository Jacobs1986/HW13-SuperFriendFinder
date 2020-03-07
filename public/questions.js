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
$("#submit").on("click", (event) => {
    event.preventDefault()
    console.log("Submit button clicked.")
    questions.forEach(element => {
        let value = $(`input[name='questions-${element}']:checked`).val();
        console.log(`The value of ${element} is ${value}`)
    })
})