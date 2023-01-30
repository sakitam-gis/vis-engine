/* eslint-disable */
import vertex from '../shaders/gltf.vert.glsl';
import fragment from '../shaders/gltf.frag.glsl';
import lut from '../assest/lut.png';
import diffuse from '../assest/sunset-diffuse-RGBM.png';
import specular from '../assest/sunset-specular-RGBM.png';

import {
  Geometry,
  Matrix4,
  Mesh,
  Object3D,
  Program,
  ProjectionMatrix,
  Quaternion,
  Renderer,
  Texture,
  Vector3,
  Vector4,
  BufferAttribute,
} from '@sakitam-gis/vis-engine';

const TYPE_ARRAY = {
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array,
  'image/jpeg': Uint8Array,
  'image/png': Uint8Array,
};

const TYPE_SIZE = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16,
};

const ATTRIBUTES = {
  POSITION: 'position',
  NORMAL: 'normal',
  TANGENT: 'tangent',
  TEXCOORD_0: 'uv',
  TEXCOORD_1: 'uv2',
  COLOR_0: 'color',
  WEIGHTS_0: 'skinWeight',
  JOINTS_0: 'skinIndex',
};

const TRANSFORMS = {
  translation: 'position',
  rotation: 'quaternion',
  scale: 'scale',
};

function createProgram(renderer, geometry, material, desc) {

  const defines: string[] = [];

  if (geometry.attributes.get('uv')) {
    defines.push('UV');
  }

  if (geometry.attributes.get('normal')) {
    defines.push('NORMAL');
  }

  if (geometry.isInstanced) {
    defines.push('INSTANCED');
  }

  if (material.boneTexture) {
    defines.push('SKINNING');
  }

  if (material.alphaMode === 'MASK') {
    defines.push('ALPHA_MASK');
  }

  if (material.baseColorTexture) {
    defines.push('COLOR_MAP');
  }

  if (material.normalTexture) {
    defines.push('NORMAL_MAP');
  }

  if (material.metallicRoughnessTexture) {
    defines.push('RM_MAP');
  }

  if (material.occlusionTexture) {
    defines.push('OCC_MAP');
  }

  if (material.emissiveTexture) {
    defines.push('EMISSIVE_MAP');
  }

  const options = {
    wrapS: renderer.gl.CLAMP_TO_EDGE,
    wrapT: renderer.gl.CLAMP_TO_EDGE,
    format: renderer.gl.RGBA,
    internalFormat: renderer.gl.RGBA,
    generateMipmaps: true,
    minFilter: renderer.gl.NEAREST_MIPMAP_LINEAR,
    magFilter: renderer.gl.LINEAR,
    premultiplyAlpha: false,
    unpackAlignment: 4,
    flipY: true,
  };

  const lutTexture = new Texture(renderer, options);
  const envDiffuseTexture = new Texture(renderer, options);
  const envSpecularTexture = new Texture(renderer, options);

  lutTexture.fromSrc(lut);
  envDiffuseTexture.fromSrc(diffuse);
  envSpecularTexture.fromSrc(specular);

  return new Program(renderer, {
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uBaseColorFactor: { value: new Vector4().fromArray(material.baseColorFactor || [1, 1, 1, 1]) },
      tBaseColor: {
        value: material.baseColorTexture ? material.baseColorTexture.texture : null,
      },

      tRM: {
        value: material.metallicRoughnessTexture ? material.metallicRoughnessTexture.texture : null,
      },
      uRoughness: {
        value: material.roughnessFactor !== undefined ? material.roughnessFactor : 1,
      },
      uMetallic: { value: material.metallicFactor !== undefined ? material.metallicFactor : 1 },

      tNormal: { value: material.normalTexture ? material.normalTexture.texture : null },
      uNormalScale: { value: material.normalTexture ? material.normalTexture.scale || 1 : 1 },

      tOcclusion: {
        value: material.occlusionTexture ? material.occlusionTexture.texture : null,
      },

      tEmissive: { value: material.emissiveTexture ? material.emissiveTexture.texture : null },
      uEmissive: { value: new Vector3().fromArray(material.emissiveFactor || [0, 0, 0]) },

      tLUT: {
        value: lutTexture,
      },
      tEnvDiffuse: {
        value: envDiffuseTexture,
      },
      tEnvSpecular: {
        value: envSpecularTexture,
      },
      uEnvDiffuse: { value: 0.5 },
      uEnvSpecular: { value: 0.5 },

      uLightDirection: { value: new Vector3(0, 1, 1) },
      uLightColor: { value: new Vector3(2.5) },

      uAlpha: { value: 1 },
      uAlphaCutoff: { value: material.alphaCutoff },
    },
    defines,
    transparent: material.alphaMode === 'BLEND',
    cullFace: material.doubleSided ? undefined : renderer.gl.BACK,
  });
}

