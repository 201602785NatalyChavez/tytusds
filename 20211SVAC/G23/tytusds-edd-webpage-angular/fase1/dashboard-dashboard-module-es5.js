(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "GZeB":
    /*!******************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
      \******************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function GZeB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared */
      "M0ag");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "qEFn");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.component */
      "txlp");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"]],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "H52i":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H52i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n    <h2 class=\"text-muted\">Dashboard <small>TyTusDS</small></h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <ngb-carousel>\r\n                <ng-template *ngFor=\"let slider of sliders\" ngbSlide>\r\n                    <img\r\n                        [src]=\"slider.imagePath\"\r\n                        alt=\"Random first slide\"\r\n                        class=\"img-fluid mx-auto d-block\"\r\n                        width=\"100%\"\r\n                    />\r\n                    <div class=\"carousel-caption\">\r\n                        <h3>{{ slider.label }}</h3>\r\n                        <p>{{ slider.text }}</p>\r\n                    </div>\r\n                </ng-template>\r\n            </ngb-carousel>\r\n        </div>\r\n    </div>\r\n    <hr />";
      /***/
    },

    /***/
    "qEFn":
    /*!**************************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function qEFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "txlp");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "txlp":
    /*!*********************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function txlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "H52i");
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      "xO7I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../router.animations */
      "ZZ88");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.alerts = [];
          this.sliders = [];
          this.sliders.push({
            imagePath: 'assets/images/usac-700x387.png',
            label: 'USAC Tricentenaria',
            text: 'Grande entre las del Mundo.'
          }, {
            imagePath: 'assets/images/tonystark.jpg',
            label: 'Escuela de Sistemas.',
            text: 'USAC'
          }, {
            imagePath: 'assets/images/hulk-profesro.jpg',
            label: 'Estructura de Datos',
            text: 'USAC'
          });
          /*
          this.alerts.push(
          {
              id: 1,
              type: 'success',
              message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates est animi quibusdam praesentium quam, et perspiciatis,
              consectetur velit culpa molestias dignissimos
              voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
          },
          {
              id: 2,
              type: 'warning',
              message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates est animi quibusdam praesentium quam, et perspiciatis,
              consectetur velit culpa molestias dignissimos
              voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
          }
          );*/
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardComponent);
      /***/
    },

    /***/
    "xO7I":
    /*!***********************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function xO7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map