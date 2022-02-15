import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private urlBase = "http://localhost:3000"


  constructor(private http: HttpClient, private router: Router) { }


  postSignup(body: any){
    return this.http.post(this.urlBase + "/api/signup", body);
  }
}
