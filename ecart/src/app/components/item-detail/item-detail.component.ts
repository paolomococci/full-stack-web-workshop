import {
  Component,
  OnInit
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EcartService } from './../../services/ecart.service'
import { Product } from 'src/app/models/product.model'
import { products } from 'src/persistence/product-list'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {

  item: Product | undefined

  constructor(
    private route: ActivatedRoute,
    private ecartService: EcartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const itemIdFromRoute = Number(routeParams.get('itemId'))
    this.item = products.find(
      item => item.id === itemIdFromRoute
    )
  }

  addToCart(item: Product): void {
    this.ecartService.addToCart(item)
    window.alert('the item has been placed in your bag')
  }

}