export class GLTFLoader {
  static async load(renderer: Renderer, src: string) {
    const dir = src.split('/').slice(0, -1).join('/') + '/';

    // load main description json
    const desc = await this.parseDesc(src);

    return await this.parse(renderer, desc, dir);
  }

  static async parse(renderer, desc, dir) {
    if (desc.asset === undefined || desc.asset.version[0] < 2)
      console.warn('Only GLTF >=2.0 supported. Attempting to parse.');

    // Load buffers async
    const buffers = await this.loadBuffers(desc, dir);

    // Unbind current VAO so that new buffers don't get added to active mesh
    renderer.bindVertexArray(null);

    // Create gl buffers from bufferViews
    const bufferViews = this.parseBufferViews(renderer, desc, buffers);

    // Create images from either bufferViews or separate image files
    const images = this.parseImages(renderer, desc, dir, bufferViews);

    const textures = this.parseTextures(renderer, desc, images);

    // Just pass through material data for now
    const materials = this.parseMaterials(renderer, desc, textures);

    // Fetch the inverse bind matrices for skeleton joints
    const skins = this.parseSkins(renderer, desc, bufferViews);

    // Create geometries for each mesh primitive
    const meshes = this.parseMeshes(renderer, desc, bufferViews, materials, skins);

    // Create transforms, meshes and hierarchy
    const nodes = this.parseNodes(renderer, desc, meshes, skins);

    // Place nodes in skeletons
    this.populateSkins(skins, nodes);

    // Create animation handlers
    const animations = this.parseAnimations(renderer, desc, nodes, bufferViews);

    // Get top level nodes for each scene
    const scenes = this.parseScenes(desc, nodes);
    const scene = scenes[desc.scene];

    // Remove null nodes (instanced transforms)
    for (let i = nodes.length; i >= 0; i--) if (!nodes[i]) nodes.splice(i, 1);

    return {
      json: desc,
      buffers,
      bufferViews,
      images,
      textures,
      materials,
      meshes,
      nodes,
      animations,
      scenes,
      scene,
    };
  }

  static async parseDesc(src) {
    if (!src.match(/\.glb/)) {
      return await fetch(src).then((res) => res.json());
    } else {
      return await fetch(src)
        .then((res) => res.arrayBuffer())
        .then((glb) => this.unpackGLB(glb));
    }
  }

  // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32
  static unpackGLB(glb) {
    // Decode and verify GLB header.
    const header = new Uint32Array(glb, 0, 3);
    if (header[0] !== 0x46546c67) {
      throw new Error('Invalid glTF asset.');
    } else if (header[1] !== 2) {
      throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
    }
    // Decode and verify chunk headers.
    const jsonChunkHeader = new Uint32Array(glb, 12, 2);
    const jsonByteOffset = 20;
    const jsonByteLength = jsonChunkHeader[0];
    if (jsonChunkHeader[1] !== 0x4e4f534a) {
      throw new Error('Unexpected GLB layout.');
    }

    // Decode JSON.
    const jsonText = new TextDecoder().decode(
      glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength),
    );
    const json = JSON.parse(jsonText);
    // JSON only
    if (jsonByteOffset + jsonByteLength === glb.byteLength) return json;

