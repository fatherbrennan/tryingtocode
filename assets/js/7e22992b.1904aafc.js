"use strict";(self.webpackChunktryingtocode=self.webpackChunktryingtocode||[]).push([[147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},i),{},{components:n})):r.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},s="Fetch Abort (Client)",c={unversionedId:"modules/react/fetch-abort-client",id:"modules/react/fetch-abort-client",title:"Fetch Abort (Client)",description:"The AbortController is a JavaScript tool that pairs with the Fetch API to let you stop ongoing network requests. It's useful when users change their minds or when quick updates lead to unnecessary requests. By cancelling a request using the AbortController, you save client processing and time.",source:"@site/docs/modules/react/fetch-abort-client.md",sourceDirName:"modules/react",slug:"/modules/react/fetch-abort-client",permalink:"/tryingtocode/docs/modules/react/fetch-abort-client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/tryingtocode/docs/modules/react/"}},l={},u=[{value:"Code",id:"code",level:2},{value:"Overview",id:"overview",level:3}],i={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetch-abort-client"},"Fetch Abort (Client)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AbortController")," is a JavaScript tool that pairs with the Fetch API to let you stop ongoing network requests. It's useful when users change their minds or when quick updates lead to unnecessary requests. By cancelling a request using the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbortController"),", you save client processing and time."),(0,o.kt)("p",null,"Aborting fetch requests are for client-side benefit and continues to be managed on the server side. However, will not be handled and processed on the client side, and will throw ",(0,o.kt)("inlineCode",{parentName:"p"},"AbortError"),"."),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A React component with a single input element which sends a fetch request on every input event. All requests that are in progress will be aborted in favour of the latest request."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"App.tsx")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useState } from 'react';\n\nimport type { FormEvent } from 'react';\n\n/**\n * Track request info.\n */\ninterface RequestInfoState {\n  /**\n   * Number of requests sent.\n   */\n  count: number;\n\n  /**\n   * Number of requests aborted.\n   */\n  countAborted: number;\n\n  /**\n   * Number of requests handled.\n   */\n  countResponses: number;\n\n  /**\n   * Current abort controller connected to latest fetch request.\n   */\n  current: null | AbortController;\n\n  /**\n   * Latest response data from handled request.\n   */\n  response: any;\n}\n\nfunction App() {\n  const [requestInfo, setRequestInfo] = useState<RequestInfoState>({\n    count: 0,\n    countAborted: 0,\n    countResponses: 0,\n    current: null,\n    response: null,\n  });\n\n  /**\n   * Send a fetch request on each user input.\n   * @param event Input event from user.\n   */\n  const onInput = (event: FormEvent<HTMLInputElement>): void => {\n    // Abort any previous existing requests\n    if (requestInfo.current) {\n      requestInfo.current.abort();\n    }\n\n    // Create new abort controller\n    const controller = new AbortController();\n\n    setRequestInfo((prevState) => ({\n      ...prevState,\n      // Update the latest request\n      current: controller,\n      // Increment count by 1\n      count: prevState.count + 1,\n    }));\n\n    // Send latest request\n    fetch('https://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      signal: controller.signal,\n      body: JSON.stringify({ body: event.currentTarget.value }),\n      headers: { 'Content-type': 'application/json; charset=UTF-8' },\n    })\n      .then((response) => {\n        return response.json();\n      })\n      .then((response) => {\n        // Update response info\n        setRequestInfo((prevState) => ({\n          ...prevState,\n          response,\n          countResponses: prevState.countResponses + 1,\n        }));\n      })\n      .catch((error) => {\n        // Expected error from aborting\n        if (error.name === 'AbortError') {\n          setRequestInfo((prevState) => ({\n            ...prevState,\n            countAborted: prevState.countAborted + 1,\n          }));\n          return;\n        }\n\n        // Log any unexpected fetch errors\n        console.log(error);\n      });\n  };\n\n  return (\n    <>\n      <pre>{JSON.stringify(requestInfo, null, 2)}</pre>\n      <div className='input-div'>\n        <label htmlFor='text'>Input Text</label>\n        <input type='text' name='text' id='text' onInput={onInput} />\n      </div>\n    </>\n  );\n}\n\nexport default App;\n")))}d.isMDXComponent=!0}}]);