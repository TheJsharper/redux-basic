import {NgModule} from "@angular/core";
import {AdditionSubtractionComponent} from "./addition-subtraction/addition-subtraction.component";
import {SimpleMultiplicationDivisionComponent} from "./multiplication-division/simple-multiplication-division.component";
import {SimpleResetPatchComponent} from "./reset-patch/simple-reset-patch.component";
import {CommonModule} from "@angular/common";
import {SimpleMainComponent} from "./main/simple-main.component";

@NgModule({
  declarations:[AdditionSubtractionComponent, SimpleMultiplicationDivisionComponent, SimpleResetPatchComponent, SimpleMainComponent],
  imports:[CommonModule],
  exports:[SimpleMainComponent]
})
export class  SimpleCounterModule{}
