import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { Increment, Decrement, Reset } from "../actions/counter.actions";
import * as fromCounter from "../reducers/counter.reducer";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select(fromCounter.getCount));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
