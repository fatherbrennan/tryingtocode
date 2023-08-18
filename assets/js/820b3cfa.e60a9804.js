"use strict";(self.webpackChunktryingtocode=self.webpackChunktryingtocode||[]).push([[988],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return t?o.createElement(f,a(a({ref:r},i),{},{components:t})):o.createElement(f,a({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<c;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7331:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const c={},a="JSONPlaceholder",s={unversionedId:"resources/mock-servers/json-placeholder",id:"resources/mock-servers/json-placeholder",title:"JSONPlaceholder",description:"JSONPlaceholder is a simple fake REST API for testing and prototyping.",source:"@site/docs/resources/mock-servers/json-placeholder.md",sourceDirName:"resources/mock-servers",slug:"/resources/mock-servers/json-placeholder",permalink:"/tryingtocode/docs/resources/mock-servers/json-placeholder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DummyJSON",permalink:"/tryingtocode/docs/resources/mock-servers/dummy-json"},next:{title:"Mockaroo",permalink:"/tryingtocode/docs/resources/mock-servers/mockaroo"}},l={},p=[{value:"Base URL",id:"base-url",level:2},{value:"Example",id:"example",level:2}],i={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jsonplaceholder"},"JSONPlaceholder"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," is a simple fake REST API for testing and prototyping."),(0,n.kt)("h2",{id:"base-url"},"Base URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"https://jsonplaceholder.typicode.com/\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"fetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then((response) => response.json())\n  .then((json) => console.log(json));\n")))}d.isMDXComponent=!0}}]);