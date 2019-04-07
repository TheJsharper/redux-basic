import {Component} from "@angular/core";

@Component({
  selector: 'ngrx-addition-subtraction',
  templateUrl: './addition-subtraction.component.html'
})
export class AdditionSubtractionComponent {
  state: number;

  constructor() {
    this.state = 0;
  }

  add(): void {
    this.state++;
  }

  subtraction(): void {
    this.state--;
  }
}
