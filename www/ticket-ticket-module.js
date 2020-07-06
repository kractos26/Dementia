(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-module"],{

/***/ "./src/app/modelos/Ticket.model.ts":
/*!*****************************************!*\
  !*** ./src/app/modelos/Ticket.model.ts ***!
  \*****************************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/modelos/tickectMessage.model.ts":
/*!*************************************************!*\
  !*** ./src/app/modelos/tickectMessage.model.ts ***!
  \*************************************************/
/*! exports provided: ticketMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketMessage", function() { return ticketMessage; });
var ticketMessage = /** @class */ (function () {
    function ticketMessage() {
    }
    return ticketMessage;
}());



/***/ }),

/***/ "./src/app/services/ticket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ticket.service.ts ***!
  \********************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppServiceGlobal */ "./src/app/services/AppServiceGlobal.ts");





var TicketService = /** @class */ (function () {
    function TicketService(http, storageServ) {
        this.http = http;
        this.storageServ = storageServ;
        this.ulrl = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_4__["UrlBackendServices"] + '/api';
    }
    TicketService.prototype.createMessageTicket = function (tiket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var newtiket = {
            ApplicationId: this.storageServ.getCurrentApplication(),
            IdUser: this.storageServ.getCurrentUser().IdUser,
            Token: this.storageServ.getCurrentToken(),
            Subject: tiket.Subject,
            Body: tiket.Body,
            IdTicketType: tiket.IdTicketType,
            IdTicket: tiket.IdTicket
        };
        return this.http.put(this.ulrl + '/MessageTicket', newtiket, { headers: headers });
    };
    TicketService.prototype.consultarTicket = function (ticket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        ticket.IdUserCreation = ticket.IdUserCreation != null ? ticket.IdUserCreation : this.storageServ.getCurrentUser().IdUser;
        var consulta = {
            Parameters: ticket,
            ApplicationId: this.storageServ.getCurrentApplication(),
            Token: this.storageServ.getCurrentToken()
        };
        return this.http.post(this.ulrl + '/Ticket', consulta, { headers: headers });
    };
    TicketService.prototype.consultarMessageTicket = function (ticket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storageServ.getCurrentApplication(),
            Token: this.storageServ.getCurrentToken(),
            IdUser: this.storageServ.getCurrentUser().IdUser,
            IdTicket: ticket.IdTicket
        };
        return this.http.post(this.ulrl + '/MessageTicket', consulta, { headers: headers });
    };
    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageServiceService"]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "./src/app/ticket/detalle/detalle.component.css":
/*!******************************************************!*\
  !*** ./src/app/ticket/detalle/detalle.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body.tittlePublicaciones\r\n{\r\n    padding-top: 1rem;    \r\n}\r\n\r\n.card-body.subtittlePublicaciones\r\n{\r\n    top: -10px;\r\n    position: relative;\r\n}\r\n\r\n.card-title.subtitle\r\n{\r\n    font-weight: 600;\r\n}\r\n\r\n.card-body {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem;\r\n    padding-bottom: 0.50rem;\r\n    padding-top: 0rem;\r\n}\r\n\r\n.page-loading \r\n{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n    background: rgb(51, 51, 51);\r\n    /*background: linear-gradient(to right, #00e1f5 0, #0069e3 99%);*/\r\n    background: linear-gradient(to right, #21edff 0, #0099d2 99%);\r\n    opacity: 1;\r\n    transition: opacity 1s ease-in-out;\r\n    z-index: 10000;\r\n}\r\n\r\n.page-loading .MensajePersonalizado\r\n{\r\n    position: absolute;\r\n    top: 57%;\r\n    width: 60%;\r\n    left: 18%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.btn.btn-info.waves-effect.waves-light.buttonRight\r\n{\r\n    top: -40px;\r\n}\r\n\r\n.btn.btn-info.waves-effect.waves-light.buttonRight.Error\r\n{\r\n    top: -60px;\r\n}\r\n\r\n.IsCurrentUser {\r\n    position: relative;\r\n    float: right;\r\n    text-align: right;\r\n    width: 100%;\r\n\r\n    background-color: #f1f5f6;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.IsNotCurrentUser {\r\n    position: relative;\r\n    float: left;\r\n    width: 100%;\r\n    text-align: left;\r\n\r\n    background-color: #fbf9f9;\r\n}\r\n\r\n.IsCurrentUser .col-11 \r\n{\r\n    padding-left: 0px;\r\n}\r\n\r\n.IsNotCurrentUser .col-11 \r\n{\r\n    padding-left: 35px;\r\n}\r\n\r\n.IsCurrentUser .m-r-15 \r\n{\r\n    margin: 0px !important;\r\n}\r\n\r\n.IsCurrentUser .col-10\r\n{\r\n    position: relative;\r\n    left: 15px;\r\n    padding-left: 0px;\r\n}\r\n\r\n@media (min-width: 992px)\r\n{    \r\n    .col-lg-8 {\r\n        flex: 100%;\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px)\r\n{\r\n    .col-10 {\r\n        flex: 100%;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .IsNotCurrentUser[_ngcontent-c9] .col-11[_ngcontent-c9] {\r\n        padding-left: 0px !important;\r\n    }\r\n\r\n    .col-8,\r\n    .col-3 \r\n    {\r\n        display: inline-block;\r\n    }\r\n\r\n    .m-b-0 {\r\n        margin-bottom: 0;\r\n        width: 50%;\r\n        display: inline-block;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L2RldGFsbGUvZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsaUVBQWlFO0lBQ2pFLDZEQUE2RDtJQUM3RCxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVzs7SUFFWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKOztBQUdBOztJQUVJO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7OztRQUdJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90aWNrZXQvZGV0YWxsZS9kZXRhbGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5LnRpdHRsZVB1YmxpY2FjaW9uZXNcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07ICAgIFxyXG59XHJcblxyXG4uY2FyZC1ib2R5LnN1YnRpdHRsZVB1YmxpY2FjaW9uZXNcclxue1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUuc3VidGl0bGVcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41MHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xyXG59XHJcblxyXG4ucGFnZS1sb2FkaW5nIFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGUxZjUgMCwgIzAwNjllMyA5OSUpOyovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMWVkZmYgMCwgIzAwOTlkMiA5OSUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuLnBhZ2UtbG9hZGluZyAuTWVuc2FqZVBlcnNvbmFsaXphZG9cclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NyU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbGVmdDogMTglO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4uYnRuLWluZm8ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0LmJ1dHRvblJpZ2h0XHJcbntcclxuICAgIHRvcDogLTQwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLWluZm8ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0LmJ1dHRvblJpZ2h0LkVycm9yXHJcbntcclxuICAgIHRvcDogLTYwcHg7XHJcbn1cclxuXHJcblxyXG4uSXNDdXJyZW50VXNlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1ZjY7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLklzTm90Q3VycmVudFVzZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjlmOTtcclxufVxyXG5cclxuLklzQ3VycmVudFVzZXIgLmNvbC0xMSBcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcblxyXG4uSXNOb3RDdXJyZW50VXNlciAuY29sLTExIFxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbi5Jc0N1cnJlbnRVc2VyIC5tLXItMTUgXHJcbntcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Jc0N1cnJlbnRVc2VyIC5jb2wtMTBcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXHJcbnsgICAgXHJcbiAgICAuY29sLWxnLTgge1xyXG4gICAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVxyXG57XHJcbiAgICAuY29sLTEwIHtcclxuICAgICAgICBmbGV4OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuSXNOb3RDdXJyZW50VXNlcltfbmdjb250ZW50LWM5XSAuY29sLTExW19uZ2NvbnRlbnQtYzldIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtOCxcclxuICAgIC5jb2wtMyBcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLm0tYi0wIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/ticket/detalle/detalle.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ticket/detalle/detalle.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n<app-BackButton (click)=\"Regresar()\"></app-BackButton>\r\n\r\n<div *ngIf=\"isLoadingVisible == true\" class=\"page-loading-base proccessing\">\r\n    <img src=\"assets/images/loading.gif\" class=\"loading-icon proccessing\">\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-body tittlePublicaciones\">\r\n                <h3 class=\"card-title\">Información del Ticket</h3>\r\n                <div class=\"row m-b-0\">\r\n                    <div class=\"col-3\">\r\n                        <h6 class=\"card-title subtitle\">Fecha:</h6>     \r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <h6 class=\"card-title\">{{tiketresponse.TicketDate | date:'short'}}</h6>     \r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <div class=\"col-3\">\r\n                        <h6 class=\"card-title subtitle\">Tipo:</h6>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <h6 class=\"card-title\">{{tiketresponse.TicketType}}</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <div class=\"col-3\">\r\n                        <h6 class=\"card-title subtitle\">Estado:</h6>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <h6 class=\"card-title\">{{tiketresponse.TicketState}}</h6>\r\n                    </div>\r\n                </div>           \r\n                <div class=\"row m-b-0\">\r\n                    <div class=\"col-3\">\r\n                        <h6 class=\"card-title subtitle\">Asunto:</h6>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <h6 class=\"card-title\">{{busqueda.Subject}}</h6>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr class=\"m-t-0\">\r\n        \r\n            <div class=\"card-body\">\r\n                <ul class=\"list-unstyled m-t-0\">\r\n                    <li *ngFor=\"let row of listaMessage;\" [ngClass]=\"{'IsNotCurrentUser': (row?.IdUser != nombreUsuarioActual)}\" class=\"media m-b-10 IsCurrentUser\">\r\n                        <div *ngIf=\"row?.IdUser != nombreUsuarioActual\" class=\"col-1\">\r\n                            <img class=\"m-r-15\" src=\"assets/images/users/user-settings-icon.png\" width=\"40\" height=\"40\" alt=\"Generic placeholder image\">\r\n                        </div>\r\n                        <div *ngIf=\"row?.IdUser != nombreUsuarioActual\" class=\"col-11\">\r\n                            <h6>{{row.IdUser}}</h6>\r\n                            <h5 class=\"mt-0 mb-1\">{{row.Body}}</h5>\r\n                        </div>\r\n                        <div *ngIf=\"row?.IdUser == nombreUsuarioActual\" class=\"col-10\">\r\n                            <h6>{{row.IdUser}}</h6>\r\n                            <h5 class=\"mt-0 mb-1\">{{row.Body}}</h5>\r\n                        </div>\r\n                        <div *ngIf=\"row?.IdUser == nombreUsuarioActual\" class=\"col-1\">\r\n                            <img class=\"m-r-15\" src=\"assets/images/users/avatar-default-icon.png\" width=\"40\" height=\"40\" alt=\"Generic placeholder image\">\r\n                        </div>\r\n                    </li>\r\n                    <hr>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n                <form [formGroup]=\"formularioRespuestaTike\">\r\n                    <textarea [ngClass]=\"{'is-invalid': (f.Body.invalid && (f.Body.dirty || f.Body.touched))}\"  \r\n                    formControlName=\"Body\" placeholder=\"Escriba una respuesta\"\r\n                    [(ngModel)]=\"InfoMensaje.Body\" class=\"form-control\" rows=\"4\" ></textarea>\r\n                    <div  *ngIf=\"f.Body.invalid && (f.Body.dirty || f.Body.touched)\" class=\"invalid-feedback\">\r\n                        <font style=\"vertical-align: inherit;\">\r\n                            <font style=\"vertical-align: inherit;\">Proporcione una breve respuesta</font>\r\n                        </font>\r\n                    </div>\r\n                    \r\n                    <div class=\"card-body botonesFooter2\">             \r\n                        <button [ngClass]=\"{'Error': (f.Body.invalid && (f.Body.dirty || f.Body.touched))}\"  \r\n                             (click)=\"guardar()\" class=\"btn btn-info waves-effect waves-light buttonRight \" type=\"button\">Enviar</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div [ngClass]=\"{'show': isSpinnerVisible}\" class=\"page-loading\" *ngIf=\"isSpinnerVisible == true\">\r\n    <img src=\"assets/images/logo-light-text0.png\" class=\"loading-icon-bricks4us\">\r\n    <img src=\"assets/images/oval.svg\" class=\"loading-icon\">\r\n    <div class=\"MensajePersonalizado\">\r\n        <h4>Estamos enviando su mensaje.</h4>\r\n        <h6>Por favor espere un momento.</h6>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ticket/detalle/detalle.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ticket/detalle/detalle.component.ts ***!
  \*****************************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_tickectMessage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/tickectMessage.model */ "./src/app/modelos/tickectMessage.model.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modelos_Ticket_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/Ticket.model */ "./src/app/modelos/Ticket.model.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");








var DetalleComponent = /** @class */ (function () {
    function DetalleComponent(localStorage, tikectservi, route, routers, fb) {
        this.localStorage = localStorage;
        this.tikectservi = tikectservi;
        this.route = route;
        this.routers = routers;
        this.fb = fb;
        this.busqueda = new src_app_modelos_tickectMessage_model__WEBPACK_IMPORTED_MODULE_2__["ticketMessage"]();
        this.InfoMensaje = new src_app_modelos_tickectMessage_model__WEBPACK_IMPORTED_MODULE_2__["ticketMessage"]();
        this.tikect = new src_app_modelos_Ticket_model__WEBPACK_IMPORTED_MODULE_6__["Ticket"]();
        this.mensaje = [];
        this.isSpinnerVisible = false;
        this.isLoadingVisible = true;
        this.nombreUsuarioActual = this.localStorage.getCurrentUser().Login;
    }
    DetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idTicket = this.route.snapshot.params["IdMensaje"];
        this.busqueda.IdTicket = idTicket;
        this.tikect.IdTicket = idTicket;
        this.tikectservi.consultarTicket(this.tikect).subscribe(function (respues) {
            _this.isLoadingVisible = false;
            _this.tiketresponse = respues.JSonResult[0];
        }, function (error) {
            _this.mensaje = [{ id: 1, type: 'danger', message: "Se ha presentado un error al recuperar su información." }];
            _this.isLoadingVisible = false;
        });
        this.tikectservi.consultarMessageTicket(this.busqueda).subscribe(function (respuesta) {
            _this.listaMessage = respuesta.JSonResult;
            _this.busqueda = _this.listaMessage[0];
            _this.isLoadingVisible = false;
        }, function (error) {
            _this.mensaje = [{ id: 1, type: 'danger', message: "Se ha presentado un error al recuperar su información." }];
            _this.isLoadingVisible = false;
        });
        this.isSpinnerVisible = false;
        this.formularioRespuestaTike = this.fb.group({
            Body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)])],
        });
    };
    Object.defineProperty(DetalleComponent.prototype, "f", {
        get: function () {
            var respuesta = this.formularioRespuestaTike;
            return respuesta.controls;
        },
        enumerable: true,
        configurable: true
    });
    DetalleComponent.prototype.guardar = function () {
        var _this = this;
        this.InfoMensaje.IdTicket = this.tikect.IdTicket;
        this.InfoMensaje.Subject = this.busqueda.Subject;
        this.isSpinnerVisible = true;
        this.tikectservi.createMessageTicket(this.InfoMensaje).subscribe(function (respuesta) {
            _this.isSpinnerVisible = false;
            var registroResponse = respuesta;
            if (registroResponse != null && registroResponse.Exitoso) {
                _this.InfoMensaje.IdUser = _this.nombreUsuarioActual;
                _this.listaMessage.push(_this.InfoMensaje);
                _this.InfoMensaje = new src_app_modelos_tickectMessage_model__WEBPACK_IMPORTED_MODULE_2__["ticketMessage"]();
            }
            else {
                _this.mensaje = [{ id: 2, type: 'warning', message: registroResponse.MensajeResultado }];
            }
        }, function (error) {
            _this.isSpinnerVisible = false;
            _this.mensaje = [{ id: 2, type: 'danger', message: error.statusText }];
        });
    };
    DetalleComponent.prototype.Regresar = function () {
        this.routers.navigate(["/tiket/listatickets"]);
    };
    DetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-detalle",
            template: __webpack_require__(/*! ./detalle.component.html */ "./src/app/ticket/detalle/detalle.component.html"),
            styles: [__webpack_require__(/*! ./detalle.component.css */ "./src/app/ticket/detalle/detalle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageServiceService"],
            _services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DetalleComponent);
    return DetalleComponent;
}());



