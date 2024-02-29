import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService],
})
export class LoginComponent {
  //form group for the login form
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  //tell the component to use the auth service
  constructor(private authService: AuthService) {}

  //generate a local login method which calls the public login in the auth service
  login() {
    const username = this.loginForm.get('username')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';

    this.authService.login(username, password).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  user() {
    const currentUsername = localStorage.getItem('currentUsername');
    console.log(currentUsername);
  }
}
