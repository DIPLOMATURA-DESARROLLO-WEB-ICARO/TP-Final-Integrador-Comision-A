import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';
import { User } from 'src/app/model/user';
import { messageService } from 'src/app/services/messages.service';
import { RegistrarseService } from 'src/app/services/registrarse.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  constructor(private _messageService: messageService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
