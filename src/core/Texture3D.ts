import { isPowerOfTwo } from '../utils/math';
import Texture, { emptyPixel, TextureState, TextureOptions } from './Texture';
import Renderer from './Renderer';
import { isNumber } from '../utils';

export interface Texture3DOptions extends TextureOptions {
  /**
   * 默认为 `gl.TEXTURE_3D`
   */
  target: GLenum;

  /**
   * 深度采样纹理时使用的行为, 仅在 `Texture3D` 时可用。
   * 可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`
   */
  wrapR: number;

  /**
   * [GLenum](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Types) 制定纹素的版本。正确的 内部格式 组合被列举在 [这个列表](https://www.khronos.org/registry/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE)。
   */
  format: number;

  /**
   * 用于指定纹理图像的内部格式
   * 可能的值：`gl.RGBA`，`gl.RGB`，`gl.ALPHA` 等等
   */
  internalFormat: number;

  /**
   * 指定纹理数据的数据类型。
   * 可能的值：`gl.UNSIGNED_BYTE`，`gl.FLOAT`，`gl.UNSIGNED_SHORT`，`gl.UNSIGNED_INT` 等等
   * 可以查看[texImage3D](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL2RenderingContext/texImage3D) 来
   * 获取更多信息
   */
  type: number;

  /**
   * 指定纹理深度，默认为`0`
   */
  depth: number;

  /**
   * 纹理数据
   */
  image: any;
}

interface Texture3DState extends TextureState {
  wrapR: GLenum;
}

/**
 * 纹理
 * 一般在 `webgl` 中会将纹理用于贴图，或者作为 `renderTarget`
 * 代码示例：
 * ```ts
 * const texture = new ve.Texture3D(renderer, {
 *   generateMipmaps: true,
 *   flipY: true,
 * });
 *
 * const image = new Image();
 *
 * image.onload = () => {
 *   texture.setData(image, image.width, image.height);
 * };
 *
 * image.src = './assets/posx.jpg';
 * ```
 */
export default class Texture3D extends Texture<Texture3DOptions> {
  /**
   * 设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
   * 这样会在下一次渲染时应用对应的纹理数据和配置。
   */
  public needsUpdate = false;

  /**
   * 设置纹理单位
   */
  public textureUnit = 0;

  /**
   * 纹理深度
   */
  public depth: number;

  #state: Texture3DState = {} as Texture3DState;

  /**
   * @param renderer Renderer 对象
   * @param options 配置项
   */
  constructor(renderer: Renderer, options: Partial<Texture3DOptions> = {}) {
    const gl = renderer.gl as WebGL2RenderingContext;
    const defaultOptions = {
      target: gl.TEXTURE_3D,
      type: gl.UNSIGNED_BYTE,
      format: gl.RGBA,
      internalFormat: options.internalFormat || gl.RGBA,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
      wrapR: gl.CLAMP_TO_EDGE,
      generateMipmaps: true,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      premultiplyAlpha: false,
      unpackAlignment: 4,
      flipY: false,
      level: 0,
      depth: 0,
    };

    const opt = Object.assign({}, defaultOptions, options);
    super(renderer, opt, false);

    this.needsUpdate = true;
    this.depth = this.options.depth as number;
    this.#state.version = -1;
    this.update();
  }

  /**
   * 获取 `webgl` 实例
   */
  get gl(): WebGL2RenderingContext {
    return this.renderer.gl as WebGL2RenderingContext;
  }

