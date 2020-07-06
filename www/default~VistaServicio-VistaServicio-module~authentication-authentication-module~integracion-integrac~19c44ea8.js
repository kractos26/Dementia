(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~VistaServicio-VistaServicio-module~authentication-authentication-module~integracion-integrac~19c44ea8"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.2.11
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/api/common/http/HttpClient#jsonp
 * @publicApi
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.2.11');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/modelos/BasicInformation.model.ts":
/*!***************************************************!*\
  !*** ./src/app/modelos/BasicInformation.model.ts ***!
  \***************************************************/
/*! exports provided: BasicInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformation", function() { return BasicInformation; });
var BasicInformation = /** @class */ (function () {
    function BasicInformation() {
    }
    return BasicInformation;
}());



/***/ }),

/***/ "./src/app/modelos/servicefavorite.model.ts":
/*!**************************************************!*\
  !*** ./src/app/modelos/servicefavorite.model.ts ***!
  \**************************************************/
/*! exports provided: ServiceFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFavorite", function() { return ServiceFavorite; });
var ServiceFavorite = /** @class */ (function () {
    function ServiceFavorite() {
    }
    return ServiceFavorite;
}());



/***/ }),

/***/ "./src/app/modelos/servicespacemultimedia.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/modelos/servicespacemultimedia.model.ts ***!
  \*********************************************************/
/*! exports provided: ServiceSpaceMultimedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSpaceMultimedia", function() { return ServiceSpaceMultimedia; });
var ServiceSpaceMultimedia = /** @class */ (function () {
    function ServiceSpaceMultimedia() {
    }
    return ServiceSpaceMultimedia;
}());



/***/ }),

/***/ "./src/app/services/Publicaciones-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/Publicaciones-service.service.ts ***!
  \***********************************************************/
/*! exports provided: PublicacionesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesServiceService", function() { return PublicacionesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_cachestorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cachestorage.service */ "./src/app/services/cachestorage.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppServiceGlobal */ "./src/app/services/AppServiceGlobal.ts");







