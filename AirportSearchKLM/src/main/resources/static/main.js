(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/airlineData/airline-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/airlineData/airline-data.service.ts ***!
  \*****************************************************/
/*! exports provided: AirlineDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDataService", function() { return AirlineDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AirlineDataService = /** @class */ (function () {
    function AirlineDataService(http) {
        this.http = http;
        this.configUrl = '/travel/getAirportDetails';
        this.retrieveFareURL = '/travel/getFare';
        this.statisticsUrl = 'travel/actuator/metrics/http.server.requests';
    }
    AirlineDataService.prototype.getConfig = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/plain' });
        return this.http.get(this.configUrl, { responseType: 'text', headers: headers });
    };
    // Will be implemented once statistics is done
    AirlineDataService.prototype.getStatistics = function () {
        return this.http.get(this.statisticsUrl);
    };
    AirlineDataService.prototype.retrieveFare = function (originCode, destCode) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/plain' });
        return this.http.get(this.retrieveFareURL + '/' + originCode + '/' + destCode, { responseType: 'text', headers: headers });
    };
    AirlineDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AirlineDataService);
    return AirlineDataService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <div class=\"header\">\n    <h1>\n      Welcome to {{ title }}\n    </h1>\n  </div>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KLM AIRLINES';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _klm_klm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./klm/klm.component */ "./src/app/klm/klm.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");














