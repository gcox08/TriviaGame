// One key up load game and start timer

var correctAnswers = 0;
var incorrectAnswers = 0;
var unaswered = 0;

var timer;

var questionBank = [
    {
        question: "What team won the 2018 NBA Finals?",
        answerChoices: ["Cavs", "Warriors", "Lakers", "Celtics"],
        correctAnswerIndex: "Warriors"
    },
    {
        question: "What team won the 2018 Stanley Cup?",
        answerChoices: ["Blackhawks", "Rangers", "Capitals", "Penguins"],
        correctAnswerIndex: "Capitals"
    },
    {
        question: "What team won the 2017 World Series?",
        answerChoices: ["Rangers", "Astros", "Dodgers", "Nationals"],
        correctAnswerIndex: "Astros"
    },
    {
        question: "What team won the 2018 SuperBowl?",
        answerChoices: ["Eagles", "Cowboys", "Patriots", "Redskins"],
        correctAnswerIndex: "Eagles"
    }

]

function time(timeLeft){
    timer = setTimeout(function(){
        if(timeLeft > 0){
            timeLeft--;
            // timeLeft = timeLeft - 1
            $("#timer").html(`<div>Time left: ${timeLeft}</div>`);
            time(timeLeft);

        }else{
            clearTimeout(timer);
            checkAnswers();
        }
    }, 1000);
}

function displayQuestions() {



    $("#game-background").empty();
    for (var i = 0; i < questionBank.length; i++) {
        var question = $("<h2>")
        question.text(questionBank[i].question);

        $("#game-background").append(question);

        for (var j = 0; j < questionBank[i].answerChoices.length; j++) {
            $("#game-background").append(`<input type='radio' name='question-${i}' value='${questionBank[i].answerChoices[j]}' >` + questionBank[i].answerChoices[j])
        }
    }

    $("#game-background").append(`<br><br><button id='submitButton'>Submit</button>`)



}

$("button").on("click", function () {
    displayQuestions();
    time(45);
})

$(document).on("click", "#submitButton", function () {


    // alert("Answers have been submitted!");

    clearTimeout(timer);
    checkAnswers();



})


function checkAnswers(){

    // $("#game-background").empty();
    
    for (var y = 0; y < questionBank.length; y++) {
        $.each($(`input[name='question-${y}']:checked`), function () {
            console.log($(this));

            console.log($(this)[0].value);
            console.log(questionBank[y].correctAnswerIndex);


            if ($(this)[0].value === questionBank[y].correctAnswerIndex) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        })
    }

    alert(`You got ${correctAnswers} answers correct. You missed ${incorrectAnswers} and you didn't answer ${unaswered} questions`);
}   





