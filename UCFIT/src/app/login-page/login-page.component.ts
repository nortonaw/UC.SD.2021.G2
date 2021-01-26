import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginValid: boolean;
  errorMessage: boolean;
  errorMessageText = "";
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
    this.errorMessage = false;
    var ary_usernames = ["blake","andrew","samuel"];
    var ary_passwords = ["blake123","andrew123","samuel123"];

    if (ary_usernames.includes(un) && ary_passwords.includes(pw)) {
      this.loginValid = true
    }
    else if (un === "" || pw === "") {
      this.loginValid = false;
      this.errorMessage = true;
      this.errorMessageText = "Please Input All Required Fields"
    }
    else {
      this.loginValid = false;
      this.errorMessage = true;
      this.errorMessageText = "The Username or Password Did Not Match Our Records"
    }
  }

}
