import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginValid: boolean;
  username;
  password;

  constructor() { }

  ngOnInit(): void {
    this.loginValid = false;
  }

  authLogin() {
    this.username = (<HTMLInputElement>document.getElementById("login")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log("Hello, " + this.username + " " + this.password + "!");

    this.checkLogin(this.username, this.password);
  }

  checkLogin(un, pw) {
    if (un === "" || pw === "") {
      this.loginValid = false;
    }
    else {
      this.loginValid = true;
    }
  }

}
