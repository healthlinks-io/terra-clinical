(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1301:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(0)),r=a(n(930)),u=a(n(3)),c=a(n(932)),l=a(n(934));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=u.default.bind(l.default),_=[{id:"Column-0",text:"Column 0",width:100},{id:"Column-1",text:"Column 1"},{id:"Column-2",text:"Column 2"}],w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,u,l=p(a);function a(){return f(this,a),l.apply(this,arguments)}return e=a,u=[{key:"buildRows",value:function(t,e){return new Array(e).fill().map((function(e,n){return{id:"".concat(t,"-").concat(n),ariaLabel:"Row ".concat(t,"-").concat(n),cells:new Array(13).fill(0).map((function(t,e){return"Column-".concat(e)})).map((function(e){return{columnId:e,component:o.default.createElement(c.default,{text:"Row-".concat(n,", ").concat(e),label:"".concat(t,"-").concat(n,"-").concat(e)})}}))}}))}},{key:"buildSection",value:function(t,e){return{id:t,rows:a.buildRows(t,e)}}}],(n=[{key:"render",value:function(){return o.default.createElement("div",{id:"no-overflow-column-data-grid",className:b("content-wrapper")},o.default.createElement(r.default,{id:"no-overflow-column",pinnedColumns:_,sections:[a.buildSection("section_0",30)],defaultColumnWidth:250,fill:!0}))}}])&&d(e.prototype,n),u&&d(e,u),a}(o.default.Component);e.default=w},932:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n(0)),r=l(n(1)),u=l(n(3)),c=l(n(933));function l(t){return t&&t.__esModule?t:{default:t}}var a=u.default.bind(c.default),i={text:r.default.string,label:r.default.string},f=function(t){var e=t.text,n=t.label;return o.default.createElement("div",{className:a("content-cell"),"data-cell-label":n},e)};f.propTypes=i;var d=f;e.default=d},933:function(t,e,n){t.exports={"content-cell":"ContentCellLayout__content-cell___2FDKR"}},934:function(t,e,n){t.exports={"content-wrapper":"ClinicalDataGridCommon-test-module__content-wrapper___1Vc7k","content-overflow":"ClinicalDataGridCommon-test-module__content-overflow___JHS2g"}}}]);