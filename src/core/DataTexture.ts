import Texture from './Texture';

/**
 * 数据纹理对象
 */
export default class DataTexture extends Texture {
  constructor (renderer, data, width, height, options = {}) {
    super(renderer, {
      ...options,
      image: data,
      width,
      height,
      premultiplyAlpha: true,
      flipY: false,
      unpackAlignment: 1
    });
    this.needsUpdate = true;
  }
}
