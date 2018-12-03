  /*
    Destructuring assignment
    Docs: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  */
  'use strict';
  // ARRAY;

  // OLD ASSIGMENT:
  // var myArray = ["one", "two", "three"];
  // var firstObj = myArray[0];
  // var secondObj = myArray[1];
  // console.log(firstObj, secondObj);

  // NEW ASSIGMENT
  // let [ firstObj, secondObj ] = [{id: 1}, {id:2}, {id:3}];
  // console.log( firstObj, secondObj );
  // //
  // let [ , ,  thirdObj ] = [{id: 1}, {id:2}, {id:3}];
  // console.log( thirdObj );

  let options = {
    name: "SomeStuff",
    width: 100,
    height: 200
  };

  let { name, height, width  } = options;

  console.log( 'log:', name, height, width  );

  function DestructDemo( Obj ){
    let { name, width, height } = Obj;
    console.log(name + ": w:" + width + ' h:' + height );
  }

  DestructDemo(options);

  // let newOptions = {
  //   name: "NewObj",
  //   width: 300,
  //   height: 500
  // };
  // //
  // DestructDemo(newOptions);
  // let a = 10;
  // let b = 20;
  // console.log( 'stage:1', a, b);
  // a = {a:a, b:b};
  // console.log( 'stage:2', a, b);
  // b = a.a;
  // a = a.b;
  //

  // function RevertVariables( a, b ){
  //    [a, b] = [b, a];
  //    console.log( 'a:', a , "b:", b);
  // }
  //
  // RevertVariables( "A", "B");
  //

  let x = {
    value: 1,
  };

  // // Деструктуризация переменной прямо при обьявлении в функции
  // let doSmsng = ({ key = 0, value }) => {
  //   console.log( key, value );
  // }
  // doSmsng(x);

  // function Hoisting(){
  //   var boo;
  //   console.log( boo );
  //       boo = 0;
  //   console.log( boo )
  // };
  // Hoisting();
