/*
  Arrays Methods
  Docs:
    Array.isArray: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    * Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    Array.forEach: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    * Array.indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    * Array.find: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * Array.findIndex: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    Array.filter: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    Array.from: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    * Array.reverse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    Array.reduce: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    Array.some: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every

*/

  const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
  const NOT_ARRAY = "";

  // -- Проверка является ли массивом: Array.isArray( Arr );
  // console.log ( "Is ITEA_COURSES array?", Array.isArray(ITEA_COURSES) );
  // console.log ( "Is NOT_ARRAY array?", Array.isArray(NOT_ARRAY) );

  // -- Преобразование массивоподобного или итерируемо обьекта в массив: Array.from();
  // let listItems = list.querySelectorAll('li');
  // console.log(listItems, Array.isArray(listItems) );
  //
  // let listItemsArray = Array.from( listItems );
  // console.log(listItemsArray, Array.isArray(listItemsArray) );

  // -- Array.forEach
  // var LogName = item => console.log( 'log:', item );
  // ITEA_COURSES.forEach( LogName );
  // console.log('- - - - -');
  // ITEA_COURSES.forEach( function( item, i, iterated_array){
  //   console.log('log2:', item);
  // });

  // -- Array.filter
  // Create new array;

  // var StringLength = item => item.length < 15;
  // if expresion === true return item
  // var filtredArray = ITEA_COURSES.filter( item => {
  //   if( item.length < 15){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log('filtredArray:', filtredArray);

  // -- Array.map
  // Create new array;

  // var ReverseName = name => name.split("").reverse().join("");
  // var MappedArray = ITEA_COURSES.map(ReverseName);
  //
  // console.log(MappedArray);

  // -- every/some

  // var ArraySome = ITEA_COURSES.some( function( item ){
  //   if( item.length < 5){
  //     return true;
  //   }
  // });
  // console.log('ArraySome', ArraySome);

  // var ArrayEvery = ITEA_COURSES.every( function( item ){
  //   if( item.length >= 6){
  //     return true;
  //   }
  // });

  // console.log('ArrayEvery', ArrayEvery);
  // -- reduce/reduceRight

  // const REDUCE_ARRAY = [1,2,3,4,5,6,7,8,9,10];
  //
  // var result = REDUCE_ARRAY.reduce( function( sum, current){
  //   console.log("multiply >:", sum, current);
  //   return sum + current;
  // });
  // console.log(result);
  //
  // var resultReverse = REDUCE_ARRAY.reduceRight( function( sum, current){
  //   console.log("multiply - <:", sum);
  //   return sum + current;
  // });
  //
  // console.log( 'result', result, 'resultReverse', resultReverse, resultReverse === result);
