import {
  Component,
  OnInit
} from '@angular/core'

import { products } from 'src/persistence/product-list'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {

  items = products

  constructor() { }

  ngOnInit(): void {
  }

  onNotify(): void {
    window.alert('the item is not currently in stock')
  }

  share(): void {
    window.alert('the item has been shared')
  }

}
