import {
  Component,
  OnInit
} from '@angular/core'

import { ItemService } from './../../services/item.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {

  items: any = this.itemService.getItems()

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

  onNotify(): void {
    window.alert('the item is not currently in stock')
  }

  share(): void {
    window.alert('the item has been shared')
  }

}
