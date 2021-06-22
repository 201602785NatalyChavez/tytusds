(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estructuras-arboreas-merkle-merkle-module"], {
    /***/
    "71BD":
    /*!************************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/merkle.component.ts ***!
      \************************************************************************/

    /*! exports provided: MerkleComponent */

    /***/
    function BD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerkleComponent", function () {
        return MerkleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_merkle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./merkle.component.html */
      "bCFG");
      /* harmony import */


      var _merkle_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./merkle.component.css */
      "s5Bh");
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
      "QM8u");

      var MerkleComponent = /*#__PURE__*/function () {
        function MerkleComponent() {
          _classCallCheck(this, MerkleComponent);

          this.bst = new _clase_arbol__WEBPACK_IMPORTED_MODULE_5__["Merkle"]();
          this.x = '';
          this.valores = 0;
          this.fileContent = '';
          this.setting = {
            element: {
              dynamicDownload: null
            }
          };
        }

        _createClass(MerkleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Insertar",
          value: function Insertar() {
            if (this.x.charCodeAt(0) == 8) {
              console.log("No hay nada");
            } else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
              this.bst.add(parseInt(this.x));
              this.valores += 1;
            } else {
              this.bst.string = true;
              this.bst.add(this.x);
              this.bst.string = false;
              this.valores += 1;
            }

            this.x = '';
            console.log("----------------------");
            this.x = null;
            this.visit();
            console.log("TOPHASH", this.bst.tophash);
            this.listaEnlJSon = JSON.stringify(this.bst);
          }
        }, {
          key: "visit",
          value: function visit() {
            if (this.valores % 2 == 0) {
              this.drawSvgNetwork();
              var treeData = this.getTreeData();
              this.loadVisTree(treeData);
            }
          }
        }, {
          key: "loadVisTree",
          value: function loadVisTree(treedata) {
            var options = {
              nodes: {
                widthConstraint: 80
              },
              layout: {
                hierarchical: {
                  parentCentralization: true,
                  direction: 'DU',
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
            this.bst.auth();
            this.bst.dot = '{node [shape=box];';
            this.bst.dotgen(this.bst.tophash);
            this.bst.dot += '}';
            var DOTstring = this.bst.dot;
            var parsedData = vis.parseDOTNetwork(DOTstring);
            console.log("DOT", this.bst.dot);
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
            nodes = [];
            edges = [];
            var data = {
              nodes: nodes,
              edges: edges
            };
            var options = {
              nodes: {
                widthConstraint: 80
              },
              layout: {
                hierarchical: {
                  parentCentralization: true,
                  direction: 'DU',
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
                this.bst.add(valorStrNodo);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.visit();
          }
        }, {
          key: "downloadJson",
          value: function downloadJson() {
            var _this = this;

            this.fakeValidateUserData().subscribe(function (res) {
              _this.dyanmicDownloadByHtmlTag({
                fileName: 'Merkle.json',
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

        return MerkleComponent;
      }();

      MerkleComponent.ctorParameters = function () {
        return [];
      };

      MerkleComponent.propDecorators = {
        networkContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["siteConfigNetwork"]
        }]
      };
      MerkleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-merkle',
        template: _raw_loader_merkle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_merkle_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MerkleComponent);
      /***/
    },

    /***/
    "QM8u":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/clase-arbol.ts ***!
      \*******************************************************************/

    /*! exports provided: Merkle */

    /***/
    function QM8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Merkle", function () {
        return Merkle;
      });
      /* harmony import */


      var _hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hash */
      "vWGc");
      /* harmony import */


      var _nodo_merkle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nodo-merkle */
      "nCog");

      var Merkle = /*#__PURE__*/function () {
        function Merkle() {
          _classCallCheck(this, Merkle);

          this.tophash = null;
          this.datablock = [];
          this.dot = '';
          this.index = 0;
          this.string = false;
        }

        _createClass(Merkle, [{
          key: "add",
          value: function add(value) {
            this.datablock.push(new _nodo_merkle__WEBPACK_IMPORTED_MODULE_1__["DataNode"](value));
          }
        }, {
          key: "createTree",
          value: function createTree(exp) {
            this.tophash = new _hash__WEBPACK_IMPORTED_MODULE_0__["HashNode"](0);

            this._createTree(this.tophash, exp);
          }
        }, {
          key: "_createTree",
          value: function _createTree(tmp, exp) {
            if (exp > 0) {
              tmp.left = new _hash__WEBPACK_IMPORTED_MODULE_0__["HashNode"](0);
              tmp.right = new _hash__WEBPACK_IMPORTED_MODULE_0__["HashNode"](0);

              this._createTree(tmp.left, exp - 1);

              this._createTree(tmp.right, exp - 1);
            }
          }
        }, {
          key: "genHash",
          value: function genHash(tmp, n) {
            if (tmp != null) {
              this.genHash(tmp.left, n);
              this.genHash(tmp.right, n);

              if (tmp.left == null && tmp.right == null) {
                tmp.left = this.datablock[n - this.index--];
                var array = new Uint32Array(1);
                window.crypto.getRandomValues(array);
                tmp.hash = array[0];
              } else {
                tmp.hash = (parseInt(tmp.left.hash, 16) + parseInt(tmp.right.hash, 16)).toString(16);
              }
            }
          }
        }, {
          key: "preorder",
          value: function preorder(tmp) {
            if (tmp != null) {
              if (tmp instanceof _nodo_merkle__WEBPACK_IMPORTED_MODULE_1__["DataNode"]) {
                console.log(tmp.value);
              } else {
                console.log(tmp.value);
              }

              this.preorder(tmp.left);
              this.preorder(tmp.right);
            }
          }
        }, {
          key: "auth",
          value: function auth() {
            var exp = 1;

            while (Math.pow(2, exp) < this.datablock.length) {
              exp += 1;
            }

            for (var i = this.datablock.length; i < Math.pow(2, exp); i++) {
              this.datablock.push(new _nodo_merkle__WEBPACK_IMPORTED_MODULE_1__["DataNode"](i * 100));
            }

            this.index = Math.pow(2, exp);
            this.createTree(exp);
            this.genHash(this.tophash, Math.pow(2, exp));
            this.preorder(this.tophash);
          }
        }, {
          key: "show",
          value: function show() {
            this.datablock.forEach(function (element) {
              return document.getElementById("log").innerHTML += element.value + ' ';
            });
          }
        }, {
          key: "dotgen",
          value: function dotgen(tmp) {
            if (tmp != null) {
              if (tmp.left != null) {
                if (tmp.left instanceof _nodo_merkle__WEBPACK_IMPORTED_MODULE_1__["DataNode"]) {
                  this.dot += '"' + tmp.left.value + '" [color=gray] -> "0x' + tmp.hash + '";';
                }
              }

              if (tmp.left instanceof _hash__WEBPACK_IMPORTED_MODULE_0__["HashNode"]) {
                if (tmp.left != null) this.dot += '"0x' + tmp.left.hash + '" -> "0x' + tmp.hash + '";';
                if (tmp.right != null) this.dot += '"0x' + tmp.right.hash + '" -> "0x' + tmp.hash + '";';
              }

              this.dotgen(tmp.left);
              this.dotgen(tmp.right);
            }
          }
        }]);

        return Merkle;
      }();
      /***/

    },

    /***/
    "bCFG":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/estructuras-arboreas/merkle/merkle.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bCFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div >\r\n    <h4>Merkle</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    <input class=\"form-control\" placeholder=\"Ingresar nuevo valor\" [(ngModel)]=\"x\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <div class=\"card-body align-items-center\" >\r\n                    <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"Insertar()\">Agregar</button>\r\n                </div>\r\n            </div>\r\n        </div>      \r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <fieldset class=\"form-group\">\r\n               <input type=\"file\" (change)=\"cargarArchivo($event.target.files)\">\r\n                <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"clickCargar()\">Cargar a lista dinamica</button>\r\n            </fieldset>\r\n        </div>\r\n    </div>   \r\n    <br>\r\n    <div id=\"mynetwork\" #siteConfigNetwork></div>\r\n    <div class=\"col-xl-6 text-xs-center\">\r\n        <fieldset class=\"form-group\">\r\n            <label>JSON salida</label>\r\n            <textarea class=\"form-control\" rows=\"2\">{{listaEnlJSon}}</textarea>\r\n            <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"downloadJson()\">Guardar</button>\r\n        </fieldset>\r\n    </div>\r\n</div>\r\n<style type=\"text/css\">\r\n    #mynetwork {\r\n        width: 1200px;\r\n        height: 500px;\r\n        border: 1px solid lightgray;\r\n    }\r\n</style>";
      /***/
    },

    /***/
    "nCog":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/nodo-merkle.ts ***!
      \*******************************************************************/

    /*! exports provided: DataNode */

    /***/
    function nCog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataNode", function () {
        return DataNode;
      });

      var DataNode = function DataNode(value) {
        _classCallCheck(this, DataNode);

        this.value = value;
      };
      /***/

    },

    /***/
    "pfnM":
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/merkle-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MerkleRoutingModule */

    /***/
    function pfnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerkleRoutingModule", function () {
        return MerkleRoutingModule;
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


      var _merkle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./merkle.component */
      "71BD");

      var routes = [{
        path: '',
        component: _merkle_component__WEBPACK_IMPORTED_MODULE_3__["MerkleComponent"]
      }];

      var MerkleRoutingModule = function MerkleRoutingModule() {
        _classCallCheck(this, MerkleRoutingModule);
      };

      MerkleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MerkleRoutingModule);
      /***/
    },

    /***/
    "s5Bh":
    /*!*************************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/merkle.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function s5Bh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXJrbGUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "tpvR":
    /*!*********************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/merkle.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MerkleModule */

    /***/
    function tpvR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerkleModule", function () {
        return MerkleModule;
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


      var _merkle_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./merkle-routing.module */
      "pfnM");
      /* harmony import */


      var _merkle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./merkle.component */
      "71BD");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var MerkleModule = function MerkleModule() {
        _classCallCheck(this, MerkleModule);
      };

      MerkleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _merkle_routing_module__WEBPACK_IMPORTED_MODULE_4__["MerkleRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_merkle_component__WEBPACK_IMPORTED_MODULE_5__["MerkleComponent"]]
      })], MerkleModule);
      /***/
    },

    /***/
    "vWGc":
    /*!************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/merkle/hash.ts ***!
      \************************************************************/

    /*! exports provided: HashNode */

    /***/
    function vWGc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HashNode", function () {
        return HashNode;
      });

      var HashNode = function HashNode(hash) {
        _classCallCheck(this, HashNode);

        this.hash = hash;
        this.left = null;
        this.right = null;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=estructuras-arboreas-merkle-merkle-module-es5.js.map