import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DiningHallsComponent } from './home-page/dining-halls/dining-halls.component';
import { QrCodeComponent } from './home-page/qr-code/qr-code.component';
import { WorkoutsComponent } from './home-page/workouts/workouts.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dining-halls', component: DiningHallsComponent },
  { path: 'qr-codes', component: QrCodeComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
