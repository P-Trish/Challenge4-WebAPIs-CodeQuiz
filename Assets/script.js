var startButton = document.querySelector(".start-button");
var mainQuizSection = document.getElementById("main-quiz");
var topHeader = document.getElementById("top-header");
var currentQuestionIndex = 0
var questions = [
    {
        prompt: "Commonly used data types DO NOT Include: ",
        answer1: "Strings",
        answer2: "Boolean",
        answer3: "Alerts",
        answer4: "Numbers",
        correctAnswer: 3,
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



function startQuiz() {
    mainQuizSection.innerHTML = "";
    // mainQuizSection.style.display = "none";
    topHeader.style.display = "none";

   
    console.log(questions[currentQuestionIndex].prompt);

    var questionEl = document.createElement("p");
        questionEl.textContent = questions[currentQuestionIndex].prompt
        mainQuizSection.append(questionEl);

    var answerEl1 = document.createElement("button");
        answerEl1.setAttribute("id","1");
        answerEl1.textContent = questions[currentQuestionIndex].answer1
        mainQuizSection.append(answerEl1);

    var answerEl2 = document.createElement("button");
        answerEl2.setAttribute("id","2");
        answerEl2.textContent = questions[currentQuestionIndex].answer2
        mainQuizSection.append(answerEl2);

    var answerEl3 = document.createElement("button");
        answerEl3.setAttribute("id","3");
        answerEl3.textContent = questions[currentQuestionIndex].answer3
        mainQuizSection.append(answerEl3);

    var answerEl4 = document.createElement("button");
        answerEl4.setAttribute("id","4");
        answerEl4.textContent = questions[currentQuestionIndex].answer4
        mainQuizSection.append(answerEl4);






    // const prompts = document.createElement("p");
    // prompts.innerText = questions[0].prompt;
    // mainQuizSection.appendChild(prompts);

    // var answerList

}

function quizButtonHandler () {
console.log("WRONG!")
};

// add data answer attribute to answer button 

mainQuizSection.addEventListener("click", quizButtonHandler);


startButton.addEventListener("click", startQuiz);