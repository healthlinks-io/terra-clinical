"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[6283],{94394:function(e,t,i){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var l=d(i(67294)),a=d(i(45697)),r=d(i(94184)),o=d(i(47166)),u=d(i(50026)),c=d(i(35950)),s=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},_.apply(this,arguments)}function f(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var y=o.default.bind(c.default),p={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=p;var b={text:a.default.string,textStyle:a.default.oneOf(Object.values(p)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"])},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},O=function(e){var t,i=e.text,n=e.textStyle,a=e.isTruncated,o=e.isDisabled,c=e.icon,d=e.iconAlignment,b=m(e,s),v=l.default.useContext(u.default),O=(0,r.default)(y("item-display",{"is-disabled":o},f({},"icon-".concat(d),c),v.className),b.className),g=y(["text",{"is-truncated":a},f({},"".concat(n),n===p.SECONDARY),f({},"".concat(n),n===p.ATTENTION),f({},"".concat(n),n===p.STRONG),{"strike-through":n===p.STRIKETHROUGH}]);return c&&(t=l.default.createElement("div",{className:y("icon")},c)),l.default.createElement("div",_({},b,{className:O,"aria-disabled":o}),t,l.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:g},i))};O.propTypes=b,O.defaultProps=v;var g=O;t.default=g},46283:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(67294)),l=r(i(19983)),a=r(i(94394));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.default.createElement("div",null,n.default.createElement(a.default,{text:"test text",id:"test-display-text",isDisabled:!0}),n.default.createElement(a.default,{text:"Test Text",icon:n.default.createElement(l.default,null),id:"test-display-icon",isDisabled:!0}))};t.default=o},35950:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}}}]);