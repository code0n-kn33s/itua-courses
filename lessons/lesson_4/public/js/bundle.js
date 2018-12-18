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

/***/ "./application/composition_vs_inheritance.js":
/*!***************************************************!*\
  !*** ./application/composition_vs_inheritance.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n\n  Composition vs Inheritance\n  Компоновка (Композиция) против Наследования.\n\n  Наследование, определяет обьект по тому чем он ЯВЛЯЕТСЯ.\n  Композиция, определяет обьект по тому, что он ДЕЛАЕТ\n\n  Опишем проблематику. Слайды!\n\n*/\n// Our Functions\n\nconst Composition = () => {\n\nconst Drive = ( state ) => ({\n  drive: () => console.log('Wroooom!, It\\'s a car ' + state.name )\n});\n\nconst ChangeName = state => ({\n  changeName: ( name ) => {\n    console.log(`Old name:`, state.name, state );\n    state.name = name;\n    console.log(`New name:`, state.name, state );\n  }\n});\n\nconst Refill = ( state ) => ({\n  refill: () => console.log( state.name + ' was refiled')\n});\n\nconst Move = ( state ) => ({\n  move: ( speed ) => {\n    console.log(speed);\n    state.speed += speed ;\n    console.log( state.name + ' is moving. Speed ->' + state.speed );\n  }\n});\n\nconst Fly = ( state ) => ({\n  fly: () => {\n    console.log( state );\n    // state.name = \"qOp\";\n    console.log( state.name + ' flying into sky! Weather is ' + state.weather );\n  }\n});\n\nconst LoggerIn = obj => ({\n  logger: () => {\n    console.log( obj );\n  }\n});\n\n// Проверим ф-ю\nRefill({name: \"Volkswagen\"}).refill(); // Volkswagen was refiled\n//\n// // Наш конструктор.\nconst EcoRefillDrone = (name, speed) => {\n  let state = {\n    name,\n    speed: Number(speed),\n    weather: 'rainy'\n  };\n  return Object.assign(\n    {},\n    state,\n    Drive(state),\n    Refill(state),\n    ChangeName(state),\n    Fly(state),\n    Move(state),\n    LoggerIn(state)\n  );\n};\n\n  const myDrone = EcoRefillDrone('JS-Magic', 100);\n        myDrone.drive();\n        myDrone.refill();\n        myDrone.fly();\n        myDrone.move(100);\n        myDrone.move(100);\n\n        // console.log( 'myDrone', myDrone );\n        // myDrone.logger();\n  //\n  // const myDrone2 = EcoRefillDrone('JS-Is-Amaizing', 100);\n  // myDrone2.move(100);\n  // myDrone2.move(200);\n  // myDrone2.changeName('Dex3');\n        // myDrone2.changeName('HDMI');\n  //\n  // const Logger = obj => console.log( obj );\n  //       Logger(myDrone2);\n  //       myDrone2.logger();\n  //\n  //\n  //       let bindedMove = myDrone2.move.bind(null, 200);\n  //       MoveId.addEventListener('click', bindedMove );\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Composition);\n\n\n//# sourceURL=webpack:///./application/composition_vs_inheritance.js?");

/***/ }),

/***/ "./application/fabric.js":
/*!*******************************!*\
  !*** ./application/fabric.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n  /*\n\n      Сегодня разберем некоторые паттерны проектирования JS приложений.\n\n      Разберем паттерн \"Фабрика\" и то как он работает в JS.\n\n  */\n  const Fabric = () => {\n\n    class Weapon{\n\n      render(){\n        const root = document.getElementById('root');\n        const classMagic = this.magic ? 'magic' : 'regular';\n\n\n        root.innerHTML += `\n          <div class=\"${classMagic}\">\n            <h2>${this.name}</h2>\n            <span>${this.material}</span>\n            <div class=\"icon\">\n              <img src=\"${this.icon}\" width=\"100\" height=\"100\"/>\n            </div>\n          </div>\n        `;\n      }\n    }\n\n    class Sword extends Weapon{\n      constructor({name, material, style, magic}){\n        super();\n        this.weaponType = 'sword';\n        this.name = name || 'Unnamed sword';\n        this.material = material || 'Steel';\n        this.magic = magic !== undefined ? magic : false;\n        this.icon = 'images/swords.svg';\n      }\n    }\n\n    class Bow extends Weapon{\n      constructor({name, material, style, magic}){\n        super();\n        this.weaponType = 'bow';\n        this.name = name || 'Unnamed bow';\n        this.material = material || 'Wood';\n        this.magic = magic !== undefined ? magic : false;\n        this.icon = 'images/archery.svg';\n      }\n    }\n\n    class WeaponFactory {\n      makeWeapon( weapon ){\n        let WeaponClass = null;\n        if( weapon.weaponType === 'sword'){\n          WeaponClass = Sword;\n        } else if( weapon.weaponType === 'bow'){\n          WeaponClass = Bow;\n        } else {\n          return false;\n        }\n        return new WeaponClass( weapon );\n      }\n    }\n\n    const mySuperForge = new WeaponFactory();\n\n    const MakeMeBlade = mySuperForge.makeWeapon({\n      weaponType: 'sword',\n      name: 'winner',\n      metal: 'dark iron',\n      magic: true\n    })\n    const MakeMeBlade2 = mySuperForge.makeWeapon({\n      weaponType: 'sword',\n      name: 'defender',\n      metal: 'dark iron',\n      magic: true\n    })\n    const MakeMeBow = mySuperForge.makeWeapon({\n      weaponType: 'bow',\n      name: 'defender',\n      metal: 'dark iron',\n      magic: false\n    })\n\n    console.log( MakeMeBlade, MakeMeBlade2, MakeMeBow);\n    MakeMeBlade.render();\n    MakeMeBlade2.render();\n    MakeMeBow.render();\n    \n  }\n\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Fabric);\n\n\n//# sourceURL=webpack:///./application/fabric.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composition_vs_inheritance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composition_vs_inheritance */ \"./application/composition_vs_inheritance.js\");\n/* harmony import */ var _fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fabric */ \"./application/fabric.js\");\n\n\n\n// comp();\n// fabric();\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });