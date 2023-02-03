import { omit, uid } from '../utils';
import Program from '../core/Program';
import Base from './Base';
import Renderer from './Renderer';
import BufferAttribute from './BufferAttribute';
import type { Attribute, DataType } from './BufferAttribute';
import Vector3 from '../math/Vector3';
import Vector4 from '../math/Vector4';

const tempVec3 = new Vector3();

type AttributesOmitKeys = 'id' | 'buffer';

export interface Attributes {
  [key: string]: Attribute;
}

/**
 * 几何体对象，包含了顶点位置，面片索引、法向量、颜色值、UV 坐标和自定义缓存属性值等，这些数据最终会上传到`GPU`中。
 *
 * 示例代码：
 *
 * ```ts
 * const geometry = new ve.Geometry(renderer, {
 *     position: {
 *       size: 3,
 *       data: new Float32Array([
 *         -0.5, 0.5, 0,
 *         -0.5, -0.5, 0,
 *         0.5, 0.5, 0,
 *         0.5, -0.5, 0
 *       ])
 *     },
 *     uv: {
 *       size: 2,
 *       data: new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
 *     },
 *     index: {
 *       data: new Uint16Array([0, 1, 2, 1, 3, 2])
 *     },
 *   });
 * ```
 */
export default class Geometry extends Base {
  #id: string;

  #attributes: Map<string, BufferAttribute>;

  #VAOs: Map<string, any>;

  #bounds: any;

  drawRange: any;

  instancedCount: number;

  isInstanced: boolean;

  drawMode: number;

  /**
   * @param renderer 渲染器
   * @param attributes 属性信息（顶点数据）
   */
  constructor(renderer: Renderer, attributes: Attributes = {}) {
    super(renderer);
    this.drawRange = {
      start: 0,
      count: 0,
    };
    this.instancedCount = 0;
    this.isInstanced = false;
    this.#attributes = new Map();
    this.#VAOs = new Map();

    this.#id = uid('geometry');
    this.drawMode = this.gl.TRIANGLES;
    renderer.bindVertexArray(null);
    renderer.state.setActiveGeometry(null);
    // eslint-disable-next-line guard-for-in
    for (const name in attributes) {
      const attribute = attributes[name];
      if (attribute instanceof BufferAttribute) {
        if (name === 'index') {
          this.setIndex(attribute);
        } else {
          this.addAttribute(name, attribute);
        }
      } else {
        if (attribute.data) {
          const n = new BufferAttribute(this.renderer, attribute);
          if (name === 'index') {
            this.setIndex(n);
          } else {
            this.addAttribute(name, n);
          }
        }
      }
    }
  }

  /**
   * 获取当前几何体数据的唯一标识
   */
  get id() {
    return this.#id;
  }

  /**
   * 获取全部的属性信息
   */
  get attributes() {
    return this.#attributes;
  }

  /**
   * 获取属性数据
   */
  get attributesData(): Attributes {
    const attributes: Attributes = {};
    const iterator = this.#attributes.entries();
    for (let i = 0; i < this.#attributes.size; i++) {
      const entry = iterator.next().value;
      attributes[entry[0]] = omit<Attribute & { id: string }, AttributesOmitKeys>(entry[1], [
        'id',
        'buffer',
      ]);
    }

    return attributes;
  }

  /**
   * 获取顶点索引属性
   */
  get index() {
    return this.attributes.get('index');
  }

  /**
   * 获取当前几何体的包围盒
   */
  get bounds() {
    return this.#bounds;
  }

  /**
   * 手动设置包围盒，一般我们只需要内部计算
   * @param bounds
   */
  set bounds(bounds) {
    this.#bounds = bounds;
  }

