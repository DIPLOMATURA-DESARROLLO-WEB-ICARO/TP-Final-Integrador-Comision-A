import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class messageService {
  url = 'http://localhost:4000/api/users/:username/messages';
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(this.url);
  }
  createMessage(message: Message): Observable<any> {
    return this.http.post(this.url, message);
  }
  // getInbox() {
  //   this._messageService.getMessage().subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.inbox = data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
