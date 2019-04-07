import {Action} from "@ngrx/store";

export const INCREMENT = "[Counter] Increment";
export const DECREMENT = "[Counter] Decrement";
export const MULTIPLY = "[Counter] Multiply";
export const DIVIDE = "[Counter] Divide";
export const RESET = "[Counter] Reset";
export const PATCH = "[Counter] Patch";


export class IncrementAction implements Action {
  public type: string = INCREMENT;

}

export class DecrementAction implements Action {
  public type: string = DECREMENT;

}

export class MultiplicationAction implements Action {
  public type: string = MULTIPLY;

}

export class DivisionAction implements Action {
  public type: string = DIVIDE;

}

export class ResetAction implements Action {
  public type: string = RESET;

}

export class PatchAction implements Action {
  public type: string = PATCH;

  constructor(public payload: number) {
  }

}

export type CounterActions =
  IncrementAction
  | DecrementAction
  | MultiplicationAction
  | DivisionAction
  | ResetAction
  | PatchAction;
