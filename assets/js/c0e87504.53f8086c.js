"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[163],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||f[k]||a;return n?i.createElement(c,l(l({ref:t},u),{},{components:n})):i.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var i=n(7583),r=n(2475),a=(n(79),n(8570)),l=["components"],p={id:"Attribute",title:"Interface: Attribute",sidebar_label:"Attribute",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"api/interfaces/Attribute",id:"api/interfaces/Attribute",title:"Interface: Attribute",description:"Properties",source:"@site/docs/api/interfaces/Attribute.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Attribute",permalink:"/vis-engine/docs/api/interfaces/Attribute",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1676382941,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:0,frontMatter:{id:"Attribute",title:"Interface: Attribute",sidebar_label:"Attribute",sidebar_position:0,custom_edit_url:null}},u={},s=[{value:"Properties",id:"properties",level:2},{value:"buffer",id:"buffer",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"count",id:"count",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"divisor",id:"divisor",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"needsUpdate",id:"needsupdate",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"normalized",id:"normalized",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"offset",id:"offset",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"size",id:"size",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"stride",id:"stride",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"usage",id:"usage",level:3},{value:"Defined in",id:"defined-in-11",level:4}],f={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"buffer"},"buffer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"buffer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLBuffer")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebGLBuffer"),"\uff0c\u4e00\u822c\u6211\u4eec\u4e0d\u9700\u8981\u6307\u5b9a\uff0c\u4f1a\u5728\u5185\u90e8\u8fdb\u884c\u521b\u5efa"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L78"},"src/core/BufferAttribute.ts:78")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"count"},"count"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"count"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u9876\u70b9\u6570\u91cf"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L62"},"src/core/BufferAttribute.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("a",{parentName:"p",href:"../#datatype"},(0,a.kt)("inlineCode",{parentName:"a"},"DataType"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Attribute")," \u6570\u636e\uff0c\u5fc5\u987b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedArray")," \u7c7b\u578b"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L23"},"src/core/BufferAttribute.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"divisor"},"divisor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"divisor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a\u5b9e\u4f8b\u5316\u6e32\u67d3\u7684\u6570\u91cf\uff0c\u4ec5\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"ANGLE_instanced_arrays")," \u6269\u5c55\u53ef\u7528\u65f6\u624d\u652f\u6301\u6b64\u53c2\u6570\uff0c\u5728\n",(0,a.kt)("inlineCode",{parentName:"p"},"webgl2")," \u4e2d\u9ed8\u8ba4\u652f\u6301\uff0c\u8c03\u7528\u51fd\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"vertexAttribDivisor")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L47"},"src/core/BufferAttribute.ts:47")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"needsupdate"},"needsUpdate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"needsUpdate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6807\u8bb0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute")," \u662f\u5426\u9700\u8981\u91cd\u65b0\u4e0a\u4f20 ",(0,a.kt)("inlineCode",{parentName:"p"},"GPU"),"\uff0c\u4e00\u822c\u6211\u4eec\u5728\u6570\u636e\u6539\u53d8\u65f6\u9700\u8981\u5c06\u6b64\u503c\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L83"},"src/core/BufferAttribute.ts:83")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"normalized"},"normalized"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"normalized"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\u6307\u5b9a\u5f53\u6574\u6570\u503c\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\u65f6\u662f\u5426\u5e94\u8be5\u5c06\u6574\u6570\u6570\u503c\u5f52\u4e00\u5316\u5230\u7279\u5b9a\u7684\u8303\u56f4\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"gl.BYTE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"gl.SHORT"),"\uff0c\u5f53\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u65f6\uff0c\u5f52\u4e00\u5316\u5230 ","[-1, 1]","\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"gl.UNSIGNED_BYTE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"gl.UNSIGNED_SHORT"),"\uff0c\u5f53\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u65f6\uff0c\u5f52\u4e00\u5316\u5230 ","[0, 1]","\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"gl.FLOAT")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"gl.HALF_FLOAT"),"\uff0c\u6b64\u53c2\u6570\u65e0\u6548\u3002")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L41"},"src/core/BufferAttribute.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"offset"},"offset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"offset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a\u9876\u70b9\u5c5e\u6027\u6570\u7ec4\u4e2d\u7b2c\u4e00\u90e8\u5206\u7684\u5b57\u8282\u504f\u79fb\u91cf\u3002\u5fc5\u987b\u662f\u7c7b\u578b\u7684\u5b57\u8282\u957f\u5ea6\u7684\u500d\u6570"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L57"},"src/core/BufferAttribute.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"size"},"size"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"size"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a\u7f13\u51b2\u533a\u6bcf\u4e2a\u9876\u70b9\u5206\u91cf\u7684\u4e2a\u6570, \u4e00\u822c\u4e3a 1-4"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L28"},"src/core/BufferAttribute.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stride"},"stride"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stride"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u6307\u5b9a\u8fde\u7eed\u9876\u70b9\u5c5e\u6027\u5f00\u59cb\u4e4b\u95f4\u7684\u504f\u79fb\u91cf(\u5373\u6570\u7ec4\u4e2d\u4e00\u884c\u957f\u5ea6)"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L52"},"src/core/BufferAttribute.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a\u7f13\u51b2\u533a\u5bf9\u8c61\uff0c\u5e38\u7528\u7684\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gl.ARRAY_BUFFER")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.ELEMENT_ARRAY_BUFFER"),"\u3002\u5f53\u7136\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"webgl2")," \u4e2d\u6709\u4e00\u4e9b\u65b0\u7684\u53ef\u7528\u503c\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.UNIFORM_BUFFER"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.TRANSFORM_FEEDBACK_BUFFER"),"\u3002"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L67"},"src/core/BufferAttribute.ts:67")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6307\u5b9a\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e00\u822c\u6211\u4eec\u4e0d\u4f20\u65f6\u4f1a\u7531\u5185\u90e8\u8fdb\u884c\u5224\u65ad\u3002"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L33"},"src/core/BufferAttribute.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usage"},"usage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"usage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\u6807\u8bb0\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u6570\u636e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"webgl")," \u4f1a\u9488\u5bf9\u6027\u7684\u505a\u4e00\u4e9b\u4f18\u5316\uff0c\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"gl.STATIC_DRAW"),"\uff0c\u5373\u6807\u8bb0\u6570\u636e\u4e0d\u4f1a\u7ecf\u5e38\u6027\u6539\u53d8\u3002\n\u5176\u4ed6\u53ef\u7528\u503c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData%E3%80%82"},"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData\u3002")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sakitam-gis/vis-engine/blob/f3ee066/src/core/BufferAttribute.ts#L73"},"src/core/BufferAttribute.ts:73")))}k.isMDXComponent=!0}}]);