var PublicacionesServiceService = /** @class */ (function () {
    function PublicacionesServiceService(http, cacheManager, storage, genStorageServ, genStorageServiceName, genStorageCoordinate, genStorageCoWorkingSpace, genStorageAccommodationSpace, genStorageHotelSpace, genStorageClasificacionHotel, genStorageExclusivenessType, genStorageSpaceType, genStorageServiceTransport, genStorageServiceAttractions, genStorageServiceSchedule, genStorageServiceAditionals, genStorageServiceBenefit, genStorageRoomSpace, genStorageServiceSpaceMultimediaPrincipal, genStorageServiceSpaceItems, genStorageRoomSpaceItems, genStorageServiceSpaceBenefit, genStorageServiceSpaceMultimedia, genStorageServiceSpaceContract) {
        this.http = http;
        this.cacheManager = cacheManager;
        this.storage = storage;
        this.genStorageServ = genStorageServ;
        this.genStorageServiceName = genStorageServiceName;
        this.genStorageCoordinate = genStorageCoordinate;
        this.genStorageCoWorkingSpace = genStorageCoWorkingSpace;
        this.genStorageAccommodationSpace = genStorageAccommodationSpace;
        this.genStorageHotelSpace = genStorageHotelSpace;
        this.genStorageClasificacionHotel = genStorageClasificacionHotel;
        this.genStorageExclusivenessType = genStorageExclusivenessType;
        this.genStorageSpaceType = genStorageSpaceType;
        this.genStorageServiceTransport = genStorageServiceTransport;
        this.genStorageServiceAttractions = genStorageServiceAttractions;
        this.genStorageServiceSchedule = genStorageServiceSchedule;
        this.genStorageServiceAditionals = genStorageServiceAditionals;
        this.genStorageServiceBenefit = genStorageServiceBenefit;
        this.genStorageRoomSpace = genStorageRoomSpace;
        this.genStorageServiceSpaceMultimediaPrincipal = genStorageServiceSpaceMultimediaPrincipal;
        this.genStorageServiceSpaceItems = genStorageServiceSpaceItems;
        this.genStorageRoomSpaceItems = genStorageRoomSpaceItems;
        this.genStorageServiceSpaceBenefit = genStorageServiceSpaceBenefit;
        this.genStorageServiceSpaceMultimedia = genStorageServiceSpaceMultimedia;
        this.genStorageServiceSpaceContract = genStorageServiceSpaceContract;
        this.UrlRegistroCoWorking = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__["UrlBackendServices"] + "/api/CoWorking";
        this.UrlRegistroAlojamiento = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__["UrlBackendServices"] + "/api/Accommodation";
        this.UrlRegistroHotel = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__["UrlBackendServices"] + "/api/Hotel";
        this.UrlImage = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__["UrlBackendServices"] + "/api/Image";
        this.InfoRoomSpace = [];
        this.InfoServiceSpaceMultimediaPrincipal = [];
        this.Lista_InfoServiceSpaceItems = [];
        this.Lista_InfoRoomSpaceItems = [];
        this.Lista_InfoServiceSpaceBenefit = [];
        this.Lista_InfoServiceSpaceMultimedia = [];
        this.Lista_InfoServiceSpaceContract = [];
        this.multimediaType = [];
    }
    PublicacionesServiceService.prototype.Create = function (nombreTipoServicio) {
        this.NombreTipoServicio = nombreTipoServicio;
        switch (this.NombreTipoServicio) {
            case "CoWorking":
                return this.RegistrarCoWorking();
                break;
            case "Alojamiento":
                return this.RegistrarAlojamiento();
                break;
            case "Hotel":
                return this.RegistrarHotel();
                break;
        }
    };
    PublicacionesServiceService.prototype.BorrarInformacionMemoria = function () {
        var _this = this;
        var valueEmpty;
        this.genStorageServ.removeInformation("InfoService_" + this.NombreTipoServicio);
        this.genStorageServiceName.removeInformation("InfoServiceName_" + this.NombreTipoServicio);
        this.genStorageCoordinate.removeInformation("InfoCoordinate_" + this.NombreTipoServicio);
        this.genStorageServiceTransport.removeInformation("InfoServiceTransport_" + this.NombreTipoServicio);
        this.genStorageServiceAttractions.removeInformation("InfoServiceAttractions_" + this.NombreTipoServicio);
        this.genStorageServiceSchedule.removeInformation("InfoServiceSchedule_" + this.NombreTipoServicio);
        this.genStorageServiceAditionals.removeInformation("InfoServiceAditionals_" + this.NombreTipoServicio);
        this.genStorageServiceBenefit.removeInformation("InfoServiceBenefit_" + this.NombreTipoServicio);
        this.genStorageServiceSpaceMultimediaPrincipal.removeInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_99999");
        var indexServiceSpace = 0;
        if (this.NombreTipoServicio == "CoWorking") {
            this.InfoCoWorkingSpace = this.genStorageCoWorkingSpace.getInformation("InfoCoWorkingSpace");
            this.InfoCoWorkingSpace.forEach(function (element) {
                _this.BorrarInformacionServicios(indexServiceSpace);
                indexServiceSpace++;
            });
            this.genStorageCoWorkingSpace.removeInformation("InfoCoWorkingSpace");
        }
        else if (this.NombreTipoServicio == "Alojamiento") {
            this.genStorageExclusivenessType.removeInformation("InfoExclusivenessType_Alojamiento");
            this.genStorageSpaceType.removeInformation("InfoSpaceType_Alojamiento");
            this.InfoAccommodationSpace = this.genStorageAccommodationSpace.getInformation("InfoAccommodationSpace");
            this.InfoAccommodationSpace.forEach(function (element) {
                _this.BorrarInformacionServicios(indexServiceSpace);
                indexServiceSpace++;
            });
            var indexRoomSpace = 0;
            if (this.InfoRoomSpace != null && this.InfoRoomSpace.length > 0) {
                this.InfoRoomSpace.forEach(function (element) {
                    _this.genStorageRoomSpaceItems.removeInformation("InfoRoomSpaceItems_" + _this.NombreTipoServicio + "_" + indexRoomSpace);
                    indexRoomSpace++;
                });
            }
            this.genStorageRoomSpace.removeInformation("InfoRoomSpace_" + this.NombreTipoServicio);
            this.genStorageAccommodationSpace.removeInformation("InfoAccommodationSpace");
        }
        else if (this.NombreTipoServicio == "Hotel") {
            this.genStorageClasificacionHotel.removeInformation("ClasificacionHotel");
            this.InfoHotelSpace = this.genStorageAccommodationSpace.getInformation("InfoHotelSpace");
            this.InfoHotelSpace.forEach(function (element) {
                _this.BorrarInformacionServicios(indexServiceSpace);
                indexServiceSpace++;
            });
            var indexRoomSpace = 0;
            if (this.InfoRoomSpace != null && this.InfoRoomSpace.length > 0) {
                this.InfoRoomSpace.forEach(function (element) {
                    _this.genStorageRoomSpaceItems.removeInformation("InfoRoomSpaceItems_" + _this.NombreTipoServicio + "_" + indexRoomSpace);
                    indexRoomSpace++;
                });
            }
            this.genStorageRoomSpace.removeInformation("InfoRoomSpace_" + this.NombreTipoServicio);
            this.genStorageHotelSpace.removeInformation("InfoHotelSpace");
        }
    };
    PublicacionesServiceService.prototype.ImageLoader = function (ServiceIndex, NombreTipoServicio, Imageb64) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            ServiceIndex: ServiceIndex.toString(),
            NombreTipoServicio: NombreTipoServicio,
            Imageb64: Imageb64
        };
        return this.http.put(this.UrlImage, consulta, { headers: headers });
    };
    PublicacionesServiceService.prototype.BorrarInformacionServicios = function (indexServiceSpace) {
        this.genStorageServiceSpaceItems.removeInformation("InfoServiceSpaceItems_" + this.NombreTipoServicio + "_" + indexServiceSpace);
        this.genStorageServiceSpaceBenefit.removeInformation("InfoServiceSpaceBenefit_" + this.NombreTipoServicio + "_" + indexServiceSpace);
        this.genStorageServiceSpaceMultimedia.removeInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_" + indexServiceSpace);
        this.genStorageServiceSpaceContract.removeInformation("InfoServiceSpaceContract_" + this.NombreTipoServicio + "_" + indexServiceSpace);
    };
    PublicacionesServiceService.prototype.RegistrarCoWorking = function () {
        this.CargarInformacionMemoria();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            InfoService: this.InfoService,
            InfoServiceName: this.InfoServiceName,
            InfoCoordinate: this.InfoCoordinate,
            InfoCoWorkingSpace: this.InfoCoWorkingSpace,
            InfoServiceTransport: this.InfoServiceTransport,
            InfoServiceSchedule: this.InfoServiceSchedule,
            InfoServiceAditionals: this.InfoServiceAditionals,
            InfoServiceBenefit: this.InfoServiceBenefit,
            InfoServiceSpaceMultimediaPrincipal: this.InfoServiceSpaceMultimediaPrincipal,
            InfoServiceSpaceItems: this.Lista_InfoServiceSpaceItems,
            InfoServiceSpaceBenefit: this.Lista_InfoServiceSpaceBenefit,
            InfoServiceSpaceMultimedia: this.Lista_InfoServiceSpaceMultimedia,
            InfoServiceSpaceContract: this.Lista_InfoServiceSpaceContract,
        };
        return this.http.put(this.UrlRegistroCoWorking, consulta, { headers: headers });
    };
    PublicacionesServiceService.prototype.RegistrarAlojamiento = function () {
        this.CargarInformacionMemoria();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            InfoService: this.InfoService,
            InfoServiceName: this.InfoServiceName,
            InfoCoordinate: this.InfoCoordinate,
            InfoAccommodationSpace: this.InfoAccommodationSpace,
            InfoServiceTransport: this.InfoServiceTransport,
            InfoServiceSchedule: this.InfoServiceSchedule,
            InfoServiceAditionals: this.InfoServiceAditionals,
            InfoServiceBenefit: this.InfoServiceBenefit,
            InfoRoomSpace: this.InfoRoomSpace,
            InfoServiceSpaceItems: this.Lista_InfoServiceSpaceItems,
            InfoRoomSpaceItems: this.Lista_InfoRoomSpaceItems,
            InfoServiceSpaceBenefit: this.Lista_InfoServiceSpaceBenefit,
            InfoServiceSpaceMultimedia: this.Lista_InfoServiceSpaceMultimedia,
            InfoServiceSpaceContract: this.Lista_InfoServiceSpaceContract,
        };
        return this.http.put(this.UrlRegistroAlojamiento, consulta, { headers: headers });
    };
    PublicacionesServiceService.prototype.RegistrarHotel = function () {
        debugger;
        this.CargarInformacionMemoria();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            InfoService: this.InfoService,
            InfoServiceName: this.InfoServiceName,
            InfoCoordinate: this.InfoCoordinate,
            InfoHotelSpace: this.InfoHotelSpace,
            InfoServiceTransport: this.InfoServiceTransport,
            InfoServiceAttractions: this.InfoServiceAttractions,
            InfoServiceSchedule: this.InfoServiceSchedule,
            InfoServiceAditionals: this.InfoServiceAditionals,
            InfoServiceBenefit: this.InfoServiceBenefit,
            InfoRoomSpace: this.InfoRoomSpace,
            InfoServiceSpaceMultimediaPrincipal: this.InfoServiceSpaceMultimediaPrincipal,
            InfoServiceSpaceItems: this.Lista_InfoServiceSpaceItems,
            InfoRoomSpaceItems: this.Lista_InfoRoomSpaceItems,
            InfoServiceSpaceBenefit: this.Lista_InfoServiceSpaceBenefit,
            InfoServiceSpaceMultimedia: this.Lista_InfoServiceSpaceMultimedia,
            InfoServiceSpaceContract: this.Lista_InfoServiceSpaceContract,
        };
        return this.http.put(this.UrlRegistroHotel, consulta, { headers: headers });
    };
    PublicacionesServiceService.prototype.CargarInformacionMemoria = function () {
        var _this = this;
        this.InfoService = this.genStorageServ.getInformation("InfoService_" + this.NombreTipoServicio);
        this.InfoServiceName = this.genStorageServiceName.getInformation("InfoServiceName_" + this.NombreTipoServicio);
        this.InfoCoordinate = this.genStorageCoordinate.getInformation("InfoCoordinate_" + this.NombreTipoServicio);
        this.InfoCoWorkingSpace = this.genStorageCoWorkingSpace.getInformation("InfoCoWorkingSpace");
        this.InfoAccommodationSpace = this.genStorageAccommodationSpace.getInformation("InfoAccommodationSpace");
        this.InfoHotelSpace = this.genStorageHotelSpace.getInformation("InfoHotelSpace");
        this.InfoServiceTransport = this.genStorageServiceTransport.getInformation("InfoServiceTransport_" + this.NombreTipoServicio);
        this.InfoServiceAttractions = this.genStorageServiceAttractions.getInformation("InfoServiceAttractions_" + this.NombreTipoServicio);
        this.InfoServiceSchedule = this.genStorageServiceSchedule.getInformation("InfoServiceSchedule_" + this.NombreTipoServicio);
        this.InfoServiceAditionals = this.genStorageServiceAditionals.getInformation("InfoServiceAditionals_" + this.NombreTipoServicio);
        this.InfoServiceBenefit = this.genStorageServiceBenefit.getInformation("InfoServiceBenefit_" + this.NombreTipoServicio);
        this.InfoRoomSpace = this.genStorageRoomSpace.getInformation("InfoRoomSpace_" + this.NombreTipoServicio);
        this.cacheManager.getData("MultimediaType", function (array) { _this.multimediaType = array; });
        var limiteTipoServicio = (this.NombreTipoServicio == "CoWorking") ? this.InfoCoWorkingSpace.length :
            (this.NombreTipoServicio == "Alojamiento" ? this.InfoAccommodationSpace.length :
                (this.NombreTipoServicio == "Hotel" ? this.InfoHotelSpace.length : 0));
        var indexServiceSpace = 0;
        for (indexServiceSpace = 0; indexServiceSpace < limiteTipoServicio; indexServiceSpace++) {
            var InfoServiceSpaceItems = this.genStorageServiceSpaceItems.getInformation("InfoServiceSpaceItems_" + this.NombreTipoServicio + "_" + indexServiceSpace);
            this.Lista_InfoServiceSpaceItems.push(InfoServiceSpaceItems);
            var InfoServiceSpaceBenefit = this.genStorageServiceSpaceBenefit.getInformation("InfoServiceSpaceBenefit_" + this.NombreTipoServicio + "_" + indexServiceSpace);
            this.Lista_InfoServiceSpaceBenefit.push(InfoServiceSpaceBenefit);
            if (this.NombreTipoServicio == "CoWorking" || this.NombreTipoServicio == "Alojamiento") {
                var InfoServiceSpaceMultimedia = this.genStorageServiceSpaceMultimedia.getInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_" + indexServiceSpace);
                if (this.multimediaType && this.multimediaType != null && InfoServiceSpaceMultimedia != null) {
                    var typeImage = this.multimediaType.find(function (x) { return x.Name.toUpperCase() == "IMAGEN"; });
                    InfoServiceSpaceMultimedia.forEach(function (imagen) {
                        imagen.IdMultimediaType = (typeImage && typeImage != null) ? typeImage.IdMultimediaType : null;
                    });
                }
                this.Lista_InfoServiceSpaceMultimedia.push(InfoServiceSpaceMultimedia);
                var InfoServiceSpaceContract = this.genStorageServiceSpaceContract.getInformation("InfoServiceSpaceContract_" + this.NombreTipoServicio + "_" + indexServiceSpace);
                this.Lista_InfoServiceSpaceContract.push(InfoServiceSpaceContract);
            }
        }
        if (this.NombreTipoServicio == "Hotel") {
            this.Lista_InfoServiceSpaceMultimedia = [];
            this.Lista_InfoServiceSpaceContract = [];
        }
        this.InfoServiceSpaceMultimediaPrincipal = this.genStorageServiceSpaceMultimediaPrincipal.getInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_99999");
        if (this.multimediaType && this.multimediaType != null && this.InfoServiceSpaceMultimediaPrincipal != null && this.InfoServiceSpaceMultimediaPrincipal.length > 0) {
            var typeImage = this.multimediaType.find(function (x) { return x.Name.toUpperCase() == "IMAGEN"; });
            this.InfoServiceSpaceMultimediaPrincipal.forEach(function (imagen) {
                imagen.IdMultimediaType = (typeImage && typeImage != null) ? typeImage.IdMultimediaType : null;
            });
        }
        indexServiceSpace = 0;
        if (this.InfoRoomSpace != null && this.InfoRoomSpace.length > 0) {
            this.InfoRoomSpace.forEach(function (room) {
                var InfoRoomSpaceItems = _this.genStorageRoomSpaceItems.getInformation("InfoRoomSpaceItems_" + _this.NombreTipoServicio + "_" + indexServiceSpace);
                _this.Lista_InfoRoomSpaceItems.push(InfoRoomSpaceItems);
                if (_this.NombreTipoServicio == "Hotel") {
                    var InfoServiceSpaceMultimedia = _this.genStorageServiceSpaceMultimedia.getInformation("InfoServiceSpaceMultimedia_" + _this.NombreTipoServicio + "_" + indexServiceSpace);
                    if (_this.multimediaType && _this.multimediaType != null && InfoServiceSpaceMultimedia != null) {
                        var typeImage = _this.multimediaType.find(function (x) { return x.Name.toUpperCase() == "IMAGEN"; });
                        InfoServiceSpaceMultimedia.forEach(function (imagen) {
                            imagen.IdMultimediaType = (typeImage && typeImage != null) ? typeImage.IdMultimediaType : null;
                        });
                    }
                    _this.Lista_InfoServiceSpaceMultimedia.push(InfoServiceSpaceMultimedia);
                    var InfoServiceSpaceContract = _this.genStorageServiceSpaceContract.getInformation("InfoServiceSpaceContract_" + _this.NombreTipoServicio + "_" + indexServiceSpace);
                    _this.Lista_InfoServiceSpaceContract.push(InfoServiceSpaceContract);
                }
                indexServiceSpace++;
            });
        }
    };
    PublicacionesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_cachestorage_service__WEBPACK_IMPORTED_MODULE_3__["CacheStorageService"],
            _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"]])
    ], PublicacionesServiceService);
    return PublicacionesServiceService;
}());



