import Object3D from '../objects/Object3D';
import ProjectionMatrix from '../math/ProjectionMatrix';
import Matrix4 from '../math/Matrix4';
import Vector3 from '../math/Vector3';

export type CameraType = 'perspective' | 'orthographic';

export interface CameraOptions {
  near: number;
  far: number;
  fov?: number;
  aspect?: number;
  bounds?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  zoom?: number;
}

const tempMat4 = new Matrix4();

const ERR_CAMERA_METHOD_UNDEFINED = 'Camera subclass must define virtual methods';

/**
 * 相机基类
 */
export default class Camera extends Object3D {

  /**
   * 相机类型（默认有两种相机：perspective和orthographic）
   */
  public cameraType: CameraType;

  /**
   * 投影矩阵
   */
  public projectionMatrix: ProjectionMatrix;

  /**
   * 视图矩阵
   */
  public viewMatrix: Matrix4;

  public projectionViewMatrix: ProjectionMatrix;

  public worldPosition: Vector3;

  /**
   * 摄像机的近端面，默认值是0.1
   */
  public near: number;

  /**
   * 摄像机的远端面，默认值是 100
   */
  public far: number;

  /**
   * 摄像机视锥体垂直视野角度，从视图的底部到顶部，以角度来表示
   */
  public fov: number;

  /**
   * 相机视锥体的纵横比
   */
  public aspect: number;

  /**
   * 相机缩放倍数
   */
  public zoom: number;

  public bounds: any;

  constructor({
    near = 0.1,
    far = 100,
    fov = 45,
    aspect = 1,
    bounds,
    zoom = 1,
  }: CameraOptions = {} as CameraOptions) {
    super();

    /**
     * 相机类型
     */
    this.cameraType = 'perspective';
    this.projectionMatrix = new ProjectionMatrix();
    this.viewMatrix = new Matrix4();
    this.projectionViewMatrix = new ProjectionMatrix();
    this.worldPosition = new Vector3();
    this.near = near;
    this.far = far;
    this.fov = fov;
    this.aspect = aspect;
    this.bounds = bounds;
    this.zoom = zoom;
    const {
      left,
      right,
      top,
      bottom,
    } = bounds || {};
    this.cameraType = left || right ? 'orthographic' : 'perspective';
    if (this.cameraType === 'orthographic') {
      this.orthographic(left, right, top, bottom, near, far, zoom);
    } else {
      this.perspective(fov, aspect, near, far);
    }
  }

  perspective(fov = this.fov, aspect = this.aspect, near = this.near, far = this.far) {
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.projectionMatrix.fromPerspective(fov, aspect, near, far);
    this.cameraType = 'perspective';
  }

  orthographic(left, right, top, bottom, near = this.near, far = this.far, zoom = 1) {
    this.bounds = {
      left,
      right,
      top,
      bottom,
    };
    this.near = near;
    this.far = far;
    this.projectionMatrix.orthographic(
      left / zoom,
      right / zoom,
      top / zoom,
      bottom / zoom,
      near,
      far,
    );
    this.cameraType = 'orthographic';
  }

  lookAt(t) {
    super.lookAt(t, true);
    return this;
  }

  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.invert(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition);
    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }

  project(v) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  }

  unproject(v) {
    v.applyMatrix4(tempMat4.invert(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }

  /**
   * 更新摄像机投影矩阵，必须由子类实现
   */
  updateProjectionMatrix() {
    throw new Error(ERR_CAMERA_METHOD_UNDEFINED);
  }
}
