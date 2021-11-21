import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AppServiceService {

  constructor( private http: HttpClient) { }

  baseUrl = 'http://localhost:3000'

  getData() {
    var data = this.http.get( this.baseUrl + '/api/getData');
    console.log('data', data);

    return data;
  }
}
