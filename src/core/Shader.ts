import Resource from './Resource';

const ERR_SOURCE = 'Shader: GLSL source code must be a JavaScript string';

const getShaderName = t => {
  const v = t.match(/#define[\s*]SHADER_NAME[\s*]([\w-]+)[\s*]/);
  return v ? v[1] : 'unnamed';
};

const cachedIds = {};
function genShaderName(key = 'id') {
  cachedIds[key] = cachedIds[key] || 1;
  const idx = cachedIds[key];
  cachedIds[key] += 1;
  return ''.concat(key, '-').concat(idx);
}

type ShaderType = 'vertex-shader' | 'fragment-shader' | 'unknown';

const getTypeName = (ctx, shaderType: any): ShaderType => {
  switch (shaderType) {
    case ctx.VERTEX_SHADER:
      return 'vertex-shader';
    case ctx.FRAGMENT_SHADER:
      return 'fragment-shader';
    default:
      return 'unknown';
  }
}
const getShaderType = (ctx, type) => {
  switch (type) {
    case 'fragment':
      return ctx.FRAGMENT_SHADER;
    case 'vertex':
      return ctx.VERTEX_SHADER;
    default:
      return;
  }
};

export class Shader extends Resource<any> {
  #shaderType: ShaderType;

  public sourceCode: string;

  constructor(context, sourceCode, type, options = {}) {
    const shaderType = getShaderType(context.gl, type);
    super(context, {
      name: getShaderName(sourceCode) || genShaderName(getTypeName(context, shaderType))
    });
    console.assert(
      typeof sourceCode === 'string', ERR_SOURCE
    );
    this.#shaderType = shaderType;
    this.sourceCode = this.injectShaderModule(sourceCode, options || {})
      .replace(/\n\n+/gm, '\n\n');
    this.createShader(this.sourceCode);
  }

  injectShaderModule(shader, modules = {}) {
    const regExp = /^[\t ]*#glsl_include +<([\w.]+)>/gm;
    const replacement = (substring, r) => {
      let module = modules[r];
      if (module === undefined) throw new Error('Cannot resolve #include <'.concat(r, '>'));
      module = module.replace(/#include </g, '#glsl_include <');
      return this.injectShaderModule(module, modules);
    };
    return shader.replace(regExp, replacement);
  }

  createShader(
    source = this.source,
  ) {
    let s = source.replace(/#include </g, '#glsl_include <');
    s = this.injectShaderModule(s, this.options || {})
      .replace(/\n\n+/gm, '\n\n');
    this.context.shaderSource(this.handle, s);
    this.context.compileShader(this.handle);
    if (!this.context.getShaderParameter(this.handle, this.context.COMPILE_STATUS)) {
      this.context.deleteShader(this.handle);
      throw new Error(this.context.getShaderInfoLog(this.handle) || '');
    }
  }

  get source() {
    return this.sourceCode;
  }

  get shaderType() {
    return this.#shaderType;
  }

  getSource() {
    return this.context.getShaderSource(this.handle);
  }

  setSource(source) {
    const name = getShaderName(source);
    if (name) {
      this.name = genShaderName(name);
    }
    this.createShader(source);
  }

  deleteHandle() {
    this.context.deleteShader(this.handle);
  }

  toString(): string {
    return `${getTypeName(this.context, this.shaderType)}:${this.id}`;
  }
}

/**
 * 顶点着色器
 */
export class VertexShader extends Shader {
  constructor(gl: WebGLRenderingContext, sourceCode: string, options) {
    super(gl, sourceCode, 'vertex', options);
  }

  createHandle() {
    return this.context.createShader(this.context.VERTEX_SHADER);
  }
}

/**
 * 片段着色器
 */
export class FragmentShader extends Shader {
  constructor(gl: WebGLRenderingContext, sourceCode: string, options) {
    super(gl, sourceCode, 'fragment', options);
  }

  createHandle() {
    return this.context.createShader(this.context.FRAGMENT_SHADER);
  }
}
