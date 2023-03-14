/* eslint-disable @typescript-eslint/ban-ts-comment */

import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { Leva, LevaPanel, useCreateStore } from 'leva';

import { GLTFLoader } from './utils/GLTFLoader';
import './styles/index.less';

import { Renderer, Scene } from '@sakitam-gis/vis-engine';
import {
  CameraSync,
  fromLngLat,
  meterInMercatorCoordinateUnits,
  mercatorZfromAltitude,
} from '@sakitam-gis/mapbox-ve';
import { Vector3 } from '../../src';

export default function Mapbox() {
  const refDom = useRef(null);

  const store = useCreateStore();

  class MeshLayer {
    public id: string;
    public type: string;
    public renderingMode: string;

    public sync: any;
    private renderer: any;
    private scene: any;
    constructor(id) {
      this.id = id;
      this.type = 'custom';
      this.renderingMode = '3d';
    }

    get camera() {
      return this.sync.camera;
    }

    updateCamera() {
      this.sync.update();
    }

    projectToWorld(coord) {
      const mc = fromLngLat(
        {
          lng: coord[0],
          lat: coord[1],
        },
        coord[2],
      );

      return [mc.x, mc.y, mc.z];
    }

    async loadGLTF(
      file = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
    ) {
      return await GLTFLoader.load(this.renderer, file);
    }

    onAdd(map, gl) {
      this.renderer = new Renderer(gl, {
        autoClear: false,
      });
      this.scene = new Scene();
      this.sync = new CameraSync(map, 'perspective', this.scene);
      this.updateCamera = this.updateCamera.bind(this);
      map.on('move', this.updateCamera);
      map.on('resize', this.updateCamera);

      this.loadGLTF().then((gltfObject) => {
        this.scene.children.forEach((child) => child.setParent(null));

        const s = gltfObject.scene || gltfObject.scenes[0];
        s.forEach((root) => {
          root.setParent(this.scene);
        });

        const coords = [6.58968, 45.39701, 1913.2236908406628];
        // const coords = [6.58968, 45.39701, 0];
        const center = this.projectToWorld(coords);
        this.scene.children[0].position.set(
          center[0],
          center[1],
          center[2] + mercatorZfromAltitude(100, 45.39701),
        );
        this.scene.children[0].quaternion.fromAxisAngle(
          new Vector3(0, 1, 0),
          (180 * Math.PI) / 180,
        );
        const scale = meterInMercatorCoordinateUnits(center[1]) * 100;
        this.scene.children[0].scale.set(scale, scale, scale);
        // 为什么在自定义图层中FrontFace不一样，猜测可能与顶点数据组织有关系
        this.scene.children[0].children[0].program.setStates({
          frontFace: this.renderer.gl.CW,
        });
        console.log(this.scene, scale);

        // this.scene.updateMatrixWorld();
      });

      this.updateCamera();
    }

    onRemove() {
      console.log('remove');
    }

    render() {
      this.scene.worldMatrixNeedsUpdate = true;
      this.renderer.render({
        scene: this.scene,
        camera: this.camera,
      });
      this.renderer.resetState();
    }
  }

  const init = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidTEwaW50IiwiYSI6InQtMnZvTkEifQ.c8mhXquPE7_xoB3P4Ag8cA';
    // @ts-ignore
    if (mapboxgl.Map.prototype._setupPainter.toString().indexOf('webgl2') === -1) {
      // @ts-ignore
      const setupPainterPrev = mapboxgl.Map.prototype._setupPainter;
      // @ts-ignore
      mapboxgl.Map.prototype._setupPainter = function () {
        const getContextPrev = this._canvas.getContext;
        this._canvas.getContext = function (name, attrib) {
          return (
            getContextPrev.apply(this, ['webgl2', attrib]) ||
            getContextPrev.apply(this, ['webgl', attrib]) ||
            getContextPrev.apply(this, ['experimental-webgl', attrib])
          );
        };
        setupPainterPrev.apply(this);
        this._canvas.getContext = getContextPrev;
      };
    }

    const map = new mapboxgl.Map({
      container: refDom.current as unknown as HTMLElement,
      zoom: 13.954629345329566,
      center: [6.58968, 45.39701],
      pitch: 77.00000000000013,
      bearing: 0,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      antialias: true,
      projection: 'mercator' as any,
      // projection: 'globe',
    });
    map.on('load', () => {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1 });
      const layer = new MeshLayer('mesh');
      map.addLayer(layer as any);
      // @ts-ignore
      window.layer = layer;
      // @ts-ignore
      window.map = map;
    });

    return map;
  };

  useEffect(() => {
    const map = init();

    return () => {
      console.log(map);
    };
  }, []);

  return (
    <div className="live-wrap">
      <div className="leva-wrap">
        <Leva collapsed fill></Leva>
        <LevaPanel collapsed store={store} fill></LevaPanel>
      </div>
      <div className="scene-canvas" ref={refDom}></div>
    </div>
  );
}
