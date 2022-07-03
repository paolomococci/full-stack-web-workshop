import {
  Component,
  OnInit,
  Input
} from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @Input()
  title!: string

  constructor() { }

  ngOnInit(): void {
  }

}
