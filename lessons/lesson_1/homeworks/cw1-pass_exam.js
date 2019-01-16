// export * as exams

// TASK 1 - Students pass exam
let Discipline = function() {
  this.obj = "Engineering";
  this.teacher = "Obragimov San Sanich";
};

let Student = function(name, visits) {
  Discipline.call(this);

  this.name = name;
  this.visits = visits;

  this.pass = this.visits > 15 && this.visits <= 20 ? true : false;
  this.perfomance = this.perfomance(this.visits);
};

Student.prototype.perfomance = function(attend) {
  if (attend === 20) return "excellent";
  if (attend >= 15 && attend < 20) return "good";
  if (attend >= 10 && attend < 15) return "ternary";
  if (attend >= 5 && attend < 10) return "badly";
  return "Welcome to academ holidays";
};

let students = [];

students.push(new Student("Kola", 14));
students.push(new Student("Masha", 20));
students.push(new Student("Sasha", 9));
students.push(new Student("Marina", 17));

let vovochka = new Student("Vovochka", 2);
vovochka.age = 14;
vovochka.hobby = ["football", "volleyball"];

console.log(vovochka);
students.push(vovochka);

console.log(students);
console.log(JSON.stringify(vovochka));

//вывод на экран
document.querySelector(".task1-0").innerHTML =
  `let Discipline = ${Discipline} `;

document.querySelector(".task1-1").innerHTML =
  `let Student = ${Student} `;

document.querySelector(".task1-2").innerHTML =
  `Student.prototype.perfomance = ${Student.prototype.perfomance} `;

document.querySelector(".task1-4").innerHTML =
  `JSON.stringify(vovochka): <br> ${JSON.stringify(vovochka)} `;
