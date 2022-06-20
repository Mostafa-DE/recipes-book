import {EventEmitter, Renderer2} from "@angular/core"
import {Ingredient} from "../shared/ingredient.module";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Orange", 6)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredientObj: Ingredient): void {
    this.ingredients.push(ingredientObj);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addRecipeIngredientToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients)
  }

  clearInputs(nameInput, amountInput): void {
    nameInput.nativeElement.value = "";
    amountInput.nativeElement.value = "";
  }

}
