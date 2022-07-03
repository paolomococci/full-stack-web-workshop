import {
  Component,
  OnInit
} from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Product } from 'src/app/models/product.model'

import { EcartService } from '../../services/ecart.service'
import { Customer } from 'src/app/models/customer.model'

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

  checkoutForm: any = this.formBuilder.group(
    {
      name: '',
      address: ''
    }
  )

  onSubmit(): void {
    this.items = this.ecartService.emptyTheCart()
    console.log('order sent: ', this.checkoutForm.value)
    this.checkoutForm.reset()
  }

}
