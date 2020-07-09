import {Component} from "@angular/core";
import {AppState} from "../addition-subtraction/addition-subtraction.component";
import {Store} from "@ngrx/store";
import {PatchAction, ResetAction} from "../counter.actions";

@Component({
  selector: 'ngrx-reset-patch',
  templateUrl: './reset-patch.component.html'
})
export class ResetPatchComponent {
  state: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe((newState: number) => this.state = newState)
  }

  reset(): void {
    this.store.dispatch(new ResetAction());
  }

  patch(next: number): void {
    this.store.dispatch(new PatchAction(next))
  }
}
