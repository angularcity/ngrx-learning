import { Action, select } from "@ngrx/store";
import { ActionTypes } from "../actions/counter.actions";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { pipe } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

export interface CountState {
  count: number;
}

export const initialState: CountState = {
  count: 0
};

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return {
        ...state,
        count: state.count + 1
      };

    case ActionTypes.Decrement:
      return { ...state, count: state.count - 1 };

    case ActionTypes.Reset:
      return { ...state, count: 0 };

    default:
      return state;
  }
}

// selectors
export const getCountFeatureState = createFeatureSelector("counter");

export const getCount = createSelector(
  getCountFeatureState,
  (state: CountState) => state.count
);

export const selectFilteredGetCount = pipe(
  select(getCount),
  filter(val => val > 3)
);
