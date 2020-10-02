import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.baseUrl

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
}
