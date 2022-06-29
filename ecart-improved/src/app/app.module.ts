import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ItemAlertComponent } from './components/item-alert/item-alert.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemShipmentComponent } from './components/item-shipment/item-shipment.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
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
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
