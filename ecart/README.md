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

## I create the component kind

```shell
ng g c components/kind
```

## I create the interface Product

```shell
ng g interface models/Product --type=model
```

## I create the service Ecart

```shell
ng g service services/Ecart
```

## now I boot into development mode this example

```shell
ng serve -o
```
