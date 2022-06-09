import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CartComponent } from './components/cart/cart.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ItemAlertComponent } from './components/item-alert/item-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ToolbarComponent,
    ItemAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
