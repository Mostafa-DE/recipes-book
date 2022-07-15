import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {RecipeService} from '../recipes/recipe.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserAuthenticated = false;
  private userAuthSubscription: Subscription;

  constructor(private recipeService: RecipeService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userAuthSubscription = this.authService.user.subscribe((user) => {
        this.isUserAuthenticated = !!user;
      }
    )
  }

  onSaveData(): void {
    this.recipeService.storeRecipes();
  }

  onFetchData(): void {
    this.recipeService.fetchRecipes()
      .subscribe((recipes) => {
        console.log(recipes);
      });
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userAuthSubscription.unsubscribe();
  }

}
