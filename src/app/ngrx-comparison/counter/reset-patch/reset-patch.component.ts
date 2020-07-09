import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-container',
  templateUrl: './reset-patch.component.html'
})
export class ResetPatchComponent implements OnInit {
  @Input() counter: number;
  @Output() changedCounter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  reset(): void {
    this.counter = 0;
    this.changedCounter.emit(this.counter);
  }

  patch(next: number): void {
    this.counter = next;
    this.changedCounter.emit(this.counter);
  }



}
