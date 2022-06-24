import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
