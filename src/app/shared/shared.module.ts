import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ]
})
export class SharedModule {
}
