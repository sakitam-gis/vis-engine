"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[8767],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7583),a=n(2475),i=(n(79),n(8570)),l=["components"],o={id:"CameraOptions",title:"Interface: CameraOptions",sidebar_label:"CameraOptions",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/CameraOptions",id:"api/interfaces/CameraOptions",title:"Interface: CameraOptions",description:"Properties",source:"@site/docs/api/interfaces/CameraOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CameraOptions",permalink:"/vis-engine/docs/api/interfaces/CameraOptions",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1678119405,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:0,frontMatter:{id:"CameraOptions",title:"Interface: CameraOptions",sidebar_label:"CameraOptions",sidebar_position:0,custom_edit_url:null}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"aspect",id:"aspect",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"bounds",id:"bounds",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"far",id:"far",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"fov",id:"fov",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"near",id:"near",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"zoom",id:"zoom",level:3},{value:"Defined in",id:"defined-in-5",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"aspect"},"aspect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"aspect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u76f8\u673a\u89c6\u9525\u4f53\u7684\u7eb5\u6a2a\u6bd4"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/fc9bf97/src/cameras/Camera.ts#L50"},"src/cameras/Camera.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bounds"},"bounds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"bounds"),": ",(0,i.kt)("a",{parentName:"p",href:"../#bounds"},(0,i.kt)("inlineCode",{parentName:"a"},"Bounds"))),(0,i.kt)("p",null,"\u50cf\u673a\u89c6\u9525\u4f53\u914d\u7f6e"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/fc9bf97/src/cameras/Camera.ts#L55"},"src/cameras/Camera.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"far"},"far"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"far"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u50cf\u673a\u7684\u8fdc\u7aef\u9762\uff0c\u9ed8\u8ba4\u503c\u662f 100"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/fc9bf97/src/cameras/Camera.ts#L40"},"src/cameras/Camera.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fov"},"fov"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fov"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u6444\u50cf\u673a\u89c6\u9525\u4f53\u5782\u76f4\u89c6\u91ce\u89d2\u5ea6\uff0c\u4ece\u89c6\u56fe\u7684\u5e95\u90e8\u5230\u9876\u90e8\uff0c\u4ee5\u89d2\u5ea6\u6765\u8868\u793a\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"45")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/fc9bf97/src/cameras/Camera.ts#L45"},"src/cameras/Camera.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"near"},"near"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"near"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u50cf\u673a\u7684\u8fd1\u7aef\u9762\uff0c\u9ed8\u8ba4\u503c\u662f0.1"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/fc9bf97/src/cameras/Camera.ts#L35"},"src/cameras/Camera.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"zoom"},"zoom"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"zoom"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\u76f8\u673a\u7f29\u653e\u500d\u6570"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/fc9bf97/src/cameras/Camera.ts#L60"},"src/cameras/Camera.ts:60")))}u.isMDXComponent=!0}}]);