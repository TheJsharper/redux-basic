import {CounterActions, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, PATCH, RESET} from "./counter.actions";

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
}
