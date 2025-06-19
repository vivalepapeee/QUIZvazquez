function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
  {
    question: "¿Qué es la cultura institucional?",
    options: [
      "Administración técnica del personal",
      "Conjunto de creencias, valores y costumbres compartidas",
      "Normas legales de la institución",
      "Procedimientos financieros internos"
    ],
    answer: 1
  },
  {
    question: "¿Cuáles son los elementos característicos de la cultura institucional?",
    options: [
      "Ideológicos, instituyentes y organizacionales",
      "Políticos, sociales y culturales",
      "Directivos, jerárquicos y administrativos",
      "Técnicos, económicos y humanos"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se manifiesta la cultura institucional?",
    options: [
      "Por leyes y decretos",
      "Por el presupuesto institucional",
      "Por objetos, lenguaje, comportamientos y emociones",
      "Por el rendimiento económico"
    ],
    answer: 2
  },
  {
    question: "¿Cuáles son los tres niveles de cultura organizacional según Schein?",
    options: [
      "Estructuras, valores adoptados y supuestos básicos",
      "Normas, reglas y procedimientos",
      "Organigrama, misión y visión",
      "Objetivos, estrategias y acciones"
    ],
    answer: 0
  },
  {
    question: "¿Qué define a la cultura autocrática?",
    options: [
      "Poder compartido y normas formales",
      "Poder unipersonal, normas informales y conflicto",
      "Normas enfocadas en resultados",
      "Comunicación informal y dinámica"
    ],
    answer: 1
  },
  {
    question: "¿Qué define a la cultura burocrática?",
    options: [
      "Poder dividido, normas formales y comunicaciones escritas",
      "Poder unipersonal y entorno conflictivo",
      "Comunicación informal y dinámica",
      "Normas enfocadas en resultados"
    ],
    answer: 0
  },
  {
    question: "¿Qué define a la cultura adhocrática?",
    options: [
      "Poder dividido, normas enfocadas en resultados y comunicación fluida",
      "Poder unipersonal y normas informales",
      "Poder compartido y entorno participativo",
      "Normas formales y archivadas"
    ],
    answer: 0
  },
  {
    question: "¿Qué define a la cultura democrática?",
    options: [
      "Poder compartido, normas grupales y entorno participativo",
      "Poder unipersonal y normas informales",
      "Comunicación escrita y archivada",
      "Normas enfocadas en resultados"
    ],
    answer: 0
  },
  {
    question: "¿Qué es el liderazgo?",
    options: [
      "Controlar a las personas con castigos",
      "Proceso de conducir sin coerción",
      "Dar órdenes en la organización",
      "Controlar el tiempo laboral"
    ],
    answer: 1
  },
  {
    question: "¿Cuáles son los elementos esenciales del liderazgo?",
    options: [
      "Honestidad, visión, compromiso, paciencia y ejemplaridad",
      "Poder, autoridad, control, presión y castigo",
      "Autoridad, influencia, dominio, reglas y sanciones",
      "Agresividad, imposición, mando, temor y obediencia"
    ],
    answer: 0
  },
  {
    question: "¿Qué requisitos debe tener un líder efectivo?",
    options: [
      "Solo carisma y fuerza",
      "Conocimiento, relaciones, reputación, habilidades, valores y motivación",
      "Solo autoridad formal",
      "Poder físico y dinero"
    ],
    answer: 1
  },
  {
    question: "¿Cuál de los siguientes estilos pertenece a Lewin?",
    options: [
      "Transformacional, transaccional y disruptivo",
      "Autoritario, democrático y laissez-faire",
      "Colaborativo, individualista y elitista",
      "Delegativo, coercitivo y manipulativo"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es el papel del líder directivo en la actualidad?",
    options: [
      "Sancionar al equipo",
      "Aplicar transformaciones efectivas",
      "Controlar horarios laborales",
      "Aplicar castigos"
    ],
    answer: 1
  },
  {
    question: "¿Qué se entiende por autoridad?",
    options: [
      "Miedo a la figura jerárquica",
      "Poder de tomar decisiones para guiar acciones",
      "Imposición de leyes externas",
      "Presión para cumplir objetivos"
    ],
    answer: 1
  },
  {
    question: "¿Cuáles son las funciones de la autoridad?",
    options: [
      "Impone responsabilidad, asegura decisiones y coordina actividades",
      "Motiva emocionalmente y da premios",
      "Solo da órdenes sin responsabilidades",
      "Controla horarios y salarios"
    ],
    answer: 0
  },
  {
    question: "¿Qué es la unidad de mando?",
    options: [
      "Varios jefes dando órdenes",
      "Colaborador responde a un solo superior",
      "Comité de decisión horizontal",
      "Grupo de evaluación de directivas"
    ],
    answer: 1
  },
  {
    question: "¿Qué no puede delegar un directivo?",
    options: [
      "La responsabilidad",
      "La tarea técnica",
      "El presupuesto",
      "La supervisión"
    ],
    answer: 0
  },
  {
    question: "Reglas para delegar con eficacia:",
    options: [
      "Eliminar tareas innecesarias, delegar lo que otros pueden hacer y hacer uno mismo lo que no se puede delegar",
      "Delegar todo sin control",
      "Hacer todo uno mismo",
      "Dejar que el equipo decida todo"
    ],
    answer: 0
  },
  {
    question: "¿Qué tarea debe eliminarse?",
    options: [
      "Tarea innecesaria",
      "Tarea importante",
      "Tarea rutinaria",
      "Tarea compartida"
    ],
    answer: 0
  },
  {
    question: "¿Qué tarea se debe delegar?",
    options: [
      "Tarea que otro puede hacer y es necesaria",
      "Tarea aburrida",
      "Tarea urgente solo para el líder",
      "Tarea que nadie quiere hacer"
    ],
    answer: 0
  },
  {
    question: "¿Qué tarea debe hacer el líder personalmente?",
    options: [
      "Tarea necesaria que no se puede delegar",
      "Tarea sencilla",
      "Tarea repetitiva",
      "Tarea compartida"
    ],
    answer: 0
  },
  {
    question: "¿Por qué es compleja la delegación?",
    options: [
      "Porque requiere autoridad, definir responsabilidades y conocer a los colaboradores",
      "Porque es una tarea fácil",
      "Porque nadie confía en el líder",
      "Porque el líder no tiene tiempo"
    ],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const correct = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.style.backgroundColor = "#2ecc71"; // verde
    else if (i === selectedIndex) btn.style.backgroundColor = "#e74c3c"; // rojo
  });

  if (selectedIndex === correct) score++;
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
  scoreEl.textContent = score;
  totalEl.textContent = questions.length;

  let notaFinal = "";

  if (score === questions.length) {
    notaFinal = "🔥 ¡Perfecto! Sos el líder que toda institución necesita.";
  } else if (score >= questions.length * 0.7) {
    notaFinal = "👏 Muy bien. Estás encaminado, solo falta pulir un poco más.";
  } else if (score >= questions.length * 0.4) {
    notaFinal = "📚 A repasar un poco más, pero vas bien.";
  } else {
    notaFinal = "😅 Tranqui, nadie nace sabiendo. A leer los apuntes otra vez, campeón.";
  }

  const notaEl = document.createElement("p");
  notaEl.style.marginTop = "15px";
  notaEl.style.fontSize = "18px";
  notaEl.innerText = notaFinal;
  scoreContainer.appendChild(notaEl);
}

// Mezclar preguntas antes de iniciar
shuffle(questions);
showQuestion();
