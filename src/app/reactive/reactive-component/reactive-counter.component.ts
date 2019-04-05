import {Component} from "@angular/core";
import {BehaviorSubject} from "rxjs/index";

@Component({
  selector: 'app-reactive-counter-component',
  templateUrl: './reactive-counter.component.html',
  styleUrls: ['./reactive-counter.component.scss']
})
export class ReactiveCounterComponent {
  counter$: BehaviorSubject<number>;

  constructor() {
    this.counter$ = new BehaviorSubject<number>(10);
  }

  increment(): void {
    const currCounter = this.counter$.getValue() + 1;
    this.counter$.next(currCounter)
  }

  decrement(): void {
    const currCounter = this.counter$.getValue() - 1;
    this.counter$.next(currCounter)
  }

}
