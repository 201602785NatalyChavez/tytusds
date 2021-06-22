(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estructuras-arboreas-abb-abb-module"], {
    /***/
    "3o69":
    /*!***********************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/abb/abb-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AbbRoutingModule */

    /***/
    function o69(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbbRoutingModule", function () {
        return AbbRoutingModule;
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


      var _abb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./abb.component */
      "rsNw");

      var routes = [{
        path: '',
        component: _abb_component__WEBPACK_IMPORTED_MODULE_3__["AbbComponent"]
      }];

      var AbbRoutingModule = function AbbRoutingModule() {
        _classCallCheck(this, AbbRoutingModule);
      };

      AbbRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbbRoutingModule);
      /***/
    },

    /***/
    "DLVU":
    /*!***************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/abb/abb.module.ts ***!
      \***************************************************************/

    /*! exports provided: AbbModule */

    /***/
    function DLVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbbModule", function () {
        return AbbModule;
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


      var _abb_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./abb-routing.module */
      "3o69");
      /* harmony import */


      var _abb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./abb.component */
      "rsNw");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AbbModule = function AbbModule() {
        _classCallCheck(this, AbbModule);
      };

      AbbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _abb_routing_module__WEBPACK_IMPORTED_MODULE_4__["AbbRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_abb_component__WEBPACK_IMPORTED_MODULE_5__["AbbComponent"]]
      })], AbbModule);
      /***/
    },

    /***/
    "F7ix":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/abb/abb.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function F7ix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".graph-container {\r\n    height: 25em;\r\n    widows: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFiYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWJiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGgtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjVlbTtcclxuICAgIHdpZG93czogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ONDF":
    /*!****************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/abb/clase-arbol.ts ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function ONDF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return BST;
      });
      /* harmony import */


      var _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../clase-nodo-simple */
      "TVwR");

      var BST = /*#__PURE__*/function () {
        function BST() {
          _classCallCheck(this, BST);

          this.root = null;
          this.dot = '';
          this.datagraph = [];
          this.edgegraph = [];
          this.contadores = 0;
          this.nulls = 0;
          this.string = false;
        }

        _createClass(BST, [{
          key: "getRoot",
          value: function getRoot() {
            return this.root;
          }
        }, {
          key: "insert",
          value: function insert(data) {
            //let newNode = new Node(data,this.contadores)
            if (this.root != null) this.insertNode(data, this.root); // console.log(newNode.data)
            else {
                if (this.string) {
                  this.root = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data, this.contadores);
                  console.log(this.root.data.charCodeAt(0));
                } else {
                  this.root = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data, this.contadores);
                }

                this.contadores += 1;
              }
          }
        }, {
          key: "insertNode",
          value: function insertNode(valor, node) {
            if (this.string) {
              var value = 0;

              for (var q = 0; q < valor.length; q++) {
                value += valor.charCodeAt(0);
              }

              console.log("VALOR EN AscII: ", value); //console.log("Nodos")
              //console.log(node.data, value)
              //console.log("Nodos Padre")

              var nodedata = 0;

              for (var _q = 0; _q < node.data.length; _q++) {
                nodedata += node.data.charCodeAt(0);
              }

              if (value < nodedata) {
                //console.log(value,"ES MENOR QUE",node.data )
                if (node.left != null) {
                  this.insertNode(valor, node.left); // node.left.up = node
                } else {
                  node.left = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](valor, this.contadores);
                  this.contadores += 1;
                }
              } else if (value > nodedata) {
                // console.log(value,"ES MAYOR QUE",node.data )
                //console.log(5>12)
                if (node.right != null) {
                  this.insertNode(valor, node.right); // node.right.up = node
                } else {
                  node.right = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](valor, this.contadores);
                  this.contadores += 1;
                }
              } else {
                /// Si hay repeticion, si no, se quita y ya
                if (node.left != null) this.insertNode(valor, node.left);else {
                  node.left = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](valor, this.contadores);
                  this.contadores += 1;
                }
              }
            } else {
              var _value = valor;
              console.log("ES UN NUMERO: ", _value);

              if (_value < node.data) {
                //console.log(value,"ES MENOR QUE",node.data )
                if (node.left != null) {
                  this.insertNode(_value, node.left); // node.left.up = node
                } else {
                  node.left = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](_value, this.contadores);
                  this.contadores += 1;
                }
              } else if (_value > node.data) {
                // console.log(value,"ES MAYOR QUE",node.data )
                //console.log(5>12)
                if (node.right != null) {
                  this.insertNode(_value, node.right); // node.right.up = node
                } else {
                  node.right = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](_value, this.contadores);
                  this.contadores += 1;
                }
              } else {
                /// Si hay repeticion, si no, se quita y ya
                if (node.left != null) this.insertNode(_value, node.left);else {
                  node.left = new _clase_nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](_value, this.contadores);
                  this.contadores += 1;
                }
              }
            }
          }
        }, {
          key: "inOrder",
          value: function inOrder(node) {
            if (node !== null) {
              //console.log("Se va a ir a la izquierda")
              this.inOrder(node.left);
              console.log("NODE DATA", node.data);
              this.datagraph.push({
                id: node.id,
                label: node.data.toString()
              });
              console.log("DATA", node.data); //console.log("Regreso de la izquierda")
              //console.log("IMPRIMIENDO EL DEL CENTRO")
              //console.log(node.data)
              //console.log("******")
              //console.log("Se va a ir a la derecha")

              this.inOrder(node.right); //console.log("Regreso de la derecha")
            }
          }
        }, {
          key: "inOrder2",
          value: function inOrder2(node, retorno) {
            if (node !== null) {
              //console.log("Se va a ir a la izquierda")
              retorno = this.inOrder2(node.left, retorno);
              console.log("NODE DATA", node.data);
              this.datagraph.push({
                id: node.id,
                label: node.data.toString()
              });
              console.log("DATA", node.data); //console.log("Regreso de la izquierda")
              //console.log("IMPRIMIENDO EL DEL CENTRO")
              //console.log(node.data)

              retorno += //console.log("******")
              //console.log("Se va a ir a la derecha")
              retorno = this.inOrder2(node.right, retorno); //console.log("Regreso de la derecha")
            }

            return retorno;
          }
        }, {
          key: "search",
          value: function search(node, founding) {
            if (node === null) return null;else if (founding < node.data) {
              return this.search(node.left, founding);
            } else if (founding > node.data) {
              return this.search(node.right, founding);
            } else {
              console.log(node.data);
              return node;
            }
          }
        }, {
          key: "eliminar",
          value: function eliminar(valor) {
            this.root = this.eliminarN(this.root, valor);
          }
        }, {
          key: "eliminarN",
          value: function eliminarN(nodo_aux, valor) {
            if (this.string) {
              var value = 0;

              for (var q = 0; q < valor.length; q++) {
                value += valor.charCodeAt(0);
              }

              console.log("VALOR EN AscII: ", value); //console.log("Nodos")
              //console.log(node.data, value)
              //console.log("Nodos Padre")

              var nodedata = 0;

              for (var _q2 = 0; _q2 < nodo_aux.data.length; _q2++) {
                nodedata += nodo_aux.data.charCodeAt(0);
              }

              console.log("ENTRO A ELIMINAR N.---- Y está eliminando : ", valor);
              if (nodo_aux == null) return null;else if (valor < nodedata) {
                var iz = this.eliminarN(nodo_aux.left, valor);
                nodo_aux.left = iz;
              } else if (valor > nodedata) {
                var der = this.eliminarN(nodo_aux.right, valor);
                nodo_aux.right = der;
              } else {
                var p = nodo_aux;

                if (p.right == null) {
                  nodo_aux = p.left;
                } else if (p.left == null) {
                  nodo_aux = p.right;
                } else {
                  p = this.cambiar(p);
                }

                p = null;
              }
              return nodo_aux;
            } else {
              console.log("ENTRO A ELIMINAR N.---- Y está eliminando : ", valor);
              if (nodo_aux == null) return null;else if (valor < nodo_aux.data) {
                var _iz = this.eliminarN(nodo_aux.left, valor);

                nodo_aux.left = _iz;
              } else if (valor > nodo_aux.data) {
                var _der = this.eliminarN(nodo_aux.right, valor);

                nodo_aux.right = _der;
              } else {
                var _p = nodo_aux;

                if (_p.right == null) {
                  nodo_aux = _p.left;
                } else if (_p.left == null) {
                  nodo_aux = _p.right;
                } else {
                  _p = this.cambiar(_p);
                }

                _p = null;
              }
              return nodo_aux;
            }
          }
        }, {
          key: "cambiar",
          value: function cambiar(nodo_aux) {
            var p = nodo_aux;
            var a = nodo_aux.left;

            while (a.right != null) {
              p = a;
              a = a.right;
            }

            console.log("Nodo aux", nodo_aux.data);
            console.log("A", a.data);
            nodo_aux.data = a.data;

            if (p == nodo_aux) {
              p.left = a.left;
            } else {
              p.right = a.left;
            }

            return a;
          }
        }, {
          key: "dotgen",
          value: function dotgen(tmp) {
            if (tmp != null) {
              console.log(tmp.data);

              if (tmp.ya) {
                this.dot += tmp.data + '[style="filled",color="turquoise"];';
                tmp.ya = false;
              }

              if (tmp.left != null) this.dot += tmp.data + '--' + tmp.left.data + ';';else {
                this.dot += 'null' + this.nulls + '[color="white", label=""];\n';
                this.dot += tmp.data + '-- null' + this.nulls + '[color="white", label=""];';
              }
              this.nulls += 1;
              if (tmp.right != null) this.dot += tmp.data + '--' + tmp.right.data + ';';else {
                this.dot += 'null' + this.nulls + '[color="white", label=""];\n';
                this.dot += tmp.data + '-- null' + this.nulls + '[color="white", label=""];';
              }
              this.nulls += 1;
              this.dotgen(tmp.left);
              this.dotgen(tmp.right);
            }
          }
        }, {
          key: "dotgenarray",
          value: function dotgenarray(tmp) {
            if (tmp != null) {
              //this.nulls += 1
              if (tmp.left != null) {
                this.edgegraph.push({
                  from: tmp.id,
                  to: tmp.left.id
                }); //  this.nulls += 1
              }

              if (tmp.right != null) {
                this.edgegraph.push({
                  from: tmp.id,
                  to: tmp.right.id
                }); //this.nulls += 1
              }
              /*
              if (tmp.left == null)
                  this.dot += tmp.value+'-- '+tmp.right.value+';'
              if (tmp.right != null && tmp.left !=null)
                  this.dot += tmp.value+'-- {'+tmp.left.value+' '+temp.right.value+'};'
              
              else if (tmp.right == null)
                  this.dot += tmp.value+'-- {'+tmp.left.value+' null};'
                  */


              this.dotgenarray(tmp.left);
              this.dotgenarray(tmp.right);
            }
          }
        }]);

        return BST;
      }();
      /***/

    },

    /***/
    "TVwR":
    /*!******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/clase-nodo-simple.ts ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function TVwR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return Node;
      });

      var Node = function Node(data, id) {
        _classCallCheck(this, Node);

        this.data = data;
        this.left = null;
        this.right = null;
        this.id = id;
        this.ya = true;
        this.datastring = false; //this.up = null
      }; //var bst = new BST()
      //var root = bst.getRoot()
      //var arrayResults = []
      //function insertar(){
      //  let agregar = document.querySelector('#agregar')
      //bst.insert(agregar.value)
      //console.log(agregar.value)
      //}
      //function inOrder(){
      //  bst.inOrder(bst.root)
      //console.log("FUNCIONA")
      //}
      //function buscar(){
      //}
      //function eliminar(){
      //}
      //bst.insert(35)
      //bst.insert(5)
      //bst.insert(1)
      //bst.insert(10)
      //bst.insert(12)
      //bst.insert(16)
      //bst.insert(20)
      //bst.insert(50)
      //bst.insert(25)
      //bst.insert(75)
      //bst.insert(35)
      //bst.insert(10)//1 10 15 25 32 35 50 55 60 75 79 81
      //bst.insert(81)
      //bst.insert(15)
      //bst.insert(1)
      //bst.insert(32)
      //bst.insert(79)
      //bst.insert(60)
      //bst.insert(55)
      //bst.inOrder(bst.root)
      //console.log("----------------------")
      //var x = bst.search(bst.root,5)
      //bst.eliminar(25)
      //bst.eliminar(60)
      //bst.inOrder(bst.root)
      //console.log("XXXX",x.up.up.right.data)

      /***/

    },

    /***/
    "YEFy":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/estructuras-arboreas/abb/abb.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YEFy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div >\r\n    <h4>Árbol Binario de Búsqueda</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    <input class=\"form-control\" placeholder=\"Ingresar nuevo valor\" [(ngModel)]=\"x\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <div class=\"card-body align-items-center\" >\r\n                    <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"Insertar()\">Agregar</button>\r\n                    <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"Eliminar()\">Eliminar</button>\r\n                   <!-- <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"Actualizar()\">Actualizar</button>-->\r\n                </div>\r\n            </div>\r\n        </div>      \r\n        \r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <fieldset class=\"form-group\">\r\n              <input type=\"file\" (change)=\"cargarArchivo($event.target.files)\">\r\n                <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"clickCargar()\">Cargar a lista dinamica</button>\r\n            </fieldset>\r\n        </div>\r\n    </div>   \r\n    \r\n    <br>\r\n    <div id=\"mynetwork\" #siteConfigNetwork></div>\r\n    <div class=\"col-xl-6 text-xs-center\">\r\n        <fieldset class=\"form-group\">\r\n            <label>JSON salida</label>\r\n            <textarea class=\"form-control\" rows=\"2\">{{listaEnlJSon}}</textarea>\r\n            <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"downloadJson()\">Guardar</button>\r\n        </fieldset>\r\n    </div>\r\n</div>\r\n<style type=\"text/css\">\r\n    #mynetwork {\r\n        width: 1200px;\r\n        height: 500px;\r\n        border: 1px solid lightgray;\r\n    }\r\n    #mySvgNetwork {\r\n        width: 700px;\r\n        height: 300px;\r\n        border: 1px solid lightgray;\r\n    }\r\n</style>";
      /***/
    },

    /***/
    "rsNw":
    /*!******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/abb/abb.component.ts ***!
      \******************************************************************/

    /*! exports provided: AbbComponent */

    /***/
    function rsNw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbbComponent", function () {
        return AbbComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_abb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./abb.component.html */
      "YEFy");
      /* harmony import */


      var _abb_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./abb.component.css */
      "F7ix");
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
      "ONDF");

      var AbbComponent = /*#__PURE__*/function () {
        function AbbComponent() {
          _classCallCheck(this, AbbComponent);

          this.bst = new _clase_arbol__WEBPACK_IMPORTED_MODULE_5__["default"]();
          this.valoresinsertados = [];
          this.fileContent = '';
          this.setting = {
            element: {
              dynamicDownload: null
            }
          };
        }

        _createClass(AbbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listaEnlJSon = "";
            this.opcionRepeticiones = "true";
          }
        }, {
          key: "Iniciar",
          value: function Iniciar() {}
        }, {
          key: "Insertar",
          value: function Insertar() {
            if (this.x.charCodeAt(0) == 8) {
              console.log("No hay nada");
            } else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
              this.bst.insert(parseInt(this.x));
            } else {
              this.bst.string = true;
              this.bst.insert(this.x);
              this.bst.string = false;
            }

            console.log("RAIZ", this.bst.root);
            this.x = '';
            console.log("----------------------");
            this.x = '';
            this.visit();
            this.listaEnlJSon = JSON.stringify(this.bst);
          }
        }, {
          key: "Eliminar",
          value: function Eliminar() {
            console.log("IMPRIMIENDO EL ELIMINAR");

            if (this.x.charCodeAt(0) == 8) {
              console.log("No hay nada");
            } else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
              this.bst.eliminar(parseInt(this.x));
            } else {
              this.bst.string = true;
              this.bst.eliminar(this.x);
              this.bst.string = false;
            }

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
                  shakeTowards: 'roots'
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
            }];
            this.bst.dot = '{';
            this.bst.dotgen(this.bst.root);
            this.bst.dot += '}';
            var DOTstring = this.bst.dot;
            var parsedData = vis.parseDOTNetwork(DOTstring);
            this.bst.dot = '';
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
            }];
            var treeData = {
              nodes: parsedData.nodes,
              edges: parsedData.edges
            };
            this.bst.datagraph = [];
            this.bst.edgegraph = [];
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
            this.bst.datagraph = [];
            this.bst.edgegraph = [];
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
                  shakeTowards: 'roots'
                }
              }
            };
            window.vis = __webpack_require__(
            /*! vis-network/standalone */
            "WaTm");
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
            this.bst = new _clase_arbol__WEBPACK_IMPORTED_MODULE_5__["default"]();

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
                valorStrNodo = valorStrNodo.toString();
                this.valoresinsertados.push(valorStrNodo);

                if (this.valoresinsertados.includes(valorStrNodo) && this.opcionRepeticiones == 'false') {
                  console.log("El valor", valorStrNodo, "está repetido");
                } else {
                  this.x = valorStrNodo;
                  this.Insertarcarga();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.visit();
            this.valoresinsertados = [];
          }
        }, {
          key: "Insertarcarga",
          value: function Insertarcarga() {
            if (this.x.charCodeAt(0) == 8) {
              console.log("No hay nada");
            } else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
              this.bst.insert(parseInt(this.x));
            } else {
              this.bst.string = true;
              this.bst.insert(this.x);
              this.bst.string = false;
            }

            console.log("RAIZ", this.bst.root);
            this.listaEnlJSon = JSON.stringify(this.bst);
            this.x = '';
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

        return AbbComponent;
      }();

      AbbComponent.ctorParameters = function () {
        return [];
      };

      AbbComponent.propDecorators = {
        networkContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["siteConfigNetwork"]
        }]
      };
      AbbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-abb',
        template: _raw_loader_abb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_abb_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AbbComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=estructuras-arboreas-abb-abb-module-es5.js.map