/***/ }),

/***/ "./src/app/ticket/listatickets/listatickets.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ticket/listatickets/listatickets.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-info\r\n{\r\n    font-size: 22px !important;\r\n}\r\n\r\n\r\n.table th, .table td \r\n{\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.badge.badge-pill {\r\n    font-size: 100%;\r\n}\r\n\r\n\r\n@media (min-width: 768px)\r\n{\r\n    h6.FechaTicket,\r\n    .h6.FechaTicket\r\n    {\r\n        width: 30%;\r\n        display: inline-block;\r\n    }\r\n\r\n    h6, .h6 {\r\n        font-size: 14px;\r\n        width: 50%;\r\n        display: inline-block;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L2xpc3RhdGlja2V0cy9saXN0YXRpY2tldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7QUFDOUI7OztBQUdBOztJQUVJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTs7SUFFSTs7O1FBR0ksVUFBVTtRQUNWLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90aWNrZXQvbGlzdGF0aWNrZXRzL2xpc3RhdGlja2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24taW5mb1xyXG57XHJcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIFxyXG57XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2UtcGlsbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcclxue1xyXG4gICAgaDYuRmVjaGFUaWNrZXQsXHJcbiAgICAuaDYuRmVjaGFUaWNrZXRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBoNiwgLmg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ticket/listatickets/listatickets.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ticket/listatickets/listatickets.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body tittlePublicaciones p-b-0\">\r\n                <h3 class=\"card-title\">Información del Ticket</h3>\r\n                <h6 class=\"card-title subtitle\">Aquí puedes crear o consultar el estado de tus solicitudes realizadas al área administrativa de Bricks4Us:</h6>     \r\n                <hr class=\"m-t-0\">\r\n                <button class=\"btn btn-success float-right t-10\" (click)=\"newTicket()\">Crear Tikect</button>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">Estado</th>\r\n                                <th scope=\"col\">Tipo / Fecha</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of listaticket;\">\r\n                                <td>\r\n                                    <span _ngcontent-c2=\"\" [ngClass]=\"{'badge-warning': (row.TicketState =='Abierto') }\" class=\"badge badge-pill float-left\">{{ row.TicketState }}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"FechaTicket\">{{row.TicketDate | date:'short'}}</h6>\r\n                                    <h6>{{ row.TicketType }}</h6>\r\n                                </td>\r\n                                <td>\r\n                                    <span>\r\n                                        <a routerLink=\"/tiket/detalle/{{row.IdTicket}}\" routerLinkActive=\"active\"> <i class=\"icon-info\"></i> </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ticket/listatickets/listatickets.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ticket/listatickets/listatickets.component.ts ***!
  \***************************************************************/
