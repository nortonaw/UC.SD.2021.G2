import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DiningHallsComponent } from './home-page/dining-halls/dining-halls.component';
import { QrCodeComponent } from './home-page/qr-code/qr-code.component';
import { WorkoutsComponent } from './home-page/workouts/workouts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    DiningHallsComponent,
    QrCodeComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
