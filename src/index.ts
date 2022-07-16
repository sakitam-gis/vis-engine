import Clock from './animation/Clock';
import Raf from './animation/Raf';
import EventEmitter from './core/Event';
import * as utils from './utils';
import type { RafOptions } from './animation/Raf';

import Vector2 from './math/Vector2';
import Vector3 from './math/Vector3';
import Vector4 from './math/Vector4';
import Matrix3 from './math/Matrix3';
import Matrix4 from './math/Matrix4';
import Euler from './math/Euler';
import Color, { ColorLike } from './math/Color';
import Quaternion from './math/Quaternion';
import ProjectionMatrix from './math/ProjectionMatrix';

import Mesh, { MeshOptions, MeshDrawOptions } from './objects/Mesh';
import Scene from './objects/Scene';
import State from './core/State';
import Renderer, { RendererOptions } from './core/Renderer';
import RenderBuffer, { RenderBufferOptions } from './core/RenderBuffer';
import RenderTarget, { RenderTargetOptions, Attachment } from './core/RenderTarget';
import BufferAttribute, { Attribute, DataType } from './core/BufferAttribute';

import Object3D from './objects/Object3D';
import Geometry, { Attributes } from './core/Geometry';
import Plane, { PlaneOptions } from './geometries/Plane';
import Box, { BoxOptions } from './geometries/Box';
import Program, { ProgramOptions, ProgramRenderState, Uniforms, UniformData } from './core/Program';

import Resource, { ResourceOptions } from './core/Resource';
import Texture, { TextureOptions } from './core/Texture';
import Texture3D, { Texture3DOptions } from './core/Texture3D';
import DataTexture, { DataTextureOptions } from './core/DataTexture';

import Camera, { CameraOptions, CameraType, Bounds } from './cameras/Camera';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import OrthographicCamera from './cameras/OrthographicCamera';

export {
  utils,
  Raf,
  Clock,
  Color,
  Euler,
  EventEmitter,
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
  Resource,
  Renderer,
  RenderBuffer,
  RenderTarget,
  BufferAttribute,
  Object3D,
  Geometry,
  Program,
  Texture,
  Texture3D,
  DataTexture,

  Box,
  Plane,
}

export type {
  Attribute,
  Attributes,
  Attachment,
  BoxOptions,
  DataType,
  RafOptions,
  TextureOptions,
  Texture3DOptions,
  Bounds,
  ColorLike,
  CameraType,
  CameraOptions,
  DataTextureOptions,
  MeshOptions,
  MeshDrawOptions,
  ResourceOptions,
  RendererOptions,
  RenderBufferOptions,
  RenderTargetOptions,
  PlaneOptions,
  ProgramOptions,
  ProgramRenderState,
  Uniforms,
  UniformData,
}
