import { Component } from '@angular/core';
import { NumberOverviewComponent } from '../number-overview/number-overview.component';
import { ButtonComponent } from '../button/button.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { LoginComponent } from '../login/login.component';
import { StorageService } from '../../Services/storage.service';
import { AuthService } from '../../Services/auth.service';
import { FilesComponent } from '../files/files.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UserData {
  accepted: number;
  rejected: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NumberOverviewComponent,
    FilesComponent,
    RecommendedComponent,
    LoginComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public accepted: number = 0;
  public rejected: number = 0;

  //currentUser
  currentUser = this.storageService.getUser();
  constructor(
    public storageService: StorageService,
    private authService: AuthService,
    private http: HttpClient
  ) {
    // fetch based on username
    this.http
      .get<UserData>('http://localhost:5121/api/User')
      .subscribe((data) => {
        this.accepted = data.accepted;
        this.rejected = data.rejected;
      });
  }

  logout() {
    this.authService.logout();
  }
}
