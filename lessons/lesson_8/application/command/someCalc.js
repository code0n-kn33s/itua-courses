const someCalc = () => {

  class Calc {
    constructor(){
      this.currentValue = 0;
      this.history = [];
    }
    add( value ){
      this.currentValue += value;
      console.log('new value:', this.currentValue );
    }
    sub( value ){
      this.currentValue -= value;
      console.log('new value:', this.currentValue );
    }
    getCurrentValue(){
      console.log('CurrentValue is:', this.currentValue);
      return( this.currentValue );
    }
  }


    const SuperCalc = new Calc();

    SuperCalc.add(50);
    SuperCalc.add(30);
    SuperCalc.sub(3);
    SuperCalc.getCurrentValue();

}

export default someCalc;
