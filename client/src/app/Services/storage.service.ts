import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { 

  }

  // store in localstorage
  public saveToken(token: string): void {
    window.localStorage.setItem('token', JSON.stringify(token));
  }

  public getToken(): any {
    if(typeof window === 'undefined') return null;
    const token = window.localStorage.getItem('token');
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  public removeToken(): void {
    window.localStorage.removeItem('token'); 
  }

  public saveUser(user: any): void{
    window.localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public getUser(): any{
    if(typeof window === 'undefined') return null;
    const user = window.localStorage.getItem('currentUser');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public removeUser(): void {
    window.localStorage.removeItem('currentUser');
  }
}
