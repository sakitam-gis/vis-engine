"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[3813],{8570:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var r=t(79);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,k=u["".concat(d,".").concat(f)]||u[f]||c[f]||a;return t?r.createElement(k,l(l({ref:n},o),{},{components:t})):r.createElement(k,l({ref:n},o))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=t(7583),i=t(2475),a=(t(79),t(8570)),l=["components"],p={},d=void 0,s={unversionedId:"interfaces/RendererOptions",id:"interfaces/RendererOptions",title:"RendererOptions",description:"vis-engine - v1.0.4 / RendererOptions",source:"@site/api/interfaces/RendererOptions.md",sourceDirName:"interfaces",slug:"/interfaces/RendererOptions",permalink:"/vis-engine/api/interfaces/RendererOptions",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/api/interfaces/RendererOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"RenderTargetOptions",permalink:"/vis-engine/api/interfaces/RenderTargetOptions"},next:{title:"ResourceOptions",permalink:"/vis-engine/api/interfaces/ResourceOptions"}},o={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"alpha",id:"alpha",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"antialias",id:"antialias",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"autoClear",id:"autoclear",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"dpr",id:"dpr",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"frustumCull",id:"frustumcull",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"powerPreference",id:"powerpreference",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"premultipliedAlpha",id:"premultipliedalpha",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"preserveDrawingBuffer",id:"preservedrawingbuffer",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"requestWebGl2",id:"requestwebgl2",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"stencil",id:"stencil",level:3},{value:"Defined in",id:"defined-in-10",level:4}],c={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/vis-engine/api/"},"vis-engine - v1.0.4")," / RendererOptions"),(0,a.kt)("h1",{id:"interface-rendereroptions"},"Interface: RendererOptions"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#alpha"},"alpha")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#antialias"},"antialias")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#autoclear"},"autoClear")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#depth"},"depth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#dpr"},"dpr")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#frustumcull"},"frustumCull")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#powerpreference"},"powerPreference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#premultipliedalpha"},"premultipliedAlpha")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#preservedrawingbuffer"},"preserveDrawingBuffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#requestwebgl2"},"requestWebGl2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/RendererOptions#stencil"},"stencil"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"alpha"},"alpha"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"alpha"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u753b\u5e03\u662f\u5426\u5305\u542balpha\u7f13\u51b2\u533a\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=29"},"core/Renderer.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"antialias"},"antialias"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"antialias"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6297\u952f\u9f7f\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=34"},"core/Renderer.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"autoclear"},"autoClear"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"autoClear"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u81ea\u52a8\u6e05\u9664"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=19"},"core/Renderer.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"depth"},"depth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"depth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6df1\u5ea6\u68c0\u6d4b"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=24"},"core/Renderer.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dpr"},"dpr"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"dpr"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"devicePixelRatio")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=14"},"core/Renderer.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"frustumcull"},"frustumCull"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"frustumCull"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u662f\u5426\u5f00\u542f\u89c6\u9525\u5254\u9664\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=63"},"core/Renderer.ts:63")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"powerpreference"},"powerPreference"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"powerPreference"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLPowerPreference")),(0,a.kt)("p",null,"\u6307\u5b9aGPU\u7684\u6027\u80fd\u914d\u7f6e\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=44"},"core/Renderer.ts:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"premultipliedalpha"},"premultipliedAlpha"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"premultipliedAlpha"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u9884\u4e58alpha"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=49"},"core/Renderer.ts:49")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preservedrawingbuffer"},"preserveDrawingBuffer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"preserveDrawingBuffer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u662f\u5426\u5f00\u542f\u7ed8\u5236\u7f13\u51b2\u533a\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=54"},"core/Renderer.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestwebgl2"},"requestWebGl2"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"requestWebGl2"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"webgl2")," \u5b9e\u4f8b\uff0c\u4ec5\u5728\u4f20\u5165\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," \u5bf9\u8c61\u65f6\u6709\u7528"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=59"},"core/Renderer.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stencil"},"stencil"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"stencil"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6a21\u677f\u7f13\u51b2\u533a"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at=ad9dd6a#line=39"},"core/Renderer.ts:39")))}f.isMDXComponent=!0}}]);