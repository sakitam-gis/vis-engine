import React, { useRef, useEffect } from 'react';
import { useControls, Leva, useCreateStore, LevaPanel } from 'leva';
import { load } from '@loaders.gl/core';
import { GLTFLoader } from '@loaders.gl/gltf';
import vertex from './shaders/draw-modes.vert.glsl';
import fragment from './shaders/draw-modes.frag.glsl';
import './styles/index.less';

import { observe, unobserve } from './utils/observer';

import { Renderer, Mesh, Raf, Scene, Program, PerspectiveCamera, Geometry } from '../../';

export default function App() {
  const refDom = useRef<WithNull<HTMLCanvasElement>>(null);
  const meshRef = useRef<WithNull<Mesh>>(null);
  const cameraRef = useRef<WithNull<PerspectiveCamera>>(null);
  const renderRef = useRef<WithNull<Renderer>>(null);

  const store = useCreateStore();

  const fov = 15;
  const nearZ = 0.1;

  const farZ = 100;

  const config: any = {
    fov: {
      value: fov,
      min: -50,
      max: 50,
      step: 1,
      onChange: (f) => {
        if (cameraRef.current) {
          cameraRef.current.fov = f;
        }
      },
    },
    nearZ: {
      value: nearZ,
      min: -50,
      max: 50,
      step: 0.1,
      onChange: (n: number) => {
        if (cameraRef.current) {
          cameraRef.current.near = n;
        }
      },
    },
    farZ: {
      value: farZ,
      min: -500,
      max: 500,
      step: 1,
      onChange: (f) => {
        if (cameraRef.current) {
          cameraRef.current.far = f;
        }
      },
    },
    cameraPosition: {
      value: [0, 0, 15],
      onChange: (p) => {
        if (cameraRef.current) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          cameraRef.current.position.set(...p);
        }
      },
    },
    wireframe: {
      value: false,
      onChange: (p) => {
        if (meshRef.current) {
          meshRef.current.wireframe = p;
        }
      },
    },
  };

  useControls(config, {
    store: store,
  });

  const loadGLTF = async (
    file = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
  ) => {
    const rawGltf = await load(file, GLTFLoader);

    console.log(rawGltf);

    // const {gltf, scenes, animator} = await createGLTFObjects(gl, rawGltf, this.gltfCreateOptions);

    // this.scenes = scenes;
    // this.animator = animator;
    // this.gltf = gltf;
  };

  const init = () => {
    const canvas = refDom.current as HTMLCanvasElement;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const renderer = new Renderer(canvas, {
      alpha: true,
    });

    renderRef.current = renderer;

    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
    camera.position.z = fov;

    cameraRef.current = camera;

    function resize(target) {
      const { width, height } = target.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
    }

    const scene = new Scene();

    loadGLTF();

    const geometry = new Geometry(renderer, {
      position: {
        size: 3,
        data: new Float32Array([
          -1.6, 1.5, 0, -1, -1, 0, 1, -1, 0, -1, -1, 0, 1, -1, 0, 1.6, 1.5, 0,
        ]),
      },
    });

    const program = new Program(renderer, {
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const triangles = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });
    triangles.setParent(scene);
    triangles.position.set(0, 0, 0);

    meshRef.current = triangles;

    const raf = new Raf((t) => {
      program.setUniform('uTime', t);
      renderer.render({ scene, camera });
    });

    return {
      canvas,
      resize,
      raf,
      destroy: () => {
        triangles.destroy();
        geometry.destroy();
        program.destroy();
      },
    };
  };

  console.log('render');

  useEffect(() => {
    const { canvas, resize, destroy } = init();

    observe(canvas, resize);

    return () => {
      destroy();
      unobserve(canvas, resize);
    };
  }, []);

  return (
    <div className="live-wrap">
      <div className="leva-wrap">
        <Leva fill></Leva>
        <LevaPanel store={store} fill></LevaPanel>
      </div>
      <canvas className="scene-canvas" ref={refDom}></canvas>
    </div>
  );
}
