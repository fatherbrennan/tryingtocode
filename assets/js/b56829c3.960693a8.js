"use strict";(self.webpackChunktryingtocode=self.webpackChunktryingtocode||[]).push([[132],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),y=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=y(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=y(t),p=a,u=l["".concat(c,".").concat(p)]||l[p]||m[p]||i;return t?r.createElement(u,o(o({ref:n},d),{},{components:t})):r.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var y=2;y<i;y++)o[y]=t[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>y});var r=t(7462),a=(t(7294),t(3905));const i={},o="sortAscendingByKey()",s={unversionedId:"utilities/functions/sort-ascending-by-key",id:"utilities/functions/sort-ascending-by-key",title:"sortAscendingByKey()",description:"Array.prototype.sort() mutates and returns the reference to the original array, therefore you may want to create a copy of the array.",source:"@site/docs/utilities/functions/sort-ascending-by-key.md",sourceDirName:"utilities/functions",slug:"/utilities/functions/sort-ascending-by-key",permalink:"/tryingtocode/docs/utilities/functions/sort-ascending-by-key",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/tryingtocode/docs/utilities/functions/"},next:{title:"sortAscending()",permalink:"/tryingtocode/docs/utilities/functions/sort-ascending"}},c={},y=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Mutate and sort the original array",id:"mutate-and-sort-the-original-array",level:3},{value:"Create a new array based on a shallow copy",id:"create-a-new-array-based-on-a-shallow-copy",level:3}],d={toc:y},l="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sortascendingbykey"},"sortAscendingByKey()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.sort()")," mutates and returns the reference to the original array, therefore you may want to create a copy of the array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Sorts an array of objects in place by ascending order.\n * - 1-9\n * - A-Z\n * - a-z\n * @param items Array to sort.\n * @param key Key to sort by.\n * @returns Reference to the sorted passed array.\n */\nfunction sortAscendingByKey<T = any>(items: Array<T>, key: keyof T) {\n  return items.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));\n}\n")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"sortAscendingByKey(items, 'key');\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"mutate-and-sort-the-original-array"},"Mutate and sort the original array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MyObject {\n  id: number;\n  name: string;\n}\n\nconst objectArray: MyObject[] = [\n  { id: 4, name: 'c' },\n  { id: 12, name: 'a' },\n  { id: 2, name: '5000' },\n  { id: 1, name: 'A' },\n  { id: 0, name: 'B' },\n  { id: 5000, name: '0' },\n  { id: 9, name: '9' },\n  { id: 5, name: 'b' },\n  { id: 3, name: 'C' },\n];\n\n// Sort the original array by key\nsortAscendingByKey(objectArray, 'id');\n// -> [\n//      { id: 0, name: 'B' },\n//      { id: 1, name: 'A' },\n//      { id: 2, name: '5000' },\n//      { id: 3, name: 'C' },\n//      { id: 4, name: 'c' },\n//      { id: 5, name: 'b' },\n//      { id: 9, name: '9' },\n//      { id: 12, name: 'a' },\n//      { id: 5000, name: '0' }\n//    ]\n")),(0,a.kt)("h3",{id:"create-a-new-array-based-on-a-shallow-copy"},"Create a new array based on a shallow copy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MyObject {\n  id: number;\n  name: string;\n}\n\nconst objectArray: MyObject[] = [\n  { id: 4, name: 'c' },\n  { id: 12, name: 'a' },\n  { id: 2, name: '5000' },\n  { id: 1, name: 'A' },\n  { id: 0, name: 'B' },\n  { id: 5000, name: '0' },\n  { id: 9, name: '9' },\n  { id: 5, name: 'b' },\n  { id: 3, name: 'C' },\n];\n\n// Sort the original array by key\nconst sortedObjectArray = sortAscendingByKey([...objectArray], 'id');\n// -> [\n//      { id: 0, name: 'B' },\n//      { id: 1, name: 'A' },\n//      { id: 2, name: '5000' },\n//      { id: 3, name: 'C' },\n//      { id: 4, name: 'c' },\n//      { id: 5, name: 'b' },\n//      { id: 9, name: '9' },\n//      { id: 12, name: 'a' },\n//      { id: 5000, name: '0' }\n//    ]\n")))}m.isMDXComponent=!0}}]);