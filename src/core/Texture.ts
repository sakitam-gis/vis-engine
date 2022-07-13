import { isPowerOfTwo } from '../utils/math';
import Resource from './Resource';
import Renderer from './Renderer';

export interface TextureOptions {
  /**
   * 纹理宽度，默认为 0
   */
  width: number;

  /**
   * 纹理高度，默认为 0
   */
  height: number;

  /**
   * 纹理放大时使用的过滤类型。
   * 可能的值：`gl.NEAREST`，`gl.LINEAR`
   */
  magFilter: number;

  /**
   * 纹理缩小时使用的过滤类型。
   * 可能的值：`gl.NEAREST`，`gl.LINEAR`
   */
  minFilter: number;

  /**
   * 水平采样纹理时使用的行为。
   * 可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`
   */
  wrapS: number;

  /**
   * 垂直采样纹理时使用的行为。
   * 可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`
   */
  wrapT: number;

  /**
   * 深度采样纹理时使用的行为。
   * 可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`
   */
  wrapR: number;

  /**
   * 纹理数据的格式，在 WebGL 1 中，它必须与 internalformat 相同。
   * 可能的值：`gl.RGBA`，`gl.RGB`，`gl.LUMINANCE`，`gl.LUMINANCE_ALPHA`
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
   */
  type: number;

  /**
   * 配置是否启用 `mipmap`，默认为`true`
   * `generateMipmaps`会自动生成若干小尺寸的纹理，根据当前三维物体在屏幕上的大小来自动选择最合适的尺寸。
   * 使用`mipmap`要求纹理的长度和宽度必须是2的整数次幂。
   */
  generateMipmaps: boolean;

  /**
   * 设置纹理上传时是否翻转 Y 轴，默认为 `false`
   */
  flipY: boolean;

  /**
   * 指定内存中每个像素行起点的对齐要求。
   * 可能的值: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
   */
  unpackAlignment: number;

  /**
   * 设置纹理上传时是否预乘 `alpha` 值，默认为 `false`
   */
  premultiplyAlpha: boolean;

  /**
   * 指定mipmap的精细度，级别 0 是基础图像级别，级别 n 是第 n 个 mipmap 缩减级别。默认为 `0`。
   */
  level: number;

  /**
   * 指定纹理深度，默认为`0`
   */
  depth: number;

  /**
   * 纹理数据
   */
  image: any;
}

interface IState {
  version: number;
  image: any;
  wrapS: GLenum;
  wrapT: GLenum;
  minFilter: GLenum;
  magFilter: GLenum;
  flipY: boolean;
  unpackAlignment: number;
  premultiplyAlpha: boolean;
}

