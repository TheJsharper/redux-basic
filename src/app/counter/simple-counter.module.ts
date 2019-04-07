import {NgModule} from "@angular/core";
import {AdditionSubtractionComponent} from "./addition-subtraction/addition-subtraction.component";
import {MultiplicationDivisionComponent} from "./multiplication-division/multiplication-division.component";
import {ResetPatchComponent} from "./reset-patch/reset-patch.component";
import {CommonModule} from "@angular/common";
import {SimpleMainComponent} from "./main/simple-main.component";

@NgModule({
  declarations:[AdditionSubtractionComponent, MultiplicationDivisionComponent, ResetPatchComponent, SimpleMainComponent],
  imports:[CommonModule],
  exports:[SimpleMainComponent]
})
export class  SimpleCounterModule{}
