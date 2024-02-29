import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable, map } from 'rxjs';

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
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient
  ) {
    const isBrowser = isPlatformBrowser(this.platformId);
    const currentUser = isBrowser
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : {};
    this.currentUserSubject = new BehaviorSubject<any>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();

  }

  decodeToken(token: string) {
    try {
      return jwt_decode.jwtDecode<JwtPayload>(token);
    } catch (error) {
      return null;
    }
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  //check token
  checkToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('currentUser');
      if (token) {
        return true;
      }
    }
    return false;
  }

  // method to login
  login(username: string, password: string) {
    return this.http
      .post<any>('http://localhost:5121/api/User/login', { username, password })
      .pipe(
        map((user) => {
          if (isPlatformBrowser(this.platformId)) {
            //decode the .token and store the "username" in local storage
            const decodedToken = this.decodeToken(user.token);
            const currentUsername = decodedToken?.username;

            console.log(currentUsername);
            localStorage.setItem(
              'currentUsername',
              JSON.stringify(currentUsername)
            );
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }
}
