  /*
    В ES6 появились новые методы для работы с литералами в обьектах
  */

  function Character( name, gender, age){
    return {
        // аналогично name:name
        name,
        // аналогично gender:gender
        gender,
        // аналогично age:age
        age,

        // вычесляемые свойства
        ['age_' + age ] : true,

        // Короткая запись метода объекта пропускает
        // ключевое слово `function` и двоеточие.
        // Можно так:
        grow(){},
        // А не так:
        oldGrow: function(){}
    };
  }


  // let Bilbo = Character('Bilbo Bagins', 'Male', 117);
  // console.log(Bilbo);


  /*
    Строковые шаблоны / String Templates
  */
  //

  let name = "Frodo",
      surname = "Bagins",
      age = 35;


  let phrase = "Hello, my name is " + name + " " + surname + " and i'm " + age + ' years old';
      console.log( phrase );
  //
  // 1. Компактная работа со строками
   let newPhrase = `Hello, my name is ${name} ${surname} and i'm ${age} years old`;
      console.log( newPhrase );
  // 2. Работа с многострочностью / multiline strings

  console.log(`One Ring to rule th
    em all, One Ring to find them,
  One Ring to bring them all
  and in the darkness
   bind them` );
  //
  //  3. ШАБЛОНЧИКИ
  //
  let myTemplate = `
    <div id="myTempID">
      <h2>${name} ${surname}</h2>
      <span class="myText">${newPhrase}</span>
    </div>
  `;
  //
  let wrap = document.getElementById('wrap');
      wrap.innerHTML = myTemplate;
  let magic = document.getElementById('myTempID');
  console.log(magic);