/*! exports provided: ListaticketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaticketsComponent", function() { return ListaticketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modelos_Ticket_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../modelos/Ticket.model */ "./src/app/modelos/Ticket.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");





var ListaticketsComponent = /** @class */ (function () {
    function ListaticketsComponent(router, tiketservi) {
        this.router = router;
        this.tiketservi = tiketservi;
        this.busqueda = new _modelos_Ticket_model__WEBPACK_IMPORTED_MODULE_1__["Ticket"]();
        this.page = 1;
        this.pageSize = 2;
    }
    ListaticketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultsConsultaTiket$ = this.tiketservi.consultarTicket(this.busqueda);
        this.resultsConsultaTiket$.subscribe(function (respuesta) {
            _this.listaticket = respuesta.JSonResult;
            _this.listaticket.slice((_this.page - 1) * _this.pageSize, (_this.page - 1) * _this.pageSize + _this.pageSize);
        });
    };
    ListaticketsComponent.prototype.newTicket = function () {
        this.router.navigate(['/tiket/nuevoticket']);
    };
    ListaticketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-listatickets',
            template: __webpack_require__(/*! ./listatickets.component.html */ "./src/app/ticket/listatickets/listatickets.component.html"),
            styles: [__webpack_require__(/*! ./listatickets.component.css */ "./src/app/ticket/listatickets/listatickets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]])
    ], ListaticketsComponent);
    return ListaticketsComponent;
}());



