import { DataType } from '../core/BufferAttribute';

export function parseShader(shader, defines: string[] = [], includes = []) {
  return shader.replace(/#defines/, defines.join('\n')).replace(/#includes/, includes.join('\n'));
}

export function defineShader(shader, defines = {}) {
  return Object.keys(defines).reduce((str, key) => (defines[key] ? `#define ${key} ${defines[key]}\n${str}` : str), shader);
}

/** Extracts GLSLIFY style naming of shaders: `#define SHADER_NAME ...` */
export function getShaderName(shader: string, defaultName: string = 'unnamed'): string {
  const SHADER_NAME_REGEXP = /#define\s*SHADER_NAME\s*([A-Za-z0-9_-]+)\s*/;
  const match = shader.match(SHADER_NAME_REGEXP);
  return match ? match[1] : defaultName;
}

/**
 * 根据顶点索引重新构建 `Wireframe` 索引
 * @param position 顶点数据
 * @param indices 索引数据
 * @param numIndices 索引数量
 * @param data 原始索引数据
 */
export function getWireframeIndex(position: DataType, indices: number[], numIndices: number, data?: Uint16Array | Uint32Array) {
  const edges = new Set();
  if (data) {
    for (let j = 0, l = numIndices; j < l; j += 3) {
      const a = data[j];
      const b = data[j + 1];
      const c = data[j + 2];

      const array = [a, b, b, c, c, a];

      for (let i = 0; i < array.length; i += 2) {
        if (isUniqueEdge(array[i] * 3, array[i + 1] * 3, position, edges)) {
          indices.push(array[i], array[i + 1]);
        }
      }
    }
  } else {
    for (let j = 0, l = numIndices; j < l; j += 3) {
      const a = j;
      const b = j + 1;
      const c = j + 2;

      const array = [a, b, b, c, c, a];

      for (let i = 0; i < array.length; i += 2) {
        if (isUniqueEdge(array[i] * 3, array[i + 1] * 3, position, edges)) {
          indices.push(array[i], array[i + 1]);
        }
      }
    }
  }

  return indices;
}

/**
 * 判断是否是独立的边
 * @param start
 * @param end
 * @param position
 * @param edges
 */
export function isUniqueEdge(start, end, position, edges) {
  const hash1 = `${position[start]},${position[start + 1]},${position[start + 2]}-${position[end]},${position[end + 1]},${position[end + 2]}`;
  const hash2 = `${position[end]},${position[end + 1]},${position[end + 2]}-${position[start]},${position[start + 1]},${position[start + 2]}`; // coincident edge
  if (edges.has(hash1) === true || edges.has(hash2) === true) {
    return false;
  } else {
    edges.add(hash1);
    edges.add(hash2);
    return true;
  }
}
