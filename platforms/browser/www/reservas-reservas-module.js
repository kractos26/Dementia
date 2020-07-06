(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservas-reservas-module"],{

/***/ "./src/app/modelos/Servicereserva.model.ts":
/*!*************************************************!*\
  !*** ./src/app/modelos/Servicereserva.model.ts ***!
  \*************************************************/
/*! exports provided: ServiceReserva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceReserva", function() { return ServiceReserva; });
var ServiceReserva = /** @class */ (function () {
    function ServiceReserva() {
    }
    return ServiceReserva;
}());



/***/ }),

/***/ "./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n<app-BackButton *ngIf=\"IndiceEspacio > 0\" (click)=\"Regresar()\"></app-BackButton>\r\n\r\n<div *ngIf=\"isSpinnerVisible == true\" class=\"page-loading-base proccessing\">\r\n    <img src=\"assets/images/loading.gif\" class=\"loading-icon proccessing\">\r\n</div>\r\n\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            \r\n            <div class=\"card-body tittlePublicaciones\">\r\n                <h3 class=\"card-title\">Reserva tu {{InfoReservaMemoria?.Tipo}}.</h3>\r\n                <h4 class=\"card-title\">Completa la siguiente información para reservar el {{InfoReservaMemoria?.Tipo}}.</h4>\r\n                <h5 class=\"card-title\">{{InfoReservaMemoria?.Titulo}}</h5>\r\n                <ngb-progressbar type=\"info\" [value]=\"PorcentajeProgreso\" height=\"18px\"></ngb-progressbar>\r\n            </div>\r\n            <hr class=\"m-t-0\">\r\n            \r\n            <!-- INFORMACION BASICA - CONTACTO -->\r\n            <form [formGroup]=\"formularioReservar\" class=\"form-horizontal r-separator\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{SubtituloTipoEspacio}}</h4>\r\n                    <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n                    \r\n                    <div *ngIf=\"ListaContatos_Space != null && ListaContatos_Space.length > 0\">\r\n                        <div class=\"row p-b-15\">\r\n                            <label  class=\"col-sm-3 control-label col-form-label\">Seleccione un contrato</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <select (change)=\"OnChange_Contrato();\" [ngClass]=\"{'is-invalid': (f.IdContrato.invalid && (f.IdContrato.dirty || f.IdContrato.touched))}\" [(ngModel)]=\"objResevar.IdContrato\"  class=\"form-control form-control-line\" formControlName=\"IdContrato\">\r\n                                    <option  *ngFor=\"let itemContrato of ListaContatos_Space\" value=\"{{itemContrato.IdServiceSpaceContract}}\">{{itemContrato.IdContractType}}</option>                    \r\n                                </select>                             \r\n                                <span class=\"LabelOblitaorio Select\">*</span>       \r\n                                <div  *ngIf=\"f.IdContrato.invalid && (f.IdContrato.dirty || f.IdContrato.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.IdContrato.errors.required\" style=\"vertical-align: inherit;\">Seleccione un contrato.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Cantidad de espacios a reservar</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input [ngClass]=\"{'is-invalid': (f.CountEspace.invalid && (f.CountEspace.dirty || f.CountEspace.touched))}\" [(ngModel)]=\"objResevar.CountEspace\"  class=\"form-control form-control-line\" placeholder=\"Cantidad\"  formControlName=\"CountEspace\">                                         \r\n                                <span class=\"LabelOblitaorio\">*</span>      \r\n                                <div  *ngIf=\"f.CountEspace.invalid && (f.CountEspace.dirty || f.CountEspace.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.CountEspace.errors.required\" style=\"vertical-align: inherit;\">Indique la cantidad de espacios de este tipo.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"MostrarCantidadPeriodo == true\" class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Cantidad de {{TituloPeriodoContrato}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input [ngClass]=\"{'is-invalid': (f.CountPer.invalid && (f.CountPer.dirty || f.CountPer.touched))}\" [(ngModel)]=\"objResevar.CountPer\"  class=\"form-control form-control-line\" placeholder=\"Cantidad de periodos\"  formControlName=\"CountPer\">                                         \r\n                                <span class=\"LabelOblitaorio\">*</span>      \r\n                                <div  *ngIf=\"f.CountPer.invalid && (f.CountPer.dirty || f.CountPer.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.CountPer.errors.required\" style=\"vertical-align: inherit;\">Indique la cantidad de periodos que desea contratar.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Fecha Inicio </label>\r\n                            <div class=\"col-sm-9\">\r\n                                <div class=\"input-group\">\r\n                                    <input [ngClass]=\"{'is-invalid': (f.FechaInicio.invalid && (f.FechaInicio.dirty || f.FechaInicio.touched))}\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"objResevar.FechaInicio\" formControlName=\"FechaInicio\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </button>\r\n                                        <div  *ngIf=\"f.FechaInicio.invalid && (f.FechaInicio.dirty || f.FechaInicio.touched)\" class=\"invalid-feedback\">\r\n                                            <font style=\"vertical-align: inherit;\">\r\n                                                <font *ngIf=\"f.FechaInicio.errors.required\" style=\"vertical-align: inherit;\">Seleccione la fecha inicio </font>\r\n                                            </font>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"LabelOblitaorio\" sytle=\"left: -50px !important;\">*</span>      \r\n                            </div>                     \r\n                        </div>\r\n\r\n                        <div *ngIf=\"MostrarFechaFinal == true\" class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Fecha Finalización </label>\r\n                            <div class=\"col-sm-9\">                          \r\n                                <div class=\"input-group\">\r\n                                    <input [ngClass]=\"{'is-invalid': (f.FechaFin.invalid && (f.FechaFin.dirty || f.FechaFin.touched))}\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"objResevar.FechaFin\" formControlName=\"FechaFin\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </button>\r\n                                        <div  *ngIf=\"f.FechaFin.invalid && (f.FechaFin.dirty || f.FechaFin.touched)\" class=\"invalid-feedback\">\r\n                                            <font style=\"vertical-align: inherit;\">\r\n                                                <font *ngIf=\"f.FechaFin.errors.required\" style=\"vertical-align: inherit;\">Seleccione la fecha de finalización</font>\r\n                                            </font>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"LabelOblitaorio\" sytle=\"left: -50px !important;\">*</span>      \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card-body botonesFooter2\">\r\n                    <button [disabled]=\"formularioReservar.invalid\" (click)=\"Continuar()\" class=\"btn btn-info waves-effect waves-light buttonRight\" type=\"button\">Continuar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n"

/***/ }),

