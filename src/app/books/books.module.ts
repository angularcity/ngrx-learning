import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { bookReducer } from "./book.reducer";

@NgModule({
  imports: [StoreModule.forFeature("books", bookReducer)],
  providers: []
})
export class BooksModule {}
