# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 component library published as `@elsilent/vue-frontend-widgets` to npm. Provides reusable UI components, utilities, and types for Vue applications. Uses Pug templates and Element Plus as base UI framework.

## Commands

```bash
yarn install          # Install dependencies
yarn build            # Type-check and build (runs both type-check and build-only)
yarn type-check       # TypeScript validation only
yarn format           # Format code with Prettier
yarn lint --fix       # Lint and auto-fix issues
yarn test:unit        # Run tests with Vitest
```

**Before creating a PR:** Always run `yarn format && yarn lint --fix && yarn build`

## Architecture

### Entry Points (src/entries/)
The library exposes three entry points configured in package.json exports:
- `components.ts` - All Vue components (imported from `vue-frontend-widgets`)
- `types.ts` - TypeScript type definitions (imported from `vue-frontend-widgets/types`)
- `utils.ts` - Utility functions (imported from `vue-frontend-widgets/utils`)

### Type/Interface Organization
Exported types must NOT be defined inside component files. Place them in:
- `src/utils/type/component/` - Type definitions
- `src/utils/interface/component/` - Interface definitions
- `src/utils/enum/` - Enum definitions

This prevents build errors when consuming the library.

### Styling
- SCSS files in `src/styles/` with Element Plus customization in `src/styles/element/`
- Global SCSS is injected via Vite config: `@use "@/styles/element/index.scss" as *;`
- Use `@` alias for imports (resolves to `src/`)

### External Dependencies
`vue`, `vue-router`, and `numeral` are externalized - not bundled, expected from consuming project.

## Versioning & releases

Releases are fully automated by `.github/workflows/merge.yml` ("Pipeline Bot"), which runs on every **merged PR** to main. It compares `major.minor` of package.json against the latest git tag:
- equal → `yarn version --patch` + publish to npm
- different → publishes the version from package.json as-is + creates the GitHub Release/tag

Rules:
- **Patch release (fixes): NEVER touch `version` in package.json — merging the PR IS the release.** A manual patch bump is invisible to the pipeline's check, so it bumps again on top and your number becomes a phantom that never reaches npm (this happened: a PR set 2.0.3, the bot published 2.0.4).
- **Minor/major release**: set the new `X.Y.0` via `yarn up-minor` / `yarn up-major` in the PR — the pipeline publishes exactly that version.
- **CHANGELOG.md entry in a patch PR**: number it as *latest published version + 1* (what the bot will mint), not what package.json says.
- Direct pushes to main do NOT trigger the pipeline (it listens to merged PRs only) — safe for docs/changelog-only commits.
- CHANGELOG.md entries must NOT contain any external task or issue tracker references
- **Match the entry's length to the change.** A small fix gets one short sentence; save the paragraph for a change that needs it (breaking, subtle, or wide-reaching).
