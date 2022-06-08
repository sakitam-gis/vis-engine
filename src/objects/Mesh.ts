import { uid } from '../utils';
import Object3D from './Object3D';
import Vector2 from '../math/Vector2';
import Matrix3 from '../math/Matrix3';
import Matrix4 from '../math/Matrix4';
import Geometry from '../core/Geometry';
import Program from '../core/Program';

export interface MeshOptions {
  id?: string;
  geometry: any;
  program: any;
  mode: GLenum;
  frustumCulled: boolean;
  renderOrder: number;
}

export interface MeshDrawOptions {
  renderer: any;
  camera: any;
  target: any;
}

export default class Mesh extends Object3D {
  public gl: WebGLRenderingContext | WebGL2RenderingContext;

  public modelViewMatrix: Matrix4;

  public normalMatrix: Matrix3;

  public renderOrder: number;

  public zDepth: number;

  public frustumCulled: boolean;

  public mode: GLenum;

  #id: string;

  #geometry: Geometry;

  #program: Program;

  constructor(gl, { id, geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 }: MeshOptions = {} as MeshOptions) {
    super();
    this.gl = gl;
    this.modelViewMatrix = new Matrix4();
    this.normalMatrix = new Matrix3();
    this.renderOrder = renderOrder;
    this.frustumCulled = frustumCulled;
    this.zDepth = 0;
    this.#id = id || uid('mesh');
    this.#geometry = geometry;
    this.#program = program;
    this.mode = mode;
  }

  get id() {
    return this.#id;
  }

  get geometry() {
    return this.#geometry;
  }

  get program() {
    return this.#program;
  }

  set wireframe(wireframe) {
    this.mode = wireframe ? this.gl.LINE_STRIP : this.gl.TRIANGLES;
  }

  draw(options: MeshDrawOptions = {} as MeshDrawOptions) {
    const { camera, target } = options;
    const uniforms = {};
    let mode = this.mode;
    if (this.program.wireframe) {
      mode = this.gl.LINE_STRIP;
    }
    if (camera) {
      Object.assign(uniforms, {
        projectionMatrix: camera.projectionMatrix,
        cameraPosition: camera.worldPosition,
        viewMatrix: camera.viewMatrix,
      });
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
    } else {
      this.modelViewMatrix.copy(this.worldMatrix);
    }

    Object.assign(uniforms, {
      resolution: new Vector2(this.gl.canvas.width, this.gl.canvas.height),
      modelMatrix: this.worldMatrix,
      modelViewMatrix: this.modelViewMatrix,
      normalMatrix: this.normalMatrix,
    });
    Object.keys(uniforms).forEach((key) => {
      if (!Object.hasOwn(this.program.uniforms, key)) {
        this.program.uniforms[key] = { value: null };
      }
      this.program.uniforms[key].value = uniforms[key];
    });
    if (target) target.bind();
    this.program.use();
    this.geometry.draw(this.program, mode);
    if (target) target.unbind();
  }

  updateGeometry(geometry, dispose) {
    if (dispose && this.#geometry) {
      this.#geometry.destroy();
    }
    this.#geometry = geometry;
  }

  destroy() {
    this.program.destroy();
    this.geometry.destroy();
  }

  clone() {
    return new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
      frustumCulled: this.frustumCulled,
      mode: this.mode,
      renderOrder: this.renderOrder,
    }).copy(this);
  }

  copy(mesh, recursive = true) {
    super.copy(mesh, recursive);
    this.modelViewMatrix.copy(mesh.modelViewMatrix);
    this.normalMatrix.copy(mesh.normalMatrix);
    this.mode = mesh.mode;
    this.renderOrder = mesh.renderOrder;
    this.zDepth = mesh.zDepth;
    return this;
  }
}
