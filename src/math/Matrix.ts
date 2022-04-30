export default class Matrix {
  /**
   * 矩阵数据
   * @private
   */
  #elements = new Float32Array(16);

  get elements() {
    return this.#elements;
  }

  /**
   * 从数组构建矩阵
   * @param array 原始数组
   * @param offset 数组偏移量
   */
  fromArray(array, offset = 0) {
    let i = 0;
    for (; i < this.#elements.length; i++) {
      this.#elements[i] = array[offset + i];
    }
    return this;
  }

  /**
   * 从矩阵转换到数组
   * @param out 输出数据
   * @param offset 偏移量
   */
  toArray(out: number[] | Float32Array = [], offset = 0) {
    let i = 0;
    for (; i < this.#elements.length; i++) {
      out[offset + i] = this.#elements[i];
    }
    return out;
  }
}
