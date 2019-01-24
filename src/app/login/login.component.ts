import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as fromScoreBoard from "./login.reducer";
import { IncrementHome, IncrementAway, Reset } from "./login.actions";
import { getHomeState, getAwayState } from "./login.reducer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  home$: Observable<number>;
  away$: Observable<number>;
  constructor(private store: Store<fromScoreBoard.ScoreboardState>) {
    this.home$ = store.pipe(select(getHomeState));
    this.away$ = store.pipe(select(getAwayState));
  }

  ngOnInit() {}

  addHome() {
    this.store.dispatch(new IncrementHome());
  }
  addAway() {
    this.store.dispatch(new IncrementAway());
  }
  reset() {
    this.store.dispatch(new Reset({ home: 0, away: 0 }));
  }
}
