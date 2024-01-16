"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9815],{49271:function(e,t,l){var a=l(64836),n=l(18698);t.Z=void 0;var o=a(l(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(a,r,u):a[r]=e[r]}a.default=e,l&&l.set(e,a);return a}(l(67294)),u=a(l(45697)),c=a(l(19845)),i=l(21538),d=a(l(33864)),s=a(l(23399)),_=l(51051),m=a(l(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var p=c.default.bind(m.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,l=e.exampleSrc,a=e.exampleCssSrc,n=e.title,u=e.description,c=e.isExpanded,m=(0,r.useState)(c),f=(0,o.default)(m,2),v=f[0],y=f[1],E=(0,r.useState)(!1),g=(0,o.default)(E,2),N=g[0],O=g[1],x=r.default.useContext(i.ThemeContext),w=void 0!==a,P=function(){O(!N),v&&y(!v)},j=function(){y(!v),N&&O(!N)},T=function(e,t){e.nativeEvent.keyCode!==_.KEY_SPACE&&e.nativeEvent.keyCode!==_.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:p("template",x.className)},r.default.createElement("div",{className:p("header")},n&&r.default.createElement("h2",{className:p("title")},n)),r.default.createElement("div",{className:p("content")},u&&r.default.createElement("div",{className:p("description")},u),t),r.default.createElement("div",{className:p("footer")},l?r.default.createElement("div",{className:p("button-container")},w&&r.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":N}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:p("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:p("chevron")})),r.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":v}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:p("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:p("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:p("css")},a),v&&r.default.createElement("div",{className:p("code")},l))))};y.propTypes=v,y.defaultProps={isExpanded:!1};var E=y;t.Z=E},40996:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(l(67294)),n=i(l(45697)),o=i(l(19845)),r=i(l(50026)),u=i(l(66983)),c=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var _=o.default.bind(u.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:n.default.string},v=function(e){var t=e.children,l=s(e,c),n=a.default.useContext(r.default),u=(0,o.default)(_(["button",n.className]),l.className);return a.default.createElement("button",d({},l,{type:"button",className:u,onBlur:m,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;t.default=v},59278:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(67294)),n=c(l(45697)),o=c(l(19845)),r=c(l(50026)),u=c(l(30866));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(u.default),d={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,l=e.variant,n=e.children,o=a.default.useContext(r.default);return a.default.createElement("div",{className:i("notice",l,o.className)},a.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(l))),a.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:i("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(l),a.default.Children.map(n,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),n=d(l(45697)),o=d(l(93967)),r=d(l(19845)),u=d(l(50026)),c=d(l(42620)),i=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},s.apply(this,arguments)}function _(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var m=r.default.bind(c.default),f={title:n.default.string},p=function(e){var t=e.title,l=_(e,i),n=a.default.useContext(u.default),r=(0,o.default)(m(["placeholder",n.className]),l.className),c=m(["inner"]);return a.default.createElement("div",s({},l,{className:r}),a.default.createElement("div",{className:c},a.default.createElement("p",{className:m("title")},t)))};p.propTypes=f,p.defaultProps={title:""};t.default=p},34261:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var a=r(l(59278)),n=r(l(47306)),o=r(l(40996));function r(e){return e&&e.__esModule?e:{default:e}}},53560:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},33864:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(l(67294)),n=o(l(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}var u=function(e){var t=r({},e);return a.default.createElement(n.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);