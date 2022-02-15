import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrarseService {
  url = 'http://localhost:4000/api/users/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}
