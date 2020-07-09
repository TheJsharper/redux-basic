import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from './../../../store/reducers';
import { DivisionAction, MultiplicationAction } from "../counter.actions";
import { selectCounterCurrentValue } from './../counter.selectors';

@Component({
  selector: 'ngrx-multiplication-division',
  templateUrl: './multiplication-division.component.html'
})
export class MultiplicationDivisionComponent {
  currentValues: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.currentValues = this.store.pipe(select(selectCounterCurrentValue))
  }

  multiply(): void {
    this.store.dispatch(new MultiplicationAction());
  }

  divide(): void {
    this.store.dispatch(new DivisionAction());
  }
}
