import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("you are logged in");
    this.loggedIn = true;
  }

  toggleLogin() {
    if (this.loggedIn == true) {
      console.log("logging out");
      this.loggedIn = false;
    }
    else if (this.loggedIn == false) {
      console.log("logging in");
      this.loggedIn = true;
    }
  }
}