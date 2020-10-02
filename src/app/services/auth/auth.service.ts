import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated(): boolean {

    const localStorageToken = localStorage.getItem('token');
    let valid = false;

    if (localStorageToken) {
      valid = true;
    } else {
      valid = false;
    }

    return valid
  }
}
