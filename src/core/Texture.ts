import { isPowerOfTwo } from '../utils/math';
import Resource from './Resource';
import Renderer from './Renderer';

export interface ITextureOptions {
  width: number; // 纹理宽度，默认为	0
  height: number; // 纹理高度，默认为	0
  mag: number; //	Sets magnification filter (see table)	'nearest'
  min: number; //	Sets minification filter (see table)	'nearest'
  wrapS: number; //	Sets wrap mode on S axis (see table)	'clamp'
  wrapT: number; //	Sets wrap mode on T axis (see table)	'clamp'
  aniso: number; //	Sets number of anisotropic samples, requires EXT_texture_filter_anisotropic	0
  format: number; //	Texture format (see table)	'rgba'
  internalFormat: number; //	Texture format (see table)	'rgba'
  type: number; //	Texture type (see table)	'uint8'
  mipmap: boolean; //	See below for a description	false
  flipY: boolean; //	Flips textures vertically when uploading	false
  alignment: number; //	Sets unpack alignment per row	1
  premultiplyAlpha: boolean; //	Premultiply alpha when unpacking	false

  image: any;
}

interface IState {
  version: number;
  image: any;
  wrapS: GLenum;
  wrapT: GLenum;
  min: GLenum;
  mag: GLenum;
}

export default class Texture extends Resource<ITextureOptions> {
  public needsUpdate = false;

  public textureUnit = 0;

  public image: any;

  public width: number;

  public height: number;

  #state: IState = {} as IState;

  constructor(renderer: Renderer, options: Partial<ITextureOptions> = {}) {
    const { gl } = renderer;
    const defaultOptions = {
      type: gl.UNSIGNED_BYTE,
      format: gl.RGBA,
      internalFormat: options.format || gl.RGBA,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
      mipmap: true,
      min: gl.LINEAR,
      mag: gl.LINEAR,
      premultiplyAlpha: false,
      alignment: 4, // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
      flipY: false,
      anisotropy: 0,
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
    this.needsUpdate = true;
    this.update();
  }

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
    if (this.options.min !== this.#state.min) {
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.options.min as GLenum);
      this.#state.min = this.options.min as GLenum;
    }
    if (this.options.mag !== this.#state.mag) {
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.options.mag as GLenum);
      this.#state.mag = this.options.mag as GLenum;
    }
    if (this.options.flipY !== this.rendererState.opts.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.options.flipY as boolean);
      this.rendererState.opts.flipY = this.options.flipY;
    }
    if (this.options.premultiplyAlpha !== this.rendererState.opts.premultiplyAlpha) {
      this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.options.premultiplyAlpha as boolean);
      this.rendererState.opts.premultiplyAlpha = this.options.premultiplyAlpha;
    }
    if (this.options.alignment !== this.rendererState.opts.alignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.options.alignment as GLenum);
      this.rendererState.opts.alignment = this.options.alignment;
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
      if (this.options.mipmap) {
        if (
          this.renderer.isWebGL2
          || isPowerOfTwo(this.image.width)
          && isPowerOfTwo(this.image.height)
        ) {
          this.gl.generateMipmap(this.gl.TEXTURE_2D);
        } else {
          this.options.mipmap = false;
          this.options.wrapS = this.gl.CLAMP_TO_EDGE;
          this.options.wrapT = this.options.wrapS;
          this.options.min = this.gl.LINEAR;
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

  bind(unit = this.textureUnit) {
    this.textureUnit = unit;
    this.rendererState.textureUnits[this.textureUnit] = this.id;
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
  }

  unbind() {
    this.gl.activeTexture(this.gl.TEXTURE0 + this.textureUnit);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    delete this.rendererState.textureUnits[this.textureUnit];
  }

  destroy() {
    this.unbind();
    super.destroy();
  }

  createHandle() {
    return this.gl.createTexture();
  }

  deleteHandle() {
    if (this.handle) {
      this.gl.deleteTexture(this.handle);
    }
  }

  toString(): string {
    return `Texture(${this.id},${this.width}x${this.height})`;
  }
}
