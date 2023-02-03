import Resource from './Resource';
import Renderer from './Renderer';

export interface RenderBufferOptions {
  /**
   * 缓冲区宽度
   */
  width: number;

  /**
   * 缓冲区高度
   */
  height: number;

  /**
   * 指定渲染缓冲区的内部格式。更多文档请参考：[renderbufferStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
   */
  format: GLenum;
}

/**
 * 渲染缓冲区对象。
 * 由于渲染缓冲区对象是只写的，因此它们通常用作深度和模板关联对象。
 *
 * 实例代码：
 * ```ts
 * const renderBuffer = new RenderBuffer(renderer, {
 *   format: renderer.gl.DEPTH_COMPONENT16,
 *   width: 1920,
 *   height: 1080,
 * });
 *
 * renderBuffer.bind();
 * renderBuffer.unbind();
 * ```
 */
export default class RenderBuffer extends Resource<RenderBufferOptions> {
  /**
   * 渲染缓冲区宽度
   */
  public width: number;

  /**
   * 渲染缓冲区高度
   */
  public height: number;

  #internalFormat: GLenum;

  constructor(renderer: Renderer, options: RenderBufferOptions = {} as RenderBufferOptions) {
    super(renderer, {
      ...options,
      format: options.format || renderer.gl.DEPTH_COMPONENT16,
    });

    this.#internalFormat = this.options.format as GLenum;

    this.width = this.options.width as number;
    this.height = this.options.height as number;

    console.assert(
      this.width > 0 && this.height > 0,
      'Renderbuffer object requires valid width and height greater than zero',
    );
    this.bind();
    renderer.gl.renderbufferStorage(
      renderer.gl.RENDERBUFFER,
      this.#internalFormat,
      this.width,
      this.height,
    );
  }

  /**
   * 设置此渲染对象的的大小
   * @param width
   * @param height
   */
  resize(width, height) {
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.bind();
    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.#internalFormat, width, height);
    this.unbind();
  }

  /**
   * 绑定渲染缓冲
   */
  bind() {
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.handle);
  }

  /**
   * 解绑渲染缓冲
   */
  unbind() {
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
  }

  /**
   * 销毁此渲染对象
   */
  destroy() {
    this.unbind();
    this.deleteHandle();
  }

  /**
   * 创建 `RBO`
   */
  createHandle() {
    return this.gl.createRenderbuffer();
  }

  /**
   * 移除 `RBO`
   */
  deleteHandle() {
    this.handle && this.gl.deleteRenderbuffer(this.handle);
  }
}
