import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Shipment } from '../models/shipment.model'

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  shipments: Shipment[] = []

  constructor(
    private http: HttpClient
  ) { }
}
