const getBufferType = (gl, data) => {
  if (data instanceof Float32Array || data instanceof Float64Array) {
    return gl.FLOAT;
  }
  if (data instanceof Uint16Array) {
    return gl.UNSIGNED_SHORT;
  }
  return gl.UNSIGNED_INT;
};

export default class BufferAttribute {
  public data: Float32Array | Float64Array | Uint16Array | Uint8Array;

  public type: GLenum;

  public size: number;

  public dynamic: boolean;

  public instanced: boolean;
  public stride: number;
  public offset: number;
  public divisor: number;
  public normalized: boolean;

  public needsUpdate: boolean;

  public count: number;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, data, size, normalized = true, stride = 0, offset = 0, divisor = 0) {
    this.size = 1;
    this.dynamic = false;
    this.instanced = false;
    this.stride = 0;
    this.offset = 0;
    this.divisor = 0;
    this.needsUpdate = false;
    if (Array.isArray(data)) {
      throw new TypeError('BufferAttribute: array should be a typed array');
    }
    let count = 0;
    if (data !== undefined) {
      count = stride ? data.byteLength / stride : data.length / size;
    }
    this.data = data;
    this.size = size;
    this.type = getBufferType(gl, data);
    this.normalized = normalized;
    this.stride = stride;
    this.offset = offset;
    this.divisor = divisor;
    this.instanced = divisor > 0;
    this.count = count;
  }
}
