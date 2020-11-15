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
    this.loggedIn = true;

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toDateString();
    document.getElementById("daytime").innerHTML = dt.toLocaleTimeString();
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
