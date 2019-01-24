import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

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
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    LoginModule,
    BooksModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
