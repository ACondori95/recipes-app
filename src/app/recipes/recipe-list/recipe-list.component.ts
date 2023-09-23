import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Quick_Burger_hamburgers_and_fries.jpg/640px-Quick_Burger_hamburgers_and_fries.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Quick_Burger_hamburgers_and_fries.jpg/640px-Quick_Burger_hamburgers_and_fries.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