/***/ "./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReservarAlojamientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarAlojamientoComponent", function() { return ReservarAlojamientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modelos/Servicereserva.model */ "./src/app/modelos/Servicereserva.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Search-service.service */ "./src/app/services/Search-service.service.ts");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_modelos_servicespacecontract_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modelos/servicespacecontract.model */ "./src/app/modelos/servicespacecontract.model.ts");









var ReservarAlojamientoComponent = /** @class */ (function () {
    function ReservarAlojamientoComponent(fb, router, route, config1, serviceSeach, genStorageServ) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.serviceSeach = serviceSeach;
        this.genStorageServ = genStorageServ;
        this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
        this.mensaje = [];
        this.isSpinnerVisible = true;
        this.MostrarFechaFinal = true;
        this.MostrarCantidadPeriodo = false;
        this.TituloPeriodoContrato = "";
        this.InfoContractsList = [];
        this.InfoReservasActuales = [];
        this.SpaceTypeList = [];
        this.IndiceEspacio = 0;
        this.PorcentajeProgreso = 0;
        this.ListaContatos_Space = [];
        config1 = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarConfig"]();
        config1.max = 80;
        config1.striped = true;
        config1.animated = true;
        config1.type = 'success';
        this.IdServicio = this.route.snapshot.params.IdService;
        this.serviceSeach.GetDetailInfo("DetailInfoAccommodation", this.IdServicio).subscribe(function (respuesta) {
            _this.detailInfoAccommodation = respuesta.JSonResult;
            _this.PrecargarInformacionReserva();
        }, function (error) {
            _this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        });
    }
    ReservarAlojamientoComponent.prototype.ngOnInit = function () {
        this.formularioReservar = this.fb.group({
            IdContrato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            CountEspace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)])],
            FechaInicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            FechaFin: ['', null],
            CountPer: ['', null]
        });
    };
    Object.defineProperty(ReservarAlojamientoComponent.prototype, "f", {
        get: function () {
            var respuesta = this.formularioReservar;
            return respuesta.controls;
        },
        enumerable: true,
        configurable: true
    });
    ReservarAlojamientoComponent.prototype.PrecargarInformacionReserva = function () {
        var _this = this;
        this.InfoReservasActuales = this.genStorageServ.getInformation("InfoReservations");
        if (this.InfoReservasActuales == null) {
            this.InfoReservasActuales = [];
        }
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        if (indexReserva == -1 || this.InfoReservasActuales[indexReserva].Reservations == null) {
            this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        }
        this.InfoReservaMemoria = this.InfoReservasActuales[indexReserva];
        this.ActualizarSubtitulo();
        this.CargarInformacionContratos();
    };
    ReservarAlojamientoComponent.prototype.CargarInformacionContratos = function () {
        var _this = this;
        this.InfoContractsList = [];
        this.ListaContatos_Space = [];
        this.serviceSeach.GetContracts("ServiceSpaceContract", this.IdServicio, "getservicespacecontract_accommodation").subscribe(function (respuesta) {
            if (respuesta.JSonResult != null) {
                respuesta.JSonResult.forEach(function (contract) { _this.InfoContractsList.push(contract); });
                _this.ActualizarListaContratos();
            }
            _this.isSpinnerVisible = false;
        }, function (error) {
            _this.isSpinnerVisible = false;
            _this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        });
    };
    ReservarAlojamientoComponent.prototype.ActualizarPorcentajeProgreso = function () {
        var porcent = ((this.IndiceEspacio + 1) / this.InfoReservaMemoria.Reservations.length) * 100;
        this.PorcentajeProgreso = porcent > 100 ? 100 : porcent;
    };
    ReservarAlojamientoComponent.prototype.ActualizarSubtitulo = function () {
        if (this.detailInfoAccommodation != null) {
            this.SubtituloTipoEspacio = this.detailInfoAccommodation.AccommodationSpaceType;
            this.ActualizarPorcentajeProgreso();
        }
    };
    ReservarAlojamientoComponent.prototype.ActualizarListaContratos = function () {
        var _this = this;
        this.ListaContatos_Space = [];
        var defaultContract = new src_app_modelos_servicespacecontract_model__WEBPACK_IMPORTED_MODULE_8__["ServiceSpaceContract"]();
        defaultContract.IdServiceSpaceContract = "";
        defaultContract.IdContractType = "Seleccione";
        defaultContract.ContractValue = null;
        this.ListaContatos_Space.push(defaultContract);
        if (this.IndiceEspacio < this.InfoReservaMemoria.Reservations.length) {
            this.InfoContractsList.forEach(function (contract) {
                if (contract.IdServiceSpace == _this.InfoReservaMemoria.Reservations[_this.IndiceEspacio].IdSpace) {
                    contract.IdContractType = "$ " + contract.ContractValue + " - " + contract.IdContractType;
                    _this.ListaContatos_Space.push(contract);
                }
            });
        }
    };
    ReservarAlojamientoComponent.prototype.Continuar = function () {
        if (this.MostrarFechaFinal && (!this.objResevar.FechaFin || !this.objResevar.FechaFin.year || !this.objResevar.FechaFin.month || !this.objResevar.FechaFin.day)) {
            this.mensaje = [
                {
                    id: 1,
                    type: 'warning',
                    message: "Especifíque primero un día en la fecha de finalización."
                }
            ];
            return;
        }
        if (this.MostrarCantidadPeriodo && (!this.objResevar.CountPer || this.objResevar.CountPer <= 0)) {
            this.mensaje = [
                {
                    id: 1,
                    type: 'warning',
                    message: "Especifíque la cantidad de " + this.TituloPeriodoContrato + " que desea contratar."
                }
            ];
            return;
        }
        this.GuardarInfoActual();
        if ((this.IndiceEspacio + 1) < this.InfoReservaMemoria.Reservations.length) {
            this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
            this.objResevar.CountPer = 0;
            this.MostrarFechaFinal = true;
            this.MostrarCantidadPeriodo = false;
            this.TituloPeriodoContrato = "Días";
            this.IndiceEspacio++;
            this.ListaContatos_Space = [];
            this.ActualizarSubtitulo();
            this.ActualizarListaContratos();
            this.formularioReservar.reset();
        }
        else {
            this.router.navigate(["/reservas/ResumenReserva/" + this.IdServicio]);
        }
    };
    ReservarAlojamientoComponent.prototype.Regresar = function () {
        this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
        this.objResevar.CountPer = 0;
        this.MostrarFechaFinal = true;
        this.MostrarCantidadPeriodo = false;
        this.TituloPeriodoContrato = "Días";
        this.IndiceEspacio--;
        this.ListaContatos_Space = [];
        this.ActualizarSubtitulo();
        this.ActualizarListaContratos();
        this.formularioReservar.reset();
        var porcent = this.IndiceEspacio / this.InfoReservaMemoria.Reservations.length * 100;
        this.PorcentajeProgreso = porcent > 100 ? 100 : porcent;
    };
    ReservarAlojamientoComponent.prototype.GuardarInfoActual = function () {
        var _this = this;
        this.CalcularFechaFinal();
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].IdServiceSpaceContract = this.objResevar.IdContrato;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].Count = this.objResevar.CountEspace;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].InitDate = this.objResevar.FechaInicio;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].EndDate = this.objResevar.FechaFin;
        var indexContrato = this.ListaContatos_Space.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].Subtitulo = this.SubtituloTipoEspacio;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].TextoContrato = this.ListaContatos_Space[indexContrato].IdContractType;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].ValorContrato = this.CalcularValorContratado();
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        this.InfoReservasActuales[indexReserva] = this.InfoReservaMemoria;
        this.genStorageServ.setInformation("InfoReservations", this.InfoReservasActuales);
    };
    ReservarAlojamientoComponent.prototype.OnChange_Contrato = function () {
        var _this = this;
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            this.MostrarFechaFinal = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1);
            this.MostrarCantidadPeriodo = !this.MostrarFechaFinal;
            this.TituloPeriodoContrato = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? "Días" :
                ((tipoContrato.indexOf("Semanal") != -1) ? "Semanas" :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? "Quincenas" :
                        ((tipoContrato.indexOf("Mensual") != -1) ? "Meses" :
                            ((tipoContrato.indexOf("Semestral") != -1) ? "Semestres" :
                                ((tipoContrato.indexOf("Anual") != -1) ? "Años" : "Periodo")))));
        }
    };
    ReservarAlojamientoComponent.prototype.CalcularFechaFinal = function () {
        var _this = this;
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            var incrementoDias = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? 0 :
                ((tipoContrato.indexOf("Semanal") != -1) ? 7 :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? 15 :
                        ((tipoContrato.indexOf("Mensual") != -1) ? 30 :
                            ((tipoContrato.indexOf("Semestral") != -1) ? 180 :
                                ((tipoContrato.indexOf("Anual") != -1) ? 360 : 0)))));
            if (incrementoDias > 0) {
                incrementoDias = incrementoDias * this.objResevar.CountPer;
                var fechaAux = new Date(this.objResevar.FechaInicio.year, this.objResevar.FechaInicio.month - 1, this.objResevar.FechaInicio.day);
                fechaAux.setDate(fechaAux.getDate() + incrementoDias + 1);
                this.objResevar.FechaFin = { year: fechaAux.getFullYear(), month: fechaAux.getMonth() + 1, day: fechaAux.getDate() };
            }
        }
    };
    ReservarAlojamientoComponent.prototype.CalcularValorContratado = function () {
        var _this = this;
        var fechaIni = new Date(this.objResevar.FechaInicio.year, this.objResevar.FechaInicio.month - 1, this.objResevar.FechaInicio.day).getTime();
        var fechaFin = new Date(this.objResevar.FechaFin.year, this.objResevar.FechaFin.month - 1, this.objResevar.FechaFin.day).getTime();
        var cantidadDias = (fechaFin - fechaIni) / (1000 * 60 * 60 * 24);
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            var diasPorPeriodo = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? 1 :
                ((tipoContrato.indexOf("Semanal") != -1) ? 7 :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? 15 :
                        ((tipoContrato.indexOf("Mensual") != -1) ? 30 :
                            ((tipoContrato.indexOf("Semestral") != -1) ? 180 :
                                ((tipoContrato.indexOf("Anual") != -1) ? 360 : 0)))));
            return Number(this.InfoContractsList[index].ContractValue) * cantidadDias / diasPorPeriodo * this.objResevar.CountEspace;
        }
        return 0;
    };
    ReservarAlojamientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ReservarAlojamiento',
            template: __webpack_require__(/*! ./ReservarAlojamiento.component.html */ "./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarConfig"],
            src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_5__["SearchServiceService"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_6__["GenericStorageService"]])
    ], ReservarAlojamientoComponent);
    return ReservarAlojamientoComponent;
}());



/***/ }),

