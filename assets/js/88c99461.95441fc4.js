"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[3815],{8570:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>h});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||k[m]||i;return n?r.createElement(h,l(l({ref:t},o),{},{components:n})):r.createElement(h,l({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var r=n(7583),a=n(2475),i=(n(79),n(8570)),l=["components"],d={id:"Texture3D",title:"Class: Texture3D",sidebar_label:"Texture3D",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/classes/Texture3D",id:"api/classes/Texture3D",title:"Class: Texture3D",description:"\u7eb9\u7406",source:"@site/docs/api/classes/Texture3D.md",sourceDirName:"api/classes",slug:"/api/classes/Texture3D",permalink:"/vis-engine/docs/api/classes/Texture3D",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1675535800,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:0,frontMatter:{id:"Texture3D",title:"Class: Texture3D",sidebar_label:"Texture3D",sidebar_position:0,custom_edit_url:null}},o={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"byteLength",id:"bytelength",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"height",id:"height",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"image",id:"image",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"needsUpdate",id:"needsupdate",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"options",id:"options",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"renderer",id:"renderer",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"textureUnit",id:"textureunit",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"userData",id:"userdata",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"width",id:"width",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"Accessors",id:"accessors",level:2},{value:"gl",id:"gl",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"handle",id:"handle",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"rendererState",id:"rendererstate",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"Methods",id:"methods",level:2},{value:"bind",id:"bind",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"delete",id:"delete",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"fromSrc",id:"fromsrc",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"removeStats",id:"removestats",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"setData",id:"setdata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"setOptions",id:"setoptions",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"unbind",id:"unbind",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"Defined in",id:"defined-in-25",level:4}],k={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7eb9\u7406\n\u4e00\u822c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl")," \u4e2d\u4f1a\u5c06\u7eb9\u7406\u7528\u4e8e\u8d34\u56fe\uff0c\u6216\u8005\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"renderTarget"),"\n\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const texture = new ve.Texture3D(renderer, {\n  generateMipmaps: true,\n  flipY: true,\n});\n\nconst image = new Image();\n\nimage.onload = () => {\n  texture.setData(image, image.width, image.height);\n};\n\nimage.src = './assets/posx.jpg';\n")),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},(0,i.kt)("inlineCode",{parentName:"a"},"Texture"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Texture3D"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Texture3D"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"renderer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/classes/Renderer"},(0,i.kt)("inlineCode",{parentName:"a"},"Renderer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Renderer \u5bf9\u8c61")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/interfaces/Texture3DOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"Texture3DOptions")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879")))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=158"},"src/core/Texture3D.ts:158")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bytelength"},"byteLength"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"byteLength"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#bytelength"},"byteLength")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=26"},"src/core/Resource.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depth"},"depth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"depth"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u7eb9\u7406\u6df1\u5ea6"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=150"},"src/core/Texture3D.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u7eb9\u7406\u9ad8\u5ea6"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#height"},"height")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=160"},"src/core/Texture.ts:160")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#id"},"id")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=19"},"src/core/Resource.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"image"},"image"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"image"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"\u7eb9\u7406\u6570\u636e"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#image"},"image")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=150"},"src/core/Texture.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WithUndef"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#name"},"name")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=21"},"src/core/Resource.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"needsupdate"},"needsUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"needsUpdate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u662f\u5426\u9700\u8981\u66f4\u65b0\uff0c\u4e00\u822c\u6211\u4eec\u4f1a\u5728\u7eb9\u7406\u6570\u636e\u6216\u8005\u914d\u7f6e\u53d8\u66f4\u65f6\u5c06\u6b64\u914d\u7f6e\u9879\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\n\u8fd9\u6837\u4f1a\u5728\u4e0b\u4e00\u6b21\u6e32\u67d3\u65f6\u5e94\u7528\u5bf9\u5e94\u7684\u7eb9\u7406\u6570\u636e\u548c\u914d\u7f6e\u3002"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#needsupdate"},"needsUpdate")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=140"},"src/core/Texture3D.ts:140")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/ResourceOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ResourceOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/interfaces/TextureOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TextureOptions")),">"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#options"},"options")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=28"},"src/core/Resource.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderer"},"renderer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderer"),": ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Renderer"},(0,i.kt)("inlineCode",{parentName:"a"},"Renderer"))),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#renderer"},"renderer")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at=1379d00#line=7"},"src/core/Base.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"textureunit"},"textureUnit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"textureUnit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u5355\u4f4d"),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#textureunit"},"textureUnit")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=145"},"src/core/Texture3D.ts:145")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userdata"},"userData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#userdata"},"userData")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=23"},"src/core/Resource.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u7eb9\u7406\u5bbd\u5ea6"),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#width"},"width")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=155"},"src/core/Texture.ts:155")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"gl"},"gl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"gl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("p",null,"\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl")," \u5b9e\u4f8b"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,"Texture.gl"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=188"},"src/core/Texture3D.ts:188")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handle"},"handle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"handle"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,"Texture.handle"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=45"},"src/core/Resource.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rendererstate"},"rendererState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"rendererState"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/State"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))),(0,i.kt)("p",null,"\u83b7\u53d6\u6e32\u67d3\u72b6\u6001"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/State"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,"Texture.rendererState"),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at=1379d00#line=23"},"src/core/Base.ts:23")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"bind"},"bind"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"bind"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"unit?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u7ed1\u5b9a\u7eb9\u7406"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"unit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u5355\u4f4d\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"this.textureUnit"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#bind"},"bind")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=372"},"src/core/Texture3D.ts:372")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"delete"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture3D"},(0,i.kt)("inlineCode",{parentName:"a"},"Texture3D"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,i.kt)("inlineCode",{parentName:"td"},"deleteChildren")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture3D"},(0,i.kt)("inlineCode",{parentName:"a"},"Texture3D"))),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#delete"},"delete")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=56"},"src/core/Resource.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u9500\u6bc1\u7eb9\u7406"),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#destroy"},"destroy")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=391"},"src/core/Texture3D.ts:391")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromsrc"},"fromSrc"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fromSrc"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("p",null,"\u4ece Url \u8bbe\u7f6e\u7eb9\u7406\u5bf9\u8c61\u7684\u6570\u636e\uff0c\u4f1a\u9ed8\u8ba4\u6807\u8bb0\u4e3a\u9700\u8981\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"needsUpdate = true")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#fromsrc"},"fromSrc")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=228"},"src/core/Texture.ts:228")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removestats"},"removeStats"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeStats"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#removestats"},"removeStats")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=1379d00#line=81"},"src/core/Resource.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setdata"},"setData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"width?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"depth?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u6570\u636e"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"image")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u6570\u636e")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a\u539f\u59cb\u5bbd\u5ea6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u4e3a\u539f\u59cb\u9ad8\u5ea6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"depth")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-6"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#setdata"},"setData")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=199"},"src/core/Texture3D.ts:199")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setoptions"},"setOptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setOptions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u914d\u7f6e\uff08\u9ed8\u8ba4\u8fdb\u884c\u5408\u5e76\uff09"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/interfaces/Texture3DOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"Texture3DOptions")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879")))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-7"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#setoptions"},"setOptions")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=211"},"src/core/Texture3D.ts:211")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tostring"},"toString"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"\u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e"),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides-8"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#tostring"},"toString")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=399"},"src/core/Texture3D.ts:399")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unbind"},"unbind"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unbind"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u89e3\u7ed1\u7eb9\u7406"),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-9"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#unbind"},"unbind")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=382"},"src/core/Texture3D.ts:382")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"update"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"units?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\u66f4\u65b0\u7eb9\u7406\u6570\u636e\u6216\u8005\u7eb9\u7406\u76f8\u5173\u914d\u7f6e"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"units")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u5355\u4f4d\uff0c\u9ed8\u8ba4\u4e3a 0")))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-10"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture"},"Texture"),".",(0,i.kt)("a",{parentName:"p",href:"/vis-engine/docs/api/classes/Texture#update"},"update")),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=1379d00#line=223"},"src/core/Texture3D.ts:223")))}m.isMDXComponent=!0}}]);