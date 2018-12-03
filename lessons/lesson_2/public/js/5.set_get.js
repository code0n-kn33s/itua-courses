  /*
    Пример использование сеттера и геттера из es6
  */

  class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }

    get name() {
      return this._name.toUpperCase();
    }

    set name(newName) {
      this._name = `Validated ${newName}`;
      console.log('new name:', this._name);
    }

    get age(){
      console.log('get age:', this._age);
      return this._age;
    }

    set age(newAge){
      console.log('set age:', newAge);
      if( this._age <= newAge){
          this._age = newAge;
      } else {
        throw new Error('Возраст не может быть меньше предыдущего');
      }
    }

      walk() {
        console.log(this._name + ' is walking.');
      }
  }

  let Petya = new Person('Petya', 22);
      Petya.name = 'Sasha';
      console.log( Petya.name );
      Petya.age = 23;

  console.log( Petya, Object.keys(Petya)  );

  //
  // console.log(Petya.name, Petya);
  // Petya.walk();
  //
  // Petya.age = 24; // Получил ошибку
  // console.log( Petya );
