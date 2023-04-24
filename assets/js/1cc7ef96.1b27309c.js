"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[7777],{8570:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||k[c]||i;return n?r.createElement(m,l(l({ref:t},o),{},{components:n})):r.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var r=n(7583),a=n(2475),i=(n(79),n(8570)),l=["components"],d={id:"RenderBuffer",title:"Class: RenderBuffer",sidebar_label:"RenderBuffer",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/classes/RenderBuffer",id:"api/classes/RenderBuffer",title:"Class: RenderBuffer",description:"\u6e32\u67d3\u7f13\u51b2\u533a\u5bf9\u8c61\u3002",source:"@site/docs/api/classes/RenderBuffer.md",sourceDirName:"api/classes",slug:"/api/classes/RenderBuffer",permalink:"/vis-engine/docs/api/classes/RenderBuffer",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1682303720,formattedLastUpdatedAt:"Apr 24, 2023",sidebarPosition:0,frontMatter:{id:"RenderBuffer",title:"Class: RenderBuffer",sidebar_label:"RenderBuffer",sidebar_position:0,custom_edit_url:null}},o={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"byteLength",id:"bytelength",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"options",id:"options",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"renderer",id:"renderer",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"userData",id:"userdata",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Accessors",id:"accessors",level:2},{value:"gl",id:"gl",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"handle",id:"handle",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"rendererState",id:"rendererstate",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Methods",id:"methods",level:2},{value:"bind",id:"bind",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"createHandle",id:"createhandle",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"delete",id:"delete",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"deleteHandle",id:"deletehandle",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"removeStats",id:"removestats",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"resize",id:"resize",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"restoreHandle",id:"restorehandle",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"swapHandle",id:"swaphandle",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"unbind",id:"unbind",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-22",level:4}],k={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6e32\u67d3\u7f13\u51b2\u533a\u5bf9\u8c61\u3002\n\u7531\u4e8e\u6e32\u67d3\u7f13\u51b2\u533a\u5bf9\u8c61\u662f\u53ea\u5199\u7684\uff0c\u56e0\u6b64\u5b83\u4eec\u901a\u5e38\u7528\u4f5c\u6df1\u5ea6\u548c\u6a21\u677f\u5173\u8054\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5b9e\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const renderBuffer = new RenderBuffer(renderer, {\n  format: renderer.gl.DEPTH_COMPONENT16,\n  width: 1920,\n  height: 1080,\n});\n\nrenderBuffer.bind();\nrenderBuffer.unbind();\n")),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},(0,i.kt)("inlineCode",{parentName:"a"},"Resource")),"<",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/RenderBufferOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"RenderBufferOptions")),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"RenderBuffer"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new RenderBuffer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"renderer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/classes/Renderer"},(0,i.kt)("inlineCode",{parentName:"a"},"Renderer")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/interfaces/RenderBufferOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"RenderBufferOptions")),">")))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L50"},"src/core/RenderBuffer.ts:50")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bytelength"},"byteLength"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"byteLength"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#bytelength"},"byteLength")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L28"},"src/core/Resource.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u6e32\u67d3\u7f13\u51b2\u533a\u9ad8\u5ea6"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L46"},"src/core/RenderBuffer.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#id"},"id")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L21"},"src/core/Resource.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WithUndef"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#name"},"name")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L23"},"src/core/Resource.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/RenderBufferOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"RenderBufferOptions")),">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#options"},"options")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L30"},"src/core/Resource.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderer"},"renderer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderer"),": ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Renderer"},(0,i.kt)("inlineCode",{parentName:"a"},"Renderer"))),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#renderer"},"renderer")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Base.ts#L7"},"src/core/Base.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userdata"},"userData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#userdata"},"userData")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L25"},"src/core/Resource.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u6e32\u67d3\u7f13\u51b2\u533a\u5bbd\u5ea6"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L41"},"src/core/RenderBuffer.ts:41")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"gl"},"gl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"gl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("p",null,"\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl")," \u5b9e\u4f8b"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"Resource.gl"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Base.ts#L16"},"src/core/Base.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handle"},"handle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"handle"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,"Resource.handle"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L47"},"src/core/Resource.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rendererstate"},"rendererState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"rendererState"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/State"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))),(0,i.kt)("p",null,"\u83b7\u53d6\u6e32\u67d3\u72b6\u6001"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/State"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,"Resource.rendererState"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Base.ts#L23"},"src/core/Base.ts:23")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"bind"},"bind"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"bind"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u7ed1\u5b9a\u6e32\u67d3\u7f13\u51b2"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#bind"},"bind")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L91"},"src/core/RenderBuffer.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createhandle"},"createHandle"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createHandle"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderbuffer")),(0,i.kt)("p",null,"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"RBO")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderbuffer")),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#createhandle"},"createHandle")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L116"},"src/core/RenderBuffer.ts:116")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"delete"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/RenderBuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"RenderBuffer"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,i.kt)("inlineCode",{parentName:"td"},"deleteChildren")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/RenderBuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"RenderBuffer"))),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#delete"},"delete")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L74"},"src/core/Resource.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deletehandle"},"deleteHandle"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deleteHandle"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u79fb\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"RBO")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#deletehandle"},"deleteHandle")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L123"},"src/core/RenderBuffer.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u9500\u6bc1\u6b64\u6e32\u67d3\u5bf9\u8c61"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#destroy"},"destroy")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L108"},"src/core/RenderBuffer.ts:108")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removestats"},"removeStats"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeStats"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#removestats"},"removeStats")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L103"},"src/core/RenderBuffer.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u6b64\u6e32\u67d3\u5bf9\u8c61\u7684\u7684\u5927\u5c0f"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L79"},"src/core/RenderBuffer.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"restorehandle"},"restoreHandle"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"restoreHandle"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u6062\u590d\u4e3a\u539f\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#restorehandle"},"restoreHandle")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L63"},"src/core/Resource.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"swaphandle"},"swapHandle"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"swapHandle"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u4ea4\u6362\u4e3a\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),"\uff08\u4e00\u822c\u6211\u4eec\u4f1a\u7528\u5728\u865a\u62df webgl \u73af\u5883\u4e2d\uff09"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handle")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#swaphandle"},"swapHandle")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L55"},"src/core/Resource.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tostring"},"toString"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#tostring"},"toString")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/Resource.ts#L111"},"src/core/Resource.ts:111")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unbind"},"unbind"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unbind"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u89e3\u7ed1\u6e32\u67d3\u7f13\u51b2"),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-6"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource"},"Resource"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Resource#unbind"},"unbind")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/7aaaea7/src/core/RenderBuffer.ts#L98"},"src/core/RenderBuffer.ts:98")))}c.isMDXComponent=!0}}]);