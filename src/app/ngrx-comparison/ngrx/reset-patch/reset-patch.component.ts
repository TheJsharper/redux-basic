import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from './../../../store/reducers';
import { PatchAction, ResetAction } from "../counter.actions";
import { selectCounterCurrentValue } from './../counter.selectors';

@Component({
  selector: 'ngrx-reset-patch',
  templateUrl: './reset-patch.component.html'
})
export class ResetPatchComponent {
  currentValues: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.currentValues = this.store.pipe(select(selectCounterCurrentValue));
  }

  reset(): void {
    this.store.dispatch(new ResetAction());
  }

  patch(next: number): void {
    this.store.dispatch(new PatchAction(next))
  }
}
