"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[1647],{8570:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},o),{},{components:n})):r.createElement(k,l({ref:t},o))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var r=n(7583),i=n(2475),a=(n(79),n(8570)),l=["components"],p={},s=void 0,d={unversionedId:"interfaces/RenderTargetOptions",id:"interfaces/RenderTargetOptions",title:"RenderTargetOptions",description:"vis-engine - v1.3.0 / RenderTargetOptions",source:"@site/api/interfaces/RenderTargetOptions.md",sourceDirName:"interfaces",slug:"/interfaces/RenderTargetOptions",permalink:"/vis-engine/api/interfaces/RenderTargetOptions",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/api/interfaces/RenderTargetOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"RenderBufferOptions",permalink:"/vis-engine/api/interfaces/RenderBufferOptions"},next:{title:"RendererOptions",permalink:"/vis-engine/api/interfaces/RendererOptions"}},o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"attachments",id:"attachments",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"color",id:"color",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"depthTexture",id:"depthtexture",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"stencil",id:"stencil",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-8",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/vis-engine/api/"},"vis-engine - v1.3.0")," / RenderTargetOptions"),(0,a.kt)("h1",{id:"interface-rendertargetoptions"},"Interface: RenderTargetOptions"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#attachments"},"attachments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#color"},"color")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#data"},"data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#depth"},"depth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#depthtexture"},"depthTexture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#height"},"height")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#name"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#stencil"},"stencil")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RenderTargetOptions#width"},"width"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"attachments"},"attachments"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"attachments"),": ",(0,a.kt)("a",{parentName:"p",href:"/vis-engine/api/#attachment"},(0,a.kt)("inlineCode",{parentName:"a"},"Attachment")),"[]"),(0,a.kt)("p",null,"\u5173\u8054\u5bf9\u8c61\uff0c\u6b64\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u7ec4\u5173\u8054\u5bf9\u8c61"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=41"},"src/core/RenderTarget.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"color"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u989c\u8272\u5173\u8054\u5bf9\u8c61\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\n\u53ef\u4ee5\u7406\u89e3\u4e3a\u6574\u4e2a\u5e27\u7f13\u5b58\u5bf9\u8c61\u5c31\u662f\u4e00\u5f20\u7eb9\u7406\uff0c\u8fd9\u4e2a\u7eb9\u7406\u7684\u989c\u8272\u5c31\u4fdd\u5b58\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"color attachment"),"\u4e2d\u3002"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=36"},"src/core/RenderTarget.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"\u975e\u56fe\u7247\u548c canvas \u6570\u636e\uff0c\u4f20\u5165\u7684\u662f\u4e00\u7ec4\u7ed3\u6784\u5316\u6570\u7ec4\uff0c\u8fd9\u91cc\u6211\u4eec\u5148\u4e0d\u53bb\u6307\u5b9a\u6570\u636e\u7c7b\u578b"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=15"},"src/core/RenderTarget.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"depth"},"depth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"depth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u662f\u5426\u5305\u542b\u6df1\u5ea6\u5173\u8054\u5bf9\u8c61"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=46"},"src/core/RenderTarget.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"depthtexture"},"depthTexture"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"depthTexture"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u662f\u5426\u662f\u6df1\u5ea6\u7eb9\u7406\uff0c\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=56"},"src/core/RenderTarget.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"height"},"height"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"height"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RenderTarget")," \u7684\u9ad8\u5ea6"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=30"},"src/core/RenderTarget.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderTarget")," \u7684\u540d\u79f0\uff0c\u65b9\u4fbf\u6211\u4eec\u533a\u5206\u4e0d\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderTarget"),"\u3002"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=20"},"src/core/RenderTarget.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stencil"},"stencil"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"stencil"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u662f\u5426\u5305\u542b\u6a21\u7248\u5173\u8054\u5bf9\u8c61"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=51"},"src/core/RenderTarget.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"width"},"width"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"width"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RenderTarget")," \u7684\u5bbd\u5ea6"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at=1379d00#line=25"},"src/core/RenderTarget.ts:25")))}m.isMDXComponent=!0}}]);