import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const srcDir = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        container: resolve(srcDir, 'entries', 'container.ts'),
        image: resolve(srcDir, 'entries', 'image.ts'),
        interaction: resolve(srcDir, 'entries', 'interaction.ts'),
        label: resolve(srcDir, 'entries', 'label.ts'),
        layout: resolve(srcDir, 'entries', 'layout.ts'),
        marker: resolve(srcDir, 'entries', 'marker.ts'),
      },
      fileName: (format, entry) => {
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
  },
  plugins: [vue()],
  base: '',
});
