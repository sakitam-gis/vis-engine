import Resource from './Resource';
import Vector4 from '../math/Vector4';
import Texture from './Texture';
import DataTexture from './DataTexture';
import Renderbuffer from './RenderBuffer';
import Renderer from './Renderer';
import { isNumber } from '../utils';

export interface RenderTargetOptions {
  data: any;
  name: string;
  width: number;
  height: number;
  color: number; // number of color attachments
  attachments: any[];

  depth: boolean;
  stencil: boolean;
  depthTexture: boolean;
}

export default class RenderTarget extends Resource<RenderTargetOptions> {
  #textures: Map<any, any>;

  #renderBuffers: Map<any, any>;

  public depth: boolean;

  public width: number;

  public height: number;

  public viewport: Vector4;

  public drawBuffersChanged: boolean;

  public drawBuffers: number[];

  public clearColors: [number, number, number, number][];

  public clearDepth: number;

  public clearStencil: number;

  constructor (renderer: Renderer, options: Partial<RenderTargetOptions> = {}) {
    super(renderer, {
      color: 1,
      depth: true,
      depthTexture: false,
      stencil: false,
      ...options,
    });

    this.#renderBuffers = new Map();
    this.#textures = new Map();
    this.depth = Boolean(options.depth);
    this.drawBuffers = [];
    this.drawBuffersChanged = false;
    this.width = this.options.width as number;
    this.height = this.options.height as number;
    this.viewport = new Vector4(0, 0, this.width, this.height);
    this.name = this.options.name;
    const attachments = this.options.attachments || [];
    if (attachments.length === 0) {
      for (let i = 0; i < this.options.color!; i++) {
        const opt = {
          wrapS: this.gl.CLAMP_TO_EDGE,
          wrapT: this.gl.CLAMP_TO_EDGE,
          minFilter: this.gl.LINEAR,
          magFilter: this.gl.LINEAR,
          type: this.gl.UNSIGNED_BYTE,
          format: this.gl.RGBA,
          flipY: false,
          generateMipmaps: false,
          ...options,
        };
        let texture;
        if (opt.data) {
          texture = new DataTexture(renderer, opt.data, opt.width, opt.height, opt);
        } else {
          texture = new Texture(renderer, opt);
        }
        attachments.push([
          this.gl.COLOR_ATTACHMENT0 + i,
          texture,
        ]);
      }
      if (options.depthTexture && (renderer.isWebGL2 || renderer.gl.getExtension('WEBGL_depth_texture'))) {
        const texture = new Texture(renderer, {
          width: this.width,
          height: this.height,
          minFilter: this.gl.NEAREST,
          magFilter: this.gl.NEAREST,
          format: this.gl.DEPTH_COMPONENT,
          internalFormat: renderer.isWebGL2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
          type: this.gl.UNSIGNED_INT
        });
        attachments.push([this.gl.DEPTH_ATTACHMENT, texture]);
      } else {
        const { depth, stencil } = options;
        if (depth && !stencil) {
          const renderBuffer = new Renderbuffer(renderer, {
            format: this.gl.DEPTH_COMPONENT16,
            width: this.width,
            height: this.height,
          });
          attachments.push([this.gl.DEPTH_ATTACHMENT, renderBuffer]);
        } else if (stencil && !depth) {
          const renderBuffer = new Renderbuffer(renderer, {
            format: this.gl.STENCIL_INDEX8,
            width: this.width,
            height: this.height,
          });
          attachments.push([this.gl.STENCIL_ATTACHMENT, renderBuffer]);
        } else if (depth && stencil) {
          const renderBuffer = new Renderbuffer(renderer, {
            format: this.gl.DEPTH_STENCIL,
            width: this.width,
            height: this.height,
          });
          attachments.push([this.gl.DEPTH_STENCIL_ATTACHMENT, renderBuffer]);
        }
      }
    }
    this.create(attachments);
  }

  get texture () {
    return this.#textures.values().next().value;
  }

  create (attachments) {
    this.clearColors = [];
    this.clearDepth = 1;
    this.clearStencil = 0;
    for (const attachment of attachments) {
      const attach = attachment[0];
      const target = attachment[1];
      if (target instanceof Renderbuffer) {
        this.#renderBuffers.set(attach, target);
      } else if (target instanceof Texture) {
        this.#textures.set(attach, target);
      }
      this.drawBuffers.push(attach);
      const i = attach - this.gl.COLOR_ATTACHMENT0;
      this.clearColors[i] = [0, 0, 0, 0];
    }
    this.drawBuffersChanged = true;
    this.bind();
    this.#renderBuffers.forEach((rbo, attachment) => {
      this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, attachment, this.gl.RENDERBUFFER, rbo.handle);
    });
    this.#textures.forEach((texture, attachment) => {
      this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachment, this.gl.TEXTURE_2D, texture.handle, 0);
    });
    this.unbind();
    const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
    if (status !== this.gl.FRAMEBUFFER_COMPLETE) {
      console.warn('fbo is not complete');
    }

    return this.handle;
  }

  clear () {
    this.bind();

    let flags = 0

    if (this.clearColors[0]) {
      const color = this.clearColors[0];
      this.gl.clearColor(color[0], color[1], color[2], color[3]);
      flags |= this.gl.COLOR_BUFFER_BIT;
    }
    if (isNumber(this.clearDepth)) {
      this.gl.clearDepth(this.clearDepth);
      flags |= this.gl.DEPTH_BUFFER_BIT;
    }

    if (isNumber(this.clearStencil)) {
      this.gl.clearStencil(this.clearStencil);
      flags |= this.gl.STENCIL_BUFFER_BIT;
    }

    this.gl.clear(flags);
    this.unbind();
  }

  getTexture (key) {
    return this.#textures.get(key);
  }

  resize (width, height) {
    if (this.width !== width || this.height !== height) {
      this.#textures.forEach((texture: Texture) => {
        if (texture.width !== width || texture.height !== height) {
          texture.width = width;
          texture.height = height;
          texture.needsUpdate = true;
          texture.update();
        }
      });
      this.#renderBuffers.forEach(rbo => {
        rbo.resize(width, height);
      });
      this.viewport.set(0, 0, width, height);
    }
  }

  bind (fbo = this.gl.FRAMEBUFFER) {
    this.gl.bindFramebuffer(fbo, this.handle);
  }

  unbind (fbo = this.gl.FRAMEBUFFER) {
    this.gl.bindFramebuffer(fbo, null);
  }

  destroy () {
    this.#textures.forEach((texture: Texture) => {
      texture.destroy();
    });
    this.#renderBuffers.forEach((buffer) => {
      buffer.destroy();
    });
    this.deleteHandle();
  }

  createHandle () {
    return this.gl.createFramebuffer();
  }

  deleteHandle () {
    this.handle && this.gl.deleteFramebuffer(this.handle);
  }

  toString(): string {
    return `RenderTarget(${this.id},${this.width}x${this.height})`;
  }
}
