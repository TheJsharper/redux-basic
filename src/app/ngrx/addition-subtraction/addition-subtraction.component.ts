import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {DecrementAction, IncrementAction} from "../counter.actions";

export interface AppState {
  counter: number;
}


@Component({
  selector: 'ngrx-addition-subtraction',
  templateUrl: './addition-subtraction.component.html'
})
export class AdditionSubtractionComponent {
  state: number;

  constructor(private store: Store<AppState>) {
    this.store.subscribe((counter: AppState) => this.state = counter.counter)
  }

  addition(): void {
    this.store.dispatch(new IncrementAction());
  }

  subtraction(): void {
    this.store.dispatch(new DecrementAction());
  }

}
