#!/bin/bash

ng g c components/main
ng g c components/navbar
ng g c components/cart
ng g c components/toolbar
ng g c components/item-alert
ng g c components/item-detail
ng g c components/item-list
ng g c components/item-shipment
ng g interface models/Product --type=model
ng g interface models/Shipment --type=model
ng g interface models/Customer --type=model
ng g service services/Ecart
ng g service services/Shipping
ng g service services/Item
