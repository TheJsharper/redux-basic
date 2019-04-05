
import {Component, Input} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-reactive-counter-reset-patch',
  templateUrl: './reactive-counter.component-reset-patch.html',
  styleUrls: ['./reactive-counter.component-reset-patch.scss']
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