/***/ "./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n<app-BackButton *ngIf=\"IndiceEspacio > 0\" (click)=\"Regresar()\"></app-BackButton>\r\n\r\n<div *ngIf=\"isSpinnerVisible == true\" class=\"page-loading-base proccessing\">\r\n    <img src=\"assets/images/loading.gif\" class=\"loading-icon proccessing\">\r\n</div>\r\n\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            \r\n            <div class=\"card-body tittlePublicaciones\">\r\n                <h3 class=\"card-title\">Reserva tu {{InfoReservaMemoria?.Tipo}}.</h3>\r\n                <h4 class=\"card-title\">Completa la siguiente información para reservar el {{InfoReservaMemoria?.Tipo}}.</h4>\r\n                <h5 class=\"card-title\">{{InfoReservaMemoria?.Titulo}}</h5>\r\n                <ngb-progressbar type=\"info\" [value]=\"PorcentajeProgreso\" height=\"18px\"></ngb-progressbar>\r\n            </div>\r\n            <hr class=\"m-t-0\">\r\n            \r\n            <!-- INFORMACION BASICA - CONTACTO -->\r\n            <form [formGroup]=\"formularioReservar\" class=\"form-horizontal r-separator\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{SubtituloTipoEspacio}}</h4>\r\n                    <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n                    \r\n                    <div *ngIf=\"ListaContatos_Space != null && ListaContatos_Space.length > 0\">\r\n                        <div class=\"row p-b-15\">\r\n                            <label  class=\"col-sm-3 control-label col-form-label\">Seleccione un contrato</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <select (change)=\"OnChange_Contrato();\" [ngClass]=\"{'is-invalid': (f.IdContrato.invalid && (f.IdContrato.dirty || f.IdContrato.touched))}\" [(ngModel)]=\"objResevar.IdContrato\"  class=\"form-control form-control-line\" formControlName=\"IdContrato\">\r\n                                    <option  *ngFor=\"let itemContrato of ListaContatos_Space\" value=\"{{itemContrato.IdServiceSpaceContract}}\">{{itemContrato.IdContractType}}</option>                    \r\n                                </select>                             \r\n                                <span class=\"LabelOblitaorio Select\">*</span>       \r\n                                <div  *ngIf=\"f.IdContrato.invalid && (f.IdContrato.dirty || f.IdContrato.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.IdContrato.errors.required\" style=\"vertical-align: inherit;\">Seleccione un contrato.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Cantidad de espacios a reservar</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input [ngClass]=\"{'is-invalid': (f.CountEspace.invalid && (f.CountEspace.dirty || f.CountEspace.touched))}\" [(ngModel)]=\"objResevar.CountEspace\"  class=\"form-control form-control-line\" placeholder=\"Cantidad\"  formControlName=\"CountEspace\">                                         \r\n                                <span class=\"LabelOblitaorio\">*</span>      \r\n                                <div  *ngIf=\"f.CountEspace.invalid && (f.CountEspace.dirty || f.CountEspace.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.CountEspace.errors.required\" style=\"vertical-align: inherit;\">Indique la cantidad de espacios de este tipo.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"MostrarCantidadPeriodo == true\" class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Cantidad de {{TituloPeriodoContrato}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input [ngClass]=\"{'is-invalid': (f.CountPer.invalid && (f.CountPer.dirty || f.CountPer.touched))}\" [(ngModel)]=\"objResevar.CountPer\"  class=\"form-control form-control-line\" placeholder=\"Cantidad de periodos\"  formControlName=\"CountPer\">                                         \r\n                                <span class=\"LabelOblitaorio\">*</span>      \r\n                                <div  *ngIf=\"f.CountPer.invalid && (f.CountPer.dirty || f.CountPer.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.CountPer.errors.required\" style=\"vertical-align: inherit;\">Indique la cantidad de periodos que desea contratar.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Fecha Inicio </label>\r\n                            <div class=\"col-sm-9\">\r\n                                <div class=\"input-group\">\r\n                                    <input [ngClass]=\"{'is-invalid': (f.FechaInicio.invalid && (f.FechaInicio.dirty || f.FechaInicio.touched))}\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"objResevar.FechaInicio\" formControlName=\"FechaInicio\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </button>\r\n                                        <div  *ngIf=\"f.FechaInicio.invalid && (f.FechaInicio.dirty || f.FechaInicio.touched)\" class=\"invalid-feedback\">\r\n                                            <font style=\"vertical-align: inherit;\">\r\n                                                <font *ngIf=\"f.FechaInicio.errors.required\" style=\"vertical-align: inherit;\">Seleccione la fecha inicio </font>\r\n                                            </font>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"LabelOblitaorio\" sytle=\"left: -50px !important;\">*</span>      \r\n                            </div>                     \r\n                        </div>\r\n\r\n                        <div *ngIf=\"MostrarFechaFinal == true\" class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Fecha Finalización </label>\r\n                            <div class=\"col-sm-9\">                          \r\n                                <div class=\"input-group\">\r\n                                    <input [ngClass]=\"{'is-invalid': (f.FechaFin.invalid && (f.FechaFin.dirty || f.FechaFin.touched))}\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"objResevar.FechaFin\" formControlName=\"FechaFin\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </button>\r\n                                        <div  *ngIf=\"f.FechaFin.invalid && (f.FechaFin.dirty || f.FechaFin.touched)\" class=\"invalid-feedback\">\r\n                                            <font style=\"vertical-align: inherit;\">\r\n                                                <font *ngIf=\"f.FechaFin.errors.required\" style=\"vertical-align: inherit;\">Seleccione la fecha de finalización</font>\r\n                                            </font>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"LabelOblitaorio\" sytle=\"left: -50px !important;\">*</span>      \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card-body botonesFooter2\">\r\n                    <button [disabled]=\"formularioReservar.invalid\" (click)=\"Continuar()\" class=\"btn btn-info waves-effect waves-light buttonRight\" type=\"button\">Continuar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n"

/***/ }),

/***/ "./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReservarCoWorkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarCoWorkingComponent", function() { return ReservarCoWorkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modelos/Servicereserva.model */ "./src/app/modelos/Servicereserva.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Search-service.service */ "./src/app/services/Search-service.service.ts");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_modelos_servicespacecontract_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modelos/servicespacecontract.model */ "./src/app/modelos/servicespacecontract.model.ts");









var ReservarCoWorkingComponent = /** @class */ (function () {
    function ReservarCoWorkingComponent(fb, router, route, config1, serviceSeach, genStorageServ) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.serviceSeach = serviceSeach;
        this.genStorageServ = genStorageServ;
        this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
        this.mensaje = [];
        this.isSpinnerVisible = true;
        this.MostrarFechaFinal = true;
        this.MostrarCantidadPeriodo = false;
        this.TituloPeriodoContrato = "";
        this.InfoContractsList = [];
        this.InfoReservasActuales = [];
        this.SpaceTypeList = [];
        this.IndiceEspacio = 0;
        this.PorcentajeProgreso = 0;
        this.ListaContatos_Space = [];
        this.detailInfoCoWorking = [];
        config1 = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarConfig"]();
        config1.max = 80;
        config1.striped = true;
        config1.animated = true;
        config1.type = 'success';
        this.IdServicio = this.route.snapshot.params.IdService;
        this.serviceSeach.GetDetailsInfo("DetailInfoCoWorking", this.IdServicio).subscribe(function (respuesta) {
            _this.detailInfoCoWorking = respuesta.JSonResult;
            _this.PrecargarInformacionReserva();
        }, function (error) {
            _this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        });
    }
    ReservarCoWorkingComponent.prototype.ngOnInit = function () {
        this.formularioReservar = this.fb.group({
            IdContrato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            CountEspace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)])],
            FechaInicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            FechaFin: ['', null],
            CountPer: ['', null]
        });
    };
    Object.defineProperty(ReservarCoWorkingComponent.prototype, "f", {
        get: function () {
            var respuesta = this.formularioReservar;
            return respuesta.controls;
        },
        enumerable: true,
        configurable: true
    });
    ReservarCoWorkingComponent.prototype.PrecargarInformacionReserva = function () {
        var _this = this;
        this.InfoReservasActuales = this.genStorageServ.getInformation("InfoReservations");
        if (this.InfoReservasActuales == null) {
            this.InfoReservasActuales = [];
        }
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        if (indexReserva == -1 || this.InfoReservasActuales[indexReserva].Reservations == null) {
            this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        }
        this.InfoReservaMemoria = this.InfoReservasActuales[indexReserva];
        this.ActualizarSubtitulo();
        this.CargarInformacionContratos();
    };
    ReservarCoWorkingComponent.prototype.CargarInformacionContratos = function () {
        var _this = this;
        this.InfoContractsList = [];
        this.ListaContatos_Space = [];
        this.serviceSeach.GetContracts("ServiceSpaceContract", this.IdServicio, "getservicespacecontract_coworking").subscribe(function (respuesta) {
            if (respuesta.JSonResult != null) {
                respuesta.JSonResult.forEach(function (contract) { _this.InfoContractsList.push(contract); });
                _this.ActualizarListaContratos();
            }
            _this.isSpinnerVisible = false;
        }, function (error) {
            _this.isSpinnerVisible = false;
            _this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        });
    };
    ReservarCoWorkingComponent.prototype.ActualizarPorcentajeProgreso = function () {
        var porcent = ((this.IndiceEspacio + 1) / this.InfoReservaMemoria.Reservations.length) * 100;
        this.PorcentajeProgreso = porcent > 100 ? 100 : porcent;
    };
    ReservarCoWorkingComponent.prototype.ActualizarSubtitulo = function () {
        var _this = this;
        if (this.detailInfoCoWorking != null && this.detailInfoCoWorking.length > 0) {
            var indexSpaceType = this.detailInfoCoWorking.findIndex(function (x) { return x.IdCoWorkingSpace == _this.InfoReservaMemoria.Reservations[_this.IndiceEspacio].IdSpace; });
            if (indexSpaceType != -1) {
                this.SubtituloTipoEspacio = this.detailInfoCoWorking[indexSpaceType].SpaceType;
                this.ActualizarPorcentajeProgreso();
            }
        }
    };
    ReservarCoWorkingComponent.prototype.ActualizarListaContratos = function () {
        var _this = this;
        this.ListaContatos_Space = [];
        var defaultContract = new src_app_modelos_servicespacecontract_model__WEBPACK_IMPORTED_MODULE_8__["ServiceSpaceContract"]();
        defaultContract.IdServiceSpaceContract = "";
        defaultContract.IdContractType = "Seleccione";
        defaultContract.ContractValue = null;
        this.ListaContatos_Space.push(defaultContract);
        if (this.IndiceEspacio < this.InfoReservaMemoria.Reservations.length) {
            this.InfoContractsList.forEach(function (contract) {
                if (contract.IdServiceSpace == _this.InfoReservaMemoria.Reservations[_this.IndiceEspacio].IdSpace) {
                    contract.IdContractType = "$ " + contract.ContractValue + " - " + contract.IdContractType;
                    _this.ListaContatos_Space.push(contract);
                }
            });
        }
    };
    ReservarCoWorkingComponent.prototype.Continuar = function () {
        if (this.MostrarFechaFinal && (!this.objResevar.FechaFin || !this.objResevar.FechaFin.year || !this.objResevar.FechaFin.month || !this.objResevar.FechaFin.day)) {
            this.mensaje = [
                {
                    id: 1,
                    type: 'warning',
                    message: "Especifíque primero un día en la fecha de finalización."
                }
            ];
            return;
        }
        if (this.MostrarCantidadPeriodo && (!this.objResevar.CountPer || this.objResevar.CountPer <= 0)) {
            this.mensaje = [
                {
                    id: 1,
                    type: 'warning',
                    message: "Especifíque la cantidad de " + this.TituloPeriodoContrato + " que desea contratar."
                }
            ];
            return;
        }
        this.GuardarInfoActual();
        if ((this.IndiceEspacio + 1) < this.InfoReservaMemoria.Reservations.length) {
            this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
            this.objResevar.CountPer = 0;
            this.MostrarFechaFinal = true;
            this.MostrarCantidadPeriodo = false;
            this.TituloPeriodoContrato = "Días";
            this.IndiceEspacio++;
            this.ListaContatos_Space = [];
            this.ActualizarSubtitulo();
            this.ActualizarListaContratos();
            this.formularioReservar.reset();
        }
        else {
            this.router.navigate(["/reservas/ResumenReserva/" + this.IdServicio]);
        }
    };
    ReservarCoWorkingComponent.prototype.Regresar = function () {
        this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
        this.objResevar.CountPer = 0;
        this.MostrarFechaFinal = true;
        this.MostrarCantidadPeriodo = false;
        this.TituloPeriodoContrato = "Días";
        this.IndiceEspacio--;
        this.ListaContatos_Space = [];
        this.ActualizarSubtitulo();
        this.ActualizarListaContratos();
        this.formularioReservar.reset();
        var porcent = this.IndiceEspacio / this.InfoReservaMemoria.Reservations.length * 100;
        this.PorcentajeProgreso = porcent > 100 ? 100 : porcent;
    };
    ReservarCoWorkingComponent.prototype.GuardarInfoActual = function () {
        var _this = this;
        this.CalcularFechaFinal();
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].IdServiceSpaceContract = this.objResevar.IdContrato;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].Count = this.objResevar.CountEspace;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].InitDate = this.objResevar.FechaInicio;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].EndDate = this.objResevar.FechaFin;
        var indexContrato = this.ListaContatos_Space.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].Subtitulo = this.SubtituloTipoEspacio;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].TextoContrato = this.ListaContatos_Space[indexContrato].IdContractType;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].ValorContrato = this.CalcularValorContratado();
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        this.InfoReservasActuales[indexReserva] = this.InfoReservaMemoria;
        this.genStorageServ.setInformation("InfoReservations", this.InfoReservasActuales);
    };
    ReservarCoWorkingComponent.prototype.OnChange_Contrato = function () {
        var _this = this;
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            this.MostrarFechaFinal = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1);
            this.MostrarCantidadPeriodo = !this.MostrarFechaFinal;
            this.TituloPeriodoContrato = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? "Días" :
                ((tipoContrato.indexOf("Semanal") != -1) ? "Semanas" :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? "Quincenas" :
                        ((tipoContrato.indexOf("Mensual") != -1) ? "Meses" :
                            ((tipoContrato.indexOf("Semestral") != -1) ? "Semestres" :
                                ((tipoContrato.indexOf("Anual") != -1) ? "Años" : "Periodo")))));
        }
    };
    ReservarCoWorkingComponent.prototype.CalcularFechaFinal = function () {
        var _this = this;
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            var incrementoDias = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? 0 :
                ((tipoContrato.indexOf("Semanal") != -1) ? 7 :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? 15 :
                        ((tipoContrato.indexOf("Mensual") != -1) ? 30 :
                            ((tipoContrato.indexOf("Semestral") != -1) ? 180 :
                                ((tipoContrato.indexOf("Anual") != -1) ? 360 : 0)))));
            if (incrementoDias > 0) {
                incrementoDias = incrementoDias * this.objResevar.CountPer;
                var fechaAux = new Date(this.objResevar.FechaInicio.year, this.objResevar.FechaInicio.month - 1, this.objResevar.FechaInicio.day);
                fechaAux.setDate(fechaAux.getDate() + incrementoDias + 1);
                this.objResevar.FechaFin = { year: fechaAux.getFullYear(), month: fechaAux.getMonth() + 1, day: fechaAux.getDate() };
            }
        }
    };
    ReservarCoWorkingComponent.prototype.CalcularValorContratado = function () {
        var _this = this;
        var fechaIni = new Date(this.objResevar.FechaInicio.year, this.objResevar.FechaInicio.month - 1, this.objResevar.FechaInicio.day).getTime();
        var fechaFin = new Date(this.objResevar.FechaFin.year, this.objResevar.FechaFin.month - 1, this.objResevar.FechaFin.day).getTime();
        var cantidadDias = (fechaFin - fechaIni) / (1000 * 60 * 60 * 24);
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            var diasPorPeriodo = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? 1 :
                ((tipoContrato.indexOf("Semanal") != -1) ? 7 :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? 15 :
                        ((tipoContrato.indexOf("Mensual") != -1) ? 30 :
                            ((tipoContrato.indexOf("Semestral") != -1) ? 180 :
                                ((tipoContrato.indexOf("Anual") != -1) ? 360 : 0)))));
            return Number(this.InfoContractsList[index].ContractValue) * cantidadDias / diasPorPeriodo * this.objResevar.CountEspace;
        }
        return 0;
    };
    ReservarCoWorkingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ReservarCoWorking',
            template: __webpack_require__(/*! ./ReservarCoWorking.component.html */ "./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarConfig"],
            src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_5__["SearchServiceService"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_6__["GenericStorageService"]])
    ], ReservarCoWorkingComponent);
    return ReservarCoWorkingComponent;
}());



