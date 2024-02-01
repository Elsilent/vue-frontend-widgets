// vite.config.ts
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/shyblack/trackad-frontend-widgets/node_modules/vite/dist/node/index.js";
import dts from "file:///home/shyblack/trackad-frontend-widgets/node_modules/vite-plugin-dts/dist/index.mjs";
import vue from "file:///home/shyblack/trackad-frontend-widgets/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "/home/shyblack/trackad-frontend-widgets";
var __vite_injected_original_import_meta_url = "file:///home/shyblack/trackad-frontend-widgets/vite.config.ts";
var srcDir = resolve(__vite_injected_original_dirname, "src");
var entries = [
  "container",
  "image",
  "interaction",
  "label",
  "layout",
  "marker",
  "view",
  "utils/currency",
  "utils/date",
  "utils/error",
  "utils/format",
  "utils/layout_header",
  "utils/line_bar_chart",
  "utils/match",
  "utils/menu",
  "utils/mood",
  "utils/sort",
  "utils/table",
  "utils/theme"
];
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: entries.reduce((entryMap, entry) => {
        entryMap[entry] = resolve(srcDir, "entries", `${entry}.ts`);
        return entryMap;
      }, {}),
      fileName: (format, entry) => {
        const extension = (() => {
          switch (format) {
            case "cjs":
              return "cjs";
            case "es":
            default:
              return "js";
          }
        })();
        return `${entry}.${extension}`;
      }
    },
    rollupOptions: {
      external: ["numeral", "vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  base: ""
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zaHlibGFjay90cmFja2FkLWZyb250ZW5kLXdpZGdldHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3NoeWJsYWNrL3RyYWNrYWQtZnJvbnRlbmQtd2lkZ2V0cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9zaHlibGFjay90cmFja2FkLWZyb250ZW5kLXdpZGdldHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJztcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5cbmNvbnN0IHNyY0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyk7XG5cbmNvbnN0IGVudHJpZXMgPSBbXG4gICdjb250YWluZXInLFxuICAnaW1hZ2UnLFxuICAnaW50ZXJhY3Rpb24nLFxuICAnbGFiZWwnLFxuICAnbGF5b3V0JyxcbiAgJ21hcmtlcicsXG4gICd2aWV3JyxcbiAgJ3V0aWxzL2N1cnJlbmN5JyxcbiAgJ3V0aWxzL2RhdGUnLFxuICAndXRpbHMvZXJyb3InLFxuICAndXRpbHMvZm9ybWF0JyxcbiAgJ3V0aWxzL2xheW91dF9oZWFkZXInLFxuICAndXRpbHMvbGluZV9iYXJfY2hhcnQnLFxuICAndXRpbHMvbWF0Y2gnLFxuICAndXRpbHMvbWVudScsXG4gICd1dGlscy9tb29kJyxcbiAgJ3V0aWxzL3NvcnQnLFxuICAndXRpbHMvdGFibGUnLFxuICAndXRpbHMvdGhlbWUnLFxuXTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogZW50cmllcy5yZWR1Y2UoKGVudHJ5TWFwLCBlbnRyeSkgPT4ge1xuICAgICAgICBlbnRyeU1hcFtlbnRyeV0gPSByZXNvbHZlKHNyY0RpciwgJ2VudHJpZXMnLCBgJHtlbnRyeX0udHNgKTtcblxuICAgICAgICByZXR1cm4gZW50cnlNYXA7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0OiBzdHJpbmcsIGVudHJ5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gKCgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgY2FzZSAnY2pzJzpcbiAgICAgICAgICAgICAgcmV0dXJuICdjanMnO1xuICAgICAgICAgICAgY2FzZSAnZXMnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICdqcyc7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiBgJHtlbnRyeX0uJHtleHRlbnNpb259YDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydudW1lcmFsJywgJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgfSksXG4gICAgdnVlKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbiAgYmFzZTogJycsXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsU0FBUyxlQUFlO0FBQy9ULFNBQVMsZUFBZSxXQUFXO0FBRW5DLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFBNkksSUFBTSwyQ0FBMkM7QUFPdk8sSUFBTSxTQUFTLFFBQVEsa0NBQVcsS0FBSztBQUV2QyxJQUFNLFVBQVU7QUFBQSxFQUNkO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsT0FBTyxDQUFDLFVBQVUsVUFBVTtBQUN6QyxpQkFBUyxLQUFLLElBQUksUUFBUSxRQUFRLFdBQVcsR0FBRyxVQUFVO0FBRTFELGVBQU87QUFBQSxNQUNULEdBQUcsQ0FBQyxDQUEyQjtBQUFBLE1BQy9CLFVBQVUsQ0FBQyxRQUFnQixVQUFrQjtBQUMzQyxjQUFNLGFBQWEsTUFBTTtBQUN2QixrQkFBUSxRQUFRO0FBQUEsWUFDZCxLQUFLO0FBQ0gscUJBQU87QUFBQSxZQUNULEtBQUs7QUFBQSxZQUNMO0FBQ0UscUJBQU87QUFBQSxVQUNYO0FBQUEsUUFDRixHQUFHO0FBRUgsZUFBTyxHQUFHLFNBQVM7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxXQUFXLEtBQUs7QUFBQSxNQUMzQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0Ysa0JBQWtCO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQ1IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
