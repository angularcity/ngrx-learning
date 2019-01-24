import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  Book,
  AppState,
  getAllBooksSelector,
  User,
  getAllUsersSelector,
  getBooksByUserSelector
} from "./book.reducer";
import { Store, select } from "@ngrx/store";
import * as bookActions from "./books.actions";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  book$: Observable<Book[]>;
  users$: Observable<User[]>;
  booksByUser$: Observable<Book[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.book$ = this.store.pipe(select(getAllBooksSelector));
    this.users$ = this.store.pipe(select(getAllUsersSelector));
    this.booksByUser$ = this.store.pipe(select(getBooksByUserSelector));

    this.store.dispatch(new bookActions.LoadAllBooks());
    this.store.dispatch(new bookActions.LoadAllUsers());
  }
  selectUser(user) {
    this.store.dispatch(
      new bookActions.SetUser({
        user: user
      })
    );
  }
}