/***/ }),

/***/ "./src/app/ticket/nuevoticket/nuevoticket.component.css":
/*!**************************************************************!*\
  !*** ./src/app/ticket/nuevoticket/nuevoticket.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC9udWV2b3RpY2tldC9udWV2b3RpY2tldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ticket/nuevoticket/nuevoticket.component.html":
/*!***************************************************************!*\
  !*** ./src/app/ticket/nuevoticket/nuevoticket.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ReservasNotificacion></app-ReservasNotificacion>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <form\r\n                    [formGroup]=\"formularioNewTike\"\r\n                    (submit)=\"guardar()\"\r\n                >\r\n                    <app-alerta\r\n                        *ngIf=\"mensaje?.length > 0\"\r\n                        [alerts]=\"mensaje\"\r\n                    ></app-alerta>\r\n                    <!--<div [hidden]=\"formularioNewTike.submitted\">-->\r\n                    <div >\r\n                        <div>\r\n                            <h3 class=\"d-inline\">Comunícate Con Nosotros</h3>\r\n                            <br>\r\n                            <h6 class=\"d-inline\">\r\n                                Envíe un mensaje al equipo administrativo de Bricks4Us, y en breve un asesor dará respuesta a su solicitud!\r\n                            </h6>\r\n                            <br>\r\n                            <div\r\n                                class=\"form-row\"\r\n                                style=\"margin:3px;\"\r\n                            >\r\n\r\n                                <div\r\n                                    class=\"form-group col-md-6\"\r\n                                    style=\"margin:3px;\"\r\n                                >\r\n                                    <label class=\"col-sm-12 control-label col-form-label p-l-0\">Tipo de Ticket</label>\r\n                                    <br>\r\n                                    <select\r\n                                        [ngClass]=\"{'is-invalid': (f.SelectTypeTique.invalid && (f.SelectTypeTique.dirty || f.SelectTypeTique.touched))}\"\r\n                                        [(ngModel)]=\"tiket.IdTicketType\"\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"Tipo tique\"\r\n                                        formControlName=\"SelectTypeTique\"\r\n                                    >\r\n                                        <option\r\n                                            *ngFor=\"let itemtipetiket of ticketType\"\r\n                                            value=\"{{itemtipetiket.IdTicketType}}\"\r\n                                        >\r\n                                            {{itemtipetiket.Name}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <span class=\"LabelOblitaorio Select\">*</span>\r\n                                    <div\r\n                                        *ngIf=\"f.SelectTypeTique.invalid && (f.SelectTypeTique.dirty || f.SelectTypeTique.touched)\"\r\n                                        class=\"invalid-feedback\"\r\n                                    >\r\n                                        <font style=\"vertical-align: inherit;\">\r\n                                            <font\r\n                                                *ngIf=\"f.SelectTypeTique.errors.required\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                Seleccione un tipo de la lista.\r\n                                            </font>\r\n                                        </font>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div\r\n                                class=\"form-row\"\r\n                                style=\"margin:3px;\"\r\n                            >\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label class=\"col-sm-3 control-label col-form-label p-l-0\">Asunto</label>\r\n                                    <input\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{'is-invalid': (f.Subject.invalid && (f.Subject.dirty || f.Subject.touched))}\"\r\n                                        [(ngModel)]=\"tiket.Subject\"\r\n                                        placeholder\r\n                                        formControlName=\"Subject\"\r\n                                    >\r\n                                    <span class=\"LabelOblitaorio\">*</span>\r\n                                    <div\r\n                                        *ngIf=\"f.Subject.invalid && (f.Subject.dirty || f.Subject.touched)\"\r\n                                        class=\"invalid-feedback\"\r\n                                    >\r\n                                        <font style=\"vertical-align: inherit;\">\r\n                                            <font\r\n                                                *ngIf=\"f.Subject.errors.required\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                Describa el asunto del ticket\r\n                                            </font>\r\n                                            <font\r\n                                                *ngIf=\"f.Subject.errors.minlength\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                El minimo de caracteres permitidos es de {{f.Subject.errors.minlength.requiredLength}}\r\n                                            </font>\r\n                                            <font\r\n                                                *ngIf=\"f.Subject.errors.maxLength\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                El maximo de caracteres permitidos es de {{f.Subject.errors.maxLength.requiredLength}}\r\n                                            </font>\r\n                                        </font>\r\n\r\n                                    </div>\r\n                                </div>  \r\n                            </div>\r\n\r\n                            <div\r\n                                class=\"form-row\"\r\n                                style=\"margin: 3px;\"\r\n                            >\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label class=\"col-sm-3 control-label col-form-label p-l-0\">Mensaje</label>\r\n                                    <textarea\r\n                                        class=\"form-control\"\r\n                                        rows=\"4\"\r\n                                        [ngClass]=\"{'is-invalid': (f.Body.invalid && (f.Body.dirty || f.Body.touched))}\"\r\n                                        [(ngModel)]=\"tiket.Body\"\r\n                                        placeholder\r\n                                        formControlName=\"Body\"\r\n                                    >\r\n                                    </textarea>\r\n                                    <span class=\"LabelOblitaorio\" style=\"top: -90px;\">*</span>\r\n                                    <div\r\n                                        *ngIf=\"f.Body.invalid && (f.Body.dirty || f.Body.touched)\"\r\n                                        class=\"invalid-feedback\"\r\n                                    >\r\n                                        <font style=\"vertical-align: inherit;\">\r\n                                            <font\r\n                                                *ngIf=\"f.Body.errors.required\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                Mensaje es requerido.\r\n                                            </font>\r\n                                            <font\r\n                                                *ngIf=\"f.Body.errors.minlength\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                El minimo de caracteres permitidos es de {{f.Body.errors.minlength.requiredLength}}\r\n                                            </font>\r\n                                            <font\r\n                                                *ngIf=\"f.Body.errors.maxLength\"\r\n                                                style=\"vertical-align: inherit;\"\r\n                                            >\r\n                                                El maximo de caracteres permitidos es de {{f.Body.errors.maxLength.requiredLength}}\r\n                                            </font>\r\n\r\n                                        </font>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body botonesFooter2\">\r\n\r\n                                <button\r\n                                    (click)=\"newTicket()\"\r\n                                    class=\"btn btn-warning waves-effect waves-light buttonLeft\"\r\n                                    type=\"button\"\r\n                                >\r\n                                    Cancelar\r\n                                </button>\r\n                                <button\r\n                                    [disabled]=\"formularioNewTike.invalid\"\r\n                                    (click)=\"guardar()\"\r\n                                    class=\"btn btn-info waves-effect waves-light buttonRight \"\r\n                                    type=\"button\"\r\n                                >\r\n                                    Guardar\r\n                                </button>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ticket/nuevoticket/nuevoticket.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ticket/nuevoticket/nuevoticket.component.ts ***!
  \*************************************************************/
/*! exports provided: NuevoticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoticketComponent", function() { return NuevoticketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cachestorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cachestorage.service */ "./src/app/services/cachestorage.service.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var NuevoticketComponent = /** @class */ (function () {
    function NuevoticketComponent(ticketservice, router, cacheManager, fb) {
        this.ticketservice = ticketservice;
        this.router = router;
        this.cacheManager = cacheManager;
        this.fb = fb;
        this.tiket = {};
        this.mensaje = [];
    }
    NuevoticketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cacheManager.getData("TicketType", function (array) { _this.ticketType = array; });
        this.formularioNewTike = this.fb.group({
            Subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)])],
            Body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)])],
            SelectTypeTique: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    Object.defineProperty(NuevoticketComponent.prototype, "f", {
        get: function () {
            var respuesta = this.formularioNewTike;
            return respuesta.controls;
        },
        enumerable: true,
        configurable: true
    });
    NuevoticketComponent.prototype.newTicket = function () {
        this.router.navigate(['/tiket/listatickets']);
    };
    NuevoticketComponent.prototype.guardar = function () {
        var _this = this;
        this.ticketservice.createMessageTicket(this.tiket)
            .subscribe(function (respuesta) {
            var userResponse = respuesta;
            if (userResponse != null && userResponse.Exitoso) {
                _this.mensaje = [{ id: 2, type: 'success', message: "Sumensaje se ha enviado exitosamente" }];
                _this.tiket = {};
                _this.router.navigate(['/tiket/listatickets']);
            }
            else {
                _this.mensaje = [{ id: 2, type: 'warning', message: userResponse.MensajeResultado }];
            }
        }, function (error) {
            _this.mensaje = [{
                    id: 2,
                    type: 'danger',
                    message: error.statusText
                }];
        });
    };
    NuevoticketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nuevoticket",
            template: __webpack_require__(/*! ./nuevoticket.component.html */ "./src/app/ticket/nuevoticket/nuevoticket.component.html"),
            styles: [__webpack_require__(/*! ./nuevoticket.component.css */ "./src/app/ticket/nuevoticket/nuevoticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_cachestorage_service__WEBPACK_IMPORTED_MODULE_3__["CacheStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], NuevoticketComponent);
    return NuevoticketComponent;
}());



/***/ }),

/***/ "./src/app/ticket/ticket.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.module.ts ***!
  \*****************************************/
/*! exports provided: TicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModule", function() { return TicketModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nuevoticket_nuevoticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuevoticket/nuevoticket.component */ "./src/app/ticket/nuevoticket/nuevoticket.component.ts");
/* harmony import */ var _listatickets_listatickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listatickets/listatickets.component */ "./src/app/ticket/listatickets/listatickets.component.ts");
/* harmony import */ var _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle/detalle.component */ "./src/app/ticket/detalle/detalle.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tiket_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tiket.routing */ "./src/app/ticket/tiket.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _utilidades_utilidades_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilidades/utilidades.module */ "./src/app/utilidades/utilidades.module.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/ticket.service */ "./src/app/services/ticket.service.ts");














var TicketModule = /** @class */ (function () {
    function TicketModule() {
    }
    TicketModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_nuevoticket_nuevoticket_component__WEBPACK_IMPORTED_MODULE_4__["NuevoticketComponent"], _listatickets_listatickets_component__WEBPACK_IMPORTED_MODULE_5__["ListaticketsComponent"], _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_6__["DetalleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_tiket_routing__WEBPACK_IMPORTED_MODULE_8__["TiketRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"],
                _utilidades_utilidades_module__WEBPACK_IMPORTED_MODULE_12__["UtilidadesModule"]
            ],
            providers: [_services_ticket_service__WEBPACK_IMPORTED_MODULE_13__["TicketService"], _services_storage_service_service__WEBPACK_IMPORTED_MODULE_11__["StorageServiceService"]]
        })
    ], TicketModule);
    return TicketModule;
}());



/***/ }),

/***/ "./src/app/ticket/tiket.routing.ts":
/*!*****************************************!*\
  !*** ./src/app/ticket/tiket.routing.ts ***!
  \*****************************************/
/*! exports provided: TiketRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiketRoutes", function() { return TiketRoutes; });
/* harmony import */ var _nuevoticket_nuevoticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuevoticket/nuevoticket.component */ "./src/app/ticket/nuevoticket/nuevoticket.component.ts");
/* harmony import */ var _listatickets_listatickets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listatickets/listatickets.component */ "./src/app/ticket/listatickets/listatickets.component.ts");
/* harmony import */ var _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle/detalle.component */ "./src/app/ticket/detalle/detalle.component.ts");



var TiketRoutes = [
    {
        path: '',
        children: [
            {
                path: 'nuevoticket',
                component: _nuevoticket_nuevoticket_component__WEBPACK_IMPORTED_MODULE_0__["NuevoticketComponent"]
            },
            {
                path: 'listatickets',
                component: _listatickets_listatickets_component__WEBPACK_IMPORTED_MODULE_1__["ListaticketsComponent"]
            },
            {
                path: 'detalle/:IdMensaje',
                component: _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__["DetalleComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=ticket-ticket-module.js.map