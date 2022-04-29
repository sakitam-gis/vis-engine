export default class Matrix {
  #elements = new Float32Array(16);

  get elements() {
    return this.#elements;
  }

  fromArray(array, offset = 0) {
    let i = 0;
    for (; i < this.#elements.length; i++) {
      this.#elements[i] = array[offset + i];
    }
    return this;
  }

  toArray(out: number[] | Float32Array = [], offset = 0) {
    let i = 0;
    for (; i < this.#elements.length; i++) {
      out[offset + i] = this.#elements[i];
    }
    return out;
  }
}
