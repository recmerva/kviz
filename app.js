const quizData = [
    {
      question: "Koji je glavni grad Francuske?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "London", correct: false },
        { text: "Pariz", correct: true },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question: "Koliko ima dana u nedelji?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      question: 'Ko je autor "Romea i Julije"?',
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Fyodor Dostoevsky", correct: false },
      ],
    },
];

const questionsContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answer-buttons");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion(quizData[currentQuestion]);
}

function showQuestion(question) {
  questionsContainer.innerText = question.question;
  answersContainer.innerHTML = "";
  question.answers.forEach((answer) => {
    const buttons = document.createElement("button");
    buttons.innerText = answer.text;
    buttons.addEventListener("click", () => {
      selectAnswer(answer);
    });
    answersContainer.appendChild(buttons);  
  });
}

function selectAnswer(answer) {
    const correctAnswer = answer.correct;
    if (correctAnswer) {
      score++;
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion(quizData[currentQuestion]);
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionsContainer.innerHTML = `Vas score je ${score} od ${quizData.length};`
    answersContainer.innerHTML = "";
  }
  
  startQuiz();
