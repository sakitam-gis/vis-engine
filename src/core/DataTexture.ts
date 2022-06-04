import Texture from './Texture';

export default class DataTexture extends Texture {
  constructor (context, data, width, height, options = {}) {
    super(context, {
      ...options,
      image: data,
      width,
      height,
      premultiplyAlpha: true,
      flipY: false,
      alignment: 1
    });
    this.needsUpdate = true;
  }
}
