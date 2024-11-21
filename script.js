
const questions = [
    {
        question: "Who won the 2020 FIFA World Cup?",
        // options: ["Brazil", "Spain", "Germany", "Argentina"],
        // answer: "Brazil"
        answers: [
            { text: "Brazil", correct: true},
            { text: "Spain", correct: false},
            { text: "Germany", correct: false},
            { text: "Argentina", correct: false}
        ]
    },
    {
        question: "Which European country is home to the famous Alpine Mountains?",
        answers: [
            { text: "Switzerland", correct: true},
            { text: "France", correct: false},
            { text: "Germany", correct: false},
            { text: "United Kingdom", correct: false}
        ]
    },
    {
        question: "Who wrote the novel 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true},
            { text: "J.K. Rowling", correct: false},
            { text: "Ernest Hemingway", correct: false},
            { text: "Harper Lee", correct: false}
        ]
    },
    {
        question: "Which famous American author wrote the classic novel 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true},
            { text: "George Orwell", correct: false},
            { text: "F. Scott Fitzgerald", correct: false},
            { text: "J.K. Rowling", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}   