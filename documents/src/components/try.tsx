import React, { useRef, useEffect } from 'react';
import { useControls, Leva, useCreateStore, LevaPanel } from 'leva';
import vertex from 'raw-loader!glslify-loader!./shaders/draw-modes.vert.glsl';
import fragment from 'raw-loader!glslify-loader!./shaders/draw-modes.frag.glsl';

import { observe, unobserve } from '../utils/observer';

import { Renderer, Mesh, Raf, Scene, Program, PerspectiveCamera, Geometry } from '@sakitam-gis/vis-engine';

export default function DrawModel(props) {
  const refDom = useRef(null);
  const meshRef = useRef(null);
  const cameraRef = useRef(null);
  const renderRef = useRef(null);

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
      onChange: (fov) => {
        if (cameraRef.current) {
          cameraRef.current.fov = fov;
        }
      },
    },
    nearZ: {
      value: nearZ,
      min: -50,
      max: 50,
      step: 0.1,
      onChange: (nearZ) => {
        if (cameraRef.current) {
          cameraRef.current.near = nearZ;
        }
      },
    },
    farZ: {
      value: farZ,
      min: -500,
      max: 500,
      step: 1,
      onChange: (farZ) => {
        if (cameraRef.current) {
          cameraRef.current.far = farZ;
        }
      },
    },
    cameraPosition: {
      value: [0, 0, 15],
      onChange: (p) => {
        if (cameraRef.current) {
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
    }
  };

  useControls(config, {
    store: store,
  });

  const init = () => {
    const canvas = refDom.current;

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

    const geometry = new Geometry(renderer, {
      position: {
        size: 3,
        data: new Float32Array([
          -1.6, 1.5, 0,
          -1, -1, 0,
          1, -1, 0,
          -1, -1, 0,
          1, -1, 0,
          1.6, 1.5, 0,
        ])
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
    }
  }

  useEffect(() => {
    const { canvas, resize } = init();

    observe(canvas, resize);

    return () => {
      unobserve(canvas, resize);
    };
  }, []);

  return (
    <div className="live-wrap">
      <div className="leva-wrap">
        <Leva
          fill
        ></Leva>
        <LevaPanel store={store} fill></LevaPanel>
      </div>
      <canvas className="scene-canvas" ref={refDom}></canvas>
    </div>
  );
}
