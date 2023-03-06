"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[9624],{8570:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(79);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(t),u=o,h=l["".concat(c,".").concat(u)]||l[u]||d[u]||a;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=t(7583),o=t(2475),a=(t(79),t(8570)),i=["components"],s={id:"mapbox-box-mesh",title:"Draw Box Mesh with mapbox-gl"},c=void 0,p={unversionedId:"playground/mapbox-box-mesh",id:"playground/mapbox-box-mesh",title:"Draw Box Mesh with mapbox-gl",description:"\u7ed3\u5408 mapbox-gl \u7684\u81ea\u5b9a\u4e49\u56fe\u5c42\u6e32\u67d3 Box Mesh\uff0c\u6b64\u5b9e\u4f8b\u5b9e\u73b0\u4e86\u4e00\u4e0b\u51e0\u4e2a\u7279\u6027\uff1a",source:"@site/docs/playground/mapbox-box-mesh.mdx",sourceDirName:"playground",slug:"/playground/mapbox-box-mesh",permalink:"/vis-engine/docs/playground/mapbox-box-mesh",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/docs/playground/mapbox-box-mesh.mdx",tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1678119405,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{id:"mapbox-box-mesh",title:"Draw Box Mesh with mapbox-gl"},sidebar:"docs",previous:{title:"Draw Mesh with mapbox-gl",permalink:"/vis-engine/docs/playground/mapbox-mesh"},next:{title:"Draw GLTF with mapbox-gl",permalink:"/vis-engine/docs/playground/mapbox-gltf"}},m={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],d={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ed3\u5408 mapbox-gl \u7684\u81ea\u5b9a\u4e49\u56fe\u5c42\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Box Mesh"),"\uff0c\u6b64\u5b9e\u4f8b\u5b9e\u73b0\u4e86\u4e00\u4e0b\u51e0\u4e2a\u7279\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 RTC \u89e3\u51b3\u5927\u5c42\u7ea7\u4e0b\u56fe\u5f62\u6296\u52a8\u95ee\u9898\u3002")),(0,a.kt)("p",null,"RTC \u6211\u4eec\u4e00\u822c\u4f1a\u901a\u8fc7\u4f20\u5165\u7684\u9876\u70b9\u6570\u636e\u8ba1\u7b97\u56fe\u5f62\u5305\u56f4\u76d2\u7684\u4e2d\u5fc3\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"geometry.bounds.center"),"\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function projectToWorld (coords) {\n  let i = 0;\n  const len = coords.length;\n  const position = [];\n  for (; i < len; i++) {\n    const coord = coords[i];\n    const mc = mbve.fromLngLat({\n      lng: coord[0],\n      lat: coord[1],\n    }, coord[2]);\n    position.push(mc.x, mc.y, mc.z);\n  }\n\n  return position;\n}\n\nconst coordinates = [\n  [90.65864059134882, 39.7373406540633],\n  [102.51084435117338, 24.846755709924764],\n  [114.46396935117377, 39.232415634606724],\n];\n\nconst position = projectToWorld(coordinates);\n\nconst geometry = new Geometry(renderer, {\n  position: {\n    size: 3,\n    data: new Float32Array(position),\n  },\n});\n\n// \u6ce8\u610f\u8fd9\u91cc\u901a\u8fc7\u5916\u90e8\u4f20\u5165\u9876\u70b9\u6570\u636e\u4ee5\u63d0\u9ad8\u8ba1\u7b97\u7ecf\u5ea6\uff0c\u5982\u679c\u4e0d\u4f20\u7684\u8bdd\u4f1a\u4f7f\u7528 32 \u4f4d\u6d6e\u70b9\u6570\u8fdb\u884c\u8ba1\u7b97\uff0c\u7cbe\u5ea6\u53ef\u80fd\u6709\u4e00\u5b9a\u635f\u5931\u3002\ngeometry.computeBoundingSphere(position);\nconst center = geometry.bounds.center.toArray();\n\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c06\u5404\u9876\u70b9\u6570\u636e\u51cf\u53bb\u4e2d\u5fc3\u70b9\u5f97\u5230\u4e00\u4e2a\u76f8\u5bf9\u5750\u6807"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0;\nconst len = position.length;\nfor (; i < len; i += 3) {\n  position[i] = position[i] - center[0];\n  position[i + 1] = position[i + 1] - center[1];\n  position[i + 2] = position[i + 2] - center[2];\n}\n\ngeometry.setAttributeData('position', new Float32Array(position));\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c06\u6a21\u578b\u7684\u4f4d\u7f6e\u8bbe\u7f6e\u4e3a\u4e2d\u5fc3\u70b9\u4ee5\u4fbf\u4e8e\u8ba1\u7b97\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"modelMatrix")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mesh.position.set(center[0], center[1], center[2]);\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6a21\u578b\u7684\u57fa\u51c6\u4f4d\u7f6e\u662f\u4ee5\u5305\u56f4\u76d2\u7684\u4e2d\u5fc3\u70b9\u4e3a\u951a\u70b9\uff0c\u5e38\u89c4\u60c5\u51b5\u4e0b\u95ee\u9898\u4e0d\u5927\uff0c\u4f46\u662f\u4ee5\u672c\u793a\u4f8b\u6765\u8bf4\u5982\u679c\u6a21\u578b\u771f\u5b9e\u9ad8\u5ea6\u4e3a 0\uff0c\u90a3\u4e48\u76f8\u5f53\u4e8e\u6a21\u578b\u7684\u4e00\u534a\u5728\u5730\u9762\u4ee5\u4e0b\uff0c\u5728\u65e0\u5730\u5f62\n\u7684\u60c5\u51b5\u4e0b\u5c55\u793a\u4f1a\u6709\u95ee\u9898\uff08\u6df1\u5ea6\u6d4b\u8bd5\uff09\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u80fd\u5e0c\u671b\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," \u7684\u5e95\u90e8\u4e3a\u951a\u70b9\uff0c\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u8c03\u6574\u6a21\u578b\u7684\u4f4d\u7f6e\u5c06 Z \u8f74\u62d4\u9ad8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mesh.position.set(center[0], center[1], center[2] + mbve.mercatorZfromAltitude(500, 45.39701));\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6df1\u5ea6\u6d4b\u8bd5\u4e0e mapbox \u5730\u5f62\u7684\u7ed3\u5408\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u76d2\u5b50\u7c73\u5236\u5355\u4f4d\u7f29\u653e\u5230 mapbox \u58a8\u5361\u6258\u5355\u4f4d\u3002")),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  const refDom = useRef(null);\n\n  const store = leva.useCreateStore();\n\n  class MeshLayer {\n    constructor (id) {\n      this.id = id;\n      this.type = 'custom';\n      this.renderingMode = '3d';\n    }\n\n    get camera () {\n      return this.sync.camera;\n    }\n\n    updateCamera() {\n      this.sync.update();\n    }\n\n    projectToWorld (coords) {\n      let i = 0;\n      const len = coords.length;\n      const position = [];\n      for (; i < len; i++) {\n        const coord = coords[i];\n        const mc = mbve.fromLngLat({\n          lng: coord[0],\n          lat: coord[1],\n        }, coord[2]);\n        position.push(mc.x, mc.y, mc.z);\n      }\n\n      return position;\n    }\n\n    onAdd (map, gl) {\n      this.renderer = new Renderer(gl, {\n        autoClear: false,\n      });\n      this.scene = new Scene();\n      this.sync = new mbve.CameraSync(map, 'perspective', this.scene);\n      this.updateCamera = this.updateCamera.bind(this);\n      map.on('move', this.updateCamera);\n      map.on('resize', this.updateCamera);\n\n      const geometry = new Box(this.renderer, {\n        width: 1000,\n        height: 1000,\n        depth: 1000,\n\n        widthSegments: 1,\n        heightSegments: 1,\n        depthSegments: 1,\n      });\n\n      this.program = new Program(this.renderer, {\n        vertexShader: `\n      attribute vec2 uv;\n      attribute vec3 position;\n      uniform vec3 cameraPosition;\n      uniform mat4 viewMatrix;\n      uniform mat4 modelMatrix;\n      uniform mat4 modelViewMatrix;\n      uniform mat4 projectionMatrix;\n\n      varying vec2 vUv;\n\n      void main() {\n          vUv = uv;\n\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n      `,\n        fragmentShader: `\n      precision highp float;\n    uniform float uTime;\n    varying vec2 vUv;\n    void main() {\n        gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);\n        gl_FragColor.a = 1.0;\n    }\n      `,\n        uniforms: {\n          uTime: { value: 0.5 },\n        },\n      });\n\n      this.mesh = new Mesh(this.renderer, {\n        geometry,\n        program: this.program,\n        wireframe: false,\n      });\n      const coords = [6.58968, 45.39701, 1913.2236908406628];\n      const center = this.projectToWorld([\n        coords,\n      ]);\n      // this.mesh.position.set(center[0], center[1], center[2] + mercatorZfromAltitude(500, 45.39701));\n      this.mesh.position.set(center[0], center[1], center[2]);\n      const s = mbve.meterInMercatorCoordinateUnits(center[1]);\n      this.mesh.scale.set(s, s, s);\n      this.mesh.position.set(...center)\n\n      this.scene.add(this.mesh);\n\n      this.updateCamera();\n    }\n\n    onRemove () {\n      this.mesh.destroy();\n      this.program.destroy();\n    }\n\n    prerender () {\n    }\n\n    render () {\n      this.scene.worldMatrixNeedsUpdate = true;\n      this.renderer.render({\n        scene: this.scene,\n        camera: this.camera,\n      });\n      this.renderer.resetState(false);\n    }\n  }\n\n  const init = () => {\n    mapboxgl.accessToken = 'pk.eyJ1IjoidTEwaW50IiwiYSI6InQtMnZvTkEifQ.c8mhXquPE7_xoB3P4Ag8cA';\n    const map = new mapboxgl.Map({\n      container: refDom.current,\n      zoom: 12,\n      center: [6.58968, 45.39701],\n      pitch: 45,\n      bearing: 0,\n      style: 'mapbox://styles/mapbox/satellite-streets-v12',\n      antialias: true,\n      projection: 'mercator',\n      // projection: 'globe',\n    });\n    map.on('load', () => {\n      map.addSource('mapbox-dem', {\n        'type': 'raster-dem',\n        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',\n        'tileSize': 512,\n        'maxzoom': 14\n      });\n      // add the DEM source as a terrain layer with exaggerated height\n      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1 });\n      const layer = new MeshLayer('mesh');\n      map.addLayer(layer);\n      window.layer = layer;\n    });\n\n    window.map = map;\n\n    return map;\n  }\n\n  useEffect(() => {\n    const map = init();\n\n    return () => {\n      console.log(map);\n    };\n  }, []);\n\n  return (\n    <div className=\"live-wrap\">\n      <div className=\"leva-wrap\">\n        <Leva\n          collapsed\n          fill\n        ></Leva>\n        <LevaPanel collapsed store={store} fill></LevaPanel>\n      </div>\n      <div className=\"scene-canvas\" ref={refDom}></div>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0}}]);