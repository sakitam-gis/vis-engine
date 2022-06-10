import { uid } from '../utils';
import Program from '../core/Program';
import Base from './Base';
import Renderer from './Renderer';
import BufferAttribute from './BufferAttribute';
import Vector3 from '../math/Vector3';

const tempVec3 = new Vector3();

export interface Attribute {
  id: number;
  data: any;
  size: number;
  instanced: any;
  type: any;
  normalized: boolean;
  divisor: number;
  buffer: BufferAttribute;
  stride: number;
  offset: number;
  count: number;
  min: number;
  max: number;
  target: number;
  needsUpdate?: boolean;
}

export default class Geometry extends Base {
  #id: string;

  #attributes: Map<string, Attribute>;

  #VAOs: any;

  #bounds: any;

  buffers: Map<BufferAttribute,Array<Attribute>>;

  drawRange: any;
  instancedCount: number;

  isInstanced: boolean;

  drawMode: number;

  constructor(renderer: Renderer, attributes = {}) {
    super(renderer);
    this.drawRange = {
      start: 0,
      count: 0,
    };
    this.instancedCount = 0;
    this.isInstanced = false;
    this.#attributes = new Map();
    this.#VAOs = {};

    this.#id = uid('geometry');
    this.drawMode = this.gl.TRIANGLES;
    renderer.bindVertexArray(null);
    renderer.state.setActiveGeometry(null);
    // eslint-disable-next-line guard-for-in
    for (const t in attributes) {
      const attribute = attributes[t];
      if (attribute instanceof BufferAttribute) {
        if (t === 'index') {
          this.setIndex(attribute);
        } else {
          this.addAttribute(t, attribute);
        }
      } else {
        const {
          size,
          data,
          normalized,
          stride,
          offset,
          divisor,
          usage,
        } = attribute;
        if (data) {
          const n = new BufferAttribute(this.gl, data, size, normalized, stride, offset, divisor, usage);
          if (t === 'index') {
            this.setIndex(n);
          } else {
            this.addAttribute(t, n);
          }
        }
      }
    }
  }

  get id() {
    return this.#id;
  }

  get attributes() {
    return this.#attributes;
  }

  get index() {
    return this.attributes.get('index');
  }

  get bounds() {
    return this.#bounds;
  }

  // eslint-disable-next-line consistent-return
  addAttribute(name, attribute) {
    attribute.id = uid('attribute');
    attribute.target = name === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    attribute.divisor = attribute.divisor || 0;
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
        return console.warn('Geometry has multiple instanced buffers of different length - instancedCount: '.concat(String(this.instancedCount), ', count: ').concat(attribute.count, ', divisor: ').concat(attribute.divisor, ', attribute: ').concat(name));
      }
      this.instancedCount = attribute.count * attribute.divisor;
    } else if (name === 'index') {
      this.drawRange.count = attribute.count;
    } else if (!this.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attribute.count);
    }
  }

  getAttribute(name) {
    return this.attributes.get(name);
  }

  setAttributeData(name, data) {
    const attribute = this.getAttribute(name);
    if (attribute) {
      attribute.data = data;
      attribute.needsUpdate = true;
    }
  }

  updateAttribute(attribute) {
    if (this.rendererState.boundBuffer !== attribute.buffer) {
      this.gl.bindBuffer(attribute.target, attribute.buffer);
      this.rendererState.boundBuffer = attribute.buffer;
    }
    this.gl.bufferData(attribute.target, attribute.data, this.gl.STATIC_DRAW);
    attribute.needsUpdate = false;
  }

  removeAttribute(attribute) {
    this.attributes.delete(attribute);
  }

  setIndex(index) {
    if (Array.isArray(index)) {
      // eslint-disable-next-line max-len
      const buffer = new BufferAttribute(this.gl, index.length > 65535 ? new Uint32Array(index) : new Uint16Array(index), 1);
      this.addAttribute('index', buffer);
    } else {
      index.size = 1;
      this.addAttribute('index', index);
    }
    this.drawRange.count = this.index?.count;
  }

  setVertices(data) {
    const array: number[] = [];
    const len = data.length;
    for (let i = 0; i < len; i++) {
      const item: number[] = data[i];
      array.push(item[0], item[1], item[2]);
    }
    this.addAttribute('position', new BufferAttribute(this.gl, new Float32Array(array), 3));
  }

  setNormals(data) {
    this.addAttribute('normal', new BufferAttribute(this.gl, new Float32Array(data), 2));
  }

  setUVs(data) {
    this.addAttribute('uv', new BufferAttribute(this.gl, new Float32Array(data), 2));
  }

  setColors(colors) {
    const data: number[] = [];
    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];
      if (!Array.isArray(color) && color) {
        color = color.toVector().toArray();
      }
      data.push(color[0], color[1], color[2], color[3]);
    }
    this.addAttribute('color', new BufferAttribute(this.gl, new Float32Array(data), 4));
  }

  setDrawRange(start: number, count: number) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }

  setInstancedCount(count: number) {
    this.instancedCount = count;
  }

  createVAO(program: Program) {
    const { attributeOrder } = program;
    const vao = this.renderer.createVertexArray();
    this.renderer.bindVertexArray(vao);
    this.#VAOs[attributeOrder] = vao;
    this.bindAttributes(program);
  }

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

  computeBoundingBox() {
    const {
      data,
      offset = 0,
      stride,
      size,
    } = this.attributes.get('position') as Attribute;
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
    const dl = stride || size;
    for (let i = offset; i < data.length; i += dl) {
      const x = data[i + 0];
      const y = data[i + 1];
      const z = data[i + 2];
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

  computeBoundingSphere() {
    const {
      data,
      offset = 0,
      stride,
      size,
    } = this.attributes.get('position') as Attribute;
    if (!this.#bounds) {
      this.computeBoundingBox();
    }
    let len = 0;
    const dl = stride || size;
    for (let j = offset; j < data.length; j += dl) {
      tempVec3.fromArray([...data], j);
      len = Math.max(len, this.#bounds.center.distanceToSquared(tempVec3));
    }
    this.#bounds.radius = Math.sqrt(len);
  }

  draw(program, drawMode = this.drawMode) {
    const { start, count } = this.drawRange;
    const a = ''.concat(this.id, '_').concat(program.attributeOrder);
    if (this.rendererState.activeGeometryId !== a) {
      if (!this.#VAOs[program.attributeOrder]) {
        this.createVAO(program);
      }
      program.renderer.bindVertexArray(this.#VAOs[program.attributeOrder]);
    }
    // eslint-disable-next-line guard-for-in
    for (const name in program.attributes) {
      const attribute = this.getAttribute(name);
      if (attribute && attribute.needsUpdate) {
        this.updateAttribute(attribute);
      }
    }
    if (this.isInstanced) {
      if (this.index) {
        const offset = this.index.offset + 2 * start;
        this.renderer.drawElementsInstanced(
          drawMode, count, this.index.type, offset, this.instancedCount,
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

  clone() {
    const attributes = {};
    this.attributes.forEach((item, index) => {
      attributes[index] = item;
    });
    const geometry = new Geometry(this.renderer, attributes);
    geometry.drawMode = this.drawMode;
    return geometry;
  }

  destroy() {
    Object.keys(this.#VAOs).forEach((t) => {
      this.renderer.deleteVertexArray(this.#VAOs[t]);
      delete this.#VAOs[t];
    });
    this.attributes.forEach((t) => {
      this.gl.deleteBuffer(t.buffer);
    });
    this.attributes.clear();
  }
}
