"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[4612],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(n),f=a,k=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return n?i.createElement(k,p(p({ref:t},d),{},{components:n})):i.createElement(k,p({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var o=2;o<r;o++)p[o]=n[o];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=n(7583),a=n(2475),r=(n(79),n(8570)),p=["components"],l={},s=void 0,o={unversionedId:"interfaces/DataTextureOptions",id:"interfaces/DataTextureOptions",title:"DataTextureOptions",description:"vis-engine - v1.4.3 / DataTextureOptions",source:"@site/api/interfaces/DataTextureOptions.md",sourceDirName:"interfaces",slug:"/interfaces/DataTextureOptions",permalink:"/vis-engine/api/interfaces/DataTextureOptions",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/api/interfaces/DataTextureOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"CameraOptions",permalink:"/vis-engine/api/interfaces/CameraOptions"},next:{title:"MeshDrawOptions",permalink:"/vis-engine/api/interfaces/MeshDrawOptions"}},d={},m=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"anisotropy",id:"anisotropy",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"flipY",id:"flipy",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"format",id:"format",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"generateMipmaps",id:"generatemipmaps",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"handle",id:"handle",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"height",id:"height",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"image",id:"image",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"internalFormat",id:"internalformat",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"level",id:"level",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"magFilter",id:"magfilter",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"minFilter",id:"minfilter",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"offset",id:"offset",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"premultiplyAlpha",id:"premultiplyalpha",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"target",id:"target",level:3},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"unpackAlignment",id:"unpackalignment",level:3},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"userData",id:"userdata",level:3},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"width",id:"width",level:3},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"wrapS",id:"wraps",level:3},{value:"Inherited from",id:"inherited-from-20",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"wrapT",id:"wrapt",level:3},{value:"Inherited from",id:"inherited-from-21",level:4},{value:"Defined in",id:"defined-in-22",level:4}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/"},"vis-engine - v1.4.3")," / DataTextureOptions"),(0,r.kt)("h1",{id:"interface-datatextureoptions"},"Interface: DataTextureOptions"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"TextureOptions"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DataTextureOptions"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#anisotropy"},"anisotropy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#data"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#flipy"},"flipY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#format"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#generatemipmaps"},"generateMipmaps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#handle"},"handle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#height"},"height")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#id"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#image"},"image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#internalformat"},"internalFormat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#level"},"level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#magfilter"},"magFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#minfilter"},"minFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#name"},"name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#offset"},"offset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#premultiplyalpha"},"premultiplyAlpha")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#target"},"target")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#type"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#unpackalignment"},"unpackAlignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#userdata"},"userData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#width"},"width")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#wraps"},"wrapS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/DataTextureOptions#wrapt"},"wrapT"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"anisotropy"},"anisotropy"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"anisotropy"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6cbf\u901a\u8fc7\u5177\u6709\u6700\u9ad8\u7eb9\u7406\u50cf\u7d20\u5bc6\u5ea6\u7684\u50cf\u7d20\u7684\u5750\u6807\u8f74\u53d6\u6837\u7684\u6570\u91cf\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\n\u8f83\u9ad8\u7684\u503c\u4f1a\u4ea7\u751f\u6bd4\u57fa\u672cmipmap\u66f4\u5c11\u7684\u6a21\u7cca\u7ed3\u679c\uff0c\u4f46\u9700\u8981\u4f7f\u7528\u66f4\u591a\u7eb9\u7406\u6837\u672c\u3002\u901a\u5e38\u6211\u4eec\u5728\u5b9e\u73b0\u8ba9\u7269\u4f53\u7f29\u5c0f\u65f6\n\u83b7\u53d6\u66f4\u9ad8\u7684\u6e05\u6670\u5ea6\uff0c\u53ef\u4ee5\u5c06\u6b64\u503c\u8bbe\u5927\uff0c\u6ce8\u610f\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)"),"\n\u83b7\u53d6\u5141\u8bb8\u7684\u6700\u5927\u503c\u3002\uff08see: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic%EF%BC%89"},"https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic\uff09")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#anisotropy"},"anisotropy")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L81"},"src/core/Texture.ts:81")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"data"},"data"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/DataTexture.ts#L5"},"src/core/DataTexture.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flipy"},"flipY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"flipY"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u4e0a\u4f20\u65f6\u662f\u5426\u7ffb\u8f6c Y \u8f74\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#flipy"},"flipY")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L73"},"src/core/Texture.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"format"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u6570\u636e\u7684\u683c\u5f0f\uff0c\u5728 WebGL 1 \u4e2d\uff0c\u5b83\u5fc5\u987b\u4e0e internalformat \u76f8\u540c\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGBA"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGB"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LUMINANCE"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LUMINANCE_ALPHA")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#format"},"format")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L49"},"src/core/Texture.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"generatemipmaps"},"generateMipmaps"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"generateMipmaps"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u914d\u7f6e\u662f\u5426\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mipmap"),"\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"generateMipmaps"),"\u4f1a\u81ea\u52a8\u751f\u6210\u82e5\u5e72\u5c0f\u5c3a\u5bf8\u7684\u7eb9\u7406\uff0c\u6839\u636e\u5f53\u524d\u4e09\u7ef4\u7269\u4f53\u5728\u5c4f\u5e55\u4e0a\u7684\u5927\u5c0f\u6765\u81ea\u52a8\u9009\u62e9\u6700\u5408\u9002\u7684\u5c3a\u5bf8\u3002\n\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"webgl2")," \u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"mipmap")," \u4e0d\u518d\u5f3a\u5236\u8981\u6c42\u7eb9\u7406\u7684\u957f\u5ea6\u548c\u5bbd\u5ea6\u5fc5\u987b\u662f2\u7684\u6574\u6570\u6b21\u5e42\u3002"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#generatemipmaps"},"generateMipmaps")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L68"},"src/core/Texture.ts:68")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handle"},"handle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handle"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#handle"},"handle")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Resource.ts#L12"},"src/core/Resource.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0"),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#height"},"height")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L19"},"src/core/Texture.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#id"},"id")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Resource.ts#L10"},"src/core/Resource.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"image"},"image"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"image"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",null,"\u7eb9\u7406\u6570\u636e"),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#image"},"image")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L107"},"src/core/Texture.ts:107")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"internalformat"},"internalFormat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"internalFormat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7528\u4e8e\u6307\u5b9a\u7eb9\u7406\u56fe\u50cf\u7684\u5185\u90e8\u683c\u5f0f\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGBA"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.RGB"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.ALPHA")," \u7b49\u7b49"),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#internalformat"},"internalFormat")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L55"},"src/core/Texture.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"level"},"level"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"level"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9amipmap\u7684\u7cbe\u7ec6\u5ea6\uff0c\u7ea7\u522b 0 \u662f\u57fa\u7840\u56fe\u50cf\u7ea7\u522b\uff0c\u7ea7\u522b n \u662f\u7b2c n \u4e2a mipmap \u7f29\u51cf\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#level"},"level")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L97"},"src/core/Texture.ts:97")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"magfilter"},"magFilter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"magFilter"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u653e\u5927\u65f6\u4f7f\u7528\u7684\u8fc7\u6ee4\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.NEAREST"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LINEAR")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#magfilter"},"magFilter")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L25"},"src/core/Texture.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minfilter"},"minFilter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"minFilter"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u7f29\u5c0f\u65f6\u4f7f\u7528\u7684\u8fc7\u6ee4\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.NEAREST"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.LINEAR")),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#minfilter"},"minFilter")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L31"},"src/core/Texture.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#name"},"name")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Resource.ts#L11"},"src/core/Resource.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offset"},"offset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"offset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Types"},"GLintptr")," \u7c7b\u578b\u504f\u79fb\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLBuffer"},"WebGLBuffer")," \u7684\u6570\u636e\u5b58\u50a8\u4e2d\u3002\u7528\u4e8e\u4e0a\u4f20\u6570\u636e\u5230\u5f53\u524d\u8303\u56f4 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLTexture"},"WebGLTexture")," \u4eceWebGLBuffer \u8303\u56f4\u5230PIXEL_UNPACK_BUFFER \u76ee\u6807"),(0,r.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#offset"},"offset")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L102"},"src/core/Texture.ts:102")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"premultiplyalpha"},"premultiplyAlpha"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"premultiplyAlpha"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7eb9\u7406\u4e0a\u4f20\u65f6\u662f\u5426\u9884\u4e58 ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," \u503c\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#premultiplyalpha"},"premultiplyAlpha")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L92"},"src/core/Texture.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"target"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"gl.TEXTURE_2D")),(0,r.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#target"},"target")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L9"},"src/core/Texture.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9a\u7eb9\u7406\u6570\u636e\u7684\u6570\u636e\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.UNSIGNED_BYTE"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.FLOAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.UNSIGNED_SHORT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.UNSIGNED_INT")," \u7b49\u7b49"),(0,r.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#type"},"type")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L61"},"src/core/Texture.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unpackalignment"},"unpackAlignment"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"unpackAlignment"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6307\u5b9a\u5185\u5b58\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u884c\u8d77\u70b9\u7684\u5bf9\u9f50\u8981\u6c42\u3002\n\u53ef\u80fd\u7684\u503c: 1, 2, 4, 8 (see ",(0,r.kt)("a",{parentName:"p",href:"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml"},"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml"),")"),(0,r.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#unpackalignment"},"unpackAlignment")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L87"},"src/core/Texture.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userdata"},"userData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"userData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#userdata"},"userData")),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Resource.ts#L13"},"src/core/Resource.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u7eb9\u7406\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0"),(0,r.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#width"},"width")),(0,r.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L14"},"src/core/Texture.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wraps"},"wrapS"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"wrapS"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u6c34\u5e73\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.MIRRORED_REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.CLAMP_TO_EDGE")),(0,r.kt)("h4",{id:"inherited-from-20"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#wraps"},"wrapS")),(0,r.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L37"},"src/core/Texture.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wrapt"},"wrapT"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"wrapT"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u5782\u76f4\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"gl.REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.MIRRORED_REPEAT"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gl.CLAMP_TO_EDGE")),(0,r.kt)("h4",{id:"inherited-from-21"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions"},"TextureOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/vis-engine/api/interfaces/TextureOptions#wrapt"},"wrapT")),(0,r.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/a0c417a/src/core/Texture.ts#L43"},"src/core/Texture.ts:43")))}f.isMDXComponent=!0}}]);