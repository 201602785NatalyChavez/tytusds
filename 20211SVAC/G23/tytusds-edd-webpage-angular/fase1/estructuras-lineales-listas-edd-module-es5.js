(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estructuras-lineales-listas-edd-module"], {
    /***/
    "1B6m":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-canvas/rectangulo-nodo.ts ***!
      \****************************************************************************/

    /*! exports provided: RectanguloNodo */

    /***/
    function B6m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RectanguloNodo", function () {
        return RectanguloNodo;
      });

      var RectanguloNodo = /*#__PURE__*/function () {
        function RectanguloNodo(ctx, texto, x, y, ancho, alto, esDoble, banderaAnimar) {
          _classCallCheck(this, RectanguloNodo);

          this.ctx = ctx;
          this.texto = texto;
          this.x = x;
          this.y = y;
          this.ancho = ancho;
          this.alto = alto;
          this.esDoble = esDoble;
          this.banderaAnimar = banderaAnimar;
          this.colorRelleno = 'black';
          this.colorBorde = 'white';
          this.colorTexto = 'white';
          this.estiloTexto = 'bold 16px Verdana';
          this.anchoRectangulo = 3;
          this.xCola = 0;
          this.yCola = 0;
          this.xHead = 0;
          this.xFinal = 0;
          this.yFinal = 0;
          this.xInicial = 0;
          this.yInicial = 0;
          this.calcularCoords();
          this.draw();
        }

        _createClass(RectanguloNodo, [{
          key: "getTexto",
          value: function getTexto() {
            return this.texto;
          }
        }, {
          key: "draw",
          value: function draw() {
            if (this.texto == undefined) this.texto = '1';
            this.ctx.fillStyle = this.colorBorde;
            this.ctx.fillRect(this.xInicial, this.yInicial, this.ancho, this.alto);
            this.ctx.fillStyle = this.colorRelleno;
            this.ctx.fillRect(this.xInicial + this.anchoRectangulo, this.yInicial + this.anchoRectangulo, this.ancho - this.anchoRectangulo * 2, this.alto - this.anchoRectangulo * 2);
            this.ctx.fillStyle = this.colorBorde;
            this.ctx.fillRect(this.xInicial + this.ancho - 20, this.yInicial, this.anchoRectangulo, this.alto);

            if (this.esDoble) {
              this.ctx.fillRect(this.xInicial + 20, this.yInicial, this.anchoRectangulo, this.alto);
            }

            this.drawText();
          }
        }, {
          key: "drawText",
          value: function drawText() {
            this.ctx.fillStyle = this.colorTexto;
            this.ctx.textAlign = "center";
            this.ctx.font = this.estiloTexto;
            var sumaX = 0;
            if (this.texto.length <= 3) sumaX = this.ancho / 4;else sumaX = this.ancho / 2;

            if (this.esDoble) {
              this.ctx.fillText(this.texto, this.xInicial + this.ancho / 2, this.yInicial + 23);
            } else {
              this.ctx.fillText(this.texto, this.xInicial + this.ancho / 3, this.yInicial + 23);
            }
          }
        }, {
          key: "calcularCoords",
          value: function calcularCoords() {
            this.xFinal = 10 + this.ancho * this.x;
            this.yFinal = this.alto * this.y;
            this.yCola = this.alto * this.y + 15;
            this.xCola = this.xFinal + this.ancho - 10;
            this.xHead = this.xFinal + 15;
            this.xInicial = this.ctx.canvas.width / 2;
            this.yInicial = 20;

            if (this.banderaAnimar == false) {
              this.xInicial = this.xFinal;
              this.yInicial = this.yFinal;
            }
          }
        }, {
          key: "animar",
          value: function animar() {
            if (this.xInicial < this.xFinal) this.xInicial += 1;else if (this.xInicial > this.xFinal) this.xInicial -= 1;
            if (this.yInicial < this.yFinal) this.yInicial += 1;else if (this.yInicial > this.yFinal) this.yInicial -= 1;
            this.draw();
          }
        }]);

        return RectanguloNodo;
      }();
      /***/

    },

    /***/
    "43WT":
    /*!**********************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/pila.ts ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function WT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return Pila;
      });
      /* harmony import */


      var _nodo_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-simple */
      "pJ+W");

      var Pila = /*#__PURE__*/function () {
        function Pila() {
          _classCallCheck(this, Pila);

          this.longitud = 0;
        }

        _createClass(Pila, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.longitud == 0;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var colaArray = new Array(this.longitud);
            var aux = this.inicio;
            var i = 0;

            while (i < this.longitud) {
              colaArray[i] = aux.getData();
              i++;
              aux = aux.getNext();
            }

            return colaArray;
          }
        }, {
          key: "size",
          value: function size() {
            return this.longitud;
          }
        }, {
          key: "push",
          value: function push(data) {
            var nuevo = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);

            if (this.longitud == 0) {
              this.inicio = nuevo;
            } else {
              var aux = this.inicio;

              while (aux.getNext() != null) {
                aux = aux.getNext();
              }

              aux.setNext(nuevo);
            }

            this.longitud++;
          }
        }, {
          key: "pop",
          value: function pop() {
            var nodo = null;

            if (this.longitud > 0) {
              if (this.longitud == 1) {
                this.inicio = null;
              } else {
                var aux = this.inicio;
                var previo = this.inicio;

                while (aux.getNext() != null) {
                  previo = aux;
                  aux = aux.getNext();
                }

                previo.setNext(null);
              }

              this.longitud--;
            }

            return nodo;
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var aux = this.inicio;

            while (aux != null && !existeValor) {
              if (aux.getData() == valor) {
                return true;
              }

              aux = aux.getNext();
            }

            return existeValor;
          }
        }, {
          key: "peek",
          value: function peek() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "agregarAlInicio",
          value: function agregarAlInicio(data) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "agregarAlFinal",
          value: function agregarAlFinal(data) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "borrarAlInicio",
          value: function borrarAlInicio() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "borrarAlFinal",
          value: function borrarAlFinal() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "actualizar",
          value: function actualizar(posicion, newData) {
            throw new Error("Method not implemented.");
          }
        }]);

        return Pila;
      }();
      /***/

    },

    /***/
    "CU/q":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/nodo-doble.ts ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function CUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return NodoDoble;
      });

      var NodoDoble = /*#__PURE__*/function () {
        function NodoDoble(data) {
          _classCallCheck(this, NodoDoble);

          this.data = data;
          this.next = null;
          this.prev = null;
        }

        _createClass(NodoDoble, [{
          key: "getNext",
          value: function getNext() {
            return this.next;
          }
        }, {
          key: "getPrev",
          value: function getPrev() {
            return this.prev;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "setNext",
          value: function setNext(next) {
            this.next = next;
          }
        }, {
          key: "setPrev",
          value: function setPrev(prev) {
            this.prev = prev;
          }
        }, {
          key: "setData",
          value: function setData(data) {
            this.data = data;
          }
        }]);

        return NodoDoble;
      }();
      /***/

    },

    /***/
    "Fzsf":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-canvas/flecha.ts ***!
      \*******************************************************************/

    /*! exports provided: Flecha */

    /***/
    function Fzsf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Flecha", function () {
        return Flecha;
      });

      var Flecha = /*#__PURE__*/function () {
        function Flecha(ctx, fromx, fromy, tox, toy, anchoLinea, colorFlecha, esBidireccional) {
          _classCallCheck(this, Flecha);

          this.ctx = ctx;
          this.fromx = fromx;
          this.fromy = fromy;
          this.tox = tox;
          this.toy = toy;
          this.anchoLinea = anchoLinea;
          this.colorFlecha = colorFlecha;
          this.esBidireccional = esBidireccional;
          this.x1 = 20;
          this.x2 = 100;
          this.y1 = 10;
          this.y2 = 50;
          this.canvas_arrow();
        }

        _createClass(Flecha, [{
          key: "canvas_arrow",
          value: function canvas_arrow() {
            var headlen = 10; // length of head in pixels

            var dx = this.x2 - this.x1;
            var dy = this.y2 - this.y1;
            var angle = Math.atan2(dy, dx);
            this.ctx.moveTo(this.x1, this.y1);

            if (this.esBidireccional) {
              this.ctx.lineTo(this.x1 + headlen * Math.cos(angle - Math.PI / 6), this.y1 - headlen * Math.sin(angle - Math.PI / 6));
              this.ctx.moveTo(this.x1, this.y1);
              this.ctx.lineTo(this.x1 + headlen * Math.cos(angle + Math.PI / 6), this.y1 - headlen * Math.sin(angle + Math.PI / 6));
              this.ctx.moveTo(this.x1, this.y1);
            }

            this.ctx.lineTo(this.x2, this.y2);
            this.ctx.lineTo(this.x2 - headlen * Math.cos(angle - Math.PI / 6), this.y2 - headlen * Math.sin(angle - Math.PI / 6));
            this.ctx.moveTo(this.x2, this.y2);
            this.ctx.lineTo(this.x2 - headlen * Math.cos(angle + Math.PI / 6), this.y2 - headlen * Math.sin(angle + Math.PI / 6));
            this.ctx.strokeStyle = this.colorFlecha;
            this.ctx.lineWidth = this.anchoLinea;
            this.ctx.stroke();
          }
        }, {
          key: "animar",
          value: function animar() {
            if (this.x1 < this.fromx) this.x1++;
            if (this.x1 > this.fromx) this.x1--;
            if (this.x2 < this.tox) this.x2++;
            if (this.x2 > this.tox) this.x2--;
            if (this.y1 < this.fromy) this.y1++;
            if (this.y1 > this.fromy) this.y1--;
            if (this.y2 < this.toy) this.y2++;
            if (this.y2 > this.toy) this.y2--;
            this.canvas_arrow();
          }
        }, {
          key: "soloPintar",
          value: function soloPintar() {
            this.x1 = this.fromx;
            this.x2 = this.tox;
            this.y1 = this.fromy;
            this.y2 = this.toy;
            this.canvas_arrow();
          }
        }]);

        return Flecha;
      }();
      /***/

    },

    /***/
    "IUSX":
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/lista-circular-simple.ts ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function IUSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ListaCircularSimple;
      });
      /* harmony import */


      var _nodo_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-simple */
      "pJ+W");

      var ListaCircularSimple = /*#__PURE__*/function () {
        function ListaCircularSimple() {
          _classCallCheck(this, ListaCircularSimple);

          this.inicio = null;
          this["final"] = null;
          this.longitud = 0;
        }

        _createClass(ListaCircularSimple, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.longitud == 0;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var array = new Array(this.longitud);
            var aux = this.inicio; // Recorre la lista hasta lleger al nodo anterior al eliminar.

            for (var i = 0; i < this.longitud; i++) {
              array[i] = aux.getData();
              aux = aux.getNext();
            }

            return array;
          }
        }, {
          key: "size",
          value: function size() {
            return this.longitud;
          }
        }, {
          key: "agregarAlInicio",
          value: function agregarAlInicio(data) {
            if (data) {
              var newNode = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);

              if (this.longitud == 0) {
                this["final"] = newNode;
                this.inicio = newNode;
                this["final"].setNext(this.inicio);
              } else {
                newNode.setNext(this.inicio);
                this.inicio = newNode;
                this["final"].setNext(this.inicio);
              }

              this.longitud += 1;
            }
          }
        }, {
          key: "agregarAlFinal",
          value: function agregarAlFinal(data) {
            if (data) {
              var newNode = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);

              if (this.longitud == 0) {
                this["final"] = newNode;
                this.inicio = newNode;
              } else {
                this["final"].setNext(newNode);
                this["final"] = newNode;
                this["final"].setNext(this.inicio);
              }

              this.longitud += 1;
            }
          }
        }, {
          key: "borrarAlInicio",
          value: function borrarAlInicio() {
            this.removeAt(0);
          }
        }, {
          key: "borrarAlFinal",
          value: function borrarAlFinal() {
            this.removeAt(this.longitud);
          }
        }, {
          key: "push",
          value: function push(data) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "pop",
          value: function pop() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "actualizar",
          value: function actualizar(posicion, newData) {
            // Verifica si la posición ingresada se encuentre en el rango
            // >= 0 y < que el numero de elementos del la lista.
            if (posicion >= 0 && posicion < this.longitud) {
              // Consulta si el nodo a eliminar es el primero.
              if (posicion == 0) {
                // Alctualiza el valor delprimer nodo.
                this.inicio.setData(newData);
              } else {
                // En caso que el nodo a eliminar este por el medio 
                // o sea el ultimo
                var aux = this.inicio; // Recorre la lista hasta lleger al nodo anterior al eliminar.

                for (var i = 0; i < posicion; i++) {
                  aux = aux.getNext();
                } // Alctualiza el valor del nodo.


                aux.setData(newData);
              }
            }
          }
        }, {
          key: "removeAt",
          value: function removeAt(posicion) {
            if (posicion >= 0 && posicion < this.longitud) {
              // Consulta si el nodo a eliminar es el primero
              if (posicion == 0) {
                // Elimina el primer nodo apuntando al siguinte.
                this.inicio = this.inicio.getNext(); // Apuntamos con el ultimo nodo de la lista al inicio.

                this["final"].setNext(this.inicio);
              } // En caso que el nodo a eliminar este por el medio 
              // o sea el ultimo
              else {
                  // Crea una copia de la lista.
                  var aux = this.inicio; // Recorre la lista hasta lleger al nodo anterior al eliminar.

                  for (var i = 0; i < posicion - 1; i++) {
                    aux = aux.getNext();
                  }

                  if (aux.getNext() == this["final"]) {
                    aux.setNext(this.inicio);
                    this["final"] = aux;
                  } else {
                    // Guarda el nodo siguiente del nodo a eliminar.
                    var siguiente = aux.getNext(); // Enlaza el nodo anterior al de eliminar con el 
                    // sguiente despues de el.

                    aux.setNext(siguiente.getNext()); // Actualizamos el puntero del ultimo nodo
                  }
                } // Disminuye el contador de tamaño de la lista.


              this.longitud--;
            }
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var node = this.inicio;

            for (var i = 0; i < this.size(); i++) {
              if (valor == node.getData()) {
                existeValor = true;
                break;
              }

              node = node.getNext();
            }

            return existeValor;
          }
        }]);

        return ListaCircularSimple;
      }();
      /***/

    },

    /***/
    "S0df":
    /*!**************************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/lista-circular-doble.ts ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function S0df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ListaCircularDoble;
      });
      /* harmony import */


      var _nodo_doble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-doble */
      "CU/q");

      var ListaCircularDoble = /*#__PURE__*/function () {
        function ListaCircularDoble() {
          _classCallCheck(this, ListaCircularDoble);

          this.inicio = null;
          this["final"] = null;
          this.longitud = 0;
        }

        _createClass(ListaCircularDoble, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.longitud == 0;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var array = new Array(this.longitud);
            var node = this.inicio; // 2. Avanza sucesivamente, obtén cada nodo

            for (var i = 0; i < array.length; i++) {
              array[i] = node.getData();
              node = node.getNext();
            }

            return array;
          }
        }, {
          key: "size",
          value: function size() {
            return this.longitud;
          }
        }, {
          key: "agregarAlInicio",
          value: function agregarAlInicio(data) {
            if (data) {
              var newNode = new _nodo_doble__WEBPACK_IMPORTED_MODULE_0__["default"](data);

              if (this.longitud == 0) {
                this["final"] = newNode;
                this.inicio = newNode;
              } else {
                newNode.setNext(this.inicio);
                this.inicio.setPrev(newNode);
                this.inicio = newNode;
              }

              this.longitud += 1;
            }
          }
        }, {
          key: "agregarAlFinal",
          value: function agregarAlFinal(data) {
            if (data) {
              var newNode = new _nodo_doble__WEBPACK_IMPORTED_MODULE_0__["default"](data);

              if (this.longitud == 0) {
                this["final"] = newNode;
                this.inicio = newNode;
              } else {
                newNode.setPrev(this["final"]);
                this["final"].setNext(newNode);
                this["final"] = newNode;
              }

              this.longitud += 1;
            }
          }
        }, {
          key: "borrarAlInicio",
          value: function borrarAlInicio() {
            this.removeAt(0);
          }
        }, {
          key: "borrarAlFinal",
          value: function borrarAlFinal() {
            this.removeAt(this.longitud);
          }
        }, {
          key: "push",
          value: function push(data) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "pop",
          value: function pop() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "actualizar",
          value: function actualizar(posicion, newData) {
            if (posicion < 0 || posicion >= this.longitud) {
              return false;
            }

            var current = this.inicio;
            var index = 0;

            if (this.longitud / 2 > posicion) {
              while (index++ < posicion) {
                current = current.getNext();
              }
            } else {
              current = this["final"];
              index = this.longitud - 1;

              while (index-- > posicion) {
                current = current.getPrev();
              }
            }

            current.setData(newData);
          }
        }, {
          key: "removeAt",
          value: function removeAt(position) {
            // 1. Juicio fuera de límites
            if (position < 0 || position >= this.longitud) {
              return null;
            } // 2. Eliminar nodo
            // Cuando length == 1 en la lista enlazada
            // Caso 1: solo hay un nodo en la lista vinculada


            var current = this.inicio; // Defina en la parte superior para facilitar las siguientes situaciones para devolver current.data

            if (this.longitud == 1) {
              this.inicio = null;
              this["final"] = null; // Cuando longitud> 1 en la lista enlazada
            } else {
              // Escenario 2: Eliminar el primer nodo
              if (position == 0) {
                this.inicio.getNext().setPrev(null);
                this.inicio = this.inicio.getNext(); // Caso 3: Eliminar el último nodo
              } else if (position == this.longitud - 1) {
                current = this["final"]; // Volver al último nodo eliminado en este caso

                this["final"].getPrev().setNext(null);
                this["final"] = this["final"].getPrev();
              } else {
                // Caso 4: Elimina el nodo en el medio de la lista vinculada
                var index = 0;

                while (index++ < position) {
                  current = current.getNext();
                }

                current.getNext().setPrev(current.getPrev());
                current.getPrev().setNext(current.getNext());
              }
            }

            this.longitud -= 1;
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var node = this.inicio;

            for (var i = 0; i < this.size(); i++) {
              if (valor == node.getData()) {
                existeValor = true;
                break;
              }

              node = node.getNext();
            }

            return existeValor;
          }
        }]);

        return ListaCircularDoble;
      }();
      /***/

    },

    /***/
    "Sbwb":
    /*!***************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/json-nodo.ts ***!
      \***************************************************************************/

    /*! exports provided: JsonNodo, JsonNodoPrioridad, JsonSalidaNodoPrioridad */

    /***/
    function Sbwb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonNodo", function () {
        return JsonNodo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonNodoPrioridad", function () {
        return JsonNodoPrioridad;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonSalidaNodoPrioridad", function () {
        return JsonSalidaNodoPrioridad;
      });

      var JsonNodo = function JsonNodo(categoria, nombre, valores) {
        _classCallCheck(this, JsonNodo);

        this.categoria = categoria;
        this.nombre = nombre;
        this.valores = valores;
      };

      var JsonNodoPrioridad = function JsonNodoPrioridad(categoria, nombre, valores) {
        _classCallCheck(this, JsonNodoPrioridad);

        this.categoria = categoria;
        this.nombre = nombre;
        this.valores = valores;
      };

      var JsonSalidaNodoPrioridad = function JsonSalidaNodoPrioridad(valor, prioridad) {
        _classCallCheck(this, JsonSalidaNodoPrioridad);

        this.valor = valor;
        this.prioridad = prioridad;
      };
      /***/

    },

    /***/
    "UaB2":
    /*!*********************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/listas-edd.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ListasEddComponent */

    /***/
    function UaB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListasEddComponent", function () {
        return ListasEddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_listas_edd_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./listas-edd.component.html */
      "eR48");
      /* harmony import */


      var _listas_edd_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./listas-edd.component.css */
      "xAnF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _impl_estructuras_lista_simple_enlaz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./impl-estructuras/lista-simple-enlaz */
      "uNu7");
      /* harmony import */


      var _impl_estructuras_pila__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./impl-estructuras/pila */
      "43WT");
      /* harmony import */


      var _impl_estructuras_cola__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./impl-estructuras/cola */
      "VNHY");
      /* harmony import */


      var _impl_estructuras_lista_doble_enlaz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./impl-estructuras/lista-doble-enlaz */
      "xMpy");
      /* harmony import */


      var _impl_estructuras_lista_circular_simple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./impl-estructuras/lista-circular-simple */
      "IUSX");
      /* harmony import */


      var _impl_estructuras_lista_circular_doble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./impl-estructuras/lista-circular-doble */
      "S0df");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../router.animations */
      "ZZ88");
      /* harmony import */


      var _impl_canvas_rectangulo_nodo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./impl-canvas/rectangulo-nodo */
      "1B6m");
      /* harmony import */


      var _impl_canvas_flecha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./impl-canvas/flecha */
      "Fzsf");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _impl_estructuras_json_nodo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./impl-estructuras/json-nodo */
      "Sbwb");
      /* harmony import */


      var _impl_canvas_flecha_compuesta__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./impl-canvas/flecha-compuesta */
      "cyAM");
      /* harmony import */


      var _impl_estructuras_cola_prioridad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./impl-estructuras/cola-prioridad */
      "qf1h");

      var ListasEddComponent = /*#__PURE__*/function () {
        //constructor(private ngZone: NgZone) { }
        function ListasEddComponent(route) {
          _classCallCheck(this, ListasEddComponent);

          this.route = route;
          this.idTipoLista = 0;
          this.showMessage = false;
          this.listaEnlArray = [];
          this.velocidadAnimacion = 10;
          this.rectangulosNodos = [];
          this.flechas = [];
          this.anchoNodo = 180;
          this.anchoNodoHead = 100;
          this.altoNodo = 30;
          this.anchoFlecha = 2;
          this.colorFlecha = 'cyan';
          this.colorFondoCanvas = 'black';
          this.fileContent = '';
          this.setting = {
            element: {
              dynamicDownload: null
            }
          };
        }

        _createClass(ListasEddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ctx = this.canvas.nativeElement.getContext('2d');
            this.paramsSubscription = this.route.params.subscribe(function (params) {
              _this.idTipoLista = +params['idTipoLista'];

              switch (_this.idTipoLista) {
                case 1:
                  _this.tituloLista = "Lista simple enlazada";
                  _this.lblBtnAgregar = "Agregar";
                  _this.lblBtnBorrar = "Borrar";
                  _this.listaEnlazada = new _impl_estructuras_lista_simple_enlaz__WEBPACK_IMPORTED_MODULE_5__["default"]();

                  _this.cambiarPagina();

                  break;

                case 2:
                  _this.tituloLista = "Lista doble enlazada";
                  _this.lblBtnAgregar = "Agregar";
                  _this.lblBtnBorrar = "Borrar";
                  _this.listaEnlazada = new _impl_estructuras_lista_doble_enlaz__WEBPACK_IMPORTED_MODULE_8__["default"]();

                  _this.cambiarPagina();

                  break;

                case 3:
                  _this.tituloLista = "Lista circular simplemente enlazada";
                  _this.lblBtnAgregar = "Agregar";
                  _this.lblBtnBorrar = "Borrar";
                  _this.listaEnlazada = new _impl_estructuras_lista_circular_simple__WEBPACK_IMPORTED_MODULE_9__["default"]();

                  _this.cambiarPagina();

                  break;

                case 4:
                  _this.tituloLista = "Lista circular doblemente enlazada";
                  _this.lblBtnAgregar = "Agregar";
                  _this.lblBtnBorrar = "Borrar";
                  _this.listaEnlazada = new _impl_estructuras_lista_circular_doble__WEBPACK_IMPORTED_MODULE_10__["default"]();

                  _this.cambiarPagina();

                  break;

                case 5:
                  _this.tituloLista = "Pila";
                  _this.lblBtnAgregar = "Push";
                  _this.lblBtnBorrar = "Pop";
                  _this.listaEnlazada = new _impl_estructuras_pila__WEBPACK_IMPORTED_MODULE_6__["default"]();

                  _this.cambiarPagina();

                  break;

                case 6:
                  _this.tituloLista = "Cola";
                  _this.lblBtnAgregar = "Encolar";
                  _this.lblBtnBorrar = "Descencolar";
                  _this.listaEnlazada = new _impl_estructuras_cola__WEBPACK_IMPORTED_MODULE_7__["default"]();

                  _this.cambiarPagina();

                  break;

                case 7:
                  _this.tituloLista = "Cola Prioridad";
                  _this.lblBtnAgregar = "Encolar";
                  _this.lblBtnBorrar = "Descencolar";
                  _this.listaEnlazada = new _impl_estructuras_cola_prioridad__WEBPACK_IMPORTED_MODULE_17__["default"]();

                  _this.cambiarPagina();

                  break;
              }
            });
            this.listaEnlJSon = "";
            this.radioData = 1;
            this.opcionOperar = 'Inicio';
            this.opcionRepeticiones = "true";
            this.esCarga = false;
          }
        }, {
          key: "cambiarPagina",
          value: function cambiarPagina() {
            this.borrarCanvas();
            this.rectangulosNodos = [];
            this.flechas = [];
            this.listaEnlJSon = '';
            this.valorIndiceActualizar = '';
            this.valorNodoActualizar = '';
            this.showMessage = false;
            this.opcionRepeticiones = "true";
          }
        }, {
          key: "borrarCanvas",
          value: function borrarCanvas() {
            this.ctx.fillStyle = this.colorFondoCanvas;
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.drawBorder();
            this.ctx.beginPath();
          }
        }, {
          key: "actualizarListaStr",
          value: function actualizarListaStr() {
            this.listaEnlArray = this.listaEnlazada.toArray();
            var i = 0;

            if (this.idTipoLista == 7) {
              var jsonNodoArray = new _impl_estructuras_json_nodo__WEBPACK_IMPORTED_MODULE_15__["JsonNodoPrioridad"]("Estructura Lineal", this.tituloLista, this.listaEnlazada.toArrayJson());
              this.listaEnlJSon = JSON.stringify(jsonNodoArray);
            } else {
              var _jsonNodoArray = new _impl_estructuras_json_nodo__WEBPACK_IMPORTED_MODULE_15__["JsonNodo"]("Estructura Lineal", this.tituloLista, this.listaEnlArray);

              this.listaEnlJSon = JSON.stringify(_jsonNodoArray);
            }
          }
        }, {
          key: "clickAgregarNodo",
          value: function clickAgregarNodo() {
            if (this.valorNodoInsertar != null && this.valorNodoInsertar != '') {
              this.agregarNodo(this.valorNodoInsertar, false);
              this.valorNodoInsertar = '';
              this.prioridad = '';
            }
          }
        }, {
          key: "agregarNodo",
          value: function agregarNodo(valorInsertar, esCarga) {
            var insertaValor = true;
            this.showMessage = false; //Si no es pila o cola, aplica si inserta al inicio o final

            if (this.idTipoLista >= 1 && this.idTipoLista <= 4) {
              if (this.opcionRepeticiones == "false") {
                if (this.listaEnlazada.buscar(valorInsertar)) {
                  this.showMessage = true;
                  insertaValor = false;
                }
              }

              if (insertaValor) {
                if (this.opcionOperar == 'Inicio') {
                  this.listaEnlazada.agregarAlInicio(valorInsertar);
                } else {
                  this.listaEnlazada.agregarAlFinal(valorInsertar);
                }
              }
            } //pila
            else if (this.idTipoLista == 5) {
                if (this.opcionRepeticiones == "false") {
                  if (this.listaEnlazada.buscar(valorInsertar)) {
                    this.showMessage = true;
                    insertaValor = false;
                  }
                }

                if (insertaValor) this.listaEnlazada.push(valorInsertar);
              } //cola
              else if (this.idTipoLista == 6) {
                  if (this.opcionRepeticiones == "false") {
                    if (this.listaEnlazada.buscar(valorInsertar)) {
                      this.showMessage = true;
                      insertaValor = false;
                    }
                  }

                  if (insertaValor) this.listaEnlazada.encolar(valorInsertar, this.opcionRepeticiones == "true");
                } //cola prioridad
                else if (this.idTipoLista == 7) {
                    if (this.opcionRepeticiones == "false") {
                      if (this.listaEnlazada.buscar(valorInsertar)) {
                        this.showMessage = true;
                        insertaValor = false;
                      }
                    }

                    if (this.prioridad != null && this.prioridad != '' && insertaValor) this.listaEnlazada.encolar(valorInsertar, this.prioridad);
                  }

            this.actualizarListaStr();
            if (!esCarga && insertaValor) this.pintarNodos();
          }
        }, {
          key: "clickActualizarNodo",
          value: function clickActualizarNodo() {
            this.listaEnlazada.actualizar(this.valorIndiceActualizar, this.valorNodoActualizar);
            this.actualizarListaStr();
            this.pintarNodos();
          }
        }, {
          key: "clickBorrarNodo",
          value: function clickBorrarNodo() {
            //Si no es pila o cola, aplica borrar al inicio o final
            if (this.idTipoLista >= 1 && this.idTipoLista <= 4) {
              if (this.opcionOperar == 'Inicio') {
                this.listaEnlazada.borrarAlInicio();
              } else {
                this.listaEnlazada.borrarAlFinal();
              }
            } else if (this.idTipoLista == 5) {
              this.listaEnlazada.pop();
            } else {
              this.listaEnlazada.desencolar();
            }

            this.actualizarListaStr();
            this.rectangulosNodos = [];
            this.flechas = [];
            this.pintarNodos();
          }
          /*Se borra canvas, se recorre lista dinamica pintando los nodos y flechas*/

        }, {
          key: "pintarNodos",
          value: function pintarNodos() {
            this.borrarCanvas();
            var x = 0,
                y = 1,
                i = 1;
            var nuevoNodo, tempNodo, primerNodo;
            var animar = true;
            this.flechas = []; //console.log('lenght:'+this.rectangulosNodos.length)

            if (this.rectangulosNodos.length > 0) animar = false;
            nuevoNodo = new _impl_canvas_rectangulo_nodo__WEBPACK_IMPORTED_MODULE_12__["RectanguloNodo"](this.ctx, 'Inicio', x, y, this.anchoNodoHead, this.altoNodo, false, animar);
            this.rectangulosNodos = this.rectangulosNodos.concat(nuevoNodo);
            y = 3;
            var posFlech = 'arriba';

            var _iterator = _createForOfIteratorHelper(this.listaEnlArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var valorStrNodo = _step.value;
                tempNodo = nuevoNodo;
                if (i == this.listaEnlArray.length) animar = true;else animar = false;
                nuevoNodo = new _impl_canvas_rectangulo_nodo__WEBPACK_IMPORTED_MODULE_12__["RectanguloNodo"](this.ctx, valorStrNodo, x, y, this.anchoNodo, this.altoNodo, this.idTipoLista == 2 || this.idTipoLista == 4, animar);
                this.rectangulosNodos = this.rectangulosNodos.concat(nuevoNodo);
                if (i == 1) primerNodo = nuevoNodo;

                if (tempNodo != null && nuevoNodo != null) {
                  var flecha1 = new _impl_canvas_flecha__WEBPACK_IMPORTED_MODULE_13__["Flecha"](this.ctx, tempNodo.xCola, tempNodo.yCola, nuevoNodo.xHead, nuevoNodo.yCola, this.anchoFlecha, this.colorFlecha, this.idTipoLista == 2 || this.idTipoLista == 4);
                  this.flechas = this.flechas.concat(flecha1); //flecha desde el último nodo hacia primer nodo

                  if (this.idTipoLista == 4 && i == this.listaEnlArray.length && i > 1) {
                    if (y == 3) {
                      var flecha3 = new _impl_canvas_flecha_compuesta__WEBPACK_IMPORTED_MODULE_16__["FlechaCompuesta"](this.ctx, nuevoNodo.xCola, nuevoNodo.yCola, primerNodo.xHead + 20, primerNodo.yCola, this.anchoFlecha, this.colorFlecha, posFlech);
                      this.flechas = this.flechas.concat(flecha3);
                    } else {
                      var _flecha = new _impl_canvas_flecha__WEBPACK_IMPORTED_MODULE_13__["Flecha"](this.ctx, nuevoNodo.xCola, nuevoNodo.yCola, primerNodo.xHead + 20, primerNodo.yCola, this.anchoFlecha, this.colorFlecha, false);

                      this.flechas = this.flechas.concat(_flecha);
                    }
                  }

                  tempNodo.drawText();
                  nuevoNodo.drawText();
                }

                x += 1.5;

                if (x * this.anchoNodo >= this.ctx.canvas.width - 100) {
                  y += 2;
                  x = 0;
                }

                i++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (this.esCarga == false) {
              this.iniciarAnimacion();
            }
          }
        }, {
          key: "iniciarAnimacion",
          value: function iniciarAnimacion() {
            var _this2 = this;

            if (this.interval != undefined) {
              clearInterval(this.interval);
            }

            if (this.requestId != undefined) cancelAnimationFrame(this.requestId);
            this.interval = setInterval(function () {
              _this2.borrarCanvas();

              _this2.tick();
            }, 10 - this.velocidadAnimacion);
          }
        }, {
          key: "tick",
          value: function tick() {
            var _this3 = this;

            this.borrarCanvas();
            this.rectangulosNodos.forEach(function (square) {
              square.animar();
            });
            this.dibujarFlechas();
            this.requestId = requestAnimationFrame(function () {
              return _this3.tick;
            });
          }
        }, {
          key: "dibujarFlechas",
          value: function dibujarFlechas() {
            if (this.idTipoLista >= 1 && this.idTipoLista <= 4) {
              for (var i = this.flechas.length - 1; i >= 0; i--) {
                if (i == 0) {
                  this.flechas[i].animar();
                } else {
                  this.flechas[i].soloPintar();
                }
              }
            } else {
              for (var _i = 0; _i < this.flechas.length; _i++) {
                if (_i == this.flechas.length - 1) {
                  this.flechas[_i].animar();
                } else {
                  this.flechas[_i].soloPintar();
                }
              }
            }

            this.ctx.stroke();
          }
        }, {
          key: "drawBorder",
          value: function drawBorder() {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.ctx.canvas.width, 0);
            this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.lineTo(0, this.ctx.canvas.height);
            this.ctx.lineTo(0, 0);
            this.ctx.strokeStyle = this.colorFlecha;
            this.ctx.stroke();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.interval);
            cancelAnimationFrame(this.requestId);
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

            if (this.strCarga != null && this.strCarga != undefined && this.strCarga.length > 0) {
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

              var _iterator2 = _createForOfIteratorHelper(strIntoObj.valores),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var valorStrNodo = _step2.value;

                  if (this.idTipoLista == 7) {
                    this.prioridad = valorStrNodo.prioridad;
                    this.agregarNodo(valorStrNodo.valor, true);
                  } else this.agregarNodo(valorStrNodo, true);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.esCarga = true;
              this.pintarNodos();
              this.iniciarAnimacion();
            }
          }
        }, {
          key: "downloadJson",
          value: function downloadJson() {
            var _this4 = this;

            this.fakeValidateUserData().subscribe(function (res) {
              _this4.dyanmicDownloadByHtmlTag({
                fileName: _this4.tituloLista + '.json',
                text: res
              });
            });
          }
        }, {
          key: "fakeValidateUserData",
          value: function fakeValidateUserData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(this.listaEnlJSon);
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

        return ListasEddComponent;
      }();

      ListasEddComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      ListasEddComponent.propDecorators = {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['canvas', {
            "static": true
          }]
        }]
      };
      ListasEddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listas-edd',
        template: _raw_loader_listas_edd_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_11__["routerTransition"])()],
        styles: [_listas_edd_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], ListasEddComponent);
      /***/
    },

    /***/
    "VNHY":
    /*!**********************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/cola.ts ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function VNHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return Cola;
      });
      /* harmony import */


      var _nodo_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-simple */
      "pJ+W");

      var Cola = /*#__PURE__*/function () {
        function Cola() {
          _classCallCheck(this, Cola);

          this.longitud = 0;
        }

        _createClass(Cola, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.longitud == 0;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var colaArray = new Array(this.longitud);
            var aux = this.inicio;
            var i = 0;

            while (aux != null) {
              colaArray[i] = aux.getData();
              i++;
              aux = aux.getNext();
            }

            return colaArray;
          }
        }, {
          key: "size",
          value: function size() {
            return this.longitud;
          }
        }, {
          key: "encolar",
          value: function encolar(data) {
            var nuevo = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);

            if (this.longitud == 0) {
              this.inicio = nuevo;
            } else {
              var aux = this.inicio;

              while (aux.getNext() != null) {
                aux = aux.getNext();
              }

              aux.setNext(nuevo);
            }

            this.longitud++;
          }
        }, {
          key: "desencolar",
          value: function desencolar() {
            var nodo = null;

            if (this.longitud > 0) {
              nodo = this.inicio;
              this.inicio = this.inicio.getNext();
              this.longitud--;
            }

            return nodo;
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var aux = this.inicio;

            while (aux != null && !existeValor) {
              if (aux.getData() == valor) {
                return true;
              }

              aux = aux.getNext();
            }

            return existeValor;
          }
        }]);

        return Cola;
      }();
      /***/

    },

    /***/
    "cQLq":
    /*!******************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/listas-edd.module.ts ***!
      \******************************************************************/

    /*! exports provided: ListasEddModule */

    /***/
    function cQLq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListasEddModule", function () {
        return ListasEddModule;
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
      /*! ../../shared */
      "M0ag");
      /* harmony import */


      var _listas_edd_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./listas-edd-routing.module */
      "f8rn");
      /* harmony import */


      var _listas_edd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listas-edd.component */
      "UaB2");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ListasEddModule = function ListasEddModule() {
        _classCallCheck(this, ListasEddModule);
      };

      ListasEddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _listas_edd_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListasEddRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_listas_edd_component__WEBPACK_IMPORTED_MODULE_5__["ListasEddComponent"]]
      })], ListasEddModule);
      /***/
    },

    /***/
    "cyAM":
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-canvas/flecha-compuesta.ts ***!
      \*****************************************************************************/

    /*! exports provided: FlechaCompuesta */

    /***/
    function cyAM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlechaCompuesta", function () {
        return FlechaCompuesta;
      });

      var FlechaCompuesta = /*#__PURE__*/function () {
        function FlechaCompuesta(ctx, fromx, fromy, tox, toy, anchoLinea, colorFlecha, posicionFlecha) {
          _classCallCheck(this, FlechaCompuesta);

          this.ctx = ctx;
          this.fromx = fromx;
          this.fromy = fromy;
          this.tox = tox;
          this.toy = toy;
          this.anchoLinea = anchoLinea;
          this.colorFlecha = colorFlecha;
          this.posicionFlecha = posicionFlecha;
          this.x1 = 0;
          this.x2 = 0;
          this.y1 = 0;
          this.y2 = 0;
          this.x1 = fromx;
          this.x2 = tox;
          this.y1 = fromy;
          this.y1 = toy;
          fromx = 50;
          fromy = 100;
          tox = 50, fromy = 100;
          this.lines();
          this.canvas_arrow();
        }

        _createClass(FlechaCompuesta, [{
          key: "animar",
          value: function animar() {
            if (this.fromx < this.x1) this.fromx++;else if (this.fromx > this.x1) this.fromx--;
            if (this.tox < this.x2) this.tox++;else if (this.tox > this.x2) this.tox--;
            this.lines();
            this.canvas_arrow();
          }
        }, {
          key: "soloPintar",
          value: function soloPintar() {
            this.fromx = this.x1;
            this.tox = this.x2;
            this.fromy = this.y1;
            this.toy = this.y2;
            this.lines();
            this.canvas_arrow();
          }
        }, {
          key: "lines",
          value: function lines() {
            if (this.posicionFlecha == 'arriba') {
              this.ctx.moveTo(this.fromx, this.fromy);
              this.ctx.lineTo(this.fromx, this.fromy - 20);
              this.ctx.lineTo(this.tox, this.fromy - 20);
              this.ctx.lineTo(this.tox, this.fromy);
            } else {
              this.ctx.moveTo(this.fromx, this.fromy);
              this.ctx.lineTo(this.fromx, this.fromy + 20);
              this.ctx.lineTo(this.tox, this.fromy + 20);
              this.ctx.lineTo(this.tox, this.fromy);
            }
          }
        }, {
          key: "canvas_arrow",
          value: function canvas_arrow() {
            var dx = this.tox - this.fromx;
            var dy = this.toy - this.fromy;

            if (this.posicionFlecha == 'arriba') {
              this.ctx.moveTo(this.tox, this.toy);
              this.ctx.lineTo(this.tox - 5, this.toy - 5);
              this.ctx.moveTo(this.tox, this.toy);
              this.ctx.lineTo(this.tox + 5, this.toy - 5);
              this.ctx.strokeStyle = this.colorFlecha;
              this.ctx.lineWidth = this.anchoLinea;
              this.ctx.stroke();
            } else {
              this.ctx.moveTo(this.tox, this.toy);
              this.ctx.lineTo(this.tox - 5, this.toy + 5);
              this.ctx.moveTo(this.tox, this.toy);
              this.ctx.lineTo(this.tox + 5, this.toy + 5);
              this.ctx.strokeStyle = this.colorFlecha;
              this.ctx.lineWidth = this.anchoLinea;
              this.ctx.stroke();
            }
          }
        }]);

        return FlechaCompuesta;
      }();
      /***/

    },

    /***/
    "eR48":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/estructuras-lineales/listas-edd.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eR48(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n    <h4>{{tituloLista}}</h4>\r\n    <p *ngIf=\"showMessage\">Se encontraron valores repetidos al insertar valores a la lista</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    <input class=\"form-control\" placeholder=\"Ingresar valor\" [(ngModel)]=\"valorNodoInsertar\" />\r\n                    <input class=\"form-control\" placeholder=\"Prioridad\" [(ngModel)]=\"prioridad\" *ngIf=\"idTipoLista==7\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <div class=\"card-body align-items-center\" >\r\n                    <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"clickAgregarNodo()\">{{lblBtnAgregar}}</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"clickBorrarNodo()\">{{lblBtnBorrar}}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n            <div class=\"card mb-3 text-center my-auto\" *ngIf=\"!(idTipoLista>=5)\">\r\n                <input class=\"form-control\" placeholder=\"Indice 0..n\" [(ngModel)]=\"valorIndiceActualizar\" />\r\n                <input class=\"form-control\" placeholder=\"Valor a actualizar\" [(ngModel)]=\"valorNodoActualizar\" />\r\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"clickActualizarNodo()\">Actualizar</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\" >\r\n                    <label *ngIf=\"!(idTipoLista>=5)\">Operar al: </label>\r\n                    <mat-radio-group aria-label=\"Select an option\" class=\"example-radio-group\"\r\n                    [(ngModel)]=\"opcionOperar\" *ngIf=\"!(idTipoLista>=5)\" >\r\n                        <mat-radio-button value=\"Inicio\" disabled=\"{{idTipoLista==5||idTipoLista==6}}\">Inicio</mat-radio-button>\r\n                        <mat-radio-button value=\"Fin\" disabled=\"{{idTipoLista==5||idTipoLista==6}}\">Fin</mat-radio-button>\r\n                    </mat-radio-group><br/>\r\n                    <label for=\"seleccionRepeticiones\">Repeticiones: </label>\r\n                    <mat-radio-group id=\"seleccionRepeticiones\" aria-label=\"Select an option\" class=\"example-radio-group\"\r\n                        [(ngModel)]=\"opcionRepeticiones\" >\r\n                        <mat-radio-button value=\"true\">true</mat-radio-button>\r\n                        <mat-radio-button value=\"false\">false</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <small><label for=\"customRange2\" class=\"form-label\">Velocidad animacion: {{velocidadAnimacion}}</label></small>\r\n                <input type=\"range\" class=\"form-range\" min=\"0\" max=\"10\" id=\"customRange2\" [(ngModel)]=\"velocidadAnimacion\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    <!--<textarea class=\"form-control\" rows=\"3\"></textarea>-->\r\n                    <canvas #canvas width=\"1020\" height=\"1000\"></canvas>\r\n                    <!--<button (click)=\"play()\">Play</button>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <fieldset class=\"form-group\">\r\n                <small><label>JSON a cargar &#123;\"categoria\":\"Estructura Lineal\",\"nombre\":\"{{tituloLista}}\",\"animacion\":\"5\",\"valores\":[\"n1\",\"n2\",..]&#125;</label></small>\r\n                <textarea class=\"form-control\" rows=\"2\">{{fileContent}}</textarea>\r\n                <input type=\"file\" (change)=\"cargarArchivo($event.target.files)\">\r\n                <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"clickCargar()\">Cargar a lista dinamica</button>\r\n            </fieldset>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <fieldset class=\"form-group\">\r\n                <label>JSON salida</label>\r\n                <textarea class=\"form-control\" rows=\"2\">{{listaEnlJSon}}</textarea>\r\n                <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"downloadJson()\">Guardar</button>\r\n            </fieldset>\r\n        </div>\r\n    </div>   \r\n</div>";
      /***/
    },

    /***/
    "f8rn":
    /*!**************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/listas-edd-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ListasEddRoutingModule */

    /***/
    function f8rn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListasEddRoutingModule", function () {
        return ListasEddRoutingModule;
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


      var _listas_edd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listas-edd.component */
      "UaB2");

      var routes = [{
        path: '',
        component: _listas_edd_component__WEBPACK_IMPORTED_MODULE_3__["ListasEddComponent"]
      }];

      var ListasEddRoutingModule = function ListasEddRoutingModule() {
        _classCallCheck(this, ListasEddRoutingModule);
      };

      ListasEddRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListasEddRoutingModule);
      /***/
    },

    /***/
    "pJ+W":
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/nodo-simple.ts ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function pJW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return NodoSimple;
      });

      var NodoSimple = /*#__PURE__*/function () {
        function NodoSimple(data) {
          _classCallCheck(this, NodoSimple);

          this.data = data;
          this.next = null;
        }

        _createClass(NodoSimple, [{
          key: "getNext",
          value: function getNext() {
            return this.next;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "getPrioridad",
          value: function getPrioridad() {
            return this.prioridad;
          }
        }, {
          key: "setPrioridad",
          value: function setPrioridad(prioridad) {
            this.prioridad = prioridad;
          }
        }, {
          key: "setNext",
          value: function setNext(next) {
            this.next = next;
          }
        }, {
          key: "setData",
          value: function setData(data) {
            this.data = data;
          }
        }]);

        return NodoSimple;
      }();
      /***/

    },

    /***/
    "qf1h":
    /*!********************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/cola-prioridad.ts ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function qf1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ColaPrioridad;
      });
      /* harmony import */


      var _nodo_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-simple */
      "pJ+W");
      /* harmony import */


      var _json_nodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./json-nodo */
      "Sbwb");

      var ColaPrioridad = /*#__PURE__*/function () {
        function ColaPrioridad() {
          _classCallCheck(this, ColaPrioridad);

          this.longitud = 0;
          this.colaPrioridad = null;
        }

        _createClass(ColaPrioridad, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.longitud == 0;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var colaArray = new Array(this.longitud);
            var aux = this.colaPrioridad;
            var i = 0;

            while (i < this.longitud) {
              colaArray[i] = aux.getData();
              i++;
              aux = aux.getNext();
            }

            return colaArray;
          }
        }, {
          key: "toArrayJson",
          value: function toArrayJson() {
            var colaArray = new Array(this.longitud);
            var aux = this.colaPrioridad;
            var i = 0;

            while (i < this.longitud) {
              colaArray[i] = new _json_nodo__WEBPACK_IMPORTED_MODULE_1__["JsonSalidaNodoPrioridad"](aux.getData(), aux.getPrioridad());
              i++;
              aux = aux.getNext();
            }

            return colaArray;
          }
        }, {
          key: "size",
          value: function size() {
            return this.longitud;
          }
        }, {
          key: "encolar",
          value: function encolar(data, prioridad) {
            var nuevoNodo;
            nuevoNodo = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);
            nuevoNodo.setPrioridad(prioridad);

            if (this.longitud == 0) {
              this.colaPrioridad = nuevoNodo;
            } else {
              var flag = false;
              var aux = this.colaPrioridad;
              var previo = this.colaPrioridad; //busca en la cola si la prioridad del nodo nuevo es menor a una existente 

              for (var i = 0; i < this.longitud; i++) {
                if (nuevoNodo.getPrioridad() < aux.getPrioridad()) {
                  previo.setNext(nuevoNodo);
                  nuevoNodo.setNext(aux);
                  flag = true;
                  break;
                }

                previo = aux;
                aux = aux.getNext();
              } //si no encuentra, insertar al final de la cola


              if (!flag) {
                var _aux = this.colaPrioridad;

                while (_aux.getNext() != null) {
                  _aux = _aux.getNext();
                }

                _aux.setNext(nuevoNodo);
              }
            }

            this.longitud++;
          }
        }, {
          key: "desencolar",
          value: function desencolar() {
            var nodo = null;

            if (this.longitud > 0) {
              nodo = this.colaPrioridad;
              this.colaPrioridad = this.colaPrioridad.getNext();
              this.longitud--;
            }

            return nodo;
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var aux = this.colaPrioridad;

            while (aux != null && !existeValor) {
              if (aux.getData() == valor) {
                return true;
              }

              aux = aux.getNext();
            }

            return existeValor;
          }
        }, {
          key: "peek",
          value: function peek() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "actualizar",
          value: function actualizar(posicion, newData) {
            throw new Error("Method not implemented.");
          }
        }]);

        return ColaPrioridad;
      }();
      /***/

    },

    /***/
    "uNu7":
    /*!************************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/lista-simple-enlaz.ts ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function uNu7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ListaSimpleEnlazada;
      });
      /* harmony import */


      var _nodo_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-simple */
      "pJ+W");

      var ListaSimpleEnlazada = /*#__PURE__*/function () {
        function ListaSimpleEnlazada() {
          _classCallCheck(this, ListaSimpleEnlazada);

          this.inicio = null;
        }

        _createClass(ListaSimpleEnlazada, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.inicio === null;
          }
        }, {
          key: "size",
          value: function size() {
            if (this.estaVacia()) {
              return 0;
            } else {
              var i = 0;
              var aux = this.inicio;

              while (aux) {
                i++;
                aux = aux.getNext();
              }

              return i;
            }
          }
        }, {
          key: "agregarAlInicio",
          value: function agregarAlInicio(data) {
            if (data) {
              if (this.estaVacia()) {
                this.inicio = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);
              } else {
                var node = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);
                node.setNext(this.inicio);
                this.inicio = node;
              }
            } else {
              throw new Error("El parametro data no puede ser null o undefined");
            }
          }
        }, {
          key: "agregarAlFinal",
          value: function agregarAlFinal(data) {
            if (data) {
              if (this.estaVacia()) {
                this.inicio = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);
              } else {
                var aux = this.inicio;

                while (aux.getNext()) {
                  aux = aux.getNext();
                }

                aux.setNext(new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data));
              }
            } else {
              throw new Error("El parametro data no puede ser null o undefined");
            }
          }
        }, {
          key: "agregarEnIndice",
          value: function agregarEnIndice(data, i) {
            if (data && i) {
              if (this.estaVacia() || i === 0) {
                this.agregarAlInicio(data);
              } else if (i === this.size() - 1) {
                this.agregarAlFinal(data);
              } else if (i > this.size()) {
                throw new Error("El parametro indice (i) no puede ser más grande que el tamaño de la lista");
              } else if (i < 0) {
                this.agregarEnIndice(data, this.size() + i);
              } else {
                var j = 0;
                var aux = this.inicio;
                var node = new _nodo_simple__WEBPACK_IMPORTED_MODULE_0__["default"](data);

                while (i < j) {
                  aux = aux.getNext();
                  j++;
                }

                node.setNext(aux.getNext());
                aux.setNext(node);
              }
            } else if (data) {
              throw new Error("El parametro indice (i) no puede ser null o undefined");
            } else if (i) {
              throw new Error("El parametro data no puede ser null o undefined");
            } else {
              throw new Error("Los dos parametros no pueden ser null o undefined");
            }
          }
        }, {
          key: "borrarAlInicio",
          value: function borrarAlInicio() {
            if (this.estaVacia()) {
              return null;
            } else {
              var temp = this.inicio;
              this.inicio = this.inicio.getNext();
              temp.setNext(null);
              return temp.getData();
            }
          }
        }, {
          key: "borrarAlFinal",
          value: function borrarAlFinal() {
            if (this.estaVacia()) {
              return null;
            } else {
              var aux = this.inicio;

              while (aux.getNext().getNext()) {
                aux = aux.getNext();
              }

              var temp = aux.getNext();
              aux.setNext(null);
              return temp.getData();
            }
          }
        }, {
          key: "borrarEnIndice",
          value: function borrarEnIndice(i) {
            if (i) {
              if (this.estaVacia() || i === 0) {
                return this.borrarAlInicio();
              } else if (i === this.size() - 1) {
                return this.borrarAlFinal();
              } else if (i > this.size()) {
                throw new Error("El parametro indice (i) no puede ser más grande que el tamaño de la lista");
              } else if (i < 0) {
                return this.borrarEnIndice(this.size() + i);
              } else {
                var j = 0;
                var aux = this.inicio;

                while (i < j) {
                  aux = aux.getNext();
                  j++;
                }

                var temp = aux.getNext();
                aux.setNext(aux.getNext().getNext());
                temp.setNext(null);
                return temp.getData();
              }
            } else {
              throw new Error("El parametro indice (i) no puede ser null o undefined");
            }
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var node = this.inicio;
            var array = new Array(this.size());

            for (var i = 0; i < array.length; i++) {
              array[i] = node.getData();
              node = node.getNext();
            }

            return array;
          }
        }, {
          key: "forEach",
          value: function forEach(cb) {
            var list = this;
            var size = this.size();
            var node = this.inicio;

            for (var i = 0; i < size; i++) {
              cb(node.getData(), i, list);
              node = node.getNext();
            }
          }
        }, {
          key: "push",
          value: function push(data) {}
        }, {
          key: "pop",
          value: function pop() {}
        }, {
          key: "actualizar",
          value: function actualizar(posicion, newData) {
            if (posicion < 0 || posicion >= this.size()) {
              return false;
            }

            var current = this.inicio;
            var index = 0;

            while (index++ < posicion) {
              current = current.getNext();
            }

            current.setData(newData);
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var node = this.inicio;

            for (var i = 0; i < this.size(); i++) {
              if (valor == node.getData()) {
                existeValor = true;
                break;
              }

              node = node.getNext();
            }

            return existeValor;
          }
        }]);

        return ListaSimpleEnlazada;
      }();
      /***/

    },

    /***/
    "xAnF":
    /*!**********************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/listas-edd.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function xAnF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".lb-sm {\r\n    font-size: 12px;\r\n  }\r\n  textarea { font-size: 12px; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhcy1lZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7RUFDakI7RUFDQSxXQUFXLGVBQWUsRUFBRSIsImZpbGUiOiJsaXN0YXMtZWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGItc20ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICB0ZXh0YXJlYSB7IGZvbnQtc2l6ZTogMTJweDsgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "xMpy":
    /*!***********************************************************************************!*\
      !*** ./src/app/layout/estructuras-lineales/impl-estructuras/lista-doble-enlaz.ts ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function xMpy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return ListaDobleEnlazada;
      });
      /* harmony import */


      var _nodo_doble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nodo-doble */
      "CU/q");

      var ListaDobleEnlazada = /*#__PURE__*/function () {
        function ListaDobleEnlazada() {
          _classCallCheck(this, ListaDobleEnlazada);

          this.inicio = null;
          this["final"] = null;
          this.longitud = 0;
        }

        _createClass(ListaDobleEnlazada, [{
          key: "estaVacia",
          value: function estaVacia() {
            return this.longitud == 0;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var array = new Array(this.longitud);
            var node = this.inicio; // 2. Avanza sucesivamente, obtén cada nodo

            for (var i = 0; i < array.length; i++) {
              array[i] = node.getData();
              node = node.getNext();
            }

            return array;
          }
        }, {
          key: "size",
          value: function size() {
            return this.longitud;
          }
        }, {
          key: "agregarAlInicio",
          value: function agregarAlInicio(data) {
            if (data) {
              var newNode = new _nodo_doble__WEBPACK_IMPORTED_MODULE_0__["default"](data);

              if (this.longitud == 0) {
                this["final"] = newNode;
                this.inicio = newNode;
              } else {
                newNode.setNext(this.inicio);
                this.inicio.setPrev(newNode);
                this.inicio = newNode;
              }

              this.longitud += 1;
            }
          }
        }, {
          key: "agregarAlFinal",
          value: function agregarAlFinal(data) {
            if (data) {
              var newNode = new _nodo_doble__WEBPACK_IMPORTED_MODULE_0__["default"](data);

              if (this.longitud == 0) {
                this["final"] = newNode;
                this.inicio = newNode;
              } else {
                newNode.setPrev(this["final"]);
                this["final"].setNext(newNode);
                this["final"] = newNode;
              }

              this.longitud += 1;
            }
          }
        }, {
          key: "borrarAlInicio",
          value: function borrarAlInicio() {
            this.removeAt(0);
          }
        }, {
          key: "borrarAlFinal",
          value: function borrarAlFinal() {
            this.removeAt(this.longitud);
          }
        }, {
          key: "push",
          value: function push(data) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "pop",
          value: function pop() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "actualizar",
          value: function actualizar(posicion, newData) {
            if (posicion < 0 || posicion >= this.longitud) {
              return false;
            }

            var current = this.inicio;
            var index = 0;

            if (this.longitud / 2 > posicion) {
              while (index++ < posicion) {
                current = current.getNext();
              }
            } else {
              current = this["final"];
              index = this.longitud - 1;

              while (index-- > posicion) {
                current = current.getPrev();
              }
            }

            current.setData(newData);
          }
        }, {
          key: "removeAt",
          value: function removeAt(position) {
            // 1. Juicio fuera de límites
            if (position < 0 || position >= this.longitud) {
              return null;
            } // 2. Eliminar nodo
            // Cuando length == 1 en la lista enlazada
            // Caso 1: solo hay un nodo en la lista vinculada


            var current = this.inicio; // Defina en la parte superior para facilitar las siguientes situaciones para devolver current.data

            if (this.longitud == 1) {
              this.inicio = null;
              this["final"] = null; // Cuando longitud> 1 en la lista enlazada
            } else {
              // Escenario 2: Eliminar el primer nodo
              if (position == 0) {
                this.inicio.getNext().setPrev(null);
                this.inicio = this.inicio.getNext(); // Caso 3: Eliminar el último nodo
              } else if (position == this.longitud - 1) {
                current = this["final"]; // Volver al último nodo eliminado en este caso

                this["final"].getPrev().setNext(null);
                this["final"] = this["final"].getPrev();
              } else {
                // Caso 4: Elimina el nodo en el medio de la lista vinculada
                var index = 0;

                while (index++ < position) {
                  current = current.getNext();
                }

                current.getNext().setPrev(current.getPrev());
                current.getPrev().setNext(current.getNext());
              }
            }

            this.longitud -= 1;
          }
        }, {
          key: "buscar",
          value: function buscar(valor) {
            var existeValor = false;
            var node = this.inicio;

            for (var i = 0; i < this.size(); i++) {
              if (valor == node.getData()) {
                existeValor = true;
                break;
              }

              node = node.getNext();
            }

            return existeValor;
          }
        }]);

        return ListaDobleEnlazada;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=estructuras-lineales-listas-edd-module-es5.js.map