  /**
   * 设置纹理数据
   * @param image 纹理数据
   * @param width 纹理宽度，默认为原始宽度
   * @param height 纹理高度，默认为原始高度
   * @param depth
   */
  setData(image, width = this.width, height = this.height, depth = this.depth) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.needsUpdate = true;
  }

  /**
   * 设置纹理配置（默认进行合并）
   * @param options 配置项
   */
  setOptions(options: Partial<Texture3DOptions>) {
    this.options = Object.assign(this.options, options);
    this.width = this.options.width as number;
    this.height = this.options.height as number;
    this.depth = this.options.depth as number;
    this.needsUpdate = true;
  }

  /**
   * 更新纹理数据或者纹理相关配置
   * @param units 纹理单位，默认为 0
   */
  update(units = 0) {
    const needUpdate = !(this.image === this.#state.image && !this.needsUpdate);
    const checked =
      needUpdate ||
      this.rendererState.textureUnits[units] !== this.id ||
      this.rendererState.activeTextureUnit !== units;
    if (checked) {
      this.rendererState.setActiveTexture(units);
      this.bind(units);
    }
    if (!needUpdate) return;
    this.needsUpdate = false;
    if (this.options.wrapS !== this.#state.wrapS) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.options.wrapS as GLenum);
      this.#state.wrapS = this.options.wrapS as GLenum;
    }
    if (this.options.wrapT !== this.#state.wrapT) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.options.wrapT as GLenum);
      this.#state.wrapT = this.options.wrapT as GLenum;
    }
    if (this.options.wrapR !== this.#state.wrapR) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.options.wrapR as GLenum);
      this.#state.wrapR = this.options.wrapR as GLenum;
    }
    if (this.options.minFilter !== this.#state.minFilter) {
      this.gl.texParameteri(
        this.target,
        this.gl.TEXTURE_MIN_FILTER,
        this.options.minFilter as GLenum,
      );
      this.#state.minFilter = this.options.minFilter as GLenum;
    }
    if (this.options.magFilter !== this.#state.magFilter) {
      this.gl.texParameteri(
        this.target,
        this.gl.TEXTURE_MAG_FILTER,
        this.options.magFilter as GLenum,
      );
      this.#state.magFilter = this.options.magFilter as GLenum;
    }
    if (this.options.flipY !== this.rendererState.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.options.flipY as boolean);
      this.rendererState.flipY = this.options.flipY as boolean;
    }
    if (this.options.premultiplyAlpha !== this.rendererState.premultiplyAlpha) {
      this.gl.pixelStorei(
        this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        this.options.premultiplyAlpha as boolean,
      );
      this.rendererState.premultiplyAlpha = this.options.premultiplyAlpha as boolean;
    }
    if (this.options.unpackAlignment !== this.rendererState.unpackAlignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.options.unpackAlignment as GLenum);
      this.rendererState.unpackAlignment = this.options.unpackAlignment as number;
    }

    if (this.options.anisotropy && this.options.anisotropy !== this.rendererState.anisotropy) {
      const extTextureFilterAnisotropic =
        this.gl.getExtension('EXT_texture_filter_anisotropic') ||
        this.gl.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
        this.gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
      if (extTextureFilterAnisotropic) {
        const max = this.gl.getParameter(
          extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
        );
        let v = this.options.anisotropy;
        if (this.options.anisotropy > max) {
          v = max;
          console.warn(
            `[Texture]: Texture.anisotropy option exceeded the maximum allowed value ${max} of the device`,
          );
        }
        this.gl.texParameterf(
          this.target,
          extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,
          v,
        );
      }
      this.rendererState.anisotropy = this.options.anisotropy;
    }

    if (this.image) {
      if (this.image.width) {
        this.width = this.image.width;
        this.height = this.image.height;
      }

      if (this.renderer.isWebGL2 && isNumber(this.options.offset)) {
        this.gl.texImage3D(
          this.target,
          this.options.level as GLenum,
          this.options.internalFormat as GLenum,
          this.width,
          this.height,
          this.depth,
          0,
          this.options.format as GLenum,
          this.options.type as GLenum,
          this.image,
          this.options.offset,
        );
      } else {
        if (ArrayBuffer.isView(this.image)) {
          this.gl.texImage3D(
            this.target,
            this.options.level as GLenum,
            this.options.internalFormat as GLenum,
            this.width,
            this.height,
            this.depth,
            0,
            this.options.format as GLenum,
            this.options.type as GLenum,
            this.image,
          );
        } else {
          this.gl.texImage3D(
            this.target,
            this.options.level as GLenum,
            this.options.internalFormat as GLenum,
            this.width,
            this.height,
            this.depth,
            0,
            this.options.format as GLenum,
            this.options.type as GLenum,
            this.image,
          );
        }
      }

      if (this.options.generateMipmaps) {
        if (
          this.renderer.isWebGL2 ||
          (isPowerOfTwo(this.image.width) && isPowerOfTwo(this.image.height))
        ) {
          this.gl.generateMipmap(this.target);
        } else {
          this.options.generateMipmaps = false;
          this.options.wrapS = this.gl.CLAMP_TO_EDGE;
          this.options.wrapT = this.options.wrapS;
          this.options.minFilter = this.gl.LINEAR;
        }
      }
    } else {
      if (this.width > 0) {
        this.gl.texImage3D(
          this.target,
          this.options.level as GLenum,
          this.options.internalFormat as GLenum,
          this.width,
          this.height,
          this.depth,
          0,
          this.options.format as GLenum,
          this.options.type as GLenum,
          null,
        );
      } else {
        this.gl.texImage3D(
          this.target,
          0,
          this.gl.RGBA,
          1,
          1,
          this.depth,
          0,
          this.gl.RGBA,
          this.gl.UNSIGNED_BYTE,
          emptyPixel,
        );
      }
    }
    this.#state.image = this.image;
    this.#state.version += 1;
  }

  /**
   * 移除相关状态
   */
  removeStats() {
    this.#state = {
      version: -1,
    } as Texture3DState;
  }

  /**
   * 获取字符串数据
   */
  toString(): string {
    return `Texture3D(${this.id},${this.width}x${this.height})`;
  }
}
