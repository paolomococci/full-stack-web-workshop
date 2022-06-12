import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from './../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private path: string = '/assets/items.json'

  items: Product[] = []

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Product[] {
    const temp = this.http.get<Product[]>(this.path)
    // todo
    return this.items
  }
}