/***/ }),

/***/ "./src/app/services/Search-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/Search-service.service.ts ***!
  \****************************************************/
/*! exports provided: SearchServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceService", function() { return SearchServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppServiceGlobal */ "./src/app/services/AppServiceGlobal.ts");





var SearchServiceService = /** @class */ (function () {
    function SearchServiceService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.UrlSearch = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_4__["UrlBackendServices"] + "/api/Search";
        this.UrlBasic = _AppServiceGlobal__WEBPACK_IMPORTED_MODULE_4__["UrlBackendServices"] + "/api/";
    }
    SearchServiceService.prototype.Buscar = function (isCW, isHT, isAC) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            IsCoWorking: isCW,
            IsHotel: isHT,
            IsAccommodation: isAC
        };
        return this.http.post(this.UrlSearch, consulta, { headers: headers });
    };
    SearchServiceService.prototype.BuscarCoWorking = function (filters) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            IsCoWorking: true,
            IsHotel: false,
            IsAccommodation: false,
            PageIndex: filters.Paginacion,
            CoWorkingFilters: {
                MinValue: filters.Minimo,
                MaxValue: filters.Maximo,
                City: filters.Ciudad,
                IdCountry: filters.IdCountry,
                ContractTypeList: filters.InfoContractType,
                SpaceTypeList: filters.InfoSpaceType
            }
        };
        return this.http.post(this.UrlSearch, consulta, { headers: headers });
    };
    SearchServiceService.prototype.BuscarAlojamiento = function (filters) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            IsCoWorking: false,
            IsHotel: false,
            IsAccommodation: true,
            PageIndex: filters.Paginacion,
            AccommodationFilters: {
                MinValue: filters.Minimo,
                MaxValue: filters.Maximo,
                City: filters.Ciudad,
                IdCountry: filters.IdCountry,
                ContractTypeList: filters.InfoContractType,
                AccommodationSpaceTypeList: filters.InfoAccommodationSpaceType
            }
        };
        return this.http.post(this.UrlSearch, consulta, { headers: headers });
    };
    SearchServiceService.prototype.BuscarHotel = function (filters) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            IsCoWorking: false,
            IsHotel: true,
            IsAccommodation: false,
            PageIndex: filters.Paginacion,
            HotelFilters: {
                MinValue: filters.Minimo,
                MaxValue: filters.Maximo,
                City: filters.Ciudad,
                IdCountry: filters.IdCountry,
                ContractTypeList: filters.InfoContractType,
                SpaceTypeList: filters.InfoSpaceType
            }
        };
        return this.http.post(this.UrlSearch, consulta, { headers: headers });
    };
    SearchServiceService.prototype.AgregarFavoritos = function (paramServiceFavorite) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            Parameters: {
                TypeService: paramServiceFavorite.TypeService,
                IdService: paramServiceFavorite.IdService,
                IdUser: this.storage.getCurrentUser().IdUser,
                IsFavorite: paramServiceFavorite.IsFavorite
            }
        };
        return this.http.put(this.UrlBasic + "ServiceFavorite", consulta, { headers: headers });
    };
    SearchServiceService.prototype.ConsultarMisFavoritos = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken()
        };
        return this.http.post(this.UrlBasic + "ServiceFavorite", consulta, { headers: headers });
    };
    SearchServiceService.prototype.MisPublicaciones = function (isCW, isHT, isAC) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            IdUser: this.storage.getCurrentUser().IdUser,
            Token: this.storage.getCurrentToken(),
            IsCoWorking: isCW,
            IsHotel: isHT,
            IsAccommodation: isAC,
            CoWorkingFilters: { IdUser: this.storage.getCurrentUser().IdUser },
            HotelFilters: { IdUser: this.storage.getCurrentUser().IdUser },
            AccommodationFilters: { IdUser: this.storage.getCurrentUser().IdUser }
        };
        return this.http.post(this.UrlSearch, consulta, { headers: headers });
    };
    SearchServiceService.prototype.GetDetailsInfo = function (controllerName, IdServicio, Command, IdServiceType, IdServiceSpace) {
        if (Command === void 0) { Command = null; }
        if (IdServiceType === void 0) { IdServiceType = null; }
        if (IdServiceSpace === void 0) { IdServiceSpace = null; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            Token: this.storage.getCurrentToken(),
            IdService: IdServicio,
            IdServiceType: IdServiceType,
            IdServiceSpace: IdServiceSpace,
            Command: Command
        };
        return this.http.post(this.UrlBasic + controllerName, consulta, { headers: headers });
    };
    SearchServiceService.prototype.GetDetailInfo = function (controllerName, IdServicio, Command, IdServiceType, IdServiceSpace) {
        if (Command === void 0) { Command = null; }
        if (IdServiceType === void 0) { IdServiceType = null; }
        if (IdServiceSpace === void 0) { IdServiceSpace = null; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' });
        var consulta = {
            ApplicationId: this.storage.getCurrentApplication(),
            Token: this.storage.getCurrentToken(),
            IdService: IdServicio,
            IdServiceType: IdServiceType,
            IdServiceSpace: IdServiceSpace,
            Command: Command
        };
        return this.http.post(this.UrlBasic + controllerName, consulta, { headers: headers });
    };
    SearchServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageServiceService"]])
    ], SearchServiceService);
    return SearchServiceService;
}());



