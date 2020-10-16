import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.baseUrl

  // Observable string sources
  private userSource = new BehaviorSubject<any[]>([]);;

  constructor(private http : HttpClient) { }

  loginVoluntary(data){
    let fullAddress = this.apiUrl + '/api/voluntario/login';
    
    return this.http.post(fullAddress, data,{
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
      observe: 'response' as 'body'
      })
  }

  loginEntity(data){
    let fullAddress = this.apiUrl + '/api/entidade/login';
    
    return this.http.post(fullAddress, data, 
      {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
      observe: 'response' as 'body'
      })
  }

   // Service message commands
   updateUserData(data) {
    this.userSource.next(data);
  }
  
  getUserData() {
    return this.userSource.asObservable()
  }
}
