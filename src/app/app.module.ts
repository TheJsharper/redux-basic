import { NgrxComparisonModule } from './ngrx-comparison/ngrx.comparsion.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
/*import {ReactiveCounterModule} from "./reactive/reactive-counter.module";
import {NgrxCounterModule} from "./ngrx/ngrx-counter.module";
import {SimpleCounterModule} from "./counter/simple-counter.module";*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxComparisonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
