import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  private subscription: Subscription;
  editMode = false;
  private editedItemIndex: number;
  private editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const { value } = form;
    const newIngredientObj = new Ingredient(value.name, value.amount);
    this.editMode ?
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredientObj) :
      this.shoppingListService.addIngredient(newIngredientObj)
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    if (!confirm("Are you sure about that!!")) return
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  // onClear() {
  //   this.shoppingListService.clearInputs(this.nameInputRef, this.AmountInputRef)
  // }
}
