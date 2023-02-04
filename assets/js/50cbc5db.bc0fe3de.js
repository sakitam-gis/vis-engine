"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[8807],{8570:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>N});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(N,l(l({ref:t},o),{},{components:n})):a.createElement(N,l({ref:t},o))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(7583),r=n(2475),i=(n(79),n(8570)),l=["components"],d={id:"Renderer",title:"Class: Renderer",sidebar_label:"Renderer",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/classes/Renderer",id:"api/classes/Renderer",title:"Class: Renderer",description:"\u6e32\u67d3\u5668",source:"@site/docs/api/classes/Renderer.md",sourceDirName:"api/classes",slug:"/api/classes/Renderer",permalink:"/vis-engine/docs/api/classes/Renderer",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1675535800,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:0,frontMatter:{id:"Renderer",title:"Class: Renderer",sidebar_label:"Renderer",sidebar_position:0,custom_edit_url:null}},o={},m=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"bindVertexArray",id:"bindvertexarray",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"createVertexArray",id:"createvertexarray",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"deleteVertexArray",id:"deletevertexarray",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"drawArraysInstanced",id:"drawarraysinstanced",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"drawElementsInstanced",id:"drawelementsinstanced",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"vertexAttribDivisor",id:"vertexattribdivisor",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Accessors",id:"accessors",level:2},{value:"canvas",id:"canvas",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"gl",id:"gl",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"isWebGL",id:"iswebgl",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"isWebGL2",id:"iswebgl2",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"premultipliedAlpha",id:"premultipliedalpha",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"size",id:"size",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"state",id:"state",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"Methods",id:"methods",level:2},{value:"getRenderList",id:"getrenderlist",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"render",id:"render",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"resetState",id:"resetstate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"setSize",id:"setsize",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"setViewport",id:"setviewport",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-20",level:4}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6e32\u67d3\u5668"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Renderer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"gl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"gl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"WebGLRenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"WebGL2RenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLCanvasElement"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/interfaces/RendererOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"RendererOptions")),">")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=158"},"src/core/Renderer.ts:158")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bindvertexarray"},"bindVertexArray"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bindVertexArray"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"arrayObject"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObjectOES"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"array"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObject"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=147"},"src/core/Renderer.ts:147")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createvertexarray"},"createVertexArray"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"createVertexArray"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObjectOES")," ","|"," () => ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObject")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=144"},"src/core/Renderer.ts:144")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deletevertexarray"},"deleteVertexArray"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"deleteVertexArray"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"arrayObject"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObjectOES"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"vertexArray"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObject"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=150"},"src/core/Renderer.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"drawarraysinstanced"},"drawArraysInstanced"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"drawArraysInstanced"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"first"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primcount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"first"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=138"},"src/core/Renderer.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"drawelementsinstanced"},"drawElementsInstanced"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"drawElementsInstanced"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primcount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=141"},"src/core/Renderer.ts:141")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=156"},"src/core/Renderer.ts:156")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vertexattribdivisor"},"vertexAttribDivisor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"vertexAttribDivisor"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"divisor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"divisor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=135"},"src/core/Renderer.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=154"},"src/core/Renderer.ts:154")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"canvas"},"canvas"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"canvas"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"OffscreenCanvas")),(0,i.kt)("p",null,"\u83b7\u53d6 canvas \u5b9e\u4f8b"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"OffscreenCanvas")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=282"},"src/core/Renderer.ts:282")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gl"},"gl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"gl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("p",null,"\u83b7\u53d6 gl \u5b9e\u4f8b"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=275"},"src/core/Renderer.ts:275")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iswebgl"},"isWebGL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"isWebGL"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\u5224\u65ad\u662f\u5426\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl1")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=289"},"src/core/Renderer.ts:289")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iswebgl2"},"isWebGL2"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"isWebGL2"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\u5224\u65ad\u662f\u5426\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl2")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=296"},"src/core/Renderer.ts:296")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"premultipliedalpha"},"premultipliedAlpha"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"premultipliedAlpha"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"WithUndef"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"premultipliedAlpha")," \u914d\u7f6e"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WithUndef"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=320"},"src/core/Renderer.ts:320")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"size"},"size"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"size"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"\u83b7\u53d6 canvas \u753b\u5e03\u5927\u5c0f"),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=303"},"src/core/Renderer.ts:303")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"state"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/State"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))),(0,i.kt)("p",null,"\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"renderState")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/State"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=313"},"src/core/Renderer.ts:313")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getrenderlist"},"getRenderList"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getRenderList"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("p",null,"\u83b7\u53d6\u6e32\u67d3\u5217\u8868\uff08\u6392\u5e8f\u5148\u4e0d\u5b9e\u73b0\uff09"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=370"},"src/core/Renderer.ts:370")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"render"},"render"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"render"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u6e32\u67d3\u51fd\u6570\uff0c\u4e00\u822c\u4f1a\u5728\u6bcf\u4e00\u5e27\u4e2d\u8c03\u7528\u6b64\u65b9\u6cd5"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RenderParams"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=391"},"src/core/Renderer.ts:391")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resetstate"},"resetState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resetState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"force?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u91cd\u7f6e\u5185\u90e8 ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL")," \u72b6\u6001\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e00\u822c\u5355\u72ec\u4f7f\u7528\u65f6\u6211\u4eec\u4e0d\u9700\u8981\u53bb\u91cd\u7f6e\u72b6\u6001\uff0c\u4f46\u662f\u5728\u8de8\u591a\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL")," \u5e93\u5171\u4eab\u5355\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL")," \u4e0a\u4e0b\u6587\u65f6\u6211\u4eec\u9700\u8981\u5173\u6ce8\u6b64\u65b9\u6cd5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\n\u6211\u4eec\u4f1a\u91cd\u7f6e\u6240\u6709\u7684\u72b6\u6001\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u786e\u8ba4\u591a\u4e2a\u5171\u4eab\u5e93\u4f7f\u7528\u7684\u72b6\u6001\u5b8c\u5168\u76f8\u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u4ec5\u91cd\u7f6e\u90e8\u5206\u72b6\u6001\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002\u4f46\u662f\u6709\u53ef\u80fd\u4f1a\u51fa\u73b0\u65e0\u6cd5\u9884\u6599\u7684\u60c5\u51b5\n\u8bf7\u5728\u4f60\u786e\u8ba4\u72b6\u6001\u5b8c\u5168\u5339\u914d\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"force = false")," \u91cd\u7f6e\u90e8\u5206\u72b6\u6001\u3002"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"force")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f3a\u5236\u91cd\u7f6e\u6240\u7528\u72b6\u6001\uff0c\u9ed8\u8ba4\u662f ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=441"},"src/core/Renderer.ts:441")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setsize"},"setSize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setSize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u753b\u5e03\u5bbd\u9ad8"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5bbd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9ad8")))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=329"},"src/core/Renderer.ts:329")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setviewport"},"setViewport"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setViewport"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"x?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"viewport")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0"))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=1379d00#line=344"},"src/core/Renderer.ts:344")))}u.isMDXComponent=!0}}]);