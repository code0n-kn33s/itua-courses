/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/DecoratorExample/Notifier.js":
/*!**************************************************!*\
  !*** ./application/DecoratorExample/Notifier.js ***!
  \**************************************************/
/*! exports provided: SmsNotifier, ViberNotifier, GmailNotifier, TelegramNotifier, SlackNotifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmsNotifier\", function() { return SmsNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViberNotifier\", function() { return ViberNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GmailNotifier\", function() { return GmailNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TelegramNotifier\", function() { return TelegramNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlackNotifier\", function() { return SlackNotifier; });\nclass Notifier {\n  send( msg, baseNode, block ){\n      console.log('CLASS NOTIFIER: mesasge was sended:', msg );\n      const target = baseNode.querySelector(`.notifier__item[data-slug=\"${block}\"]`);\n      console.log('target', target);\n      target.innerHTML += `<div>${msg}</div>`;\n  }\n}\n\n\n/*\n\n  // Пока не смотрит вниз :)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*/\n\nclass SmsNotifier extends Notifier {\n  send( msg, baseNode, block = 'sms' ){\n\n    ///....\n    // fetch('kyivstar.ua/send?...')\n    super.send(msg, baseNode, block);\n  }\n}\n\nclass ViberNotifier extends Notifier {\n  send( msg, baseNode, block = 'viber'){\n    //...\n    // fetch('viber.com/send?...')\n      super.send(msg, baseNode, block);\n  }\n}\n\nclass GmailNotifier extends Notifier {\n  send( msg, baseNode, block = 'mail' ){\n      // fetch('gmail.com/send?...')\n      super.send(msg, baseNode, block);\n  }\n}\n\nclass TelegramNotifier extends Notifier {\n  send( msg, baseNode, block = 'telegram' ){\n      // fetch('telegram.com/send?...')\n      super.send(msg, baseNode, block);\n  }\n}\n\nclass SlackNotifier extends Notifier {\n  send( msg, baseNode, block = 'slack' ){\n      // fetch('slack.com/send?...')\n      super.send(msg, baseNode, block);\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notifier);\n\n\n//# sourceURL=webpack:///./application/DecoratorExample/Notifier.js?");

/***/ }),

/***/ "./application/DecoratorExample/baseDecorator.js":
/*!*******************************************************!*\
  !*** ./application/DecoratorExample/baseDecorator.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifier */ \"./application/DecoratorExample/Notifier.js\");\n\n\nclass BaseDecorator {\n  constructor( clients ){\n    let obs = clients.map( obs => {\n      if( obs.name === 'sms' ){\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"SmsNotifier\"](obs);\n      } else if( obs.name === 'mail'){\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"GmailNotifier\"](obs);\n      } else if( obs.name === 'telegram'){\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"TelegramNotifier\"](obs);\n      } else if( obs.name === 'viber'){\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"ViberNotifier\"](obs);\n      } else if( obs.name === 'slack'){\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"SlackNotifier\"](obs);\n      }\n    })\n    this.clients = obs;\n  }\n  sendMessage( msg, baseNode ){\n    this.clients.map( ( obs ) => {\n      obs.send(msg, baseNode);\n    });\n  }\n\n  addNotifier( notifier ){\n    this.clients.push( notifier );\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseDecorator);\n\n\n//# sourceURL=webpack:///./application/DecoratorExample/baseDecorator.js?");

/***/ }),

/***/ "./application/DecoratorExample/index.js":
/*!***********************************************!*\
  !*** ./application/DecoratorExample/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseDecorator */ \"./application/DecoratorExample/baseDecorator.js\");\n\n// import Notifier from './Notifier';\n\n\nclass Application{\n  constructor(){\n    this.notifierTargets = [\n      {name: 'sms', image: 'images/sms.svg'},\n      {name: 'mail', image: 'images/gmail.svg'},\n      {name: 'telegram', image: 'images/telegram.svg'},\n      {name: 'viber', image: 'images/viber.svg'},\n      {name: 'slack', image: 'images/slack.svg'},\n    ];\n    this.notifier = new _baseDecorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( this.notifierTargets );\n    this.createInterface = this.createInterface.bind(this);\n    this.node = null;\n  }\n\n  createInterface(){\n    const root = document.getElementById('root');\n    const AppNode = document.createElement('section');\n\n    AppNode.className = 'notifer_app';\n      console.log( this.notifierTargets);\n    AppNode.innerHTML =\n    `\n      <div class=\"notifer_app--container\">\n        <header>\n          <input class=\"notifier__messanger\" type=\"text\"/>\n          <button class=\"notifier__send\">Send Message</button>\n        </header>\n        <div class=\"notifier__container\">\n        ${\n          this.notifierTargets.map( item =>\n            `\n            <div class=\"notifier__item\" data-slug=\"${item.name}\">\n              <header class=\"notifier__header\">\n                <img width=\"25\" src=\"${item.image}\"/>\n                <span>${item.name}</span>\n              </header>\n              <div class=\"notifier__messages\"></div>\n            </div>\n            `).join('')\n        }\n        </div>\n      </div>\n    `;\n\n    const btn = AppNode.querySelector('.notifier__send');\n    const input = AppNode.querySelector('.notifier__messanger');\n    btn.addEventListener('click', () => {\n      let value = input.value;\n\n      this.notifier.sendMessage(value, this.node);\n\n      // this.notifier.send(value, 'sms');\n      // this.notifier.send(value, 'viber');\n      // this.notifier.send(value, 'telegram');\n      // this.notifier.send(value, 'viber');\n\n    });\n\n    this.node = AppNode;\n    root.appendChild(AppNode);\n  }\n\n}\n\n\nconst Demo = () => {\n  const NotifierApp = new Application();\n  console.log(NotifierApp);\n  NotifierApp.createInterface();\n\n  const NotApp = new Application();\n  NotApp.createInterface();\n\n  const NotApp2 = new Application();\n  NotApp2.createInterface();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n\n//# sourceURL=webpack:///./application/DecoratorExample/index.js?");

