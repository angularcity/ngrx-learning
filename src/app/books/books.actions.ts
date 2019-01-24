import { Action } from "@ngrx/store";
import { User } from "./book.reducer";

export enum ActionTypes {
  ALL_BOOKS = "[Books Page] LoadAllBooks",
  SET_USER = "[Books Page] Set User",
  ALL_USERS = "[Books Page] Load All Users"
}

export class LoadAllBooks implements Action {
  readonly type = ActionTypes.ALL_BOOKS;
}

export class LoadAllUsers implements Action {
  readonly type = ActionTypes.ALL_USERS;
}

export class SetUser implements Action {
  readonly type = ActionTypes.SET_USER;
  constructor(public payload: { user: User }) {}
}

export type ActionsUnion = LoadAllBooks | SetUser | LoadAllUsers;
