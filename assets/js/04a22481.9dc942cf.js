"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[1329],{8570:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(79);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),f=n,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=a(7583),n=a(2475),i=(a(79),a(8570)),l=["components"],s={id:"start",title:"Introduction (\u7b80\u4ecb)",slug:"/"},p=void 0,o={unversionedId:"intro/start",id:"intro/start",title:"Introduction (\u7b80\u4ecb)",description:"vis-engine \u662f\u4e00\u4e2a\u7b80\u5355\u7684 webgl \u6e32\u67d3\u5f15\u64ce\u5de5\u5177\u5305\uff0c\u5b83\u7684\u8bbe\u8ba1\u53d7\u5230\u4e86 threejs \u548c ogl \u7684\u542f\u53d1\u3002",source:"@site/docs/intro/start.md",sourceDirName:"intro",slug:"/",permalink:"/vis-engine/docs/",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/docs/intro/start.md",tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1678692004,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"start",title:"Introduction (\u7b80\u4ecb)",slug:"/"},sidebar:"docs",next:{title:"Try vis-engine",permalink:"/vis-engine/docs/intro/try"}},c={},m=[{value:"Use cases",id:"use-cases",level:3}],u={toc:m};function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"vis-engine")," \u662f\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"webgl")," \u6e32\u67d3\u5f15\u64ce\u5de5\u5177\u5305\uff0c\u5b83\u7684\u8bbe\u8ba1\u53d7\u5230\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/"},"threejs")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oframe/ogl"},"ogl")," \u7684\u542f\u53d1\u3002"),(0,i.kt)("p",null,"\u5b83\u7684\u5b9a\u4f4d\u4ecb\u4e8e WebGL \u5c01\u88c5\u548c\u6e32\u67d3\u5f15\u64ce\u4e4b\u95f4\uff0c\u5305\u542b\u4e86\u76f8\u673a\uff0cMesh \u548c Shader \u6a21\u5757\u5316\u4ee5\u53ca webgl \u72b6\u6001\u7ba1\u7406\u3002"),(0,i.kt)("h3",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Use cases for vis-engine include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Box"},"Box")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/BufferAttribute"},"BufferAttribute")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Camera"},"Camera")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Clock"},"Clock")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Color"},"Color")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/DataTexture"},"DataTexture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Euler"},"Euler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/EventEmitter"},"EventEmitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Geometry"},"Geometry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Matrix3"},"Matrix3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Matrix4"},"Matrix4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Mesh"},"Mesh")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Object3D"},"Object3D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/OrthographicCamera"},"OrthographicCamera")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/PerspectiveCamera"},"PerspectiveCamera")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Plane"},"Plane")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Program"},"Program")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/ProjectionMatrix"},"ProjectionMatrix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Quaternion"},"Quaternion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Raf"},"Raf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/RenderBuffer"},"RenderBuffer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/RenderTarget"},"RenderTarget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Renderer"},"Renderer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Resource"},"Resource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Scene"},"Scene")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/State"},"State")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Texture"},"Texture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Texture3D"},"Texture3D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Vector2"},"Vector2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Vector3"},"Vector3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/classes/Vector4"},"Vector4"))))}f.isMDXComponent=!0}}]);