/***/ }),

/***/ "./src/app/reservas/ReservarHotel/ReservarHotel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/reservas/ReservarHotel/ReservarHotel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n<app-BackButton *ngIf=\"IndiceEspacio > 0\" (click)=\"Regresar()\"></app-BackButton>\r\n\r\n<div *ngIf=\"isSpinnerVisible == true\" class=\"page-loading-base proccessing\">\r\n    <img src=\"assets/images/loading.gif\" class=\"loading-icon proccessing\">\r\n</div>\r\n\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            \r\n            <div class=\"card-body tittlePublicaciones\">\r\n                <h3 class=\"card-title\">Reserva tu {{InfoReservaMemoria?.Tipo}}.</h3>\r\n                <h4 class=\"card-title\">Completa la siguiente información para reservar el {{InfoReservaMemoria?.Tipo}}.</h4>\r\n                <h5 class=\"card-title\">{{InfoReservaMemoria?.Titulo}}</h5>\r\n                <ngb-progressbar type=\"info\" [value]=\"PorcentajeProgreso\" height=\"18px\"></ngb-progressbar>\r\n            </div>\r\n            <hr class=\"m-t-0\">\r\n            \r\n            <!-- INFORMACION BASICA - CONTACTO -->\r\n            <form [formGroup]=\"formularioReservar\" class=\"form-horizontal r-separator\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{SubtituloTipoEspacio}}</h4>\r\n                    <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n                    \r\n                    <div *ngIf=\"ListaContatos_Space != null && ListaContatos_Space.length > 0\">\r\n                        <div class=\"row p-b-15\">\r\n                            <label  class=\"col-sm-3 control-label col-form-label\">Seleccione un contrato</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <select (change)=\"OnChange_Contrato();\" [ngClass]=\"{'is-invalid': (f.IdContrato.invalid && (f.IdContrato.dirty || f.IdContrato.touched))}\" [(ngModel)]=\"objResevar.IdContrato\"  class=\"form-control form-control-line\" formControlName=\"IdContrato\">\r\n                                    <option  *ngFor=\"let itemContrato of ListaContatos_Space\" value=\"{{itemContrato.IdServiceSpaceContract}}\">{{itemContrato.IdContractType}}</option>                    \r\n                                </select>                             \r\n                                <span class=\"LabelOblitaorio Select\">*</span>       \r\n                                <div  *ngIf=\"f.IdContrato.invalid && (f.IdContrato.dirty || f.IdContrato.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.IdContrato.errors.required\" style=\"vertical-align: inherit;\">Seleccione un contrato.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Cantidad de espacios a reservar</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input [ngClass]=\"{'is-invalid': (f.CountEspace.invalid && (f.CountEspace.dirty || f.CountEspace.touched))}\" [(ngModel)]=\"objResevar.CountEspace\"  class=\"form-control form-control-line\" placeholder=\"Cantidad\"  formControlName=\"CountEspace\">                                         \r\n                                <span class=\"LabelOblitaorio\">*</span>      \r\n                                <div  *ngIf=\"f.CountEspace.invalid && (f.CountEspace.dirty || f.CountEspace.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.CountEspace.errors.required\" style=\"vertical-align: inherit;\">Indique la cantidad de espacios de este tipo.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"MostrarCantidadPeriodo == true\" class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Cantidad de {{TituloPeriodoContrato}}</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <input [ngClass]=\"{'is-invalid': (f.CountPer.invalid && (f.CountPer.dirty || f.CountPer.touched))}\" [(ngModel)]=\"objResevar.CountPer\"  class=\"form-control form-control-line\" placeholder=\"Cantidad de periodos\"  formControlName=\"CountPer\">                                         \r\n                                <span class=\"LabelOblitaorio\">*</span>      \r\n                                <div  *ngIf=\"f.CountPer.invalid && (f.CountPer.dirty || f.CountPer.touched)\" class=\"invalid-feedback\">\r\n                                    <font style=\"vertical-align: inherit;\">\r\n                                        <font *ngIf=\"f.CountPer.errors.required\" style=\"vertical-align: inherit;\">Indique la cantidad de periodos que desea contratar.</font>\r\n                                    </font>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Fecha Inicio </label>\r\n                            <div class=\"col-sm-9\">\r\n                                <div class=\"input-group\">\r\n                                    <input [ngClass]=\"{'is-invalid': (f.FechaInicio.invalid && (f.FechaInicio.dirty || f.FechaInicio.touched))}\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"objResevar.FechaInicio\" formControlName=\"FechaInicio\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </button>\r\n                                        <div  *ngIf=\"f.FechaInicio.invalid && (f.FechaInicio.dirty || f.FechaInicio.touched)\" class=\"invalid-feedback\">\r\n                                            <font style=\"vertical-align: inherit;\">\r\n                                                <font *ngIf=\"f.FechaInicio.errors.required\" style=\"vertical-align: inherit;\">Seleccione la fecha inicio </font>\r\n                                            </font>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"LabelOblitaorio\" sytle=\"left: -50px !important;\">*</span>      \r\n                            </div>                     \r\n                        </div>\r\n\r\n                        <div *ngIf=\"MostrarFechaFinal == true\" class=\"row p-b-15\">\r\n                            <label class=\"col-sm-3 control-label col-form-label\">Fecha Finalización </label>\r\n                            <div class=\"col-sm-9\">                          \r\n                                <div class=\"input-group\">\r\n                                    <input [ngClass]=\"{'is-invalid': (f.FechaFin.invalid && (f.FechaFin.dirty || f.FechaFin.touched))}\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"objResevar.FechaFin\" formControlName=\"FechaFin\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </button>\r\n                                        <div  *ngIf=\"f.FechaFin.invalid && (f.FechaFin.dirty || f.FechaFin.touched)\" class=\"invalid-feedback\">\r\n                                            <font style=\"vertical-align: inherit;\">\r\n                                                <font *ngIf=\"f.FechaFin.errors.required\" style=\"vertical-align: inherit;\">Seleccione la fecha de finalización</font>\r\n                                            </font>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"LabelOblitaorio\" sytle=\"left: -50px !important;\">*</span>      \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card-body botonesFooter2\">\r\n                    <button [disabled]=\"formularioReservar.invalid\" (click)=\"Continuar()\" class=\"btn btn-info waves-effect waves-light buttonRight\" type=\"button\">Continuar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n"

