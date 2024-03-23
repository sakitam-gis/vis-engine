"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[33],{3224:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(5250),r=t(3274);const s={id:"gltf",title:"Draw GLTF"},c=void 0,o={id:"playground/gltf",title:"Draw GLTF",description:"\u5c55\u793a GLTF \u6a21\u578b\uff0cGLTFLoader \u5b9e\u73b0\u5728\u8fd9\u91cc\u3002",source:"@site/docs/playground/gltf.mdx",sourceDirName:"playground",slug:"/playground/gltf",permalink:"/vis-engine/docs/playground/gltf",draft:!1,unlisted:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/docs/playground/gltf.mdx",tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1711204798,formattedLastUpdatedAt:"Mar 23, 2024",frontMatter:{id:"gltf",title:"Draw GLTF"},sidebar:"docs",previous:{title:"Draw Cloud",permalink:"/vis-engine/docs/playground/clouds"},next:{title:"Draw Mesh with mapbox-gl",permalink:"/vis-engine/docs/playground/mapbox-mesh"}},i={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}];function d(n){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["\u5c55\u793a GLTF \u6a21\u578b\uff0c",(0,a.jsx)(e.a,{href:"https://github.com/sakitam-gis/vis-engine/blob/master/documents/src/components/GLTFLoader.ts",children:"GLTFLoader"})," \u5b9e\u73b0\u5728\u8fd9\u91cc\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'function render(props) {\n  const refDom = useRef(null);\n  const cameraRef = useRef(null);\n  const renderRef = useRef(null);\n\n  const store = leva.useCreateStore();\n\n  const fov = 45;\n  const nearZ = 0.006360928308397327;\n\n  const farZ = 6.360928308397327;\n\n  const config = {\n    fov: {\n      value: fov,\n      min: -180,\n      max: 180,\n      step: 1,\n      onChange: (f) => {\n        if (cameraRef.current) {\n          cameraRef.current.fov = f;\n        }\n      },\n    },\n    nearZ: {\n      value: nearZ,\n      min: -50,\n      max: 50,\n      step: 0.1,\n      onChange: (n) => {\n        if (cameraRef.current) {\n          cameraRef.current.near = n;\n        }\n      },\n    },\n    farZ: {\n      value: farZ,\n      min: -10,\n      max: 10,\n      step: 0.01,\n      onChange: (f) => {\n        if (cameraRef.current) {\n          cameraRef.current.far = f;\n        }\n      },\n    },\n    cameraPosition: {\n      value: [1.4605831301690517, 0.34327992612869196, 2.25837676990454],\n      onChange: (p) => {\n        if (cameraRef.current) {\n          // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n          // @ts-ignore\n          cameraRef.current.position.set(...p);\n        }\n      },\n    },\n  };\n\n  leva.useControls(config, {\n    store: store,\n  });\n\n  const loadGLTF = async (\n    file = \'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb\',\n  ) => {\n    const data = await GLTFLoader.load(renderRef.current, file);\n\n    return data;\n  };\n\n  const init = () => {\n    const canvas = refDom.current;\n\n    canvas.width = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n    const renderer = new ve.Renderer(canvas, {\n      alpha: true,\n    });\n\n    renderRef.current = renderer;\n\n    const camera = new ve.PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);\n    camera.position.set(1.4605831301690517, 0.34327992612869196, 2.25837676990454);\n    camera.rotation.set(-0.11987760646305476, 0.5391393785270148, -6.989052372931176e-18);\n    camera.quaternion.set(\n      -0.057739560789469936,\n      0.265838441571165,\n      0.0159531473635754,\n      0.9621546461936613,\n    );\n\n    cameraRef.current = camera;\n\n    function resize(target) {\n      const { width, height } = target.getBoundingClientRect();\n      renderer.setSize(width, height);\n      camera.aspect = width / height;\n    }\n\n    const scene = new ve.Scene();\n\n    loadGLTF().then((gltfObject) => {\n      scene.children.forEach((child) => child.setParent(null));\n\n      const s = gltfObject.scene || gltfObject.scenes[0];\n      s.forEach((root) => {\n        root.setParent(scene);\n      });\n\n      scene.updateMatrixWorld();\n\n      const raf = new ve.Raf(() => {\n        scene.rotation.y -= 0.02;\n        renderer.render({ scene, camera });\n      });\n    });\n\n    return {\n      canvas,\n      resize,\n    }\n  }\n\n  useEffect(() => {\n    const { canvas, resize } = init();\n\n    observe(canvas, resize);\n\n    return () => {\n      unobserve(canvas, resize);\n    };\n  }, []);\n\n  return (\n    <div className="live-wrap">\n      <div className="leva-wrap">\n        <Leva\n          collapsed\n          fill\n        ></Leva>\n        <LevaPanel collapsed store={store} fill></LevaPanel>\n      </div>\n      <canvas className="scene-canvas" ref={refDom}></canvas>\n    </div>\n  );\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},3274:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>c});var a=t(79);const r={},s=a.createContext(r);function c(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);