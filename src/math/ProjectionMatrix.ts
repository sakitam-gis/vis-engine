import {
  frustum, lookAt, perspective, ortho,
} from 'gl-matrix/mat4';

import Matrix4 from './Matrix4';
import Vector3 from './Vector3';

export default class ProjectionMatrix extends Matrix4 {
  frustum(left, right, top, bottom, near, far) {
    frustum(this.elements, left, right, bottom, top, near, far);
    return this;
  }

  orthographic(left, right, top, bottom, near, far) {
    ortho(this.elements, left, right, bottom, top, near, far);
    return this;
  }

  perspective(fovy, aspect, near, far) {
    perspective(this.elements, fovy, aspect, near, far);
    return this;
  }

  lookAt(eye, center = new Vector3(0, 0, 0), up = new Vector3(0, 1, 0)) {
    lookAt(this.elements, eye.value, center.elements, up.elements);
    return this;
  }
}
