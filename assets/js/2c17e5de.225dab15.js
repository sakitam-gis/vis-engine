"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[9085],{5797:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>h});var r=i(5250),s=i(3274);const d={id:"ITexture3DOptions",title:"Interface: ITexture3DOptions",sidebar_label:"ITexture3DOptions",sidebar_position:0,custom_edit_url:null},l=void 0,t={id:"api/interfaces/ITexture3DOptions",title:"Interface: ITexture3DOptions",description:"Properties",source:"@site/docs/api/interfaces/ITexture3DOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ITexture3DOptions",permalink:"/vis-engine/docs/api/interfaces/ITexture3DOptions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1705508335,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:0,frontMatter:{id:"ITexture3DOptions",title:"Interface: ITexture3DOptions",sidebar_label:"ITexture3DOptions",sidebar_position:0,custom_edit_url:null}},c={},h=[{value:"Properties",id:"properties",level:2},{value:"depth",id:"depth",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"flipY",id:"flipy",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"format",id:"format",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"generateMipmaps",id:"generatemipmaps",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"image",id:"image",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"internalFormat",id:"internalformat",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"level",id:"level",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"magFilter",id:"magfilter",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"minFilter",id:"minfilter",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"premultiplyAlpha",id:"premultiplyalpha",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"unpackAlignment",id:"unpackalignment",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"wrapR",id:"wrapr",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"wrapS",id:"wraps",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"wrapT",id:"wrapt",level:3},{value:"Defined in",id:"defined-in-16",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"depth",children:"depth"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"depth"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6307\u5b9a\u7eb9\u7406\u6df1\u5ea6\uff0c\u9ed8\u8ba4\u4e3a",(0,r.jsx)(n.code,{children:"0"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=95",children:"core/Texture3D.ts:95"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"flipy",children:"flipY"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"flipY"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bbe\u7f6e\u7eb9\u7406\u4e0a\u4f20\u65f6\u662f\u5426\u7ffb\u8f6c Y \u8f74\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=74",children:"core/Texture3D.ts:74"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"format",children:"format"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"format"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7eb9\u7406\u6570\u636e\u7684\u683c\u5f0f\uff0c\u5728 WebGL 1 \u4e2d\uff0c\u5b83\u5fc5\u987b\u4e0e internalformat \u76f8\u540c\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.RGBA"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.RGB"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.LUMINANCE"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.LUMINANCE_ALPHA"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=50",children:"core/Texture3D.ts:50"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"generatemipmaps",children:"generateMipmaps"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"generateMipmaps"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e\u662f\u5426\u542f\u7528 ",(0,r.jsx)(n.code,{children:"mipmap"}),"\uff0c\u9ed8\u8ba4\u4e3a",(0,r.jsx)(n.code,{children:"true"}),"\n",(0,r.jsx)(n.code,{children:"generateMipmaps"}),"\u4f1a\u81ea\u52a8\u751f\u6210\u82e5\u5e72\u5c0f\u5c3a\u5bf8\u7684\u7eb9\u7406\uff0c\u6839\u636e\u5f53\u524d\u4e09\u7ef4\u7269\u4f53\u5728\u5c4f\u5e55\u4e0a\u7684\u5927\u5c0f\u6765\u81ea\u52a8\u9009\u62e9\u6700\u5408\u9002\u7684\u5c3a\u5bf8\u3002\n\u4f7f\u7528",(0,r.jsx)(n.code,{children:"mipmap"}),"\u8981\u6c42\u7eb9\u7406\u7684\u957f\u5ea6\u548c\u5bbd\u5ea6\u5fc5\u987b\u662f2\u7684\u6574\u6570\u6b21\u5e42\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=69",children:"core/Texture3D.ts:69"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"height",children:"height"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"height"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"\u7eb9\u7406\u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=14",children:"core/Texture3D.ts:14"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"image",children:"image"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"image"}),": ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.p,{children:"\u7eb9\u7406\u6570\u636e"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=100",children:"core/Texture3D.ts:100"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"internalformat",children:"internalFormat"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"internalFormat"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u4e8e\u6307\u5b9a\u7eb9\u7406\u56fe\u50cf\u7684\u5185\u90e8\u683c\u5f0f\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.RGBA"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.RGB"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.ALPHA"})," \u7b49\u7b49"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=56",children:"core/Texture3D.ts:56"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"level",children:"level"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"level"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6307\u5b9amipmap\u7684\u7cbe\u7ec6\u5ea6\uff0c\u7ea7\u522b 0 \u662f\u57fa\u7840\u56fe\u50cf\u7ea7\u522b\uff0c\u7ea7\u522b n \u662f\u7b2c n \u4e2a mipmap \u7f29\u51cf\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=90",children:"core/Texture3D.ts:90"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"magfilter",children:"magFilter"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"magFilter"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7eb9\u7406\u653e\u5927\u65f6\u4f7f\u7528\u7684\u8fc7\u6ee4\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.NEAREST"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.LINEAR"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=20",children:"core/Texture3D.ts:20"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"minfilter",children:"minFilter"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"minFilter"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7eb9\u7406\u7f29\u5c0f\u65f6\u4f7f\u7528\u7684\u8fc7\u6ee4\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.NEAREST"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.LINEAR"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=26",children:"core/Texture3D.ts:26"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"premultiplyalpha",children:"premultiplyAlpha"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"premultiplyAlpha"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bbe\u7f6e\u7eb9\u7406\u4e0a\u4f20\u65f6\u662f\u5426\u9884\u4e58 ",(0,r.jsx)(n.code,{children:"alpha"})," \u503c\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=85",children:"core/Texture3D.ts:85"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6307\u5b9a\u7eb9\u7406\u6570\u636e\u7684\u6570\u636e\u7c7b\u578b\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.UNSIGNED_BYTE"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.FLOAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.UNSIGNED_SHORT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.UNSIGNED_INT"})," \u7b49\u7b49"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=62",children:"core/Texture3D.ts:62"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"unpackalignment",children:"unpackAlignment"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"unpackAlignment"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6307\u5b9a\u5185\u5b58\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u884c\u8d77\u70b9\u7684\u5bf9\u9f50\u8981\u6c42\u3002\n\u53ef\u80fd\u7684\u503c: 1, 2, 4, 8 (see ",(0,r.jsx)(n.a,{href:"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml",children:"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml"}),")"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=80",children:"core/Texture3D.ts:80"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"width",children:"width"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"width"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"\u7eb9\u7406\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=9",children:"core/Texture3D.ts:9"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"wrapr",children:"wrapR"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"wrapR"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6df1\u5ea6\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.REPEAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.MIRRORED_REPEAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.CLAMP_TO_EDGE"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=44",children:"core/Texture3D.ts:44"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"wraps",children:"wrapS"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"wrapS"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6c34\u5e73\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.REPEAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.MIRRORED_REPEAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.CLAMP_TO_EDGE"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=32",children:"core/Texture3D.ts:32"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"wrapt",children:"wrapT"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"wrapT"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5782\u76f4\u91c7\u6837\u7eb9\u7406\u65f6\u4f7f\u7528\u7684\u884c\u4e3a\u3002\n\u53ef\u80fd\u7684\u503c\uff1a",(0,r.jsx)(n.code,{children:"gl.REPEAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.MIRRORED_REPEAT"}),"\uff0c",(0,r.jsx)(n.code,{children:"gl.CLAMP_TO_EDGE"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-16",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at=8558d24#line=38",children:"core/Texture3D.ts:38"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3274:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var r=i(79);const s={},d=r.createContext(s);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);