/***/ }),

/***/ "./src/app/utilidades/Alerta/alerta.component.html":
/*!*********************************************************!*\
  !*** ./src/app/utilidades/Alerta/alerta.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p  *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n</p>"

/***/ }),

/***/ "./src/app/utilidades/Alerta/alerta.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/utilidades/Alerta/alerta.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertaComponent", function() { return AlertaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertaComponent = /** @class */ (function () {
    function AlertaComponent() {
        this.alerts = [];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.staticAlertClosed = false;
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertaComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 5);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(function () { return (_this.successMessage = null); });
    };
    AlertaComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AlertaComponent.prototype, "alerts", void 0);
    AlertaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alerta',
            template: __webpack_require__(/*! ./alerta.component.html */ "./src/app/utilidades/Alerta/alerta.component.html"),
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertaComponent);
    return AlertaComponent;
}());



/***/ }),

/***/ "./src/app/utilidades/BackButton/BackButton.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/utilidades/BackButton/BackButton.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"BotonRegresar\" href=\"javascript:void(0)\">\r\n    <i class=\"mdi mdi-keyboard-backspace\" style=\"font-size: 30px;\"></i>\r\n</a>"

/***/ }),

/***/ "./src/app/utilidades/BackButton/BackButton.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/utilidades/BackButton/BackButton.component.ts ***!
  \***************************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent() {
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    BackButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-BackButton',
            template: __webpack_require__(/*! ./BackButton.component.html */ "./src/app/utilidades/BackButton/BackButton.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackButtonComponent);
    return BackButtonComponent;
}());



/***/ }),

/***/ "./src/app/utilidades/ListaSeleccion/ListaSeleccion.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/utilidades/ListaSeleccion/ListaSeleccion.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let itemList of InfoGenericList\" class=\"card-body optionItem\">\r\n    <div class=\"row p-b-5\" (click)=\"AgregarEnListaFinal(itemList);\">\r\n        <div class=\"col-10\">\r\n            <h4 class=\"card-title\">{{itemList.Name}}</h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <div [ngClass]=\"{'active': (itemList.Checked == true), 'inactive' : (itemList.Checked == false)}\" class=\"image-options-list\"></div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"itemList.Checked && Configuration.AdditionalFieldType != ''\"  class=\"row p-b-15\" >\r\n        <div class=\"col-12\">\r\n            <input [ngClass]=\"{'is-invalid': (itemList.AdditionalField == '')}\" value=\"{{itemList.AdditionalField}}\"\r\n                    type=\"{{Configuration.AdditionalFieldType}}\" placeholder=\"{{Configuration.AdditionalFieldLabel}}\" class=\"form-control form-control-sm\" \r\n                    (change)=\"ModificarInfoAdicional(itemList, $event.srcElement.value);\">\r\n            <span class=\"LabelOblitaorio\" style=\"top:-23px;\">*</span>\r\n        </div>\r\n    </div>\r\n    <hr class=\"m-t-0\">\r\n</div>"

/***/ }),

/***/ "./src/app/utilidades/ListaSeleccion/ListaSeleccion.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/utilidades/ListaSeleccion/ListaSeleccion.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaSeleccionComponent, StructList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaSeleccionComponent", function() { return ListaSeleccionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructList", function() { return StructList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cachestorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/cachestorage.service */ "./src/app/services/cachestorage.service.ts");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");




