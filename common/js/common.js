M.AutoInit();

let Student = function (name, visits) {
  this.name = name;
  this.visits = visits;
  this.perfomance = function () {
    switch (this.visits) {
      case ('excellent'):
        if (this.visits == 20)
          break
      case ('good'):
        if (this.visits > 15 && this.visits < 20)
          break
      case ('good'):
        if (this.visits >= 15 && this.visits < 20)
          break
      case ('ternary'):
        if (this.visits >= 10 && this.visits < 15)
          break
      case ('badly'):
        if (this.visits >= 0 && this.visits < 10)
          break
      default:
        "Academ holiday"
    }
  };
}

let students = [];