/***/ }),

/***/ "./src/app/reservas/ReservarHotel/ReservarHotel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/reservas/ReservarHotel/ReservarHotel.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReservarHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarHotelComponent", function() { return ReservarHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modelos/Servicereserva.model */ "./src/app/modelos/Servicereserva.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Search-service.service */ "./src/app/services/Search-service.service.ts");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_modelos_servicespacecontract_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modelos/servicespacecontract.model */ "./src/app/modelos/servicespacecontract.model.ts");









var ReservarHotelComponent = /** @class */ (function () {
    function ReservarHotelComponent(fb, router, route, config1, serviceSeach, genStorageServ) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.serviceSeach = serviceSeach;
        this.genStorageServ = genStorageServ;
        this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
        this.mensaje = [];
        this.isSpinnerVisible = true;
        this.MostrarFechaFinal = true;
        this.MostrarCantidadPeriodo = false;
        this.TituloPeriodoContrato = "";
        this.InfoContractsList = [];
        this.InfoReservasActuales = [];
        this.SpaceTypeList = [];
        this.IndiceEspacio = 0;
        this.PorcentajeProgreso = 0;
        this.ListaContatos_Space = [];
        this.detailInfoRooms = [];
        config1 = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarConfig"]();
        config1.max = 80;
        config1.striped = true;
        config1.animated = true;
        config1.type = 'success';
        this.IdServicio = this.route.snapshot.params.IdService;
        this.serviceSeach.GetDetailsInfo("DetailInfoRooms", this.IdServicio).subscribe(function (respuesta) {
            _this.detailInfoRooms = respuesta.JSonResult;
            _this.PrecargarInformacionReserva();
        }, function (error) {
            _this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        });
    }
    ReservarHotelComponent.prototype.ngOnInit = function () {
        this.formularioReservar = this.fb.group({
            IdContrato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            CountEspace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)])],
            FechaInicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            FechaFin: ['', null],
            CountPer: ['', null]
        });
    };
    Object.defineProperty(ReservarHotelComponent.prototype, "f", {
        get: function () {
            var respuesta = this.formularioReservar;
            return respuesta.controls;
        },
        enumerable: true,
        configurable: true
    });
    ReservarHotelComponent.prototype.PrecargarInformacionReserva = function () {
        var _this = this;
        this.InfoReservasActuales = this.genStorageServ.getInformation("InfoReservations");
        if (this.InfoReservasActuales == null) {
            this.InfoReservasActuales = [];
        }
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        if (indexReserva == -1 || this.InfoReservasActuales[indexReserva].Reservations == null) {
            this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        }
        this.InfoReservaMemoria = this.InfoReservasActuales[indexReserva];
        this.ActualizarSubtitulo();
        this.CargarInformacionContratos();
    };
    ReservarHotelComponent.prototype.CargarInformacionContratos = function () {
        var _this = this;
        this.InfoContractsList = [];
        this.ListaContatos_Space = [];
        this.serviceSeach.GetContracts("ServiceSpaceContract", this.IdServicio, "getservicespacecontract_hotel").subscribe(function (respuesta) {
            if (respuesta.JSonResult != null) {
                respuesta.JSonResult.forEach(function (contract) { _this.InfoContractsList.push(contract); });
                _this.ActualizarListaContratos();
            }
            _this.isSpinnerVisible = false;
        }, function (error) {
            _this.isSpinnerVisible = false;
            _this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        });
    };
    ReservarHotelComponent.prototype.ActualizarPorcentajeProgreso = function () {
        var porcent = ((this.IndiceEspacio + 1) / this.InfoReservaMemoria.Reservations.length) * 100;
        this.PorcentajeProgreso = porcent > 100 ? 100 : porcent;
    };
    ReservarHotelComponent.prototype.ActualizarSubtitulo = function () {
        var _this = this;
        if (this.detailInfoRooms != null && this.detailInfoRooms.length > 0) {
            var indexSpaceType = this.detailInfoRooms.findIndex(function (x) { return x.IdRoomSpace == _this.InfoReservaMemoria.Reservations[_this.IndiceEspacio].IdSpace; });
            if (indexSpaceType != -1) {
                this.SubtituloTipoEspacio = this.detailInfoRooms[indexSpaceType].Name;
                this.ActualizarPorcentajeProgreso();
            }
        }
    };
    ReservarHotelComponent.prototype.ActualizarListaContratos = function () {
        var _this = this;
        this.ListaContatos_Space = [];
        var defaultContract = new src_app_modelos_servicespacecontract_model__WEBPACK_IMPORTED_MODULE_8__["ServiceSpaceContract"]();
        defaultContract.IdServiceSpaceContract = "";
        defaultContract.IdContractType = "Seleccione";
        defaultContract.ContractValue = null;
        this.ListaContatos_Space.push(defaultContract);
        if (this.IndiceEspacio < this.InfoReservaMemoria.Reservations.length) {
            this.InfoContractsList.forEach(function (contract) {
                if (contract.IdServiceSpace == _this.InfoReservaMemoria.Reservations[_this.IndiceEspacio].IdSpace) {
                    contract.IdContractType = "$ " + contract.ContractValue + " - " + contract.IdContractType;
                    _this.ListaContatos_Space.push(contract);
                }
            });
        }
    };
    ReservarHotelComponent.prototype.Continuar = function () {
        if (this.MostrarFechaFinal && (!this.objResevar.FechaFin || !this.objResevar.FechaFin.year || !this.objResevar.FechaFin.month || !this.objResevar.FechaFin.day)) {
            this.mensaje = [
                {
                    id: 1,
                    type: 'warning',
                    message: "Especifíque primero un día en la fecha de finalización."
                }
            ];
            return;
        }
        if (this.MostrarCantidadPeriodo && (!this.objResevar.CountPer || this.objResevar.CountPer <= 0)) {
            this.mensaje = [
                {
                    id: 1,
                    type: 'warning',
                    message: "Especifíque la cantidad de " + this.TituloPeriodoContrato + " que desea contratar."
                }
            ];
            return;
        }
        this.GuardarInfoActual();
        if ((this.IndiceEspacio + 1) < this.InfoReservaMemoria.Reservations.length) {
            this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
            this.objResevar.CountPer = 0;
            this.MostrarFechaFinal = true;
            this.MostrarCantidadPeriodo = false;
            this.TituloPeriodoContrato = "Días";
            this.IndiceEspacio++;
            this.ListaContatos_Space = [];
            this.ActualizarSubtitulo();
            this.ActualizarListaContratos();
            this.formularioReservar.reset();
        }
        else {
            this.router.navigate(["/reservas/ResumenReserva/" + this.IdServicio]);
        }
    };
    ReservarHotelComponent.prototype.Regresar = function () {
        this.objResevar = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_2__["ServiceReserva"]();
        this.objResevar.CountPer = 0;
        this.MostrarFechaFinal = true;
        this.MostrarCantidadPeriodo = false;
        this.TituloPeriodoContrato = "Días";
        this.IndiceEspacio--;
        this.ListaContatos_Space = [];
        this.ActualizarSubtitulo();
        this.ActualizarListaContratos();
        this.formularioReservar.reset();
        var porcent = this.IndiceEspacio / this.InfoReservaMemoria.Reservations.length * 100;
        this.PorcentajeProgreso = porcent > 100 ? 100 : porcent;
    };
    ReservarHotelComponent.prototype.GuardarInfoActual = function () {
        var _this = this;
        this.CalcularFechaFinal();
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].IdServiceSpaceContract = this.objResevar.IdContrato;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].Count = this.objResevar.CountEspace;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].InitDate = this.objResevar.FechaInicio;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].EndDate = this.objResevar.FechaFin;
        var indexContrato = this.ListaContatos_Space.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].Subtitulo = this.SubtituloTipoEspacio;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].TextoContrato = this.ListaContatos_Space[indexContrato].IdContractType;
        this.InfoReservaMemoria.Reservations[this.IndiceEspacio].ValorContrato = this.CalcularValorContratado();
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        this.InfoReservasActuales[indexReserva] = this.InfoReservaMemoria;
        this.genStorageServ.setInformation("InfoReservations", this.InfoReservasActuales);
    };
    ReservarHotelComponent.prototype.OnChange_Contrato = function () {
        var _this = this;
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            this.MostrarFechaFinal = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1);
            this.MostrarCantidadPeriodo = !this.MostrarFechaFinal;
            this.TituloPeriodoContrato = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? "Días" :
                ((tipoContrato.indexOf("Semanal") != -1) ? "Semanas" :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? "Quincenas" :
                        ((tipoContrato.indexOf("Mensual") != -1) ? "Meses" :
                            ((tipoContrato.indexOf("Semestral") != -1) ? "Semestres" :
                                ((tipoContrato.indexOf("Anual") != -1) ? "Años" : "Periodo")))));
        }
    };
    ReservarHotelComponent.prototype.CalcularFechaFinal = function () {
        var _this = this;
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            var incrementoDias = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? 0 :
                ((tipoContrato.indexOf("Semanal") != -1) ? 7 :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? 15 :
                        ((tipoContrato.indexOf("Mensual") != -1) ? 30 :
                            ((tipoContrato.indexOf("Semestral") != -1) ? 180 :
                                ((tipoContrato.indexOf("Anual") != -1) ? 360 : 0)))));
            if (incrementoDias > 0) {
                incrementoDias = incrementoDias * this.objResevar.CountPer;
                var fechaAux = new Date(this.objResevar.FechaInicio.year, this.objResevar.FechaInicio.month - 1, this.objResevar.FechaInicio.day);
                fechaAux.setDate(fechaAux.getDate() + incrementoDias + 1);
                this.objResevar.FechaFin = { year: fechaAux.getFullYear(), month: fechaAux.getMonth() + 1, day: fechaAux.getDate() };
            }
        }
    };
    ReservarHotelComponent.prototype.CalcularValorContratado = function () {
        var _this = this;
        var fechaIni = new Date(this.objResevar.FechaInicio.year, this.objResevar.FechaInicio.month - 1, this.objResevar.FechaInicio.day).getTime();
        var fechaFin = new Date(this.objResevar.FechaFin.year, this.objResevar.FechaFin.month - 1, this.objResevar.FechaFin.day).getTime();
        var cantidadDias = (fechaFin - fechaIni) / (1000 * 60 * 60 * 24);
        var index = this.InfoContractsList.findIndex(function (x) { return x.IdServiceSpaceContract == _this.objResevar.IdContrato; });
        if (index != -1) {
            var tipoContrato = this.InfoContractsList[index].IdContractType;
            var diasPorPeriodo = (tipoContrato.indexOf("Diario") != -1 || tipoContrato.indexOf("Noche") != -1) ? 1 :
                ((tipoContrato.indexOf("Semanal") != -1) ? 7 :
                    ((tipoContrato.indexOf("Quincenal") != -1) ? 15 :
                        ((tipoContrato.indexOf("Mensual") != -1) ? 30 :
                            ((tipoContrato.indexOf("Semestral") != -1) ? 180 :
                                ((tipoContrato.indexOf("Anual") != -1) ? 360 : 0)))));
            return Number(this.InfoContractsList[index].ContractValue) * cantidadDias / diasPorPeriodo * this.objResevar.CountEspace;
        }
        return 0;
    };
    ReservarHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ReservarHotel',
            template: __webpack_require__(/*! ./ReservarHotel.component.html */ "./src/app/reservas/ReservarHotel/ReservarHotel.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarConfig"],
            src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_5__["SearchServiceService"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_6__["GenericStorageService"]])
    ], ReservarHotelComponent);
    return ReservarHotelComponent;
}());



