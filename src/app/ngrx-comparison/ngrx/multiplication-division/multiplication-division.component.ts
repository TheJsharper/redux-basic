import {Component} from "@angular/core";
import {AppState} from "../addition-subtraction/addition-subtraction.component";
import {Store} from "@ngrx/store";
import {DivisionAction, MultiplicationAction} from "../counter.actions";

@Component({
  selector: 'ngrx-multiplication-division',
  templateUrl: './multiplication-division.component.html'
})
export class MultiplicationDivisionComponent {
  state: number;

  constructor(private  store: Store<AppState>) {
    this.store.select('counter').subscribe((value: number) => this.state = value);
  }

  multiply(): void {
    this.store.dispatch(new MultiplicationAction());
  }

  divide(): void {
    this.store.dispatch(new DivisionAction());
  }
}
