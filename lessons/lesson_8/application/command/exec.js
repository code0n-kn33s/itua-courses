const execCommand = () => {


  class Calc {
    constructor(){
      this.currentValue = 0;
      this.history = [];
    }
    execute( command ){
      this.currentValue = command.execute( this.currentValue );
      this.history.push(command);
    }
    getCurrentValue(){
      console.log('CurrentValue is:', this.currentValue);
      return( this.currentValue );
    }
  }

  function Command(fn, undo, value) {
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


  function AddCommand(value){
    Command.call( this, add, sub, value);
  }
  function SubCommand(value){
    Command.call( this, sub, add, value);
  }


  const ExecCalc = new Calc();
  ExecCalc.execute( new AddCommand( 20 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 50 ) );
  ExecCalc.getCurrentValue();

}

export default execCommand;
