import Clock from './animation/Clock';
import Raf from './animation/Raf';
import * as utils from './utils';
import type { IRafOptions } from './animation/Raf';

import Vector2 from './math/Vector2';
import Vector3 from './math/Vector3';
import Vector4 from './math/Vector4';
import Matrix3 from './math/Matrix3';
import Matrix4 from './math/Matrix4';
import Euler from './math/Euler';
import Color from './math/Color';
import Quaternion from './math/Quaternion';
import ProjectionMatrix from './math/ProjectionMatrix';

import Mesh from './objects/Mesh';
import Scene from './objects/Scene';
import State from './core/State';
import Renderer, { RendererOptions } from './core/Renderer';
import RenderBuffer from './core/RenderBuffer';
import RenderTarget from './core/RenderTarget';
import BufferAttribute from './core/BufferAttribute';

import Object3D from './objects/Object3D';
import Geometry from './core/Geometry';
import Plane from './geometries/Plane';
import Program from './core/Program';

import Texture, { ITextureOptions } from './core/Texture';
import DataTexture from './core/DataTexture';

import Camera, { CameraOptions, CameraType, Bounds } from './cameras/Camera';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import OrthographicCamera from './cameras/OrthographicCamera';

export {
  utils,
  Raf,
  Clock,
  Color,
  Euler,
  Vector2,
  Vector3,
  Vector4,
  Matrix3,
  Matrix4,
  Quaternion,
  ProjectionMatrix,

  Camera,
  PerspectiveCamera,
  OrthographicCamera,

  State,

  Mesh,
  Scene,
  Renderer,
  RenderBuffer,
  RenderTarget,
  BufferAttribute,
  Object3D,
  Geometry,
  Program,
  Texture,
  DataTexture,

  Plane,
}

export type {
  IRafOptions,
  ITextureOptions,
  Bounds,
  CameraType,
  CameraOptions,
  RendererOptions,
}
