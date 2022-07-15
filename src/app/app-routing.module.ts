import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipesResolverService} from "./recipes/recipes-resolver.service";
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent, resolve: {recipe: RecipesResolverService}},
      {path: ':id/edit', component: RecipeEditComponent, resolve: {recipe: RecipesResolverService}},
    ],
    canActivate: [AuthGuard]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
