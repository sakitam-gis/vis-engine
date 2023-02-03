import { uid } from '../utils';
import type { WithNull } from '../types';
import Renderer from './Renderer';

/**
 * `attribute` 支持的数据类型
 */
export type DataType =
  | Float32Array
  | Float64Array
  | Uint32Array
  | Uint16Array
  | Uint8Array
  | Uint8ClampedArray
  | Int32Array
  | Int16Array
  | Int8Array;

export interface Attribute {
  /**
   * `Attribute` 数据，必须是 `TypedArray` 类型
   */
  data: DataType;

  /**
   * 指定缓冲区每个顶点分量的个数, 一般为 1-4
   */
  size?: number;

  /**
   * 指定数组中每个元素的数据类型，一般我们不传时会由内部进行判断。
   */
  type?: GLenum;

  /**
   * 指定当整数值转换为浮点数时是否应该将整数数值归一化到特定的范围。
   * - 对于 `gl.BYTE` 和 `gl.SHORT`，当设置为`true`时，归一化到 [-1, 1]。
   * - 对于 `gl.UNSIGNED_BYTE` 和 `gl.UNSIGNED_SHORT`，当设置为`true`时，归一化到 [0, 1]。
   * - 对于 `gl.FLOAT` 和 `gl.HALF_FLOAT`，此参数无效。
   */
  normalized?: boolean;

  /**
   * 指定实例化渲染的数量，仅当 `ANGLE_instanced_arrays` 扩展可用时才支持此参数，在
   * `webgl2` 中默认支持，调用函数为 `vertexAttribDivisor`
   */
  divisor?: number;

  /**
   * 以字节为单位指定连续顶点属性开始之间的偏移量(即数组中一行长度)
   */
  stride?: number;

  /**
   * 指定顶点属性数组中第一部分的字节偏移量。必须是类型的字节长度的倍数
   */
  offset?: number;

  /**
   * 顶点数量
   */
  count?: number;

  /**
   * 指定缓冲区对象，常用的值为`gl.ARRAY_BUFFER` 和 `gl.ELEMENT_ARRAY_BUFFER`。当然在`webgl2` 中有一些新的可用值，如 `gl.UNIFORM_BUFFER`和 `gl.TRANSFORM_FEEDBACK_BUFFER`。
   */
  target?: GLenum;

  /**
   * 标记如何使用这些数据，`webgl` 会针对性的做一些优化，默认是 `gl.STATIC_DRAW`，即标记数据不会经常性改变。
   * 其他可用值请参考 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData。
   */
  usage?: GLenum;

  /**
   * `WebGLBuffer`，一般我们不需要指定，会在内部进行创建
   */
  buffer?: WebGLBuffer;

  /**
   * 标记此 `Attribute` 是否需要重新上传 `GPU`，一般我们在数据改变时需要将此值设置为`true`。
   */
  needsUpdate?: boolean;
}

/**
 * 获取 `Buffer` 数据类型
 * @param gl
 * @param data
 */
const getBufferType = (gl, data) => {
  if (data instanceof Float32Array || data instanceof Float64Array) {
    return gl.FLOAT;
  }

  if (data instanceof Uint16Array) {
    return gl.UNSIGNED_SHORT;
  }

  if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
    return gl.UNSIGNED_BYTE;
  }

  if (data instanceof Uint32Array) {
    return gl.UNSIGNED_INT;
  }

  if (data instanceof Int8Array) {
    return gl.BYTE;
  }

  if (data instanceof Int16Array) {
    return gl.SHORT;
  }

  if (data instanceof Int32Array) {
    return gl.INT;
  }
};

/**
 * 存储和 `BufferAttribute` 相关的属性
 */
export default class BufferAttribute {
  /**
   * `BufferAttribute` 的 `id`，不传时由内部生成。
   */
  public id: string;

  /**
   * `Attribute` 数据，必须是 `TypedArray` 类型
   */
  public data: DataType;

  /**
   * `BufferAttribute`中元素的数据类型
   */
  public type: GLenum;

  /**
   * `BufferAttribute`中缓冲区每个顶点分量的个数, 一般为 1-4
   */
  public size: number;

  /**
   * `BufferAttribute` 是否是实例化数据
   */
  public instanced: boolean;

  /**
   * `BufferAttribute`中缓冲区顶点的偏移量
   */
  public stride: number;

  /**
   * `BufferAttribute`中顶点属性数组中第一部分的字节偏移量
   */
  public offset: number;

  /**
   * 指定实例化渲染的数量
   */
  public divisor: number;

  /**
   * 当整数值转换为浮点数时是否应该将整数数值归一化到特定的范围
   */
  public normalized: boolean;

  /**
   * 标记此 `BufferAttribute` 是否需要重新上传 `GPU`，一般我们在数据改变时需要将此值设置为`true`。
   */
  public needsUpdate: boolean;

  /**
   * 顶点数量
   */
  public count: number;

  /**
   * 标记如何使用这些数据，`webgl` 会针对性的做一些优化，默认是 `gl.STATIC_DRAW`，即标记数据不会经常性改变。
   * 其他可用值请参考 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData。
   */
  public usage: GLenum;

  /**
   * 缓冲区对象，常用的值为`gl.ARRAY_BUFFER` 和 `gl.ELEMENT_ARRAY_BUFFER`。当然在`webgl2` 中有一些新的可用值，如 `gl.UNIFORM_BUFFER`和 `gl.TRANSFORM_FEEDBACK_BUFFER`。
   */
  public target: GLenum;

  /**
   * WebGLBuffer
   */
  public buffer: WithNull<WebGLBuffer>;

  constructor(renderer: Renderer, attribute: Attribute) {
    const attr = Object.assign(
      {},
      {
        size: 1,
        normalized: true,
        stride: 0,
        offset: 0,
        divisor: 0,
        usage: renderer.gl.STATIC_DRAW,
      },
      attribute,
    );
    this.id = uid('attribute');
    this.needsUpdate = false;

    if (!attribute.data || Array.isArray(attribute.data)) {
      throw new TypeError('BufferAttribute: data should be a typed array');
    }

    this.data = attr.data;
    this.size = attr.size || 1;
    this.type = attr.type || getBufferType(renderer.gl, attr.data);
    this.normalized = attr.normalized || false;
    this.stride = attr.stride || 0;
    this.offset = attr.offset || 0;
    this.divisor = attr.divisor || 0;
    this.instanced = attr.divisor > 0;
    this.usage = attr.usage || renderer.gl.STATIC_DRAW;

    if (attr.target) {
      this.target = attr.target;
    }

    let count = attr.count;
    if (attr.count === undefined || attr.count === null) {
      count = attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size;
    }
    this.count = count as number;
  }
}
