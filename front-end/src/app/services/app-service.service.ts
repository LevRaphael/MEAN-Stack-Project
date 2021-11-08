import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor( private http: HttpClient) { }

  baseUrl = 'http://localhost:3000'

  getData() {
    return this.http.get( this.baseUrl + '/api/getData');
  }
}