/***/ }),

/***/ "./src/app/reservas/ResumenReserva/ResumenReserva.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/reservas/ResumenReserva/ResumenReserva.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-loading \r\n{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n    background: rgb(51, 51, 51);\r\n    /*background: linear-gradient(to right, #00e1f5 0, #0069e3 99%);*/\r\n    background: linear-gradient(to right, #21edff 0, #0099d2 99%);\r\n    opacity: 1;\r\n    transition: opacity 1s ease-in-out;\r\n    z-index: 10000;\r\n}\r\n\r\n.page-loading .MensajePersonalizado\r\n{\r\n    position: absolute;\r\n    top: 57%;\r\n    width: 60%;\r\n    left: 18%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXMvUmVzdW1lblJlc2VydmEvUmVzdW1lblJlc2VydmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsaUVBQWlFO0lBQ2pFLDZEQUE2RDtJQUM3RCxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmFzL1Jlc3VtZW5SZXNlcnZhL1Jlc3VtZW5SZXNlcnZhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1sb2FkaW5nIFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGUxZjUgMCwgIzAwNjllMyA5OSUpOyovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMWVkZmYgMCwgIzAwOTlkMiA5OSUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuLnBhZ2UtbG9hZGluZyAuTWVuc2FqZVBlcnNvbmFsaXphZG9cclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NyU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbGVmdDogMTglO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reservas/ResumenReserva/ResumenReserva.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/reservas/ResumenReserva/ResumenReserva.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n\r\n            <div class=\"card-body tittlePublicaciones\">\r\n                <h3 class=\"card-title\">Resumen de las Reservas!</h3>\r\n                <ngb-progressbar type=\"success\" [value]=\"100\" height=\"18px\"></ngb-progressbar>\r\n            </div>\r\n            <hr class=\"m-t-0\">\r\n            \r\n            <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n            \r\n            <div class=\"card-body tittlePublicaciones\">\r\n                <div class=\"row titleSeccion\">\r\n                    <div class=\"col-1\">\r\n                        <i style=\"font-size: 20px\" class=\"mdi mdi-human-handsup\"></i>\r\n                    </div>\r\n                    <div class=\"col-11\">\r\n                        <h3 class=\"card-title\">Información Completada!</h3>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row titleSeccion\" style=\"padding-bottom: 15px;\">\r\n                    <div class=\"col-12\">\r\n                        <h4 class=\"card-title\">{{InfoReservaMemoria?.Titulo}}</h4>\r\n                        <h5 class=\"card-title\">{{InfoReservaMemoria?.Tipo}}</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div  *ngFor=\"let itemReserva of InfoReservaMemoria?.Reservations\" class=\"row titleSeccion\" style=\"padding-bottom: 15px;\">\r\n                    <div class=\"col-1\"></div>\r\n                    <div class=\"col-1\"><i class=\"fas fa-check icon-especial2\"></i></div>\r\n                    <div class=\"col-10\">\r\n                        <h5 class=\"card-title\">Concepto: {{itemReserva.Subtitulo}}</h5>\r\n                        <h5 class=\"card-title\">Valor Contrato: {{itemReserva.TextoContrato}}</h5>\r\n                        <h5 class=\"card-title\">Cantidad de Espacios: {{itemReserva.Count}}</h5>\r\n                        <h5 class=\"card-title\">Inicio: {{itemReserva.InitDate.year}}/{{itemReserva.InitDate.month}}/{{itemReserva.InitDate.day}}</h5>\r\n                        <h5 class=\"card-title\">Finalización: {{itemReserva.EndDate.year}}/{{itemReserva.EndDate.month}}/{{itemReserva.EndDate.day}}</h5>\r\n\r\n                        <h5 class=\"card-title\">Valor Contratado: {{itemReserva.ValorContrato  | number:'1.0-8'}}</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row titleSeccion\" style=\"padding-bottom: 15px;\">\r\n                    <div class=\"col-1\">\r\n                    </div>\r\n                    <div class=\"col-11\">\r\n                        <h5 class=\"card-title\">\r\n                            Deseas confirmar la reserva?\r\n                        </h5>\r\n                    </div>\r\n                </div>\r\n                <button style=\"width: 100%\" (click)=\"EnviarReserva()\" class=\"btn btn-success waves-effect waves-light buttonLeft p-b-10\" type=\"button\">Confirmar Reserva</button>\r\n            </div>\r\n\r\n            \r\n        \r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n\r\n\r\n<div [ngClass]=\"{'show': isSpinnerVisible}\" class=\"page-loading\" *ngIf=\"isSpinnerVisible == true\">\r\n    <img src=\"assets/images/logo-light-text0.png\" class=\"loading-icon-bricks4us\">\r\n    <img src=\"assets/images/oval.svg\" class=\"loading-icon\">\r\n    <div class=\"MensajePersonalizado\">\r\n        <h4>Estamos procesando su reserva.</h4>\r\n        <h6>Por favor espere un momento.</h6>\r\n    </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/reservas/ResumenReserva/ResumenReserva.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/reservas/ResumenReserva/ResumenReserva.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResumenReservaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenReservaComponent", function() { return ResumenReservaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_Publicaciones_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/Publicaciones-service.service */ "./src/app/services/Publicaciones-service.service.ts");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var src_app_services_reservar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/reservar.service */ "./src/app/services/reservar.service.ts");
/* harmony import */ var src_app_utilidades_ReservasNotificacion_ReservasNotificacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utilidades/ReservasNotificacion/ReservasNotificacion.component */ "./src/app/utilidades/ReservasNotificacion/ReservasNotificacion.component.ts");








var ResumenReservaComponent = /** @class */ (function () {
    function ResumenReservaComponent(rutaActiva, router, config1, genStorageServ, ReservasService, servicePublicaciones) {
        this.rutaActiva = rutaActiva;
        this.router = router;
        this.genStorageServ = genStorageServ;
        this.ReservasService = ReservasService;
        this.servicePublicaciones = servicePublicaciones;
        this.isSpinnerVisible = false;
        this.mensaje = [];
        this.InfoReservasActuales = [];
        this.IdServicio = this.rutaActiva.snapshot.params.IdService;
        this.PrecargarInformacionReserva();
        config1 = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarConfig"]();
        config1.max = 80;
        config1.striped = true;
        config1.animated = true;
        config1.type = 'success';
    }
    ResumenReservaComponent.prototype.ngOnInit = function () {
    };
    ResumenReservaComponent.prototype.PrecargarInformacionReserva = function () {
        var _this = this;
        this.InfoReservasActuales = this.genStorageServ.getInformation("InfoReservations");
        if (this.InfoReservasActuales == null) {
            this.InfoReservasActuales = [];
        }
        var indexReserva = this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
        if (indexReserva == -1 || this.InfoReservasActuales[indexReserva].Reservations == null) {
            this.mensaje = [{ id: 1, type: 'success', message: "Estamos teniendo dificultades. Por favor intente de nuevo o genere un nuevo ticket al area de soporte técnico!" }];
            return;
        }
        this.InfoReservaMemoria = this.InfoReservasActuales[indexReserva];
    };
    ResumenReservaComponent.prototype.EnviarReserva = function () {
        var _this = this;
        this.isSpinnerVisible = true;
        this.results$ = this.ReservasService.crearReserva(this.InfoReservaMemoria);
        this.results$.subscribe(function (res) {
            _this.isSpinnerVisible = false;
            var userResponse = res;
            if (userResponse != null && userResponse.Exitoso) {
                _this.mensaje = [{ id: 2, type: 'success', message: 'Su reserva se ha realizado exitósamente' }];
                var indexReserva = _this.InfoReservasActuales.findIndex(function (x) { return x.IdService == _this.IdServicio; });
                if (indexReserva != -1) {
                    _this.InfoReservasActuales.splice(indexReserva, 1);
                    _this.genStorageServ.setInformation("InfoReservations", _this.InfoReservasActuales);
                    _this.compReservaNotif.CargarReservasPendientes();
                }
                _this.router.navigate(["/reservas/MisReservas"]);
            }
            else {
                _this.mensaje = [{ id: 2, type: 'warning', message: userResponse.MensajeResultado }];
            }
        }, function (error) {
            _this.isSpinnerVisible = false;
            _this.mensaje = [{
                    id: 2,
                    type: 'danger',
                    message: error.statusText
                }];
        });
    };
    ResumenReservaComponent.IsEquasError = false;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_utilidades_ReservasNotificacion_ReservasNotificacion_component__WEBPACK_IMPORTED_MODULE_7__["ReservasNotificacionComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_utilidades_ReservasNotificacion_ReservasNotificacion_component__WEBPACK_IMPORTED_MODULE_7__["ReservasNotificacionComponent"])
    ], ResumenReservaComponent.prototype, "compReservaNotif", void 0);
    ResumenReservaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resregistro',
            template: __webpack_require__(/*! ./ResumenReserva.component.html */ "./src/app/reservas/ResumenReserva/ResumenReserva.component.html"),
            styles: [__webpack_require__(/*! ./ResumenReserva.component.css */ "./src/app/reservas/ResumenReserva/ResumenReserva.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarConfig"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            src_app_services_reservar_service__WEBPACK_IMPORTED_MODULE_6__["ReservarService"],
            _services_Publicaciones_service_service__WEBPACK_IMPORTED_MODULE_4__["PublicacionesServiceService"]])
    ], ResumenReservaComponent);
    return ResumenReservaComponent;
}());



