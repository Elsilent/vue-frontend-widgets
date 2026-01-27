# Changelog
All important changes in vue-frontend-widgets

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

