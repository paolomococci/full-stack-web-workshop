import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from './../models/product.model'
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private path: string = '/assets/items.json'

  products: Product[] = []

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path)
  }

  getItemArray(): Product[] {
    this.getItems().subscribe(
      products => {
        this.products = products
      }
    )
    return this.products
  }
}
