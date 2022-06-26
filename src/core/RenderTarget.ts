import Resource from './Resource';
import Vector4 from '../math/Vector4';
import Texture, { TextureOptions } from './Texture';
import DataTexture from './DataTexture';
import RenderBuffer from './RenderBuffer';
import Renderer from './Renderer';
import { isNumber, omit } from '../utils';

export type Attachment = [GLenum, Texture | DataTexture | RenderBuffer];

export interface RenderTargetOptions {
  /**
   * 非图片和 canvas 数据，传入的是一组结构化数组，这里我们先不去指定数据类型
   */
  data: any;

  /**
   * 设置此 `RenderTarget` 的名称，方便我们区分不同的 `RenderTarget`。
   */
  name: string;

  /**
   * `RenderTarget` 的宽度
   */
  width: number;

  /**
   * `RenderTarget` 的高度
   */
  height: number;

  /**
   * 颜色关联对象的数量，默认是`1`。
   * 可以理解为整个帧缓存对象就是一张纹理，这个纹理的颜色就保存在`color attachment`中。
   */
  color: number;

  /**
   * 关联对象，此参数是一个数组，可以指定多组关联对象
   */
  attachments: Attachment[];

  /**
   * 是否包含深度关联对象
   */
  depth: boolean;

  /**
   * 是否包含模版关联对象
   */
  stencil: boolean;

  /**
   * 是否是深度纹理，默认是`false`。
   */
  depthTexture: boolean;
}

/**
 * `RenderTarget` 是一种用于将场景渲染到纹理的方法，主要用于做离屏渲染和后处理等效果。
 *
 * 示例代码：
 * ```ts
 * const options = {
 *   width: 256,
 *   height: 256,
 *   minFilter: renderer.gl.NEAREST,
 *   magFilter: renderer.gl.NEAREST
 * };
 * const current = new RenderTarget(renderer, options);
 *
 * current.resize(width, height);
 * current.bind();
 * renderer.viewport(0, 0, width, height);
 * mesh.updateMatrixWorld();
 * mesh.draw();
 * current.unbind();
 * ```
 */
export default class RenderTarget extends Resource<RenderTargetOptions> {
  #textures: Map<any, any>;

  #renderBuffers: Map<any, any>;

  public depth: boolean;

  /**
   * `RenderTarget` 宽度
   */
  public width: number;

  /**
   * `RenderTarget` 高度
   */
  public height: number;

  /**
   * `RenderTarget` 视图大小，默认是一个四维向量
   */
  public viewport: Vector4;

  /**
   * 绘制对象是否变化
   */
  public drawBuffersChanged: boolean;

  /**
   * 绘制缓存(绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存)
   */
  public drawBuffers: number[];

  /**
   * 清屏颜色配置；因为在我们在指定多个关联对象时，可能每个关联对象需要的清屏颜色不一致。
   */
  #clearColors: [number, number, number, number][];

  /**
   * 清除深度缓冲区，深度值默认是 `1`。
   */
  #clearDepth: number;

  /**
   * 清除模版缓冲区，默认值为`0`。
   */
  #clearStencil: number;

  /**
   * @param renderer `Renderer` 对象
   * @param options 配置项，详见 #RenderTargetOptions
   */
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
    /**
     * 在 `webgl1` 需要开启 `WEBGL_draw_buffers` 扩展
     */
    this.drawBuffers = [];
    this.drawBuffersChanged = false;
    this.width = this.options.width as number;
    this.height = this.options.height as number;
    this.viewport = new Vector4(0, 0, this.width, this.height);
    this.name = this.options.name;
    const attachments = this.options.attachments || [];

