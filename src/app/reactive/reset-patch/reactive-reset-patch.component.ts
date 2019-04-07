
import {Component, Input} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-reactive-counter-reset-patch',
  templateUrl: './reactive-reset-patch.component.html',
})
export class ReactiveCounterComponentResetPatch {
  @Input()counter$: BehaviorSubject<number>;

  constructor() {
  }

  reset(): void {
    this.counter$.next(0)
  }

  patch(next:number): void {
    this.counter$.next(next)
  }

}
