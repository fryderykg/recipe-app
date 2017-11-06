import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
