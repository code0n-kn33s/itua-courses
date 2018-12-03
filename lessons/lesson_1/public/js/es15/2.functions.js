/*
  Arrow functions + default values
  Docs: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

    const x = ( param ) => { console.log( param ); };
    const y = function( param ){
      console.log( param );
    };

    /*
      Короче и по умолчанию возвращает значение
    */
    const Duble = a => a * 2;
    const Duble4 = Duble(2);
    console.log(Duble4);

    /*
      Самое важное - новый принцип работы с контекстом this
    */


    function Human(name){
      this.name = name;
      this.age = 0;
      console.log(name + ' was born');


      setInterval( () => {
        /*
          По умолчанию контекст this получается в момент вызова и зачастую
          не может быть точно спрогнозирован со 100% вероятностью.
          Решения:
          1. Контролировать вызовы своих ф-й
          2. Использовать к̶о̶с̶т̶ы̶л̶и̶ особености языка. Например доп. переменная.
          3. Arrow Functions!

        */
        console.log(this);
        this.age++;
      }, 500);
    }

    // let Dexter = new Human('Dexter');

    /*
      Значения функций по умолчанию.

      Блиц опрос: - Почему стрелочная функция не может быть конструктором?
    */


    /* Old way */
    // function SuperFunc( id, name ){
    //   this.id = id;
    //   if( name !== undefined ){
    //     this.name = name;
    //   } else {
    //     this.name = 'A Girl has no name';
    //   }
    //   console.log( this );
    // }

    /* New way */
    function SuperFunc( id, name = 'A Girl has no name'){
      this.id = id;
      this.name = name;
      console.log(this);
    }

    const FnDefaultValue = ( That = 'is possible in Arrow Functions too') => {
      console.log('That', That);
    }
    FnDefaultValue();
    FnDefaultValue('is not what you thinking about');

    let Aria = new SuperFunc(0);
    let Sansa = new SuperFunc(1, 'Sansa Stark');
