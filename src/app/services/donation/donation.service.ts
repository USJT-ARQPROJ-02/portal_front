import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  apiUrl = environment.baseUrl

  constructor(private http : HttpClient) { }


  send(receipt){
    let fullAddress = this.apiUrl + '/api/doar';

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    return this.http.post(fullAddress, receipt, httpOptions)
  }
}
