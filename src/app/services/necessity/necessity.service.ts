import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NecessityService {
  apiUrl = environment.baseUrl

  constructor(private http : HttpClient) { }

  register(data){
    let fullAddress = this.apiUrl + '/api/necessidade';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.post(fullAddress, data, httpOptions)
  }

  get() {
    let fullAddress = this.apiUrl + '/api/necessidade';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  getPending() {
    let fullAddress = this.apiUrl + '/api/candidatura/voluntario';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

}
