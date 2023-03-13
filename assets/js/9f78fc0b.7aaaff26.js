"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[8997],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},o="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),o=p(n),c=i,k=o["".concat(u,".").concat(c)]||o[c]||f[c]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[o]="string"==typeof e?e:i,l[1]=d;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>o});var r=n(7583),i=n(2475),a=(n(79),n(8570)),l=["components"],d={id:"BufferAttribute",title:"Class: BufferAttribute",sidebar_label:"BufferAttribute",sidebar_position:0,custom_edit_url:null},u=void 0,p={unversionedId:"api/classes/BufferAttribute",id:"api/classes/BufferAttribute",title:"Class: BufferAttribute",description:"\u5b58\u50a8\u548c BufferAttribute \u76f8\u5173\u7684\u5c5e\u6027",source:"@site/docs/api/classes/BufferAttribute.md",sourceDirName:"api/classes",slug:"/api/classes/BufferAttribute",permalink:"/vis-engine/docs/api/classes/BufferAttribute",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1678692004,formattedLastUpdatedAt:"Mar 13, 2023",sidebarPosition:0,frontMatter:{id:"BufferAttribute",title:"Class: BufferAttribute",sidebar_label:"BufferAttribute",sidebar_position:0,custom_edit_url:null}},s={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"buffer",id:"buffer",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"count",id:"count",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"divisor",id:"divisor",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"instanced",id:"instanced",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"needsUpdate",id:"needsupdate",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"normalized",id:"normalized",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"offset",id:"offset",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"size",id:"size",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"stride",id:"stride",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"usage",id:"usage",level:3},{value:"Defined in",id:"defined-in-14",level:4}],f={toc:o};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b58\u50a8\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute")," \u76f8\u5173\u7684\u5c5e\u6027"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new BufferAttribute"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"attribute"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"renderer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/classes/Renderer"},(0,a.kt)("inlineCode",{parentName:"a"},"Renderer")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"attribute")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/vis-engine/docs/api/interfaces/Attribute"},(0,a.kt)("inlineCode",{parentName:"a"},"Attribute")))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L196"},"src/core/BufferAttribute.ts:196")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"buffer"},"buffer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"buffer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"WithNull"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLBuffer"),">"),(0,a.kt)("p",null,"WebGLBuffer"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L194"},"src/core/BufferAttribute.ts:194")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"count"},"count"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"count"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u9876\u70b9\u6570\u91cf"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L178"},"src/core/BufferAttribute.ts:178")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("a",{parentName:"p",href:"../#datatype"},(0,a.kt)("inlineCode",{parentName:"a"},"DataType"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Attribute")," \u6570\u636e\uff0c\u5fc5\u987b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedArray")," \u7c7b\u578b"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L133"},"src/core/BufferAttribute.ts:133")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"divisor"},"divisor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"divisor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a\u5b9e\u4f8b\u5316\u6e32\u67d3\u7684\u6570\u91cf"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L163"},"src/core/BufferAttribute.ts:163")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u4e0d\u4f20\u65f6\u7531\u5185\u90e8\u751f\u6210\u3002"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L128"},"src/core/BufferAttribute.ts:128")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instanced"},"instanced"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"instanced"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute")," \u662f\u5426\u662f\u5b9e\u4f8b\u5316\u6570\u636e"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L148"},"src/core/BufferAttribute.ts:148")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"needsupdate"},"needsUpdate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"needsUpdate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6807\u8bb0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute")," \u662f\u5426\u9700\u8981\u91cd\u65b0\u4e0a\u4f20 ",(0,a.kt)("inlineCode",{parentName:"p"},"GPU"),"\uff0c\u4e00\u822c\u6211\u4eec\u5728\u6570\u636e\u6539\u53d8\u65f6\u9700\u8981\u5c06\u6b64\u503c\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L173"},"src/core/BufferAttribute.ts:173")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"normalized"},"normalized"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"normalized"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u5f53\u6574\u6570\u503c\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\u65f6\u662f\u5426\u5e94\u8be5\u5c06\u6574\u6570\u6570\u503c\u5f52\u4e00\u5316\u5230\u7279\u5b9a\u7684\u8303\u56f4"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L168"},"src/core/BufferAttribute.ts:168")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"offset"},"offset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"offset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute"),"\u4e2d\u9876\u70b9\u5c5e\u6027\u6570\u7ec4\u4e2d\u7b2c\u4e00\u90e8\u5206\u7684\u5b57\u8282\u504f\u79fb\u91cf"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L158"},"src/core/BufferAttribute.ts:158")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"size"},"size"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"size"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute"),"\u4e2d\u7f13\u51b2\u533a\u6bcf\u4e2a\u9876\u70b9\u5206\u91cf\u7684\u4e2a\u6570, \u4e00\u822c\u4e3a 1-4"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L143"},"src/core/BufferAttribute.ts:143")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stride"},"stride"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"stride"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute"),"\u4e2d\u7f13\u51b2\u533a\u9876\u70b9\u7684\u504f\u79fb\u91cf"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L153"},"src/core/BufferAttribute.ts:153")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u7f13\u51b2\u533a\u5bf9\u8c61\uff0c\u5e38\u7528\u7684\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gl.ARRAY_BUFFER")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.ELEMENT_ARRAY_BUFFER"),"\u3002\u5f53\u7136\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"webgl2")," \u4e2d\u6709\u4e00\u4e9b\u65b0\u7684\u53ef\u7528\u503c\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.UNIFORM_BUFFER"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.TRANSFORM_FEEDBACK_BUFFER"),"\u3002"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L189"},"src/core/BufferAttribute.ts:189")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BufferAttribute"),"\u4e2d\u5143\u7d20\u7684\u6570\u636e\u7c7b\u578b"),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L138"},"src/core/BufferAttribute.ts:138")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usage"},"usage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"usage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6807\u8bb0\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u6570\u636e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"webgl")," \u4f1a\u9488\u5bf9\u6027\u7684\u505a\u4e00\u4e9b\u4f18\u5316\uff0c\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.STATIC_DRAW"),"\uff0c\u5373\u6807\u8bb0\u6570\u636e\u4e0d\u4f1a\u7ecf\u5e38\u6027\u6539\u53d8\u3002\n\u5176\u4ed6\u53ef\u7528\u503c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData%E3%80%82"},"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData\u3002")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/c312699/src/core/BufferAttribute.ts#L184"},"src/core/BufferAttribute.ts:184")))}c.isMDXComponent=!0}}]);