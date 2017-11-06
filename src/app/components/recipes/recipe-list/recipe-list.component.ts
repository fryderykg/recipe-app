import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [
      new Recipe('Test recipe', 'This is a test', 'http://www.artnfood.co.uk/wp-content/uploads/2015/03/paella.jpg'),
      new Recipe('Test recipe 2', 'This is a test 222', 'http://maxpixel.freegreatpicture.com/static/photo/640/Red-Strawberry-Delicious-Sweet-82529.jpg')
    ];
  }

}
