(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validate-validate-module"],{

/***/ "./src/app/validate/confirm/confirm.component.css":
/*!********************************************************!*\
  !*** ./src/app/validate/confirm/confirm.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-wrapper {\r\n  min-height: 0vh !important;\r\n  position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGUvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmFsaWRhdGUvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAwdmggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/validate/confirm/confirm.component.html":
/*!*********************************************************!*\
  !*** ./src/app/validate/confirm/confirm.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center \">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"></span>\r\n                <h5 class=\"font-medium m-b-20\">Ingrese el código que le llego a su {{tipo}} </h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"formularioConfirm\" (submit)=\"validarCode()\"  class=\"form-horizontal m-t-20\" >\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12\">\r\n                                <input  [(ngModel)]=\"validate\" formControlName=\"code\" class=\"form-control form-control-lg\" type=\"\" required=\"\" placeholder=\"Code\">\r\n                                <div *ngIf=\"f.code.invalid && (f.code.dirty || f.code.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"f.code.errors.required\"> code is required. </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">VALIDAR</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/validate/confirm/confirm.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/validate/confirm/confirm.component.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(route, fb) {
        this.route = route;
        this.fb = fb;
        this.tipoConfirm = null;
        this.tipo = '';
        this.validate = '';
        this.mensaje = [];
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        debugger;
        this.tipoConfirm = this.route.snapshot.params['tipo'];
        this.tipo = (this.tipoConfirm == 'email') ? 'correo' : (this.tipoConfirm == 'phone') ? 'telefono' : '';
        this.formularioConfirm = this.fb.group({
            code: ['Ingrese el codigo', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    ConfirmComponent.prototype.validarCode = function () {
        this.mensaje = [{
                id: 1,
                type: 'warning',
                message: 'mensaje'
            }];
    };
    Object.defineProperty(ConfirmComponent.prototype, "f", {
        get: function () {
            var respuesta = this.formularioConfirm;
            return respuesta.controls;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmComponent.prototype, "validate", void 0);
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/validate/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/validate/confirm/confirm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/validate/validate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/validate/validate.module.ts ***!
  \*********************************************/
/*! exports provided: ValidateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateModule", function() { return ValidateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/validate/confirm/confirm.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validate_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate.routing */ "./src/app/validate/validate.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _utilidades_utilidades_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilidades/utilidades.module */ "./src/app/utilidades/utilidades.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");










var ValidateModule = /** @class */ (function () {
    function ValidateModule() {
    }
    ValidateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_validate_routing__WEBPACK_IMPORTED_MODULE_5__["ValidateRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _utilidades_utilidades_module__WEBPACK_IMPORTED_MODULE_8__["UtilidadesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: []
        })
    ], ValidateModule);
    return ValidateModule;
}());



/***/ }),

/***/ "./src/app/validate/validate.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/validate/validate.routing.ts ***!
  \**********************************************/
/*! exports provided: ValidateRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRoutes", function() { return ValidateRoutes; });
/* harmony import */ var _guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guard.guard */ "./src/app/guard.guard.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/validate/confirm/confirm.component.ts");


var ValidateRoutes = [
    {
        path: '',
        children: [
            {
                path: 'confirm',
                component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"],
                canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_0__["GuardGuard"]]
            },
            {
                path: 'confirm/:tipo',
                component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"],
                canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_0__["GuardGuard"]]
            },
            {
                path: 'confirmEmail/:tipo',
                component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"],
                canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_0__["GuardGuard"]]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=validate-validate-module.js.map