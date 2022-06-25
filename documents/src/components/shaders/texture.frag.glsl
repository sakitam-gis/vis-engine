precision highp float;

uniform float uTime;
uniform sampler2D texture;

varying vec2 vUv;

void main() {
    vec3 tex = texture2D(texture, vUv).rgb;
    gl_FragColor.rgb = tex;
    gl_FragColor.a = 1.0;
}
