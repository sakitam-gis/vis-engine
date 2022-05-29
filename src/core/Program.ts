import { isNull, isUndef, parseShader, uid } from '@/utils';
import type { WithNull } from '@/types';

import Resource from './Resource';
import Texture from './Texture';
import Vector from '../math/Vector';
import Matrix from '../math/Matrix';
import { FragmentShader, VertexShader } from './Shader';
import Color from '../math/Color';

const getDefines = (t) => {
  const defines = [];
  return defines.map(t => '#define '.concat(t));
};

function setUniform(gl: WebGLRenderingContext, type: number, location: WebGLUniformLocation, value: any) {
  const isArray = value.length;
  switch (type) {
    case WebGLRenderingContext.FLOAT: // 5126
      return isArray ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
    case WebGLRenderingContext.FLOAT_VEC2: // 35664
      return gl.uniform2fv(location, value); // FLOAT_VEC2
    case WebGLRenderingContext.FLOAT_VEC3: // 35665
      return gl.uniform3fv(location, value); // FLOAT_VEC3
    case WebGLRenderingContext.FLOAT_VEC4:
      return gl.uniform4fv(location, value); // FLOAT_VEC4
    case 35670: // BOOL
    case 5124: // INT
    case 35678: // SAMPLER_2D
    case 35680: // SAMPLER_CUBE
      return isArray ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
    case 35671: // BOOL_VEC2
    case 35667: // INT_VEC2
      return gl.uniform2iv(location, value); // INT_VEC2
    case 35672: // BOOL_VEC3
    case 35668: // INT_VEC3
      return gl.uniform3iv(location, value); // INT_VEC3
    case 35673: // BOOL_VEC4
    case 35669: // INT_VEC4
      return gl.uniform4iv(location, value); // INT_VEC4
    case 35674: // FLOAT_MAT2
      return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
    case 35675: // FLOAT_MAT3
      return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
    case 35676: // FLOAT_MAT4
      return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
  }
}

export type Uniforms = any;

export interface UniformData {
  location: WithNull<WebGLUniformLocation>;
  type: GLenum;
  name: string;
  value?: any;
  isStruct: boolean;
  isStructArray?: boolean;
  structIndex?: number;
  structProperty?: string;
}

export interface ProgramOptions {
  id: string;
  vertexShader: string | VertexShader;
  fragmentShader: string | FragmentShader;
  uniforms: Uniforms;
  transparent: boolean;

  defines: string[];
  includes: {
    [key: string]: string;
  }
}

export default class Program extends Resource<ProgramOptions> {
  public wireframe: boolean;

  public attributeOrder: string;

  #uniformLocations: Map<any, any>;

  #attributeLocations: Map<any, any>;

  #vs: VertexShader;

  #fs: FragmentShader;

  constructor(renderer, options: ProgramOptions = {} as ProgramOptions) {
    super(renderer, options);
    const {
      id,
      vertexShader,
      fragmentShader,
      uniforms = {},
      transparent = false,
      defines = [],
      includes = {},
    } = options;
    this.id = id || uid('program');
    const defs: string[] = [
      ...getDefines({
        ...options,
        ...uniforms,
      }),
      ...defines,
    ].map((str) => (!str.startsWith('#define ') ? '#define '.concat(str) : str));
    this.#vs = typeof vertexShader === 'string' ? new VertexShader(renderer, parseShader(vertexShader, defs), includes) : vertexShader;
    this.#fs = typeof fragmentShader === 'string' ? new FragmentShader(renderer, parseShader(fragmentShader, defs), includes) : fragmentShader;

    this.gl.attachShader(this.handle, this.vertexShader.handle);
    this.gl.attachShader(this.handle, this.fragmentShader.handle);
    this.gl.linkProgram(this.handle);
    this.gl.validateProgram(this.handle);
    if (!this.gl.getProgramParameter(this.handle, this.gl.LINK_STATUS)) {
      throw new Error('Program:'.concat(this.id, ': Error linking ').concat(this.gl.getProgramInfoLog(this.handle) as string));
    }

    this.#uniformLocations = new Map();
    this.#attributeLocations = new Map();

    this.#assignUniforms(uniforms);

    this.#assignAttributes();
    if (transparent) {
      this.rendererState.apply({
        transparent: true,
      });
      this.rendererState.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      this.rendererState.setBlendEquation(this.gl.FUNC_ADD);
      this.rendererState.setDepthMask(false);
    }
  }

  get uniforms() {
    return this.#uniformLocations;
  }

  get attributes() {
    return this.#attributeLocations;
  }

  get vertexShader() {
    return this.#vs;
  }

