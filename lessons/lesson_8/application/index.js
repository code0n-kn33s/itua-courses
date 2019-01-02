import testing from './testing';
import command from './command';


// testing();

command();



function *gen(){

  console.log(1);
  yield;
  console.log(2);
}

const func = gen();
console.log( func );
func.next();
func.next();
