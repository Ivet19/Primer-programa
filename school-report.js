const firstStudentName = "Alex González";
const secondStudentName = "Marina Sierra";

const firstStudentAge = 29;
const secondStudentAge = 34;

const firstCourseName = "Introducción al punto de cruz";
const secondCourseName = "Patronaje técnico";
const thirdCourseName = "Costura creativa y reciclaje";

const firstDifficultyLevel = "básico";
const secondDifficultyLevel = "intermedio";
const thirdDifficultyLevel = "avanzado";

const firstCourseDuration = 12;
const secondCourseDuration = 60;
const thirdCourseDuration = 25;

const studentsAverageAge = (firstStudentAge + secondStudentAge) / 2;

console.log(
  "INFORME DE LA ESCUELA" +
    "\n " +
    "\n  Cursos:" +
    "\n  - " +
    firstCourseName +
    " (nivel " +
    firstDifficultyLevel +
    ", " +
    firstCourseDuration +
    " horas)" +
    "\n  - " +
    secondCourseName +
    " (nivel " +
    thirdDifficultyLevel +
    ", " +
    thirdCourseDuration +
    " horas)" +
    "\n  - " +
    thirdCourseName +
    " (nivel " +
    secondDifficultyLevel +
    ", " +
    thirdCourseDuration +
    " horas)" +
    "\n " +
    "\n  Alumnos:" +
    "\n  - " +
    firstStudentName +
    ", " +
    firstStudentAge +
    " años" +
    "\n  - " +
    secondStudentName +
    ", " +
    secondStudentAge +
    " años" +
    "\n " +
    "\n  Edad media de los alumnos : " +
    studentsAverageAge +
    " años"
);
