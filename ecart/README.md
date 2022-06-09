# ecart

Angular version 14.0.0

## scaffolding

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new ecart -S -g --routing --style=sass
```

### Or, if you already have this project ecart, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I create the component

```shell
ng g c components/kind
```

## I create the interface

```shell
ng g interface models/Product --type=model
```

## now I boot into development mode this example

```shell
ng serve -o
```
