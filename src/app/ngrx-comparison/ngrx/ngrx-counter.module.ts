import {NgModule} from "@angular/core";
import {AdditionSubtractionComponent} from "./addition-subtraction/addition-subtraction.component";
import {MultiplicationDivisionComponent} from "./multiplication-division/multiplication-division.component";
import {ResetPatchComponent} from "./reset-patch/reset-patch.component";
import {NgrxMainComponent} from "./main/ngrx-main.component";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter.reducer";
import {StoreDevtoolsModule, StoreDevtoolsOptions} from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AdditionSubtractionComponent, MultiplicationDivisionComponent, ResetPatchComponent, NgrxMainComponent],
  imports: [StoreModule.forRoot({counter: counterReducer}), StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{
    maxAge: 25,
    logOnly: environment.production
  })],
  exports: [NgrxMainComponent, CommonModule]
})
export class NgrxCounterModule {

}
