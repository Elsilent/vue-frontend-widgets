import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

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
      fileName: (format: string, entry: string) => {
        const extension = (() => {
          switch (format) {
            case 'cjs':
              return 'cjs';
            case 'es':
            default:
              return 'js';
          }
        })();

        return `${entry}.${extension}`;
      },
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
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '',
});
