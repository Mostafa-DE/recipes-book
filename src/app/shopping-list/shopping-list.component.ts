import {Component, OnDestroy, OnInit} from "@angular/core"
import { Subscription } from "rxjs";
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "./shopping-list.service"

@Component({
  selector: "app-shopping-list",
  templateUrl: "shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private shoppingListSubscription: Subscription

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListSubscription = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients)
  }

  onIngredientClick(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe()
  }
}
