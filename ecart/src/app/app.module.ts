import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CartComponent } from './components/cart/cart.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { ItemAlertComponent } from './components/item-alert/item-alert.component'
import { ItemDetailComponent } from './components/item-detail/item-detail.component'
import { ItemListComponent } from './components/item-list/item-list.component'
import { ItemShipmentComponent } from './components/item-shipment/item-shipment.component'
import { MatIconModule } from '@angular/material/icon'

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ToolbarComponent,
    ItemAlertComponent,
    ItemDetailComponent,
    ItemListComponent,
    ItemShipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
