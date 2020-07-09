
import {Component, Input} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-reactive-counter-container',
  templateUrl: './reactive-mutiplication-division.component.html'
})
export class ReactiveCounterContainer {
  @Input()counter$: BehaviorSubject<number>;

  constructor() {
  }

  multiply(): void {
    const currCounter = this.counter$.getValue() * 2;
    this.counter$.next(currCounter)
  }

  divide(): void {
    const currCounter = this.counter$.getValue() /2;
    this.counter$.next(currCounter)
  }

}
