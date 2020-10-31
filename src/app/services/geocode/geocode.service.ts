import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {
  apiKey = 'AIzaSyCdksnWRZphUOij5xt9bVg5cFGIRyte6NY'

  constructor(private http : HttpClient) { }

  convert(cep){
    let fullAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${this.apiKey}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

      })
    };
    
    return this.http.get(fullAddress)
  }
}