    const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
    if (binaryChunkHeader[1] !== 0x004e4942) {
      throw new Error('Unexpected GLB layout.');
    }
    // Decode content.
    const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
    const binaryByteLength = binaryChunkHeader[0];
    const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
    // Attach binary to buffer
    json.buffers[0].binary = binary;
    return json;
  }

  // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085
  static resolveURI(uri, dir) {
    // Invalid URI
    if (typeof uri !== 'string' || uri === '') return '';

    // Host Relative URI
    if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
      dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
    }

    // Absolute URI http://, https://, //
    if (/^(https?:)?\/\//i.test(uri)) return uri;

    // Data URI
    if (/^data:.*,.*$/i.test(uri)) return uri;

    // Blob URI
    if (/^blob:.*$/i.test(uri)) return uri;

    // Relative URI
    return dir + uri;
  }

  static async loadBuffers(desc, dir) {
    if (!desc.buffers) return null;
    return await Promise.all(
      desc.buffers.map((buffer) => {
        // For GLB, binary buffer ready to go
        if (buffer.binary) return buffer.binary;
        const uri = this.resolveURI(buffer.uri, dir);
        return fetch(uri).then((res) => res.arrayBuffer());
      }),
    );
  }

  static parseBufferViews(renderer, desc, buffers) {
    if (!desc.bufferViews) return null;
    // Clone to leave description pure
    const bufferViews = desc.bufferViews.map((o) => Object.assign({}, o));

    desc.meshes &&
      desc.meshes.forEach(({ primitives }) => {
        primitives.forEach(({ attributes, indices }) => {
          // Flag bufferView as an attribute, so it knows to create a gl buffer
          for (const attr in attributes)
            bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;

          if (indices === undefined) return;
          bufferViews[desc.accessors[indices].bufferView].isAttribute = true;

          // Make sure indices bufferView have a target property for gl buffer binding
          bufferViews[desc.accessors[indices].bufferView].target = renderer.gl.ELEMENT_ARRAY_BUFFER;
        });
      });

    // Get componentType of each bufferView from the accessors
    desc.accessors.forEach(({ bufferView: i, componentType }) => {
      bufferViews[i].componentType = componentType;
    });

    // Get mimetype of bufferView from images
    desc.images &&
      desc.images.forEach(({ uri, bufferView: i, mimeType }) => {
        if (i === undefined) return;
        bufferViews[i].mimeType = mimeType;
      });

    // Push each bufferView to the GPU as a separate buffer
    bufferViews.forEach(
      (
        {
          buffer: bufferIndex, // required
          byteOffset = 0, // optional
          byteLength, // required
          byteStride, // optional
          target = renderer.gl.ARRAY_BUFFER, // optional, added above for elements
          name, // optional
          extensions, // optional
          extras, // optional

          componentType, // optional, added from accessor above
          mimeType, // optional, added from images above
          isAttribute,
        },
        i,
      ) => {
        const TypeArray = TYPE_ARRAY[componentType || mimeType];
        const elementBytes = TypeArray.BYTES_PER_ELEMENT;

        const data = new TypeArray(buffers[bufferIndex], byteOffset, byteLength / elementBytes);
        bufferViews[i].data = data;
        bufferViews[i].originalBuffer = buffers[bufferIndex];

        if (!isAttribute) return;
        // Create gl buffers for the bufferView, pushing it to the GPU
        // const buffer = renderer.gl.createBuffer();
        // renderer.gl.bindBuffer(target, buffer);
        // renderer.state.boundBuffer = buffer;
        // renderer.gl.bufferData(target, data, renderer.gl.STATIC_DRAW);
        // bufferViews[i].buffer = buffer;
      },
    );

    return bufferViews;
  }

  static parseImages(renderer, desc, dir, bufferViews) {
    if (!desc.images) return null;
    return desc.images.map(({ uri, bufferView: bufferViewIndex, mimeType, name }) => {
      const image: HTMLImageElement & { ready?: Promise<void> } = new Image();
      image.name = name;
      if (uri) {
        image.src = this.resolveURI(uri, dir);
      } else if (bufferViewIndex !== undefined) {
        const { data } = bufferViews[bufferViewIndex];
        const blob = new Blob([data], { type: mimeType });
        image.src = URL.createObjectURL(blob);
      }
      image.ready = new Promise((res) => {
        image.onload = () => res();
      });
      return image;
    });
  }

  static parseTextures(renderer, desc, images) {
    if (!desc.textures) return null;
    return desc.textures.map(
      ({ sampler: samplerIndex, source: sourceIndex, name, extensions, extras }) => {
        const options = {
          flipY: false,
          generateMipmaps: true,
          wrapS: renderer.gl.REPEAT,
          wrapT: renderer.gl.REPEAT,
          minFilter: renderer.gl.NEAREST_MIPMAP_LINEAR,
        };
        const sampler = samplerIndex !== undefined ? desc.samplers[samplerIndex] : null;
        if (sampler) {
          ['magFilter', 'minFilter', 'wrapS', 'wrapT'].forEach((prop) => {
            if (sampler[prop]) options[prop] = sampler[prop];
          });
        }
        const texture = new Texture(renderer, options);
        texture.name = name;
        const image = images[sourceIndex];
        image.ready.then(() => {
          texture.setData(image, image.width, image.height);
        });

        return texture;
      },
    );
  }

  static parseMaterials(renderer, desc, textures) {
    if (!desc.materials) return null;
    return desc.materials.map(
      ({
        name,
        extensions,
        extras,
        pbrMetallicRoughness = {},
        normalTexture,
        occlusionTexture,
        emissiveTexture,
        emissiveFactor = [0, 0, 0],
        alphaMode = 'OPAQUE',
        alphaCutoff = 0.5,
        doubleSided = false,
      }) => {
        const {
          baseColorFactor = [1, 1, 1, 1],
          baseColorTexture,
          metallicFactor = 1,
          roughnessFactor = 1,
          metallicRoughnessTexture,
          //   extensions,
          //   extras,
        } = pbrMetallicRoughness as any;

        if (baseColorTexture) {
          baseColorTexture.texture = textures[baseColorTexture.index];
          // texCoord
        }
        if (normalTexture) {
          normalTexture.texture = textures[normalTexture.index];
          // scale: 1
          // texCoord
        }
        if (metallicRoughnessTexture) {
          metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
          // texCoord
        }
        if (occlusionTexture) {
          occlusionTexture.texture = textures[occlusionTexture.index];
          // strength 1
          // texCoord
        }
        if (emissiveTexture) {
          emissiveTexture.texture = textures[emissiveTexture.index];
          // texCoord
        }

        return {
          name,
          baseColorFactor,
          baseColorTexture,
          metallicFactor,
          roughnessFactor,
          metallicRoughnessTexture,
          normalTexture,
          occlusionTexture,
          emissiveTexture,
          emissiveFactor,
          alphaMode,
          alphaCutoff,
          doubleSided,
        };
      },
    );
  }

  static parseSkins(renderer, desc, bufferViews) {
    if (!desc.skins) return null;
    return desc.skins.map(
      ({
        inverseBindMatrices, // optional
        skeleton, // optional
        joints, // required
        // name,
        // extensions,
        // extras,
      }) => ({
        inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
        skeleton,
        joints,
      }),
    );
  }

  static parseMeshes(renderer, desc, bufferViews, materials, skins) {
    if (!desc.meshes) return null;
    return desc.meshes.map(
      (
        {
          primitives, // required
          weights, // optional
          name, // optional
          extensions, // optional
          extras, // optional
        },
        meshIndex,
      ) => {
        // TODO: weights stuff ?
        // Parse through nodes to see how many instances there are
        // and if there is a skin attached
        let numInstances = 0;
        let skinIndex = false;
        desc.nodes &&
          desc.nodes.forEach(({ mesh, skin }) => {
            if (mesh === meshIndex) {
              numInstances++;
              if (skin !== undefined) skinIndex = skin;
            }
          });

        primitives = this.parsePrimitives(
          renderer,
          primitives,
          desc,
          bufferViews,
          materials,
          numInstances,
        ).map(({ geometry, program, mode }) => {
          // Create either skinned mesh or regular mesh
          const mesh = new Mesh(renderer, { geometry, program, mode });
          // @ts-ignore
          mesh.name = name;
          if (mesh.geometry.isInstanced) {
            // Tag mesh so that nodes can add their transforms to the instance attribute
            mesh.numInstances = numInstances;
            // Avoid incorrect culling for instances
            mesh.frustumCulled = false;
          }
          return mesh;
        });

        return {
          primitives,
          weights,
          name,
        };
      },
    );
  }

  static parsePrimitives(renderer, primitives, desc, bufferViews, materials, numInstances) {
    return primitives.map(
      ({
        attributes, // required
        indices, // optional
        material: materialIndex, // optional
        mode = 4, // optional
        targets, // optional
        extensions, // optional
        extras, // optional
      }) => {
        const geometry = new Geometry(renderer);

        // Add each attribute found in primitive
        for (const attr in attributes) {
          geometry.addAttribute(
            ATTRIBUTES[attr],
            new BufferAttribute(renderer, this.parseAccessor(attributes[attr], desc, bufferViews)),
          );
        }

        // Add index attribute if found
        if (indices !== undefined) {
          geometry.setIndex(new BufferAttribute(renderer, this.parseAccessor(indices, desc, bufferViews)));
        }

        // Add instanced transform attribute if multiple instances
        if (numInstances > 1) {
          geometry.addAttribute('instanceMatrix', new BufferAttribute(renderer, {
            divisor: 1,
            size: 16,
            data: new Float32Array(numInstances * 16),
          }));
        }

        let material = {};

        if (materialIndex !== undefined) {
          material = materials[materialIndex];
        }

        const program = createProgram(renderer, geometry, material, desc);

        return {
          geometry,
          program,
          mode,
        };
      },
    );
  }

  static parseAccessor(index, desc, bufferViews) {
    // TODO: init missing bufferView with 0s
    // TODO: support sparse

    const {
      bufferView: bufferViewIndex, // optional
      byteOffset = 0, // optional
      componentType, // required
      normalized = false, // optional
      count, // required
      type, // required
      min, // optional
      max, // optional
      sparse, // optional
      // name, // optional
      // extensions, // optional
      // extras, // optional
    } = desc.accessors[index];

    const {
      data, // attached in parseBufferViews
      originalBuffer, // attached in parseBufferViews
      // buffer, // replaced to be the actual GL buffer
      byteOffset: bufferByteOffset = 0,
      // byteLength, // applied in parseBufferViews
      byteStride = 0,
      target,
      // name,
      // extensions,
      // extras,
    } = bufferViews[bufferViewIndex];

    const size = TYPE_SIZE[type];

    // Parse data from joined buffers
    const TypeArray = TYPE_ARRAY[componentType];
    const elementBytes = data.BYTES_PER_ELEMENT;
    const componentOffset = byteOffset / elementBytes;
    const componentStride = byteStride / elementBytes;
    const isInterleaved = !!byteStride && componentStride !== size;

    // TODO: interleaved
    const newData = isInterleaved
      ? data
      : new TypeArray(originalBuffer, byteOffset + bufferByteOffset, count * size);

    // Return attribute data
    return {
      data: newData,
      size,
      type: componentType,
      normalized,
      // buffer,
      stride: byteStride,
      offset: byteOffset,
      count,
      min,
      max,
    };
  }

  static parseNodes(renderer, desc, meshes, skins) {
    if (!desc.nodes) return null;
    const nodes = desc.nodes.map(
      ({
        camera, // optional
        children, // optional
        skin: skinIndex, // optional
        matrix, // optional
        mesh: meshIndex, // optional
        rotation, // optional
        scale, // optional
        translation, // optional
        weights, // optional
        name, // optional
        extensions, // optional
        extras, // optional
      }) => {
        const node = new Object3D();
        if (name) (node as any).name = name;

        // Apply transformations
        if (matrix) {
          node.localMatrix.copy(new ProjectionMatrix().fromArray(matrix));
          node.decompose();
        } else {
          if (rotation) node.quaternion.copy(new Quaternion().fromArray(rotation));
          if (scale) node.scale.copy(new Vector3().fromArray(scale));
          if (translation) node.position.copy(new Vector3().fromArray(translation));
          node.updateMatrix();
        }

        // Flags for avoiding duplicate transforms and removing unused instance nodes
        let isInstanced = false;
        let isFirstInstance = true;

        // add mesh if included
        if (meshIndex !== undefined) {
          meshes[meshIndex].primitives.forEach((mesh) => {
            if (mesh.geometry.isInstanced) {
              isInstanced = true;
              if (!mesh.instanceCount) {
                mesh.instanceCount = 0;
              } else {
                isFirstInstance = false;
              }
              // @ts-ignore
              node.matrix.toArray(
                mesh.geometry.attributes.instanceMatrix.data,
                mesh.instanceCount * 16,
              );
              mesh.instanceCount++;

              if (mesh.instanceCount === mesh.numInstances) {
                // Remove properties once all instances added
                delete mesh.numInstances;
                delete mesh.instanceCount;
                // Flag attribute as dirty
                mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
              }
            }

            // For instances, only the first node will actually have the mesh
            if (isInstanced) {
              if (isFirstInstance) mesh.setParent(node);
            } else {
              mesh.setParent(node);
            }
          });
        }

        // Reset node if instanced to not duplicate transforms
        if (isInstanced) {
          // Remove unused nodes just providing an instance transform
          if (!isFirstInstance) return null;
          // Avoid duplicate transform for node containing the instanced mesh
          node.localMatrix = new ProjectionMatrix().fromArray(Matrix4.identity.toArray());
          node.decompose();
        }

        return node;
      },
    );

    desc.nodes.forEach(({ children = [] }, i) => {
      // Set hierarchy now all nodes created
      children.forEach((childIndex) => {
        if (!nodes[childIndex]) return;
        nodes[childIndex].setParent(nodes[i]);
      });
    });

    return nodes;
  }

  static populateSkins(skins, nodes) {
    if (!skins) return;
    skins.forEach((skin) => {
      skin.joints = skin.joints.map((i, index) => {
        const joint = nodes[i];
        joint.bindInverse = new Matrix4(
          ...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16),
        );
        return joint;
      });
      if (skin.skeleton) skin.skeleton = nodes[skin.skeleton];
    });
  }

  static parseAnimations(renderer, desc, nodes, bufferViews) {
    if (!desc.animations) return null;
    return desc.animations.map(
      ({
        channels, // required
        samplers, // required
        name, // optional
        // extensions, // optional
        // extras,  // optional
      }) => {
        const data = channels.map(
          ({
            sampler: samplerIndex, // required
            target, // required
            // extensions, // optional
            // extras, // optional
          }) => {
            const {
              input: inputIndex, // required
              interpolation = 'LINEAR',
              output: outputIndex, // required
              // extensions, // optional
              // extras, // optional
            } = samplers[samplerIndex];

            const {
              node: nodeIndex, // optional - TODO: when is it not included?
              path, // required
              // extensions, // optional
              // extras, // optional
            } = target;

            const node = nodes[nodeIndex];
            const transform = TRANSFORMS[path];
            const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
            const values = this.parseAccessor(outputIndex, desc, bufferViews).data;

            return {
              node,
              transform,
              interpolation,
              times,
              values,
            };
          },
        );

        return {
          name,
          animation: {},
        };
      },
    );
  }

  static parseScenes(desc, nodes) {
    if (!desc.scenes) return null;
    return desc.scenes.map(
      ({
        nodes: nodesIndices = [],
        name, // optional
        extensions,
        extras,
      }) =>
        nodesIndices.reduce((map: any, i) => {
          // Don't add null nodes (instanced transforms)
          if (nodes[i]) map.push(nodes[i]);
          return map;
        }, []),
    );
  }
}
