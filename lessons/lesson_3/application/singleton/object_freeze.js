const ObjectFreezeDemo = () => {
  /*
    Разберемся вначале с Object.freeze. ->
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
  */

  const myObj = {
    name: 'Dexter',
    prop: () => {
      console.log(`${this.name} woohoo!`);
    }
  };
  console.log( myObj );
  myObj.name = "Debra";
  console.log( myObj );

  /*
    Заморозка обьекта, это необратимый процесс.
    Единожды заомроженный обьект уже не может быть разморожен!
    Заморозим обьект
  */
  // let frozen = Object.freeze(myObj);
  //Попробуем изменить или добавить значение
  // myObj.name = 'name';
  // frozen.name = "Vince";
  // frozen.secondName = 'Morgan';

  // Проверим сам обьект и его идентичность с тем,
  // что мы создали в самом начале функции
  // console.log( 'frozen', frozen, 'equal?', frozen === myObj);

  /*
    Так же, метод работает для массивов
  */
  // let frozenArray = Object.freeze(['froze', 'inside', 'of', 'array']);

  // Попробуем добавить новое значение
  // frozenArray[0] = 'Noooooo!';

  // Попробуем использовать методы
  // let sliceOfColdAndSadArray = frozenArray.slice(0, 1);
  // sliceOfColdAndSadArray.map( item => console.log( item ) );
  // console.log(frozenArray, sliceOfColdAndSadArray);

  // Метоы для проверки
  // Object.isFrozen( obj ) -> Вернет true если обьект заморожен
  // console.log(
  //   'is myObj frozen?', Object.isFrozen( myObj ),
  //   '\nis frozen frozen?', Object.isFrozen( frozen ),
  //   '\nis array frozen', Object.isFrozen( frozenArray )
  // );

  /*
    Заморозка в обьектах является не глубокой
  */

  let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look']
    }
  };
  let x = Object.getOwnPropertyNames(universe);
  console.log(x);
  let frozenUniverse = Object.freeze(universe);
      // frozenUniverse.humans = [];
      frozenUniverse.evil.humans = [];
      
      console.log(frozenUniverse);
};

export default ObjectFreezeDemo;
