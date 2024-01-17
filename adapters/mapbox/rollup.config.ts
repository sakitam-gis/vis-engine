import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { RollupOptions, defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import glslify from 'rollup-plugin-glslify';
import sourcemaps from 'rollup-plugin-sourcemaps';
import replace from '@rollup/plugin-replace';
// import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import worker from 'rollup-plugin-web-worker-loader';

const rq = createRequire(import.meta.url);
const pkg = rq('./package.json');
const ROOT = fileURLToPath(import.meta.url);
const DEV = process.env.NODE_ENV === 'development';
const MINIFY = process.env.MINIFY;
const PROD = !DEV;

const r = (p: string) => resolve(ROOT, '..', p);

const getFileName = (name) => {
  const arr = name.split('.');
  if (MINIFY) {
    arr.splice(arr.length - 1, 0, 'min');
    return arr.join('.');
  }
  return name;
}

const external = [
  ...Object.keys(pkg.dependencies),
];

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    preventAssignment: true,
  }),
  glslify(),
  json({
    namedExports: true,
  }),
  worker({
    sourcemap: true,
    inline: true,
    extensions: ['.js', 'ts'],
  }),
  commonjs(),
  nodeResolve({
    preferBuiltins: false,
    extensions: ['.ts', '.js', '.mjs', '.json']
  }),
  esbuild({ target: 'esnext' }),
  sourcemaps(),
  ...(MINIFY ? [
    terser({
      compress: true,
    }),
  ] : []),
];

const esmBuild: RollupOptions = {
  input: r('src/index.ts'),
  output: {
    format: 'esm',
    file: getFileName(pkg.module),
    sourcemap: !MINIFY,
  },
  external,
  plugins,
  onwarn(warning, warn) {
    if (warning.code !== 'EVAL') warn(warning);
  },
};

const cjsBuild: RollupOptions = {
  input: r('src/index.ts'),
  output: {
    format: 'cjs',
    file: getFileName(pkg.commonjs),
    sourcemap: !MINIFY,
  },
  external,
  plugins,
  onwarn(warning, warn) {
    if (warning.code !== 'EVAL') warn(warning);
  },
}

const umdBuild: RollupOptions = {
  input: r('src/index.ts'),
  output: {
    format: 'umd',
    dir: undefined,
    name: pkg.namespace,
    sourcemap: !MINIFY,
    file: getFileName(pkg.main),
    globals: {
      '@sakitam-gis/vis-engine': 've',
    }
  },
  external,
  plugins,
  onwarn(warning, warn) {
    if (warning.code !== 'EVAL') warn(warning);
  },
};

const typesBuild: RollupOptions = {
  input: r('src/index.ts'),
  output: {
    format: 'esm',
    file: pkg.types,
  },
  external,
  plugins: [
    dts({ respectExternal: true }),
  ],
};

const config = defineConfig([]);

config.push(esmBuild);
config.push(umdBuild);

if (PROD) {
  config.push(cjsBuild);
}

config.push(typesBuild);

export default config;
