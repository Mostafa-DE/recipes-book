import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from 'src/app/shared/ingredient.module';
import {ShoppingListService} from 'src/app/shopping-list/shopping-list.service';
import {Recipe} from "../recipe.model"
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails: Recipe
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.recipeDetails = this.recipeService.getRecipe(this.id);
      })
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addRecipeIngredientToShoppingList(ingredients)
  }

  async onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    await this.router.navigate(['../'], {relativeTo: this.route})
  }

}
