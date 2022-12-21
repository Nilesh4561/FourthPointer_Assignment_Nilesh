(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FourthPointer_Assignment_Nilesh\assignment\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "I6wT":
/*!********************************************************!*\
  !*** ./src/app/Directives/custom-tooltip.directive.ts ***!
  \********************************************************/
/*! exports provided: CustomTooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTooltipDirective", function() { return CustomTooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _Service_data_flow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/data-flow.service */ "seRl");





class CustomTooltipDirective {
    constructor(overlay, overlayPositionBuilder, elementRef, viewContainerRef, dataFlow) {
        this.overlay = overlay;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.dataFlow = dataFlow;
    }
    ngOnInit() {
        if (this.tooltipContent) {
            const pos = this.setCustomPositionValue();
            const position = this.overlayPositionBuilder
                .flexibleConnectedTo(this.elementRef)
                .withPositions([
                {
                    originX: pos.startPos,
                    originY: pos.endPos,
                    overlayX: pos.startOverlayPos,
                    overlayY: pos.endOverlayPos,
                    offsetX: pos.offSetX,
                    offsetY: pos.offSetY,
                },
            ]);
            this.overlayRef = this.overlay.create({
                positionStrategy: position,
            });
        }
        else {
            console.error('something went wrong');
        }
    }
    setCustomPositionValue() {
        let startPos = 'center';
        let endPos = 'center';
        let startOverlayPos = 'center';
        let endOverlayPos = 'center';
        let offSetX = 0;
        let offSetY = 0;
        if (this.tooltipContent.postion === 'right') {
            startPos = 'end';
            endPos = 'center';
            startOverlayPos = 'start';
            endOverlayPos = 'center';
            offSetX = 10;
            offSetY = 0;
        }
        else if (this.tooltipContent.postion === 'left') {
            startPos = 'start';
            endPos = 'center';
            startOverlayPos = 'end';
            endOverlayPos = 'center';
            offSetX = -10;
            offSetY = 0;
        }
        else if (this.tooltipContent.postion === 'top') {
            startPos = 'center';
            endPos = 'top';
            startOverlayPos = 'center';
            endOverlayPos = 'bottom';
            offSetX = 0;
            offSetY = -10;
        }
        else {
            startPos = 'center';
            endPos = 'bottom';
            startOverlayPos = 'center';
            endOverlayPos = 'top';
            offSetX = 0;
            offSetY = 10;
        }
        return {
            startPos,
            endPos,
            startOverlayPos,
            endOverlayPos,
            offSetX,
            offSetY,
        };
    }
    show() {
        if (this.overlayRef) {
            let containerPortal;
            this.dataFlow.inputData = this.tooltipContent.inputData;
            this.dataFlow.position = this.tooltipContent.postion;
            if (this.tooltipContent.tooltipContent instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
                containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.tooltipContent.tooltipContent, this.viewContainerRef);
            }
            else {
                containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this.tooltipContent.tooltipContent, this.viewContainerRef);
            }
            this.overlayRef.attach(containerPortal);
        }
    }
    hide() {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
    }
}
CustomTooltipDirective.ɵfac = function CustomTooltipDirective_Factory(t) { return new (t || CustomTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_data_flow_service__WEBPACK_IMPORTED_MODULE_3__["DataFlowService"])); };
CustomTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CustomTooltipDirective, selectors: [["", "appCustomTooltip", ""]], hostBindings: function CustomTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CustomTooltipDirective_mouseenter_HostBindingHandler() { return ctx.show(); })("mouseout", function CustomTooltipDirective_mouseout_HostBindingHandler() { return ctx.hide(); });
    } }, inputs: { tooltipContent: ["appCustomTooltip", "tooltipContent"] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "e8lW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Service_data_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Service/data-flow.service */ "seRl");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _Directives_custom_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Directives/custom-tooltip.directive */ "I6wT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Angular template tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "tooltip contetnt : instanceof TemplateRef");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Positon Provided : left | right | top | bottom : ", ctx_r1.dataFlow.position, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Input Data Provided : name: ", ctx_r1.dataFlow.inputData.name, ", city: ", ctx_r1.dataFlow.inputData.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, ctx_r1.dataFlow.inputData.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 7, ctx_r1.dataFlow.inputData.city));
} }
const _c0 = function () { return { name: "ravi", city: "mumbai" }; };
const _c1 = function (a0, a1) { return { tooltipContent: a0, inputData: a1, postion: "left" }; };
const _c2 = function () { return { name: "nilesh", city: "renukoot" }; };
const _c3 = function (a0, a1) { return { tooltipContent: a0, inputData: a1, postion: "right" }; };
class AppComponent {
    constructor(dataFlow) {
        this.dataFlow = dataFlow;
        this.title = 'assignment';
        this.tooltipComponent = _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_0__["TooltipComponent"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Service_data_flow_service__WEBPACK_IMPORTED_MODULE_2__["DataFlowService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 10, consts: [[1, "chip-list"], ["color", "primary", "selected", "", 3, "appCustomTooltip"], ["color", "accent", "selected", "", 3, "appCustomTooltip"], ["tooltipTemplate", ""], [1, "template"], [1, "input-group", "mb-3", "mt-3"], [1, "input-group-text"], ["type", "text", "placeholder", "name", "aria-label", "name", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "city", "aria-label", "city", "readonly", "", 1, "form-control", 3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Template Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Component Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 18, 9, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appCustomTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, _r0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appCustomTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c3, ctx.tooltipComponent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2)));
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"], _Directives_custom_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CustomTooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".chip-list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row;\r\n  place-content: center;\r\n  padding-top: 16px;\r\n  height: 700px;\r\n}\r\n.template[_ngcontent-%COMP%]{\r\n  background-color: rgb(125, 125, 125);\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn1cclxuLnRlbXBsYXRle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDEyNSwgMTI1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _Directives_custom_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Directives/custom-tooltip.directive */ "I6wT");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "e8lW");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _Directives_custom_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["CustomTooltipDirective"],
        _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"]] }); })();


/***/ }),

/***/ "e8lW":
/*!**********************************************!*\
  !*** ./src/app/tooltip/tooltip.component.ts ***!
  \**********************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Service_data_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/data-flow.service */ "seRl");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class TooltipComponent {
    constructor(dataFlow) {
        this.dataFlow = dataFlow;
    }
    ngOnInit() {
        this.data = this.dataFlow.inputData;
        this.pos = this.dataFlow.position;
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_data_flow_service__WEBPACK_IMPORTED_MODULE_1__["DataFlowService"])); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["app-tooltip"]], decls: 27, vars: 9, consts: [[1, "component"], [1, "header"], [1, "body"], [1, "center-text"], [1, "input-group", "mb-3", "mt-3"], [1, "input-group-text"], ["type", "text", "placeholder", "name", "aria-label", "name", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "city", "aria-label", "city", "readonly", "", 1, "form-control", 3, "value"], [1, "footer-divider"], [1, "footer"], [1, "right-text"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular Component Tooltip Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular Component body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tooltip Contetnt : instanceof TooltipComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "component header foot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Positon Provided : left | right | top | bottom : ", ctx.pos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Input Data Provided : name: ", ctx.data.name, ", city: ", ctx.data.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 5, ctx.data.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, ctx.data.city));
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".component[_ngcontent-%COMP%] {\n  width: 400px;\n  background-color: #7d7d7d;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 10px;\n}\n.component[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  place-content: center;\n  column-gap: 16px;\n  grid-auto-rows: 32px;\n}\n.component[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n.component[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n.component[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.component[_ngcontent-%COMP%]   .footer-divider[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  background-color: white;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFOO0FBS0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFITjtBQU9FO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFMSiIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDEyNSwgMTI1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMTZweDtcclxuICAgIGdyaWQtYXV0by1yb3dzOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJvZHkge1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG5cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvb3RlciB7XHJcbiAgICAucmlnaHQtdGV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "seRl":
/*!**********************************************!*\
  !*** ./src/app/Service/data-flow.service.ts ***!
  \**********************************************/
/*! exports provided: DataFlowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFlowService", function() { return DataFlowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataFlowService {
    constructor() { }
}
DataFlowService.ɵfac = function DataFlowService_Factory(t) { return new (t || DataFlowService)(); };
DataFlowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataFlowService, factory: DataFlowService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map