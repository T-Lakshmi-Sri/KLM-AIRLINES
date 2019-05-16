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
        this.airportDetailsUrl = '/travel/getAirportDetails';
        this.retrieveFareURL = '/travel/getFare';
    }
    AirlineDataService.prototype.getAirLineData = function () {
        return this.http.get(this.airportDetailsUrl);
    };
    AirlineDataService.prototype.retrieveFare = function (originCode, destCode) {
        return this.http.get(this.retrieveFareURL + '/' + originCode + '/' + destCode);
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <div class=\"header\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n\n</div>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'Welcome to KLM AIRLINES';
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
    {
        path: 'statistics',
        component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"],
        children: [
            {
                path: 'travel',
                pathMatch: 'prefix',
                redirectTo: 'statistics'
            },
            {
                path: 'statistics',
                redirectTo: 'travel/statistics'
            },
            {
                path: 'travel/statistics',
                component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"]
            },
            {
                path: 'statistics',
                component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"]
            }
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
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"],
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

/***/ "./src/app/contentData/content-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/contentData/content-data.service.ts ***!
  \*****************************************************/
/*! exports provided: ContentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDataService", function() { return ContentDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContentDataService = /** @class */ (function () {
    function ContentDataService(http) {
        this.http = http;
        this.contentURL = 'travel/assets/content.json';
    }
    ContentDataService.prototype.getContent = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/plain' });
        return this.http.get(this.contentURL, { responseType: 'text', headers: headers });
    };
    ContentDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContentDataService);
    return ContentDataService;
}());



/***/ }),

/***/ "./src/app/klm/klm.component.html":
/*!****************************************!*\
  !*** ./src/app/klm/klm.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"content\">\r\n  <div class=\"row airline-navigation\">\r\n    <div>\r\n      <button class=\"btn mr-1 btn-primary\" value='Search' (click)=\"navigateToSearch()\">{{content.search}}</button>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-warning\" value='Statics' (click)=\"navigateToStatistics()\">{{content.statisticData}}</button>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <form>\r\n      <div class=\"row airline-details\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <mat-form-field>\r\n            <span>{{content.origin}}</span>\r\n            <input type=\"text\" class=\"origin\" aria-label=\"origin\" matInput [formControl]=\"myOriginControl\"\r\n                   (click)=\"getAirlineDataFare()\"\r\n                   [matAutocomplete]=\"auto1\">\r\n            <mat-autocomplete class=\"originOptions\" #auto1=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n              <mat-option *ngFor=\"let option of originOptions\" [value]=\"option\">\r\n                {{option.code}}-{{option.name}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <mat-form-field>\r\n            <span>{{content.destination}}</span>\r\n            <input type=\"text\" class=\"destination\" aria-label=\"destination\" matInput\r\n                   [formControl]=\"myDestinationControl\"\r\n                   (click)=\"getAirlineDataFare()\"\r\n                   [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete class=\"destinationOptions\" #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n              <mat-option *ngFor=\"let optionItem of destinationOptions\" [value]=\"optionItem\">\r\n                {{optionItem.code}}-{{optionItem.name}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <button class=\"btn btn-danger deal\" (click)=\"findDeal()\">{{content.findDeal}}</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n  </div>\r\n  <div class=\"airline-fare\" *ngIf=\"airLineFareData\">\r\n\r\n    <table id=\"airlines\">\r\n      <th>\r\n        {{content.heading}}\r\n      </th>\r\n      <th>\r\n        {{content.originCode}}\r\n      </th>\r\n      <th>\r\n        {{content.destCode}}\r\n      </th>\r\n      <th>\r\n        Fare\r\n      </th>\r\n      <tr>\r\n        <td>\r\n          KLM AIRLINES\r\n        </td>\r\n        <td>\r\n          {{originCode}}\r\n        </td>\r\n        <td>\r\n          {{destCode}}\r\n        </td>\r\n        <td>\r\n          {{airlineFare + airlineCurrency}}\r\n        </td>\r\n      </tr>\r\n\r\n    </table>\r\n\r\n  </div>\r\n  </div>\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _airlineData_airline_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../airlineData/airline-data.service */ "./src/app/airlineData/airline-data.service.ts");
/* harmony import */ var _contentData_content_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contentData/content-data.service */ "./src/app/contentData/content-data.service.ts");







