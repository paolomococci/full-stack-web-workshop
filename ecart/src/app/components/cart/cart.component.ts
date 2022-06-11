import {
  Component,
  OnInit
} from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Product } from 'src/app/models/product.model'

import { EcartService } from '../../services/ecart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(
    private ecartService: EcartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  items: Product[] = this.ecartService.getItems()

}
