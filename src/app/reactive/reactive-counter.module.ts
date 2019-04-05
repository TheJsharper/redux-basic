import {NgModule} from "@angular/core";
import {ReactiveCounterComponent} from "./reactive-component/reactive-counter.component";
import {CommonModule} from "@angular/common";
import {ReactiveCounterContainer} from "./reactive-container/reactive-counter.container";
import {ReactiveCounterComponentResetPatch} from "./reactive-component-reset-patch/reactive-counter.component-reset-patch";

@NgModule({
  declarations: [ReactiveCounterComponent, ReactiveCounterContainer, ReactiveCounterComponentResetPatch],
  imports:[CommonModule],
  exports: [ReactiveCounterComponent],

})
export class ReactiveCounterModule {

}
