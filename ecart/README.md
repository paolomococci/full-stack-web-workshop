# ecart

Angular version 14.2.3

## scaffolding

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.2.3 ng new ecart -S -g --routing --style=sass
```

### Or, if you already have this project ecart, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I create the interface Product

```shell
ng g interface models/Product --type=model
```

## I create the service Ecart

```shell
ng g service services/Ecart
```

## I create the component cart

```shell
ng g c components/cart
```

## I create the component toolbar

```
ng g c components/toolbar
```

## I create the component item-alert

```
ng g c components/item-alert
```

## I create the component item-detail

```
ng g c components/item-detail
```

## I create the component item-list

```
ng g c components/item-list
```

## I create the component item-shipment

```
ng g c components/item-shipment
```

## How to simulate requests, in development phase, HTTP requests to API back-ends

For this application, at least at the beginning, I will need to simulate the request for data to the API back-ends.
Therefore, I'm going to add one more dependency:

```shell
npm i angular-in-memory-web-api -f
```

Rightly, you will see warnings.

The aforementioned library is useful in the early stages of development.

## I create the interface Shipment

```shell
ng g interface models/Shipment --type=model
```

## I create the service Shipping

```shell
ng g service services/Shipping
```

## I create the service Item

```shell
ng g service services/Item
```

## I create the interface Customer

```shell
ng g interface models/Customer --type=model
```

## now I boot into development mode this example

```shell
ng serve -o
```
