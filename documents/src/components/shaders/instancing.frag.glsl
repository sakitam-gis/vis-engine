precision highp float;

uniform float uTime;
uniform sampler2D tMap;
varying vec2 vUv;

void main() {
    vec3 tex = texture2D(tMap, vUv).rgb;

    gl_FragColor.rgb = tex;
    gl_FragColor.a = 1.0;
}
