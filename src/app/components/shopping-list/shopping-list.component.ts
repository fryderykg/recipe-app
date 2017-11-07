import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() { }

  ngOnInit() {
    this.ingredients = [
      new Ingredient('apple', 10),
      new Ingredient('potato', 15),
      new Ingredient('banana', 25)
    ];
  }

}
