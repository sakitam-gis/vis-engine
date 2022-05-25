import Object3D from './Object3D';

export default class Scene extends Object3D {
  constructor() {
    super();
  }

  clone() {
    return new Scene().copy(this, false);
  }

  copy(source, recursive) {
    super.copy(source, recursive);
    this.matrixAutoUpdate = source.matrixAutoUpdate;

    return this;
  }
}
