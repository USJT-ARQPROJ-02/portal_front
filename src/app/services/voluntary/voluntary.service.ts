import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {
  apiUrl = environment.baseUrl

  constructor(private http : HttpClient) { }


  register(data){
    let fullAddress = this.apiUrl + '/api/voluntario';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.post(fullAddress, data, httpOptions)
  }

  getProfile(){
    let fullAddress = this.apiUrl + '/api/perfil';
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token').toString(),
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.get(fullAddress, httpOptions)
  }
}