    /**
     * 此处注意如果配置中未传入指定的关联对象，那么在这里我们会内部进行创建
     */
    if (attachments.length === 0) {
      for (let i = 0; i < this.options.color!; i++) {
        const opt: any = {
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
          texture = new DataTexture(renderer, opt);
        } else {
          texture = new Texture(renderer, omit<TextureOptions & RenderTargetOptions, keyof RenderTargetOptions>(opt, [
            'data',
            'name',
            'attachments',
            'depthTexture',
          ]));
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
          const renderBuffer = new RenderBuffer(renderer, {
            format: this.gl.DEPTH_COMPONENT16,
            width: this.width,
            height: this.height,
          });
          attachments.push([this.gl.DEPTH_ATTACHMENT, renderBuffer]);
        } else if (stencil && !depth) {
          const renderBuffer = new RenderBuffer(renderer, {
            format: this.gl.STENCIL_INDEX8,
            width: this.width,
            height: this.height,
          });
          attachments.push([this.gl.STENCIL_ATTACHMENT, renderBuffer]);
        } else if (depth && stencil) {
          const renderBuffer = new RenderBuffer(renderer, {
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

  /**
   * 设置清屏颜色值
   * @param colors
   */
  set clearColors(colors) {
    this.#clearColors = colors;
  }

  /**
   * 获取清屏颜色值
   */
  get clearColors() {
    return this.#clearColors;
  }

  /**
   * 设置清除深度缓冲区的深度值
   * @param depth 深度值
   */
  set clearDepth(depth) {
    this.#clearDepth = depth;
  }

  /**
   * 获取深度缓冲区的深度值
   */
  get clearDepth() {
    return this.#clearDepth;
  }

  /**
   * 设置清除模版缓冲区的默认值
   * @param stencil 模版缓冲区默认值
   */
  set clearStencil(stencil) {
    this.#clearStencil = stencil;
  }

  /**
   * 获取缓冲区的默认值
   */
  get clearStencil() {
    return this.#clearStencil;
  }

  /**
   * 创建帧缓冲关联对象
   * @param attachments
   */
  create (attachments: Attachment[]) {
    this.#clearColors = [];
    this.#clearDepth = 1;
    this.#clearStencil = 0;
    for (const attachment of attachments) {
      const attach = attachment[0];
      const target = attachment[1];
      if (target instanceof RenderBuffer) {
        this.#renderBuffers.set(attach, target);
      } else if (target instanceof Texture) {
        this.#textures.set(attach, target);
        this.drawBuffers.push(attach);
      }
      const i = attach - this.gl.COLOR_ATTACHMENT0;
      this.#clearColors[i] = [0, 0, 0, 0];
    }

    if (this.options.color! > 1 && this.renderer.isWebGL2) {
      (this.gl as WebGL2RenderingContext).drawBuffers(this.drawBuffers);
    }

    this.drawBuffersChanged = true;
    this.bind();

    /**
     * 将渲染缓冲区关联到帧缓冲区
     */
    this.#renderBuffers.forEach((rbo, attachment) => {
      this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, attachment, this.gl.RENDERBUFFER, rbo.handle);
    });

    /**
     * 将纹理缓冲区与帧缓冲区关联
     */
    this.#textures.forEach((texture, attachment) => {
      this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachment, this.gl.TEXTURE_2D, texture.handle, 0);
    });
    this.unbind();
    const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
    if (status !== this.gl.FRAMEBUFFER_COMPLETE) {
      switch (status) {
        case this.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
          throw new Error(
            'The attachment types are mismatched or not all framebuffer attachment points are framebuffer attachment complete',
          );
        case this.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
          throw new Error('There is no attachment');
        case this.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
          throw new Error(' Height and width of the attachment are not the same.');
        case this.gl.FRAMEBUFFER_UNSUPPORTED:
          throw new Error(
            'The format of the attachment is not supported or if depth and stencil attachments are not the same renderbuffer',
          );
      }
    }

    return this.handle;
  }

  /**
   * 清空此帧缓冲区
   */
  clear () {
    this.bind();

    let flags = 0

    if (this.clearColors[0]) {
      const color = this.clearColors[0];
      this.gl.clearColor(color[0], color[1], color[2], color[3]);
      flags |= this.gl.COLOR_BUFFER_BIT;
    }
    if (isNumber(this.#clearDepth)) {
      this.gl.clearDepth(this.#clearDepth);
      flags |= this.gl.DEPTH_BUFFER_BIT;
    }

    if (isNumber(this.#clearStencil)) {
      this.gl.clearStencil(this.#clearStencil);
      flags |= this.gl.STENCIL_BUFFER_BIT;
    }

    this.gl.clear(flags);
    this.unbind();
  }

  getTexture (key) {
    return this.#textures.get(key);
  }

  /**
   * 重新设置此帧缓冲区的大小
   * @param width 宽度
   * @param height 高度
   */
  resize (width: number, height: number) {
    if (this.width !== width || this.height !== height) {
      this.width = width;
      this.height = height;
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

  /**
   * 绑定帧缓冲区
   * @param fbo 如果未传入 `fbo`，默认是此 `RenderTarget` 创建的帧缓冲
   */
  bind (fbo = this.gl.FRAMEBUFFER) {
    this.gl.bindFramebuffer(fbo, this.handle);
  }

  /**
   * 解绑帧缓冲区
   * @param fbo 如果未传入 `fbo`，默认是此 `RenderTarget` 创建的帧缓冲
   */
  unbind (fbo = this.gl.FRAMEBUFFER) {
    this.gl.bindFramebuffer(fbo, null);
  }

  /**
   * 销毁此 `RenderTarget`
   * - 销毁关联的纹理缓冲区
   * - 销毁关联的渲染缓冲区
   * - 销毁帧缓冲区
   */
  destroy () {
    this.#textures.forEach((texture: Texture) => {
      texture.destroy();
    });
    this.#renderBuffers.forEach((buffer) => {
      buffer.destroy();
    });
    this.deleteHandle();
  }

  /**
   * 创建帧缓冲区
   */
  createHandle () {
    return this.gl.createFramebuffer();
  }

  /**
   * 移除帧缓冲区
   */
  deleteHandle () {
    this.handle && this.gl.deleteFramebuffer(this.handle);
  }

  /**
   * 将此实例转换为字符串标识
   */
  toString(): string {
    return `RenderTarget(${this.id},${this.width}x${this.height})`;
  }
}
