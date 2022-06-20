import {Ingredient} from "../shared/ingredient.module";

export class Recipe {
  constructor(
    public name: string,
    public desc: string,
    public imagePath: string,
    public ingredient: Ingredient[]
  ) {
  }

}
