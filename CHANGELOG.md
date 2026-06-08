# Changelog
All important changes in vue-frontend-widgets

## [2.0.0] - 2026-06-08
- **BREAKING**: minimum Node version raised to **20**. CI workflows bumped from Node 18.9 to Node 20. Strictest dep floor is `vitest@^4` (no Node 18.x support); vite 6 and @vue/eslint-config-typescript 13 also require Node 18.18+/20+.
- Dependency upgrades clearing critical, high, and moderate security advisories:
  - `vite` 5 → 6, `vitest` 3 → 4, `vite-plugin-dts` 3 → 4, `vue-tsc` 1 → 2
  - `@vitejs/plugin-vue` 4 → 5, `@vue/eslint-config-typescript` 11 → 13
  - `axios` 1.6 → 1.15, `typescript` 5.0 → 5.4
  - `element-plus` 2.9.10 → 2.14.1 (clears CVE-2025-57665 el-link advisory; eliminates internal `_2` type disambiguation that broke per-file declaration emit)
- No public component API change.
- TypeScript fixes surfaced by vue-tsc 2's stricter template inference:
  - Extracted `AdditionalHeader` interface from `Table.vue` to `src/utils/type/component/container/table.ts` (per CLAUDE.md convention: exported types must not live in component files).
  - `DatePicker.vue`: `as Node | null` cast on `event.relatedTarget` for strict `Node.contains()` signature.
  - `SimpleTable.vue`: added missing `columnsRow` slot to `defineSlots`; `dynamicRowsHeights` type aligned with the `string[]` value `Table.vue` produces from `String.split('|')`.
  - `VirtualizedSelect.vue`: declared explicit `options` prop with default `[]` (was relying on attribute fallthrough, which vue-tsc cannot model).
  - `VirtualizedTreeSelect.vue`: widened handler parameter types (`onChecked` first arg to `unknown`, `filterMethod` second arg to `TreeNodeData_2`).
- Tsconfig cleanup — removed unused `composite: true` from `tsconfig.app.json`/`vitest.json`/`node.json` (the project is a flat single source tree, never invoked `tsc --build`). Inherits `moduleResolution: "bundler"` from `@vue/tsconfig` base (Vue 3.4+ `package.json#exports` requires it). Added `"DOM.Iterable"` to `lib` (fixes `NodeListOf` iteration in `Table.vue`).
- Vite config:
  - Added `tsconfigPath: './tsconfig.app.json'` to vite-plugin-dts so it reads the app config directly.
  - Set `build.lib.cssFileName: 'style'` to preserve `dist/style.css` filename across vite 6's default rename.
- Other config:
  - Removed deprecated `transformMode.web` block from `vitest.config.ts` (removed in vitest 4).
  - Added `vite` to `resolutions` (yarn-classic workaround for vitest 4 declaring `vite` in both `dependencies` and `peerDependencies`).
  - Fixed `@vue/language-plugin-pug` reference in `tsconfig.app.json` (was the old name `@vue/vue-language-plugin-pug`), restoring pug template type-checking.
  - `TreeSelect.vue`: restored checked-state checkmark alignment after element-plus's update changed its default transform.

## [1.4.7] - 2026-06-08
- Fixed formatter for long float percent values.
- Removed sorting after columns drag-and-drop.

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

