import React, { useRef, useEffect } from 'react';
import { useControls, Leva, useCreateStore, LevaPanel } from 'leva';
import { load } from '@loaders.gl/core';
import { GLTFLoader } from '@loaders.gl/gltf';

import { GLTFLoader as gltf } from './utils/GLTFLoader';
import './styles/index.less';

import { observe, unobserve } from './utils/observer';

import { Renderer, Raf, Scene, PerspectiveCamera } from '@sakitam-gis/vis-engine';

export default function App() {
  const refDom = useRef<WithNull<HTMLCanvasElement>>(null);
  const cameraRef = useRef<WithNull<PerspectiveCamera>>(null);
  const renderRef = useRef<WithNull<Renderer>>(null);

  const store = useCreateStore();

  const fov = 45;
  const nearZ = 0.006360928308397327;

  const farZ = 6.360928308397327;

  const config: any = {
    fov: {
      value: fov,
      min: -180,
      max: 180,
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
      min: -10,
      max: 10,
      step: 0.01,
      onChange: (f) => {
        if (cameraRef.current) {
          cameraRef.current.far = f;
        }
      },
    },
    cameraPosition: {
      value: [1.4605831301690517, 0.34327992612869196, 2.25837676990454],
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
      antialias: false,
      dpr: 2,
    });

    renderRef.current = renderer;

    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
    camera.position.set(1.4605831301690517, 0.34327992612869196, 2.25837676990454);
    camera.rotation.set(-0.11987760646305476, 0.5391393785270148, -6.989052372931176e-18);
    camera.quaternion.set(
      -0.057739560789469936,
      0.265838441571165,
      0.0159531473635754,
      0.9621546461936613,
    );

    cameraRef.current = camera;

    function resize(target) {
      const { width, height } = target.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
    }

    const scene = new Scene();
    loadGLTF().then((gltfObject) => {
      scene.children.forEach((child) => child.setParent(null));

      const s = gltfObject.scene || gltfObject.scenes[0];
      s.forEach((root) => {
        root.setParent(scene);
      });

      scene.updateMatrixWorld();

      const raf = new Raf(() => {
        scene.rotation.y -= 0.02;
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
