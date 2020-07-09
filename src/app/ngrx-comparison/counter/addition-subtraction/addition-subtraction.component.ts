import {Component} from "@angular/core";

@Component({
  selector:'simple-addition-subtraction',
  templateUrl:'./addition-subtraction.component.html'
})
export class  AdditionSubtractionComponent{
  counter: number;

  constructor() {
    this.counter = 10;
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
