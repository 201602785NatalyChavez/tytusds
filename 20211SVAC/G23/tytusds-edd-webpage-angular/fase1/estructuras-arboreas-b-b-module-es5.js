(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estructuras-arboreas-b-b-module"], {
    /***/
    "+CIo":
    /*!***************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/b/b.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function CIo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "71tE":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/estructuras-arboreas/b/b.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<h1>Hola soy {{nombre}} {{appellido}}</h1>\r\n<h2>Hola y yo soy el alumno {{alumno.nombre}} {{alumno.appellido}}</h2>\r\n<h3>Hola soy {{nombre}} {{alumno.appellido}}</h3>-->\r\n<!--\r\n<h1></h1>\r\n<input  placeholder=\"Ingrese un nuevo valor\" [(ngModel)]=\"inputNuevo\">\r\n<input type=\"text\" [(ngModel)]=\"inputNuevo\">\r\n<p>{{inputNuevo}}</p>\r\n<label>Correo\r\n    <input type=\"text\" [(ngModel)]=\"correo\">\r\n</label>\r\n<label>Password\r\n    <input type=\"password\" [(ngModel)]=\"password\">\r\n</label>\r\n<button (click)=\"Iniciar()\"> Iniciar </button>\r\n<label> Valor:    \r\n    <input type=\"text\" [(ngModel)]=\"x\">\r\n</label>\r\n<button type=\"submit\" (click)=\"Insertar()\"> Insertar </button>\r\n<h2>{{x}}</h2>\r\n-->\r\n<!--                                    -->\r\n\r\n<div >\r\n    <h4>Árbol B</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                     </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <div class=\"card-body align-items-center\" >\r\n                  </div>\r\n            </div>\r\n        </div>      \r\n        <div class=\"col-xs-2\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n           \r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            \r\n        </div>\r\n    </div>   \r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> \r\n</div>";
      /***/
    },

    /***/
    "90Ym":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/b/b-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BRoutingModule */

    /***/
    function Ym(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BRoutingModule", function () {
        return BRoutingModule;
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


      var _b_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./b.component */
      "z2eF");

      var routes = [{
        path: '',
        component: _b_component__WEBPACK_IMPORTED_MODULE_3__["BComponent"]
      }];

      var BRoutingModule = function BRoutingModule() {
        _classCallCheck(this, BRoutingModule);
      };

      BRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BRoutingModule);
      /***/
    },

    /***/
    "r+3V":
    /*!***********************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/b/b.module.ts ***!
      \***********************************************************/

    /*! exports provided: BModule */

    /***/
    function r3V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BModule", function () {
        return BModule;
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


      var _b_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./b-routing.module */
      "90Ym");
      /* harmony import */


      var _b_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./b.component */
      "z2eF");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var BModule = function BModule() {
        _classCallCheck(this, BModule);
      };

      BModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _b_routing_module__WEBPACK_IMPORTED_MODULE_4__["BRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_b_component__WEBPACK_IMPORTED_MODULE_5__["BComponent"]]
      })], BModule);
      /***/
    },

    /***/
    "z2eF":
    /*!**************************************************************!*\
      !*** ./src/app/layout/estructuras-arboreas/b/b.component.ts ***!
      \**************************************************************/

    /*! exports provided: BComponent */

    /***/
    function z2eF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BComponent", function () {
        return BComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_b_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./b.component.html */
      "71tE");
      /* harmony import */


      var _b_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./b.component.css */
      "+CIo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BComponent = /*#__PURE__*/function () {
        function BComponent() {
          _classCallCheck(this, BComponent);
        }

        _createClass(BComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BComponent;
      }();

      BComponent.ctorParameters = function () {
        return [];
      };

      BComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-b',
        template: _raw_loader_b_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_b_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=estructuras-arboreas-b-b-module-es5.js.map