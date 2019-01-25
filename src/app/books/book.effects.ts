import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { UserService } from "./books.service";
import * as fromBookActions from "./books.actions";

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(fromBookActions.ActionTypes.USERS_API),
    mergeMap(() =>
      this.bookService.getUsers().pipe(
        map(users => new fromBookActions.LoadUsersAPISuccess(users)),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions, private bookService: UserService) {}
}
