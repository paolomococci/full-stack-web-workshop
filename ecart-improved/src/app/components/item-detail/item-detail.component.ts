import {
  Component,
  OnInit
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EcartService } from './../../services/ecart.service'
import { Product } from 'src/app/models/product.model'
import { ItemService } from './../../services/item.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {

  products: Product[] = this.itemService.getItemArray()

  item: Product | undefined

  constructor(
    private route: ActivatedRoute,
    private ecartService: EcartService,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const itemIdFromRoute = Number(routeParams.get('itemId'))
    console.log(this.products)
    this.item = this.products.find(
      item => item.id === itemIdFromRoute
    )
  }

  addToCart(item: Product): void {
    this.ecartService.addToCart(item)
    window.alert('the item has been placed in your bag')
  }

}
