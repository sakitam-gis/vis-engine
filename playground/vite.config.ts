import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import autoImport from 'unplugin-auto-import/vite';
import glslify from 'rollup-plugin-glslify';
// import fs from 'fs-extra';
import eslint from 'vite-plugin-eslint';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { BASE_URL, BUILD_PATH, PORT, BUILD_ANALYZER } = process.env;
  return {
    base: BASE_URL,
    publicDir: 'public',
    define: {
      'process.env': {
        NODE_ENV: mode,
      },
    },
    build: {
      outDir: BUILD_PATH,
      // target: 'es2015',
      // minify: 'terser',
      sourcemap: false,
      minify: true,
      rollupOptions: {
        manualChunks: {
          // 'react-vendor': ['react', 'react-router-dom', 'react-dom'],
          'common-vendor': ['lodash'],
        },
      },
    },
    plugins: [
      glslify(),
      react({
        babel: {
          parserOpts: {
            plugins: ['optionalChaining', 'nullishCoalescingOperator'],
          },
        },
      }),
      viteExternalsPlugin({
        // 'mapbox-gl': 'mapboxgl',
      }),
      autoImport({
        imports: [
          'react',
        ],
        dts: './src/auto-imports.d.ts',
      }),
      ...(mode === 'development' ? [
        eslint({
          include: ['src/**/*.ts', 'src/**/*.tsx'],
        }),
      ] : []),
      splitVendorChunkPlugin(),
      legacy({
        targets: ['defaults', 'not IE 11'],
        // targets: ['ie >= 10'],
        // additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      ...(BUILD_ANALYZER
        ? [
          visualizer({
            filename: './dist/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
        : []),
    ],
    css: {
      preprocessorOptions: {
        less: {
          globalVars: {},
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // 重写 less 变量，定制样式
          sourceMap: true,
        },
      },
      modules: {
        localsConvention: 'camelCase',
      },
    },
    server: {
      open: true,
      port: Number(PORT) || 3003,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
  };
});
