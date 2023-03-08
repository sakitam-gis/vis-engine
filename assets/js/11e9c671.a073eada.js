"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[8189],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7583),r=n(2475),i=(n(79),n(8570)),l=["components"],s={},o=void 0,p={unversionedId:"classes/Clock",id:"classes/Clock",title:"Clock",description:"vis-engine - v1.4.1 / Clock",source:"@site/api/classes/Clock.md",sourceDirName:"classes",slug:"/classes/Clock",permalink:"/vis-engine/api/classes/Clock",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/api/classes/Clock.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Camera",permalink:"/vis-engine/api/classes/Camera"},next:{title:"Color",permalink:"/vis-engine/api/classes/Color"}},d={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"running",id:"running",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods-1",level:2},{value:"getDelta",id:"getdelta",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getElapsedTime",id:"getelapsedtime",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"reset",id:"reset",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"start",id:"start",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"stop",id:"stop",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/api/"},"vis-engine - v1.4.1")," / Clock"),(0,i.kt)("h1",{id:"class-clock"},"Class: Clock"),(0,i.kt)("p",null,"\u65f6\u949f\u5bf9\u8c61\uff0c\u9ed8\u8ba4\u5185\u90e8\u4f1a\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance/now"},"performance.now")," \u5426\u5219\u4f1a\n\u56de\u9000\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Date.now()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const clock = new Clock();\n")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#constructor"},"constructor"))),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#running"},"running"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#getdelta"},"getDelta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#getelapsedtime"},"getElapsedTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#reset"},"reset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#start"},"start")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/vis-engine/api/classes/Clock#stop"},"stop"))),(0,i.kt)("h2",{id:"constructors-1"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Clock"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"running?"),")"),(0,i.kt)("p",null,"Constructor"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"running")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u65f6\u949f\u72b6\u6001")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L35"},"src/animation/Clock.ts:35")),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"running"},"running"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"running"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L29"},"src/animation/Clock.ts:29")),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"getdelta"},"getDelta"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getDelta"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u8ba1\u7b97\u65f6\u949f\u603b\u542f\u52a8\u65f6\u95f4\uff0c\u5e76\u5c06\u5f53\u524d\u65f6\u95f4\u8bbe\u7f6e\u8d4b\u503c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"lastTime")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L77"},"src/animation/Clock.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getelapsedtime"},"getElapsedTime"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getElapsedTime"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u83b7\u53d6\u81ea\u65f6\u949f\u542f\u52a8\u4ee5\u6765\u7ecf\u8fc7\u7684\u79d2\u6570"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L69"},"src/animation/Clock.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u91cd\u7f6e\u65f6\u949f\u72b6\u6001"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L61"},"src/animation/Clock.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"start"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u542f\u52a8\u65f6\u949f"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L42"},"src/animation/Clock.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u505c\u6b62\u65f6\u949f"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/2b0ddaa/src/animation/Clock.ts#L52"},"src/animation/Clock.ts:52")))}k.isMDXComponent=!0}}]);