import mapboxgl from 'mapbox-gl';
import { Renderer, Scene, Object3D } from '@sakitam-gis/vis-engine';
import CameraSync from './CameraSync';
import { fromLngLat } from './mercatorCoordinate';

export { CameraSync };

export * from './mercatorCoordinate';

export interface MeshLayerOptions {
  renderingMode: '2d' | '3d';
}

export class MeshLayer {
  public id: string;
  public type: string;
  public renderingMode: string;

  public meshes: Map<string, Object3D>;

  public sync: any;
  private map: mapboxgl.Map;
  private renderer: any;
  private scene: any;
  constructor(id, options?: Partial<MeshLayerOptions>) {
    this.id = id;
    this.type = 'custom';
    this.renderingMode = options?.renderingMode || '2d';

    this.updateCamera = this.updateCamera.bind(this);
  }

  get camera() {
    return this.sync.camera;
  }

  updateCamera() {
    this.sync.update();
  }

  projectToWorld(coord) {
    const mc = fromLngLat(
      {
        lng: coord[0],
        lat: coord[1],
      },
      coord[2],
    );

    return [mc.x, mc.y, mc.z];
  }

  onAdd(map, gl) {
    this.map = map;
    this.renderer = new Renderer(gl, {
      autoClear: false,
    });
    this.scene = new Scene();
    this.sync = new CameraSync(map, 'perspective', this.scene);
    map.on('move', this.updateCamera);
    map.on('resize', this.updateCamera);

    this.updateCamera();
  }

  addMesh(mesh: any) {
    if (mesh && !this.meshes.has(mesh?.id)) {
      this.meshes.set(mesh?.id, mesh);
      this.scene.add(mesh);
    }
  }

  removeMesh(mesh) {
    if (mesh && this.meshes.has(mesh?.id)) {
      this.scene.remove(mesh);
      this.meshes.delete(mesh?.id);
    }
  }

  onRemove() {
    const iterator = this.meshes.entries();
    for (let i = 0; i < this.meshes.size; i++) {
      const [key, value] = iterator.next().value;
      this.scene.remove(value);
      this.meshes.delete(key);
    }
    this.map.on('move', this.updateCamera);
    this.map.on('resize', this.updateCamera);
  }

  render() {
    this.scene.worldMatrixNeedsUpdate = true;
    this.renderer.render({
      scene: this.scene,
      camera: this.camera,
    });
    this.renderer.resetState();
  }
}
