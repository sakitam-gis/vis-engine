import { isNull, isUndef, omit, parseShader, uid } from '../utils';
import type { WithNull } from '../types';

import Resource, { ResourceOptions } from './Resource';
import Texture from './Texture';
import Vector from '../math/Vector';
import Matrix from '../math/Matrix';
import { FragmentShader, VertexShader } from './Shader';
import Color from '../math/Color';
import { BlendType } from './State';

const getDefines = (t) => {
  const defines = [];
  return defines.map((d) => '#define '.concat(d));
};

const arrayCacheF32 = {};

function flatten(a) {
  const arrayLen = a.length;
  const valueLen = a[0].length;
  if (valueLen === undefined) return a;
  const length = arrayLen * valueLen;
  let value = arrayCacheF32[length];
  if (!value) arrayCacheF32[length] = value = new Float32Array(length);
  for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
  return value;
}

function setUniform(gl: WebGLRenderingContext, type: number, location: WebGLUniformLocation, value: any) {
  value = value.length ? flatten(value) : value;
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
    case WebGLRenderingContext.BOOL: // BOOL
    case WebGLRenderingContext.INT: // INT
    case WebGLRenderingContext.SAMPLER_2D: // SAMPLER_2D
    case WebGLRenderingContext.SAMPLER_CUBE: // SAMPLER_CUBE
      return isArray ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
    case WebGLRenderingContext.BOOL_VEC2: // BOOL_VEC2
    case WebGLRenderingContext.INT_VEC2: // INT_VEC2
      return gl.uniform2iv(location, value); // INT_VEC2
    case WebGLRenderingContext.BOOL_VEC3: // BOOL_VEC3
    case WebGLRenderingContext.INT_VEC3: // INT_VEC3
      return gl.uniform3iv(location, value); // INT_VEC3
    case WebGLRenderingContext.BOOL_VEC4: // BOOL_VEC4
    case WebGLRenderingContext.INT_VEC4: // INT_VEC4
      return gl.uniform4iv(location, value); // INT_VEC4
    case WebGLRenderingContext.FLOAT_MAT2: // FLOAT_MAT2
      return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
    case WebGLRenderingContext.FLOAT_MAT3: // FLOAT_MAT3
      return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
    case WebGLRenderingContext.FLOAT_MAT4: // FLOAT_MAT4
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

export interface ProgramRenderState {
  /**
   * 指定正面或背面多边形是否可以剔除
   * 可能的值：`gl.FRONT`、`gl.FRONT_AND_BACK` 和 `gl.BACK`
   */
  cullFace: GLenum;

  /**
   * 指定图形顶点以顺时针是正面还是逆时针方向是正面：
   * 可能的值：`gl.CW` 和 `gl.CCW`
   */
  frontFace: GLenum;

  /**
   * 是否启用深度测试，默认启用
   */
  depthTest: boolean;

  /**
   * 是否开启深度值写入
   */
  depthWrite: boolean;

  /**
   * 指定深度检测的参数，即什么情况算失败、什么情况算作通过，默认是 `gl.LESS`。
   * 可能的值：
   * - gl.NEVER （总不通过）
   * - gl.LESS（如果新值小于缓冲区中的值则通过）
   * - gl.EQUAL（如果新值等于缓冲区中的值则通过）
   * - gl.LEQUAL（如果新值小于等于缓冲区中的值则通过）
   * - gl.GREATER（如果新值大于缓冲区中的值则通过）
   * - gl.NOTEQUAL（如果新值不等于缓冲区中的值则通过）
   * - gl.GEQUAL（如果新值大于等于缓冲区中的值则通过）
   * - gl.ALWAYS（总通过）
   */
  depthFunc: GLenum;

  /**
   * blend 类型
   */
  blending: BlendType;

  /**
   * 指定颜色混合算法
   * 可能的值可以参考：https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/blendFunc 和 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate
   */
  blendFunc: {
    src: number;
    dst: number;
    srcAlpha?: number;
    dstAlpha?: number;
  };

  /**
   * 指定颜色混合方程式
   * 可能的值可以参考：https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation 和 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate
   */
  blendEquation: {
    modeRGB: number;
    modeAlpha?: number;
  };
}

export interface ProgramOptions extends ProgramRenderState, ResourceOptions {
  /**
   * 指定 `id`
   */
  id: string;

  /**
   * 顶点着色器
   */
  vertexShader: string | VertexShader;

  /**
   * 片段着色器
   */
  fragmentShader: string | FragmentShader;

  /**
   * uniform
   */
  uniforms?: Uniforms;

  /**
   * 配置是否是透明渲染
   */
  transparent?: boolean;

  /**
   * 指定着色的宏定义
   */
  defines?: string[];

  /**
   * 着色器模块，会在着色器中遇到 `#include <xxx>` 会自动替换此配置项对应的着色器片段。
   */
  includes?: {
    [key: string]: string;
  };
}

/**
 * 着色器程序对象封装，主要功能如下：
 * - 创建Program管线，编译顶点着色器和片段着色器源码；
 * - 管理`Attribute`属性
 * - 管理`Uniform`属性
 * - 渲染状态的切换
 *
 * 示例代码：
 * ```jsx live
 * function render(props) {
 *   const drawModelVertex = `
 *     attribute vec2 uv;
 *     attribute vec3 position;
 *     uniform mat4 modelViewMatrix;
 *     uniform mat4 projectionMatrix;
 *
 *     varying vec2 vUv;
 *
 *     void main() {
 *         vUv = uv;
 *
 *         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 *
 *         // gl_PointSize only applicable for gl.POINTS draw mode
 *         gl_PointSize = 5.0;
 *     }
 *     `;
 *
 *   const drawModelFragment = `
 *     precision highp float;
 *
 *     uniform float uTime;
 *     varying vec2 vUv;
 *
 *     void main() {
 *         gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);
 *         gl_FragColor.a = 1.0;
 *     }
 *     `;
 *
 *   const refDom = useRef(null);
 *
 *
 *
 *   const init = () => {
 *     const canvas = refDom.current;
 *
 *     canvas.width = canvas.clientWidth;
 *     canvas.height = canvas.clientHeight;
 *     const renderer = new Renderer(canvas, {
 *       alpha: true,
 *     });
 *
 *     const fov = 15;
 *     const nearZ = 0.1;
 *
 *     const farZ = 100;
 *     const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
 *     camera.position.z = 15;
 *
 *     function resize(target) {
 *       const { width, height } = target.getBoundingClientRect();
 *       renderer.setSize(width, height);
 *       camera.aspect = width / height;
 *     }
 *
 *     const scene = new Scene();
 *
 *     const geometry = new Geometry(renderer, {
 *       position: {
 *         size: 3,
 *         data: new Float32Array([
 *           -0.5, 0.5, 0,
 *           -0.5, -0.5, 0,
 *           0.5, 0.5, 0,
 *           0.5, -0.5, 0
 *         ])
 *       },
 *       uv: {
 *         size: 2,
 *         data: new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
 *       },
 *       index: {
 *         data: new Uint16Array([0, 1, 2, 1, 3, 2])
 *       },
 *     });
 *
 *     const program = new Program(renderer, {
 *       vertexShader: drawModelVertex,
 *       fragmentShader: drawModelFragment,
 *       uniforms: {
 *         uTime: { value: 0 },
 *       },
 *     });
 *
 *     const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
 *     points.setParent(scene);
 *     points.position.set(-1, 1, 0);
 *
 *     const lineStrip = new Mesh(renderer, { mode: renderer.gl.LINES, geometry, program });
 *     lineStrip.setParent(scene);
 *     lineStrip.position.set(1, 1, 0);
 *
 *     const lineLoop = new Mesh(renderer, { mode: renderer.gl.LINE_LOOP, geometry, program });
 *     lineLoop.setParent(scene);
 *     lineLoop.position.set(-1, -1, 0);
 *
 *     const triangles = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });
 *     triangles.setParent(scene);
 *     triangles.position.set(1, -1, 0);
 *
 *     const raf = new Raf((t) => {
 *       program.setUniform('uTime', t);
 *       renderer.render({ scene, camera });
 *     });
 *
 *     return {
 *       canvas,
 *       resize,
 *     }
 *   }
 *
 *   useEffect(() => {
 *     const { canvas, resize } = init();
 *
 *     observe(canvas, resize);
 *
 *     return () => {
 *       unobserve(canvas, resize);
 *     };
 *   }, []);
 *
 *   return (
 *     <div className="live-wrap">
 *       <canvas className="scene-canvas" ref={refDom}></canvas>
 *     </div>
 *   );
 * }
 * ```
 */
export default class Program extends Resource<ProgramOptions> {
  public attributeOrder: string;

  public uniforms: Uniforms;

  #uniformLocations: Map<any, any>;

  #attributeLocations: Map<any, any>;

  #vs: VertexShader;

  #fs: FragmentShader;

  #renderState: Partial<ProgramRenderState>;

  constructor(renderer, options: Partial<ProgramOptions> = {} as ProgramOptions) {
    super(renderer, options);
    const {
      id,
      vertexShader,
      fragmentShader,
      uniforms = {},
      transparent = false,
      defines = [],
      includes = {},
      cullFace,
      frontFace = renderer.gl.CCW,
      depthTest = true,
      depthWrite = true,
      depthFunc = renderer.gl.LESS,
      blending = 1,
      blendFunc,
      blendEquation,
    } = options;
    this.id = id || uid('program');
    const defs: string[] = [
      ...getDefines({
        ...options,
        ...uniforms,
      }),
      ...defines,
    ].map((str) => (!str.startsWith('#define ') ? '#define '.concat(str) : str));

    if (!vertexShader || !fragmentShader) {
      throw new Error(`Program: ${this.id}：must provide vertexShader and fragmentShader`);
    }

    this.#vs = typeof vertexShader === 'string' ? new VertexShader(renderer, parseShader(vertexShader, defs), includes) : vertexShader;
    this.#fs = typeof fragmentShader === 'string' ? new FragmentShader(renderer, parseShader(fragmentShader, defs), includes) : fragmentShader;

    this.gl.attachShader(this.handle, this.#vs.handle);
    this.gl.attachShader(this.handle, this.#fs.handle);
    this.gl.linkProgram(this.handle);
    this.gl.validateProgram(this.handle);
    if (!this.gl.getProgramParameter(this.handle, this.gl.LINK_STATUS)) {
      throw new Error(
        'Program:'
          .concat(this.id, ': Error linking ')
          .concat(this.gl.getProgramInfoLog(this.handle) as string),
      );
    }

    this.uniforms = uniforms;

    this.#renderState = {
      blending,
      cullFace,
      frontFace,
      depthTest,
      depthWrite,
      depthFunc,
      blendFunc,
      blendEquation,
    };

    this.#uniformLocations = new Map();
    this.#attributeLocations = new Map();

    this.#assignUniforms(uniforms);

    this.#assignAttributes();
    if (transparent && !blendFunc?.src) {
      if (this.renderer.premultipliedAlpha) {
        this.#renderState.blendFunc = {
          ...blendFunc,
          src: this.gl.ONE,
          dst: this.gl.ONE_MINUS_SRC_ALPHA,
        };
      } else {
        this.#renderState.blendFunc = {
          ...blendFunc,
          src: this.gl.SRC_ALPHA,
          dst: this.gl.ONE_MINUS_SRC_ALPHA,
        };
      }
    }
  }

  get uniformLocations() {
    return this.#uniformLocations;
  }

  get attributeLocations() {
    return this.#attributeLocations;
  }

  /**
   * 获取 `VertexShader` 对象
   */
  get vertexShader() {
    return this.#vs;
  }

  /**
   * 获取 `FragmentShader` 对象
   */
  get fragmentShader() {
    return this.#fs;
  }

  /**
   *
   */
  use() {
    const programActive = this.rendererState.currentProgramId === this.id;
    let textureUnit = -1;
    if (!programActive) {
      this.gl.useProgram(this.handle);
      this.rendererState.currentProgramId = this.id;
    }

    this.#uniformLocations.forEach((location, activeUniform) => {
      const name = activeUniform.name;

      const uniform = this.uniforms[name];

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

  /**
   * 设置 Program 的 render state
   * @param states
   * @param merge 是否使用合并模式，如果为 `false` 则直接替换
   */
  setStates(states: Partial<ProgramRenderState>, merge = true) {
    if (!merge) {
      this.#renderState = states;
    } else {
      this.#renderState = {
        ...this.#renderState,
        ...omit(states, ['blendFunc', 'blendEquation']),
      } as ProgramRenderState;
      if (states.blendFunc) {
        this.#renderState.blendFunc = {
          ...this.#renderState.blendFunc,
          ...states.blendFunc,
        };
      }
      if (states.blendEquation) {
        this.#renderState.blendEquation = {
          ...this.#renderState.blendEquation,
          ...states.blendEquation,
        };
      }
    }
  }

  applyState() {
    this.rendererState.apply(this.#renderState);
  }

  /**
   * 设置对应的 Uniform 值
   * @param key
   * @param value
   */
  setUniform(key, value) {
    if (this.uniforms[key]) {
      this.uniforms[key].value = value;
    }
  }

  /**
   * 使用此 Program
   */
  bind() {
    this.gl.useProgram(this.handle);
  }

  /**
   * 取消使用此 `Program`
   */
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
      if (!isUndef(v) && !isNull(v)) {
        uniformData.value = uniforms[name].value;
      }
      this.uniforms[name] = uniformData;
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

  /**
   * 销毁此`Program`
   */
  destroy() {
    this.unbind();
    this.deleteHandle();
  }
}
