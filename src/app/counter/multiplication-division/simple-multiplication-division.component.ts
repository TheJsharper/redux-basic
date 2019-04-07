import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './simple-multiplication-division.component.html'
})
export class SimpleMultiplicationDivisionComponent implements OnInit {

  @Input() counter: number;
  @Output() changedCounter: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  multiply(): void {
    this.counter *= 2;
    this.changedCounter.emit(this.counter);
  }

  divide(): void {
    this.counter /= 2;
    this.changedCounter.emit(this.counter);
  }

  resetPatch(changed: number): void {
    this.counter = changed;
    this.changedCounter.emit(changed);
  }
}
