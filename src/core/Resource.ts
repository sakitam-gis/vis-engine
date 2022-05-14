import { uid } from '@/utils';
import type { WithUndef } from '@/types';

import Context from './Context';

const ERR_RESOURCE_METHOD_UNDEFINED = 'Resource subclass must define virtual methods';

export interface IResourceOptions {
  id: string;
  name: string;
  handle: any;
  userData: any;
}

export default class Resource<T> extends Context {
  #handle: any;

  id: string;

  name: WithUndef<string>;

  userData: any;

  // Only meaningful for resources that allocate GPU memory
  byteLength: number;

  options: Partial<IResourceOptions & T>;

  constructor(context: WebGLRenderingContext | WebGL2RenderingContext, options: Partial<IResourceOptions & T> = {}) {
    super(context);
    this.id = options?.id || uid(this.constructor.name);
    this.name = options?.name;
    this.userData = options?.userData;
    this.#handle = options?.handle;

    this.options = options;
    if (this.#handle === undefined) {
      this.#handle = this.createHandle();
    }

    this.byteLength = 0;
  }

  get handle() {
    return this.#handle;
  }

  destroy(): void {
    this.delete();
  }

  delete({ deleteChildren = false } = {}) {
    // Delete this object, and get refs to any children
    // @ts-expect-error
    const children = this.#handle && this.#deleteHandle(this.#handle);
    if (this.#handle) {
      this.removeStats();
    }
    this.#handle = null;

    // Optionally, recursively delete the children
    if (children && deleteChildren) {
      children.filter(Boolean).forEach((child) => child.delete());
    }

    return this;
  }

  bind(funcOrHandle = this.handle) {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  unbind() {
    this.bind(null);
  }

  removeStats() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  getParameter() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  setParameter() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  createHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  deleteHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  toString(): string {
    return `${this.constructor.name}(${this.id})`;
  }
}