/***/ }),

/***/ "./src/app/reservas/misreservas/misreservas.component.css":
/*!****************************************************************!*\
  !*** ./src/app/reservas/misreservas/misreservas.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-info\r\n{\r\n    font-size: 22px !important;\r\n}\r\n\r\n\r\n.table th, .table td \r\n{\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.badge.badge-pill {\r\n    font-size: 100%;\r\n}\r\n\r\n\r\n@media (min-width: 768px)\r\n{\r\n    h6.FechaTicket,\r\n    .h6.FechaTicket\r\n    {\r\n        width: 30%;\r\n        display: inline-block;\r\n    }\r\n\r\n    h6, .h6 {\r\n        font-size: 14px;\r\n        width: 50%;\r\n        display: inline-block;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXMvbWlzcmVzZXJ2YXMvbWlzcmVzZXJ2YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7QUFDOUI7OztBQUdBOztJQUVJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTs7SUFFSTs7O1FBR0ksVUFBVTtRQUNWLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXNlcnZhcy9taXNyZXNlcnZhcy9taXNyZXNlcnZhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24taW5mb1xyXG57XHJcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIFxyXG57XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2UtcGlsbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcclxue1xyXG4gICAgaDYuRmVjaGFUaWNrZXQsXHJcbiAgICAuaDYuRmVjaGFUaWNrZXRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBoNiwgLmg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reservas/misreservas/misreservas.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/reservas/misreservas/misreservas.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n\r\n<div *ngIf=\"isSpinnerVisible == true\" class=\"page-loading-base proccessing\">\r\n    <img src=\"assets/images/loading.gif\" class=\"loading-icon proccessing\">\r\n</div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body tittlePublicaciones p-b-0\">\r\n                    <h3 class=\"card-title\">Información de mis reservas</h3>\r\n                    <h5 class=\"card-title subtitle\">Consulte aquí el estado de sus reservas</h5>     \r\n                </div>\r\n\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                                <tr *ngFor=\"let row of listareserva; let indiceForm = index;\">\r\n                                    <td>\r\n                                            <div class=\"row\">\r\n                                                <span _ngcontent-c2=\"\" [ngClass]=\"{ 'badge-light':(row.ReservationState == 0), 'badge-warning':(row.ReservationState == 1), 'badge-success': (row.ReservationState == 3), 'badge-danger':(row.ReservationState == 4) }\" class=\"badge badge-pill float-left\" style=\"font-size: 17px !important; width: 100%;margin-bottom: 10px;\">\r\n                                                    {{ row.ReservationState == 0? 'Pendiente':row.ReservationState == 1?'Aprobado':row.ReservationState == 3?'Pagado':'Rechazado' }}\r\n                                                </span><br>\r\n                                            </div>\r\n\r\n                                            <h5><span style=\"font-weight: 500;\">{{ row.IdServiceType }} - {{row.IdService}}</span></h5>\r\n                                            <h5><span style=\"font-weight: 500;\">{{ row.IdSpace }}</span></h5>\r\n                                            <h6><span style=\"font-weight: 500;\">Valor del Contrato:</span> {{ row.TextoContrato }}</h6>\r\n                                            <h6><span style=\"font-weight: 500;\">Fecha Inicialización:</span> {{row.InitDate | date:'shortDate' }}</h6>\r\n                                            <h6><span style=\"font-weight: 500;\">Fecha Finalización:</span> {{row.EndDate | date:'shortDate'}}</h6>\r\n\r\n                                            <h6><span style=\"font-weight: 500;\">Valor Contratado:</span> $ {{row.ValorContrato  | number:'1.0-8'}}</h6>\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-4\"></div>\r\n                                                <div class=\"col-4\">\r\n                                                    <span *ngIf=\"row.ReservationState == 1\">\r\n                                                        <a  (click)=\"OnFormClick(row.IdReservation);\" href=\"javascript:void(0);\"> \r\n                                                            <i class=\"fab fa-bitcoin\" style=\"font-size: 35px; color: #ffb41f;\"></i> \r\n                                                        </a>\r\n                                                        <span style=\"position: relative; top: -5px; left: 5px;\">Pagar</span>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"col-4\"></div>\r\n                                            </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/reservas/misreservas/misreservas.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/reservas/misreservas/misreservas.component.ts ***!
  \***************************************************************/
/*! exports provided: MisreservasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisreservasComponent", function() { return MisreservasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_reservar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/reservar.service */ "./src/app/services/reservar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modelos/Servicereserva.model */ "./src/app/modelos/Servicereserva.model.ts");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");






//declare const EnviarPago: any;
var MisreservasComponent = /** @class */ (function () {
    function MisreservasComponent(router, genStorageServ, reservaservice) {
        this.router = router;
        this.genStorageServ = genStorageServ;
        this.reservaservice = reservaservice;
        this.listareserva = [];
        this.busqueda = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_4__["ServiceReserva"]();
        this.isSpinnerVisible = true;
        this.page = 1;
        this.pageSize = 2;
    }
    MisreservasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultsConsultaReserva$ = this.reservaservice.ConsultarMisReservas();
        this.resultsConsultaReserva$.subscribe(function (respuesta) {
            _this.listareserva = respuesta.JSonResult;
            _this.listareserva.slice((_this.page - 1) * _this.pageSize, (_this.page - 1) * _this.pageSize + _this.pageSize);
            _this.isSpinnerVisible = false;
        }, function (error) {
            _this.isSpinnerVisible = false;
        });
    };
    MisreservasComponent.prototype.OnFormClick = function (IdReservation) {
        var index = this.listareserva.findIndex(function (x) { return x.IdReservation == IdReservation; });
        if (index != -1) {
            this.genStorageServ.setInformation("InformacionParaPago", this.listareserva[index]);
            this.router.navigate(["/pagos/pagobitcoint/" + IdReservation]);
        }
    };
    MisreservasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-misreservas',
            template: __webpack_require__(/*! ./misreservas.component.html */ "./src/app/reservas/misreservas/misreservas.component.html"),
            styles: [__webpack_require__(/*! ./misreservas.component.css */ "./src/app/reservas/misreservas/misreservas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_reservar_service__WEBPACK_IMPORTED_MODULE_1__["ReservarService"]])
    ], MisreservasComponent);
    return MisreservasComponent;
}());



/***/ }),

