import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from './../models/product.model'
import { Shipment } from './../models/shipment.model'

@Injectable({
  providedIn: 'root'
})
export class EcartService {

  private path: string = '/assets/shipment.json'

  items: Product[] = []

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Product[] {
    return this.items
  }

  getShipmentPrices(): any {
    return this.http.get<Shipment[]>(this.path)
  }

  addToCart(product: Product): void {
    this.items.push(product)
  }

  emptyTheCart(): Product[] {
    this.items = []
    return this.items
  }
}
