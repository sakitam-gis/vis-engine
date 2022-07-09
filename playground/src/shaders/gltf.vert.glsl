#version 300 es
#define attribute in
#define varying out
#define texture2D texture

attribute vec3 position;

#ifdef UV
attribute vec2 uv;
#else
const vec2 uv = vec2(0);
#endif

#ifdef NORMAL
attribute vec3 normal;
#else
const vec3 normal = vec3(0);
#endif

#ifdef INSTANCED
attribute mat4 instanceMatrix;
#endif

#ifdef SKINNING
attribute vec4 skinIndex;
attribute vec4 skinWeight;
#endif

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

#ifdef SKINNING
uniform sampler2D boneTexture;
uniform int boneTextureSize;
#endif

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;
varying vec4 vMVPos;

#ifdef SKINNING
    mat4 getBoneMatrix(const in float i) {
        float j = i * 4.0;
        float x = mod(j, float(boneTextureSize));
        float y = floor(j / float(boneTextureSize));

        float dx = 1.0 / float(boneTextureSize);
        float dy = 1.0 / float(boneTextureSize);

        y = dy * (y + 0.5);

        vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
        vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
        vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
        vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

        return mat4(v1, v2, v3, v4);
    }

    void skin(inout vec4 pos, inout vec3 nml) {
        mat4 boneMatX = getBoneMatrix(skinIndex.x);
        mat4 boneMatY = getBoneMatrix(skinIndex.y);
        mat4 boneMatZ = getBoneMatrix(skinIndex.z);
        mat4 boneMatW = getBoneMatrix(skinIndex.w);

        // update normal
        mat4 skinMatrix = mat4(0.0);
        skinMatrix += skinWeight.x * boneMatX;
        skinMatrix += skinWeight.y * boneMatY;
        skinMatrix += skinWeight.z * boneMatZ;
        skinMatrix += skinWeight.w * boneMatW;
        nml = vec4(skinMatrix * vec4(nml, 0.0)).xyz;

        // Update position
        vec4 transformed = vec4(0.0);
        transformed += boneMatX * pos * skinWeight.x;
        transformed += boneMatY * pos * skinWeight.y;
        transformed += boneMatZ * pos * skinWeight.z;
        transformed += boneMatW * pos * skinWeight.w;
        pos = transformed;
    }
#endif

void main() {
    vec4 pos = vec4(position, 1);
    vec3 nml = normal;

    #ifdef SKINNING
    skin(pos, nml);
    #endif

    #ifdef INSTANCED
    pos = instanceMatrix * pos;

    mat3 m = mat3(instanceMatrix);
    nml /= vec3(dot(m[0], m[0]), dot(m[1], m[1]), dot(m[2], m[2]));
    nml = m * nml;
    #endif

    vUv = uv;
    vNormal = normalize(nml);

    vec4 mPos = modelMatrix * pos;
    vMPos = mPos.xyz / mPos.w;
    vMVPos = modelViewMatrix * pos;

    gl_Position = projectionMatrix * vMVPos;
}
