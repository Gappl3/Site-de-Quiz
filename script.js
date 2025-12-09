const Questions = {
    [0] : {
        question: "Que veut signifier SCP",
        response: "Secure Contain Protect",
        responses : [
            "test",
            "Sauce Curry Porfavor",
            "Sigma Carrying Personnal"
        ]
    }
    
}; // Questions:Réponse
const questionsNumber = Object.keys(Questions).length;

let questionIndex = 0;
let score = 0;
let questionTitle = document.querySelector('.question_title');
let game_button = document.querySelector('.main_button');

for (const element in Questions) {
    const elementTable = Questions[element]
    for (const proprety in elementTable) {
        console.log(elementTable["question"]);
    }
}


function ValidateResponse(element, response) {

}

function StartQuiz() {
    // INIT!
    questionIndex = 0;
    score = 0;

    
    Clean()
};

game_button.addEventListener('click', () => {
   if (game_button.textContent == "Play") {
    game_button.setAttribute("disabled", "disabled");
    StartQuiz()
   }
});
function Clean() {
    questionTitle.textContent = "Ready to take the quiz on SCPs ?"
}


// StartQuiz()