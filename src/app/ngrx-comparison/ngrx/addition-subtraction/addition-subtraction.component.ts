import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { DecrementAction, IncrementAction } from "../counter.actions";
import { AppState } from './../../../store/reducers';
import { selectCounterCurrentValue } from './../counter.selectors';



@Component({
  selector: 'ngrx-addition-subtraction',
  templateUrl: './addition-subtraction.component.html'
})
export class AdditionSubtractionComponent {
  state: number;
  cureentValues: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cureentValues = this.store.pipe(select(selectCounterCurrentValue));
  }

  addition(): void {
    this.store.dispatch(new IncrementAction());
  }

  subtraction(): void {
    this.store.dispatch(new DecrementAction());
  }

}
