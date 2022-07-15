import {Injectable} from "@angular/core";
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Recipe[] {
    if(this.recipeService.getRecipes().length === 0) return this.recipeService.fetchRecipes();
    return this.recipeService.getRecipes();
  }

}
