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
}
