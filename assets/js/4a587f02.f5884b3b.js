"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[4614],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,k=u["".concat(o,".").concat(f)]||u[f]||m[f]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7583),i=n(2475),r=(n(79),n(8570)),l=["components"],s={id:"Raf",title:"Class: Raf",sidebar_label:"Raf",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"api/classes/Raf",id:"api/classes/Raf",title:"Class: Raf",description:"\u4f18\u5316\u7684 raf \u7ba1\u7406",source:"@site/docs/api/classes/Raf.md",sourceDirName:"api/classes",slug:"/api/classes/Raf",permalink:"/vis-engine/docs/api/classes/Raf",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1675273812,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:0,frontMatter:{id:"Raf",title:"Class: Raf",sidebar_label:"Raf",sidebar_position:0,custom_edit_url:null}},d={},u=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"options",id:"options",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"animating",id:"animating",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"elapsedTime",id:"elapsedtime",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"visible",id:"visible",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"reset",id:"reset",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"start",id:"start",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"stop",id:"stop",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"tick",id:"tick",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-8",level:4}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f18\u5316\u7684 raf \u7ba1\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const raf = new Raf();\n")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Raf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"cb"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cb")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/interfaces/RafOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"RafOptions")),">")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=33"},"animation/Raf.ts:33")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"options"},"options"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/RafOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"RafOptions")),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=24"},"animation/Raf.ts:24")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"animating"},"animating"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"animating"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"raf")," \u72b6\u6001"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=63"},"animation/Raf.ts:63")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"elapsedtime"},"elapsedTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"elapsedTime"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u83b7\u53d6\u603b\u65f6\u957f"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=81"},"animation/Raf.ts:81")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"visible"},"visible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"visible"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u662f\u5426\u53ef\u89c1"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=56"},"animation/Raf.ts:56")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"\u91cd\u7f6e\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"raf")," \u72b6\u6001"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=70"},"animation/Raf.ts:70")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"start"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"raf")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=88"},"animation/Raf.ts:88")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"\u505c\u6b62 ",(0,r.kt)("inlineCode",{parentName:"p"},"raf")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=108"},"animation/Raf.ts:108")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tick"},"tick"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"tick"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at=48bd74f#line=120"},"animation/Raf.ts:120")))}f.isMDXComponent=!0}}]);