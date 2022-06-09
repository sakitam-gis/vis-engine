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

  public usage: GLenum;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, data, size = 1, normalized = true, stride = 0, offset = 0, divisor = 0, usage = gl.STATIC_DRAW) {
    this.dynamic = false;
    this.instanced = false;
    this.needsUpdate = false;
    if (Array.isArray(data)) {
      throw new TypeError('BufferAttribute: array should be a typed array');
    }
    let count = 0;
    if (data !== undefined) {
      count = stride ? data.byteLength / stride : data.length / size;
    }
    this.data = data;
    this.size = size || 1;
    this.type = getBufferType(gl, data);
    this.normalized = normalized || false;
    this.stride = stride || 0;
    this.offset = offset || 0;
    this.divisor = divisor || 0;
    this.instanced = divisor > 0;
    this.usage = usage || gl.STATIC_DRAW;
    this.count = count;
  }
}
