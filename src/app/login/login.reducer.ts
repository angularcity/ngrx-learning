import * as Scoreboard from "./login.actions";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export interface ScoreboardState {
  home: number;
  away: number;
}

export const initialState: ScoreboardState = { home: 0, away: 0 };

export function loginReducer(
  state = initialState,
  action: Scoreboard.ActionsUnion
): ScoreboardState {
  switch (action.type) {
    case Scoreboard.ActionTypes.IncrementHome: {
      return { ...state, home: state.home + 1 };
    }

    case Scoreboard.ActionTypes.IncrementAway: {
      return { ...state, away: state.away + 1 };
    }

    case Scoreboard.ActionTypes.Reset: {
      return action.payload; // typed to { home: number, away: number }
    }

    default: {
      return state;
    }
  }
}

//selectors
export const getScoreboardFeatureState = createFeatureSelector("game");
export const getHomeState = createSelector(
  getScoreboardFeatureState,
  (state: ScoreboardState) => state.home
);
export const getAwayState = createSelector(
  getScoreboardFeatureState,
  (state: ScoreboardState) => state.away
);
