# ecart-improved

TODO

Angular version 14

## scaffolding

```shell
ng new exercise -S -g --routing --style=sass
```

### Or, if you already have this project ecart-improved, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## now it's up to the components

```shell
ng g c components/main
ng g c components/navbar
ng g c components/cart
ng g c components/toolbar
ng g c components/item-alert
ng g c components/item-detail
ng g c components/item-list
ng g c components/item-shipment
```

## I create the interfaces

```shell
ng g interface models/Product --type=model
ng g interface models/Shipment --type=model
ng g interface models/Customer --type=model
```

## now I create the services

```shell
ng g service services/Ecart
ng g service services/Shipping
ng g service services/Item
```

## How to simulate requests, in development phase, HTTP requests to API back-ends

For this application, at least at the beginning, I will need to simulate the request for data to the API back-ends.
Therefore, I'm going to add one more dependency:

```shell
npm i angular-in-memory-web-api -f
```

Rightly, you will see warnings.

The aforementioned library is useful in the early stages of development.

## now I boot into development mode this example

```shell
ng serve -o
```
