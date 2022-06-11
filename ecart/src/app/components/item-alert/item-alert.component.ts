import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core'

import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-item-alert',
  templateUrl: './item-alert.component.html',
  styleUrls: ['./item-alert.component.sass']
})
export class ItemAlertComponent implements OnInit {

  @Input()
  item: Product | undefined

  @Output()
  notify = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
