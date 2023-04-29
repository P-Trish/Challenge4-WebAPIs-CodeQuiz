var startButton = document.querySelector(".start-button");
var mainQuizSection = document.getElementById("main-quiz");
var topHeader = document.getElementById("top-header");
var timerEl = document.getElementById("time");
var finalScore = document.getElementById("final-score");
var currentQuestionIndex = 0
var allDone = document.querySelector(".all-done-page");

var questions = [
    {
        prompt: "Commonly used data types DO NOT Include: ",
        answer1: "Strings",
        answer2: "Boolean",
        answer3: "Alerts",
        answer4: "Numbers",
    },
    {
        prompt: "The condition if an if'else statement is enclosed within ______.",
        answer1: "Quotes",
        answer2: "Curly brackets",
        answer3: "Square brackets",
        answer4: "Parentheses",
    },
    {
        prompt: "Arrays in JavaScript can be used to store ____.",
        answer1: "Numbers and strings",
        answer2: "Other arrays",
        answer3: "Booleans",
        answer4: "All of the above",
    },
    {
        prompt: "String values must be enclosed within ___ when being assigned to variables.",
        answer1: "Commas",
        answer2: "Curly brackets",
        answer3: "Quotes",
        answer4: "Parentheses",
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer1: "JavaScript",
        answer2: "Terminal / bash",
        answer3: "For loops",
        answer4: "console.log",
    }
]

const answers = [3, 4, 4, 3, 4];

function startQuiz() {
    mainQuizSection.innerHTML = "";
    // mainQuizSection.style.display = "none";
    topHeader.style.display = "none";
    startTimer();
    generateQuestion();

}

function generateQuestion() {
    mainQuizSection.innerHTML = "";
    console.log(questions[currentQuestionIndex].prompt);

    var questionEl = document.createElement("p");
    questionEl.textContent = questions[currentQuestionIndex].prompt
    mainQuizSection.append(questionEl);

    var answerEl1 = document.createElement("button");
    answerEl1.setAttribute("id", "1");
    answerEl1.textContent = questions[currentQuestionIndex].answer1
    mainQuizSection.append(answerEl1);

    var answerEl2 = document.createElement("button");
    answerEl2.setAttribute("id", "2");
    answerEl2.textContent = questions[currentQuestionIndex].answer2
    mainQuizSection.append(answerEl2);

    var answerEl3 = document.createElement("button");
    answerEl3.setAttribute("id", "3");
    answerEl3.textContent = questions[currentQuestionIndex].answer3
    mainQuizSection.append(answerEl3);

    var answerEl4 = document.createElement("button");
    answerEl4.setAttribute("id", "4");
    answerEl4.textContent = questions[currentQuestionIndex].answer4
    mainQuizSection.append(answerEl4);
}

var timeLeft = 90;

function startTimer() {
    var timer = setInterval(function () {
        timeLeft = timeLeft - 1;
        timerEl.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerEl.innerHTML = "";
        }
    }, 1000);
}



const quizButtonHandler = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    if (event.target.id == answers[currentQuestionIndex]) {
        console.log("CORRECT!")
    } else {
        console.log("WRONG!")
        timeLeft = timeLeft - 10;
    }
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        generateQuestion();
    } else {
        console.log("END QUIZ");
        allDone.removeAttribute("hidden");
        localStorage.setItem('score', timeLeft);
        timerEl.innerHTML = "";
        mainQuizSection.innerHTML = "";
        finalScore.innerHTML  = "Your final score is " + timeLeft + "!";
        timeLeft = 0;
    }
};



mainQuizSection.addEventListener("click", quizButtonHandler);


startButton.addEventListener("click", startQuiz);