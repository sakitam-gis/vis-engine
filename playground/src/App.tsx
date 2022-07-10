import React, { useRef, useEffect } from 'react';
import { useControls, Leva, useCreateStore, LevaPanel } from 'leva';
import { load } from '@loaders.gl/core';
import { GLTFLoader } from '@loaders.gl/gltf';

import { GLTFLoader as gltf } from './utils/GLTFLoader';
import './styles/index.less';

import { observe, unobserve } from './utils/observer';

import { Renderer, Raf, Scene, PerspectiveCamera } from '../../';

export default function App() {
  const refDom = useRef<WithNull<HTMLCanvasElement>>(null);
  const cameraRef = useRef<WithNull<PerspectiveCamera>>(null);
  const renderRef = useRef<WithNull<Renderer>>(null);

  const store = useCreateStore();

  const fov = 45;
  const nearZ = 0.15587174047728183;

  const farZ = 155.87174047728183;

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
      value: [52.941299483841654, 52.76083364370763, -52.5602455592811],
      onChange: (p) => {
        if (cameraRef.current) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          cameraRef.current.position.set(...p);
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
    const data = await gltf.load(renderRef.current as Renderer, file);

    console.log(data, rawGltf);

    // const {gltf, scenes, animator} = await createGLTFObjects(gl, rawGltf, this.gltfCreateOptions);

    // this.scenes = scenes;
    // this.animator = animator;
    // this.gltf = gltf;

    return data;
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
    camera.position.set(52.941299483841654, 52.76083364370763, -52.5602455592811);
    camera.rotation.set(-0.3398369094541219, 2.356194490192345, 2.943923360032078e-17);
    camera.quaternion.set(
      -0.06471252563850327,
      0.9105743365364627,
      0.15622985705189124,
      0.3771722397422858,
    );

    cameraRef.current = camera;

    function resize(target) {
      const { width, height } = target.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
    }

    const scene = new Scene();
    loadGLTF('https://oframe.github.io/ogl/examples/assets/gltf/hershel.glb').then((gltfObject) => {
      scene.children.forEach((child) => child.setParent(null));

      const s = gltfObject.scene || gltfObject.scenes[0];
      s.forEach((root) => {
        root.setParent(scene);
      });

      scene.updateMatrixWorld();

      const raf = new Raf(() => {
        renderer.render({ scene, camera });
      });
      console.log(raf);
    });

    return {
      canvas,
      resize,
      destroy: () => {
        console.log('destroy');
      },
    };
  };

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
