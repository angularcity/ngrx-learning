import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { counterReducer } from "./reducers/counter.reducer";

import { LoginComponent } from "./login/login.component";
import { loginReducer } from "./login/login.reducer";
import { LoginModule } from "./login/login.module";
import { BooksComponent } from "./books/books.component";
import { BooksModule } from "./books/books.module";
import { environment } from "src/environments/environment";
import { reducers } from "./reducers";

import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./books/book.effects";
import { UserService } from "./books/books.service";
import { CustomSerializer } from "./reducers/custom-route-serializer";

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log("state", state);
    console.log("action", action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LoginComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: "routerReducer"
    }),
    LoginModule,
    BooksModule
  ],

  providers: [
    UserService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
