
  /*
    import defaultExport from "module-name";
    import * as name from "module-name";
    import { export } from "module-name";
    import { export as alias } from "module-name";
    import { export1 , export2 } from "module-name";
    import { export1 , export2 as alias2 } from "module-name";
    import defaultExport, * as name from "module-name";
    import "module-name";
  */

  /*
    import defaultExport from "module-name";
  */

  import './modules/myFunction';

  myFunction2();

  // import Container, * as superFunc from './modules/trashContainer';
  // console.log( Container, superFunc );

  import * as Modules from './modules';

  // import $ from 'jquery';
  // $('html').html('<h1>Hello!</h1>');


  export default "Default export string";
