import { Routes } from '@angular/router';
import { ButtonComponent } from './Components/button/button.component';
import { NumberOverviewComponent } from './Components/number-overview/number-overview.component';
import { RecommendedComponent } from './Components/recommended/recommended.component';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { loggedinGuard } from './Guards/loggedin.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [loggedinGuard]},
    {path: 'home', component: HomeComponent, canActivate: [authGuardGuard]}
];
