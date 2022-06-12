import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from './../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private path: string = '/assets/items.json'

  constructor(
    private http: HttpClient
  ) { }

  getItems(): any {
    return this.http.get<Product[]>(this.path)
  }

  getItemArray(): Product[] {
    const temp = this.http.get<Product[]>(this.path)
    // todo
    return []
  }
}
