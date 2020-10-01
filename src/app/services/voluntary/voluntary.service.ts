import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {
  apiUrl = environment.baseUrl

  constructor(private http : HttpClient) { }


  register(data){
    let fullAddress = this.apiUrl + '/voluntario';
    return this.http.post(fullAddress, data, {observe: 'response'});
  }
}
