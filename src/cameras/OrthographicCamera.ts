import Camera from './Camera';

export default class OrthographicCamera extends Camera {
  constructor(left, right, top, bottom, near, far, zoom = 1) {
    super({
      bounds: {
        left,
        right,
        top,
        bottom,
      },
      near,
      far,
      zoom,
    });
  }

  updateProjectionMatrix() {
    const {
      left,
      right,
      top,
      bottom,
    } = this.bounds;
    const { zoom } = this;
    this.projectionMatrix.orthographic(
      left / zoom,
      right / zoom,
      top / zoom,
      bottom / zoom,
      this.near,
      this.far,
    );
  }
}
