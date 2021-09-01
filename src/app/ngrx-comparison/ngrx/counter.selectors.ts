import { AppState } from '../../store/reducers';

import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const selectFeature: MemoizedSelector<AppState, CounterState> = createFeatureSelector("counter");

export const selectCounterCurrentValue:MemoizedSelector<AppState, number> = createSelector(selectFeature,(counterState:CounterState)=>  counterState.counter);