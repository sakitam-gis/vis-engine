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
export default class DataTexture extends Texture {
  constructor (renderer, options: Partial<DataTextureOptions> = {}) {
    super(renderer, {
      ...options,
      image: options.data,
      premultiplyAlpha: true,
      flipY: false,
      unpackAlignment: 1,
    });
    this.needsUpdate = true;
  }
}
