const firstStudentName = "Alex González";
const secondStudentName = "Marina Sierra";

const firstStudentAge = 29;
const secondStudentAge = 34;

const firstCourseName = "Introducción al punto de cruz";
const secondCourseName = "Patronaje técnico";
const thirdCourseName = "Costura creativa y reciclaje";

const firstDifficultyCourseLevel = "básico";
const secondDifficultyCourseLevel = "intermedio";
const thirdDifficultyCourseLevel = "avanzado";

const firstCourseDuration = 12;
const secondCourseDuration = 60;
const thirdCourseDuration = 25;

const studentsAverageAge = (firstStudentAge + secondStudentAge) / 2;

console.log(
  `INFORME DE LA ESCUELA

  Cursos:
  - ${firstCourseName} (nivel ${firstDifficultyCourseLevel}, ${firstCourseDuration} horas)
  - ${secondCourseName} (nivel ${thirdDifficultyCourseLevel}, ${secondCourseDuration} horas)
  - ${thirdCourseName} (nivel ${secondDifficultyCourseLevel}, ${thirdCourseDuration} horas)
  
  Alumnos:
  - ${firstStudentName}, ${firstStudentAge} años
  - ${secondStudentName}, ${secondStudentAge} años

Edad media de los alumnos: ${studentsAverageAge} años
`
);
