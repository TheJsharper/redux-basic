import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CounterContainerComponent } from './counter/counter-container/counter-container.component';
import { CounterComponentComponent } from './counter/counter-component/counter-component.component';
import {ReactiveCounterModule} from "./reactive/reactive-counter.module";

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
    CounterComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
