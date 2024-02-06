const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;


const quizQuestions = [
  {
    question: "Admission no:of  sanjay nalamasa?",
    options: ["E220184", "E220185", "E220186", "E220187"],
    correctAnswer: "E220184"
  },
  {
    question: "chaitanya deemed to be university from which district:(.-.)?",
    options: ["Khammam", "Hyderabad", "warangal", "karimnagar"],
    correctAnswer: "warangal"
  },
  {
    question: "top richest-person in the world?",
    options: ["Elonmusk", "Jeffbezos", "Billgates", "TATA"],
    correctAnswer: "Elonmusk"
  },
  {
    question: "capital of telangana",
    options: ["Khammam", "Hyderabad", "warangal", "karimnagar"],
    correctAnswer: "Hyderabad"
  },
  {
    question: "Owner of Zudio shopping bro:?",
    options: ["TATA", "Wipro", "Reliance", "None-of-the-Above"],
    correctAnswer: "TATA"
  }
]


function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;


  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;

    optionButton.onclick = function () {
      selectAnswer(option, currentQuestion.correctAnswer)
    }

    optionsContainer.appendChild(optionButton)
  })


}

function selectAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    feedbackElement.textContent = "Correct!";
    score++;
  } else {
    feedbackElement.textContent = "Incorrect.The correct answer is: " + correctAnswer;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}


function endQuiz() {
  quizContainer.innerHTML = "<h2>Quiz Completed</h2>";
  scoreElement.textContent = "Final Score: " + score + " out of " + quizQuestions.length;
}

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked"');

  if (selectedOption) {
    selectAnswer(selectedOption.value)
  }

}


loadQuestion();
