import {
  Calc,
  AddCommand,
  SubCommand,
  DivideCommand,
  MultiplyCommand
} from './undo';

const inter = () => {

  class RenderInterface{

    constructor(){
      this.calc = new Calc();
    }

    render(){
      const app = document.getElementById('app');

      const node = document.createElement('div');
      node.className = 'wrap';
      node.innerHTML = `
        <header class="header">
          <div class="input-container">
            <input type="number" class="mainInput">
            <div class="current-value">
              ${this.calc.currentValue}
            </div>
          </div>

          <div class="actions-container">
            <button class="_add">Add + </button>
            <button class="_sub">Subtract -</button>
            <button class="_multi">Multiply *</button>
            <button class="_divide">Divide /</button>
          </div>
        </header>
        <section>
          <header>
            <h2>History</h2>
            <button class="_undo"> Undo Last </button>
          </header>
          <div class="history-container">
            ${
              this.calc.history.map( history => {
                console.log( history );
                return(
                  `
                    <div class="history-item">
                      Action: <b>${history.constructor.name}</b> : value <b>${history.value}</b>
                    </div>
                  `
                )
              }).join('')
            }

          </div>
        </section>
      `;

      const add = node.querySelector('._add');
            add.addEventListener('click', () => {
              const value = Number(node.querySelector('.mainInput').value);
              this.calc.execute( new AddCommand(value) );
              this.render();
              console.log( this );
            })

      const sub = node.querySelector('._sub');
            sub.addEventListener('click', () => {
              const value = Number(node.querySelector('.mainInput').value);
              this.calc.execute( new SubCommand(value) );
              this.render();
              console.log( this );
            })

      const multi = node.querySelector('._multi');
            multi.addEventListener('click', () => {
              const value = Number(node.querySelector('.mainInput').value);
              this.calc.execute( new MultiplyCommand(value) );
              this.render();
              console.log( this );
            })

      const divide = node.querySelector('._divide');
            divide.addEventListener('click', () => {
              const value = Number(node.querySelector('.mainInput').value);
              this.calc.execute( new DivideCommand(value) );
              this.render();
              console.log( this );
            })

      const undo = node.querySelector('._undo');
            undo.addEventListener('click', () => {
              this.calc.undo()
              this.render();
              console.log( this );
            })



      app.innerHTML = null;
      app.appendChild( node );
    }

  }



  const Interface = new RenderInterface();
  console.log('Interface', Interface);
        Interface.render();
}

export default inter;
