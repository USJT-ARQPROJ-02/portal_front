import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated(): boolean {

    localStorage.clear()
    localStorage.setItem('token', 'um dia eu devo tirar isso daqui')
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