/***/ }),

/***/ "./application/decorator/basicUsage.js":
/*!*********************************************!*\
  !*** ./application/decorator/basicUsage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BaseDemo = () => {\n\n    console.log( 'DECORATOR BASE!');\n\n      function Human( name ){\n        this.name = name;\n        this.currentTemperature = 0;\n        this.minTemperature = -10;\n\n        console.log( this, `new Human ${this.name} arrived!`);\n      }\n\n      Human.prototype.ChangeTemperature = function( changeValue ){\n        console.log(\n          'current', this.currentTemperature + changeValue,\n          'min', this.minTemperature\n        );\n\n        this.currentTemperature = this.currentTemperature + changeValue;\n        if( this.currentTemperature < this.minTemperature ){\n          console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);\n        } else {\n          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);\n        }\n      };\n\n      let Morgan = new Human('Morgan');\n          Morgan.ChangeTemperature(-5);\n          Morgan.ChangeTemperature(-6);\n\n      function DressedHuman( Human ){\n        this.name = Human.name;\n        this.clothes = [\n          { name: 'jacket', temperatureResistance: 20},\n          { name: 'hat', temperatureResistance: 5},\n          { name: 'scarf', temperatureResistance: 10},\n        ];\n        this.currentTemperature = 0;\n        this.minTemperature = Human.minTemperature - this.clothes.reduce(\n            (currentResistance, clothe ) => {\n              console.log('currentResistance', currentResistance,  'clothe', clothe);\n              return currentResistance + clothe.temperatureResistance;\n            }, 0\n          );\n        console.log(`new Human ${this.name} arrived! He can survive in temperature ${this.minTemperature}`, this);\n      }\n      DressedHuman.prototype = Human.prototype;\n\n      let Dexter = new DressedHuman( new Human('Dexter') );\n      // console.log( Dexter );\n          Dexter.ChangeTemperature(-6);\n          Dexter.ChangeTemperature(-16);\n          Dexter.ChangeTemperature(-16);\n          Dexter.ChangeTemperature(-26);\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseDemo);\n\n\n//# sourceURL=webpack:///./application/decorator/basicUsage.js?");

/***/ }),

/***/ "./application/decorator/basicUsage_es6.js":
/*!*************************************************!*\
  !*** ./application/decorator/basicUsage_es6.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DecoratorClass = () => {\n\n  console.log( 'DECORATOR ON CLASSES!');\n\n  class Human {\n    constructor(name){\n      this.name = name;\n      this.currentTemperature = 0;\n      this.minTemperature = -10;\n\n      console.log(`new Human ${this.name} arrived!`, this);\n    }\n\n    changeTemperature(changeValue){\n      console.log(\n        'current', this.currentTemperature + changeValue,\n        'min', this.minTemperature\n      );\n      let prevTemperature = this.currentTemperature;\n      this.currentTemperature = this.currentTemperature + changeValue;\n\n      if( this.currentTemperature < this.minTemperature ){\n        console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);\n      } else {\n        if( this.currentTemperature > prevTemperature  ) {\n          console.log(`Temperature is growing. Seems someone go to Odessa or drink some hot tea?`)\n        } else {\n          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);\n        }\n      }\n    }\n  }\n\n  let Debra = new Human('Debra');\n      Debra.changeTemperature(-5);\n      Debra.changeTemperature(6);\n      Debra.changeTemperature(-16);\n\n  class DressedHuman extends Human{\n    constructor(name){\n      super(name);\n      this.clothes = [\n        { name: 'jacket', temperatureResistance: 20},\n        { name: 'hat', temperatureResistance: 5},\n        { name: 'scarf', temperatureResistance: 10},\n      ];\n      this.minTemperature = this.minTemperature - this.clothes.reduce(\n          (currentResistance, clothe ) => {\n            console.log('currentResistance', currentResistance,  'clothe', clothe);\n            return currentResistance + clothe.temperatureResistance;\n          }, 0\n        );\n      console.log(`Dressed Human ${name}`, this);\n    }\n  }\n\n  let Masuka = new DressedHuman('Masuka');\n      Masuka.changeTemperature(-25);\n      Masuka.changeTemperature(-26);\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DecoratorClass);\n\n\n//# sourceURL=webpack:///./application/decorator/basicUsage_es6.js?");

/***/ }),

/***/ "./application/decorator/index.js":
/*!****************************************!*\
  !*** ./application/decorator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basicUsage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicUsage */ \"./application/decorator/basicUsage.js\");\n/* harmony import */ var _basicUsage_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicUsage_es6 */ \"./application/decorator/basicUsage_es6.js\");\n\n\n\n/*\n  Декоратор — это структурный паттерн проектирования,\n  который позволяет динамически добавлять объектам новую\n  функциональность, оборачивая их в полезные «обёртки».\n\n  https://refactoring.guru/ru/design-patterns/decorator\n*/\n\nconst DecoratorDemo = () => {\n\n  // console.log( 'DECORATOR AS DESIGN PATTERN DEMO!');\n  // Base();\n  Object(_basicUsage_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  // console.log( '- - - - - - - - - - - -');\n  // Define();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DecoratorDemo);\n\n\n//# sourceURL=webpack:///./application/decorator/index.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DecoratorExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecoratorExample */ \"./application/DecoratorExample/index.js\");\n/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorator */ \"./application/decorator/index.js\");\n\n\n\n/*\n  Демо декоратора\n*/\n// DecoratorBase();\nObject(_DecoratorExample__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });