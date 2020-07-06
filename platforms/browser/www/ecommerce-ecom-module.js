(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecommerce-ecom-module"],{

/***/ "./src/app/ecommerce/cart/cart.component.html":
/*!****************************************************!*\
  !*** ./src/app/ecommerce/cart/cart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- Column -->\n    <div class=\"col-md-9 col-lg-9\">\n        <div class=\"card\">\n            <div class=\"card-header bg-info\">\n                <h5 class=\"m-b-0 text-white\">Your Cart (4 items)</h5>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table product-overview\">\n                        <thead>\n                            <tr>\n                                <th>Image</th>\n                                <th>Product info</th>\n                                <th>Price</th>\n                                <th>Quantity</th>\n                                <th style=\"text-align:center\">Total</th>\n                                <th style=\"text-align:center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td width=\"150\">\n                                    <img src=\"assets/images/gallery/chair.jpg\" alt=\"iMac\" width=\"80\">\n                                </td>\n                                <td width=\"550\">\n                                    <h5 class=\"font-500\">Rounded Chair</h5>\n                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected\n                                        humour, or randomised words which don't look</p>\n                                </td>\n                                <td>$153</td>\n                                <td width=\"70\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"1\">\n                                </td>\n                                <td width=\"150\" align=\"center\" class=\"font-500\">$153</td>\n                                <td align=\"center\">\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\n                                        <i class=\"ti-trash text-dark\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair2.jpg\" alt=\"iMac\" width=\"80\">\n                                </td>\n                                <td>\n                                    <h5 class=\"font-500\">Rounded Chair</h5>\n                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected\n                                        humour, or randomised words which don't look</p>\n                                </td>\n                                <td>$153</td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"1\">\n                                </td>\n                                <td class=\"font-500\" align=\"center\">$153</td>\n                                <td align=\"center\">\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\n                                        <i class=\"ti-trash text-dark\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair3.jpg\" alt=\"iMac\" width=\"80\">\n                                </td>\n                                <td>\n                                    <h5 class=\"font-500\">Rounded Chair</h5>\n                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected\n                                        humour, or randomised words which don't look</p>\n                                </td>\n                                <td>$153</td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"1\">\n                                </td>\n                                <td class=\"font-500\" align=\"center\">$153</td>\n                                <td align=\"center\">\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\n                                        <i class=\"ti-trash text-dark\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair4.jpg\" alt=\"iMac\" width=\"80\">\n                                </td>\n                                <td>\n                                    <h5 class=\"font-500\">Rounded Chair</h5>\n                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected\n                                        humour, or randomised words which don't look</p>\n                                </td>\n                                <td>$153</td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"1\">\n                                </td>\n                                <td class=\"font-500\" align=\"center\">$153</td>\n                                <td align=\"center\">\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\n                                        <i class=\"ti-trash text-dark\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <hr>\n                    <div class=\"d-flex no-block align-items-center\">\n                        <button class=\"btn btn-dark btn-outline\">\n                            <i class=\"fas fa-arrow-left\"></i> Continue shopping</button>\n                        <div class=\"ml-auto\">\n                            <button class=\"btn btn-danger\">\n                                <i class=\"fa fa fa-shopping-cart\"></i> Checkout</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n    <div class=\"col-md-3 col-lg-3\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">CART SUMMARY</h5>\n                <hr>\n                <small>Total Price</small>\n                <h2>$612</h2>\n                <hr>\n                <button class=\"btn btn-success\">Checkout</button>\n                <button class=\"btn btn-secondary btn-outline\">Cancel</button>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">For Any Support</h5>\n                <hr>\n                <h4>\n                    <i class=\"ti-mobile\"></i> 9998979695 (Toll Free)</h4>\n                <small>Please contact with us if you have any questions. We are avalible 24h.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/cart/cart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/cart/cart.component.ts ***!
  \**************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/ecommerce/cart/cart.component.html")
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/checkout/checkout.component.html":
/*!************************************************************!*\
  !*** ./src/app/ecommerce/checkout/checkout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- Column -->\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h1 class=\"m-t-0\">\n                    <i class=\"fab fa-cc-visa text-info\"></i>\n                </h1>\n                <h3>**** **** **** 2150</h3>\n                <span class=\"pull-right\">Exp date: 10/16</span>\n                <span class=\"font-500\">Johnathan Doe</span>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n    <!-- Column -->\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h1 class=\"m-t-0\">\n                    <i class=\"fab fa-cc-mastercard text-primary\"></i>\n                </h1>\n                <h3>**** **** **** 2150</h3>\n                <span class=\"pull-right\">Exp date: 10/16</span>\n                <span class=\"font-500\">Johnathan Doe</span>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n    <!-- Column -->\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h1 class=\"m-t-0\">\n                    <i class=\"fab fa-cc-discover text-success\"></i>\n                </h1>\n                <h3>**** **** **** 2150</h3>\n                <span class=\"pull-right\">Exp date: 10/16</span>\n                <span class=\"font-500\">Johnathan Doe</span>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n    <!-- Column -->\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h1 class=\"m-t-0\">\n                    <i class=\"fab fa-cc-amex text-warning\"></i>\n                </h1>\n                <h3>**** **** **** 2150</h3>\n                <span class=\"pull-right\">Exp date: 10/16</span>\n                <span class=\"font-500\">Johnathan Doe</span>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n</div>\n<!-- ============================================================== -->\n<!-- Table -->\n<!-- ============================================================== -->\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">PRODUCT SUMMARY</h5>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered v-middle\">\n                        <thead>\n                            <tr>\n                                <th>Photo</th>\n                                <th>Product</th>\n                                <th>Quantity</th>\n                                <th>Price</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair.jpg\" alt=\"iMac\" width=\"80\">\n                                </td>\n                                <td>Rounded Chair</td>\n                                <td>20</td>\n                                <td class=\"font-500\">$153</td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"3\" class=\"font-500\" align=\"right\">Total Amount</td>\n                                <td class=\"font-500\">$153</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <hr>\n                <h5 class=\"card-title\">Choose payment Option</h5>\n                <ngb-tabset>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle>\n                        <span class=\"visible-xs\">\n                            <i class=\"ti-home\"></i>\n                        </span>\n                        <span class=\"hidden-xs\"> Debit Card</span>       \n                    </ng-template>\n                    <ng-template ngbTabContent>\n                      <div class=\"row\">\n                        <div class=\"col-md-7\">\n                            <form>\n                                <div class=\"form-group input-group m-t-40\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <i class=\"fab fa-cc-visa\"></i>\n                                        </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Card Number\" aria-label=\"Amount (to the nearest dollar)\">\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-7 col-md-7\">\n                                        <div class=\"form-group\">\n                                            <label>EXPIRATION DATE</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"Expiry\" placeholder=\"MM / YY\" required=\"\"> </div>\n                                    </div>\n                                    <div class=\"col-xs-5 col-md-5 pull-right\">\n                                        <div class=\"form-group\">\n                                            <label>CV CODE</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"CVC\" placeholder=\"CVC\" required=\"\"> </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>NAME OF CARD</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nameCard\" placeholder=\"NAME AND SURNAME\"> </div>\n                                    </div>\n                                </div>\n                                <button class=\"btn btn-info\">Make Payment</button>\n                            </form>\n                        </div>\n                        <div class=\"col-md-4 ml-auto\">\n                            <h4 class=\"card-title m-t-30\">General Info</h4>\n                            <h2>\n                                <i class=\"fab fa-cc-visa text-info m-r-5\"></i>\n                                <i class=\"fab fa-cc-mastercard text-danger m-r-5\"></i>\n                                <i class=\"fab fa-cc-discover text-success m-r-5\"></i>\n                                <i class=\"fab fa-cc-amex text-warning\"></i>\n                            </h2>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\n                                ut labore et dolore magna aliqua.</p>\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                commodo consequat. </p>\n                        </div>\n                    </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle>\n                        <span class=\"visible-xs\">\n                            <i class=\"ti-user\"></i>\n                        </span>\n                        <span class=\"hidden-xs\">Paypal</span>\n                    </ng-template>\n                  </ngb-tab>\n                 </ngb-tabset>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/checkout/checkout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/checkout/checkout.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/ecommerce/checkout/checkout.component.html")
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/details/details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/details/details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- Column -->\n    <div class=\"col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Rounded Chair</h3>\n                <h6 class=\"card-subtitle\">globe type chair for rest</h6>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                        <div class=\"white-box text-center\">\n                            <img src=\"assets/images/gallery/chair.jpg\" class=\"img-responsive\"> </div>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-6\">\n                        <h4 class=\"box-title m-t-40\">Product description</h4>\n                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,\n                            or randomised words which don't look even slightly believable. but the majority have suffered\n                            alteration in some form, by injected humour</p>\n                        <h2 class=\"m-t-40\">$153\n                            <small class=\"text-success\">(36% off)</small>\n                        </h2>\n                        <button class=\"btn btn-dark btn-rounded m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Add to cart\">\n                            <i class=\"ti-shopping-cart\"></i>\n                        </button>\n                        <button class=\"btn btn-primary btn-rounded\"> Buy Now </button>\n                        <h3 class=\"box-title m-t-40\">Key Highlights</h3>\n                        <ul class=\"list-unstyled\">\n                            <li>\n                                <i class=\"fa fa-check text-success\"></i> Sturdy structure</li>\n                            <li>\n                                <i class=\"fa fa-check text-success\"></i> Designed to foster easy portability</li>\n                            <li>\n                                <i class=\"fa fa-check text-success\"></i> Perfect furniture to flaunt your wonderful collectibles</li>\n                        </ul>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/details/details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/details/details.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/ecommerce/details/details.component.html")
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/ecom.module.ts":
/*!******************************************!*\
  !*** ./src/app/ecommerce/ecom.module.ts ***!
  \******************************************/
/*! exports provided: EcomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcomModule", function() { return EcomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ecom_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecom.routing */ "./src/app/ecommerce/ecom.routing.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/ecommerce/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/ecommerce/checkout/checkout.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/ecommerce/details/details.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/ecommerce/edit/edit.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/ecommerce/orders/orders.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product.component */ "./src/app/ecommerce/product/product.component.ts");













var EcomModule = /** @class */ (function () {
    function EcomModule() {
    }
    EcomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_ecom_routing__WEBPACK_IMPORTED_MODULE_6__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
            declarations: [
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"]
            ]
        })
    ], EcomModule);
    return EcomModule;
}());



