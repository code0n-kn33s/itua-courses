export class Calc {
  constructor(){
    this.currentValue = 0;
    this.history = [];
  }
  undo(){
    const cmd = this.history.pop();
    this.currentValue = cmd.undo( this.currentValue );
  }
  execute( command ){
    this.currentValue = command.execute( this.currentValue );
    this.history.push(command);
  }
  getCurrentValue(){
    return( this.currentValue );
  }
}

export function Command(fn, undo, value) {
    this.execute = fn;
    this.value = value;
    this.undo = undo;
}

function add(value){
  return value + this.value;
}

function sub(value){
  return value - this.value;
}

function multiply(value){
  return value * this.value;
}

function divide(value){
  return value / this.value;
}

export function AddCommand(value){
  Command.call( this, add, sub, value);
}
export function SubCommand(value){
  Command.call( this, sub, add, value);
}
export function MultiplyCommand(value){
  Command.call( this, multiply, divide, value);
}
export function DivideCommand(value){
  Command.call( this, divide, multiply, value);
}


const undoCalc = () => {

  const undoCalcExmpl = new Calc();
  undoCalcExmpl.execute( new AddCommand( 20 ) );
  undoCalcExmpl.execute( new AddCommand( 30 ) );
  undoCalcExmpl.execute( new AddCommand( 50 ) );
  console.log('after add:', undoCalcExmpl.getCurrentValue() );
  undoCalcExmpl.undo();
  console.log('first undo:', undoCalcExmpl.getCurrentValue() );
  undoCalcExmpl.undo();
  console.log('second undo:', undoCalcExmpl.getCurrentValue() );
  undoCalcExmpl.undo();
  console.log('third undo:', undoCalcExmpl.getCurrentValue() );

  console.log(undoCalcExmpl);

}

export default undoCalc;
