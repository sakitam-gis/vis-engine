"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[4752],{8570:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(n),k=a,f=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return n?i.createElement(f,l(l({ref:t},m),{},{components:n})):i.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var i=n(7583),a=n(2475),r=(n(79),n(8570)),l=["components"],p={},s=void 0,o={unversionedId:"interfaces/TextureOptions",id:"interfaces/TextureOptions",title:"TextureOptions",description:"vis-engine - v1.3.0 / TextureOptions",source:"@site/api/interfaces/TextureOptions.md",sourceDirName:"interfaces",slug:"/interfaces/TextureOptions",permalink:"/vis-engine/api/interfaces/TextureOptions",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/api/interfaces/TextureOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Texture3DOptions",permalink:"/vis-engine/api/interfaces/Texture3DOptions"},next:{title:"UniformData",permalink:"/vis-engine/api/interfaces/UniformData"}},m={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"flipY",id:"flipy",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"format",id:"format",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"generateMipmaps",id:"generatemipmaps",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"image",id:"image",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"internalFormat",id:"internalformat",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"level",id:"level",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"magFilter",id:"magfilter",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"minFilter",id:"minfilter",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"premultiplyAlpha",id:"premultiplyalpha",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"unpackAlignment",id:"unpackalignment",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"wrapR",id:"wrapr",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"wrapS",id:"wraps",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"wrapT",id:"wrapt",level:3},{value:"Defined in",id:"defined-in-16",level:4}],u={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/"},"vis-engine - v1.3.0")," / TextureOptions"),(0,r.kt)("h1",{id:"interface-textureoptions"},"Interface: TextureOptions"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TextureOptions"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/DataTextureOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"DataTextureOptions"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#depth"},"depth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#flipy"},"flipY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#format"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#generatemipmaps"},"generateMipmaps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#height"},"height")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#image"},"image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#internalformat"},"internalFormat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#level"},"level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#magfilter"},"magFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#minfilter"},"minFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#premultiplyalpha"},"premultiplyAlpha")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#type"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#unpackalignment"},"unpackAlignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#width"},"width")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#wrapr"},"wrapR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#wraps"},"wrapS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/TextureOptions#wrapt"},"wrapT"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"depth"},"depth"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"depth"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9a\u7eb9\u7406\u6df1\u5ea6\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=95"},"src/core/Texture.ts:95")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flipy"},"flipY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"flipY"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u4e0a\u4f20\u65f6\u662f\u5426\u7ffb\u8f6c Y \u8f74\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=74"},"src/core/Texture.ts:74")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"format"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u6570\u636e\u7684\u683c\u5f0f\uff0c\u5728 WebGL 1 \u4e2d\uff0c\u5b83\u5fc5\u987b\u4e0e internalformat \u76f8\u540c\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGBA"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGB"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LUMINANCE"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LUMINANCE_ALPHA")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=50"},"src/core/Texture.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"generatemipmaps"},"generateMipmaps"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"generateMipmaps"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u914d\u7f6e\u662f\u5426\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mipmap"),"\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"generateMipmaps"),"\u4f1a\u81ea\u52a8\u751f\u6210\u82e5\u5e72\u5c0f\u5c3a\u5bf8\u7684\u7eb9\u7406\uff0c\u6839\u636e\u5f53\u524d\u4e09\u7ef4\u7269\u4f53\u5728\u5c4f\u5e55\u4e0a\u7684\u5927\u5c0f\u6765\u81ea\u52a8\u9009\u62e9\u6700\u5408\u9002\u7684\u5c3a\u5bf8\u3002\n\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"mipmap"),"\u8981\u6c42\u7eb9\u7406\u7684\u957f\u5ea6\u548c\u5bbd\u5ea6\u5fc5\u987b\u662f2\u7684\u6574\u6570\u6b21\u5e42\u3002"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=69"},"src/core/Texture.ts:69")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=14"},"src/core/Texture.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"image"},"image"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"image"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",null,"\u7eb9\u7406\u6570\u636e"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=100"},"src/core/Texture.ts:100")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"internalformat"},"internalFormat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"internalFormat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7528\u4e8e\u6307\u5b9a\u7eb9\u7406\u56fe\u50cf\u7684\u5185\u90e8\u683c\u5f0f\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGBA"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGB"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.ALPHA")," \u7b49\u7b49"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=56"},"src/core/Texture.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"level"},"level"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"level"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9amipmap\u7684\u7cbe\u7ec6\u5ea6\uff0c\u7ea7\u522b 0 \u662f\u57fa\u7840\u56fe\u50cf\u7ea7\u522b\uff0c\u7ea7\u522b n \u662f\u7b2c n \u4e2a mipmap \u7f29\u51cf\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=90"},"src/core/Texture.ts:90")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"magfilter"},"magFilter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"magFilter"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u653e\u5927\u65f6\u4f7f\u7528\u7684\u8fc7\u6ee4\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.NEAREST"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LINEAR")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=20"},"src/core/Texture.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minfilter"},"minFilter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"minFilter"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u7f29\u5c0f\u65f6\u4f7f\u7528\u7684\u8fc7\u6ee4\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.NEAREST"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LINEAR")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=26"},"src/core/Texture.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"premultiplyalpha"},"premultiplyAlpha"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"premultiplyAlpha"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u4e0a\u4f20\u65f6\u662f\u5426\u9884\u4e58 ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," \u503c\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=85"},"src/core/Texture.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9a\u7eb9\u7406\u6570\u636e\u7684\u6570\u636e\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.UNSIGNED_BYTE"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.FLOAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.UNSIGNED_SHORT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.UNSIGNED_INT")," \u7b49\u7b49"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=62"},"src/core/Texture.ts:62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unpackalignment"},"unpackAlignment"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"unpackAlignment"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9a\u5185\u5b58\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u884c\u8d77\u70b9\u7684\u5bf9\u9f50\u8981\u6c42\u3002\n\u53ef\u80fd\u7684\u503c: 1, 2, 4, 8 (see ",(0,r.kt)("a",{parentName:"p",href:"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml"},"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml"),")"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=80"},"src/core/Texture.ts:80")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=9"},"src/core/Texture.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wrapr"},"wrapR"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"wrapR"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6df1\u5ea6\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.MIRRORED_REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.CLAMP_TO_EDGE")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=44"},"src/core/Texture.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wraps"},"wrapS"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"wrapS"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6c34\u5e73\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.MIRRORED_REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.CLAMP_TO_EDGE")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=32"},"src/core/Texture.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wrapt"},"wrapT"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"wrapT"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u5782\u76f4\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.MIRRORED_REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.CLAMP_TO_EDGE")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at=1379d00#line=38"},"src/core/Texture.ts:38")))}k.isMDXComponent=!0}}]);