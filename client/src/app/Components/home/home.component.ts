import { Component } from '@angular/core';
import { NumberOverviewComponent } from '../number-overview/number-overview.component';
import { ButtonComponent } from '../button/button.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { LoginComponent } from '../login/login.component';
import { StorageService } from '../../Services/storage.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NumberOverviewComponent, RecommendedComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  //currentUser
  currentUser = this.storageService.getUser();
  constructor(public storageService: StorageService, private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
