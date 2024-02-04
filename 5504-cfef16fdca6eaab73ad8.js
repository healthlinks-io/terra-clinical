"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5504],{54384:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(11504)),r=s(n(3268)),o=s(n(82084)),i=s(n(74824)),d=s(n(99208)),u=s(n(99640)),f=s(n(62720)),c=["children","title","startContent","endContent","text","level","id","isSubheader","onClick"];function s(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=i.default.bind(f.default),b={id:r.default.string,children:r.default.element,startContent:r.default.element,level:r.default.oneOf([1,2,3,4,5,6]),text:r.default.string,title:r.default.string,endContent:r.default.element,isSubheader:r.default.bool,onClick:r.default.func},y=function(e){var t,n=e.children,l=e.title,r=e.startContent,i=e.endContent,f=e.text,s=e.level,_=e.id,b=e.isSubheader,y=e.onClick,v=m(e,c),x=(0,a.useContext)(u.default);l&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),s||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.");var C=l||f;if(C){var O=s?"h".concat(s):"h1";t=a.default.createElement("div",{className:h("title-container")},a.default.createElement(O,{id:_,className:h("title")},y?a.default.createElement(d.default,{onClick:y,text:C}):C))}var g=a.default.Children.map(n,(function(e){return a.default.cloneElement(e,{className:(0,o.default)([h("flex-collapse"),e.props.className])})})),w=(0,o.default)([h(["flex-header",{subheader:b},x.className]),v.className]);return a.default.createElement("header",p({},v,{className:w}),r&&a.default.createElement("div",{className:h("flex-end")},r),a.default.createElement("div",{className:h("flex-fill")},t),g,i&&a.default.createElement("div",{className:h("flex-end")},i))};y.propTypes=b,y.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};t.default=y},95504:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(11504)),a=i(n(74824)),r=i(n(54384)),o=i(n(60700));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),u=l.default.createElement("div",{id:"headerTest--content",className:d("content")});t.default=function(){return l.default.createElement(r.default,{text:"Header with content on the right",endContent:u,level:1})}},62720:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}},60700:function(e,t,n){n.r(t),t.default={"start-content":"ClinicalHeaderCommontest-module__start-content___ZIwge","end-content":"ClinicalHeaderCommontest-module__end-content___vGSIw",content:"ClinicalHeaderCommontest-module__content___Ol7lL","placeholder-wrapper":"ClinicalHeaderCommontest-module__placeholder-wrapper___zFdaZ"}}}]);