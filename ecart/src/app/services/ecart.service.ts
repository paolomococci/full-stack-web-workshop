import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class EcartService {

  items: Product[] = []

  constructor(
    private http: HttpClient
  ) { }

  getItems() {
    return this.items
  }

  getShipmentPrices() {}

  addToCart(product: Product) {

  }

  emptyTheCart() {}
}
