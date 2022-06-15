# ecart-improved, app used as a template

Angular version 14.0.0

## scaffolding

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new ecart-improved -S -g --routing --style=sass
```

### Or, if you already have this project ecart-improved, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I create the component for the element in question

```shell
ng g c components/kind
```

## I create the component navigation-bar

```shell
ng g @angular/material:navigation components/navigation-bar
```

## now I boot into development mode this example

```shell
ng serve -o
```
