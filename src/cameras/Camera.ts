import Object3D from '../objects/Object3D';
import ProjectionMatrix from '../math/ProjectionMatrix';
import Matrix4 from '../math/Matrix4';
import Vector3 from '../math/Vector3';
import type { WithUndef } from '../types';

/**
 * 相机类型，默认有两种：`perspective` 透视相机和`orthographic`平面相机。
 */
export type CameraType = 'perspective' | 'orthographic';

export type Bounds = {
  /**
   * 像机视锥体左侧面
   */
  left: number;
  /**
   * 像机视锥体右侧面
   */
  right: number;
  /**
   * 像机视锥体上侧面
   */
  top: number;
  /**
   * 像机视锥体下侧面
   */
  bottom: number;
};

export interface CameraOptions {
  /**
   * 像机的近端面，默认值是0.1
   */
  near: number;

  /**
   * 像机的远端面，默认值是 100
   */
  far: number;

  /**
   * 摄像机视锥体垂直视野角度，从视图的底部到顶部，以角度来表示，默认为 `45`
   */
  fov?: number;

  /**
   * 相机视锥体的纵横比
   */
  aspect?: number;

  /**
   * 像机视锥体配置
   */
  bounds?: Bounds;

  /**
   * 相机缩放倍数
   */
  zoom?: number;
}

const tempMat4 = new Matrix4();
const tempVec3a = new Vector3();
const tempVec3b = new Vector3();

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

  /**
   * pv矩阵，它是 `projectionMatrix`和`viewMatrix` 的乘积
   */
  public projectionViewMatrix: ProjectionMatrix;

  /**
   * 世界位置坐标
   */
  public worldPosition: Vector3;

  /**
   * 像机的近端面，默认值是0.1
   */
  #near: number;

  /**
   * 像机的远端面，默认值是 100
   */
  #far: number;

  /**
   * 摄像机视锥体垂直视野角度，从视图的底部到顶部，以角度来表示
   */
  #fov: number;

  /**
   * 相机视锥体的纵横比
   */
  #aspect: number;

  /**
   * 相机缩放倍数
   */
  #zoom: number;

  /**
   * 像机视锥体配置
   */
  #bounds: WithUndef<Bounds>;

  public frustum: Matrix4;

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
    this.frustum = new Matrix4();
    this.#near = near;
    this.#far = far;
    this.#fov = fov;
    this.#aspect = aspect;
    this.#bounds = bounds;
    this.#zoom = zoom;
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

  /**
   * 获取像机的近端面
   */
  get near() {
    return this.#near;
  }

  /**
   * 设置像机的近端面，并更新摄像机投影矩阵
   * @param n near
   */
  set near(n: number) {
    this.#near = n;
    this.updateProjectionMatrix();
  }

  /**
   * 获取像机的远端面
   */
  get far() {
    return this.#far;
  }

  /**
   * 设置像机的远端面，并更新摄像机投影矩阵
   * @param f
   */
  set far(f: number) {
    this.#far = f;
    this.updateProjectionMatrix();
  }

  /**
   * 获取摄像机视锥体垂直视野角度
   */
  get fov() {
    return this.#fov;
  }

  /**
   * 设置摄像机视锥体垂直视野角度，并更新摄像机投影矩阵
   * @param f 角度值
   */
  set fov(f: number) {
    this.#fov = f;
    this.updateProjectionMatrix();
  }

  /**
   * 获取相机视锥体的纵横比
   */
  get aspect() {
    return this.#aspect;
  }

  /**
   * 设置相机视锥体的纵横比，并更新摄像机投影矩阵
   * @param aspect
   */
  set aspect(aspect: number) {
    this.#aspect = aspect;
    this.updateProjectionMatrix();
  }

  /**
   * 获取相机的缩放倍数
   */
  get zoom() {
    return this.#zoom;
  }

  /**
   * 设置相机的缩放倍数，并更新摄像机投影矩阵
   * @param zoom
   */
  set zoom(zoom: number) {
    this.#zoom = zoom;
    this.updateProjectionMatrix();
  }

  /**
   * 获取像机视锥体的范围
   */
  get bounds() {
    return this.#bounds;
  }

  /**
   * 设置相机像机视锥体的范围，并更新摄像机投影矩阵
   * @param bounds
   */
  set bounds(bounds: WithUndef<Bounds>) {
    this.#bounds = bounds;
    this.updateProjectionMatrix();
  }

  /**
   * 创建或者更新 `projectionMatrix` 透视相机矩阵
   * @param fov
   * @param aspect
   * @param near
   * @param far
   */
  perspective(fov = this.fov, aspect = this.aspect, near = this.near, far = this.far) {
    this.#fov = fov;
    this.#aspect = aspect;
    this.#near = near;
    this.#far = far;
    this.projectionMatrix.fromPerspective(fov, aspect, near, far);
    this.cameraType = 'perspective';
    // this.projectionMatrix.frustum(this.frustum, this.bounds.left, this.bounds.right, this.bounds.top, this.bounds.bottom, this.near, this.far);
  }

  /**
   * 创建或者更新 `projectionMatrix` 平面相机矩阵
   * @param left
   * @param right
   * @param top
   * @param bottom
   * @param near
   * @param far
   * @param zoom
   */
  orthographic(left, right, top, bottom, near = this.near, far = this.far, zoom = 1) {
    this.#bounds = {
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
    this.projectionMatrix.frustum(this.frustum, this.#bounds.left, this.#bounds.right, this.#bounds.top, this.#bounds.bottom, this.#near, this.#far);
  }

  /**
   * 设置相机的朝向
   * @param t 朝向位置，是一个三维向量
   */
  lookAt(t) {
    super.lookAt(t, true);
    return this;
  }

  /**
   * 用于更新一个对象的世界矩阵。
   * 每个可视对象都有一个叫做 `worldMatrix` 的矩阵，表示这个对象在世界坐标系中的位置和方向。
   * 当您修改对象的位置、旋转或缩放时，对象的 `worldMatrix` 矩阵会发生变化。如果您希望将这些变化反映到场景中，就需要调用 `updateMatrixWorld` 函数。
   */
  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.invert(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition);
    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }

  /**
   * 判断 mesh 是否在相机视椎体内
   * @param node
   * @param worldMatrix
   */
  frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
    if (!node.geometry.attributes.position) return true;

    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();

    if (!node.geometry.bounds) return true;

    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(worldMatrix);

    const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();

    return this.frustumIntersectsSphere(center, radius);
  }

  /**
   * @private
   * @param center
   * @param radius
   */
  frustumIntersectsSphere(center, radius) {
    const normal = tempVec3b;

    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance = normal.copy(plane).dot(center) + plane.constant;
      if (distance < -radius) return false;
    }
    return true;
  }

  /**
   * 转换到世界坐标
   * @param v
   */
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
