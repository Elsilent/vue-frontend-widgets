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

## Versioning
- `yarn up-major` / `yarn up-minor` - Bump major/minor version manually before PR
- Patch versions auto-increment on merge to main via CI
- CHANGELOG.md entries must NOT contain any external task or issue tracker references