/***/ }),

/***/ "./src/app/ecommerce/ecom.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/ecommerce/ecom.routing.ts ***!
  \*******************************************/
/*! exports provided: EcomRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcomRoutes", function() { return EcomRoutes; });
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/ecommerce/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/ecommerce/checkout/checkout.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/details.component */ "./src/app/ecommerce/details/details.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/ecommerce/edit/edit.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/ecommerce/orders/orders.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/ecommerce/product/product.component.ts");






var EcomRoutes = [
    {
        path: '',
        children: [
            {
                path: 'cart',
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__["CartComponent"],
                data: {
                    title: 'Cart',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Cart' }]
                }
            },
            {
                path: 'checkout',
                component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutComponent"],
                data: {
                    title: 'Checkout',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Checkout' }
                    ]
                }
            },
            {
                path: 'details',
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"],
                data: {
                    title: 'Product Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Product Details' }
                    ]
                }
            },
            {
                path: 'edit',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
                data: {
                    title: 'Edit Product',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Edit Product' }
                    ]
                }
            },
            {
                path: 'orders',
                component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"],
                data: {
                    title: 'Orders',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Orders' }]
                }
            },
            {
                path: 'products',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                data: {
                    title: 'Products',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Products' }
                    ]
                }
            },
            {
                path: 'products/:id',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                data: {
                    title: 'Products',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Products' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/ecommerce/edit/edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/ecommerce/edit/edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- Column -->\n    <div class=\"col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form action=\"#\">\n                    <div class=\"form-body\">\n                        <h5 class=\"card-title\">About Product</h5>\n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Product Name</label>\n                                    <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"Rounded Chair\"> </div>\n                            </div>\n                            <!--/span-->\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Sub text</label>\n                                    <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"globe type chair for rest\"> </div>\n                            </div>\n                            <!--/span-->\n                        </div>\n                        <!--/row-->\n                        <!--/row-->\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Category</label>\n                                    <select class=\"form-control\" data-placeholder=\"Choose a Category\" tabindex=\"1\">\n                                        <option value=\"Category 1\">Category 1</option>\n                                        <option value=\"Category 2\">Category 2</option>\n                                        <option value=\"Category 3\">Category 5</option>\n                                        <option value=\"Category 4\">Category 4</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <!--/span-->\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label>Status</label>\n                                    <br/>\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input type=\"radio\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\">\n                                        <label class=\"custom-control-label\" for=\"customRadioInline1\">Publish</label>\n                                    </div>\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input type=\"radio\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\">\n                                        <label class=\"custom-control-label\" for=\"customRadioInline2\">Draft</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <!--/span-->\n                        </div>\n                        <!--/row-->\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label>Price</label>\n                                    <div class=\"input-group mb-3\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\" id=\"basic-addon1\">\n                                                <i class=\"ti-money\"></i>\n                                            </span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"price\" aria-label=\"price\" aria-describedby=\"basic-addon1\">\n                                    </div>\n                                </div>\n                            </div>\n                            <!--/span-->\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label>Discount</label>\n                                    <div class=\"input-group mb-3\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\" id=\"basic-addon2\">\n                                                <i class=\"ti-cut\"></i>\n                                            </span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Discount\" aria-label=\"Discount\" aria-describedby=\"basic-addon2\">\n                                    </div>\n                                </div>\n                            </div>\n                            <!--/span-->\n                        </div>\n                        <h5 class=\"card-title m-t-40\">Product Description</h5>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 \">\n                                <div class=\"form-group\">\n                                    <textarea class=\"form-control\" rows=\"4\">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. but the majority have suffered alteration in some form, by injected humour</textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/row-->\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label>Meta Title</label>\n                                    <input type=\"text\" class=\"form-control\"> </div>\n                            </div>\n                            <!--/span-->\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label>Meta Keyword</label>\n                                    <input type=\"text\" class=\"form-control\"> </div>\n                            </div>\n                            <!--/span-->\n                            <div class=\"col-md-3\">\n                                <h5 class=\"card-title m-t-20\">Upload Image</h5>\n                                <div class=\"el-element-overlay\">\n                                    <div class=\"el-card-item\">\n                                        <div class=\"el-card-avatar el-overlay-1\">\n                                            <img src=\"assets/images/gallery/chair3.jpg\" alt=\"user\" />\n                                            <div class=\"el-overlay\">\n                                                <ul class=\"list-style-none el-info\">\n                                                    <li class=\"el-item\">\n                                                        <a class=\"btn default btn-outline image-popup-vertical-fit el-link\" href=\"assets/images/gallery/chair3.jpg\">\n                                                            <i class=\"icon-magnifier\"></i>\n                                                        </a>\n                                                    </li>\n                                                    <li class=\"el-item\">\n                                                        <a class=\"btn default btn-outline el-link\" href=\"javascript:void(0);\">\n                                                            <i class=\"icon-link\"></i>\n                                                        </a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"btn btn-info waves-effect waves-light\">\n                                    <span>Upload Anonther Image</span>\n                                    <input type=\"file\" class=\"upload\"> </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h5 class=\"card-title m-t-40\">GENERAL INFO</h5>\n                                <div class=\"table-responsive\">\n                                    <table class=\"table table-bordered td-padding\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Brand\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Stellar\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Delivery Condition\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Knock Down\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Seat Lock Included\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Yes\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Type\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Office Chair\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Style\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Contemporary &amp; Modern\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Wheels Included\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Yes\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Upholstery Included\">\n                                                </td>\n                                                <td>\n                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Yes\">\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                        <hr> </div>\n                    <div class=\"form-actions m-t-40\">\n                        <button type=\"submit\" class=\"btn btn-success\">\n                            <i class=\"fa fa-check\"></i> Save</button>\n                        <button type=\"button\" class=\"btn btn-dark\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/edit/edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/edit/edit.component.ts ***!
  \**************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/ecommerce/edit/edit.component.html")
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.html":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- Column -->\n    <div class=\"col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table v-middle product-overview\" id=\"zero_config\">\n                        <thead>\n                            <tr>\n                                <th>Customer</th>\n                                <th>Order ID</th>\n                                <th>Photo</th>\n                                <th>Product</th>\n                                <th>Quantity</th>\n                                <th>Date</th>\n                                <th>Status</th>\n                                <th>Actions</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Steave Jobs</td>\n                                <td>#85457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair.jpg\" alt=\"iMac\" width=\"80\"> </td>\n                                <td>Rounded Chair</td>\n                                <td>20</td>\n                                <td>10-7-2017</td>\n                                <td>\n                                    <span class=\"label label-success font-weight-100\">Paid</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Varun Dhavan</td>\n                                <td>#95457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair2.jpg\" alt=\"iPhone\" width=\"80\"> </td>\n                                <td>Wooden Chair</td>\n                                <td>25</td>\n                                <td>09-7-2017</td>\n                                <td>\n                                    <span class=\"label label-warning font-weight-100\">Pending</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Ritesh Desh</td>\n                                <td>#68457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair3.jpg\" alt=\"apple_watch\" width=\"80\"> </td>\n                                <td>Gray Chair</td>\n                                <td>12</td>\n                                <td>08-7-2017</td>\n                                <td>\n                                    <span class=\"label label-success font-weight-100\">Paid</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Hrithik</td>\n                                <td>#45457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair4.jpg\" alt=\"mac_mouse\" width=\"80\"> </td>\n                                <td>Pure Wooden chair</td>\n                                <td>18</td>\n                                <td>02-7-2017</td>\n                                <td>\n                                    <span class=\"label label-danger font-weight-100\">Failed</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Genelia Jobs</td>\n                                <td>#65257898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair.jpg\" alt=\"iMac\" width=\"80\"> </td>\n                                <td>Globe Rounded Chair</td>\n                                <td>25</td>\n                                <td>08-7-2017</td>\n                                <td>\n                                    <span class=\"label label-success font-weight-100\">Paid</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Sonu Nigam</td>\n                                <td>#15457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair2.jpg\" alt=\"iPhone\" width=\"80\"> </td>\n                                <td>Gold Wooden Chair</td>\n                                <td>15</td>\n                                <td>06-7-2017</td>\n                                <td>\n                                    <span class=\"label label-warning font-weight-100\">Pending</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Pawan Trivedi</td>\n                                <td>#56457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair3.jpg\" alt=\"apple_watch\" width=\"80\"> </td>\n                                <td>Still Gray Chair</td>\n                                <td>11</td>\n                                <td>05-7-2017</td>\n                                <td>\n                                    <span class=\"label label-success font-weight-100\">Paid</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Ranbir kapoor</td>\n                                <td>#35457898</td>\n                                <td>\n                                    <img src=\"assets/images/gallery/chair4.jpg\" alt=\"mac_mouse\" width=\"80\"> </td>\n                                <td>Comfirtable chair</td>\n                                <td>28</td>\n                                <td>01-7-2017</td>\n                                <td>\n                                    <span class=\"label label-danger font-weight-100\">Failed</span>\n                                </td>\n                                <td>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"Edit\">\n                                        <i class=\"ti-marker-alt\"></i>\n                                    </a>\n                                    <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                                        <i class=\"ti-trash\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Column -->\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/ecommerce/orders/orders.component.html")
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/product/product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/product/product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div  class=\"row el-element-overlay distan\" > \n    <div   *ngFor=\"let element of elementos\" class=\"col-lg-3 col-md-6\" >\n        <div class=\"card\">\n            <div class=\"el-card-item\">\n                <div class=\"el-card-avatar el-overlay-1\">\n                    <img src=\"assets/images/product/img{{element}}.jpg\" alt=\"Dementia\"   />\n\n                    <div class=\"el-overlay\" >\n                        <ul class=\"list-style-none el-info\">\n                            <li class=\"el-item\">\n                                <a class=\"btn default btn-outline image-popup-vertical-fit el-link\"\n                                 (click)=\"detallesProducto()\">\n                                    <i class=\"icon-magnifier\"></i>\n                                </a>\n                            </li>\n                            <li class=\"el-item\">\n                                <a class=\"btn default btn-outline el-link\" href=\"javascript:void(0);\">\n                                    <i class=\"icon-link\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n              \n            </div>\n        </div>\n    </div>\n    \n\n\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/product/product.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/product/product.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".distan {\n  padding-left: 20px;\n  padding-top: 20px; }\n\nimg {\n  height: 300px !important;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3QvQzpcXFVzZXJzXFw1NzMxM1xcRG9jdW1lbnRzXFxEZW1lbnRpYS9zcmNcXGFwcFxcZWNvbW1lcmNlXFxwcm9kdWN0XFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHdCQUF3QjtFQUV4QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3RhbiBcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ecommerce/product/product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/product/product.component.ts ***!
  \********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router) {
        this.route = route;
        this.router = router;
        this.capeta = '';
        this.elementos = [1, 2, 4, 5, 6, 7, 8, 9];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.tipoConfirm = this.route.snapshot.params['id'];
        this.capeta = (this.tipoConfirm === '1') ? 'mosaicos' : 'mugs';
    };
    ProductComponent.prototype.detallesProducto = function () {
        this.router.navigate(['ecommerce/details']);
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/ecommerce/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/ecommerce/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ecommerce-ecom-module.js.map