import * as bookActions from "./books.actions";
import { createSelector, createFeatureSelector } from "@ngrx/store";
export interface User {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  userId: number;
  name: string;
}

export interface AppState {
  selectedUser: User;
  allBooks: Book[];
  users: User[];
}

export const initState: AppState = {
  selectedUser: null,
  allBooks: [],
  users: []
};

export function bookReducer(
  state = initState,
  action: bookActions.ActionsUnion
) {
  switch (action.type) {
    case bookActions.ActionTypes.ALL_BOOKS:
      return {
        ...state,
        allBooks: [
          { id: 1, userId: 1, name: "Book A" },
          { id: 2, userId: 1, name: "Book B" },
          { id: 3, userId: 2, name: "Book C" },
          { id: 4, userId: 2, name: "Book D" }
        ]
      };
    case bookActions.ActionTypes.ALL_USERS:
      return {
        ...state,
        users: [{ id: 1, name: "hari" }, { id: 2, name: "Max" }]
      };
    case bookActions.ActionTypes.SET_USER:
      return { ...state, selectedUser: action.payload.user };
    default:
      return state;
  }
}

//selectors
export const getBookFeatureState = createFeatureSelector("books");
export const getAllBooksSelector = createSelector(
  getBookFeatureState,
  (state: AppState) => state.allBooks
);
export const getSelectedUser = createSelector(
  getBookFeatureState,
  (state: AppState) => state.selectedUser
);
export const getAllUsersSelector = createSelector(
  getBookFeatureState,
  (state: AppState) => state.users
);
export const getBooksByUserSelector = createSelector(
  getSelectedUser,
  getAllBooksSelector,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks.length > 0) {
      return allBooks.filter(book => book.userId == selectedUser.id);
    } else {
      return allBooks;
    }
  }
);