var KlmComponent = /** @class */ (function () {
    function KlmComponent(airlineDataService, contentDataService, router) {
        this.airlineDataService = airlineDataService;
        this.contentDataService = contentDataService;
        this.router = router;
        this.myOriginControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myDestinationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    KlmComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    KlmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getContentData();
        this.originOptions = [];
        this.destinationOptions = [];
        this.showAirlineData();
        this.myOriginControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.code; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (code) { return code ? _this.originFilter(code) : _this.originOptions.slice(); })).subscribe(function (response) {
            _this.originOptions = response;
        }, function (error) { return _this.error = error; });
        this.originOptions = [];
        this.myDestinationControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.code; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (code) { return code ? _this.destinationFilter(code) : _this.destinationOptions.slice(); })).subscribe(function (response) {
            _this.destinationOptions = response;
        }, function (error) { return _this.error = error; });
    };
    KlmComponent.prototype.destinationFilter = function (code) {
        this.airLineFareData = false;
        var filterValue = code.toLowerCase();
        this.destCode = code;
        return this.initialOptions.filter(function (option) {
            return option.code.toLowerCase().indexOf(filterValue) === 0 || option.name.toLowerCase().indexOf(filterValue) === 0;
        });
    };
    KlmComponent.prototype.originFilter = function (code) {
        var filterValue = code.toLowerCase();
        this.airLineFareData = false;
        this.originCode = code;
        return this.initialOptions.filter(function (option) {
            return option.code.toLowerCase().indexOf(filterValue) === 0 || option.name.toLowerCase().indexOf(filterValue) === 0;
        });
    };
    KlmComponent.prototype.getContentData = function () {
        var _this = this;
        this.contentDataService.getContent()
            .subscribe(function (data) {
            if (data) {
                _this.content = JSON.parse(data);
            }
        }, function (error) { return _this.error = error; });
    };
    KlmComponent.prototype.showAirlineData = function () {
        var _this = this;
        this.originOptions = [];
        this.initialOptions = [];
        this.airlineDataService.getAirLineData()
            .subscribe(function (data) {
            var airLineDataValue = data;
            _this.originOptions = airLineDataValue._embedded.locations;
            _this.destinationOptions = airLineDataValue._embedded.locations;
            _this.initialOptions = _this.originOptions;
        }, function (error) { return _this.error = error; });
    };
    KlmComponent.prototype.findDeal = function () {
        var _this = this;
        this.findDealValidations();
        if (this.airLineFareValid) {
            this.airlineDataService.retrieveFare(this.originCode, this.destCode)
                .subscribe(function (data) {
                if (data) {
                    var airLineFareData = data;
                    _this.airlineFare = airLineFareData.amount;
                    _this.airlineCurrency = airLineFareData.currency;
                    _this.airLineFareData = true;
                }
            }, function (error) { return _this.error = error; });
        }
    };
    KlmComponent.prototype.findDealValidations = function () {
        if (this.originCode) {
            if (this.destCode) {
                if (this.originCode !== this.destCode) {
                    this.airLineFareValid = true;
                }
                else {
                    alert('Please select different destination from origin');
                }
            }
            else {
                alert('Please select Destination');
            }
        }
        else {
            alert('Please select Origin');
        }
    };
    KlmComponent.prototype.getAirlineDataFare = function () {
        this.airLineFareData = false;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_airlineData_airline_data_service__WEBPACK_IMPORTED_MODULE_5__["AirlineDataService"], _contentData_content_data_service__WEBPACK_IMPORTED_MODULE_6__["ContentDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KlmComponent);
    return KlmComponent;
}());



/***/ }),

/***/ "./src/app/statisticData/statistic-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/statisticData/statistic-data.service.ts ***!
  \*********************************************************/
/*! exports provided: StatisticDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticDataService", function() { return StatisticDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StatisticDataService = /** @class */ (function () {
    function StatisticDataService(http) {
        this.http = http;
        this.statisticsUrl = '/travel/getStatisticData';
    }
    StatisticDataService.prototype.getStatistics = function () {
        return this.http.get(this.statisticsUrl);
    };
    StatisticDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StatisticDataService);
    return StatisticDataService;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistic\" *ngIf=\"content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div>\n        <button class=\"btn mr-1 btn-primary\" value='Search' (click)=\"navigateToSearch()\">{{content.search}}</button>\n      </div>\n      <div>\n        <button class=\"btn btn-warning\" value='Statistics'\n                (click)=\"navigateToStatistics()\">{{content.statisticData}}</button>\n      </div>\n    </div>\n    <table class=\"statistic\" id=\"statisticData\">\n      <th>{{content.statisticData}}</th>\n      <th>{{content.values}}</th>\n      <tr>\n        <td>{{content.requestCount}}</td>\n        <td>\n          {{requestCount}}\n        </td>\n      </tr>\n      <tr>\n        <td>{{content.request200Count}}</td>\n        <td>\n          {{request200Count}}\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{content.request4XXCount}}</td>\n        <td>\n          {{request4XXCount}}\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{content.request5XXCount}}</td>\n        <td>\n          {{request5XXCount}}\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{content.totalResponseTimeMillis}}</td>\n        <td>\n          {{totalResponseTimeMillis}}\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{content.avgRequestTime}}</td>\n        <td>\n          {{avgRequestTime}}\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{content.minRequestTime}}</td>\n        <td>\n          {{minRequestTime}}\n        </td>\n      </tr>\n      <tr>\n        <td>{{content.maxResponseTimeMillis}}</td>\n        <td>\n          {{maxResponseTimeMillis}}\n        </td>\n      </tr>\n\n    </table>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statisticData_statistic_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statisticData/statistic-data.service */ "./src/app/statisticData/statistic-data.service.ts");
/* harmony import */ var _contentData_content_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contentData/content-data.service */ "./src/app/contentData/content-data.service.ts");





var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(statisticDataService, contentDataService, router) {
        this.statisticDataService = statisticDataService;
        this.contentDataService = contentDataService;
        this.router = router;
        this.getContentData();
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statisticDataService.getStatistics()
            .subscribe(function (data) {
            if (data) {
                _this.requestCount200Values = [];
                _this.request4XXCountValues = [];
                _this.request5XXCountValues = [];
                _this.statisticData = data;
                _this.showTable = true;
                _this.requestCount = data.measurements[0].value;
                _this.totalResponseTimeMillis = data.measurements[1].value;
                _this.maxResponseTimeMillis = data.measurements[2].value;
                _this.minRequestTime = -_this.maxResponseTimeMillis;
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
        }, function (error) { return _this.error = error; });
    };
    StatisticsComponent.prototype.getContentData = function () {
        var _this = this;
        this.contentDataService.getContent()
            .subscribe(function (data) {
            if (data) {
                _this.content = JSON.parse(data);
            }
        }, function (error) { return _this.error = error; });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_statisticData_statistic_data_service__WEBPACK_IMPORTED_MODULE_3__["StatisticDataService"], _contentData_content_data_service__WEBPACK_IMPORTED_MODULE_4__["ContentDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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