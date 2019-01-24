import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  isLogin = false;
  user = null;
  constructor() {}

  login(username, password) {
    this.isLogin = true;
    this.user = {
      username,
      password
    };
  }
  logout() {
    this.isLogin = false;
  }
  isAuthenticated() {
    return of(this.isLogin);
  }
}