/***/ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/reservas/misreservasproveedor/misreservasproveedor.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-info\r\n{\r\n    font-size: 22px !important;\r\n}\r\n\r\n\r\n.table th, .table td \r\n{\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.badge.badge-pill {\r\n    font-size: 100%;\r\n}\r\n\r\n\r\n@media (min-width: 768px)\r\n{\r\n    h6.FechaTicket,\r\n    .h6.FechaTicket\r\n    {\r\n        width: 30%;\r\n        display: inline-block;\r\n    }\r\n\r\n    h6, .h6 {\r\n        font-size: 14px;\r\n        width: 50%;\r\n        display: inline-block;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXMvbWlzcmVzZXJ2YXNwcm92ZWVkb3IvbWlzcmVzZXJ2YXNwcm92ZWVkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7QUFDOUI7OztBQUdBOztJQUVJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTs7SUFFSTs7O1FBR0ksVUFBVTtRQUNWLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXNlcnZhcy9taXNyZXNlcnZhc3Byb3ZlZWRvci9taXNyZXNlcnZhc3Byb3ZlZWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24taW5mb1xyXG57XHJcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIFxyXG57XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2UtcGlsbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcclxue1xyXG4gICAgaDYuRmVjaGFUaWNrZXQsXHJcbiAgICAuaDYuRmVjaGFUaWNrZXRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBoNiwgLmg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/reservas/misreservasproveedor/misreservasproveedor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n\r\n<div *ngIf=\"isSpinnerVisible == true\" class=\"page-loading-base proccessing\">\r\n    <img src=\"assets/images/loading.gif\" class=\"loading-icon proccessing\">\r\n</div>\r\n\r\n    \r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body tittlePublicaciones p-b-0\">\r\n                <h3 class=\"card-title\">Tus Solicitudes de  Reserva </h3>\r\n                <h5 class=\"card-title subtitle\">Consulte aquí el estado de sus reservas</h5>     \r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n               <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of listareserva;\">\r\n                                <td>\r\n                                    <div class=\"row\">\r\n                                        <span _ngcontent-c2=\"\" [ngClass]=\"{ 'badge-light':(row.ReservationState == 0), 'badge-warning':(row.ReservationState == 1), 'badge-success': (row.ReservationState == 3), 'badge-danger':(row.ReservationState == 4) }\" class=\"badge badge-pill float-left\" style=\"font-size: 17px !important; width: 100%;margin-bottom: 10px;\">\r\n                                            {{ row.ReservationState == 0? 'Pendiente':row.ReservationState == 1?'Aprobado':row.ReservationState == 3?'Pagado':'Rechazado' }}\r\n                                        </span><br>\r\n                                    </div>\r\n\r\n                                    <h5><span style=\"font-weight: 500;\">{{ row.IdServiceType }} - {{row.IdService}}</span></h5>\r\n                                    <h5><span style=\"font-weight: 500;\">{{ row.IdSpace }}</span></h5>\r\n                                    <h6><span style=\"font-weight: 500;\">Valor del Contrato:</span> {{ row.TextoContrato }}</h6>\r\n                                    <h6><span style=\"font-weight: 500;\">Cantidad de espacios:</span> {{ row.Count }}</h6>\r\n                                    <h6><span style=\"font-weight: 500;\">Fecha Inicialización:</span> {{row.InitDate | date:'shortDate' }}</h6>\r\n                                    <h6><span style=\"font-weight: 500;\">Fecha Finalización:</span> {{row.EndDate | date:'shortDate'}}</h6>\r\n                                    <h6><span style=\"font-weight: 500;\">Valor Contratado:</span> $ {{row.ValorContrato  | number:'1.0-8'}}</h6>\r\n\r\n                                    <div *ngIf=\"row.ReservationState == 0\" class=\"row\">\r\n                                        <div class=\"col-4\"></div>\r\n                                        <div class=\"col-2\">\r\n                                            <span style=\"\">\r\n                                                <a (click)=\"aprobarrechazar(row.IdReservation,1)\" routerLinkActive=\"active\"> \r\n                                                    <i class=\"far fa-thumbs-up\"  style=\"font-size: 22px; color: #0fbfe6;\"></i> \r\n                                                </a>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-2\">\r\n                                            <span style=\"\">\r\n                                                <a (click)=\"aprobarrechazar(row.IdReservation,4)\" routerLinkActive=\"active\"> \r\n                                                    <i class=\" far fa-thumbs-down\" style=\"font-size: 22px; color: #ec5656;\"></i> \r\n                                                </a>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-4\"></div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/reservas/misreservasproveedor/misreservasproveedor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Misreservasproveedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Misreservasproveedor", function() { return Misreservasproveedor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_reservar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reservar.service */ "./src/app/services/reservar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modelos/Servicereserva.model */ "./src/app/modelos/Servicereserva.model.ts");





var Misreservasproveedor = /** @class */ (function () {
    function Misreservasproveedor(router, reservaservice) {
        this.router = router;
        this.reservaservice = reservaservice;
        this.listareserva = [];
        this.busqueda = new _modelos_Servicereserva_model__WEBPACK_IMPORTED_MODULE_4__["ServiceReserva"]();
        this.mensaje = [];
        this.isSpinnerVisible = true;
        this.page = 1;
        this.pageSize = 2;
    }
    Misreservasproveedor.prototype.ngOnInit = function () {
        var _this = this;
        this.resultsConsultaReserva$ = this.reservaservice.ConsultarMisReservasProveedor();
        this.resultsConsultaReserva$.subscribe(function (respuesta) {
            _this.listareserva = respuesta.JSonResult;
            _this.listareserva.slice((_this.page - 1) * _this.pageSize, (_this.page - 1) * _this.pageSize + _this.pageSize);
            _this.isSpinnerVisible = false;
        }, function (error) {
            _this.isSpinnerVisible = false;
        });
    };
    Misreservasproveedor.prototype.aprobarrechazar = function (IdReserva, estado) {
        var _this = this;
        this.isSpinnerVisible = true;
        this.resultsAprobar$ = this.reservaservice.Aprobarorechazarreserva(IdReserva, estado);
        this.resultsAprobar$.subscribe(function (respuesta) {
            if (respuesta.Exitoso === true) {
                var index = _this.listareserva.findIndex(function (x) { return x.IdReservation == IdReserva; });
                _this.listareserva[index].ReservationState = estado;
                _this.mensaje = [{ id: 1, type: 'success', message: 'La reserva ha sido ' + (estado == 1 ? 'Aprobada' : 'Rechazada') + ' exitosamente' }];
            }
            else {
                _this.mensaje = [{ id: 1, type: 'danger', message: 'Ha ocurrido un error al momento de aprobar la reserva comuniquese con el administrador' }];
            }
            _this.isSpinnerVisible = false;
        }, function (error) {
            console.log(error.statusText);
            _this.isSpinnerVisible = false;
        });
    };
    Misreservasproveedor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-misreservasproveedor',
            template: __webpack_require__(/*! ./misreservasproveedor.component.html */ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.html"),
            styles: [__webpack_require__(/*! ./misreservasproveedor.component.css */ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_reservar_service__WEBPACK_IMPORTED_MODULE_1__["ReservarService"]])
    ], Misreservasproveedor);
    return Misreservasproveedor;
}());



/***/ }),

/***/ "./src/app/reservas/reservas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/reservas/reservas.module.ts ***!
  \*********************************************/
/*! exports provided: ReservasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasModule", function() { return ReservasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reservas_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservas.routing */ "./src/app/reservas/reservas.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reservar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/reservar.service */ "./src/app/services/reservar.service.ts");
/* harmony import */ var _utilidades_utilidades_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilidades/utilidades.module */ "./src/app/utilidades/utilidades.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ReservarCoWorking_ReservarCoWorking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReservarCoWorking/ReservarCoWorking.component */ "./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.ts");
/* harmony import */ var _ReservarHotel_ReservarHotel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ReservarHotel/ReservarHotel.component */ "./src/app/reservas/ReservarHotel/ReservarHotel.component.ts");
/* harmony import */ var _ReservarAlojamiento_ReservarAlojamiento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ReservarAlojamiento/ReservarAlojamiento.component */ "./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.ts");
/* harmony import */ var _misreservas_misreservas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./misreservas/misreservas.component */ "./src/app/reservas/misreservas/misreservas.component.ts");
/* harmony import */ var _ResumenReserva_ResumenReserva_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ResumenReserva/ResumenReserva.component */ "./src/app/reservas/ResumenReserva/ResumenReserva.component.ts");
/* harmony import */ var _misreservasproveedor_misreservasproveedor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./misreservasproveedor/misreservasproveedor.component */ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.ts");


















var ReservasModule = /** @class */ (function () {
    function ReservasModule() {
    }
    ReservasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ReservarCoWorking_ReservarCoWorking_component__WEBPACK_IMPORTED_MODULE_11__["ReservarCoWorkingComponent"],
                _ReservarHotel_ReservarHotel_component__WEBPACK_IMPORTED_MODULE_12__["ReservarHotelComponent"],
                _ReservarAlojamiento_ReservarAlojamiento_component__WEBPACK_IMPORTED_MODULE_13__["ReservarAlojamientoComponent"],
                _misreservas_misreservas_component__WEBPACK_IMPORTED_MODULE_14__["MisreservasComponent"],
                _ResumenReserva_ResumenReserva_component__WEBPACK_IMPORTED_MODULE_15__["ResumenReservaComponent"],
                _misreservasproveedor_misreservasproveedor_component__WEBPACK_IMPORTED_MODULE_16__["Misreservasproveedor"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_reservas_routing__WEBPACK_IMPORTED_MODULE_3__["RoutesRoutes"]),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
                _utilidades_utilidades_module__WEBPACK_IMPORTED_MODULE_6__["UtilidadesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            providers: [_services_reservar_service__WEBPACK_IMPORTED_MODULE_5__["ReservarService"], _services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarConfig"]]
        })
    ], ReservasModule);
    return ReservasModule;
}());



/***/ }),

/***/ "./src/app/reservas/reservas.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/reservas/reservas.routing.ts ***!
  \**********************************************/
/*! exports provided: RoutesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRoutes", function() { return RoutesRoutes; });
/* harmony import */ var _misreservasproveedor_misreservasproveedor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misreservasproveedor/misreservasproveedor.component */ "./src/app/reservas/misreservasproveedor/misreservasproveedor.component.ts");
/* harmony import */ var _ReservarCoWorking_ReservarCoWorking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservarCoWorking/ReservarCoWorking.component */ "./src/app/reservas/ReservarCoWorking/ReservarCoWorking.component.ts");
/* harmony import */ var _ReservarHotel_ReservarHotel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReservarHotel/ReservarHotel.component */ "./src/app/reservas/ReservarHotel/ReservarHotel.component.ts");
/* harmony import */ var _ReservarAlojamiento_ReservarAlojamiento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReservarAlojamiento/ReservarAlojamiento.component */ "./src/app/reservas/ReservarAlojamiento/ReservarAlojamiento.component.ts");
/* harmony import */ var _misreservas_misreservas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misreservas/misreservas.component */ "./src/app/reservas/misreservas/misreservas.component.ts");
/* harmony import */ var _ResumenReserva_ResumenReserva_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResumenReserva/ResumenReserva.component */ "./src/app/reservas/ResumenReserva/ResumenReserva.component.ts");






var RoutesRoutes = [
    {
        path: '',
        children: [
            {
                path: 'ReservarCoWorking/:IdService',
                component: _ReservarCoWorking_ReservarCoWorking_component__WEBPACK_IMPORTED_MODULE_1__["ReservarCoWorkingComponent"]
            },
            {
                path: 'ReservarHotel/:IdService',
                component: _ReservarHotel_ReservarHotel_component__WEBPACK_IMPORTED_MODULE_2__["ReservarHotelComponent"]
            },
            {
                path: 'ReservarAlojamiento/:IdService',
                component: _ReservarAlojamiento_ReservarAlojamiento_component__WEBPACK_IMPORTED_MODULE_3__["ReservarAlojamientoComponent"]
            },
            {
                path: 'MisReservas',
                component: _misreservas_misreservas_component__WEBPACK_IMPORTED_MODULE_4__["MisreservasComponent"]
            },
            {
                path: 'ResumenReserva/:IdService',
                component: _ResumenReserva_ResumenReserva_component__WEBPACK_IMPORTED_MODULE_5__["ResumenReservaComponent"]
            },
            {
                path: 'MisReservasProveedor',
                component: _misreservasproveedor_misreservasproveedor_component__WEBPACK_IMPORTED_MODULE_0__["Misreservasproveedor"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=reservas-reservas-module.js.map