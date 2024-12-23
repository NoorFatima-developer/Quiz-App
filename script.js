const questions = [
  {
    question: "Who won the 2020 FIFA World Cup?",
    // options: ["Brazil", "Spain", "Germany", "Argentina"],
    // answer: "Brazil"
    answers: [
      { text: "Brazil", correct: true },
      { text: "Spain", correct: false },
      { text: "Germany", correct: false },
      { text: "Argentina", correct: false },
    ],
  },
  {
    question: "Which European country is home to the famous Alpine Mountains?",
    answers: [
      { text: "Switzerland", correct: true },
      { text: "France", correct: false },
      { text: "Germany", correct: false },
      { text: "United Kingdom", correct: false },
    ],
  },
  {
    question: "Who wrote the novel 'The Great Gatsby'?",
    answers: [
      { text: "F. Scott Fitzgerald", correct: true },
      { text: "J.K. Rowling", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "Harper Lee", correct: false },
    ],
  },
  {
    question:
      "Which famous American author wrote the classic novel 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text: "George Orwell", correct: false },
      { text: "F. Scott Fitzgerald", correct: false },
      { text: "J.K. Rowling", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  // nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You score is ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Start Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();