"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[3733],{8570:(n,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>p});var t=r(79);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var c=t.createContext({}),l=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},u=function(n){var e=l(n.components);return t.createElement(c.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),d=l(r),f=a,p=d["".concat(c,".").concat(f)]||d[f]||m[f]||o;return r?t.createElement(p,s(s({ref:e},u),{},{components:r})):t.createElement(p,s({ref:e},u))}));function p(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[d]="string"==typeof n?n:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6392:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(7583),a=r(2475),o=(r(79),r(8570)),s=["components"],i={id:"clouds",title:"Draw Cloud"},c=void 0,l={unversionedId:"playground/clouds",id:"playground/clouds",title:"Draw Cloud",description:"\u4e00\u4e2a\u7b80\u5355\u7684\u4e91\u4f53\u6e32\u67d3\u793a\u4f8b\uff0c\u8fd9\u91cc\u4e3b\u8981\u7528\u5230\u4e86\u5b9e\u4f8b\u5316\u6e32\u67d3\u6280\u672f\u3002",source:"@site/docs/playground/clouds.mdx",sourceDirName:"playground",slug:"/playground/clouds",permalink:"/vis-engine/docs/playground/clouds",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/docs/playground/clouds.mdx",tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1676382941,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"clouds",title:"Draw Cloud"},sidebar:"docs",previous:{title:"Draw Box Volume Geometry",permalink:"/vis-engine/docs/playground/box-volume"},next:{title:"Draw GLTF",permalink:"/vis-engine/docs/playground/gltf"}},u={},d=[{value:"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b",id:"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b",level:3}],m={toc:d};function f(n){var e=n.components,r=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u4e91\u4f53\u6e32\u67d3\u793a\u4f8b\uff0c\u8fd9\u91cc\u4e3b\u8981\u7528\u5230\u4e86\u5b9e\u4f8b\u5316\u6e32\u67d3\u6280\u672f\u3002"),(0,o.kt)("h3",{id:"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"},"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  const drawVertex = `attribute vec2 uv;\n    attribute vec3 position;\n\n    attribute vec3 offset;\n    attribute vec3 random;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n    varying vec2 vUv;\n\n    void rotate2d(inout vec2 v, float a){\n        mat2 m = mat2(cos(a), -sin(a), sin(a),  cos(a));\n        v = m * v;\n    }\n\n    void main() {\n        vUv = uv;\n\n        // copy position so that we can modify the instances\n        vec3 pos = position;\n\n        pos *= 0.5 + random.z * random.z * 1.5;\n\n        // rotate around y axis\n        rotate2d(pos.xz, random.y / 2.0);\n\n        // rotate around x axis just to add some extra variation\n        rotate2d(pos.zy, random.x * 3.14);\n\n        pos += offset;\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    }\n    `;\n\n  const drawFragment = `precision highp float;\n\n    uniform sampler2D texture;\n    uniform vec3 u_fogColor;\n    uniform float u_fogNear;\n    uniform float u_fogFar;\n\n    varying vec2 vUv;\n\n    void main() {\n      float depth = gl_FragCoord.z / gl_FragCoord.w;\n      float fogFactor = smoothstep(u_fogNear, u_fogFar, depth);\n      vec4 tex = texture2D(texture, vUv);\n      gl_FragColor = tex;\n      gl_FragColor.w *= pow(gl_FragCoord.z, 20.0);\n            gl_FragColor = mix(gl_FragColor, vec4(u_fogColor, gl_FragColor.w), fogFactor);\n            // gl_FragColor = vec4(0.5, 1.0, 0.5, 1.0);\n    }\n    `;\n\n  const refDom = useRef(null);\n  const meshRef = useRef(null);\n  const cameraRef = useRef(null);\n  const renderRef = useRef(null);\n  const mousePos = useRef([0, 0]);\n\n  const store = leva.useCreateStore();\n\n  const fov = 30;\n  const nearZ = 1;\n\n  const farZ = 3000;\n\n  const config = {\n    fov: {\n      value: fov,\n      min: -50,\n      max: 50,\n      step: 1,\n      onChange: (fov) => {\n        if (cameraRef.current) {\n          cameraRef.current.fov = fov;\n        }\n      },\n    },\n    nearZ: {\n      value: nearZ,\n      min: -50,\n      max: 50,\n      step: 0.1,\n      onChange: (nearZ) => {\n        if (cameraRef.current) {\n          cameraRef.current.near = nearZ;\n        }\n      },\n    },\n    farZ: {\n      value: farZ,\n      min: -500,\n      max: 500,\n      step: 1,\n      onChange: (farZ) => {\n        if (cameraRef.current) {\n          cameraRef.current.far = farZ;\n        }\n      },\n    },\n    cameraPosition: {\n      value: [0, 0, 15],\n      onChange: (p) => {\n        if (cameraRef.current) {\n          cameraRef.current.position.set(...p);\n        }\n      },\n    },\n    wireframe: {\n      value: false,\n      onChange: (p) => {\n        if (meshRef.current) {\n          meshRef.current.wireframe = p;\n        }\n      },\n    }\n  };\n\n  leva.useControls(config, {\n    store: store,\n  });\n\n  const image = useBaseUrl('/assets/cloud.png');\n\n  const init = () => {\n    const canvas = refDom.current;\n\n    canvas.width = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n    const renderer = new Renderer(canvas, {\n      alpha: true,\n      antialias: true,\n      premultipliedAlpha: true,\n    });\n\n    renderer.state.setClearColor(new Color(0, 0, 0, 0));\n\n    renderRef.current = renderer;\n\n    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);\n    cameraRef.current = camera;\n\n    function resize(target) {\n      const { width, height } = target.getBoundingClientRect();\n      renderer.setSize(width, height);\n      camera.aspect = width / height;\n    }\n\n    const scene = new Scene();\n\n    const planeGeometry = new Plane(renderer, {\n      width: 64,\n      height: 64,\n\n      widthSegments: 1,\n      heightSegments: 1,\n    });\n\n    const texture = new Texture(renderer, {\n      flipY: true,\n      width: 256,\n      height: 256,\n      minFilter: renderer.gl.LINEAR_MIPMAP_LINEAR\n    });\n\n    texture.fromSrc(image);\n\n    const program = new Program(renderer, {\n      vertexShader: drawVertex,\n      fragmentShader: drawFragment,\n      uniforms: {\n        texture: {\n          value: texture,\n        },\n        u_fogColor: {\n          value: [0.27058823529411763, 0.5176470588235295, 0.7058823529411765],\n        },\n        u_fogNear: {\n          value: -100,\n        },\n        u_fogFar: {\n          value: 3000,\n        },\n      },\n      cullFace: renderer.gl.BACK,\n      depthTest: false,\n      depthWrite: false,\n      transparent: true,\n      blendFunc: {\n        src: renderer.gl.SRC_ALPHA,\n        dst: renderer.gl.ONE_MINUS_SRC_ALPHA,\n        srcAlpha: renderer.gl.ONE,\n        dstAlpha: renderer.gl.ONE_MINUS_SRC_ALPHA,\n      },\n      blendEquation: {\n        modeRGB: renderer.gl.FUNC_ADD,\n        modeAlpha: renderer.gl.FUNC_ADD,\n      },\n    });\n\n    const num = 1000;\n    let offset = new Float32Array(num * 3);\n    let random = new Float32Array(num * 3);\n    for (let i = 0; i < num; i++) {\n      offset.set([Math.random() * 1000 - 500, -Math.random() * Math.random() * 200 - 15, i], i * 3);\n\n      // unique random values are always handy for instances.\n      // Here they will be used for rotation, scale and movement.\n      random.set([Math.random(), Math.random(), Math.random()], i * 3);\n    }\n\n    const geometry = new Geometry(renderer, {\n      position: planeGeometry.attributesData.position,\n      uv: planeGeometry.attributesData.uv,\n      normal: planeGeometry.attributesData.normal,\n      index: planeGeometry.attributesData.index,\n      offset: { divisor: 1, size: 3, data: offset },\n      random: { divisor: 1, size: 3, data: random },\n    });\n\n    const mesh = new Mesh(renderer, {\n      mode: renderer.gl.TRIANGLES,\n      geometry,\n      program,\n    });\n    mesh.setParent(scene);\n\n    const plane = new Mesh(renderer, {\n      geometry,\n      program,\n      wireframe: false,\n    });\n    plane.setParent(scene);\n\n    meshRef.current = plane;\n\n    const raf = new Raf((t) => {\n      const position = t * 30 % 1000;\n      const [mouseX, mouseY] = mousePos.current;\n\n      camera.position.x += (mouseX - camera.position.x) * 0.01;\n      camera.position.y += (-mouseY - camera.position.y) * 0.01;\n      camera.position.z = -position + 1000;\n\n      renderer.render({ scene, camera });\n    });\n\n    return {\n      canvas,\n      resize,\n    }\n  }\n\n  function onDocumentMouseMove(event) {\n    if (!refDom.current) return;\n    const windowHalfX = refDom.current.clientWidth / 2;\n    const windowHalfY = refDom.current.clientHeight / 2;\n    const mouseX = (event.clientX - windowHalfX) * 0.25;\n    const mouseY = (event.clientY - windowHalfY) * 0.15;\n    mousePos.current = [mouseX, mouseY];\n  }\n\n  useEffect(() => {\n    const { canvas, resize } = init();\n\n    observe(canvas, resize);\n\n    document.addEventListener('mousemove', onDocumentMouseMove, false);\n\n    const cv = document.createElement('canvas');\n    cv.width = 32;\n    cv.height = window.innerHeight;\n\n    const ctx = cv.getContext('2d');\n\n    const gradient = ctx.createLinearGradient(0, 0, 0, cv.height);\n    gradient.addColorStop(0, '#1e4877');\n    gradient.addColorStop(0.5, '#4584b4');\n\n    ctx.fillStyle = gradient;\n    ctx.fillRect(0, 0, cv.width, cv.height);\n\n    canvas.style.background = 'url(' + cv.toDataURL('image/png') + ')';\n    canvas.style.backgroundSize = '32px 100%';\n\n    return () => {\n      unobserve(canvas, resize);\n      document.removeEventListener('mousemove', onDocumentMouseMove, false);\n    };\n  }, []);\n\n  return (\n    <div className=\"live-wrap\">\n      <div className=\"leva-wrap\">\n        <Leva\n          fill\n        ></Leva>\n        <LevaPanel collapsed store={store} fill></LevaPanel>\n      </div>\n      <canvas className=\"scene-canvas\" ref={refDom}></canvas>\n    </div>\n  );\n}\n")))}f.isMDXComponent=!0}}]);