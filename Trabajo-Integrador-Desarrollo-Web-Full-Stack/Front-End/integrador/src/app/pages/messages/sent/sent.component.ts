import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  private id_user: number = 0;
  public messages: any = [];

  constructor(private messagesService: MessagesService){
    this.parseJwt(localStorage.getItem("token"));
    console.log(this.messages)
    this.getMessage()
  }

  ngOnInit(): void {
  }

  parseJwt(token: any){
    if(token != null){
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      this.id_user = JSON.parse(jsonPayload).id;
    }
  };

  getMessage(){
    this.messagesService.getSentMessages(this.id_user).subscribe((res: any)=> {
      console.log(res)
      this.messages = res.result
    })
  }
  
  formatDate(date: string){
    let reformDate;
    reformDate = new Date(date);
    return `${reformDate.getDate()} de 
    ${reformDate.toString().split(" ")[1]} del 
    ${reformDate.getUTCFullYear()} - 
    ${reformDate.getHours()}:${reformDate.getMinutes()}`;
  }

}
