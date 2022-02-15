import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public token = localStorage.getItem("token")?.toString();
  private urlBase = "http://localhost:3000"
  public headers: any ;

  constructor(private http: HttpClient, private router: Router) { 
    this.createHeader()
  }
  
  createHeader(){
    this.headers;
    if(this.token != null){
      this.headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    }
  }
  
  getUsers(){
    return this.http.get(this.urlBase + "/api/users", {headers: this.headers});
  }

  getMessages(id_user: number){
    this.createHeader()
    return this.http.get(this.urlBase + "/api/users/" + id_user + "/messages/inbox", {headers : this.headers});
  }

  getSentMessages(id_user: number){
    this.createHeader()
    return this.http.get(this.urlBase + "/api/users/" + id_user + "/messages/sent", {headers : this.headers});
  }

  postMessages(body: any){
    this.createHeader()
    return this.http.post(this.urlBase + "/api/users/" + body.id_user + "/messages", body, {headers : this.headers});
  }

  deleteMessage(id_message: number){
    this.createHeader()
    return this.http.delete(this.urlBase + "/api/messages/" + id_message , {headers : this.headers});
  }

  putMessage(body: any){
    this.createHeader()
    return this.http.put(this.urlBase + "/api/messages/read/" + body.id_message , body, {headers : this.headers});
  }
}