var ListaSeleccionComponent = /** @class */ (function () {
    function ListaSeleccionComponent(cacheManager, genStorageTrans) {
        this.cacheManager = cacheManager;
        this.genStorageTrans = genStorageTrans;
        this.InfoStorageEntity = [];
        this.InfoGenericList = [];
    }
    ListaSeleccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.InfoStorageEntity = this.genStorageTrans.getInformation(this.Configuration.StorageKey);
        if (!this.InfoStorageEntity || this.InfoStorageEntity == null)
            this.InfoStorageEntity = [];
        this.cacheManager.getData(this.Configuration.MasterEntityName, function (array) {
            if (_this.Configuration.Filters && _this.Configuration.Filters != null && _this.Configuration.Filters.length > 0) {
                var arrayAux = [];
                for (var contFilter = 0; contFilter < _this.Configuration.Filters.length; contFilter++) {
                    for (var cont = 0; cont < array.length; cont++) {
                        if (array[cont][_this.Configuration.Filters[contFilter].field] == _this.Configuration.Filters[contFilter].value) {
                            arrayAux.push(array[cont]);
                        }
                    }
                    if (!_this.Configuration.FiltersOperator || _this.Configuration.FiltersOperator != "OR") {
                        array = arrayAux;
                    }
                }
                array = arrayAux;
            }
            var countTransportType = 0;
            array.forEach(function (type) {
                var indexListaGuardada = _this.InfoStorageEntity.findIndex(function (x) { return x[_this.Configuration.NameFieldId] == type[_this.Configuration.NameFieldId]; });
                _this.InfoGenericList.push({
                    Id: type[_this.Configuration.NameFieldId],
                    Name: type["Name"],
                    Checked: (indexListaGuardada != -1),
                    AdditionalField: (_this.Configuration.AdditionalFieldName != "" && indexListaGuardada != -1) ? _this.InfoStorageEntity[indexListaGuardada][_this.Configuration.AdditionalFieldName] : ''
                });
                countTransportType++;
            });
        });
    };
    ListaSeleccionComponent.prototype.ModificarInfoAdicional = function (itemList, value) {
        var _this = this;
        itemList.AdditionalField = value;
        var posArray = this.InfoStorageEntity.findIndex(function (x) { return x[_this.Configuration.NameFieldId] == itemList.Id; });
        if (posArray != -1) {
            this.InfoStorageEntity[posArray][this.Configuration.AdditionalFieldName] = value;
        }
        if (this.Configuration.EsGuardadoAutomatico) {
            this.GuardarAutomaticamenteEnStorage();
        }
    };
    ListaSeleccionComponent.prototype.AgregarEnListaFinal = function (itemList) {
        var _this = this;
        console.log(this.Configuration.NameFieldId + ": ", itemList);
        var isAdd = !itemList.Checked;
        itemList.Checked = !itemList.Checked;
        if (isAdd) {
            if (this.Configuration.EsSeleccionUnica) {
                this.InfoGenericList.forEach(function (item) { item.Checked = false; });
                this.InfoStorageEntity = [];
                itemList.Checked = !itemList.Checked;
            }
            var infoGenEntity = [];
            infoGenEntity[this.Configuration.NameFieldId] = itemList.Id;
            if (this.Configuration.AdditionalFieldName != "")
                infoGenEntity[this.Configuration.AdditionalFieldName] = itemList.AdditionalField;
            this.InfoStorageEntity.push(infoGenEntity);
        }
        else {
            var posArray = this.InfoStorageEntity.findIndex(function (x) { return x[_this.Configuration.NameFieldId] == itemList.Id; });
            if (posArray != -1) {
                this.InfoStorageEntity.splice(posArray, 1);
            }
        }
        if (this.Configuration.EsGuardadoAutomatico) {
            this.GuardarAutomaticamenteEnStorage();
        }
    };
    ListaSeleccionComponent.prototype.GuardarAutomaticamenteEnStorage = function () {
        var _this = this;
        var auxArray = [];
        this.InfoStorageEntity.forEach(function (item) {
            var aux = {};
            aux[_this.Configuration.NameFieldId] = item[_this.Configuration.NameFieldId];
            aux["Name"] = item["Name"];
            if (_this.Configuration.AdditionalFieldName != "") {
                aux[_this.Configuration.AdditionalFieldName] = item.AdditionalField;
            }
            auxArray.push(aux);
        });
        this.genStorageTrans.setInformation(this.Configuration.StorageKey, auxArray);
    };
    ListaSeleccionComponent.prototype.ValidarDescripcionesDiligenciadas = function () {
        var _this = this;
        if (this.Configuration.AdditionalFieldName == "")
            return true;
        var result = true;
        this.InfoStorageEntity.forEach(function (element) {
            if (!element[_this.Configuration.AdditionalFieldName] || element[_this.Configuration.AdditionalFieldName] == "" || element[_this.Configuration.AdditionalFieldName] == null) {
                result = false;
                return;
            }
        });
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListaSeleccionComponent.prototype, "Configuration", void 0);
    ListaSeleccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listaseleccion',
            template: __webpack_require__(/*! ./ListaSeleccion.component.html */ "./src/app/utilidades/ListaSeleccion/ListaSeleccion.component.html"),
            styles: [__webpack_require__(/*! ./ListaSeleccion.scss */ "./src/app/utilidades/ListaSeleccion/ListaSeleccion.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cachestorage_service__WEBPACK_IMPORTED_MODULE_2__["CacheStorageService"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_3__["GenericStorageService"]])
    ], ListaSeleccionComponent);
    return ListaSeleccionComponent;
}());

var StructList = /** @class */ (function () {
    function StructList() {
    }
    return StructList;
}());



/***/ }),

/***/ "./src/app/utilidades/ListaSeleccion/ListaSeleccion.scss":
/*!***************************************************************!*\
  !*** ./src/app/utilidades/ListaSeleccion/ListaSeleccion.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th.ng2-smart-actions-title {\n  display: none; }\n\n.card-body.optionItem {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  padding-bottom: 00rem;\n  padding-top: 20px; }\n\n.image-options-list {\n  width: 30px !important;\n  height: 30px !important;\n  position: relative;\n  left: 5px !important;\n  top: -4px !important;\n  background-size: contain !important; }\n\n.image-options-list.inactive {\n  background: url('Yes_Check_Circle2.png'); }\n\n.image-options-list.active {\n  background: url('Yes_Check_Circle1.png'); }\n\n@media (min-width: 767px) {\n  .card-body.optionItem[_ngcontent-c5] {\n    padding: 1.25rem;\n    padding-bottom: 00rem;\n    padding-top: 20px;\n    width: 50%;\n    display: inline-block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGlkYWRlcy9MaXN0YVNlbGVjY2lvbi9DOlxcQlJJQ0tTNFVTXFxCYWNrZW5kXFxicmlja3M0dXMvc3JjXFxhcHBcXHV0aWxpZGFkZXNcXExpc3RhU2VsZWNjaW9uXFxMaXN0YVNlbGVjY2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUdyQjtFQUVJLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DLEVBQUE7O0FBR3ZDO0VBRUksd0NBQStELEVBQUE7O0FBR25FO0VBRUksd0NBQStELEVBQUE7O0FBR25FO0VBRUk7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC91dGlsaWRhZGVzL0xpc3RhU2VsZWNjaW9uL0xpc3RhU2VsZWNjaW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aC5uZzItc21hcnQtYWN0aW9ucy10aXRsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5Lm9wdGlvbkl0ZW0ge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAwcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1vcHRpb25zLWxpc3Rcclxue1xyXG4gICAgd2lkdGg6IDMwcHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4IWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlLW9wdGlvbnMtbGlzdC5pbmFjdGl2ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1llc19DaGVja19DaXJjbGUyLnBuZ1wiKTtcclxufVxyXG5cclxuLmltYWdlLW9wdGlvbnMtbGlzdC5hY3RpdmVcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ZZXNfQ2hlY2tfQ2lyY2xlMS5wbmdcIik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweClcclxue1xyXG4gICAgLmNhcmQtYm9keS5vcHRpb25JdGVtW19uZ2NvbnRlbnQtYzVdIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwMHJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/utilidades/ServiceBasicView/ServiceBasicView.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/utilidades/ServiceBasicView/ServiceBasicView.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-4\">\r\n    <div class=\"card mr-2\" style=\"width: 9rem; margin-left:.4em\">\r\n        <img (click)=\"VerDetalleServicio();\" src=\"{{basicInformation.Image}}\" width=\"120\" height=\"80\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n            <h6 class=\"card-title\">\r\n                <app-agregarfavoritos class=\"BotonFavoritos Basic\" [parameterfavorito]=\"favorito\"></app-agregarfavoritos>\r\n                <span (click)=\"VerDetalleServicio();\">{{basicInformation.Title}}</span>\r\n            </h6>\r\n            <h6 (click)=\"VerDetalleServicio();\" class=\"value-field\">{{basicInformation.Value}}</h6>\r\n            <h6 (click)=\"VerDetalleServicio();\" class=\"location-field\">{{basicInformation.City}} - {{basicInformation.Country}}</h6>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/utilidades/ServiceBasicView/ServiceBasicView.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/utilidades/ServiceBasicView/ServiceBasicView.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceBasicViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBasicViewComponent", function() { return ServiceBasicViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var src_app_modelos_BasicInformation_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/BasicInformation.model */ "./src/app/modelos/BasicInformation.model.ts");
/* harmony import */ var src_app_modelos_servicefavorite_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/servicefavorite.model */ "./src/app/modelos/servicefavorite.model.ts");
/* harmony import */ var _agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../agregarfavoritos/agregarfavoritos.component */ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.ts");
/* harmony import */ var src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/Search-service.service */ "./src/app/services/Search-service.service.ts");








