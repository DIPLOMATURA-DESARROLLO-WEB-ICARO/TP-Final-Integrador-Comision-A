import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  private id_user: number = 0;
  public messages: any = [];
  
  constructor(private messagesService: MessagesService){
    this.parseJwt(localStorage.getItem("token"));
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
    this.messagesService.getMessages(this.id_user).subscribe((res: any)=> {
      this.messages = res.result
      for (let i = 0; i < this.messages.length; i++) {
        if(this.messages[i].isRead){
          this.messages[i].tooltip = "Marcar como leído"
        } else{  
          this.messages[i].tooltip = "Marcar como no leído"
        }
      }
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

  deleteMsg(id_message: number){
    this.messagesService.deleteMessage(id_message).subscribe((res: any)=> {
      window.location.reload()
    })
  }

  readMsg(message: any){
    message.isRead = !message.isRead
    this.messagesService.putMessage(message).subscribe((res: any)=> {
      // console.log(res)
      this.getMessage()
    })
  }
}
