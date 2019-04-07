import {Component} from "@angular/core";

@Component({
  selector: 'ngrx-multiplication-division',
  templateUrl: './multiplication-division.component.html'
})
export class MultiplicationDivisionComponent {
  state: number;

  constructor() {
    this.state = 0;
  }

  multiply(): void {
    this.state *= 2;
  }

  divide(): void {
    this.state /= 2;
  }
}
