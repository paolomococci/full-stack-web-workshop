import { NgModule } from '@angular/core'
import {
  RouterModule,
  Routes
} from '@angular/router'

import { ItemListComponent } from './components/item-list/item-list.component'
import { ItemDetailComponent } from './components/item-detail/item-detail.component'
import { CartComponent } from './components/cart/cart.component'
import { ItemShipmentComponent } from './components/item-shipment/item-shipment.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'items/:itemId',
    component: ItemDetailComponent
  },
  {
    path: 'bag',
    component: CartComponent
  },
  {
    path: 'shipment',
    component: ItemShipmentComponent
  },
  {
    path: '**',
    redirectTo: '/items',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
