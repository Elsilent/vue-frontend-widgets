# Breaking changes

## Migration from Vue 2 to Vue 3

When migrating projects from Vue 2 to Vue 3 you need to switch to the master branch.

The following changes are breaking and are required to be noted when updating:

- By default font family is not applied by any component not intended to set it
  - This means that to forcefully use the default font family or the brand text font family
    it is advised to use either Info, Header or BrandText component
- Info and Header components have different props from the Vue 2 version
- There is no select2 in the Vue 3 branch. If you want to use it use the one currently located
  in the project itself. Otherwise you might consider using the alternatives implemented here
- Table components no longer provide reloadRow nor reloadTable functions to the cell slots.
  - Previously these functions were required to be called whenever data is updated inside
    the table
  - Now tables can detect data change themselves so the usage of these functions is obsolete.
