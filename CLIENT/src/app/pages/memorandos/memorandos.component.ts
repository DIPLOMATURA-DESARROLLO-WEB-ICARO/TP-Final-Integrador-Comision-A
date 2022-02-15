import { Component, Input, OnInit } from '@angular/core';
import { memorandos } from 'src/app/memorandos.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-memorandos',
  templateUrl: './memorandos.component.html',
  styleUrls: ['./memorandos.component.scss'],
})
export class MemorandosComponent implements OnInit {
  urlEnviados =
    'https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/sent';
  urlRecibidos =
    'https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/inbox';

  enviadosData: any;
  recibidosData: any;
  text: any;

  constructor(private formBuilder: FormBuilder) {}

  enviarForm = this.formBuilder.group({
    destinatario: '',
    newMensaje: '',
  });

  ngOnInit(): void {}

  enviados: memorandos[] = [
    { id: 1, senderId: 1, receiverId: 1, text: '' },
    { id: 2, senderId: 1, receiverId: 1, text: '' },
    { id: 4, senderId: 1, receiverId: 1, text: '' },
  ];

  getEnviados() {
    fetch('https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/sent')
      .then((res) => res.json())
      .then((data) => {
        this.recibidosData = [];
        this.enviadosData = data;
        console.log('enviados:', data);
      });
  }

  getRecibidos() {
    fetch(
      'https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/inbox'
    )
      .then((res) => res.json())
      .then((data) => {
        this.enviadosData = [];
        this.recibidosData = data;
        console.log('recibidos:', data);
      });
  }

  newMensaje() {
    this.enviadosData = [];
    this.recibidosData = [];
  }

  submit() {
    fetch('https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages', {
      method: 'POST',
      body: JSON.stringify({
        receiverId: this.enviarForm.value.destinatario,
        text: this.enviarForm.value.newMensaje,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log('error:', e));
  }
}
