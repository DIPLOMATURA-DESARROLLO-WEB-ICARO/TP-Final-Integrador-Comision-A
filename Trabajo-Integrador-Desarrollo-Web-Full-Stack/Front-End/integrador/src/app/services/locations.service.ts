import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private urlBase = "https://countriesnow.space/api/v0.1"

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCountries(){
    return this.httpClient.get(this.urlBase + "/countries/")
  }

  getCities(body: any){
    console.log("SERVICIO: country selecionado" , body)
    return this.httpClient.post(this.urlBase + "/countries/cities", body)
  }
}
