import type { WithNull } from '../types';
import { isNull, isUndef } from '../utils';
import Color, { ColorLike } from '../math/Color';
import Base from './Base';
import Renderer from './Renderer';

export enum BlendType {
  NoBlending = 0,
  NormalBlending = 1,
  AdditiveBlending = 2,
  SubtractiveBlending = 3,
  MultiplyBlending = 4,
  CustomBlending = 5,
}

type IBlendType = BlendType;

type FBOData = {
  target?: GLenum;
  buffer: WithNull<WebGLFramebuffer>;
};

interface StateOptions {
  textureUnits: (number | string)[];
  activeTextureUnit: number;
  activeGeometryId: string | number;
  currentProgramId: string | number;

  boundBuffer: WebGLBuffer | null;

  colorMask: boolean;

  blending: IBlendType;

  premultiplyAlpha: boolean;

  blendFunc: {
    src: number;
    dst: number;
    srcAlpha?: number;
    dstAlpha?: number;
  };

  blendEquation: {
    modeRGB: number;
    modeAlpha?: number;
  };

  stencil: {
    mask: GLenum;
    func: {
      cmp: GLenum;
      ref: GLenum;
      mask: GLenum;
    };
    opFront: {
      fail: GLenum;
      zFail: GLenum;
      zPass: GLenum;
    };
    opBack: {
      fail: GLenum;
      zFail: GLenum;
      zPass: GLenum;
    };
  };

  clearAlpha: number;

  clearColor: ColorLike;

  cullFace: GLenum;

  frontFace: GLenum;

  depthMask: boolean;

  depthFunc: GLenum;

  depthTest: boolean;

  depthWrite: boolean;

  unpackAlignment: number;

  flipY: boolean;

  anisotropy: number;

  lineWidth: number;

  polygonOffset: boolean;

  polygonOffsetFactor: GLenum;

  polygonOffsetUnits: GLenum;

  framebuffer: WithNull<WebGLFramebuffer>;

  viewport: { x: number; y: number; width: number; height: number };
}

interface IState extends StateOptions {
  framebuffer: WithNull<WebGLFramebuffer>;
}

/**
 * 渲染状态管理，目的是减少CPU与GPU的交互，一般我们不需要主动创建，它默认包含在 `Renderer` 实例中。
 */
export default class State extends Base {
  #state: IState;

