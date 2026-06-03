# Changelog
All important changes in vue-frontend-widgets

## [2.0.0] - 2026-06-03
- **BREAKING**: minimum supported Node version is now **20**. CI workflows (`.github/workflows/build.yml`, `.github/workflows/merge.yml`) bumped from Node 18.9 to Node 20. The strictest dep floor is `vitest@^4.1.0` which no longer supports Node 18.x; the rest of the upgraded toolchain (vite 6, @vue/eslint-config-typescript 13) also requires Node 18.18+ or 20+.
- Upgraded build-tooling dependencies (vite 5 → 6, vue-tsc 1 → 2, vite-plugin-dts 3 → 4, @vitejs/plugin-vue 4 → 5, vitest 3 → 4, axios 1.6 → 1.15, typescript 5.0 → 5.4, plus transitive re-resolution) to address critical, high, and moderate security advisories. No public component API change.
- Removed deprecated `transformMode.web` block from `vitest.config.ts` (removed entirely in vitest 4).
- Added `vite` to the `resolutions` block to work around a yarn-classic linking error caused by vitest 4 declaring `vite` in both `dependencies` and `peerDependencies`.
- Fixed `@vue/language-plugin-pug` reference in `tsconfig.app.json` (was the old name `@vue/vue-language-plugin-pug`), restoring pug template type-checking that had been silently broken.
- Set `build.lib.cssFileName: 'style'` in `vite.config.ts` to preserve the `dist/style.css` output filename across the vite 6 default change.
- Fixed pre-existing TypeScript errors surfaced by the vue-tsc 2 upgrade once template type-checking actually ran:
  - `SimpleTable`: added missing `columnsRow` slot to `defineSlots` declaration; aligned `dynamicRowsHeights` prop type with the `string[]` value `Table` produces from `String.split('|')`.
  - `VirtualizedTreeSelect`: widened `onChecked` first parameter to `unknown` (was `undefined`, incompatible with `el-tree-v2`'s `check` event signature); widened `filterMethod` node parameter from `{ label: string }` to the file's `TreeNodeData_2` alias (matches `el-tree-v2`'s `FilterMethod` contract).
  - `VirtualizedSelect`: declared an explicit `options` prop with a default of `[]` so `el-select-v2`'s required `options` prop is statically satisfied (was relying on attribute fallthrough, which vue-tsc cannot model).

## [1.4.3] - 2026-02-11
- Fixed table scroll position preservation when toggling inline filters, sorting, or dragging columns. Uses ratio-based scroll restoration to maintain the same visible columns even when content width changes (e.g., filter inputs widening columns).

## [1.4.2] - 2026-02-05
- Fixed table scroll position reset when sorting, using inline filters, or dragging columns

## [1.4.0] - 2026-01-27
- Added new input component

## [1.3.1] - 2025-08-29
- Fixed problem with inline tables filter reset.

## [1.3.0] - 2025-07-18
- Added a new component multiselect with a virtualized tree. 
Fast render & filtering with large trees (~10k)

## [1.2.0] - 2025-05-19
- Added a new component virtualized select. Fast render with a lot of options.

## [1.1.9] - 2025-05-13
- Replaced deprecated Sass @import with @use.

## [1.1.8] - 2025-05-05
- Added dynamic rows heights for Common table (
  - use with slots in the second scrollable table to keep left fixed table rows heights the same
  - set :dynamicRowsHeight="true" to use it
  - will be added one more render, so don't use this option by default. Only if it's really needed
  )

## [1.0.0] - 2025-01-14 🎄
### [BREAKING CHANGE]
- Totally changed structure of components & entry points (calls examples in README)

## [0.1.6] - 2024-12-17
Intersection table:
- Emitting events with the columns updates
- Emitting events with the rows updates
- Fixed problem with the loader position

## [0.1.1] - 2024-11-20
- Added data-test-id attribute to select options and KPI card values to ease acceptance testing

## [0.1.0] - 2024-11-15
- Added Tag

## [0.0.0] - 2024-10-31 🎃
- Started versioning 

