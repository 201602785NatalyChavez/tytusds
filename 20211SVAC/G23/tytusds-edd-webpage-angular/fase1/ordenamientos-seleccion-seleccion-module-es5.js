(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordenamientos-seleccion-seleccion-module"], {
    /***/
    "Mbo+":
    /*!********************************************************************!*\
      !*** ./src/app/layout/ordenamientos/seleccion/seleccion.module.ts ***!
      \********************************************************************/

    /*! exports provided: SeleccionModule */

    /***/
    function Mbo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeleccionModule", function () {
        return SeleccionModule;
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


      var _seleccion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./seleccion-routing.module */
      "Z2y+");
      /* harmony import */


      var _seleccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seleccion.component */
      "zmmO");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SeleccionModule = function SeleccionModule() {
        _classCallCheck(this, SeleccionModule);
      };

      SeleccionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _seleccion_routing_module__WEBPACK_IMPORTED_MODULE_4__["SeleccionRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_seleccion_component__WEBPACK_IMPORTED_MODULE_5__["SeleccionComponent"]]
      })], SeleccionModule);
      /***/
    },

    /***/
    "XbSg":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/ordenamientos/seleccion/seleccion.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XbSg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>seleccion works!</p>\r\n";
      /***/
    },

    /***/
    "Z2y+":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/ordenamientos/seleccion/seleccion-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SeleccionRoutingModule */

    /***/
    function Z2y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeleccionRoutingModule", function () {
        return SeleccionRoutingModule;
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


      var _seleccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seleccion.component */
      "zmmO");

      var routes = [{
        path: '',
        component: _seleccion_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionComponent"]
      }];

      var SeleccionRoutingModule = function SeleccionRoutingModule() {
        _classCallCheck(this, SeleccionRoutingModule);
      };

      SeleccionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SeleccionRoutingModule);
      /***/
    },

    /***/
    "nsCt":
    /*!************************************************************************!*\
      !*** ./src/app/layout/ordenamientos/seleccion/seleccion.component.css ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function nsCt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY2Npb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "zmmO":
    /*!***********************************************************************!*\
      !*** ./src/app/layout/ordenamientos/seleccion/seleccion.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SeleccionComponent */

    /***/
    function zmmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeleccionComponent", function () {
        return SeleccionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_seleccion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./seleccion.component.html */
      "XbSg");
      /* harmony import */


      var _seleccion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seleccion.component.css */
      "nsCt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SeleccionComponent = /*#__PURE__*/function () {
        function SeleccionComponent() {
          _classCallCheck(this, SeleccionComponent);
        }

        _createClass(SeleccionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SeleccionComponent;
      }();

      SeleccionComponent.ctorParameters = function () {
        return [];
      };

      SeleccionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seleccion',
        template: _raw_loader_seleccion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seleccion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SeleccionComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ordenamientos-seleccion-seleccion-module-es5.js.map