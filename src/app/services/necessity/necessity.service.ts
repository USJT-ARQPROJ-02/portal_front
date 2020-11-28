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

  getAccepted() {
    let fullAddress = this.apiUrl + '/api/candidatura/voluntario?status=true';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  getRefused() {
    let fullAddress = this.apiUrl + '/api/candidatura/voluntario?status=false';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  getFinished() {
    let fullAddress = this.apiUrl + '/api/candidatura/voluntario/encerradas';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  getFinishedById(id) {
    let fullAddress = this.apiUrl + '/api/candidatura/voluntario/' + id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  getNecessityById(id) {
    let fullAddress = this.apiUrl + '/api/entidade/necessidades/' + id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      }), observe: 'response' as 'body'
    };
    
    return this.http.get(fullAddress, httpOptions)
  }

  endNecessity(data, id) {
    let fullAddress = this.apiUrl + '/api/necessidade/' + id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.put(fullAddress, data, httpOptions)
  }
}
