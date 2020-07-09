import {NgModule} from "@angular/core";
import {ReactiveCounterComponent} from "./addition-subtraction/reactive-addition-subtraction.component";
import {CommonModule} from "@angular/common";
import {ReactiveCounterContainer} from "./multiplication-division/reactive-mutiplication-division.component";
import {ReactiveCounterComponentResetPatch} from "./reset-patch/reactive-reset-patch.component";
import {ReactiveMainComponent} from "./main/reactive-main.component";

@NgModule({
  declarations: [ReactiveCounterComponent, ReactiveCounterContainer, ReactiveCounterComponentResetPatch, ReactiveMainComponent],
  imports: [CommonModule],
  exports: [ReactiveMainComponent],

})
export class ReactiveCounterModule {

}
