import {Component} from "@angular/core";

@Component({
  selector: 'ngrx-reset-patch',
  templateUrl: './reset-patch.component.html'
})
export class ResetPatchComponent {
  state: number;

  constructor() {
    this.state = 0;
  }

  reset(): void {
    this.state = 0;
  }

  patch(next: number): void {
    this.state = next;
  }
}
