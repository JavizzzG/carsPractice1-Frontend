import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cars {
  
  private API_URL = "http://localhost:8080/api/user"

  constructor(private http: HttpClient){}

  getUsers(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  createCar(data: any): Observable<any> {
    return this.http.post(this.API_URL, data);
  }

}
