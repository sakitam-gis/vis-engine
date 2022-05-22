import Camera from './Camera';

export default class PerspectiveCamera extends Camera {
  constructor(fov, aspect, near, far) {
    super({
      fov,
      aspect,
      near,
      far,
    });
  }

  updateProjectionMatrix() {
    this.projectionMatrix.fromPerspective(this.fov, this.aspect, this.near, this.far);
  }
}
