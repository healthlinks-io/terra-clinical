"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[640],{54384:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(11504)),r=f(n(3268)),o=f(n(82084)),i=f(n(74824)),u=f(n(99208)),d=f(n(99640)),c=f(n(62720)),s=["children","title","startContent","endContent","text","level","id","isSubheader","onClick"];function f(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=i.default.bind(c.default),b={id:r.default.string,children:r.default.element,startContent:r.default.element,level:r.default.oneOf([1,2,3,4,5,6]),text:r.default.string,title:r.default.string,endContent:r.default.element,isSubheader:r.default.bool,onClick:r.default.func},v=function(e){var t,n=e.children,l=e.title,r=e.startContent,i=e.endContent,c=e.text,f=e.level,m=e.id,b=e.isSubheader,v=e.onClick,y=p(e,s),g=(0,a.useContext)(d.default);l&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),f||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.");var C=l||c;if(C){var x=f?"h".concat(f):"h1";t=a.default.createElement("div",{className:h("title-container")},a.default.createElement(x,{id:m,className:h("title")},v?a.default.createElement(u.default,{onClick:v,text:C}):C))}var O=a.default.Children.map(n,(function(e){return a.default.cloneElement(e,{className:(0,o.default)([h("flex-collapse"),e.props.className])})})),w=(0,o.default)([h(["flex-header",{subheader:b},g.className]),y.className]);return a.default.createElement("header",_({},y,{className:w}),r&&a.default.createElement("div",{className:h("flex-end")},r),a.default.createElement("div",{className:h("flex-fill")},t),O,i&&a.default.createElement("div",{className:h("flex-end")},i))};v.propTypes=b,v.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};t.default=v},80640:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(11504)),a=i(n(74824)),r=i(n(54384)),o=i(n(60700));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),d=l.default.createElement("div",{id:"headerTest--startContent",className:u("start-content")}),c=l.default.createElement("div",{id:"headerTest--endContent",className:u("end-content")});t.default=function(){return l.default.createElement(r.default,{id:"Header",startContent:d,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien. Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat. Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida. Nulla accumsan non nisl sed elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",endContent:c})}},62720:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}},60700:function(e,t,n){n.r(t),t.default={"start-content":"ClinicalHeaderCommontest-module__start-content___ZIwge","end-content":"ClinicalHeaderCommontest-module__end-content___vGSIw",content:"ClinicalHeaderCommontest-module__content___Ol7lL","placeholder-wrapper":"ClinicalHeaderCommontest-module__placeholder-wrapper___zFdaZ"}}}]);