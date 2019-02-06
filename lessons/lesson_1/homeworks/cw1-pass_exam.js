// TASK 1 - Students pass exam
let Discipline = function (discipline) {
  this.id = this.closureId()
  this.subj = discipline;

  this.__proto__.base = [
    { disc: "math", teacher: "Irina Anatolievna" },
    { disc: "computers", teacher: "Anna Josipevna" },
    { disc: "philosophy", teacher: "Ibragimov" },
  ]

  Object.values(this.__proto__.base).forEach(value => {
    if (value.disc == discipline) this.teacher = value.teacher
  })
};

let Student = function (name, visits, discipline) {
  // инициализируем клас Discipline c параметром предмета
  // который будет проходить черес кейсы и подтягивать имя преподавателя
  Discipline.call(this, discipline);

  this.name = name;
  this.visits = visits ? visits : visits = 0
  this.pass = this.pass(this.visits);
  this.perfomance = this.perfomance(this.visits);
};

Student.prototype.countId = () => { n = 1; return () => n++ }
Student.prototype.closureId = Student.prototype.countId()

Student.prototype.pass = function (attend) {
  return attend > 15 && attend <= 20 ? true : false
}

Student.prototype.perfomance = function (attend) {
  if (attend >= 18 && attend <= 20) return "excellent";
  if (attend >= 15 && attend < 18) return "good";
  if (attend >= 10 && attend < 15) return "ternary";
  if (attend >= 5 && attend < 10) return "badly";
  return "Welcome to academ holidays";
};

let students = [];

students.push(new Student("Masha", 18, 'math'));
students.push(new Student("Sasha", 9, 'philosophy'));
students.push(new Student("Marina", 16, 'computers'));

let vovochka = new Student("Vovochka", 2, 'philosophy');

//вывод на экран
document.querySelector(".task1-0").innerHTML =
  `let Discipline = ${Discipline} `;

document.querySelector(".task1-1").innerHTML =
  `let Student = ${Student} `;

document.querySelector(".task1-2").innerHTML =
  `Student.prototype.perfomance = ${Student.prototype.perfomance} `;

  //Используем конструктор TABLE - ./dom.js
new Table([vovochka], $('.card-student'), 'vovochka')  // c кнопками
new Table(students, $('.students'), 'students', true, Student) // без кнопок