## LitElement Evaluation

### Good
* TypeScript without a plugin
* Rollup/Webpack without a plugin
* Correctly shares application libraries/state without duplication
* Markup for templating tables doesn't require explicit array joins
* Easily hooks into pub/sub update -> spinner -> render -> remove spinner

### Bad
* Idomatic Lit css incompatible with non-Lit elements (Can still inline style tag for shared css)

### To Evaluate
* Template performance when initially rendering large non-virtualized tables
* Template performance when changing large table rows list slightly
* Template performance when re-formatting table cells
* Callback on render completion (ex. bulk table exports)