var ServiceBasicViewComponent = /** @class */ (function () {
    function ServiceBasicViewComponent(router, servicePublicaciones, genStorageFavoritos) {
        this.router = router;
        this.servicePublicaciones = servicePublicaciones;
        this.genStorageFavoritos = genStorageFavoritos;
        this.DefaultImageUrl = "assets/images/background/SinImagen.png";
    }
    ServiceBasicViewComponent.prototype.ngOnInit = function () {
        if (this.basicInformation != null && this.basicInformation.Image != null) {
            var aux = this.basicInformation.Image;
            aux = aux.replace("thumbnail", "mediana");
            aux = "http://bricks4us.azurewebsites.net/" + aux;
            this.basicInformation.Image = aux;
        }
        else if (this.basicInformation.Image == null) {
            this.basicInformation.Image = this.DefaultImageUrl;
        }
        this.favorito = new src_app_modelos_servicefavorite_model__WEBPACK_IMPORTED_MODULE_5__["ServiceFavorite"]();
        this.favorito.IdService = this.basicInformation.IdService;
        this.favorito.TypeService = this.basicInformation.ServiceType;
        this.compCalificacion = new _agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_6__["AgregarfavoritosComponent"](this.servicePublicaciones, this.genStorageFavoritos);
    };
    ServiceBasicViewComponent.prototype.VerDetalleServicio = function () {
        //if(this.basicInformation.ServiceType != "CoWorking")
        this.router.navigate(["/VistaServicio/" + this.basicInformation.ServiceType + "/" + this.basicInformation.IdService]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_modelos_BasicInformation_model__WEBPACK_IMPORTED_MODULE_4__["BasicInformation"])
    ], ServiceBasicViewComponent.prototype, "basicInformation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_6__["AgregarfavoritosComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_6__["AgregarfavoritosComponent"])
    ], ServiceBasicViewComponent.prototype, "compCalificacion", void 0);
    ServiceBasicViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ServiceBasicView',
            template: __webpack_require__(/*! ./ServiceBasicView.component.html */ "./src/app/utilidades/ServiceBasicView/ServiceBasicView.component.html"),
            styles: [__webpack_require__(/*! ./ServiceBasicView.scss */ "./src/app/utilidades/ServiceBasicView/ServiceBasicView.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_Search_service_service__WEBPACK_IMPORTED_MODULE_7__["SearchServiceService"],
            src_app_services_genericstorage_service__WEBPACK_IMPORTED_MODULE_3__["GenericStorageService"]])
    ], ServiceBasicViewComponent);
    return ServiceBasicViewComponent;
}());



/***/ }),

/***/ "./src/app/utilidades/ServiceBasicView/ServiceBasicView.scss":
/*!*******************************************************************!*\
  !*** ./src/app/utilidades/ServiceBasicView/ServiceBasicView.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th.ng2-smart-actions-title {\n  display: none; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 0.25rem;\n  padding-bottom: 00rem;\n  padding-top: 10px; }\n\n.card .card-title {\n  position: relative;\n  font-weight: 600;\n  margin-bottom: 3px;\n  font-size: 14px; }\n\n.card .value-field {\n  position: relative;\n  font-weight: 400;\n  margin-bottom: 3px;\n  font-size: 12px; }\n\n.card .location-field {\n  position: relative;\n  font-weight: 400;\n  margin-bottom: 3px;\n  font-size: 12px; }\n\n.image-options-list.inactive {\n  background: url('Yes_Check_Circle2.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGlkYWRlcy9TZXJ2aWNlQmFzaWNWaWV3L0M6XFxCUklDS1M0VVNcXEJhY2tlbmRcXGJyaWNrczR1cy9zcmNcXGFwcFxcdXRpbGlkYWRlc1xcU2VydmljZUJhc2ljVmlld1xcU2VydmljZUJhc2ljVmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUVJLHdDQUErRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXRpbGlkYWRlcy9TZXJ2aWNlQmFzaWNWaWV3L1NlcnZpY2VCYXNpY1ZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLm5nMi1zbWFydC1hY3Rpb25zLXRpdGxlXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAwcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkIC52YWx1ZS1maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZCAubG9jYXRpb24tZmllbGQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmltYWdlLW9wdGlvbnMtbGlzdC5pbmFjdGl2ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1llc19DaGVja19DaXJjbGUyLnBuZ1wiKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"AddorRemove()\">\r\n  <!--<span class=\"heart\" [ngClass]=\"{'full' : (parameterfavorito.IsFavorite == true)}\">&hearts;</span>-->\r\n  <i class=\"mdi-heart\" [ngClass]=\"{'full' : (parameterfavorito.IsFavorite == true)}\"></i>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdi-heart {\n  display: inline-block;\n  font-size: 20px;\n  color: #4a4747;\n  top: -10px;\n  left: 0px;\n  position: relative;\n  font: 15px/1 \"Material Design Icons\"; }\n\n.full {\n  color: #b61818; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGlkYWRlcy9hZ3JlZ2FyZmF2b3JpdG9zL0M6XFxCUklDS1M0VVNcXEJhY2tlbmRcXGJyaWNrczR1cy9zcmNcXGFwcFxcdXRpbGlkYWRlc1xcYWdyZWdhcmZhdm9yaXRvc1xcYWdyZWdhcmZhdm9yaXRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG9DQUFvQyxFQUFBOztBQUd4QztFQUVFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3V0aWxpZGFkZXMvYWdyZWdhcmZhdm9yaXRvcy9hZ3JlZ2FyZmF2b3JpdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kaS1oZWFydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzRhNDc0NztcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250OiAxNXB4LzEgXCJNYXRlcmlhbCBEZXNpZ24gSWNvbnNcIjtcclxufVxyXG5cclxuLmZ1bGwgXHJcbntcclxuICBjb2xvcjogI2I2MTgxODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.ts ***!
  \***************************************************************************/
/*! exports provided: AgregarfavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarfavoritosComponent", function() { return AgregarfavoritosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelos_servicefavorite_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modelos/servicefavorite.model */ "./src/app/modelos/servicefavorite.model.ts");
/* harmony import */ var _services_Search_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Search-service.service */ "./src/app/services/Search-service.service.ts");
/* harmony import */ var _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");





var AgregarfavoritosComponent = /** @class */ (function () {
    function AgregarfavoritosComponent(servicePublicaciones, genStorageFavoritos) {
        this.servicePublicaciones = servicePublicaciones;
        this.genStorageFavoritos = genStorageFavoritos;
        this.corazon = '';
        this.parameterfavorito = new _modelos_servicefavorite_model__WEBPACK_IMPORTED_MODULE_2__["ServiceFavorite"]();
    }
    AgregarfavoritosComponent.prototype.ngOnInit = function () {
        this.ValidarEstadoFavorito();
    };
    AgregarfavoritosComponent.prototype.AddorRemove = function () {
        this.parameterfavorito.IsFavorite = !this.parameterfavorito.IsFavorite;
        this.servicePublicaciones.AgregarFavoritos(this.parameterfavorito).subscribe(function (respuesta) {
            var registroResponse = respuesta;
        });
        this.ActualizarListaLocal();
    };
    AgregarfavoritosComponent.prototype.ValidarEstadoFavorito = function () {
        var _this = this;
        this.parameterfavorito.IsFavorite = false;
        var listFavorite = [];
        listFavorite = this.genStorageFavoritos.getInformation('Cache_ServiceFavoriteList');
        if (listFavorite == null) {
            return;
        }
        var index = listFavorite.findIndex(function (x) { return x.IdService == _this.parameterfavorito.IdService && x.TypeService == _this.parameterfavorito.TypeService; });
        this.parameterfavorito.IsFavorite = (index != -1) ? listFavorite[index].IsFavorite : false;
        console.log(this.parameterfavorito);
    };
    AgregarfavoritosComponent.prototype.ActualizarListaLocal = function () {
        var _this = this;
        var listFavorite = [];
        listFavorite = this.genStorageFavoritos.getInformation('Cache_ServiceFavoriteList');
        if (listFavorite == null)
            listFavorite = [];
        if (this.parameterfavorito.IsFavorite) {
            listFavorite.push(this.parameterfavorito);
        }
        else {
            var index = listFavorite.findIndex(function (x) { return x.IdService == _this.parameterfavorito.IdService && x.TypeService == _this.parameterfavorito.TypeService; });
            if (index != -1)
                listFavorite.splice(index, 1);
        }
        this.genStorageFavoritos.setInformation('Cache_ServiceFavoriteList', listFavorite);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _modelos_servicefavorite_model__WEBPACK_IMPORTED_MODULE_2__["ServiceFavorite"])
    ], AgregarfavoritosComponent.prototype, "parameterfavorito", void 0);
    AgregarfavoritosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agregarfavoritos',
            template: __webpack_require__(/*! ./agregarfavoritos.component.html */ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.html"),
            styles: [__webpack_require__(/*! ./agregarfavoritos.component.scss */ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Search_service_service__WEBPACK_IMPORTED_MODULE_3__["SearchServiceService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_4__["GenericStorageService"]])
    ], AgregarfavoritosComponent);
    return AgregarfavoritosComponent;
}());



