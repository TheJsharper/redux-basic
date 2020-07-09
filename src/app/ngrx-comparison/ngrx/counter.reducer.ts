//import { CounterActions } from './ngrx/counter.actions';
import { CounterActions, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, PATCH, RESET } from "./counter.actions";

export interface CounterState {
  counter: number;
}

export const initialCounterState: CounterState = {
  counter: 0
}

/*
export function counterReducer(state: number = 0, action: CounterActions): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case  DECREMENT:
      return state - 1;

    case  MULTIPLY:
      return state * 2;

    case  DIVIDE:
      return state / 2;

    case  RESET:
      return 0;

    case PATCH :

      return action['payload'];

    default: {
      return state;
    }
  }
}*/

export function counterReducer(state: CounterState= initialCounterState, action: CounterActions): CounterState {

  switch (action.type) {
    case INCREMENT:
      console.log("State", state);
      return { counter: state.counter + 1 }

    case DECREMENT:
      return { counter: state.counter - 1 };

    case MULTIPLY:
      return { counter: state.counter * 2 };

    case DIVIDE:
      return { counter: state.counter / 2 };

    case RESET:
      return { counter: 0 };

    case PATCH:

      return { counter: action['payload'] };

    default: {
      return state;
    }
  }
}