  constructor(renderer: Renderer, options?: Partial<StateOptions>) {
    super(renderer);
    const { gl } = renderer;
    this.#state = {
      viewport: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
    } as IState;
    this.apply(
      options ||
        ({
          frontFace: gl.CCW,
          depthTest: false,
          depthWrite: true,
          depthMask: true,
          depthFunc: gl.LESS,
          blending: BlendType.NormalBlending,
          blendFunc: {
            src: gl.ONE,
            dst: gl.ZERO,
          },
          blendEquation: {
            modeRGB: gl.FUNC_ADD,
          },
          premultiplyAlpha: false,
          unpackAlignment: 4,
          flipY: false,
          framebuffer: null,
          textureUnits: [],
          activeTextureUnit: -1,
          activeGeometryId: -1,
          currentProgramId: -1,
          clearAlpha: 1,
          clearColor: new Color(0),
          stencil: {
            func: {},
            opFront: {},
            opBack: {},
          },
        } as unknown as StateOptions),
    );
  }

  /**
   * 获取所有状态
   */
  get state() {
    return this.#state;
  }

  /**
   * 获取视图
   */
  get viewport() {
    return this.#state.viewport;
  }

  /**
   * 获取当前 `gl` 的纹理单位
   */
  get textureUnits() {
    return this.#state.textureUnits;
  }

  /**
   * 获取已激活的纹理
   */
  get activeTextureUnit() {
    return this.#state.activeTextureUnit;
  }

  /**
   * 设置当前激活的纹理
   * @param activeTextureUnit
   */
  set activeTextureUnit(activeTextureUnit) {
    this.#state.activeTextureUnit = activeTextureUnit;
  }

  /**
   * 获取当前的 `Program` id
   */
  get currentProgramId() {
    return this.#state.currentProgramId;
  }

  /**
   * 设置当前的 `Program` id
   * @param id
   */
  set currentProgramId(id: string | number) {
    this.#state.currentProgramId = id;
  }

  /**
   * 获取当前激活的几何体 id
   */
  get activeGeometryId() {
    return this.#state.activeGeometryId;
  }

  /**
   * 设置当前激活的几何体 id
   * @param id
   */
  set activeGeometryId(id: string | number) {
    this.#state.activeGeometryId = id;
  }

  /**
   * 设置 `flipY`
   * @param flipY
   */
  set flipY(flipY: boolean) {
    this.#state.flipY = flipY;
  }

  /**
   * 获取 `flipY` 配置
   */
  get flipY(): boolean {
    return this.#state.flipY;
  }

  /**
   * 设置 `unpackAlignment`
   * @param unpackAlignment
   */
  set unpackAlignment(unpackAlignment: number) {
    this.#state.unpackAlignment = unpackAlignment;
  }

  /**
   * 获取 `unpackAlignment` 配置
   */
  get unpackAlignment(): number {
    return this.#state.unpackAlignment;
  }

  /**
   * 设置 `premultipliedAlpha`
   * @param premultiplyAlpha
   */
  set premultiplyAlpha(premultiplyAlpha: boolean) {
    this.#state.premultiplyAlpha = premultiplyAlpha;
  }

  /**
   * 获取 `premultipliedAlpha` 配置
   */
  get premultiplyAlpha(): boolean {
    return this.#state.premultiplyAlpha;
  }

  /**
   * 设置最后一次绑定的顶点数据
   * @param boundBuffer
   */
  set boundBuffer(boundBuffer) {
    this.#state.boundBuffer = boundBuffer;
  }

  /**
   * 获取最后一次绑定的顶点数据
   */
  get boundBuffer() {
    return this.#state.boundBuffer;
  }

  /**
   * 配置 `anisotropy`
   * @param anisotropy
   */
  set anisotropy(anisotropy: number) {
    this.#state.anisotropy = anisotropy;
  }

  /**
   * 获取 `anisotropy` 配置
   */
  get anisotropy() {
    return this.#state.anisotropy;
  }

  /**
   * apply options 并且更新状态
   * @param options
   */
  apply(options: Partial<StateOptions>) {
    if (options.blending !== undefined && options.blending !== null) {
      this.setBlending(options.blending, options);
    } else {
      if (options.blendFunc) {
        const { src, dst, srcAlpha, dstAlpha } = options.blendFunc;
        this.setBlendFunc(src, dst, srcAlpha, dstAlpha);
        this.enable(this.gl.BLEND);
      } else {
        this.disable(this.gl.BLEND);
      }
      if (options.blendEquation) {
        const { modeRGB, modeAlpha } = options.blendEquation;
        this.setBlendEquation(modeRGB, modeAlpha);
      }
    }

    if (!isUndef(options.cullFace) && !isNull(options.cullFace)) {
      this.setCullFace(options.cullFace);
    }
    if (!isUndef(options.frontFace) && !isNull(options.frontFace)) {
      this.setFrontFace(options.frontFace);
    }

    if (options.depthTest) {
      this.enable(this.gl.DEPTH_TEST);
    } else {
      this.disable(this.gl.DEPTH_TEST);
    }

    if (!isUndef(options.depthMask) && !isNull(options.depthMask)) {
      this.setDepthMask(options.depthMask);
    }

    if (!isUndef(options.depthWrite) && !isNull(options.depthWrite)) {
      this.setDepthMask(options.depthWrite);
    }

    if (!isUndef(options.depthFunc) && !isNull(options.depthFunc)) {
      this.setDepthFunc(options.depthFunc);
    }

    if (!isUndef(options.lineWidth) && !isNull(options.lineWidth)) {
      this.setLineWidth(options.lineWidth);
    }

    this.#state = Object.assign(this.#state, options);
  }

  /**
   * 开启诸如 `DEPTH_TEST`、`BLEND` 等功能
   * @param id
   */
  enable(id) {
    if (this.#state[id] !== true) {
      this.gl.enable(id);
      this.#state[id] = true;
    }
  }

  /**
   * 关闭诸如 `DEPTH_TEST`、`BLEND` 等功能
   * @param id
   */
  disable(id) {
    if (this.#state[id] !== false) {
      this.gl.disable(id);
      this.#state[id] = false;
    }
  }

  /**
   * 设置 Viewport
   * @param width
   * @param height
   * @param x
   * @param y
   */
  setViewport(width, height, x = 0, y = 0) {
    if (this.#state.viewport.width === width && this.#state.viewport.height === height) return;
    this.gl.viewport(x, y, width, height);
    this.#state.viewport = {
      width,
      height,
      x,
      y,
    };
  }

  /**
   * 设置颜色缓冲的状态
   * 模板缓冲可以实现渲染剔除，需要遮罩的话，可能希望只绘制模板缓冲而不绘制颜色缓冲
   * gl.colorMask(false, false, false, false)：关闭颜色缓冲的所有通道
   * gl.colorMask(true, true, true, true)：开启颜色缓冲的所有通道
   * @param colorMask
   */
  setMask(colorMask: boolean) {
    if (this.#state.colorMask !== colorMask) {
      this.gl.colorMask(colorMask, colorMask, colorMask, colorMask);
      this.#state.colorMask = colorMask;
    }
  }

  /**
   * 指定渲染时的颜色混合方式
   * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
   * @param blending
   * @param options
   */
  setBlending(blending: IBlendType, options?: Partial<StateOptions>) {
    this.#state.blending = blending;
    if (blending === BlendType.NoBlending) {
      this.disable(this.gl.BLEND);
      return;
    } else {
      this.enable(this.gl.BLEND);
    }
    if (blending === BlendType.AdditiveBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ONE, this.gl.ONE, this.gl.ONE, this.gl.ONE);
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
      }
    } else if (blending === BlendType.SubtractiveBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(
          this.gl.ZERO,
          this.gl.ZERO,
          this.gl.ONE_MINUS_SRC_COLOR,
          this.gl.ONE_MINUS_SRC_ALPHA,
        );
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.ONE_MINUS_SRC_COLOR);
      }
    } else if (blending === BlendType.MultiplyBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.SRC_ALPHA);
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.SRC_COLOR);
      }
    } else if (blending === BlendType.NormalBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(
          this.gl.ONE,
          this.gl.ONE_MINUS_SRC_ALPHA,
          this.gl.ONE,
          this.gl.ONE_MINUS_SRC_ALPHA,
        );
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(
          this.gl.SRC_ALPHA,
          this.gl.ONE_MINUS_SRC_ALPHA,
          this.gl.ONE,
          this.gl.ONE_MINUS_SRC_ALPHA,
        );
      }
    } else if (blending === BlendType.CustomBlending) {
      if (options?.blendFunc) {
        const { src, dst, srcAlpha, dstAlpha } = options.blendFunc;
        this.setBlendFunc(src, dst, srcAlpha, dstAlpha);
        this.enable(this.gl.BLEND);
      }
      if (options?.blendEquation) {
        const { modeRGB, modeAlpha } = options.blendEquation;
        this.setBlendEquation(modeRGB, modeAlpha);
      }
    } else {
      console.error('State: Invalid blending: ', blending);
    }
  }

  /**
   * 设置混合方式
   * @param src
   * @param dst
   * @param srcAlpha
   * @param dstAlpha
   */
  setBlendFunc(src: number, dst: number, srcAlpha?: number, dstAlpha?: number) {
    if (
      src !== this.#state.blendFunc?.src ||
      dst !== this.#state.blendFunc?.dst ||
      srcAlpha !== this.#state.blendFunc?.srcAlpha ||
      dstAlpha !== this.#state.blendFunc?.dstAlpha
    ) {
      this.#state.blendFunc = {
        src,
        dst,
        srcAlpha,
        dstAlpha,
      };
      if (!isUndef(srcAlpha) && !isNull(srcAlpha) && !isUndef(dstAlpha) && !isNull(dstAlpha)) {
        this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
      } else {
        this.gl.blendFunc(src, dst);
      }
    }
  }

  /**
   * 设置 blendEquation
   * gl.FUNC_ADD：相加处理
   * gl.FUNC_SUBTRACT：相减处理
   * gl.FUNC_REVERSE_SUBSTRACT：反向相减处理，即 dest 减去 source
   *
   * @param modeRGB
   * @param modeAlpha
   */
  setBlendEquation(modeRGB: number, modeAlpha?: number) {
    if (
      modeRGB !== this.#state.blendEquation?.modeRGB ||
      modeAlpha !== this.#state.blendEquation?.modeAlpha
    ) {
      this.#state.blendEquation = {
        modeRGB,
        modeAlpha,
      };

      if (!isUndef(modeAlpha) && !isNull(modeAlpha)) {
        this.gl.blendEquationSeparate(modeRGB, modeAlpha);
      } else {
        this.gl.blendEquation(modeRGB);
      }
    }
  }

  /**
   * 设置当前 State 下的清屏的透明度
   * @param alpha
   */
  setClearAlpha(alpha: number) {
    if (this.#state.clearAlpha !== alpha) {
      this.#state.clearAlpha = alpha;
    }
  }

  /**
   * 设置清屏颜色和透明度值
   * @param color 颜色
   * @param alpha 透明度
   */
  setClearColor(color: ColorLike, alpha?: number) {
    if (this.#state.clearAlpha !== alpha || this.#state.clearColor !== color) {
      this.#state.clearColor = color;
      if (!isUndef(alpha) && !isNull(alpha)) {
        this.#state.clearAlpha = alpha;
      } else {
        this.#state.clearAlpha = color.a as number;
      }
      this.gl.clearColor(color.r, color.g, color.b, this.#state.clearAlpha);
    }
  }

  /**
   * 设置背面剔除方式
   * @param cullFace
   */
  setCullFace(cullFace: GLenum) {
    if (this.#state.cullFace !== cullFace) {
      if (cullFace) {
        this.gl.enable(this.gl.CULL_FACE);
      } else {
        this.gl.disable(this.gl.CULL_FACE);
      }

      this.#state.cullFace = cullFace;
      this.gl.cullFace(cullFace);
    }
  }

  /**
   * 设置正面三角形顶点顺序
   * 绘制立体图形时会使用三角形的顶点顺序来决定三角形的面是否朝向观察者，背向观察者的三角形一般不进行光栅化处理，绘制时会被剔除
   * @param frontFace
   */
  setFrontFace(frontFace: GLenum) {
    if (this.#state.frontFace !== frontFace) {
      this.#state.frontFace = frontFace;
      this.gl.frontFace(frontFace);
    }
  }

  /**
   * 设置深度缓冲区的写入操作方式（只读或者可写）
   * @param mask
   */
  setDepthMask(mask: boolean) {
    if (this.#state.depthMask !== mask) {
      this.#state.depthMask = mask;
      this.gl.depthMask(mask);
    }
  }

  /**
   * 指定将输入像素深度与当前深度缓冲区值进行比较的函数
   * @param func
   */
  setDepthFunc(func: GLenum) {
    if (this.#state.depthFunc !== func) {
      this.#state.depthFunc = func;
      this.gl.depthFunc(func);
    }
  }

  /**
   * 设置是否开启深度测试
   * @param state
   */
  setDepthTest(state: boolean) {
    if (this.#state.depthTest !== state) {
      this.#state.depthTest = state;
      if (state) {
        this.enable(this.gl.DEPTH_TEST);
      } else {
        this.disable(this.gl.DEPTH_TEST);
      }
    }
  }

  /**
   * 设置模板缓冲测试方式
   * @param cmp 指定比较方式
   * @param ref 用来做stencil测试的参考值
   * @param mask 指定操作掩码，在测试的时候会先将ref与mask进行与运算
   * @param face
   */
  setStencilFunc(cmp: GLenum, ref: GLenum, mask: GLenum, face?: GLenum) {
    if (
      this.#state?.stencil?.func?.cmp !== cmp ||
      this.#state?.stencil?.func?.ref !== ref ||
      this.#state?.stencil?.func?.mask !== mask
    ) {
      if (!this.#state?.stencil) {
        this.#state.stencil = {} as StateOptions['stencil'];
      }
      if (!this.#state?.stencil?.func) {
        this.#state.stencil.func = {} as StateOptions['stencil']['func'];
      }
      this.#state.stencil.func = {
        ref,
        mask,
        cmp,
      };
      if (face) {
        this.gl.stencilFuncSeparate(face, cmp, ref, mask);
      } else {
        this.gl.stencilFunc(cmp, ref, mask);
      }
    }
  }

  /**
   * 设置模板测试的操作
   * @param fail 指定模板测试失败时要使用的操作。默认值为 `gl.KEEP`
   * @param zFail 指定模板测试通过但深度测试失败时要使用的操作。默认值为 `gl.KEEP`
   * @param zPass 指定当模板测试和深度测试都通过时使用的操作，或者当模板测试通过但没有深度缓冲区或深度测试被禁用时使用的操作。默认值为 `gl.KEEP`
   * @param face
   */
  setStencilOp(fail, zFail, zPass, face?: GLenum) {
    const flag = false;

    if (!this.#state?.stencil) {
      this.#state.stencil = {} as StateOptions['stencil'];
    }

    if (!face || face === this.gl.FRONT_AND_BACK) {
      return (
        this.#state.stencil?.opFront?.fail !== fail ||
        this.#state.stencil?.opFront?.zFail !== zFail ||
        this.#state.stencil?.opFront?.zPass !== zPass ||
        this.#state.stencil?.opBack?.fail !== fail ||
        this.#state.stencil?.opBack?.zFail !== zFail ||
        this.#state.stencil?.opBack?.zPass !== zPass
      );
    } else if (face === this.gl.FRONT) {
      return (
        this.#state.stencil?.opFront?.fail !== fail ||
        this.#state.stencil?.opFront?.zFail !== zFail ||
        this.#state.stencil?.opFront?.zPass !== zPass
      );
    } else if (face === this.gl.BACK) {
      return (
        this.#state.stencil?.opBack?.fail !== fail ||
        this.#state.stencil?.opBack?.zFail !== zFail ||
        this.#state.stencil?.opBack?.zPass !== zPass
      );
    }

    if (flag) {
      if (face) {
        if (!this.#state.stencil?.opFront) {
          this.#state.stencil.opFront = {} as StateOptions['stencil']['opFront'];
        }
        if (!this.#state.stencil?.opBack) {
          this.#state.stencil.opBack = {} as StateOptions['stencil']['opBack'];
        }
        if (face === this.gl.FRONT_AND_BACK) {
          this.#state.stencil.opFront.fail = fail;
          this.#state.stencil.opFront.zFail = zFail;
          this.#state.stencil.opFront.zPass = zPass;
          this.#state.stencil.opBack.fail = fail;
          this.#state.stencil.opBack.zFail = zFail;
          this.#state.stencil.opBack.zPass = zPass;
        } else if (face === this.gl.FRONT) {
          this.#state.stencil.opFront.fail = fail;
          this.#state.stencil.opFront.zFail = zFail;
          this.#state.stencil.opFront.zPass = zPass;
        } else if (face === this.gl.BACK) {
          this.#state.stencil.opBack.fail = fail;
          this.#state.stencil.opBack.zFail = zFail;
          this.#state.stencil.opBack.zPass = zPass;
        }

        this.gl.stencilOpSeparate(face, fail, zFail, zPass);
      } else {
        this.#state.stencil.opFront.fail = fail;
        this.#state.stencil.opFront.zFail = zFail;
        this.#state.stencil.opFront.zPass = zPass;
        this.#state.stencil.opBack.fail = fail;
        this.#state.stencil.opBack.zFail = zFail;
        this.#state.stencil.opBack.zPass = zPass;
        this.gl.stencilOp(fail, zFail, zPass);
      }
    }
  }

  /**
   * 设置模版测试的操作掩码
   * @param mask
   * @param face
   */
  setStencilMask(mask, face?: GLenum) {
    if (this.#state.stencil?.mask !== mask) {
      this.#state.stencil = {
        ...this.#state.stencil,
        mask,
      };
      if (face) {
        this.gl.stencilMaskSeparate(face, mask);
      } else {
        this.gl.stencilMask(mask);
      }
    }
  }

  /**
   * 设置当前激活的纹理单位
   * @param unit
   */
  setActiveTexture(unit) {
    if (this.#state.activeTextureUnit !== unit) {
      this.#state.activeTextureUnit = unit;
      this.gl.activeTexture(this.gl.TEXTURE0 + unit);
    }
  }

  /**
   * 设置 webgl 的线宽（注意大部分浏览器下是有 BUG 的）
   * @param width
   */
  setLineWidth(width) {
    if (this.#state.lineWidth !== width) {
      this.#state.lineWidth = width;
      this.gl.lineWidth(width);
    }
  }

  /**
   * 设置深度值的偏移量，主要可以用于解决当几何图形或物体的两个表面非常接近时会出现的深度冲突(Z fighting)。
   * 原因是因为两个表面过于接近，深度缓冲区有限的精度无法区分哪个在前哪个在后。
   *
   * gl.polygonOffset(factor, units)方法指定加到每个顶点绘制后Z值上的偏移量，
   * 偏移量按照公式 `m*factor+r*units` 计算，其中m表示顶点所在表面相对于观察者的视线的角度，
   * 而r表示硬件能够区分两个Z值之差的最小值
   * @param polygonOffset
   * @param factor
   * @param units
   */
  setPolygonOffset(polygonOffset, factor, units) {
    if (polygonOffset) {
      this.enable(this.gl.POLYGON_OFFSET_FILL);
      if (this.#state.polygonOffsetFactor !== factor || this.#state.polygonOffsetUnits !== units) {
        this.gl.polygonOffset(factor, units);

        this.#state.polygonOffsetFactor = factor;
        this.#state.polygonOffsetUnits = units;
      }
    } else {
      this.disable(this.gl.POLYGON_OFFSET_FILL);
    }
  }

  /**
   * 绑定或者解绑 FBO
   * @param v
   */
  bindFramebuffer(v: FBOData = {} as FBOData) {
    const { target = this.gl.FRAMEBUFFER, buffer = null } = v;
    if (this.#state.framebuffer !== buffer) {
      this.#state.framebuffer = buffer;
      this.gl.bindFramebuffer(target, buffer);
    }
  }

  /**
   * 设置当前激活的 Geometry
   * @param id
   */
  setActiveGeometry(id) {
    this.#state.activeGeometryId = id;
  }

  /**
   * 重置 `State`
   * @param force
   */
  reset(force = true) {
    const keys = Object.keys(this.#state);
    if (force) {
      keys
        .filter((key) => ['viewport', 'premultiplyAlpha'].indexOf(key) < 0)
        .forEach((key) => {
          delete this.#state[key];
        });
      this.bindFramebuffer({
        buffer: null,
      });
      this.apply({
        frontFace: this.gl.CCW,
        depthTest: false,
        depthWrite: true,
        depthMask: true,
        depthFunc: this.gl.LESS,
        blending: BlendType.NormalBlending,
        blendFunc: {
          src: this.gl.ONE,
          dst: this.gl.ZERO,
        },
        blendEquation: {
          modeRGB: this.gl.FUNC_ADD,
        },
        premultiplyAlpha: false,
        unpackAlignment: 4,
        flipY: false,
        framebuffer: null,
        textureUnits: [],
        activeTextureUnit: -1,
        activeGeometryId: -1,
        currentProgramId: -1,
        clearAlpha: 1,
        clearColor: new Color(0),
        stencil: {
          func: {},
          opFront: {},
          opBack: {},
        },
      } as unknown as StateOptions);
    } else {
      keys
        .filter(
          (key) =>
            [
              'flipY',
              'framebuffer',
              'textureUnits',
              'activeTextureUnit',
              'activeGeometryId',
              'currentProgramId',
            ].indexOf(key) > -1,
        )
        .forEach((key) => {
          delete this.#state[key];
        });

      this.bindFramebuffer({
        buffer: null,
      });

      this.#state.flipY = false;
      this.#state.activeGeometryId = -1;
      this.#state.activeTextureUnit = -1;
      this.#state.currentProgramId = -1;
      this.#state.textureUnits = [];
      this.#state.boundBuffer = null;
    }
  }
}
