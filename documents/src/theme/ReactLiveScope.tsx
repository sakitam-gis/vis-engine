import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import * as leva from 'leva';
import useBaseUrl from '@docusaurus/useBaseUrl';
import * as ve from '@sakitam-gis/vis-engine';
import mapboxgl from 'mapbox-gl';
import * as maptalks from 'maptalks';
import { GroupGLLayer } from '@maptalks/gl';
import * as mbve from '@sakitam-gis/mapbox-ve';
import * as mtkve from '@sakitam-gis/maptalks-ve';

import { observe, unobserve } from '../utils/observer';
import { GLTFLoader } from '../components/GLTFLoader';

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
  mbve,
  mtkve,
  maptalks,
  GroupGLLayer,
};

export default ReactLiveScope;
