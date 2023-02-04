"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[7002],{8570:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=o(n),c=a,u=s["".concat(p,".").concat(c)]||s[c]||k[c]||i;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var r=n(7583),a=n(2475),i=(n(79),n(8570)),l=["components"],d={id:"ProgramOptions",title:"Interface: ProgramOptions",sidebar_label:"ProgramOptions",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"api/interfaces/ProgramOptions",id:"api/interfaces/ProgramOptions",title:"Interface: ProgramOptions",description:"Hierarchy",source:"@site/docs/api/interfaces/ProgramOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ProgramOptions",permalink:"/vis-engine/docs/api/interfaces/ProgramOptions",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1675535800,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:0,frontMatter:{id:"ProgramOptions",title:"Interface: ProgramOptions",sidebar_label:"ProgramOptions",sidebar_position:0,custom_edit_url:null}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"blendEquation",id:"blendequation",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"blendFunc",id:"blendfunc",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"cullFace",id:"cullface",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"defines",id:"defines",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"depthFunc",id:"depthfunc",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"depthTest",id:"depthtest",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"depthWrite",id:"depthwrite",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"fragmentShader",id:"fragmentshader",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"frontFace",id:"frontface",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"includes",id:"includes",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"transparent",id:"transparent",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"uniforms",id:"uniforms",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"vertexShader",id:"vertexshader",level:3},{value:"Defined in",id:"defined-in-13",level:4}],k={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},(0,i.kt)("inlineCode",{parentName:"a"},"ProgramRenderState"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ProgramOptions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"blendequation"},"blendEquation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blendEquation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"\u6307\u5b9a\u989c\u8272\u6df7\u5408\u65b9\u7a0b\u5f0f\n\u53ef\u80fd\u7684\u503c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation"},"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate"},"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"modeAlpha?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"modeRGB")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#blendequation"},"blendEquation")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=130"},"src/core/Program.ts:130")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blendfunc"},"blendFunc"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blendFunc"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"\u6307\u5b9a\u989c\u8272\u6df7\u5408\u7b97\u6cd5\n\u53ef\u80fd\u7684\u503c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/blendFunc"},"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/blendFunc")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate"},"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dst")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dstAlpha?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"src")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"srcAlpha?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#blendfunc"},"blendFunc")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=119"},"src/core/Program.ts:119")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cullface"},"cullFace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cullFace"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u6307\u5b9a\u6b63\u9762\u6216\u80cc\u9762\u591a\u8fb9\u5f62\u662f\u5426\u53ef\u4ee5\u5254\u9664\n\u53ef\u80fd\u7684\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"gl.FRONT"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"gl.FRONT_AND_BACK")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"gl.BACK")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#cullface"},"cullFace")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=83"},"src/core/Program.ts:83")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defines"},"defines"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"defines"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"\u6307\u5b9a\u7740\u8272\u7684\u5b8f\u5b9a\u4e49"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=165"},"src/core/Program.ts:165")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthfunc"},"depthFunc"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"depthFunc"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u6307\u5b9a\u6df1\u5ea6\u68c0\u6d4b\u7684\u53c2\u6570\uff0c\u5373\u4ec0\u4e48\u60c5\u51b5\u7b97\u5931\u8d25\u3001\u4ec0\u4e48\u60c5\u51b5\u7b97\u4f5c\u901a\u8fc7\uff0c\u9ed8\u8ba4\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"gl.LESS"),"\u3002\n\u53ef\u80fd\u7684\u503c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gl.NEVER \uff08\u603b\u4e0d\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.LESS\uff08\u5982\u679c\u65b0\u503c\u5c0f\u4e8e\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u5219\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.EQUAL\uff08\u5982\u679c\u65b0\u503c\u7b49\u4e8e\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u5219\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.LEQUAL\uff08\u5982\u679c\u65b0\u503c\u5c0f\u4e8e\u7b49\u4e8e\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u5219\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.GREATER\uff08\u5982\u679c\u65b0\u503c\u5927\u4e8e\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u5219\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.NOTEQUAL\uff08\u5982\u679c\u65b0\u503c\u4e0d\u7b49\u4e8e\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u5219\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.GEQUAL\uff08\u5982\u679c\u65b0\u503c\u5927\u4e8e\u7b49\u4e8e\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u5219\u901a\u8fc7\uff09"),(0,i.kt)("li",{parentName:"ul"},"gl.ALWAYS\uff08\u603b\u901a\u8fc7\uff09")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#depthfunc"},"depthFunc")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=113"},"src/core/Program.ts:113")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthtest"},"depthTest"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"depthTest"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\u662f\u5426\u542f\u7528\u6df1\u5ea6\u6d4b\u8bd5\uff0c\u9ed8\u8ba4\u542f\u7528"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#depthtest"},"depthTest")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=94"},"src/core/Program.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthwrite"},"depthWrite"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"depthWrite"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\u662f\u5426\u5f00\u542f\u6df1\u5ea6\u503c\u5199\u5165"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#depthwrite"},"depthWrite")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=99"},"src/core/Program.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fragmentshader"},"fragmentShader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fragmentShader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"FragmentShader")),(0,i.kt)("p",null,"\u7247\u6bb5\u7740\u8272\u5668"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=150"},"src/core/Program.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"frontface"},"frontFace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"frontFace"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u6307\u5b9a\u56fe\u5f62\u9876\u70b9\u4ee5\u987a\u65f6\u9488\u662f\u6b63\u9762\u8fd8\u662f\u9006\u65f6\u9488\u65b9\u5411\u662f\u6b63\u9762\uff1a\n\u53ef\u80fd\u7684\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"gl.CW")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"gl.CCW")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState"},"ProgramRenderState"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ProgramRenderState#frontface"},"frontFace")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=89"},"src/core/Program.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"id")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=140"},"src/core/Program.ts:140")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"includes"},"includes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"includes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"\u7740\u8272\u5668\u6a21\u5757\uff0c\u4f1a\u5728\u7740\u8272\u5668\u4e2d\u9047\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"#include <xxx>")," \u4f1a\u81ea\u52a8\u66ff\u6362\u6b64\u914d\u7f6e\u9879\u5bf9\u5e94\u7684\u7740\u8272\u5668\u7247\u6bb5\u3002"),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=170"},"src/core/Program.ts:170")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transparent"},"transparent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"transparent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\u914d\u7f6e\u662f\u5426\u662f\u900f\u660e\u6e32\u67d3"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=160"},"src/core/Program.ts:160")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uniforms"},"uniforms"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"uniforms"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"uniform"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=155"},"src/core/Program.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vertexshader"},"vertexShader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"vertexShader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"VertexShader")),(0,i.kt)("p",null,"\u9876\u70b9\u7740\u8272\u5668"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at=1379d00#line=145"},"src/core/Program.ts:145")))}c.isMDXComponent=!0}}]);