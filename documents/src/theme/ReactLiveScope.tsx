import React from 'react';
import * as leva from 'leva';
import useBaseUrl from '@docusaurus/useBaseUrl';
import * as ve from '../../../';

import { observe, unobserve } from '../utils/observer';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,

  useBaseUrl,

  ve,

  ...ve,

  observe,
  unobserve,

  leva,
  Leva: leva.Leva,
  LevaPanel: leva.LevaPanel,
};

export default ReactLiveScope;
