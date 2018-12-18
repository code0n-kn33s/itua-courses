
/*

  Higher Order Functions
  function is a values

*/
let hofDemo = () => {

  let multiply = x => x * x;
  let nine = multiply(3);
  console.log( 'multiply:', nine );

  /*

    Array.filter (так же как map, forEach, etc...) пример использования HOF в нативном js
    Паттерн позворялет использовать композцицию что бы собрать из маленьких функций одну большую

  */

  let zoo = [
    {id:0, name:"WoofMaker", species: 'dog'},
    {id:1, name:"WhiteFurr", species: 'rabbit'},
    {id:2, name:"MeowMaker", species: 'cat'},
    {id:3, name:"PoopMaker", species: 'dog'},
    {id:4, name:"ScratchMaker", species: 'cat'},
  ]

  let isDog = animal => animal.species === 'dog';
  let isCat = animal => animal.species === 'cat';

  let dogs = zoo.filter( isDog );
  let cats = zoo.filter( isCat );

  console.log('Here dogs:', dogs);
  console.log('Here cats:', cats);

  // - - - - - - - - - - - - - - - - - -

  function compose(func_a, func_b){
    return function(c){
      return func_a( func_b(c) );
    }
  }
  const addTwo = value => {
    console.log('Add', value);
    return value + 2
  }
  const multiplyTwo = value => {
    console.log('Mulitple', value);
    return value * 2;
  }

  const addTwoAndMultiplayTwo = compose( addTwo, multiplyTwo );
  // addTwoAndMultiplayTwo( 10 )

  /*
    В данном случае происходит следующее:
    - Вызывается ф-я compose которая принимает ф-и addTwo, multiplyTwo как аргументы
    - Вызывается функция которая передана как аргумент func_b
    - Результат её выполнения передается в функция func_a
    - Общий результат возвращается в ф-ю которая нам возвращается в переменную
  */

  // console.log(
  //   addTwoAndMultiplayTwo(2),
  //   addTwoAndMultiplayTwo(6),
  //   addTwoAndMultiplayTwo(40)
  // );

}

export default hofDemo;
