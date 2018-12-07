/*
  Задание: написать функцию, для глубокой заморозки обьектов.

  Обьект для работы:
  let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look']
    }
  };

  frozenUniverse.evil.humans = []; -> Не должен отработать.

  Методы для работы:
  1. Object.getOwnPropertyNames(obj);
      -> Получаем имена свойств из объекта obj в виде массива

  2. Проверка через typeof на обьект или !== null
  if (typeof prop == 'object' && prop !== null){...}

  Тестирование:

  let FarGalaxy = DeepFreeze(universe);
      FarGalaxy.good.push('javascript'); // true
      FarGalaxy.something = 'Wow!'; // false
      FarGalaxy.evil.humans = [];   // false

*/

const work = () => {
  console.log( 'your code ');
}

export default work;
