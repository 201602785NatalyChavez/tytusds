(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordenamientos-quick-quick-module"],{

/***/ "46sP":
/*!****************************************************************!*\
  !*** ./src/app/layout/ordenamientos/quick/quick.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWljay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "aC3r":
/*!***************************************************************!*\
  !*** ./src/app/layout/ordenamientos/quick/quick.component.ts ***!
  \***************************************************************/
/*! exports provided: QuickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickComponent", function() { return QuickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_quick_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./quick.component.html */ "sdt0");
/* harmony import */ var _quick_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quick.component.css */ "46sP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let QuickComponent = class QuickComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuickComponent.ctorParameters = () => [];
QuickComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-quick',
        template: _raw_loader_quick_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quick_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], QuickComponent);



/***/ }),

/***/ "bJe3":
/*!************************************************************!*\
  !*** ./src/app/layout/ordenamientos/quick/quick.module.ts ***!
  \************************************************************/
/*! exports provided: QuickModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickModule", function() { return QuickModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "M0ag");
/* harmony import */ var _quick_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick-routing.module */ "xiRa");
/* harmony import */ var _quick_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick.component */ "aC3r");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let QuickModule = class QuickModule {
};
QuickModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _quick_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuickRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_quick_component__WEBPACK_IMPORTED_MODULE_5__["QuickComponent"]]
    })
], QuickModule);



/***/ }),

/***/ "sdt0":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/ordenamientos/quick/quick.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>quick works!</p>\r\n");

/***/ }),

/***/ "xiRa":
/*!********************************************************************!*\
  !*** ./src/app/layout/ordenamientos/quick/quick-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: QuickRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickRoutingModule", function() { return QuickRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _quick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quick.component */ "aC3r");




const routes = [
    {
        path: '',
        component: _quick_component__WEBPACK_IMPORTED_MODULE_3__["QuickComponent"]
    }
];
let QuickRoutingModule = class QuickRoutingModule {
};
QuickRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuickRoutingModule);



/***/ })

}]);
//# sourceMappingURL=ordenamientos-quick-quick-module-es2015.js.map