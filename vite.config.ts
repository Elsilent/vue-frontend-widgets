import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { normalizePath } from 'vite';

const srcDir = resolve(__dirname, 'src');

const entries = [
  'container',
  'image',
  'interaction',
  'label',
  'layout',
  'marker',
  'view',
  'utils/currency',
  'utils/date',
  'utils/error',
  'utils/format',
  'utils/layout_header',
  'utils/line_bar_chart',
  'utils/match',
  'utils/menu',
  'utils/mood',
  'utils/sort',
  'utils/table',
  'utils/theme',
  'utils/kpi_distribution_table',
];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: entries.reduce((entryMap, entry) => {
        entryMap[entry] = resolve(srcDir, 'entries', `${entry}.ts`);

        return entryMap;
      }, {} as Record<string, string>),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['numeral', 'vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/element/index.scss" as *;',
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    vue(),
    ElementPlus({
      useSource: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath('./src/styles/fonts/fonts.css'),
          dest: normalizePath('./'),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '',
});