  /**
   * 添加对应的属性信息（顶点数据）
   * @param name
   * @param attribute
   */
  addAttribute(name: string, attribute: BufferAttribute) {
    if (!attribute.target) {
      attribute.target = name === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    }
    attribute.needsUpdate = false;
    this.attributes.set(name, attribute);
    if (!attribute.buffer) {
      attribute.buffer = this.gl.createBuffer();
      this.updateAttribute(attribute);
    }
    if (attribute.divisor) {
      this.isInstanced = true;
      if (this.instancedCount && this.instancedCount !== attribute.count * attribute.divisor) {
        this.instancedCount = Math.min(this.instancedCount, attribute.count * attribute.divisor);
        // eslint-disable-next-line max-len
        return console.warn(
          `Geometry has multiple instanced buffers of different length - instancedCount: ${this.instancedCount}, count: ${attribute.count}, divisor: ${attribute.divisor}, attribute: ${name}`,
        );
      }
      this.instancedCount = attribute.count * attribute.divisor;
    } else if (name === 'index') {
      this.drawRange.count = attribute.count;
    } else if (!this.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attribute.count);
    }
  }

  /**
   * 获取对应的属性信息（顶点数据）
   * @param name
   */
  getAttribute(name) {
    return this.attributes.get(name);
  }

  /**
   * 设置对应的属性数据
   * @param name
   * @param data
   */
  setAttributeData(name, data) {
    const attribute = this.getAttribute(name);
    if (attribute) {
      attribute.data = data;
      attribute.needsUpdate = true;
    }
  }

  /**
   * 更新顶点属性数据
   * @param attribute
   */
  updateAttribute(attribute) {
    const createBuffer = !attribute.buffer;
    if (createBuffer) {
      attribute.buffer = this.gl.createBuffer();
    }
    if (this.rendererState.boundBuffer !== attribute.buffer) {
      this.gl.bindBuffer(attribute.target, attribute.buffer);
      this.rendererState.boundBuffer = attribute.buffer;
    }

    // if (createBuffer) {
    //   this.gl.bufferData(attribute.target, attribute.data, attribute.usage);
    // } else {
    //   this.gl.bufferSubData(attribute.target, 0, attribute.data);
    // }
    this.gl.bufferData(attribute.target, attribute.data, attribute.usage);
    attribute.needsUpdate = false;
  }

  /**
   * 移除属性信息
   * @param attribute
   */
  removeAttribute(attribute) {
    this.attributes.delete(attribute);
  }

  /**
   * 设置顶点索引数据
   * @param index
   */
  setIndex(index) {
    if (index instanceof BufferAttribute) {
      index.size = 1;
      this.addAttribute('index', index);
    } else {
      // eslint-disable-next-line max-len
      const buffer = new BufferAttribute(this.renderer, {
        data: index.length > 65535 ? new Uint32Array(index) : new Uint16Array(index),
        size: 1,
      });
      this.addAttribute('index', buffer);
    }
    this.drawRange.count = this.index?.count;
  }

  /**
   * 设置顶点数据
   * @param data
   */
  setVertices(data) {
    const array: number[] = [];
    const len = data.length;
    for (let i = 0; i < len; i++) {
      const item: number[] = data[i];
      array.push(item[0], item[1], item[2]);
    }
    this.addAttribute(
      'position',
      new BufferAttribute(this.renderer, {
        data: new Float32Array(array),
        size: 3,
      }),
    );
  }

  /**
   * 设置顶点法向量数据
   * @param data
   */
  setNormals(data) {
    this.addAttribute(
      'normal',
      new BufferAttribute(this.renderer, {
        data: new Float32Array(data),
        size: 2,
      }),
    );
  }

  /**
   * 设置纹理 UV 数据
   * @param data
   */
  setUVs(data) {
    this.addAttribute(
      'uv',
      new BufferAttribute(this.renderer, {
        data: new Float32Array(data),
        size: 2,
      }),
    );
  }

  /**
   * 设置顶点颜色数据
   * @param colors
   */
  setColors(colors: (Vector4 | Vector3 | number[] | Float32Array | Float64Array)[]) {
    const data: number[] = [];
    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];
      if (color && (color instanceof Vector3 || color instanceof Vector4)) {
        color = color.toArray();
      }
      data.push(color[0], color[1], color[2], color[3] || 1);
    }
    this.addAttribute(
      'color',
      new BufferAttribute(this.renderer, {
        data: new Float32Array(data),
        size: 4,
      }),
    );
  }

  /**
   * 设置顶点渲染的开始索引和数量
   * @param start 开始索引
   * @param count 数量
   */
  setDrawRange(start: number, count: number) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }

  /**
   * 设置实例化渲染的数量
   * @param count 数量
   */
  setInstancedCount(count: number) {
    this.instancedCount = count;
  }

  /**
   * 创建 Vao
   * @param program
   */
  createVAO(program: Program) {
    const { attributeOrder } = program;
    const vao = this.renderer.createVertexArray();
    this.renderer.bindVertexArray(vao);
    this.#VAOs.set(attributeOrder, vao);
    this.bindAttributes(program);
  }

  /**
   * 绑定顶点属性数据
   * https://devdocs.io/dom/webgl2renderingcontext/vertexattribipointer
   * @param program
   */
  bindAttributes(program: Program) {
    program.attributeLocations.forEach((location, { name, type }) => {
      const attributes = this.attributes.get(name);
      if (!attributes) return;
      this.gl.bindBuffer(attributes.target, attributes.buffer);
      this.rendererState.boundBuffer = attributes.buffer;
      let numLoc = 1;
      if (type === this.gl.FLOAT_MAT2) numLoc = 2;
      if (type === this.gl.FLOAT_MAT3) numLoc = 3;
      if (type === this.gl.FLOAT_MAT4) numLoc = 4;

      const size = attributes.size / numLoc;
      const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
      const offset = numLoc === 1 ? 0 : numLoc * numLoc;

      for (let i = 0; i < numLoc; i++) {
        const attribIndex = location + i;
        this.gl.vertexAttribPointer(
          attribIndex,
          size,
          attributes.type,
          attributes.normalized,
          attributes.stride + stride,
          attributes.offset + offset,
        );
        this.gl.enableVertexAttribArray(attribIndex);
        this.renderer.vertexAttribDivisor(attribIndex, attributes.divisor);
      }
    });
    const index = this.attributes.get('index');
    if (index) {
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, index.buffer);
    }
  }

  /**
   * 计算当前几何体的的矩形边界（立方体包围盒）
   * @param vertices 外部传入的顶点数据
   */
  computeBoundingBox(vertices?: DataType | number[]) {
    const { data, offset = 0, stride, size } = this.attributes.get('position') as BufferAttribute;
    if (!this.#bounds) {
      this.#bounds = {
        min: new Vector3(),
        max: new Vector3(),
        center: new Vector3(),
        scale: new Vector3(),
        radius: Number.POSITIVE_INFINITY,
      };
    }
    this.#bounds.min.setScalar(+Number.POSITIVE_INFINITY);
    this.#bounds.max.setScalar(Number.NEGATIVE_INFINITY);
    const array = vertices || data;
    const dl = stride || size;
    for (let i = offset; i < array.length; i += dl) {
      const x = array[i + 0];
      const y = array[i + 1];
      const z = array[i + 2];
      this.#bounds.min.x = Math.min(x, this.#bounds.min.x);
      this.#bounds.min.y = Math.min(y, this.#bounds.min.y);
      this.#bounds.min.z = Math.min(z, this.#bounds.min.z);
      this.#bounds.max.x = Math.max(x, this.#bounds.max.x);
      this.#bounds.max.y = Math.max(y, this.#bounds.max.y);
      this.#bounds.max.z = Math.max(z, this.#bounds.max.z);
    }
    this.#bounds.scale.subVectors(this.#bounds.max, this.#bounds.min);
    this.#bounds.center.add(this.#bounds.min).add(this.#bounds.max).divideScalar(2);
    return this.#bounds;
  }

  /**
   * 计算当前几何体的的球形边界（球形包围盒）
   * @param vertices 外部传入的顶点数据
   */
  computeBoundingSphere(vertices?: DataType | number[]) {
    const { data, offset = 0, stride, size } = this.attributes.get('position') as BufferAttribute;
    if (!this.#bounds) {
      this.computeBoundingBox(vertices);
    }
    const array = vertices || data;
    let len = 0;
    const dl = stride || size;
    const length = array.length;
    for (let j = offset; j < length; j += dl) {
      tempVec3.fromArray(array, j);
      len = Math.max(len, this.#bounds.center.distanceToSquared(tempVec3));
    }
    this.#bounds.radius = Math.sqrt(len);
  }

  /**
   * 执行绘制
   * @param program Program 对象
   * @param drawMode 绘制模式
   */
  draw(program, drawMode = this.drawMode) {
    const { start, count } = this.drawRange;
    const activeGeometryId = `${this.id}_${program.attributeOrder}`;
    if (this.rendererState.activeGeometryId !== activeGeometryId) {
      const vao = this.#VAOs.get(program.attributeOrder);
      if (!vao) {
        this.createVAO(program);
      }
      this.renderer.bindVertexArray(this.#VAOs.get(program.attributeOrder));
      this.rendererState.activeGeometryId = activeGeometryId;
    }

    program.attributeLocations.forEach((location, { name }) => {
      const attribute = this.getAttribute(name);
      if (attribute && attribute.needsUpdate) {
        this.updateAttribute(attribute);
      }
    });

    if (this.isInstanced) {
      if (this.index) {
        const offset = this.index.offset + 2 * start;
        this.renderer.drawElementsInstanced(
          drawMode,
          count,
          this.index.type,
          offset,
          this.instancedCount,
        );
      } else {
        this.renderer.drawArraysInstanced(drawMode, start, count, this.instancedCount);
      }
    } else if (this.index) {
      const offset = this.index.offset + 2 * start;
      this.gl.drawElements(drawMode, count, this.index.type, offset);
    } else {
      this.gl.drawArrays(drawMode, start, count);
    }
  }

  /**
   * 将传入的几何体对象的属性值拷贝到此对象
   * @param source 源几何体对象
   */
  copy(source: Geometry) {
    const attributes = source.attributesData;
    for (const name in attributes) {
      const attribute = attributes[name];
      if (attribute instanceof BufferAttribute) {
        if (name === 'index') {
          this.setIndex(attribute);
        } else {
          this.addAttribute(name, attribute);
        }
      } else {
        if (attribute.data) {
          const n = new BufferAttribute(this.renderer, attribute);
          if (name === 'index') {
            this.setIndex(n);
          } else {
            this.addAttribute(name, n);
          }
        }
      }
    }

    if (source.bounds) {
      this.bounds = {
        min: new Vector3().copy(source.bounds.min),
        max: new Vector3().copy(source.bounds.max),
        center: new Vector3().copy(source.bounds.center),
        scale: new Vector3().copy(source.bounds.scale),
        radius: source.bounds.radius,
      };
    }

    return this;
  }

  /**
   * 克隆此几何体对象
   */
  clone() {
    const geometry = new Geometry(this.renderer, {}).copy(this);
    geometry.drawMode = this.drawMode;
    return geometry;
  }

  /**
   * 销毁几何体对象
   */
  destroy() {
    this.#VAOs.forEach((t) => {
      this.renderer.deleteVertexArray(t);
    });
    this.#VAOs.clear();
    this.#attributes.forEach((t) => {
      this.gl.deleteBuffer(t.buffer);
    });
    this.#attributes.clear();
  }
}
