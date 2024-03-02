import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

interface JwtPayload {
  username: string;
  aud: string;
  exp: number;
  iss: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {}

  //update the loggedIn state
  setLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
  }

  decodeToken(token: string) {
    try {
      return jwt_decode.jwtDecode<JwtPayload>(token);
    } catch (error) {
      return null;
    }
  }

  // method to login
  login(username: string, password: string) {
    return this.http
      .post<any>('http://localhost:5121/api/User/login', { username, password })
      .pipe(
        map((user) => {
          //decode the .token and store the "username" in local storage
          const decodedToken = this.decodeToken(user.token);
          const currentUsername = decodedToken?.username;

          this.storageService.saveUser(currentUsername);

          //store token via storage service
          this.storageService.saveToken(user.token);
          this.setLoggedIn(true);

          return user;
        })
      );
  }

  logout() {
    this.storageService.removeToken();
    this.storageService.removeUser();
    this.setLoggedIn(false);

    this.router.navigate(['/login']);

  }
}
