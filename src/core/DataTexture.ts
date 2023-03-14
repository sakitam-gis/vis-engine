import Texture from './Texture';
import type { TextureOptions } from './Texture';

export interface DataTextureOptions extends TextureOptions {
  data: any;
}

/**
 * 数据纹理对象，常用于结构化数据的纹理对象。
 *
 * 代码实例：
 *
 * ```ts
 * const texture = new DataTexture(renderer, opt);
 * ```
 */
export default class DataTexture extends Texture<DataTextureOptions> {
  /**
   * 设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
   * 这样会在下一次渲染时应用对应的纹理数据和配置。
   */
  public needsUpdate = true;

  constructor(renderer, options: Partial<DataTextureOptions> = {}) {
    super(renderer, {
      ...options,
      image: options.data,
      premultiplyAlpha: true,
      flipY: false,
      unpackAlignment: 1,
    });
  }
}
