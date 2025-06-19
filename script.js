const questions = [
  {
    question: "¿Qué es la cultura institucional?",
    options: [
      "Conjunto de creencias, valores y costumbres compartidos que regulan la vida de una institución.",
      "Es el poder de un solo líder dentro de una organización.",
      "Son las reglas estrictas que deben seguir los empleados.",
      "El lugar físico donde trabaja la institución."
    ],
    correct: 0,
  },
  {
    question: "¿Cuáles son los elementos característicos de la cultura institucional?",
    options: [
      "Elementos ideológicos, instituyentes y organizacionales.",
      "Normas y leyes de un país.",
      "Objetos y herramientas de trabajo.",
      "Las oficinas y salas de reuniones."
    ],
    correct: 0,
  },
  {
    question: "¿Cómo se manifiesta la cultura institucional?",
    options: [
      "Objetos, lenguaje y símbolos, comportamiento y emociones compartidas.",
      "Sólo a través de reglas escritas.",
      "Mediante supervisores y castigos.",
      "Por la jerarquía y salarios."
    ],
    correct: 0,
  },
  {
    question: "¿Cuáles son los tres niveles de cultura organizacional según Schein?",
    options: [
      "Estructuras visibles, valores adoptados y supuestos básicos.",
      "Normas, castigos y recompensas.",
      "Organización, poder y liderazgo.",
      "Reglas, rituales y símbolos."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la cultura autocrática?",
    options: [
      "Poder unipersonal, normas no escritas e información centralizada.",
      "Poder compartido y participativo.",
      "Normas formales y entorno mediocre.",
      "Normas enfocadas en resultados y comunicación efectiva."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la cultura burocrática?",
    options: [
      "Normas formales y comunicación escrita archivada.",
      "Poder unipersonal y comunicación informal.",
      "Entorno competitivo y comunicación fluida.",
      "Poder consensuado y normas grupales."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la cultura adhocrática?",
    options: [
      "Normas enfocadas en resultados y entorno competitivo.",
      "Poder unipersonal y normas informales.",
      "Comunicación escrita y archivada.",
      "Poder consensuado y entorno democrático."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la cultura democrática?",
    options: [
      "Poder consensuado y normas para beneficio grupal.",
      "Poder unipersonal con comunicación centralizada.",
      "Normas formales y entorno mediocre.",
      "Normas informales y entorno competitivo."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es el liderazgo?",
    options: [
      "Proceso de conducir a un grupo por medios no coercitivos.",
      "Ordenar a los subordinados con autoridad absoluta.",
      "Gestionar solo las tareas administrativas.",
      "Imponer reglas estrictas para controlar."
    ],
    correct: 0,
  },
  {
    question: "¿Cuáles son elementos esenciales del liderazgo?",
    options: [
      "Honestidad, visión compartida, compromiso, paciencia y ejemplaridad.",
      "Poder, dinero y control.",
      "Castigos y recompensas.",
      "Competencia y dominio."
    ],
    correct: 0,
  },
  {
    question: "¿Qué requisitos debe tener un líder efectivo?",
    options: [
      "Conocimiento del sector, relaciones institucionales, reputación, habilidades, valores y motivación.",
      "Solo saber dar órdenes.",
      "Ser amigo de todos sin importar el trabajo.",
      "Evitar responsabilidades."
    ],
    correct: 0,
  },
  {
    question: "¿Cuál de los siguientes estilos pertenece a Lewin?",
    options: [
      "Autoritario, democrático y laissez-faire.",
      "Paternalista, transformacional y situacional.",
      "Autocrático, burocrático y adhocrático.",
      "Pasivo, activo y reactivo."
    ],
    correct: 0,
  },
  {
    question: "¿Cuál es el papel del líder directivo hoy?",
    options: [
      "Conducir grupos e implementar transformaciones para el futuro.",
      "Solo mantener el orden y castigar errores.",
      "Evitar tomar decisiones importantes.",
      "Delegar todo sin supervisar."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la autoridad?",
    options: [
      "Poder de tomar decisiones que guíen a otros y aseguren coordinación.",
      "Castigo físico a los empleados.",
      "Evitar responsabilidades.",
      "Un cargo sin funciones."
    ],
    correct: 0,
  },
  {
    question: "¿Cuáles son funciones de la autoridad?",
    options: [
      "Imponer responsabilidad, asegurar pericia y permitir coordinación.",
      "Delegar tareas sin supervisión.",
      "Dar órdenes sin sentido.",
      "Solo castigar errores."
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la unidad de mando?",
    options: [
      "Principio de que los colaboradores responden solo a su superior directo.",
      "Que todos respondan a todos.",
      "Que no haya jefes.",
      "Que los empleados decidan sus tareas."
    ],
    correct: 0,
  },
  {
    question: "¿Qué no puede delegar un directivo?",
    options: [
      "La responsabilidad.",
      "Las tareas sencillas.",
      "La supervisión de un empleado.",
      "Las reuniones."
    ],
    correct: 0,
  },
  {
    question: "Regla para delegar: Tareas innecesarias.",
    options: [
      "Eliminar.",
      "Delegar.",
      "Hacerlo uno mismo.",
      "Ignorar."
    ],
    correct: 0,
  },
  {
    question: "Regla para delegar: Tareas necesarias que puede hacer otra persona.",
    options: [
      "Delegar.",
      "Eliminar.",
      "Hacerlo uno mismo.",
      "Ignorar."
    ],
    correct: 0,
  },
  {
    question: "Regla para delegar: Tareas necesarias que no se pueden delegar.",
    options: [
      "Hacerlo uno mismo.",
      "Eliminar.",
      "Delegar.",
      "Ignorar."
    ],
    correct: 0,
  },
  {
    question: "¿Cuándo delega un líder eficaz?",
    options: [
      "Cuando una tarea es necesaria y otra persona puede hacerla.",
      "Cuando no quiere trabajar.",
      "Siempre que pueda evitar responsabilidades.",
      "Solo cuando lo ordenan."
    ],
    correct: 0,
  },
  {
    question: "En síntesis, ¿qué implica la delegación para un líder directivo?",
    options: [
      "Ejercer autoridad, definir responsabilidad y comprender el comportamiento de colaboradores.",
      "Evitar responsabilidades.",
      "Deleg
