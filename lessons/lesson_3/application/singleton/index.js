import FreezeDemo from './object_freeze';
import OldSingleton from './old-singleton';
import NewSingleton from './new-singleton';
FreezeDemo();

const SingletonDemo = () => {
  /*
    Singleton (он же одиночка)— это паттерн проектирования,
    который гарантирует, что у класса есть только один экземпляр,
    и предоставляет к нему глобальную точку доступа.

    Про паттерн: https://refactoring.guru/ru/design-patterns/singleton
  */

  // Посмотрим на две реализаци старую - до ES6
  // oldSingletonDemo();
  // И новую
  newSingetonDemo();
};

const oldSingletonDemo = () => {
     // Смотрим реализацию в файле old-singleton.js

//     OldSingleton.add({id: 0, language: 'js'});
//     OldSingleton.add({id: 1, language: 'phyton'});
//     OldSingleton.add({id: 2, language: 'php'});
//     OldSingleton.add({id: 3, language: 'ruby'});
// //
//     console.log('OldSingleton', OldSingleton);
//     let myLang = OldSingleton.get(1);
//     console.log('OldSingleton -> myLang', myLang);
};

const newSingetonDemo = () => {
  // Как и все в js в 2017-18 меньше, быстрее, чище!
  NewSingleton.add({id: 0, language: 'js'});
  NewSingleton.add({id: 1, language: 'phyton'});
  NewSingleton.add({id: 2, language: 'php'});
  NewSingleton.add({id: 3, language: 'ruby'});
  //
  console.log('NewSingleton', NewSingleton);
  let myLang = NewSingleton.get(0);
  console.log('NewSingleton -> myLang', myLang);

  NewSingleton.addCounter(20);
  NewSingleton.addCounter(20);
  NewSingleton.addCounter(20);
  NewSingleton.addCounter(20);
  console.log( NewSingleton.getCounter() );

  /*
    Демо усложнить синглтон
  */
};

export default SingletonDemo;
