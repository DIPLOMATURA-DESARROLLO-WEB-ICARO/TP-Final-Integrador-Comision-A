import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  public users: any = [];
  private userID: number = 0;
  public newMsg: FormGroup;

  constructor(private messagesService: MessagesService, private formBuilder: FormBuilder) {
    this.parseJwt(localStorage.getItem("token"));
    this.newMsg = this.formBuilder.group({
      message: [''],
      id_receiver: [''],
      id_user:[''],
    })
    this.getUser();
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
      this.userID = JSON.parse(jsonPayload).id;
    }
  };

  getUser(){
    this.messagesService.getUsers().subscribe((res: any) => {
      this.users = res.data.rows;
      console.log(this.users)
    });
  }

  sendMsg(event: Event){
    event.preventDefault();
    this.newMsg.value.id_user = this.userID;
    this.validateForm()
    if(this.newMsg.valid){
      this.messagesService.postMessages(this.newMsg.value).subscribe((res: any) => {
        console.log(res)
        this.clearMsg()
      });
    }
  }

  validateForm(){
    this.newMsg = this.formBuilder.group({
      message: [this.newMsg.value.message, [Validators.required, Validators.maxLength(144)]],
      id_receiver: [this.newMsg.value.id_receiver, Validators.required],
      id_user:[this.newMsg.value.id_user, Validators.required],
    })
  }

  clearMsg(){
    this.newMsg = this.formBuilder.group({
      message: [''],
      id_receiver: [''],
      id_user:[''],
    })
  }
}
