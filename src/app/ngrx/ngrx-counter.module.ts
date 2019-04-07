import {NgModule} from "@angular/core";
import {AdditionSubtractionComponent} from "./addition-subtraction/addition-subtraction.component";
import {MultiplicationDivisionComponent} from "./multiplication-division/multiplication-division.component";
import {ResetPatchComponent} from "./reset-patch/reset-patch.component";
import {NgrxMainComponent} from "./main/ngrx-main.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AdditionSubtractionComponent, MultiplicationDivisionComponent, ResetPatchComponent, NgrxMainComponent],
  exports: [NgrxMainComponent, CommonModule]
})
export class NgrxCounterModule {

}
