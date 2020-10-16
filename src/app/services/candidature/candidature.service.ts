import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  apiUrl = environment.baseUrl

  constructor(private http : HttpClient) { }

  post(data){
    let fullAddress = this.apiUrl + '/api/candidatura';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.post(fullAddress, data, httpOptions)
  }

  getAll(){
    let fullAddress = this.apiUrl + '/api/candidatura';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  update(data, id) {
    let fullAddress = this.apiUrl + '/api/candidatura/' + id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.put(fullAddress, data, httpOptions)
  }
}
