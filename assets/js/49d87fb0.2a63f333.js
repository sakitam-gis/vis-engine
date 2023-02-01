"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[9003],{8570:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>v});var r=t(79);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),d=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=d(n.components);return r.createElement(c.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),u=d(t),p=a,v=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return t?r.createElement(v,i(i({ref:e},l),{},{components:t})):r.createElement(v,i({ref:e},l))}));function v(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[u]="string"==typeof n?n:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6573:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=t(7583),a=t(2475),o=(t(79),t(8570)),i=["components"],s={id:"instancing",title:"Draw instance"},c=void 0,d={unversionedId:"playground/instancing",id:"playground/instancing",title:"Draw instance",description:"\u8fd9\u4e2a\u5b9e\u4f8b\u4e3b\u8981\u5c55\u793a\u4e86\u5f15\u64ce\u5b9e\u4f8b\u5316\u6e32\u67d3\u5982\u4f55\u4f7f\u7528\u3002",source:"@site/docs/playground/instancing.mdx",sourceDirName:"playground",slug:"/playground/instancing",permalink:"/vis-engine/docs/playground/instancing",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/docs/playground/instancing.mdx",tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1675273812,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"instancing",title:"Draw instance"},sidebar:"docs",previous:{title:"Draw Texture",permalink:"/vis-engine/docs/playground/texture"},next:{title:"Draw Plane Geometry",permalink:"/vis-engine/docs/playground/plane"}},l={},u=[{value:"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b",id:"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b",level:3}],m={toc:u};function p(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5b9e\u4f8b\u4e3b\u8981\u5c55\u793a\u4e86\u5f15\u64ce\u5b9e\u4f8b\u5316\u6e32\u67d3\u5982\u4f55\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"},"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  const drawModelVertex = `\n    attribute vec2 uv;\n    attribute vec3 position;\n    // Add instanced attributes just like any attribute\n    attribute vec3 offset;\n    attribute vec3 random;\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n    uniform float uTime;\n    varying vec2 vUv;\n    varying vec3 vNormal;\n\n    void rotate2d(inout vec2 v, float a){\n        mat2 m = mat2(cos(a), -sin(a), sin(a),  cos(a));\n        v = m * v;\n    }\n\n    void main() {\n        vUv = uv;\n\n        // copy position so that we can modify the instances\n        vec3 pos = position;\n\n        // scale first\n        pos *= 0.9 + random.y * 0.2;\n\n        // rotate around y axis\n        rotate2d(pos.xz, random.x * 6.28 + 4.0 * uTime * (random.y - 0.5));\n\n        // rotate around x axis just to add some extra variation\n        rotate2d(pos.zy, random.z * 0.5 * sin(uTime * random.x + random.z * 3.14));\n\n        pos += offset;\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    }\n    `;\n\n  const drawModelFragment = `\n    precision highp float;\n\n    uniform float uTime;\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        vec3 tex = texture2D(tMap, vUv).rgb;\n\n        gl_FragColor.rgb = tex;\n        gl_FragColor.a = 1.0;\n    }\n    `;\n\n  const refDom = useRef(null);\n\n  const store = leva.useCreateStore();\n\n  const fov = 15;\n  const nearZ = 0.1;\n\n  const farZ = 100;\n\n  // const { name, aNumber } = leva.useControls({ name: 'World1', aNumber: 2 }, { store });\n\n  const image = useBaseUrl('/assets/acorn.jpg');\n  const json = useBaseUrl('/assets/acorn.json');\n\n  const init = () => {\n    const canvas = refDom.current;\n\n    canvas.width = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n    const renderer = new Renderer(canvas, {\n      alpha: true,\n    });\n\n    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);\n    camera.position.z = 15;\n\n    function resize(target) {\n      const { width, height } = target.getBoundingClientRect();\n      renderer.setSize(width, height);\n      camera.aspect = width / height;\n    }\n\n    const scene = new Scene();\n\n    const texture = new Texture(renderer, {\n      flipY: true,\n    });\n\n    texture.fromSrc(image);\n\n    const program = new Program(renderer, {\n      vertexShader: drawModelVertex,\n      fragmentShader: drawModelFragment,\n      uniforms: {\n        uTime: { value: 0 },\n        tMap: { value: texture },\n      },\n      cullFace: renderer.gl.BACK,\n    });\n\n    const num = 60;\n\n    fetch(json).then(res => res.json()).then((data) => {\n      let offset = new Float32Array(num * 3);\n      let random = new Float32Array(num * 3);\n      for (let i = 0; i < num; i++) {\n        offset.set([Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1], i * 3);\n\n        // unique random values are always handy for instances.\n        // Here they will be used for rotation, scale and movement.\n        random.set([Math.random(), Math.random(), Math.random()], i * 3);\n      }\n\n      const geometry = new Geometry(renderer, {\n        position: { size: 3, data: new Float32Array(data.position) },\n        uv: { size: 2, data: new Float32Array(data.uv) },\n        normal: { size: 3, data: new Float32Array(data.normal) },\n\n        // simply add the 'instanced' property to flag as an instanced attribute.\n        // set the value as the divisor number\n        offset: { divisor: 1, size: 3, data: offset },\n        random: { divisor: 1, size: 3, data: random },\n      });\n\n      const mesh = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });\n      mesh.setParent(scene);\n\n      const raf = new Raf((t) => {\n        if (mesh) mesh.rotation.y -= 0.005;\n        program.setUniform('uTime', t)\n        renderer.render({ scene, camera });\n      });\n    });\n\n    return {\n      canvas,\n      resize,\n    }\n  }\n\n  useEffect(() => {\n    const { canvas, resize } = init();\n\n    observe(canvas, resize);\n\n    return () => {\n      unobserve(canvas, resize);\n    };\n  }, []);\n\n  return (\n    <div className=\"live-wrap\">\n      <div className=\"leva-wrap\">\n        <Leva\n          fill\n        ></Leva>\n        <LevaPanel store={store} fill></LevaPanel>\n      </div>\n      <canvas className=\"scene-canvas\" ref={refDom}></canvas>\n    </div>\n  );\n}\n")))}p.isMDXComponent=!0}}]);