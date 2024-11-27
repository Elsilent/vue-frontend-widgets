# vue-frontend-widgets

Frontend widgets which can be used across Vue 3 projects.

## Recommended IDE Setup

[WebStorm](https://www.jetbrains.com/webstorm/) OR [PhpStorm](https://www.jetbrains.com/phpstorm/)

Make next setting before starting work: _Settings/Languages & Frameworks/JavaScript/Prettier_
- Automatic Prettier configuration: checked
- Run for files: `{**/*,*}.{js,ts,jsx,tsx,cjs,mjs,cts,mts,css,scss,vue}`
- Run on save: checked

## Example of usage

```vue
<script lang="ts" setup>
import { Align } from 'vue-frontend-widgets/container';
import { Header, Info } from 'vue-frontend-widgets/label';
</script>

<template lang="pug">
Align(horizontal='center')
  Header Hello, world!
  Info How are you doing today?
</template>
```

## Contributing to the repository

### Adding functionality

1. Don't put exported types to your components.
  - There are src/utils/interface/component and src/utils/type/component
    directories where you can put them.
    Otherwise you'll get errors on building the project.
2. Don't bring project-specific functionality to this repository.
  - Examples are:
    - Assets
    - Routing
    - Translations
    - Other libraries
  - Instead if you need these functionalities
    try to require them from the dependant project.


### Preparing for publishing changes

Before creating a pull request please always run `yarn format` & `yarn lint --fix`
to keep the code style consistent and run `yarn build` to check for errors.

> Don't solely rely on the linter built in your IDE. It might mark some of the things
> which could be improved but doesn't mark or fix all of them resulting in the reduction
> of code quality.
