// TASK 1 - Students pass exam
let Discipline = function(discipline) {
  this.obj = discipline;

  switch(discipline) {
    case('engine'):
      this.teacher = "Irina Anatolievna"
      break
    case('computers'):
      this.teacher = "Anna Josipevna"
      break
    case('philosophy'):
      this.teacher = "Ibragimov"
      break
    }
};


let Student = function(name, visits, discipline) {
  Discipline.call(this, discipline);

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

students.push(new Student("Masha", 20, 'engine'));
students.push(new Student("Sasha", 9, 'philosophy'));
students.push(new Student("Marina", 17, 'computers'));

let vovochka = new Student("Vovochka", 2, 'philosophy');

//вывод на экран
document.querySelector(".task1-0").innerHTML =
  `let Discipline = ${Discipline} `;

document.querySelector(".task1-1").innerHTML =
  `let Student = ${Student} `;

document.querySelector(".task1-2").innerHTML =
  `Student.prototype.perfomance = ${Student.prototype.perfomance} `;

parseObj(vovochka, $('.card-student'), 'vovochka')

parseObj(students, $('.students'), 'students')