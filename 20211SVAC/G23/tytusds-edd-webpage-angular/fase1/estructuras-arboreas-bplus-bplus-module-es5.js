(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estructuras-arboreas-bplus-bplus-module"], {
    /***/
    "/iv8":
    /*!***************************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/bplus/bplus-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: BplusRoutingModule */

    /***/
    function iv8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BplusRoutingModule", function () {
        return BplusRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bplus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bplus.component */
      "hKKg");

      var routes = [{
        path: '',
        component: _bplus_component__WEBPACK_IMPORTED_MODULE_3__["BplusComponent"]
      }];

      var BplusRoutingModule = function BplusRoutingModule() {
        _classCallCheck(this, BplusRoutingModule);
      };

      BplusRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BplusRoutingModule);
      /***/
    },

    /***/
    "B02P":
    /*!***********************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/bplus/bplus.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function B02P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicGx1cy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "RfwH":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/estructuras-arboreas/bplus/bplus.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RfwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<h1>Hola soy {{nombre}} {{appellido}}</h1>\r\n<h2>Hola y yo soy el alumno {{alumno.nombre}} {{alumno.appellido}}</h2>\r\n<h3>Hola soy {{nombre}} {{alumno.appellido}}</h3>-->\r\n<!--\r\n<h1></h1>\r\n<input  placeholder=\"Ingrese un nuevo valor\" [(ngModel)]=\"inputNuevo\">\r\n<input type=\"text\" [(ngModel)]=\"inputNuevo\">\r\n<p>{{inputNuevo}}</p>\r\n<label>Correo\r\n    <input type=\"text\" [(ngModel)]=\"correo\">\r\n</label>\r\n<label>Password\r\n    <input type=\"password\" [(ngModel)]=\"password\">\r\n</label>\r\n<button (click)=\"Iniciar()\"> Iniciar </button>\r\n<label> Valor:    \r\n    <input type=\"text\" [(ngModel)]=\"x\">\r\n</label>\r\n<button type=\"submit\" (click)=\"Insertar()\"> Insertar </button>\r\n<h2>{{x}}</h2>\r\n-->\r\n<!--                                    -->\r\n\r\n<div >\r\n    <h4>Árbol B+</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <div class=\"card-body align-items-center\" >\r\n                    </div>\r\n            </div>\r\n        </div>      \r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            \r\n        </div>\r\n        \r\n    </div>   \r\n\r\n    <br>\r\n    <div id=\"mynetwork\" #siteConfigNetwork></div>\r\n\r\n    <div class=\"col-xl-6 text-xs-center\">\r\n        \r\n    </div>\r\n</div>\r\n<style type=\"text/css\">\r\n    #mynetwork {\r\n        width: 1200px;\r\n        height: 500px;\r\n        border: 1px solid lightgray;\r\n    }\r\n    #mySvgNetwork {\r\n        width: 700px;\r\n        height: 300px;\r\n        border: 1px solid lightgray;\r\n    }\r\n</style>";
      /***/
    },

    /***/
    "WElf":
    /*!******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/bplus/clase-arbol.ts ***!
      \******************************************************************/

    /*! exports provided: BPlus */

    /***/
    function WElf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BPlus", function () {
        return BPlus;
      });
      /* harmony import */


      var _nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo */
      "xjMg");

      var BPlus = /*#__PURE__*/function () {
        function BPlus(grado) {
          _classCallCheck(this, BPlus);

          this.grado = grado;
          if (grado % 2 == 0) this.middle = grado / 2;else this.middle = (grado - 1) / 2;
          this.root = new _nodo__WEBPACK_IMPORTED_MODULE_0__["Node"](null, 0);
          this.string = false;
          this.contador = 2;
          this.edges = [];
          this.arrayNodes = [];
        }

        _createClass(BPlus, [{
          key: "add",
          value: function add(value) {
            this.root = this._agregar(value, this.root);
          }
        }, {
          key: "_agregar",
          value: function _agregar(valor, temp) {
            if (temp.childs.length == 0) {
              temp.agregar(valor);
            } else {
              var encontrar = false;

              for (var i = 0; i < temp.keys.length; i++) {
                if (valor < temp.keys[i]) {
                  encontrar = true;
                  temp.childs[i] = this._agregar(valor, temp.childs[i]);
                  break;
                }
              }

              if (!encontrar) {
                temp.childs[temp.keys.length] = this._agregar(valor, temp.childs[temp.keys.length]);
              }
            }

            if (temp.keys.length == this.grado) {
              if (temp.parent == null) {
                this.contador++;
                var c = temp;
                temp = new _nodo__WEBPACK_IMPORTED_MODULE_0__["Node"](null, this.contador);
                temp.agregar(c.keys[this.middle]);
                this.contador++;
                temp.childs.push(new _nodo__WEBPACK_IMPORTED_MODULE_0__["Node"](temp, this.contador));
                this.contador++;
                temp.childs.push(new _nodo__WEBPACK_IMPORTED_MODULE_0__["Node"](temp, this.contador));

                for (var i = 0; i < this.middle; i++) {
                  temp.childs[0].agregar(c.keys[i]);
                  temp.childs[1].agregar(c.keys[i + this.middle + 1]);
                }

                if (c.childs.length > 0) {
                  for (var i = 0; i < this.middle + 1; i++) {
                    temp.childs[0].childs[i] = c.childs[i];
                    temp.childs[0].childs[i].parent = temp.childs[0];
                    temp.childs[1].childs[i] = c.childs[i + this.middle + 1];
                    temp.childs[1].childs[i].parent = temp.childs[1];
                  }

                  if (c.childs[0].childs.length > 0) {
                    temp.childs[0].childs[temp.childs[0].childs.length - 1].siguiente = temp.childs[1].childs[0];
                  }
                } else {
                  temp.childs[0].siguiente = temp.childs[1];
                }
              } else {
                var claveMedia = temp.keys[this.middle];
                temp.parent.agregar(claveMedia);
                var index;
                var tieneHijos = false;

                if (temp.childs.length > 0) {
                  tieneHijos = true;
                }

                for (index = 0; index < temp.parent.keys.length; index++) {
                  if (temp.parent.keys[index] == claveMedia) {
                    break;
                  }
                }

                for (var _i = temp.parent.keys.length; _i > index + 1; _i--) {
                  temp.parent.childs[_i] = temp.parent.childs[_i - 1];
                }

                var aux = temp;
                this.contador++;
                temp.parent.childs[index] = new _nodo__WEBPACK_IMPORTED_MODULE_0__["Node"](temp.parent, this.contador);
                this.contador++;
                temp.parent.childs[index + 1] = new _nodo__WEBPACK_IMPORTED_MODULE_0__["Node"](temp.parent, this.contador);

                for (var i = 0; i < this.middle; i++) {
                  console.log(aux.keys[i]);
                  temp.parent.childs[index].agregar(aux.keys[i]);
                  temp.parent.childs[index + 1].agregar(aux.keys[i + this.middle + 1]);
                }

                temp = temp.parent.childs[index];

                if (tieneHijos) {
                  for (var i = 0; i < this.middle + 1; i++) {
                    temp.parent.childs[index].childs[i] = aux.childs[i];
                    temp.parent.childs[index].childs[i].parent = temp.parent.childs[index];
                  }

                  for (var i = this.middle + 1; i < this.grado + 1; i++) {
                    temp.parent.childs[index + 1].childs[i - this.middle - 1] = aux.childs[i];
                    temp.parent.childs[index + 1].childs[i - this.middle - 1].parent = temp.parent.childs[index + 1];
                  }

                  if (temp.parent.childs[0].childs.length > 0) {
                    if (index > 0) {
                      temp.parent.childs[index - 1].childs[temp.parent.childs[index - 1].childs.length - 1].siguiente = temp.parent.childs[index].childs[0];
                    }

                    temp.parent.childs[index].childs[temp.parent.childs[index].childs.length - 1].siguiente = temp.parent.childs[index + 1].childs[0];
                  }
                } else {
                  if (index > 0) {
                    temp.parent.childs[index - 1].siguiente = temp.parent.childs[index];
                  }

                  temp.parent.childs[index].siguiente = temp.parent.childs[index + 1];

                  if (index < temp.parent.childs.length - 1) {
                    temp.parent.childs[index + 1].siguiente = temp.parent.childs[index + 2];
                  }
                }
              }
            }

            return temp;
          }
        }, {
          key: "recorrerListaGraficar",
          value: function recorrerListaGraficar(temp) {
            if (temp != null) {
              if (temp.hijos.length == 0 && temp.siguiente != null) {
                this.recorrerLista(temp);
                return;
              } else {
                if (temp.hijos.length > 0) {
                  this.recorrerListaGraficar(temp.hijos[0]);
                }

                return;
              }
            }
          }
        }, {
          key: "recorrerLista",
          value: function recorrerLista(temp) {
            if (temp != null) {
              if (temp.siguiente != null) {
                this.edges.push({
                  from: temp.id,
                  to: temp.siguiente.id,
                  arrows: "to"
                });

                if (temp.siguiente.siguiente != null) {
                  this.recorrerLista(temp.siguiente);
                }
              }
            }
          }
        }, {
          key: "recorrerGraficar",
          value: function recorrerGraficar(temp) {
            if (temp != null) {
              var texto = "";
              var i;

              for (var _i2 = 0; _i2 < temp.keys.length; _i2++) {
                if (_i2 == temp.keys.length - 1) {
                  texto = texto + temp.keys[_i2].toString();
                } else {
                  texto = texto + temp.keys[_i2].toString() + "|";
                }
              }

              this.arrayNodes.push({
                id: temp.id,
                label: texto,
                shape: "box"
              });
              texto = "";

              for (var _i3 = 0; _i3 < temp.hijos.length; _i3++) {
                this.edges.push({
                  from: temp.id,
                  to: temp.hijos[_i3].id
                });
                this.recorrerGraficar(temp.hijos[_i3]);
              }
            }
          }
        }]);

        return BPlus;
      }();
      /***/

    },

    /***/
    "WaQJ":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/bplus/bplus.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BplusModule */

    /***/
    function WaQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BplusModule", function () {
        return BplusModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared */
      "M0ag");
      /* harmony import */


      var _bplus_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bplus-routing.module */
      "/iv8");
      /* harmony import */


      var _bplus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bplus.component */
      "hKKg");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var BplusModule = function BplusModule() {
        _classCallCheck(this, BplusModule);
      };

      BplusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bplus_routing_module__WEBPACK_IMPORTED_MODULE_4__["BplusRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_bplus_component__WEBPACK_IMPORTED_MODULE_5__["BplusComponent"]]
      })], BplusModule);
      /***/
    },

    /***/
    "hKKg":
    /*!**********************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/bplus/bplus.component.ts ***!
      \**********************************************************************/

    /*! exports provided: BplusComponent */

    /***/
    function hKKg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BplusComponent", function () {
        return BplusComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bplus_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bplus.component.html */
      "RfwH");
      /* harmony import */


      var _bplus_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bplus.component.css */
      "B02P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _clase_arbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./clase-arbol */
      "WElf");

      var BplusComponent = /*#__PURE__*/function () {
        function BplusComponent() {
          _classCallCheck(this, BplusComponent);

          //@ViewChild("svgNetwork") svgNetworkContainer: ElementRef;
          this.bst = null;
          this.fileContent = '';
          this.setting = {
            element: {
              dynamicDownload: null
            }
          };
        }

        _createClass(BplusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Insertar",
          value: function Insertar() {
            //console.log("IMPRIMIENDO EL INSERTAR")
            //if( typeof this.x)     
            //this.bst.put(y)
            if (this.orden >= 3 && this.orden <= 7) {
              if (this.bst != null) {
                if (this.x.charCodeAt(0) == 8) {
                  // backspace.
                  console.log("No hay nada");
                } else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
                  // is a number.
                  this.bst.add(parseInt(this.x));
                } else {
                  // other keys.
                  this.bst.string = true;
                  this.bst.add(this.x);
                  this.bst.string = false;
                }

                this.visit();
              } else {
                this.bst = new _clase_arbol__WEBPACK_IMPORTED_MODULE_5__["BPlus"](this.orden);
                this.bst.add(parseInt(this.x));
                this.visit();
              }
            } else {
              alert("El grado no está entre 3 y 7");
            } //this.bst.insert(y)
            //console.log(this.x)


            console.log("RAIZ", this.bst.root); //console.log("X no vale NADA")

            this.x = ''; //this.x = this.bst.inOrder(this.bst.root,this.x)
            //this.bst.inOrder(this.bst.root)

            console.log("----------------------"); //console.log("IMPRIMIENDO EL RETORNO DE InOrder",this.x)

            this.x = '';
          }
        }, {
          key: "Eliminar",
          value: function Eliminar() {
            console.log("IMPRIMIENDO EL ELIMINAR");

            if (this.x.charCodeAt(0) == 8) {
              // backspace.
              console.log("No hay nada");
            } else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
              // is a number.
              this.bst.eliminar(parseInt(this.x));
            } else {
              // other keys.
              this.bst.string = true;
              this.bst.eliminar(this.x);
              this.bst.string = false;
            } //this.bst.eliminar(this.x)


            console.log(this.x);
            this.x = null;
            this.visit();
          }
        }, {
          key: "visit",
          value: function visit() {
            this.drawSvgNetwork();
            var treeData = this.getTreeData();
            this.loadVisTree(treeData);
          }
        }, {
          key: "loadVisTree",
          value: function loadVisTree(treedata) {
            var options = {
              nodes: {
                widthConstraint: 100
              },
              layout: {
                hierarchical: {
                  levelSeparation: 100,
                  nodeSpacing: 100,
                  parentCentralization: true,
                  direction: 'UD',
                  sortMethod: 'directed',
                  shakeTowards: 'roots' // roots, leaves                        

                }
              }
            };
            var container = this.networkContainer.nativeElement;
            this.network = new vis.Network(container, treedata, options);
            var that = this;
            this.network.on("hoverNode", function (params) {
              console.log('hoverNode Event:', params);
            });
            this.network.on("blurNode", function (params) {
              console.log('blurNode event:', params);
            });
          }
        }, {
          key: "getTreeData",
          value: function getTreeData() {
            //nodos.push(5)
            //nodos = this.bst.dotgenarray(this.bst.root)
            //this.bst.dotgenarray(this.bst.root)
            //nodos.push(this.bst.dotgenarray(this.bst.root,prueba))
            //nodos.push({id:10, label:'X10'})
            //console.log(nodos )
            var nodes = [{
              id: 1,
              label: 'Node 1',
              title: 'I am node 1!'
            }, {
              id: 2,
              label: 'Node 2'
            }, {
              id: 3,
              label: 'Node 3'
            }, {
              id: 4,
              label: 'Node 4'
            }, {
              id: 5,
              label: 'Node 5'
            }, {
              id: 6,
              label: 'Node 6'
            }]; // create an array with edges
            //this.bst.dot = '{'
            //this.bst.dotgen(this.bst.root)
            //this.bst.dot += '}'
            //var DOTstring = this.bst.dot
            //var parsedData = vis.parseDOTNetwork(DOTstring);
            //console.log("PARSED",parsedData)
            //console.log(this.bst.root)
            //console.log(this.bst.dot)
            //this.bst.dot = ''
            //console.log("PARSED",parsedData)

            var edges = [{
              from: 1,
              to: 2
            }, {
              from: 1,
              to: 3
            }, {
              from: 2,
              to: 4
            }, {
              from: 2,
              to: 5
            }, {
              from: 5,
              to: 6
            }]; //this.bst.inOrder(this.bst.root)
            //this.bst.dotgenarray(this.bst.root)
            //console.log("X",nodes)
            //console.log("Y",this.bst.datagraph)
            //console.log("X1",edges)
            //console.log("Y1",this.bst.edgegraph)

            var treeData = {
              nodes: this.bst.arrayNodes,
              edges: this.bst.edges
            }; //this.bst.datagraph = []
            //this.bst.edgegraph = []

            return treeData;
          }
        }, {
          key: "drawSvgNetwork",
          value: function drawSvgNetwork() {
            var nodes = null;
            var edges = null;
            var network = null;
            var DIR = 'img/refresh-cl/';
            var LENGTH_MAIN = 150;
            var LENGTH_SUB = 50;
            /*var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="390" height="65">' +
                '<rect x="0" y="0" width="100%" height="100%" fill="#7890A7" stroke-width="20" stroke="#ffffff" ></rect>' +
                '<foreignObject x="15" y="10" width="100%" height="100%">' +
                '<div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial; font-size:30px">' +
                ' <em>I</em> am' +
                '<span style="color:white; text-shadow:0 0 20px #000000;">' +
                  ' HTML in SVG!</span>' +
                     // * THIS IMAGE IS NOT RENDERING *
                '<i style="background-image: url(https://openclipart.org/download/280615/July-4th-v2B.svg);"></i>' +
                     '</div>' +
                '</foreignObject>' +
                '</svg>';
            
            var url = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(svg);*/
            // Create a data table with nodes.

            this.bst.datagraph = []; // Create a data table with links.

            this.bst.edgegraph = []; //nodes.push({id: 1, label: 'Get HTML', image: url, shape: 'image'});
            //nodes.push({id: 2, label: 'Using SVG', image: url, shape: 'image'});
            //edges.push({from: 1, to: 2, length: 300});
            // create a network
            // var container = this.svgNetworkContainer.nativeElement;            
            //var container = document.getElementById('mynetwork');

            var data = {
              nodes: this.bst.datagraph,
              edges: this.bst.edgegraph
            };
            var options = {
              nodes: {
                widthConstraint: 20
              },
              layout: {
                hierarchical: {
                  levelSeparation: 100,
                  nodeSpacing: 100,
                  parentCentralization: true,
                  direction: 'UD',
                  sortMethod: 'directed',
                  shakeTowards: 'roots' // roots, leaves                        

                }
              }
            };
            window.vis = __webpack_require__(
            /*! vis-network/standalone */
            "WaTm"); //network = new vis.Network(container, data, options);
            // this.network = new vis.Network(container, data, options);
          }
        }, {
          key: "cargarArchivo",
          value: function cargarArchivo(fileList) {
            var file = fileList[0];
            var fileReader = new FileReader();
            var self = this;

            fileReader.onloadend = function (x) {
              self.fileContent = fileReader.result.toString();
            };

            fileReader.readAsText(file);
            this.strCarga = self.fileContent;
          }
        }, {
          key: "clickCargar",
          value: function clickCargar() {
            this.strCarga = this.fileContent;
            console.log(this.strCarga);
            var strIntoObj = JSON.parse(this.strCarga);
            console.log(strIntoObj);

            if (strIntoObj.animacion != undefined && strIntoObj.animacion != null) {
              this.velocidadAnimacion = strIntoObj.animacion;
            }

            if (strIntoObj.repeticion != undefined) {
              this.opcionRepeticiones = strIntoObj.repeticion;
            }

            if (strIntoObj.posicion != undefined) {
              if (strIntoObj.posicion == 'Inicio' || strIntoObj.posicion == 'Fin') this.opcionOperar = strIntoObj.posicion;
            }

            var _iterator = _createForOfIteratorHelper(strIntoObj.valores),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var valorStrNodo = _step.value;
                this.bst.insert(valorStrNodo);
                this.visit();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "downloadJson",
          value: function downloadJson() {
            var _this = this;

            this.fakeValidateUserData().subscribe(function (res) {
              _this.dyanmicDownloadByHtmlTag({
                fileName: 'ABB.json',
                text: res
              });
            });
          }
        }, {
          key: "fakeValidateUserData",
          value: function fakeValidateUserData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.listaEnlJSon);
          }
        }, {
          key: "dyanmicDownloadByHtmlTag",
          value: function dyanmicDownloadByHtmlTag(arg) {
            if (!this.setting.element.dynamicDownload) {
              this.setting.element.dynamicDownload = document.createElement('a');
            }

            var element = this.setting.element.dynamicDownload;
            var fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
            element.setAttribute('href', "data:".concat(fileType, ";charset=utf-8,").concat(encodeURIComponent(arg.text)));
            element.setAttribute('download', arg.fileName);
            var event = new MouseEvent("click");
            element.dispatchEvent(event);
          }
        }]);

        return BplusComponent;
      }();

      BplusComponent.ctorParameters = function () {
        return [];
      };

      BplusComponent.propDecorators = {
        networkContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["siteConfigNetwork"]
        }]
      };
      BplusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bplus',
        template: _raw_loader_bplus_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bplus_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BplusComponent);
      /***/
    },

    /***/
    "xjMg":
    /*!***********************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/bplus/nodo.ts ***!
      \***********************************************************/

    /*! exports provided: Node */

    /***/
    function xjMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Node", function () {
        return Node;
      });

      var Node = /*#__PURE__*/function () {
        function Node(padre, id) {
          _classCallCheck(this, Node);

          this.id = id;
          this.keys = [];
          this.childs = [];
          this.parent = padre;
          this.siguiente = null;
        } //Agrega valores al nodo


        _createClass(Node, [{
          key: "agregar",
          value: function agregar(value) {
            this.keys.push(value);

            if (this.keys.length > 1) {
              this.keys = this.ordenar(this.keys);
            }
          }
        }, {
          key: "ordenar",
          value: function ordenar(arreglo) {
            var aux = 0;

            for (var i = 0; i < arreglo.length - 1; i++) {
              for (var j = i + 1; j < arreglo.length; j++) {
                if (arreglo[i] > arreglo[j]) {
                  aux = arreglo[i];
                  arreglo[i] = arreglo[j];
                  arreglo[j] = aux;
                }
              }
            }

            return arreglo;
          }
        }]);

        return Node;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=estructuras-arboreas-bplus-bplus-module-es5.js.map