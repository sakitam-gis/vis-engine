"use strict";(self.webpackChunkvis_engine_docs=self.webpackChunkvis_engine_docs||[]).push([[3847],{8570:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>h});var r=t(79);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},m="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),m=l(t),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(h,i(i({ref:e},p),{},{components:t})):r.createElement(h,i({ref:e},p))}));function h(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[m]="string"==typeof n?n:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7091:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=t(7583),a=t(2475),o=(t(79),t(8570)),i=["components"],s={id:"mapbox-mesh",title:"Draw Mesh with mapbox-gl"},c=void 0,l={unversionedId:"playground/mapbox-mesh",id:"playground/mapbox-mesh",title:"Draw Mesh with mapbox-gl",description:"\u7ed3\u5408 mapbox-gl \u7684\u81ea\u5b9a\u4e49\u56fe\u5c42\u6e32\u67d3 Mesh;",source:"@site/docs/playground/mapbox-mesh.mdx",sourceDirName:"playground",slug:"/playground/mapbox-mesh",permalink:"/vis-engine/docs/playground/mapbox-mesh",draft:!1,editUrl:"https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs/docs/playground/mapbox-mesh.mdx",tags:[],version:"current",lastUpdatedBy:"sakitam-fdd",lastUpdatedAt:1675535800,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{id:"mapbox-mesh",title:"Draw Mesh with mapbox-gl"},sidebar:"docs",previous:{title:"Draw GLTF",permalink:"/vis-engine/docs/playground/gltf"},next:{title:"Draw Box Mesh with mapbox-gl",permalink:"/vis-engine/docs/playground/mapbox-box-mesh"}},p={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],d={toc:m};function u(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7ed3\u5408 mapbox-gl \u7684\u81ea\u5b9a\u4e49\u56fe\u5c42\u6e32\u67d3 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mesh"),";"),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  const refDom = useRef(null);\n\n  const store = leva.useCreateStore();\n\n  class MeshLayer {\n    constructor (id) {\n      this.id = id;\n      this.type = 'custom';\n      this.renderingMode = '2d';\n    }\n\n    get camera () {\n      return this.sync.camera;\n    }\n\n    updateCamera() {\n      this.sync.update();\n    }\n\n    projectToWorld (coords) {\n      let i = 0;\n      const len = coords.length;\n      const position = new Float32Array(len * 3);\n      for (; i < len; i++) {\n        const coord = coords[i];\n        const mc = mapboxgl.MercatorCoordinate.fromLngLat({\n          lng: coord[0],\n          lat: coord[1],\n        }, coord[2]);\n        position.set([mc.x, mc.y, mc.z], i * 3);\n      }\n\n      return position;\n    }\n\n    onAdd (map, gl) {\n      this.renderer = new Renderer(gl, {\n        autoClear: false,\n      });\n      this.scene = new Scene();\n      this.sync = new mbve.CameraSync(map, 'perspective', this.scene);\n      this.updateCamera = this.updateCamera.bind(this);\n      map.on('move', this.updateCamera);\n      map.on('resize', this.updateCamera);\n\n      const geometry = new Geometry(this.renderer, {\n        position: {\n          size: 3,\n          data: this.projectToWorld([\n            [70.26608, 38.7213],\n            [102.51084435117338, 24.846755709924764],\n            [114.46396935117377, 39.232415634606724]\n          ]),\n        },\n        // position: {\n        //   size: 2,\n        //   data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])\n        // },\n        // uv: {\n        //   size: 2,\n        //   data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])\n        // }\n      });\n\n      this.program = new Program(this.renderer, {\n        vertexShader: `\n      attribute vec2 uv;\n      attribute vec3 position;\n      uniform vec3 cameraPosition;\n      uniform mat4 viewMatrix;\n      uniform mat4 modelMatrix;\n      uniform mat4 modelViewMatrix;\n      uniform mat4 projectionMatrix;\n\n      varying vec2 vUv;\n\n      void main() {\n          vUv = uv;\n\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n      `,\n        fragmentShader: `\n      precision highp float;\n\n      uniform float uTime;\n      varying vec2 vUv;\n\n      void main() {\n          gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);\n          gl_FragColor.a = 1.0;\n\n      }\n      `,\n        uniforms: {\n          uTime: { value: 0.5 },\n        },\n        depthTest: false,\n      });\n\n      this.mesh = new Mesh(this.renderer, {\n        geometry,\n        program: this.program,\n      });\n\n      this.scene.add(this.mesh);\n\n      this.updateCamera();\n    }\n\n    onRemove () {\n      this.mesh.destroy();\n      this.scene.destroy();\n      this.program.destroy();\n    }\n\n    prerender () {\n    }\n\n    render () {\n      this.scene.worldMatrixNeedsUpdate = true;\n      this.renderer.resetState();\n      this.renderer.render({\n        scene: this.scene,\n        camera: this.camera,\n      });\n    }\n  }\n\n  const init = () => {\n    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg';\n    const map = new mapboxgl.Map({\n      container: refDom.current,\n      zoom: 3,\n      center: [112.26608, 32.7213],\n      pitch: 0,\n      bearing: 0,\n      // style: 'mapbox://styles/mapbox/satellite-streets-v12',\n      style: {\n        version: 8,\n        glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',\n        sources: {\n          tile: {\n            type: 'raster',\n            tiles: [\n              'https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',\n            ],\n            tileSize: 256,\n          },\n        },\n        layers: [\n          {\n            id: 'tile',\n            type: 'raster',\n            source: 'tile',\n            minzoom: 0,\n            maxzoom: 22,\n            paint: {\n              'raster-resampling': 'nearest',\n              'raster-fade-duration': 200,\n            },\n          },\n          {\n            id: 'background',\n            type: 'background',\n            layout: {\n              visibility: 'none',\n            },\n          },\n        ],\n      },\n      // center: [-74.0066, 40.7135],\n      // zoom: 15.5,\n      // pitch: 45,\n      // bearing: -17.6,\n      antialias: true,\n      projection: 'mercator'\n    });\n    map.on('load', () => {\n      const layer = new MeshLayer('mesh');\n      map.addLayer(layer);\n      window.layer = layer;\n    });\n\n    window.map = map;\n\n    return map;\n  }\n\n  useEffect(() => {\n    const map = init();\n\n    return () => {\n      console.log(map);\n    };\n  }, []);\n\n  return (\n    <div className=\"live-wrap\">\n      <div className=\"leva-wrap\">\n        <Leva\n          collapsed\n          fill\n        ></Leva>\n        <LevaPanel collapsed store={store} fill></LevaPanel>\n      </div>\n      <div className=\"scene-canvas\" ref={refDom}></div>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0}}]);