import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { loginReducer } from "./login.reducer";

@NgModule({
  imports: [StoreModule.forFeature("game", loginReducer)]
})
export class LoginModule {}
