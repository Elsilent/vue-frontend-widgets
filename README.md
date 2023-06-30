# trackad-frontend-widgets

Frontend widgets which can be used across Vue 3 TrackAd projects.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Example of usage

```vue
<script lang="ts" setup>
import Align from 'trackad-frontend-widgets/src/components/container/Align.vue';
import Info from 'trackad-frontend-widgets/src/components/label/Info.vue';
</script>

<template lang="pug">
Align(horizontal='center')
  Info Hello, world!
</template>
```

## Contributing to the repository

Before creating a pull request please always run `yarn lint --fix`
to keep the code style consistent and run `yarn build` to check for errors.

> Don't solely rely on the linter built in your IDE. It might mark some of the things
> which could be improved but doesn't mark or fix all of them resulting in the reduction
> of code quality.

Try to preserve the same structure of components with putting new components
to the group where other components serve a similar purpose.

Don't bring project-specific functionality to this repository. Examples are:
- Assets
- Routing
- Translations
- Other libraries

Instead if you need these functionalities try to require them
from the dependant project.
