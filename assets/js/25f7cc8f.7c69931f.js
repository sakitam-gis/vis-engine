"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[3819],{8570:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7583),i=n(2475),a=(n(79),n(8570)),s=["components"],o={},l=void 0,p={unversionedId:"interfaces/ResourceOptions",id:"interfaces/ResourceOptions",title:"ResourceOptions",description:"vis-engine - v1.1.1 / ResourceOptions",source:"@site/api/interfaces/ResourceOptions.md",sourceDirName:"interfaces",slug:"/interfaces/ResourceOptions",permalink:"/vis-engine/api/interfaces/ResourceOptions",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/api/interfaces/ResourceOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"RendererOptions",permalink:"/vis-engine/api/interfaces/RendererOptions"},next:{title:"Texture3DOptions",permalink:"/vis-engine/api/interfaces/Texture3DOptions"}},c={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"handle",id:"handle",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"userData",id:"userdata",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/vis-engine/api/"},"vis-engine - v1.1.1")," / ResourceOptions"),(0,a.kt)("h1",{id:"interface-resourceoptions"},"Interface: ResourceOptions"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/ResourceOptions#handle"},"handle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/ResourceOptions#id"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/ResourceOptions#name"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/vis-engine/api/interfaces/ResourceOptions#userdata"},"userData"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"handle"},"handle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"handle"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=48bd74f#line=12"},"core/Resource.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=48bd74f#line=10"},"core/Resource.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=48bd74f#line=11"},"core/Resource.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userdata"},"userData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"userData"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at=48bd74f#line=13"},"core/Resource.ts:13")))}f.isMDXComponent=!0}}]);