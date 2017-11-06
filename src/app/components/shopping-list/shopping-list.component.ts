import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