/**
 * 纹理
 * 一般在 `webgl` 中会将纹理用于贴图，或者作为 `renderTarget`
 *
 * 代码示例：
 * ```ts
 * const texture = new ve.Texture(renderer, {
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
export default class Texture extends Resource<TextureOptions> {
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
   * 纹理数据
   */
  public image: any;

  /**
   * 纹理宽度
   */
  public width: number;

  /**
   * 纹理高度
   */
  public height: number;

  #state: IState = {} as IState;

  /**
   * @param renderer Renderer 对象
   * @param options 配置项
   * @param needsUpdate 是否需要`update`
   */
  constructor(renderer: Renderer, options: Partial<TextureOptions > = {}, needsUpdate = true) {
    const { gl } = renderer;
    const defaultOptions = {
      type: gl.UNSIGNED_BYTE,
      format: gl.RGBA,
      internalFormat: options.format || gl.RGBA,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
      generateMipmaps: true,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      premultiplyAlpha: false,
      unpackAlignment: 4,
      flipY: false,
      level: 0,
    };

    const opt = Object.assign({}, defaultOptions, options);
    super(renderer, opt);
    this.needsUpdate = false;
    this.textureUnit = 0;
    this.image = this.options.image;
    this.width = this.options.width as number;
    this.height = this.options.height as number;
    this.#state.version = -1;
    this.needsUpdate = Boolean(needsUpdate);
    if (this.needsUpdate) {
      this.update();
    }
  }

  /**
   * 设置纹理数据
   * @param image 纹理数据
   * @param width 纹理宽度，默认为原始宽度
   * @param height 纹理高度，默认为原始高度
   */
  setData(image, width = this.width, height = this.height) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.needsUpdate = true;
  }

  /**
   * 设置纹理配置（默认进行合并）
   * @param options 配置项
   */
  setOptions(options: Partial<TextureOptions>) {
    this.options = Object.assign(this.options, options);
    this.width = this.options.width as number;
    this.height = this.options.height as number;
    this.needsUpdate = true;
  }

  /**
   * 从 Url 设置纹理对象的数据，会默认标记为需要更新 `needsUpdate = true`
   * @param url
   */
  fromSrc(url: string) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        this.setData(image, image.width, image.height);
        resolve(this);
      };
      image.onerror = (e) => {
        reject(e);
      };
      image.crossOrigin = '*';
      image.src = url;
    });
  }

  /**
   * 更新纹理数据或者纹理相关配置
   * @param units 纹理单位，默认为 0
   */
  update(units = 0) {
    const needUpdate = !(this.image === this.#state.image && !this.needsUpdate);
    const checked = needUpdate || this.rendererState.textureUnits[units] !== this.id || this.rendererState.activeTextureUnit !== units;
    if (checked) {
      this.rendererState.setActiveTexture(units);
      this.bind(units);
    }
    if (!needUpdate) return;
    this.needsUpdate = false;
    if (this.options.wrapS !== this.#state.wrapS) {
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.options.wrapS as GLenum);
      this.#state.wrapS = this.options.wrapS as GLenum;
    }
    if (this.options.wrapT !== this.#state.wrapT) {
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.options.wrapT as GLenum);
      this.#state.wrapT = this.options.wrapT as GLenum;
    }
    if (this.options.minFilter !== this.#state.minFilter) {
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.options.minFilter as GLenum);
      this.#state.minFilter = this.options.minFilter as GLenum;
    }
    if (this.options.magFilter !== this.rendererState.magFilter) {
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.options.magFilter as GLenum);
      this.rendererState.magFilter = this.options.magFilter as GLenum;
    }
    if (this.options.flipY !== this.rendererState.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.options.flipY as boolean);
      this.rendererState.flipY = this.options.flipY as boolean;
    }
    if (this.options.premultiplyAlpha !== this.rendererState.premultiplyAlpha) {
      this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.options.premultiplyAlpha as boolean);
      this.rendererState.premultiplyAlpha = this.options.premultiplyAlpha as boolean;
    }
    if (this.options.unpackAlignment !== this.rendererState.unpackAlignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.options.unpackAlignment as GLenum);
      this.rendererState.unpackAlignment = this.options.unpackAlignment as number;
    }
    if (this.image) {
      if (this.image.width) {
        this.width = this.image.width;
        this.height = this.image.height;
      }
      if (ArrayBuffer.isView(this.image)) {
        this.gl.texImage2D(
          this.gl.TEXTURE_2D,
          0,
          this.options.internalFormat as GLenum,
          this.width,
          this.height,
          0,
          this.options.format as GLenum,
          this.options.type as GLenum,
          this.image,
        );
      } else {
        this.gl.texImage2D(
          this.gl.TEXTURE_2D,
          0,
          this.options.internalFormat as GLenum,
          this.options.format as GLenum,
          this.options.type as GLenum,
          this.image,
        );
      }
      if (this.options.generateMipmaps) {
        if (
          this.renderer.isWebGL2
          || isPowerOfTwo(this.image.width)
          && isPowerOfTwo(this.image.height)
        ) {
          this.gl.generateMipmap(this.gl.TEXTURE_2D);
        } else {
          this.options.generateMipmaps = false;
          this.options.wrapS = this.gl.CLAMP_TO_EDGE;
          this.options.wrapT = this.options.wrapS;
          this.options.minFilter = this.gl.LINEAR;
        }
      }
    } else {
      if (this.width > 0) {
        this.gl.texImage2D(
          this.gl.TEXTURE_2D,
          0,
          this.options.internalFormat as GLenum,
          this.width,
          this.height,
          0,
          this.options.format as GLenum,
          this.options.type as GLenum,
          null,
        );
      } else {
        this.gl.texImage2D(
          this.gl.TEXTURE_2D,
          0,
          this.gl.RGBA,
          1,
          1,
          0,
          this.gl.RGBA,
          this.gl.UNSIGNED_BYTE,
          new Uint8Array(4),
        );
      }
    }
    this.#state.image = this.image;
    this.#state.version += 1;
  }

  /**
   * 绑定纹理
   * @param unit 纹理单位，默认为 `this.textureUnit`
   */
  bind(unit = this.textureUnit) {
    if (this.rendererState.textureUnits[this.rendererState.activeTextureUnit] === this.id) return;
    this.textureUnit = unit;
    this.rendererState.textureUnits[this.textureUnit] = this.id;
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
  }

  /**
   * 解绑纹理
   */
  unbind() {
    this.gl.activeTexture(this.gl.TEXTURE0 + this.textureUnit);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    delete this.rendererState.textureUnits[this.textureUnit];
  }

  /**
   * 销毁纹理
   */
  destroy() {
    this.unbind();
    super.destroy();
  }

  /**
   * @private
   * 创建纹理对象
   */
  createHandle() {
    return this.gl.createTexture();
  }

  /**
   * @private
   */
  deleteHandle() {
    if (this.handle) {
      this.gl.deleteTexture(this.handle);
    }
  }

  /**
   * 获取字符串数据
   */
  toString(): string {
    return `Texture(${this.id},${this.width}x${this.height})`;
  }
}
