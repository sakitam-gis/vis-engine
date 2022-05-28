export function parseShader(shader, defines: string[] = [], includes = []) {
  return shader.replace(/<#defines>/, defines.join('\n')).replace(/<#includes>/, includes.join('\n'));
}

export function defineShader(shader, defines = {}) {
  return Object.keys(defines).reduce((str, key) => (defines[key] ? `#define ${key} ${defines[key]}\n${str}` : str), shader);
}

/** Extracts GLSLIFY style naming of shaders: `#define SHADER_NAME ...` */
export function getShaderName(shader: string, defaultName: string = 'unnamed'): string {
  const SHADER_NAME_REGEXP = /#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/;
  const match = shader.match(SHADER_NAME_REGEXP);
  return match ? match[1] : defaultName;
}
