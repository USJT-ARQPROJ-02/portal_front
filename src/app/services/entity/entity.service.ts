import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  apiUrl = environment.baseUrl

  constructor(private http : HttpClient) { }

  register(data){
    let fullAddress = this.apiUrl + '/api/entidade';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.post(fullAddress, data, httpOptions)
  }
}
