import {
  Component,
  OnInit
} from '@angular/core'

import { EcartService } from 'src/app/services/ecart.service';

@Component({
  selector: 'app-item-shipment',
  templateUrl: './item-shipment.component.html',
  styleUrls: ['./item-shipment.component.sass']
})
export class ItemShipmentComponent implements OnInit {

  shipmentCosts: any = this.ecartService.getShipmentPrices()

  constructor(
    private ecartService: EcartService
  ) { }

  ngOnInit(): void {
  }

}