var appRoutes = [
    { path: 'statistics',
        component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"],
        children: [
            {
                path: 'statistics',
                redirectTo: 'travel/statistics'
            },
            {
                path: 'statistics',
                component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"]
            },
            {
                path: 'travel/statistics',
                component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"]
            },
        ]
    },
    {
        path: '',
        component: _klm_klm_component__WEBPACK_IMPORTED_MODULE_11__["KlmComponent"],
        children: [
            {
                path: 'travel',
                pathMatch: 'prefix',
                redirectTo: 'airlines'
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'airlines'
            },
            {
                path: 'airlines',
                redirectTo: 'travel/airlines'
            },
            {
                path: 'travel/airlines',
                component: _klm_klm_component__WEBPACK_IMPORTED_MODULE_11__["KlmComponent"]
            },
            {
                path: 'airlines',
                component: _klm_klm_component__WEBPACK_IMPORTED_MODULE_11__["KlmComponent"]
            },
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _klm_klm_component__WEBPACK_IMPORTED_MODULE_11__["KlmComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/klm/klm.component.html":
/*!****************************************!*\
  !*** ./src/app/klm/klm.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"airlinemain container\">\r\n\r\n<div>\r\n  <div class=\"airlinebuttons\">\r\n    <button class=\"btn btn mr-1 btn-primary\" value='Search' (click)=\"navigateToSearch()\">Search</button>\r\n\r\n    <button class=\"btn btn btn-warning\" value='Statics' (click)=\"navigateToStatistics()\">Statistics</button>\r\n  </div>\r\n</div>\r\n\r\n  <form class=\"example-form\">\r\n    <div class=\"example-container\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <span>Origin</span>\r\n        <input type=\"text\" class=\"origin\" aria-label=\"origin\" matInput [formControl]=\"myControl\" (change)=\"getOrgin()\"\r\n               [matAutocomplete]=\"auto1\">\r\n        <mat-autocomplete class=\"airlinemat\" #auto1=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n          <mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\r\n            {{option.code}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"example-container\">\r\n      <mat-form-field class=\"example-full-width-dest\">\r\n        <span>Destination</span>\r\n        <input type=\"text\" class=\"origin\" aria-label=\"destination\" matInput [formControl]=\"myDestControl\"\r\n               [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete class=\"destmat\" #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n          <mat-option *ngFor=\"let optionItem of filteredOptions2\" [value]=\"optionItem\">\r\n            {{optionItem.code}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <button class=\"btn btn btn-primary btn-danger\" (click)=\"findDeal()\">Find Deal</button>\r\n  </form>\r\n\r\n\r\n  <div\r\n    class=\"airLineFare\" *ngIf=\"airLineFareData\">\r\n    <div class=\"airLineFareSpace\">\r\n\r\n      <div class=\"airline-info pull-left\">\r\n        KLM AIRLINES\r\n      </div>\r\n      <div class=\"airline-info pull-left\">\r\n        {{originCode}}\r\n      </div>\r\n      <div class=\"airline-info pull-left\">\r\n        {{destCode}}\r\n      </div>\r\n      <div class=\"airline-info pull-left\">\r\n        {{airlineFare + airlineCurrency}}\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/klm/klm.component.scss":
/*!****************************************!*\
  !*** ./src/app/klm/klm.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tsbS9rbG0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/klm/klm.component.ts":
/*!**************************************!*\
  !*** ./src/app/klm/klm.component.ts ***!
  \**************************************/
/*! exports provided: KlmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmComponent", function() { return KlmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _airlineData_airline_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../airlineData/airline-data.service */ "./src/app/airlineData/airline-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var KlmComponent = /** @class */ (function () {
    function KlmComponent(airlineDataService, router) {
        this.airlineDataService = airlineDataService;
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myDestControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.airlineData = [];
    }
    KlmComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    KlmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = [];
        this.filteredOptions2 = [];
        this.showConfig();
        this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return typeof value === 'string' ? value : value.code; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (code) { return code ? _this.oringinfilter(code) : _this.filteredOptions.slice(); })).subscribe(function (response) {
            _this.filteredOptions = response;
        });
        this.filteredOptions = [];
        this.myDestControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return typeof value === 'string' ? value : value.code; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (code) { return code ? _this.destfilter(code) : _this.filteredOptions2.slice(); })).subscribe(function (response) {
            _this.filteredOptions2 = response;
        });
    };
    KlmComponent.prototype.destfilter = function (code) {
        this.airLineFareData = false;
        var filterValue = code.toLowerCase();
        this.destCode = code;
        return this.initialOptions.filter(function (option) { return option.code.toLowerCase().indexOf(filterValue) === 0; });
    };
    KlmComponent.prototype.oringinfilter = function (code) {
        var filterValue = code.toLowerCase();
        this.airLineFareData = false;
        this.originCode = code;
        return this.initialOptions.filter(function (option) { return option.code.toLowerCase().indexOf(filterValue) === 0; });
    };
    KlmComponent.prototype.showConfig = function () {
        var _this = this;
        this.filteredOptions = [];
        this.initialOptions = [];
        this.airlineDataService.getConfig()
            .subscribe(function (data) {
            var airLineDataValue = JSON.parse(data);
            _this.filteredOptions = airLineDataValue._embedded.locations;
            _this.filteredOptions2 = airLineDataValue._embedded.locations;
            _this.initialOptions = _this.filteredOptions;
        });
    };
    KlmComponent.prototype.findDeal = function () {
        var _this = this;
        if (this.originCode) {
            // validation
        }
        else {
            alert('Please Select Origin value');
        }
        if (this.destCode) {
            // validation
        }
        else {
            alert('Please select Destination value');
        }
        if (this.originCode && this.destCode) {
            this.airlineDataService.retrieveFare(this.originCode, this.destCode)
                .subscribe(function (data) {
                if (data) {
                    var airLineFaredata = JSON.parse(data);
                    _this.airlineFare = airLineFaredata.amount;
                    _this.airlineCurrency = airLineFaredata.currency;
                    _this.airLineFareData = true;
                }
            });
        }
    };
    KlmComponent.prototype.navigateToStatistics = function () {
        this.router.navigate(['statistics']);
    };
    KlmComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['airlines']);
    };
    KlmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-klm',
            template: __webpack_require__(/*! ./klm.component.html */ "./src/app/klm/klm.component.html"),
            styles: [__webpack_require__(/*! ./klm.component.scss */ "./src/app/klm/klm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_airlineData_airline_data_service__WEBPACK_IMPORTED_MODULE_3__["AirlineDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], KlmComponent);
    return KlmComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistic\">\n\n<div class=\"container\">\n<div>\n  <button class=\"btn btn btn-primary mr-1\" value='Search' (click)=\"navigateToSearch()\">Search</button>\n  <button class=\"btn btn btn-warning\" value='Statics' (click)=\"navigateToStatistics()\">Statistics</button>\n</div>\n<table class=\"statistic\" id=\"airlines\">\n  <th>Statistics</th>\n  <th>StatisticData</th>\n  <tr>\n    <td>RequestCount</td>\n    <td>\n      {{requestCount}}\n    </td>\n  </tr>\n  \n  <tr>\n    \n    <td>Request200Count</td>\n    <td>\n      {{request200Count}}\n    </td>\n  </tr>\n  \n  <tr>\n<td>Request4XXCount</td>\n    <td>\n      {{request4XXCount}}\n    </td>\n  </tr>\n  \n  <tr>\n<td>Request5XXCount</td>\n    <td>\n      {{request5XXCount}}\n    </td>\n  </tr>\n  \n  <tr>\n<td>TotalResponseTimeMillis</td>\n    <td>\n      {{totalResponseTimeMillis}}\n    </td>\n  </tr>\n  \n  <tr>\n<td>AvgResponseTimeMillis</td>\n    <td>\n      {{avgRequestTime}}\n    </td>\n  </tr>\n\n  <tr>\n    <td>MinResponseTimeMillis</td>\n    <td>\n      {{minRequestTime}}\n    </td>\n  </tr>\n  <tr>\n    <td>MaxResponseTimeMillis</td>\n    <td>\n      {{maxResponseTimeMillis}}\n    </td>\n  </tr>\n\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _airlineData_airline_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../airlineData/airline-data.service */ "./src/app/airlineData/airline-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(airlineDataService, router) {
        this.airlineDataService = airlineDataService;
        this.router = router;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.airlineDataService.getStatistics()
            .subscribe(function (data) {
            if (data) {
                _this.requestCount200Values = [];
                _this.request4XXCountValues = [];
                _this.request5XXCountValues = [];
                _this.statisticData = data;
                _this.showTable = true;
                _this.requestCount = data.availableTags[4].values.length;
                _this.totalResponseTimeMillis = data.measurements[1].value;
                _this.maxResponseTimeMillis = data.measurements[2].value;
                _this.requestCountValues = data.availableTags[4].values;
                for (var i = 0; i < _this.requestCountValues.length; i++) {
                    if (_this.requestCountValues[i] >= 200 && _this.requestCountValues[i] < 400) {
                        _this.requestCount200Values.push(_this.requestCountValues[i]);
                    }
                    if (_this.requestCountValues[i] >= 400 && _this.requestCountValues[i] < 500) {
                        _this.request4XXCountValues.push(_this.requestCountValues[i]);
                    }
                    if (_this.requestCountValues[i] >= 500) {
                        _this.request5XXCountValues.push(_this.requestCountValues[i]);
                    }
                }
                _this.request200Count = _this.requestCount200Values.length;
                _this.request4XXCount = _this.request4XXCountValues.length;
                _this.request5XXCount = _this.request5XXCountValues.length;
                _this.avgRequestTime = _this.totalResponseTimeMillis / 2;
            }
        });
    };
    StatisticsComponent.prototype.navigateToStatistics = function () {
        this.router.navigate(['statistics']);
    };
    StatisticsComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['airlines']);
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_airlineData_airline_data_service__WEBPACK_IMPORTED_MODULE_2__["AirlineDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! O:\AngularApp\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map