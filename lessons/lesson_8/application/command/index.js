/*
  Command:
  Команда — это поведенческий паттерн проектирования,
  который превращает запросы в объекты, позволяя передавать их
  как аргументы при вызове методов, ставить запросы в очередь,
  логировать их, а также поддерживать отмену операций.

*/

import SomeCalc from './someCalc';
import ExecCalc from './exec';
import UndoCalc from './undo';
import Interface from './inter';


const Command = () => {

  /*
    1. Простой калькулятор
  */
  // SomeCalc();

  /*
    2. Калькулятор используя паттерн комманды
  */
  // ExecCalc();

  /*
    3. Калькулятор используя паттерн комманды и функцией undo
  */
  // UndoCalc();
  /*
    4. Interface
  */
  Interface();


}

export default Command;
