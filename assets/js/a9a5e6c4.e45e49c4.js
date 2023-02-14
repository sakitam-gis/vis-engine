"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[3151],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(79);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||f[c]||r;return n?i.createElement(k,a(a({ref:t},d),{},{components:n})):i.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:l,a[1]=p;for(var o=2;o<r;o++)a[o]=n[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var i=n(7583),l=n(2475),r=(n(79),n(8570)),a=["components"],p={id:"utils.GlOptions",title:"Interface: GlOptions",sidebar_label:"GlOptions",custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/utils.GlOptions",id:"api/interfaces/utils.GlOptions",title:"Interface: GlOptions",description:"utils.GlOptions",source:"@site/docs/api/interfaces/utils.GlOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/utils.GlOptions",permalink:"/vis-engine/docs/api/interfaces/utils.GlOptions",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1676382941,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"utils.GlOptions",title:"Interface: GlOptions",sidebar_label:"GlOptions",custom_edit_url:null}},d={},u=[{value:"Properties",id:"properties",level:2},{value:"alpha",id:"alpha",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"antialias",id:"antialias",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"desynchronized",id:"desynchronized",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"failIfMajorPerformanceCaveat",id:"failifmajorperformancecaveat",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"powerPreference",id:"powerpreference",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"premultipliedAlpha",id:"premultipliedalpha",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"preserveDrawingBuffer",id:"preservedrawingbuffer",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"stencil",id:"stencil",level:3},{value:"Defined in",id:"defined-in-8",level:4}],f={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/namespaces/utils"},"utils"),".GlOptions"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"alpha"},"alpha"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"alpha"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u6307\u5b9a\u753b\u5e03\u662f\u5426\u5305\u542balpha\u7f13\u51b2\u533a"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L43"},"src/utils/gl.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"antialias"},"antialias"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"antialias"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6297\u952f\u9f7f\u3002"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L47"},"src/utils/gl.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"depth"},"depth"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"depth"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6df1\u5ea6\u68c0\u6d4b\u3002"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L51"},"src/utils/gl.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"desynchronized"},"desynchronized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"desynchronized"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u8868\u793a\u7ed8\u56fe\u7f13\u51b2\u533a\u7684\u6df1\u5ea6\u7f13\u51b2\u533a\u81f3\u5c11\u4e3a16\u4f4d\u3002"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L55"},"src/utils/gl.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"failifmajorperformancecaveat"},"failIfMajorPerformanceCaveat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"failIfMajorPerformanceCaveat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u6307\u5b9a\u5982\u679c\u7cfb\u7edf\u6027\u80fd\u8f83\u4f4e\uff0c\u662f\u5426\u521b\u5efa\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L63"},"src/utils/gl.ts:63")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"powerpreference"},"powerPreference"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"powerPreference"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLPowerPreference")),(0,r.kt)("p",null,"\u6307\u5b9aGPU\u7684\u6027\u80fd\u914d\u7f6e\u3002"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L75"},"src/utils/gl.ts:75")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"premultipliedalpha"},"premultipliedAlpha"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"premultipliedAlpha"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u9884\u4e58alpha\u3002"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L67"},"src/utils/gl.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preservedrawingbuffer"},"preserveDrawingBuffer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"preserveDrawingBuffer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u662f\u5426\u5f00\u542f\u7ed8\u5236\u7f13\u51b2\u533a\u3002"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L71"},"src/utils/gl.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stencil"},"stencil"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"stencil"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6a21\u677f\u7f13\u51b2\u533a\u3002"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/utils/gl.ts#L59"},"src/utils/gl.ts:59")))}c.isMDXComponent=!0}}]);