  get fragmentShader() {
    return this.#fs;
  }

  use() {
    const programActive = this.rendererState.currentProgram === this.id;
    let textureUnit = -1;
    if (!programActive) {
      this.gl.useProgram(this.handle);
      this.rendererState.currentProgram = this.id;
    }

    this.#uniformLocations.forEach((location, activeUniform) => {
      let name = location.uniformName;

      let uniform = this.uniforms[name];

      if (!uniform) {
        console.warn('Program:'.concat(this.id, ': Active uniform ').concat(name, ' has not been supplied'));
        return;
      }

      if (uniform && (isUndef(uniform.value) || isNull(uniform.value))) {
        console.warn('Program:'.concat(this.id, ': Uniform ').concat(name, ' is missing a value parameter'));
        return;
      }

      let value = uniform?.value;

      if (value instanceof Texture) {
        textureUnit += 1;
        uniform.value.update(textureUnit);
        return setUniform(this.gl, activeUniform.type, location.location, textureUnit);
      }

      if (value instanceof Matrix || value instanceof Vector) {
        value = uniform.value.toArray();
      } else if (value instanceof Color) {
        value = uniform.value.toArray();
      }

      if (value && value.length > 0 && value[0] instanceof Texture) {
        const units: number[] = [];
        for (let i = 0; i < uniform.value.length; i++) {
          const v = value[i];
          textureUnit += 1;
          v.update(textureUnit);
          units.push(textureUnit);
        }
        return setUniform(this.gl, activeUniform.type, location.location, units);
      }

      setUniform(this.gl, activeUniform.type, location.location, value);
    });

    this.applyState();
  }

  applyState() {
    // if (this.depthTest) {
    //   this.renderer.enable(this.gl.DEPTH_TEST);
    // } else {
    //   this.renderer.disable(this.gl.DEPTH_TEST);
    // }
    //
    // if (this.blendFunc.src) {
    //   this.renderer.enable(this.gl.BLEND);
    // } else {
    //   this.renderer.disable(this.gl.BLEND);
    // }
    //
    // this.renderer.setDepthMask(this.depthWrite);
    // this.renderer.setDepthFunc(this.depthFunc);
    //
    // if (this.blendFunc.src)
    //   this.renderer.setBlendFunc(
    //     this.blendFunc.src,
    //     this.blendFunc.dst,
    //     this.blendFunc.srcAlpha,
    //     this.blendFunc.dstAlpha
    //   );
    // this.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }

  setUniform(key, value) {
    if (this.uniforms[key]) {
      this.uniforms[key].value = value;
    }
  }

  bind() {
    this.gl.useProgram(this.handle);
  }

  unbind() {
    this.gl.useProgram(null);
  }

  createHandle() {
    return this.gl.createProgram();
  }

  deleteHandle() {
    this.gl.deleteProgram(this.handle);
  }

  #assignUniforms(uniforms = {}) {
    const numUniforms = this.gl.getProgramParameter(this.handle, this.gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < numUniforms; i++) {
      const uniformInfo = this.gl.getActiveUniform(this.handle, i);
      if (!uniformInfo) break;
      const name = uniformInfo.name;
      const split = name.match(/(\w+)/g) as string[];
      const uniformData: UniformData = {
        location: this.gl.getUniformLocation(this.handle, name),
        type: uniformInfo.type,
        name: split[0],
        isStruct: false,
      };
      if (split.length === 3) {
        uniformData.isStructArray = true;
        uniformData.structIndex = Number(split[1]);
        uniformData.structProperty = split[2];
      } else if (split.length === 2 && isNaN(Number(split[1]))){
        uniformData.isStruct = true;
        uniformData.structProperty = split[1];
      }
      const v = uniforms[name]?.value;
      if (v) {
        uniformData.value = uniforms[name].value;
      }
      // this.uniforms[name] = uniformData;
      this.#uniformLocations.set(uniformInfo, uniformData);
    }
  }

  #assignAttributes() {
    const numAttribs = this.gl.getProgramParameter(this.handle, this.gl.ACTIVE_ATTRIBUTES);
    const locations: string[] = [];
    for (let i = 0; i < numAttribs; i++) {
      const attribInfo = this.gl.getActiveAttrib(this.handle, i);
      if (!attribInfo) break;
      const location = this.gl.getAttribLocation(this.handle, attribInfo.name);
      locations[location] = attribInfo.name;
      this.#attributeLocations.set(attribInfo, location);
    }
    this.attributeOrder = locations.join('');
  }

  destroy() {
    this.unbind();
    this.deleteHandle();
  }
}
