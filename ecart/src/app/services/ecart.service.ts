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

  getItems(): Product[] {
    return this.items
  }

  getShipmentPrices(): any {
    return this.http.get<{type: string, price: number}[]>('/assets/shipment.json')
  }

  addToCart(product: Product) {
    this.items.push(product)
  }

  emptyTheCart(): Product[] {
    this.items = []
    return this.items
  }
}
