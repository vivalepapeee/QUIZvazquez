const questions = [
  {
    question: "¿Qué es la cultura institucional?",
    options: [
      "Conjunto de creencias, valores y costumbres compartidos que regulan la vida de una institución.",
      "Es el poder de un solo líder dentro de una organización.",
      "Son las reglas estrictas que deben seguir los empleados.",
      "El lugar físico donde trabaja la institución."
    ],
    correct: 0
  },
  {
    question: "¿Qué es el liderazgo?",
    options: [
      "Proceso de conducir a un grupo por medios no coercitivos.",
      "Ordenar a los subordinados con autoridad absoluta.",
      "Gestionar solo las tareas administrativas.",
      "Imponer reglas estrictas para controlar."
    ],
    correct: 0
  }
  // (Agregá el resto de las preguntas si querés, para esta prueba sólo dejo dos)
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const totalDisplay = document.getElementById("total");

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(index);
    optionsElement.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) {
      btn.style.backgroundColor = "green";
    } else if (index === selectedIndex) {
      btn.style.backgroundColor = "red";
    }
  });

  if (selectedIndex === q.correct) score++;
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("quiz-container").style.display = "none";
  scoreContainer.style.display = "block";
  scoreDisplay.textContent = score;
  totalDisplay.textContent = questions.length;
}

showQuestion();
