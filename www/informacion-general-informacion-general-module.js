(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informacion-general-informacion-general-module"],{

/***/ "./src/app/informacion-general/informacion-general.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/informacion-general/informacion-general.module.ts ***!
  \*******************************************************************/
/*! exports provided: InformacionGeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionGeneralModule", function() { return InformacionGeneralModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quienes_somos_quienes_somos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quienes-somos/quienes-somos.component */ "./src/app/informacion-general/quienes-somos/quienes-somos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _informacion_general_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./informacion-general.routing */ "./src/app/informacion-general/informacion-general.routing.ts");








var InformacionGeneralModule = /** @class */ (function () {
    function InformacionGeneralModule() {
    }
    InformacionGeneralModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_quienes_somos_quienes_somos_component__WEBPACK_IMPORTED_MODULE_1__["QuienesSomosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_informacion_general_routing__WEBPACK_IMPORTED_MODULE_7__["InfoGenealRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], InformacionGeneralModule);
    return InformacionGeneralModule;
}());



/***/ }),

/***/ "./src/app/informacion-general/informacion-general.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/informacion-general/informacion-general.routing.ts ***!
  \********************************************************************/
/*! exports provided: InfoGenealRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoGenealRoutes", function() { return InfoGenealRoutes; });
/* harmony import */ var _quienes_somos_quienes_somos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quienes-somos/quienes-somos.component */ "./src/app/informacion-general/quienes-somos/quienes-somos.component.ts");

var InfoGenealRoutes = [
    {
        path: '',
        children: [
            {
                path: 'QuienesSomos',
                component: _quienes_somos_quienes_somos_component__WEBPACK_IMPORTED_MODULE_0__["QuienesSomosComponent"],
                data: {
                    title: 'Dementia es',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dementia es' }]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/informacion-general/quienes-somos/quienes-somos.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/informacion-general/quienes-somos/quienes-somos.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  quienes-somos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/informacion-general/quienes-somos/quienes-somos.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/informacion-general/quienes-somos/quienes-somos.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWFjaW9uLWdlbmVyYWwvcXVpZW5lcy1zb21vcy9xdWllbmVzLXNvbW9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/informacion-general/quienes-somos/quienes-somos.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/informacion-general/quienes-somos/quienes-somos.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuienesSomosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienesSomosComponent", function() { return QuienesSomosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuienesSomosComponent = /** @class */ (function () {
    function QuienesSomosComponent() {
    }
    QuienesSomosComponent.prototype.ngOnInit = function () { };
    QuienesSomosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quienes-somos',
            template: __webpack_require__(/*! ./quienes-somos.component.html */ "./src/app/informacion-general/quienes-somos/quienes-somos.component.html"),
            styles: [__webpack_require__(/*! ./quienes-somos.component.scss */ "./src/app/informacion-general/quienes-somos/quienes-somos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuienesSomosComponent);
    return QuienesSomosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=informacion-general-informacion-general-module.js.map