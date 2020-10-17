import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordService {
    apiUrl = environment.baseUrl

    constructor(private http : HttpClient) { }

    sendEmail(data){
      let fullAddress = this.apiUrl + '/api/reset';

      return this.http.post(fullAddress, data, 
        {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
        observe: 'response' as 'body'
        })
    }

    resetSenha(data){
      let fullAddress = this.apiUrl + '/api/reset/novasenha';

      return this.http.post(fullAddress, data, 
        {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
        observe: 'response' as 'body'
        })
    }
  }