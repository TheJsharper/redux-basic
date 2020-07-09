import { NgModule } from "@angular/core";
import { SimpleCounterModule } from './counter/simple-counter.module';
import { ReactiveCounterModule } from './reactive/reactive-counter.module';
import { NgrxCounterModule } from './ngrx/ngrx-counter.module';

@NgModule({
    imports: [
        SimpleCounterModule,
        ReactiveCounterModule,
        NgrxCounterModule
    ],
    exports: [
        SimpleCounterModule,
        ReactiveCounterModule,
        NgrxCounterModule
    ],

})
export class NgrxComparisonModule {

}