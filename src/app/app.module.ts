import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CounterContainerComponent } from './counter/reset-patch/simple-reset-patch.component';
import { SimpleMultiplicationDivisionComponent } from './counter/multiplication-division/simple-multiplication-division.component';
import {ReactiveCounterModule} from "./reactive/reactive-counter.module";
import {NgrxCounterModule} from "./ngrx/ngrx-counter.module";

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
    SimpleMultiplicationDivisionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveCounterModule,
    NgrxCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
