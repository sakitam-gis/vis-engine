import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import * as leva from 'leva';
import useBaseUrl from '@docusaurus/useBaseUrl';
import * as ve from '@sakitam-gis/vis-engine';
import mapboxgl from 'mapbox-gl';

import { observe, unobserve } from '../utils/observer';
import { GLTFLoader } from '../components/GLTFLoader';
import CameraSync from '../utils/maps/mapbox/CameraSync';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,

  useBaseUrl,

  ve,

  ...ve,

  observe,
  unobserve,

  GLTFLoader,

  leva,
  Leva: leva.Leva,
  LevaPanel: leva.LevaPanel,

  mapboxgl,
  MapboxCameraSync: CameraSync,
};

export default ReactLiveScope;
