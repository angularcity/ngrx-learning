import { ActionReducerMap } from "@ngrx/store";

import * as fromCounter from "./counter.reducer";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

export interface AppState {
  counter: fromCounter.CountState;
  routerReducer: RouterReducerState;
}
export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.counterReducer,
  routerReducer: routerReducer
};
