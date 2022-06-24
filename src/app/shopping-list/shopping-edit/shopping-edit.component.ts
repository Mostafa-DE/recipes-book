import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) AmountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddBtnClick() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = +this.AmountInputRef.nativeElement.value || 0;
    const newIngredientObj = new Ingredient(ingredientName, ingredientAmount)
    if (ingredientName === "" || ingredientAmount === 0) return alert("Sorry you have to enter a name and amount")
    this.shoppingListService.addIngredient(newIngredientObj)
  }

  onClear() {
    this.shoppingListService.clearInputs(this.nameInputRef, this.AmountInputRef)
  }
}