/***/ }),

/***/ "./src/app/utilidades/calificacion/calificacion.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/utilidades/calificacion/calificacion.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            \r\n            <div class=\"card-body\" [ngClass]=\"{'SimpleStyle': (parameterRate?.IsSimpleStyle)}\">\r\n                <ngb-rating [ngClass]=\"{'SimpleStyle': (parameterRate?.IsSimpleStyle)}\" [(rate)]=\"currentRate\" max=\"{{stars}}\" [readonly]=\"parameterRate?.ReadOnly\">\r\n                  <ng-template let-fill=\"fill\">\r\n                      <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n                  </ng-template>\r\n                </ngb-rating>\r\n                <span style=\"padding-left: 10px;font-weight: 500;\" *ngIf=\"parameterRate?.InfoAdditional != ''\">{{parameterRate?.InfoAdditional}}</span>\r\n                <div *ngIf=\"!parameterRate?.HideText\" class=\"m-t-10\">Calificacion: <b>{{currentRate}}</b></div>\r\n            </div>\r\n\r\n            <button *ngIf=\"parameterRate?.ShowButton\" (click)=\"pasarstart($event)\">Calificar</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/utilidades/calificacion/calificacion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/utilidades/calificacion/calificacion.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionComponent", function() { return CalificacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CalificacionComponent = /** @class */ (function () {
    function CalificacionComponent() {
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.getRate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.parameterRate = {};
    }
    CalificacionComponent.prototype.ngOnInit = function () {
        this.currentRate = (this.parameterRate.nStart != null ? this.parameterRate.nStart : 5);
        this.stars = (this.parameterRate.maxStar != null ? this.parameterRate.maxStar : 5);
    };
    CalificacionComponent.prototype.pasarstart = function (event) {
        this.getRate.emit({ datos: this.currentRate });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalificacionComponent.prototype, "getRate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalificacionComponent.prototype, "parameterRate", void 0);
    CalificacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngbd-calificacion',
            template: __webpack_require__(/*! ./calificacion.component.html */ "./src/app/utilidades/calificacion/calificacion.component.html"),
            styles: ["\n      .star {\n        font-size: 2rem;\n        color: #b0c4de;\n      }\n      .filled {\n        color: yellow;\n      }\n      .heart {\n        position: relative;\n        display: inline-block;\n        font-size: 3rem;\n        color: #d3d3d3;\n      }\n      .full {\n        color: red;\n      }\n      .half {\n        position: absolute;\n        display: inline-block;\n        overflow: hidden;\n        color: red;\n      }\n      .d-inline-flex.SimpleStyle \n      {\n        zoom: 50%;\n      }\n      .card-body.SimpleStyle \n      {\n        position: relative;\n        top: -20px;\n        left: -20px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalificacionComponent);
    return CalificacionComponent;
}());



/***/ }),

/***/ "./src/app/utilidades/file-upload/upload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/utilidades/file-upload/upload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group row p-b-15\">\r\n                    \r\n                    <app-alerta *ngIf=\"mensaje?.length > 0\"  [alerts] = \"mensaje\"></app-alerta>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"row p-b-15\">\r\n                            \r\n                            <div  (click)=\"CargarImagenes()\" class=\"col-7 input-group-prepend\">\r\n                                <span  class=\"input-group-text\">Cargar Imágenes</span>\r\n                            </div>\r\n                            <div  (click)=\"TomarFoto()\" class=\"col-5 input-group-prepend\">\r\n                                <span class=\"input-group-text\">Tomar Foto</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6\">\r\n                        <div  class=\"row p-b-15\" style=\"font-size: small;\">\r\n                            <div *ngFor=\"let image of InfoServiceSpaceMultimedia;\" class=\"col-sm-2.5\" style=\"padding: 3px;\">\r\n                                    <img _ngcontent-c1='' height='80' width='80' alt='homepage' class='light-logo' src='http://bricks4us.azurewebsites.net/{{image.Content}}'/>\r\n                                    <!--<div class=\"CajaImagen\" style=\"background-image: url('http://bricks4us.azurewebsites.net/{{image.Content}}');\"></div>-->\r\n                                    <span (click)='EliminarImagen(image);' class=\"fa fa-trash btnEliminar-Imagen\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n</div>"

/***/ }),

/***/ "./src/app/utilidades/file-upload/upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/utilidades/file-upload/upload.component.ts ***!
  \************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Publicaciones_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Publicaciones-service.service */ "./src/app/services/Publicaciones-service.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _modelos_servicespacemultimedia_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modelos/servicespacemultimedia.model */ "./src/app/modelos/servicespacemultimedia.model.ts");
/* harmony import */ var _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/genericstorage.service */ "./src/app/services/genericstorage.service.ts");
/* harmony import */ var _services_AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AppServiceGlobal */ "./src/app/services/AppServiceGlobal.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");









