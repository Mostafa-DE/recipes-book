import { Subject } from "rxjs";

import {Ingredient} from "../shared/ingredient.module";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Orange", 6)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredientObj: Ingredient): void {
    this.ingredients.push(ingredientObj);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addRecipeIngredientToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients)
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())

  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  // clearInputs(nameInput, amountInput): void {
  //   nameInput.nativeElement.value = "";
  //   amountInput.nativeElement.value = "";
  // }

}
