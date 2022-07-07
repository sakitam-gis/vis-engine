precision highp float;

uniform float uTime;
varying vec2 vUv;

void main() {
    gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);
    gl_FragColor.a = 1.0;
}