var UploadComponent = /** @class */ (function () {
    function UploadComponent(storage, serviceImages, genStorageServiceSpaceMultimedia, imagePicker, camera) {
        this.storage = storage;
        this.serviceImages = serviceImages;
        this.genStorageServiceSpaceMultimedia = genStorageServiceSpaceMultimedia;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.UrlBackend = _services_AppServiceGlobal__WEBPACK_IMPORTED_MODULE_6__["UrlBackendServices"];
        this.mensaje = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.ActualizarImagenes();
        this.startTimer();
    };
    UploadComponent.prototype.uploadFile = function (imgbase64) {
        var _this = this;
        if (!imgbase64 || imgbase64 == null || imgbase64 == "" || imgbase64.length < 10)
            return;
        this.serviceImages.ImageLoader(this.ServiceIndex, this.NombreTipoServicio, imgbase64).subscribe(function (respuesta) {
            var registroResponse = respuesta;
            if (registroResponse != null && registroResponse.Exitoso) {
                _this.OnImageUploaded(registroResponse);
            }
            else {
                _this.mensaje = [{ id: 2, type: 'warning', message: registroResponse.MensajeResultado }];
            }
        }, function (error) {
            _this.mensaje = [{ id: 2, type: 'danger', message: error.statusText }];
        });
    };
    UploadComponent.prototype.TomarFoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.uploadFile(imageData);
        }, function (error) { console.log(error); });
    };
    UploadComponent.prototype.CargarImagenes = function () {
        var _this = this;
        var options = {
            quality: 50,
            maximumImagesCount: 10,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.uploadFile(results[i]);
            }
        }, function (error) { console.log(error); });
    };
    UploadComponent.prototype.OnImageUploaded = function (resultado) {
        if (resultado && resultado != null && resultado.Exitoso) {
            var InfoServiceSpaceMultimedia = [];
            var genStorageServiceSpaceMultimedia = new _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"]();
            var NombreTipoServicio = resultado.ServiceName;
            var ServiceIndex = resultado.Index;
            InfoServiceSpaceMultimedia = genStorageServiceSpaceMultimedia.getInformation("InfoServiceSpaceMultimedia_" + NombreTipoServicio + "_" + ServiceIndex);
            if (!InfoServiceSpaceMultimedia || InfoServiceSpaceMultimedia == null)
                InfoServiceSpaceMultimedia = [];
            var serviceSpaceMultimedia = new _modelos_servicespacemultimedia_model__WEBPACK_IMPORTED_MODULE_4__["ServiceSpaceMultimedia"]();
            serviceSpaceMultimedia.Content = resultado.ImageUrl;
            InfoServiceSpaceMultimedia.push(serviceSpaceMultimedia);
            genStorageServiceSpaceMultimedia.setInformation("InfoServiceSpaceMultimedia_" + NombreTipoServicio + "_" + ServiceIndex, InfoServiceSpaceMultimedia);
        }
    };
    UploadComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.ActualizarImagenes();
        }, 2000);
    };
    UploadComponent.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    UploadComponent.prototype.ActualizarImagenes = function () {
        var _this = this;
        this.pauseTimer();
        if (!this.InfoServiceSpaceMultimedia || this.InfoServiceSpaceMultimedia == null)
            this.InfoServiceSpaceMultimedia = [];
        var listadoAuxiliar = this.genStorageServiceSpaceMultimedia.getInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_" + this.ServiceIndex);
        if (listadoAuxiliar && listadoAuxiliar != null) {
            listadoAuxiliar.forEach(function (image) {
                var infoImage = _this.InfoServiceSpaceMultimedia.find(function (x) { return x.Content == image.Content; });
                if (!infoImage || infoImage == null) {
                    _this.InfoServiceSpaceMultimedia.push(image);
                }
            });
        }
        this.startTimer();
    };
    UploadComponent.prototype.EliminarImagen = function (infoImage) {
        var listadoAuxiliar = this.genStorageServiceSpaceMultimedia.getInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_" + this.ServiceIndex);
        var posArrayStorage = listadoAuxiliar.findIndex(function (x) { return x.Content == infoImage.Content; });
        if (posArrayStorage != -1) {
            listadoAuxiliar.splice(posArrayStorage, 1);
            this.genStorageServiceSpaceMultimedia.setInformation("InfoServiceSpaceMultimedia_" + this.NombreTipoServicio + "_" + this.ServiceIndex, listadoAuxiliar);
        }
        var posArray = this.InfoServiceSpaceMultimedia.findIndex(function (x) { return x.Content == infoImage.Content; });
        if (posArray != -1) {
            this.InfoServiceSpaceMultimedia.splice(posArray, 1);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadComponent.prototype, "ServiceUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UploadComponent.prototype, "ServiceIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadComponent.prototype, "NombreTipoServicio", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-images2',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/utilidades/file-upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.scss */ "./src/app/utilidades/file-upload/upload.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageServiceService"],
            _services_Publicaciones_service_service__WEBPACK_IMPORTED_MODULE_2__["PublicacionesServiceService"],
            _services_genericstorage_service__WEBPACK_IMPORTED_MODULE_5__["GenericStorageService"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/utilidades/file-upload/upload.scss":
/*!****************************************************!*\
  !*** ./src/app/utilidades/file-upload/upload.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-drop-zone {\n  border: dotted 2px #dadada; }\n\n.nv-file-over {\n  border: dotted 2px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 2px green; }\n\n.CajaImagen {\n  width: 80px;\n  height: 80px;\n  background-position: center;\n  background-size: cover; }\n\n.btnEliminar-Imagen {\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  bottom: 18px;\n  margin: 0 auto;\n  padding: 3px;\n  background: #00000005;\n  color: #f2e6e673;\n  background: #00000061;\n  color: #f2e6e6; }\n\n.btnEliminar-Imagen:hover,\n.btnEliminar-Imagen:focus {\n  background: #00000061;\n  color: #f2e6e6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGlkYWRlcy9maWxlLXVwbG9hZC9DOlxcQlJJQ0tTNFVTXFxCYWNrZW5kXFxicmlja3M0dXMvc3JjXFxhcHBcXHV0aWxpZGFkZXNcXGZpbGUtdXBsb2FkXFx1cGxvYWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHNCQUFzQixFQUFBOztBQUN0QixnREFBQTs7QUFDRjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQUd4QjtFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFFWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBRWhCLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2hCOztFQUdFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91dGlsaWRhZGVzL2ZpbGUtdXBsb2FkL3VwbG9hZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRyb3Atem9uZSB7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgMnB4ICNkYWRhZGE7XHJcbn1cclxuLm52LWZpbGUtb3ZlciB7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgMnB4IHJlZDtcclxufSAvKiBEZWZhdWx0IGNsYXNzIGFwcGxpZWQgdG8gZHJvcCB6b25lcyBvbiBvdmVyICovXHJcbi5hbm90aGVyLWZpbGUtb3Zlci1jbGFzcyB7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgMnB4IGdyZWVuO1xyXG59XHJcblxyXG4uQ2FqYUltYWdlblxyXG57XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYnRuRWxpbWluYXItSW1hZ2VuXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm90dG9tOiAxOHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuXHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDA1OyAgXHJcbiAgY29sb3I6ICNmMmU2ZTY3MztcclxuXHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDYxO1xyXG4gIGNvbG9yOiAjZjJlNmU2O1xyXG59XHJcblxyXG4uYnRuRWxpbWluYXItSW1hZ2VuOmhvdmVyLFxyXG4uYnRuRWxpbWluYXItSW1hZ2VuOmZvY3VzXHJcbntcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwNjE7XHJcbiAgY29sb3I6ICNmMmU2ZTY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/utilidades/utilidades.module.ts":
/*!*************************************************!*\
  !*** ./src/app/utilidades/utilidades.module.ts ***!
  \*************************************************/
/*! exports provided: UtilidadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilidadesModule", function() { return UtilidadesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Alerta_alerta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Alerta/alerta.component */ "./src/app/utilidades/Alerta/alerta.component.ts");
/* harmony import */ var _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-upload/upload.component */ "./src/app/utilidades/file-upload/upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _calificacion_calificacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calificacion/calificacion.component */ "./src/app/utilidades/calificacion/calificacion.component.ts");
/* harmony import */ var _ListaSeleccion_ListaSeleccion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ListaSeleccion/ListaSeleccion.component */ "./src/app/utilidades/ListaSeleccion/ListaSeleccion.component.ts");
/* harmony import */ var _ServiceBasicView_ServiceBasicView_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ServiceBasicView/ServiceBasicView.component */ "./src/app/utilidades/ServiceBasicView/ServiceBasicView.component.ts");
/* harmony import */ var _BackButton_BackButton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BackButton/BackButton.component */ "./src/app/utilidades/BackButton/BackButton.component.ts");
/* harmony import */ var _agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agregarfavoritos/agregarfavoritos.component */ "./src/app/utilidades/agregarfavoritos/agregarfavoritos.component.ts");














//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
var UtilidadesModule = /** @class */ (function () {
    function UtilidadesModule() {
    }
    UtilidadesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Alerta_alerta_component__WEBPACK_IMPORTED_MODULE_5__["AlertaComponent"],
                _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"],
                _calificacion_calificacion_component__WEBPACK_IMPORTED_MODULE_9__["CalificacionComponent"],
                _ListaSeleccion_ListaSeleccion_component__WEBPACK_IMPORTED_MODULE_10__["ListaSeleccionComponent"],
                _ServiceBasicView_ServiceBasicView_component__WEBPACK_IMPORTED_MODULE_11__["ServiceBasicViewComponent"],
                _BackButton_BackButton_component__WEBPACK_IMPORTED_MODULE_12__["BackButtonComponent"],
                _agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_13__["AgregarfavoritosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["JsonpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            exports: [
                _Alerta_alerta_component__WEBPACK_IMPORTED_MODULE_5__["AlertaComponent"],
                _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"],
                _calificacion_calificacion_component__WEBPACK_IMPORTED_MODULE_9__["CalificacionComponent"],
                _ListaSeleccion_ListaSeleccion_component__WEBPACK_IMPORTED_MODULE_10__["ListaSeleccionComponent"],
                _ServiceBasicView_ServiceBasicView_component__WEBPACK_IMPORTED_MODULE_11__["ServiceBasicViewComponent"],
                _BackButton_BackButton_component__WEBPACK_IMPORTED_MODULE_12__["BackButtonComponent"],
                _agregarfavoritos_agregarfavoritos_component__WEBPACK_IMPORTED_MODULE_13__["AgregarfavoritosComponent"]
            ],
            providers: [],
            bootstrap: [_file_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"], _ListaSeleccion_ListaSeleccion_component__WEBPACK_IMPORTED_MODULE_10__["ListaSeleccionComponent"], _ServiceBasicView_ServiceBasicView_component__WEBPACK_IMPORTED_MODULE_11__["ServiceBasicViewComponent"]]
        })
    ], UtilidadesModule);
    return UtilidadesModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~VistaServicio-VistaServicio-module~authentication-authentication-module~integracion-integrac~19c44ea8.js.map