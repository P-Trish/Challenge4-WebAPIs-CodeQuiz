var startButton = document.querySelector(".start-button");
var mainQuizSection = document.getElementById("main-quiz");
var topHeader = document.getElementById("top-header");

var questions = [
    {
        prompt: "Commonly used data types DO NOT Include: ",
        answer1: "Strings",
        answer2: "Boolean",
        answer3: "Alerts",
        answer4: "Numbers",
        correctAnswer: "Alerts",
    },
    {
        prompt: "The condition if an if'else statement is enclosed within ______.",
        answer1: "Quotes",
        answer2: "Curly brackets",
        answer3: "Square brackets",
        answer4: "Parentheses",
        correctAnswer: "Parentheses",  
    },
    {
        prompt: "Arrays in JavaScript can be used to store ____.",
        answer1: "Numbers and strings",
        answer2: "Other arrays",
        answer3: "Booleans",
        answer4: "All of the above",
        correctAnswer: "All of the above", 
    },
    {
        prompt: "String values must be enclosed within ___ when being assigned to variables.",
        answer1: "Commas",
        answer2: "Curly brackets",
        answer3: "Quotes",
        answer4: "Parentheses",
        correctAnswer: "Quotes", 
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer1: "JavaScript",
        answer2: "Terminal / bash",
        answer3: "For loops",
        answer4: "console.log",
        correctAnswer: "console.log",   
    },
    ]



console.log (questions[0]);

function startQuiz() {
    mainQuizSection.innerHTML = "";
    // mainQuizSection.style.display = "none";
    topHeader.style.display = "none";

    var currentQuestionIndex = 0;
    questions[currentQuestionIndex];
    return;

    // const prompts = document.createElement("p");
    // prompts.innerText = questions[0].prompt;
    // mainQuizSection.appendChild(prompts);

    // var answerList

}



startButton.addEventListener("click", startQuiz);