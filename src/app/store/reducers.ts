import { CounterState, counterReducer } from './../ngrx-comparison/ngrx/counter.reducer';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
  
  
  export interface AppState {
    //counter:CounterState
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
  // counter:counterReducer

  };
  
  
  
  
  
  export const metaReducers: MetaReducer<AppState>[] =
    !environment.production ? [storeFreeze] : [];