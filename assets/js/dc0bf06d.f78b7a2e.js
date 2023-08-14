"use strict";(self.webpackChunktryingtocode=self.webpackChunktryingtocode||[]).push([[678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=l(r),d=a,g=y["".concat(c,".").concat(d)]||y[d]||p[d]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[y]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},s="sortAscending()",i={unversionedId:"utilities/functions/sort-ascending",id:"utilities/functions/sort-ascending",title:"sortAscending()",description:"Array.prototype.sort() mutates and returns the reference to the original array, therefore you may want to create a copy of the array.",source:"@site/docs/utilities/functions/sort-ascending.md",sourceDirName:"utilities/functions",slug:"/utilities/functions/sort-ascending",permalink:"/tryingtocode/docs/utilities/functions/sort-ascending",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sortAscendingByKey()",permalink:"/tryingtocode/docs/utilities/functions/sort-ascending-by-key"},next:{title:"sortDescendingByKey()",permalink:"/tryingtocode/docs/utilities/functions/sort-descending-by-key"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Mutate and sort the original array",id:"mutate-and-sort-the-original-array",level:3},{value:"Create a new array based on a shallow copy",id:"create-a-new-array-based-on-a-shallow-copy",level:3}],u={toc:l},y="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sortascending"},"sortAscending()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.sort()")," mutates and returns the reference to the original array, therefore you may want to create a copy of the array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Sorts an array in place by ascending order.\n * - 1-9\n * - A-Z\n * - a-z\n * @param items Array to sort.\n * @param key Key to sort by.\n * @returns Reference to the sorted passed array.\n */\nfunction sortAscending<T = any>(items: Array<T>) {\n  return items.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));\n}\n")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"sortAscending(items);\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"mutate-and-sort-the-original-array"},"Mutate and sort the original array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const stringArray: string[] = ['c', 'a', '5000', 'A', 'B', '0', '9', 'b', 'C'];\nconst numberArray: number[] = [4, 12, 2, 1, 0, 5000, 9, 5, 3];\n\n// Sort the original arrays\n\nsortAscending(stringArray);\n// -> ['0', '5000', '9', 'A', 'B', 'C', 'a', 'b', 'c']\n\nsortAscending(numberArray);\n// -> [0, 1, 2, 3, 4, 5, 9, 12, 5000]\n")),(0,a.kt)("h3",{id:"create-a-new-array-based-on-a-shallow-copy"},"Create a new array based on a shallow copy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const stringArray: string[] = ['c', 'a', '5000', 'A', 'B', '0', '9', 'b', 'C'];\nconst numberArray: number[] = [4, 12, 2, 1, 0, 5000, 9, 5, 3];\n\n// Create a new sorted arrays\n\nconst sortedStringArray = sortAscending([...stringArray]);\n// -> ['0', '5000', '9', 'A', 'B', 'C', 'a', 'b', 'c']\n\nconst sortedNumberArray = sortAscending([...numberArray]);\n// -> [0, 1, 2, 3, 4, 5, 9, 12, 5000]\n")))}p.isMDXComponent=!0}}]);