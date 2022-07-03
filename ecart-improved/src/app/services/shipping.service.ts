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

  getAll(): Shipment[] {
    return this.shipments
  }

  get(index: number): Shipment {
    return this.shipments[index]
  }

  push(shipment: Shipment): void {
    this.shipments.push(shipment)
  }

  pop(): Shipment | undefined {
    return this.shipments.pop()
  }

  length(): number {
    return this.shipments.length
  }
}
