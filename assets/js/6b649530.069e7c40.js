"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[6219],{8570:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var r=t(79);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,k=u["".concat(d,".").concat(f)]||u[f]||c[f]||l;return t?r.createElement(k,a(a({ref:n},o),{},{components:t})):r.createElement(k,a({ref:n},o))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=f;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=t(7583),i=t(2475),l=(t(79),t(8570)),a=["components"],p={id:"RendererOptions",title:"Interface: RendererOptions",sidebar_label:"RendererOptions",sidebar_position:0,custom_edit_url:null},d=void 0,s={unversionedId:"api/interfaces/RendererOptions",id:"api/interfaces/RendererOptions",title:"Interface: RendererOptions",description:"Properties",source:"@site/docs/api/interfaces/RendererOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/RendererOptions",permalink:"/vis-engine/docs/api/interfaces/RendererOptions",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1679751699,formattedLastUpdatedAt:"Mar 25, 2023",sidebarPosition:0,frontMatter:{id:"RendererOptions",title:"Interface: RendererOptions",sidebar_label:"RendererOptions",sidebar_position:0,custom_edit_url:null}},o={},u=[{value:"Properties",id:"properties",level:2},{value:"alpha",id:"alpha",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"antialias",id:"antialias",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"autoClear",id:"autoclear",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"dpr",id:"dpr",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"extensions",id:"extensions",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"frustumCull",id:"frustumcull",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"powerPreference",id:"powerpreference",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"premultipliedAlpha",id:"premultipliedalpha",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"preserveDrawingBuffer",id:"preservedrawingbuffer",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"requestWebGl2",id:"requestwebgl2",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"stencil",id:"stencil",level:3},{value:"Defined in",id:"defined-in-11",level:4}],c={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"alpha"},"alpha"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"alpha"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u6307\u5b9a\u753b\u5e03\u662f\u5426\u5305\u542balpha\u7f13\u51b2\u533a\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L94"},"src/core/Renderer.ts:94")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"antialias"},"antialias"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"antialias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6297\u952f\u9f7f\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L99"},"src/core/Renderer.ts:99")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"autoclear"},"autoClear"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"autoClear"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u81ea\u52a8\u6e05\u9664"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L84"},"src/core/Renderer.ts:84")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"depth"},"depth"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"depth"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6df1\u5ea6\u68c0\u6d4b"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L89"},"src/core/Renderer.ts:89")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dpr"},"dpr"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"dpr"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"devicePixelRatio")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L79"},"src/core/Renderer.ts:79")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"extensions"},"extensions"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"extensions"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"ExternalExtensionKeys"),"[]"),(0,l.kt)("p",null,"WebGL \u4e0a\u4e0b\u6587\u652f\u6301\u7684\u6269\u5c55\u5217\u8868\u3002\u9ed8\u8ba4 []"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L133"},"src/core/Renderer.ts:133")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"frustumcull"},"frustumCull"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"frustumCull"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u662f\u5426\u5f00\u542f\u89c6\u9525\u5254\u9664\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L128"},"src/core/Renderer.ts:128")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"powerpreference"},"powerPreference"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"powerPreference"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"WebGLPowerPreference")),(0,l.kt)("p",null,"\u6307\u5b9aGPU\u7684\u6027\u80fd\u914d\u7f6e\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L109"},"src/core/Renderer.ts:109")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"premultipliedalpha"},"premultipliedAlpha"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"premultipliedAlpha"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u9884\u4e58alpha"),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L114"},"src/core/Renderer.ts:114")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"preservedrawingbuffer"},"preserveDrawingBuffer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"preserveDrawingBuffer"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u662f\u5426\u5f00\u542f\u7ed8\u5236\u7f13\u51b2\u533a\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L119"},"src/core/Renderer.ts:119")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestwebgl2"},"requestWebGl2"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"requestWebGl2"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"webgl2")," \u5b9e\u4f8b\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L124"},"src/core/Renderer.ts:124")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stencil"},"stencil"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"stencil"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6a21\u677f\u7f13\u51b2\u533a"),(0,l.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/e4e7d14/src/core/Renderer.ts#L104"},"src/core/Renderer.ts:104")))}f.isMDXComponent=!0}}]);