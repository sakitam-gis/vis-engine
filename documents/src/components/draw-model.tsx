import React, { useRef, useEffect } from 'react';
import { useControls, Leva, useCreateStore, LevaPanel } from 'leva';
import vertex from 'raw-loader!glslify-loader!./shaders/draw-modes.vert.glsl';
import fragment from 'raw-loader!glslify-loader!./shaders/draw-modes.frag.glsl';

import { observe, unobserve } from '../utils/observer';

import { Renderer, Mesh, Raf, Scene, Program, PerspectiveCamera, Geometry } from '@sakitam-gis/vis-engine';

export default function DrawModel(props) {
  const refDom = useRef(null);
  const cameraRef = useRef(null);
  const pointRef = useRef(null);
  const lineStripRef = useRef(null);
  const lineLoopRef = useRef(null);
  const trianglesRef = useRef(null);

  const store = useCreateStore();

  useControls({
    fov: {
      value: 15,
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
      value: 0.1,
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
      value: 100,
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
    pointsPosition: {
      value: [-1, 1, 0],
      onChange: (p) => {
        if (pointRef.current) {
          pointRef.current.position.set(...p);
        }
      },
    },
    lineStripPosition: {
      value: [1, 1, 0],
      onChange: (p) => {
        if (lineStripRef.current) {
          lineStripRef.current.position.set(...p);
        }
      },
    },
    lineLoopPosition: {
      value: [-1, -1, 0],
      onChange: (p) => {
        if (lineLoopRef.current) {
          lineLoopRef.current.position.set(...p);
        }
      },
    },
    trianglesPosition: {
      value: [1, -1, 0],
      onChange: (p) => {
        if (trianglesRef.current) {
          trianglesRef.current.position.set(...p);
        }
      },
    },
  }, {
    store: store,
  });

  const init = () => {
    const canvas = refDom.current;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const renderer = new Renderer(canvas, {
      alpha: true,
    });

    const fov = 15;
    const nearZ = 0.1;

    const farZ = 100;
    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
    camera.position.z = 15;

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
          -0.5, 0.5, 0,
          -0.5, -0.5, 0,
          0.5, 0.5, 0,
          0.5, -0.5, 0
        ])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
      },
      index: {
        data: new Uint16Array([0, 1, 2, 1, 3, 2])
      },
    });

    const program = new Program(renderer, {
      vertexShader: vertex as string,
      fragmentShader: fragment as string,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
    points.setParent(scene);
    points.position.set(-1, 1, 0);
    pointRef.current = points;

    const lineStrip = new Mesh(renderer, { mode: renderer.gl.LINES, geometry, program });
    lineStrip.setParent(scene);
    lineStrip.position.set(1, 1, 0);
    lineStripRef.current = lineStrip;

    const lineLoop = new Mesh(renderer, { mode: renderer.gl.LINE_LOOP, geometry, program });
    lineLoop.setParent(scene);
    lineLoop.position.set(-1, -1, 0);

    const triangles = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });
    triangles.setParent(scene);
    triangles.position.set(1, -1, 0);

    const raf = new Raf((t) => {
      program.setUniform('uTime', t);
      renderer.render({ scene, camera });
    });

    return { canvas, resize };
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
